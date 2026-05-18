import { useParams, Link, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles, Zap, Plug } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { BlobBackdrop } from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";
import { getIntegration, INTEGRATIONS } from "./integrations.data";

const IntegrationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const integration = getIntegration(slug);
  const ref = useReveal<HTMLDivElement>();

  if (!integration) return <Navigate to="/marketplaces" replace />;

  const { name, region, tone, icon: Icon, tagline, description,
          hero: Hero, flow: Flow, detail: Detail,
          features, highlights, stats } = integration;

  const related = INTEGRATIONS.filter(i => i.slug !== integration.slug).slice(0, 3);

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={Plug}
          badgeText={`${name} integration · ${region}`}
          title={<>{name} <span className={`bg-gradient-to-r ${tone} bg-clip-text text-transparent`}>without the chaos.</span></>}
          subtitle={tagline}
          visual={<Hero className="w-full h-auto" />}
          actions={
            <>
              <Button asChild size="lg" variant="outline" className="text-base px-8 h-12 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 rounded-full shadow-sm">
                <Link to="/marketplaces"><ArrowLeft className="w-4 h-4 mr-1.5" /> All marketplaces</Link>
              </Button>
              <Button size="lg" className={`text-base px-8 h-12 rounded-full shadow-stripe-xl group bg-gradient-to-r ${tone} hover:opacity-95 border-0`}>
                Connect {name}
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </>
          }
        >
          <div className="mt-8 flex flex-wrap gap-3 text-slate-700 text-sm">
            {highlights.slice(0, 3).map((t, i) => (
              <span key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200/70 shadow-sm">
                <CheckCircle className="w-4 h-4 text-primary" /> {t}
              </span>
            ))}
          </div>
        </PageHero>

        {/* OVERVIEW + STATS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Overview</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                What the {name} integration actually does
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">{description}</p>
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 reveal delay-200 grid grid-cols-1 gap-4">
              {stats.map((s, i) => (
                <Card key={i} className="border border-slate-100 hover-lift">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">{s.label}</div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${tone} bg-clip-text text-transparent`}>{s.value}</div>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tone} flex items-center justify-center shadow-stripe`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 section-bg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Zap className="w-3.5 h-3.5 mr-1" /> Built for {name} sellers
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Every {name} workflow, on rails</h2>
              <p className="text-lg text-slate-600">Stop stitching together browser tabs and Zapier zaps. This is the operator console you wish Seller Central shipped with.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <Card key={i} className="reveal hover-lift border border-slate-100 bg-white" style={{ transitionDelay: `${i * 80}ms` }}>
                  <CardContent className="p-6">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tone} flex items-center justify-center mb-3 shadow-stripe`}>
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FLOW VISUAL */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">How it flows</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">From {name} event to your dashboard in seconds</h2>
              <p className="text-lg text-slate-600">A visual flow you can audit, replay and customize without writing a line of code.</p>
            </div>
            <div className="reveal rounded-3xl bg-white p-4 sm:p-8 border border-slate-100 shadow-stripe">
              <Flow className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* DETAIL VISUAL */}
        <section className="py-24 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Operator view</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                The dashboard {name} sellers actually open every morning
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Buy Box trends, ad ROAS, return reasons and stockout risk — together, finally. No CSV exports, no copy-paste.
              </p>
              <Button size="lg" className="shadow-stripe-xl group">
                See sample dashboard <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="reveal delay-200">
              <Detail className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Other integrations</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Pair {name} with these next</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <Link key={r.slug} to={`/marketplaces/${r.slug}`} className="reveal block" style={{ transitionDelay: `${i * 80}ms` }}>
                  <Card className="hover-lift overflow-hidden border border-slate-100 h-full">
                    <div className={`h-2 bg-gradient-to-r ${r.tone}`} />
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.tone} flex items-center justify-center mb-4 shadow-stripe`}>
                        <r.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{r.name}</h3>
                      <p className="text-slate-600 text-sm mb-4">{r.tagline}</p>
                      <span className="text-primary text-sm font-semibold inline-flex items-center gap-1">
                        Explore <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-4xl mx-auto px-4 text-center reveal">
            <Sparkles className="w-12 h-12 text-pink-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to plug {name} in?</h2>
            <p className="text-xl text-white/90 mb-10">Live in under 10 minutes. No code, no consultants.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-stripe-xl">Connect {name}</Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/marketplaces">Browse all integrations</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IntegrationDetail;
