"use client";

import { useEffect, useRef, useState } from "react";
import {
    Globe,
    Store,
    ShieldCheck,
    CheckCircle2,
    Plus,
    ChevronDown,
    ArrowRight,
    LockKeyhole,
    BadgeCheck,
    Check,
    StoreIcon,
} from "lucide-react";
import { StepFlowDiagram } from "../../components/illustrations/guidePageIllustrations";

/* ─────────────────────────────────────
   Scroll-reveal hook
────────────────────────────────────── */
function useInView(threshold = 0.08) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

/* ─────────────────────────────────────
   Step 01: Select Marketplace mockup
   Single unified SVG - continents + flags
   in the same coordinate space so they
   always align at any container width.
────────────────────────────────────── */
function SelectMarketplaceMockup() {
    return (
        <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            {/* chrome bar */}
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 border-b border-slate-100 bg-slate-50">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="ml-2 text-[11px] sm:text-xs font-semibold text-slate-500">Amazon</span>
            </div>

            {/* Single unified SVG map - everything in one coordinate system */}
            <div className="mx-1.5 sm:mx-2 mt-1.5 sm:mt-2 mb-1 rounded-lg sm:rounded-xl overflow-hidden border border-slate-100">
                <svg
                    viewBox="0 0 280 118"
                    className="w-full block"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ background: "linear-gradient(135deg,#EFF6FF 0%,#F8FAFC 100%)" }}
                >
                    {/* ── Continent blobs ── */}
                    {/* Americas */}
                    <ellipse cx="52" cy="58" rx="28" ry="20" fill="#E8F0F6" fillOpacity="0.8" />
                    <ellipse cx="56" cy="86" rx="15" ry="13" fill="#E8F0F6" fillOpacity="0.8" />
                    {/* Europe */}
                    <ellipse cx="138" cy="46" rx="22" ry="15" fill="#E8F0F6" fillOpacity="0.8" />
                    {/* Africa */}
                    <ellipse cx="140" cy="74" rx="15" ry="18" fill="#E8F0F6" fillOpacity="0.8" />
                    {/* Asia */}
                    <ellipse cx="208" cy="50" rx="42" ry="20" fill="#E8F0F6" fillOpacity="0.8" />
                    {/* Australia */}
                    <ellipse cx="240" cy="88" rx="18" ry="10" fill="#E8F0F6" fillOpacity="0.8" />

                    {/* ── Dashed connection lines from USA (52,58) ── */}
                    <line x1="52" y1="58" x2="135" y2="43" stroke="#BDD9EE" strokeWidth="1.2" strokeDasharray="5 3" />
                    <line x1="52" y1="58" x2="208" y2="47" stroke="#BDD9EE" strokeWidth="1.2" strokeDasharray="5 3" />
                    <line x1="52" y1="58" x2="204" y2="72" stroke="#BDD9EE" strokeWidth="1.2" strokeDasharray="5 3" />

                    {/* ── Canada (inactive) ── */}
                    <circle cx="48" cy="28" r="11" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="48" y="33" textAnchor="middle" fontSize="13" dominantBaseline="auto">🇨🇦</text>

                    {/* ── USA (active - large blue ring) ── */}
                    <circle cx="52" cy="58" r="16" fill="#3C9AC4" />
                    <circle cx="52" cy="58" r="20" fill="none" stroke="#BDD9EE" strokeWidth="2" />
                    <text x="52" y="64" textAnchor="middle" fontSize="17" dominantBaseline="auto">🇺🇸</text>

                    {/* ── UK ── */}
                    <circle cx="132" cy="42" r="11" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="132" y="47" textAnchor="middle" fontSize="13" dominantBaseline="auto">🇬🇧</text>

                    {/* ── Germany ── */}
                    <circle cx="148" cy="70" r="11" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="148" y="75" textAnchor="middle" fontSize="13" dominantBaseline="auto">🇩🇪</text>

                    {/* ── Japan ── */}
                    <circle cx="232" cy="38" r="11" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="232" y="43" textAnchor="middle" fontSize="13" dominantBaseline="auto">🇯🇵</text>

                    {/* ── India ── */}
                    <circle cx="208" cy="76" r="11" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="208" y="81" textAnchor="middle" fontSize="13" dominantBaseline="auto">🇮🇳</text>
                </svg>
            </div>

            {/* Add region + Next */}
            <div className="px-2.5 sm:px-3 pb-2.5 sm:pb-3 space-y-1.5">
                <button className="w-full flex items-center justify-center gap-1.5 border border-dashed border-slate-300 rounded-lg sm:rounded-xl py-1.5 text-[11px] sm:text-xs text-slate-500 hover:bg-slate-50 transition-colors">
                    <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span className="truncate">Add More Region…</span>
                </button>
                <div className="w-full flex items-center justify-center gap-1.5 bg-[#13355A] text-white rounded-lg sm:rounded-xl py-2 text-[11px] sm:text-xs font-semibold cursor-pointer select-none">
                    Next <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                </div>
            </div>
        </div>
    );
}


/* ─────────────────────────────────────
   Step 02: Add Store Details mockup
────────────────────────────────────── */
function AddStoreMockup() {
    return (
        <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden h-full flex flex-col">
            {/* title */}
            <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2 border-b border-slate-100">
                <p className="text-sm sm:text-base font-bold text-slate-900">Add Amazon Store</p>
            </div>
            <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-3">
                    {/* Store name */}
                    <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-slate-500 mb-1">Store Name</label>
                        <div className="flex items-center gap-2 border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 bg-slate-50">
                            <Store className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="text-[11px] sm:text-xs text-slate-400 truncate">Enter Store Name</span>
                        </div>
                    </div>
                    {/* Channel select */}
                    <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-slate-500 mb-1 leading-snug">
                            Select the channel you wish to authorize for access
                        </label>
                        <div className="flex items-center justify-between gap-2 border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 bg-slate-50">
                            <div className="flex items-center gap-1.5 min-w-0">
                                <span className="text-sm shrink-0">🇺🇸</span>
                                <span className="text-[11px] sm:text-xs text-slate-700 font-medium truncate">Amazon.com (USA)</span>
                            </div>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        </div>
                    </div>
                </div>
                {/* Continue button */}
                <div className="w-full flex items-center justify-center gap-1.5 bg-[#13355A] text-white rounded-lg sm:rounded-xl py-2.5 text-[11px] sm:text-xs font-semibold">
                    Continue <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </div>
            </div>
        </div>
    );
}
/* ─────────────────────────────────────
   Step 03: Connect to Amazon mockup
────────────────────────────────────── */
function ConnectAmazonMockup() {
    return (
        <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden h-full flex flex-col">
            {/* title */}
            <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2 border-b border-slate-100">
                <p className="text-sm sm:text-base font-bold text-slate-900">Amazon Authorization</p>
            </div>
            <div className="p-3 sm:p-4 flex-1 flex flex-col items-center justify-between gap-3">
                <div className="flex flex-col items-center gap-2.5 sm:gap-3">
                    {/* Amazon logo circle */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                        <img src="/logos/amazon-color-svgrepo-com.svg" alt="Amazon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-[11px] sm:text-xs text-slate-500 text-center leading-relaxed">
                            Connect your Amazon Seller Central account to authorize access.
                        </p>
                    </div>
                    {/* connect button */}
                    <div className="w-full flex items-center justify-center gap-1.5 bg-[#13355A] text-white rounded-lg sm:rounded-xl py-2.5 text-[11px] sm:text-xs font-semibold">
                        <LockKeyhole className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">Connect to Amazon</span>
                    </div>
                </div>
                {/* status row */}
                <div className="flex items-center justify-around w-full pt-1 gap-1">
                    {[
                        { icon: Globe, label: "Authorize" },
                        { icon: ShieldCheck, label: "Verify" },
                        { icon: Check, label: "Success" },
                    ].map(({ icon: Icon, label }, i) => (
                        <div key={label} className="flex flex-col items-center gap-1 min-w-0">
                            <div
                                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 shrink-0 ${i === 2
                                    ? "bg-emerald-500 border-emerald-500"
                                    : i === 1
                                        ? "bg-[#E8F0F6] border-[#BDD9EE]"
                                        : "bg-slate-100 border-slate-200"
                                    }`}
                            >
                                <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i === 2 ? "text-white" : i === 1 ? "text-[#3C9AC4]" : "text-slate-500"}`} />
                            </div>
                            <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
/* ─────────────────────────────────────
   Individual step card
────────────────────────────────────── */
function StepCard({
    num,
    title,
    desc,
    children,
    delay = 0,
    visible = true,
}: {
    num: string;
    title: string;
    desc: string;
    children: React.ReactNode;
    delay?: number;
    visible?: boolean;
}) {
    return (
        <div
            className="flex flex-col gap-2.5 sm:gap-3 h-full"
            style={{
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
            }}
        >
            {/* step header */}
            <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold bg-[#13355A] text-white shrink-0 shadow">
                    {num}
                </span>
                <div className="min-w-0">
                    <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight">{title}</p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                </div>
            </div>
            {/* ui mockup */}
            <div className="flex-1 flex flex-col">{children}</div>
        </div>
    );
}

/* ─────────────────────────────────────
   Arrow between step cards
────────────────────────────────────── */
function StepArrow({ visible }: { visible: boolean }) {
    return (
        <div
            className="hidden lg:flex items-center justify-center shrink-0 mt-10 px-1"
            style={{
                transition: "opacity 0.5s ease 400ms",
                opacity: visible ? 1 : 0,
            }}
        >
            <svg width="44" height="14" viewBox="0 0 44 14">
                <line x1="2" y1="7" x2="34" y2="7" stroke="#BDD9EE" strokeWidth="2" />
                <polyline points="30,3 38,7 30,11" fill="none" stroke="#6BC1E0" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

/* ─────────────────────────────────────
   MAIN EXPORT
────────────────────────────────────── */
export function ConnectAmazonGuide() {
    const { ref, visible } = useInView();

    return (
        <section className="py-10 sm:py-14 lg:py-20 bg-white border-t border-[#EAECF3]">
            <div className="px-4 sm:px-8 lg:px-[70px]">

                {/* Section heading */}
                <div
                    className="mb-4 sm:mb-5"
                    style={{
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(14px)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#E8F0F6] text-[#13355A] border border-[#BDD9EE] mb-2.5 sm:mb-3">
                        How It Works
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2.5 sm:mb-3 leading-tight">
                        Connect Your <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">Amazon Store</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed w-full">
                        Link your Amazon Seller Central account in just 3 simple steps. Select your marketplace, add your store details, and securely authorize access through Amazon's official OAuth process. Once connected, SellerBuz automatically syncs your store, enabling real-time inventory, orders, and pricing updates so you can start selling within minutes.
                    </p>
                </div>

                {/* Main panel */}
                <div
                    ref={ref}
                    className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden"
                    style={{
                        transition: "opacity 0.6s ease 80ms",
                        opacity: visible ? 1 : 0,
                    }}
                >
                    {/* top label strip */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-slate-100 bg-slate-50">
                        <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-[#13355A] text-white shadow shrink-0">
                            STEP 2
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-slate-700">Amazon Workflow</span>
                        <span className="text-xs sm:text-sm text-slate-400 sm:ml-auto hidden md:block">
                            Connect your Amazon store in 3 simple steps
                        </span>
                    </div>

                    {/* Step cards */}
                    <div className="p-3 sm:p-6 lg:p-8">

                        {/* dot-grid bg */}
                        <div
                            className="rounded-xl sm:rounded-2xl p-3 sm:p-6"
                            style={{
                                background: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
                                backgroundSize: "22px 22px",
                                backgroundColor: "#F8FAFC",
                            }}
                        >
                            {/* 3-column card row */}
                            <div className="flex flex-col lg:flex-row items-stretch gap-5 sm:gap-6 lg:gap-0">
                                {/* STEP 01 */}
                                <div className="flex-1 min-w-0">
                                    <StepCard
                                        num="01"
                                        title="Select Marketplace"
                                        desc='Click on "Add More Region…" and click Next.'
                                        visible={visible}
                                        delay={100}
                                    >
                                        <SelectMarketplaceMockup />
                                    </StepCard>
                                </div>

                                <StepArrow visible={visible} />

                                {/* STEP 02 */}
                                <div className="flex-1 min-w-0">
                                    <StepCard
                                        num="02"
                                        title="Add Store Details"
                                        desc="Add store name and select the channel (Marketplace country) you wish to authorize for access."
                                        visible={visible}
                                        delay={200}
                                    >
                                        <AddStoreMockup />
                                    </StepCard>
                                </div>

                                <StepArrow visible={visible} />

                                {/* STEP 03 */}
                                <div className="flex-1 min-w-0">
                                    <StepCard
                                        num="03"
                                        title="Connect to Amazon"
                                        desc='Click "Connect to Amazon" and complete the authentication to create your store.'
                                        visible={visible}
                                        delay={300}
                                    >
                                        <ConnectAmazonMockup />
                                    </StepCard>
                                </div>
                            </div>

                            {/* bottom connector flow */}
                            <div className="w-full flex justify-center px-2">
                                <StepFlowDiagram
                                    steps={[
                                        { icon: <Globe size={60} color="#13355A" />, title: "Select Region", subtitle: "Choose your Amazon\nmarketplace region." },
                                        { icon: <Store size={60} color="#13355A" />, title: "Store Details", subtitle: "Add your store name\nand marketplace." },
                                        { icon: <ShieldCheck size={60} color="#13355A" />, title: "Authorize", subtitle: "Securely connect your\nSeller Central account." },
                                        { icon: <StoreIcon size={60} color="#13355A" />, title: "Store Created", subtitle: "Your Amazon store\nis now connected!" },
                                    ]}
                                    style={{ width: '100%', maxWidth: 700, height: 'auto' }}
                                />
                            </div>
                        </div>

                        {/* footer info strip */}
                        <div
                            className="mt-4 sm:mt-5 flex items-start gap-2 sm:gap-2.5 bg-[#E8F0F6] border border-[#BDD9EE] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3"
                            style={{
                                transition: "opacity 0.6s ease 800ms",
                                opacity: visible ? 1 : 0,
                            }}
                        >
                            <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#3C9AC4] shrink-0 mt-0.5 sm:mt-0" />
                            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                                One-time setup. Once authorized, SellerBuz syncs your Amazon store automatically - inventory, orders and pricing update in real time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Three feature callouts */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-5 sm:mt-6"
                    style={{
                        transition: "opacity 0.6s ease 500ms, transform 0.6s ease 500ms",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(10px)",
                    }}
                >
                    {[
                        {
                            icon: Globe,
                            title: "Multiple Marketplaces",
                            desc: "Connect Amazon US, UK, Canada, Germany, Japan, India and more from a single account.",
                        },
                        {
                            icon: LockKeyhole,
                            title: "Secure OAuth Flow",
                            desc: "Authorization uses Amazon's official OAuth - your credentials are never stored by SellerBuz.",
                        },
                        {
                            icon: CheckCircle2,
                            title: "Instant Activation",
                            desc: "Your store is live and syncing within minutes of completing the authorization step.",
                        },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl sm:rounded-2xl px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#E8F0F6] flex items-center justify-center shrink-0 mt-0.5">
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#3C9AC4]" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm sm:text-base font-semibold text-slate-900">{title}</p>
                                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ConnectAmazonGuide;