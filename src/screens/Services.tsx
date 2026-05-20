"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  RefreshCw, ShoppingCart, BarChart3, TrendingUp, Zap, Globe, Shield,
  Truck, Calculator, Warehouse, Layers, Package2, Brain, Users,
  ArrowRight, CheckCircle, Search, Settings, Rocket, LineChart, Sparkles
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import {
  BlobBackdrop, AnalyticsIllustration, ServicesHeroMockup, OrderFlowDiagram,
  WorkflowIllustration,
  AIPipelineDiagram, RepricerStrategyChart, AnalyticsFlowDiagram,
  AutomationBuilderDiagram
} from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

const Services = () => {
  const ref = useReveal<HTMLDivElement>();

  const services = [
    { icon: RefreshCw, title: "Inventory Sync", desc: "Real-time stock levels across every channel.", tone: "from-blue-500 to-indigo-600", bg: "bg-blue-50" },
    { icon: ShoppingCart, title: "Order Management", desc: "One inbox for orders from all marketplaces.", tone: "from-secondary to-orange-500", bg: "bg-pink-50" },
    { icon: BarChart3, title: "Analytics & Reporting", desc: "Dashboards that surface profit, not noise.", tone: "from-indigo-500 to-secondary", bg: "bg-indigo-50" },
    { icon: TrendingUp, title: "Performance Optimization", desc: "AI-driven repricing and listing tweaks.", tone: "from-orange-500 to-red-500", bg: "bg-orange-50" },
    { icon: Truck, title: "Logistics & Fulfillment", desc: "Multi-carrier shipping with smart routing.", tone: "from-indigo-500 to-blue-600", bg: "bg-indigo-50" },
    { icon: Calculator, title: "Tax & Compliance", desc: "Sales tax, VAT and GST — handled.", tone: "from-rose-500 to-pink-600", bg: "bg-rose-50" },
    { icon: Warehouse, title: "Warehouse Management", desc: "Multi-location inventory with barcode scanning.", tone: "from-teal-500 to-cyan-600", bg: "bg-teal-50" },
    { icon: Layers, title: "Cross-Platform Integration", desc: "ERP, CRM and accounting — connected.", tone: "from-cyan-500 to-blue-500", bg: "bg-cyan-50" },
    { icon: Package2, title: "Product Information Mgmt", desc: "One catalog, infinite channels.", tone: "from-emerald-500 to-teal-500", bg: "bg-emerald-50" },
    { icon: Brain, title: "AI-Powered Insights", desc: "Forecast demand 90 days out.", tone: "from-indigo-600 to-primary", bg: "bg-indigo-50" },
    { icon: Users, title: "Team Collaboration", desc: "Role-based access and audit trails.", tone: "from-secondary to-rose-500", bg: "bg-pink-50" },
    { icon: Shield, title: "Security & Compliance", desc: "SOC 2 Type II with 99.9% uptime SLA.", tone: "from-slate-600 to-slate-800", bg: "bg-slate-50" }
  ];

  const process = [
    { icon: Search, title: "Discover", desc: "We map your current stack and identify the gaps." },
    { icon: Settings, title: "Configure", desc: "Connect channels and tailor workflows to your business." },
    { icon: Rocket, title: "Launch", desc: "Go live in days — not months — with white-glove support." },
    { icon: LineChart, title: "Optimize", desc: "Quarterly reviews to push revenue and cut costs." }
  ];

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={Sparkles}
          badgeText="12 services · 1 platform"
          title={<>Services that <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">do the heavy lifting.</span></>}
          subtitle="From inventory sync to AI-powered demand forecasting — every service is designed to remove a manual task and add a measurable result."
          visual={<ServicesHeroMockup className="w-full h-auto" />}
          actions={
            <>
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 rounded-full shadow-sm">
                Watch Demo
              </Button>
              <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-stripe-xl group bg-gradient-to-r from-primary to-secondary hover:opacity-95 border-0">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </>
          }
        />

        {/* ORDER LIFECYCLE diagram */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">End-to-end automation</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">From marketplace ping to doorstep — automatically.</h2>
              <p className="text-lg text-slate-600">Every step in the order lifecycle is event-driven and measurable.</p>
            </div>
            <div className="reveal delay-100 rounded-3xl bg-gradient-to-br from-slate-50 to-white p-6 sm:p-10 border border-slate-100 shadow-stripe">
              <OrderFlowDiagram className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="py-24 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">How it works</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">A proven 4-step playbook</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Same process that took 50,000 sellers from spreadsheet chaos to clean operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px border-t-2 border-dashed border-primary/30" />
              {process.map((p, i) => (
                <div key={i} className="reveal relative bg-white rounded-2xl p-6 border border-slate-100 hover-lift" style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                    <span className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-ring" />
                    <span className="relative w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-stripe">
                      <p.icon className="w-7 h-7 text-white" />
                    </span>
                  </div>
                  <div className="text-xs font-bold text-secondary tracking-widest mb-1">STEP {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AUTO-REPRICER FLOW */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Brain className="w-3.5 h-3.5 mr-1" /> Premium · AI Auto-Repricer
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                A repricer that protects your margin while it wins the Buy Box.
              </h2>
              <p className="text-lg text-slate-600">
                Built like a flow you can read, not a black box that drains your profit. Set min and max margins once — the rest runs itself, around the clock.
              </p>
            </div>
            <div className="reveal rounded-3xl bg-gradient-to-br from-slate-50 to-white p-4 sm:p-8 border border-slate-100 shadow-stripe">
              <AIPipelineDiagram className="w-full h-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center">
              <div className="reveal">
                <RepricerStrategyChart className="w-full h-auto" />
              </div>
              <div className="reveal delay-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom strategies, per SKU.</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Maybe your hero product needs to win the Buy Box at any cost above a 12% floor.
                  Maybe your seasonal stock just needs to clear above breakeven. Maybe your premium
                  brand should never undercut MAP. Build a strategy for each scenario in plain English
                  — drag, drop, done.
                </p>
                <ul className="space-y-3">
                  {[
                    "Min / max margin rails — never sell below your floor",
                    "Buy Box, MAP and inventory-velocity strategies built in",
                    "Per-SKU, per-brand, per-category overrides",
                    "Slack and email alerts when a competitor moves",
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SELLER ANALYTICS — BigQuery flow */}
        <section className="py-24 section-bg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <BarChart3 className="w-3.5 h-3.5 mr-1" /> Seller analytics
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Every order, ad and review — in one warehouse.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Your sales data shouldn't live in fifteen places. We stream it all into a single
                BigQuery warehouse the moment it happens, then plug into Power BI, Looker Studio or
                your own BI tool. Suddenly the questions that used to take a week — "which campaign
                actually drove repeat buyers?" — take a click.
              </p>
              <ul className="space-y-3">
                {[
                  "Petabyte-scale BigQuery warehouse, included",
                  "Power BI & Looker Studio connectors out of the box",
                  "Pre-built dashboards: profit by SKU, channel, region",
                  "Cohort, retention and lifetime-value reports",
                  "Raw data export — it's always yours",
                ].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal delay-200">
              <AnalyticsFlowDiagram className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* FEATURED STORY 1 */}
        <section className="py-24 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <AnalyticsIllustration className="w-full h-auto" />
            </div>
            <div className="reveal delay-200">
              <Badge className="mb-4 bg-pink-100 text-pink-700 border-0">Featured</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Analytics that show you<br />where the money is.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Stop guessing which SKU drives margin. Our analytics suite blends data from every
                channel into one profit-first view — with AI recommendations on what to scale next.
              </p>
              <ul className="space-y-3 mb-8">
                {["Channel-by-channel profit margin", "SKU-level performance & velocity", "AI-suggested repricing actions", "Custom dashboards & exports"].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="shadow-stripe-xl group">
                Explore analytics
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICES GRID — varied sizes */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">All services</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">A complete commerce toolkit</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Pick the services that matter today. Add the rest when you're ready.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Card key={i} className="reveal group relative overflow-hidden border border-slate-100 hover-lift bg-white" style={{ transitionDelay: `${(i % 6) * 60}ms` }}>
                  {/* gradient halo on hover */}
                  <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${s.tone} opacity-10 group-hover:opacity-25 transition-opacity blur-2xl`} />
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.tone} flex items-center justify-center shadow-stripe mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed mb-4">{s.desc}</p>
                    <a className="story-link text-sm font-semibold text-primary inline-flex items-center gap-1">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED STORY 2 */}
        <section className="py-24 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Logistics</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Ship from anywhere,<br />to everywhere.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Smart order routing picks the optimal warehouse and carrier in real time —
                shaving days off delivery and 25% off shipping spend.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{v:"-25%",l:"Shipping cost"},{v:"-2 days",l:"Delivery time"},{v:"40+",l:"Carriers"},{v:"99.8%",l:"Tracking accuracy"}].map((s,i)=>(
                  <div key={i} className="rounded-xl bg-white p-4 border border-slate-100">
                    <div className="text-2xl font-bold text-secondary">{s.v}</div>
                    <div className="text-sm text-slate-600">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal delay-200 order-1 lg:order-2">
              <WorkflowIllustration className="w-full h-auto" />
            </div>
          </div>
        </section>


        {/* AUTOMATION + NOTIFICATIONS + REPORTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Zap className="w-3.5 h-3.5 mr-1" /> Notifications &amp; reports
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Build the alerts and reports your team actually opens.
              </h2>
              <p className="text-lg text-slate-600">
                Drag a trigger, drop an action, pick a channel. Wire Slack, email, SMS, Zapier or n8n
                in minutes — no engineer required. Every flow is versioned, testable and replayable.
              </p>
            </div>
            <div className="reveal rounded-3xl bg-gradient-to-br from-slate-50 to-white p-4 sm:p-6 border border-slate-100 shadow-stripe">
              <AutomationBuilderDiagram className="w-full h-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Zap, title: "Trigger on anything", desc: "Buy Box drops, stockouts, refund spikes, margin floors, competitor moves — every event in Ctasis is a trigger you can subscribe to.", tone: "from-primary to-indigo-600" },
                { icon: Settings, title: "Customisable per role", desc: "Ops gets stockouts in Slack. Finance gets P&L PDFs by email. On-call gets SMS. Each user picks their channel, frequency and quiet hours.", tone: "from-secondary to-orange-500" },
                { icon: Layers, title: "Zapier & n8n native", desc: "Fan out to 5,000+ Zapier apps or your self-hosted n8n. Signed webhooks, automatic retries, replay on failure — production-grade out of the box.", tone: "from-secondary to-pink-600" },
              ].map((b, i) => (
                <Card key={i} className="reveal hover-lift relative overflow-hidden border border-slate-100 bg-white" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${b.tone} opacity-10 blur-2xl`} />
                  <CardContent className="relative p-7">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.tone} flex items-center justify-center mb-4 shadow-stripe`}>
                      <b.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{b.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{b.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="py-24 relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <Zap className="w-12 h-12 text-pink-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to transform your business?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands of sellers who trust Ctasis to power their multichannel operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 shadow-stripe-xl">Start Free Trial</Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-stripe">Schedule Demo</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
