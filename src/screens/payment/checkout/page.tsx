"use client";
import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Lock, ArrowRight, Loader2 } from "lucide-react";

/* ── Payment method config ── */
type MethodId = "stripe" | "phonepay" | "googlepay" | "paytm";

const StripeLogo = () => (
  <div className="w-11 h-11 rounded-2xl bg-[#635BFF] flex items-center justify-center flex-shrink-0">
    <svg viewBox="0 0 60 25" className="w-14 fill-white" xmlns="http://www.w3.org/2000/svg">
      <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.45.94V6.27h3.96l.1 1.02a4.7 4.7 0 0 1 3.37-1.28c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.9-5.68 7.9zm-.9-11.46c-.97 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.7V2.09L32.7 1v4.08l4.46.84v3.35H32.7v5.22c0 1.56.77 2.1 2.1 2.1.56 0 1.3-.1 1.77-.25v3.37c-.54.27-1.7.54-3.01.54-3.07 0-5.1-1.62-5.1-5.35V9.27h-2.38V5.92l2.16-.22zM21.8 6.27v13.9h-4.45V6.27h4.45zM19.57 4.26c-1.42 0-2.3-.95-2.3-2.1 0-1.18.9-2.1 2.33-2.1 1.42 0 2.28.92 2.3 2.1 0 1.15-.88 2.1-2.33 2.1zM13.63 20.17c-3.5 0-5.87-2.5-5.87-7.5 0-5 2.37-7.52 5.87-7.52 1.64 0 2.97.52 3.87 1.14l.01-5.13 4.45-.94v19.85h-3.97l-.13-1.06a5.06 5.06 0 0 1-4.23 2.16zm1.02-11.49c-.9 0-1.56.42-1.97.9l.02 6.14c.4.45 1.04.8 1.97.8 1.52 0 2.54-1.63 2.54-3.9 0-2.25-1.04-3.94-2.56-3.94zM1 5.65v7.4c0 2.28 1.7 3.52 3.76 3.52.9 0 1.7-.19 2.36-.44v3.41c-.76.33-1.9.55-3.21.55C1.77 20.09 0 18.28 0 14.42V5.65h1z"/>
    </svg>
  </div>
);
const PhonePeLogo = () => (
  <div className="w-11 h-11 rounded-2xl bg-[#5F259F] flex items-center justify-center flex-shrink-0">
    <svg viewBox="0 0 40 40" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 3C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3zm5.9 24.4h-3.4v-8l-7.4 8H12l8.5-9.3L12 9.6h3.1l7.4 8.2v-8.2h3.4v18.8z"/>
    </svg>
  </div>
);
const GooglePayLogo = () => (
  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
    <svg viewBox="0 0 40 16" className="w-10" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#4285F4">G</text>
      <text x="8" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#EA4335">o</text>
      <text x="14.5" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#FBBC05">o</text>
      <text x="21" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#4285F4">g</text>
      <text x="27" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#34A853">l</text>
      <text x="31" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#EA4335">e</text>
    </svg>
  </div>
);
const PaytmLogo = () => (
  <div className="w-11 h-11 rounded-2xl bg-[#00BAF2] flex items-center justify-center flex-shrink-0">
    <svg viewBox="0 0 50 20" className="w-10 fill-white" xmlns="http://www.w3.org/2000/svg">
      <text x="1" y="16" fontFamily="Arial" fontSize="15" fontWeight="900" fill="white">paytm</text>
    </svg>
  </div>
);

const PAYMENT_METHODS = [
  {
    id: "stripe" as MethodId,
    name: "Stripe",
    description: "Credit / Debit Card · International",
    badge: { label: "POPULAR", className: "bg-slate-100 text-slate-600" },
    logo: <StripeLogo />,
    endpoint: "/api/stripe/checkout",
  },
  {
    id: "phonepay" as MethodId,
    name: "PhonePe",
    description: "UPI · Wallet · Instant transfer",
    logo: <PhonePeLogo />,
    endpoint: "/api/phonepay/checkout",
  },
  {
    id: "googlepay" as MethodId,
    name: "Google Pay",
    description: "UPI · Fast & secure payments",
    badge: { label: "RECOMMENDED", className: "bg-blue-50 text-blue-700" },
    logo: <GooglePayLogo />,
    endpoint: "/api/googlepay/checkout",
  },
  {
    id: "paytm" as MethodId,
    name: "Paytm",
    description: "Wallet · UPI · Bank transfer",
    logo: <PaytmLogo />,
    endpoint: "/api/paytm/checkout",
  },
];

const CART_ITEMS = [
  { name: "Aurora Linen Shirt",      qty: 1, price: 4999 },
  { name: "Heritage Leather Wallet", qty: 1, price: 3500 },
  { name: "Minimalist Steel Watch",  qty: 1, price: 4000 },
];
const DISCOUNT = 1250;
const TAX      = 203;

export default function CheckoutPage() {
  const [selected, setSelected]   = useState<MethodId>("stripe");
  const [loading, setLoading]     = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const subtotal = CART_ITEMS.reduce((s, i) => s + i.price, 0);
  const total    = subtotal - DISCOUNT + TAX;

  async function handlePay() {
    setLoading(true);
    setStatusMsg("");

    const method = PAYMENT_METHODS.find((m) => m.id === selected)!;

    try {
      const res  = await fetch(method.endpoint, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Pro Plan", unit_amount: total * 100, currency: "inr", method: selected }),
      });
      const data = await res.json();

      if (res.ok && data?.url)  { window.location.href = data.url; return; }
      if (res.ok && data?.demo) { window.location.href = "/checkout/success"; return; }

      setStatusMsg(data?.error ?? "Payment could not be initiated. Please try again.");
    } catch (err: any) {
      setStatusMsg(err?.message ?? "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/pricing" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to cart
          </Link>
          <span className="font-semibold text-slate-800">Marketplace</span>
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <Lock className="w-3.5 h-3.5" /> Secure checkout
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">

          {/* ── Left: payment method selector ── */}
          <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-8 pt-8 pb-6 border-b border-slate-100">
              <h1 className="text-2xl font-bold text-slate-900">Choose payment method</h1>
              <p className="text-sm text-slate-500 mt-1">
                Select your preferred way to pay. All transactions are encrypted and protected.
              </p>
            </div>

            <div className="px-8 py-6 space-y-3">
              {PAYMENT_METHODS.map((m) => {
                const isActive = selected === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelected(m.id)}
                    className={`w-full flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-200 ${
                      isActive
                        ? "border-slate-900 bg-slate-50 shadow-md ring-1 ring-slate-900"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    {m.logo}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-slate-900">{m.name}</span>
                        {m.badge && (
                          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${m.badge.className}`}>
                            {m.badge.label}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 mt-0.5">{m.description}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Lock className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-400">256-bit encrypted</span>
                      </div>
                    </div>
                    <span className={`ml-auto h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? "border-slate-900 bg-slate-900" : "border-slate-300 bg-white"
                    }`}>
                      {isActive && <span className="block h-2 w-2 rounded-full bg-white" />}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Security badge */}
            <div className="mx-8 mb-8 flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
              <div className="rounded-xl bg-emerald-100 p-2 flex-shrink-0">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Your payment is protected</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  PCI-DSS Level 1 certified · 3D Secure · Buyer protection on every order
                </p>
              </div>
            </div>
          </section>

          {/* ── Right: Order summary ── */}
          <aside className="space-y-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-7 py-7">
              <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-6">Order Summary</p>

              <div className="space-y-4">
                {CART_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-400">Qty {item.qty}</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Coupon */}
              <div className="mt-5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-700">
                  <span className="text-xs">🏷</span>
                  <span className="text-xs font-semibold">FESTIVE10 applied</span>
                </div>
                <span className="text-sm font-bold text-amber-700">−₹{DISCOUNT.toLocaleString("en-IN")}</span>
              </div>

              {/* Line items */}
              <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Discount</span>
                  <span className="font-medium text-emerald-600">−₹{DISCOUNT.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Tax (GST)</span>
                  <span className="font-medium">₹{TAX}</span>
                </div>
              </div>

              {/* Total */}
              <div className="mt-5 flex justify-between items-center border-t border-slate-200 pt-5">
                <span className="font-bold text-slate-900 text-lg">Total</span>
                <span className="text-3xl font-bold text-slate-900">₹{total.toLocaleString("en-IN")}</span>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={handlePay}
                disabled={loading}
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-4 text-sm font-bold text-white shadow-lg hover:bg-slate-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150"
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Processing…</>
                ) : (
                  <>Pay ₹{total.toLocaleString("en-IN")} with {PAYMENT_METHODS.find((m) => m.id === selected)?.name} <ArrowRight className="w-4 h-4" /></>
                )}
              </button>

              {statusMsg && (
                <p className="mt-3 text-center text-xs text-red-500">{statusMsg}</p>
              )}

              <p className="mt-4 text-center text-xs text-slate-400">
                By continuing you agree to our Terms & Refund Policy
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
