"use client";
import Link from "next/link";
import { XCircle, ArrowLeft } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-14 max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-10 h-10 text-red-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Payment Cancelled</h1>
        <p className="text-slate-500 text-sm mb-8">
          No worries — nothing was charged. You can try again whenever you're ready.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-8 py-3 text-sm font-semibold hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to pricing
        </Link>
      </div>
    </div>
  );
}
