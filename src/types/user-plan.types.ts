export interface PlanMetadata {
  max_marketplaces?: number;
  max_listings?: number;
  max_users?: number;
  ai_enabled?: boolean;

  [key: string]: any;
}

export interface Plan {
  _id: string;
  name: string;
  slug: string;
  desc: string;

  price_cents: number;
  currency: string;

  interval: 'day' | 'week' | 'month' | 'year';
  interval_count: number;

  trial_days: number;

  marketing_features: string[];

  features: string[]; // ObjectId[] returned as strings

  is_popular: boolean;

  cta_label: string;

  sort_order: number;

  status: number; // 0=inactive, 1=active, 2=deleted

  is_custom_plan: boolean;

  metadata: PlanMetadata;

  planIdStr: string;
}

export interface PlansApiResponse {
  status: number;
  message: string;
  data: Plan[];
}




// // ── Plan from backend API ─────────────────────────────────────────────────

// export interface RazorpayPlan {
//   _id: string;
//   name: string;
//   slug: string;
//   description: string;
//   monthly_price: number;        // In ₹ rupees — NOT paise
//   yearly_price: number;
//   currency: string;             // "INR"
//   duration_days: number;        // 30 = monthly, 365 = yearly
//   trial_days: number;           // 0 = no trial
//   features: string[];           // ["10 marketplaces", "Real-time sync", ...]
//   is_popular: boolean;
//   is_custom_pricing: boolean;   // true = "Contact Sales"
//   cta_label: string;            // "Start Free Trial" | "Buy Now" | "Contact Sales"
//   sort_order: number;
//   status: number;               // 1 = active
// }

// // ── API response wrapper (matches backend createResponse shape) ───────────

// export interface PlansApiResponse {
//   status: number;
//   message: string;
//   data: RazorpayPlan[];
// }

// // ── Create Razorpay order ─────────────────────────────────────────────────

// export interface CreateOrderPayload {
//   plan_id: string;
// }

// export interface CreateOrderData {
//   razorpay_order_id: string;
//   amount: number;               // In paise
//   currency: string;
//   plan_name: string;
//   trial_days: number;
// }

// export interface CreateOrderResponse {
//   status: number;
//   message: string;
//   data: CreateOrderData;
// }

// // ── Verify payment ────────────────────────────────────────────────────────

// export interface VerifyPaymentPayload {
//   razorpay_order_id: string;
//   razorpay_payment_id: string;
//   razorpay_signature: string;
// }

// export interface VerifyPaymentResponse {
//   status: number;
//   message: string;
//   data: {
//     plan_name: string;
//     expires_at: string;
//   };
// }

// // ── Razorpay Checkout SDK types (loaded from CDN) ────────────────────────

// export interface RazorpayOptions {
//   key: string;
//   amount: number;
//   currency: string;
//   name: string;
//   description: string;
//   order_id: string;
//   prefill?: {
//     name?: string;
//     email?: string;
//     contact?: string;
//   };
//   theme?: { color?: string };
//   handler: (response: RazorpayHandlerResponse) => void;
//   modal?: { ondismiss?: () => void };
// }

// export interface RazorpayHandlerResponse {
//   razorpay_payment_id: string;
//   razorpay_order_id: string;
//   razorpay_signature: string;
// }

// declare global {
//   interface Window {
//     Razorpay: new (options: RazorpayOptions) => { open(): void; close(): void };
//   }
// }
