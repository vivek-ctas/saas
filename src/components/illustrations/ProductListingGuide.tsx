"use client";

import { useEffect, useRef, useState } from "react";
import {
    Plus,
    CheckCircle2,
    Download,
    UploadCloud,
    FileSpreadsheet,
    Settings2,
    Sparkles,
    Tag,
    Hash,
    DollarSign,
    Package,
    AlignLeft,
    ImageIcon,
    CheckCheck,
} from "lucide-react";

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
   SVG inline arrow (horizontal) – desktop only
────────────────────────────────────── */
function Arrow({ dashed = false }: { dashed?: boolean }) {
    return (
        <div className="flex items-center justify-center" style={{ width: 44, flexShrink: 0 }}>
            <svg width="44" height="18" viewBox="0 0 44 18" fill="none">
                {dashed ? (
                    <line x1="3" y1="9" x2="34" y2="9" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="5 4" />
                ) : (
                    <line x1="3" y1="9" x2="34" y2="9" stroke="#BDD9EE" strokeWidth="2" />
                )}
                <polyline points="30,4 40,9 30,14" fill="none" stroke={dashed ? "#94A3B8" : "#6BC1E0"} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
        </div>
    );
}

/* ─────────────────────────────────────
   SVG inline arrow (vertical – mobile / tablet / laptop)
────────────────────────────────────── */
function ArrowDown({ dashed = false }: { dashed?: boolean }) {
    return (
        <div className="flex items-center justify-center py-1" style={{ height: 36, flexShrink: 0 }}>
            <svg width="18" height="36" viewBox="0 0 18 36" fill="none">
                {dashed ? (
                    <line x1="9" y1="4" x2="9" y2="26" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="5 4" />
                ) : (
                    <line x1="9" y1="4" x2="9" y2="26" stroke="#BDD9EE" strokeWidth="2" />
                )}
                <polyline points="4,22 9,30 14,22" fill="none" stroke={dashed ? "#94A3B8" : "#6BC1E0"} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
        </div>
    );
}

/* ─────────────────────────────────────
   Option badge + label
────────────────────────────────────── */
function OptionLabel({ badge, label }: { badge: string; label: string }) {
    return (
        <div className="flex flex-col items-center gap-2" style={{ width: 96, flexShrink: 0 }}>
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-[#13355A] text-white leading-none shadow text-center">
                {badge}
            </span>
            <span className="text-xs font-semibold text-slate-600 text-center leading-tight">{label}</span>
        </div>
    );
}

/* ─────────────────────────────────────
   Workflow step node (icon circle + label)
────────────────────────────────────── */
function Node({
    icon: Icon,
    label,
    sub,
    variant = "white",
    delay = 0,
    visible = true,
    width = 96,
}: {
    icon: React.FC<{ className?: string }>;
    label: string;
    sub?: string;
    variant?: "white" | "blue" | "green";
    delay?: number;
    visible?: boolean;
    width?: number;
}) {
    const ring =
        variant === "blue"
            ? "bg-[#13355A] border-2 border-[#0D2440] shadow-lg shadow-[#BDD9EE]"
            : variant === "green"
                ? "bg-emerald-500 border-2 border-emerald-600 shadow-lg shadow-emerald-100"
                : "bg-white border-2 border-slate-200 shadow-md";
    const iconCls =
        variant === "blue" || variant === "green"
            ? "text-white"
            : "text-[#3C9AC4]";

    return (
        <div
            className="flex flex-col items-center gap-3"
            style={{
                width,
                flexShrink: 0,
                transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
            }}
        >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${ring}`}>
                <Icon className={`w-6 h-6 ${iconCls}`} />
            </div>
            <div className="text-center">
                <p className="text-xs font-bold text-slate-800 leading-tight">{label}</p>
                {sub && <p className="text-[10px] text-slate-500 leading-snug mt-1">{sub}</p>}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────
   Mini form card node (Option 1 fill step)
────────────────────────────────────── */
function FormNode({ visible = true, delay = 0 }: { visible?: boolean; delay?: number }) {
    return (
        <div
            className="flex flex-col items-center gap-3"
            style={{
                width: 120,
                flexShrink: 0,
                transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
            }}
        >
            <div className="w-full rounded-xl bg-white border-2 border-slate-200 shadow-md overflow-hidden">
                {/* chrome bar */}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 border-b border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="ml-1 text-[8px] text-slate-400 font-medium">Product Form</span>
                </div>
                <div className="p-1.5 space-y-1.5">
                    {/* Upload */}
                    <div className="flex items-center gap-1 rounded border border-dashed border-[#BDD9EE] bg-[#E8F0F6] px-1.5 py-1">
                        <ImageIcon className="w-2.5 h-2.5 text-[#6BC1E0] shrink-0" />
                        <span className="text-[8px] text-[#3C9AC4]">Upload Image</span>
                    </div>
                    {/* 2 Column Fields */}
                    <div className="grid grid-cols-2 gap-1">
                        {[
                            { Icon: Tag, label: "Title" },
                            { Icon: Hash, label: "SKU" },
                            { Icon: DollarSign, label: "Price" },
                            { Icon: Package, label: "Stock" },
                        ].map(({ Icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-1 rounded border border-slate-100 bg-slate-50 px-1 py-0.5 min-w-0"
                            >
                                <Icon className="w-2 h-2 text-slate-400 shrink-0" />
                                <span className="text-[7px] text-slate-500 truncate">{label}</span>
                            </div>
                        ))}
                    </div>
                    {/* Description */}
                    <div className="flex items-start gap-1 rounded border border-slate-100 bg-slate-50 px-1.5 py-1">
                        <AlignLeft className="w-2 h-2 text-slate-400 shrink-0 mt-px" />
                        <span className="text-[8px] text-slate-500">Description...</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="text-xs font-bold text-slate-800 leading-tight">Fill Product Details</p>
                <p className="text-[10px] text-slate-500 leading-snug mt-1">Title, SKU,<br />Price, Stock…</p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────
   My Catalog panel
────────────────────────────────────── */
const PRODUCTS = [
    { init: "WE", name: "Wireless Earbuds Pro", sku: "WEP-001", qty: 142 },
    { init: "LS", name: "Laptop Stand Adj.", sku: "LSA-204", qty: 87 },
    { init: "UH", name: "USB-C Hub 7-in-1", sku: "UCH-077", qty: 210 },
    { init: "MK", name: "Mech. Keyboard TKL", sku: "MKT-312", qty: 55 },
];

function CatalogPanel({ visible = true, delay = 0 }: { visible?: boolean; delay?: number }) {
    return (
        <div
            className="w-full rounded-2xl overflow-hidden border-2 border-slate-200 bg-white shadow-xl"
            style={{
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
            }}
        >
            {/* browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#13355A]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="ml-2 text-sm font-bold text-white tracking-wide">My Catalog</span>
            </div>
            {/* col headers */}
            <div className="grid grid-cols-[28px_1fr_56px_24px] gap-2 px-4 py-2 bg-slate-50 border-b border-slate-100">
                {["", "Product Name", "SKU", ""].map((h, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 truncate">{h}</span>
                ))}
            </div>
            {/* rows */}
            {PRODUCTS.map((p) => (
                <div key={p.sku} className="grid grid-cols-[28px_1fr_56px_24px] gap-2 items-center px-4 py-2 border-b border-slate-50 last:border-0">
                    <div className="w-6 h-6 rounded-md bg-[#E8F0F6] flex items-center justify-center">
                        <span className="text-[8px] font-bold text-[#13355A]">{p.init}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-800 truncate">{p.name}</span>
                    <span className="text-[10px] font-mono text-slate-500 truncate">{p.sku}</span>
                    <div className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    </div>
                </div>
            ))}
            {/* success footer */}
            <div className="flex items-center gap-2 px-4 py-3 bg-emerald-50 border-t border-emerald-100">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-emerald-700">Products Added Successfully!</span>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────
   Left sidebar
────────────────────────────────────── */
function Sidebar({ visible }: { visible: boolean }) {
    return (
        <div
            className="flex flex-col gap-5 h-full"
            style={{
                transition: "opacity 0.6s ease 100ms, transform 0.6s ease 100ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-12px)",
            }}
        >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#13355A] text-white shadow self-start">
                STEP 1
            </span>
            <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">Create Your Product Listing</h3>
                <p className="text-sm sm:text-base text-slate-500 mt-2 leading-relaxed">Add products to your catalog manually or in bulk. Listings appear in My Catalog instantly, ready to go live.</p>
            </div>
            {/* Option 1 */}
            <div className="rounded-2xl border border-[#BDD9EE] bg-[#E8F0F6] p-3 sm:p-4">
                <div className="flex gap-2.5 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#13355A] flex items-center justify-center shrink-0 mt-px">
                        <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-bold text-[#3C9AC4] uppercase tracking-wider">Option 1</p>
                        <p className="text-sm sm:text-base font-semibold text-slate-800 mt-0.5">Add Product Manually</p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-1.5 leading-relaxed">Fill product details one by one - title, SKU, price, stock, images — and save your listing.</p>
                    </div>
                </div>
            </div>
            {/* OR */}
            <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs font-bold text-slate-400">OR</span>
                <div className="flex-1 h-px bg-slate-200" />
            </div>
            {/* Option 2 */}
            <div className="rounded-2xl border border-[#BDD9EE] bg-[#E8F0F6] p-3 sm:p-4">
                <div className="flex gap-2.5 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#13355A] flex items-center justify-center shrink-0 mt-px">
                        <UploadCloud className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-bold text-[#3C9AC4] uppercase tracking-wider">Option 2</p>
                        <p className="text-sm sm:text-base font-semibold text-slate-800 mt-0.5">Import via File</p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-1.5 leading-relaxed">Download the template, fill in your product data, upload the file — all products are created automatically.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────
   Dot-grid background style (shared)
────────────────────────────────────── */
const dotBg = {
    background: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
    backgroundSize: "22px 22px",
    backgroundColor: "#F8FAFC",
} as const;

/* ─────────────────────────────────────
   Step card – used in the xl "2-column steps" layout
────────────────────────────────────── */
function StepCard({
    icon: Icon,
    label,
    sub,
    variant = "white",
    delay = 0,
    visible = true,
}: {
    icon: React.FC<{ className?: string }>;
    label: string;
    sub?: string;
    variant?: "white" | "blue";
    delay?: number;
    visible?: boolean;
}) {
    const ring = variant === "blue"
        ? "bg-[#13355A] shadow-[#BDD9EE]"
        : "bg-white border border-slate-200";
    const iconCls = variant === "blue" ? "text-white" : "text-[#3C9AC4]";

    return (
        <div
            className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-4 py-3 shadow-sm"
            style={{
                transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
            }}
        >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow ${ring}`}>
                <Icon className={`w-5 h-5 ${iconCls}`} />
            </div>
            <div className="min-w-0">
                <p className="text-sm font-bold text-slate-800 leading-tight truncate">{label}</p>
                {sub && <p className="text-xs text-slate-500 mt-0.5 leading-snug">{sub}</p>}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────── */
export function ProductListingGuide() {
    const { ref, visible } = useInView();

    return (
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3] overflow-x-hidden">
            <div className="px-5 sm:px-8 lg:px-[70px]">

                {/* Section heading */}
                <div
                    className="mb-4 sm:mb-5"
                    style={{
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(14px)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F0F6] text-[#13355A] border border-[#BDD9EE] mb-3">
                        How It Works
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 sm:mb-3">
                        Create Your Product Listing
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
                        Create product listings the way that works best for your business. Add products individually by entering all the required details, or save time by bulk-importing multiple products using a spreadsheet template. Regardless of the method you choose, SellerBuz validates your data and instantly syncs every product to your My Catalog, making your listings ready for publishing and marketplace management within seconds.
                    </p>
                </div>

                {/* Main bordered container */}
                <div
                    ref={ref}
                    className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden"
                    style={{
                        transition: "opacity 0.6s ease 80ms",
                        opacity: visible ? 1 : 0,
                    }}
                >
                    {/* ── Inner layout: sidebar + diagram ───────── */}
                    {/*
                        Breakpoint strategy (no horizontal scrollbar on ANY size):
                        - xs/sm/md/lg   (< 1280px)  → full-width sidebar stacked above vertical flow
                        - xl            (1280–1535px) → sidebar left | 2-col step cards right
                        - 2xl+          (≥ 1536px)   → sidebar left | classic horizontal arrow diagram
                    */}
                    <div className="flex flex-col xl:flex-row">

                        {/* ── Sidebar ─────────────────────────────── */}
                        <div className="w-full xl:w-[340px] 2xl:w-[380px] shrink-0 border-b xl:border-b-0 xl:border-r border-slate-100 p-5 sm:p-8">
                            <Sidebar visible={visible} />
                        </div>

                        {/* ── Diagram area ─────────────────────────── */}
                        <div className="flex-1 min-w-0">

                            {/* ══════════════════════════════════════════
                                MOBILE / TABLET / SMALL LAPTOP (< xl = <1280px)
                                Vertical flow: all steps in a clean column
                            ══════════════════════════════════════════ */}
                            <div
                                className="xl:hidden rounded-2xl py-6 px-5 flex flex-col items-center gap-1"
                                style={dotBg}
                            >
                                {/* Option 1 */}
                                <OptionLabel badge="OPTION 1" label="Add Product Manually" />
                                <ArrowDown dashed />
                                <Node icon={Plus} label="Add Product" variant="blue" visible={visible} delay={150} width={110} />
                                <ArrowDown />
                                <div className="w-full max-w-[170px]">
                                    <FormNode visible={visible} delay={250} />
                                </div>
                                <ArrowDown />
                                <Node icon={CheckCircle2} label="Save Product" sub="Added to My Catalog" variant="blue" visible={visible} delay={350} width={110} />

                                {/* OR divider */}
                                <div className="flex items-center gap-3 my-4 w-full max-w-[260px]">
                                    <div className="flex-1 h-px border-t-2 border-dashed border-slate-200" />
                                    <span className="text-[11px] font-bold text-slate-400 bg-white border border-slate-200 rounded-full px-3 py-0.5 shadow-sm select-none">OR</span>
                                    <div className="flex-1 h-px border-t-2 border-dashed border-slate-200" />
                                </div>

                                {/* Option 2 */}
                                <OptionLabel badge="OPTION 2" label="Import Products via File" />
                                <ArrowDown dashed />
                                <Node icon={Download} label="Download Sample" sub="Get template as reference" visible={visible} delay={200} width={110} />
                                <ArrowDown />
                                <Node icon={FileSpreadsheet} label="Fill the Template" sub="Enter product details in file" visible={visible} delay={300} width={120} />
                                <ArrowDown />
                                <Node icon={UploadCloud} label="Upload File" sub="Upload the completed file" visible={visible} delay={400} width={110} />
                                <ArrowDown />

                                {/* Catalog */}
                                <div className="w-full max-w-[380px]">
                                    <CatalogPanel visible={visible} delay={550} />
                                </div>

                                {/* Bottom sync strip */}
                                <div
                                    className="mt-4 flex items-start gap-2 bg-white border border-[#BDD9EE] rounded-2xl px-4 py-3 shadow-sm w-full max-w-[380px]"
                                    style={{ transition: "opacity 0.6s ease 700ms", opacity: visible ? 1 : 0 }}
                                >
                                    <CheckCircle2 className="w-4 h-4 text-[#3C9AC4] shrink-0 mt-px" />
                                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                                        Both paths sync instantly to My Catalog — listings go live on Amazon within seconds.
                                    </p>
                                </div>
                            </div>

                            {/* ══════════════════════════════════════════
                                xl ONLY (1280–1535px): 2-column step card grid
                                No fixed widths → guaranteed to fit without overflow
                            ══════════════════════════════════════════ */}
                            <div
                                className="hidden xl:flex 2xl:hidden flex-col gap-4 p-6"
                                style={dotBg}
                            >
                                {/* OPTION 1 block */}
                                <div
                                    className="rounded-2xl bg-white/60 border border-slate-200 p-4 space-y-3"
                                    style={{ transition: `opacity 0.5s ease 100ms`, opacity: visible ? 1 : 0 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#13355A] text-white leading-none shadow">OPTION 1</span>
                                        <span className="text-sm font-semibold text-slate-600">Add Product Manually</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <StepCard icon={Plus} label="Add Product" variant="blue" visible={visible} delay={150} />
                                        <StepCard icon={ImageIcon} label="Fill Product Details" sub="Title, SKU, Price, Stock…" visible={visible} delay={220} />
                                        <StepCard icon={CheckCircle2} label="Save Product" sub="Added to My Catalog" variant="blue" visible={visible} delay={290} />
                                        <StepCard icon={Sparkles} label="Live on Catalog" sub="Listing ready instantly" visible={visible} delay={360} />
                                    </div>
                                </div>

                                {/* OR divider */}
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-px border-t-2 border-dashed border-slate-300" />
                                    <span className="text-[11px] font-bold text-slate-400 bg-white border border-slate-200 rounded-full px-3 py-0.5 shadow-sm select-none">OR</span>
                                    <div className="flex-1 h-px border-t-2 border-dashed border-slate-300" />
                                </div>

                                {/* OPTION 2 block */}
                                <div
                                    className="rounded-2xl bg-white/60 border border-slate-200 p-4 space-y-3"
                                    style={{ transition: `opacity 0.5s ease 300ms`, opacity: visible ? 1 : 0 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#13355A] text-white leading-none shadow">OPTION 2</span>
                                        <span className="text-sm font-semibold text-slate-600">Import Products via File</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <StepCard icon={Download} label="Download Sample" sub="Get template as reference" visible={visible} delay={350} />
                                        <StepCard icon={FileSpreadsheet} label="Fill the Template" sub="Enter product details in file" visible={visible} delay={420} />
                                        <StepCard icon={UploadCloud} label="Upload File" sub="Upload the completed file" visible={visible} delay={490} />
                                        <StepCard icon={CheckCircle2} label="Products Created" sub="All listings auto-generated" variant="blue" visible={visible} delay={560} />
                                    </div>
                                </div>

                                {/* Catalog preview */}
                                <div className="mt-1">
                                    <CatalogPanel visible={visible} delay={600} />
                                </div>

                                {/* Bottom sync strip */}
                                <div
                                    className="flex items-start gap-2.5 bg-white border border-[#BDD9EE] rounded-2xl px-4 py-3 shadow-sm"
                                    style={{ transition: "opacity 0.6s ease 700ms", opacity: visible ? 1 : 0 }}
                                >
                                    <CheckCircle2 className="w-4 h-4 text-[#3C9AC4] shrink-0 mt-px" />
                                    <p className="text-sm font-semibold text-slate-700">
                                        Both paths sync instantly to My Catalog — listings go live on Amazon within seconds.
                                    </p>
                                </div>
                            </div>

                            {/* ══════════════════════════════════════════
                                2xl+ (≥1536px): Classic horizontal arrow diagram
                                At this viewport: sidebar(380) + diagram fits comfortably
                                Grid total ≈ 960px; diagram area = 1536-140-380 = 1016px ✓
                            ══════════════════════════════════════════ */}
                            <div
                                className="hidden 2xl:block rounded-2xl py-6 pb-8 pr-4 pl-2"
                                style={dotBg}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "160px 44px 100px 44px 160px 44px 100px 44px 300px",
                                        gridTemplateRows: "auto 30px auto",
                                        alignItems: "center",
                                        gap: "0",
                                        width: "100%",
                                    }}
                                >
                                    {/* ROW 0: OPTION 1 */}
                                    <div style={{ gridColumn: 1, gridRow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <OptionLabel badge="OPTION 1" label="Add Product Manually" />
                                    </div>
                                    <div style={{ gridColumn: 2, gridRow: 1 }}><Arrow dashed /></div>
                                    <div style={{ gridColumn: 3, gridRow: 1, display: "flex", justifyContent: "center" }}>
                                        <Node icon={Plus} label="Add Product" variant="blue" visible={visible} delay={150} />
                                    </div>
                                    <div style={{ gridColumn: 4, gridRow: 1 }}><Arrow /></div>
                                    <div style={{ gridColumn: 5, gridRow: 1, display: "flex", justifyContent: "center" }}>
                                        <FormNode visible={visible} delay={250} />
                                    </div>
                                    <div style={{ gridColumn: 6, gridRow: 1 }}><Arrow /></div>
                                    <div style={{ gridColumn: 7, gridRow: 1, display: "flex", justifyContent: "center" }}>
                                        <Node icon={CheckCircle2} label="Save Product" sub="Added to My Catalog" variant="blue" visible={visible} delay={350} />
                                    </div>
                                    <div style={{ gridColumn: 8, gridRow: 1 }}><Arrow /></div>
                                    {/* My Catalog spans all rows */}
                                    <div style={{ gridColumn: 9, gridRow: "1 / 4", display: "block", paddingLeft: 10 }}>
                                        <CatalogPanel visible={visible} delay={550} />
                                    </div>

                                    {/* ROW 1: OR divider */}
                                    <div style={{ gridColumn: "1 / 9", gridRow: "2", display: "flex", alignItems: "center", paddingLeft: 2 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <div style={{ height: 1, width: 28, borderTop: "2px dashed #CBD5E1" }} />
                                            <span style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8", background: "white", border: "1px solid #E2E8F0", borderRadius: 999, padding: "2px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>OR</span>
                                            <div style={{ height: 1, width: 28, borderTop: "2px dashed #CBD5E1" }} />
                                        </div>
                                    </div>

                                    {/* ROW 2: OPTION 2 */}
                                    <div style={{ gridColumn: 1, gridRow: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <OptionLabel badge="OPTION 2" label="Import Products via File" />
                                    </div>
                                    <div style={{ gridColumn: 2, gridRow: 3 }}><Arrow dashed /></div>
                                    <div style={{ gridColumn: 3, gridRow: 3, display: "flex", justifyContent: "center" }}>
                                        <Node icon={Download} label="Download Sample" sub="Get template" visible={visible} delay={200} width={88} />
                                    </div>
                                    <div style={{ gridColumn: 4, gridRow: 3 }}><Arrow /></div>
                                    <div style={{ gridColumn: 5, gridRow: 3, display: "flex", justifyContent: "center" }}>
                                        <Node icon={FileSpreadsheet} label="Fill Template" sub="Enter product details" visible={visible} delay={300} width={100} />
                                    </div>
                                    <div style={{ gridColumn: 6, gridRow: 3 }}><Arrow /></div>
                                    <div style={{ gridColumn: 7, gridRow: 3, display: "flex", justifyContent: "center" }}>
                                        <Node icon={UploadCloud} label="Upload File" sub="Upload completed file" visible={visible} delay={400} width={100} />
                                    </div>
                                    <div style={{ gridColumn: 8, gridRow: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Arrow />
                                    </div>
                                </div>

                                {/* Bottom sync strip */}
                                <div
                                    className="mt-6 flex items-start gap-2.5 bg-white border border-[#BDD9EE] rounded-2xl px-4 py-3 shadow-sm"
                                    style={{ transition: "opacity 0.6s ease 700ms", opacity: visible ? 1 : 0 }}
                                >
                                    <CheckCircle2 className="w-5 h-5 text-[#3C9AC4] shrink-0" />
                                    <p className="text-sm font-semibold text-slate-700">
                                        Both paths sync instantly to My Catalog — listings go live on Amazon within seconds.
                                    </p>
                                </div>
                            </div>

                        </div>{/* end diagram area */}
                    </div>{/* end flex row */}
                </div>{/* end main bordered container */}

                {/* Three feature callouts */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6"
                    style={{
                        transition: "opacity 0.6s ease 500ms, transform 0.6s ease 500ms",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(10px)",
                    }}
                >
                    {[
                        { icon: Tag, title: "No Limits on Products", desc: "Add as many products as your plan allows — one at a time or thousands via bulk import." },
                        { icon: FileSpreadsheet, title: "Excel & CSV Supported", desc: "Download our sample template, fill it in, and upload. We handle the rest automatically." },
                        { icon: CheckCircle2, title: "Instant Catalog Sync", desc: "Every product appears in My Catalog within seconds, ready to push live on Amazon." },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
                            <div className="w-9 h-9 rounded-xl bg-[#E8F0F6] flex items-center justify-center shrink-0 mt-0.5">
                                <Icon className="w-5 h-5 text-[#3C9AC4]" />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-slate-900">{title}</p>
                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ProductListingGuide;