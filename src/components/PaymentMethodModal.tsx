'use client';
import { useState } from 'react';
import { Loader2, X, ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import type { RazorpayPlan } from '@/types/payment.types';

// ── Types ──────────────────────────────────────────────────────────────────
export type PaymentMethodId = 'razorpay' | 'stripe';

interface PaymentMethod {
  id: PaymentMethodId;
  name: string;
  description: string;
  badge?: { label: string; className: string };
  future?: boolean;
  logo: React.ReactNode;
  handles: string[];
}

// ── Logos (same style as existing checkout/page.tsx) ───────────────────────
const RazorpayLogo = () => (
  <div className="w-11 h-11 rounded-2xl bg-[#072654] flex items-center justify-center flex-shrink-0">
    <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32L16 8h4L12 32H8z" fill="#3395FF" />
      <path d="M14 32l12-24h4L18 32h-4z" fill="#fff" opacity="0.8" />
      <path d="M20 32l8-24h4L24 32h-4z" fill="#3395FF" opacity="0.6" />
    </svg>
  </div>
);

const StripeLogo = () => (
  <div className="w-11 h-11 rounded-2xl bg-[#635BFF] flex items-center justify-center flex-shrink-0">
    <svg viewBox="0 0 60 25" className="w-12 fill-white" xmlns="http://www.w3.org/2000/svg">
      <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.45.94V6.27h3.96l.1 1.02a4.7 4.7 0 0 1 3.37-1.28c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.9-5.68 7.9zm-.9-11.46c-.97 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.7V2.09L32.7 1v4.08l4.46.84v3.35H32.7v5.22c0 1.56.77 2.1 2.1 2.1.56 0 1.3-.1 1.77-.25v3.37c-.54.27-1.7.54-3.01.54-3.07 0-5.1-1.62-5.1-5.35V9.27h-2.38V5.92l2.16-.22zM21.8 6.27v13.9h-4.45V6.27h4.45zM19.57 4.26c-1.42 0-2.3-.95-2.3-2.1C17.27.98 18.17.06 19.6.06c1.42 0 2.28.92 2.3 2.1 0 1.15-.88 2.1-2.33 2.1zM13.63 20.17c-3.5 0-5.87-2.5-5.87-7.5 0-5 2.37-7.52 5.87-7.52 1.64 0 2.97.52 3.87 1.14l.01-5.13 4.45-.94v19.85h-3.97l-.13-1.06a5.06 5.06 0 0 1-4.23 2.16zm1.02-11.49c-.9 0-1.56.42-1.97.9l.02 6.14c.4.45 1.04.8 1.97.8 1.52 0 2.54-1.63 2.54-3.9 0-2.25-1.04-3.94-2.56-3.94zM1 5.65v7.4c0 2.28 1.7 3.52 3.76 3.52.9 0 1.7-.19 2.36-.44v3.41c-.76.33-1.9.55-3.21.55C1.77 20.09 0 18.28 0 14.42V5.65h1z" />
    </svg>
  </div>
);

// ── Sub-method icon chips (shown under Razorpay row) ──────────────────────
const SUB_METHOD_ICONS: Record<string, React.ReactNode> = {
  'Google Pay': (
    <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
      <svg viewBox="0 0 40 16" className="w-9" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#4285F4">G</text>
        <text x="8" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#EA4335">o</text>
        <text x="14.5" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#FBBC05">o</text>
        <text x="21" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#4285F4">g</text>
        <text x="27" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#34A853">l</text>
        <text x="31" y="13" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#EA4335">e</text>
      </svg>
    </div>
  ),
  'PhonePe': (
    <div className="w-7 h-7 rounded-lg bg-[#5F259F] flex items-center justify-center">
      <svg viewBox="0 0 40 40" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3zm5.9 24.4h-3.4v-8l-7.4 8H12l8.5-9.3L12 9.6h3.1l7.4 8.2v-8.2h3.4v18.8z" />
      </svg>
    </div>
  ),
  'Paytm': (
    <div className="w-7 h-7 rounded-lg bg-[#00BAF2] flex items-center justify-center">
      <span className="text-white text-[7px] font-black leading-none">PTM</span>
    </div>
  ),
  'UPI': (
    <div className="w-7 h-7 rounded-lg bg-[#F37021] flex items-center justify-center">
      <span className="text-white text-[7px] font-black leading-none">UPI</span>
    </div>
  ),
  'Cards': (
    <div className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center">
      <svg viewBox="0 0 20 14" className="w-4 fill-white" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="14" rx="2" fill="none" />
        <rect y="3" width="20" height="3" fill="white" opacity="0.4" />
        <rect x="2" y="9" width="5" height="2" rx="1" fill="white" />
      </svg>
    </div>
  ),
};

// ── Payment methods list ───────────────────────────────────────────────────
const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'razorpay',
    name: 'Pay via Razorpay',
    description: "India's most trusted payment gateway",
    badge: { label: 'RECOMMENDED', className: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
    logo: <RazorpayLogo />,
    handles: ['Google Pay', 'PhonePe', 'Paytm', 'UPI', 'Cards'],
  },
  {
    id: 'stripe',
    name: 'Pay via Stripe',
    description: 'International cards — USD / EUR / GBP',
    badge: { label: 'COMING SOON', className: 'bg-slate-100 text-slate-500 border border-slate-200' },
    future: true,
    logo: <StripeLogo />,
    handles: ['Visa', 'Mastercard', 'Amex'],
  },
];

// ── Props ──────────────────────────────────────────────────────────────────
interface PaymentMethodModalProps {
  plan: RazorpayPlan;
  loading: boolean;
  onClose: () => void;
  onProceed: (methodId: PaymentMethodId) => Promise<void>;
}

// ── Helpers ────────────────────────────────────────────────────────────────
function formatPrice(plan: RazorpayPlan): string {
  if (plan.is_custom_pricing) return 'Custom';
  if (plan.currency === 'INR') return `₹${plan.monthly_price.toLocaleString('en-IN')}`;
  return `$${plan.monthly_price}`;
}

function getPeriod(plan: RazorpayPlan): string {
  if (plan.is_custom_pricing) return '';
  return plan.duration_days <= 31 ? '/mo' : '/yr';
}

// ── Component ──────────────────────────────────────────────────────────────
export default function PaymentMethodModal({
  plan,
  loading,
  onClose,
  onProceed,
}: PaymentMethodModalProps) {
  const [selected, setSelected] = useState<PaymentMethodId>('razorpay');

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget && !loading) onClose(); }}
    >
      {/* Modal card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* ── Header ── */}
        <div className="bg-gradient-to-br from-slate-900 via-[#1e3a5f] to-[#0f3460] px-7 pt-7 pb-6 relative overflow-hidden">
          {/* decorative blobs */}
          <div className="absolute -top-12 -right-12 w-44 h-44 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* close button */}
          <button
            onClick={onClose}
            disabled={loading}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors disabled:opacity-50"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* plan summary */}
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">
              Selected Plan
            </p>
            <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-black text-white">{formatPrice(plan)}</span>
              <span className="text-white/60 text-sm">{getPeriod(plan)}</span>
            </div>
            {plan.trial_days > 0 && (
              <p className="mt-2 text-xs font-semibold text-emerald-400">
                ✓ {plan.trial_days}-day free trial included — no card charge today
              </p>
            )}
          </div>
        </div>

        {/* ── Body ── */}
        <div className="px-7 py-6 space-y-4">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Choose payment method
          </p>

          {/* Method rows */}
          <div className="space-y-3">
            {PAYMENT_METHODS.map((method) => {
              const isActive = selected === method.id;
              const isDisabled = !!method.future || loading;

              return (
                <button
                  key={method.id}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => !method.future && setSelected(method.id)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
                    method.future
                      ? 'opacity-50 cursor-not-allowed border-slate-100 bg-slate-50'
                      : isActive
                      ? 'border-indigo-500 bg-indigo-50/50 shadow-md ring-1 ring-indigo-400'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {method.logo}

                    <div className="flex-1 min-w-0">
                      {/* name + badge */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-slate-900 text-sm">{method.name}</span>
                        {method.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${method.badge.className}`}>
                            {method.badge.label}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-500 mt-0.5">{method.description}</p>

                      {/* sub-method icons */}
                      <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                        {method.handles.map((h) =>
                          SUB_METHOD_ICONS[h] ? (
                            <span key={h} title={h}>{SUB_METHOD_ICONS[h]}</span>
                          ) : (
                            <span
                              key={h}
                              className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                            >
                              {h}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* radio dot */}
                    {!method.future && (
                      <span
                        className={`ml-auto h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isActive && <span className="block h-2 w-2 rounded-full bg-white" />}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Security note */}
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">256-bit encrypted & secure</p>
              <p className="text-[11px] text-slate-400 mt-0.5">PCI-DSS Level 1 · Your data is protected</p>
            </div>
          </div>

          {/* Pay button */}
          <button
            type="button"
            onClick={() => onProceed(selected)}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold py-4 text-sm shadow-lg hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150"
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Opening payment…</>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Pay {formatPrice(plan)} securely
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-center text-[11px] text-slate-400">
            By proceeding you agree to our{' '}
            <a href="/terms" className="underline hover:text-slate-600">Terms</a>
            {' '}&{' '}
            <a href="/refund" className="underline hover:text-slate-600">Refund Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
