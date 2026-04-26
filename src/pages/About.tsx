import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles, Heart, Shield, Lightbulb, Eye, Users, Globe,
  Rocket, Trophy, Building2, Brain, ArrowRight
} from "lucide-react";
import Layout from "@/components/Layout";
import { BlobBackdrop, WorkflowIllustration, GlobeIllustration } from "@/components/illustrations";
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
        {/* HERO */}
        <section className="relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center reveal">
            <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-sm">
              Our story
            </Badge>
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              We're building the<br />
              <span className="bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">operating system</span>
              <br />for modern commerce.
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              50,000+ sellers in 150+ countries trust Ctasis to power their multichannel operations.
              This is how we got here — and where we're going.
            </p>
          </div>
        </section>

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
                  { v: "$2.5B+", l: "GMV processed" },
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
