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

// ── STEP 1: Create Guest Lead ─────────────────────────────────────────────────
//
// POST /v1/public-checkout/lead
// Stores WHO wants to buy WHICH plan. No payment here.
// Returns lead_id used by all subsequent steps.

export async function createGuestLead(
  payload: CreateLeadPayload,
): Promise<{ data: CreateLeadData | null; error: string | null }> {
  const { data, error } = await apiFetch<CreateLeadResponse>('/v1/public-checkout/lead', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return { data: data?.data ?? null, error };
}

// ── STEP 2a: Razorpay — Create Order ─────────────────────────────────────────
//
// POST /v1/public-checkout/razorpay/create-order
// Body: { lead_id }
// Returns razorpay_order_id + amount (paise) → open Razorpay Checkout SDK.

export async function createRazorpayOrder(
  leadId: string,
): Promise<{ data: CreateRazorpayOrderData | null; error: string | null }> {
  const { data, error } = await apiFetch<CreateRazorpayOrderResponse>(
    '/v1/public-checkout/razorpay/create-order',
    { method: 'POST', body: JSON.stringify({ lead_id: leadId }) },
  );
  return { data: data?.data ?? null, error };
}

// ── STEP 3a: Razorpay — Verify & Activate ────────────────────────────────────
//
// POST /v1/public-checkout/razorpay/verify
// Backend verifies HMAC-SHA256 signature, marks payment SUCCESS,
// creates tbl_user_plans record via _activateUserPlan().
// Returns { user_plan_id, expired_at, plan_name }.

export async function verifyRazorpayPayment(
  payload: VerifyRazorpayPayload,
): Promise<{ data: ActivationData | null; error: string | null }> {
  const { data, error } = await apiFetch<ActivationResponse>(
    '/v1/public-checkout/razorpay/verify',
    { method: 'POST', body: JSON.stringify(payload) },
  );
  return { data: data?.data ?? null, error };
}

// ── Razorpay: Fetch activation summary on success page ────────────────────────
//
// NEW: Previously the success page read plan_name & expired_at from URL params —
// those are tamper-able by anyone who manually edits the URL.
// Now the success page calls this endpoint which reads from the database.
//
// Requires a new backend endpoint:
//   GET /v1/public-checkout/activation-summary/:leadId
//   Returns: { seller_id, email, plan_name, expired_at }

export async function verifyRazorpayActivation(
  leadId: string,
): Promise<{ data: ActivationData | null; error: string | null }> {
  const { data, error } = await apiFetch<ActivationResponse>(
    `/v1/public-checkout/activation-summary/${encodeURIComponent(leadId)}`,
  );
  return { data: data?.data ?? null, error };
}
// ── STEP 2b: Stripe — Create Checkout Session ─────────────────────────────────
//
// POST /v1/public-checkout/stripe/create-session
// Body: { lead_id, success_url, cancel_url }
// Returns checkout_url — redirect user here. Stripe appends ?session_id=cs_xxx.

export async function createStripeSession(
  leadId: string,
): Promise<{ data: CreateStripeSessionData | null; error: string | null }> {
  // Stripe redirects back with session_id appended by Stripe itself.
  // We pass lead_id in success_url so the success page can verify.
  const successUrl = `${window.location.origin}/checkout/success?gateway=stripe&lead_id=${encodeURIComponent(leadId)}`;
  const cancelUrl = `${window.location.origin}/checkout/cancel?lead_id=${encodeURIComponent(leadId)}`;

  const { data, error } = await apiFetch<CreateStripeSessionResponse>(
    '/v1/public-checkout/stripe/create-session',
    {
      method: 'POST',
      body: JSON.stringify({
        lead_id: leadId,
        success_url: successUrl,
        cancel_url: cancelUrl,
      }),
    },
  );
  return { data: data?.data ?? null, error };
}

// ── STEP 3b: Stripe — Verify Session (after redirect) ─────────────────────────
//
// POST /v1/public-checkout/stripe/verify-session
// Body: { lead_id, session_id }   ← MUST be "session_id", not "stripe_session_id"
// Backend calls Stripe API, confirms payment_status === 'paid',
// then creates tbl_user_plans via _activateUserPlan().
// Returns { user_plan_id, expired_at, plan_name }.

export async function verifyStripeSession(
  payload: VerifyStripePayload,
): Promise<{ data: ActivationData | null; error: string | null }> {
  const { data, error } = await apiFetch<ActivationResponse>(
    '/v1/public-checkout/stripe/verify-session',
    { method: 'POST', body: JSON.stringify(payload) },
  );
  return { data: data?.data ?? null, error };
}