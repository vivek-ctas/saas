import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3, RefreshCw, ShoppingCart, TrendingUp, Zap, Shield,
  Users, DollarSign, Package, Globe, Clock, CheckCircle, Sparkles,
  Star, ShoppingBag, Smartphone, Monitor, Tablet, ArrowRight, Quote
} from "lucide-react";
import Layout from "@/components/Layout";
import {
  BlobBackdrop, DashboardMockup, SyncIllustration,
  AnalyticsIllustration, GlobeIllustration, WorkflowIllustration
} from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

const Home = () => {
  const ref = useReveal<HTMLDivElement>();

  const platformStats = [
    { icon: Users, value: "50,000+", label: "Active Sellers" },
    { icon: DollarSign, value: "$2.5B+", label: "GMV Processed" },
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
    { step: "01", title: "Connect", desc: "Link your marketplaces in minutes with one-click integrations.", icon: Zap },
    { step: "02", title: "Sync", desc: "Inventory, orders & pricing flow automatically across every channel.", icon: RefreshCw },
    { step: "03", title: "Grow", desc: "AI insights surface what to ship next, what to reprice, what to scale.", icon: TrendingUp }
  ];

  return (
    <Layout>
      <div ref={ref}>
        {/* HERO */}
        <section className="relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/15">
                  <Zap className="w-4 h-4 mr-2" />
                  Ahmedabad's Leading Tech Experts Since 2019
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  One dashboard.
                  <span className="block bg-gradient-to-r from-pink-200 via-fuchsia-200 to-white bg-clip-text text-transparent">
                    Every marketplace.
                  </span>
                </h1>
                <p className="text-xl text-white/85 mb-8 leading-relaxed max-w-xl">
                  Ctasis Marketplace unifies inventory, orders & analytics across Amazon, eBay,
                  Walmart, Shopify and 50+ channels — built for sellers who refuse to babysit spreadsheets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" variant="secondary" className="text-lg px-8 shadow-stripe-xl group">
                    Start free 14-day trial
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline"
                    className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-stripe">
                    Watch 2-min demo
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/80 text-sm">
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-200" />No credit card</div>
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-200" />15-min setup</div>
                  <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-200" />Cancel anytime</div>
                </div>
              </div>

              <div className="relative reveal delay-200">
                <div className="absolute -inset-6 bg-gradient-to-br from-pink-400/30 to-primary/30 blur-3xl rounded-3xl" />
                <div className="relative animate-float-slow">
                  <DashboardMockup className="w-full h-auto rounded-2xl shadow-stripe-2xl" />
                </div>
                {/* Floating chips */}
                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-stripe-xl p-3 flex items-center gap-2 animate-float">
                  <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                    <RefreshCw className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-900">Synced</div>
                    <div className="text-slate-500">2 sec ago</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-2 bg-white rounded-xl shadow-stripe-xl p-3 flex items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-900">+24% MoM</div>
                    <div className="text-slate-500">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED BY (marquee) */}
        <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-6 text-center text-sm text-slate-500 uppercase tracking-widest">
            Powering 50,000+ sellers across 50+ marketplaces
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
                  Selling on 5 marketplaces shouldn't feel like running 5 businesses.
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
                  Update a product once and watch it propagate to every connected marketplace
                  instantly. Our event-driven sync engine processes 10M+ updates daily without breaking a sweat.
                </p>
                <Button size="lg" className="shadow-stripe-xl group">
                  See how it works
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
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
              <div className="reveal lg:col-span-2 lg:row-span-2 rounded-3xl p-8 bg-gradient-to-br from-primary to-fuchsia-600 text-white relative overflow-hidden hover-lift">
                <div className="relative z-10">
                  <BarChart3 className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Real-time analytics</h3>
                  <p className="text-white/85 mb-6 max-w-md">
                    Profit margins, channel performance and AI-powered recommendations updated every second.
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 w-3/5 opacity-90">
                  <AnalyticsIllustration className="w-full h-auto" />
                </div>
              </div>
              <div className="reveal delay-100 rounded-3xl p-6 bg-slate-50 border border-slate-100 hover-lift">
                <RefreshCw className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Inventory sync</h3>
                <p className="text-sm text-slate-600">Real-time across all channels.</p>
              </div>
              <div className="reveal delay-200 rounded-3xl p-6 bg-slate-50 border border-slate-100 hover-lift">
                <ShoppingCart className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Smart routing</h3>
                <p className="text-sm text-slate-600">Orders route to optimal warehouse.</p>
              </div>
              <div className="reveal delay-300 lg:col-span-2 rounded-3xl p-6 bg-slate-900 text-white hover-lift relative overflow-hidden">
                <Shield className="w-8 h-8 text-pink-400 mb-3" />
                <h3 className="font-bold mb-1">Enterprise security</h3>
                <p className="text-sm text-white/70">SOC 2 Type II, 99.9% uptime SLA, end-to-end encryption.</p>
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />
              </div>
              <div className="reveal delay-400 rounded-3xl p-6 bg-gradient-to-br from-pink-100 to-purple-100 hover-lift">
                <Globe className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Global reach</h3>
                <p className="text-sm text-slate-700">150+ countries supported.</p>
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
            <div className="reveal relative rounded-3xl bg-gradient-to-br from-slate-900 via-primary to-fuchsia-700 p-12 lg:p-16 text-white overflow-hidden shadow-stripe-2xl">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/40 rounded-full blur-3xl" />
              <div className="relative">
                <Quote className="w-12 h-12 text-pink-300 mb-6" />
                <p className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                  "Ctasis cut our order processing time by 80% and we haven't had a single overselling
                  incident in 9 months. It's the operating system our business was missing."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center font-bold text-xl">
                    PR
                  </div>
                  <div>
                    <div className="font-bold">Priya Ramaswamy</div>
                    <div className="text-white/70 text-sm">Founder, Avenue Goods · Sells on 7 marketplaces</div>
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
              Join 50,000+ sellers who trust Ctasis Marketplace. Free 14 days, no credit card.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 shadow-stripe-xl">
                Start free trial
              </Button>
              <Button size="lg" variant="outline"
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-stripe">
                Talk to our team
              </Button>
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
