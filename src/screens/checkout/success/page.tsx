'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Loader2, AlertCircle, Calendar, Sparkles, Mail,
} from 'lucide-react';
import { verifyStripeSession } from '@/services/checkout.service';
import type { ActivationData } from '@/types';

/**
 * /checkout/success
 *
 * Two landing scenarios:
 *
 * 1. Razorpay — useCheckout already called verifyRazorpayPayment(), then
 *    router.push('/checkout/success?gateway=razorpay&lead_id=xxx&expires_at=...&plan_name=...')
 *    → No extra API call needed here. Data is in URL params.
 *
 * 2. Stripe — Stripe redirects to:
 *    /checkout/success?session_id=cs_xxx&lead_id=xxx
 *    (session_id is appended by Stripe to the success_url we passed)
 *    → This page calls verifyStripeSession({ lead_id, session_id }) once.
 *    → Backend verifies with Stripe API → creates tbl_user_plans → returns activation.
 */
export default function CheckoutSuccessPage() {
  const params = useSearchParams();

  // Common params
  const gateway = params.get('gateway') || 'stripe';
  const leadId = params.get('lead_id') || '';

  // Razorpay: pre-verified by useCheckout, values come in URL
  const expiresAt = params.get('expires_at') || '';
  const planName = params.get('plan_name') || '';

  // Stripe: session_id appended by Stripe to success_url
  const sessionId = params.get('session_id') || '';

  const isStripe = gateway === 'stripe' && !!sessionId && !!leadId;
  const isRazorpay = gateway === 'razorpay';

  const [verifying, setVerifying] = useState(isStripe);
  const [activation, setActivation] = useState<ActivationData | null>(null);
  const [verifyError, setVerifyError] = useState<string | null>(null);

  // ── Stripe: verify session once on mount ────────────────────────────────────

  useEffect(() => {
    if (!isStripe) {
      setVerifying(false);
      return;
    }

    // POST /v1/public-checkout/stripe/verify-session
    // Body: { lead_id, session_id }  ← EXACT field names backend expects
    verifyStripeSession({ lead_id: leadId, session_id: sessionId })
      .then(({ data, error }) => {
        console.log('Stripe verification result:', { data, error });
        if (error || !data) {
          setVerifyError(error || 'Verification failed. Please contact support.');
        } else {
          setActivation(data);
        }
        setVerifying(false);
      });
  }, []); // run once on mount only

  // ── Display values ──────────────────────────────────────────────────────────

  // Razorpay: from URL params (already verified server-side)
  // Stripe:   from activation API response
  const displayExpiry = activation?.expires_at || expiresAt;
  const displayPlanName = activation?.plan_name || planName;

  const formattedExpiry = displayExpiry
    ? new Date(displayExpiry).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric',
    })
    : null;

  // ── Loading state ───────────────────────────────────────────────────────────

  if (verifying) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-14 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 mb-2">Confirming your payment…</h1>
          <p className="text-slate-500 text-sm">
            Please wait while we verify your transaction with Stripe.
          </p>
        </div>
      </div>
    );
  }

  // ── Error state ─────────────────────────────────────────────────────────────

  if (verifyError) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-14 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Verification failed</h1>
          <p className="text-slate-500 text-sm mb-2">{verifyError}</p>
          <p className="text-slate-400 text-xs mb-8">
            If you were charged, please email{' '}
            <a href="mailto:support@ctasis.com" className="underline hover:text-primary">
              support@ctasis.com
            </a>{' '}
            with your payment ID.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 text-slate-700 px-6 py-2.5 text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            Back to pricing
          </Link>
        </div>
      </div>
    );
  }

  // ── Success state ───────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl px-10 py-14 max-w-lg w-full text-center relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative">
          {/* Icon */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">You're all set! 🎉</h1>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            Your{displayPlanName ? ` ${displayPlanName}` : ''} subscription is now active.
            Our team will reach out within 24 hours to help you get started.
          </p>

          {/* Detail cards */}
          <div className="space-y-3 mb-8 text-left">

            {formattedExpiry && (
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-100 px-5 py-4">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Subscription active until</div>
                  <div className="text-sm font-semibold text-slate-800">{formattedExpiry}</div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 border border-emerald-100 px-5 py-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500">What happens next</div>
                <div className="text-sm font-semibold text-slate-800">
                  Check your inbox — welcome email is on its way
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-primary/5 border border-primary/20 px-5 py-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Onboarding</div>
                <div className="text-sm font-semibold text-slate-800">
                  Our team will contact you within 24 hours
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 text-slate-700 px-6 py-3 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Contact support
            </Link>
            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Go to homepage <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
