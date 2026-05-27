// ── Re-export existing types (unchanged) ─────────────────────────────────

export type { RazorpayPlan, PlansApiResponse, RazorpayOptions, RazorpayHandlerResponse } from './payment.types';

// ── Gateway selection ─────────────────────────────────────────────────────

export type Gateway      = 'razorpay' | 'stripe';
export type BillingCycle = 'monthly'  | 'yearly';

// ── Step 1 — Lead creation ────────────────────────────────────────────────

export interface CreateLeadPayload {
  full_name:      string;
  email:          string;
  company_name:   string;
  contact_number: string;
  country:        string;      // ISO-3166-1 alpha-2  e.g. "IN", "US"
  country_name:   string;      // e.g. "India"
  plan_id:        string;
  billing_cycle:  BillingCycle;
  gateway:        Gateway;
}

export interface CreateLeadData {
  lead_id:    string;
  plan_name:  string;
  plan_price: number;          // INR or USD (NOT paise/cents)
  currency:   string;          // "INR" | "USD"
  trial_days: number;
  gateway:    Gateway;
}

export interface CreateLeadResponse {
  status:  number;
  message: string;
  data:    CreateLeadData;
}

// ── Step 2a — Razorpay create order ──────────────────────────────────────

export interface CreateGuestRazorpayOrderData {
  razorpay_order_id: string;
  amount:            number;   // paise
  currency:          string;
  plan_name:         string;
  key_id:            string;   // Razorpay key to open Checkout
}

export interface CreateGuestRazorpayOrderResponse {
  status:  number;
  message: string;
  data:    CreateGuestRazorpayOrderData;
}

// ── Step 3a — Razorpay verify ─────────────────────────────────────────────

export interface VerifyGuestRazorpayPayload {
  lead_id:             string;
  razorpay_order_id:   string;
  razorpay_payment_id: string;
  razorpay_signature:  string;
}

// ── Step 2b — Stripe create session ──────────────────────────────────────

export interface CreateStripeSessionData {
  stripe_session_id: string;
  checkout_url:      string;
}

export interface CreateStripeSessionResponse {
  status:  number;
  message: string;
  data:    CreateStripeSessionData;
}

// ── Step 3b — Stripe verify (after redirect) ──────────────────────────────

export interface VerifyStripePayload {
  lead_id:          string;
  stripe_session_id: string;
}

// ── Shared activation result ──────────────────────────────────────────────

export interface ActivationData {
  subscription_id: string;
  plan_name:       string;
  expires_at:      string;
  email:           string;
}

export interface ActivationResponse {
  status:  number;
  message: string;
  data:    ActivationData;
}

// ── Country detection ─────────────────────────────────────────────────────

export interface CountryInfo {
  code:        string;   // "IN"
  name:        string;   // "India"
  isIndia:     boolean;
  defaultGateway: Gateway;
}

// ── UI checkout state (used by useCheckout hook) ──────────────────────────

export interface CheckoutFormState {
  full_name:      string;
  email:          string;
  company_name:   string;
  contact_number: string;
  country:        string;
  country_name:   string;
}

export type CheckoutStep =
  | 'form'        // Step 1: collect user info
  | 'summary'     // Step 2: show payment summary + gateway selection
  | 'processing'  // Step 3: payment in progress
  | 'success'     // Step 4: payment done
  | 'error';      // Any step failed

declare global {
  interface Window {
    Razorpay: new (options: import('./payment.types').RazorpayOptions) => { open(): void; close(): void };
  }
}
