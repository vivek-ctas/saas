"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3, RefreshCw, ShoppingCart, TrendingUp, Zap, Shield,
  Users, DollarSign, Package, Globe, Clock, CheckCircle, Sparkles,
  Star, ShoppingBag, Smartphone, Monitor, Tablet, ArrowRight, Quote,
  Truck, Megaphone, Brain, Server, Workflow, Boxes, Store
} from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import {
  BlobBackdrop, DashboardMockup, SellerHeroMockup, SyncIllustration,
  AnalyticsIllustration, GlobeIllustration, WorkflowIllustration,
  NeuralIllustration, InfraIllustration, LogoChip, MarketplaceMeshDiagram, ProblemDiagram
} from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";



const Home = () => {
  const ref = useReveal<HTMLDivElement>();

  const platformStats = [
    { icon: Users, value: "50,000+", label: "Active Sellers" },
    { icon: DollarSign, value: "$300M+", label: "GMV Processed" },
    { icon: Package, value: "10M+", label: "Orders Managed" },
    { icon: Globe, value: "150+", label: "Countries" }
  ];

  const marketplaces = [
    { name: "Amazon", icon: ShoppingBag }, { name: "eBay", icon: Globe },
    { name: "Walmart", icon: Star }, { name: "Shopify", icon: ShoppingCart },
    { name: "Etsy", icon: Sparkles }, { name: "Facebook", icon: Monitor },
  ];

  const journey = [
    { step: "01", title: "Connect", desc: "Link your Marketplace in minutes with one-click integrations.", icon: Zap },
    { step: "02", title: "Sync", desc: "Inventory, orders & pricing flow automatically across every channel.", icon: RefreshCw },
    { step: "03", title: "Grow", desc: "AI insights surface what to ship next, what to reprice, what to scale.", icon: TrendingUp }
  ];

  return (
    <Layout>
      <div ref={ref}>
        {/* HERO – Clean blue & white canvas, light, polished */}
        <section className="relative overflow-hidden hero-cream slope-divider-bottom">
          <div className="absolute inset-0 hero-cream-grid pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-blue-300/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative px-[50px] lg:px-[70px] pt-20 pb-32 sm:pt-28 sm:pb-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Copy */}
              <div className="lg:col-span-6 reveal">
                <Badge className="mb-6 bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-white">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Trusted by 50,000+ multichannel sellers
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-slate-900 mb-6 leading-[1.05] tracking-tight">
                  The most advanced
                  <span className="block bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                    AI Marketplace OS
                  </span>
                  with built-in seller analytics
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                  Save time. Sync inventory. Avoid overselling. Maximize profit across Amazon,
                  Walmart, eBay, Shopify and 50+ channels — from one beautiful dashboard.
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
                <div className="relative animate-float-slow max-w-[600px] mx-auto">
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

                <div className="marquee-track flex w-max gap-4 sm:gap-6" style={{ animation: 'marquee-scroll 30s linear infinite' }}>
                  {[0, 1].map((set) => (
                    <div key={set} className="flex items-center gap-4 sm:gap-6 shrink-0">
                      {[
                        { name: "Amazon SP-API Partner", sub: "Selling Partner Appstore", logo: "/amazon-color-svgrepo-com.svg" },
                        { name: "Walmart Solution Provider", sub: "Marketplace Connect", logo: "/walmart.png" },
                        { name: "Shopify Plus Partner", sub: "Certified App", logo: "/shopify-svgrepo-com.svg" },
                        { name: "AWS Advanced Tier", sub: "Technology Partner", logo: "/aws-svgrepo-com.svg" },
                        { name: "eBay Developer Program", sub: "Marketplace Integration", logo: "/ebay-svgrepo-com.svg" },
                        { name: "Etsy Developer Platform", sub: "Seller API Partner", logo: "/etsy-logo-svgrepo-com.svg" },
                        { name: "Flipkart Marketplace", sub: "Seller Integration", logo: "/flipkart-icon.svg" },
                      ].map((p, i) => (
                        <div key={`${set}-${i}`} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/90 backdrop-blur border border-slate-200/70 shadow-sm hover:shadow-lg hover:border-blue-200 transition-stripe">
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
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WALMART-STYLE LIVE BANNER (SellerSnap pattern) */}
        <section className="relative -mt-12 z-10">
          <div className="px-[50px] lg:px-[70px]">
            <div className="max-w-4xl mx-auto rounded-2xl border-2 border-blue-200 bg-white shadow-lg px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 reveal">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <p className="text-base sm:text-lg font-semibold text-slate-900">
                  AI Auto-Repricer is live! <span className="text-slate-500 font-normal">Trusted for Amazon, now for Walmart & Flipkart.</span>
                </p>
              </div>
              <Link href="/services#auto-repricer" className="flex items-center gap-1 text-blue-600 font-bold text-sm hover:gap-2 transition-all whitespace-nowrap">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>


        {/* PROBLEM */}
        <section className="py-20 bg-white">
          <div className="px-[50px] lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">The problem</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Selling on 5 marketplaces shouldn't feel like running 5 businesses.
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">
                Most sellers juggle a dozen tabs, broken CSV exports and 2 a.m. inventory mismatches. One oversell on Amazon can cost an account suspension worth months of revenue.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Manual stock updates across platforms",
                  "Lost orders and angry customers",
                  "No single source of truth",
                  "Hours wasted reconciling spreadsheets",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal delay-200">
              <ProblemDiagram className="w-full h-auto max-w-[550px] mx-auto" />
            </div>
          </div>
        </section>

        {/* INFRASTRUCTURE TEASER */}
        <section className="py-24 bg-blue-50/40 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative px-[50px] lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">
                <Server className="w-3.5 h-3.5 mr-1" /> Built like a hyperscaler
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Isolated pods. Kubernetes scaling. Kafka-driven events.
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">
                Each tenant runs in its own Docker pod with dedicated PostgreSQL + MongoDB databases. Kubernetes load
                balancers handle 10M+ daily events through Kafka and RabbitMQ — so your store never blinks
                during a flash sale.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Server, label: "AWS multi-region" },
                  { icon: Workflow, label: "Kafka + RabbitMQ" },
                  { icon: Shield, label: "SOC 2 Type II" },
                  { icon: Boxes, label: "Centralized catalog" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <f.icon className="w-4 h-4 text-blue-600" /> {f.label}
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
        <section className="py-20 bg-white">
          <div className="px-[50px] lg:px-[70px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {platformStats.map((stat, i) => (
                <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-slate-600 lg:text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY: PROBLEM → SOLUTION */}
        <section className="py-24 bg-blue-50/40 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative px-[50px] lg:px-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1 reveal">
                <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">The problem</Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Selling on 5 Marketplace shouldn't feel like running 5 businesses.
                </h2>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">
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
              <div className="order-1 lg:order-2 reveal delay-200">
                <WorkflowIllustration className="w-full h-auto max-w-[550px] mx-auto" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <SyncIllustration className="w-full h-auto max-w-[550px] mx-auto" />
              </div>
              <div className="reveal delay-200">
                <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">The Ctasis way</Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  One source of truth. Synced everywhere in milliseconds.
                </h2>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">
                  Update a product once and watch it propagate to every connected Marketplace
                  instantly. Our event-driven sync engine processes 10M+ updates daily without breaking a sweat.
                </p>
                <Link href="/services#how-it-works">
                  <Button size="lg" className="rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                    See how it works
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS SECTOR — "Sell on every channel that matters" */}
        <section className="py-24 bg-white">
          <div className="px-[50px] lg:px-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left copy */}
              <div className="lg:col-span-5 reveal">
                <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">
                  <Zap className="w-3.5 h-3.5 mr-1" /> 80+ live integrations
                </Badge>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-tight mb-6">
                  Sell on every channel <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">that matters.</span>
                </h2>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8">
                  From Amazon FBA to Lazada, TikTok Shop to Reliance Smart — Ctasis connects every Marketplace, storefront, courier and ad network you need to scale globally.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/marketplaces">
                    <Button size="lg" variant="outline" className="text-base px-6 h-12 border-slate-200 bg-white hover:bg-blue-50 text-slate-900 rounded-full shadow-sm">
                      See all integrations
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" className="text-base px-6 h-12 rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                      Connect a channel
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

                <div className="scale-105 origin-center max-w-[650px] mx-auto">
                  <MarketplaceMeshDiagram className="w-full h-auto" />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* BENTO FEATURES */}
        <section className="py-24 bg-blue-50/40">
          <div className="px-[50px] lg:px-[70px]">
            <div className="text-center mb-16 max-w-2xl mx-auto reveal">
              <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-100">Platform</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Everything you need to scale</h2>
              <p className="text-xl lg:text-2xl text-slate-600">A complete operating system for multichannel commerce.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Big tile — spans 2 cols and 2 rows on lg */}
              <div
                className="reveal lg:col-span-2 lg:row-span-2 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-slate-200/70 relative overflow-hidden hover-lift min-h-[420px] lg:min-h-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-center gap-2 h-full">

                  {/* LEFT SIDE */}
                  <div className="relative z-10 flex flex-col justify-center py-8 pl-8 pr-2 lg:pl-10 lg:pr-3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-[38px] font-bold leading-tight tracking-tight mb-3 text-slate-900">
                      Real-time analytics
                    </h3>

                    <p className="text-slate-600 text-[15px] leading-relaxed max-w-[280px]">
                      Profit margins, channel performance and AI-powered recommendations
                      updated <span className="font-medium text-blue-600">every second</span>.
                    </p>
                  </div>
                  {/* RIGHT SIDE */}
                  <div className="relative flex items-center justify-center pr-4 lg:pr-6 h-full">
                    <div className="relative z-10 w-full max-w-[500px]">
                      <AnalyticsIllustration className="w-full h-auto" />
                    </div>
                  </div>

                </div>
              </div>

              {/* Inventory sync */}
              <div className="reveal delay-100 rounded-3xl p-6 bg-white border border-slate-200/70 hover:border-blue-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center mb-4">
                  <RefreshCw className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-bold text-slate-900 text-lg lg:text-xl mb-2">
                  Inventory sync
                </h3>

                <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">
                  Real-time stock sync across Marketplace and warehouses.
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-blue-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live updates
                </div>
              </div>

              {/* Smart routing */}
              <div className="reveal delay-200 rounded-3xl p-6 bg-white border border-slate-200/70 hover:border-blue-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-bold text-slate-900 text-lg lg:text-xl mb-2">
                  Smart routing
                </h3>

                <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">
                  Orders route automatically to the best fulfilment node.
                </p>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>AI optimized</span>
                </div>
              </div>

              {/* Enterprise security — spans 2 cols */}
              <div className="reveal delay-300 lg:col-span-2 rounded-3xl p-6 bg-slate-900 text-white hover-lift relative overflow-hidden">
                <Shield className="w-8 h-8 text-blue-400 mb-4" />

                <h3 className="font-bold text-xl lg:text-2xl mb-2">
                  Enterprise security
                </h3>

                <p className="text-sm lg:text-base text-white/70 leading-relaxed max-w-lg mb-5">
                  SOC 2 infrastructure with encrypted data and enterprise-grade uptime.
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium">
                    SOC 2
                  </div>

                  <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium">
                    99.9% SLA
                  </div>

                  <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium">
                    Encrypted
                  </div>
                </div>
              </div>

              {/* Global reach */}
              <div className="reveal delay-400 rounded-3xl p-6 bg-white border border-slate-200/70 hover:border-blue-200 transition-all hover-lift">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>

                <h3 className="font-bold text-slate-900 text-lg lg:text-xl mb-2">
                  Global reach
                </h3>

                <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">
                  Sell globally with multi-currency and regional support.
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-blue-600">
                  <span>150+ countries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY / 3-STEP */}
        <section className="py-24 bg-white">
          <div className="px-[50px] lg:px-[70px]">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">From signup to scale in 3 steps</h2>
              <p className="text-xl lg:text-2xl text-slate-600">Set up in 15 minutes. See results within a week.</p>
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
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[hsl(226,71%,50%)] to-[hsl(226,71%,35%)]">
          <div className="relative max-w-5xl mx-auto px-[50px] lg:px-[70px] text-center reveal">
            <Sparkles className="w-12 h-12 text-blue-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to grow your<br />multichannel business?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
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
                  className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full shadow-lg">
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
