import { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* Decorative background blobs – soft brand gradient orbs              */
/* ------------------------------------------------------------------ */
export const BlobBackdrop = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
    <div className="hero-blob bg-primary/40 w-[420px] h-[420px] -top-24 -left-20 animate-blob" />
    <div className="hero-blob bg-secondary/40 w-[360px] h-[360px] top-32 right-0 animate-blob" style={{ animationDelay: "3s" }} />
    <div className="hero-blob bg-fuchsia-500/30 w-[300px] h-[300px] bottom-0 left-1/3 animate-blob" style={{ animationDelay: "6s" }} />
  </div>
);

/* ------------------------------------------------------------------ */
/* Hero dashboard mockup – animated bars + sparkline                   */
/* ------------------------------------------------------------------ */
export const DashboardMockup = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="dm-bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f5f3ff" />
      </linearGradient>
      <linearGradient id="dm-bar" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" />
        <stop offset="100%" stopColor="hsl(280 70% 55%)" />
      </linearGradient>
      <linearGradient id="dm-bar2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(330 81% 60%)" />
        <stop offset="100%" stopColor="hsl(280 70% 55%)" />
      </linearGradient>
    </defs>
    {/* Window */}
    <rect x="20" y="20" width="560" height="380" rx="20" fill="url(#dm-bg)" stroke="hsl(220 15% 88%)" />
    {/* Top bar */}
    <circle cx="46" cy="46" r="5" fill="#ef4444" />
    <circle cx="62" cy="46" r="5" fill="#f59e0b" />
    <circle cx="78" cy="46" r="5" fill="#10b981" />
    <rect x="120" y="38" width="200" height="16" rx="8" fill="hsl(220 20% 96%)" />
    {/* Sidebar */}
    <rect x="40" y="80" width="120" height="300" rx="12" fill="hsl(226 71% 96%)" />
    <rect x="56" y="100" width="88" height="10" rx="5" fill="hsl(226 71% 50%)" />
    <rect x="56" y="124" width="64" height="8" rx="4" fill="hsl(226 30% 80%)" />
    <rect x="56" y="144" width="80" height="8" rx="4" fill="hsl(226 30% 80%)" />
    <rect x="56" y="164" width="56" height="8" rx="4" fill="hsl(226 30% 80%)" />
    <rect x="56" y="184" width="72" height="8" rx="4" fill="hsl(226 30% 80%)" />
    {/* Stat cards */}
    <g>
      <rect x="180" y="80" width="120" height="70" rx="12" fill="white" stroke="hsl(220 15% 92%)" />
      <rect x="194" y="96" width="40" height="8" rx="4" fill="hsl(220 15% 80%)" />
      <text x="194" y="130" fontFamily="Inter,system-ui" fontWeight="700" fontSize="20" fill="hsl(232 60% 18%)">$48.2k</text>
      <rect x="312" y="80" width="120" height="70" rx="12" fill="white" stroke="hsl(220 15% 92%)" />
      <rect x="326" y="96" width="40" height="8" rx="4" fill="hsl(220 15% 80%)" />
      <text x="326" y="130" fontFamily="Inter,system-ui" fontWeight="700" fontSize="20" fill="hsl(232 60% 18%)">12,840</text>
      <rect x="444" y="80" width="120" height="70" rx="12" fill="white" stroke="hsl(220 15% 92%)" />
      <rect x="458" y="96" width="40" height="8" rx="4" fill="hsl(220 15% 80%)" />
      <text x="458" y="130" fontFamily="Inter,system-ui" fontWeight="700" fontSize="20" fill="hsl(330 81% 50%)">+24%</text>
    </g>
    {/* Chart card */}
    <rect x="180" y="170" width="384" height="210" rx="14" fill="white" stroke="hsl(220 15% 92%)" />
    {/* Bars (animated grow) */}
    <g style={{ transformOrigin: "200px 360px" }}>
      {[
        [220, 80], [260, 120], [300, 60], [340, 140], [380, 100], [420, 170], [460, 130], [500, 180], [540, 110]
      ].map(([x, h], i) => (
        <rect key={i} x={x} y={360 - h} width="22" height={h} rx="6"
          fill={i % 2 === 0 ? "url(#dm-bar)" : "url(#dm-bar2)"}>
          <animate attributeName="height" from="0" to={h} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
          <animate attributeName="y" from="360" to={360 - h} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
        </rect>
      ))}
    </g>
    {/* Sparkline */}
    <path d="M200 260 Q 240 220, 280 240 T 360 220 T 440 200 T 540 180" stroke="hsl(330 81% 60%)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="600" strokeDashoffset="0">
      <animate attributeName="stroke-dashoffset" from="600" to="0" dur="2.2s" fill="freeze" />
    </path>
  </svg>
);

/* ------------------------------------------------------------------ */
/* Sync illustration – rotating arrows around marketplaces             */
/* ------------------------------------------------------------------ */
export const SyncIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="si-ring" x1="0" x2="1">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" />
        <stop offset="100%" stopColor="hsl(330 81% 60%)" />
      </linearGradient>
    </defs>
    {/* Center hub */}
    <circle cx="240" cy="180" r="60" fill="white" stroke="url(#si-ring)" strokeWidth="3" />
    <text x="240" y="186" textAnchor="middle" fontFamily="Inter,system-ui" fontWeight="700" fontSize="18" fill="hsl(232 60% 18%)">Ctasis</text>
    {/* Orbit */}
    <g style={{ transformOrigin: "240px 180px" }}>
      <animateTransform attributeName="transform" type="rotate" from="0 240 180" to="360 240 180" dur="30s" repeatCount="indefinite" />
      <circle cx="240" cy="60" r="26" fill="hsl(226 71% 96%)" stroke="hsl(226 71% 50%)" />
      <text x="240" y="66" textAnchor="middle" fontSize="11" fontWeight="700" fill="hsl(226 71% 30%)">AMZ</text>
      <circle cx="380" cy="180" r="26" fill="hsl(330 81% 96%)" stroke="hsl(330 81% 60%)" />
      <text x="380" y="186" textAnchor="middle" fontSize="11" fontWeight="700" fill="hsl(330 81% 40%)">eBay</text>
      <circle cx="240" cy="300" r="26" fill="hsl(280 70% 96%)" stroke="hsl(280 70% 55%)" />
      <text x="240" y="306" textAnchor="middle" fontSize="11" fontWeight="700" fill="hsl(280 70% 35%)">Shop</text>
      <circle cx="100" cy="180" r="26" fill="hsl(226 71% 96%)" stroke="hsl(226 71% 50%)" />
      <text x="100" y="186" textAnchor="middle" fontSize="11" fontWeight="700" fill="hsl(226 71% 30%)">WMT</text>
    </g>
    {/* Connection arcs */}
    <circle cx="240" cy="180" r="120" fill="none" stroke="url(#si-ring)" strokeWidth="2" strokeDasharray="6 8" opacity="0.5" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Analytics illustration                                              */
/* ------------------------------------------------------------------ */
export const AnalyticsIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="ai-fill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" stopOpacity="0.4" />
        <stop offset="100%" stopColor="hsl(226 71% 50%)" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="440" height="320" rx="20" fill="white" stroke="hsl(220 15% 88%)" />
    {/* Axes */}
    <line x1="60" y1="280" x2="440" y2="280" stroke="hsl(220 15% 88%)" />
    <line x1="60" y1="60" x2="60" y2="280" stroke="hsl(220 15% 88%)" />
    {/* Area chart */}
    <path d="M60 240 L120 200 L180 220 L240 150 L300 170 L360 110 L420 130 L420 280 L60 280 Z" fill="url(#ai-fill)" />
    <path d="M60 240 L120 200 L180 220 L240 150 L300 170 L360 110 L420 130" stroke="hsl(226 71% 50%)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Dots */}
    {[[120,200],[180,220],[240,150],[300,170],[360,110],[420,130]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="5" fill="white" stroke="hsl(330 81% 60%)" strokeWidth="3"/>
    ))}
    {/* Legend pills */}
    <rect x="60" y="30" width="80" height="20" rx="10" fill="hsl(226 71% 96%)" />
    <text x="100" y="44" textAnchor="middle" fontSize="11" fontWeight="600" fill="hsl(226 71% 30%)">Revenue</text>
    <rect x="150" y="30" width="80" height="20" rx="10" fill="hsl(330 81% 96%)" />
    <text x="190" y="44" textAnchor="middle" fontSize="11" fontWeight="600" fill="hsl(330 81% 40%)">Orders</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* Globe / network illustration                                        */
/* ------------------------------------------------------------------ */
export const GlobeIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient id="gl-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" stopOpacity="0.15" />
        <stop offset="100%" stopColor="hsl(226 71% 50%)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="240" cy="180" r="160" fill="url(#gl-bg)" />
    <circle cx="240" cy="180" r="120" fill="none" stroke="hsl(226 71% 50%)" strokeWidth="1.5" opacity="0.5" />
    <ellipse cx="240" cy="180" rx="120" ry="48" fill="none" stroke="hsl(226 71% 50%)" strokeWidth="1.5" opacity="0.5" />
    <ellipse cx="240" cy="180" rx="60" ry="120" fill="none" stroke="hsl(226 71% 50%)" strokeWidth="1.5" opacity="0.5" />
    <ellipse cx="240" cy="180" rx="120" ry="120" fill="none" stroke="hsl(226 71% 50%)" strokeWidth="1.5" opacity="0.5" />
    {/* Pins */}
    {[[160,120],[300,140],[340,220],[200,260],[260,180]].map(([x,y],i)=>(
      <g key={i}>
        <circle cx={x} cy={y} r="6" fill="hsl(330 81% 60%)" />
        <circle cx={x} cy={y} r="6" fill="hsl(330 81% 60%)" opacity="0.4">
          <animate attributeName="r" from="6" to="22" dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" from="0.5" to="0" dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite"/>
        </circle>
      </g>
    ))}
  </svg>
);

/* ------------------------------------------------------------------ */
/* Story illustration – workflow                                       */
/* ------------------------------------------------------------------ */
export const WorkflowIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="30" y="60" width="120" height="80" rx="14" fill="hsl(226 71% 96%)" stroke="hsl(226 71% 50%)" />
    <text x="90" y="105" textAnchor="middle" fontWeight="700" fontSize="14" fill="hsl(226 71% 30%)">Listings</text>
    <rect x="180" y="120" width="120" height="80" rx="14" fill="hsl(280 70% 96%)" stroke="hsl(280 70% 55%)" />
    <text x="240" y="165" textAnchor="middle" fontWeight="700" fontSize="14" fill="hsl(280 70% 35%)">Ctasis</text>
    <rect x="330" y="60" width="120" height="80" rx="14" fill="hsl(330 81% 96%)" stroke="hsl(330 81% 60%)" />
    <text x="390" y="105" textAnchor="middle" fontWeight="700" fontSize="14" fill="hsl(330 81% 40%)">Orders</text>
    <rect x="180" y="220" width="120" height="60" rx="14" fill="white" stroke="hsl(220 15% 88%)" />
    <text x="240" y="256" textAnchor="middle" fontWeight="700" fontSize="13" fill="hsl(232 60% 18%)">Shipping</text>
    {/* Connectors */}
    <path d="M150 100 Q 165 100, 180 140" stroke="hsl(226 71% 50%)" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
    <path d="M330 100 Q 315 100, 300 140" stroke="hsl(330 81% 60%)" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
    <path d="M240 200 L240 220" stroke="hsl(280 70% 55%)" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
  </svg>
);

/* ------------------------------------------------------------------ */
/* Wave divider                                                        */
/* ------------------------------------------------------------------ */
export const WaveDivider = ({ flip = false, className = "" }: { flip?: boolean; className?: string }) => (
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`block w-full h-12 ${flip ? "rotate-180" : ""} ${className}`} aria-hidden>
    <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L1440 80 L0 80 Z" fill="currentColor" />
  </svg>
);
