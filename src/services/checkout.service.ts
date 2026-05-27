import { apiFetch } from '@/lib/api';
import type {
  CreateLeadPayload,
  CreateLeadResponse,
  CreateLeadData,
  CreateGuestRazorpayOrderData,
  CreateGuestRazorpayOrderResponse,
  VerifyGuestRazorpayPayload,
  CreateStripeSessionData,
  CreateStripeSessionResponse,
  VerifyStripePayload,
  ActivationData,
  ActivationResponse,
  CountryInfo,
} from '@/types/checkout.types';

// ── STEP 1: Create Lead ───────────────────────────────────────────────────

/**
 * Saves user info + selected plan as a guest lead in the DB.
 * Returns lead_id used by all subsequent steps.
 * Endpoint: POST /v1/public-checkout/lead
 */
export async function createGuestLead(
  payload: CreateLeadPayload,
): Promise<{ data: CreateLeadData | null; error: string | null }> {
  const { data, error } = await apiFetch<CreateLeadResponse>('/v1/public-checkout/lead', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return { data: data?.data ?? null, error };
}

// ── STEP 2a: Razorpay — create order ─────────────────────────────────────

/**
 * Creates a Razorpay order for the given lead.
 * Returns razorpay_order_id + amount (paise) to open Razorpay Checkout.
 * Endpoint: POST /v1/public-checkout/razorpay/create-order
 */
export async function createGuestRazorpayOrder(
  leadId: string,
): Promise<{ data: CreateGuestRazorpayOrderData | null; error: string | null }> {
  const { data, error } = await apiFetch<CreateGuestRazorpayOrderResponse>(
    '/v1/public-checkout/razorpay/create-order',
    { method: 'POST', body: JSON.stringify({ lead_id: leadId }) },
  );
  return { data: data?.data ?? null, error };
}

// ── STEP 3a: Razorpay — verify & activate ────────────────────────────────

/**
 * Sends Razorpay handler response to backend for HMAC verification.
 * On success, backend creates GuestSubscription and returns activation info.
 * Endpoint: POST /v1/public-checkout/razorpay/verify
 */
export async function verifyGuestRazorpayPayment(
  payload: VerifyGuestRazorpayPayload,
): Promise<{ data: ActivationData | null; error: string | null }> {
  const { data, error } = await apiFetch<ActivationResponse>(
    '/v1/public-checkout/razorpay/verify',
    { method: 'POST', body: JSON.stringify(payload) },
  );
  return { data: data?.data ?? null, error };
}

// ── STEP 2b: Stripe — create checkout session ─────────────────────────────

/**
 * Creates a Stripe Checkout Session.
 * Returns checkout_url → frontend redirects user to this URL.
 * Endpoint: POST /v1/public-checkout/stripe/create-session
 */
export async function createStripeSession(
  leadId: string,
): Promise<{ data: CreateStripeSessionData | null; error: string | null }> {
  const { data, error } = await apiFetch<CreateStripeSessionResponse>(
    '/v1/public-checkout/stripe/create-session',
    { method: 'POST', body: JSON.stringify({ lead_id: leadId }) },
  );
  return { data: data?.data ?? null, error };
}

// ── STEP 3b: Stripe — verify after redirect ───────────────────────────────

/**
 * Called by /checkout/success page after Stripe redirects back.
 * Backend verifies session with Stripe API and activates subscription.
 * Endpoint: POST /v1/public-checkout/stripe/verify
 */
export async function verifyStripeSession(
  payload: VerifyStripePayload,
): Promise<{ data: ActivationData | null; error: string | null }> {
  const { data, error } = await apiFetch<ActivationResponse>(
    '/v1/public-checkout/stripe/verify',
    { method: 'POST', body: JSON.stringify(payload) },
  );
  return { data: data?.data ?? null, error };
}

// ── Country detection ─────────────────────────────────────────────────────

/**
 * Detects user country via ipapi.co (free, no key needed up to 1000 req/day).
 * Falls back to 'US' on error.
 * Used to auto-select gateway: India → Razorpay, others → Stripe.
 */
export async function detectUserCountry(): Promise<CountryInfo> {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const json = await res.json();
    const code = (json?.country_code as string)?.toUpperCase() || 'US';
    const name = (json?.country_name as string) || 'United States';
    return {
      code,
      name,
      isIndia: code === 'IN',
      defaultGateway: code === 'IN' ? 'razorpay' : 'stripe',
    };
  } catch {
    return { code: 'US', name: 'United States', isIndia: false, defaultGateway: 'stripe' };
  }
}
