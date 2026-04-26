import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cloud, Container, Network, Database, Workflow, Shield,
  Cpu, GitBranch, Bell, Layers, Lock, Zap, ArrowRight, CheckCircle, Server, Boxes
} from "lucide-react";
import Layout from "@/components/Layout";
import { BlobBackdrop, InfraIllustration, NeuralIllustration, LogoChip } from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

const Infrastructure = () => {
  const ref = useReveal<HTMLDivElement>();

  const pillars = [
    { icon: Cloud, title: "AWS multi-region", desc: "Active-active across 3 regions with automatic failover and edge caching via CloudFront.", tone: "from-primary to-indigo-600" },
    { icon: Container, title: "Isolated Docker pods", desc: "Each tenant gets isolated compute pods — noisy neighbors can't touch your throughput.", tone: "from-fuchsia-500 to-purple-600" },
    { icon: Network, title: "Kubernetes load balancing", desc: "Auto-scaling K8s clusters route traffic intelligently across thousands of pods.", tone: "from-secondary to-pink-600" },
    { icon: Database, title: "Per-tenant Postgres", desc: "Logical database isolation per seller account. No shared schemas, no leak risk.", tone: "from-indigo-600 to-primary" },
    { icon: Workflow, title: "Event-driven (Kafka)", desc: "Kafka + RabbitMQ pipelines handle 10M+ marketplace events daily with sub-second latency.", tone: "from-rose-500 to-pink-600" },
    { icon: Bell, title: "Realtime notifications", desc: "Webhooks, push, email and Slack alerts powered by our message bus — never miss an order.", tone: "from-purple-600 to-fuchsia-600" },
  ];

  const stack = [
    { title: "Compute", items: ["AWS EKS", "Docker", "Kubernetes", "Nomad"], icon: Cpu },
    { title: "Data", items: ["PostgreSQL", "Redis", "ClickHouse", "S3"], icon: Database },
    { title: "Streaming", items: ["Apache Kafka", "RabbitMQ", "Kinesis", "EventBridge"], icon: Workflow },
    { title: "Observability", items: ["Datadog", "Grafana", "Sentry", "OpenTelemetry"], icon: Layers },
    { title: "Security", items: ["SOC 2 Type II", "ISO 27001", "GDPR ready", "End-to-end TLS"], icon: Shield },
    { title: "DevOps", items: ["GitHub Actions", "Terraform", "ArgoCD", "Helm"], icon: GitBranch },
  ];

  return (
    <Layout>
      <div ref={ref}>
        {/* HERO */}
        <section className="relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                <Server className="w-4 h-4 mr-2" /> Built like a hyperscaler
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Infrastructure that<br />
                <span className="bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
                  doesn't blink.
                </span>
              </h1>
              <p className="text-xl text-white/85 mb-8 max-w-xl">
                Isolated tenant pods, Kubernetes-native scaling, Kafka-driven events and a 99.99%
                SLA — the same architecture trusted by enterprises, available to every seller.
              </p>
              <div className="flex flex-wrap gap-3 text-white/90 text-sm">
                {["99.99% uptime", "SOC 2 Type II", "Multi-region", "Per-tenant DB"].map((t, i) => (
                  <span key={i} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                    <CheckCircle className="w-4 h-4" /> {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="reveal delay-200">
              <InfraIllustration className="w-full h-auto" />
            </div>
          </div>
        </section>

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

        {/* COMPLIANCE STRIP */}
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
