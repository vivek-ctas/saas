// =============================================================================
// ALL FRONTEND TYPES — Single source of truth
// Matches backend schemas exactly (price_cents, is_custom_plan, etc.)
// =============================================================================

// ── Gateway / Billing ─────────────────────────────────────────────────────────

export type Gateway = 'razorpay' | 'stripe';
export type BillingCycle = 'monthly' | 'yearly';

// ── Currency (matches GET /manage-plan/get-currencies response) ───────────────

export interface CurrencyOption {
  id: string;         // "68394c67e652686f23c84031"
  code: string;       // "afn" — lowercase (legacy/alias for country_code)
  country: string;    // "AFGHANISTAN" — uppercase (legacy)
  // New backend fields (preferred):
  country_name?: string; // "Afghanistan" — display name
  country_code?: string; // "afn" — lowercase ISO/code
  status: number;     // 1 = active
}

export interface CurrenciesApiResponse {
  status: number;
  message: string;
  data: CurrencyOption[];
}

// ── Plan limits (from plan.metadata) ─────────────────────────────────────────

export interface PlanLimits {
  max_marketplaces?: number;
  max_listings?: number;
  max_users?: number;
  ai_enabled?: boolean;
  [key: string]: any;
}

// ── Plan (matches GET /manage-plan/public/plans response) ─────────────────────

export interface Plan {
  _id: string;
  name: string;
  slug: string;
  desc: string;
  price_cents: number;      // smallest unit — paise for INR, cents for USD
  currency: string;         // lowercase: "inr" | "usd"
  interval: 'day' | 'week' | 'month' | 'year';
  interval_count: number;
  trial_days: number;
  marketing_features: string[];
  features: string[];
  is_popular: boolean;
  is_custom_plan: boolean;
  cta_label: string;
  sort_order: number;
  status: number;
  metadata: PlanLimits;    // limits + feature flags
}

export interface PlansApiResponse {
  status: number;
  message: string;
  data: Plan[];
}

// ── Checkout form ─────────────────────────────────────────────────────────────

export interface CheckoutFormState {
  full_name: string;
  email: string;
  company_name: string;
  contact_number: string;
  country_name: string;    // display name e.g. "India"
  country_code?: string;   // selected country code e.g. "inr"
}

export type CheckoutStep =
  | 'form'
  | 'summary'
  | 'processing'
  | 'success'
  | 'error';

// ── Step 1 — Create lead ──────────────────────────────────────────────────────

export interface CreateLeadPayload {
  full_name: string;
  email: string;
  company_name: string;
  contact_number: string;
  country_name: string;
  country_code?: string;
  plan_id: string;
  billing_cycle: BillingCycle;
  gateway: Gateway;
}

export interface CreateLeadData {
  lead_id: string;
}

export interface CreateLeadResponse {
  status: number;
  message: string;
  data: CreateLeadData;
}

// ── Step 2a — Razorpay create order ──────────────────────────────────────────

export interface CreateRazorpayOrderData {
  payment_id: string;
  razorpay_order_id: string;
  amount: number;
  currency: string;
  plan_name: string;
  trial_days: number;
}

export interface CreateRazorpayOrderResponse {
  status: number;
  message: string;
  data: CreateRazorpayOrderData;
}

// ── Step 3a — Razorpay verify ─────────────────────────────────────────────────

export interface VerifyRazorpayPayload {
  lead_id: string;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// ── Step 2b — Stripe create session ──────────────────────────────────────────

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

// ── Step 3b — Stripe verify after redirect ────────────────────────────────────

export interface VerifyStripePayload {
  lead_id: string;
  session_id: string;
}

// ── Shared activation result ──────────────────────────────────────────────────

export interface ActivationData {
  subscription_id: string;
  expires_at: string;
}

export interface ActivationResponse {
  status: number;
  message: string;
  data: ActivationData;
}

// ── Razorpay SDK types (loaded from CDN) ──────────────────────────────────────

export interface RazorpayDisplayConfig {
  hide?: string[];
  preferences?: {
    show_default_blocks?: boolean;
  };
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
  /** Display config — controls which payment methods are shown.
   *  Leave unset (or set show_default_blocks: true) to enable ALL methods:
   *  UPI, Cards, Net Banking, Wallets, EMI, etc.
   */
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

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open(): void; close(): void };
  }
}
