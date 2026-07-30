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
import { StepFlowDiagram } from "../../components/illustrations/guidePageIllustrations";

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
            className="hidden lg:flex items-center justify-center shrink-0 mt-10 px-1"
            style={{ transition: "opacity 0.5s ease 450ms", opacity: visible ? 1 : 0 }}
        >
            <svg width="44" height="14" viewBox="0 0 44 14">
                <line x1="2" y1="7" x2="34" y2="7" stroke="#BDD9EE" strokeWidth="2" />
                <polyline points="30,3 38,7 30,11" fill="none" stroke="#6BC1E0" strokeWidth="2" strokeLinejoin="round" />
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
            className="flex flex-col gap-2.5 sm:gap-3 h-full"
            style={{
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
            }}
        >
            <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold bg-[#13355A] text-white shrink-0 shadow">
                    {num}
                </span>
                <div className="min-w-0">
                    <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight">{title}</p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
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
        <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between px-2.5 sm:px-3 py-2 sm:py-2.5 border-b border-slate-100 bg-slate-50">
                <span className="text-xs sm:text-sm font-bold text-slate-800">My Catalog</span>
                <button className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-[#13355A] text-white text-[9px] sm:text-[10px] font-semibold">
                    <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Add Product
                </button>
            </div>
            {/* search */}
            <div className="flex items-center gap-1.5 mx-2.5 sm:mx-3 my-1.5 sm:my-2 border border-slate-200 rounded-lg px-2 py-1 sm:py-1.5 bg-slate-50">
                <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" />
                <span className="text-[9px] sm:text-[10px] text-slate-400">Search products…</span>
            </div>
            {/* col headers */}
            <div className="grid grid-cols-[20px_16px_1fr_52px_38px_32px] gap-1 px-2.5 sm:px-3 py-1 bg-slate-50 border-y border-slate-100">
                {["", "", "TITLE", "SKU", "PRICE", "STOCK"].map((h, i) => (
                    <span key={i} className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate">{h}</span>
                ))}
            </div>
            {/* rows */}
            {CATALOG_ROWS.map((r) => (
                <div key={r.sku} className="grid grid-cols-[20px_16px_1fr_52px_38px_32px] gap-1 items-center px-2.5 sm:px-3 py-1.5 border-b border-slate-50 last:border-0">
                    <div className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded border-2 flex items-center justify-center ${r.checked ? "bg-[#13355A] border-blue-600" : "border-slate-300"}`}>
                        {r.checked && <span className="text-[6px] sm:text-[7px] text-white font-bold">✓</span>}
                    </div>
                    <span className="text-xs sm:text-sm">{r.init}</span>
                    <span className="text-[9px] sm:text-[10px] font-medium text-slate-800 truncate">{r.name}</span>
                    <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 truncate">{r.sku}</span>
                    <span className="text-[9px] sm:text-[10px] font-medium text-slate-700">{r.price}</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500">{r.stock}</span>
                </div>
            ))}
            {/* footer */}
            <div className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 border-t border-slate-100 bg-slate-50">
                <span className="text-[9px] sm:text-[10px] text-slate-500">3 products selected</span>
                <button className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-[#13355A] text-white text-[9px] sm:text-[10px] font-semibold">
                    <RefreshCw className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Sync to Amazon
                </button>
            </div>
            {/* info strip */}
            <div className="flex items-start gap-1.5 sm:gap-2 mx-2.5 sm:mx-3 mb-2.5 sm:mb-3 mt-1 bg-[#E8F0F6] border border-[#BDD9EE] rounded-lg sm:rounded-xl px-2 sm:px-2.5 py-1.5 sm:py-2">
                <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3C9AC4] shrink-0 mt-px" />
                <p className="text-[9px] sm:text-[10px] text-[#13355A] leading-relaxed">
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
        <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between px-2.5 sm:px-3 py-2 sm:py-2.5 border-b border-slate-100 bg-slate-50">
                <span className="text-xs sm:text-sm font-bold text-slate-800">Amazon Inventory</span>
                <div className="flex items-center gap-1 border border-slate-200 rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white">
                    <span className="text-xs">🇺🇸</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-600 font-medium">Amazon.com (USA)</span>
                    <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                </div>
            </div>
            {/* col headers */}
            <div className="grid grid-cols-[16px_1fr_52px_36px_40px_28px] gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-50 border-b border-slate-100">
                {["", "TITLE", "SKU", "TYPE", "STATUS", ""].map((h, i) => (
                    <span key={i} className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate">{h}</span>
                ))}
            </div>
            {/* rows */}
            {INV_ROWS.map((r, idx) => (
                <div key={r.sku} className={`grid grid-cols-[16px_1fr_52px_36px_40px_28px] gap-1 items-center px-2.5 sm:px-3 py-1.5 sm:py-2 border-b border-slate-50 last:border-0 ${idx === 0 ? "relative" : ""}`}>
                    <span className="text-xs sm:text-sm">{r.init}</span>
                    <span className="text-[9px] sm:text-[10px] font-medium text-slate-800 truncate">{r.title}</span>
                    <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 truncate">{r.sku}</span>
                    <span className="text-[8px] sm:text-[9px] text-slate-400">—</span>
                    <span className="inline-flex items-center px-1 sm:px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        Draft
                    </span>
                    <button className="w-4 h-4 sm:w-5 sm:h-5 rounded flex items-center justify-center hover:bg-slate-100">
                        <MoreVertical className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" />
                    </button>
                </div>
            ))}
            {/* context menu hint */}
            <div className="mx-2.5 sm:mx-3 mb-2 mt-1 rounded-lg sm:rounded-xl border border-[#BDD9EE] bg-[#E8F0F6] overflow-hidden shadow-sm">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 border-b border-[#BDD9EE] hover:bg-[#E8F0F6] cursor-pointer">
                    <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3C9AC4]" />
                    <span className="text-[9px] sm:text-[10px] font-semibold text-[#13355A]">Add Inventory Details</span>
                </div>
                {[{ icon: Pencil, label: "Edit" }, { icon: Eye, label: "View" }, { icon: Trash2, label: "Delete" }].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 hover:bg-[#E8F0F6] border-b border-[#E8F0F6] last:border-0 cursor-pointer">
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500" />
                        <span className="text-[9px] sm:text-[10px] text-slate-600">{label}</span>
                    </div>
                ))}
            </div>
            {/* footer */}
            <div className="flex items-start gap-1.5 sm:gap-2 mx-2.5 sm:mx-3 mb-2.5 sm:mb-3 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-2 sm:px-2.5 py-1.5 sm:py-2">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3C9AC4] shrink-0 mt-px" />
                <p className="text-[9px] sm:text-[10px] text-slate-600 leading-relaxed">
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
        <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden space-y-0">
            {/* sub-step 1: Select Product Type */}
            <div className="p-2.5 sm:p-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#13355A] text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800">Select Product Type</span>
                </div>
                <div className="grid grid-cols-2 gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
                    <div className="flex items-center gap-1.5">
                        <span className="text-[8px] sm:text-[9px] text-slate-500">Product Type</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <label className="flex items-center gap-1">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-blue-600 flex items-center justify-center">
                                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#13355A]" />
                            </div>
                            <span className="text-[8px] sm:text-[9px] text-slate-700">Retail</span>
                        </label>
                        <label className="flex items-center gap-1">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-slate-300" />
                            <span className="text-[8px] sm:text-[9px] text-slate-400">White Label</span>
                        </label>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[8px] sm:text-[9px] text-slate-500 w-16 sm:w-20 shrink-0">SKU</span>
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1">
                        <span className="text-[8px] sm:text-[9px] font-mono text-slate-600">WL-TSHIRT-001</span>
                    </div>
                </div>
                <div className="mt-1.5 sm:mt-2 flex justify-end">
                    <div className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-[#13355A] text-white text-[9px] sm:text-[10px] font-semibold">
                        Next <ArrowRight className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                    </div>
                </div>
            </div>

            {/* sub-step 2: Fill Product Info */}
            <div className="p-2.5 sm:p-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#13355A] text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800">Fill Product Information</span>
                </div>
                <div className="flex gap-1.5 sm:gap-2">
                    {/* Left form */}
                    <div className="flex-1 space-y-0.5 sm:space-y-1">
                        <span className="text-[8px] sm:text-[9px] font-semibold text-slate-500 block">Basic Information</span>
                        {[
                            { label: "Product Name", val: "Cotton T-Shirt" },
                            { label: "Brand", val: "Your Brand" },
                            { label: "Category", val: "Clothing & Accessories > Men > Shirts" },
                            { label: "Color", val: "Black" },
                            { label: "Size", val: "M" },
                        ].map(({ label, val }) => (
                            <div key={label} className="grid grid-cols-[50px sm:60px_1fr] gap-1 items-center">
                                <span className="text-[7px] sm:text-[8px] text-slate-500 truncate">{label}</span>
                                <div className="bg-slate-50 border border-slate-200 rounded px-1 sm:px-1.5 py-0.5">
                                    <span className="text-[7px] sm:text-[8px] text-slate-600">{val}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right variants */}
                    <div className="w-[70px] sm:w-[90px] shrink-0">
                        <span className="text-[8px] sm:text-[9px] font-semibold text-slate-500 block mb-0.5 sm:mb-1">Variants</span>
                        <div className="grid grid-cols-[24px_10px_1fr] sm:grid-cols-[30px_12px_1fr] gap-0.5 text-[7px] sm:text-[8px] bg-slate-50 border border-slate-100 rounded p-0.5 sm:p-1">
                            {["COLOR", "SIZE", "SKU"].map(h => (
                                <span key={h} className="font-bold text-slate-400 truncate text-[6px] sm:text-[7px]">{h}</span>
                            ))}
                            {[
                                ["Black", "S", "BLK-S"],
                                ["Black", "M", "BLK-M"],
                                ["Black", "L", "BLK-L"],
                            ].map(([c, s, sku]) => (
                                <React.Fragment key={sku}>
                                    <span className="text-slate-600 truncate">{c}</span>
                                    <span className="text-slate-600">{s}</span>
                                    <span className="text-slate-400 truncate font-mono text-[6px] sm:text-[7px]">
                                        {sku}
                                    </span>
                                </React.Fragment>
                            ))}
                        </div>
                        <button className="mt-0.5 sm:mt-1 text-[7px] sm:text-[8px] text-[#3C9AC4] font-semibold">+ Add Variant</button>
                    </div>
                </div>
            </div>

            {/* sub-step 3: Review & Submit */}
            <div className="p-2.5 sm:p-3">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#13355A] text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800">Review &amp; Submit</span>
                </div>
                <div className="flex gap-1.5 sm:gap-2 items-start">
                    {/* product summary */}
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl p-1.5 sm:p-2">
                        <span className="text-[8px] sm:text-[9px] font-bold text-slate-700 block mb-0.5 sm:mb-1">Product Summary</span>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            {/* shirt icon */}
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div className="space-y-0">
                                {[
                                    ["Type", "Retail"],
                                    ["SKU", "WL-TSHIRT-001"],
                                    ["Variants", "3"],
                                    ["Marketplace", "Amazon.com (USA)"],
                                ].map(([k, v]) => (
                                    <div key={k} className="flex gap-0.5 sm:gap-1">
                                        <span className="text-[7px] sm:text-[8px] text-slate-400 w-12 sm:w-16 shrink-0">{k}:</span>
                                        <span className="text-[7px] sm:text-[8px] font-medium text-slate-700 truncate">{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* checklist */}
                    <div className="space-y-0.5 sm:space-y-1 shrink-0">
                        {["Product Information", "Variants", "Images", "Compliance"].map((item) => (
                            <div key={item} className="flex items-center gap-0.5 sm:gap-1">
                                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500 shrink-0" />
                                <span className="text-[8px] sm:text-[9px] text-slate-600">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-1.5 sm:mt-2 flex justify-end">
                    <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#13355A] text-white text-[9px] sm:text-[10px] font-bold">
                        Submit <Send className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
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
        <section className="py-10 sm:py-14 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3]">
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
                        From My Catalog to{" "}
                        <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">
                            Amazon Inventory
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed w-full">
                        Publish products from your My Catalog to Amazon with a simple three-step workflow. Select the products you want to list, sync them to your Amazon inventory, and complete any required product information before submission. SellerBuz validates your data, prepares your listings, and helps you get your products live on Amazon quickly and efficiently.
                    </p>
                </div>

                {/* Main panel */}
                <div
                    ref={ref}
                    className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden"
                    style={{ transition: "opacity 0.6s ease 80ms", opacity: visible ? 1 : 0 }}
                >
                    {/* label strip */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-slate-100 bg-slate-50">
                        <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-[#13355A] text-white shadow shrink-0">
                            STEP 3
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-slate-700">Sync to Amazon Inventory</span>
                        <span className="text-xs sm:text-sm text-slate-400 sm:ml-auto hidden md:block">
                            Select products → Sync → Add details → Go live
                        </span>
                    </div>

                    {/* cards */}
                    <div className="p-3 sm:p-6 lg:p-8">
                        <div
                            className="rounded-xl sm:rounded-2xl p-3 sm:p-6"
                            style={{
                                background: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
                                backgroundSize: "22px 22px",
                                backgroundColor: "#F8FAFC",
                            }}
                        >
                            {/* 3 step cards in a row */}
                            <div className="flex flex-col lg:flex-row items-stretch gap-5 sm:gap-6 lg:gap-0">
                                {/* Step 01 */}
                                <div className="flex-1 min-w-0">
                                    <StepCard
                                        num="01"
                                        title="Select Products in My Catalog"
                                        desc='Choose the products you want to sell on Amazon and click "Sync to Amazon".'
                                        visible={visible}
                                        delay={100}
                                    >
                                        <MyCatalogMockup />
                                    </StepCard>
                                </div>

                                <StepArrow visible={visible} />

                                {/* Step 02 */}
                                <div className="flex-1 min-w-0">
                                    <StepCard
                                        num="02"
                                        title="Products in Amazon Inventory"
                                        desc="Your selected products are now available in Amazon Inventory for the chosen country."
                                        visible={visible}
                                        delay={200}
                                    >
                                        <AmazonInventoryMockup />
                                    </StepCard>
                                </div>

                                <StepArrow visible={visible} />

                                {/* Step 03 */}
                                <div className="flex-1 min-w-0">
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
                            </div>

                            {/* White Label → Retail strip */}
                            <div className="w-full flex justify-center px-2">
                                <StepFlowDiagram
                                    steps={[
                                        { icon: <Package size={60} color="#13355A" />, title: "White Label Product", subtitle: "Start with your\nWhite Label product." },
                                        { icon: <Pencil size={60} color="#13355A" />, title: "Add Details & Branding", subtitle: "Add product details\nand branding." },
                                        { icon: <Tag size={60} color="#13355A" />, title: "Convert to Retail", subtitle: "Convert to a\nRetail product." },
                                        { icon: <Star size={60} color="#13355A" />, title: "Live on Amazon", subtitle: "Your product is live\non Amazon Marketplace!" },
                                    ]}
                                    style={{ width: '100%', maxWidth: 700, height: 'auto' }}
                                />
                            </div>
                        </div>

                        {/* footer strip */}
                        <div
                            className="mt-4 sm:mt-5 flex items-start gap-2 sm:gap-2.5 bg-emerald-50 border border-emerald-100 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3"
                            style={{ transition: "opacity 0.6s ease 900ms", opacity: visible ? 1 : 0 }}
                        >
                            <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                                Once submitted, your listing goes live on Amazon. SellerBuz keeps inventory and pricing in sync automatically from that point on.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Three feature callouts */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-5 sm:mt-6"
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

export default SyncCatalogGuide;
