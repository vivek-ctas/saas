'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react';

/**
 * /checkout/cancel
 * Stripe redirects here when user clicks "Back" on the Stripe hosted page.
 */
export default function CheckoutCancelPage() {
  const params = useSearchParams();
  const leadId = params.get('lead_id') || '';

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-14 max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-10 h-10 text-slate-400" />
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-2">Payment cancelled</h1>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          No charge was made. Your plan details are saved — you can pick up where you left off.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-900 text-white px-8 py-3 text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <RefreshCw className="w-4 h-4" /> Try again
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 text-slate-600 px-8 py-3 text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Need help?{' '}
          <a href="/contact" className="underline hover:text-blue-600">Contact us</a>
        </p>
      </div>
    </div>
  );
}
