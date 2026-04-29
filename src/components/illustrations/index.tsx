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
/* Shared diagram defs                                                 */
/* ------------------------------------------------------------------ */
const DiagramDefs = () => (
  <defs>
    <linearGradient id="g-blue" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#1e40af" />
      <stop offset="100%" stopColor="#1e3a8a" />
    </linearGradient>
    <linearGradient id="g-purple" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#6d28d9" />
      <stop offset="100%" stopColor="#4c1d95" />
    </linearGradient>
    <linearGradient id="g-emerald" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#047857" />
      <stop offset="100%" stopColor="#064e3b" />
    </linearGradient>
    <linearGradient id="g-orange" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#c2410c" />
      <stop offset="100%" stopColor="#9a3412" />
    </linearGradient>
    <linearGradient id="g-pink" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#db2777" />
      <stop offset="100%" stopColor="#9d174d" />
    </linearGradient>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#3b82f6" />
    </marker>
    <marker id="arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#8b5cf6" />
    </marker>
    <marker id="arrow-emerald" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#10b981" />
    </marker>
  </defs>
);

/* ------------------------------------------------------------------ */
/* SellerHeroMockup – SellerSnap-inspired product table dashboard      */
/* Light, airy, with KPI row over a "listings" table behind it         */
/* ------------------------------------------------------------------ */
export const SellerHeroMockup = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 760 520" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="shm-card" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#fbfaff" />
      </linearGradient>
      <linearGradient id="shm-accent" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" />
        <stop offset="100%" stopColor="hsl(330 81% 60%)" />
      </linearGradient>
      <filter id="shm-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feGaussianBlur stdDeviation="14" />
        <feOffset dy="10" />
        <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    {/* Back browser frame – the "listings table" */}
    <g filter="url(#shm-shadow)">
      <rect x="40" y="40" width="680" height="440" rx="20" fill="url(#shm-card)" stroke="hsl(220 20% 92%)" />
      {/* top bar */}
      <circle cx="64" cy="64" r="4.5" fill="#ef4444" />
      <circle cx="80" cy="64" r="4.5" fill="#f59e0b" />
      <circle cx="96" cy="64" r="4.5" fill="#10b981" />
      <rect x="120" y="56" width="140" height="16" rx="8" fill="hsl(226 71% 96%)" />
      <text x="190" y="68" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="9" fontWeight="700" fill="hsl(226 71% 40%)">CTASIS · Listings</text>
      {/* tabs */}
      <text x="290" y="68" fontFamily="Inter,system-ui" fontSize="11" fontWeight="600" fill="hsl(226 71% 40%)">Overview</text>
      <text x="360" y="68" fontFamily="Inter,system-ui" fontSize="11" fill="#64748b">Listings</text>
      <text x="420" y="68" fontFamily="Inter,system-ui" fontSize="11" fill="#64748b">Settings</text>
      <rect x="284" y="76" width="56" height="2" rx="1" fill="hsl(226 71% 40%)" />
      {/* status pill */}
      <rect x="630" y="50" width="68" height="22" rx="11" fill="hsl(150 70% 92%)" />
      <circle cx="644" cy="61" r="3" fill="hsl(150 70% 40%)" />
      <text x="685" y="65" textAnchor="end" fontFamily="Inter,system-ui" fontSize="10" fontWeight="700" fill="hsl(150 70% 30%)">In stock</text>

      {/* Filter chips */}
      <rect x="64" y="100" width="100" height="24" rx="12" fill="hsl(220 20% 96%)" />
      <text x="114" y="116" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fill="#475569">This month ▾</text>
      <rect x="172" y="100" width="120" height="24" rx="12" fill="hsl(220 20% 96%)" />
      <text x="232" y="116" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fill="#475569">Compared to ▾</text>

      {/* Skeleton table rows behind */}
      {[170, 200, 230, 260, 290, 320, 350, 380, 410, 440].map((y, i) => (
        <g key={i} opacity={0.6 - i * 0.04}>
          <rect x="64" y={y} width="640" height="14" rx="7" fill={i % 2 ? "hsl(220 20% 97%)" : "hsl(220 20% 94%)"} />
        </g>
      ))}
    </g>

    {/* Floating product KPI card – the hero element */}
    <g filter="url(#shm-shadow)" style={{ transformOrigin: "380px 260px" }}>
      <rect x="80" y="200" width="640" height="110" rx="16" fill="white" stroke="hsl(220 20% 92%)" />
      {/* Product thumb */}
      <rect x="100" y="220" width="70" height="70" rx="12" fill="hsl(226 71% 95%)" />
      <circle cx="135" cy="255" r="22" fill="hsl(226 71% 60%)" />
      <circle cx="135" cy="255" r="14" fill="hsl(226 71% 80%)" />
      <text x="100" y="305" fontFamily="Inter,system-ui" fontSize="8" fill="#94a3b8">SKU: 8632010</text>

      {/* Column headers */}
      <text x="195" y="225" fontFamily="Inter,system-ui" fontSize="9" fontWeight="600" fill="#94a3b8" letterSpacing="0.5">PRODUCT</text>
      <text x="195" y="248" fontFamily="Inter,system-ui" fontSize="14" fontWeight="700" fill="#0f172a">Wireless Speaker</text>
      <rect x="195" y="258" width="58" height="16" rx="8" fill="hsl(330 81% 95%)" />
      <text x="224" y="269" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="9" fontWeight="700" fill="hsl(330 81% 45%)">Repricer ON</text>

      {/* Platform pills */}
      <text x="290" y="225" fontFamily="Inter,system-ui" fontSize="9" fontWeight="600" fill="#94a3b8" letterSpacing="0.5">PLATFORM</text>
      <rect x="290" y="234" width="56" height="22" rx="6" fill="#0f172a" />
      <text x="318" y="249" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="9" fontWeight="700" fill="white">amazon</text>
      <rect x="290" y="262" width="56" height="22" rx="6" fill="hsl(210 100% 50%)" />
      <text x="318" y="277" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="9" fontWeight="700" fill="white">walmart</text>

      {/* KPI columns */}
      {[
        { x: 365, label: "ORDERS", value: "850", delta: "+10%" },
        { x: 445, label: "BUY BOX", value: "82%", delta: "+9%" },
        { x: 525, label: "REVENUE", value: "$21.5k", delta: "+19.4%" },
        { x: 605, label: "PROFIT", value: "$6.8k", delta: "+23.6%" },
      ].map((k, i) => (
        <g key={i}>
          <text x={k.x} y="225" fontFamily="Inter,system-ui" fontSize="9" fontWeight="600" fill="#94a3b8" letterSpacing="0.5">{k.label}</text>
          <text x={k.x} y="252" fontFamily="Inter,system-ui" fontSize="18" fontWeight="800" fill="#0f172a">{k.value}</text>
          <text x={k.x} y="275" fontFamily="Inter,system-ui" fontSize="10" fontWeight="700" fill="hsl(150 70% 40%)">▲ {k.delta}</text>
        </g>
      ))}

      {/* Margin column */}
      <text x="685" y="225" fontFamily="Inter,system-ui" fontSize="9" fontWeight="600" fill="#94a3b8" letterSpacing="0.5">MARGIN</text>
      <text x="685" y="252" fontFamily="Inter,system-ui" fontSize="18" fontWeight="800" fill="url(#shm-accent)">31.6%</text>
      <text x="685" y="275" fontFamily="Inter,system-ui" fontSize="10" fontWeight="700" fill="hsl(150 70% 40%)">▲ +3.6%</text>

      {/* Subtle pulse ring on Repricer ON */}
      <circle cx="200" cy="266" r="3" fill="hsl(330 81% 60%)">
        <animate attributeName="r" values="3;7;3" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

/* ------------------------------------------------------------------ */
/* Hero dashboard – kept                                               */
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
    <rect x="20" y="20" width="560" height="380" rx="20" fill="url(#dm-bg)" stroke="hsl(220 15% 88%)" />
    <circle cx="46" cy="46" r="5" fill="#ef4444" />
    <circle cx="62" cy="46" r="5" fill="#f59e0b" />
    <circle cx="78" cy="46" r="5" fill="#10b981" />
    <rect x="120" y="38" width="200" height="16" rx="8" fill="hsl(220 20% 96%)" />
    <rect x="40" y="80" width="120" height="300" rx="12" fill="hsl(226 71% 96%)" />
    <rect x="56" y="100" width="88" height="10" rx="5" fill="hsl(226 71% 50%)" />
    <rect x="56" y="124" width="64" height="8" rx="4" fill="hsl(226 30% 80%)" />
    <rect x="56" y="144" width="80" height="8" rx="4" fill="hsl(226 30% 80%)" />
    <rect x="56" y="164" width="56" height="8" rx="4" fill="hsl(226 30% 80%)" />
    <rect x="56" y="184" width="72" height="8" rx="4" fill="hsl(226 30% 80%)" />
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
    <rect x="180" y="170" width="384" height="210" rx="14" fill="white" stroke="hsl(220 15% 92%)" />
    <g style={{ transformOrigin: "200px 360px" }}>
      {[[220, 80], [260, 120], [300, 60], [340, 140], [380, 100], [420, 170], [460, 130], [500, 180], [540, 110]].map(([x, h], i) => (
        <rect key={i} x={x} y={360 - h} width="22" height={h} rx="6"
          fill={i % 2 === 0 ? "url(#dm-bar)" : "url(#dm-bar2)"}>
          <animate attributeName="height" from="0" to={h} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
          <animate attributeName="y" from="360" to={360 - h} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
        </rect>
      ))}
    </g>
    <path d="M200 260 Q 240 220, 280 240 T 360 220 T 440 200 T 540 180" stroke="hsl(330 81% 60%)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="600" strokeDashoffset="0">
      <animate attributeName="stroke-dashoffset" from="600" to="0" dur="2.2s" fill="freeze" />
    </path>
  </svg>
);

/* ------------------------------------------------------------------ */
/* SyncIllustration – Channel-flow diagram (Listings <-> Ctasis <-> Orders / Shipping)
   Styled after the dark "How Ctasis connects your channels" reference  */
/* ------------------------------------------------------------------ */
export const SyncIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 720 520" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <DiagramDefs />
    {/* Card */}
    <rect x="10" y="10" width="700" height="500" rx="22" fill="#0f172a" />
    {/* Title */}
    <g transform="translate(40,40)">
      <rect width="92" height="22" rx="11" fill="#312e81" />
      <text x="46" y="15" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight="700" fill="#c7d2fe" letterSpacing="1.5">LOGISTICS</text>
    </g>
    <text x="40" y="100" fontFamily="Inter,system-ui" fontSize="22" fontWeight="700" fill="#f8fafc">How Ctasis connects your channels</text>
    <text x="40" y="124" fontFamily="Inter,system-ui" fontSize="12" fill="#94a3b8">Real-time sync between Listings, Orders &amp; Shipping — one engine.</text>

    {/* Listings node */}
    <g>
      <rect x="50" y="220" width="180" height="92" rx="14" fill="url(#g-blue)" stroke="#3b82f6" />
      <circle cx="68" cy="238" r="4" fill="#60a5fa" />
      <text x="140" y="262" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight="700" fill="white">Listings</text>
      <text x="140" y="284" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11" fill="#bfdbfe">Product catalogue</text>
    </g>
    {/* Ctasis hub */}
    <g>
      <rect x="280" y="220" width="180" height="92" rx="14" fill="url(#g-purple)" stroke="#8b5cf6" />
      <text x="370" y="262" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight="700" fill="white">Ctasis</text>
      <text x="370" y="284" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11" fill="#ddd6fe">Central sync engine</text>
    </g>
    {/* Orders */}
    <g>
      <rect x="510" y="220" width="180" height="92" rx="14" fill="url(#g-emerald)" stroke="#10b981" />
      <circle cx="528" cy="238" r="4" fill="#34d399" />
      <text x="600" y="262" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight="700" fill="white">Orders</text>
      <text x="600" y="284" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11" fill="#a7f3d0">Purchase records</text>
    </g>
    {/* Shipping */}
    <g>
      <rect x="280" y="380" width="180" height="92" rx="14" fill="url(#g-orange)" stroke="#fb923c" />
      <circle cx="298" cy="398" r="4" fill="#fb923c" />
      <text x="370" y="422" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight="700" fill="white">Shipping</text>
      <text x="370" y="444" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11" fill="#fed7aa">Fulfilment &amp; tracking</text>
    </g>

    {/* Arrows */}
    <line x1="230" y1="255" x2="278" y2="255" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
    <text x="254" y="245" textAnchor="middle" fontSize="10" fill="#94a3b8">Stock in</text>
    <line x1="278" y1="280" x2="232" y2="280" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-purple)" />
    <text x="254" y="298" textAnchor="middle" fontSize="10" fill="#94a3b8">← Updates</text>

    <line x1="510" y1="255" x2="462" y2="255" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
    <text x="486" y="245" textAnchor="middle" fontSize="10" fill="#94a3b8">Orders in</text>
    <line x1="462" y1="280" x2="508" y2="280" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-purple)" />
    <text x="486" y="298" textAnchor="middle" fontSize="10" fill="#94a3b8">→ Status</text>

    <line x1="370" y1="312" x2="370" y2="378" stroke="#fb923c" strokeWidth="2" markerEnd="url(#arrow-blue)" />
    <line x1="386" y1="378" x2="386" y2="312" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" />
    <text x="430" y="345" fontSize="10" fill="#94a3b8">→ Dispatch</text>
    <text x="430" y="360" fontSize="10" fill="#94a3b8">← Tracking</text>

    {/* live activity dot */}
    <circle cx="370" cy="220" r="5" fill="#a78bfa">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/* ------------------------------------------------------------------ */
/* AnalyticsIllustration – BI dashboard mockup with bars + KPI cards   */
/* ------------------------------------------------------------------ */
export const AnalyticsIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <DiagramDefs />
    <rect x="10" y="10" width="540" height="380" rx="18" fill="white" stroke="#e2e8f0" />
    {/* Header chip */}
    <rect x="30" y="30" width="140" height="22" rx="11" fill="#ede9fe" />
    <text x="100" y="45" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6d28d9" letterSpacing="1.5">AI &amp; ANALYTICS</text>
    <text x="30" y="80" fontSize="18" fontWeight="700" fill="#0f172a">Performance Insights</text>
    {/* KPI cards */}
    {[
      { x: 30, label: "GMV", val: "$12.4M", tone: "#1e40af" },
      { x: 200, label: "Orders", val: "84,210", tone: "#6d28d9" },
      { x: 370, label: "ROAS", val: "4.8×", tone: "#db2777" },
    ].map((k, i) => (
      <g key={i}>
        <rect x={k.x} y={100} width="160" height="74" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
        <text x={k.x + 16} y={124} fontSize="11" fontWeight="600" fill="#64748b">{k.label}</text>
        <text x={k.x + 16} y={156} fontSize="22" fontWeight="800" fill={k.tone}>{k.val}</text>
      </g>
    ))}
    {/* Chart area */}
    <rect x="30" y="194" width="500" height="176" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
    <line x1="50" y1="340" x2="510" y2="340" stroke="#cbd5e1" />
    {[60, 110, 70, 140, 100, 160, 120, 180, 140, 200].map((h, i) => (
      <g key={i}>
        <rect x={60 + i * 46} y={340 - h} width="18" height={h} rx="4" fill="url(#g-purple)">
          <animate attributeName="height" from="0" to={h} dur={`${0.5 + i * 0.07}s`} fill="freeze" />
          <animate attributeName="y" from="340" to={340 - h} dur={`${0.5 + i * 0.07}s`} fill="freeze" />
        </rect>
        <rect x={82 + i * 46} y={340 - h * 0.7} width="18" height={h * 0.7} rx="4" fill="url(#g-pink)" opacity="0.85">
          <animate attributeName="height" from="0" to={h * 0.7} dur={`${0.6 + i * 0.07}s`} fill="freeze" />
          <animate attributeName="y" from="340" to={340 - h * 0.7} dur={`${0.6 + i * 0.07}s`} fill="freeze" />
        </rect>
      </g>
    ))}
    {/* Legend */}
    <circle cx="50" cy="216" r="4" fill="#6d28d9" />
    <text x="60" y="220" fontSize="10" fill="#475569">BigQuery</text>
    <circle cx="120" cy="216" r="4" fill="#db2777" />
    <text x="130" y="220" fontSize="10" fill="#475569">Power BI</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* GlobeIllustration – globe with arc connections to marketplaces      */
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
    {[[160, 120, "IN"], [300, 140, "US"], [340, 220, "EU"], [200, 260, "UK"], [260, 180, "SG"]].map(([x, y, l], i) => (
      <g key={i}>
        <circle cx={x as number} cy={y as number} r="6" fill="hsl(330 81% 60%)" />
        <circle cx={x as number} cy={y as number} r="6" fill="hsl(330 81% 60%)" opacity="0.4">
          <animate attributeName="r" from="6" to="22" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.5" to="0" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
        </circle>
        <text x={(x as number) + 10} y={(y as number) - 8} fontSize="9" fontWeight="700" fill="#475569">{l}</text>
      </g>
    ))}
  </svg>
);

/* ------------------------------------------------------------------ */
/* WorkflowIllustration – clean 4-step flow with arrows                */
/* ------------------------------------------------------------------ */
export const WorkflowIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 220" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <DiagramDefs />
    {[
      { x: 20, n: "1", t: "Order capture", c: "url(#g-blue)" },
      { x: 170, n: "2", t: "Route & assign", c: "url(#g-purple)" },
      { x: 320, n: "3", t: "Fulfil & ship", c: "url(#g-pink)" },
      { x: 470, n: "4", t: "Track & close", c: "url(#g-emerald)" },
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y="60" width="110" height="100" rx="14" fill="white" stroke="#e2e8f0" />
        <circle cx={s.x + 55} cy="92" r="16" fill={s.c} />
        <text x={s.x + 55} y="97" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">{s.n}</text>
        <text x={s.x + 55} y="135" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">{s.t.split(" ")[0]}</text>
        <text x={s.x + 55} y="150" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">{s.t.split(" ").slice(1).join(" ")}</text>
        {i < 3 && <line x1={s.x + 112} y1="110" x2={s.x + 168} y2="110" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-purple)" />}
      </g>
    ))}
    <text x="300" y="200" textAnchor="middle" fontSize="11" fill="#64748b">Unified across Amazon · Flipkart · Meesho · Walmart · Shopify</text>
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

/* ------------------------------------------------------------------ */
/* NeuralIllustration – ML pipeline (inputs → layers → outputs)        */
/* Styled after the AI Automation Engine reference card                */
/* ------------------------------------------------------------------ */
export const NeuralIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <DiagramDefs />
    <rect x="10" y="10" width="540" height="300" rx="16" fill="#faf5ff" stroke="#e9d5ff" />
    {/* Inputs */}
    {["Data", "Price", "Stock", "Trend"].map((l, i) => (
      <g key={l}>
        <rect x="40" y={50 + i * 56} width="80" height="36" rx="8" fill="white" stroke="#a78bfa" />
        <text x="80" y={73 + i * 56} textAnchor="middle" fontSize="12" fontWeight="700" fill="#6d28d9">{l}</text>
        {[0, 1, 2].map((j) => (
          <line key={j} x1="120" y1={68 + i * 56} x2="240" y2={90 + j * 70} stroke="#c4b5fd" strokeWidth="1" />
        ))}
      </g>
    ))}
    {/* Hidden layer */}
    {[0, 1, 2].map((j) => (
      <g key={j}>
        <rect x="240" y={70 + j * 70} width="60" height="40" rx="10" fill="url(#g-purple)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur={`${1.5 + j * 0.3}s`} repeatCount="indefinite" />
        </rect>
        {[0, 1, 2].map((k) => (
          <line key={k} x1="300" y1={90 + j * 70} x2="400" y2={80 + k * 70} stroke="#c4b5fd" strokeWidth="1" />
        ))}
      </g>
    ))}
    {/* Outputs */}
    {["Price opt.", "Forecast", "Restock"].map((l, i) => (
      <g key={l}>
        <rect x="400" y={60 + i * 70} width="120" height="40" rx="10" fill="white" stroke="#db2777" />
        <text x="460" y={85 + i * 70} textAnchor="middle" fontSize="12" fontWeight="700" fill="#9d174d">{l}</text>
      </g>
    ))}
    {/* Footer bar */}
    <rect x="40" y="270" width="380" height="8" rx="4" fill="#ede9fe" />
    <rect x="40" y="270" width="340" height="8" rx="4" fill="url(#g-purple)" />
    <text x="430" y="278" fontSize="11" fontWeight="700" fill="#6d28d9">90%+ automation</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* InfraIllustration – Stacked cloud architecture (CDN → DB)            */
/* Styled after the AWS Cloud Infrastructure reference card             */
/* ------------------------------------------------------------------ */
export const InfraIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 560 380" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <DiagramDefs />
    <rect x="10" y="10" width="540" height="360" rx="16" fill="#ecfdf5" stroke="#a7f3d0" />
    <text x="30" y="40" fontSize="11" fontWeight="700" fill="#047857" letterSpacing="2">AWS · CLOUD &amp; HOSTING</text>

    {[
      { y: 60, label: "CDN / Load balancer", tone: "#10b981" },
      { y: 110, label: "Auto-scaling compute (EC2 + Lambda)", tone: "#059669" },
      { y: 160, label: "Managed database (RDS + DynamoDB)", tone: "#047857" },
      { y: 210, label: "PostgreSQL + MongoDB · isolated pods", tone: "#065f46" },
      { y: 260, label: "Object storage (S3) · A+ content", tone: "#064e3b" },
    ].map((row, i) => (
      <g key={i}>
        <rect x="60" y={row.y} width="440" height="38" rx="10" fill={row.tone} />
        <text x="280" y={row.y + 24} textAnchor="middle" fontSize="13" fontWeight="700" fill="white">{row.label}</text>
      </g>
    ))}

    {/* Region pills */}
    <rect x="60" y="312" width="120" height="32" rx="16" fill="white" stroke="#10b981" />
    <text x="120" y="332" textAnchor="middle" fontSize="12" fontWeight="700" fill="#047857">India</text>
    <rect x="220" y="312" width="120" height="32" rx="16" fill="url(#g-emerald)" />
    <text x="280" y="332" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">99.99% Uptime SLA</text>
    <rect x="380" y="312" width="120" height="32" rx="16" fill="white" stroke="#10b981" />
    <text x="440" y="332" textAnchor="middle" fontSize="12" fontWeight="700" fill="#047857">USA · EU</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* MarketplaceConnectorIllustration – Our Platform <-> SP-API <-> AMZ  */
/* Styled after the Amazon SP-API Integration reference card            */
/* ------------------------------------------------------------------ */
export const MarketplaceConnectorIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <DiagramDefs />
    <rect x="10" y="10" width="540" height="300" rx="16" fill="#eff6ff" stroke="#bfdbfe" />
    <text x="180" y="50" fontSize="11" fontWeight="700" fill="#1e40af" letterSpacing="1">Real-time bidirectional sync</text>
    <line x1="180" y1="58" x2="380" y2="58" stroke="#3b82f6" strokeWidth="2" />

    {/* Three nodes */}
    {[
      { x: 50, label1: "Our", label2: "Platform", fill: "white", stroke: "#3b82f6", text: "#1e40af" },
      { x: 220, label1: "SP-API", label2: "connector", fill: "url(#g-blue)", stroke: "#1e3a8a", text: "white" },
      { x: 390, label1: "Amazon", label2: "Marketplace", fill: "#fef3c7", stroke: "#f59e0b", text: "#92400e" },
    ].map((n, i) => (
      <g key={i}>
        <rect x={n.x} y="80" width="120" height="80" rx="12" fill={n.fill} stroke={n.stroke} strokeWidth="2" />
        <text x={n.x + 60} y="115" textAnchor="middle" fontSize="14" fontWeight="800" fill={n.text}>{n.label1}</text>
        <text x={n.x + 60} y="135" textAnchor="middle" fontSize="11" fontWeight="600" fill={n.text}>{n.label2}</text>
      </g>
    ))}
    {/* Arrows */}
    <line x1="170" y1="110" x2="218" y2="110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
    <line x1="218" y1="130" x2="170" y2="130" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow-blue)" />
    <line x1="340" y1="110" x2="388" y2="110" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-blue)" />
    <line x1="388" y1="130" x2="340" y2="130" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow-blue)" />

    {/* Pills */}
    {["Orders", "Inventory", "Pricing", "Reports", "Returns"].map((p, i) => (
      <g key={p}>
        <rect x={40 + i * 100} y="220" width="86" height="28" rx="14" fill="white" stroke="#bfdbfe" />
        <text x={83 + i * 100} y="238" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e40af">{p}</text>
      </g>
    ))}
    <text x="280" y="285" textAnchor="middle" fontSize="11" fill="#475569">In-house built &amp; operated · zero manual intervention</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* InventoryIllustration – multi-warehouse grid + forecast              */
/* Styled after the Inventory Management reference card                 */
/* ------------------------------------------------------------------ */
export const InventoryIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <DiagramDefs />
    <rect x="10" y="10" width="540" height="300" rx="16" fill="#eff6ff" stroke="#bfdbfe" />
    {/* SKU grid */}
    {Array.from({ length: 12 }).map((_, i) => {
      const c = i % 4, r = Math.floor(i / 4);
      const fills = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];
      return (
        <g key={i}>
          <rect x={40 + c * 80} y={50 + r * 64} width="64" height="48" rx="8" fill="white" stroke="#bfdbfe" />
          {[0, 1, 2].map((b) => (
            <rect key={b} x={50 + c * 80} y={62 + r * 64 + b * 9} width={30 + ((i + b) % 4) * 6} height="5" rx="2" fill={fills[(i + b) % 4]} opacity={0.55 + b * 0.15} />
          ))}
        </g>
      );
    })}
    {/* Forecast chart */}
    <rect x="380" y="50" width="140" height="176" rx="10" fill="white" stroke="#bfdbfe" />
    <text x="394" y="68" fontSize="10" fontWeight="700" fill="#475569">Forecast</text>
    <polyline points="394,200 414,180 434,170 454,140 474,120 494,90" stroke="#1e40af" strokeWidth="2.5" fill="none" />
    <polyline points="394,210 414,200 434,195 454,180 474,170 494,150" stroke="#db2777" strokeWidth="2" strokeDasharray="3 3" fill="none" />
    <text x="394" y="220" fontSize="9" fill="#64748b">Demand</text>

    {/* Warehouse labels */}
    <text x="72" y="248" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e40af">India WH</text>
    <text x="232" y="248" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e40af">USA WH</text>
    {/* Auto-reorder pill */}
    <rect x="40" y="262" width="160" height="32" rx="16" fill="url(#g-blue)" />
    <text x="120" y="282" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">Auto-reorder active</text>
    <rect x="220" y="262" width="180" height="32" rx="16" fill="white" stroke="#3b82f6" />
    <text x="310" y="282" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e40af">Live multi-warehouse sync</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* TimelineIllustration – Our evolution journey arrow                   */
/* Styled after the "Cross-Border Foundation" reference                 */
/* ------------------------------------------------------------------ */
export const TimelineIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 240" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <DiagramDefs />
    <rect x="10" y="10" width="460" height="220" rx="16" fill="#faf5ff" stroke="#e9d5ff" />
    {/* Globe */}
    <circle cx="240" cy="120" r="58" fill="none" stroke="#6d28d9" strokeWidth="2" />
    <ellipse cx="240" cy="120" rx="58" ry="22" fill="none" stroke="#6d28d9" strokeWidth="1.5" />
    <ellipse cx="240" cy="120" rx="22" ry="58" fill="none" stroke="#6d28d9" strokeWidth="1.5" />
    <line x1="182" y1="120" x2="298" y2="120" stroke="#6d28d9" strokeWidth="1.5" />
    {/* Arrow trajectory */}
    <path d="M180 170 Q 240 40, 330 70" stroke="url(#g-pink)" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrow-purple)" />
    <text x="240" y="218" textAnchor="middle" fontSize="12" fontWeight="700" fill="#6d28d9">Cross-Border Foundation</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* RepricerIllustration – auto-repricer with min/max margin              */
/* ------------------------------------------------------------------ */
export const RepricerIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 560 280" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <DiagramDefs />
    <rect x="10" y="10" width="540" height="260" rx="16" fill="white" stroke="#e2e8f0" />
    <text x="30" y="40" fontSize="13" fontWeight="800" fill="#0f172a">Auto-Repricer · live</text>
    {/* Track */}
    <rect x="40" y="120" width="480" height="8" rx="4" fill="#f1f5f9" />
    {/* Min / Max range */}
    <rect x="120" y="116" width="320" height="16" rx="8" fill="url(#g-purple)" opacity="0.25" />
    <line x1="120" y1="100" x2="120" y2="148" stroke="#6d28d9" strokeWidth="2" />
    <text x="120" y="92" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6d28d9">Min $18.40</text>
    <line x1="440" y1="100" x2="440" y2="148" stroke="#db2777" strokeWidth="2" />
    <text x="440" y="92" textAnchor="middle" fontSize="11" fontWeight="700" fill="#9d174d">Max $34.90</text>
    {/* Current price */}
    <circle cx="290" cy="124" r="12" fill="url(#g-pink)">
      <animate attributeName="cx" values="200;360;240;300;290" dur="6s" repeatCount="indefinite" />
    </circle>
    <text x="290" y="172" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0f172a">$24.90 · winning Buy Box</text>
    <text x="290" y="190" textAnchor="middle" fontSize="11" fill="#64748b">Adjusts every 60s based on margin &amp; competitor signals</text>
    {/* Marketplace pills */}
    {["Amazon", "Flipkart", "eBay", "Walmart"].map((m, i) => (
      <g key={m}>
        <rect x={40 + i * 130} y="220" width="110" height="28" rx="14" fill="#f8fafc" stroke="#e2e8f0" />
        <text x={95 + i * 130} y="238" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">{m}</text>
      </g>
    ))}
  </svg>
);

/* ------------------------------------------------------------------ */
/* OrderFlowDiagram – Order → Pick → Pack → Ship → Delivered           */
/* ------------------------------------------------------------------ */
export const OrderFlowDiagram = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 720 360" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <DiagramDefs />
    <rect x="10" y="10" width="700" height="340" rx="20" fill="white" stroke="#e2e8f0" />
    <text x="40" y="46" fontFamily="Inter,system-ui" fontSize="14" fontWeight="800" fill="#0f172a">Order lifecycle · automated end-to-end</text>
    <text x="40" y="66" fontFamily="Inter,system-ui" fontSize="11" fill="#64748b">From marketplace ping to doorstep delivery — zero clicks.</text>

    {[
      { x: 40, label: "Order received", sub: "Amazon SP-API", grad: "url(#g-blue)", color: "#1e40af" },
      { x: 180, label: "Inventory check", sub: "Multi-WH route", grad: "url(#g-purple)", color: "#6d28d9" },
      { x: 320, label: "Pick & pack", sub: "WMS barcode", grad: "url(#g-pink)", color: "#9d174d" },
      { x: 460, label: "Label + ship", sub: "Best courier rate", grad: "url(#g-orange)", color: "#9a3412" },
      { x: 600, label: "Tracked delivery", sub: "Customer notified", grad: "url(#g-blue)", color: "#1e40af" },
    ].map((s, i, arr) => (
      <g key={i}>
        <rect x={s.x} y={120} width={110} height={88} rx={14} fill={s.grad} />
        <circle cx={s.x + 22} cy={142} r={10} fill="white" opacity="0.25" />
        <text x={s.x + 22} y={146} textAnchor="middle" fontSize={11} fontWeight={800} fill="white">{i + 1}</text>
        <text x={s.x + 55} y={172} textAnchor="middle" fontSize={11} fontWeight={700} fill="white">{s.label}</text>
        <text x={s.x + 55} y={190} textAnchor="middle" fontSize={9} fill="white" opacity={0.85}>{s.sub}</text>
        {i < arr.length - 1 && (
          <g>
            <line x1={s.x + 110} y1={164} x2={arr[i + 1].x - 4} y2={164}
                  stroke="#cbd5e1" strokeWidth={2} strokeDasharray="4 4" markerEnd="url(#arrow-purple)" />
          </g>
        )}
      </g>
    ))}

    {/* Bottom timeline scale */}
    <line x1={40} y1={260} x2={680} y2={260} stroke="#e2e8f0" strokeWidth={1.5} />
    {["0s", "2s", "30s", "5m", "Out for delivery"].map((t, i) => (
      <g key={t}>
        <circle cx={68 + i * 152} cy={260} r={5} fill="white" stroke="#6d28d9" strokeWidth={2} />
        <text x={68 + i * 152} y={282} textAnchor="middle" fontSize={10} fontWeight={700} fill="#475569">{t}</text>
      </g>
    ))}
    <text x={360} y={320} textAnchor="middle" fontSize={11} fill="#94a3b8">Median order processing time across 50,000+ stores</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* PricingCalculatorMockup – seller-facing ROI / margin calc            */
/* ------------------------------------------------------------------ */
export const PricingCalculatorMockup = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="pc-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" />
        <stop offset="100%" stopColor="hsl(330 81% 60%)" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="520" height="360" rx="20" fill="white" stroke="#e2e8f0" />
    <text x="44" y="56" fontSize="13" fontWeight="800" fill="#0f172a">ROI calculator · projected impact</text>
    <text x="44" y="76" fontSize="11" fill="#64748b">Based on your channels, SKUs and average order value.</text>

    {/* Inputs panel */}
    <rect x="44" y="100" width="220" height="240" rx="14" fill="#f8fafc" stroke="#e2e8f0" />
    {[
      { y: 124, label: "Marketplaces", value: "5" },
      { y: 168, label: "Monthly orders", value: "12,400" },
      { y: 212, label: "Avg. order value", value: "$48.20" },
      { y: 256, label: "Current margin", value: "18%" },
    ].map((f) => (
      <g key={f.label}>
        <text x={60} y={f.y + 4} fontSize={10} fontWeight={600} fill="#64748b">{f.label.toUpperCase()}</text>
        <rect x={60} y={f.y + 12} width={188} height={28} rx={8} fill="white" stroke="#cbd5e1" />
        <text x={70} y={f.y + 30} fontSize={12} fontWeight={700} fill="#0f172a">{f.value}</text>
      </g>
    ))}
    <rect x={60} y={306} width={188} height={28} rx={14} fill="url(#pc-grad)" />
    <text x={154} y={324} textAnchor="middle" fontSize={11} fontWeight={700} fill="white">Recalculate →</text>

    {/* Output cards */}
    <g>
      <rect x={284} y={100} width={232} height={75} rx={14} fill="hsl(226 71% 96%)" stroke="hsl(226 71% 88%)" />
      <text x={300} y={122} fontSize={10} fontWeight={700} fill="hsl(226 71% 40%)" letterSpacing="0.5">PROJECTED MARGIN</text>
      <text x={300} y={156} fontSize={28} fontWeight={800} fill="hsl(226 71% 35%)">+9.4%</text>
      <text x={420} y={156} fontSize={11} fill="#475569">in 90 days</text>

      <rect x={284} y={185} width={232} height={75} rx={14} fill="hsl(330 81% 97%)" stroke="hsl(330 81% 90%)" />
      <text x={300} y={207} fontSize={10} fontWeight={700} fill="hsl(330 81% 45%)" letterSpacing="0.5">EXTRA REVENUE</text>
      <text x={300} y={241} fontSize={28} fontWeight={800} fill="hsl(330 81% 40%)">$54.8k</text>
      <text x={430} y={241} fontSize={11} fill="#475569">/ month</text>

      <rect x={284} y={270} width={232} height={70} rx={14} fill="#0f172a" />
      <text x={300} y={292} fontSize={10} fontWeight={700} fill="#a78bfa" letterSpacing="0.5">PAYBACK PERIOD</text>
      <text x={300} y={324} fontSize={24} fontWeight={800} fill="white">18 days</text>
      <text x={420} y={324} fontSize={11} fill="#94a3b8">to break even</text>
    </g>
  </svg>
);

/* ------------------------------------------------------------------ */
/* ContactMapIllustration – global presence map with hubs              */
/* ------------------------------------------------------------------ */
export const ContactMapIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="cm-bg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#fdf2f8" />
        <stop offset="100%" stopColor="#eff6ff" />
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="580" height="340" rx="20" fill="url(#cm-bg)" stroke="#e2e8f0" />
    {/* Dotted world grid */}
    {Array.from({ length: 18 }).map((_, r) =>
      Array.from({ length: 30 }).map((_, c) => {
        const cx = 30 + c * 19, cy = 50 + r * 16;
        // crude continent mask
        const land =
          (c > 3 && c < 11 && r > 2 && r < 9) || // americas
          (c > 13 && c < 19 && r > 1 && r < 7) || // EU
          (c > 18 && c < 27 && r > 4 && r < 12) || // asia
          (c > 14 && c < 19 && r > 8 && r < 13) || // africa
          (c > 23 && c < 28 && r > 11 && r < 15);  // oceania
        return (
          <circle key={`${r}-${c}`} cx={cx} cy={cy} r={1.6}
                  fill={land ? "#6366f1" : "#cbd5e1"} opacity={land ? 0.7 : 0.35} />
        );
      })
    )}
    {/* Hub pins */}
    {[
      { x: 130, y: 180, label: "San Francisco" },
      { x: 290, y: 130, label: "London" },
      { x: 360, y: 175, label: "Ahmedabad HQ" },
      { x: 460, y: 200, label: "Singapore" },
      { x: 500, y: 270, label: "Sydney" },
    ].map((h) => (
      <g key={h.label}>
        <circle cx={h.x} cy={h.y} r={14} fill="hsl(330 81% 60%)" opacity={0.2}>
          <animate attributeName="r" values="10;22;10" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx={h.x} cy={h.y} r={6} fill="hsl(330 81% 55%)" stroke="white" strokeWidth={2} />
        <rect x={h.x + 10} y={h.y - 18} width={h.label.length * 6.5 + 12} height={20} rx={10} fill="white" stroke="#e2e8f0" />
        <text x={h.x + 16} y={h.y - 4} fontSize={10} fontWeight={700} fill="#0f172a">{h.label}</text>
      </g>
    ))}
    {/* Arc connections */}
    <path d="M130 180 Q 220 60, 360 175" stroke="hsl(226 71% 50%)" strokeWidth={1.5} fill="none" strokeDasharray="4 4" opacity={0.6} />
    <path d="M360 175 Q 420 90, 460 200" stroke="hsl(330 81% 55%)" strokeWidth={1.5} fill="none" strokeDasharray="4 4" opacity={0.6} />
    <path d="M460 200 Q 510 240, 500 270" stroke="hsl(226 71% 50%)" strokeWidth={1.5} fill="none" strokeDasharray="4 4" opacity={0.6} />
    <text x={300} y={336} textAnchor="middle" fontSize={11} fill="#64748b">Sales · Support · Engineering — across 5 hubs, 24/7 coverage</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* Generic logo chip                                                    */
/* ------------------------------------------------------------------ */
export const LogoChip = ({ name, tone = "primary" }: { name: string; tone?: "primary" | "secondary" | "accent" | "dark" }) => {
  void tone;
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="group inline-flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full bg-white border border-slate-200 hover:border-primary/40 hover:shadow-sm transition-all duration-200">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/10 to-fuchsia-100 text-primary flex items-center justify-center text-[11px] font-bold tracking-tight">
        {initials}
      </div>
      <span className="text-sm font-medium text-slate-700 whitespace-nowrap group-hover:text-slate-900">{name}</span>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* NodeFlowDiagram — n8n / React Flow style repricer pipeline          */
/* ------------------------------------------------------------------ */
export const NodeFlowDiagram = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 880 460" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="nf-bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#fafbff" />
        <stop offset="100%" stopColor="#f5f3ff" />
      </linearGradient>
      <linearGradient id="nf-blue" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="nf-pink" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#ec4899" /><stop offset="100%" stopColor="#be185d" />
      </linearGradient>
      <linearGradient id="nf-violet" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#6d28d9" />
      </linearGradient>
      <linearGradient id="nf-amber" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <pattern id="nf-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="#cbd5e1" />
      </pattern>
    </defs>

    <rect x="10" y="10" width="860" height="440" rx="20" fill="url(#nf-bg)" stroke="#e2e8f0" />
    <rect x="10" y="10" width="860" height="440" rx="20" fill="url(#nf-dots)" opacity="0.45" />

    {/* Toolbar */}
    <rect x="30" y="30" width="820" height="38" rx="10" fill="white" stroke="#e2e8f0" />
    <circle cx="50" cy="49" r="5" fill="#ef4444" /><circle cx="66" cy="49" r="5" fill="#f59e0b" /><circle cx="82" cy="49" r="5" fill="#22c55e" />
    <text x="110" y="53" fontSize="11" fontWeight="700" fill="#0f172a">repricer-pipeline.flow</text>
    <rect x="730" y="38" width="100" height="22" rx="11" fill="#10b981" />
    <text x="780" y="53" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">● LIVE · 24/7</text>

    {/* Nodes */}
    {/* Trigger */}
    <g>
      <rect x="50" y="110" width="170" height="78" rx="14" fill="white" stroke="#3b82f6" strokeWidth="2" />
      <rect x="50" y="110" width="170" height="22" rx="14" fill="url(#nf-blue)" />
      <text x="62" y="126" fontSize="10" fontWeight="700" fill="white">⚡ TRIGGER</text>
      <text x="62" y="152" fontSize="12" fontWeight="800" fill="#0f172a">Buy Box change</text>
      <text x="62" y="170" fontSize="10" fill="#64748b">Amazon SP-API · webhook</text>
      <circle cx="220" cy="149" r="6" fill="white" stroke="#3b82f6" strokeWidth="2" />
    </g>

    {/* Fetch competitors */}
    <g>
      <rect x="290" y="60" width="180" height="78" rx="14" fill="white" stroke="#8b5cf6" strokeWidth="2" />
      <rect x="290" y="60" width="180" height="22" rx="14" fill="url(#nf-violet)" />
      <text x="302" y="76" fontSize="10" fontWeight="700" fill="white">◆ FETCH</text>
      <text x="302" y="102" fontSize="12" fontWeight="800" fill="#0f172a">Competitor prices</text>
      <text x="302" y="120" fontSize="10" fill="#64748b">Top 5 sellers · ratings · FBA</text>
      <circle cx="290" cy="99" r="6" fill="white" stroke="#8b5cf6" strokeWidth="2" />
      <circle cx="470" cy="99" r="6" fill="white" stroke="#8b5cf6" strokeWidth="2" />
    </g>

    {/* Read margin rules */}
    <g>
      <rect x="290" y="160" width="180" height="78" rx="14" fill="white" stroke="#8b5cf6" strokeWidth="2" />
      <rect x="290" y="160" width="180" height="22" rx="14" fill="url(#nf-violet)" />
      <text x="302" y="176" fontSize="10" fontWeight="700" fill="white">▤ READ</text>
      <text x="302" y="202" fontSize="12" fontWeight="800" fill="#0f172a">Margin floor / ceiling</text>
      <text x="302" y="220" fontSize="10" fill="#64748b">Min 14% · Max 32%</text>
      <circle cx="290" cy="199" r="6" fill="white" stroke="#8b5cf6" strokeWidth="2" />
      <circle cx="470" cy="199" r="6" fill="white" stroke="#8b5cf6" strokeWidth="2" />
    </g>

    {/* Decision */}
    <g>
      <rect x="540" y="110" width="180" height="92" rx="14" fill="white" stroke="#f59e0b" strokeWidth="2" />
      <rect x="540" y="110" width="180" height="22" rx="14" fill="url(#nf-amber)" />
      <text x="552" y="126" fontSize="10" fontWeight="700" fill="white">⌥ DECIDE · AI</text>
      <text x="552" y="152" fontSize="12" fontWeight="800" fill="#0f172a">Optimal price</text>
      <text x="552" y="170" fontSize="10" fill="#64748b">Win Buy Box · stay in margin</text>
      <text x="552" y="188" fontSize="10" fontWeight="700" fill="#0f172a">→ $24.49</text>
      <circle cx="540" cy="149" r="6" fill="white" stroke="#f59e0b" strokeWidth="2" />
      <circle cx="720" cy="149" r="6" fill="white" stroke="#f59e0b" strokeWidth="2" />
    </g>

    {/* Push price */}
    <g>
      <rect x="50" y="260" width="170" height="78" rx="14" fill="white" stroke="#ec4899" strokeWidth="2" />
      <rect x="50" y="260" width="170" height="22" rx="14" fill="url(#nf-pink)" />
      <text x="62" y="276" fontSize="10" fontWeight="700" fill="white">⤴ ACTION</text>
      <text x="62" y="302" fontSize="12" fontWeight="800" fill="#0f172a">Update listing</text>
      <text x="62" y="320" fontSize="10" fill="#64748b">SP-API · &lt; 800ms</text>
      <circle cx="50" cy="299" r="6" fill="white" stroke="#ec4899" strokeWidth="2" />
    </g>

    {/* Log to BigQuery */}
    <g>
      <rect x="290" y="290" width="180" height="78" rx="14" fill="white" stroke="#ec4899" strokeWidth="2" />
      <rect x="290" y="290" width="180" height="22" rx="14" fill="url(#nf-pink)" />
      <text x="302" y="306" fontSize="10" fontWeight="700" fill="white">▣ STREAM</text>
      <text x="302" y="332" fontSize="12" fontWeight="800" fill="#0f172a">Log → BigQuery</text>
      <text x="302" y="350" fontSize="10" fill="#64748b">Audit trail · Power BI ready</text>
      <circle cx="290" cy="329" r="6" fill="white" stroke="#ec4899" strokeWidth="2" />
      <circle cx="470" cy="329" r="6" fill="white" stroke="#ec4899" strokeWidth="2" />
    </g>

    {/* Notify */}
    <g>
      <rect x="540" y="290" width="180" height="78" rx="14" fill="white" stroke="#3b82f6" strokeWidth="2" />
      <rect x="540" y="290" width="180" height="22" rx="14" fill="url(#nf-blue)" />
      <text x="552" y="306" fontSize="10" fontWeight="700" fill="white">✉ NOTIFY</text>
      <text x="552" y="332" fontSize="12" fontWeight="800" fill="#0f172a">Slack / Email</text>
      <text x="552" y="350" fontSize="10" fill="#64748b">Daily digest to seller</text>
      <circle cx="540" cy="329" r="6" fill="white" stroke="#3b82f6" strokeWidth="2" />
    </g>

    {/* Edges */}
    <path d="M226 149 C 260 149, 260 99, 290 99" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrow-purple)" />
    <path d="M226 149 C 260 149, 260 199, 290 199" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrow-purple)" />
    <path d="M476 99 C 510 99, 510 149, 540 149" stroke="#f59e0b" strokeWidth="2" fill="none" />
    <path d="M476 199 C 510 199, 510 149, 540 149" stroke="#f59e0b" strokeWidth="2" fill="none" />
    <path d="M630 202 C 630 240, 135 240, 135 260" stroke="#ec4899" strokeWidth="2" fill="none" strokeDasharray="5 4" markerEnd="url(#arrow-purple)" />
    <path d="M226 299 C 258 299, 258 329, 290 329" stroke="#ec4899" strokeWidth="2" fill="none" />
    <path d="M476 329 C 510 329, 510 329, 540 329" stroke="#ec4899" strokeWidth="2" fill="none" />

    {/* Sidebar palette */}
    <rect x="30" y="395" width="820" height="40" rx="10" fill="white" stroke="#e2e8f0" />
    {[
      { c: "#3b82f6", l: "Triggers" }, { c: "#8b5cf6", l: "Data" },
      { c: "#f59e0b", l: "AI logic" }, { c: "#ec4899", l: "Actions" },
    ].map((p, i) => (
      <g key={i}>
        <circle cx={60 + i * 130} cy={415} r={6} fill={p.c} />
        <text x={74 + i * 130} y={419} fontSize="11" fontWeight="700" fill="#334155">{p.l}</text>
      </g>
    ))}
    <text x="838" y="419" textAnchor="end" fontSize="10" fill="#94a3b8">7 nodes · auto-saved</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* AnalyticsFlowDiagram — BigQuery + Power BI data flow                */
/* ------------------------------------------------------------------ */
export const AnalyticsFlowDiagram = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 820 380" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="af-bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#fff7ed" />
        <stop offset="100%" stopColor="#fdf2f8" />
      </linearGradient>
      <pattern id="af-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
      </pattern>
    </defs>
    <rect x="10" y="10" width="800" height="360" rx="20" fill="url(#af-bg)" stroke="#e2e8f0" />
    <rect x="10" y="10" width="800" height="360" rx="20" fill="url(#af-dots)" opacity="0.4" />

    {/* Sources column */}
    <text x="40" y="46" fontSize="11" fontWeight="800" fill="#64748b" letterSpacing="1">SOURCES</text>
    {[
      { y: 60, l: "Amazon SP-API", c: "#f59e0b" },
      { y: 110, l: "Walmart Marketplace", c: "#1d4ed8" },
      { y: 160, l: "Shopify Plus", c: "#10b981" },
      { y: 210, l: "Meta · Google Ads", c: "#ec4899" },
      { y: 260, l: "Customer reviews", c: "#8b5cf6" },
    ].map((s, i) => (
      <g key={i}>
        <rect x={30} y={s.y} width={170} height={38} rx={10} fill="white" stroke="#e2e8f0" />
        <circle cx={48} cy={s.y + 19} r={6} fill={s.c} />
        <text x={62} y={s.y + 23} fontSize={11} fontWeight={700} fill="#0f172a">{s.l}</text>
      </g>
    ))}

    {/* Pipeline */}
    <g>
      <rect x={250} y={120} width={170} height={120} rx={16} fill="white" stroke="#6366f1" strokeWidth={2} />
      <rect x={250} y={120} width={170} height={26} rx={14} fill="#6366f1" />
      <text x={262} y={138} fontSize={11} fontWeight={800} fill="white">▶ KAFKA STREAM</text>
      <text x={262} y={170} fontSize={11} fontWeight={800} fill="#0f172a">Real-time ingest</text>
      <text x={262} y={188} fontSize={10} fill="#64748b">10M+ events / day</text>
      <text x={262} y={208} fontSize={10} fill="#64748b">Schema-validated</text>
      <text x={262} y={226} fontSize={10} fill="#64748b">Sub-second latency</text>
    </g>

    {/* BigQuery warehouse */}
    <g>
      <rect x={460} y={100} width={180} height={160} rx={16} fill="white" stroke="#0ea5e9" strokeWidth={2} />
      <rect x={460} y={100} width={180} height={26} rx={14} fill="#0ea5e9" />
      <text x={472} y={118} fontSize={11} fontWeight={800} fill="white">▣ BIGQUERY WAREHOUSE</text>
      {/* mini bars */}
      {[40, 70, 55, 85, 60, 92, 75].map((h, i) => (
        <rect key={i} x={478 + i * 22} y={234 - h} width={14} height={h} rx={2} fill={i % 2 ? "#a5f3fc" : "#0ea5e9"} />
      ))}
      <text x={472} y={250} fontSize={10} fill="#64748b">Petabyte-scale · SQL anywhere</text>
    </g>

    {/* Outputs column */}
    <text x={680} y={46} fontSize={11} fontWeight={800} fill="#64748b" letterSpacing={1}>CONSUMERS</text>
    {[
      { y: 70, l: "Power BI", c: "#f59e0b" },
      { y: 120, l: "Looker Studio", c: "#3b82f6" },
      { y: 170, l: "Custom dashboards", c: "#8b5cf6" },
      { y: 220, l: "CSV / API export", c: "#10b981" },
      { y: 270, l: "AI forecast model", c: "#ec4899" },
    ].map((s, i) => (
      <g key={i}>
        <rect x={670} y={s.y} width={130} height={36} rx={10} fill="white" stroke="#e2e8f0" />
        <circle cx={688} cy={s.y + 18} r={6} fill={s.c} />
        <text x={702} y={s.y + 22} fontSize={11} fontWeight={700} fill="#0f172a">{s.l}</text>
      </g>
    ))}

    {/* Edges in */}
    {[79, 129, 179, 229, 279].map((y, i) => (
      <path key={i} d={`M200 ${y} C 230 ${y}, 230 ${130 + i * 18}, 250 ${130 + i * 18}`}
            stroke="#94a3b8" strokeWidth={1.5} fill="none" strokeDasharray="3 4" />
    ))}
    {/* Stream → BigQuery */}
    <path d="M420 180 L 460 180" stroke="#6366f1" strokeWidth={2.5} markerEnd="url(#arrow-purple)" />
    {/* BQ → consumers */}
    {[88, 138, 188, 238, 288].map((y, i) => (
      <path key={i} d={`M640 180 C 660 180, 660 ${y}, 670 ${y}`}
            stroke="#0ea5e9" strokeWidth={1.5} fill="none" strokeDasharray="3 4" />
    ))}

    <text x={410} y={344} textAnchor="middle" fontSize={11} fill="#64748b">Every order, click and review — queryable in seconds, exportable forever.</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* MarketplaceMeshDiagram — radial channel hub                         */
/* ------------------------------------------------------------------ */
export const MarketplaceMeshDiagram = (props: SVGProps<SVGSVGElement>) => {
  const channels = [
    { a: -90, l: "Amazon", c: "#f59e0b" },
    { a: -54, l: "Walmart", c: "#1d4ed8" },
    { a: -18, l: "eBay", c: "#ef4444" },
    { a: 18,  l: "Shopify", c: "#10b981" },
    { a: 54,  l: "TikTok", c: "#0f172a" },
    { a: 90,  l: "Flipkart", c: "#3b82f6" },
    { a: 126, l: "Etsy", c: "#ea580c" },
    { a: 162, l: "Lazada", c: "#0ea5e9" },
    { a: 198, l: "Meesho", c: "#db2777" },
    { a: 234, l: "Allegro", c: "#7c3aed" },
    { a: 270, l: "Shopee", c: "#f97316" },
    { a: 306, l: "Bol.com", c: "#2563eb" },
  ];
  const cx = 380, cy = 220, R = 165;
  return (
    <svg viewBox="0 0 760 440" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="mm-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="100%" stopColor="#eff6ff" />
        </radialGradient>
        <linearGradient id="mm-core" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(226 71% 50%)" />
          <stop offset="100%" stopColor="hsl(330 81% 55%)" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="740" height="420" rx="20" fill="url(#mm-bg)" stroke="#e2e8f0" />
      <text x="40" y="46" fontSize="13" fontWeight="800" fill="#0f172a">One platform · every channel</text>
      <text x="40" y="64" fontSize="11" fill="#64748b">Inventory, pricing and orders sync bi-directionally in real time.</text>

      {/* concentric rings */}
      {[60, 110, 165].map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r} stroke="#cbd5e1" strokeDasharray="3 4" fill="none" opacity={0.5} />
      ))}

      {/* Edges */}
      {channels.map((ch, i) => {
        const rad = (ch.a * Math.PI) / 180;
        const x = cx + R * Math.cos(rad);
        const y = cy + R * Math.sin(rad);
        return (
          <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={ch.c} strokeWidth={1.4} opacity={0.45} strokeDasharray="2 3" />
        );
      })}

      {/* Channel nodes */}
      {channels.map((ch, i) => {
        const rad = (ch.a * Math.PI) / 180;
        const x = cx + R * Math.cos(rad);
        const y = cy + R * Math.sin(rad);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={26} fill="white" stroke={ch.c} strokeWidth={2} />
            <text x={x} y={y + 4} textAnchor="middle" fontSize={10} fontWeight={800} fill={ch.c}>{ch.l}</text>
            <circle cx={x} cy={y} r={32} fill={ch.c} opacity={0.12}>
              <animate attributeName="r" values={`28;36;28`} dur={`${2.4 + (i % 5) * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.18;0;0.18" dur={`${2.4 + (i % 5) * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}

      {/* Core */}
      <circle cx={cx} cy={cy} r={56} fill="url(#mm-core)" />
      <circle cx={cx} cy={cy} r={56} fill="white" opacity={0.08} />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize={14} fontWeight={800} fill="white">Ctasis</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fontSize={9} fontWeight={700} fill="white" opacity={0.85}>Sync engine</text>

      {/* Legend chips */}
      <g transform="translate(40,390)">
        {[{c:"#10b981",l:"Live sync"},{c:"#f59e0b",l:"Auto-repricer"},{c:"#ec4899",l:"AI listing"}].map((p,i)=>(
          <g key={i} transform={`translate(${i*150},0)`}>
            <rect x="0" y="-14" width="140" height="22" rx="11" fill="white" stroke="#e2e8f0" />
            <circle cx="14" cy="-3" r="5" fill={p.c} />
            <text x="26" y="0" fontSize="10" fontWeight="700" fill="#334155">{p.l}</text>
          </g>
        ))}
      </g>
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/* RepricerStrategyChart — line chart competitor vs Ctasis price       */
/* ------------------------------------------------------------------ */
export const RepricerStrategyChart = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="rsc-fill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.3" />
        <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="580" height="340" rx="20" fill="white" stroke="#e2e8f0" />
    <text x="36" y="44" fontSize="13" fontWeight="800" fill="#0f172a">Buy Box price race · last 24h</text>
    <text x="36" y="62" fontSize="11" fill="#64748b">Your floor: $21.50 · ceiling: $28.90 · Buy Box won 92% of the day</text>

    {/* axes */}
    <line x1="60" y1="280" x2="560" y2="280" stroke="#e2e8f0" />
    {[0,1,2,3,4,5,6].map(i=>(
      <text key={i} x={60 + i*83} y={300} fontSize="9" textAnchor="middle" fill="#94a3b8">
        {`${i*4}h`}
      </text>
    ))}
    {/* floor / ceiling lines */}
    <line x1="60" y1="240" x2="560" y2="240" stroke="#10b981" strokeDasharray="4 4" />
    <text x="566" y="244" fontSize="9" fill="#10b981" fontWeight="700">FLOOR</text>
    <line x1="60" y1="110" x2="560" y2="110" stroke="#ef4444" strokeDasharray="4 4" />
    <text x="566" y="114" fontSize="9" fill="#ef4444" fontWeight="700">CEILING</text>

    {/* competitor line (jagged) */}
    <polyline points="60,200 120,180 180,210 240,160 300,220 360,170 420,150 480,200 540,170"
              stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="3 3" />
    <text x="540" y="160" fontSize="9" fontWeight="700" fill="#64748b">Competitor</text>

    {/* Ctasis line (smooth, slightly under ceiling) */}
    <path d="M60 195 C 110 175, 170 200, 230 155 S 350 215, 410 145 S 500 195, 540 165"
          stroke="hsl(330 81% 55%)" strokeWidth="3" fill="none" />
    <path d="M60 195 C 110 175, 170 200, 230 155 S 350 215, 410 145 S 500 195, 540 165 L 540 280 L 60 280 Z"
          fill="url(#rsc-fill)" />
    <text x="540" y="155" fontSize="10" fontWeight="800" fill="hsl(330 81% 45%)">Ctasis</text>

    {/* Data points */}
    {[[230,155],[410,145],[540,165]].map(([x,y],i)=>(
      <g key={i}>
        <circle cx={x} cy={y} r="5" fill="white" stroke="hsl(330 81% 55%)" strokeWidth="2.5" />
      </g>
    ))}
  </svg>
);
