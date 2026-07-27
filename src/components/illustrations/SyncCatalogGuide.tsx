"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    Search,
    Plus,
    RefreshCw,
    ChevronDown,
    MoreVertical,
    Pencil,
    Eye,
    Trash2,
    CheckCircle2,
    Package,
    ArrowRight,
    BadgeCheck,
    Send,
    ShoppingBag,
    Tag,
    Star,
} from "lucide-react";

/* ─────────────────────────────────────
   Scroll-reveal hook
────────────────────────────────────── */
function useInView(threshold = 0.06) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

/* ─────────────────────────────────────
   Shared step arrow
────────────────────────────────────── */
function StepArrow({ visible }: { visible: boolean }) {
    return (
        <div
            className="flex items-center justify-center shrink-0 mt-10 px-1"
            style={{ transition: "opacity 0.5s ease 450ms", opacity: visible ? 1 : 0 }}
        >
            <svg width="44" height="14" viewBox="0 0 44 14">
                <line x1="2" y1="7" x2="34" y2="7" stroke="#BFDBFE" strokeWidth="2" />
                <polyline points="30,3 38,7 30,11" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

/* ─────────────────────────────────────
   Step card wrapper
────────────────────────────────────── */
function StepCard({
    num, title, desc, children, delay = 0, visible = true,
}: {
    num: string; title: string; desc: string;
    children: React.ReactNode; delay?: number; visible?: boolean;
}) {
    return (
        <div
            className="flex flex-col gap-3 flex-1 min-w-0"
            style={{
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
            }}
        >
            <div className="flex items-start gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-xl text-[11px] font-bold bg-blue-600 text-white shrink-0 shadow">
                    {num}
                </span>
                <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">{title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                </div>
            </div>
            {children}
        </div>
    );
}

/* ─────────────────────────────────────
   STEP 01 MOCKUP — My Catalog Table
────────────────────────────────────── */
const CATALOG_ROWS = [
    { init: "🎧", name: "Wireless Headphones", sku: "WH-1000XM5", price: "$199.00", stock: 45, checked: true },
    { init: "⌚", name: "Smart Watch", sku: "SW-200", price: "$129.00", stock: 60, checked: true },
    { init: "🔊", name: "Bluetooth Speaker", sku: "BS-300", price: "$79.00", stock: 30, checked: false },
    { init: "🎒", name: "Laptop Backpack", sku: "LB-400", price: "$49.00", stock: 25, checked: false },
    { init: "🔌", name: "USB-C Charger", sku: "UC-500", price: "$29.00", stock: 100, checked: true },
];

function MyCatalogMockup() {
    return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-100 bg-slate-50">
                <span className="text-xs font-bold text-slate-800">My Catalog</span>
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[10px] font-semibold">
                    <Plus className="w-2.5 h-2.5" /> Add Product
                </button>
            </div>
            {/* search */}
            <div className="flex items-center gap-1.5 mx-3 my-2 border border-slate-200 rounded-lg px-2 py-1.5 bg-slate-50">
                <Search className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[9px] text-slate-400">Search products…</span>
            </div>
            {/* col headers */}
            <div className="grid grid-cols-[20px_16px_1fr_52px_38px_32px] gap-1 px-3 py-1 bg-slate-50 border-y border-slate-100">
                {["", "", "TITLE", "SKU", "PRICE", "STOCK"].map((h, i) => (
                    <span key={i} className="text-[8px] font-bold text-slate-400 uppercase tracking-wider truncate">{h}</span>
                ))}
            </div>
            {/* rows */}
            {CATALOG_ROWS.map((r) => (
                <div key={r.sku} className="grid grid-cols-[20px_16px_1fr_52px_38px_32px] gap-1 items-center px-3 py-1.5 border-b border-slate-50 last:border-0">
                    <div className={`w-3.5 h-3.5 rounded border-2 flex items-center justify-center ${r.checked ? "bg-blue-600 border-blue-600" : "border-slate-300"}`}>
                        {r.checked && <span className="text-[7px] text-white font-bold">✓</span>}
                    </div>
                    <span className="text-sm">{r.init}</span>
                    <span className="text-[9px] font-medium text-slate-800 truncate">{r.name}</span>
                    <span className="text-[8px] font-mono text-slate-400 truncate">{r.sku}</span>
                    <span className="text-[9px] font-medium text-slate-700">{r.price}</span>
                    <span className="text-[9px] text-slate-500">{r.stock}</span>
                </div>
            ))}
            {/* footer */}
            <div className="flex items-center justify-between px-3 py-2 border-t border-slate-100 bg-slate-50">
                <span className="text-[9px] text-slate-500">3 products selected</span>
                <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[9px] font-semibold">
                    <RefreshCw className="w-2.5 h-2.5" /> Sync to Amazon
                </button>
            </div>
            {/* info strip */}
            <div className="flex items-start gap-2 mx-3 mb-3 mt-1 bg-blue-50 border border-blue-100 rounded-xl px-2.5 py-2">
                <Send className="w-3 h-3 text-blue-500 shrink-0 mt-px" />
                <p className="text-[9px] text-blue-700 leading-relaxed">
                    Selected products will be synced to <span className="font-semibold">Amazon Inventory</span> for the selected country.
                </p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────
   STEP 02 MOCKUP — Amazon Inventory
────────────────────────────────────── */
const INV_ROWS = [
    { init: "🎧", title: "Wireless Headphones", sku: "WH-1000XM5" },
    { init: "⌚", title: "Smart Watch", sku: "SW-200" },
    { init: "🔌", title: "USB-C Charger", sku: "UC-500" },
];

function AmazonInventoryMockup() {
    return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-100 bg-slate-50">
                <span className="text-xs font-bold text-slate-800">Amazon Inventory</span>
                <div className="flex items-center gap-1 border border-slate-200 rounded-lg px-2 py-1 bg-white">
                    <span className="text-xs">🇺🇸</span>
                    <span className="text-[9px] text-slate-600 font-medium">Amazon.com (USA)</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                </div>
            </div>
            {/* col headers */}
            <div className="grid grid-cols-[16px_1fr_52px_36px_40px_28px] gap-1 px-3 py-1.5 bg-slate-50 border-b border-slate-100">
                {["", "TITLE", "SKU", "TYPE", "STATUS", ""].map((h, i) => (
                    <span key={i} className="text-[8px] font-bold text-slate-400 uppercase tracking-wider truncate">{h}</span>
                ))}
            </div>
            {/* rows */}
            {INV_ROWS.map((r, idx) => (
                <div key={r.sku} className={`grid grid-cols-[16px_1fr_52px_36px_40px_28px] gap-1 items-center px-3 py-2 border-b border-slate-50 last:border-0 ${idx === 0 ? "relative" : ""}`}>
                    <span className="text-sm">{r.init}</span>
                    <span className="text-[9px] font-medium text-slate-800 truncate">{r.title}</span>
                    <span className="text-[8px] font-mono text-slate-400 truncate">{r.sku}</span>
                    <span className="text-[8px] text-slate-400">—</span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        Draft
                    </span>
                    <button className="w-5 h-5 rounded flex items-center justify-center hover:bg-slate-100">
                        <MoreVertical className="w-3 h-3 text-slate-400" />
                    </button>
                </div>
            ))}
            {/* context menu hint */}
            <div className="mx-3 mb-2 mt-1 rounded-xl border border-blue-100 bg-blue-50 overflow-hidden shadow-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 border-b border-blue-100 hover:bg-blue-100 cursor-pointer">
                    <Plus className="w-3 h-3 text-blue-600" />
                    <span className="text-[9px] font-semibold text-blue-700">Add Inventory Details</span>
                </div>
                {[{ icon: Pencil, label: "Edit" }, { icon: Eye, label: "View" }, { icon: Trash2, label: "Delete" }].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 px-3 py-1.5 hover:bg-blue-50 border-b border-blue-50 last:border-0 cursor-pointer">
                        <Icon className="w-3 h-3 text-slate-500" />
                        <span className="text-[9px] text-slate-600">{label}</span>
                    </div>
                ))}
            </div>
            {/* footer */}
            <div className="flex items-start gap-2 mx-3 mb-3 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2">
                <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0 mt-px" />
                <p className="text-[9px] text-slate-600 leading-relaxed">
                    Products are synced as <span className="font-semibold text-amber-700">Draft</span>. Add inventory details to publish on Amazon.
                </p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────
   STEP 03 MOCKUP — Add Inventory Details
────────────────────────────────────── */
function AddInventoryMockup() {
    return (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden space-y-0">
            {/* sub-step 1: Select Product Type */}
            <div className="p-3 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0">1</span>
                    <span className="text-[10px] font-bold text-slate-800">Select Product Type</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 mb-2">
                    <div className="flex items-center gap-1.5">
                        <span className="text-[8px] text-slate-500">Product Type</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full border-2 border-blue-600 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            </div>
                            <span className="text-[8px] text-slate-700">Retail</span>
                        </label>
                        <label className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full border-2 border-slate-300" />
                            <span className="text-[8px] text-slate-400">White Label</span>
                        </label>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[8px] text-slate-500 w-20 shrink-0">SKU</span>
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-2 py-1">
                        <span className="text-[8px] font-mono text-slate-600">WL-TSHIRT-001</span>
                    </div>
                </div>
                <div className="mt-2 flex justify-end">
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[9px] font-semibold">
                        Next <ArrowRight className="w-2 h-2" />
                    </div>
                </div>
            </div>

            {/* sub-step 2: Fill Product Info */}
            <div className="p-3 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0">2</span>
                    <span className="text-[10px] font-bold text-slate-800">Fill Product Information</span>
                </div>
                <div className="flex gap-2">
                    {/* Left form */}
                    <div className="flex-1 space-y-1">
                        <span className="text-[8px] font-semibold text-slate-500 block">Basic Information</span>
                        {[
                            { label: "Product Name", val: "Cotton T-Shirt" },
                            { label: "Brand", val: "Your Brand" },
                            { label: "Category", val: "Clothing & Accessories > Men > Shirts" },
                            { label: "Color", val: "Black" },
                            { label: "Size", val: "M" },
                        ].map(({ label, val }) => (
                            <div key={label} className="grid grid-cols-[60px_1fr] gap-1 items-center">
                                <span className="text-[7px] text-slate-500 truncate">{label}</span>
                                <div className="bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5">
                                    <span className="text-[7px] text-slate-600">{val}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right variants */}
                    <div className="w-[90px] shrink-0">
                        <span className="text-[8px] font-semibold text-slate-500 block mb-1">Variants</span>
                        <div className="grid grid-cols-[30px_12px_1fr] gap-0.5 text-[7px] bg-slate-50 border border-slate-100 rounded p-1">
                            {["COLOR", "SIZE", "SKU"].map(h => (
                                <span key={h} className="font-bold text-slate-400 truncate text-[6px]">{h}</span>
                            ))}
                            {[
                                ["Black", "S", "BLK-S"],
                                ["Black", "M", "BLK-M"],
                                ["Black", "L", "BLK-L"],
                            ].map(([c, s, sku]) => (
                                <React.Fragment key={sku}>
                                    <span className="text-slate-600 truncate">{c}</span>
                                    <span className="text-slate-600">{s}</span>
                                    <span className="text-slate-400 truncate font-mono text-[6px]">
                                        {sku}
                                    </span>
                                </React.Fragment>
                            ))}
                        </div>
                        <button className="mt-1 text-[7px] text-blue-600 font-semibold">+ Add Variant</button>
                    </div>
                </div>
            </div>

            {/* sub-step 3: Review & Submit */}
            <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0">3</span>
                    <span className="text-[10px] font-bold text-slate-800">Review &amp; Submit</span>
                </div>
                <div className="flex gap-2 items-start">
                    {/* product summary */}
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-2">
                        <span className="text-[8px] font-bold text-slate-700 block mb-1">Product Summary</span>
                        <div className="flex items-center gap-2">
                            {/* shirt icon */}
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                                <ShoppingBag className="w-5 h-5 text-white" />
                            </div>
                            <div className="space-y-0.5">
                                {[
                                    ["Type", "Retail"],
                                    ["SKU", "WL-TSHIRT-001"],
                                    ["Variants", "3"],
                                    ["Marketplace", "Amazon.com (USA)"],
                                ].map(([k, v]) => (
                                    <div key={k} className="flex gap-1">
                                        <span className="text-[7px] text-slate-400 w-16 shrink-0">{k}:</span>
                                        <span className="text-[7px] font-medium text-slate-700 truncate">{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* checklist */}
                    <div className="space-y-1 shrink-0">
                        {["Product Information", "Variants", "Images", "Compliance"].map((item) => (
                            <div key={item} className="flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                                <span className="text-[8px] text-slate-600">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-2 flex justify-end">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-[9px] font-bold">
                        Submit <Send className="w-2.5 h-2.5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────
   White Label → Retail bottom strip
────────────────────────────────────── */
function WhiteLabelStrip({ visible }: { visible: boolean }) {
    const steps = [
        { icon: Package, label: "White Label\nProduct" },
        { icon: Pencil, label: "Add Details &\nBranding" },
        { icon: Tag, label: "Convert to\nRetail Product" },
        { icon: Star, label: "Live on Amazon\nMarketplace", success: true },
    ];

    return (
        <div
            className="mt-6 rounded-2xl bg-blue-50 border border-blue-200 overflow-hidden"
            style={{ transition: "opacity 0.6s ease 800ms", opacity: visible ? 1 : 0 }}
        >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4">
                {/* left label */}
                <div className="flex items-start gap-3 shrink-0">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <ShoppingBag className="w-4 h-4 text-white" />
                    </div>
                    <div className="max-w-[180px]">
                        <p className="text-xs font-bold text-blue-900">White Label to Retail</p>
                        <p className="text-[10px] text-blue-700 mt-0.5 leading-relaxed">
                            Convert your White Label products into Retail products by completing product details and listing them on Amazon.
                        </p>
                    </div>
                </div>
                {/* divider */}
                <div className="hidden sm:block w-px h-10 bg-blue-200 shrink-0" />
                {/* flow */}
                <div className="flex items-center gap-0 flex-wrap">
                    {steps.map((s, i) => (
                        <div key={i} className="flex items-center">
                            <div className="flex flex-col items-center gap-1">
                                <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center ${s.success ? "bg-emerald-500 border-emerald-500" : "bg-white border-blue-300"}`}>
                                    <s.icon className={`w-4 h-4 ${s.success ? "text-white" : "text-blue-600"}`} />
                                </div>
                                <span className={`text-[8px] font-medium text-center leading-tight whitespace-pre-line ${s.success ? "text-emerald-700" : "text-blue-700"}`}>
                                    {s.label}
                                </span>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="flex items-center px-1 mb-4">
                                    <svg width="36" height="12" viewBox="0 0 36 12">
                                        <line x1="2" y1="6" x2="26" y2="6" stroke="#BFDBFE" strokeWidth="1.5" strokeDasharray="4 3" />
                                        <polyline points="22,2 30,6 22,10" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────
   MAIN EXPORT
────────────────────────────────────── */
export function SyncCatalogGuide() {
    const { ref, visible } = useInView();

    return (
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3]">
            <div className="px-5 sm:px-8 lg:px-[70px]">

                {/* Section heading */}
                <div
                    className="mb-10"
                    style={{
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(14px)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                        How It Works
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
                        From My Catalog to{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                            Amazon Inventory
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                        Sync your products to Amazon and complete product details to make them live. Select, sync, and submit in three clear steps.
                    </p>
                </div>

                {/* Main panel */}
                <div
                    ref={ref}
                    className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden"
                    style={{ transition: "opacity 0.6s ease 80ms", opacity: visible ? 1 : 0 }}
                >
                    {/* label strip */}
                    <div className="flex items-center gap-3 px-6 lg:px-8 py-4 border-b border-slate-100 bg-slate-50">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow">
                            STEP 3
                        </span>
                        <span className="text-sm font-semibold text-slate-700">Sync to Amazon Inventory</span>
                        <span className="text-xs text-slate-400 ml-auto hidden sm:block">
                            Select products → Sync → Add details → Go live
                        </span>
                    </div>

                    {/* cards */}
                    <div className="p-6 lg:p-8">
                        <div
                            className="rounded-2xl p-6"
                            style={{
                                background: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
                                backgroundSize: "22px 22px",
                                backgroundColor: "#F8FAFC",
                            }}
                        >
                            {/* 3 step cards in a row */}
                            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-0">
                                {/* Step 01 */}
                                <StepCard
                                    num="01"
                                    title="Select Products in My Catalog"
                                    desc='Choose the products you want to sell on Amazon and click "Sync to Amazon".'
                                    visible={visible}
                                    delay={100}
                                >
                                    <MyCatalogMockup />
                                </StepCard>

                                <StepArrow visible={visible} />

                                {/* Step 02 */}
                                <StepCard
                                    num="02"
                                    title="Products in Amazon Inventory"
                                    desc="Your selected products are now available in Amazon Inventory for the chosen country."
                                    visible={visible}
                                    delay={200}
                                >
                                    <AmazonInventoryMockup />
                                </StepCard>

                                <StepArrow visible={visible} />

                                {/* Step 03 */}
                                <StepCard
                                    num="03"
                                    title="Add Inventory Details"
                                    desc="Add product type, SKU and complete product information to list on Amazon."
                                    visible={visible}
                                    delay={300}
                                >
                                    <AddInventoryMockup />
                                </StepCard>
                            </div>

                            {/* White Label → Retail strip */}
                            <WhiteLabelStrip visible={visible} />
                        </div>

                        {/* footer strip */}
                        <div
                            className="mt-5 flex items-center gap-2.5 bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3"
                            style={{ transition: "opacity 0.6s ease 900ms", opacity: visible ? 1 : 0 }}
                        >
                            <BadgeCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                            <p className="text-xs font-semibold text-slate-700">
                                Once submitted, your listing goes live on Amazon. SellerBuz keeps inventory and pricing in sync automatically from that point on.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Three feature callouts */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5"
                    style={{
                        transition: "opacity 0.6s ease 600ms, transform 0.6s ease 600ms",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(10px)",
                    }}
                >
                    {[
                        { icon: RefreshCw, title: "Bulk Sync in One Click", desc: "Select multiple products and sync them all to Amazon Inventory with a single click." },
                        { icon: Package, title: "White Label & Retail", desc: "Manage both White Label and Retail product types with separate workflows and SKUs." },
                        { icon: CheckCircle2, title: "Live Instantly After Submit", desc: "Once product details are complete and submitted, your listing is live on Amazon immediately." },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm">
                            <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                <Icon className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900">{title}</p>
                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default SyncCatalogGuide;
