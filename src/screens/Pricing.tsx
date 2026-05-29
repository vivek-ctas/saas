'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Check, X, Sparkles, ArrowRight, Quote, Star, Loader2, AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import { BlobBackdrop, AnalyticsIllustration, PricingCalculatorMockup } from '@/components/illustrations';
import { useReveal } from '@/hooks/use-reveal';

// ── New imports (pricing API integration) ─────────────────────────────────
import { usePlans } from '@/hooks/use-plans';
import { useCountry } from '@/hooks/use-country';
import { useCheckout } from '@/hooks/use-checkout';

import CheckoutModal from '@/components/CheckoutModal';
import type { RazorpayPlan } from '@/types/payment.types';

// ── Backend plan response type (raw format from API) ───────────────────────
interface BackendPlan {
  _id: string;
  name: string;
  slug: string;
  desc: string;
  price_cents: number;
  currency: string;
  interval: 'month' | 'year';
  interval_count: number;
  trial_days: number;
  marketing_features: string[];
  features: string[];
  is_popular: boolean;
  cta_label: string;
  sort_order: number;
  status: number;
  is_custom_plan: boolean;
  metadata: Record<string, any>;
  planIdStr: string;
}

// ── Transform backend plan to normalized format ────────────────────────────
function normalizePlan(plan: BackendPlan): RazorpayPlan {
  const monthlyPrice = plan.price_cents / 100;
  const durationDays = plan.interval === 'year' ? 365 * plan.interval_count : 30 * plan.interval_count;

  return {
    _id: plan._id,
    name: plan.name,
    slug: plan.slug,
    description: plan.desc,
    currency: plan.currency,
    monthly_price: monthlyPrice,
    yearly_price: plan.interval === 'year' ? monthlyPrice : monthlyPrice * 12,
    duration_days: durationDays,
    trial_days: plan.trial_days,
    features: plan.marketing_features && plan.marketing_features.length > 0 ? plan.marketing_features : plan.features,
    is_popular: plan.is_popular,
    is_custom_pricing: plan.is_custom_plan,
    cta_label: plan.cta_label || (plan.is_custom_plan ? 'Contact Sales' : plan.trial_days > 0 ? 'Start Free Trial' : 'Get Started'),
    sort_order: plan.sort_order,
    status: plan.status,
  };
}

// ── Static content ────────────────────
const COMPARE = [
  ['Marketplace connections', '3', '10', 'Unlimited'],
  ['Product listings', '5,000', '25,000', 'Unlimited'],
  ['Real-time inventory sync', false, true, true],
  ['Automated repricing', false, true, true],
  ['Custom workflows', false, true, true],
  ['API access', false, false, true],
  ['Dedicated account manager', false, false, true],
  ['SLA guarantee', false, false, true],
];

const FAQS = [
  { q: 'Is there a free trial?', a: 'Yes — every plan includes a 14-day trial with no credit card required.' },
  { q: 'Can I change plans anytime?', a: 'Absolutely. Upgrade or downgrade at any time from your billing settings.' },
  { q: 'What marketplaces are supported?', a: "Amazon, eBay, Walmart, Shopify, Etsy, TikTok Shop and 50+ more — and we'll build any missing one." },
  { q: 'How is my data secured?', a: 'SOC 2 Type II certified, end-to-end encryption, regular pen-tests, and GDPR compliant.' },
  { q: 'Do you offer migration help?', a: 'Yes, our white-glove onboarding team will migrate your listings, orders and history for free on Pro & Enterprise.' },
  { q: 'What happens if I exceed my plan limits?', a: "We'll notify you well before you hit a cap — no surprise charges, ever." },
];

const ADDONS = [
  {
    title: 'Auto-repricer with your margin rules',
    desc: "Tell us your minimum profit and maximum price. We'll watch every Buy Box competitor 24/7 and reprice automatically — never below your floor, never above your ceiling. Sellers typically recover 8–18% margin in the first month.",
  },
  {
    title: 'AI listing generator',
    desc: "Got a spreadsheet of products? Paste it in. Our AI writes complete Amazon, eBay and Flipkart listings — titles, bullets, search terms, even translations — formatted exactly to each marketplace's rules so you stop getting suppressed listings.",
  },
  {
    title: 'A+ content managed in S3',
    desc: "Every brand banner, comparison chart and lifestyle image lives in versioned cloud storage. Update once, and the latest creative pushes to Amazon Brand Registry instantly. No more 'which version is live?' confusion.",
  },
  {
    title: 'BigQuery + Power BI pipeline',
    desc: 'Every order, refund and ad-click streams into a Google BigQuery warehouse you control. Plug it into Power BI or Looker and ask the questions that move revenue — profit by SKU, customer lifetime value, channel ROI.',
  },
  {
    title: 'Customer-behaviour analytics',
    desc: "We learn from millions of orders to predict what your buyers want next. Surface bundle ideas, repurchase windows and the right ad audience — without you needing a data team.",
  },
  {
    title: 'Centralized catalog + FBA/FBM',
    desc: 'One golden record per SKU, mapped to every channel. Hybrid fulfillment routing decides whether to ship from FBA, your own warehouse or a 3PL — based on cost, speed and stock levels.',
  },
];

// ── Display helpers ────────────────────────────────────────────────────────
function formatPrice(plan: RazorpayPlan): string {
  if (plan.is_custom_pricing) return 'Custom';
  if (plan.monthly_price === 0) return 'Custom';
  const price = Math.round(plan.monthly_price);
  if (plan.currency === 'INR') return `₹${price.toLocaleString('en-IN')}`;
  return `$${price}`;
}

function getPeriod(plan: RazorpayPlan): string {
  if (plan.is_custom_pricing) return '';
  return plan.duration_days <= 31 ? '/mo' : '/yr';
}

function getCtaLabel(plan: RazorpayPlan): string {
  if (plan.cta_label) return plan.cta_label;
  if (plan.is_custom_pricing) return 'Contact Sales';
  if (plan.trial_days > 0) return 'Start Free Trial';
  return 'Get Started';
}

// ── Component ──────────────────────────────────────────────────────────────
const Pricing = () => {
  const ref = useReveal<HTMLDivElement>();

  // Plans from backend
  const { plans: rawPlans, loading: plansLoading, error: plansError } = usePlans();
  const plans = (rawPlans as BackendPlan[]).map(normalizePlan);

  // Country detection (auto-selects gateway)
  const { country, detecting, gateway: detectedGateway } = useCountry();

  // Which plan the user clicked — drives modal
  const [activePlan, setActivePlan] = useState<RazorpayPlan | null>(null);

  // Checkout state machine
  const checkout = useCheckout(detectedGateway);

  // ── Open modal when user clicks a plan card ────────────────────────────
  function handlePlanClick(plan: RazorpayPlan) {
    if (plan.is_custom_pricing) {
      window.location.href = '/contact';
      return;
    }
    // Pre-fill country from detection
    if (country) {
      checkout.setForm('country', country.code);
      checkout.setForm('country_name', country.name);
      checkout.setGateway(country.defaultGateway);
    }
    setActivePlan(plan);
  }

  function handleCloseModal() {
    setActivePlan(null);
    checkout.reset();
  }
  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={Sparkles}
          badgeText="Transparent pricing"
          title={
            <>
              Pricing that scales{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                with your business.
              </span>
            </>
          }
          subtitle="Start free for 14 days. No credit card. No surprises. Cancel anytime — and see your projected ROI before you commit."
          visual={<PricingCalculatorMockup className="w-full h-auto" />}
          actions={
            <>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 rounded-full shadow-sm"
              >
                Compare plans
              </Button>
              <Link
                href="#plans"
                className="inline-flex items-center justify-center rounded-full text-base px-8 h-12 shadow-stripe-xl group bg-gradient-to-r from-primary to-secondary hover:opacity-95 border-0 text-white"
              >
                See Plans
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </>
          }
        />

        {/* ── PLANS SECTION ─────────────────────────────────────────────── */}
        <section id="plans" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Loading */}
            {plansLoading && (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
                <p className="text-slate-500 text-sm">Loading plans…</p>
              </div>
            )}

            {/* Error */}
            {!plansLoading && plansError && (
              <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
                <AlertCircle className="w-10 h-10 text-red-400" />
                <p className="text-slate-700 font-medium">Could not load pricing plans.</p>
                <p className="text-sm text-slate-400">{plansError}</p>
              </div>
            )}

            {/* Plan cards */}
            {!plansLoading && !plansError && plans.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {plans.map((plan, i) => (
                  <Card
                    key={plan._id}
                    className={`relative overflow-hidden p-2 transition-all ${plan.is_popular
                      ? 'border-2 border-primary shadow-stripe-2xl lg:scale-105 bg-gradient-to-br from-white via-accent/40 to-pink-50'
                      : 'border border-slate-200 hover-lift'
                      }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {plan.is_popular && (
                      <>
                        <div className="absolute -top-px left-0 right-0 h-1 gradient-primary" />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-stripe">
                            Most Popular
                          </Badge>
                        </div>
                      </>
                    )}

                    <CardHeader className="pb-4 pt-8">
                      <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                      <p className="text-slate-600 text-sm">{plan.description}</p>
                      <div className="mt-6 flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-slate-900 tracking-tight">
                          {formatPrice(plan)}
                        </span>
                        <span className="text-slate-500">{getPeriod(plan)}</span>
                      </div>
                      {plan.trial_days > 0 && !plan.is_custom_pricing && (
                        <p className="text-xs text-emerald-600 font-medium mt-1">
                          ✓ {plan.trial_days}-day free trial included
                        </p>
                      )}
                    </CardHeader>

                    <CardContent className="space-y-5">
                      {/* CTA button — opens modal */}
                      <button
                        onClick={() => handlePlanClick(plan)}
                        disabled={detecting}
                        className={`w-full py-3 rounded-2xl text-sm font-semibold transition-all ${plan.is_popular
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-stripe hover:opacity-90'
                          : plan.is_custom_pricing
                            ? 'bg-slate-900 text-white hover:bg-slate-700'
                            : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                          } disabled:opacity-60 disabled:cursor-not-allowed`}
                      >
                        {detecting ? 'Detecting location…' : getCtaLabel(plan)}
                      </button>

                      <ul className="space-y-3 pt-2">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm">
                            <span
                              className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.is_popular ? 'bg-primary text-white' : 'bg-accent text-primary'
                                }`}
                            >
                              <Check className="w-3 h-3" />
                            </span>
                            <span className="text-slate-700">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            {/* Trust indicators below plans */}
            {!plansLoading && !plansError && (
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
                {[
                  '🔒 No account needed',
                  '🇮🇳 Razorpay · UPI · Cards for India',
                  '🌍 Stripe for international',
                  '✅ Instant activation',
                  '↩️ Cancel anytime',
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-1">{item}</span>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* ── COMPARISON TABLE ──────────────────────────────────────────── */}
        <section className="py-24 section-bg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Plan comparison</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Compare every feature</h2>
              <p className="text-xl text-slate-600">All the details, side by side.</p>
            </div>
            <div className="reveal rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-stripe">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-5 text-sm font-semibold text-slate-600">Feature</th>
                    <th className="p-5 text-center text-sm font-semibold text-slate-600">Starter</th>
                    <th className="p-5 text-center text-sm font-semibold text-primary bg-accent/40">Pro</th>
                    <th className="p-5 text-center text-sm font-semibold text-slate-600">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map(([feat, ...vals], i) => (
                    <tr key={i} className="border-t border-slate-100">
                      <td className="p-5 font-medium text-slate-800">{feat as string}</td>
                      {vals.map((v, j) => (
                        <td key={j} className={`p-5 text-center ${j === 1 ? 'bg-accent/20' : ''}`}>
                          {typeof v === 'boolean' ? (
                            v ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold text-slate-700">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ──────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <AnalyticsIllustration className="w-full h-auto" />
            </div>
            <div className="reveal delay-200">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-2xl font-medium text-slate-900 leading-relaxed mb-6">
                "We tried 3 other platforms before Ctasis. The Pro plan paid for itself in week one
                from saved labor alone."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold">
                  MK
                </div>
                <div>
                  <div className="font-bold text-slate-900">Marcus Kovak</div>
                  <div className="text-sm text-slate-500">COO · Northwind Outdoors</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AI ADD-ONS ────────────────────────────────────────────────── */}
        <section className="py-24 section-bg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Inside Pro & Enterprise</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                The premium services that pay for the plan
              </h2>
              <p className="text-xl text-slate-600">
                These aren't buzzwords — they're the daily chores Ctasis does for you while you sleep.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ADDONS.map((b, i) => (
                <Card
                  key={i}
                  className="reveal hover-lift bg-white border border-slate-100"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CardContent className="p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-slate-900 text-lg">{b.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{b.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 section-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">FAQ</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently asked questions</h2>
            </div>
            <Accordion type="single" collapsible className="reveal space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white rounded-2xl border border-slate-100 px-6 shadow-sm hover:shadow-stripe transition-stripe"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
        <section className="py-24 relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-4xl mx-auto px-4 text-center reveal">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Still have questions?</h2>
            <p className="text-xl text-white/90 mb-8">Talk to our team — we'll help you pick the right plan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 shadow-stripe-xl">
                Start free trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-stripe"
              >
                Talk to sales
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* ── CHECKOUT MODAL (portal-like, above everything) ── */}
      {activePlan && (
        <CheckoutModal
          plan={activePlan}
          step={checkout.step}
          form={checkout.form}
          gateway={checkout.gateway}
          billingCycle={checkout.billingCycle}
          leadData={checkout.leadData}
          loading={checkout.loading}
          error={checkout.error}
          isIndian={country?.isIndia ?? false}

          onClose={handleCloseModal}
          onFormChange={checkout.setForm}
          onGateway={checkout.setGateway}
          onBilling={checkout.setBillingCycle}
          onSubmitForm={() => checkout.submitForm(activePlan)}
          onStartPayment={() => checkout.startPayment(activePlan)}
          onBack={() => checkout.reset()}
        />
      )}
    </Layout>
  );
};

export default Pricing;
