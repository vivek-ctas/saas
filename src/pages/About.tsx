import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles, Heart, Shield, Lightbulb, Eye, Users, Globe,
  Rocket, Trophy, Building2, Brain, ArrowRight, Award, Lock,
  Zap, Truck, Megaphone, Store, CheckCircle, Cpu
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { BlobBackdrop, WorkflowIllustration, GlobeIllustration, NeuralIllustration, TimelineIllustration, LogoChip } from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

const About = () => {
  const ref = useReveal<HTMLDivElement>();

  const milestones = [
    { year: "2019", title: "Founded in Ahmedabad", desc: "Two engineers, one mission: end the spreadsheet hell of multichannel sellers.", icon: Sparkles },
    { year: "2020", title: "First 1,000 sellers", desc: "Hit our first major milestone during a year that reshaped commerce forever.", icon: Users },
    { year: "2021", title: "Series A", desc: "Raised funding to scale our infrastructure and double the engineering team.", icon: Rocket },
    { year: "2022", title: "Enterprise launch", desc: "Built dedicated tooling for sellers managing 100k+ SKUs across 10+ channels.", icon: Building2 },
    { year: "2023", title: "Global expansion", desc: "Crossed into 50+ countries with multi-currency and multi-language support.", icon: Globe },
    { year: "2024", title: "AI integration", desc: "Launched ML-powered demand forecasting and automated repricing.", icon: Brain }
  ];

  const values = [
    { icon: Lightbulb, title: "Simplicity", desc: "Complex problems deserve simple, beautiful solutions.", tone: "from-pink-500 to-rose-500" },
    { icon: Shield, title: "Reliability", desc: "Your business depends on us. We don't take that lightly.", tone: "from-primary to-indigo-600" },
    { icon: Sparkles, title: "Innovation", desc: "We ship the next thing — not the obvious thing.", tone: "from-fuchsia-500 to-purple-600" },
    { icon: Heart, title: "Transparency", desc: "Honest pricing. Honest roadmap. Honest support.", tone: "from-secondary to-pink-600" }
  ];

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={Sparkles}
          badgeText="Our story"
          title={<>We're building the <span className="bg-gradient-to-r from-primary via-fuchsia-600 to-secondary bg-clip-text text-transparent">operating system</span> for modern commerce.</>}
          subtitle="50,000+ sellers in 150+ countries trust Ctasis to power their multichannel operations. This is how we got here — and where we're going."
          visual={<TimelineIllustration className="w-full h-auto" />}
          actions={
            <>
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 rounded-full shadow-sm">
                Read our manifesto
              </Button>
              <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-stripe-xl group bg-gradient-to-r from-primary to-fuchsia-600 hover:opacity-95 border-0">
                Join the team
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </>
          }
        />

        {/* MISSION + VISION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Our mission</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Level the playing field<br />for every seller.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Enterprise sellers have armies of engineers. Independent sellers have you, your laptop,
                and a hope-it-works spreadsheet. We close that gap.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ctasis gives every entrepreneur access to enterprise-grade tooling without enterprise complexity
                or enterprise pricing. That's the whole game.
              </p>
            </div>
            <div className="reveal delay-200 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-pink-300/20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl bg-gradient-to-br from-primary via-fuchsia-700 to-pink-600 p-10 text-white shadow-stripe-2xl overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <Eye className="w-10 h-10 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Our vision</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  To be the global standard for multichannel commerce — enabling millions of sellers
                  to focus on craft, customers and growth. Not data-entry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-24 section-bg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Our journey</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">5 years. 50,000 sellers.</h2>
              <p className="text-xl text-slate-600">From garage idea to global platform.</p>
            </div>

            <div className="relative">
              {/* Center line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-pink-300 md:-translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((m, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div key={i} className={`reveal relative flex md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                      {/* Dot */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full gradient-primary shadow-stripe ring-4 ring-white z-10" />
                      {/* Card */}
                      <div className={`pl-20 md:pl-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                        <Card className="hover-lift overflow-hidden border border-slate-100">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-stripe">
                                <m.icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="text-3xl font-bold text-primary tracking-tight">{m.year}</div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{m.desc}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT NUMBERS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <WorkflowIllustration className="w-full h-auto" />
            </div>
            <div className="reveal delay-200">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Impact</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Numbers that mean<br />real businesses, growing.
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "50K+", l: "Active sellers" },
                  { v: "$300M+", l: "GMV processed" },
                  { v: "10M+", l: "Orders managed" },
                  { v: "150+", l: "Countries" },
                  { v: "45%", l: "Avg. revenue lift" },
                  { v: "99.9%", l: "Uptime SLA" }
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl p-5 bg-gradient-to-br from-slate-50 to-accent/40 border border-slate-100 hover-lift">
                    <div className="text-3xl font-bold text-primary tracking-tight">{s.v}</div>
                    <div className="text-sm text-slate-600 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST FLAGS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Award className="w-3.5 h-3.5 mr-1" /> Why sellers trust us
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Trust isn't claimed. It's earned.</h2>
              <p className="text-xl text-slate-600">Six commitments we ship against — every release, every day.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Lock, title: "SOC 2 Type II", desc: "Independently audited every year. Your data, encrypted at rest and in transit.", tone: "from-primary to-indigo-600" },
                { icon: Brain, title: "AI for customer favour", desc: "ML models surface what your buyers want next — purchase-behaviour analytics built in.", tone: "from-fuchsia-500 to-purple-600" },
                { icon: Zap, title: "Innovation cadence", desc: "2-3 new integrations every month, shipped without breaking your workflows.", tone: "from-secondary to-pink-600" },
                { icon: Shield, title: "99.99% uptime SLA", desc: "Multi-region failover means your store stays open even when AWS regions don't.", tone: "from-indigo-600 to-primary" },
                { icon: Cpu, title: "Built-in compliance", desc: "GDPR, ISO 27001, PCI DSS L1 and HIPAA-ready out of the box.", tone: "from-rose-500 to-pink-600" },
                { icon: Heart, title: "Transparent pricing", desc: "No hidden fees, no per-order surcharges. What you see is what you pay.", tone: "from-purple-600 to-fuchsia-600" },
              ].map((t, i) => (
                <Card key={i} className="reveal hover-lift relative overflow-hidden border border-slate-100" style={{ transitionDelay: `${i * 70}ms` }}>
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${t.tone} opacity-10 blur-2xl`} />
                  <CardContent className="relative p-7">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.tone} flex items-center justify-center mb-4 shadow-stripe`}>
                      <t.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{t.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERSHIP FLAGS */}
        <section className="py-24 section-bg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Partnership ecosystem</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Powered by world-class partners</h2>
              <p className="text-xl text-slate-600">Logistics across India, Europe and the USA · marketplaces · ad networks · offline retail.</p>
            </div>

            <div className="space-y-8">
              <div className="reveal">
                <div className="flex items-center gap-2 mb-4">
                  <Truck className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-slate-900">Logistics & shipping APIs</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Shiprocket", "Tirupati", "DHL", "USPS", "PostNL", "Rakuten Post", "FedEx", "Delhivery", "Blue Dart", "DPD", "Royal Mail", "Aramex"].map((n, i) => (
                    <LogoChip key={n} name={n} tone={i % 3 === 0 ? "primary" : i % 3 === 1 ? "secondary" : "accent"} />
                  ))}
                </div>
              </div>

              <div className="reveal delay-100">
                <div className="flex items-center gap-2 mb-4">
                  <Store className="w-5 h-5 text-secondary" />
                  <h3 className="font-bold text-slate-900">Marketplaces & offline chains</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Amazon", "Walmart", "Lazada", "Shopee", "Rakuten", "Flipkart", "Meesho", "eBay", "Allegro", "Reliance Smart", "Croma", "Faire"].map((n, i) => (
                    <LogoChip key={n} name={n} tone={i % 3 === 0 ? "secondary" : i % 3 === 1 ? "primary" : "accent"} />
                  ))}
                </div>
              </div>

              <div className="reveal delay-200">
                <div className="flex items-center gap-2 mb-4">
                  <Megaphone className="w-5 h-5 text-fuchsia-600" />
                  <h3 className="font-bold text-slate-900">Ads & infrastructure</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Amazon Ads", "Google Shopping", "Meta Ads", "TikTok Ads", "AWS", "Kubernetes", "Kafka", "RabbitMQ", "PostgreSQL", "MongoDB", "BigQuery", "Power BI", "Datadog"].map((n, i) => (
                    <LogoChip key={n} name={n} tone={i % 3 === 0 ? "accent" : i % 3 === 1 ? "primary" : "dark"} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI for customer favour — illustration block */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Brain className="w-3.5 h-3.5 mr-1" /> AI for customer favour
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Predict what your buyers want — before they search for it.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our ML engine learns from millions of orders to forecast demand, detect repricing
                opportunities and segment customers by purchase behaviour — so every campaign lands
                with the right buyer at the right moment.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "AI listing generator — turns raw product data into channel-perfect Amazon, eBay & Flipkart listings",
                  "Auto-repricer with your own min/max margin rules (Premium)",
                  "A+ content managed as versioned S3 objects, one-click push to Amazon",
                  "Customer purchase-behaviour analytics powered by BigQuery & Power BI",
                  "Demand forecasting per SKU per channel",
                  "Sentiment analysis from reviews & support tickets",
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal delay-200">
              <NeuralIllustration className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">What we believe</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our values</h2>
              <p className="text-xl text-slate-600">The principles behind every decision we make.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <Card key={i} className="reveal text-center hover-lift relative overflow-hidden bg-white border border-slate-100" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${v.tone} opacity-10 blur-2xl`} />
                  <CardContent className="relative p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.tone} flex items-center justify-center mx-auto mb-4 shadow-stripe`}>
                      <v.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* GLOBAL CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal relative rounded-3xl bg-gradient-to-br from-slate-900 via-primary to-fuchsia-700 p-12 lg:p-16 overflow-hidden shadow-stripe-2xl">
              <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-30">
                <GlobeIllustration className="w-full h-full" />
              </div>
              <div className="relative max-w-2xl text-white">
                <Trophy className="w-12 h-12 text-pink-300 mb-4" />
                <h2 className="text-4xl font-bold mb-4 leading-tight">Want to build the future of commerce with us?</h2>
                <p className="text-xl text-white/90 mb-6">
                  We're hiring engineers, designers and seller-success folks across India and remote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="shadow-stripe-xl">
                    See open roles <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Read our blog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
