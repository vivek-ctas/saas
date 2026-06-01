import { apiFetch } from '@/lib/api';
import type {
  CreateLeadPayload,
  CreateLeadResponse,
  CreateLeadData,
  CreateRazorpayOrderData,
  CreateRazorpayOrderResponse,
  VerifyRazorpayPayload,
  CreateStripeSessionData,
  CreateStripeSessionResponse,
  VerifyStripePayload,
  ActivationData,
  ActivationResponse,
} from '@/types';

// ── STEP 1: Create Lead ────────────────────────────────────────────────────────

/**
 * Saves user info + selected plan as a GuestLead in the DB.
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

// ── STEP 2a: Razorpay — Create Order ──────────────────────────────────────────

/**
 * Creates a Razorpay order for the given lead.
 * Returns razorpay_order_id + amount (paise) to open Razorpay Checkout.
 * Endpoint: POST /v1/public-checkout/razorpay/create-order
 */
export async function createRazorpayOrder(
  leadId: string,
): Promise<{ data: CreateRazorpayOrderData | null; error: string | null }> {
  const { data, error } = await apiFetch<CreateRazorpayOrderResponse>(
    '/v1/public-checkout/razorpay/create-order',
    { method: 'POST', body: JSON.stringify({ lead_id: leadId }) },
  );
  return { data: data?.data ?? null, error };
}

// ── STEP 3a: Razorpay — Verify & Activate ─────────────────────────────────────

/**
 * Sends Razorpay payment result to backend for HMAC verification.
 * On success, backend creates GuestSubscription.
 * Endpoint: POST /v1/public-checkout/razorpay/verify
 */
export async function verifyRazorpayPayment(
  payload: VerifyRazorpayPayload,
): Promise<{ data: ActivationData | null; error: string | null }> {
  const { data, error } = await apiFetch<ActivationResponse>(
    '/v1/public-checkout/razorpay/verify',
    { method: 'POST', body: JSON.stringify(payload) },
  );
  return { data: data?.data ?? null, error };
}

// ── STEP 2b: Stripe — Create Checkout Session ──────────────────────────────────

/**
 * Creates a Stripe Checkout Session.
 * Returns checkout_url — redirect user to this URL.
 * Stripe will append ?session_id=cs_xxx to your success_url.
 * Endpoint: POST /v1/public-checkout/stripe/create-session
 */
export async function createStripeSession(
  leadId: string,
): Promise<{ data: CreateStripeSessionData | null; error: string | null }> {
  const successUrl = `${window.location.origin}/checkout/success`;
  const cancelUrl = `${window.location.origin}/checkout/cancel`;

  const { data, error } = await apiFetch<CreateStripeSessionResponse>(
    '/v1/public-checkout/stripe/create-session',
    {
      method: 'POST',
      body: JSON.stringify({
        lead_id: leadId,
        success_url: `${successUrl}?lead_id=${leadId}`,
        cancel_url: `${cancelUrl}?lead_id=${leadId}`,
      }),
    },
  );
  return { data: data?.data ?? null, error };
}

// ── STEP 3b: Stripe — Verify Session (after redirect) ─────────────────────────

/**
 * Called by /checkout/success after Stripe redirects back.
 * Backend verifies session with Stripe API and activates subscription.
 * Endpoint: POST /v1/public-checkout/stripe/verify-session
 *
 * Note: field name is `session_id` (not `stripe_session_id`) — matches backend exactly.
 */
export async function verifyStripeSession(
  payload: VerifyStripePayload,
): Promise<{ data: ActivationData | null; error: string | null }> {
  const { data, error } = await apiFetch<ActivationResponse>(
    '/v1/public-checkout/stripe/verify-session',
    { method: 'POST', body: JSON.stringify(payload) },
  );
  return { data: data?.data ?? null, error };
}