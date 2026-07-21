'use client';
import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Loader2, AlertCircle, Calendar, Sparkles, Mail,
} from 'lucide-react';
import { verifyStripeSession, verifyRazorpayActivation } from '@/services/checkout.service';
import type { ActivationData } from '@/types';

/**
 * /checkout/success
 *
 * CHANGED from original:
 *
 * 1. Razorpay - was reading plan_name and expired_at from URL params (tamper-able).
 *    Now calls GET /v1/public-checkout/seller/:leadId to fetch activation data
 *    server-side, exactly like Stripe does.
 *
 * 2. Stripe - unchanged: calls verifyStripeSession({ lead_id, session_id }).
 *    The session_id is appended by Stripe to the success_url.
 *    The gateway=stripe is now explicit in the URL (no more fallback guess).
 *
 * 3. Removed all console.log calls.
 *
 * 4. Added error boundary with support email link.
 *
 * 5. Deduplication: the verify call is guarded with a ref to prevent
 *    React StrictMode double-invoke from activating twice in development.
 */
export default function CheckoutSuccessPage() {
  const params = useSearchParams();

  const gateway = params.get('gateway') || 'stripe';
  const leadId = params.get('lead_id') || '';
  const sessionId = params.get('session_id') || ''; // appended by Stripe

  const isStripe = gateway === 'stripe';
  const isRazorpay = gateway === 'razorpay';

  const [verifying, setVerifying] = useState(true);
  const [activation, setActivation] = useState<ActivationData | null>(null);
  const [verifyError, setVerifyError] = useState<string | null>(null);

  // Prevent double-fire in React 18 StrictMode (dev only)
  const didVerify = useRef(false);

  useEffect(() => {
    if (didVerify.current) return;
    didVerify.current = true;

    if (!leadId) {
      setVerifyError('Missing lead information. Please contact support.');
      setVerifying(false);
      return;
    }

    // ── Stripe: verify the Stripe session with our backend ────────────────
    if (isStripe) {
      if (!sessionId) {
        setVerifyError('Missing Stripe session ID. Please contact support.');
        setVerifying(false);
        return;
      }

      verifyStripeSession({ lead_id: leadId, session_id: sessionId })
        .then(({ data, error }) => {
          if (error || !data) {
            setVerifyError(error || 'Verification failed. Please contact support.');
          } else {
            setActivation(data);
          }
          setVerifying(false);
        });

      return;
    }

    // ── Razorpay: payment was already verified in useCheckout handler.
    //    Fetch activation summary from the server so we never read
    //    plan_name / expired_at from tamper-able URL params.
    if (isRazorpay) {
      verifyRazorpayActivation(leadId)
        .then(({ data, error }) => {
          if (error || !data) {
            setVerifyError(error || 'Could not retrieve account details. Please contact support.');
          } else {
            setActivation(data);
          }
          setVerifying(false);
        });

      return;
    }

    // Unknown gateway
    setVerifyError('Unknown payment gateway. Please contact support.');
    setVerifying(false);
  }, []); // run once on mount

  // ── Display helpers ───────────────────────────────────────────────────────
  const formattedExpiry = activation?.expired_at
    ? new Date(activation.expired_at).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric',
    })
    : null;

  // ── Loading ───────────────────────────────────────────────────────────────
  if (verifying) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-14 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
            <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 mb-2">Confirming your payment…</h1>
          <p className="text-slate-500 text-sm">
            Please wait while we verify your transaction.
          </p>
        </div>
      </div>
    );
  }

  // ── Error ─────────────────────────────────────────────────────────────────
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
            If you were charged, email{' '}
            <a href="mailto:support@ctas.in" className="underline hover:text-blue-600">
              support@ctas.in
            </a>{' '}
            with your payment reference.
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

  // ── Success ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl px-10 py-14 max-w-lg w-full text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">You're all set! 🎉</h1>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            Your{activation?.plan_name ? ` ${activation.plan_name}` : ''} subscription is now active.
          </p>

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
                  Check your inbox - a password setup link is on its way
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-blue-50/60 border border-blue-100 px-5 py-4">
              <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Onboarding</div>
                <div className="text-sm font-semibold text-slate-800">
                  Our team will contact you within 24 hours
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 text-slate-700 px-6 py-3 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Contact support
            </Link>
            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-900 text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Go to homepage <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
