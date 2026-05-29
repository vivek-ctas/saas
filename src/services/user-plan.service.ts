import { apiFetch } from '@/lib/api';
import type {
  Plan,
  PlansApiResponse,
} from '@/types/user-plan.types';

// ── Plans ─────────────────────────────────────────────────────────────────

/**
 * Fetch all active pricing plans for the pricing page.
 * Public — no auth required.
 * Endpoint: GET /manage-plan/plan-list
 */
export async function fetchPublicPlans(): Promise<{ plans: Plan[]; error: string | null }> {
  const { data, error } = await apiFetch<PlansApiResponse>('/v1/manage-plan/plan-list');
  return { plans: data?.data ?? [], error };
} 







// // ── Payments ──────────────────────────────────────────────────────────────

// /**
//  * STEP 1 — Create a Razorpay order for the selected plan.
//  * Requires JWT token (user must be logged in).
//  * Endpoint: POST /payments/create-order
//  */
// export async function createRazorpayOrder(
//   payload: CreateOrderPayload,
// ): Promise<{ data: CreateOrderResponse['data'] | null; error: string | null }> {
//   const token =
//     typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

//   const { data, error } = await apiFetch<CreateOrderResponse>('/v1/payments/create-order', {
//     method: 'POST',
//     headers: token ? { Authorization: `Bearer ${token}` } : {},
//     body: JSON.stringify(payload),
//   });

//   return { data: data?.data ?? null, error };
// }

// /**
//  * STEP 2 — Send Razorpay payment result to backend for verification.
//  * Backend verifies HMAC-SHA256 signature and activates the user's plan.
//  * Endpoint: POST /payments/verify
//  */
// export async function verifyRazorpayPayment(
//   payload: VerifyPaymentPayload,
// ): Promise<{ data: VerifyPaymentResponse['data'] | null; error: string | null }> {
//   const token =
//     typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

//   const { data, error } = await apiFetch<VerifyPaymentResponse>('/v1/payments/verify', {
//     method: 'POST',
//     headers: token ? { Authorization: `Bearer ${token}` } : {},
//     body: JSON.stringify(payload),
//   });

//   return { data: data?.data ?? null, error };
// }
