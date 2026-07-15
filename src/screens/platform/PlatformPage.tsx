import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { ReactNode } from "react";

export type DeepDive = {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  visual: ReactNode;
};

export type PlatformConfig = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  hero: ReactNode;
  problem: { title: string; points: string[] };
  solution: { title: string; points: string[] };
  deepDives: DeepDive[];
  featureGrid?: { icon: any; t: string; d: string }[];
  channels?: string[];
  faq: { q: string; a: string }[];
};

const PlatformPage = ({ cfg }: { cfg: PlatformConfig }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Layout>
      <div ref={ref}>
        {/* HERO */}
        <section className="relative overflow-hidden hero-cream slope-divider-bottom py-14">
          <div className="absolute inset-0 hero-cream-grid pointer-events-none" />
          <div className="px-[50px] lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <Badge className="mb-3 bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-white">{cfg.eyebrow}</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-4">
                {cfg.title}
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-xl">{cfg.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-100 bg-white hover:bg-blue-50 text-slate-900 rounded-full shadow-sm">
                    See full platform
                  </Button>
                </Link>
                <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                  Start free trial <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="reveal delay-100 relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/15 via-blue-200/15 to-blue-600/10 blur-3xl rounded-[40px] pointer-events-none" />
              <div className="relative rounded-3xl bg-white shadow-xl border border-slate-200/70 p-4">{cfg.hero}</div>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-14 bg-white">
          <div className="px-[50px] lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="reveal rounded-3xl border border-slate-200/70 bg-slate-50 p-6">
              <Badge className="mb-3 bg-pink-50 text-pink-700 border border-pink-100 shadow-sm">Before SellerBuz</Badge>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">{cfg.problem.title}</h3>
              <ul className="space-y-2">
                {cfg.problem.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal delay-100 rounded-3xl border border-blue-200/70 bg-blue-50/50 p-6">
              <Badge className="mb-3 bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-white">With SellerBuz</Badge>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">{cfg.solution.title}</h3>
              <ul className="space-y-2">
                {cfg.solution.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DEEP DIVES — zig-zag rows with big dashboard visuals */}
        {cfg.deepDives.map((s, i) => (
          <section key={s.title} className={`py-14 ${i % 2 === 0 ? "bg-white" : "bg-blue-50/40"}`}>
            <div className="px-[50px] lg:px-[70px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={`reveal ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Badge className="mb-3 bg-blue-50 text-blue-700 border border-blue-100 shadow-sm text-xs">{s.eyebrow}</Badge>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">{s.title}</h2>
                  <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`reveal delay-100 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-3xl bg-white border border-slate-200/70 shadow-lg p-4">{s.visual}</div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Everything else — compact chip strip (kept from featureGrid) */}
        {cfg.featureGrid && cfg.featureGrid.length > 0 && (
          <section className="py-12 bg-slate-50 border-y border-slate-100">
            <div className="px-[50px] lg:px-[70px]">
              <h3 className="text-sm lg:text-base font-bold uppercase tracking-widest text-slate-500 text-center mb-6">Everything else in this capability</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {cfg.featureGrid.map((f) => (
                  <div key={f.t} className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200/70 p-5 hover:border-blue-200 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm lg:text-base font-bold text-slate-900">{f.t}</div>
                      <div className="text-sm text-slate-600 leading-snug">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Works with */}
        {cfg.channels && (
          <section className="py-10 bg-white border-b border-slate-100">
            <div className="px-[50px] lg:px-[70px] text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Works with</div>
              <div className="flex flex-wrap justify-center gap-3">
                {cfg.channels.map((c) => (
                  <Link key={c} href={`/marketplaces/${c.toLowerCase()}`} className="px-4 py-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 text-sm font-semibold text-slate-700 transition-all">
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-14 bg-blue-50/40">
          <div className="px-[50px] lg:px-[70px]">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-8 reveal">Frequently asked</h2>
            <div className="space-y-3">
              {cfg.faq.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-slate-200/70 bg-white p-5 hover:border-blue-200 transition-all">
                  <summary className="cursor-pointer font-semibold text-slate-900 flex items-center justify-between list-none">
                    {f.q}<span className="text-blue-600 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[hsl(226,71%,50%)] to-[hsl(226,71%,35%)]">
          <div className="relative px-[50px] lg:px-[70px] text-center reveal">
            <Sparkles className="w-12 h-12 text-blue-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              See it running on your channels.
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Free 14-day trial. No credit card. Live in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 rounded-full bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-lg">
                Start free trial
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full shadow-lg">
                  Talk to our team
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/80 text-sm">
              <span>Setup in 15 min</span>
              <span>SOC 2 compliant</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PlatformPage;
