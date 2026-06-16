'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useRazorpay } from '@/hooks/use-razorpay';
import {
  createGuestLead,
  createRazorpayOrder,
  verifyRazorpayPayment,
  createStripeSession,
} from '@/services/checkout.service';
import type {
  CheckoutFormState,
  CheckoutStep,
  Gateway,
  BillingCycle,
  CreateLeadData,
  ActivationData,
  Plan,
} from '@/types';

const EMPTY_FORM: CheckoutFormState = {
  first_name: '',
  last_name: '',
  email: '',
  company_name: '',
  contact_number: '',
  currency_id: '',
  country_name: '',
};

export interface UseCheckoutResult {
  step: CheckoutStep;
  form: CheckoutFormState;
  gateway: Gateway;
  billingCycle: BillingCycle;
  leadData: CreateLeadData | null;
  activationData: ActivationData | null;
  error: string | null;
  loading: boolean;

  setForm: (field: keyof CheckoutFormState, value: string) => void;
  setGateway: (g: Gateway) => void;
  setBillingCycle: (c: BillingCycle) => void;
  submitForm: (plan: Plan) => Promise<void>;
  startPayment: (plan: Plan) => Promise<void>;
  clearError: () => void;
  reset: () => void;
}

export function useCheckout(initialGateway: Gateway = 'razorpay'): UseCheckoutResult {
  const router = useRouter();
  const { openCheckout } = useRazorpay();

  const [step, setStep] = useState<CheckoutStep>('form');
  const [form, setFormState] = useState<CheckoutFormState>(EMPTY_FORM);
  const [gateway, setGateway] = useState<Gateway>(initialGateway);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [leadData, setLeadData] = useState<CreateLeadData | null>(null);
  const [activationData, setActivationData] = useState<ActivationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // ── Form field setter ───────────────────────────────────────────────────────

  const setForm = useCallback((field: keyof CheckoutFormState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));

  }, []);
  // ── Clear API error (called from modal dismiss button) ──────────────────────

  const clearError = useCallback(() => setError(null), []);
  // ── STEP 1: Create GuestLead ───────────────────────────────
  //
  // POST /v1/public-checkout/lead
  // On success → moves to 'summary' step and holds lead_id for next steps.

  const submitForm = useCallback(async (plan: Plan) => {
    const { first_name, last_name, email, company_name, contact_number, currency_id } = form;
    setLoading(true);
    setError(null);

    const { data, error: apiErr } = await createGuestLead({
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      email: email.trim().toLowerCase(),
      company_name: company_name.trim(),
      contact_number: contact_number.trim(),
      currency_id: currency_id.trim(),
      country_name: form.country_name.trim(),
      plan_id: plan._id,
      billing_cycle: billingCycle,
    });

    setLoading(false);

    if (apiErr || !data)
      return setError(apiErr || 'Could not save your details. Please try again.');

    // CHANGED: handle payment_allowed: false (existing active subscription)
    if (data.payment_allowed === false) {
      return setError(
        'You already have an active subscription. Please log in to manage your plan.',
      );
    }
    setLeadData(data);
    setStep('summary');
  }, [form, billingCycle]);

  // ── STEP 2: Open payment gateway ────────────────────────────────────────────

  const startPayment = useCallback(async (plan: Plan) => {
    if (!leadData) return setError('Lead data missing. Please go back and re-submit.');

    setLoading(true);
    setError(null);
    setStep('processing');

    try {
      if (gateway === 'razorpay') {
        await _handleRazorpay(plan);
      } else {
        await _handleStripe();
      }
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
      setStep('summary');
      setLoading(false);
    }
  }, [leadData, gateway, form]);

  // ── Razorpay flow ────────────────────────────────────────────────────────────
  //
  // 1. Create Razorpay order on backend (gets amount in paise + order_id)
  // 2. Open Razorpay checkout SDK
  // 3. On payment success → send razorpay_signature to backend for HMAC verify
  // 4. Backend marks payment SUCCESS + creates tbl_user_plans
  // 5. Redirect to /checkout/success

  async function _handleRazorpay(plan: Plan) {
    const { data: order, error: orderErr } = await createRazorpayOrder(leadData!.lead_id);
    if (orderErr || !order)
      throw new Error(orderErr || 'Could not create Razorpay order. Please try again.');
    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '';

    await openCheckout({
      key: razorpayKeyId,
      amount: order.amount,          // paise — Razorpay SDK expects paise
      currency: order.currency,        // "INR"
      name: 'Ctasis',
      description: `${plan.name} Plan${order.trial_days > 0 ? ` — ${order.trial_days}-day trial` : ''}`,
      order_id: order.razorpay_order_id,
      prefill: {
        name: `${form.first_name} ${form.last_name}`,
        email: form.email,
        contact: form.contact_number,
      },
      // Show ALL payment methods: UPI, Cards, Net Banking, Wallets, EMI
      config: {
        display: {
          hide: [],
          preferences: { show_default_blocks: true },
        },
      },
      theme: { color: '#6366f1' },

      handler: async (response) => {
        try {
          // HMAC verification on backend — never trust frontend for this
          const { data: activation, error: verifyErr } = await verifyRazorpayPayment({
            lead_id: leadData!.lead_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyErr || !activation)
            throw new Error(verifyErr || 'Payment verification failed.');

          setActivationData(activation);
          setStep('success');
          setLoading(false);

          // Pass expired_at so success page can display it without an extra API call
          router.push(
            `/checkout/success?gateway=razorpay&lead_id=${encodeURIComponent(leadData!.lead_id)}`,
          );
        } catch (e: any) {
          setError(e?.message || 'Payment verification failed. Please contact support.');
          setStep('error');
          setLoading(false);
        }
      },

      modal: {
        ondismiss: () => {
          setStep('summary');
          setLoading(false);
        },
      },
    });
  }

  // ── Stripe flow ──────────────────────────────────────────────────────────────
  //
  // 1. Create Stripe Checkout Session on backend
  // 2. Redirect user to Stripe hosted page (checkout_url)
  // 3. Stripe redirects to /checkout/success?session_id=cs_xxx&lead_id=xxx
  // 4. Success page calls verifyStripeSession() with { lead_id, session_id }
  // 5. Backend verifies with Stripe API + creates tbl_user_plans


  async function _handleStripe() {
    const { data: session, error: sessionErr } = await createStripeSession(leadData!.lead_id);
    if (sessionErr || !session)
      throw new Error(sessionErr || 'Could not create payment session.');

    // Hard redirect — Stripe will append ?session_id=cs_xxx to our success_url
    window.location.href = session.checkout_url;
  }

  // ── Reset ────────────────────────────────────────────────────────────────────

  const reset = useCallback(() => {
    setStep('form');
    setFormState(EMPTY_FORM);
    setLeadData(null);
    setActivationData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    step, form, gateway, billingCycle, leadData, activationData, error, loading,
    setForm, setGateway, setBillingCycle, submitForm, startPayment, clearError, reset,
  };
}
