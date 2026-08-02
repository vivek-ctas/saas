"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles, Heart, Shield, Lightbulb, Eye, Users, Globe,
  Rocket, Trophy, Building2, Brain, ArrowRight, Award, Lock,
  Zap, Truck, Store, CheckCircle, Cpu,
  Workflow,
  RefreshCw,
  Server,
} from "lucide-react";
import Layout from "@/components/layout";
import PageHero from "@/components/pageHero";
import { WorkflowIllustration, LogoChip } from "@/components/illustrations";
import { AboutJourneyMockup, NeuralIllustration } from "@/components/illustrations/aboutPageIllustrations";
import { useReveal } from "@/hooks/use-reveal";
import Link from "next/link";

const About = () => {
  const ref = useReveal<HTMLDivElement>();

  const milestones = [
    { year: "2019", title: "CTAS Founded", desc: "CTAS Info Services LLP was established with a vision to simplify eCommerce operations through modern software solutions.", icon: Sparkles },
    { year: "2020", title: "Marketplace Solutions", desc: "Started building automation tools for inventory management, catalog processing, and marketplace integrations.", icon: Users },
    { year: "2021", title: "Platform Expansion", desc: "Expanded our product portfolio with scalable cloud-based solutions designed for growing online businesses.", icon: Rocket },
    { year: "2022", title: "Enterprise Infrastructure", desc: "Enhanced platform architecture with secure APIs, workflow automation, and enterprise-grade performance.", icon: Building2 },
    { year: "2023", title: "Intelligent Automation", desc: "Introduced advanced automation to streamline catalog validation, inventory synchronization, and operational workflows.", icon: Globe },
    { year: "2024", title: "AI-Powered Platform", desc: "Integrated AI capabilities for catalog optimization, content generation, data validation, and business process automation.", icon: Brain }
  ];

  const values = [
    { icon: Lightbulb, title: "Simplicity", desc: "Complex problems deserve simple, beautiful solutions.", tone: "from-[#3C9AC4] to-[#13355A]" },
    { icon: Shield, title: "Reliability", desc: "Your business depends on us. We don't take that lightly.", tone: "from-[#13355A] to-[#0D2440]" },
    { icon: Sparkles, title: "Innovation", desc: "We ship the next thing - not the obvious thing.", tone: "from-[#3C9AC4] to-[#13355A]" },
    { icon: Heart, title: "Transparency", desc: "Honest pricing. Honest roadmap. Honest support.", tone: "from-[#13355A] to-[#0D2440]" }
  ];

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={Sparkles}
          badgeText="Our Story"
          title={<>We're building the <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">operating system</span> for modern commerce.</>}
          subtitle="50,000+ sellers in 150+ countries trust SellerBuz to power their multichannel operations. This is how we got here - and where we're going."
          visual={<AboutJourneyMockup className="w-full h-auto" />}
          actions={
            <>
              <Link href="/guide">
                <Button size="lg" variant="outline" className="text-base px-8 h-12 border-primary/20 bg-white hover:bg-accent text-slate-900 rounded-full shadow-sm">
                  Read our guide
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="text-base px-8 h-12 rounded-full group bg-gradient-to-r from-[#13355A] via-[#1B4A75] to-[#3C9AC4] hover:opacity-95 border-0">
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

            </>
          }
        />

        {/* MISSION + VISION */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-accent text-primary border border-primary/10">Our Mission</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Level the playing field<br />for <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">every seller.</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-4">
                Enterprise sellers have armies of engineers. Independent sellers have you, your laptop,
                and a hope-it-works spreadsheet. We close that gap.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                SellerBuz gives every entrepreneur access to enterprise-grade tooling without enterprise complexity
                or enterprise pricing. That's the whole game.
              </p>
            </div>
            <div className="reveal delay-200 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/10 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl bg-gradient-to-br from-[#13355A] to-[#0D2440] p-10 text-white shadow-stripe-2xl overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <Eye className="w-10 h-10 mb-6" />
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Our vision</h3>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                  To be the global standard for multichannel commerce - enabling millions of sellers
                  to focus on craft, customers and growth. Not data-entry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="relative px-5 sm:px-8 lg:px-[70px]">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-accent text-primary border border-primary/10">Our Journey</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Building <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">Smarter Commerce</span> Solutions</h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600">Continuously evolving our platform to help businesses automate, scale, and grow.</p>
            </div>

            <div className="relative">
              {/* Center line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-[#3C9AC4] to-primary/10 md:-translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((m, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div key={i} className={`reveal relative flex md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                      {/* Dot */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-[#3C9AC4] to-[#13355A] shadow-stripe ring-4 ring-white z-10" />
                      {/* Card */}
                      <div className={`pl-20 md:pl-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                        <Card className="hover-lift overflow-hidden border border-slate-100">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3C9AC4] to-[#13355A] flex items-center justify-center shadow-stripe">
                                <m.icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="text-3xl lg:text-4xl font-bold text-primary tracking-tight">{m.year}</div>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">{m.title}</h3>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{m.desc}</p>
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
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F1F3FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="reveal lg:scale-105 xl:scale-110 origin-center">
              <WorkflowIllustration className="w-full h-auto " />
            </div>
            <div className="reveal delay-200">
              <Badge className="mb-4 bg-accent text-primary border border-primary/10">Our Strengths</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Technology built for <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">modern commerce.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { icon: Brain, title: "AI Automation", desc: "Intelligent catalog and workflow automation" },
                  { icon: Shield, title: "Enterprise Security", desc: "Secure infrastructure and protected data" },
                  { icon: Workflow, title: "Workflow Automation", desc: "Reduce manual effort with smart processes" },
                  { icon: RefreshCw, title: "Inventory Sync", desc: "Real-time synchronization across channels" },
                  { icon: Globe, title: "Marketplace Integration", desc: "Connect with major commerce platforms" },
                  { icon: Server, title: "Cloud Infrastructure", desc: "Reliable and scalable platform architecture" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 rounded-2xl border border-[#E3E8EC] bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#13355A] mb-2">
                        {s.title}
                      </h3>
                      <p className="text-sm leading-6 text-[#64748B]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST FLAGS */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="text-center mb-14 reveal">
              <Badge className="mb-4 bg-accent text-primary border border-primary/10">
                <Award className="w-3.5 h-3.5 mr-1" /> Why Sellers Trust Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Trust isn't claimed. <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">It's earned.</span></h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600">Six commitments we ship against - every release, every day.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Lock, title: "SOC 2 Type II", desc: "Independently audited every year. Your data, encrypted at rest and in transit.", tone: "from-[#3C9AC4] to-[#13355A]" },
                { icon: Brain, title: "AI for customer favour", desc: "ML models surface what your buyers want next - purchase-behaviour analytics built in.", tone: "from-[#3C9AC4] to-[#13355A]" },
                { icon: Zap, title: "Innovation cadence", desc: "2-3 new integrations every month, shipped without breaking your workflows.", tone: "from-[#13355A] to-[#0D2440]" },
                { icon: Shield, title: "99.99% uptime SLA", desc: "Multi-region failover means your store stays open even when AWS regions don't.", tone: "from-[#13355A] to-[#0D2440]" },
                { icon: Cpu, title: "Built-in compliance", desc: "GDPR, ISO 27001, PCI DSS L1 and HIPAA-ready out of the box.", tone: "from-[#3C9AC4] to-[#13355A]" },
                { icon: Heart, title: "Transparent pricing", desc: "No hidden fees, no per-order surcharges. What you see is what you pay.", tone: "from-[#13355A] to-[#0D2440]" },
              ].map((t, i) => (
                <Card key={i} className="reveal hover-lift relative overflow-hidden border border-slate-100" style={{ transitionDelay: `${i * 70}ms` }}>
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${t.tone} opacity-10 blur-2xl`} />
                  <CardContent className="relative p-7">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.tone} flex items-center justify-center mb-4 shadow-stripe`}>
                      <t.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">{t.title}</h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{t.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERSHIP FLAGS */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="relative px-5 sm:px-8 lg:px-[70px]">
            <div className="text-center mb-14 reveal">
              <Badge className="mb-4 bg-accent text-primary border border-primary/10">Partnership Ecosystem</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Powered by <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">world-class partners</span></h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600">Logistics across India, Europe and the USA · Marketplace · ad networks · offline retail.</p>
            </div>

            <div className="space-y-8">
              <div className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 shrink-0 text-primary" />
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900">Logistics & shipping APIs</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Shiprocket", "Tirupati", "DHL", "USPS", "PostNL", "Rakuten Post", "FedEx", "Delhivery", "Blue Dart", "ship station"].map((n, i) => (
                    <LogoChip key={n} name={n} tone={i % 3 === 0 ? "primary" : i % 3 === 1 ? "secondary" : "accent"} />
                  ))}
                </div>
              </div>

              <div className="reveal delay-100">
                <div className="flex items-center gap-3 mb-4">
                  <Store className="w-6 h-6 shrink-0 text-primary" />
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900">Marketplace & offline chains</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Amazon", "Shopify"].map((n, i) => (
                    <LogoChip key={n} name={n} tone={i % 3 === 0 ? "secondary" : i % 3 === 1 ? "primary" : "accent"} />
                  ))}
                </div>
              </div>

              {/* <div className="reveal delay-200">
                <div className="flex items-center gap-2 mb-4">
                  <Megaphone className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-slate-900">Ads & infrastructure</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Amazon Ads", "Google Shopping", "Meta Ads", "TikTok Ads", "AWS", "Kubernetes", "Kafka", "RabbitMQ", "PostgreSQL", "MongoDB", "BigQuery", "Power BI", "Datadog"].map((n, i) => (
                    <LogoChip key={n} name={n} tone={i % 3 === 0 ? "accent" : i % 3 === 1 ? "primary" : "dark"} />
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* AI for customer favour - illustration block */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F1F3FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-accent text-primary border border-primary/10">
                <Brain className="w-3.5 h-3.5 mr-1" /> AI-Powered Catalog
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Generate channel-perfect listings <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">in seconds, not hours.</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">
                Our AI engine analyzes your product data and generates optimized titles, descriptions, bullet points and attributes for Amazon and Shopify. When listings get suppressed, AI retries automatically until they go live.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "AI listing generator for Amazon and Shopify - titles, bullets, search terms",
                  "Automatic listing mismatch detection and AI-powered retry",
                  "S3-backed asset storage for white-label listing images and brand content",
                  "A+ content management with reusable modules and templates",
                  "Channel-aware formatting - each listing optimized per marketplace rules",
                  "Bulk regenerate entire categories with new SEO focus or brand voice",
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal delay-200 lg:scale-105 xl:scale-110 origin-center">
              <NeuralIllustration className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-accent text-primary border border-primary/10">What We Believe</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Our values</h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600">The principles behind every decision we make.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <Card key={i} className="reveal text-center hover-lift relative overflow-hidden bg-white border border-slate-100" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${v.tone} opacity-10 blur-2xl`} />
                  <CardContent className="relative p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.tone} flex items-center justify-center mx-auto mb-4 shadow-stripe`}>
                      <v.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CAREERS CTA - clean, minimal */}
        {/* CAREERS CTA */}
        <section className="py-14 lg:py-16 relative overflow-hidden bg-gradient-to-br from-[#13355A] to-[#1a4a7a]">
          <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-[70px] text-center reveal">
            <Trophy className="w-12 h-12 text-white/20 mx-auto mb-6 animate-float" />

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Want to build the future of commerce with us?
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              We're hiring engineers, designers, and seller-success specialists across
              India and remote. Join our team and help shape the future of multichannel
              commerce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="text-lg px-8 rounded-full bg-white text-primary hover:bg-accent border-0 shadow-lg"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <Link href="/guide">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:text-white shadow-lg transition-all duration-300"
                >
                  Read Our Guide
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/80 text-sm">
              <span className="flex items-center">
                <Trophy className="w-4 h-4 mr-2" />
                Growth Opportunities
              </span>

              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Remote Friendly
              </span>

              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Competitive Benefits
              </span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
