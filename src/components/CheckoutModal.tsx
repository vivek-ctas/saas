'use client';
import { useEffect, useState } from 'react';
import {
  ArrowLeft, ArrowRight, Check, CreditCard,
  Globe, Loader2, Lock, Shield, Smartphone, X, Zap, ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { fetchCurrencies } from '@/services/plan.service';
import type {
  Plan, Gateway, BillingCycle, CheckoutFormState, CheckoutStep,
  CreateLeadData, CurrencyOption,
} from '@/types';

// ── Gateway config ─────────────────────────────────────────────────────────────

const GATEWAYS: {
  id: Gateway; label: string; desc: string; badge: string;
  icon: React.ReactNode;
}[] = [
    {
      id: 'razorpay',
      label: 'Razorpay',
      badge: 'India — UPI / Cards',
      desc: 'UPI · PhonePe · Google Pay · Net Banking · Cards',
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: 'stripe',
      label: 'Stripe',
      badge: 'International — Cards',
      desc: 'Visa · Mastercard · Amex · Apple Pay · Google Pay',
      icon: <CreditCard className="w-5 h-5" />,
    },
  ];

// ── Price helpers ──────────────────────────────────────────────────────────────

function displayPrice(plan: Plan): string {
  if (plan.is_custom_plan) return 'Custom';
  const amount = plan.price / 100;
  if (plan.currency === 'inr') return `₹${Math.round(amount).toLocaleString('en-IN')}`;
  return `$${amount.toFixed(2)}`;
}

function periodLabel(plan: Plan): string {
  if (plan.is_custom_plan) return '';

  switch (plan.interval) {
    case 'month':
      return '/mo';

    case 'year':
      return '/yr';

    default:
      return plan.interval ? `/${plan.interval}` : '';
  }
}

// ── Props ──────────────────────────────────────────────────────────────────────

interface CheckoutModalProps {
  plan: Plan;
  step: CheckoutStep;
  form: CheckoutFormState;
  gateway: Gateway;
  billingCycle: BillingCycle;
  leadData: CreateLeadData | null;
  loading: boolean;
  error: string | null;

  onClose: () => void;
  onFormChange: (field: keyof CheckoutFormState, value: string) => void;
  onGateway: (g: Gateway) => void;
  onBilling: (c: BillingCycle) => void;
  onSubmitForm: () => void;
  onStartPayment: () => void;
  onBack: () => void;
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function CheckoutModal({
  plan, step, form, gateway, billingCycle, leadData, loading, error,
  onClose, onFormChange, onGateway, onBilling, onSubmitForm, onStartPayment, onBack,
}: CheckoutModalProps) {

  // Countries from /manage-plan/get-currencies
  const [countries, setCountries] = useState<CurrencyOption[]>([]);
  const [countriesLoading, setCountriesLoading] = useState(true);

  useEffect(() => {
    fetchCurrencies().then(({ currencies }) => {
      setCountries(currencies);
      setCountriesLoading(false);
    });
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const price = displayPrice(plan);
  const period = periodLabel(plan);

  const humanAmount = plan.price / 100;
  const currencySymbol = plan.currency === 'inr' ? '₹' : '$';

  // Use the display name provided by backend (or fallback)
  const selectedCountryLabel = form.country_name || '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-7 pt-6 pb-4 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            {step === 'summary' && (
              <button
                onClick={onBack}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
                aria-label="Back"
              >
                <ArrowLeft className="w-4 h-4 text-slate-600" />
              </button>
            )}
            <div>
              <h2 className="text-lg font-bold text-slate-900 leading-tight">
                {step === 'form' && 'Get Started'}
                {step === 'summary' && 'Payment Summary'}
                {step === 'processing' && 'Processing…'}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {step === 'form' && `${plan.name} plan selected`}
                {step === 'summary' && `${plan.name} · ${billingCycle}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              {(['form', 'summary'] as CheckoutStep[]).map((s, i) => (
                <div
                  key={s}
                  className={`rounded-full transition-all ${step === s
                    ? 'w-6 h-2 bg-primary'
                    : step === 'summary' && i === 0
                      ? 'w-2 h-2 bg-primary/40'
                      : 'w-2 h-2 bg-slate-200'
                    }`}
                />
              ))}
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="overflow-y-auto flex-1 px-7 py-5">

          {/* ══ STEP 1: INFO FORM ══ */}
          {step === 'form' && (
            <div className="space-y-4">

              {/* Plan mini-card */}
              <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900">{plan.name} Plan</div>
                  <div className="text-xs text-slate-500 mt-0.5">{plan.desc}</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-primary">{price}</div>
                  <div className="text-xs text-slate-500">{period}</div>
                </div>
              </div>

              {/* Billing toggle */}
              <div>
                <Label className="text-xs font-semibold text-slate-500 tracking-wide uppercase mb-2 block">
                  Billing Cycle
                </Label>
                <div className="flex gap-2">
                  {(['monthly', 'yearly'] as BillingCycle[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => onBilling(c)}
                      className={`flex-1 py-2.5 rounded-xl border text-sm font-semibold capitalize transition-all ${billingCycle === c
                        ? 'border-primary bg-primary text-white shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                    >
                      {c}
                      {c === 'yearly' && (
                        <span className={`ml-1.5 text-[10px] font-bold ${billingCycle === 'yearly' ? 'text-white/80' : 'text-emerald-600'}`}>
                          SAVE 17%
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form fields */}
              <div className="space-y-3.5">

                {/* <div>
                  <Label htmlFor="full_name" className="text-sm font-medium text-slate-700">Full Name *</Label>
                  <Input
                    id="full_name"
                    placeholder="John Smith"
                    value={form.full_name}
                    onChange={(e) => onFormChange('full_name', e.target.value)}
                    className="mt-1.5 rounded-xl border-slate-200 focus:border-primary"
                  />
                </div> */}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="first_name">First Name *</Label>
                    <Input
                      id="first_name"
                      placeholder="John"
                      value={form.first_name}
                      onChange={(e) => onFormChange('first_name', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="last_name">Last Name *</Label>
                    <Input
                      id="last_name"
                      placeholder="Smith"
                      value={form.last_name}
                      onChange={(e) => onFormChange('last_name', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => onFormChange('email', e.target.value)}
                    className="mt-1.5 rounded-xl border-slate-200 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="company_name" className="text-sm font-medium text-slate-700">Company Name *</Label>
                  <Input
                    id="company_name"
                    placeholder="Acme Inc."
                    value={form.company_name}
                    onChange={(e) => onFormChange('company_name', e.target.value)}
                    className="mt-1.5 rounded-xl border-slate-200 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="contact_number" className="text-sm font-medium text-slate-700">Contact Number *</Label>
                  <Input
                    id="contact_number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.contact_number}
                    onChange={(e) => onFormChange('contact_number', e.target.value)}
                    className="mt-1.5 rounded-xl border-slate-200 focus:border-primary"
                  />
                </div>

                {/* Country dropdown — from /manage-plan/get-currencies API */}
                <div>
                  <Label htmlFor="country" className="text-sm font-medium text-slate-700">Country *</Label>
                  <div className="relative mt-1.5">
                    <select
                      id="country"
                      value={form.currency_id}
                      disabled={countriesLoading}
                      onChange={(e) => {
                        const selected = countries.find(
                          (c) => c.id === e.target.value
                        );
                        onFormChange('currency_id', e.target.value);
                        onFormChange('country_name', selected?.country ?? '');
                      }}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3 pr-9 py-2.5 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                    >
                      <option value="">
                        {countriesLoading ? 'Loading countries…' : 'Select your country'}
                      </option>
                      {countries.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.country}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      {countriesLoading
                        ? <Loader2 className="w-4 h-4 text-slate-400 animate-spin" />
                        : <ChevronDown className="w-4 h-4 text-slate-400" />
                      }
                    </div>
                  </div>
                </div>

              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Trust badges */}
              <div className="flex items-center gap-4 pt-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Lock className="w-3.5 h-3.5 text-emerald-500" /> SSL secured
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Shield className="w-3.5 h-3.5 text-emerald-500" /> No card needed
                </div>
                {plan.trial_days > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Zap className="w-3.5 h-3.5 text-emerald-500" /> {plan.trial_days}-day trial
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ══ STEP 2: PAYMENT SUMMARY ══ */}
          {step === 'summary' && (
            <div className="space-y-5">

              {/* Order summary card */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Order Summary</p>
                </div>
                <div className="px-5 py-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Plan</span>
                    <span className="font-semibold text-slate-900">{plan.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Billing</span>
                    <span className="font-semibold text-slate-900 capitalize">{billingCycle}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Currency</span>
                    <span className="font-semibold text-slate-900">{plan.currency.toUpperCase()}</span>
                  </div>
                  {selectedCountryLabel && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Country</span>
                      <span className="font-semibold text-slate-900">{selectedCountryLabel}</span>
                    </div>
                  )}
                  {plan.trial_days > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Trial</span>
                      <span className="font-semibold text-emerald-600">{plan.trial_days} days free</span>
                    </div>
                  )}
                  <div className="border-t border-slate-100 pt-3 flex justify-between items-baseline">
                    <span className="text-slate-700 font-semibold">Total due today</span>
                    <span className="text-2xl font-bold text-slate-900">
                      {currencySymbol}{humanAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-3">What's included</p>
                <ul className="space-y-2">
                  {plan.marketing_features.slice(0, 5)
                    .map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-emerald-600" />
                        </div>
                        {f}
                      </li>
                    ))}
                </ul>
              </div>

              {/* ── Gateway Selector — user must pick manually ── */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                    Select Payment Gateway
                  </p>
                  {selectedCountryLabel && (
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Globe className="w-3.5 h-3.5" />
                      {selectedCountryLabel}
                    </div>
                  )}
                </div>

                <div className="space-y-2.5">
                  {GATEWAYS.map((gw) => {
                    const isSelected = gateway === gw.id;
                    return (
                      <button
                        key={gw.id}
                        onClick={() => onGateway(gw.id)}
                        className={`w-full flex items-center gap-3.5 rounded-2xl border px-4 py-3.5 text-left transition-all ${isSelected
                          ? 'border-primary bg-primary/5 shadow-sm ring-1 ring-primary'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                          {gw.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-slate-900 text-sm">{gw.label}</span>
                            <Badge
                              variant="secondary"
                              className={`text-[10px] font-bold px-1.5 py-0 ${isSelected
                                ? 'bg-primary/15 text-primary'
                                : 'bg-slate-100 text-slate-500'
                                }`}
                            >
                              {gw.badge}
                            </Badge>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">{gw.desc}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'border-primary bg-primary' : 'border-slate-300'
                          }`}>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-white block" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <p className="mt-2.5 text-xs text-slate-400 text-center">
                  🇮🇳 Use Razorpay for Indian UPI/cards &nbsp;·&nbsp; 🌍 Use Stripe for international cards
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Security note */}
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
                <Shield className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <p className="text-xs text-slate-500">
                  Your payment is secured with 256-bit SSL encryption. We never store card details.
                </p>
              </div>
            </div>
          )}

          {/* ══ PROCESSING ══ */}
          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center py-14 gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
              <p className="font-semibold text-slate-800">Opening payment gateway…</p>
              <p className="text-sm text-slate-500 text-center">
                Please complete your payment in the {gateway === 'razorpay' ? 'Razorpay' : 'Stripe'} window.
                <br />Don't close this tab.
              </p>
            </div>
          )}
        </div>

        {/* ── Footer CTA ── */}
        {(step === 'form' || step === 'summary') && (
          <div className="flex-shrink-0 px-7 pb-6 pt-4 border-t border-slate-100 bg-white">
            {step === 'form' && (
              <Button
                className="w-full h-12 rounded-2xl text-base font-semibold shadow-lg group"
                onClick={onSubmitForm}
                disabled={loading || countriesLoading}
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving details…</>
                ) : (
                  <>
                    Continue to Payment
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            )}

            {step === 'summary' && (
              <Button
                className="w-full h-12 rounded-2xl text-base font-semibold shadow-lg group"
                onClick={onStartPayment}
                disabled={loading}
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Connecting…</>
                ) : (
                  <>
                    Pay {currencySymbol}{humanAmount.toLocaleString()} with{' '}
                    {gateway === 'razorpay' ? 'Razorpay' : 'Stripe'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            )}

            <p className="mt-3 text-center text-xs text-slate-400">
              By continuing you agree to our{' '}
              <a href="/terms" className="underline hover:text-slate-600">Terms</a> &amp;{' '}
              <a href="/refund" className="underline hover:text-slate-600">Refund Policy</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
