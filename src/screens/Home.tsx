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
  NeuralIllustration, InfraIllustration, LogoChip
} from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

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
    { name: "Google", icon: Globe }, { name: "WooCommerce", icon: Package },
    { name: "BigCommerce", icon: ShoppingBag }, { name: "Magento", icon: Package },
    { name: "Target", icon: Star }, { name: "TikTok", icon: Smartphone },
    { name: "Pinterest", icon: Sparkles }, { name: "Reverb", icon: Monitor },
    { name: "Mercari", icon: Smartphone }, { name: "Poshmark", icon: Tablet }
  ];

  const journey = [
    { step: "01", title: "Connect", desc: "Link your Sellerbuz in minutes with one-click integrations.", icon: Zap },
    { step: "02", title: "Sync", desc: "Inventory, orders & pricing flow automatically across every channel.", icon: RefreshCw },
    { step: "03", title: "Grow", desc: "AI insights surface what to ship next, what to reprice, what to scale.", icon: TrendingUp }
  ];

  return (
    <Layout>
      <div ref={ref}>
        {/* HERO – SellerSnap-style: warm cream canvas, light, polished */}
        <section className="relative overflow-hidden hero-cream slope-divider-bottom">
          <div className="absolute inset-0 hero-cream-grid pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 sm:pt-28 sm:pb-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Copy */}
              <div className="lg:col-span-6 reveal">
                <Badge className="mb-6 bg-white/80 backdrop-blur-sm text-primary border border-primary/15 shadow-sm hover:bg-white">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Trusted by 50,000+ multichannel sellers
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold text-slate-900 mb-6 leading-[1.05] tracking-tight">
                  The most advanced
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    AI Sellerbuz OS
                  </span>
                  with built-in seller analytics
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                  Save time. Sync inventory. Avoid overselling. Maximize profit across Amazon,
                  Walmart, eBay, Shopify and 50+ channels — from one beautiful dashboard.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 rounded-full shadow-sm">
                      See Features
                    </Button>
                  </Link>

                  <Link href="/pricing">
                    <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-stripe-xl group bg-gradient-to-r from-primary to-secondary hover:opacity-95 border-0">
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
                  <span className="text-sm font-semibold text-slate-700">4.9 Amazon App Store Rating</span>
                </div>
              </div>

              {/* Mockup */}
              <div className="lg:col-span-6 relative reveal delay-200">
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/15 via-orange-200/15 to-secondary/15 blur-3xl rounded-[40px]" />
                <div className="relative animate-float-slow">
                  <SellerHeroMockup className="w-full h-auto" />
                </div>

                {/* Floating chips */}
                <div className="absolute top-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-stripe-xl px-4 py-3 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">All channels synced</div>
                    <div className="text-slate-500">2 sec ago</div>
                  </div>
                </div>
                <div className="absolute -bottom-2 right-2 sm:-right-4 bg-white rounded-2xl shadow-stripe-xl px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">+24% MoM revenue</div>
                    <div className="text-slate-500">Last 30 days</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner badges row */}
            <div className="mt-20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 reveal">
              {[
                { name: "Amazon SP-API Partner", sub: "Selling Partner Appstore" },
                { name: "Walmart Solution Provider", sub: "Sellerbuz Connect" },
                { name: "Shopify Plus Partner", sub: "Certified App" },
                { name: "AWS Advanced Tier", sub: "Technology Partner" },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/90 backdrop-blur border border-slate-200/70 shadow-sm hover:shadow-stripe transition-stripe">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center text-white text-[10px] font-black tracking-tighter">
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">{p.name}</div>
                    <div className="text-[10px] text-slate-500">{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WALMART-STYLE LIVE BANNER (SellerSnap pattern) */}
        <section className="relative -mt-12 z-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-2xl border-2 border-secondary/30 bg-white shadow-stripe-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 reveal">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                <p className="text-base sm:text-lg font-semibold text-slate-900">
                  AI Auto-Repricer is live! <span className="text-slate-500 font-normal">Trusted for Amazon, now for Walmart & Flipkart.</span>
                </p>
              </div>
              <Link href="/services#auto-repricer" className="flex items-center gap-1 text-secondary font-bold text-sm hover:gap-2 transition-all whitespace-nowrap">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* TRUSTED BY (marquee) */}
        <section className="py-16 pt-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-8 text-center text-sm text-slate-500 uppercase tracking-widest font-semibold">
            Powering 50,000+ sellers across 50+ Sellerbuz
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="marquee-track gap-12">
              {[...marketplaces, ...marketplaces].map((m, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-50 hover:bg-accent transition-stripe">
                  <m.icon className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-slate-700 whitespace-nowrap">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTEGRATIONS STACK — refined editorial layout */}
        <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
          <div className="absolute inset-0 hero-cream-grid opacity-40 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal max-w-3xl mx-auto">
              <Badge className="mb-5 bg-white text-primary border border-primary/15 shadow-sm">
                <Boxes className="w-3.5 h-3.5 mr-1.5" /> The integration stack
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-[1.1] tracking-tight">
                One platform.{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Every connection
                </span>{" "}
                you'll ever need.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sellerbuz, couriers, ad networks, ERPs, payment rails — Ctasis stitches it all into one source of truth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Store, title: "Sellerbuz", count: "20+",
                  items: ["Amazon FBA/FBM", "Walmart", "eBay", "Lazada", "Shopee", "Rakuten", "Flipkart", "Allegro"]
                },
                {
                  icon: Truck, title: "Logistics & couriers", count: "15+",
                  items: ["Shiprocket", "Tirupati", "DHL", "USPS", "PostNL", "Rakuten Post", "Delhivery", "Blue Dart"]
                },
                {
                  icon: Megaphone, title: "Ads & growth", count: "10+",
                  items: ["Amazon Ads", "Google Shopping", "Meta Ads", "TikTok Ads", "Walmart Connect", "Criteo"]
                },
                {
                  icon: Brain, title: "AI & analytics", count: "AI-native",
                  items: ["Demand forecasting", "Repricing AI", "Sentiment analysis", "Customer behaviour", "Anomaly detection"]
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className="reveal group rounded-2xl p-6 bg-white border border-slate-200/80 hover:border-primary/30 hover:shadow-stripe-xl transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      <b.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">{b.count}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-3 tracking-tight">{b.title}</h3>
                  <ul className="space-y-2">
                    {b.items.map((it, j) => (
                      <li key={j} className="text-[13px] text-slate-600 flex items-center gap-2 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-primary transition-colors" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center reveal">
              <Link href="/marketplaces">
                <Button size="lg" variant="outline" className="rounded-full px-7 border-slate-300 bg-white hover:bg-slate-50 hover:border-primary/40 group">
                  Explore all 80+ integrations
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* INFRASTRUCTURE TEASER */}
        <section className="py-24 section-bg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Server className="w-3.5 h-3.5 mr-1" /> Built like a hyperscaler
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Isolated pods. Kubernetes scaling. Kafka-driven events.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
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
                    <f.icon className="w-4 h-4 text-primary" /> {f.label}
                  </div>
                ))}
              </div>
              <Link href="/infrastructure">
                <Button size="lg" className="shadow-stripe-xl group">
                  See the architecture <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="reveal delay-200">
              <InfraIllustration className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {platformStats.map((stat, i) => (
                <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-stripe">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY: PROBLEM → SOLUTION */}
        <section className="py-24 section-bg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1 reveal">
                <Badge className="mb-4 bg-pink-100 text-pink-700 border-0">The problem</Badge>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Selling on 5 Sellerbuz shouldn't feel like running 5 businesses.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Most sellers juggle a dozen tabs, broken CSV exports and 2 a.m. inventory mismatches.
                  One overselling incident on Amazon can cost an account suspension worth months of revenue.
                </p>
                <ul className="space-y-3">
                  {["Manual stock updates across platforms", "Lost orders & angry customers", "No single source of truth", "Hours wasted reconciling data"].map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 reveal delay-200">
                <WorkflowIllustration className="w-full h-auto" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <SyncIllustration className="w-full h-auto" />
              </div>
              <div className="reveal delay-200">
                <Badge className="mb-4 bg-accent text-accent-foreground border-0">The Ctasis way</Badge>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  One source of truth. Synced everywhere in milliseconds.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Update a product once and watch it propagate to every connected Sellerbuz
                  instantly. Our event-driven sync engine processes 10M+ updates daily without breaking a sweat.
                </p>
                <Link href="/services#how-it-works">
                  <Button size="lg" className="shadow-stripe-xl group">
                    See how it works
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* BENTO FEATURES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Platform</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything you need to scale</h2>
              <p className="text-xl text-slate-600">A complete operating system for multichannel commerce.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
              {/* Big tile */}
              <div
                className="reveal lg:col-span-2 lg:row-span-2 rounded-3xl p-0  bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden hover-lift"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start  h-full">

                  {/* LEFT SIDE */}
                  <div className="relative z-10 flex flex-col justify-start pt-8 pb-8 pl-8 pr-6 lg:pl-10 lg:pr-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                        <BarChart3 className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-[34px] font-bold leading-tight tracking-tight mb-3">
                      Real-time analytics
                    </h3>

                    <p className="text-white/85 text-[15px] leading-relaxed max-w-[280px]">
                      Profit margins, channel performance and AI-powered recommendations
                      updated <span className="font-medium text-white">every second</span>.
                    </p>
                  </div>
                  {/* RIGHT SIDE */}
                  <div className="relative flex items-center justify-center pr-4 lg:pr-6 h-full
                  ">
                    <div className="absolute inset-0 bg-white/10 rounded-[22px] blur-3xl scale-90 opacity-60" />

                    {/* Main Illustration */}
                    <div className="relative z-10 w-full max-w-[420px]  drop-shadow-2xl">
                      <AnalyticsIllustration className="w-full h-auto block" />
                    </div>
                  </div>

                </div>
              </div>
              <div className="reveal delay-100 rounded-3xl p-6 bg-slate-50 border border-slate-100 hover-lift">
                <RefreshCw className="w-8 h-8 text-primary mb-4" />

                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Inventory sync
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Real-time stock sync across Sellerbuz and warehouses.
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live updates
                </div>
              </div>

              <div className="reveal delay-200 rounded-3xl p-6 bg-slate-50 border border-slate-100 hover-lift">
                <ShoppingCart className="w-8 h-8 text-secondary mb-4" />

                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Smart routing
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Orders route automatically to the best fulfilment node.
                </p>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>AI optimized</span>
                </div>
              </div>

              <div className="reveal delay-300 lg:col-span-2 rounded-3xl p-6 bg-slate-900 text-white hover-lift relative overflow-hidden">
                <Shield className="w-8 h-8 text-pink-400 mb-4" />

                <h3 className="font-bold text-xl mb-2">
                  Enterprise security
                </h3>

                <p className="text-sm text-white/70 leading-relaxed max-w-lg mb-5">
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

                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />
              </div>

              <div className="reveal delay-400 rounded-3xl p-6 bg-gradient-to-br from-indigo-50 to-blue-100 border border-blue-100 hover-lift">
                <Globe className="w-8 h-8 text-primary mb-4" />

                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Global reach
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Sell globally with multi-currency and regional support.
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <span>150+ countries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY / 3-STEP */}
        <section className="py-24 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">From signup to scale in 3 steps</h2>
              <p className="text-xl text-slate-600">Set up in 15 minutes. See results within a week.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* dashed connector */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px border-t-2 border-dashed border-slate-300" />
              {journey.map((j, i) => (
                <div key={i} className="reveal text-center relative" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="relative inline-flex w-24 h-24 items-center justify-center mb-6">
                    <span className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-ring" />
                    <span className="relative w-20 h-20 gradient-primary rounded-full flex items-center justify-center shadow-stripe-xl">
                      <j.icon className="w-9 h-9 text-white" />
                    </span>
                  </div>
                  <div className="text-sm font-bold text-secondary mb-2 tracking-widest">{j.step}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{j.title}</h3>
                  <p className="text-slate-600 max-w-xs mx-auto">{j.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal relative rounded-3xl bg-gradient-to-br from-slate-900 via-primary to-orange-500 p-12 lg:p-16 text-white overflow-hidden shadow-stripe-2xl">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/40 rounded-full blur-3xl" />
              <div className="relative">
                <Quote className="w-12 h-12 text-pink-300 mb-6" />
                <p className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                  "Ctasis cut our order processing time by 80% and we haven't had a single overselling
                  incident in 9 months. It's the operating system our business was missing."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center font-bold text-xl">
                    PR
                  </div>
                  <div>
                    <div className="font-bold">Priya Ramaswamy</div>
                    <div className="text-white/70 text-sm">Founder, Avenue Goods · Sells on 7 Sellerbuz</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL REACH */}
        <section className="py-24 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <GlobeIllustration className="w-full h-auto" />
            </div>
            <div className="reveal delay-200">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Global infrastructure</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Built for sellers, wherever they sell.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Multi-currency, multi-language, multi-warehouse. We handle the complexity of cross-border
                commerce so you can focus on growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "30+", l: "Currencies" },
                  { v: "12+", l: "Languages" },
                  { v: "150+", l: "Countries" },
                  { v: "24/7", l: "Support" }
                ].map((s, i) => (
                  <div key={i} className="rounded-xl bg-white p-4 border border-slate-100 shadow-sm">
                    <div className="text-2xl font-bold text-primary">{s.v}</div>
                    <div className="text-sm text-slate-600">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <Sparkles className="w-12 h-12 text-pink-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to grow your<br />multichannel business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join 50,000+ sellers who trust Ctasis Sellerbuz. Free 14 days, no credit card.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-stripe-xl">
                  Get started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline"
                  className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/80 shadow-stripe">
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
