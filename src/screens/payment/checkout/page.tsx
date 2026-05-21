"use client";
import { useState } from 'react';
import { CreditCard, Globe, Smartphone, ShieldCheck } from 'lucide-react';

const paymentMethods = [
    {
        id: 'stripe',
        label: 'Stripe',
        description: 'Secure card checkout using Stripe with a real redirect flow.',
        buttonLabel: 'Pay with Stripe',
        color: 'from-slate-900 to-slate-700 text-white',
        icon: CreditCard,
        highlight: 'Fast, secure, and trusted by millions.',
    },
    {
        id: 'googlepay',
        label: 'Google Pay',
        description: 'Mobile wallet checkout ideal for quick one-tap payments.',
        buttonLabel: 'Demo Google Pay',
        color: 'from-emerald-500 to-cyan-500 text-white',
        icon: Globe,
        highlight: 'Smooth mobile-first checkout experience.',
    },
    {
        id: 'phonepay',
        label: 'PhonePe',
        description: 'UPI-style payment method for fast mobile transfers.',
        buttonLabel: 'Demo PhonePe',
        color: 'from-violet-600 to-fuchsia-600 text-white',
        icon: Smartphone,
        highlight: 'Designed for Indian mobile payments and UPI flow.',
    },
    {
        id: 'payteam',
        label: 'PayTeam',
        description: 'Enterprise-ready payment flow with team billing preview.',
        buttonLabel: 'Demo PayTeam',
        color: 'from-orange-500 to-amber-500 text-slate-900',
        icon: ShieldCheck,
        highlight: 'Great for business payments and invoicing demos.',
    },
];

export default function CheckoutPage() {
    const [activeMethod, setActiveMethod] = useState<string>('stripe');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string>('Select a payment method to continue.');

    async function handlePayment(method: string) {
        setActiveMethod(method);
        setLoading(true);
        setMessage('Starting demo payment...');

        if (method === 'stripe') {
            try {
                const url = `${window.location.origin}/api/stripe/checkout`;
                const res = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type':  'application/json' },
                    body: JSON.stringify({
                        name: 'Pro Plan (Demo)',
                        unit_amount: 7900,
                        method,
                    }),
                });

                const data = await res.json();
                if (res.ok && data?.url) {
                    window.location.href = data.url;
                    return;
                }

                setMessage(data?.error || 'Stripe checkout session could not be created.');
            } catch (err: any) {
                console.error(err);
                setMessage(err?.message || 'Stripe checkout failed. Please refresh and try again.');
            } finally {
                setLoading(false);
            }
            return;
        }

        window.setTimeout(() => {
            setLoading(false);
            setMessage(`Demo payment completed successfully with ${paymentMethods.find((item) => item.id === method)?.label}.`);
        }, 900);
    }

    return (
        <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.5fr_0.65fr] items-start">
                <section>
                    <div className="mb-10 rounded-4xl border border-slate-200 bg-white px-8 py-10 shadow-sm">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Choose payment method</p>
                                <h1 className="mt-4 text-4xl font-semibold text-slate-900">Select your preferred way to pay</h1>
                            </div>
                            <div className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                                Demo mode
                            </div>
                        </div>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                            Select your preferred way to pay. All transactions are encrypted and protected.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {paymentMethods.map((method) => {
                            const Icon = method.icon;
                            const isActive = activeMethod === method.id;
                            return (
                                <button
                                    key={method.id}
                                    type="button"
                                    onClick={() => setActiveMethod(method.id)}
                                    className={`w-full rounded-4xl border px-6 py-5 text-left shadow-sm transition duration-300 ${isActive ? 'border-primary bg-slate-50 shadow-lg' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'}`}
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`flex h-14 w-14 items-center justify-center rounded-3xl ${isActive ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700'}`}>
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3">
                                                    <h2 className="text-lg font-semibold text-slate-900">{method.label}</h2>
                                                    {method.id === 'stripe' && (
                                                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600">
                                                            Popular
                                                        </span>
                                                    )}
                                                    {method.id === 'googlepay' && (
                                                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
                                                            Recommended
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="mt-2 text-sm text-slate-500">{method.description}</p>
                                                <p className="mt-3 text-xs text-slate-400">256-bit encrypted</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-3">
                                            <span className={`h-5 w-5 rounded-full border ${isActive ? 'border-primary bg-primary' : 'border-slate-300 bg-white'}`}>
                                                {isActive && <span className="block h-full w-full rounded-full bg-white/0" />}
                                            </span>
                                            <span className="text-sm font-semibold text-slate-700">{method.id === 'stripe' ? '$79' : ''}</span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </section>

                <aside className="space-y-6">
                    <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Order summary</p>
                                <p className="mt-3 text-2xl font-semibold text-slate-900">₹79.00</p>
                            </div>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">
                                One-time
                            </span>
                        </div>

                        <div className="mt-8 space-y-4 text-sm text-slate-600">
                            <div className="flex items-center justify-between">
                                <span>Plan</span>
                                <span>Pro Plan</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Billing</span>
                                <span>One-time</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Payment method</span>
                                <span>{paymentMethods.find((method) => method.id === activeMethod)?.label}</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => handlePayment(activeMethod)}
                            disabled={loading}
                            className="mt-8 w-full rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? 'Processing…' : `Pay ₹79.00 with ${paymentMethods.find((method) => method.id === activeMethod)?.label}`}
                        </button>
                    </div>

                    <div className="rounded-4xl border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 rounded-2xl bg-emerald-100 p-2 text-emerald-700">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Your payment is protected</p>
                                <p className="mt-2 text-sm text-slate-600">PCI-DSS Level 1 certified · 3D Secure · Buyer protection on every order.</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
