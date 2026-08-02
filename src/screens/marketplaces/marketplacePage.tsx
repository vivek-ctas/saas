import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Layout from "@/components/layout";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { ChannelHeroDiagram, OnboardingDiagram } from "@/components/illustrations/platformPageIllustrations";
import type { ReactNode } from "react";

export type MarketplaceConfig = {
  slug: string;
  name: string;
  dot: string;                 // small accent dot color
  logo?: string;               // optional SVG logo path (e.g. "/amazon.svg")
  tagline: ReactNode;          // hero H1
  intro: string;               // hero paragraph
  stats: { l: string; v: string; d?: string }[]; // 4 stat tiles
  capabilities: { icon: any; t: string; d: string; stat: string }[]; // 6 cards
  gotchas: { t: string; d: string }[]; // 4 rows
  onboarding: string[];        // 4 steps
  faq: { q: string; a: string }[]; // 5 items
  otherChannels: string[];     // for cross-link strip
};

const MarketplacePage = ({ cfg }: { cfg: MarketplaceConfig }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Layout>
      <div ref={ref}>
        {/* HERO */}
        <section className="relative overflow-hidden hero-cream slope-divider-bottom">
          <div className="absolute inset-0 hero-cream-grid pointer-events-none" />
          <div className="px-5 sm:px-8 lg:px-[70px] pt-14 pb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-[#E8F0F6] text-[#13355A] border border-[#BDD9EE] shadow-sm hover:bg-white">
                <span className="w-2 h-2 rounded-full mr-2" style={{ background: cfg.dot }} />
                {cfg.name} · Native Integration
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-slate-900 leading-[1.05] tracking-tight mb-4">
                {cfg.tagline}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-6 max-w-xl">{cfg.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-100 bg-white hover:bg-[#E8F0F6] text-slate-900 rounded-full shadow-sm">
                    View Pricing
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-lg group bg-gradient-to-r from-[#13355A] via-[#1B4A75] to-[#3C9AC4] hover:opacity-95 border-0">
                    Talk to Our Team <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-slate-500 mt-4">Dedicated onboarding · Expert support · Enterprise ready</p>
            </div>
            <div className="reveal delay-100 relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-[#3C9AC4]/15 via-[#6BC1E0]/15 to-[#3C9AC4]/10 blur-3xl rounded-[40px] pointer-events-none" />
              <div className="relative rounded-3xl bg-white shadow-xl border border-slate-200/70 p-4">
                <ChannelHeroDiagram cfg={cfg} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-10 bg-white border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px] grid grid-cols-2 md:grid-cols-4 gap-4">
            {cfg.stats.map((s) => (
              <div key={s.l} className="reveal rounded-2xl border border-slate-200/70 bg-white p-6 hover:border-[#BDD9EE] transition-all">
                <div className="text-sm text-slate-600 font-semibold">{s.l}</div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mt-1 tracking-tight">{s.v}</div>
                {s.d && <div className="text-xs font-semibold text-[#2B7AA8] mt-1">▲ {s.d}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="py-14 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="max-w-3xl mb-10 reveal">
              <Badge className="mb-3 bg-[#E8F0F6] text-[#13355A] border border-[#BDD9EE] shadow-sm hover:bg-white">What You Get</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Everything you need to run {cfg.name} - <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">inside SellerBuz.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cfg.capabilities.map((c, i) => (
                <div key={c.t} className="reveal rounded-2xl bg-white border border-slate-200/70 p-6 hover:border-[#BDD9EE] hover:shadow-md transition-all" style={{ transitionDelay: `${i * 30}ms` }}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3C9AC4] to-[#13355A] flex items-center justify-center mb-3">
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1.5 lg:text-lg">{c.t}</h3>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOTCHAS */}
        <section className="py-14 bg-[#F1F3FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="reveal">
              <Badge className="mb-3 bg-[#E8F0F6] text-[#13355A] border border-[#BDD9EE] shadow-sm">{cfg.name} Gotchas We Handle</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                The tricky {cfg.name} stuff, <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">solved.</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600">
                Every marketplace has its own quirks. SellerBuz handles the sharp edges of {cfg.name} so your team doesn't have to become experts to sell.
              </p>
            </div>
            <div className="space-y-3">
              {cfg.gotchas.map((g) => (
                <div key={g.t} className="reveal rounded-2xl border border-slate-200/70 bg-white p-5 hover:border-[#BDD9EE] transition-all">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3C9AC4] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">{g.t}</div>
                      <div className="text-sm lg:text-base text-slate-600 mt-0.5">{g.d}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ONBOARDING */}
        <section className="py-14 bg-white border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="text-center mb-8 reveal">
              <Badge className="mb-3 bg-[#E8F0F6] text-[#13355A] border border-[#BDD9EE] shadow-sm hover:bg-white">Live In Minutes</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Four steps to <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">sync your {cfg.name} store.</span></h2>
            </div>
            <div className="reveal max-w-6xl mx-auto">
              <OnboardingDiagram className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* CROSS CHANNEL */}
        {/* <section className="py-14 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px] text-center reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Also sells on</div>
            <div className="flex flex-wrap justify-center gap-3">
              {cfg.otherChannels.map((c) => (
                <Link key={c} href={`/marketplaces/${c.toLowerCase()}`} className="px-4 py-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#E8F0F6] hover:border-[#BDD9EE] text-sm font-semibold text-slate-700 transition-all">
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </section> */}

        {/* ═══════════════════════════════════════
            FAQ  –  2-col (sticky heading + accordion)
        ═══════════════════════════════════════ */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-20 items-start">
              <div className="reveal lg:sticky lg:top-24">
                <Badge className="mb-3 bg-[#E8F0F6] text-[#13355A] border border-[#BDD9EE] shadow-sm text-xs">FAQ</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                  Frequently<br className="hidden lg:block" /> asked
                </h2>
                <p className="text-slate-500 text-base leading-relaxed mb-6">
                  Everything you need to know about this platform capability.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full border-slate-200 text-slate-700 hover:bg-[#E8F0F6] hover:border-[#BDD9EE] text-sm">
                    Ask us directly <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </Link>
              </div>
              <div className="reveal delay-100 space-y-2.5">
                {cfg.faq.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-slate-200/70 bg-slate-50/50 hover:bg-white hover:border-[#BDD9EE] hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <summary className="cursor-pointer font-semibold text-slate-900 flex items-center justify-between list-none px-5 py-4 text-sm sm:text-base select-none">
                      {f.q}
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#E8F0F6] group-hover:bg-[#E8F0F6] flex items-center justify-center shrink-0 ml-4 transition-colors duration-200">
                        <span className="text-slate-500 group-open:text-[#3C9AC4] group-hover:text-[#3C9AC4] group-open:rotate-45 transition-all duration-200 text-lg leading-none font-light">+</span>
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

        {/* CTA */}
        <section className="py-14 lg:py-16 relative overflow-hidden bg-gradient-to-br from-[#13355A] to-[#1a4a7a]">
          <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-[70px] text-center reveal">
            <Sparkles className="w-12 h-12 text-white/20 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Start selling smarter on {cfg.name}.
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Manage your {cfg.name} business from one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="text-lg px-8 rounded-full bg-white text-primary hover:bg-accent border-0 shadow-lg">
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
              <span>Multi-Channel Sync</span>
              <span>Real-Time Inventory</span>
              <span>Dedicated Support</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MarketplacePage;
