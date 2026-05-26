"use client";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-14 max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Payment Successful!</h1>
        <p className="text-slate-500 text-sm mb-8">
          Thank you — your plan has been activated. You're all set to start selling smarter.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-8 py-3 text-sm font-semibold hover:bg-slate-700 transition-colors"
        >
          Back to dashboard <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
