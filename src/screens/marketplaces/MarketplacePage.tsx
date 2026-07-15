import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, Sparkles, Boxes, ShoppingCart, DollarSign, BarChart3, Wand2, RefreshCw } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { ReactNode } from "react";
import { OnboardingDiagram } from "@/components/illustrations";

export type MarketplaceConfig = {
  slug: string;
  name: string;
  dot: string;                 // small accent dot color
  tagline: string;             // hero H1
  intro: string;               // hero paragraph
  stats: { l: string; v: string; d?: string }[]; // 4 stat tiles
  capabilities: { icon: any; t: string; d: string }[]; // 6 cards
  gotchas: { t: string; d: string }[]; // 4 rows
  onboarding: string[];        // 4 steps
  faq: { q: string; a: string }[]; // 5 items
  otherChannels: string[];     // for cross-link strip
};

const ChannelHeroDiagram = ({ name, dot }: { name: string; dot: string }) => (
  <svg viewBox="0 0 560 360" className="w-full h-auto">
    <defs>
      <linearGradient id="mp-wash" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#f8fafc" /><stop offset="100%" stopColor="#eff6ff" />
      </linearGradient>
      <pattern id="mp-grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0H0V24" stroke="#dbeafe" strokeWidth="0.6" fill="none" />
      </pattern>
      <linearGradient id="mp-core" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#0b1e3f" />
      </linearGradient>
      <filter id="mp-sh" x="-10%" y="-10%" width="120%" height="130%">
        <feGaussianBlur stdDeviation="5" /><feOffset dy="2" />
        <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect width="560" height="360" rx="22" fill="url(#mp-wash)" />
    <rect width="560" height="360" rx="22" fill="url(#mp-grid)" />
    {/* channel card */}
    <g filter="url(#mp-sh)">
      <rect x="30" y="130" width="170" height="100" rx="14" fill="white" stroke="#e2e8f0" />
      <rect x="30" y="130" width="170" height="3" rx="1.5" fill={dot} />
      <circle cx="52" cy="162" r="10" fill={dot + "22"} />
      <circle cx="52" cy="162" r="5" fill={dot} />
      <text x="70" y="160" fontFamily="Inter" fontSize="13" fontWeight="800" fill="#0f172a">{name}</text>
      <text x="70" y="176" fontFamily="Inter" fontSize="10" fill="#64748b">Native integration</text>
      <rect x="46" y="192" width="138" height="26" rx="13" fill="#eff6ff" stroke="#bfdbfe" />
      <circle cx="60" cy="205" r="3.5" fill="#10b981" />
      <text x="72" y="209" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#1d4ed8">Connected · live</text>
    </g>
    {/* engine */}
    <g filter="url(#mp-sh)">
      <rect x="230" y="120" width="150" height="120" rx="16" fill="url(#mp-core)" />
      <circle cx="305" cy="165" r="24" fill="#fff" opacity="0.14" />
      <circle cx="305" cy="165" r="14" fill="#fff" />
      <path d="M299 165l4 4 8-8" stroke="#0b1e3f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="305" y="205" textAnchor="middle" fontFamily="Inter" fontSize="12" fontWeight="800" fill="#fff">SellerBuz Sync</text>
      <text x="305" y="221" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#bfdbfe">2-way · &lt; 2s latency</text>
    </g>
    {/* right ops cards */}
    {[
      { y: 40, t: "Inventory", v: "12,480 SKUs" },
      { y: 108, t: "Orders", v: "241 / today" },
      { y: 176, t: "Pricing", v: "Rules active" },
      { y: 244, t: "Catalog", v: "AI ready" },
    ].map((c) => (
      <g key={c.t} filter="url(#mp-sh)">
        <rect x="410" y={c.y} width="130" height="52" rx="10" fill="white" stroke="#e2e8f0" />
        <rect x="410" y={c.y} width="3" height="52" rx="1.5" fill="#2563eb" />
        <text x="424" y={c.y + 20} fontFamily="Inter" fontSize="9.5" fontWeight="700" fill="#64748b" letterSpacing="1">{c.t.toUpperCase()}</text>
        <text x="424" y={c.y + 40} fontFamily="Inter" fontSize="12" fontWeight="800" fill="#0f172a">{c.v}</text>
      </g>
    ))}
    {/* arrows */}
    <line x1="200" y1="180" x2="230" y2="180" stroke="#60a5fa" strokeWidth="1.8" strokeDasharray="5 4" markerEnd="url(#mp-arrow)" />
    <line x1="230" y1="185" x2="200" y2="185" stroke="#60a5fa" strokeWidth="1.8" strokeDasharray="5 4" />
    {[66, 134, 202, 270].map((y, i) => (
      <line key={i} x1="380" y1="180" x2="410" y2={y} stroke="#2563eb" strokeWidth="1.4" strokeDasharray="4 4" />
    ))}
    <defs>
      <marker id="mp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#60a5fa" />
      </marker>
    </defs>
  </svg>
);

const OnboardingDiagram1 = ({ steps, dot }: { steps: string[]; dot: string }) => (
  <svg viewBox="0 0 640 180" className="w-full h-auto">
    <rect width="640" height="180" rx="18" fill="#eff6ff" />
    {steps.map((s, i) => {
      const x = 20 + i * 155;
      return (
        <g key={i}>
          <rect x={x} y={40} width="140" height="110" rx="14" fill="white" stroke="#e2e8f0" />
          <rect x={x} y={40} width="140" height="3" rx="1.5" fill={i === steps.length - 1 ? dot : "#2563eb"} />
          <circle cx={x + 70} cy={78} r="20" fill="#2563eb" />
          <text x={x + 70} y={83} textAnchor="middle" fontFamily="Inter" fontSize="12" fontWeight="800" fill="#fff">{i + 1}</text>
          <text x={x + 70} y={118} textAnchor="middle" fontFamily="Inter" fontSize="11" fontWeight="700" fill="#0f172a">
            {s.split(" ")[0]}
          </text>
          <text x={x + 70} y={132} textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#64748b">
            {s.split(" ").slice(1).join(" ")}
          </text>
          {i < steps.length - 1 && (
            <line x1={x + 142} y1={95} x2={x + 153} y2={95} stroke="#60a5fa" strokeWidth="1.6" strokeDasharray="4 3" />
          )}
        </g>
      );
    })}
  </svg>
);

const MarketplacePage = ({ cfg }: { cfg: MarketplaceConfig }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Layout>
      <div ref={ref}>
        {/* HERO */}
        <section className="relative overflow-hidden hero-cream slope-divider-bottom">
          <div className="absolute inset-0 hero-cream-grid pointer-events-none" />
          <div className="px-[50px] lg:px-[70px] pt-14 pb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-white">
                <span className="w-2 h-2 rounded-full mr-2" style={{ background: cfg.dot }} />
                {cfg.name} · Native integration
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-slate-900 leading-[1.05] tracking-tight mb-4">
                {cfg.tagline}
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-6 max-w-xl">{cfg.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-100 bg-white hover:bg-blue-50 text-slate-900 rounded-full shadow-sm">
                    See pricing
                  </Button>
                </Link>
                <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                  Connect {cfg.name} <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-sm text-slate-500 mt-4">14-day free trial · no credit card · live in under 10 minutes</p>
            </div>
            <div className="reveal delay-100 relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/15 via-blue-200/15 to-blue-600/10 blur-3xl rounded-[40px] pointer-events-none" />
              <div className="relative rounded-3xl bg-white shadow-xl border border-slate-200/70 p-4">
                <ChannelHeroDiagram name={cfg.name} dot={cfg.dot} />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-10 bg-white border-y border-slate-100">
          <div className="px-[50px] lg:px-[70px] grid grid-cols-2 md:grid-cols-4 gap-4">
            {cfg.stats.map((s) => (
              <div key={s.l} className="reveal rounded-2xl border border-slate-200/70 bg-white p-6 hover:border-blue-200 transition-all">
                <div className="text-sm text-slate-600 font-semibold">{s.l}</div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mt-1 tracking-tight">{s.v}</div>
                {s.d && <div className="text-xs font-semibold text-emerald-600 mt-1">▲ {s.d}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="py-14 bg-blue-50/40">
          <div className="px-[50px] lg:px-[70px]">
            <div className="max-w-3xl mb-10 reveal">
              <Badge className="mb-3 bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-white">What you get</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Everything you need to run {cfg.name} — inside SellerBuz.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cfg.capabilities.map((c, i) => (
                <div key={c.t} className="reveal rounded-2xl bg-white border border-slate-200/70 p-6 hover:border-blue-200 hover:shadow-md transition-all" style={{ transitionDelay: `${i * 30}ms` }}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center mb-3">
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
        <section className="py-14 bg-white">
          <div className="px-[50px] lg:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="reveal">
              <Badge className="mb-3 bg-pink-50 text-pink-700 border border-pink-100 shadow-sm">{cfg.name} gotchas we handle</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                The tricky {cfg.name} stuff, solved.
              </h2>
              <p className="text-lg lg:text-xl text-slate-600">
                Every marketplace has its own quirks. SellerBuz handles the sharp edges of {cfg.name} so your team doesn't have to become experts to sell.
              </p>
            </div>
            <div className="space-y-3">
              {cfg.gotchas.map((g) => (
                <div key={g.t} className="reveal rounded-2xl border border-slate-200/70 bg-white p-5 hover:border-blue-200 transition-all">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
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
        <section className="py-14 bg-blue-50/40">
          <div className="px-[50px] lg:px-[70px]">
            <div className="text-center mb-8 reveal">
              <Badge className="mb-3 bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-white">Live in minutes</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Four steps to sync your {cfg.name} store.</h2>
            </div>
            <div className="reveal">
              <OnboardingDiagram className="w-full h-auto max-w-[700px] mx-auto" />

            </div>
          </div>
        </section>

        {/* CROSS CHANNEL */}
        <section className="py-14 bg-white">
          <div className="px-[50px] lg:px-[70px] text-center reveal">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Also sells on</div>
            <div className="flex flex-wrap justify-center gap-3">
              {cfg.otherChannels.map((c) => (
                <Link key={c} href={`/marketplaces/${c.toLowerCase()}`} className="px-4 py-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 text-sm font-semibold text-slate-700 transition-all">
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-blue-50/40">
          <div className="px-[50px] lg:px-[70px]">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-8 reveal">{cfg.name} — frequently asked</h2>
            <div className="space-y-3">
              {cfg.faq.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-slate-200/70 bg-white p-5 hover:border-blue-200 transition-all">
                  <summary className="cursor-pointer font-semibold text-slate-900 flex items-center justify-between list-none">
                    {f.q}
                    <span className="text-blue-600 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
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
              Start selling smarter on {cfg.name}.
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Free 14-day trial. Connect your store in minutes.
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

export default MarketplacePage;

export const MP_ICONS = { Boxes, ShoppingCart, DollarSign, BarChart3, Wand2, RefreshCw };
