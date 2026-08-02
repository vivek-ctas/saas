'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check, Sparkles, ArrowRight, Quote, Star, Loader2,
  Clock,
  CheckCircle2,
  RefreshCw,
  BarChart2,
  ShieldCheck,
  BookOpen,
  Headphones,
  Zap,
  Globe,
  Lock,
  Gauge,
  LayoutGrid,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout';
import PageHero from '@/components/pageHero';
import { AnalyticsIllustration, PricingCalculatorMockup } from '@/components/illustrations/pricePageIllustrations';
import { useReveal } from '@/hooks/use-reveal';
import { MaintenanceState } from '@/components/maintenancestate';
import { usePlans } from '@/hooks/use-plans';

import { useCheckout } from '@/hooks/use-checkout';
import CheckoutModal from '@/components/checkoutModal';
import type { Plan } from '@/types';
import { formatConvertedPrice } from '@/services/currency.service';

// ── Static content ─────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "How do I get started?",
    a: "Choose the plan that best fits your business and contact our team. We'll guide you through the onboarding and setup process."
  },
  { q: 'Can I change plans anytime?', a: 'Absolutely. Upgrade or downgrade at any time from your billing settings.' },
  { q: 'What Marketplace are supported?', a: "Currently Amazon and Shopify. We're building integrations based on seller demand." },
  { q: 'How is my data secured?', a: 'SOC 2 Type II certified, end-to-end encryption, regular pen-tests, and GDPR compliant.' },
  { q: 'Do you offer migration help?', a: 'Yes, our white-glove onboarding team will migrate your listings and catalog history for free on Pro & Enterprise.' },
  { q: 'What happens if I exceed limits?', a: "We'll notify you well before you hit a cap - no surprise charges, ever." },
];

const ADDONS = [
  {
    title: 'AI listing generator',
    desc: "Got a spreadsheet of products? Paste it in. Our AI writes complete Amazon and Shopify listings - titles, bullets, search terms - formatted exactly to each Marketplace's rules so you stop getting suppressed listings.",
  },
  {
    title: 'Listing asset library (S3)',
    desc: 'Store brand banners, comparison charts and lifestyle images in organized S3 folders. Reuse across products and push directly to Amazon and Shopify listings.',
  },
  {
    title: 'Centralized catalog + FBA/FBM',
    desc: 'One golden record per SKU, mapped to every channel. Hybrid fulfillment routing decides whether to ship from FBA, FBM or a 3PL - based on cost, speed and stock levels.',
  },
  {
    title: 'AI listing mismatch retry',
    desc: "When Amazon or Shopify rejects a listing, SellerBuz AI rewrites the content and retries automatically — fixing titles, attributes and formatting until it passes. Full audit trail of every attempt.",
  },
];

// Static data: every plan includes these - easy to hydrate from backend later
const PLAN_PERKS = [
  {
    icon: RefreshCw,
    title: 'Order synchronization',
    desc: 'Sync orders in real-time across all channels',
    color: 'text-primary',
    bg: 'bg-accent',
  },
  {
    icon: BarChart2,
    title: 'Analytics dashboard',
    desc: 'Insightful reports to grow your business',
    color: 'text-[#3C9AC4]',
    bg: 'bg-[#E8F0F6]',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & reliable',
    desc: 'Bank-level security and 99.9% uptime',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Zap,
    title: 'AI-powered tools',
    desc: 'Smart automation to help grow your business',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: BookOpen,
    title: 'Guides & resources',
    desc: 'Step-by-step guides and best practices',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: Headphones,
    title: 'Multi-channel support',
    desc: 'Email, chat and priority support options',
    color: 'text-[#3C9AC4]',
    bg: 'bg-[#E8F0F6]',
  },
];

// ── Display helpers ────────────────────────────────────────────────────────────

function formatPrice(plan: Plan, selectedInterval?: 'month' | 'quarterly'): string {
  if (plan.is_custom_plan) return 'Custom';
  let price = plan.price;
  if (selectedInterval === 'quarterly' && plan.price_quarterly) {
    price = plan.price_quarterly;
  }

  // Prices are stored in the smallest unit (cents). Convert to dollars first.
  return formatConvertedPrice(price / 100, 'USD');
}

function getPeriod(plan: Plan, selectedInterval?: 'month' | 'quarterly'): string {
  if (plan.is_custom_plan) return '';

  const interval = selectedInterval || plan.interval;

  switch (interval) {
    case 'month':
      return '/mo';

    case 'quarterly':
      return '/qtr';

    case 'year':
      return '/yr';

    default:
      return interval ? `/${interval}` : '';
  }
}

function getCtaLabel(plan: Plan): string {
  if (plan.is_custom_plan) return 'Contact Sales';
  if (plan.trial_days > 0) return 'Start Free Trial';
  return 'Get Started';
}

// ── Component ──────────────────────────────────────────────────────────────────

const Pricing = () => {
  const ref = useReveal<HTMLDivElement>();

  const { plans, loading: plansLoading, error: plansError } = usePlans();
  const [activePlan, setActivePlan] = useState<Plan | null>(null);
  const [selectedInterval, setSelectedInterval] = useState<'month' | 'quarterly'>('month');
  const checkout = useCheckout('stripe'); // default; user will manually select on summary step
  function handlePlanClick(plan: Plan) {
    if (plan.is_custom_plan) {
      window.location.href = '/contact';
      return;
    }
    // Ensure checkout uses the plan's interval (monthly/quarterly) automatically
    checkout.setBillingCycle(selectedInterval === 'month' ? 'monthly' : 'quarterly');
    setActivePlan(plan);
  }

  function handleCloseModal() {
    setActivePlan(null);
    checkout.reset();
  }

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={Sparkles}
          badgeText="Transparent pricing"
          title={
            <>
              Pricing that scales{' '}
              <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">
                with your business.
              </span>
            </>
          }
          subtitle="Choose the plan that fits your business and start managing every marketplace from one platform."
          visual={<PricingCalculatorMockup className="w-full h-auto" />}
          actions={
            <>
              <Link href="#plan-benefits">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 h-12 border-primary/20 bg-white hover:bg-accent text-slate-900 rounded-full shadow-sm"
                >
                  View Plan Benefits
                </Button>
              </Link>
              <Link href="#plans">
                <Button size="lg" className="text-base px-8 h-12 rounded-full group bg-gradient-to-r from-[#13355A] via-[#1B4A75] to-[#3C9AC4] hover:opacity-95 border-0">
                  See plan
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </>
          }
        />

        {/* ── PLANS SECTION ──────────────────────────────────────────────────── */}
        <section id="plans" className="relative py-16 sm:py-20 lg:py-24 bg-white border-t border-[#EAECF3] overflow-hidden">

          {/* ── Animated background ── */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Blob A – top-left */}
            <div className="pricing-blob-a absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#3C9AC4]/8 blur-[80px]" />
            {/* Blob B – top-right */}
            <div className="pricing-blob-b absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-[#13355A]/7 blur-[70px]" />
            {/* Blob C – bottom-centre */}
            <div className="pricing-blob-c absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[280px] rounded-full bg-[#3C9AC4]/6 blur-[90px]" />

            {/* Scrolling SVG wave path */}
            <div className="absolute bottom-0 left-0 w-[200%] h-28 opacity-[0.07] pricing-wave">
              <svg viewBox="0 0 1440 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0 56 C240 0, 480 112, 720 56 S1200 0, 1440 56 V112 H0Z" fill="#13355A" />
                <path d="M0 56 C240 0, 480 112, 720 56 S1200 0, 1440 56 V112 H0Z" fill="#13355A" transform="translate(720)" />
              </svg>
            </div>

            {/* Subtle dot grid */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: 'radial-gradient(circle, #13355A 1px, transparent 1px)',
                backgroundSize: '36px 36px',
              }}
            />
          </div>

          <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-[70px]">

            {/* Section header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                Choose your{' '}
                <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">
                  plan
                </span>
              </h2>
              <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
                Choose the plan that fits your business and upgrade anytime.
              </p>
            </div>

            {/* Loading */}
            {plansLoading && (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
                <p className="text-slate-500 text-sm">Loading plans…</p>
              </div>
            )}

            {/* Error */}
            {!plansLoading && plansError && (
              // <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
              //   <AlertCircle className="w-10 h-10 text-red-400" />
              //   <p className="text-slate-700 font-medium">Could not load pricing plans.</p>
              //   <p className="text-sm text-slate-400">{plansError}</p>
              // </div>
              <MaintenanceState onRetry={() => window.location.reload()} />
            )}

            {/* Plan cards */}
            {!plansLoading && !plansError && plans.length > 0 && (() => {
              const filteredPlans = plans
                .filter(p => {
                  if (selectedInterval === 'month') return p.interval === 'month' || p.interval === 'both';
                  if (selectedInterval === 'quarterly') return p.interval === 'quarterly' || p.interval === 'both';
                  return false;
                })
                .sort((a, b) => (a.is_custom_plan === b.is_custom_plan ? 0 : a.is_custom_plan ? 1 : -1));

              // Max 4 cards per row on lg; 5th+ wraps to the next row automatically
              const colClass =
                filteredPlans.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' :
                  filteredPlans.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' :
                    filteredPlans.length === 3 ? 'grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto' :
                      'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto';

              return (
                <div>
                  {/* Billing toggle */}
                  <div className="mb-10 flex items-center justify-center">
                    <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-slate-200 shadow-md">
                      <button
                        onClick={() => setSelectedInterval('month')}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selectedInterval === 'month'
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-slate-500 hover:text-slate-800'
                          }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setSelectedInterval('quarterly')}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selectedInterval === 'quarterly'
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-slate-500 hover:text-slate-800'
                          }`}
                      >
                        Quarterly
                      </button>
                    </div>
                  </div>

                  {/* Cards — max 4 per row on lg, 5th wraps to next row */}
                  <div className={`grid gap-5 lg:gap-6 items-stretch ${colClass}`}>
                    {filteredPlans.map((plan, i) => {
                      // ── Dynamic plan-type icon & accent config ──────────────
                      const PlanIcon = plan.is_custom_plan ? LayoutGrid : plan.is_popular ? Rocket : Zap;
                      const iconBg = plan.is_custom_plan
                        ? 'bg-slate-800'
                        : plan.is_popular
                          ? 'bg-gradient-to-br from-[#3C9AC4] to-[#13355A]'
                          : 'bg-accent';
                      const iconColor = plan.is_custom_plan || plan.is_popular
                        ? 'text-white'
                        : 'text-primary';

                      return (
                        <div
                          key={plan._id}
                          className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300
                            ${plan.is_popular
                              ? 'bg-gradient-to-b from-white via-[#EFF6FF] to-accent/60 border-2 border-primary shadow-2xl md:-translate-y-3'
                              : plan.is_custom_plan
                                ? 'bg-slate-900 border border-slate-700 text-white hover:shadow-2xl hover:scale-[1.01]'
                                : 'bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl hover:scale-[1.005]'
                            }`}
                          style={{ transitionDelay: `${i * 80}ms` }}
                        >
                          {/* Popular top accent bar */}
                          {plan.is_popular && (
                            <div className="h-1 w-full bg-gradient-to-r from-[#3C9AC4] to-[#13355A] flex-shrink-0" />
                          )}

                          <div className="flex flex-col flex-1 p-6 sm:p-7">

                            {/* ── Plan header icon + name + type badge ── */}
                            <div className="flex items-start justify-between gap-2 mb-3">
                              <div className="flex items-center gap-3">
                                {/* Plan-type icon */}
                                <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${iconBg}`}>
                                  <PlanIcon className={`w-5 h-5 ${iconColor}`} />
                                </span>
                                <div>
                                  <h3 className={`text-xl font-bold leading-tight ${plan.is_custom_plan ? 'text-white' : 'text-slate-900'
                                    }`}>{plan.name}</h3>
                                  {/* Plan-type label under name */}
                                  <p className={`text-[11px] font-medium mt-0.5 ${plan.is_custom_plan ? 'text-slate-400' :
                                    plan.is_popular ? 'text-[#3C9AC4]' :
                                      'text-slate-400'
                                    }`}>
                                    {plan.is_custom_plan ? 'Enterprise / Custom' :
                                      plan.is_popular ? '★ Recommended Plan' :
                                        'Standard Plan'}
                                  </p>
                                </div>
                              </div>

                              {/* Badge (popular only) */}
                              {plan.is_popular && (
                                <Badge className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] text-white border-0 shadow text-[10px] px-2 py-0.5 flex-shrink-0 mt-0.5">
                                  Popular
                                </Badge>
                              )}
                            </div>

                            {/* Description */}
                            <p className={`text-sm mb-5 ${plan.is_custom_plan ? 'text-slate-400' : 'text-slate-500'
                              }`}>{plan.desc}</p>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 mb-1">
                              <span className={`text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight break-words ${plan.is_custom_plan ? 'text-white' : 'text-slate-900'
                                }`}>
                                {formatPrice(plan, selectedInterval)}
                              </span>
                              <span className={`text-base font-medium ${plan.is_custom_plan ? 'text-slate-400' : 'text-slate-400'
                                }`}>{getPeriod(plan, selectedInterval)}</span>
                            </div>

                            {/* {plan.trial_days > 0 && !plan.is_custom_plan && (
                              <p className="text-xs text-emerald-600 font-medium mt-1">
                                ✓ {plan.trial_days}-day free trial included
                              </p>
                            )} */}
                            <p className={`text-xs font-semibold mb-6 ${plan.is_custom_plan ? 'text-slate-400' : 'text-primary'
                              }`}>
                              ✓ Get started immediately
                            </p>

                            {/* CTA button */}
                            <button
                              onClick={() => handlePlanClick(plan)}
                              className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${plan.is_popular
                                ? 'bg-gradient-to-r from-[#3C9AC4] to-[#13355A] text-white shadow-md hover:opacity-90 hover:shadow-lg'
                                : plan.is_custom_plan
                                  ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-md'
                                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                                } disabled:opacity-60 disabled:cursor-not-allowed`}
                            >
                              {getCtaLabel(plan)}
                            </button>

                            {/* Divider */}
                            <hr className={`my-5 ${plan.is_custom_plan ? 'border-slate-700' : 'border-slate-200/70'
                              }`} />

                            {/* Feature list */}
                            <ul className="space-y-2.5 flex-1">
                              {plan.marketing_features.map((f, j) => (
                                <li key={j} className="flex items-start gap-3 text-sm">
                                  <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.is_custom_plan
                                    ? 'bg-slate-700 text-slate-300'
                                    : plan.is_popular
                                      ? 'bg-primary text-white'
                                      : 'bg-accent text-primary'
                                    }`}>
                                    <Check className="w-3 h-3" />
                                  </span>
                                  <span className={`leading-snug ${plan.is_custom_plan ? 'text-slate-300' : 'text-slate-600'
                                    }`}>{f.trim()}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Bottom "MOST POPULAR" ribbon (popular card only) */}
                          {plan.is_popular && (
                            <div className="absolute -bottom-px inset-x-0 flex justify-center">
                              <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] text-white text-[10px] font-bold tracking-widest px-4 py-1 rounded-t-lg shadow">
                                BEST VALUE
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* Trust indicators */}
            {!plansLoading && !plansError && (
              <div className="mt-12">
                {/* Card strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 rounded-2xl border border-slate-200 bg-[#F7F9FC] p-3 sm:p-4">
                  {([
                    { icon: Zap, title: 'Instant Activation', sub: 'Get started right away' },
                    { icon: Globe, title: 'Global Payments', sub: 'Pay from anywhere' },
                    { icon: Lock, title: 'Secure Checkout', sub: '100% secure payments' },
                    { icon: Gauge, title: '99.9% Uptime', sub: 'Reliable & always on' },
                    { icon: Headphones, title: 'Dedicated Support', sub: "We're here to help" },
                  ] as { icon: React.ElementType; title: string; sub: string }[]).map(({ icon: Icon, title, sub }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl bg-white border border-slate-100 px-4 py-3 shadow-sm"
                    >
                      <span className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-800 leading-tight">{title}</p>
                        <p className="text-xs text-slate-400 mt-0.5 leading-tight">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer note */}
                <p className="mt-4 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  Cancel anytime &nbsp;·&nbsp; No hidden charges
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── PLAN PERKS BANNER ───────────────────────────────────────────────── */}
        <section id="plan-benefits" className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            {/* Heading */}
            <p className="text-center text-lg font-semibold text-slate-700 mb-8">
              Everything included in every plan
            </p>

            {/* Perk cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {PLAN_PERKS.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                  >
                    <span className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${perk.bg}`}>
                      <Icon className={`w-5 h-5 ${perk.color}`} />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm leading-snug">{perk.title}</p>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">{perk.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F1F3FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="reveal lg:scale-105 xl:scale-110 origin-center">
              <AnalyticsIllustration className="w-full h-auto " />
            </div>
            <div className="reveal delay-200">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-900 leading-relaxed mb-6">
                "We tried 3 other platforms before SellerBuz. The Pro plan paid for itself in week one
                from saved labor alone."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3C9AC4] to-[#13355A] flex items-center justify-center text-white font-bold">
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

        {/* ── AI ADD-ONS ──────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-[#EAECF3]">
          <div className="relative px-5 sm:px-8 lg:px-[70px]">
            <div className="text-center mb-14 reveal max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent text-primary border border-primary/10">Inside Pro & Enterprise</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                The premium services that{" "}
                <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">
                  pay for the plan
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600">
                These aren't buzzwords - they're the daily chores SellerBuz does for you while you sleep.
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
                      <h3 className="font-bold text-slate-900 text-lg lg:text-xl">{b.title}</h3>
                    </div>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{b.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────────── */}
        <section className="py-14 bg-[#F1F3FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-8 reveal">
              <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">Frequently asked</span> questions
            </h2>
            <div className="space-y-3 reveal">
              {FAQS.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200/70 bg-white p-5 hover:border-[#BDD9EE] shadow-sm hover:shadow-lg transition-all"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 flex items-center justify-between list-none">
                    {f.q}
                    <span className="text-[#3C9AC4] group-open:rotate-45 transition-transform text-2xl leading-none shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ─────────────────────────────────────────────────────── */}
        <section className="py-14 lg:py-16 relative overflow-hidden bg-gradient-to-br from-[#13355A] to-[#1a4a7a]">
          <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-[70px] text-center reveal">
            <Sparkles className="w-12 h-12 text-white/20 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Ready to scale your marketplace business?</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto"> Choose the plan that fits your business and start managing every marketplace from one powerful platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing#plans">
                <Button size="lg" className="text-lg px-8 rounded-full bg-white text-primary hover:bg-accent border-0 shadow-lg">
                  Choose Your Plan
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline"
                  className="text-lg px-8 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:text-white shadow-lg transition-all duration-300">
                  Talk to our team
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/80 text-sm">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Secure Payments
              </span>

              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Fast Onboarding
              </span>

              <span className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Dedicated Support
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* ── CHECKOUT MODAL ── */}
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

          onClose={handleCloseModal}
          onFormChange={checkout.setForm}
          onGateway={checkout.setGateway}
          onBilling={checkout.setBillingCycle}
          onClearError={checkout.clearError}
          onSubmitForm={() => checkout.submitForm(activePlan)}
          onStartPayment={() => checkout.startPayment(activePlan)}
        // onBack={checkout.reset}
        />
      )}
    </Layout>
  );
};

export default Pricing;
