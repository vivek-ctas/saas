import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cloud, Container, Network, Database, Workflow, Shield,
  Cpu, GitBranch, Bell, Layers, Lock, Zap, ArrowRight, CheckCircle, Server, Boxes, Brain
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import {
  BlobBackdrop, InfraTopologyDiagram, NeuralIllustration, ChannelSyncFlow,
  AIPipelineDiagram, AnalyticsFlowDiagram, RepricerStrategyChart, LogoChip,
  ReportingConsoleMockup, AlertTriageDiagram
} from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

const Infrastructure = () => {
  const ref = useReveal<HTMLDivElement>();

  const pillars = [
    { icon: Cloud, title: "AWS multi-region", desc: "Active-active across 3 regions with automatic failover and edge caching via CloudFront.", tone: "from-primary to-indigo-600" },
    { icon: Container, title: "Isolated Docker pods", desc: "Each tenant gets isolated compute pods — noisy neighbors can't touch your throughput.", tone: "from-secondary to-orange-500" },
    { icon: Network, title: "Kubernetes load balancing", desc: "Auto-scaling K8s clusters route traffic intelligently across thousands of pods.", tone: "from-secondary to-pink-600" },
    { icon: Database, title: "Per-tenant PostgreSQL + MongoDB", desc: "Each seller gets isolated PostgreSQL for transactional data and MongoDB for catalog & event documents — no shared schemas, no leak risk.", tone: "from-indigo-600 to-primary" },
    { icon: Workflow, title: "Event-driven (Kafka)", desc: "Kafka + RabbitMQ pipelines handle 10M+ marketplace events daily with sub-second latency.", tone: "from-rose-500 to-pink-600" },
    { icon: Bell, title: "Realtime notifications", desc: "Webhooks, push, email and Slack alerts powered by our message bus — never miss an order.", tone: "from-primary to-secondary" },
  ];

  const stack = [
    { title: "Compute", items: ["AWS EKS", "Docker", "Kubernetes", "Nomad"], icon: Cpu },
    { title: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "S3"], icon: Database },
    { title: "Streaming", items: ["Apache Kafka", "RabbitMQ", "Kinesis", "EventBridge"], icon: Workflow },
    { title: "Analytics & BI", items: ["Google BigQuery", "Power BI", "Looker Studio", "dbt"], icon: Boxes },
    { title: "Observability", items: ["Datadog", "Grafana", "Sentry", "OpenTelemetry"], icon: Layers },
    { title: "Security", items: ["SOC 2 Type II", "ISO 27001", "GDPR ready", "End-to-end TLS"], icon: Shield },
    { title: "DevOps", items: ["GitHub Actions", "Terraform", "ArgoCD", "Helm"], icon: GitBranch },
  ];

  const plainBenefits = [
    {
      icon: Lock, title: "Your data stays yours",
      desc: "Think of every seller account as a private safe — not a shared drawer. We give each business its own database and its own little server, so your numbers, customers and products are never mixed with anyone else's. If a neighbour has a bad day, your store doesn't feel a thing.",
      tone: "from-primary to-indigo-600",
    },
    {
      icon: Shield, title: "Protection that actually protects",
      desc: "Bank-grade encryption locks your information whether it's sitting still or flying across the internet. Independent auditors check us every year (SOC 2, ISO 27001, GDPR, PCI). Translation: the same level of safety big banks use — without you needing to lift a finger.",
      tone: "from-secondary to-orange-500",
    },
    {
      icon: Zap, title: "Grows with you, instantly",
      desc: "Black Friday traffic? A viral TikTok? Our system quietly spins up extra power the second you need it and shrinks back down when the rush is over. You'll never see a 'site is down' page during your biggest sales day — and you'll never pay for capacity you're not using.",
      tone: "from-secondary to-pink-600",
    },
  ];

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={Server}
          badgeText="Built like a hyperscaler"
          title={<>Infrastructure that <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">doesn't blink.</span></>}
          subtitle="Isolated tenant pods, Kubernetes-native scaling, Kafka-driven events and a 99.99% SLA — the same architecture trusted by enterprises, available to every seller."
          visual={<InfraTopologyDiagram className="w-full h-auto" />}
          actions={
            <>
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 rounded-full shadow-sm">
                Read whitepaper
              </Button>
              <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-stripe-xl group bg-gradient-to-r from-primary to-secondary hover:opacity-95 border-0">
                Talk to engineering
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </>
          }
        >
          <div className="mt-8 flex flex-wrap gap-3 text-slate-700 text-sm">
            {["99.99% uptime", "SOC 2 Type II", "Multi-region", "Per-tenant DB"].map((t, i) => (
              <span key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200/70 shadow-sm">
                <CheckCircle className="w-4 h-4 text-primary" /> {t}
              </span>
            ))}
          </div>
        </PageHero>

        {/* PILLARS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Architecture</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Six pillars. Zero compromises.</h2>
              <p className="text-xl text-slate-600">Engineered for scale from day one.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <Card key={i} className="reveal hover-lift relative overflow-hidden border border-slate-100" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${p.tone} opacity-10 blur-2xl`} />
                  <CardContent className="relative p-7">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.tone} flex items-center justify-center mb-4 shadow-stripe`}>
                      <p.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* IN PLAIN ENGLISH — non-technical benefits */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">In plain English</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">What this means for your business</h2>
              <p className="text-xl text-slate-600">
                You don't need to know what Kubernetes is. You just need to know your store stays open,
                your data stays safe, and your growth never hits a ceiling. Here's the human version.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plainBenefits.map((b, i) => (
                <Card key={i} className="reveal hover-lift relative overflow-hidden border border-slate-100" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${b.tone} opacity-10 blur-2xl`} />
                  <CardContent className="relative p-7">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.tone} flex items-center justify-center mb-4 shadow-stripe`}>
                      <b.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{b.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* EVENT FLOW DIAGRAM */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Event pipeline</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">10M+ events. Sub-second latency.</h2>
              <p className="text-lg text-slate-600">Every marketplace ping flows through the same battle-tested pipeline — observable end-to-end.</p>
            </div>
            <div className="reveal delay-100 rounded-3xl bg-gradient-to-br from-slate-50 to-white p-6 sm:p-10 border border-slate-100 shadow-stripe">
              <OrderFlowDiagram className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="py-24 section-bg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Tech stack</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">The tools we trust</h2>
              <p className="text-xl text-slate-600">Battle-tested open-source and enterprise services.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stack.map((s, i) => (
                <div key={i} className="reveal rounded-2xl bg-white p-6 border border-slate-100 hover-lift" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-stripe">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it, j) => (
                      <span key={j} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-accent text-accent-foreground">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI / CATALOG */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <NeuralIllustration className="w-full h-auto" />
            </div>
            <div className="reveal delay-200">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Boxes className="w-3.5 h-3.5 mr-1" /> Catalog & AI
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Centralized catalog.<br />Intelligent everything.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                One golden record per SKU, mapped to every channel's quirks. Our ML models predict demand,
                detect pricing anomalies, classify customer sentiment and surface the next product to launch.
              </p>
              <ul className="space-y-3">
                {[
                  "FBA + FBM hybrid fulfillment routing",
                  "Per-channel attribute mapping & translation",
                  "AI-powered repricing & demand forecasting",
                  "Customer purchase-behaviour analytics",
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* AI LISTING GENERATOR + A+ CONTENT + REPRICER */}
        <section className="py-24 section-bg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Brain className="w-3.5 h-3.5 mr-1" /> AI that does the heavy lifting
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">From raw spreadsheet to live listing — in minutes.</h2>
              <p className="text-xl text-slate-600">
                Three AI services most sellers used to hire agencies for. Now built into Ctasis — and visualized like a flow you can actually follow.
              </p>
            </div>

            {/* Visual flow */}
            <div className="reveal mb-12 rounded-3xl bg-white p-4 sm:p-8 border border-slate-100 shadow-stripe">
              <AIPipelineDiagram className="w-full h-auto" />
              <p className="text-center text-sm text-slate-500 mt-4">
                A live look at the auto-repricer pipeline — every node is observable, replayable and version-controlled.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Workflow, title: "AI listing generator",
                  desc: "Drop your raw product data — a CSV, a brief, even a phone photo — and our AI writes channel-perfect listings for Amazon, eBay and Flipkart. Titles, bullets, search terms and backend keywords are tuned to each marketplace's ranking rules so listings actually surface to buyers, not just sit in your catalog.",
                  tone: "from-primary to-indigo-600",
                },
                {
                  icon: Layers, title: "A+ content via S3",
                  desc: "Manage every A+ image, comparison chart and brand-story banner as versioned S3 objects. One click pushes the latest creative to Amazon Brand Registry — no more emailing PSDs to a designer or wondering which version is live in which region.",
                  tone: "from-secondary to-orange-500",
                },
                {
                  icon: Cpu, title: "Auto-repricer (Premium)",
                  desc: "Set your minimum and maximum margin once. Our repricer watches Buy Box competitors 24/7 and re-prices in real time — never below your floor, never above your ceiling. Profit-protected, hands-free, and explainable: every move is logged with the reason.",
                  tone: "from-secondary to-pink-600",
                },
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

        {/* REPRICER STRATEGY CHART — visual proof */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <RepricerStrategyChart className="w-full h-auto" />
            </div>
            <div className="reveal delay-200">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Cpu className="w-3.5 h-3.5 mr-1" /> Smart repricing strategies
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Win the Buy Box without<br />a race to the bottom.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Cheap repricers chase the lowest price and quietly destroy your margin. Ours plays a smarter game —
                it studies competitor velocity, FBA status, ratings and stock depth, then prices just enough to win
                the Buy Box while staying inside the floor and ceiling you set. You stay profitable, your customer
                gets a fair price, and you never wake up to a "we sold 800 units at a loss" surprise.
              </p>
              <ul className="space-y-3">
                {[
                  "Min / max margin rails — your floor is sacred",
                  "Competitor-aware, not just price-aware",
                  "Custom strategies per SKU, brand or category",
                  "Every price change logged with a human-readable reason",
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* POST-DATA ANALYTICS — BigQuery + Power BI */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal delay-200 order-2 lg:order-1">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Boxes className="w-3.5 h-3.5 mr-1" /> Post-sale data analytics
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Your sales data, finally answering questions.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Every order, refund, ad-click and review streams into our Google BigQuery warehouse the
                moment it happens. From there, plug into Power BI, Looker Studio or any tool you already
                use — and ask the questions that actually move revenue.
              </p>
              <ul className="space-y-3">
                {[
                  "BigQuery warehouse with petabyte-scale querying",
                  "Power BI & Looker Studio connectors out of the box",
                  "Pre-built dashboards: profit by SKU, channel, region",
                  "Cohort, retention & customer-lifetime-value reports",
                  "Export raw data anytime — it's always yours",
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal order-1 lg:order-2">
              <AnalyticsFlowDiagram className="w-full h-auto" />
            </div>
          </div>
        </section>
        <section className="py-16 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Certified & compliant</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["SOC 2 Type II", "ISO 27001", "GDPR", "PCI DSS L1", "HIPAA ready", "CCPA"].map((c, i) => (
                <LogoChip key={i} name={c} tone={i % 2 === 0 ? "accent" : "primary"} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-4xl mx-auto px-4 text-center reveal">
            <Lock className="w-12 h-12 text-pink-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Engineered to scale with you</h2>
            <p className="text-xl text-white/90 mb-10">From your first 100 orders to your first million — same platform, same uptime.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-stripe-xl">Read the architecture deep-dive</Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Security whitepaper
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Infrastructure;
