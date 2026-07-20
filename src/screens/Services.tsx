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
import { AssetLibraryMockup, ServicesHeroMockup, RolesIllustration, InventorySyncSVG, AICatalogSVG, RepricerSVG, AnalyticsDashboardSVG } from "@/components/illustrations";
import PageHero from "@/components/PageHero";


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
      desc: "Manage stock levels and pricing from one unified dashboard. Every update reflects instantly across Amazon, Walmart, eBay, Etsy and fnac, so you never oversell or misprice a listing again.",
      bullets: [
        "Single dashboard for stock and price",
        "Instant propagation to every connected channel",
        "Per-channel price rules and rounding",
        "Real-time low-stock alerts",
      ],
      icon: Boxes,
      visual: <InventorySyncSVG className="w-full h-auto" />,
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
            { ch: "fnac", dot: "#1d4ed8", sku: "SKU-70001", qty: 4, price: "₹4,120", state: "New" },
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
      visual: <InventorySyncSVG className="w-full h-auto " />,
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
      visual: <AICatalogSVG className="w-full h-auto" />,
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
        "Competitor-aware rules on Walmart, eBay, fnac",
        "Per-SKU floor and ceiling",
        "Schedule-based promotional pricing",
      ],
      icon: DollarSign,
      visual: <RepricerSVG className="w-full h-auto " />,
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
        <AnalyticsDashboardSVG className="w-full h-auto" />
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
        "Direct push to Amazon, Walmart and fnac",
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
      visual: <RolesIllustration className="w-full h-auto " />,
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
              { l: "Publish to channels", v: "Amazon · Walmart · eBay · Etsy · fnac", ok: true },
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
        {/* HERO */}
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
        {/* Zig-zag sections */}
        {sections.map((s, i) => (
          <section key={s.title} className={`py-16 ${i % 2 === 0 ? "bg-white" : "bg-blue-50/40"}`}>
            <div className="px-[50px] lg:px-[70px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={`reveal ${s.reverse ? "lg:order-2" : ""}`}>
                  <Badge className="mb-3 bg-blue-50 text-blue-700 border border-blue-100 text-xs">{s.eyebrow}</Badge>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-3">{s.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-5 lg:text-lg">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm lg:text-base text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`reveal delay-100 ${s.reverse ? "lg:order-1" : ""} scale-[1.12] lg:scale-[1.18] origin-center`}>
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
          <div className="relative px-[50px] lg:px-[70px] text-center">
            <Sparkles className="w-12 h-12 mx-auto text-blue-200 mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Ready to see it running on your channels?</h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">Connect Amazon, Walmart, eBay, Etsy and fnac in minutes.</p>
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
