import { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* Decorative background blobs – soft brand gradient orbs              */
/* ------------------------------------------------------------------ */
export const BlobBackdrop = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
    <div className="hero-blob bg-primary/40 w-[420px] h-[420px] -top-24 -left-20 animate-blob" />
    <div className="hero-blob bg-secondary/40 w-[360px] h-[360px] top-32 right-0 animate-blob" style={{ animationDelay: "3s" }} />
    <div className="hero-blob bg-orange-300/30 w-[300px] h-[300px] bottom-0 left-1/3 animate-blob" style={{ animationDelay: "6s" }} />
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
    <g filter="url(#shm-shadow)" style={{ transformOrigin: "380px 260px" }} >
      <rect x="80" y="200" width="680" height="140" rx="16" fill="white" stroke="hsl(220 20% 92%)" />
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
  <svg
    viewBox="0 0 560 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <DiagramDefs /> {/*Keep your defs */}

    {/* Main Card */}
    <rect x="10" y="10" width="540" height="480" rx="20" fill="white" stroke="#e2e8f0" strokeWidth="8" />

    {/* Header Chip */}
    <rect x="32" y="42" width="148" height="26" rx="13" fill="#f3e8ff" />
    <text x="106" y="59" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#6d28d9" letterSpacing="1.2">
      AI & ANALYTICS
    </text>

    <text x="32" y="100" fontSize="19" fontWeight="700" fill="#0f172a">Performance Insights</text>

    {/* KPI Cards - Improved Spacing */}
    {[
      { x: 32, label: "GMV", val: "$12.4M", color: "#1e40af" },
      { x: 198, label: "Orders", val: "84,210", color: "#6d28d9" },
      { x: 364, label: "ROAS", val: "4.8×", color: "#db2777" },
    ].map((k, i) => (
      <g key={i}>
        <rect x={k.x} y="130" width="158" height="78" rx="14" fill="#f8fafc" stroke="#e2e8f0" />
        <text x={k.x + 18} y="156" fontSize="12" fontWeight="600" fill="#64748b">{k.label}</text>
        <text x={k.x + 18} y="190" fontSize="24" fontWeight="800" fill={k.color}>{k.val}</text>
      </g>
    ))}

    {/* Chart Area */}
    <rect x="32" y="260" width="496" height="200" rx="14" fill="#f8fafc" stroke="#e2e8f0" />

    {/* X Axis Line */}
    <line x1="48" y1="440" x2="512" y2="440" stroke="#cbd5e1" strokeWidth="2" />

    {[62, 118, 78, 152, 105, 178, 128, 195, 145, 210].map((h, i) => {
      const purpleH = h * 0.82;
      const pinkH = h * 0.65;

      return (
        <g key={i}>
          {/* Purple Bar */}
          <rect
            x={52 + i * 45}
            y={440 - purpleH}
            width="19"
            height={purpleH}
            rx="5"
            fill="url(#g-purple)"
          >
            <animate
              attributeName="height"
              from="0"
              to={purpleH}
              dur="0.8s"
              fill="freeze"
            />
            <animate
              attributeName="y"
              from="440"
              to={440 - purpleH}
              dur="0.8s"
              fill="freeze"
            />
          </rect>

          {/* Pink Bar */}
          <rect
            x={76 + i * 45}
            y={440 - pinkH}
            width="19"
            height={pinkH}
            rx="5"
            fill="url(#g-pink)"
            opacity="0.9"
          >
            <animate
              attributeName="height"
              from="0"
              to={pinkH}
              dur="0.9s"
              fill="freeze"
            />
            <animate
              attributeName="y"
              from="440"
              to={440 - pinkH}
              dur="0.9s"
              fill="freeze"
            />
          </rect>
        </g>
      );
    })}
    {/* Legend */}
    <circle cx="52" cy="236" r="4.5" fill="#6d28d9" />
    <text x="64" y="240" fontSize="11" fill="#475569" fontWeight="500">BigQuery</text>

    <circle cx="138" cy="236" r="4.5" fill="#db2777" />
    <text x="150" y="240" fontSize="11" fill="#475569" fontWeight="500">Power BI</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* GlobeIllustration – globe with arc connections to Sellerbuz      */
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
  <svg
    viewBox="0 0 600 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <DiagramDefs />

    {/* Background */}
    <rect
      x="10"
      y="20"
      width="580"
      height="190"
      rx="24"
      fill="#ffffff"
      stroke="#e2e8f0"
    />

    {/* Glow */}
    <circle cx="120" cy="40" r="90" fill="#dbeafe" opacity="0.35" />
    <circle cx="520" cy="190" r="90" fill="#f5d0fe" opacity="0.35" />

    {[
      {
        x: 25,
        n: "1",
        t: "Order capture",
        c: "#89aad9",
        icon: "S1",
      },
      {
        x: 170,
        n: "2",
        t: "Route & assign",
        c: "#76b7f5",
        icon: "S2",
      },
      {
        x: 315,
        n: "3",
        t: "Fulfil & ship",
        c: "#488afa",
        icon: "S3",
      },
      {
        x: 460,
        n: "4",
        t: "Track & close",
        c: "#faaa55",
        icon: "S4",
      },
    ].map((s, i) => (
      <g key={i}>
        {/* Animated Card */}
        <rect
          x={s.x}
          y="60"
          width="115"
          height="110"
          rx="18"
          fill="white"
          stroke={s.c}
        >

          <animate
            attributeName="y"
            values="70;60;70"
            dur={`${3 + i * 0.4}s`}
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x={s.x}
          y="60"
          width="115"
          height="22"
          rx="18"
          fill="white"
          stroke={s.c}
        >

          <animate
            attributeName="y"
            values="70;60;70"
            dur={`${3 + i * 0.4}s`}
            repeatCount="indefinite"
          />
        </rect>
        {/* Animated Icon Circle */}
        <circle cx={s.x + 57} cy="96" r="20" fill={s.c}>
          <animate
            attributeName="r"
            values="20;22;20"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Icon */}
        <text
          x={s.x + 57}
          y="101"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="white"
        >
          {s.icon}
        </text>

        {/* Title */}
        <text
          x={s.x + 57}
          y="140"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#0f172a"
        >
          {s.t.split(" ")[0]}
        </text>

        <text
          x={s.x + 57}
          y="155"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#0f172a"
        >
          {s.t.split(" ").slice(1).join(" ")}
        </text>

        {/* Connection Line */}
        {i < 3 && (
          <>
            <line
              x1={s.x + 116}
              y1="112"
              x2={s.x + 150}
              y2="112"
              stroke={s.c}
              strokeWidth="2"
              strokeDasharray="5 5"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="20;0"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>

            {/* Moving Dot */}
            <circle r="4" fill={s.c}>
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path={`M ${s.x + 116} 112 L ${s.x + 150} 112`}
              />
            </circle>
          </>
        )}
      </g>
    ))}

    {/* Bottom caption */}
    <text
      x="300"
      y="205"
      textAnchor="middle"
      fontSize="11"
      fill="#64748b"
      fontWeight="600"
    >
      Unified across Amazon · Flipkart · Meesho · Walmart · Shopify
    </text>
  </svg >
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
      { x: 390, label1: "Amazon", label2: "Sellerbuz", fill: "#fef3c7", stroke: "#f59e0b", text: "#92400e" },
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
    {/* Sellerbuz pills */}
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
export const OrderFlowDiagram = (props: SVGProps<SVGSVGElement>) => {
  const STAGES = [
    { n: 1, title: "Order received", sub: "Amazon SP-API", from: "#4338ca", to: "#6366f1" },
    { n: 2, title: "Inventory check", sub: "Multi-WH route", from: "#6d28d9", to: "#8b5cf6" },
    { n: 3, title: "Pick & pack", sub: "WMS barcode", from: "#be185d", to: "#db2777" },
    { n: 4, title: "Label + ship", sub: "Best courier rate", from: "#c2410c", to: "#ea580c" },
    { n: 5, title: "Tracked delivery", sub: "Customer notified", from: "#1d4ed8", to: "#3b82f6" },
  ];

  const TIMES = ["0s", "2s", "30s", "5m", "Out for delivery"];

  const CARD_W = 118;
  const CARD_H = 108;
  const CARD_Y = 88;
  const ARROW_W = 16;
  const TOTAL_W = STAGES.length * CARD_W + (STAGES.length - 1) * ARROW_W;
  const OFFSET_X = (760 - TOTAL_W) / 2;

  const TL_Y = 238;
  const TL_X1 = OFFSET_X + CARD_W / 2;
  const TL_X2 = OFFSET_X + TOTAL_W - CARD_W / 2;
  const TL_SPAN = TL_X2 - TL_X1;
  const DOT_YS = TL_Y;

  return (
    <svg
      viewBox="0 0 760 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Outer card gradient */}
        <linearGradient id="of-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f5f3ff" />
          <stop offset="55%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#fff7ed" />
        </linearGradient>

        {/* Timeline gradient */}
        <linearGradient
          id="of-tl-grad"
          x1={TL_X1}
          y1={TL_Y}
          x2={TL_X2}
          y2={TL_Y}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        {/* Per-stage card gradients */}
        {STAGES.map((s, i) => (
          <linearGradient key={i} id={`of-g${i}`} x1="0" x2="0.7" y1="0" y2="1">
            <stop offset="0%" stopColor={s.from} />
            <stop offset="100%" stopColor={s.to} />
          </linearGradient>
        ))}

        {/* Card shadow */}
        <filter id="of-card-shadow" x="-5%" y="-5%" width="110%" height="115%">
          <feDropShadow dx="0" dy="3" stdDeviation="7" floodColor="#c4b5fd" floodOpacity="0.18" />
        </filter>
        <filter id="of-outer-shadow" x="-3%" y="-3%" width="106%" height="110%">
          <feDropShadow dx="0" dy="2" stdDeviation="8" floodColor="#c4b5fd" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* ── Outer card ── */}
      <rect
        x="8" y="8" width="744" height="324" rx="22"
        fill="url(#of-bg)"
        stroke="#e0d9f7" strokeWidth="1.2"
        filter="url(#of-outer-shadow)"
      />

      {/* ── Header ── */}
      <g className="of-hdr-anim">
        <text
          x="36" y="48"
          fontFamily="'Space Grotesk','DM Sans',sans-serif"
          fontSize="17" fontWeight="700" fill="#1a1340" letterSpacing="-0.25"
        >
          Order lifecycle · automated end-to-end
        </text>
        <text
          x="36" y="68"
          fontFamily="'DM Sans',sans-serif"
          fontSize="11.5" fill="#6b7280"
        >
          From Sellerbuz ping to doorstep delivery — zero clicks.
        </text>
      </g>

      {/* ══════════ STAGE CARDS + ARROWS ══════════ */}
      {STAGES.map((s, i) => {
        const sx = OFFSET_X + i * (CARD_W + ARROW_W);
        const midX = sx + CARD_W / 2;

        return (
          <g key={i}>
            {/* Stage card */}
            <g className={`of-stage-${i}`}>
              <rect
                x={sx} y={CARD_Y}
                width={CARD_W} height={CARD_H}
                rx="13"
                fill={`url(#of-g${i})`}
                filter="url(#of-card-shadow)"
              />
              {/* Number badge */}
              <circle
                cx={sx + 18} cy={CARD_Y + 18} r="11"
                fill="rgba(255,255,255,0.22)"
              />
              <text
                x={sx + 18} y={CARD_Y + 22}
                textAnchor="middle"
                fontFamily="'DM Sans',sans-serif"
                fontSize="11" fontWeight="700" fill="white"
              >
                {s.n}
              </text>

              {/* Stage title */}
              <text
                x={sx + 10} y={CARD_Y + 52}
                fontFamily="'DM Sans',sans-serif"
                fontSize="12.5" fontWeight="700" fill="white"
              >
                {s.title.split(" ")[0]}
              </text>
              {s.title.includes(" ") && (
                <text
                  x={sx + 10} y={CARD_Y + 68}
                  fontFamily="'DM Sans',sans-serif"
                  fontSize="12.5" fontWeight="700" fill="white"
                >
                  {s.title.split(" ").slice(1).join(" ")}
                </text>
              )}

              {/* Subtitle */}
              <text
                x={sx + 10} y={CARD_Y + 90}
                fontFamily="'DM Sans',sans-serif"
                fontSize="10" fill="rgba(255,255,255,0.82)"
              >
                {s.sub}
              </text>
            </g>

            {/* Arrow between stages */}
            {i < STAGES.length - 1 && (
              <g>
                <line
                  x1={sx + CARD_W + 2} y1={CARD_Y + CARD_H / 2}
                  x2={sx + CARD_W + ARROW_W - 2} y2={CARD_Y + CARD_H / 2}
                  stroke="#a5b4fc" strokeWidth="1.5"
                  className="of-arrow-flow"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
                <path
                  d={`M${sx + CARD_W + ARROW_W - 7} ${CARD_Y + CARD_H / 2 - 5} L${sx + CARD_W + ARROW_W - 1} ${CARD_Y + CARD_H / 2} L${sx + CARD_W + ARROW_W - 7} ${CARD_Y + CARD_H / 2 + 5}`}
                  stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                />
              </g>
            )}

            {/* Timeline dot */}
            <circle
              cx={midX} cy={DOT_YS}
              r="5"
              fill="white" stroke="#6366f1" strokeWidth="2"
              className={`of-dot-${i}`}
            />

            {/* Time label */}
            <text
              x={midX} y={DOT_YS + 26}
              textAnchor={i === STAGES.length - 1 ? "end" : "middle"}
              fontFamily="'DM Sans',sans-serif"
              fontSize="11" fontWeight="700" fill="#4b5563"
              className="of-footer-anim"
            >
              {TIMES[i]}
            </text>
          </g>
        );
      })}

      {/* ══════════ TIMELINE LINE ══════════ */}
      <line
        x1={TL_X1 - 10}
        y1={TL_Y + 10}
        x2={TL_X2 + 10}
        y2={TL_Y + 10}
        stroke="url(#of-tl-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className="of-tl-draw"
      />
      {/* ── Footer ── */}
      <text
        x="376" y="316"
        textAnchor="middle"
        fontFamily="'DM Sans',sans-serif"
        fontSize="11" fill="#9ca3af" fontStyle="italic"
        className="of-footer-anim"
      >
        Median order processing time across 50,000+ stores
      </text>
    </svg>
  )
};


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
      { y: 124, label: "Sellerbuz", value: "5" },
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
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/10 to-orange-50 text-primary flex items-center justify-center text-[11px] font-bold tracking-tight">
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
    <path d="M630 202 C 630 230, 600 244, 470 244 L 250 244 C 180 244, 135 248, 135 260" stroke="#ec4899" strokeWidth="2" fill="none" strokeDasharray="5 4" markerEnd="url(#arrow-purple)" />
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
  <svg viewBox="0 0 850 380" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="af-bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#fff7ed" />
        <stop offset="100%" stopColor="#fdf2f8" />
      </linearGradient>
      <pattern id="af-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
      </pattern>
    </defs>
    <rect x="10" y="10" width="830" height="360" rx="20" fill="url(#af-bg)" stroke="#e2e8f0" />
    <rect x="10" y="10" width="830" height="360" rx="20" fill="url(#af-dots)" opacity="0.4" />

    {/* Sources column */}
    <text x="40" y="46" fontSize="11" fontWeight="800" fill="#64748b" letterSpacing="1">SOURCES</text>
    {[
      { y: 60, l: "Amazon SP-API", c: "#f59e0b" },
      { y: 110, l: "Walmart Sellerbuz", c: "#1d4ed8" },
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
        <rect x={670} y={s.y} width={150} height={38} rx={10} fill="white" stroke="#e2e8f0" />
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
export const MarketplaceMeshDiagram = (
  props: SVGProps<SVGSVGElement>
) => {
  const channels = [
    { a: -90, l: "Amazon", c: "#f59e0b", bg: "#fffbeb" },
    { a: -54, l: "Walmart", c: "#1d4ed8", bg: "#eff6ff" },
    { a: -18, l: "eBay", c: "#ef4444", bg: "#fef2f2" },
    { a: 18, l: "Shopify", c: "#059669", bg: "#ecfdf5" },
    { a: 54, l: "TikTok", c: "#0f172a", bg: "#f8fafc" },
    { a: 90, l: "Flipkart", c: "#3b82f6", bg: "#eff6ff" },
    { a: 126, l: "Etsy", c: "#ea580c", bg: "#fff7ed" },
    { a: 162, l: "Lazada", c: "#0ea5e9", bg: "#f0f9ff" },
    { a: 198, l: "Meesho", c: "#db2777", bg: "#fdf2f8" },
    { a: 234, l: "Allegro", c: "#7c3aed", bg: "#f5f3ff" },
    { a: 270, l: "Shopee", c: "#f97316", bg: "#fff7ed" },
    { a: 306, l: "Bol.com", c: "#2563eb", bg: "#eff6ff" },
  ];

  const cx = 380;
  const cy = 220;
  const R = 175;

  return (
    <div className="relative w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#eef2ff] via-[#f8f5ff] to-[#fdf2fb] p-6 shadow-[0_20px_60px_rgba(91,61,232,.12)]">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mb-4">
        <h3 className="text-[18px] font-bold tracking-tight text-slate-900">
          One platform · every channel
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Inventory, pricing and orders sync bi-directionally in
          real time.
        </p>
      </div>

      <svg
        viewBox="0 0 760 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        {...props}
      >
        <defs>
          <radialGradient id="mm-bg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#fdf4ff" />
            <stop offset="100%" stopColor="#eff6ff" />
          </radialGradient>

          <linearGradient id="mm-core" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c5ef7" />
            <stop offset="100%" stopColor="#c23b8e" />
          </linearGradient>

          <radialGradient id="mm-shine" cx="35%" cy="30%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,.28)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>

          <filter
            id="glow"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* orbit rings */}
        {[70, 120, 175].map((r, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            stroke="#c7c5e8"
            strokeWidth="1"
            strokeDasharray="4 5"
            opacity={0.4}
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${cx} ${cy}`}
              to={`360 ${cx} ${cy}`}
              dur={`${28 + i * 8}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* edge lines */}
        {channels.map((ch, i) => {
          const rad = (ch.a * Math.PI) / 180;
          const x = cx + R * Math.cos(rad);
          const y = cy + R * Math.sin(rad);

          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke={ch.c}
              strokeWidth={1.4}
              opacity={0.38}
              strokeDasharray="4 5"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-40"
                dur={`${2 + (i % 4) * 0.4}s`}
                repeatCount="indefinite"
              />
            </line>
          );
        })}

        {/* pulse rings */}
        <circle cx={cx} cy={cy} r="56" fill="#7c5ef7" opacity="0.18">
          <animate
            attributeName="r"
            values="56;90"
            dur="2.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.22;0"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx={cx} cy={cy} r="56" fill="#c23b8e" opacity="0.12">
          <animate
            attributeName="r"
            values="56;110"
            dur="3.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.18;0"
            dur="3.4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* nodes */}
        {channels.map((ch, i) => {
          const rad = (ch.a * Math.PI) / 180;
          const x = cx + R * Math.cos(rad);
          const y = cy + R * Math.sin(rad);

          return (
            <g key={i}>
              {/* shimmer halo */}
              <circle
                cx={x}
                cy={y}
                r="34"
                fill="none"
                stroke={ch.c}
                strokeWidth="1"
                opacity="0.22"
              >
                <animate
                  attributeName="opacity"
                  values="0.15;0.5;0.15"
                  dur={`${2.2 + (i % 5) * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>

              {/* soft halo */}
              <circle
                cx={x}
                cy={y}
                r="30"
                fill={ch.c}
                opacity="0.12"
              >
                <animate
                  attributeName="r"
                  values="28;36;28"
                  dur={`${2.5 + (i % 5) * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>

              {/* floating wrapper */}
              <g>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0 0;0 -4;0 0`}
                  dur={`${3 + (i % 5) * 0.4}s`}
                  repeatCount="indefinite"
                />

                {/* node bg */}
                <circle
                  cx={x}
                  cy={y}
                  r="26"
                  fill={ch.bg}
                  stroke={ch.c}
                  strokeWidth="2"
                />

                {/* label */}
                <text
                  x={x}
                  y={y + 4}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill={ch.c}
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {ch.l}
                </text>
              </g>
            </g>
          );
        })}

        {/* core */}
        <g filter="url(#glow)">
          <circle
            cx={cx}
            cy={cy}
            r="58"
            fill="url(#mm-core)"
          />

          <circle
            cx={cx}
            cy={cy}
            r="58"
            fill="url(#mm-shine)"
          />
        </g>

        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          fontSize="16"
          fontWeight="800"
          fill="white"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
          }}
        >
          Ctasis
        </text>

        <text
          x={cx}
          y={cy + 16}
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="rgba(255,255,255,.82)"
          letterSpacing=".5"
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Sync engine
        </text>

        {/* legend */}
        <g transform="translate(70,455)">
          {[
            { c: "#10b981", l: "Live sync" },
            { c: "#f59e0b", l: "Auto-repricer" },
            { c: "#ec4899", l: "AI listing" },
          ].map((p, i) => (
            <g key={i} transform={`translate(${i * 180},0)`}>
              <rect
                x="0"
                y="-16"
                width="160"
                height="28"
                rx="14"
                fill="white"
                stroke="#e2e8f0"
              />

              <circle
                cx="16"
                cy="-2"
                r="5"
                fill={p.c}
              />

              <text
                x="30"
                y="1"
                fontSize="11"
                fontWeight="700"
                fill="#334155"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {p.l}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
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
    {[0, 1, 2, 3, 4, 5, 6].map(i => (
      <text key={i} x={60 + i * 83} y={300} fontSize="9" textAnchor="middle" fill="#94a3b8">
        {`${i * 4}h`}
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
    {[[230, 155], [410, 145], [540, 165]].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="5" fill="white" stroke="hsl(330 81% 55%)" strokeWidth="2.5" />
      </g>
    ))}
  </svg>
);

/* ------------------------------------------------------------------ */
/* ServicesHeroMockup — operator console with service tiles + activity */
/* ------------------------------------------------------------------ */
export const ServicesHeroMockup = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 760 520" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="svh-bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#fff7ed" />
      </linearGradient>
      <linearGradient id="svh-tile" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" /><stop offset="100%" stopColor="hsl(226 71% 38%)" />
      </linearGradient>
      <linearGradient id="svh-tile2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(14 88% 62%)" /><stop offset="100%" stopColor="hsl(20 90% 50%)" />
      </linearGradient>
      <filter id="svh-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="10" /><feOffset dy="6" />
        <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect x="20" y="20" width="720" height="480" rx="24" fill="url(#svh-bg)" stroke="#e2e8f0" />
    <text x="48" y="60" fontSize="13" fontWeight="800" fill="#0f172a">Service Console</text>
    <text x="48" y="80" fontSize="11" fill="#64748b">12 services, one operator view — every action is auditable.</text>
    <rect x="600" y="44" width="118" height="26" rx="13" fill="#10b981" />
    <text x="659" y="61" textAnchor="middle" fontSize="10" fontWeight="800" fill="white">● ALL HEALTHY</text>

    {/* Service tiles grid */}
    {[
      { x: 48, y: 110, t: "Inventory Sync", v: "12,840 SKUs", k: "↻ 2s", c: "url(#svh-tile)" },
      { x: 232, y: 110, t: "Order Routing", v: "847 today", k: "▶ live", c: "url(#svh-tile)" },
      { x: 416, y: 110, t: "Repricer", v: "Buy Box 92%", k: "AI", c: "url(#svh-tile2)" },
      { x: 48, y: 230, t: "Analytics", v: "$48.2k GMV", k: "+24%", c: "url(#svh-tile)" },
      { x: 232, y: 230, t: "AI Listings", v: "184 generated", k: "AI", c: "url(#svh-tile2)" },
      { x: 416, y: 230, t: "Logistics", v: "8 carriers", k: "✓", c: "url(#svh-tile)" },
    ].map((tile, i) => (
      <g key={i} filter="url(#svh-shadow)">
        <rect x={tile.x} y={tile.y} width={168} height={104} rx={16} fill="white" stroke="#e2e8f0" />
        <rect x={tile.x} y={tile.y} width={168} height={6} rx={3} fill={tile.c} />
        <text x={tile.x + 16} y={tile.y + 36} fontSize={11} fontWeight={800} fill="#0f172a">{tile.t}</text>
        <text x={tile.x + 16} y={tile.y + 64} fontSize={18} fontWeight={800} fill="#0f172a">{tile.v}</text>
        <rect x={tile.x + 16} y={tile.y + 76} width={56} height={18} rx={9} fill="hsl(150 70% 92%)" />
        <text x={tile.x + 44} y={tile.y + 89} textAnchor="middle" fontSize={9} fontWeight={800} fill="hsl(150 70% 30%)">{tile.k}</text>
      </g>
    ))}

    {/* Activity feed strip */}
    <g filter="url(#svh-shadow)">
      <rect x="48" y="358" width="664" height="124" rx="16" fill="white" stroke="#e2e8f0" />
      <text x="64" y="382" fontSize="11" fontWeight="800" fill="#64748b" letterSpacing="1">LIVE ACTIVITY</text>
      {[
        { y: 402, t: "Repricer raised SKU-8632 to $24.49", c: "hsl(14 88% 62%)" },
        { y: 424, t: "Inventory synced from Shopify → Amazon (FBM)", c: "hsl(226 71% 50%)" },
        { y: 446, t: "Order #14829 routed to USA-East warehouse", c: "hsl(150 70% 40%)" },
        { y: 468, t: "AI listing generator drafted 18 new bullets", c: "hsl(20 90% 55%)" },
      ].map((a, i) => (
        <g key={i}>
          <circle cx="74" cy={a.y - 4} r="4" fill={a.c} />
          <text x="90" y={a.y} fontSize="11" fill="#334155">{a.t}</text>
          <text x="700" y={a.y} fontSize="10" textAnchor="end" fill="#94a3b8">{i + 1}s ago</text>
        </g>
      ))}
    </g>
  </svg>
);

/* ------------------------------------------------------------------ */
/* InfraTopologyDiagram — multi-region cluster topology                */
/* ------------------------------------------------------------------ */
export const InfraTopologyDiagram = (props: SVGProps<SVGSVGElement>) => {
  const REGIONS = [
    { cx: 130, cy: 225, label: "us-east-1", pods: 18, cols: 4, rows: 3 },
    { cx: 380, cy: 195, label: "eu-west-2", pods: 16, cols: 4, rows: 3 },
    { cx: 630, cy: 230, label: "ap-south-1", pods: 15, cols: 4, rows: 3 },
  ];

  const POD_W = 22;
  const POD_H = 15;
  const POD_GAP_X = 28;
  const POD_GAP_Y = 21;
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>

        {/* Card background — soft lavender-to-sky light gradient */}
        <linearGradient id="it-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f0f4ff" />
          <stop offset="55%" stopColor="#f8f6ff" />
          <stop offset="100%" stopColor="#fff0f9" />
        </linearGradient>

        {/* Region card bg */}
        <linearGradient id="it-region-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5f3ff" />
        </linearGradient>

        {/* Pod gradient — blue pill */}
        <linearGradient id="it-pod" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        {/* Spoke gradient */}
        <linearGradient id="it-spoke-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>

        {/* Core card gradient — warm orange */}
        <linearGradient id="it-core-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>

        {/* Core shine */}
        <radialGradient id="it-core-shine" cx="35%" cy="25%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Drop shadow */}
        <filter id="it-card-shadow" x="-6%" y="-6%" width="112%" height="118%">
          <feDropShadow dx="0" dy="3" stdDeviation="7" floodColor="#c4b5fd" floodOpacity="0.18" />
        </filter>
        <filter id="it-region-shadow" x="-8%" y="-8%" width="116%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#818cf8" floodOpacity="0.14" />
        </filter>
        <filter id="it-core-shadow" x="-12%" y="-12%" width="124%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#f97316" floodOpacity="0.30" />
        </filter>
      </defs>

      {/* ── Outer card ── */}
      <rect
        x="8" y="8" width="784" height="484" rx="24"
        fill="url(#it-bg)"
        stroke="#e0d9f7" strokeWidth="1.2"
        filter="url(#it-card-shadow)"
      />

      {/* ── Header ── */}
      <text
        x="36" y="44"
        fontFamily="'Space Grotesk','DM Sans',sans-serif"
        fontSize="10.5" fontWeight="700" fill="#818cf8"
        letterSpacing="2.5"
      >
        MULTI-REGION TOPOLOGY
      </text>
      <text
        x="36" y="70"
        fontFamily="'Space Grotesk','DM Sans',sans-serif"
        fontSize="20" fontWeight="700" fill="#1e1b4b"
        letterSpacing="-0.4"
      >
        3 regions · 47 pods · 1 control plane
      </text>

      {/* ── Orbit ellipse (CDN edge ring) ── */}
      <ellipse
        cx="380" cy="290" rx="310" ry="145"
        stroke="#c7d2fe" strokeWidth="1"
        className="it-orbit"
        fill="none" opacity="0.6"
      />
      <text
        x="52" y="290"
        fontFamily="'DM Sans',sans-serif"
        fontSize="10" fontWeight="700" fill="#a5b4fc"
        className="it-fade"
      >
        CDN / Edge
      </text>

      {/* ── Spoke paths from regions to control plane ── */}
      {[
        { sx: 130, sy: 300, spokeClass: "it-spoke-r" },
        { sx: 380, sy: 270, spokeClass: "it-spoke-r" },
        { sx: 630, sy: 305, spokeClass: "it-spoke-l" },
      ].map((sp, i) => (
        <path
          key={`spoke-${i}`}
          d={`M${sp.sx} ${sp.sy} Q${sp.sx} 370, 380 400`}
          stroke="url(#it-spoke-grad)"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
          className={sp.spokeClass}
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}

      {/* ── Region cards ── */}
      {REGIONS.map((r, ri) => {
        const W = 160, H = 148;
        const x0 = r.cx - W / 2;
        const y0 = r.cy - H / 2;
        const podStartX = r.cx - (r.cols * POD_GAP_X) / 2 + 3;
        const podStartY = y0 + 36;
        const regionClass = `it-region-${ri}`;

        return (
          <g key={`region-${ri}`} className={regionClass}>
            {/* Card */}
            <rect
              x={x0} y={y0} width={W} height={H} rx="16"
              fill="url(#it-region-bg)"
              stroke="#818cf8" strokeWidth="1.2" strokeOpacity="0.5"
              filter="url(#it-region-shadow)"
            />
            {/* Top colored accent bar */}
            <rect x={x0} y={y0} width={W} height={H - 120} rx="16" fill="#818cf8" opacity="0.5" />

            {/* Label */}
            <text
              x={r.cx} y={y0 + 18}
              textAnchor="middle"
              fontFamily="'DM Sans',sans-serif"
              fontSize="11" fontWeight="700" fill="#4338ca"
            >
              {r.label}
            </text>

            {/* Pod grid */}
            {Array.from({ length: r.cols * r.rows }).map((_, j) => {
              const col = j % r.cols;
              const row = Math.floor(j / r.cols);
              const px = podStartX + col * POD_GAP_X;
              const py = podStartY + row * POD_GAP_Y;
              const dur = 1.6 + (j % 5) * 0.28;
              return (
                <rect
                  key={j}
                  x={px} y={py}
                  width={POD_W} height={POD_H}
                  rx="4"
                  fill="url(#it-pod)"
                  opacity="0.75"
                  style={{
                    animation: `itPodBlink ${dur}s ease-in-out infinite`,
                    animationDelay: `${j * 0.1}s`,
                  }}
                />
              );
            })}

            {/* Pod count label */}
            <text
              x={r.cx} y={y0 + H - 10}
              textAnchor="middle"
              fontFamily="'DM Sans',sans-serif"
              fontSize="10" fill="#818cf8"
            >
              {r.pods} pods · K8s
            </text>
          </g>
        );
      })}

      {/* ── Control Plane ── */}
      <g className="it-core-pop">
        {/* Pulse rings */}
        <circle cx="380" cy="400" r="6" fill="#f97316" opacity="0" className="it-pulse-a" />
        <circle cx="380" cy="400" r="6" fill="#ea580c" opacity="0" className="it-pulse-b" />

        <rect
          x="290" y="368" width="180" height="88" rx="16"
          fill="url(#it-core-grad)"
          filter="url(#it-core-shadow)"
        />
        <rect
          x="290" y="368" width="180" height="88" rx="16"
          fill="url(#it-core-shine)"
        />
        <text
          x="380" y="393"
          textAnchor="middle"
          fontFamily="'Space Grotesk','DM Sans',sans-serif"
          fontSize="13" fontWeight="700" fill="white"
        >
          Control Plane
        </text>
        <text
          x="380" y="412"
          textAnchor="middle"
          fontFamily="'DM Sans',sans-serif"
          fontSize="10" fill="rgba(255,255,255,0.88)"
        >
          Kafka · etcd · ArgoCD
        </text>
        <text
          x="380" y="430"
          textAnchor="middle"
          fontFamily="'DM Sans',sans-serif"
          fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.92)"
        >
          99.99% SLA
        </text>
      </g>

      {/* ── Legend chips ── */}
      <g className="it-fade">
        {[
          { c: "#2563eb", l: "Tenant pod (Docker + K8s)" },
          { c: "#f97316", l: "Control plane" },
          { c: "#10b981", l: "Live · auto-failover" },
        ].map((p, i) => (
          <g key={i} transform={`translate(${36 + i * 228}, 472)`}>
            <circle cx="6" cy="0" r="5" fill={p.c} className="it-glow" style={{ animationDelay: `${i * 0.3}s` }} />
            <text
              x="18" y="4"
              fontFamily="'DM Sans',sans-serif"
              fontSize="10.5" fontWeight="600" fill="#4b5563"
            >
              {p.l}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}



/* ------------------------------------------------------------------ */
/* AIPipelineDiagram — distinct from NodeFlow: vertical AI pipeline    */
/* ------------------------------------------------------------------ */
export const AIPipelineDiagram = (props: SVGProps<SVGSVGElement>) => {
  const STAGE_W = 150;
  const STAGE_H = 170;
  const STAGE_Y = 90;
  const STAGE_GAP = 30;
  const STAGE_XS = [32, 32 + STAGE_W + STAGE_GAP, 32 + (STAGE_W + STAGE_GAP) * 2, 32 + (STAGE_W + STAGE_GAP) * 3];

  const STAGES = [
    { label: "INGEST", title: "Raw product CSV", sub: "Photos · brief · specs", hdr: "#6366f1", border: "#c7d2fe", cls: "ap-stage-0" },
    { label: "EMBED", title: "Vector + tags", sub: "OpenAI · category model", hdr: "#3b82f6", border: "#bfdbfe", cls: "ap-stage-1" },
    { label: "GENERATE", title: "Per-channel listing", sub: "Title · bullets · keywords", hdr: "#4f46e5", border: "#c7d2fe", cls: "ap-stage-2" },
    { label: "PUBLISH", title: "Push to live", sub: "Amazon · eBay · Flipkart", hdr: "#f97316", border: "#fed7aa", cls: "ap-stage-3" },
  ];

  return (
    <svg
      viewBox="0 0 760 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Outer bg */}
        <linearGradient id="ap-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fdf8ff" />
          <stop offset="50%" stopColor="#f0f5ff" />
          <stop offset="100%" stopColor="#fff9f0" />
        </linearGradient>

        {/* Stage header gradients */}
        <linearGradient id="ap-hdr-ingest" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="ap-hdr-embed" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="ap-hdr-gen" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="ap-hdr-pub" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>

        {/* Bar fill gradient */}
        <linearGradient id="ap-bar" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>

        {/* Card shadow */}
        <filter id="ap-card-shadow" x="-6%" y="-6%" width="112%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#c4b5fd" floodOpacity="0.14" />
        </filter>
        <filter id="ap-outer-shadow" x="-4%" y="-4%" width="108%" height="112%">
          <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#c4b5fd" floodOpacity="0.16" />
        </filter>

        {/* Arrow marker */}
        <marker id="ap-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1 1L7 4L1 7" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="ap-arr-orange" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1 1L7 4L1 7" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* ── Outer card ── */}
      <rect
        x="8" y="8" width="744" height="414" rx="22"
        fill="url(#ap-bg)"
        stroke="#e0d9f7" strokeWidth="1.2"
        filter="url(#ap-outer-shadow)"
      />

      {/* ── Header ── */}
      <g className="ap-hdr-anim">
        <text
          x="32" y="50"
          fontFamily="'Space Grotesk','DM Sans',sans-serif"
          fontSize="16" fontWeight="700" fill="#1a1340" letterSpacing="-0.2"
        >
          AI Pipeline · listing → live
        </text>
        <text
          x="32" y="70"
          fontFamily="'DM Sans',sans-serif"
          fontSize="11" fill="#6b7280"
        >
          Vector embeddings, Sellerbuz rules and a human-in-the-loop QA gate.
        </text>
      </g>

      {/* ══════════ STAGE CARDS ══════════ */}
      {STAGES.map((s, i) => {
        const sx = STAGE_XS[i];
        const hdrGrads = ["url(#ap-hdr-ingest)", "url(#ap-hdr-embed)", "url(#ap-hdr-gen)", "url(#ap-hdr-pub)"];
        return (
          <g key={i} className={s.cls}>
            {/* Card */}
            <rect x={sx} y={STAGE_Y} width={STAGE_W} height={STAGE_H} rx="14"
              fill="#fff" stroke={s.border} strokeWidth="1.5"
              filter="url(#ap-card-shadow)"
            />
            {/* Header band */}
            <rect x={sx} y={STAGE_Y} width={STAGE_W} height="28" rx="10"
              fill={hdrGrads[i]}
            />
            <rect x={sx} y={STAGE_Y + 18} width={STAGE_W} height="10" fill={hdrGrads[i]} />
            <text
              x={sx + 12} y={STAGE_Y + 18}
              fontFamily="'DM Sans',sans-serif"
              fontSize="9.5" fontWeight="700" fill="white" letterSpacing="1.8"
            >
              {s.label}
            </text>

            {/* Title + sub */}
            <text x={sx + 12} y={STAGE_Y + 60}
              fontFamily="'DM Sans',sans-serif"
              fontSize="12.5" fontWeight="700" fill="#1e1b4b"
            >{s.title}</text>
            <text x={sx + 12} y={STAGE_Y + 90}
              fontFamily="'DM Sans',sans-serif"
              fontSize="10" fill="#6b7280"
            >{s.sub}</text>

            {/* ── Stage visual ── */}
            {i === 0 && (
              /* INGEST: coloured file chips */
              <>
                {[["CSV", "#dbeafe", "#1d4ed8"], ["IMG", "#ede9fe", "#5b21b6"], ["SKU", "#dcfce7", "#15803d"], ["TXT", "#fee2e2", "#b91c1c"]].map(([l, bg, col], j) => (
                  <g key={j}>
                    <rect x={sx + 12 + j * 32} y={STAGE_Y + 120} width={28} height={22} rx="6" fill={bg} />
                    <text x={sx + 26 + j * 32} y={STAGE_Y + 135} textAnchor="middle"
                      fontFamily="'DM Sans',sans-serif" fontSize="8.5" fontWeight="700" fill={col}>{l}</text>
                  </g>
                ))}
              </>
            )}
            {i === 1 && (
              /* EMBED: floating blobs */
              <>
                {[18, 24, 30, 24, 18].map((r, j) => (
                  <circle key={j}
                    cx={sx + 22 + j * 26} cy={STAGE_Y + 130}
                    r={r / 2}
                    fill="#3b82f6"
                    opacity={0.3 + j * 0.1}
                    className="ap-blob-anim"
                    style={{ animationDelay: `${j * 0.18}s`, transformOrigin: `${sx + 18 + j * 22}px ${STAGE_Y + 108}px` }}
                  />
                ))}
              </>
            )}
            {i === 2 && (
              /* GENERATE: text bars */
              <>
                {[[100, 0.4], [80, 0.55], [62, 0.7]].map(([w, delay], j) => (
                  <g key={j}>
                    <rect x={sx + 12} y={STAGE_Y + 120 + j * 14} width={STAGE_W - 24} height={7} rx="3" fill="#e0e7ff" />
                    <rect
                      x={sx + 12} y={STAGE_Y + 120 + j * 14}
                      width={((STAGE_W - 24) * w) / 100}
                      height={7} rx="3"
                      fill="url(#ap-bar)"
                      // style={{ animation: `apBarGrow .9s ease both ${delay}s` }}
                      style={{
                        animation: `apBarGrow .9s ease both ${delay}s`,
                        transformOrigin: "left center",
                        transformBox: "fill-box",
                      }}
                    />
                  </g>
                ))}
              </>
            )}
            {i === 3 && (
              /* PUBLISH: Sellerbuz circles */
              <>
                {[["A", "#f59e0b"], ["W", "#1d4ed8"], ["F", "#ef4444"]].map(([label, col], j) => (
                  <g key={j} className="ap-mkt-anim" style={{ animationDelay: `${j * 0.35}s`, transformOrigin: `${sx + 22 + j * 38}px ${STAGE_Y + 108}px` }}>
                    <circle cx={sx + 35 + j * 38} cy={STAGE_Y + 130} r="14" fill={col} />
                    <text x={sx + 35 + j * 38} y={STAGE_Y + 135} textAnchor="middle"
                      fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="white">{label}</text>
                  </g>
                ))}
              </>
            )}
          </g>
        );
      })}

      {/* ══════════ CONNECTOR ARROWS ══════════ */}
      {[0, 1, 2].map(i => {
        const x1 = STAGE_XS[i] + STAGE_W + 4;
        const x2 = STAGE_XS[i + 1] - 4;
        const y = STAGE_Y + STAGE_H / 2;
        return (
          <line key={i}
            x1={x1} y1={y} x2={x2} y2={y}
            stroke="#94a3b8" strokeWidth="1.5"
            markerEnd="url(#ap-arr)"
            className="ap-conn-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        );
      })}

      {/* ══════════ QA GATE ══════════ */}
      {/* Connector line from GENERATE stage down to QA */}
      <line
        x1={STAGE_XS[2] + STAGE_W / 2} y1={STAGE_Y + STAGE_H + 2}
        x2={STAGE_XS[2] + STAGE_W / 2} y2={280}
        stroke="#f97316" strokeWidth="1.5"
        markerEnd="url(#ap-arr-orange)"
        className="ap-conn-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <g className="ap-qa-anim">
        <rect x={186} y={280} width={372} height={90} rx="16"
          fill="#fff9f5"
          stroke="#f97316" strokeWidth="1.5"
          strokeDasharray="8 5"
          filter="url(#ap-card-shadow)"
          className="ap-qa-dash"
        />
        {/* QA flag badge */}
        <rect x={202} y={296} width={22} height={22} rx="7" fill="#f97316" className="ap-glow" />
        <text x={213} y={311} textAnchor="middle"
          fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="white">⚑</text>

        <text x={232} y={310}
          fontFamily="'DM Sans',sans-serif"
          fontSize="11.5" fontWeight="700" fill="#c2410c" letterSpacing="0.5"
        >
          HUMAN-IN-THE-LOOP QA
        </text>
        <text x={372} y={330} textAnchor="middle"
          fontFamily="'DM Sans',sans-serif"
          fontSize="11" fill="#475569"
        >
          Reviewer approves / edits listing before publish
        </text>
        {/* Confidence badge */}
        <rect x={275} y={340} width={210} height={20} rx="8" fill="#fef3c7" stroke="#fde68a" strokeWidth="0.8" />
        <text x={373} y={354} textAnchor="middle"
          fontFamily="'DM Sans',sans-serif"
          fontSize="10" fontWeight="700" fill="#b45309"
        >
          ⚡ Auto-approve threshold: confidence &gt; 0.92
        </text>
      </g>

      {/* ── Footer ── */}
      <text x="372" y="402" textAnchor="middle"
        fontFamily="'DM Sans',sans-serif"
        fontSize="10.5" fill="#9ca3af" fontStyle="italic"
      >
        ~4 min raw CSV → 3 channel-perfect listings · 92% auto-approved
      </text>
    </svg>
  );
}
/* ------------------------------------------------------------------ */
/* ChannelSyncFlow — distinct sync flow for Sellerbuz page          */
/* ------------------------------------------------------------------ */
export const ChannelSyncFlow = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 820 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      {/* Background */}
      <radialGradient
        id="cs-bg"
        cx="50%"
        cy="50%"
        r="70%"
      >
        <stop offset="0%" stopColor="#f8f4ff" />
        <stop offset="60%" stopColor="#fff0f7" />
        <stop offset="100%" stopColor="#fff8ed" />
      </radialGradient>

      {/* Core gradient */}


      <linearGradient id="cs-core" x1="30%" y1="15%" x2="70%" y2="88%" gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor="#7C92FF" />
        <stop offset="38%" stopColor="#4564F7" />
        <stop offset="72%" stopColor="#314EDB" />
        <stop offset="100%" stopColor="#1F369F" />
      </linearGradient>

      {/* Core shine */}
      <radialGradient
        id="cs-shine"
        cx="35%"
        cy="25%"
        r="60%"
      >
        <stop
          offset="0%"
          stopColor="rgba(255,255,255,.22)"
        />
        <stop
          offset="100%"
          stopColor="rgba(255,255,255,0)"
        />
      </radialGradient>

      {/* Glow */}
      <filter
        id="cs-glow"
        x="-40%"
        y="-40%"
        width="180%"
        height="180%"
      >
        <feGaussianBlur
          stdDeviation="6"
          result="blur"
        />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Shadow */}
      <filter
        id="cs-shadow"
        x="-5%"
        y="-5%"
        width="110%"
        height="115%"
      >
        <feDropShadow
          dx="0"
          dy="2"
          stdDeviation="5"
          floodColor="#c4b5fd"
          floodOpacity="0.18"
        />
      </filter>

      {/* Arrows */}
      <marker
        id="arrow-purple"
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="5"
        markerHeight="5"
        orient="auto"
      >
        <path
          d="M1 1L7 4L1 7"
          fill="none"
          stroke="context-stroke"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>

      <marker
        id="arrow-left"
        viewBox="0 0 8 8"
        refX="1"
        refY="4"
        markerWidth="5"
        markerHeight="5"
        orient="auto-start-reverse"
      >
        <path
          d="M7 1L1 4L7 7"
          fill="none"
          stroke="context-stroke"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>
    </defs>

    {/* CARD */}
    <rect
      x="10"
      y="10"
      width="800"
      height="400"
      rx="20"
      fill="url(#cs-bg)"
      stroke="#e9d5ff"
      filter="url(#cs-shadow)"
    />

    {/* HEADER */}
    <text
      x="40"
      y="46"
      fontSize="13"
      fontWeight="800"
      fill="#0f172a"
      fontFamily="'Space Grotesk',sans-serif"
    >
      Channel sync · bidirectional
    </text>

    <text
      x="40"
      y="64"
      fontSize="11"
      fill="#64748b"
      fontFamily="'DM Sans',sans-serif"
    >
      Inventory · pricing · orders · returns —
      propagated across every channel in real time.
    </text>

    {/* LEFT CHANNELS */}
    {[
      { y: 110, l: "Amazon", c: "#f59e0b" },
      { y: 170, l: "Walmart", c: "#1d4ed8" },
      { y: 230, l: "eBay", c: "#ef4444" },
      { y: 290, l: "Shopify", c: "#10b981" },
    ].map((s, i) => (
      <g key={i}>
        {/* CARD */}
        <g
          className="cs-left-card"
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
        >
          <rect
            x="40"
            y={s.y - 20}
            width="140"
            height="44"
            rx="10"
            fill="white"
            stroke="#e2e8f0"
            filter="url(#cs-shadow)"
          />

          {/* accent */}
          <rect
            x="40"
            y={s.y - 20}
            width="5"
            height="44"
            rx="3"
            fill={s.c}
            opacity=".7"
          />

          <circle
            cx="60"
            cy={s.y + 2}
            r="7"
            fill={s.c}
          />

          <text
            x="76"
            y={s.y + 6}
            fontSize="12"
            fontWeight="800"
            fill="#0f172a"
            fontFamily="'DM Sans',sans-serif"
          >
            {s.l}
          </text>
        </g>

        {/* RIGHT FLOW */}
        <line
          x1="180"
          y1={s.y - 4}
          x2="330"
          y2={s.y - 4}
          stroke={s.c}
          strokeWidth="1.8"
          className="cs-arrow-r"
          markerEnd="url(#arrow-purple)"
          style={{
            animationDelay: `${i * 0.08}s`,
          }}
        />

        {/* RETURN FLOW */}
        <line
          x1="330"
          y1={s.y + 8}
          x2="180"
          y2={s.y + 8}
          stroke="#94a3b8"
          strokeWidth="1.5"
          className="cs-arrow-l"
          markerEnd="url(#arrow-left)"
          style={{
            animationDelay: `${i * 0.12}s`,
          }}
        />
      </g>
    ))}

    {/* CENTER CORE */}
    <g className="cs-core-pop">
      {/* orbit */}
      <circle
        cx="410"
        cy="220"
        r="78"
        stroke="#7c3aed"
        strokeWidth=".8"
        opacity=".25"
        className="cs-orbit"
      />

      {/* pulse */}
      <circle
        cx="410"
        cy="220"
        r="18"
        fill="#7c3aed"
        opacity="0"
        className="cs-pulse-a"
      />

      <circle
        cx="410"
        cy="220"
        r="18"
        fill="#dc2626"
        opacity="0"
        className="cs-pulse-b"
      />

      {/* core box */}
      <rect
        x="330"
        y="95"
        width="160"
        height="215"
        rx="18"
        fill="url(#cs-core)"
        filter="url(#cs-glow)"
      />
      {/* title */}
      <text
        x="410"
        y="142"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fill="white"
        fontFamily="'Space Grotesk',sans-serif"
      >
        Ctasis Sync
      </text>

      <text
        x="410"
        y="162"
        textAnchor="middle"
        fontSize="10"
        fill="white"
        opacity="0.85"
        fontFamily="'DM Sans',sans-serif"
      >
        event bus · &lt; 800ms
      </text>

      {/* heartbeat */}
      <circle
        cx="410"
        cy="220"
        r="22"
        fill="white"
        opacity="0.12"
        className="cs-glow-dot"
      />

      <circle
        cx="410"
        cy="220"
        r="14"
        fill="white"
        opacity="0.9"
      />

      <circle
        cx="410"
        cy="220"
        r="5"
        fill="#4564F7"
        opacity="0.75"
      />

      {/* footer */}
      <text
        x="410"
        y="290"
        textAnchor="middle"
        fontSize="10"
        fill="white"
        opacity="0.9"
        fontFamily="'DM Sans',sans-serif"
      >
        Kafka · RabbitMQ
      </text>
    </g>

    {/* RIGHT OUTPUTS */}
    {[
      { y: 110, l: "Inventory", v: "✓ in sync", c: "#10b981" },
      { y: 170, l: "Pricing", v: "Buy Box 92%", c: "#ea580c" },
      { y: 230, l: "Orders", v: "847 today", c: "#2563eb" },
      { y: 290, l: "Returns", v: "12 open", c: "#94a3b8" },
    ].map((s, i) => (
      <g key={i}>
        {/* flow */}
        <line
          x1="490"
          y1={s.y + 2}
          x2="640"
          y2={s.y + 2}
          stroke={s.c}
          strokeWidth="1.8"
          className="cs-arrow-r"
          markerEnd="url(#arrow-purple)"
          style={{
            animationDelay: `${i * 0.09}s`,
          }}
        />

        {/* card */}
        <g
          className="cs-right-card"
          style={{
            animationDelay: `${i * 0.14}s`,
          }}
        >
          <rect
            x="640"
            y={s.y - 20}
            width="140"
            height="44"
            rx="10"
            fill="white"
            stroke="#e2e8f0"
            filter="url(#cs-shadow)"
          />

          {/* accent */}
          <rect
            x="775"
            y={s.y - 20}
            width="5"
            height="44"
            rx="3"
            fill={s.c}
            opacity=".7"
          />

          <text
            x="654"
            y={s.y - 4}
            fontSize="10"
            fontWeight="700"
            fill="#64748b"
            fontFamily="'DM Sans',sans-serif"
          >
            {s.l}
          </text>

          <text x="654" y={s.y + 14} fontSize="12" fontWeight="800" fill={s.c} fontFamily="'DM Sans',sans-serif"  >
            {s.v}
          </text>
        </g>
      </g>
    ))}

    {/* FOOTER */}
    <text x="410" y="392" textAnchor="middle" fontSize="11" fill="#64748b" fontStyle="italic" fontFamily="'DM Sans',sans-serif" >
      One write here = updated everywhere. Two-way,
      audited, replayable.
    </text>
  </svg>
);


/* ------------------------------------------------------------------ */
/* BlogEditorialMockup — magazine-style hero for blog                  */
/* ------------------------------------------------------------------ */
export const BlogEditorialMockup = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 720 500" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="be-cover" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 32%)" /><stop offset="100%" stopColor="hsl(14 88% 55%)" />
      </linearGradient>
      <linearGradient id="be-bg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#fff7ed" />
      </linearGradient>
      <filter id="be-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feGaussianBlur stdDeviation="12" /><feOffset dy="8" />
        <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect x="10" y="10" width="700" height="480" rx="22" fill="url(#be-bg)" stroke="#e2e8f0" />

    {/* Magazine cover left */}
    <g filter="url(#be-shadow)">
      <rect x="40" y="50" width="280" height="400" rx="16" fill="url(#be-cover)" />
      <rect x="60" y="70" width="80" height="22" rx="11" fill="white" opacity="0.18" />
      <text x="100" y="86" textAnchor="middle" fontSize="10" fontWeight="800" fill="white" letterSpacing="1.5">ISSUE 04</text>
      <text x="60" y="180" fontSize="22" fontWeight="800" fill="white">The Repricer</text>
      <text x="60" y="208" fontSize="22" fontWeight="800" fill="white">Playbook</text>
      <line x1="60" y1="226" x2="240" y2="226" stroke="white" opacity="0.3" />
      <text x="60" y="252" fontSize="11" fill="white" opacity="0.85">Inside the algorithm that</text>
      <text x="60" y="268" fontSize="11" fill="white" opacity="0.85">protected $2.1M in margin</text>
      <text x="60" y="284" fontSize="11" fill="white" opacity="0.85">across 40,000 SKUs.</text>
      {/* Decorative chart */}
      <polyline points="60,400 90,380 120,390 150,360 180,370 210,340 240,350 270,320"
        stroke="white" strokeWidth="2" fill="none" opacity="0.7" />
      <text x="60" y="430" fontSize="9" fill="white" opacity="0.6">— Buy Box win rate, last 30 days</text>
    </g>

    {/* Right column — article cards */}
    {[
      { y: 50, t: "Algorithmic vs rule-based repricing", c: "Strategy", k: "8 min" },
      { y: 160, t: "Walmart Buy Box: a different game", c: "Walmart", k: "9 min" },
      { y: 270, t: "5 analytics that actually move revenue", c: "Analytics", k: "7 min" },
      { y: 380, t: "From CSV to Flipkart in 4 minutes", c: "AI", k: "5 min" },
    ].map((p, i) => (
      <g key={i} filter="url(#be-shadow)">
        <rect x="350" y={p.y} width="320" height="92" rx="14" fill="white" stroke="#e2e8f0" />
        <rect x="366" y={p.y + 18} width="60" height="18" rx="9" fill="hsl(14 88% 92%)" />
        <text x="396" y={p.y + 31} textAnchor="middle" fontSize="9" fontWeight="800" fill="hsl(14 88% 40%)">{p.c}</text>
        <text x="436" y={p.y + 31} fontSize="10" fill="#94a3b8">· {p.k}</text>
        <text x="366" y={p.y + 58} fontSize="13" fontWeight="800" fill="#0f172a">{p.t}</text>
        <text x="366" y={p.y + 78} fontSize="10" fill="#64748b">Read the full article →</text>
      </g>
    ))}
  </svg>
);

/* ------------------------------------------------------------------ */
/* AboutJourneyMockup — founder story / milestones panel               */
/* ------------------------------------------------------------------ */
export const AboutJourneyMockup = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 720 520" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="aj-bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#fff7ed" /><stop offset="100%" stopColor="#eff6ff" />
      </linearGradient>
      <linearGradient id="aj-card" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 38%)" /><stop offset="100%" stopColor="hsl(232 60% 18%)" />
      </linearGradient>
      <linearGradient id="aj-accent" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(14 88% 62%)" /><stop offset="100%" stopColor="hsl(20 90% 50%)" />
      </linearGradient>
      <filter id="aj-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feGaussianBlur stdDeviation="12" /><feOffset dy="8" />
        <feComponentTransfer><feFuncA type="linear" slope="0.2" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect x="10" y="10" width="700" height="500" rx="22" fill="url(#aj-bg)" stroke="#e2e8f0" />

    {/* Founder card */}
    <g filter="url(#aj-shadow)">
      <rect x="40" y="50" width="320" height="420" rx="20" fill="url(#aj-card)" />
      <rect x="60" y="70" width="80" height="22" rx="11" fill="white" opacity="0.18" />
      <text x="100" y="86" textAnchor="middle" fontSize="10" fontWeight="800" fill="white" letterSpacing="1.5">2019 → 2026</text>

      {/* Founders avatars */}
      <g transform="translate(60, 120)">
        <circle cx="28" cy="28" r="28" fill="hsl(14 88% 62%)" />
        <text x="28" y="33" textAnchor="middle" fontSize="14" fontWeight="800" fill="white">RS</text>
        <circle cx="76" cy="28" r="28" fill="hsl(226 71% 60%)" />
        <text x="76" y="33" textAnchor="middle" fontSize="14" fontWeight="800" fill="white">AP</text>
      </g>

      <text x="60" y="220" fontSize="20" fontWeight="800" fill="white">Two engineers,</text>
      <text x="60" y="246" fontSize="20" fontWeight="800" fill="white">one mission.</text>
      <line x1="60" y1="266" x2="160" y2="266" stroke="hsl(14 88% 62%)" strokeWidth="3" />
      <text x="60" y="296" fontSize="11" fill="white" opacity="0.85">We started Ctasis in an Ahmedabad</text>
      <text x="60" y="312" fontSize="11" fill="white" opacity="0.85">garage to end the spreadsheet hell</text>
      <text x="60" y="328" fontSize="11" fill="white" opacity="0.85">of multichannel sellers.</text>

      {/* Stat strip */}
      <g transform="translate(60, 360)">
        {[
          { l: "Sellers", v: "50K+" },
          { l: "Countries", v: "150+" },
          { l: "GMV", v: "$300M" },
        ].map((s, i) => (
          <g key={i} transform={`translate(${i * 90}, 0)`}>
            <text x="0" y="0" fontSize="20" fontWeight="800" fill="white">{s.v}</text>
            <text x="0" y="18" fontSize="10" fill="white" opacity="0.7">{s.l}</text>
          </g>
        ))}
      </g>

      <rect x="60" y="420" width="260" height="32" rx="16" fill="url(#aj-accent)" />
      <text x="190" y="441" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">Read the founder story →</text>
    </g>

    {/* Right milestones */}
    <g>
      <text x="400" y="74" fontSize="11" fontWeight="800" fill="#64748b" letterSpacing="2">MILESTONES</text>
      {[
        { y: 100, year: "2019", t: "Founded in Ahmedabad", c: "hsl(226 71% 50%)" },
        { y: 170, year: "2021", t: "Series A · $12M raised", c: "hsl(14 88% 60%)" },
        { y: 240, year: "2023", t: "Crossed 50 countries", c: "hsl(226 71% 50%)" },
        { y: 310, year: "2024", t: "AI Repricer launched", c: "hsl(14 88% 60%)" },
        { y: 380, year: "2026", t: "100K-seller goal", c: "hsl(150 70% 40%)" },
      ].map((m, i, arr) => (
        <g key={i}>
          {i < arr.length - 1 && (
            <line x1="412" y1={m.y + 8} x2="412" y2={arr[i + 1].y - 8} stroke="#cbd5e1" strokeDasharray="2 4" />
          )}
          <circle cx="412" cy={m.y} r="10" fill="white" stroke={m.c} strokeWidth="3" />
          <circle cx="412" cy={m.y} r="4" fill={m.c} />
          <g filter="url(#aj-shadow)">
            <rect x="436" y={m.y - 22} width="240" height="48" rx="12" fill="white" stroke="#e2e8f0" />
            <text x="448" y={m.y - 6} fontSize="14" fontWeight="800" fill={m.c}>{m.year}</text>
            <text x="448" y={m.y + 14} fontSize="11" fontWeight="700" fill="#0f172a">{m.t}</text>
          </g>
        </g>
      ))}
    </g>
  </svg>
);

/* ------------------------------------------------------------------ */
/* AutomationBuilderDiagram — n8n/Zapier-style node graph              */
/* Used on Services for notification & report automation               */
/* ------------------------------------------------------------------ */
export const AutomationBuilderDiagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 920 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      {/* Background grid */}
      <pattern id="ab-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0H0V24" stroke="#e5e7eb" strokeWidth="1" />
      </pattern>

      {/* Gradients */}
      <linearGradient id="ab-orange" x1="0" x2="1">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>

      <linearGradient id="ab-purple" x1="0" x2="1">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>

      {/* Arrow */}
      <marker
        id="ab-arrow"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto"
      >
        {/* <path d="M9 0L1 3.5L9 9Z" fill="#fb923c" /> */}
        {/* <path d="M6 0L0 3L6 6Z" fill="#f97316" />        <path d="M10 0L0 5L10 10Z" fill="#f97316" /> */}
      </marker>
      {/* <marker
        id="ab-arrow"
        viewBox="0 0 20 20"
        refX="10"
        refY="10"
        markerWidth="10"
        markerHeight="10"
        orient="auto"
      >
        <circle
          cx="10"
          cy="10"
          r="6"
          fill="#f97316"
        />
      </marker> */}
      <linearGradient id="ab-border-bl" x1="0" x2="1" y1="0" y2="0" >
        <stop offset="0%" stopColor="#4338ca" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
      <linearGradient id="ab-card-bl" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#818cf8" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect x="20" y="20" width="880" height="480" rx="24" fill="#f8fafc" stroke="#e2e8f0" />

    {/* Grid area */}
    <rect
      x="60"
      y="60"
      width="800"
      height="400"
      rx="20"
      fill="url(#ab-grid)"
      opacity="0.8"
      stroke="#e5e7eb"
    />


    {/* TRIGGER */}
    <g>
      <rect x="5" y="5" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
      <text x="25" y="40" fontSize="14" fontWeight="800" fill="white">
        TRIGGER
      </text>

      {/* Inner box */}
      <rect
        x="20"
        y="60"
        width="200"
        height="30"
        rx="12"
        fill="#dbeafe"
        stroke="#3c4df0"
        strokeWidth="2"
      />

      <text x="120" y="80" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
        Sellerbuz event
      </text>
      <text x="25" y="120" fontSize="14" fontWeight="800" fill="white">
        Buy Box %, price, stock…
      </text>

      {/* Amazon badge */}
      {/* <rect x="110" y="235" width="96" height="38" rx="10" fill="white" />

      <text x="158" y="258" textAnchor="middle" fontSize="15" fontWeight="800" fill="#193745">
        amazon
      </text> */}
    </g>

    {/* Schedule loop */}
    <g>
      <rect x="5" y="345" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
      <text x="25" y="390" fontSize="14" fontWeight="800" fill="white">
        SCHEDULE · DAILY 09:00
      </text>

      {/* Inner box */}
      <rect
        x="20"
        y="410"
        width="200"
        height="30"
        rx="12"
        fill="#dbeafe"
        stroke="#3c4df0"
        strokeWidth="2"
      />

      <text x="120" y="430" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
        Daily digest report
      </text>
      <text x="25" y="470" fontSize="14" fontWeight="800" fill="white">
        profit · BB · stockouts
      </text>
    </g>
    {/* Condition  */}
    <g>
      <rect x="350" y="40" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
      <text x="374" y="80" fontSize="14" fontWeight="800" fill="white">
        IF / FILTER
      </text>

      {/* Inner box */}
      <rect
        x="370"
        y="100"
        width="200"
        height="30"
        rx="12"
        fill="#dbeafe"
        stroke="#3c4df0"
        strokeWidth="2"
      />

      <text x="470" y="120" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
        Buy Box &lt; 80%
      </text>
      <text x="375" y="160" fontSize="14" fontWeight="800" fill="white">
        on hero SKUs only
      </text>
    </g>
    {/* Webhook to Zapier/n8n */}

    <g>
      <rect x="350" y="340" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
      <text x="374" y="380" fontSize="14" fontWeight="800" fill="white">
        FAN OUT · WEBHOOK
      </text>

      {/* Inner box */}
      <rect
        x="370"
        y="400"
        width="200"
        height="30"
        rx="12"
        fill="#dbeafe"
        stroke="#3c4df0"
        strokeWidth="2"
      />

      <text x="470" y="420" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
        Push to Zapier / n8n
      </text>
      <text x="375" y="460" fontSize="14" fontWeight="800" fill="white">
        JSON · signed · retried
      </text>
    </g>

    {/* Slack */}

    <g>
      <rect x="655" y="5" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
      <text x="684" y="45" fontSize="14" fontWeight="800" fill="white">
        ACTION · SLACK
      </text>

      {/* Inner box */}
      <rect
        x="680"
        y="65"
        width="200"
        height="30"
        rx="12"
        fill="#dbeafe"
        stroke="#3c4df0"
        strokeWidth="2"
      />

      <text x="780" y="85" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
        Post to #pricing
      </text>
      <text x="685" y="125" fontSize="14" fontWeight="800" fill="white">
        @channel · with chart
      </text>
    </g>

    {/* Email PDF */}

    <g>
      <rect x="655" y="200" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
      <text x="684" y="240" fontSize="14" fontWeight="800" fill="white">
        ACTION · EMAIL
      </text>

      {/* Inner box */}
      <rect
        x="680"
        y="260"
        width="200"
        height="30"
        rx="12"
        fill="#dbeafe"
        stroke="#3c4df0"
        strokeWidth="2"
      />

      <text x="780" y="280" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
        Send PDF report
      </text>
      <text x="685" y="320" fontSize="14" fontWeight="800" fill="white">
        to ops@brand.com
      </text>
    </g>
    {/* Zapier */}
    <g>
      <rect
        x="670"
        y="415"
        width="200"
        height="100"
        rx="12"
        fill="#dbeafe"
        stroke="#3c4df0"
        strokeWidth="2"
      />

      <text x="765" y="460" textAnchor="middle" fontSize="22" fontWeight="800" fill="#193745">
        Zapier
      </text>
      <text x="725" y="490" fontSize="14" fontWeight="800" fill="#2b3442">5,000+ apps
      </text>
    </g>
    {/* n8n */}
    <g>
      <rect
        x="120"
        y="220"
        width="200"
        height="100"
        rx="12"
        fill="#dbeafe"
        stroke="#3c4df0"
        strokeWidth="2"
      />

      <text x="215" y="260" textAnchor="middle" fontSize="22" fontWeight="800" fill="#193745">
        n8n
      </text>
      <text x="145" y="290" fontSize="14" fontWeight="800" fill="#2b3442">self-hosted workflows
      </text>
    </g>

    {/* Middle top condition */}
    {/* <g>
      <rect x="420" y="145" width="190" height="64" rx="12" fill="white" stroke="#e2e8f0" />
      <text x="515" y="183" textAnchor="middle" fontSize="15" fontWeight="700" fill="#193745">
        No sales in X hours
      </text>
    </g> */}

    {/* Lines */}
    {/* TRIGGER-IF / FILTER */}
    <path
      d="M264 80  C320 80 320 120 350 120"
      stroke="#3c4df0"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#ab-arrow)"
    />

    <circle r="5" fill="url(#ab-card-bl)">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M260 80  C320 80 320 120 350 120" />
    </circle>

    {/* SCHEDULE · DAILY 09:00-FAN OUT · WEBHOOK */}
    <path
      d="M264 430 C300 430 300 420 350 420" stroke="#3c4df0"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#ab-arrow)"
    />
    <circle r="5" fill="url(#ab-card-bl)">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M264 430 C300 430 300 420 350 420" />
    </circle>




    {/* IF / FILTER -FAN OUT · WEBHOOK */}
    <path
      // d="M460 210 C490 210 490 340 465 340"
      d="M460 210 L460 340"

      stroke="#3c4df0"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#ab-arrow)"
    />
    <circle r="5" fill="url(#ab-card-bl)">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M460 210 L460 340" />
    </circle>

    {/* IF / FILTER -ACTION · SLACK*/}
    <path
      // d="M610 120  C485 120 485 85 660 85"
      d="M610 120 C630 120 630 85 655 85"
      stroke="#3c4df0"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#ab-arrow)"
    />
    <circle r="5" fill="url(#ab-card-bl)">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M610 120 C630 120 630 85 655 85" />
    </circle>

    {/* IF / FILTER -ACTION · EMAIL */}

    <path
      // d="M610 120  C485 120 485 85 660 85"
      d="M610 120 C630 120 630 280 655 280"
      stroke="#3c4df0"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#ab-arrow)"
    />
    <circle r="5" fill="url(#ab-card-bl)">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M610 120 C630 120 630 280 655 280" />
    </circle>
    {/* FAN OUT · WEBHOOK -Zapier */}

    <path
      d="M610 420 C630 420 630 460 670 460"
      stroke="#3c4df0"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#ab-arrow)"
    />
    <circle r="5" fill="url(#ab-card-bl)">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M610 420 C630 420 630 460 670 460" />
    </circle>
    {/* FAN OUT · WEBHOOK -n8n */}
    <path
      d="M460 340 C400 340 400 270 320 270"
      stroke="#3c4df0"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#ab-arrow)"
    />
    <circle r="5" fill="url(#ab-card-bl)">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M460 340 C400 340 400 270 320 270" />
    </circle>

  </svg>
);
/* ------------------------------------------------------------------ */
/* ReportingConsoleMockup — scheduled reports + delivery channels      */
/* Used on Infrastructure (notifications & reports section)            */
/* ------------------------------------------------------------------ */
export const ReportingConsoleMockup = (props: SVGProps<SVGSVGElement>) => {
  const REPORTS = [
    { t: "Daily profit digest", c: "Slack · #sales", time: "09:00", col: "#10b981", live: true },
    { t: "Weekly Buy Box recap", c: "Email · ops team", time: "Mon 08:00", col: "#2563eb", live: false },
    { t: "Stockout alert", c: "SMS · on-call", time: "real-time", col: "#ef4444", live: true },
    { t: "Returns spike (>5%)", c: "Slack + Webhook", time: "real-time", col: "#7c3aed", live: true },
    { t: "Monthly P&L PDF", c: "Email · finance@", time: "1st 07:00", col: "#0ea5e9", live: false },
    { t: "Competitor moved", c: "n8n webhook", time: "real-time", col: "#ea580c", live: true },
  ];

  const KPIS = [
    { l: "Revenue", v: "$48.2k", d: "+12%", col: "#7c3aed" },
    { l: "Margin", v: "31.4%", d: "+1.6%", col: "#2563eb" },
    { l: "Buy Box", v: "92%", d: "+4%", col: "#10b981" },
  ];

  const CHANNELS = [
    { l: "Slack", c: "#10b981", on: true },
    { l: "Email", c: "#2563eb", on: true },
    { l: "SMS", c: "#ef4444", on: true },
    { l: "Webhook", c: "#7c3aed", on: true },
    { l: "Zapier", c: "#ea580c", on: true },
    { l: "n8n", c: "#7c3aed", on: true },
    { l: "Teams", c: "#2563eb", on: false },
    { l: "PagerDuty", c: "#ef4444", on: false },
  ];

  // Sparkline path points (D-values for the profit line)
  const SPARK_PTS = [
    [392, 252], [418, 236], [444, 248], [470, 218],
    [496, 226], [522, 205], [548, 210], [574, 188],
    [600, 196], [626, 172], [652, 180], [672, 162],
  ];

  function sparkPath(pts: number[][]): string {
    return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  }

  return (
    <svg
      viewBox="0 0 820 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Background */}
        <radialGradient id="rc-bg" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#f6f2ff" />
          <stop offset="55%" stopColor="#fff8f2" />
          <stop offset="100%" stopColor="#eff6ff" />
        </radialGradient>

        {/* Profit line gradient */}
        <linearGradient id="rc-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>

        {/* Chart area fill */}
        <linearGradient id="rc-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>

        {/* Card shadow filter */}
        <filter id="rc-shadow" x="-5%" y="-5%" width="110%" height="115%">
          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#c4b5fd" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* ── Outer card ── */}
      <rect
        x="10" y="10" width="800" height="540" rx="22"
        fill="url(#rc-bg)"
        stroke="#ede9fe" strokeWidth="1.2"
        filter="url(#rc-shadow)"
      />

      {/* ── Header ── */}
      <text
        x="36" y="52"
        fontFamily="'Space Grotesk','DM Sans',sans-serif"
        fontSize="16" fontWeight="700" fill="#1a1340" letterSpacing="-0.3"
      >
        Reports &amp; Notifications
      </text>
      {/* Badge */}
      <rect x="36" y="62" width="182" height="22" rx="11" fill="#ede9fe" />
      <circle cx="50" cy="73" r="4" fill="#7c3aed" className="rc-glow" />
      <text
        x="60" y="77"
        fontFamily="'DM Sans',sans-serif"
        fontSize="10" fontWeight="700" fill="#5b21b6"
      >
        12 schedules · 4 channels active
      </text>

      {/* ══════════════════ LEFT PANEL ══════════════════ */}
      <g>
        {/* Panel bg */}
        <rect
          x="30" y="98" width="332" height="440" rx="16"
          fill="white" stroke="#ede9fe" strokeWidth="1"
          filter="url(#rc-shadow)"
        />
        {/* Panel header */}
        <text
          x="48" y="123"
          fontFamily="'DM Sans',sans-serif"
          fontSize="12" fontWeight="700" fill="#1e1b4b"
        >
          Scheduled reports
        </text>
        <text
          x="348" y="123"
          textAnchor="end"
          fontFamily="'DM Sans',sans-serif"
          fontSize="11" fontWeight="700" fill="#7c3aed"
        >
          + New
        </text>
        <line x1="30" y1="132" x2="362" y2="132" stroke="#f3f0ff" strokeWidth="1" />

        {/* Report rows */}
        {REPORTS.map((r, i) => {
          const ry = 144 + i * 65;
          const isActive = i === 0;
          return (
            <g
              key={i}
              className="rc-row-anim"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Row bg */}
              <rect
                x="36" y={ry} width="320" height="54" rx="10"
                fill={isActive ? "#f5f2ff" : "white"}
                stroke={isActive ? "#c4b5fd" : "#f3f0ff"}
                strokeWidth={isActive ? 1.2 : 1}
              />
              {/* Left accent */}
              {isActive && (
                <rect x="36" y={ry} width="4" height="54" rx="2" fill={r.col} opacity="0.75" />
              )}

              {/* Live pulse dot or static dot */}
              {r.live ? (
                <>
                  <circle cx="58" cy={ry + 27} r="5" fill={r.col} opacity="0" className="rc-pulse-a" />
                  <circle cx="58" cy={ry + 27} r="5" fill={r.col} opacity="0" className="rc-pulse-b" />
                  <circle cx="58" cy={ry + 27} r="5" fill={r.col} />
                </>
              ) : (
                <circle cx="58" cy={ry + 27} r="5" fill={r.col} opacity="0.75" />
              )}

              {/* Title */}
              <text
                x="72" y={ry + 23}
                fontFamily="'DM Sans',sans-serif"
                fontSize="12" fontWeight="700" fill="#1e1b4b"
              >
                {r.t}
              </text>
              {/* Subtitle */}
              <text
                x="72" y={ry + 38}
                fontFamily="'DM Sans',sans-serif"
                fontSize="10" fill="#94a3b8"
              >
                {r.c}
              </text>
              {/* Time */}
              <text
                x="342" y={ry + 30}
                textAnchor="end"
                fontFamily="'DM Sans',sans-serif"
                fontSize="11" fontWeight="700" fill="#64748b"
              >
                {r.time}
              </text>
            </g>
          );
        })}
      </g>

      {/* ══════════════════ RIGHT TOP: Chart preview ══════════════════ */}
      <g className="rc-right-anim" style={{ animationDelay: "0.1s" }}>
        <rect
          x="378" y="98" width="402" height="230" rx="16"
          fill="white" stroke="#ede9fe" strokeWidth="1"
          filter="url(#rc-shadow)"
        />
        <text
          x="394" y="123"
          fontFamily="'DM Sans',sans-serif"
          fontSize="12" fontWeight="700" fill="#1a1340"
        >
          Daily profit digest · preview
        </text>
        <rect x="722" y="110" width="48" height="18" rx="6" fill="#eff6ff" />
        <text
          x="746" y="122"
          textAnchor="middle"
          fontFamily="'DM Sans',sans-serif"
          fontSize="9.5" fontWeight="700" fill="#2563eb"
        >
          PDF · 2pp
        </text>

        {/* Y-axis baseline */}
        <line x1="392" y1="268" x2="768" y2="268" stroke="#f0eeff" strokeWidth="1" />
        <line x1="392" y1="245" x2="768" y2="245" stroke="#f0eeff" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="392" y1="222" x2="768" y2="222" stroke="#f0eeff" strokeWidth="1" strokeDasharray="2 3" />

        {/* Y labels */}
        {[["$52k", 168], ["$45k", 191], ["$38k", 214]].map(([l, y], i) => (
          <text key={i} x="388" y={Number(y)} textAnchor="end" fontFamily="'DM Sans',sans-serif" fontSize="9" fill="#cbd5e1">{l}</text>
        ))}

        {/* Area fill under sparkline */}
        <path
          d={`${sparkPath(SPARK_PTS)} L ${SPARK_PTS[SPARK_PTS.length - 1][0]} 268 L ${SPARK_PTS[0][0]} 268 Z`}
          fill="url(#rc-fill)"
        />

        {/* Sparkline */}
        <path
          d={sparkPath(SPARK_PTS)}
          stroke="url(#rc-line)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="rc-line-draw"
        />

        {/* Endpoint glow dot */}
        <circle cx="672" cy="180" r="4" fill="#dc2626" opacity="0.6" className="rc-pulse-a" />
        <circle cx="672" cy="180" r="4" fill="#dc2626" />

        {/* KPI chips */}
        {KPIS.map((k, i) => {
          const kx = 394 + i * 126;
          return (
            <g
              key={i}
              className="rc-kpi-anim"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <rect x={kx} y="278" width="118" height="42" rx="9" fill="#faf8ff" stroke={k.col} strokeWidth="0" />
              <rect x={kx} y="278" width="4" height="42" rx="2" fill={k.col} opacity="0.65" />
              <text
                x={kx + 12} y="292"
                fontFamily="'DM Sans',sans-serif"
                fontSize="9" fontWeight="700" fill="#94a3b8"
                letterSpacing="0.5"
              >
                {k.l.toUpperCase()}
              </text>
              <text
                x={kx + 12} y="307"
                fontFamily="'DM Sans',sans-serif"
                fontSize="13" fontWeight="700" fill={k.col}
              >
                {k.v}
              </text>
              <text
                x={kx + 12} y="316"
                fontFamily="'DM Sans',sans-serif"
                fontSize="0" fill="transparent"
              >
                {k.d}
              </text>
              <text
                x={kx + 70} y="307"
                fontFamily="'DM Sans',sans-serif"
                fontSize="10" fontWeight="700" fill={k.col}
              >
                {k.d} ↑
              </text>
            </g>
          );
        })}
      </g>

      {/* ══════════════════ RIGHT BOTTOM: Channels ══════════════════ */}
      <g className="rc-right-anim" style={{ animationDelay: "0.2s" }}>
        <rect
          x="378" y="340" width="402" height="198" rx="16"
          fill="white" stroke="#ede9fe" strokeWidth="1"
          filter="url(#rc-shadow)"
        />
        <text
          x="394" y="363"
          fontFamily="'DM Sans',sans-serif"
          fontSize="12" fontWeight="700" fill="#1a1340"
        >
          Delivery channels
        </text>

        {/* Channel chips — 4 per row */}
        {CHANNELS.map((ch, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const cx2 = 390 + col * 98;
          const cy2 = 375 + row * 60;
          const opacity = ch.on ? 1 : 0.38;

          return (
            <g
              key={i}
              className="rc-chip-anim"
              style={{ animationDelay: `${0.25 + i * 0.06}s`, opacity }}
            >
              <rect
                x={cx2} y={cy2} width="90" height="44" rx="10"
                fill={ch.on ? "white" : "#f8f7ff"}
                stroke={ch.c}
                strokeWidth={ch.on ? 1.6 : 0.8}
              />
              <circle cx={cx2 + 14} cy={cy2 + 22} r="5" fill={ch.c} />
              <text
                x={cx2 + 25} y={cy2 + 26}
                fontFamily="'DM Sans',sans-serif"
                fontSize="11" fontWeight="700"
                fill={ch.on ? "#1e1b4b" : "#94a3b8"}
              >
                {ch.l}
              </text>
            </g>
          );
        })}

        {/* Footer */}
        <text
          x="394" y="508"
          fontFamily="'DM Sans',sans-serif"
          fontSize="10" fill="#94a3b8"
        >
          Toggle a channel — Ctasis re-routes instantly. No code, no redeploy.
        </text>
      </g>

      {/* ── Bottom footer ── */}
      <text
        x="410" y="552"
        textAnchor="middle"
        fontFamily="'DM Sans',sans-serif"
        fontSize="10.5" fill="#9ca3af"
        fontStyle="italic"
      >
        One write here = updated everywhere. Two-way, audited, replayable.
      </text>
    </svg>
  )
};

/* ------------------------------------------------------------------ */
/* AlertTriageDiagram — incident triage visual                         */
/* ------------------------------------------------------------------ */
export const AlertTriageDiagram = (props: SVGProps<SVGSVGElement>) => {
  interface AlertCard {
    t: string;
    s: string;
    lane: 0 | 1 | 2;
    cardIdx: number;
  }

  const CARDS: AlertCard[] = [
    { t: "Inventory restocked", s: "Amazon · SKU 8632", lane: 0, cardIdx: 0 },
    { t: "Listing approved", s: "eBay · auto-publish", lane: 0, cardIdx: 1 },
    { t: "Buy Box dropped", s: "Walmart · 4 SKUs", lane: 1, cardIdx: 2 },
    { t: "Margin near floor", s: "SKU 4421 · 12.4%", lane: 1, cardIdx: 3 },
    { t: "Stockout in 4h", s: "Hero SKU · FBA", lane: 2, cardIdx: 4 },
    { t: "Returns spike +18%", s: "Shopify · last 1h", lane: 2, cardIdx: 5 },
  ];

  const LANE_META = [
    { label: "INFO", dotColor: "#3b82f6", laneBg: "#eff6ff", laneBorder: "#bfdbfe", cardBg: "#ffffff", cardBorder: "#dbeafe", labelColor: "#1d4ed8" },
    { label: "WARNING", dotColor: "#f59e0b", laneBg: "#fffbeb", laneBorder: "#fde68a", cardBg: "#ffffff", cardBorder: "#fef3c7", labelColor: "#b45309" },
    { label: "CRITICAL", dotColor: "#f43f5e", laneBg: "#fff1f2", laneBorder: "#fecdd3", cardBg: "#ffffff", cardBorder: "#fce7f3", labelColor: "#be123c" },
  ];

  const LANE_X = [36, 264, 492];
  const LANE_W = 210;
  const LANE_H = 220;
  const LANE_Y = 92;
  const CARD_W = 186;
  const CARD_H = 52;
  const CARD_X_OFF = 12;
  const CARD_Y_START = 126;
  const CARD_GAP = 62;

  return (
    <svg
      viewBox="0 0 738 368"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Outer card gradient */}
        <linearGradient id="at-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f0f4ff" />
          <stop offset="55%" stopColor="#fdf8ff" />
          <stop offset="100%" stopColor="#fff0f5" />
        </linearGradient>

        {/* Card shadow */}
        <filter id="at-card-shadow" x="-5%" y="-5%" width="110%" height="114%">
          <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#c4b5fd" floodOpacity="0.16" />
        </filter>
        <filter id="at-lane-shadow" x="-6%" y="-6%" width="112%" height="116%">
          <feDropShadow dx="0" dy="1" stdDeviation="4" floodColor="#c4b5fd" floodOpacity="0.10" />
        </filter>
      </defs>

      {/* ── Outer card ── */}
      <rect
        x="8" y="8" width="722" height="352" rx="20"
        fill="url(#at-bg)"
        stroke="#e0d9f7" strokeWidth="1.2"
        filter="url(#at-card-shadow)"
      />

      {/* ── Header ── */}
      <g className="at-header-anim">
        {/* LIVE badge */}
        <rect x="28" y="26" width="56" height="22" rx="11" fill="#fff" stroke="#e0d9f7" strokeWidth="0.8" />
        <circle cx="42" cy="37" r="4" fill="#10b981" className="at-live-glow" />
        <text
          x="50" y="41"
          fontFamily="'DM Sans',sans-serif"
          fontSize="9.5" fontWeight="700" fill="#059669" letterSpacing="0.5"
        >
          LIVE
        </text>

        {/* Title */}
        <text
          x="92" y="43"
          fontFamily="'Space Grotesk','DM Sans',sans-serif"
          fontSize="16" fontWeight="700" fill="#1a1340" letterSpacing="-0.2"
        >
          Alert triage
        </text>
      </g>

      {/* ── 3 Lane columns ── */}
      {LANE_META.map((lane, li) => (
        <g key={li} className={`at-lane-${li}-anim`}>
          {/* Lane background card */}
          <rect
            x={LANE_X[li]} y={LANE_Y}
            width={LANE_W} height={LANE_H}
            rx="14"
            fill={lane.laneBg}
            stroke={lane.laneBorder}
            strokeWidth="1"
            filter="url(#at-lane-shadow)"
          />
          {/* Lane label */}
          <text
            x={LANE_X[li] + 12} y={LANE_Y + 22}
            fontFamily="'DM Sans',sans-serif"
            fontSize="9.5" fontWeight="700" fill={lane.labelColor}
            letterSpacing="1.8"
          >
            {lane.label}
          </text>
          {/* Label underline */}
          <line
            x1={LANE_X[li] + 12} y1={LANE_Y + 30}
            x2={LANE_X[li] + LANE_W - 12} y2={LANE_Y + 30}
            stroke={lane.laneBorder} strokeWidth="1"
          />

          {/* Cards in this lane */}
          {CARDS.filter(c => c.lane === li).map((card, ci) => {
            const cx = LANE_X[li] + CARD_X_OFF;
            const cy = CARD_Y_START + ci * CARD_GAP;
            const isCritical = li === 2;

            return (
              <g key={ci} className={`at-card-anim-${card.cardIdx}`}>
                {/* Card bg */}
                <rect
                  x={cx} y={cy}
                  width={CARD_W} height={CARD_H}
                  rx="10"
                  fill={lane.cardBg}
                  stroke={lane.cardBorder}
                  strokeWidth="1"
                />

                {/* Pulse rings behind dot */}
                <circle
                  cx={cx + 16} cy={cy + 26}
                  r="5" fill={lane.dotColor} opacity="0"
                  className="at-pulse-a"
                  style={{ animationDelay: `${ci * 0.4}s` }}
                />
                <circle
                  cx={cx + 16} cy={cy + 26}
                  r="5" fill={lane.dotColor} opacity="0"
                  className="at-pulse-b"
                  style={{ animationDelay: `${ci * 0.4 + 0.8}s` }}
                />

                {/* Status dot */}
                <circle
                  cx={cx + 16} cy={cy + 26}
                  r="5" fill={lane.dotColor}
                  className={isCritical ? "at-critical-dot" : undefined}
                  style={isCritical ? { animationDelay: `${ci * 0.35}s` } : undefined}
                />

                {/* Card text */}
                <text
                  x={cx + 28} y={cy + 22}
                  fontFamily="'DM Sans',sans-serif"
                  fontSize="12" fontWeight="700" fill="#1e1b4b"
                >
                  {card.t}
                </text>
                <text
                  x={cx + 28} y={cy + 38}
                  fontFamily="'DM Sans',sans-serif"
                  fontSize="10.5" fill="#6b7280"
                >
                  {card.s}
                </text>
              </g>
            );
          })}
        </g>
      ))}

      {/* ── Footer ticker ── */}
      <text
        x="369" y="340"
        textAnchor="middle"
        fontFamily="'DM Sans',sans-serif"
        fontSize="10.5" fill="#9ca3af"
        fontStyle="italic"
      >
        Routed via your rules to Slack / Email / SMS / Zapier / n8n in under a second.
      </text>
    </svg>
  )
};

/* ------------------------------------------------------------------ */
/* ArticleHeroMockup — visual for blog detail pages                    */
/* ------------------------------------------------------------------ */
export const ArticleHeroMockup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 720 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <defs>
      {/* Light background gradient — soft sky-to-lavender */}
      <linearGradient id="ah-bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="45%" stopColor="#ede9fe" />
        <stop offset="75%" stopColor="#fce7f3" />
        <stop offset="100%" stopColor="#fff7ed" />
      </linearGradient>

      {/* Ambient glow blobs */}
      <linearGradient id="glow1" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="glow2" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#fb923c" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
      </linearGradient>

      {/* Chart fill under the algo line */}
      <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
      </linearGradient>

      {/* Card drop shadow */}
      <filter id="card-shadow" x="-8%" y="-8%" width="116%" height="120%">
        <feDropShadow
          dx="0"
          dy="6"
          stdDeviation="12"
          floodColor="#94a3b8"
          floodOpacity="0.25"
        />
      </filter>

      {/* Paper card shadow */}
      <filter id="paper-shadow" x="-5%" y="-5%" width="110%" height="115%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="8"
          floodColor="#94a3b8"
          floodOpacity="0.18"
        />
      </filter>

      {/* Chart card shadow */}
      <filter id="chart-shadow" x="-5%" y="-5%" width="110%" height="115%">
        <feDropShadow
          dx="0"
          dy="3"
          stdDeviation="6"
          floodColor="#94a3b8"
          floodOpacity="0.15"
        />
      </filter>
    </defs>

    {/* ── BACKGROUND ── */}
    <rect
      x="10"
      y="10"
      width="700"
      height="400"
      rx="22"
      fill="url(#ah-bg)"
      filter="url(#card-shadow)"
    />

    {/* Subtle border */}
    <rect
      x="10"
      y="10"
      width="700"
      height="400"
      rx="22"
      fill="none"
      stroke="#c7d2fe"
      strokeWidth="1"
    />

    {/* Ambient glow blobs */}
    <ellipse cx="160" cy="120" rx="140" ry="100" fill="url(#glow1)" />
    <ellipse cx="580" cy="320" rx="160" ry="110" fill="url(#glow2)" />

    {/* Subtle grid dots */}
    <g opacity="0.12">
      {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420].map((cx) =>
        [60, 100, 140, 180, 220, 260, 300, 340, 380].map((cy) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.2" fill="#6366f1" />
        ))
      )}
    </g>

    {/* ── PAPER CARD ── */}
    <rect
      x="48"
      y="52"
      width="360"
      height="298"
      rx="16"
      fill="white"
      filter="url(#paper-shadow)"
    />
    {/* Paper top accent strip */}
    <rect x="48" y="52" width="360" height="6" rx="3" fill="#6366f1" opacity="0.15" />

    {/* Category pill */}
    <rect x="68" y="72" width="68" height="16" rx="8" fill="#ede9fe" />
    <text
      x="102"
      y="84"
      textAnchor="middle"
      fontSize="8.5"
      fontWeight="700"
      fill="#6d28d9"
      fontFamily="Georgia, serif"
    >
      Repricing
    </text>

    {/* Article title lines */}
    <rect x="68" y="110" width="300" height="13" rx="3" fill="url(#glow1)" />
    <text
      x="200"
      y="120"
      textAnchor="middle"
      fontSize="8"
      fontWeight="700"
      fill="#64748b"
      fontFamily="Georgia, serif"
    >
      Most sellers start with rules and outgrow them in a quarter.
    </text>

    <rect x="68" y="130" width="260" height="13" rx="3" fill="url(#glow1)" />
    <text
      x="200"
      y="140"
      textAnchor="middle"
      fontSize="8"
      fontWeight="700"
      fill="#64748b"
      fontFamily="Georgia, serif"
    >
      Here's the honest breakdown on Buy Box wins and margins.
    </text>
    {/* Subtitle line */}
    <rect x="68" y="160" width="280" height="8" rx="3" fill="url(#glow2)" />

    <rect x="68" y="180" width="275" height="110" rx="12" fill="url(#glow1)" />
    <circle cx="84" cy="200" r="5" fill="#6366f1" />
    <circle cx="84" cy="230" r="5" fill="#6366f1" />
    <circle cx="84" cy="260" r="5" fill="#6366f1" />
    <text
      x="95"
      y="203"
      fontSize="9"
      fontWeight="800"
      fill="#475569"
      fontFamily="Georgia, serif"
      letterSpacing="0.5"
    >
      Per-SKU minimum margin (e.g. 18%)
    </text>
    <text
      x="95"
      y="233"
      fontSize="9"
      fontWeight="800"
      fill="#475569"
      fontFamily="Georgia, serif"
      letterSpacing="0.5"
    >
      Per-brand MAP guard rails
    </text>
    <text
      x="95"
      y="263"
      fontSize="9"
      fontWeight="800"
      fill="#475569"
      fontFamily="Georgia, serif"
      letterSpacing="0.5"
    >
      Inventory-velocity overrides for clearance
    </text>

    {/* Divider */}
    <line x1="68" y1="310" x2="388" y2="310" stroke="#e2e8f0" strokeWidth="1" />

    {/* Author row inside paper */}
    <circle cx="84" cy="330" r="10" fill="#6366f1" />
    <text
      x="84"
      y="334"
      textAnchor="middle"
      fontSize="8"
      fontWeight="700"
      fill="white"
      fontFamily="Georgia, serif"
    >
      PM
    </text>
    <text
      x="100"
      y="326"
      fontSize="8"
      fontWeight="600"
      fill="#334155"
      fontFamily="Georgia, serif"
    >
      Priya Mehta
    </text>
    <text
      x="100"
      y="337"
      fontSize="7"
      fill="#94a3b8"
      fontFamily="Georgia, serif"
    >
      Ctasis team · Apr 18, 2026
    </text>

    {/* ── CHART CARD ── */}
    <rect
      x="432"
      y="52"
      width="248"
      height="248"
      rx="16"
      fill="white"
      filter="url(#chart-shadow)"
    />
    <rect
      x="432"
      y="52"
      width="248"
      height="248"
      rx="16"
      fill="none"
      stroke="#e2e8f0"
      strokeWidth="0.8"
    />

    {/* Chart header */}
    <text
      x="452"
      y="76"
      fontSize="9"
      fontWeight="800"
      fill="#475569"
      fontFamily="Georgia, serif"
      letterSpacing="0.5"
    >
      BUY BOX % vs PRICE
    </text>

    {/* Y-axis labels */}
    {[100, 80, 60, 40].map((val, i) => (
      <text
        key={val}
        x="444"
        y={115 + i * 32}
        fontSize="7"
        fill="#64748b"
        textAnchor="end"
        fontFamily="Georgia, serif"
      >
        {val}%
      </text>
    ))}

    {/* Grid lines */}
    {[112, 144, 176, 208].map((y) => (
      <line
        key={y}
        x1="452"
        x2="660"
        y1={y}
        y2={y}
        stroke="#475569"
        strokeWidth="1"
      />
    ))}

    {/* Chart fill area under algo line */}
    <path
      d="M452 230 L482 210 L512 218 L542 192 L572 178 L602 160 L632 168 L662 140 L662 240 L452 240 Z"
      fill="url(#chart-fill)"
    />

    {/* Algo line (solid indigo) */}
    <path
      d="M452 230 L482 210 L512 218 L542 192 L572 178 L602 160 L632 168 L662 140"
      stroke="#6366f1"
      strokeWidth="2.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Floor protected line (dashed orange) */}
    <path
      d="M452 238 L482 232 L512 226 L542 220 L572 214 L602 208 L632 202 L662 196"
      stroke="#f97316"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeDasharray="4 3"
    />

    {/* Data point dots — algo */}
    {[
      [452, 230], [482, 210], [512, 218], [542, 192],
      [572, 178], [602, 160], [632, 168], [662, 140],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="#6366f1" />
    ))}

    {/* +7% callout badge */}
    <rect x="622" y="126" width="32" height="15" rx="7" fill="#6366f1" />
    <text
      x="638"
      y="137"
      textAnchor="middle"
      fontSize="7.5"
      fontWeight="700"
      fill="white"
      fontFamily="Georgia, serif"
    >
      +7%
    </text>

    {/* Legend */}
    <line x1="452" y1="252" x2="466" y2="252" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
    <text x="470" y="256" fontSize="8" fill="#64748b" fontFamily="Georgia, serif">
      algo wins
    </text>
    <line
      x1="514"
      y1="252"
      x2="528"
      y2="252"
      stroke="#f97316"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 3"
    />
    <text x="532" y="256" fontSize="8" fill="#64748b" fontFamily="Georgia, serif">
      floor protected
    </text>

    {/* Metric callout bar */}
    <rect x="452" y="264" width="210" height="14" rx="5" fill="#f8fafc" />
    <text
      x="557"
      y="274"
      textAnchor="middle"
      fontSize="7.5"
      fill="#64748b"
      fontFamily="Georgia, serif"
    >
      Buy Box share 88–94% · Avg sell price ↑4–7%
    </text>

    {/* ── STAT CHIPS BOTTOM RIGHT ── */}
    {[
      { x: 432, label: "3.2×", sub: "Buy Box wins", accent: "#6366f1" },
      { x: 514, label: "200+", sub: "SKU threshold", accent: "#0ea5e9" },
      { x: 596, label: "24/7", sub: "Auto repricing", accent: "#10b981" },
    ].map(({ x, label, sub, accent }) => (
      <g key={x}>
        <rect
          x={x}
          y="315"
          width="72"
          height="40"
          rx="12"
          fill="white"
          stroke="#e2e8f0"
          strokeWidth="0.8"
        />
        <text
          x={x + 36}
          y="332"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill={accent}
          fontFamily="Georgia, serif"
        >
          {label}
        </text>
        <text
          x={x + 36}
          y="346"
          textAnchor="middle"
          fontSize="7"
          fill="#94a3b8"
          fontFamily="Georgia, serif"
        >
          {sub}
        </text>
      </g>
    ))}

    {/* ── BADGES BOTTOM LEFT ── */}
    {/* Strategy badge */}
    <rect x="48" y="368" width="78" height="24" rx="12" fill="#ede9fe" />
    <text
      x="87"
      y="384"
      textAnchor="middle"
      fontSize="9.5"
      fontWeight="700"
      fill="#4f46e5"
      fontFamily="Georgia, serif"
    >
      Strategy
    </text>

    {/* Read time badge */}
    <rect x="134" y="368" width="82" height="24" rx="12" fill="#fff7ed" />
    <text
      x="175"
      y="384"
      textAnchor="middle"
      fontSize="9.5"
      fontWeight="700"
      fill="#c2410c"
      fontFamily="Georgia, serif"
    >
      8 min read
    </text>

    {/* Date badge */}
    <rect
      x="224"
      y="368"
      width="88"
      height="24"
      rx="12"
      fill="white"
      stroke="#e2e8f0"
      strokeWidth="0.8"
    />
    <text
      x="268"
      y="384"
      textAnchor="middle"
      fontSize="9.5"
      fontWeight="600"
      fill="#64748b"
      fontFamily="Georgia, serif"
    >
      Apr 18, 2026
    </text>
  </svg>
);