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
        <section className="relative bg-gradient-to-b from-blue-50/60 to-white py-14">
          <div className="px-[50px] lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <Badge className="mb-3 bg-white text-blue-700 border border-blue-100">{cfg.eyebrow}</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-4">
                {cfg.title}
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-xl">{cfg.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 rounded-full px-7 h-12">
                  Start free trial <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="rounded-full px-7 h-12 border-slate-300">
                    See full platform
                  </Button>
                </Link>
              </div>
            </div>
            <div className="reveal delay-100">
              <div className="rounded-2xl bg-white shadow-xl border border-slate-100 p-4">{cfg.hero}</div>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-14 bg-white">
          <div className="px-[50px] lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="reveal rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <Badge className="mb-3 bg-pink-50 text-pink-700 border border-pink-100">Before SellerBuz</Badge>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">{cfg.problem.title}</h3>
              <ul className="space-y-2">
                {cfg.problem.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal delay-100 rounded-2xl border border-blue-200 bg-blue-50/50 p-6">
              <Badge className="mb-3 bg-white text-blue-700 border border-blue-100">With SellerBuz</Badge>
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
          <section key={s.title} className={`py-14 ${i % 2 === 0 ? "bg-blue-50/40" : "bg-white"}`}>
            <div className="px-[50px] lg:px-[70px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={`reveal ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Badge className="mb-3 bg-blue-50 text-blue-700 border border-blue-100 text-xs">{s.eyebrow}</Badge>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-3">{s.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-5 lg:text-lg">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`reveal delay-100 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl bg-white border border-slate-100 shadow-lg p-4">{s.visual}</div>
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cfg.featureGrid.map((f) => (
                  <div key={f.t} className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <f.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{f.t}</div>
                      <div className="text-[12px] text-slate-600 leading-snug">{f.d}</div>
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
              <div className="flex flex-wrap justify-center gap-2">
                {cfg.channels.map((c) => (
                  <Link key={c} href={`/marketplaces/${c.toLowerCase()}`} className="px-4 py-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 text-sm font-semibold text-slate-700 transition-colors">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-8 reveal">Frequently asked</h2>
            <div className="space-y-3">
              {cfg.faq.map((f) => (
                <details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-200 transition-colors">
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
        <section className="py-14 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(96,165,250,0.25),transparent_45%)]" />
          <div className="relative max-w-4xl mx-auto text-center px-4">
            <Sparkles className="w-8 h-8 mx-auto text-blue-300 mb-3" />
            <h2 className="text-3xl font-bold mb-3">See it running on your channels.</h2>
            <p className="text-slate-300 mb-6">Free 14-day trial. No credit card.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 rounded-full px-7 h-12">
              Start free trial <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PlatformPage;
