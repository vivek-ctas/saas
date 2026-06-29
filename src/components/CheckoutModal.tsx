'use client';
import { useEffect, useState, useRef } from 'react';
import {
  ArrowLeft, ArrowRight, Check, CreditCard,
  Globe, Loader2, Lock, Shield, Smartphone, X, Zap, ChevronDown, AlertCircle,
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
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { fetchExchangeRates, convertInrToUsd, formatConvertedPrice } from '@/services/currency.service';

// ── Gateway config ─────────────────────────────────────────────────────────────

const GATEWAYS: {
  id: Gateway; label: string; desc: string; badge: string;
  icon: React.ReactNode;
}[] = [
    // Razorpay is temporarily disabled in the UI while backend support is unavailable.
    // Re-enable by restoring the Razorpay gateway option below.
    // {
    //   id: 'razorpay',
    //   label: 'Razorpay',
    //   badge: 'India — UPI / Cards',
    //   desc: 'UPI · PhonePe · Google Pay · Net Banking · Cards',
    //   icon: <Smartphone className="w-5 h-5" />,
    // },
    {
      id: 'stripe',
      label: 'Stripe',
      badge: 'International — Cards',
      desc: 'Visa · Mastercard · Amex · Apple Pay · Google Pay',
      icon: <CreditCard className="w-5 h-5" />,
    },
  ];

// ── Field validators ──────────────────────────────────────────────────────────

type FormErrors = Partial<Record<keyof CheckoutFormState, string>>;

function validateField(field: keyof CheckoutFormState, value: string): string | null {
  switch (field) {
    case 'first_name':
      return value.trim() ? null : 'First name is required.';
    case 'last_name':
      return value.trim() ? null : 'Last name is required.';
    case 'email':
      if (!value.trim()) return 'Email is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
      return null;
    case 'company_name':
      return value.trim() ? null : 'Company name is required.';
    case 'contact_number':

      if (!value)
        return 'Contact number is required.';

      if (!isValidPhoneNumber(value))
        return 'Please enter a valid phone number.';

      return null;

    case 'currency_id':
      return value.trim() ? null : 'Please select your country.';
    default:
      return null;
  }
}

// ── Price helpers ──────────────────────────────────────────────────────────────

function displayPrice(plan: Plan, cycle?: BillingCycle, rates?: Record<string, number>): string {
  if (plan.is_custom_plan) return 'Custom';
  let price = plan.price;
  if (cycle === 'quarterly' && plan.price_quarterly) {
    price = plan.price_quarterly;
  }

  // Prices are stored in the smallest unit (cents). Convert to dollars first.
  price = price / 100;

  // If stored in INR, convert that dollar-equivalent to USD via exchange rates.
  if (plan.currency.toLowerCase() === 'inr') {
    if (!rates || Object.keys(rates).length === 0) {
      return 'Loading price...';
    }
    price = convertInrToUsd(price, rates);
  }

  return formatConvertedPrice(price, 'USD');
}

function periodLabel(plan: Plan, cycle?: BillingCycle): string {
  if (plan.is_custom_plan) return '';
  const interval = cycle === 'monthly' ? 'month' : cycle === 'quarterly' ? 'quarterly' : cycle === 'yearly' ? 'year' : plan.interval;
  switch (interval) {
    case 'month': return '/mo';
    case 'quarterly': return '/qtr';
    case 'year': return '/yr';
    default: return interval ? `/${interval}` : '';
  }
}

// ── Inline API error banner ───────────────────────────────────────────────────

function ApiErrorBanner({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 animate-in fade-in slide-in-from-top-1 duration-200"
    >
      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
      <span className="flex-1">{message}</span>
      <button
        onClick={onDismiss}
        className="text-red-400 hover:text-red-600 transition-colors flex-shrink-0"
        aria-label="Dismiss error"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

// ── Field error message ───────────────────────────────────────────────────────

function FieldError({ message }: { message: string }) {
  return (
    <p
      role="alert"
      className="flex items-center gap-1.5 mt-1 text-xs text-red-600 animate-in fade-in slide-in-from-top-1 duration-150"
    >
      <AlertCircle className="w-3 h-3 flex-shrink-0" />
      {message}
    </p>
  );
}

// ── Styled input with error state ─────────────────────────────────────────────

function ValidatedInput({
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  label,
  required,
}: {
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  label: string;
  required?: boolean;
}) {
  const hasError = Boolean(error);
  return (
    <div>
      <Label
        htmlFor={id}
        className="text-sm font-medium text-slate-700"
      >
        {label}{required && ' *'}
      </Label>
      <div className="relative mt-1.5">
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : undefined}
          className={[
            'rounded-xl border transition-colors duration-150',
            hasError
              ? 'border-red-400 bg-red-50/40 focus-visible:ring-red-400/30 focus-visible:border-red-500'
              : 'border-slate-200 focus:border-primary',
          ].join(' ')}
        />
        {hasError && (
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <AlertCircle className="w-4 h-4 text-red-400" />
          </div>
        )}
      </div>
      {hasError && <FieldError message={error!} />}
    </div>
  );
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
  // onBack: () => void;
  onClearError: () => void;
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function CheckoutModal({
  plan, step, form, gateway, billingCycle, leadData, loading, error,
  onClose, onFormChange, onGateway, onBilling, onSubmitForm, onStartPayment, onClearError,
  // onBack,
}: CheckoutModalProps) {
  const [countries, setCountries] = useState<CurrencyOption[]>([]);
  const [countriesLoading, setCountriesLoading] = useState(true);

  // Exchange rate state
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const [loadingRate, setLoadingRate] = useState(false);
  const [rateError, setRateError] = useState<string | null>(null);

  // Per-field validation errors & touched tracking
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof CheckoutFormState, boolean>>>({});

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

  // Fetch exchange rates when country changes OR on mount if plan is INR
  useEffect(() => {
    async function getRates() {
      const isINR = plan.currency.toLowerCase() === 'inr';
      const hasRates = Object.keys(exchangeRates).length > 0;

      // Fetch if we don't have rates and plan is INR (needed for base price display)
      // OR if a country is selected (needed for user currency conversion)
      if (!isINR && !form.currency_id) return;
      if (isINR && hasRates && !form.currency_id) return;

      setLoadingRate(true);
      setRateError(null);
      try {
        const data = await fetchExchangeRates();
        setExchangeRates(data.rates);
      } catch (err) {
        console.error('Exchange rate fetch error:', err);
        setRateError('Could not update exchange rate.');
      } finally {
        setLoadingRate(false);
      }
    }
    getRates();
  }, [form.currency_id, plan.currency]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Clear field errors when step changes
  useEffect(() => {
    setFieldErrors({});
    setTouched({});
  }, [step]);

  const price = displayPrice(plan, billingCycle, exchangeRates);
  const period = periodLabel(plan, billingCycle);

  // Prices are stored in cents — divide by 100 first, then convert INR→USD if needed.
  let humanAmount = (billingCycle === 'quarterly' && plan.price_quarterly ? plan.price_quarterly : plan.price) / 100;
  if (plan.currency.toLowerCase() === 'inr' && Object.keys(exchangeRates).length > 0) {
    humanAmount = convertInrToUsd(humanAmount, exchangeRates);
  }

  const selectedCountryLabel = form.country_name || '';

  // Calculate converted price
  const selectedCountry = countries.find(c => c.id === form.currency_id);
  const targetCurrency = selectedCountry?.code.toUpperCase() || 'USD';
  const rate = exchangeRates[targetCurrency];
  const convertedAmount = rate ? humanAmount * rate : null;
  const displayConvertedPrice = convertedAmount !== null
    ? formatConvertedPrice(convertedAmount, targetCurrency)
    : null;

  // ── Validate a single field on blur ─────────────────────────────────────────

  function handleBlur(field: keyof CheckoutFormState) {
    setTouched(prev => ({ ...prev, [field]: true }));
    const err = validateField(field, form[field]);
    setFieldErrors(prev => ({ ...prev, [field]: err ?? undefined }));
  }

  // ── onChange: update form + re-validate if already touched ──────────────────

  function handleChange(field: keyof CheckoutFormState, value: string) {
    onFormChange(field, value);
    if (touched[field]) {
      const err = validateField(field, value);
      setFieldErrors(prev => ({ ...prev, [field]: err ?? undefined }));
    }
  }

  // ── Validate all fields before submission ────────────────────────────────────

  const FORM_FIELDS: (keyof CheckoutFormState)[] = [
    'first_name', 'last_name', 'email', 'company_name', 'contact_number', 'currency_id',
  ];

  function handleSubmit() {
    // Touch + validate all fields
    const errors: FormErrors = {};
    const allTouched: Partial<Record<keyof CheckoutFormState, boolean>> = {};
    for (const f of FORM_FIELDS) {
      allTouched[f] = true;
      const err = validateField(f, form[f]);
      if (err) errors[f] = err;
    }
    setTouched(allTouched);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) return; // stop here — show field errors inline

    onSubmitForm(); // delegate to hook (which may set error for API failures)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-7 pt-6 pb-4 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            {/* {step === 'summary' && (
              <button
                onClick={onBack}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
                aria-label="Back"
              >
                <ArrowLeft className="w-4 h-4 text-slate-600" />
              </button>
            )} */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 leading-tight">
                {step === 'form' && 'Get Started'}
                {step === 'summary' && 'Payment Summary'}
                {step === 'processing' && 'Processing…'}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {step === 'form' && `${plan.name} plan selected`}
                {step === 'summary' && `${plan.name} · ${billingCycle === 'monthly' ? 'Monthly' : billingCycle === 'quarterly' ? 'Quarterly' : billingCycle === 'yearly' ? 'Annual' : billingCycle}`}
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

              {/* Billing cycle is chosen on the pricing page; removed toggle here. */}

              {/* Form fields */}
              <div className="space-y-3.5">

                <div className="grid grid-cols-2 gap-3">
                  <ValidatedInput
                    id="first_name"
                    label="First Name"
                    required
                    placeholder="John"
                    value={form.first_name}
                    onChange={(v) => handleChange('first_name', v)}
                    onBlur={() => handleBlur('first_name')}
                    error={fieldErrors.first_name}
                  />
                  <ValidatedInput
                    id="last_name"
                    label="Last Name"
                    required
                    placeholder="Smith"
                    value={form.last_name}
                    onChange={(v) => handleChange('last_name', v)}
                    onBlur={() => handleBlur('last_name')}
                    error={fieldErrors.last_name}
                  />
                </div>

                <ValidatedInput
                  id="email"
                  type="email"
                  label="Work Email"
                  required
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(v) => handleChange('email', v)}
                  onBlur={() => handleBlur('email')}
                  error={fieldErrors.email}
                />

                <ValidatedInput
                  id="company_name"
                  label="Company Name"
                  required
                  placeholder="Acme Inc."
                  value={form.company_name}
                  onChange={(v) => handleChange('company_name', v)}
                  onBlur={() => handleBlur('company_name')}
                  error={fieldErrors.company_name}
                />

                <div className="space-y-1.5">
                  <Label htmlFor="contact_number" className="text-sm font-medium text-slate-700">
                    Contact Number *
                  </Label>
                  <div className="relative">
                    <PhoneInput
                      id="contact_number"
                      international
                      defaultCountry="IN"
                      value={form.contact_number}
                      onChange={(v) => handleChange('contact_number', v || '')}
                      onBlur={() => handleBlur('contact_number')}
                      className={[
                        'flex h-11 w-full rounded-xl border bg-white px-3 transition-all duration-150',
                        fieldErrors.contact_number
                          ? 'border-red-400 bg-red-50/40'
                          : 'border-slate-200 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10',
                      ].join(' ')}
                      numberInputProps={{
                        className: 'w-full focus:outline-none bg-transparent h-full px-2 text-sm',
                      }}
                    />
                    {fieldErrors.contact_number && (
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <AlertCircle className="w-4 h-4 text-red-400" />
                      </div>
                    )}
                  </div>
                  {fieldErrors.contact_number && <FieldError message={fieldErrors.contact_number} />}
                </div>

                {/* Country dropdown */}
                <div>
                  <Label htmlFor="country" className="text-sm font-medium text-slate-700">
                    Country *
                  </Label>
                  <div className="relative mt-1.5">
                    <select
                      id="country"
                      value={form.currency_id}
                      disabled={countriesLoading}
                      onBlur={() => handleBlur('currency_id')}
                      onChange={(e) => {
                        const selected = countries.find((c) => c.id === e.target.value);
                        handleChange('currency_id', e.target.value);
                        onFormChange('country_name', selected?.country ?? '');
                        if (touched.currency_id) {
                          const err = validateField('currency_id', e.target.value);
                          setFieldErrors(prev => ({ ...prev, currency_id: err ?? undefined }));
                        }
                      }}
                      aria-invalid={Boolean(fieldErrors.currency_id)}
                      aria-describedby={fieldErrors.currency_id ? 'country-error' : undefined}
                      className={[
                        'w-full appearance-none rounded-xl border bg-white pl-3 pr-9 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 disabled:opacity-60 transition-colors duration-150',
                        fieldErrors.currency_id
                          ? 'border-red-400 bg-red-50/40 focus:ring-red-400/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-primary focus:ring-primary/20',
                      ].join(' ')}
                    >
                      <option value="">
                        {countriesLoading ? 'Loading countries…' : 'Select your country'}
                      </option>
                      {countries.map((c) => (
                        <option key={c.id} value={c.id}>{c.country}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      {countriesLoading
                        ? <Loader2 className="w-4 h-4 text-slate-400 animate-spin" />
                        : fieldErrors.currency_id
                          ? <AlertCircle className="w-4 h-4 text-red-400" />
                          : <ChevronDown className="w-4 h-4 text-slate-400" />
                      }
                    </div>
                  </div>
                  {fieldErrors.currency_id && <FieldError message={fieldErrors.currency_id} />}
                </div>

              </div>

              {/* API error banner (only for non-field errors) */}
              {leadData?.active_subscription ? (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mt-3">
                  <p className="font-semibold text-amber-800">
                    Current Subscription
                  </p>

                  <div className="mt-2 text-sm text-amber-700">
                    <p>
                      <strong>Plan:</strong>{' '}
                      {leadData.active_subscription.plan_name}
                    </p>

                    <p>
                      <strong>Expires On:</strong>{' '}
                      {new Date(
                        leadData.active_subscription.expired_at
                      ).toLocaleDateString()}
                    </p>

                    <p className="mt-2">
                      Your subscription is active until the above date.
                      Please wait until it expires before purchasing a new plan.
                    </p>
                  </div>
                </div>
              ) : (
                error && (
                  <ApiErrorBanner message={error} onDismiss={onClearError} />
                )
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
                    <span className="font-semibold text-slate-900">{billingCycle === 'monthly' ? 'Monthly' : billingCycle === 'quarterly' ? 'Quarterly' : billingCycle === 'yearly' ? 'Annual' : billingCycle}</span>
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
                    <div className="text-right">
                      {/* Primary price: always USD */}
                      <div className="text-2xl font-bold text-slate-900">
                        ${humanAmount.toFixed(2)} <span className="text-base font-semibold text-slate-500">USD</span>
                      </div>
                      {/* Secondary: approx. local currency for reference */}
                      {targetCurrency !== 'USD' && (
                        loadingRate ? (
                          <div className="text-[10px] text-primary animate-pulse mt-0.5">
                            Loading {targetCurrency} estimate…
                          </div>
                        ) : displayConvertedPrice ? (
                          <div className="text-xs text-slate-400 mt-0.5">
                            Approx. {displayConvertedPrice} {targetCurrency} (estimated)
                          </div>
                        ) : null
                      )}
                      {rateError && (
                        <div className="text-[10px] text-red-400 mt-0.5">
                          {rateError}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Currency disclaimer */}
              {targetCurrency !== 'USD' && (
                <p className="text-[11px] text-slate-400 leading-relaxed -mt-1">
                  ⓘ Approximate local currency value. Final charged amount may vary based on exchange rates, taxes, and payment gateway fees.
                </p>
              )}

              {/* Features */}
              <div>
                <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-3">What's included</p>
                <ul className="space-y-2">
                  {plan.marketing_features.slice(0, 5).map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-emerald-600" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gateway Selector */}
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
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                          {gw.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-slate-900 text-sm">{gw.label}</span>
                            <Badge
                              variant="secondary"
                              className={`text-[10px] font-bold px-1.5 py-0 ${isSelected ? 'bg-primary/15 text-primary' : 'bg-slate-100 text-slate-500'}`}
                            >
                              {gw.badge}
                            </Badge>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">{gw.desc}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'border-primary bg-primary' : 'border-slate-300'}`}>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-white block" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {/* 
                <p className="mt-2.5 text-xs text-slate-400 text-center">
                  🇮🇳 Use Razorpay for Indian UPI/cards &nbsp;·&nbsp; 🌍 Use Stripe for international cards
                </p> */}
              </div>

              {/* API error banner */}
              {error && (
                <ApiErrorBanner message={error} onDismiss={onClearError} />
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
                onClick={handleSubmit}
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
                disabled={loading || loadingRate}
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Connecting…</>
                ) : (
                  <>
                    Pay ${humanAmount.toFixed(2)} USD with{' '}
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
