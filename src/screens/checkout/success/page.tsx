'use client';
import { useEffect, useState }  from 'react';
import { useSearchParams }       from 'next/navigation';
import Link                      from 'next/link';
import {
  CheckCircle2, ArrowRight, Loader2, AlertCircle, Calendar, Mail, Sparkles,
} from 'lucide-react';
import { verifyStripeSession }   from '@/services/checkout.service';
import type { ActivationData }   from '@/types';

/**
 * /checkout/success
 *
 * Two landing scenarios:
 *
 * 1. Razorpay — useCheckout already called verifyRazorpayPayment, then
 *    router.push('/checkout/success?gateway=razorpay&lead_id=xxx&expires_at=...')
 *    → No API call needed here.
 *
 * 2. Stripe — Stripe redirects to:
 *    /checkout/success?session_id=cs_xxx&lead_id=xxx
 *    → This page calls verifyStripeSession (field: session_id) and shows result.
 */
export default function CheckoutSuccessPage() {
  const params = useSearchParams();

  const gateway   = params.get('gateway')    || 'stripe';
  const leadId    = params.get('lead_id')    || '';
  const sessionId = params.get('session_id') || '';          // Stripe
  const expiresAt = params.get('expires_at') || '';          // Razorpay (pre-verified)

  const [verifying,   setVerifying]   = useState(gateway === 'stripe' && !!sessionId);
  const [activation,  setActivation]  = useState<ActivationData | null>(null);
  const [verifyError, setVerifyError] = useState<string | null>(null);

  // ── Stripe: verify session on mount ────────────────────────────────────────

  useEffect(() => {
    if (gateway !== 'stripe' || !sessionId || !leadId) {
      setVerifying(false);
      return;
    }

    verifyStripeSession({ lead_id: leadId, session_id: sessionId })
      .then(({ data, error }) => {
        if (error || !data) setVerifyError(error || 'Verification failed. Please contact support.');
        else                setActivation(data);
        setVerifying(false);
      });
  }, [gateway, sessionId, leadId]);

  // ── Display values ──────────────────────────────────────────────────────────

  // For Razorpay: expires_at comes from URL param (already verified by useCheckout)
  // For Stripe: expires_at comes from activation response
  const displayExpiry = activation?.expires_at || expiresAt;

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
          <p className="text-slate-500 text-sm">Please wait while we verify your transaction with Stripe.</p>
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
            Your subscription is now active.
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

            <div className="flex items-center gap-3 rounded-2xl bg-primary/5 border border-primary/20 px-5 py-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Next step</div>
                <div className="text-sm font-semibold text-slate-800">
                  Our onboarding team will email you shortly
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
