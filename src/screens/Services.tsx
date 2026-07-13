"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Layout from "@/components/Layout";
import {
  ArrowRight, Boxes, RefreshCw, ShoppingCart, Wand2, LayoutGrid,
  GitMerge, Image as ImageIcon, ShieldCheck, Upload, DollarSign,
  BarChart3, Sparkles, CheckCircle2, Layers,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import Image from "next/image";
import { AssetLibraryMockup, ServicesHeroMockup } from "@/components/illustrations";
import PageHero from "@/components/PageHero";

/* -------------------- Inline SVG visuals -------------------- */

const InventorySyncSVG = () => (
  <svg viewBox="0 0 520 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="s-grid" width="22" height="22" patternUnits="userSpaceOnUse">
        <path d="M22 0H0v22" stroke="#dbeafe" strokeWidth="0.6" fill="none" />
      </pattern>
      <linearGradient id="s-eng" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <filter id="s-sh" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" /><feOffset dy="2" />
        <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect width="520" height="320" rx="16" fill="#eff6ff" />
    <rect width="520" height="320" rx="16" fill="url(#s-grid)" />
    {/* central sync */}
    <g filter="url(#s-sh)">
      <rect x="200" y="115" width="120" height="90" rx="14" fill="url(#s-eng)" />
      <text x="260" y="150" textAnchor="middle" fontFamily="Inter" fontSize="12" fontWeight="800" fill="#fff">Sync Engine</text>
      <text x="260" y="168" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#bfdbfe">latency &lt; 2s</text>
      <circle cx="260" cy="188" r="10" fill="#fff" opacity="0.15" />
      <circle cx="260" cy="188" r="5" fill="#fff" />
    </g>
    {/* left channels */}
    {[
      { y: 40, name: "Amazon", stock: "1,240", dot: "#f59e0b" },
      { y: 130, name: "Walmart", stock: "1,240", dot: "#2563eb" },
      { y: 220, name: "eBay", stock: "1,240", dot: "#ef4444" },
    ].map((c) => (
      <g key={c.name}>
        <rect x="20" y={c.y} width="160" height="60" rx="10" fill="white" stroke="#e2e8f0" filter="url(#s-sh)" />
        <circle cx="38" cy={c.y + 30} r="6" fill={c.dot} />
        <text x="52" y={c.y + 26} fontFamily="Inter" fontSize="12" fontWeight="700" fill="#0f172a">{c.name}</text>
        <text x="52" y={c.y + 44} fontFamily="Inter" fontSize="10" fill="#64748b">Stock: {c.stock}</text>
        <line x1="180" y1={c.y + 30} x2="200" y2="160" stroke="#60a5fa" strokeWidth="1.4" strokeDasharray="4 4" />
      </g>
    ))}
    {/* right channels */}
    {[
      { y: 40, name: "Etsy", stock: "1,240", dot: "#ea580c" },
      { y: 130, name: "Flipkart", stock: "1,240", dot: "#1d4ed8" },
      { y: 220, name: "Warehouse", stock: "1,240", dot: "#10b981" },
    ].map((c) => (
      <g key={c.name}>
        <rect x="340" y={c.y} width="160" height="60" rx="10" fill="white" stroke="#e2e8f0" filter="url(#s-sh)" />
        <circle cx="358" cy={c.y + 30} r="6" fill={c.dot} />
        <text x="372" y={c.y + 26} fontFamily="Inter" fontSize="12" fontWeight="700" fill="#0f172a">{c.name}</text>
        <text x="372" y={c.y + 44} fontFamily="Inter" fontSize="10" fill="#64748b">Stock: {c.stock}</text>
        <line x1="320" y1="160" x2="340" y2={c.y + 30} stroke="#2563eb" strokeWidth="1.4" strokeDasharray="4 4" />
      </g>
    ))}
  </svg>
);

const AICatalogSVG = () => (
  <svg viewBox="0 0 520 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="520" height="320" rx="16" fill="#f0f9ff" />
    <rect width="520" height="320" rx="16" fill="url(#s-grid)" />
    {/* input */}
    <g filter="url(#s-sh)">
      <rect x="20" y="90" width="140" height="140" rx="12" fill="white" stroke="#e2e8f0" />
      <rect x="20" y="90" width="140" height="3" rx="1.5" fill="#94a3b8" />
      <text x="34" y="112" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#64748b" letterSpacing="1">INPUT</text>
      <rect x="34" y="122" width="112" height="60" rx="6" fill="#f1f5f9" />
      <text x="90" y="158" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#64748b">product.jpg</text>
      <rect x="34" y="190" width="72" height="10" rx="2" fill="#e2e8f0" />
      <rect x="34" y="206" width="90" height="10" rx="2" fill="#e2e8f0" />
    </g>
    {/* AI engine */}
    <g filter="url(#s-sh)">
      <rect x="200" y="115" width="120" height="90" rx="14" fill="url(#s-eng)" />
      <path d="M245 145l7-7 7 7 7-7 7 7v20h-28z" fill="#fff" opacity="0.9" />
      <text x="260" y="188" textAnchor="middle" fontFamily="Inter" fontSize="12" fontWeight="800" fill="#fff">AI Catalog</text>
    </g>
    {/* output */}
    <g filter="url(#s-sh)">
      <rect x="360" y="60" width="140" height="200" rx="12" fill="white" stroke="#e2e8f0" />
      <rect x="360" y="60" width="140" height="3" rx="1.5" fill="#2563eb" />
      <text x="374" y="82" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#2563eb" letterSpacing="1">GENERATED</text>
      <text x="374" y="100" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#0f172a">Title</text>
      <rect x="374" y="106" width="112" height="6" rx="2" fill="#dbeafe" />
      <rect x="374" y="116" width="90" height="6" rx="2" fill="#dbeafe" />
      <text x="374" y="140" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#0f172a">Description</text>
      <rect x="374" y="146" width="112" height="5" rx="2" fill="#e2e8f0" />
      <rect x="374" y="154" width="106" height="5" rx="2" fill="#e2e8f0" />
      <rect x="374" y="162" width="98" height="5" rx="2" fill="#e2e8f0" />
      <text x="374" y="184" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#0f172a">Bullets · Attributes</text>
      <rect x="374" y="192" width="60" height="18" rx="9" fill="#dbeafe" />
      <text x="404" y="204" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#1d4ed8">SEO ✓</text>
      <rect x="440" y="192" width="46" height="18" rx="9" fill="#ecfdf5" />
      <text x="463" y="204" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#047857">A+ ✓</text>
    </g>
    <line x1="160" y1="160" x2="200" y2="160" stroke="#60a5fa" strokeWidth="1.6" strokeDasharray="4 4" markerEnd="url(#hd-arrow2)" />
    <line x1="320" y1="160" x2="360" y2="160" stroke="#2563eb" strokeWidth="1.6" strokeDasharray="4 4" markerEnd="url(#hd-arrow3)" />
    <defs>
      <marker id="hd-arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#60a5fa" /></marker>
      <marker id="hd-arrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#2563eb" /></marker>
    </defs>
  </svg>
);

const RepricerSVG = () => (
  <svg viewBox="0 0 520 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="520" height="320" rx="16" fill="#eff6ff" />
    <rect width="520" height="320" rx="16" fill="url(#s-grid)" />
    <g filter="url(#s-sh)">
      <rect x="30" y="30" width="460" height="260" rx="14" fill="white" stroke="#e2e8f0" />
      <rect x="30" y="30" width="460" height="3" rx="1.5" fill="#2563eb" />
      <text x="50" y="58" fontFamily="Inter" fontSize="12" fontWeight="800" fill="#0f172a">Repricer · SKU-42891</text>
      <text x="50" y="72" fontFamily="Inter" fontSize="10" fill="#64748b">Buy Box tracking · rule-based · guardrails on</text>
      {/* axes */}
      <line x1="60" y1="240" x2="470" y2="240" stroke="#e2e8f0" />
      <line x1="60" y1="100" x2="60" y2="240" stroke="#e2e8f0" />
      {/* competitor line */}
      <polyline fill="none" stroke="#cbd5e1" strokeWidth="1.8" strokeDasharray="4 3"
        points="60,180 110,175 160,182 210,170 260,178 310,168 360,172 410,160 460,168" />
      {/* our line */}
      <polyline fill="none" stroke="#2563eb" strokeWidth="2.4"
        points="60,190 110,178 160,184 210,168 260,172 310,162 360,166 410,155 460,160" />
      {/* floor line */}
      <line x1="60" y1="215" x2="470" y2="215" stroke="#f59e0b" strokeDasharray="4 4" />
      <text x="470" y="212" textAnchor="end" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#c2410c">Floor $18.50</text>
      {/* pill */}
      <rect x="360" y="55" width="120" height="26" rx="13" fill="#dcfce7" />
      <circle cx="374" cy="68" r="4" fill="#16a34a" />
      <text x="384" y="72" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#166534">Buy Box · WON</text>
    </g>
  </svg>
);

const RolesSVG = () => (
  <svg viewBox="0 0 520 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="520" height="320" rx="16" fill="#f0f9ff" />
    <rect width="520" height="320" rx="16" fill="url(#s-grid)" />
    {[
      { x: 40, label: "Owner", perms: ["Billing", "Users", "All data"], dot: "#1e3a8a" },
      { x: 200, label: "Manager", perms: ["Listings", "Orders", "Reports"], dot: "#2563eb" },
      { x: 360, label: "Staff", perms: ["Orders", "Ship labels"], dot: "#60a5fa" },
    ].map((r) => (
      <g key={r.label} filter="url(#s-sh)">
        <rect x={r.x} y="50" width="140" height="220" rx="14" fill="white" stroke="#e2e8f0" />
        <rect x={r.x} y="50" width="140" height="3" rx="1.5" fill={r.dot} />
        <circle cx={r.x + 70} cy="95" r="20" fill={r.dot + "22"} />
        <circle cx={r.x + 70} cy="90" r="6" fill={r.dot} />
        <path d={`M${r.x + 55} 108 a15 15 0 0 1 30 0`} fill={r.dot} />
        <text x={r.x + 70} y="140" textAnchor="middle" fontFamily="Inter" fontSize="13" fontWeight="800" fill="#0f172a">{r.label}</text>
        {r.perms.map((p, i) => (
          <g key={p}>
            <rect x={r.x + 20} y={155 + i * 26} width="100" height="20" rx="10" fill="#f1f5f9" />
            <circle cx={r.x + 30} cy={165 + i * 26} r="3" fill="#10b981" />
            <text x={r.x + 40} y={169 + i * 26} fontFamily="Inter" fontSize="10" fontWeight="700" fill="#334155">{p}</text>
          </g>
        ))}
      </g>
    ))}
  </svg>
);

/* -------------------- Section blocks -------------------- */

type FeatureSection = {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: any;
  visual: React.ReactNode;
  reverse?: boolean;
};

const Services = () => {
  const ref = useReveal<HTMLDivElement>();

  const sections: FeatureSection[] = [
    {
      eyebrow: "Core platform",
      title: "Centralized inventory & pricing — one source of truth.",
      desc: "Manage stock levels and pricing from one unified dashboard. Every update reflects instantly across Amazon, Walmart, eBay, Etsy and Flipkart, so you never oversell or misprice a listing again.",
      bullets: [
        "Single dashboard for stock and price",
        "Instant propagation to every connected channel",
        "Per-channel price rules and rounding",
        "Real-time low-stock alerts",
      ],
      icon: Boxes,
      visual: <InventorySyncSVG />,
    },
    {
      eyebrow: "Order management",
      title: "One inbox for every marketplace order.",
      desc: "Receive and manage orders from every connected marketplace in a single inbox — no more switching tabs between Amazon Seller Central, Etsy, and other platforms to fulfil orders.",
      bullets: [
        "Unified order pipeline: capture → route → fulfil → close",
        "Status writebacks to every channel automatically",
        "Bulk actions across marketplaces",
        "Notes, tags and assignment per order",
      ],
      icon: ShoppingCart,
      visual: (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Order inbox · today</div>
            <div className="ml-auto text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">241 open</div>
          </div>
          {[
            { ch: "Amazon", dot: "#f59e0b", sku: "SKU-42891", qty: 2, price: "$59.90", state: "Ready to ship" },
            { ch: "Walmart", dot: "#2563eb", sku: "SKU-11024", qty: 1, price: "$24.00", state: "Picked" },
            { ch: "eBay", dot: "#ef4444", sku: "SKU-98220", qty: 3, price: "$147.00", state: "New" },
            { ch: "Etsy", dot: "#ea580c", sku: "SKU-33012", qty: 1, price: "$18.50", state: "Ready to ship" },
            { ch: "Flipkart", dot: "#1d4ed8", sku: "SKU-70001", qty: 4, price: "₹4,120", state: "New" },
          ].map((o, i) => (
            <div key={i} className="grid grid-cols-12 items-center py-2.5 border-t border-slate-100 text-sm">
              <div className="col-span-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: o.dot }} />
                <span className="font-semibold text-slate-800">{o.ch}</span>
              </div>
              <div className="col-span-3 text-slate-500 text-xs">{o.sku}</div>
              <div className="col-span-2 text-slate-700">×{o.qty}</div>
              <div className="col-span-2 font-semibold text-slate-900">{o.price}</div>
              <div className="col-span-2">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${o.state === "New" ? "bg-blue-50 text-blue-700" : o.state === "Picked" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>
                  {o.state}
                </span>
              </div>
            </div>
          ))}
        </div>
      ),
      reverse: true,
    },
    {
      eyebrow: "Real-time sync",
      title: "Stock everywhere. Always accurate.",
      desc: "Stock changes on one channel automatically sync across all others in real time, keeping quantities accurate everywhere at once — even during flash sales and livestream spikes.",
      bullets: [
        "Sub-2-second propagation across channels",
        "Cross-channel stock reservations",
        "Automatic conflict resolution",
        "Full sync audit log",
      ],
      icon: RefreshCw,
      visual: <InventorySyncSVG />,
    },
    {
      eyebrow: "AI catalog",
      title: "Optimized titles, descriptions and attributes in seconds.",
      desc: "Generate optimized product titles, descriptions, bullet points and catalog details automatically using AI — cutting listing time from hours to minutes without sacrificing quality or SEO.",
      bullets: [
        "Channel-aware title and description generation",
        "Attribute extraction from images and text",
        "Tone controls per brand and per marketplace",
        "One-click bulk regenerate for old listings",
      ],
      icon: Wand2,
      visual: <AICatalogSVG />,
      reverse: true,
    },
    {
      eyebrow: "Variants & matching",
      title: "Variants and smart catalog matching.",
      desc: "Create and manage variants (size, color, style) with consistent data across every channel. When your white-label listing matches an existing retail catalog entry, SellerBuz suggests switching to the matched retail listing — or continuing as a standalone product.",
      bullets: [
        "Variation matrices with per-SKU inventory",
        "White-label vs retail catalog switch",
        "Related product suggestions",
        "Bulk variant edits from a single sheet",
      ],
      icon: LayoutGrid,
      visual: (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Variant matrix</div>
          <div className="grid grid-cols-5 gap-1.5 text-xs">
            <div />
            {["S", "M", "L", "XL"].map((s) => <div key={s} className="text-center font-bold text-slate-700 py-1">{s}</div>)}
            {["Navy", "Blue", "Sky"].map((c, ci) => (
              <React.Fragment key={c}>
                <div className="font-bold text-slate-700 py-2">{c}</div>
                {[0, 1, 2, 3].map((si) => (
                  <div key={c + si} className={`h-8 rounded-md flex items-center justify-center font-semibold ${(ci + si) % 3 === 0 ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 border border-blue-100"}`}>
                    {(ci + si) % 3 === 0 ? "sync" : "12"}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-100">
            <GitMerge className="w-4 h-4 text-blue-700" />
            <div className="text-xs text-blue-900">
              <span className="font-bold">Smart match found:</span> retail ASIN B0CX92K1LR — switch, or keep standalone.
            </div>
          </div>
        </div>
      ),
    },
    {
      eyebrow: "Growth",
      title: "Built-in repricer, beside your inventory.",
      desc: "Automatically adjust pricing based on competition, rules and market conditions — all managed from the same place as inventory. Buy Box aware for Amazon, competitor aware for the rest, with floor and ceiling guardrails per SKU.",
      bullets: [
        "Buy Box tracking on Amazon",
        "Competitor-aware rules on Walmart, eBay, Flipkart",
        "Per-SKU floor and ceiling",
        "Schedule-based promotional pricing",
      ],
      icon: DollarSign,
      visual: <RepricerSVG />,
      reverse: true,
    },
    {
      eyebrow: "Analytics",
      title: "Revenue and performance in one dashboard.",
      desc: "A centralized dashboard surfaces revenue trends, listing performance and key KPIs — giving you a clear view of business health across every channel, side by side.",
      bullets: [
        "Cross-channel revenue and margin",
        "Listing-level performance and conversion",
        "Cohort views by channel and category",
        "Exportable reports for finance",
      ],
      icon: BarChart3,
      visual: (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { l: "Revenue", v: "$284k", d: "+32%" },
              { l: "Orders", v: "5,912", d: "+14%" },
              { l: "AOV", v: "$48.10", d: "+6%" },
            ].map((k) => (
              <div key={k.l} className="rounded-lg bg-slate-50 border border-slate-100 p-3">
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{k.l}</div>
                <div className="text-lg font-bold text-slate-900">{k.v}</div>
                <div className="text-[11px] font-semibold text-emerald-600">▲ {k.d}</div>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 400 120" className="w-full h-auto">
            <polyline fill="none" stroke="#2563eb" strokeWidth="2.4"
              points="0,90 40,80 80,84 120,60 160,68 200,50 240,58 280,40 320,44 360,28 400,32" />
            <polyline fill="none" stroke="#60a5fa" strokeWidth="1.6" strokeDasharray="4 3"
              points="0,100 40,96 80,98 120,86 160,92 200,80 240,86 280,72 320,78 360,64 400,70" />
          </svg>
        </div>
      ),
    },
    {
      eyebrow: "Content",
      title: "A+ content asset library.",
      desc: "A dedicated library for enhanced content assets used in premium listings — hero images, comparison charts, brand modules. Keep creative assets organized and reusable across products and channels.",
      bullets: [
        "Reusable A+ modules and templates",
        "Version history per asset",
        "Per-brand and per-channel folders",
        "Direct push to Amazon, Walmart and Flipkart",
      ],
      icon: ImageIcon,
      visual: <AssetLibraryMockup className="w-full h-auto" />,
      reverse: true,
    },
    {
      eyebrow: "Operations",
      title: "Role-based access control.",
      desc: "Enterprise-grade auth guards with configurable role creation. Let store owners, managers and staff access only what they need — with granular permissions for listings, orders, reports and billing.",
      bullets: [
        "Custom roles with granular permissions",
        "Per-channel scoping",
        "Audit trail for every action",
        "SSO / SAML on Enterprise",
      ],
      icon: ShieldCheck,
      visual: <RolesSVG />,
    },
    {
      eyebrow: "Bulk work",
      title: "Bulk operations via file upload.",
      desc: "Perform bulk updates — inventory, pricing, listings — through simple file uploads. Save hours on large catalog management tasks with template-based imports and clear error reports.",
      bullets: [
        "CSV and Excel templates per operation",
        "Line-level validation and error report",
        "Dry-run preview before commit",
        "Scheduled recurring imports",
      ],
      icon: Upload,
      visual: (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
          <div className="rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/60 p-8 text-center">
            <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="font-semibold text-slate-900">Drop inventory_master.xlsx</div>
            <div className="text-xs text-slate-500 mt-1">or browse · up to 250 MB</div>
          </div>
          <div className="mt-4 space-y-2">
            {[
              { l: "Validate rows", v: "12,480 / 12,480", ok: true },
              { l: "Detect conflicts", v: "0 blocking, 3 warnings", ok: true },
              { l: "Publish to channels", v: "Amazon · Walmart · eBay · Etsy · Flipkart", ok: true },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="text-sm text-slate-700"><span className="font-semibold text-slate-900">{s.l}:</span> {s.v}</div>
              </div>
            ))}
          </div>
        </div>
      ),
      reverse: true,
    },
  ];

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={Sparkles}
          badgeText="12 services · 1 platform"
          title={<>Services that <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">do the heavy lifting.</span></>}
          subtitle="From inventory sync to AI-powered demand forecasting — every service is designed to remove a manual task and add a measurable result."
          visual={<ServicesHeroMockup className="w-full h-auto" />}
          actions={
            <>
              <Link href="/services#all-services">
                <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-200 bg-white hover:bg-blue-50 text-slate-900 rounded-full shadow-sm">
                  Explore Services
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                  Quick Start
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

            </>
          }
        />
        {/* HERO */}
        <section className="relative bg-gradient-to-b from-blue-50/60 to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-white text-blue-700 border border-blue-100">
              <Layers className="w-3.5 h-3.5 mr-1.5" /> Platform capabilities
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.05] tracking-tight max-w-3xl mx-auto mb-4">
              Every capability a multi-channel seller needs — in one platform.
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Inventory, orders, pricing, catalog, content and access — SellerBuz replaces the stack of spreadsheets and tabs with one clean workspace.
            </p>
          </div>
        </section>

        {/* Zig-zag sections */}
        {sections.map((s, i) => (
          <section key={s.title} className={`py-16 ${i % 2 === 0 ? "bg-white" : "bg-blue-50/40"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={`reveal ${s.reverse ? "lg:order-2" : ""}`}>
                  <Badge className="mb-3 bg-blue-50 text-blue-700 border border-blue-100 text-xs">{s.eyebrow}</Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-3">{s.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`reveal delay-100 ${s.reverse ? "lg:order-1" : ""}`}>
                  {s.visual}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-900">
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-blue-300/15 blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto text-center px-4">
            <Sparkles className="w-12 h-12 mx-auto text-blue-200 mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">Ready to see it running on your channels?</h2>
            <p className="ext-xl text-white/90 mb-10 max-w-2xl mx-auto">Connect Amazon, Walmart, eBay, Etsy and Flipkart in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 h-12 border-0 shadow-lg">
                Start free trial <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-lg">
                  See pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
