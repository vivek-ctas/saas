import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, Sparkles, ChevronRight } from "lucide-react";
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

        {/* ═══════════════════════════════════════
            HERO  –  unchanged 2-col
        ═══════════════════════════════════════ */}
        <section className="relative overflow-hidden hero-cream slope-divider-bottom py-14">
          <div className="absolute inset-0 hero-cream-grid pointer-events-none" />
          <div className="px-5 sm:px-8 lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <Badge className="mb-3 bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-white">
                {cfg.eyebrow}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-4">
                {cfg.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-xl">
                {cfg.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-100 bg-white hover:bg-blue-50 text-slate-900 rounded-full shadow-sm">
                    Explore Our Services
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                    Quick Start <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="reveal delay-100 relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/15 via-blue-200/15 to-blue-600/10 blur-3xl rounded-[40px] pointer-events-none" />
              <div className="relative rounded-3xl bg-white shadow-xl border border-slate-200/70 p-4">{cfg.hero}</div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            BEFORE / AFTER  –  enhanced 2-col cards
        ═══════════════════════════════════════ */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="flex items-center gap-3 mb-8 reveal">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 px-2">The Difference</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Before */}
              <div className="reveal group rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 to-pink-50/30 p-7 relative overflow-hidden hover:border-rose-200 hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-100/30 rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-rose-500 text-sm font-bold">✕</span>
                  </div>
                  <div>
                    <Badge className="mb-1.5 bg-rose-100 text-rose-700 border border-rose-200 shadow-none text-xs">Before Ctasis</Badge>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-snug">{cfg.problem.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {cfg.problem.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              {/* After */}
              <div className="reveal delay-100 group rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/30 p-7 relative overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/30 rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <Badge className="mb-1.5 bg-white text-blue-700 border border-blue-200 shadow-sm text-xs hover:bg-white">With Ctasis</Badge>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-snug">{cfg.solution.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {cfg.solution.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            3-COL FEATURE CARD ROW
            Shows SVG visual as scaled thumbnail
            at the top of each card, then eyebrow
            badge + title + desc + Learn more →
            Matches the reference image exactly.
        ═══════════════════════════════════════ */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cfg.deepDives.map((s, i) => (
                <div
                  key={s.eyebrow}
                  className="reveal group rounded-2xl bg-white border border-slate-200/70 flex flex-col overflow-hidden hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* SVG visual – cropped thumbnail area */}
                  <div className="relative h-44 bg-slate-50/80 border-b border-slate-100 overflow-hidden flex items-start justify-center pt-1">
                    <div
                      className="pointer-events-none w-full"
                      style={{ transform: "scale(0.60)", transformOrigin: "top center" }}
                    >
                      {s.visual}
                    </div>
                    {/* Eyebrow badge pinned bottom-left */}
                    <div className="absolute bottom-2.5 left-3 z-10">
                      <Badge className="bg-white/95 text-blue-700 border border-blue-100 shadow-sm text-[11px] backdrop-blur-sm">
                        {s.eyebrow}
                      </Badge>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-[11px] font-bold leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-[15px] font-bold text-slate-900 leading-snug">
                        {s.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                      {s.desc.length > 120 ? s.desc.slice(0, 120) + "…" : s.desc}
                    </p>

                    <ul className="space-y-1.5 mb-4">
                      {s.bullets.slice(0, 2).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            DEEP DIVES  –  3 alternating layouts
            0 → 2-col (text L, visual R)
            1 → full-width centered showcase
            2 → 2-col (visual L, text R)
        ═══════════════════════════════════════ */}
        {cfg.deepDives.map((s, i) => {
          const pattern = i % 3;

          /* ── 2-col: text left, visual right ── */
          if (pattern === 0) {
            return (
              <section key={s.title} className="py-14 sm:py-16 lg:py-20 bg-[#F1F3FC] border-t border-[#EAECF3]">
                <div className="px-5 sm:px-8 lg:px-[70px]">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-center">
                    <div className="reveal">
                      <Badge className="mb-3 bg-blue-50 text-blue-700 border border-blue-100 shadow-sm text-xs">{s.eyebrow}</Badge>
                      <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-bold text-slate-900 leading-tight mb-4">{s.title}</h2>
                      <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7">{s.desc}</p>
                      <ul className="space-y-3">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                            <span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3 h-3 text-blue-600" />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="reveal delay-100">
                      <div className="rounded-3xl bg-white border border-slate-200/70 shadow-xl p-4 lg:p-5">{s.visual}</div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          /* ── full-width: centered title + large visual + 2-col chips ── */
          if (pattern === 1) {
            return (
              <section key={s.title} className="py-14 sm:py-16 lg:py-20 bg-white border-t border-[#EAECF3]">
                <div className="px-5 sm:px-8 lg:px-[70px]">
                  <div className="text-center max-w-3xl mx-auto mb-10 reveal">
                    <Badge className="mb-3 bg-blue-50 text-blue-700 border border-blue-100 shadow-sm text-xs">{s.eyebrow}</Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">{s.title}</h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="reveal delay-100 max-w-4xl mx-auto mb-10">
                    <div className="rounded-3xl bg-white border border-slate-200/70 shadow-2xl p-4 lg:p-6">{s.visual}</div>
                  </div>
                  <div className="reveal delay-200 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                    {s.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200/70 px-4 py-3 hover:border-blue-200 hover:shadow-md hover:bg-blue-50/20 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700 leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          /* ── 2-col: visual left, text right ── */
          return (
            <section key={s.title} className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3]">
              <div className="px-5 sm:px-8 lg:px-[70px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className="reveal order-2 lg:order-1">
                    <div className="rounded-3xl bg-white border border-slate-200/70 shadow-xl p-4 lg:p-5">{s.visual}</div>
                  </div>
                  <div className="reveal delay-100 order-1 lg:order-2">
                    <Badge className="mb-3 bg-blue-50 text-blue-700 border border-blue-100 shadow-sm text-xs">{s.eyebrow}</Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-bold text-slate-900 leading-tight mb-4">{s.title}</h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7">{s.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-slate-700 group/li cursor-default">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 border border-blue-200 shrink-0 mt-0.5 group-hover/li:bg-blue-600 group-hover/li:border-blue-600 transition-colors duration-200">
                            <CheckCircle2 className="w-3 h-3 text-blue-600 group-hover/li:text-white transition-colors duration-200" />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link href="/pricing" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-200 group">
                      Get started free <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ═══════════════════════════════════════
            "EVERYTHING ELSE"  –  SINGLE ROW
            All featureGrid items in one horizontal
            row: grid-cols-6 on desktop.
            Matches reference image bottom strip.
        ═══════════════════════════════════════ */}
        {cfg.featureGrid && cfg.featureGrid.length > 0 && (
          <section className="py-14 sm:py-16 lg:py-20 bg-[#F1F3FC] border-t border-[#EAECF3]">
            <div className="px-5 sm:px-8 lg:px-[70px]">
              <div className="text-center mb-8 reveal">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-1">Everything else</p>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Every feature, built in</h2>
              </div>

              {/* Single horizontal row — 6 chips on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {cfg.featureGrid.map((f, idx) => (
                  <div
                    key={f.t}
                    className="reveal group flex flex-col items-center text-center gap-3 rounded-2xl bg-white border border-slate-200/70 px-3 py-4 hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <f.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs font-bold text-slate-800 leading-snug">{f.t}</div>
                    <div className="text-[11px] text-slate-500 leading-snug hidden sm:block">{f.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════
            CHANNEL PIPELINE
            "From warehouse to marketplace in
             milliseconds." – horizontal flow visual
            Warehouse → Sync Engine → Channels → Customers
        ═══════════════════════════════════════ */}
        {cfg.channels && (
          <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-[#EAECF3] relative overflow-hidden">
            <div className="px-5 sm:px-8 lg:px-[70px]">
              <div className="text-center mb-10 reveal">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-2">Works seamlessly with</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  From warehouse to marketplace in milliseconds.
                </h3>
              </div>

              {/* Horizontal pipeline flow */}
              <div className="reveal delay-100 flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 lg:gap-0 overflow-x-auto pb-2">

                {/* Warehouse node */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Warehouse</span>
                </div>

                {/* Arrow connector */}
                <div className="hidden lg:flex items-center px-2">
                  <div className="w-8 h-px bg-slate-300" />
                  <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-t-transparent border-b-transparent border-l-slate-400" />
                </div>

                {/* Sync Engine node */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center shadow-lg shadow-blue-100">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-blue-700 font-semibold">Sync Engine</span>
                </div>

                {/* Arrow connector */}
                <div className="hidden lg:flex items-center px-2">
                  <div className="w-8 h-px bg-slate-300" />
                  <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-t-transparent border-b-transparent border-l-slate-400" />
                </div>

                {/* Channel nodes */}
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-0">
                  {cfg.channels.map((c, idx) => (
                    <div key={c} className="flex items-center">
                      <Link
                        href={`/marketplaces/${c.toLowerCase()}`}
                        className="group flex flex-col items-center gap-2 shrink-0"
                      >
                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 flex items-center justify-center group-hover:scale-105">
                          <span className="text-blue-700 font-bold text-[13px]">{c.slice(0, 1)}</span>
                        </div>
                        <span className="text-[11px] text-slate-500 font-medium group-hover:text-slate-900 transition-colors">{c}</span>
                      </Link>
                      {idx < cfg.channels.length - 1 && (
                        <div className="hidden lg:flex items-center px-1.5">
                          <div className="w-5 h-px bg-slate-300" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Arrow connector */}
                <div className="hidden lg:flex items-center px-2">
                  <div className="w-8 h-px bg-slate-300" />
                  <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-t-transparent border-b-transparent border-l-slate-400" />
                </div>

                {/* Customers node */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Customers</span>
                </div>

              </div>

              {/* Stat strip */}
              <div className="reveal delay-200 mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3">
                {[
                  { v: "< 2s", l: "propagation time" },
                  { v: "99.98%", l: "sync uptime" },
                  { v: "0", l: "tab-switching" },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-slate-900">{s.v}</span>
                    <span className="text-xs text-slate-500 mt-0.5">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════
            FAQ  –  2-col (sticky heading + accordion)
        ═══════════════════════════════════════ */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-20 items-start">
              <div className="reveal lg:sticky lg:top-24">
                <Badge className="mb-3 bg-blue-50 text-blue-700 border border-blue-100 shadow-sm text-xs">FAQ</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                  Frequently<br className="hidden lg:block" /> asked
                </h2>
                <p className="text-slate-500 text-base leading-relaxed mb-6">
                  Everything you need to know about this platform capability.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-200 text-sm">
                    Ask us directly <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </Link>
              </div>
              <div className="reveal delay-100 space-y-2.5">
                {cfg.faq.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-slate-200/70 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <summary className="cursor-pointer font-semibold text-slate-900 flex items-center justify-between list-none px-5 py-4 text-sm sm:text-base select-none">
                      {f.q}
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-blue-100 group-hover:bg-blue-100 flex items-center justify-center shrink-0 ml-4 transition-colors duration-200">
                        <span className="text-slate-500 group-open:text-blue-600 group-hover:text-blue-600 group-open:rotate-45 transition-all duration-200 text-lg leading-none font-light">+</span>
                      </span>
                    </summary>
                    <div className="px-5 pb-4 pt-0">
                      <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">{f.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CTA  –  unchanged gradient block
        ═══════════════════════════════════════ */}
        <section className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-[hsl(226,71%,50%)] to-[hsl(226,71%,35%)]">
          <div className="relative px-5 sm:px-8 lg:px-[70px] text-center reveal">
            <Sparkles className="w-12 h-12 text-blue-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to streamline your multichannel operations?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Manage products, inventory, orders, and pricing across every marketplace from one centralized platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="text-lg px-8 rounded-full bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-lg">
                  Explore Pricing
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:text-white shadow-lg transition-all duration-300">
                  Talk to our team
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/80 text-sm">
              <span>Fast Implementation</span>
              <span>Secure Platform</span>
              <span>Expert Support</span>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default PlatformPage;
