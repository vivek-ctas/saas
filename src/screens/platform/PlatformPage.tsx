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
                    <Badge className="mb-1.5 bg-rose-100 text-rose-700 border border-rose-200 shadow-none text-xs">Before SellerBuz</Badge>
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
                    <Badge className="mb-1.5 bg-white text-blue-700 border border-blue-200 shadow-sm text-xs hover:bg-white">With SellerBuz</Badge>
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
            CHANNEL PIPELINE  –  redesigned
            "From warehouse to marketplace in
             milliseconds." – reference-image layout
        ═══════════════════════════════════════ */}
        {cfg.channels && (
          <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F9FC] border-t border-[#EAECF3] relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-50/60 to-transparent rounded-full blur-3xl" />
            </div>

            {/* ── Keyframe styles ── */}
            <style>{`
              @keyframes flowDot {
                0%   { transform: translateX(0);   opacity: 0; }
                15%  { opacity: 1; }
                85%  { opacity: 1; }
                100% { transform: translateX(80px); opacity: 0; }
              }
              @keyframes pipelinePulse {
                0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.3); }
                50%       { box-shadow: 0 0 0 8px rgba(37,99,235,0); }
              }
              .flow-dot {
                animation: flowDot 1.8s ease-in-out infinite;
              }
              .flow-dot-d1 { animation-delay: 0.0s; }
              .flow-dot-d2 { animation-delay: 0.6s; }
              .flow-dot-d3 { animation-delay: 1.2s; }
              .pipeline-pulse { animation: pipelinePulse 2.4s ease-in-out infinite; }
            `}</style>

            <div className="relative px-5 sm:px-8 lg:px-[70px]">

              {/* ── Header ── */}
              <div className="text-center mb-12 reveal">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200 shadow-sm text-blue-700 text-xs font-semibold mb-5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Lightning Fast Sync
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-3">
                  From warehouse to{" "}
                  <span className="text-blue-600">marketplace</span>
                  <br className="hidden sm:block" /> in milliseconds.
                </h2>
                <p className="text-slate-500 text-base sm:text-lg">
                  One update. Real-time sync. Zero delays.
                </p>
              </div>

              {/* ── Pipeline Flow ── */}
              <div className="reveal delay-100">

                {/* Desktop / Tablet: horizontal */}
                <div className="hidden md:flex items-center justify-center gap-0">

                  {/* ── Stage 1: Warehouse ── */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-[148px] bg-white border border-slate-200/80 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 p-4 flex flex-col items-center gap-3 cursor-default">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center pipeline-pulse">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-800">Warehouse</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Stock Update</p>
                      </div>
                    </div>
                  </div>

                  {/* ── Connector 1 ── */}
                  <div className="relative flex items-center w-16 shrink-0 overflow-visible">
                    <div className="w-full border-t-2 border-dashed border-blue-200" />
                    <div className="flow-dot flow-dot-d1 absolute left-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(37,99,235,0.6)]" />
                    <div className="flow-dot flow-dot-d2 absolute left-0 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(37,99,235,0.4)]" />
                    <div className="flow-dot flow-dot-d3 absolute left-0 w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_6px_rgba(37,99,235,0.3)]" />
                    <svg className="absolute right-0 w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                      <polygon points="0,0 8,4 0,8" />
                    </svg>
                  </div>

                  {/* ── Stage 2: Sync Engine ── */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-[148px] bg-white border border-slate-200/80 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 p-4 flex flex-col items-center gap-3 cursor-default">
                      <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center pipeline-pulse" style={{ animationDelay: "0.4s" }}>
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-800">Sync Engine</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Processing Update</p>
                      </div>
                    </div>
                  </div>

                  {/* ── Connector 2 ── */}
                  <div className="relative flex items-center w-16 shrink-0 overflow-visible">
                    <div className="w-full border-t-2 border-dashed border-blue-200" />
                    <div className="flow-dot flow-dot-d2 absolute left-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(37,99,235,0.6)]" />
                    <div className="flow-dot flow-dot-d3 absolute left-0 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(37,99,235,0.4)]" />
                    <svg className="absolute right-0 w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                      <polygon points="0,0 8,4 0,8" />
                    </svg>
                  </div>

                  {/* ── Stage 3: Data Sent ── */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-[148px] bg-white border border-slate-200/80 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 p-4 flex flex-col items-center gap-3 cursor-default">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center pipeline-pulse" style={{ animationDelay: "0.8s" }}>
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-800">Data Sent</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Secure Transmission</p>
                      </div>
                    </div>
                  </div>

                  {/* ── Connector 3 ── */}
                  <div className="relative flex items-center w-16 shrink-0 overflow-visible">
                    <div className="w-full border-t-2 border-dashed border-blue-200" />
                    <div className="flow-dot flow-dot-d1 absolute left-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(37,99,235,0.6)]" />
                    <div className="flow-dot flow-dot-d2 absolute left-0 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(37,99,235,0.4)]" />
                    <svg className="absolute right-0 w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                      <polygon points="0,0 8,4 0,8" />
                    </svg>
                  </div>

                  {/* ── Stage 4: Channel API ── */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-[148px] bg-white border border-slate-200/80 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 p-4 flex flex-col items-center gap-3 cursor-default">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center pipeline-pulse" style={{ animationDelay: "1.2s" }}>
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-800">Channel API</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Update Received</p>
                      </div>
                    </div>
                  </div>

                  {/* ── Connector 4 ── */}
                  <div className="relative flex items-center w-16 shrink-0 overflow-visible">
                    <div className="w-full border-t-2 border-dashed border-blue-200" />
                    <div className="flow-dot flow-dot-d3 absolute left-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(37,99,235,0.6)]" />
                    <div className="flow-dot flow-dot-d1 absolute left-0 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(37,99,235,0.4)]" />
                    <svg className="absolute right-0 w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                      <polygon points="0,0 8,4 0,8" />
                    </svg>
                  </div>

                  {/* ── Stage 5: Marketplace (highlighted card) ── */}
                  <Link href="/marketplaces/amazon" className="flex flex-col items-center gap-3 cursor-pointer">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-[164px] bg-white border-2 border-blue-300 rounded-2xl shadow-xl shadow-blue-100/50 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 p-5 flex flex-col items-center gap-3  relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-white pointer-events-none" />
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                          <img
                            src="/logos/amazon-color-svgrepo-com.svg"
                            alt="Amazon"
                            className="w-full h-full object-contain p-1.5"
                            onError={(e) => {
                              const t = e.currentTarget;
                              t.style.display = "none";
                              const next = t.nextElementSibling as HTMLElement | null;
                              if (next) next.style.display = "flex";
                            }}
                          />
                          <div className="hidden w-full h-full items-center justify-center bg-slate-50">
                            <span className="text-2xl font-black text-slate-800">a</span>
                          </div>
                        </div>
                        <div className="relative text-center">
                          <p className="text-sm font-bold text-slate-900">Amazon</p>
                          <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                            Updated
                          </span>
                          <p className="text-[11px] text-slate-400 mt-1.5">Live in &lt; 2s</p>
                        </div>
                      </div>
                    </div>
                  </Link>

                </div>

                {/* Mobile: vertical stack */}
                <div className="flex md:hidden flex-col items-center gap-0">
                  {[
                    { label: "Warehouse", sub: "Stock Update", icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
                    { label: "Sync Engine", sub: "Processing Update", icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> },
                    { label: "Data Sent", sub: "Secure Transmission", icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg> },
                    { label: "Channel API", sub: "Update Received", icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                  ].map((stage, i) => (
                    <div key={stage.label} className="flex flex-col items-center">
                      <div className="flex items-center gap-3 w-full max-w-xs bg-white border border-slate-200 rounded-2xl shadow-sm px-4 py-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                          {stage.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">{stage.label}</p>
                          <p className="text-[11px] text-slate-400">{stage.sub}</p>
                        </div>
                      </div>
                      {i < 3 && (
                        <div className="relative flex flex-col items-center my-1 h-8">
                          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-blue-200 w-0" />
                          <div className="flow-dot absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500" style={{ animation: "flowDot 1.8s ease-in-out infinite", animationDelay: `${i * 0.4}s`, transform: "none" }} />
                        </div>
                      )}
                    </div>
                  ))}
                  {/* Marketplace end card — mobile */}
                  <div className="flex flex-col items-center mt-1">
                    <div className="relative w-0 h-8 border-l-2 border-dashed border-blue-300" />
                    <div className="flex items-center gap-3 w-full max-w-xs bg-white border-2 border-blue-300 rounded-2xl shadow-lg px-4 py-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center shrink-0">
                        <img src="/logos/amazon-color-svgrepo-com.svg" alt="Amazon" className="w-full h-full object-contain p-1" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Amazon</p>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Updated
                        </span>
                      </div>
                      <p className="ml-auto text-[11px] text-slate-400">Live in &lt; 2s</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Stat Strip ── */}
              <div className="reveal delay-200 mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  {
                    icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                    v: "< 2s", l: "Sync Time",
                  },
                  {
                    icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth={1.5} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" /></svg>,
                    v: "99.99%", l: "Uptime",
                  },
                  {
                    icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                    v: "100%", l: "Data Safe",
                  },
                  {
                    icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
                    v: "Real-time", l: "Always Updated",
                  },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl px-4 py-3 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-600 leading-tight">{s.v}</p>
                      <p className="text-[11px] text-slate-500">{s.l}</p>
                    </div>
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
