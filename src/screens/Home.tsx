"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3, RefreshCw, ShoppingCart, TrendingUp, Zap, Shield,
  Users, DollarSign, Package, Globe, Clock, CheckCircle, Sparkles,
  Star, ShoppingBag, ArrowRight, Quote,
  Truck, Megaphone, Brain, Server, Workflow, Boxes,
  RefreshCcw, Settings, FileText,
  Layers,
  Wand2
} from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import {
  SellerHeroMockup, SyncIllustration,
  InfraIllustration, MarketplaceMeshDiagram, ProblemDiagram,
  InventoryDashboardSVG
} from "@/components/illustrations/homePageIllustrations";
import { WorkflowIllustration } from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";



const Home = () => {
  const ref = useReveal<HTMLDivElement>();

  const platformStats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Active Sellers",
      trend: "12.4%",
      accentColor: "#9333EA",
      iconBg: "bg-[#F3E8FF]/60",
      iconColor: "text-[#9333EA]",
      trendBg: "bg-[#F3E8FF]/80",
      trendText: "text-[#7C3AED]",
      borderColor: "border-t-4 border-t-[#A855F7]",
    },
    {
      icon: DollarSign,
      value: "$300M+",
      label: "GMV Processed",
      trend: "18.6%",
      accentColor: "#2563EB",
      iconBg: "bg-[#DBEAFE]/60",
      iconColor: "text-[#2563EB]",
      trendBg: "bg-[#DBEAFE]/80",
      trendText: "text-[#1D4ED8]",
      borderColor: "border-t-4 border-t-[#3B82F6]",
    },
    {
      icon: Package,
      value: "10M+",
      label: "Orders Managed",
      trend: "16.3%",
      accentColor: "#059669",
      iconBg: "bg-[#D1FAE5]/60",
      iconColor: "text-[#059669]",
      trendBg: "bg-[#D1FAE5]/80",
      trendText: "text-[#047857]",
      borderColor: "border-t-4 border-t-[#10B981]",
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries",
      trend: "9.8%",
      accentColor: "#EA580C",
      iconBg: "bg-[#FFEDD5]/60",
      iconColor: "text-[#EA580C]",
      trendBg: "bg-[#FFEDD5]/80",
      trendText: "text-[#C2410C]",
      borderColor: "border-t-4 border-t-[#F97316]",
    },
  ];

  const marketplaces = [
    { name: "Amazon", icon: ShoppingBag }, { name: "Shopify", icon: ShoppingCart },
  ];

  const journey = [
    { step: "01", title: "Connect", desc: "Link your Marketplace in minutes with one-click integrations.", icon: Zap },
    { step: "02", title: "Sync", desc: "Inventory, stock & pricing flow automatically across every channel.", icon: RefreshCw },
    { step: "03", title: "Grow", desc: "AI insights surface what to list next, where to restock, and what to scale.", icon: TrendingUp }
  ];

  return (
    <Layout>
      <div ref={ref} className="antialiased [text-rendering:optimizeLegibility]">
        {/* HERO – Clean blue & white canvas, light, polished */}
        <section className="relative overflow-hidden hero-cream slope-divider-bottom">
          <div className="absolute inset-0 hero-cream-grid pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-blue-300/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative px-5 sm:px-8 lg:px-[70px] pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Copy */}
              <div className="lg:col-span-6 reveal">
                <Badge className="mb-6 bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-white">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Trusted By 50,000+ Multichannel Sellers
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-slate-900 mb-6 leading-[1.1] sm:leading-[1.05] tracking-tight">
                  The Smartest
                  <span className="block bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                    AI Catalog & Inventory Platform
                  </span>
                  for Amazon and Shopify Sellers
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                  Generate AI-optimized listings, sync inventory in real-time, and manage your Amazon and Shopify stores from one beautiful dashboard.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-100 bg-white hover:bg-blue-50 text-slate-900 rounded-full shadow-sm">
                      See Features
                    </Button>
                  </Link>

                  <Link href="/pricing">
                    <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-stripe-xl group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                      Quick Start
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                </div>
                <p className="text-sm text-slate-500 mb-8">No credit card · cancel anytime</p>

                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">4.9 Amazon Stores Rating</span>
                </div>
              </div>

              {/* Mockup */}
              <div className="lg:col-span-6 relative reveal delay-200">
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-400/20 via-blue-200/20 to-blue-600/15 blur-3xl rounded-[40px]" />
                <div className="relative animate-float-slow lg:scale-105 xl:scale-110 origin-center">
                  <SellerHeroMockup className="w-full h-auto" />
                </div>

                {/* Floating chips */}
                <div className="absolute -top-12 -left-4 sm:-left-8 bg-white rounded-2xl shadow-stripe-xl px-4 py-3 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">All channels synced</div>
                    <div className="text-slate-500">2 sec ago</div>
                  </div>
                </div>
                <div className="absolute -bottom-12 right-2 sm:-right-4 bg-white rounded-2xl shadow-stripe-xl px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">+24% MoM revenue</div>
                    <div className="text-slate-500">Last 30 days</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner badges marquee */}
            <style>{`
              @keyframes marquee-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
            <div className="mt-20 reveal">
              <div
                className="group relative overflow-hidden"
                onMouseEnter={(e) => {
                  (e.currentTarget.querySelector('.marquee-track') as HTMLElement).style.animationPlayState = 'paused';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.querySelector('.marquee-track') as HTMLElement).style.animationPlayState = 'running';
                }}
              >
                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-blue-50/60 via-blue-50/60 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-blue-50/60 via-blue-50/60 to-transparent z-10" />

                <div className="marquee-track flex w-max py-2" style={{ animation: 'marquee-scroll 30s linear infinite' }}>
                  {Array.from({ length: 4 }).flatMap((_, set) =>
                    [
                      { name: "Amazon SP-API Partner", sub: "Selling Partner Appstore", logo: "/logos/amazon-color-svgrepo-com.svg" },
                      { name: "Shopify Plus Partner", sub: "Certified App", logo: "/logos/shopify-color-svgrepo-com.svg" },
                      { name: "AWS Advanced Tier", sub: "Technology Partner", logo: "/logos/aws-svgrepo-com.svg" },
                    ].map((p, i) => (
                      <div key={`${set}-${i}`} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/90 backdrop-blur border border-slate-200/70 shadow-sm hover:shadow-lg hover:border-blue-200 transition-stripe shrink-0 mr-4 sm:mr-6">
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center p-1">
                          <img
                            src={p.logo}
                            alt={p.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 leading-tight">{p.name}</div>
                          <div className="text-[10px] text-slate-500">{p.sub}</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WALMART-STYLE LIVE BANNER (SellerSnap pattern) */}



        {/* PROBLEM */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">The Problem</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Selling on 5 marketplaces shouldn't feel like running 5 businesses.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">
                Most sellers juggle a dozen tabs, broken CSV exports and 2 a.m. inventory mismatches. One oversell on Amazon can cost an account suspension worth months of revenue.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Manual inventory and listing updates",
                  "Disconnected order management workflows",
                  "Difficult stock reconciliation",
                  "Limited visibility across business operations",
                  "Time-consuming spreadsheet management",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" relative reveal lg:scale-105 xl:scale-110 origin-center">
              <ProblemDiagram className="w-full h-auto " />
            </div>
          </div>
        </section>

        {/* INFRASTRUCTURE TEASER */}
        <section className="py-12 sm:py-14 lg:py-16 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="relative px-5 sm:px-8 lg:px-[70px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100 ">
                <Workflow className="w-3.5 h-3.5 mr-1" />
                Marketplace Workflow
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Every product follows one intelligent workflow.
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">
                From AI-powered catalog creation to real-time inventory synchronization and bulk product management, every step is automated within one centralized platform—helping you manage Amazon and Shopify stores more efficiently while reducing manual work and keeping your catalog accurate and up to date.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Boxes, label: "Centralized Inventory Management" },
                  { icon: RefreshCcw, label: "Smart Inventory Synchronization" },
                  { icon: Wand2, label: "AI-powered Catalog Generation" },
                  { icon: BarChart3, label: "Real-time Business Visibility" },
                  { icon: Layers, label: "Bulk Catalog Operations" },
                  { icon: Sparkles, label: "AI-powered Automation" },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-700 font-medium"
                  >
                    <f.icon className="w-4 h-4 text-blue-600" />
                    {f.label}
                  </div>
                ))}
              </div>
              {/* <Link href="/infrastructure">
                <Button size="lg" className="shadow-stripe-xl group">
                  See the architecture <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link> */}
            </div>
            <div className="reveal delay-200">
              <InfraIllustration className="w-full h-auto max-w-[550px] mx-auto" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-14 lg:py-16 bg-[#F1F3FC] border-t border-[#EAECF3] relative overflow-hidden">
          <div className="px-5 sm:px-8 lg:px-[70px] max-w-7xl mx-auto relative z-10">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="flex justify-center mb-6 reveal">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-[#EBF5FF] text-[11px] sm:text-xs font-semibold text-[#1C64F2] uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#1C64F2] animate-pulse" />
                  Live Platform Stats
                </span>
              </div>
              <h2 className="text-3xl sm:text-[2.6rem] font-bold text-[#0F172A] tracking-tight mb-4 leading-tight reveal">
                Trusted by sellers worldwide
              </h2>
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto reveal font-normal">
                Real results from real sellers. Our platform powers thousands of businesses across the globe every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {platformStats.map((stat, i) => (
                <div
                  key={i}
                  className={`reveal bg-white rounded-[24px] border border-slate-100 ${stat.borderColor}
                    shadow-[0_10px_35px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-15px_rgba(28,100,242,0.08)]
                    hover:scale-[1.02] transition-all duration-300
                    p-6 sm:p-8 flex flex-col items-center text-center min-h-[300px] sm:min-h-[340px]`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${stat.iconBg} flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 hover:rotate-12`}
                  >
                    <stat.icon className={`w-7 h-7 sm:w-10 sm:h-10 ${stat.iconColor}`} />
                  </div>

                  {/* Value */}
                  <h3 className="text-3xl sm:text-[2.5rem] font-bold text-[#0F172A] tracking-tight mb-1 sm:mb-2 leading-none">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="text-[#64748B] text-sm sm:text-base font-semibold mb-6">
                    {stat.label}
                  </p>

                  {/* Divider */}
                  <div className="w-full border-t border-slate-100 mt-auto pt-6" />

                  {/* Trend */}
                  <div className="inline-flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${stat.trendBg} ${stat.trendText}`}
                    >
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className={`text-sm sm:text-base font-bold leading-none mb-1 ${stat.trendText}`}>
                        {stat.trend}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium leading-none">
                        vs last 30 days
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY: PROBLEM → SOLUTION */}
        <section className="py-12 sm:py-14 lg:py-16 bg-white border-t border-[#EAECF3]">
          <div className="relative px-5 sm:px-8 lg:px-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20 lg:mb-24">
              <div className="order-2 lg:order-1 reveal">
                <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">The Problem</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Selling on 5 Marketplace shouldn't feel like running 5 businesses.
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">
                  Most sellers juggle a dozen tabs, broken CSV exports and 2 a.m. inventory mismatches.
                  One overselling incident on Amazon can cost an account suspension worth months of revenue.
                </p>
                <ul className="space-y-3">
                  {["Manual stock updates across platforms", "Lost orders & angry customers", "No single source of truth", "Hours wasted reconciling data"].map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 reveal  lg:scale-105 xl:scale-110 origin-center">
                <WorkflowIllustration className="w-full h-auto " />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
              <div className="reveal  lg:scale-105 xl:scale-110 origin-center">
                <SyncIllustration className="w-full h-auto" />
              </div>
              <div className="reveal delay-200">
                <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">The Ctasis Way</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  One source of truth. Synced everywhere in milliseconds.
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">
                  Update your product information once and let the platform automatically synchronize inventory, pricing, listings,
                  and operational data across your connected workflows.
                  Intelligent automation minimizes manual intervention, reduces costly errors, and keeps your business running efficiently as your catalog continues to grow.
                </p>
                <Link href="/services">
                  <Button size="lg" className="rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                    Explore Our Services
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

              </div>
            </div>
          </div>
        </section>

        { }
        <section className="py-12 sm:py-14 lg:py-16 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left copy */}
              <div className="lg:col-span-5 reveal">
                <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">
                  <Zap className="w-3.5 h-3.5 mr-1" />  Amazon + Shopify Integrations
                </Badge>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-tight mb-6">
                  Connect your <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Amazon and Shopify stores in minutes.</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8">
                  Bring inventory, orders, listings, analytics, and business operations together in one centralized platform. Automate repetitive tasks, improve accuracy, and keep your workflows running smoothly.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Centralized inventory & order management",
                    "Real-time synchronization across operations",
                    "AI-powered catalog & listing optimization",
                    "Bulk updates with validation & audit logs",
                    "Business analytics and performance insights",
                    "Secure APIs with scalable integrations",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-slate-700 text-sm lg:text-base">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/marketplaces/amazon">
                    <Button size="lg" variant="outline" className="text-base px-6 h-12 border-slate-200 bg-white hover:bg-blue-50 text-slate-900 rounded-full shadow-sm">
                      Explore Integrations
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" className="text-base px-6 h-12 rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                      Request An Integration
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3 text-slate-700 text-sm">
                  {["FBA & FBM support", "One-click connect", "Real-time sync"].map((t, i) => (
                    <span key={i} className="flex items-center gap-2 bg-blue-50/60 px-3 py-1.5 rounded-full border border-blue-100 shadow-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600" /> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Visual card */}
              <div className="lg:col-span-7 reveal delay-200">

                <div className="reveal lg:scale-105 xl:scale-110 origin-center">
                  <MarketplaceMeshDiagram className="w-full h-auto" />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* INVENTORY SYNC PRODUCT HIGHLIGHT */}
        <section className="py-12 sm:py-14 lg:py-16 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left copy */}
              <div className="lg:col-span-7 reveal delay-200">
                <div className="reveal lg:scale-105 xl:scale-110 origin-center">
                  <InventoryDashboardSVG className="w-full h-auto" />
                </div>
              </div>
              {/* Right Visual card */}

              <div className="lg:col-span-5 reveal">
                <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">
                  <RefreshCw className="w-3.5 h-3.5 mr-1" /> Inventory Sync
                </Badge>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-tight mb-6">
                  Stock everywhere. <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Always accurate.</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8">
                  Real-time stock sync across all marketplaces and warehouses. One update. Everywhere. Instantly.
                </p>

                <div className="space-y-5 mb-8">
                  {[
                    {
                      icon: Zap,
                      title: "Real-time updates",
                      desc: "Sub-2-second propagation across channels"
                    },
                    {
                      icon: Shield,
                      title: "Cross-channel reservations",
                      desc: "Prevent overselling with smart reservations"
                    },
                    {
                      icon: Settings,
                      title: "Automatic conflict resolution",
                      desc: "Resolve stock conflicts automatically"
                    },
                    {
                      icon: FileText,
                      title: "Full sync audit log",
                      desc: "Track every change with detailed logs"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF2FF] text-[#6366F1]">
                        <item.icon className="w-5 h-5 font-bold" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 text-slate-700 text-sm">
                  {["Sub-2s propagation", "Zero overselling", "Full audit trail"].map((t, i) => (
                    <span key={i} className="flex items-center gap-2 bg-blue-50/60 px-3 py-1.5 rounded-full border border-blue-100 shadow-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600" /> {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* JOURNEY / 3-STEP */}
        <section className="py-12 sm:py-14 lg:py-16 bg-white border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">From signup to scale in 3 steps</h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600">Set up in 15 minutes. See results within a week.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* dashed connector */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px border-t-2 border-dashed border-slate-300" />
              {journey.map((j, i) => (
                <div key={i} className="reveal text-center relative" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="relative inline-flex w-24 h-24 items-center justify-center mb-6">
                    <span className="absolute inset-0 rounded-full bg-blue-100 animate-pulse-ring" />
                    <span className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-900 rounded-full flex items-center justify-center shadow-lg">
                      <j.icon className="w-9 h-9 text-white" />
                    </span>
                  </div>
                  <div className="text-sm font-bold text-blue-600 mb-2 tracking-widest">{j.step}</div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">{j.title}</h3>
                  <p className="text-slate-600 lg:text-lg max-w-xs mx-auto">{j.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA */}
        <section className="py-14 lg:py-16 relative overflow-hidden bg-gradient-to-br from-[hsl(226,71%,50%)] to-[hsl(226,71%,35%)]">
          <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-[70px] text-center reveal">
            <Sparkles className="w-12 h-12 text-blue-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to grow your<br />multichannel business?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join 50,000+ sellers who trust Ctasis Sellerbuz. Free 14 days, no credit card.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="text-lg px-8 rounded-full bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-lg">
                  Get started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline"
                  className="text-lg px-8 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:text-white shadow-lg transition-all duration-300"
                >
                  Talk to our team
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/80 text-sm">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-2" />Setup in 15 min</span>
              <span className="flex items-center"><Shield className="w-4 h-4 mr-2" />SOC 2 compliant</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" />Cancel anytime</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;