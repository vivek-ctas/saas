// =============================================================================
// ALL FRONTEND TYPES — Single source of truth
// Aligned exactly with backend schemas (public-checkout.service.ts)
// =============================================================================

// ── Gateway / Billing ─────────────────────────────────────────────────────────

export type Gateway = 'razorpay' | 'stripe';
export type BillingCycle = 'monthly' | 'yearly';

// ── Currency (matches GET /manage-plan/get-currencies) ────────────────────────

export interface CurrencyOption {
  id: string;  // ObjectId
  code: string;  // "inr", "usd" — lowercase
  country: string;  // "INDIA" — uppercase (legacy field)
  country_name?: string; // "India" — display name
  country_code?: string; // "inr" — alias for code
  status: number;  // 1 = active
}

export interface CurrenciesApiResponse {
  status: number;
  message: string;
  data: CurrencyOption[];
}

// ── Plan (matches GET /manage-plan/public/plans) ──────────────────────────────

export interface Plan {
  _id: string;
  name: string;
  desc: string;
  price: number;
  is_popular: boolean;
  currency: string;   // lowercase: "inr" | "usd"
  interval: 'day' | 'week' | 'month' | 'year';
  trial_days: number;
  marketing_features: string[];
  is_custom_plan: boolean;
}

export interface PlansApiResponse {
  status: number;
  message: string;
  data: Plan[];
}

// ── Checkout form state ───────────────────────────────────────────────────────

export interface CheckoutFormState {
  // full_name: string;
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
  contact_number: string;
  currency_id: string;   // tbl_currencies._id
  country_name: string;  // e.g. "India" — display only
}

export type CheckoutStep =
  | 'form'        // Step 1: collect user info
  | 'summary'     // Step 2: payment summary + gateway selection
  | 'processing'  // Step 3: payment in progress
  | 'success'     // Step 4: done
  | 'error';

// ── Step 1: Create Guest Lead ─────────────────────────────────────────────────
//
// Backend: POST /v1/public-checkout/lead
// Body fields match createLead() in public-checkout.service.ts EXACTLY.

export interface CreateLeadPayload {
  // full_name: string;
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
  contact_number: string;
  currency_id: string;  // ISO-like code, stored as-is on GuestLead
  country_name: string;   // stored as-is
  plan_id: string;
  billing_cycle: BillingCycle;
}

// Backend returns: createResponse(200, 'Details saved', { lead_id: lead._id })
export interface CreateLeadData {
  lead_id: string;
}

export interface CreateLeadResponse {
  status: number;
  message: string;
  data: CreateLeadData;
}

// ── Step 2a: Razorpay — create order ─────────────────────────────────────────
//
// Backend: POST /v1/public-checkout/razorpay/create-order
// Returns: { payment_id, razorpay_order_id, amount, currency, plan_name, trial_days }

export interface CreateRazorpayOrderData {
  payment_id: string;
  razorpay_order_id: string;
  amount: number;   // paise
  currency: string;   // "INR"
  plan_name: string;
  trial_days: number;
}

export interface CreateRazorpayOrderResponse {
  status: number;
  message: string;
  data: CreateRazorpayOrderData;
}

// ── Step 3a: Razorpay — verify & activate ────────────────────────────────────
//
// Backend: POST /v1/public-checkout/razorpay/verify
// Returns: { user_plan_id, expires_at, plan_name }

export interface VerifyRazorpayPayload {
  lead_id: string;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// ── Step 2b: Stripe — create checkout session ─────────────────────────────────
//
// Backend: POST /v1/public-checkout/stripe/create-session
// Returns: { payment_id, session_id, checkout_url }

export interface CreateStripeSessionData {
  payment_id: string;
  session_id: string;
  checkout_url: string;
}

export interface CreateStripeSessionResponse {
  status: number;
  message: string;
  data: CreateStripeSessionData;
}

// ── Step 3b: Stripe — verify session after redirect ───────────────────────────
//
// Backend: POST /v1/public-checkout/stripe/verify-session
// Body: { lead_id, session_id }   ← field is session_id (NOT stripe_session_id)

export interface VerifyStripePayload {
  lead_id: string;
  session_id: string;   // Stripe checkout session ID (cs_xxx)
}

// ── Shared activation result ──────────────────────────────────────────────────
//
// Backend _activateUserPlan() returns the UserPlan document.
// Controller wraps with createResponse: { user_plan_id, expires_at, plan_name }

export interface ActivationData {
  user_plan_id: string;
  expires_at: string;   // ISO 8601
  plan_name: string;
}

export interface ActivationResponse {
  status: number;
  message: string;
  data: ActivationData;
}

// ── Razorpay SDK types ────────────────────────────────────────────────────────

export interface RazorpayDisplayConfig {
  hide?: string[];
  preferences?: { show_default_blocks?: boolean };
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  config?: {
    display?: RazorpayDisplayConfig;
  };
  theme?: { color?: string };
  handler: (response: RazorpayHandlerResponse) => void;
  modal?: { ondismiss?: () => void };
}

export interface RazorpayHandlerResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// Re-export for legacy imports
export type { RazorpayOptions as RazorpayPlan };

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open(): void; close(): void };
  }
}
