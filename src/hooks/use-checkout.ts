'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useRazorpay } from '@/hooks/use-razorpay';
import {
  createGuestLead,
  createGuestRazorpayOrder,
  verifyGuestRazorpayPayment,
  createStripeSession,
} from '@/services/checkout.service';
import type {
  CheckoutFormState,
  CheckoutStep,
  Gateway,
  BillingCycle,
  CreateLeadData,
  ActivationData,
} from '@/types/checkout.types';
import type { Plan } from '@/types/user-plan.types';


const EMPTY_FORM: CheckoutFormState = {
  full_name: '',
  email: '',
  company_name: '',
  contact_number: '',
  country: '',
  country_name: '',
};

export interface UseCheckoutResult {
  // State
  step: CheckoutStep;
  form: CheckoutFormState;
  gateway: Gateway;
  billingCycle: BillingCycle;
  leadData: CreateLeadData | null;
  activationData: ActivationData | null;
  error: string | null;
  loading: boolean;

  // Actions
  setForm: (field: keyof CheckoutFormState, value: string) => void;
  setGateway: (g: Gateway) => void;
  setBillingCycle: (c: BillingCycle) => void;
  submitForm: (plan: Plan) => Promise<void>;   // Step 1 → save lead
  startPayment: (plan: Plan) => Promise<void>;   // Step 2 → open gateway
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

  const setForm = useCallback((field: keyof CheckoutFormState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    setError(null);
  }, []);

  // ── STEP 1: Validate form + create lead ───────────────────────────────

  const submitForm = useCallback(async (plan: Plan) => {
    // Client-side validation
    const { full_name, email, company_name, contact_number, country, country_name } = form;
    if (!full_name.trim()) return setError('Please enter your full name.');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError('Please enter a valid email address.');
    if (!company_name.trim()) return setError('Please enter your company name.');
    if (!contact_number.trim()) return setError('Please enter your contact number.');
    if (!country.trim()) return setError('Please select your country.');

    setLoading(true);
    setError(null);

    const { data, error: apiErr } = await createGuestLead({
      full_name: full_name.trim(),
      email: email.trim().toLowerCase(),
      company_name: company_name.trim(),
      contact_number: contact_number.trim(),
      country: country.trim().toUpperCase(),
      country_name: country_name.trim(),
      plan_id: plan._id,
      billing_cycle: billingCycle,
      gateway,
    });

    setLoading(false);

    if (apiErr || !data) return setError(apiErr || 'Could not save your details. Please try again.');

    setLeadData(data);
    setStep('summary');
  }, [form, gateway, billingCycle]);

  // ── STEP 2: Open payment gateway ──────────────────────────────────────

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
  }, [leadData, gateway]);

  // ── Razorpay flow ──────────────────────────────────────────────────────

  async function _handleRazorpay(plan: Plan) {
    const { data: order, error: orderErr } = await createGuestRazorpayOrder(leadData!.lead_id);
    if (orderErr || !order) throw new Error(orderErr || 'Could not create order. Please try again.');
    // Open Razorpay Checkout SDK (handles UPI / GPay / PhonePe / cards)
    await openCheckout({
      key: order.key_id,
      amount: order.amount,
      currency: order.currency,
      name: 'Ctasis',
      description: `${plan.name} Plan${leadData!.trial_days > 0 ? ` — ${leadData!.trial_days}-day trial` : ''}`,
      order_id: order.razorpay_order_id,
      prefill: {
        name: form.full_name,
        email: form.email,
        contact: form.contact_number,
      },
      theme: { color: '#6366f1' },

      handler: async (response) => {
        try {
          const { data: activation, error: verifyErr } = await verifyGuestRazorpayPayment({
            lead_id: leadData!.lead_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyErr || !activation) throw new Error(verifyErr || 'Verification failed.');

          setActivationData(activation);
          setStep('success');
          setLoading(false);

          // Navigate to success page with context
          router.push(
            `/checkout/success?plan=${plan.slug}&email=${encodeURIComponent(activation.email)}&gateway=razorpay`,
          );
        } catch (e: any) {
          setError(e?.message || 'Payment verification failed. Contact support.');
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

  // ── Stripe flow ────────────────────────────────────────────────────────

  async function _handleStripe() {
    const { data: session, error: sessionErr } = await createStripeSession(leadData!.lead_id);
    if (sessionErr || !session) throw new Error(sessionErr || 'Could not create payment session.');

    // Redirect to Stripe hosted checkout
    // Stripe will redirect back to /checkout/success?session_id=...&lead_id=...
    window.location.href = session.checkout_url;
  }

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
    setForm, setGateway, setBillingCycle, submitForm, startPayment, reset,
  };
}
