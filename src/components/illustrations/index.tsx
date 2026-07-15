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
export const SellerHeroMockup = (props: SVGProps<SVGSVGElement>) => {
  const skeletonRowsAbove = [165, 195];
  const skeletonRowsBelow = [360, 390, 420, 450];

  const kpis = [
    { x: 365, label: "ORDERS", value: "850", delta: "+10%", icon: "bag" as const },
    { x: 445, label: "BUY BOX", value: "82%", delta: "+9%", icon: "target" as const },
    { x: 525, label: "REVENUE", value: "$21.5k", delta: "+19.4%", icon: "dollar" as const },
    { x: 605, label: "PROFIT", value: "$6.8k", delta: "+23.6%", icon: "chart" as const },
  ];

  const features = [
    { label: "Live performance", desc: "Real-time updates", icon: "trend" as const },
    { label: "Smart repricing", desc: "Maximize Buy Box", icon: "pulse" as const },
    { label: "Higher profit", desc: "Automated insights", icon: "target" as const },
    { label: "Healthy margin", desc: "Sustainable growth", icon: "shield" as const },
    { label: "Scale faster", desc: "Grow your business", icon: "rocket" as const },
  ];

  const featureX = [40, 210, 370, 530, 680];

  // Shared palette — matched to the reference screenshot
  const indigo = "hsl(226 71% 50%)";       // primary accent (tabs, underline, product accent, icons)
  const indigoDark = "hsl(226 71% 40%)";    // CTASIS text / active tab text
  const indigoIcon = "hsl(226 71% 45%)";    // KPI + feature icon stroke
  const indigoSoft = "hsl(226 71% 95%)";    // light pill/icon backgrounds
  const green = "hsl(150 70% 40%)";         // positive delta text
  const greenDot = "hsl(150 70% 45%)";      // in-stock dot
  const greenBg = "hsl(150 70% 92%)";       // in-stock pill bg
  const greenText = "hsl(150 70% 30%)";     // in-stock text
  const slate900 = "#0f172a";
  const slate500 = "#64748b";
  const slate400 = "#94a3b8";
  const border = "#E2E8F0";

  return (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="shm-accent" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="hsl(226 71% 50%)" />
          <stop offset="100%" stopColor="hsl(226 71% 40%)" />
        </linearGradient>
        <linearGradient id="shm-shine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

      </defs>
      {/* Back browser frame – the "listings table" */}
      <g>
        <rect x="20" y="20" width="720" height="470" rx="20" fill="#FFFFFF" stroke={border} strokeWidth="1.25" />
        {/* top bar */}
        <circle cx="64" cy="64" r="5.5" fill="#ef4444" />
        <circle cx="80" cy="64" r="5.5" fill="#f59e0b" />
        <circle cx="96" cy="64" r="5.5" fill="#10b981" />
        <rect x="120" y="56" width="140" height="16" rx="8" fill={indigoSoft} />
        <text x="190" y="68" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill={indigoDark}>CTASIS · Listings</text>
        {/* tabs */}
        <text x="290" y="68" fontFamily="Inter,system-ui" fontSize="12" fontWeight={600} fill={indigoDark}>Overview</text>
        <text x="360" y="68" fontFamily="Inter,system-ui" fontSize="12" fill={slate500}>Listings</text>
        <text x="420" y="68" fontFamily="Inter,system-ui" fontSize="12" fill={slate500}>Settings</text>
        <rect x="284" y="76" width="56" height="2" rx="1" fill={indigo} />
        {/* status pill */}
        <rect x="620" y="50" width="75" height="24" rx="11" fill={greenBg} />
        <circle cx="630" cy="61" r="4" fill={greenDot} />
        <text x="685" y="65" textAnchor="end" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill={greenText}>In stock</text>

        {/* Filter chips with icons */}
        <rect x="64" y="100" width="112" height="24" rx="12" fill="hsl(220 20% 96%)" />
        <g transform="translate(78,106)" stroke={slate500} strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="0" y="1" width="10" height="9" rx="1.5" />
          <line x1="0" y1="4" x2="10" y2="4" />
          <line x1="2.5" y1="0" x2="2.5" y2="2" />
          <line x1="7.5" y1="0" x2="7.5" y2="2" />
        </g>
        <text x="94" y="116" fontFamily="Inter,system-ui" fontSize="11" fill={slate500}>This month ▾</text>

        <rect x="188" y="100" width="132" height="24" rx="12" fill="hsl(220 20% 96%)" />
        <g transform="translate(202,116)" stroke={slate500} strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 0 L4 -5 L7 -2 L11 -8" />
          <path d="M7 -8 L11 -8 L11 -4" />
        </g>
        <text x="218" y="116" fontFamily="Inter,system-ui" fontSize="11" fill={slate500}>Compared to ▾</text>

        {/* Skeleton rows with left avatar dots */}
        {[...skeletonRowsAbove, ...skeletonRowsBelow].map((y, i) => (
          <g key={y} opacity={0.55 - (i % 4) * 0.06}>
            <circle cx="76" cy={y + 7} r="4.5" fill="hsl(220 20% 88%)" />
            <rect x="100" y={y} width="604" height="14" rx="7" fill={i % 2 ? "hsl(220 20% 97%)" : "hsl(220 20% 94%)"} />
          </g>
        ))}
      </g>

      {/* Floating product KPI card – the hero element */}
      <g>
        {/* <animateTransform attributeName="transform" type="translate" values="0 0; 0 -1; 0 0" dur="6s" repeatCount="indefinite" /> */}
        <rect x="45" y="180" width="750" height="165" rx="16" fill="#FFFFFF" stroke={border} />

        {/* Product thumb */}
        <rect x="75" y="230" width="70" height="70" rx="12" fill={indigoSoft} />
        <circle cx="110" cy="265" r="22" fill="hsl(226 71% 60%)" />
        <circle cx="110" cy="265" r="14" fill="hsl(226 71% 80%)" />
        <text x="75" y="318" fontFamily="Inter,system-ui" fontSize="10" fill={slate400}>SKU: 8632010</text>

        {/* Column headers */}
        <text x="80" y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">PRODUCT</text>
        <rect x="78" y="215" width="55" height="2" rx="1" fill={indigo} />
        <text x="150" y="260" fontFamily="Inter,system-ui" fontSize="17" fontWeight={700} fill={slate900}>Wireless Speaker</text>
        <rect x="155" y="272" width="100" height="18" rx="8" fill={indigoSoft} />
        <text x="214" y="285" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill={indigoDark}>Repricer ON</text>

        {/* Platform pills */}
        <text x="300" y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">PLATFORM</text>
        <rect x="300" y="215" width="58" height="2" rx="1" fill={indigo} />
        <rect x="300" y="234" width="56" height="24" rx="6" fill="#0f172a" />
        <text x="328" y="249" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill="white">amazon</text>
        <rect x="300" y="268" width="56" height="24" rx="6" fill="hsl(210 100% 50%)" />
        <text x="328" y="283" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill="white">walmart</text>

        {/* KPI columns with icons */}
        {kpis.map((k) => (
          <g key={k.label}>
            <circle cx={k.x + 32} cy="246" r="16" fill={indigoSoft} />
            <g transform={`translate(${k.x + 32},246)`} stroke={indigoIcon} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
              {k.icon === "bag" && (
                <>
                  <path d="M-5 -6 a5 5 0 0 1 10 0" />
                  <rect x="-7" y="-6" width="14" height="12" rx="2" />
                </>
              )}
              {k.icon === "target" && (
                <>
                  <circle cx="0" cy="0" r="7" />
                  <circle cx="0" cy="0" r="3" />
                  <circle cx="0" cy="0" r="0.8" fill={indigoIcon} />
                </>
              )}
              {k.icon === "dollar" && (
                <>
                  <circle cx="0" cy="0" r="7" />
                  <text x="0" y="3.2" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="8.5" fontWeight={800} fill={indigoIcon} stroke="none">$</text>
                </>
              )}
              {k.icon === "chart" && (
                <g fill={indigoIcon} stroke="none">
                  <rect x="-6" y="-1" width="3" height="6" rx="0.6" />
                  <rect x="-1" y="-4" width="3" height="9" rx="0.6" />
                  <rect x="4" y="-7" width="3" height="12" rx="0.6" />
                </g>
              )}
            </g>
            <text x={k.x + 10} y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">{k.label}</text>
            <text x={k.x + 15} y="288" fontFamily="Inter,system-ui" fontSize="18" fontWeight={800} fill={slate900}>{k.value}</text>
            <text x={k.x + 15} y="308" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill={green}>▲ {k.delta}</text>
          </g>
        ))}

        {/* Margin column */}
        <circle cx="710" cy="246" r="16" fill={indigoSoft} />
        <g transform="translate(710,246)" stroke={indigoIcon} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="0" cy="0" r="7" fill="none" />
          <path d="M0 0 L0 -7 A7 7 0 0 1 6.06 -3.5 Z" fill={indigoIcon} stroke="none" />
        </g>
        <text x="685" y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">MARGIN</text>
        <text x="690" y="288" fontFamily="Inter,system-ui" fontSize="18" fontWeight={800} fill="url(#shm-accent)">31.6%</text>
        <text x="690" y="308" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill={green}>▲ +3.6%</text>

        {/* Subtle pulse ring on Repricer ON */}
        <circle cx="168" cy="280" r="3" fill={indigo}>
          <animate attributeName="r" values="3;7;3" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite" />
        </circle>

        {/* Continuous diagonal shine sweep */}
        <g clipPath="url(#shm-card-clip)">
          <g transform="rotate(-20 420 270)">
            <rect x="-320" y="140" width="140" height="260" fill="url(#shm-shine)" style={{ mixBlendMode: "screen" }}>
              <animateTransform attributeName="transform" type="translate" values="0 0; 1150 0; 1150 0" keyTimes="0; 0.55; 1" dur="4.2s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>
      </g>

      {/* Sparkles */}
      <g fill="#ffffff" stroke="hsl(226 71% 70%)" strokeWidth={0.6}>
        <path d="M540 150 q4 14 18 18 q-14 4 -18 18 q-4 -14 -18 -18 q14 -4 18 -18 z">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M612 178 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
          <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
        </path>
        <path d="M92 66 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Feature row */}
      <g>
        {features.map((f, i) => {
          const x = featureX[i];
          const cy = 545;
          const iconCx = x - 20;
          const textX = x + 8;
          return (
            <g key={f.label}>
              <circle cx={iconCx} cy={cy} r="20" fill={indigoSoft} />
              <g transform={`translate(${iconCx},${cy}) scale(1.25)`} stroke={indigoIcon} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                {f.icon === "trend" && (
                  <>
                    <path d="M-6 4 L-1.5 -1.5 L1.5 1.5 L6.5 -5" />
                    <path d="M2.5 -5.5 L6.5 -5 L6 -1" />
                  </>
                )}
                {f.icon === "pulse" && (
                  <path d="M-8 0 H-4 L-1.5 -5.5 L1.5 6 L4 -3 L6 0 H8" />
                )}
                {f.icon === "target" && (
                  <>
                    <circle cx="0" cy="0" r="7" />
                    <circle cx="0" cy="0" r="3" />
                    <circle cx="0" cy="0" r="0.8" fill={indigoIcon} />
                  </>
                )}
                {f.icon === "shield" && (
                  <>
                    <path d="M0 -8 L7 -5 V1 C7 6 3.5 8.5 0 10 C-3.5 8.5 -7 6 -7 1 V-5 Z" />
                    <path d="M-3.5 0 L-0.5 3 L4 -3" />
                  </>
                )}
                {f.icon === "rocket" && (
                  <>
                    <path d="M0 -8 C3 -5 4 0 3 4 L-3 4 C-4 0 -3 -5 0 -8 Z" />
                    <circle cx="0" cy="-2" r="1.3" fill={indigoIcon} stroke="none" />
                    <path d="M-3 3 L-6.5 7 L-3 5.8 Z" fill={indigoIcon} stroke="none" />
                    <path d="M3 3 L6.5 7 L3 5.8 Z" fill={indigoIcon} stroke="none" />
                    <path d="M-1.4 4.2 L0 8.5 L1.4 4.2 Z" fill={indigoIcon} stroke="none" />
                  </>
                )}
              </g>
              <text x={textX} y={cy - 8} fontFamily="Inter,system-ui" fontSize="14" fontWeight={800} fill={slate900}>{f.label}</text>
              <text x={textX} y={cy + 10} fontFamily="Inter,system-ui" fontSize="11.5" fill={slate500}>{f.desc}</text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
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
   Animated connecting lines with flowing data dots                      */
/* ------------------------------------------------------------------ */
export const SyncIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 560 420" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="hd-bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#eff6ff" />
      </linearGradient>
      <linearGradient id="hd-core" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <pattern id="hd-grid" width="22" height="22" patternUnits="userSpaceOnUse">
        <path d="M22 0H0v22" stroke="#dbeafe" strokeWidth="0.6" fill="none" />
      </pattern>
      <filter id="hd-sh" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" /><feOffset dy="3" />
        <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect width="560" height="420" rx="22" fill="url(#hd-bg)" />
    <rect width="560" height="420" rx="22" fill="url(#hd-grid)" />

    {/* channel cards left */}
    {[
      { y: 60, name: "Amazon", dot: "#f59e0b" },
      { y: 130, name: "Walmart", dot: "#2563eb" },
      { y: 200, name: "eBay", dot: "#ef4444" },
      { y: 270, name: "Etsy", dot: "#ea580c" },
      { y: 340, name: "Flipkart", dot: "#1d4ed8" },
    ].map((c) => (
      <g key={c.name} filter="url(#hd-sh)">
        <rect x="28" y={c.y} width="150" height="50" rx="10" fill="white" stroke="#e2e8f0" />
        <circle cx="50" cy={c.y + 25} r="6" fill={c.dot} />
        <text x="66" y={c.y + 22} fontFamily="Inter" fontSize="12" fontWeight="700" fill="#0f172a">{c.name}</text>
        <text x="66" y={c.y + 37} fontFamily="Inter" fontSize="9.5" fill="#64748b">Synced · live</text>
        <circle cx="163" cy={c.y + 25} r="3.5" fill="#10b981" />
      </g>
    ))}

    {/* core engine */}
    <g filter="url(#hd-sh)">
      <rect x="220" y="140" width="150" height="150" rx="18" fill="url(#hd-core)" />
      <circle cx="295" cy="200" r="26" fill="#fff" opacity="0.14" />
      <circle cx="295" cy="200" r="16" fill="#fff" />
      <path d="M289 200l4 4 8-8" stroke="#1e3a8a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="295" y="240" textAnchor="middle" fontFamily="Inter" fontSize="13" fontWeight="800" fill="#fff">Ctasis Core</text>
      <text x="295" y="256" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#bfdbfe">Inventory · Pricing · Orders</text>
      <text x="295" y="272" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#bfdbfe">Real-time · 2-way sync</text>
    </g>

    {/* right output cards */}
    {[
      { y: 60, title: "Inventory", val: "12,480 SKUs" },
      { y: 130, title: "Pricing", val: "Rules active" },
      { y: 200, title: "Orders", val: "241 / today" },
      { y: 270, title: "Catalog", val: "AI generated" },
      { y: 340, title: "Revenue", val: "▲ 32% MoM" },
    ].map((c) => (
      <g key={c.title} filter="url(#hd-sh)">
        <rect x="392" y={c.y} width="140" height="50" rx="10" fill="white" stroke="#e2e8f0" />
        <rect x="392" y={c.y} width="3" height="50" rx="1.5" fill="#2563eb" />
        <text x="405" y={c.y + 20} fontFamily="Inter" fontSize="10" fontWeight="700" fill="#64748b" letterSpacing="1">
          {c.title.toUpperCase()}
        </text>
        <text x="405" y={c.y + 38} fontFamily="Inter" fontSize="12" fontWeight="700" fill="#0f172a">{c.val}</text>
      </g>
    ))}

    {/* ── left arrows (channel → core) with flowing dots ── */}
    {[85, 155, 225, 295, 365].map((y, i) => (
      <g key={"l" + y}>
        <line x1="180" y1={y} x2="218" y2="215" stroke="#60a5fa" strokeWidth="1.4" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
        </line>
        <circle r="3" fill="#60a5fa" opacity="0.8">
          <animateMotion dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite"
            path={`M180 ${y} L218 215`} />
        </circle>
      </g>
    ))}

    {/* ── right arrows (core → output) with flowing dots ── */}
    {[85, 155, 225, 295, 365].map((y, i) => (
      <g key={"r" + y}>
        <line x1="372" y1="215" x2="390" y2={y} stroke="#2563eb" strokeWidth="1.4" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
        </line>
        <circle r="3" fill="#2563eb" opacity="0.8">
          <animateMotion dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite"
            path={`M372 215 L390 ${y}`} />
        </circle>
      </g>
    ))}
  </svg>
);

/* ------------------------------------------------------------------ */
/* AnalyticsIllustration – BI dashboard mockup with bars + KPI cards   */
/* ------------------------------------------------------------------ */
export const AnalyticsIllustration = (props: SVGProps<SVGSVGElement>) => {
  const DiagramDefs = () => (
    <defs>
      <linearGradient id="g-purple-bar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" />
        <stop offset="70%" stopColor="hsl(226 71% 65%)" />
        <stop offset="100%" stopColor="hsl(226 71% 95%)" />
      </linearGradient>
      <linearGradient id="g-blue-bar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="70%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#EFF6FF" />
      </linearGradient>
      <linearGradient id="g-purple-chip" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" />
        <stop offset="100%" stopColor="hsl(226 71% 40%)" />
      </linearGradient>
      <linearGradient id="ai-shine" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
  );

  const Icon = {
    trendUp: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15l6-6 4 4 8-8" />
        <path d="M15 5h6v6" />
      </g>
    ),
    dollar: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M16.5 6.5c0-1.9-2-3-4.5-3s-4.5 1.1-4.5 3 2 2.6 4.5 3 4.5 1.1 4.5 3-2 3-4.5 3-4.5-1.1-4.5-3" />
      </g>
    ),
    cart: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2.5 3h2.5l2.6 12.6a2 2 0 002 1.6h8.6a2 2 0 002-1.6l1.6-8.6H6.2" />
      </g>
    ),
    calendar: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </g>
    ),
    chevronDown: (
      <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
    ),
  };

  const indigo = "hsl(226 71% 50%)";
  const indigoDark = "hsl(226 71% 40%)";
  const indigoSoft = "hsl(226 71% 95%)";
  const slate900 = "#0f172a";
  const slate500 = "#64748b";
  const slate400 = "#94a3b8";
  const border = "#E2E8F0";

  const KPIS = [
    {
      x: 30,
      accent: indigo,
      tint: indigoSoft,
      iconBg: indigoSoft,
      icon: Icon.dollar,
      label: "GMV",
      value: "$12.4M",
      valueColor: slate900,
      delta: "18.6%",
      deltaColor: indigo,
    },
    {
      x: 250,
      accent: "#3B82F6",
      tint: "#EFF6FF",
      iconBg: "#DBEAFE",
      icon: Icon.cart,
      label: "Orders",
      value: "84,210",
      valueColor: slate900,
      delta: "14.3%",
      deltaColor: "#2563EB",
    },
    {
      x: 470,
      accent: "#10B981",
      tint: "#ECFDF5",
      iconBg: "#D1FAE5",
      icon: Icon.trendUp,
      label: "ROAS",
      value: "4.8×",
      valueColor: slate900,
      delta: "22.1%",
      deltaColor: "#10B981",
    },
  ];

  const DATES = ["May 12", "May 16", "May 20", "May 24", "May 28", "Jun 01", "Jun 05", "Jun 09"];
  const PURPLE_H = [45, 92, 128, 82, 148, 148, 105, 128];
  const BLUE_H = [38, 78, 60, 66, 82, 122, 68, 118];

  const CHART_X = 30;
  const CHART_W = 660;
  const CHART_TOP = 355;
  const BASE_Y = 590;
  const MAX_H = 190;
  const GROUP_W = (CHART_W - 40) / DATES.length;

  return (
    <svg
      viewBox="0 0 720 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <DiagramDefs />

      {/* Header chip */}
      <rect x="30" y="30" width="150" height="30" rx="15" fill={indigoSoft} />
      <g transform="translate(44,38)" color={indigo}>
        <svg width="14" height="14" viewBox="0 0 24 24">{Icon.trendUp}</svg>
      </g>
      <text x="64" y="49" fontFamily="Inter,system-ui" fontSize="11" fontWeight="800" fill={indigoDark} letterSpacing="1.5">AI &amp; ANALYTICS</text>

      {/* Decorative brain/chip glyph, top right */}
      <g opacity="0.3" color={indigo} stroke={indigo} fill="none" strokeWidth="1.2">
        <path d="M600 40c-24 0-40 16-42 34-14 4-22 18-18 32-8 8-8 24 4 32-2 16 12 30 30 28h70c18 2 32-12 30-28 12-8 12-24 4-32 4-14-4-28-18-32-2-18-18-34-42-34z" />
        <circle cx="586" cy="46" r="2" fill={indigo} />
        <circle cx="654" cy="52" r="2" fill={indigo} />
        <circle cx="568" cy="80" r="2" fill={indigo} />
        <circle cx="672" cy="88" r="2" fill={indigo} />
        <circle cx="592" cy="112" r="2" fill={indigo} />
        <circle cx="648" cy="116" r="2" fill={indigo} />
      </g>
      <rect x="612" y="66" width="46" height="46" rx="10" fill="white" stroke={indigo} strokeWidth="1.4" opacity="0.6" />
      <text x="635" y="95" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="15" fontWeight="800" fill={indigo} opacity="0.7">AI</text>

      {/* Title + subtitle */}
      <text x="30" y="104" fontFamily="Inter,system-ui" fontSize="25" fontWeight="800" fill={slate900}>Performance Insights</text>
      <text x="30" y="130" fontFamily="Inter,system-ui" fontSize="14" fill={slate500}>Track your business performance with AI-powered analytics</text>

      {/* KPI cards */}
      {KPIS.map((k) => (
        <g key={k.label}>
          <rect x={k.x} y="160" width="200" height="110" rx="16" fill="white" stroke={border} />
          <rect x={k.x} y="160" width="6" height="110" rx="3" fill={k.accent}>
            <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
          </rect>
          <circle cx={k.x + 42} cy="196" r="18" fill={k.iconBg} />
          <g transform={`translate(${k.x + 33},187)`} color={k.accent}>
            <svg width="18" height="18" viewBox="0 0 24 24">{k.icon}</svg>
          </g>
          <text x={k.x + 66} y="192" fontFamily="Inter,system-ui" fontSize="13" fontWeight="700" fill={slate500}>{k.label}</text>
          <text x={k.x + 66} y="222" fontFamily="Inter,system-ui" fontSize="24" fontWeight="800" fill={k.valueColor}>{k.value}</text>
          <text x={k.x + 24} y="252" fontFamily="Inter,system-ui" fontSize="13" fontWeight="700" fill={k.deltaColor}>↑ {k.delta}</text>
          <text x={k.x + 90} y="252" fontFamily="Inter,system-ui" fontSize="12" fill={slate400}>vs last month</text>
        </g>
      ))}

      {/* Chart card */}
      <rect x="30" y="296" width="660" height="320" rx="18" fill="white" stroke={border} />

      {/* Legend */}
      <circle cx="50" cy="322" r="5" fill={indigo} />
      <text x="62" y="326" fontFamily="Inter,system-ui" fontSize="12" fontWeight="600" fill="#334155">BigQuery</text>
      <circle cx="146" cy="322" r="5" fill="#3B82F6" />
      <text x="158" y="326" fontFamily="Inter,system-ui" fontSize="12" fontWeight="600" fill="#334155">Power BI</text>

      {/* Date range pill */}
      <rect x="565" y="308" width="110" height="30" rx="15" fill="white" stroke={border} />
      <g transform="translate(577,316)" color="#475569">
        <svg width="14" height="14" viewBox="0 0 24 24">{Icon.calendar}</svg>
      </g>
      <text x="596" y="327" fontFamily="Inter,system-ui" fontSize="11.5" fontWeight="600" fill="#334155">Last 30 days</text>
      <g transform="translate(654,316)" color={slate400}>
        <svg width="14" height="14" viewBox="0 0 24 24">{Icon.chevronDown}</svg>
      </g>

      {/* Gridlines + Y labels */}
      {[0, 25, 50, 75, 100].map((v) => {
        const y = BASE_Y - (v / 100) * MAX_H;
        return (
          <g key={v}>
            <line x1={CHART_X + 20} y1={y} x2={CHART_X + CHART_W - 20} y2={y} stroke="#F1F5F9" strokeDasharray="3 4">
              <animate attributeName="stroke-dashoffset" values="0;-14" dur="2s" repeatCount="indefinite" />
            </line>
            <text x={CHART_X + 25} y={y + 4} textAnchor="end" fontFamily="Inter,system-ui" fontSize="11" fill={slate400}>{v === 0 ? "0" : `${v}K`}</text>
          </g>
        );
      })}
      <line x1={CHART_X + 20} y1={BASE_Y} x2={CHART_X + CHART_W - 20} y2={BASE_Y} stroke="#CBD5E1" strokeWidth="1.5" />

      {/* Bars */}
      {DATES.map((date, i) => {
        const gx = CHART_X + 40 + i * GROUP_W;
        const ph = (PURPLE_H[i] / 100) * MAX_H;
        const bh = (BLUE_H[i] / 100) * MAX_H;
        return (
          <g key={date}>
            <rect x={gx} y={BASE_Y} width="16" height={ph} rx="5" fill="url(#g-purple-bar)">
              <animate attributeName="height" from="0" to={ph} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
              <animate attributeName="y" from={BASE_Y} to={BASE_Y - ph} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
            </rect>
            <rect x={gx + 20} y={BASE_Y} width="16" height={bh} rx="5" fill="url(#g-blue-bar)">
              <animate attributeName="height" from="0" to={bh} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
              <animate attributeName="y" from={BASE_Y} to={BASE_Y - bh} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
            </rect>
            <text x={gx + 18} y={BASE_Y + 22} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11" fill={slate500}>{date}</text>
          </g>
        );
      })}

      {/* Sparkles */}
      <g fill="white" stroke={indigo} strokeWidth={0.6}>
        <path d="M690 140 q4 14 18 18 q-14 4 -18 18 q-4 -14 -18 -18 q14 -4 18 -18 z">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M700 220 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
          <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
        </path>
        <path d="M18 155 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  )
};

/* ------------------------------------------------------------------ */
/* GlobeIllustration – globe with arc connections to Marketplace      */
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
    <rect x="10" y="10" width="540" height="300" rx="16" fill="#f0f7ff" stroke="#bfdbfe" />
    {/* Inputs */}
    {["Data", "Price", "Stock", "Trend"].map((l, i) => (
      <g key={l}>
        <rect x="40" y={50 + i * 56} width="80" height="36" rx="8" fill="white" stroke="#93c5fd" />
        <text x="80" y={73 + i * 56} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">{l}</text>
        {[0, 1, 2].map((j) => (
          <line key={j} x1="120" y1={68 + i * 56} x2="240" y2={90 + j * 70} stroke="#93c5fd" strokeWidth="1" />
        ))}
      </g>
    ))}
    {/* Hidden layer */}
    {[0, 1, 2].map((j) => (
      <g key={j}>
        <rect x="240" y={70 + j * 70} width="60" height="40" rx="10" fill="url(#g-blue)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur={`${1.5 + j * 0.3}s`} repeatCount="indefinite" />
        </rect>
        {[0, 1, 2].map((k) => (
          <line key={k} x1="300" y1={90 + j * 70} x2="400" y2={80 + k * 70} stroke="#93c5fd" strokeWidth="1" />
        ))}
      </g>
    ))}
    {/* Outputs */}
    {["Price opt.", "Forecast", "Restock"].map((l, i) => (
      <g key={l}>
        <rect x="400" y={60 + i * 70} width="120" height="40" rx="10" fill="white" stroke="#3b82f6" />
        <text x="460" y={85 + i * 70} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">{l}</text>
      </g>
    ))}
    {/* Footer bar */}
    <rect x="40" y="270" width="380" height="8" rx="4" fill="#dbeafe" />
    <rect x="40" y="270" width="340" height="8" rx="4" fill="url(#g-blue)" />
    <text x="430" y="278" fontSize="11" fontWeight="700" fill="#1e40af">90%+ automation</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* InfraIllustration – Stacked cloud architecture (CDN → DB)            */
/* Styled after the AWS Cloud Infrastructure reference card             */
/* ------------------------------------------------------------------ */
export const InfraIllustration = (props: SVGProps<SVGSVGElement>) => {

  const DiagramDefs = () => (
    <defs>
      <linearGradient id="g-purple" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
      <linearGradient id="g-blue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="g-teal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2DD4BF" />
        <stop offset="100%" stopColor="#0D9488" />
      </linearGradient>
      <linearGradient id="g-orange" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FB923C" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="g-pill" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#4C1D95" />
      </linearGradient>
    </defs>
  );

  // Simple, recognizable line icons drawn in a 24x24 box, recolored via `stroke`/`fill` = currentColor
  const ICONS: Record<string, JSX.Element> = {
    globe: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17" />
        <path d="M12 3.5c2.6 2.3 4 5.2 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.2-4-8.5s1.4-6.2 4-8.5z" />
      </g>
    ),
    cpu: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <rect x="10" y="10" width="4" height="4" rx="0.5" />
        <path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
      </g>
    ),
    database: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="7" ry="2.6" />
        <path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
        <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
      </g>
    ),
    cube: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5l7.5 4.3v8.4L12 20.5l-7.5-4.3V7.8L12 3.5z" />
        <path d="M4.5 7.8L12 12l7.5-4.2M12 12v8.5" />
      </g>
    ),
    bucket: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.5 8h13l-1.4 11.2a2 2 0 01-2 1.8H8.9a2 2 0 01-2-1.8L5.5 8z" />
        <path d="M4 8h16M9 8V6a3 3 0 016 0v2" />
      </g>
    ),
    cloud: (
      <path
        fill="currentColor"
        d="M17.6 10.1a5 5 0 00-9.5-1.4A4.3 4.3 0 006 17h11.2a3.9 3.9 0 00.4-6.9z"
      />
    ),
    pin: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0113 0C18.5 15.4 12 21 12 21z" />
        <circle cx="12" cy="10.5" r="2.2" />
      </g>
    ),
    shield: (
      <path
        fill="currentColor"
        d="M12 3l7 3v5.2c0 4.7-3 8.7-7 9.8-4-1.1-7-5.1-7-9.8V6l7-3z"
      />
    ),
  };

  const Icon = ({ name, size = 26 }: { name: string; size?: number | string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      {ICONS[name]}
    </svg>
  );

  const ROWS = [
    {
      icon: "globe",
      fill: "url(#g-purple)",
      tint: "#F3EEFE",
      accent: "#7C3AED",
      title: "CDN / Load balancer",
      subtitle: "Global delivery with ultra-low latency and high availability.",
    },
    {
      icon: "cpu",
      fill: "url(#g-purple)",
      tint: "#F0EBFD",
      accent: "#6D28D9",
      title: "Auto-scaling compute (EC2 + Lambda)",
      subtitle: "Automatically scales with traffic. Pay only for what you use.",
    },
    {
      icon: "database",
      fill: "url(#g-blue)",
      tint: "#EAF1FE",
      accent: "#1D4ED8",
      title: "Managed database (RDS + DynamoDB)",
      subtitle: "Highly available, secure, and fully managed databases.",
    },
    {
      icon: "cube",
      fill: "url(#g-teal)",
      tint: "#E4FBF6",
      accent: "#0D9488",
      title: "PostgreSQL + MongoDB · isolated pods",
      subtitle: "Isolated environments for maximum performance and security.",
    },
    {
      icon: "bucket",
      fill: "url(#g-orange)",
      tint: "#FEF1E4",
      accent: "#EA580C",
      title: "Object storage (S3) + A+ content",
      subtitle: "Durable storage for assets with fast and secure access.",
    },
  ];

  const ROW_H = 78;
  const ROW_GAP = 18;
  const ROW_START_Y = 165;
  const ROW_X = 50;
  const ROW_W = 800;

  return (
    <svg viewBox="0 0 900 715" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <DiagramDefs />

      {/* Animated vertical connecting lines between rows */}
      {ROWS.map((row, i) => {
        const y1 = ROW_START_Y + i * (ROW_H + ROW_GAP) + ROW_H;
        const y2 = ROW_START_Y + (i + 1) * (ROW_H + ROW_GAP);
        const lineX = ROW_X + 42;
        return (
          <g key={"conn" + i}>
            <line x1={lineX} y1={y1} x2={lineX} y2={y2}
              stroke={row.accent} strokeWidth="1.4" strokeDasharray="5 5" opacity={0.45}>
              <animate attributeName="stroke-dashoffset" values="0;-20" dur={`${1.4 + i * 0.2}s`} repeatCount="indefinite" />
            </line>
            <circle r="3" fill={row.accent} opacity={0.65}>
              <animateMotion dur={`${1.6 + i * 0.2}s`} repeatCount="indefinite"
                path={`M${lineX} ${y1} L${lineX} ${y2}`} />
            </circle>
          </g>
        );
      })}

      {/* Animated line from header to first row */}
      <line x1={ROW_X + 42} y1={118} x2={ROW_X + 42} y2={ROW_START_Y}
        stroke="#7C3AED" strokeWidth="1.4" strokeDasharray="5 5" opacity={0.45}>
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
      </line>
      <circle r="3" fill="#7C3AED" opacity={0.65}>
        <animateMotion dur="1.8s" repeatCount="indefinite"
          path={`M${ROW_X + 42} 118 L${ROW_X + 42} ${ROW_START_Y}`} />
      </circle>

      {/* Animated line from last row to footer */}
      {(() => {
        const lastRowBottom = ROW_START_Y + (ROWS.length - 1) * (ROW_H + ROW_GAP) + ROW_H;
        const footY = ROW_START_Y + ROWS.length * (ROW_H + ROW_GAP) + 20;
        return (
          <>
            <line x1={ROW_X + 42} y1={lastRowBottom} x2={ROW_X + 42} y2={footY + 24}
              stroke="#EA580C" strokeWidth="1.4" strokeDasharray="5 5" opacity={0.45}>
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
            </line>
            <circle r="3" fill="#EA580C" opacity={0.65}>
              <animateMotion dur="1.7s" repeatCount="indefinite"
                path={`M${ROW_X + 42} ${lastRowBottom} L${ROW_X + 42} ${footY + 24}`} />
            </circle>
          </>
        );
      })()}

      {/* Animated horizontal lines between footer pills */}
      {(() => {
        const footY = ROW_START_Y + ROWS.length * (ROW_H + ROW_GAP) + 20;
        return (
          <>
            <line x1="220" y1={footY + 24} x2="330" y2={footY + 24} stroke="#C4B5FD" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.4s" repeatCount="indefinite" />
            </line>
            <circle r="2.5" fill="#C4B5FD" opacity={0.7}>
              <animateMotion dur="1.6s" repeatCount="indefinite"
                path={`M220 ${footY + 24} L330 ${footY + 24}`} />
            </circle>
            <line x1="570" y1={footY + 24} x2="680" y2={footY + 24} stroke="#C4B5FD" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.4s" repeatCount="indefinite" />
            </line>
            <circle r="2.5" fill="#C4B5FD" opacity={0.7}>
              <animateMotion dur="1.6s" repeatCount="indefinite"
                path={`M570 ${footY + 24} L680 ${footY + 24}`} />
            </circle>
          </>
        );
      })()}

      {/* Header lockup */}
      <rect x="50" y="46" width="72" height="72" rx="20" fill="url(#g-purple)" />
      <g transform="translate(63,60)" color="white">
        <Icon name="cloud" size="46" />
      </g>
      <text x="140" y="80" fontSize="24" fontWeight="800" fill="#4C1D95">AWS</text>
      <text x="196" y="80" fontSize="18" fontWeight="700" fill="#8B84A8" letterSpacing="2">·  CLOUD &amp; HOSTING</text>
      <rect x="140" y="94" width="70" height="4" rx="2" fill="url(#g-purple)" />

      {/* Decorative cloud/server glyph, top right */}
      <g opacity="0.35" color="#8B5CF6">
        <g transform="translate(700,40)">
          <Icon name="cloud" size="90" />
        </g>
        <rect x="792" y="66" width="34" height="46" rx="6" fill="#C4B5FD" />
        <rect x="798" y="74" width="22" height="4" rx="2" fill="#7C3AED" />
        <rect x="798" y="84" width="22" height="4" rx="2" fill="#7C3AED" />
        <rect x="798" y="94" width="22" height="4" rx="2" fill="#7C3AED" />
      </g>

      {/* Feature rows */}
      {ROWS.map((row, i) => {
        const y = ROW_START_Y + i * (ROW_H + ROW_GAP);
        return (
          <g key={row.title}>
            <rect x={ROW_X} y={y} width={ROW_W} height={ROW_H} rx="18" fill={row.tint} />
            {/* right accent tab */}
            <rect x={ROW_X + ROW_W - 6} y={y + 10} width="6" height={ROW_H - 20} rx="3" fill={row.accent} />
            {/* icon tile */}
            <rect x={ROW_X + 16} y={y + 13} width="52" height="52" rx="16" fill={row.fill} />
            <g transform={`translate(${ROW_X + 29},${y + 26})`} color="white">
              <Icon name={row.icon} size="26" />
            </g>
            {/* copy */}
            <text x={ROW_X + 88} y={y + 34} fontSize="19" fontWeight="800" fill="#1E1B33">
              {row.title}
            </text>
            <text x={ROW_X + 88} y={y + 58} fontSize="14" fill="#6B7280">
              {row.subtitle}
            </text>
          </g>
        );
      })}

      {/* Footer pills */}
      {(() => {
        const footY = ROW_START_Y + ROWS.length * (ROW_H + ROW_GAP) + 20;
        return (
          <g>
            {/* India */}
            <rect x="50" y={footY} width="170" height="48" rx="24" fill="white" stroke="#E7E3F7" />
            <g transform={`translate(70,${footY + 12})`} color="#6D28D9">
              <Icon name="pin" size="24" />
            </g>
            <text x="102" y={footY + 22} fontSize="14" fontWeight="800" fill="#1E1B33">India</text>
            <text x="102" y={footY + 38} fontSize="12" fill="#9CA3AF">Region</text>

            {/* SLA pill */}
            <rect x="330" y={footY - 6} width="240" height="60" rx="30" fill="url(#g-pill)" />
            <g transform={`translate(352,${footY + 12})`} color="white">
              <Icon name="shield" size="26" />
            </g>
            <text x="392" y={footY + 20} fontSize="15" fontWeight="800" fill="white">99.99%</text>
            <text x="392" y={footY + 38} fontSize="12" fill="#DDD6FE">Uptime SLA</text>

            {/* USA / EU */}
            <rect x="680" y={footY} width="170" height="48" rx="24" fill="white" stroke="#E7E3F7" />
            <g transform={`translate(700,${footY + 12})`} color="#6D28D9">
              <Icon name="globe" size="24" />
            </g>
            <text x="732" y={footY + 22} fontSize="14" fontWeight="800" fill="#1E1B33">USA · EU</text>
            <text x="732" y={footY + 38} fontSize="12" fill="#9CA3AF">Global Reach</text>
          </g>
        );
      })()}
    </svg>
  )
};
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
export const OrderFlowDiagram = (props: SVGProps<SVGSVGElement>) => {
  const STAGES = [
    { n: 1, title: "Order received", sub: "Amazon SP-API", from: "#1e40af", to: "#2563eb" },
    { n: 2, title: "Inventory check", sub: "Multi-WH route", from: "#1d4ed8", to: "#3b82f6" },
    { n: 3, title: "Pick & pack", sub: "WMS barcode", from: "#1e3a8a", to: "#1e40af" },
    { n: 4, title: "Label + ship", sub: "Best courier rate", from: "#2563eb", to: "#60a5fa" },
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
          <stop offset="0%" stopColor="#f0f4ff" />
          <stop offset="55%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#f0f7ff" />
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
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e40af" />
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
          <feDropShadow dx="0" dy="3" stdDeviation="7" floodColor="#93c5fd" floodOpacity="0.18" />
        </filter>
        <filter id="of-outer-shadow" x="-3%" y="-3%" width="106%" height="110%">
          <feDropShadow dx="0" dy="2" stdDeviation="8" floodColor="#93c5fd" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* ── Outer card ── */}
      <rect
        x="8" y="8" width="744" height="324" rx="22"
        fill="url(#of-bg)"
        stroke="#bfdbfe" strokeWidth="1.2"
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
          From Marketplace ping to doorstep delivery — zero clicks.
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
                  stroke="#93c5fd" strokeWidth="1.5"
                  className="of-arrow-flow"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
                <path
                  d={`M${sx + CARD_W + ARROW_W - 7} ${CARD_Y + CARD_H / 2 - 5} L${sx + CARD_W + ARROW_W - 1} ${CARD_Y + CARD_H / 2} L${sx + CARD_W + ARROW_W - 7} ${CARD_Y + CARD_H / 2 + 5}`}
                  stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                />
              </g>
            )}

            {/* Timeline dot */}
            <circle
              cx={midX} cy={DOT_YS}
              r="5"
              fill="white" stroke="#2563eb" strokeWidth="2"
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
export const PricingCalculatorMockup = (props: SVGProps<SVGSVGElement>) => {

  const ICONS: Record<string, JSX.Element> = {
    trendUp: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16l6-6 4 4 8-9" />
        <path d="M15 2h6v6" />
      </g>
    ),
    shop: (
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9.5L5.2 4h13.6l1.2 5.5" />
        <path d="M3.5 9.5a2.3 2.3 0 004.5.6 2.3 2.3 0 004.5 0 2.3 2.3 0 004.5 0 2.3 2.3 0 004.5-.6" />
        <path d="M5 9.8V19a1 1 0 001 1h12a1 1 0 001-1V9.8" />
        <path d="M9.5 20v-5a1 1 0 011-1h3a1 1 0 011 1v5" />
      </g>
    ),
    cart: (
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="20" r="1.3" />
        <circle cx="17" cy="20" r="1.3" />
        <path d="M2.5 3.5h2.4l2.5 12.2a2 2 0 002 1.6h8a2 2 0 002-1.6l1.5-8H6" />
      </g>
    ),
    cube: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5l7.5 4.3v8.4L12 20.5l-7.5-4.3V7.8L12 3.5zM4.5 7.8L12 12l7.5-4.2M12 12v8.5"
      />
    ),
    pieChart: (
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5v8.5h8.5A8.5 8.5 0 1112 3.5z" />
      </g>
    ),
    dollar: (
      <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M16.5 6.5c0-1.9-2-3-4.5-3s-4.5 1.1-4.5 3 2 2.6 4.5 3 4.5 1.1 4.5 3-2 3-4.5 3-4.5-1.1-4.5-3" />
      </g>
    ),
    barChart: (
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M5 19v-6M11 19V6M17 19v-9" />
      </g>
    ),
    calendar: (
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
        <circle cx="9.5" cy="15" r="1.1" fill="currentColor" stroke="none" />
      </g>
    ),
  };

  const Icon = ({ name, size = 20 }: { name: string; size?: number | string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      {ICONS[name]}
    </svg>
  );

  const FIELDS = [
    { icon: "shop", label: "Marketplace", value: "5" },
    { icon: "cart", label: "Monthly orders", value: "12,400" },
    { icon: "cube", label: "Avg. order value", value: "$48.20" },
    { icon: "pieChart", label: "Current margin", value: "18%" },
  ];

  const FIELD_TOP = 156;
  const FIELD_GAP = 66;

  const indigo = "hsl(226 71% 50%)";
  const indigoDark = "hsl(226 71% 40%)";
  const indigoSoft = "hsl(226 71% 95%)";
  const green = "hsl(150 70% 40%)";
  const slate900 = "#0f172a";
  const slate500 = "#64748b";
  const slate400 = "#94a3b8";
  const border = "#E2E8F0";

  return (
    <svg viewBox="0 0 860 560" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="pc-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={indigo} />
          <stop offset="100%" stopColor={indigoDark} />
        </linearGradient>
        <linearGradient id="pc-shine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Card background */}
      <rect x="20" y="20" width="820" height="520" rx="24" fill="white" stroke={border} />

      {/* Header */}
      <rect x="44" y="44" width="60" height="60" rx="16" fill={indigoSoft} />
      <g transform="translate(58,58)" color={indigo}>
        <Icon name="trendUp" size="32" />
      </g>
      {/* Pulse ring on header icon */}
      <circle cx="74" cy="74" r="3" fill={indigo}>
        <animate attributeName="r" values="3;10;3" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <text x="120" y="72" fontFamily="Inter,system-ui" fontSize="20" fontWeight="800" fill={slate900}>ROI calculator · projected impact</text>
      <text x="120" y="94" fontFamily="Inter,system-ui" fontSize="13" fill={slate500}>Based on your channels, SKUs and average order value.</text>

      {/* Left inputs panel */}
      <rect x="44" y="130" width="360" height="400" rx="20" fill="#FBFBFD" stroke={border} />

      {FIELDS.map((f, i) => {
        const y = FIELD_TOP + i * FIELD_GAP;
        return (
          <g key={f.label}>
            <circle cx="90" cy={y + 10} r="22" fill={indigoSoft} />
            <g transform={`translate(79,${y - 1})`} color={indigo}>
              <Icon name={f.icon} size="22" />
            </g>
            <text x="128" y={y - 8} fontFamily="Inter,system-ui" fontSize="11" fontWeight="700" fill={slate500} letterSpacing="0.5">
              {f.label.toUpperCase()}
            </text>
            <rect x="128" y={y} width="252" height="38" rx="9" fill="white" stroke={border} />
            <text x="144" y={y + 25} fontFamily="Inter,system-ui" fontSize="15" fontWeight="700" fill={slate900}>{f.value}</text>
          </g>
        );
      })}

      <rect x="58" y="440" width="336" height="42" rx="21" fill="url(#pc-grad)" />
      <text x="230" y="465" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="15" fontWeight="700" fill="white">Recalculate →</text>

      {/* Right output cards */}
      {/* Card 1: Projected margin */}
      <rect x="424" y="130" width="372" height="130" rx="18" fill={indigoSoft} stroke={border} />
      <circle cx="470" cy="195" r="30" fill="none" stroke={border} strokeWidth="1.5" strokeDasharray="3 4">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="470" cy="195" r="21" fill="white" />
      <g transform="translate(459,184)" color={indigo}>
        <Icon name="dollar" size="22" />
      </g>
      <text x="516" y="176" fontFamily="Inter,system-ui" fontSize="12" fontWeight="800" fill={indigo} letterSpacing="0.6">PROJECTED MARGIN</text>
      <text x="516" y="216" fontFamily="Inter,system-ui" fontSize="34" fontWeight="800" fill={indigoDark}>+9.4%</text>
      <text x="700" y="216" fontFamily="Inter,system-ui" fontSize="12" fill={slate500}>in 90 days</text>
      <path d="M424 248 Q 520 226 620 246 T 796 240" fill="none" stroke={border} strokeWidth="2" />
      <circle cx="796" cy="240" r="4" fill={indigo}>
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Card 2: Extra revenue */}
      <rect x="424" y="272" width="372" height="130" rx="18" fill="#EBF3FE" stroke={border} />
      <circle cx="470" cy="337" r="30" fill="none" stroke={border} strokeWidth="1.5" strokeDasharray="3 4">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="470" cy="337" r="21" fill="white" />
      <g transform="translate(459,326)" color="#2563EB">
        <Icon name="barChart" size="22" />
      </g>
      <text x="516" y="318" fontFamily="Inter,system-ui" fontSize="12" fontWeight="800" fill="#2563EB" letterSpacing="0.6">EXTRA REVENUE</text>
      <text x="516" y="358" fontFamily="Inter,system-ui" fontSize="34" fontWeight="800" fill="#1D4ED8">$54.8k</text>
      <text x="700" y="358" fontFamily="Inter,system-ui" fontSize="12" fill={slate500}>/ month</text>
      <path d="M424 390 Q 520 368 620 388 T 796 382" fill="none" stroke={border} strokeWidth="2" />
      <circle cx="796" cy="382" r="4" fill="#2563EB">
        <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* Card 3: Payback period */}
      <rect x="424" y="414" width="372" height="116" rx="18" fill="#12102A" />
      <circle cx="470" cy="472" r="30" fill="none" stroke="#4B4A78" strokeWidth="1.5" strokeDasharray="3 4">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="470" cy="472" r="21" fill="#20204A" />
      <g transform="translate(459,461)" color="#60A5FA">
        <Icon name="calendar" size="22" />
      </g>
      <text x="516" y="454" fontFamily="Inter,system-ui" fontSize="12" fontWeight="800" fill="#60A5FA" letterSpacing="0.6">PAYBACK PERIOD</text>
      <text x="516" y="492" fontFamily="Inter,system-ui" fontSize="28" fontWeight="800" fill="white">18 days</text>
      <text x="672" y="492" fontFamily="Inter,system-ui" fontSize="12" fill={slate400}>to break even</text>
      <path d="M424 522 Q 520 505 620 520 T 796 515" fill="none" stroke="#3B3A66" strokeWidth="2" />

      {/* Continuous diagonal shine sweep */}
      <g clipPath="url(#pc-card-clip)">
        <g transform="rotate(-18 430 280)">
          <rect x="-320" y="140" width="140" height="400" fill="url(#pc-shine)" style={{ mixBlendMode: "screen" }}>
            <animateTransform attributeName="transform" type="translate" values="0 0; 1200 0; 1200 0" keyTimes="0; 0.55; 1" dur="4.5s" repeatCount="indefinite" />
          </rect>
        </g>
      </g>

      {/* Sparkles */}
      <g fill="#ffffff" stroke={indigo} strokeWidth={0.6}>
        <path d="M810 50 q4 14 18 18 q-14 4 -18 18 q-4 -14 -18 -18 q14 -4 18 -18 z">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M830 120 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
          <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
        </path>
        <path d="M38 38 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  )
};

/* ------------------------------------------------------------------ */
/* ContactMapIllustration – global presence map with hubs              */
/* ------------------------------------------------------------------ */
export const ContactMapIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="cm-bg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#eff6ff" />
        <stop offset="100%" stopColor="#f0f4ff" />
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
            fill={land ? "#3b82f6" : "#cbd5e1"} opacity={land ? 0.7 : 0.35} />
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
        <circle cx={h.x} cy={h.y} r={14} fill="hsl(226 71% 50%)" opacity={0.2}>
          <animate attributeName="r" values="10;22;10" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx={h.x} cy={h.y} r={6} fill="hsl(226 71% 50%)" stroke="white" strokeWidth={2} />
        <rect x={h.x + 10} y={h.y - 18} width={h.label.length * 6.5 + 12} height={20} rx={10} fill="white" stroke="#e2e8f0" />
        <text x={h.x + 16} y={h.y - 4} fontSize={10} fontWeight={700} fill="#0f172a">{h.label}</text>
      </g>
    ))}
    {/* Arc connections */}
    <path d="M130 180 Q 220 60, 360 175" stroke="hsl(226 71% 50%)" strokeWidth={1.5} fill="none" strokeDasharray="4 4" opacity={0.6} />
    <path d="M360 175 Q 420 90, 460 200" stroke="hsl(217 91% 50%)" strokeWidth={1.5} fill="none" strokeDasharray="4 4" opacity={0.6} />
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
    <div className="group inline-flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 flex items-center justify-center text-[11px] font-bold tracking-tight">
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
    <div className="relative w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-50 via-white to-blue-50/60 p-6 shadow-[0_20px_60px_rgba(37,99,235,.10)]">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,.06),transparent_70%)] pointer-events-none" />

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
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </radialGradient>

          <linearGradient id="mm-core" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e3a8a" />
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
            stroke="#93c5fd"
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
        <circle cx={cx} cy={cy} r="56" fill="#2563eb" opacity="0.18">
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

        <circle cx={cx} cy={cy} r="56" fill="#1e40af" opacity="0.12">
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
            { c: "#2563eb", l: "Live sync" },
            { c: "#1d4ed8", l: "Auto-repricer" },
            { c: "#3b82f6", l: "AI listing" },
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
        <stop offset="0%" stopColor="hsl(226 71% 50%)" stopOpacity="0.3" />
        <stop offset="100%" stopColor="hsl(226 71% 50%)" stopOpacity="0" />
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
      stroke="hsl(226 71% 50%)" strokeWidth="3" fill="none" />
    <path d="M60 195 C 110 175, 170 200, 230 155 S 350 215, 410 145 S 500 195, 540 165 L 540 280 L 60 280 Z"
      fill="url(#rsc-fill)" />
    <text x="540" y="155" fontSize="10" fontWeight="800" fill="hsl(226 71% 40%)">Ctasis</text>

    {/* Data points */}
    {[[230, 155], [410, 145], [540, 165]].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="5" fill="white" stroke="hsl(226 71% 50%)" strokeWidth="2.5" />
      </g>
    ))}
  </svg>
);

/* ------------------------------------------------------------------ */
/* ServicesHeroMockup — operator console with service tiles + activity */
/* ------------------------------------------------------------------ */
export const ServicesHeroMockup = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="svh-bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#eff6ff" />
      </linearGradient>
      <linearGradient id="svh-tile" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" /><stop offset="100%" stopColor="hsl(226 71% 38%)" />
      </linearGradient>
      <linearGradient id="svh-tile2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(217 91% 50%)" /><stop offset="100%" stopColor="hsl(224 76% 32%)" />
      </linearGradient>
      <linearGradient id="svh-shine" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <filter id="svh-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="10" /><feOffset dy="6" />
        <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect x="20" y="20" width="720" height="480" rx="24" fill="url(#svh-bg)" stroke="#E2E8F0" />
    <text x="48" y="60" fontFamily="Inter,system-ui" fontSize="13" fontWeight="800" fill="#0f172a">Service Console</text>
    <text x="48" y="80" fontFamily="Inter,system-ui" fontSize="11" fill="#64748b">12 services, one operator view — every action is auditable.</text>
    <rect x="600" y="44" width="118" height="26" rx="13" fill="hsl(150 70% 92%)" />
    <circle cx="614" cy="57" r="4" fill="hsl(150 70% 45%)" />
    <text x="709" y="61" textAnchor="end" fontFamily="Inter,system-ui" fontSize="10" fontWeight="800" fill="hsl(150 70% 30%)">ALL HEALTHY</text>

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
        <rect x={tile.x} y={tile.y} width={168} height={104} rx={16} fill="white" stroke="#E2E8F0" />
        <rect x={tile.x} y={tile.y} width={168} height={6} rx={3} fill={tile.c} />
        <text x={tile.x + 16} y={tile.y + 36} fontFamily="Inter,system-ui" fontSize={11} fontWeight={800} fill="#0f172a">{tile.t}</text>
        <text x={tile.x + 16} y={tile.y + 64} fontFamily="Inter,system-ui" fontSize={18} fontWeight={800} fill="#0f172a">{tile.v}</text>
        <rect x={tile.x + 16} y={tile.y + 76} width={56} height={18} rx={9} fill="hsl(217 91% 95%)" />
        <text x={tile.x + 44} y={tile.y + 89} textAnchor="middle" fontFamily="Inter,system-ui" fontSize={9} fontWeight={800} fill="hsl(217 91% 40%)">{tile.k}</text>
      </g>
    ))}

    {/* Activity feed strip */}
    <g filter="url(#svh-shadow)">
      <rect x="48" y="358" width="664" height="124" rx="16" fill="white" stroke="#E2E8F0" />
      <text x="64" y="382" fontFamily="Inter,system-ui" fontSize="11" fontWeight="800" fill="#64748b" letterSpacing="1">LIVE ACTIVITY</text>
      {[
        { y: 402, t: "Repricer raised SKU-8632 to $24.49", c: "hsl(226 71% 50%)" },
        { y: 424, t: "Inventory synced from Shopify → Amazon (FBM)", c: "hsl(217 91% 50%)" },
        { y: 446, t: "Order #14829 routed to USA-East warehouse", c: "hsl(226 71% 40%)" },
        { y: 468, t: "AI listing generator drafted 18 new bullets", c: "hsl(226 71% 55%)" },
      ].map((a, i) => (
        <g key={i}>
          <circle cx="74" cy={a.y - 4} r="4" fill={a.c} />
          <text x="90" y={a.y} fontFamily="Inter,system-ui" fontSize="11" fill="#334155">{a.t}</text>
          <text x="700" y={a.y} fontFamily="Inter,system-ui" fontSize="10" textAnchor="end" fill="#94a3b8">{i + 1}s ago</text>
        </g>
      ))}
    </g>

    {/* Sparkles */}
    <g fill="#ffffff" stroke="hsl(226 71% 70%)" strokeWidth={0.6}>
      <path d="M680 90 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
      </path>
      <path d="M720 120 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
      </path>
      <path d="M38 36 q2 5 7 7 q-5 2 -7 7 q-2 -5 -7 -7 q5 -2 7 -7 z">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Continuous diagonal shine sweep across the whole card */}
    <g clipPath="url(#svh-card-clip)">
      <clipPath id="svh-card-clip">
        <rect x="20" y="20" width="720" height="480" rx="24" />
      </clipPath>
      <g transform="rotate(-20 380 260)">
        <rect x="-320" y="100" width="140" height="400" fill="url(#svh-shine)" style={{ mixBlendMode: "screen" }}>
          <animateTransform attributeName="transform" type="translate" values="0 0; 1150 0; 1150 0" keyTimes="0; 0.55; 1" dur="4.2s" repeatCount="indefinite" />
        </rect>
      </g>
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
          <stop offset="55%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#f0f7ff" />
        </linearGradient>

        {/* Region card bg */}
        <linearGradient id="it-region-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0f7ff" />
        </linearGradient>

        {/* Pod gradient — blue pill */}
        <linearGradient id="it-pod" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        {/* Spoke gradient */}
        <linearGradient id="it-spoke-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>

        {/* Core card gradient — deep blue */}
        <linearGradient id="it-core-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>

        {/* Core shine */}
        <radialGradient id="it-core-shine" cx="35%" cy="25%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Drop shadow */}
        <filter id="it-card-shadow" x="-6%" y="-6%" width="112%" height="118%">
          <feDropShadow dx="0" dy="3" stdDeviation="7" floodColor="#93c5fd" floodOpacity="0.18" />
        </filter>
        <filter id="it-region-shadow" x="-8%" y="-8%" width="116%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#60a5fa" floodOpacity="0.14" />
        </filter>
        <filter id="it-core-shadow" x="-12%" y="-12%" width="124%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#2563eb" floodOpacity="0.30" />
        </filter>
      </defs>

      {/* ── Outer card ── */}
      <rect
        x="8" y="8" width="784" height="484" rx="24"
        fill="url(#it-bg)"
        stroke="#bfdbfe" strokeWidth="1.2"
        filter="url(#it-card-shadow)"
      />

      {/* ── Header ── */}
      <text
        x="36" y="44"
        fontFamily="'Space Grotesk','DM Sans',sans-serif"
        fontSize="10.5" fontWeight="700" fill="#2563eb"
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
        stroke="#93c5fd" strokeWidth="1"
        className="it-orbit"
        fill="none" opacity="0.6"
      />
      <text
        x="52" y="290"
        fontFamily="'DM Sans',sans-serif"
        fontSize="10" fontWeight="700" fill="#60a5fa"
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
              stroke="#60a5fa" strokeWidth="1.2" strokeOpacity="0.5"
              filter="url(#it-region-shadow)"
            />
            {/* Top colored accent bar */}
            <rect x={x0} y={y0} width={W} height={H - 120} rx="16" fill="#3b82f6" opacity="0.5" />

            {/* Label */}
            <text
              x={r.cx} y={y0 + 18}
              textAnchor="middle"
              fontFamily="'DM Sans',sans-serif"
              fontSize="11" fontWeight="700" fill="#1e40af"
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
              fontSize="10" fill="#60a5fa"
            >
              {r.pods} pods · K8s
            </text>
          </g>
        );
      })}

      {/* ── Control Plane ── */}
      <g className="it-core-pop">
        {/* Pulse rings */}
        <circle cx="380" cy="400" r="6" fill="#2563eb" opacity="0" className="it-pulse-a" />
        <circle cx="380" cy="400" r="6" fill="#1e40af" opacity="0" className="it-pulse-b" />

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
          { c: "#1e40af", l: "Control plane" },
          { c: "#60a5fa", l: "Live · auto-failover" },
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
    { label: "INGEST", title: "Raw product CSV", sub: "Photos · brief · specs", hdr: "#2563eb", border: "#bfdbfe", cls: "ap-stage-0" },
    { label: "EMBED", title: "Vector + tags", sub: "OpenAI · category model", hdr: "#1d4ed8", border: "#bfdbfe", cls: "ap-stage-1" },
    { label: "GENERATE", title: "Per-channel listing", sub: "Title · bullets · keywords", hdr: "#1e40af", border: "#bfdbfe", cls: "ap-stage-2" },
    { label: "PUBLISH", title: "Push to live", sub: "Amazon · eBay · Flipkart", hdr: "#1e3a8a", border: "#bfdbfe", cls: "ap-stage-3" },
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
          <stop offset="0%" stopColor="#f0f7ff" />
          <stop offset="50%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#f0f4ff" />
        </linearGradient>

        {/* Stage header gradients */}
        <linearGradient id="ap-hdr-ingest" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="ap-hdr-embed" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="ap-hdr-gen" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="ap-hdr-pub" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        {/* Bar fill gradient */}
        <linearGradient id="ap-bar" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        {/* Card shadow */}
        <filter id="ap-card-shadow" x="-6%" y="-6%" width="112%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#93c5fd" floodOpacity="0.14" />
        </filter>
        <filter id="ap-outer-shadow" x="-4%" y="-4%" width="108%" height="112%">
          <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#93c5fd" floodOpacity="0.16" />
        </filter>

        {/* Arrow marker */}
        <marker id="ap-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1 1L7 4L1 7" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="ap-arr-blue" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1 1L7 4L1 7" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* ── Outer card ── */}
      <rect
        x="8" y="8" width="744" height="414" rx="22"
        fill="url(#ap-bg)"
        stroke="#bfdbfe" strokeWidth="1.2"
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
          Vector embeddings, Marketplace rules and a human-in-the-loop QA gate.
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
              /* PUBLISH: Marketplace circles */
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
        stroke="#2563eb" strokeWidth="1.5"
        markerEnd="url(#ap-arr-blue)"
        className="ap-conn-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <g className="ap-qa-anim">
        <rect x={186} y={280} width={372} height={90} rx="16"
          fill="#f0f7ff"
          stroke="#2563eb" strokeWidth="1.5"
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
/* ChannelSyncFlow — distinct sync flow for Marketplace page          */
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
        <stop offset="0%" stopColor="hsl(226 71% 95%)" /><stop offset="100%" stopColor="hsl(226 71% 90%)" />
      </linearGradient>
      <linearGradient id="be-bg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#eff6ff" />
      </linearGradient>
      <linearGradient id="be-shine" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
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
      <rect x="60" y="70" width="80" height="22" rx="11" fill="hsl(226 71% 50%)" opacity="0.15" />
      <text x="100" y="86" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight="800" fill="hsl(226 71% 40%)" letterSpacing="1.5">ISSUE 04</text>
      <text x="60" y="180" fontFamily="Inter,system-ui" fontSize="22" fontWeight="800" fill="#0f172a">The Repricer</text>
      <text x="60" y="208" fontFamily="Inter,system-ui" fontSize="22" fontWeight="800" fill="#0f172a">Playbook</text>
      <line x1="60" y1="226" x2="240" y2="226" stroke="#0f172a" opacity="0.15" />
      <text x="60" y="252" fontFamily="Inter,system-ui" fontSize="11" fill="#334155">Inside the algorithm that</text>
      <text x="60" y="268" fontFamily="Inter,system-ui" fontSize="11" fill="#334155">protected $2.1M in margin</text>
      <text x="60" y="284" fontFamily="Inter,system-ui" fontSize="11" fill="#334155">across 40,000 SKUs.</text>
      {/* Decorative chart */}
      <polyline points="60,400 90,380 120,390 150,360 180,370 210,340 240,350 270,320"
        stroke="hsl(226 71% 50%)" strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="270" cy="320" r="4" fill="hsl(226 71% 50%)" opacity="0.8" />
      <text x="60" y="430" fontFamily="Inter,system-ui" fontSize="9" fill="#64748b">— Buy Box win rate, last 30 days</text>

      {/* Diagonal shine sweep on cover */}
      <g clipPath="url(#be-cover-clip)">
        <g transform="rotate(-20 180 250)">
          <rect x="-100" y="100" width="100" height="350" fill="url(#be-shine)" style={{ mixBlendMode: "screen" }}>
            <animateTransform attributeName="transform" type="translate" values="0 0; 600 0; 600 0" keyTimes="0; 0.55; 1" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>
      </g>
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
        <rect x="366" y={p.y + 18} width="60" height="18" rx="9" fill="hsl(226 71% 95%)" />
        <text x="396" y={p.y + 31} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="9" fontWeight="800" fill="hsl(226 71% 40%)">{p.c}</text>
        <text x="436" y={p.y + 31} fontFamily="Inter,system-ui" fontSize="10" fill="#94a3b8">· {p.k}</text>
        <text x="366" y={p.y + 58} fontFamily="Inter,system-ui" fontSize="13" fontWeight="800" fill="#0f172a">{p.t}</text>
        <text x="366" y={p.y + 78} fontFamily="Inter,system-ui" fontSize="10" fill="#64748b">Read the full article →</text>
      </g>
    ))}

    {/* Sparkles */}
    <g fill="white" stroke="hsl(226 71% 70%)" strokeWidth={0.6}>
      <path d="M680 40 q4 14 18 18 q-14 4 -18 18 q-4 -14 -18 -18 q14 -4 18 -18 z">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
      </path>
      <path d="M30 460 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
      </path>
      <path d="M700 460 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

/* ------------------------------------------------------------------ */
/* AboutJourneyMockup — founder story / milestones panel               */
/* ------------------------------------------------------------------ */
export const AboutJourneyMockup = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 720 520" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="aj-bg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#eff6ff" />
      </linearGradient>
      <linearGradient id="aj-card" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 95%)" />
        <stop offset="100%" stopColor="hsl(226 71% 90%)" />
      </linearGradient>
      <linearGradient id="aj-accent" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(226 71% 50%)" /><stop offset="100%" stopColor="hsl(226 71% 40%)" />
      </linearGradient>
      <linearGradient id="aj-shine" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <filter id="aj-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feGaussianBlur stdDeviation="12" /><feOffset dy="8" />
        <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <clipPath id="aj-card-clip">
        <rect x="40" y="50" width="320" height="420" rx="20" />
      </clipPath>
    </defs>
    <rect x="10" y="10" width="700" height="500" rx="22" fill="url(#aj-bg)" stroke="#e2e8f0" />

    {/* Founder card */}
    <g filter="url(#aj-shadow)">
      <rect x="40" y="50" width="320" height="420" rx="20" fill="url(#aj-card)" />
      <rect
        x="50"
        y="70"
        width="95"
        height="22"
        rx="11"
        fill="hsl(226 71% 50%)"
        opacity="0.15"
      />
      <text x="100" y="86" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight="800" fill="hsl(226 71% 40%)" letterSpacing="1.5">2019 → 2026</text>

      {/* Founders avatars */}
      <g transform="translate(60, 120)">
        <circle cx="28" cy="28" r="28" fill="hsl(226 71% 50%)" />
        <text x="28" y="33" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight="800" fill="white">RS</text>
        <circle cx="76" cy="28" r="28" fill="hsl(226 71% 45%)" />
        <text x="76" y="33" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight="800" fill="white">AP</text>
      </g>

      <text x="60" y="220" fontFamily="Inter,system-ui" fontSize="20" fontWeight="800" fill="#0f172a">Two engineers,</text>
      <text x="60" y="246" fontFamily="Inter,system-ui" fontSize="20" fontWeight="800" fill="#0f172a">one mission.</text>
      <line x1="60" y1="266" x2="160" y2="266" stroke="hsl(226 71% 50%)" strokeWidth="3" />
      <text x="60" y="296" fontFamily="Inter,system-ui" fontSize="11" fill="#475569">We started Ctasis in an Ahmedabad</text>
      <text x="60" y="312" fontFamily="Inter,system-ui" fontSize="11" fill="#475569">garage to end the spreadsheet hell</text>
      <text x="60" y="328" fontFamily="Inter,system-ui" fontSize="11" fill="#475569">of multichannel sellers.</text>

      {/* Stat strip */}
      <g transform="translate(60, 360)">
        {[
          { l: "Sellers", v: "50K+" },
          { l: "Countries", v: "150+" },
          { l: "GMV", v: "$300M" },
        ].map((s, i) => (
          <g key={i} transform={`translate(${i * 90}, 0)`}>
            <text x="0" y="0" fontFamily="Inter,system-ui" fontSize="20" fontWeight="800" fill="#0f172a">{s.v}</text>
            <text x="0" y="18" fontFamily="Inter,system-ui" fontSize="10" fill="#64748b">{s.l}</text>
          </g>
        ))}
      </g>

      <rect x="60" y="420" width="260" height="32" rx="16" fill="hsl(226 71% 50%)" />
      <text x="190" y="441" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11" fontWeight="800" fill="white">Read the founder story →</text>

      {/* Diagonal shine sweep on founder card */}
      <g clipPath="url(#aj-card-clip)">
        <g transform="rotate(-20 200 260)">
          <rect x="-60" y="50" width="80" height="420" fill="url(#aj-shine)" style={{ mixBlendMode: "screen" }}>
            <animateTransform attributeName="transform" type="translate" values="0 0; 600 0; 600 0" keyTimes="0; 0.55; 1" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>
      </g>
    </g>

    {/* Right milestones */}
    <g>
      <text x="400" y="74" fontFamily="Inter,system-ui" fontSize="11" fontWeight="800" fill="#64748b" letterSpacing="2">MILESTONES</text>
      {[
        { y: 100, year: "2019", t: "Founded in Ahmedabad", c: "hsl(226 71% 50%)" },
        { y: 170, year: "2021", t: "Series A · $12M raised", c: "hsl(226 71% 45%)" },
        { y: 240, year: "2023", t: "Crossed 50 countries", c: "hsl(226 71% 50%)" },
        { y: 310, year: "2024", t: "AI Repricer launched", c: "hsl(226 71% 40%)" },
        { y: 380, year: "2026", t: "100K-seller goal", c: "hsl(226 71% 40%)" },
      ].map((m, i, arr) => (
        <g key={i}>
          {i < arr.length - 1 && (
            <line x1="412" y1={m.y + 8} x2="412" y2={arr[i + 1].y - 8} stroke="#e2e8f0" strokeDasharray="2 4" />
          )}
          <circle cx="412" cy={m.y} r="10" fill="white" stroke={m.c} strokeWidth="3" />
          <circle cx="412" cy={m.y} r="4" fill={m.c}>
            <animate attributeName="r" values="4;5;4" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.7;1" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <g filter="url(#aj-shadow)">
            <rect x="436" y={m.y - 22} width="240" height="48" rx="14" fill="white" stroke="#e2e8f0" />
            <text x="448" y={m.y - 6} fontFamily="Inter,system-ui" fontSize="13" fontWeight="800" fill={m.c}>{m.year}</text>
            <text x="448" y={m.y + 14} fontFamily="Inter,system-ui" fontSize="10" fontWeight="700" fill="#0f172a">{m.t}</text>
          </g>
        </g>
      ))}
    </g>

    {/* Sparkles */}
    <g fill="white" stroke="hsl(226 71% 70%)" strokeWidth={0.6}>
      <path d="M680 40 q4 14 18 18 q-14 4 -18 18 q-4 -14 -18 -18 q14 -4 18 -18 z">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
      </path>
      <path d="M30 480 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
      </path>
      <path d="M700 480 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
      </path>
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
        Marketplace event
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
        x="450"
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


/* ------------------------------------------------------------------ */
/* Assetlibrarymockup  — visual for services pages                  */
/* ------------------------------------------------------------------ */
export const AssetLibraryMockup = (props: SVGProps<SVGSVGElement>) => {
  const products = [
    { name: "Headphones", price: "$129", rating: "★★★★★" },
    { name: "Smart Watch", price: "$199", rating: "★★★★☆" },
    { name: "Earbuds Pro", price: "$99", rating: "★★★★☆" },
    { name: "Speaker", price: "$79", rating: "★★★★★" },
    { name: "Backpack", price: "$59", rating: "★★★★☆" },
    { name: "Phone Case", price: "$19", rating: "★★★★☆" },
  ];

  const features = [
    { label: "Long Battery", desc: "Up to 40hrs playtime" },
    { label: "AI Powered", desc: "Adapts to you" },
    { label: "Fast Shipping", desc: "Free & fast delivery" },
    { label: "2 Yr Warranty", desc: "Complete peace" },
  ];

  const timeline = [
    { year: "2018", label: "Founded" },
    { year: "2020", label: "Product Launch" },
    { year: "2022", label: "Global Expansion" },
    { year: "2024", label: "1M+ Customers" },
  ];

  const comparisonRows = [
    { feature: "High Quality Sound", ours: true, a: true, b: false },
    { feature: "Active Noise Cancellation", ours: true, a: true, b: false },
    { feature: "Long Battery Life", ours: true, a: false, b: true },
    { feature: "Fast Charging", ours: true, a: true, b: false },
    { feature: "Premium Warranty", ours: true, a: false, b: false },
  ];
  return (
    <svg viewBox="0 0 900 650" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="alm-hero" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="60%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
        <linearGradient id="alm-living" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <linearGradient id="alm-accent" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="hsl(221 83% 53%)" />
          <stop offset="100%" stopColor="hsl(213 94% 68%)" />
        </linearGradient>
        <filter id="alm-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
          <feOffset dy="3" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.1" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="alm-shadow-lg" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" />
          <feOffset dy="4" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.12" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="900" height="650" fill="#F8FAFC" />

      {/* Outer dashboard frame */}
      <rect x="10" y="10" width="880" height="630" rx="20" fill="#FFFFFF" stroke="#E2E8F0" filter="url(#alm-shadow-lg)" />

      {/* Header */}
      <text x="40" y="58" fontFamily="Inter,system-ui" fontSize="24" fontWeight={700} fill="#0F172A" letterSpacing="0.3">
        ASSET LIBRARY
      </text>

      {/* Toolbar */}
      <g>
        <rect x="620" y="34" width="120" height="34" rx="10" fill="#FFFFFF" stroke="hsl(221 83% 53%)" strokeWidth={1.4} />
        <g transform="translate(636,44)">
          <rect x="0" y="0" width="6" height="6" rx="1.5" fill="hsl(221 83% 53%)" />
          <rect x="9" y="0" width="6" height="6" rx="1.5" fill="hsl(221 83% 53%)" />
          <rect x="0" y="9" width="6" height="6" rx="1.5" fill="hsl(221 83% 53%)" />
          <rect x="9" y="9" width="6" height="6" rx="1.5" fill="hsl(221 83% 53%)" />
        </g>
        <text x="660" y="56" fontFamily="Inter,system-ui" fontSize="13" fontWeight={600} fill="hsl(221 83% 53%)">
          Grid View
        </text>

        <rect x="750" y="34" width="110" height="34" rx="10" fill="hsl(221 83% 53%)" />
        <g transform="translate(766,44)" stroke="#FFFFFF" strokeWidth={1.6} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9 V4 M3 4 L0.5 6.5 M3 4 L5.5 6.5" />
          <path d="M-1 10 v1.5 a1 1 0 0 0 1 1 h6 a1 1 0 0 0 1 -1 V10" />
        </g>
        <text x="786" y="56" fontFamily="Inter,system-ui" fontSize="13" fontWeight={600} fill="#FFFFFF">
          Upload
        </text>
      </g>

      {/* ===================== ROW 1 ===================== */}

      {/* Hero banner */}
      <g filter="url(#alm-shadow)">
        <rect x="40" y="100" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
        <clipPath id="alm-hero-clip">
          <rect x="56" y="114" width="368" height="96" rx="10" />
        </clipPath>
        <g clipPath="url(#alm-hero-clip)">
          <rect x="56" y="114" width="368" height="96" fill="url(#alm-hero)" />
          <rect x="72" y="128" width="18" height="3" rx="1.5" fill="hsl(221 83% 53%)" />
          <text x="72" y="150" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill="#0F172A">
            Elevate Your
          </text>
          <text x="72" y="166" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill="#0F172A">
            Sound Experience
          </text>
          <text x="72" y="180" fontFamily="Inter,system-ui" fontSize="8" fill="#64748B">
            Premium quality. Pure performance.
          </text>
          <rect x="72" y="188" width="62" height="16" rx="8" fill="hsl(221 83% 53%)" />
          <text x="103" y="199" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="8" fontWeight={600} fill="#FFFFFF">
            Shop Now
          </text>

          <ellipse cx="360" cy="196" rx="34" ry="6" fill="#FFFFFF" opacity={0.7} />
          <rect x="332" y="188" width="56" height="10" rx="5" fill="#FFFFFF" />

          <g transform="translate(328,132)">
            <path d="M8 30 A24 24 0 0 1 56 30" fill="none" stroke="#1E293B" strokeWidth={6} strokeLinecap="round" />
            <rect x="0" y="26" width="14" height="20" rx="7" fill="#334155" />
            <rect x="50" y="26" width="14" height="20" rx="7" fill="#334155" />
            <circle cx="7" cy="36" r="4" fill="#1E3A8A" />
            <circle cx="57" cy="36" r="4" fill="#1E3A8A" />
          </g>

          <circle cx="404" cy="130" r="16" fill="hsl(221 83% 53%)" />
          <text x="404" y="127" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fontWeight={700} fill="#FFFFFF">
            New
          </text>
          <text x="404" y="135" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fontWeight={700} fill="#FFFFFF">
            Arrival
          </text>
        </g>

        <rect x="56" y="216" width="20" height="20" rx="6" fill="hsl(221 83% 53%)" />
        <text x="66" y="230" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
          1
        </text>
        <text x="84" y="230" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
          Hero Banner
        </text>
      </g>

      {/* Comparison table */}
      <g filter="url(#alm-shadow)">
        <rect x="460" y="100" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
        <rect x="626" y="114" width="90" height="94" fill="#EFF6FF" />

        <text x="474" y="128" fontFamily="Inter,system-ui" fontSize="8.5" fontWeight={700} fill="#0F172A">
          Features
        </text>
        <text x="671" y="124" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7.5" fontWeight={700} fill="#0F172A">
          Our Product
        </text>
        <text x="748" y="124" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7.5" fontWeight={700} fill="#0F172A">
          Competitor A
        </text>
        <text x="822" y="124" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7.5" fontWeight={700} fill="#0F172A">
          Competitor B
        </text>
        <line x1="474" y1="132" x2="846" y2="132" stroke="#E2E8F0" />

        {comparisonRows.map((row, i) => {
          const y = 146 + i * 14;
          const dotY = y - 3;
          return (
            <g key={row.feature}>
              <text x="474" y={y} fontFamily="Inter,system-ui" fontSize="7.5" fill="#334155">
                {row.feature}
              </text>

              {row.ours ? (
                <>
                  <circle cx="671" cy={dotY} r="6" fill="hsl(221 83% 53%)" />
                  <path d={`M668 ${dotY} l2 2 l4 -4`} stroke="#FFFFFF" strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </>
              ) : (
                <line x1="667" y1={dotY} x2="675" y2={dotY} stroke="#94A3B8" strokeWidth={1.4} strokeLinecap="round" />
              )}

              {row.a ? (
                <>
                  <circle cx="748" cy={dotY} r="6" fill="#CBD5E1" />
                  <path d={`M745 ${dotY} l2 2 l4 -4`} stroke="#475569" strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </>
              ) : (
                <line x1="744" y1={dotY} x2="752" y2={dotY} stroke="#94A3B8" strokeWidth={1.4} strokeLinecap="round" />
              )}

              {row.b ? (
                <>
                  <circle cx="822" cy={dotY} r="6" fill="#CBD5E1" />
                  <path d={`M819 ${dotY} l2 2 l4 -4`} stroke="#475569" strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </>
              ) : (
                <line x1="818" y1={dotY} x2="826" y2={dotY} stroke="#94A3B8" strokeWidth={1.4} strokeLinecap="round" />
              )}
            </g>
          );
        })}

        <rect x="474" y="216" width="20" height="20" rx="6" fill="hsl(221 83% 53%)" />
        <text x="484" y="230" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
          2
        </text>
        <text x="502" y="230" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
          Comparison
        </text>
      </g>

      {/* ===================== ROW 2 ===================== */}

      {/* Brand story */}
      <g filter="url(#alm-shadow)">
        <rect x="40" y="270" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />

        <polygon points="66,286 76,291 76,301 66,306 56,301 56,291" fill="hsl(221 83% 53%)" />
        <text x="82" y="296" fontFamily="Inter,system-ui" fontSize="12" fontWeight={800} fill="#0F172A">
          A+ <tspan fill="hsl(221 83% 53%)">BRAND</tspan>
        </text>
        <text x="82" y="307" fontFamily="Inter,system-ui" fontSize="7" fill="#64748B">
          Built for Better Living
        </text>
        <line x1="56" y1="344" x2="410" y2="344" stroke="#CBD5E1" strokeWidth={1.4} strokeDasharray="2 3" />
        {timeline.map((t, i) => {
          const x = 80 + i * 100;
          return (
            <g key={t.year} textAnchor="middle">
              <circle cx={x} cy="344" r="4" fill="hsl(221 83% 53%)" />
              <circle cx={x} cy="366" r="12" fill="#DBEAFE" />
              <text x={x} y="338" fontFamily="Inter,system-ui" fontSize="7" fontWeight={700} fill="#0F172A" textAnchor="middle">
                {t.year}
              </text>
              <text x={x} y="384" fontFamily="Inter,system-ui" fontSize="6" fill="#64748B" textAnchor="middle">
                {t.label}
              </text>
            </g>
          );
        })}

        <rect x="56" y="396" width="20" height="20" rx="6" fill="hsl(221 83% 53%)" />
        <text x="66" y="410" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
          3
        </text>
        <text x="84" y="410" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
          Brand Story
        </text>
      </g>

      {/* Feature icons */}
      <g filter="url(#alm-shadow)">
        <rect x="460" y="270" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />

        {features.map((f, i) => {
          const cx = 500 + i * 90;
          const cy = 300;
          return (
            <g key={f.label} transform={`translate(${cx},${cy})`} textAnchor="middle">
              <circle cx="0" cy="0" r="20" fill="#EFF6FF" />
              {i === 0 && (
                <>
                  <rect x="-9" y="-8" width="16" height="16" rx="2" fill="none" stroke="hsl(221 83% 53%)" strokeWidth={1.6} />
                  <rect x="7" y="-4" width="3" height="8" rx="1" fill="hsl(221 83% 53%)" />
                  <path d="M-3 -8 l-2 6 h4 l-2 6" fill="none" stroke="hsl(221 83% 53%)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
                </>
              )}
              {i === 1 && (
                <>
                  <path
                    d="M-8 -8 q-4 4 0 8 q-2 4 2 6 q4 2 6 -2 q4 -1 3 -6 q3 -4 -1 -7 q-4 -3 -7 0 q-2 0 -3 1"
                    fill="none"
                    stroke="hsl(221 83% 53%)"
                    strokeWidth={1.4}
                    strokeLinejoin="round"
                  />
                  <circle cx="-4" cy="-2" r="1" fill="hsl(221 83% 53%)" />
                  <circle cx="2" cy="2" r="1" fill="hsl(221 83% 53%)" />
                  <circle cx="-2" cy="5" r="1" fill="hsl(221 83% 53%)" />
                </>
              )}
              {i === 2 && (
                <>
                  <rect x="-10" y="-5" width="13" height="10" rx="1.5" fill="none" stroke="hsl(221 83% 53%)" strokeWidth={1.5} />
                  <path d="M3 -2 h6 l3 4 v3 h-9 z" fill="none" stroke="hsl(221 83% 53%)" strokeWidth={1.5} strokeLinejoin="round" />
                  <circle cx="-5" cy="7" r="2.2" fill="none" stroke="hsl(221 83% 53%)" strokeWidth={1.3} />
                  <circle cx="6" cy="7" r="2.2" fill="none" stroke="hsl(221 83% 53%)" strokeWidth={1.3} />
                </>
              )}
              {i === 3 && (
                <>
                  <path
                    d="M0 -10 l9 3 v6 c0 6 -4 9 -9 11 c-5 -2 -9 -5 -9 -11 v-6 z"
                    fill="none"
                    stroke="hsl(221 83% 53%)"
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                  />
                  <path d="M-4 0 l3 3 l6 -6" fill="none" stroke="hsl(221 83% 53%)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </>
              )}
              <text x="0" y="34" fontFamily="Inter,system-ui" fontSize="8" fontWeight={700} fill="#0F172A">
                {f.label}
              </text>
              <text x="0" y="44" fontFamily="Inter,system-ui" fontSize="6" fill="#64748B">
                {f.desc}
              </text>
            </g>
          );
        })}

        <rect x="474" y="386" width="20" height="20" rx="6" fill="hsl(221 83% 53%)" />
        <text x="484" y="400" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
          4
        </text>
        <text x="502" y="400" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
          Features
        </text>
      </g>

      {/* ===================== ROW 3 ===================== */}

      {/* Product grid */}
      <g filter="url(#alm-shadow)">
        <rect x="40" y="440" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />

        {products.map((p, i) => {
          const x = 52 + i * 64;
          const y = 456;
          return (
            <g key={p.name} transform={`translate(${x},${y})`}>
              <rect x="0" y="0" width="58" height="80" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
              <rect x="16" y="12" width="26" height="26" rx="6" fill="hsl(221 83% 95%)" />
              <circle cx="29" cy="25" r="8" fill="hsl(221 83% 60%)" />
              <text x="29" y="58" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="5.6" fill="#0F172A">
                {p.name}
              </text>
              <text x="29" y="66" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="5.8" fontWeight={700} fill="hsl(221 83% 53%)">
                {p.price}
              </text>
              <text x="29" y="75" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6" fill="#F59E0B">
                {p.rating}
              </text>
            </g>
          );
        })}

        <rect x="54" y="556" width="20" height="20" rx="6" fill="hsl(221 83% 53%)" />
        <text x="64" y="570" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
          5
        </text>
        <text x="82" y="570" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
          Product Grid
        </text>
      </g>

      {/* Lifestyle banner */}
      <g filter="url(#alm-shadow)">
        <rect x="460" y="440" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
        <clipPath id="alm-life-clip">
          <rect x="476" y="454" width="368" height="96" rx="10" />
        </clipPath>
        <g clipPath="url(#alm-life-clip)">
          <rect x="476" y="454" width="368" height="96" fill="url(#alm-living)" />

          <rect x="490" y="468" width="16" height="3" rx="1.5" fill="hsl(221 83% 53%)" />
          <text x="490" y="488" fontFamily="Inter,system-ui" fontSize="13" fontWeight={700} fill="#0F172A">
            Designed for
          </text>
          <text x="490" y="502" fontFamily="Inter,system-ui" fontSize="13" fontWeight={700} fill="#0F172A">
            Modern Living
          </text>
          <text x="490" y="514" fontFamily="Inter,system-ui" fontSize="7" fill="#64748B">
            Fits your lifestyle with elegance.
          </text>
          <rect x="490" y="522" width="58" height="15" rx="7.5" fill="hsl(221 83% 53%)" />
          <text x="519" y="532" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7.5" fontWeight={600} fill="#FFFFFF">
            Explore
          </text>

          <g transform="translate(800,470)">
            <rect x="0" y="0" width="26" height="40" fill="none" stroke="#94A3B8" strokeWidth={1.4} />
            <line x1="0" y1="14" x2="26" y2="14" stroke="#94A3B8" strokeWidth={1.2} />
            <line x1="0" y1="27" x2="26" y2="27" stroke="#94A3B8" strokeWidth={1.2} />
            <rect x="3" y="3" width="4" height="9" fill="#93C5FD" />
            <rect x="9" y="3" width="4" height="9" fill="hsl(221 83% 53%)" />
            <circle cx="20" cy="7" r="4" fill="none" stroke="#60A5FA" strokeWidth={1.2} />
          </g>

          <g transform="translate(772,466)">
            <line x1="0" y1="10" x2="0" y2="46" stroke="#334155" strokeWidth={1.6} />
            <path d="M-7 10 l14 0 l-4 -8 l-6 0 z" fill="#60A5FA" />
          </g>

          <g transform="translate(626,510)">
            <rect x="-8" y="18" width="16" height="16" rx="2" fill="#93C5FD" />
            <path d="M0 18 q-2 -14 -10 -16" fill="none" stroke="#16A34A" strokeWidth={2.2} strokeLinecap="round" />
            <path d="M0 18 q2 -18 12 -20" fill="none" stroke="#16A34A" strokeWidth={2.2} strokeLinecap="round" />
            <path d="M0 18 q0 -20 0 -22" fill="none" stroke="#16A34A" strokeWidth={2.2} strokeLinecap="round" />
          </g>

          <g transform="translate(650,510)">
            <rect x="-4" y="8" width="120" height="22" rx="8" fill="#93C5FD" />
            <rect x="-4" y="-2" width="20" height="18" rx="6" fill="#60A5FA" />
            <rect x="96" y="-2" width="20" height="18" rx="6" fill="#60A5FA" />
            <rect x="16" y="0" width="76" height="14" rx="6" fill="#BFDBFE" />
            <rect x="0" y="28" width="8" height="8" fill="#60A5FA" />
            <rect x="104" y="28" width="8" height="8" fill="#60A5FA" />
          </g>

          <g transform="translate(696,538)">
            <ellipse cx="0" cy="8" rx="20" ry="4" fill="#E2E8F0" />
            <rect x="-2" y="8" width="4" height="8" fill="#94A3B8" />
            <rect x="12" y="8" width="4" height="8" fill="#94A3B8" />
            <rect x="-8" y="-8" width="16" height="16" rx="6" fill="#1E293B" />
            <circle cx="0" cy="0" r="4" fill="#334155" />
          </g>

          <rect x="606" y="464" width="16" height="20" rx="2" fill="none" stroke="#94A3B8" strokeWidth={1.3} />
        </g>

        <rect x="474" y="556" width="20" height="20" rx="6" fill="hsl(221 83% 53%)" />
        <text x="484" y="570" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
          6
        </text>
        <text x="502" y="570" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
          Lifestyle
        </text>
      </g>

      {/* Footer */}
      <line x1="40" y1="608" x2="860" y2="608" stroke="#E2E8F0" />
      <g transform="translate(40,616)">
        <path d="M0 4 h6 l2 2 h10 v10 h-18 z" fill="none" stroke="#64748B" strokeWidth={1.4} strokeLinejoin="round" />
        <text x="26" y="14" fontFamily="Inter,system-ui" fontSize="10" fill="#334155">
          12 Assets
        </text>
      </g>
      <g transform="translate(770,624)">
        <circle cx="0" cy="0" r="8" fill="none" stroke="#64748B" strokeWidth={1.4} />
        <path d="M0 -4 v4 l3 3" fill="none" stroke="#64748B" strokeWidth={1.4} strokeLinecap="round" />
        <text x="14" y="4" fontFamily="Inter,system-ui" fontSize="10" fill="#334155">
          Last Updated Today
        </text>
      </g>
    </svg>
  )
};





export const ProblemDiagram = (props: SVGProps<SVGSVGElement>) => {

  const cards = [
    {
      x: 95, y: 55,
      name: "Amazon Seller Central",
      dots: ["#f59e0b", "#7c3aed", "#e2e8f0"],
      badge: "Oversold ×3",
      theme: "blue" as const,
      wave: "M0 26 Q 16 8, 32 22 T 64 20 T 96 10 T 150 24 T 200 14",
      endY: 14,
    },
    {
      x: 545, y: 45,
      name: "Etsy Shop Manager",
      dots: ["#ef4444", "#e2e8f0", "#e2e8f0"],
      badge: "Price mismatch",
      theme: "purple" as const,
      wave: "M0 18 Q 18 30, 34 16 T 70 24 T 110 8 T 150 22 T 200 12",
      endY: 12,
    },
    {
      x: 80, y: 400,
      name: "inventory_master.xlsx",
      dots: ["#10b981", "#7c3aed", "#e2e8f0"],
      badge: "12 conflicts",
      theme: "purple" as const,
      wave: "M0 22 Q 20 6, 38 20 T 80 26 T 120 12 T 160 22 T 200 16",
      endY: 16,
    },
    {
      x: 545, y: 405,
      name: "Walmart Seller Center",
      dots: ["#1e3a8a", "#7c3aed", "#e2e8f0"],
      badge: "3 hrs/day, by hand",
      theme: "blue" as const,
      wave: "M0 20 Q 16 32, 34 18 T 76 22 T 116 8 T 156 24 T 200 14",
      endY: 14,
    },
  ];

  const center = { x: 450, y: 315 };
  const anchors = [
    { x: 330, y: 195 },
    { x: 565, y: 195 },
    { x: 320, y: 405 },
    { x: 565, y: 410 },
  ];

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
  }


  const blue = "hsl(226 71% 50%)";
  const blueSoft = "hsl(226 71% 95%)";
  const blueBorder = "hsl(226 60% 82%)";
  const purple = "hsl(262 60% 50%)";
  const purpleSoft = "hsl(262 60% 96%)";
  const purpleBorder = "hsl(262 45% 84%)";
  const slate900 = "#0f172a";

  return (
    <svg viewBox="0 0 900 620" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <filter id="pd-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" />
          <feOffset dy="6" />
          <feComponentTransfer><feFuncA type="linear" slope="0.12" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Animated connector lines */}
      {anchors.map((a, i) => (
        <g key={"line" + i}>
          <line
            x1={a.x} y1={a.y} x2={center.x} y2={center.y}
            stroke={blue} strokeWidth={1.4} strokeDasharray="6 5" opacity={0.55}
          >
            <animate attributeName="stroke-dashoffset" values="0;-22" dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" />
          </line>
          <circle r="3" fill={blue} opacity={0.7}>
            <animateMotion dur={`${2.2 + i * 0.25}s`} repeatCount="indefinite"
              path={`M${a.x} ${a.y} L${center.x} ${center.y}`} />
          </circle>
        </g>
      ))}

      {/* Animated pulse rings around center */}
      <circle cx={center.x} cy={center.y} r="56" fill={blue} opacity={0.12}>
        <animate attributeName="r" values="56;100" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.15;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx={center.x} cy={center.y} r="56" fill={blue} opacity={0.08}>
        <animate attributeName="r" values="56;130" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Alert badges along the lines */}
      {anchors.map((a, i) => {
        const bx = lerp(a.x, center.x, 0.42);
        const by = lerp(a.y, center.y, 0.42);
        return (
          <g key={i} filter="url(#pd-shadow)">
            <circle cx={bx} cy={by} r="14" fill="#ffffff" stroke={blue} strokeWidth={1.6} />
            <line x1={bx} y1={by - 5} x2={bx} y2={by + 1.5} stroke={blue} strokeWidth={1.8} strokeLinecap="round" />
            <circle cx={bx} cy={by + 5} r="1.1" fill={blue} />
          </g>
        );
      })}

      {/* Center sync queue */}
      <g filter="url(#pd-shadow)">
        <circle cx={center.x} cy={center.y} r="55" fill="#ffffff" stroke={blueBorder} strokeWidth={1.4} />
      </g>
      <g transform={`translate(${center.x},${center.y - 12})`}>
        <path d="M-10 -1 A10 10 0 0 1 7 -8.5" fill="none" stroke={blue} strokeWidth={2.4} strokeLinecap="round" />
        <polygon points="7,-8.5 2.5,-9.2 6,-13.4" fill={blue} />
        <path d="M10 1 A10 10 0 0 1 -7 8.5" fill="none" stroke={blue} strokeWidth={2.4} strokeLinecap="round" />
        <polygon points="-7,8.5 -2.5,9.2 -6,13.4" fill={blue} />
      </g>
      <text x={center.x} y={center.y + 26} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill={blue}>
        Sync Queue
      </text>

      {/* Marketplace / file cards */}
      {cards.map((c, i) => {
        const soft = c.theme === "blue" ? blueSoft : purpleSoft;
        const mid = c.theme === "blue" ? blue : purple;
        const bord = c.theme === "blue" ? blueBorder : purpleBorder;
        return (
          <g key={i}>
            <g filter="url(#pd-shadow)">
              <rect x={c.x} y={c.y} width="260" height="175" rx="16" fill="#ffffff" stroke="#e6e9f5" />
            </g>

            {/* traffic dots */}
            <circle cx={c.x + 22} cy={c.y + 26} r="5" fill={c.dots[0]} />
            <circle cx={c.x + 38} cy={c.y + 26} r="5" fill={c.dots[1]} />
            <circle cx={c.x + 54} cy={c.y + 26} r="5" fill={c.dots[2]} />

            {/* title */}
            <text x={c.x + 22} y={c.y + 56} fontFamily="Inter,system-ui" fontSize="16.5" fontWeight={700} fill={slate900}>
              {c.name}
            </text>

            {/* badge */}
            <rect x={c.x + 20} y={c.y + 68} width={c.badge.length * 6.6 + 34} height="26" rx="13" fill={soft} stroke={bord} />
            <circle cx={c.x + 34} cy={c.y + 81} r="6.5" fill="none" stroke={mid} strokeWidth={1.4} />
            <line x1={c.x + 34} y1={c.y + 77.5} x2={c.x + 34} y2={c.y + 81.5} stroke={mid} strokeWidth={1.3} strokeLinecap="round" />
            <circle cx={c.x + 34} cy={c.y + 84.5} r="0.9" fill={mid} />
            <text x={c.x + 46} y={c.y + 85.5} fontFamily="Inter,system-ui" fontSize="12.5" fontWeight={700} fill={mid}>
              {c.badge}
            </text>

            {/* sparkline */}
            <g transform={`translate(${c.x + 20},${c.y + 108})`}>
              <path d={c.wave} fill="none" stroke={mid} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="200" cy={c.endY} r="7" fill={mid} opacity={0.18} />
              <circle cx="200" cy={c.endY} r="4" fill={mid} />
            </g>
          </g>
        );
      })}
    </svg>
  );
};



export const RolesIllustration = (props: SVGProps<SVGSVGElement>) => {

  const ICONS: Record<string, JSX.Element> = {
    crown: (
      <path
        fill="currentColor"
        d="M4 9l3.5 2.5L12 6l4.5 5.5L20 9l-1.6 8.5a1.2 1.2 0 01-1.2 1H6.8a1.2 1.2 0 01-1.2-1L4 9z"
      />
    ),
    briefcase: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="8" width="17" height="11" rx="2" fill="currentColor" stroke="none" />
        <path d="M9 8V6.5A1.5 1.5 0 0110.5 5h3A1.5 1.5 0 0115 6.5V8" />
      </g>
    ),
    person: (
      <g fill="currentColor">
        <circle cx="12" cy="8.5" r="4" />
        <path d="M4.5 20.5a7.5 7.5 0 0115 0z" />
      </g>
    ),
    star: (
      <path fill="currentColor" d="M12 2.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
    ),
    shieldCheck: (
      <g fill="currentColor">
        <path d="M12 2.5l7 3v5.4c0 4.7-3 8.7-7 9.8-4-1.1-7-5.1-7-9.8V5.5z" />
      </g>
    ),
    check: (
      <path fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12l4.5 4.5L19 7" />
    ),
    document: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 3.5h7l4 4v13a1 1 0 01-1 1h-10a1 1 0 01-1-1v-16a1 1 0 011-1z" />
        <path d="M13 3.5V8h4M9 12h6M9 15.5h6" />
      </g>
    ),
    users: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8.5" r="3" />
        <path d="M3.5 19c0-3 2.5-5.3 5.5-5.3s5.5 2.3 5.5 5.3" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M15.5 13.9c2.4.3 4 2.3 4 5.1" />
      </g>
    ),
    database: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="7" ry="2.4" />
        <path d="M5 6v12c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4V6" />
        <path d="M5 12c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4" />
      </g>
    ),
    tag: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 3.5H19a1.5 1.5 0 011.5 1.5v6.5a1.5 1.5 0 01-.44 1.06l-8 8a1.5 1.5 0 01-2.12 0l-6.5-6.5a1.5 1.5 0 010-2.12l8-8a1.5 1.5 0 011.06-.44z" />
        <circle cx="16.5" cy="7.5" r="1.4" fill="currentColor" stroke="none" />
      </g>
    ),
    cart: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="20" r="1.3" />
        <circle cx="17" cy="20" r="1.3" />
        <path d="M2.5 3.5h2.4l2.5 12.2a2 2 0 002 1.6h8a2 2 0 002-1.6l1.5-8H6" />
      </g>
    ),
    chart: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M5 19v-6M11 19V8M17 19v-3" />
      </g>
    ),
    clipboard: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="4.5" width="14" height="16" rx="2" />
        <rect x="9" y="3" width="6" height="3.5" rx="1" fill="currentColor" stroke="none" />
        <path d="M8.5 11h7M8.5 14.5h7" />
      </g>
    ),
    box: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5l7.5 4.3v8.4L12 20.5l-7.5-4.3V7.8L12 3.5zM4.5 7.8L12 12l7.5-4.2M12 12v8.5"
      />
    ),
  };

  const Icon = ({ name, size = 22, color }: { name: string; size?: number; color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" color={color}>
      {ICONS[name]}
    </svg>
  );

  const CARD_W = 260;
  const GAP = 24;
  const CARD_TOP = 150;
  const CARD_H = 520;
  const START_X = 90;

  const ROLES = [
    {
      accent: "#2E1065",
      tint: "#EDEAFB",
      title: "Owner",
      subtitle: "Full access & control",
      hexIcon: "crown",
      badgeIcon: "star",
      wave: "#C7BEF2",
      perms: [
        { icon: "document", label: "Billing" },
        { icon: "users", label: "Users" },
        { icon: "database", label: "All data" },
      ],
    },
    {
      accent: "#2549E8",
      tint: "#E9EDFD",
      title: "Manager",
      subtitle: "Manage & oversee operations",
      hexIcon: "briefcase",
      badgeIcon: "shieldCheck",
      wave: "#BCCBF6",
      perms: [
        { icon: "tag", label: "Listings" },
        { icon: "cart", label: "Orders" },
        { icon: "chart", label: "Reports" },
      ],
    },
    {
      accent: "#38A6E8",
      tint: "#E9F5FD",
      title: "Staff",
      subtitle: "Limited access",
      hexIcon: "person",
      badgeIcon: "shieldCheck",
      wave: "#BFE3F7",
      perms: [
        { icon: "clipboard", label: "Orders" },
        { icon: "box", label: "Ship labels" },
      ],
    },
  ];

  const DotCluster = ({ x, y, color }: { x: number; y: number; color: string }) => (
    <g fill={color}>
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={x + col * 16} cy={y + row * 16} r="2.4" opacity={0.15 + (row + col) * 0.02} />
        ))
      )}
    </g>
  );

  return (
    <svg viewBox="0 0 1000 720" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill="#DCE1F0" />
        </pattern>
        {ROLES.map((r, i) => (
          <clipPath id={`card-clip-${i}`} key={i}>
            <rect
              x={START_X + i * (CARD_W + GAP)}
              y={CARD_TOP}
              width={CARD_W}
              height={CARD_H}
              rx="24"
            />
          </clipPath>
        ))}
      </defs>
      {ROLES.map((r, i) => {
        const x = START_X + i * (CARD_W + GAP);
        const cx = x + CARD_W / 2;
        return (
          <g key={r.title}>
            {/* card body */}
            <rect x={x} y={CARD_TOP} width={CARD_W} height={CARD_H} rx="24" fill="white" stroke="#ECEFF7" />

            {/* wave decoration, clipped to card — gentle float */}
            <g clipPath={`url(#card-clip-${i})`}>
              <path
                d={`M${x} ${CARD_TOP + CARD_H - 60} 
                  Q ${x + CARD_W * 0.3} ${CARD_TOP + CARD_H - 130} ${cx} ${CARD_TOP + CARD_H - 80}
                  T ${x + CARD_W} ${CARD_TOP + CARD_H - 60}
                  L ${x + CARD_W} ${CARD_TOP + CARD_H}
                  L ${x} ${CARD_TOP + CARD_H} Z`}
                fill={r.wave}
                opacity="0.55"
              >
                <animate
                  attributeName="d"
                  values={`M${x} ${CARD_TOP + CARD_H - 60} Q ${x + CARD_W * 0.3} ${CARD_TOP + CARD_H - 130} ${cx} ${CARD_TOP + CARD_H - 80} T ${x + CARD_W} ${CARD_TOP + CARD_H - 60} L ${x + CARD_W} ${CARD_TOP + CARD_H} L ${x} ${CARD_TOP + CARD_H} Z;M${x} ${CARD_TOP + CARD_H - 70} Q ${x + CARD_W * 0.3} ${CARD_TOP + CARD_H - 115} ${cx} ${CARD_TOP + CARD_H - 70} T ${x + CARD_W} ${CARD_TOP + CARD_H - 70} L ${x + CARD_W} ${CARD_TOP + CARD_H} L ${x} ${CARD_TOP + CARD_H} Z;M${x} ${CARD_TOP + CARD_H - 60} Q ${x + CARD_W * 0.3} ${CARD_TOP + CARD_H - 130} ${cx} ${CARD_TOP + CARD_H - 80} T ${x + CARD_W} ${CARD_TOP + CARD_H - 60} L ${x + CARD_W} ${CARD_TOP + CARD_H} L ${x} ${CARD_TOP + CARD_H} Z`}
                  dur={`${5 + i * 0.8}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* top accent bar */}
            <rect x={x + 10} y={CARD_TOP - 2} width={CARD_W - 20} height="6" rx="3" fill={r.accent} />

            {/* hexagon badge — gentle float */}
            <g transform={`translate(${cx},${CARD_TOP - 55})`}>
              <polygon
                points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19"
                fill="white"
                stroke={r.accent}
                strokeWidth="1.5"
              >
                <animate
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 -4; 0 0"
                  dur={`${3.5 + i * 0.6}s`}
                  repeatCount="indefinite"
                />
              </polygon>
              <g transform="translate(-13,-13)" color={r.accent}>
                <Icon name={r.hexIcon} size={26} />
              </g>
            </g>

            {/* avatar */}
            <circle cx={cx} cy={CARD_TOP + 90} r="52" fill={r.tint} />
            <g transform={`translate(${cx - 24},${CARD_TOP + 58})`} color={r.accent}>
              <Icon name="person" size={48} />
            </g>
            <circle cx={cx + 33} cy={CARD_TOP + 122} r="17" fill={r.accent} />
            <g transform={`translate(${cx + 33 - 10},${CARD_TOP + 112})`} color="white">
              <Icon name={r.badgeIcon} size={20} />
            </g>

            {/* title */}
            <text x={cx} y={CARD_TOP + 185} textAnchor="middle" fontSize="30" fontWeight="800" fill="#0F172A">
              {r.title}
            </text>
            <rect x={cx - 30} y={CARD_TOP + 197} width="60" height="3" rx="1.5" fill={r.accent} />
            <text x={cx} y={CARD_TOP + 226} textAnchor="middle" fontSize="15" fill="#64748B">
              {r.subtitle}
            </text>

            {/* permission rows */}
            {r.perms.map((p, pi) => {
              const ry = CARD_TOP + 258 + pi * 58;
              return (
                <g key={p.label}>
                  <rect x={x + 20} y={ry} width={CARD_W - 40} height="48" rx="14" fill="#F5F6FA" />
                  <rect x={x + 30} y={ry + 9} width="30" height="30" rx="9" fill={r.tint} />
                  <g transform={`translate(${x + 37},${ry + 16})`} color={r.accent}>
                    <Icon name={p.icon} size={16} />
                  </g>
                  <text x={x + 76} y={ry + 30} fontSize="16" fontWeight="700" fill="#0F172A">
                    {p.label}
                  </text>
                  <circle cx={x + CARD_W - 40} cy={ry + 24} r="12" fill="#22C55E">
                    <animate
                      attributeName="opacity"
                      values="1;0.65;1"
                      dur={`${2.5 + (i + pi) * 0.3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <g transform={`translate(${x + CARD_W - 52},${ry + 12})`}>
                    <Icon name="check" size={24} />
                  </g>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  )
};


export const InventorySyncSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 520 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="s-eng" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <filter id="s-sh" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" /><feOffset dy="2" />
        <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    {/* central sync */}
    <g filter="url(#s-sh)">
      <rect x="200" y="115" width="120" height="90" rx="14" fill="url(#s-eng)" />
      <text x="260" y="150" textAnchor="middle" fontFamily="Inter" fontSize="12" fontWeight="800" fill="#fff">Sync Engine</text>
      <text x="260" y="168" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#bfdbfe">latency &lt; 2s</text>
      <circle cx="260" cy="188" r="10" fill="#fff" opacity="0.15" />
      <circle cx="260" cy="188" r="5" fill="#fff" />
    </g>
    {/* left channels */}
    {[
      { y: 40, name: "Amazon", stock: "1,240", dot: "#f59e0b" },
      { y: 130, name: "Walmart", stock: "1,240", dot: "#2563eb" },
      { y: 220, name: "eBay", stock: "1,240", dot: "#ef4444" },
    ].map((c, i) => (
      <g key={c.name}>
        <rect x="20" y={c.y} width="160" height="60" rx="10" fill="white" stroke="#e2e8f0" filter="url(#s-sh)" />
        <circle cx="38" cy={c.y + 30} r="6" fill={c.dot} />
        <text x="52" y={c.y + 26} fontFamily="Inter" fontSize="12" fontWeight="700" fill="#0f172a">{c.name}</text>
        <text x="52" y={c.y + 44} fontFamily="Inter" fontSize="10" fill="#64748b">Stock: {c.stock}</text>
        <line x1="180" y1={c.y + 30} x2="200" y2="160" stroke="#60a5fa" strokeWidth="1.4" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
        </line>
        <circle r="3" fill="#60a5fa" opacity="0.8">
          <animateMotion dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite"
            path={`M180 ${c.y + 30} L200 160`} />
        </circle>
      </g>
    ))}
    {/* right channels */}
    {[
      { y: 40, name: "Etsy", stock: "1,240", dot: "#ea580c" },
      { y: 130, name: "Flipkart", stock: "1,240", dot: "#1d4ed8" },
      { y: 220, name: "Warehouse", stock: "1,240", dot: "#10b981" },
    ].map((c, i) => (
      <g key={c.name}>
        <rect x="340" y={c.y} width="160" height="60" rx="10" fill="white" stroke="#e2e8f0" filter="url(#s-sh)" />
        <circle cx="358" cy={c.y + 30} r="6" fill={c.dot} />
        <text x="372" y={c.y + 26} fontFamily="Inter" fontSize="12" fontWeight="700" fill="#0f172a">{c.name}</text>
        <text x="372" y={c.y + 44} fontFamily="Inter" fontSize="10" fill="#64748b">Stock: {c.stock}</text>
        <line x1="320" y1="160" x2="340" y2={c.y + 30} stroke="#2563eb" strokeWidth="1.4" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
        </line>
        <circle r="3" fill="#2563eb" opacity="0.8">
          <animateMotion dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite"
            path={`M320 160 L340 ${c.y + 30}`} />
        </circle>
      </g>
    ))}
  </svg>
);


export const AICatalogSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 520 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* input */}
    <g filter="url(#s-sh)">
      <rect x="20" y="90" width="140" height="140" rx="12" fill="white" stroke="#e2e8f0" />
      <rect x="20" y="90" width="140" height="3" rx="1.5" fill="#94a3b8" />
      <text x="34" y="112" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#64748b" letterSpacing="1">INPUT</text>
      <rect x="34" y="122" width="112" height="60" rx="6" fill="#f1f5f9" />
      <text x="90" y="158" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#64748b">product.jpg</text>
      <rect x="34" y="190" width="72" height="10" rx="2" fill="#e2e8f0" />
      <rect x="34" y="206" width="90" height="10" rx="2" fill="#e2e8f0" />
    </g>
    {/* AI engine */}
    <g filter="url(#s-sh)">
      <rect x="200" y="115" width="120" height="90" rx="14" fill="url(#s-eng)" />
      <path d="M245 145l7-7 7 7 7-7 7 7v20h-28z" fill="#fff" opacity="0.9" />
      <text x="260" y="188" textAnchor="middle" fontFamily="Inter" fontSize="12" fontWeight="800" fill="#fff">AI Catalog</text>
    </g>
    {/* output */}
    <g filter="url(#s-sh)">
      <rect x="360" y="60" width="140" height="200" rx="12" fill="white" stroke="#e2e8f0" />
      <rect x="360" y="60" width="140" height="3" rx="1.5" fill="#2563eb" />
      <text x="374" y="82" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#2563eb" letterSpacing="1">GENERATED</text>
      <text x="374" y="100" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#0f172a">Title</text>
      <rect x="374" y="106" width="112" height="6" rx="2" fill="#dbeafe" />
      <rect x="374" y="116" width="90" height="6" rx="2" fill="#dbeafe" />
      <text x="374" y="140" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#0f172a">Description</text>
      <rect x="374" y="146" width="112" height="5" rx="2" fill="#e2e8f0" />
      <rect x="374" y="154" width="106" height="5" rx="2" fill="#e2e8f0" />
      <rect x="374" y="162" width="98" height="5" rx="2" fill="#e2e8f0" />
      <text x="374" y="184" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#0f172a">Bullets · Attributes</text>
      <rect x="374" y="192" width="60" height="18" rx="9" fill="#dbeafe" />
      <text x="404" y="204" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#1d4ed8">SEO ✓</text>
      <rect x="440" y="192" width="46" height="18" rx="9" fill="#ecfdf5" />
      <text x="463" y="204" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#047857">A+ ✓</text>
    </g>
    {/* animated line: input → AI engine */}
    <line x1="160" y1="160" x2="200" y2="160" stroke="#60a5fa" strokeWidth="1.6" strokeDasharray="4 4" markerEnd="url(#hd-arrow2)">
      <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.4s" repeatCount="indefinite" />
    </line>
    <circle r="3" fill="#60a5fa" opacity="0.8">
      <animateMotion dur="1.8s" repeatCount="indefinite" path="M160 160 L200 160" />
    </circle>
    {/* animated line: AI engine → output */}
    <line x1="320" y1="160" x2="360" y2="160" stroke="#2563eb" strokeWidth="1.6" strokeDasharray="4 4" markerEnd="url(#hd-arrow3)">
      <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.4s" repeatCount="indefinite" />
    </line>
    <circle r="3" fill="#2563eb" opacity="0.8">
      <animateMotion dur="1.8s" repeatCount="indefinite" path="M320 160 L360 160" />
    </circle>
    <defs>
      <marker id="hd-arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#60a5fa" /></marker>
      <marker id="hd-arrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#2563eb" /></marker>
    </defs>
  </svg>
);

export const RepricerSVG = (props: SVGProps<SVGSVGElement>) => {
  const ICONS: Record<string, JSX.Element> = {
    tag: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 3.5H19a1.5 1.5 0 011.5 1.5v6.5a1.5 1.5 0 01-.44 1.06l-8 8a1.5 1.5 0 01-2.12 0l-6.5-6.5a1.5 1.5 0 010-2.12l8-8a1.5 1.5 0 011.06-.44z" />
        <circle cx="16.5" cy="7.5" r="1.4" fill="currentColor" stroke="none" />
      </g>
    ),
    trophy: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4h10v6a5 5 0 01-10 0V4z" />
        <path d="M7 5.5H4a3 3 0 003 4.3M17 5.5h3a3 3 0 01-3 4.3" />
        <path d="M12 15v3M8.5 21h7M9.5 18h5v3h-5z" />
      </g>
    ),
    trendUp: (
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16l6-6 4 4 8-9" />
        <path d="M15 2h6v6" />
      </g>
    ),
  };

  const Icon = ({ name, size = 22 }: { name: string; size?: number | string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      {ICONS[name]}
    </svg>
  );

  const KPIS = [
    { x: 50, icon: "tag", iconBg: "#EDE9FE", iconColor: "#5B21B6", label: "PRICE", value: "$21.40", delta: "+$0.30" },
    { x: 355, icon: "trophy", iconBg: "#DBEAFE", iconColor: "#2563EB", label: "BUY BOX WINNER", value: "82%", delta: "+9%" },
    { x: 660, icon: "trendUp", iconBg: "#D1FAE5", iconColor: "#059669", label: "MARGIN", value: "31.6%", delta: "+3.6%" },
  ];
  const KPI_W = 290;
  const KPI_Y = 160;
  const KPI_H = 130;

  const DATES = ["May 12", "May 16", "May 20", "May 24", "May 28", "Jun 01", "Jun 05", "Jun 09"];
  const YOUR_PRICE = [0.34, 0.31, 0.38, 0.44, 0.35, 0.5, 0.47, 0.56, 0.53, 0.58];
  const COMP_PRICE = [0.24, 0.22, 0.28, 0.33, 0.26, 0.38, 0.36, 0.42, 0.4, 0.46];

  const CHART_X0 = 90;
  const CHART_X1 = 890;
  const CHART_TOP = 380;
  const CHART_BOTTOM = 500;
  const FLOOR_Y = 470;

  function pointsFor(values: number[]) {
    const n = values.length;
    return values
      .map((v, i) => {
        const x = CHART_X0 + (i / (n - 1)) * (CHART_X1 - CHART_X0);
        const y = CHART_BOTTOM - v * (CHART_BOTTOM - CHART_TOP);
        return `${x},${y}`;
      })
      .join(" ");
  }
  const yourPts = pointsFor(YOUR_PRICE);
  const compPts = pointsFor(COMP_PRICE);
  const highlightIdx = 6;
  const hx = CHART_X0 + (highlightIdx / (YOUR_PRICE.length - 1)) * (CHART_X1 - CHART_X0);
  const hy = CHART_BOTTOM - YOUR_PRICE[highlightIdx] * (CHART_BOTTOM - CHART_TOP);

  return (
    <svg viewBox="0 0 1000 570" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Main card */}
      <rect x="30" y="30" width="940" height="510" rx="20" fill="white" stroke="#E7E9F3" />

      {/* Title + subtitle */}
      <text x="50" y="100" fontSize="24" fontWeight="800" fill="#0F172A">Repricer · SKU-42891</text>
      <text x="50" y="130" fontSize="15" fill="#64748B">Buy Box tracking · rule-based · guardrails on</text>

      {/* Buy Box WON pill */}
      <rect x="800" y="80" width="150" height="38" rx="19" fill="#D1FAE5" />
      <circle cx="820" cy="100" r="5" fill="#16A34A">
        <animate attributeName="r" values="5;6.5;5" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="834" y="105" fontSize="14" fontWeight="700" fill="#166534">Buy Box · WON</text>

      {/* KPI cards */}
      {KPIS.map((k) => (
        <g key={k.label}>
          <rect x={k.x} y={KPI_Y} width={KPI_W} height={KPI_H} rx="16" fill="white" stroke="#ECEFF7" />
          <circle cx={k.x + 48} cy={KPI_Y + 55} r="26" fill={k.iconBg} />
          <g transform={`translate(${k.x + 37},${KPI_Y + 44})`} color={k.iconColor}>
            <Icon name={k.icon} size="22" />
          </g>
          <text x={k.x + 92} y={KPI_Y + 44} fontSize="13" fontWeight="700" fill="#64748B" letterSpacing="0.6">
            {k.label}
          </text>
          <text x={k.x + 92} y={KPI_Y + 82} fontSize="30" fontWeight="800" fill="#0F172A">
            {k.value}
          </text>
          <path d={`M${k.x + 33} ${KPI_Y + 107} l5 -8 l5 8 z`} fill="#16A34A" />
          <text x={k.x + 46} y={KPI_Y + 108} fontSize="14" fontWeight="700" fill="#16A34A">{k.delta}</text>
        </g>
      ))}

      {/* Chart card */}
      <rect x="50" y="310" width="900" height="210" rx="16" fill="white" stroke="#ECEFF7" />

      {/* Legend */}
      <line x1="80" y1="346" x2="115" y2="346" stroke="#3B4CD8" strokeWidth="3" strokeLinecap="round" />
      <text x="124" y="351" fontSize="14" fill="#0F172A">Your Price</text>
      <line x1="242" y1="346" x2="277" y2="346" stroke="#93C5FD" strokeWidth="2.4" strokeDasharray="5 4" strokeLinecap="round" />
      <text x="286" y="351" fontSize="14" fill="#0F172A">Competitor Price</text>

      {/* Gridlines under each date */}
      {DATES.map((_, i) => {
        const x = CHART_X0 + (i / (DATES.length - 1)) * (CHART_X1 - CHART_X0);
        return <line key={i} x1={x} y1={CHART_TOP - 10} x2={x} y2={CHART_BOTTOM + 10} stroke="#F1F5F9" strokeWidth="1" />;
      })}

      {/* Competitor line — animated dashes */}
      <polyline fill="none" stroke="#93C5FD" strokeWidth="2.4" strokeDasharray="6 5" points={compPts}>
        <animate attributeName="stroke-dashoffset" values="0;-22" dur="2.4s" repeatCount="indefinite" />
      </polyline>

      {/* Your price line */}
      <polyline fill="none" stroke="#3B4CD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={yourPts} />

      {/* Moving dot along your price line */}
      <circle r="3.5" fill="#3B4CD8" opacity="0.9">
        <animateMotion dur="4s" repeatCount="indefinite"
          path={YOUR_PRICE.map((v, i) => {
            const n = YOUR_PRICE.length;
            const x = CHART_X0 + (i / (n - 1)) * (CHART_X1 - CHART_X0);
            const y = CHART_BOTTOM - v * (CHART_BOTTOM - CHART_TOP);
            return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
          }).join(' ')} />
      </circle>

      {/* Highlighted point — pulse ring */}
      <circle cx={hx} cy={hy} r="9" fill="#C7D2FE" opacity="0.6">
        <animate attributeName="r" values="9;13;9" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx={hx} cy={hy} r="5" fill="#3B4CD8" stroke="white" strokeWidth="1.5" />

      {/* Floor line */}
      <line x1={CHART_X0 - 10} y1={FLOOR_Y} x2={CHART_X1 + 10} y2={FLOOR_Y} stroke="#F59E0B" strokeWidth="1.6" strokeDasharray="6 5" />
      <text x={CHART_X1 + 10} y={FLOOR_Y - 8} textAnchor="end" fontSize="13" fontWeight="700" fill="#C2410C">Floor $18.50</text>

      {/* X axis labels */}
      {DATES.map((d, i) => {
        const x = CHART_X0 + (i / (DATES.length - 1)) * (CHART_X1 - CHART_X0);
        return (
          <text key={d} x={x} y={FLOOR_Y + 40} textAnchor="middle" fontSize="14" fill="#94A3B8">
            {d}
          </text>
        );
      })}
    </svg>
  );
};

export const AnalyticsDashboardSVG = (props: SVGProps<SVGSVGElement>) => {
  return (<div className="rounded-2xl border border-slate-200 shadow-sm p-5">
    <div className="grid grid-cols-3 gap-3 mb-4">
      {[
        { l: "Revenue", v: "$284k", d: "+32%" },
        { l: "Orders", v: "5,912", d: "+14%" },
        { l: "AOV", v: "$48.10", d: "+6%" },
      ].map((k) => (
        <div key={k.l} className="rounded-lg bg-slate-50 border border-slate-100 p-3">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{k.l}</div>
          <div className="text-lg font-bold text-slate-900">{k.v}</div>
          <div className="text-[11px] font-semibold text-emerald-600">▲ {k.d}</div>
        </div>
      ))}
    </div>
    <svg viewBox="0 0 400 120" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" {...props}>
      <polyline fill="none" stroke="#2563eb" strokeWidth="2.4"
        points="0,90 40,80 80,84 120,60 160,68 200,50 240,58 280,40 320,44 360,28 400,32" />
      <circle r="3.5" fill="#2563eb" opacity="0.9">
        <animateMotion dur="3s" repeatCount="indefinite"
          path="M0 90 L40 80 L80 84 L120 60 L160 68 L200 50 L240 58 L280 40 L320 44 L360 28 L400 32" />
      </circle>
      <polyline fill="none" stroke="#60a5fa" strokeWidth="1.6" strokeDasharray="4 3"
        points="0,100 40,96 80,98 120,86 160,92 200,80 240,86 280,72 320,78 360,64 400,70">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="2s" repeatCount="indefinite" />
      </polyline>
    </svg>
  </div>)
}


export const OnboardingDiagram = (props: SVGProps<SVGSVGElement>) => {

  const STEP_ICONS: Record<string, JSX.Element> = {
    connect: (
      <g>
        <rect x="-58" y="-46" width="116" height="92" rx="10" fill="url(#ob-window)" />
        <rect x="-58" y="-46" width="116" height="20" rx="10" fill="#C7D2FE" />
        <circle cx="-46" cy="-36" r="2.6" fill="white" />
        <circle cx="-38" cy="-36" r="2.6" fill="white" />
        <circle cx="-30" cy="-36" r="2.6" fill="white" />
        <g transform="translate(-22,-14)">
          <path
            d="M0 20a14 14 0 0114-14h4a10 10 0 010 20h-2M28 20a14 14 0 00-14-14h-4a10 10 0 000 20h2"
            transform="scale(0.9)"
            fill="none"
            stroke="white"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <circle cx="14" cy="18" r="4.5" fill="none" stroke="white" strokeWidth="3" />
        </g>
      </g>
    ),
    import: (
      <g>
        <path
          d="M-34 -46h48l20 20v72a4 4 0 01-4 4h-64a4 4 0 01-4-4v-88a4 4 0 014-4z"
          fill="url(#ob-doc)"
        />
        <path d="M14 -46l20 20h-16a4 4 0 01-4-4z" fill="#C7D2FE" />
        <rect x="-24" y="-18" width="36" height="4" rx="2" fill="#93A4F5" />
        <rect x="-24" y="-8" width="50" height="4" rx="2" fill="#C7D2FE" />
        <circle cx="0" cy="26" r="20" fill="#6D5DF2" />
        <path
          d="M0 34v-16M-7 25l7-7 7 7"
          fill="none"
          stroke="white"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ),
    set: (
      <g>
        <rect x="-58" y="-46" width="116" height="92" rx="10" fill="url(#ob-window)" />
        <rect x="-58" y="-46" width="116" height="20" rx="10" fill="#C7D2FE" />
        <circle cx="-46" cy="-36" r="2.6" fill="white" />
        <circle cx="-38" cy="-36" r="2.6" fill="white" />
        <circle cx="-30" cy="-36" r="2.6" fill="white" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(-42,${-10 + i * 16})`}>
            <circle cx="0" cy="0" r="3" fill="#7C86F0" />
            <rect x="10" y="-2.5" width="52" height="5" rx="2.5" fill="#C7D2FE" />
          </g>
        ))}
        <circle cx="42" cy="30" r="18" fill="#5847EB" />
        <g stroke="white" strokeWidth="2.6" fill="none" strokeLinecap="round">
          <circle cx="42" cy="30" r="7" />
          <path d="M42 19v-4M42 45v-4M31 30h-4M57 30h-4M34 22l-3-3M53 38l3 3M50 22l3-3M34 38l-3 3" />
        </g>
      </g>
    ),
    go: (
      <g>
        <circle cx="0" cy="0" r="58" fill="#EEF1FE" />
        <path d="M8 40l8 6M-30 -10l-8 -4" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" />
        <g transform="rotate(35)">
          <path
            d="M0 -46c14 4 22 16 22 32 0 8-3 16-8 22l-14-6-14 6c-5-6-8-14-8-22 0-16 8-28 22-32z"
            fill="url(#ob-rocket)"
          />
          <circle cx="0" cy="-24" r="7" fill="#EEF1FE" stroke="#3730A3" strokeWidth="1.5" />
          <path d="M-14 8l-10 18 16-8z" fill="#F59E0B" />
          <path d="M14 8l10 18-16-8z" fill="#F59E0B" />
          <path d="M-6 30q6 14 6 22q6-8 6-22z" fill="#FBBF24" />
        </g>
        <path d="M-46 -30l4 4M46 -34l-4 4M-40 40l4-4M42 36l-4-4" stroke="#FBBF24" strokeWidth="2.4" strokeLinecap="round" />
      </g>
    ),
  };

  const STEPS = [
    { title: "Connect", subtitle: "SP-API", icon: "connect", badge: "#3730A3", bar: "#3B4CD8" },
    { title: "Import", subtitle: "catalog", icon: "import", badge: "#3730A3", bar: "#3B4CD8" },
    { title: "Set", subtitle: "rules", icon: "set", badge: "#3730A3", bar: "#3B4CD8" },
    { title: "Go", subtitle: "live", icon: "go", badge: "#F59E0B", bar: "#F59E0B" },
  ];

  const CARD_W = 190;
  const GAP = 60;
  const START_X = 90;
  const CARD_TOP = 145;
  const CARD_H = 310;
  const ICON_CY = 245;

  return (
    <svg viewBox="0 0 1000 560" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="ob-window" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C86F0" />
          <stop offset="100%" stopColor="#5847EB" />
        </linearGradient>
        <linearGradient id="ob-doc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5F6FE" />
          <stop offset="100%" stopColor="#E4E7FB" />
        </linearGradient>
        <linearGradient id="ob-rocket" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C86F0" />
          <stop offset="100%" stopColor="#3730A3" />
        </linearGradient>
        <pattern id="ob-dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="1.6" fill="#C7D2FE" />
        </pattern>
      </defs>

      {/* Background */}
      {/* <rect x="20" y="20" width="960" height="520" rx="28" fill="#F6F8FE" /> */}
      <rect x="60" y="55" width="90" height="60" fill="url(#ob-dots)" opacity="0.8" />
      <circle cx="300" cy="90" r="5" fill="#93A4F5" opacity="0.7" />
      <circle cx="790" cy="95" r="4" fill="#C7D2FE" />
      <circle cx="890" cy="100" r="10" fill="none" stroke="#C7D2FE" strokeWidth="1.5" opacity="0.6" />
      <path d="M170 100 Q 260 60 400 105" stroke="#DDE3FB" strokeWidth="1.5" fill="none" strokeDasharray="4 5" />
      <path d="M60 460 Q 300 410 540 465 T 960 450" stroke="#E3E7FB" strokeWidth="2" fill="none" />
      <circle cx="180" cy="470" r="4" fill="#C7D2FE" />
      <circle cx="470" cy="475" r="4" fill="#C7D2FE" />
      <circle cx="690" cy="465" r="4" fill="#C7D2FE" />

      {STEPS.map((s, i) => {
        const x = START_X + i * (CARD_W + GAP);
        const cx = x + CARD_W / 2;
        return (
          <g key={s.title}>
            <rect x={x} y={CARD_TOP} width={CARD_W} height={CARD_H} rx="18" fill="white" stroke="#ECEFF9" />
            <rect x={x + 8} y={CARD_TOP - 2} width={CARD_W - 16} height="5" rx="2.5" fill={s.bar} />

            <circle cx={cx} cy={CARD_TOP - 20} r="30" fill={s.badge} />
            <text x={cx} y={CARD_TOP - 12} textAnchor="middle" fontSize="20" fontWeight="800" fill="white">
              {i + 1}
            </text>

            <g transform={`translate(${cx},${ICON_CY})`}>{STEP_ICONS[s.icon]}</g>

            <text x={cx} y={CARD_TOP + 205} textAnchor="middle" fontSize="24" fontWeight="800" fill="#0F172A">
              {s.title}
            </text>
            <text x={cx} y={CARD_TOP + 235} textAnchor="middle" fontSize="16" fill="#64748B">
              {s.subtitle}
            </text>
            <rect x={cx - 18} y={CARD_TOP + 253} width="36" height="3" rx="1.5" fill={i === STEPS.length - 1 ? "#F59E0B" : "#93A4F5"} />

            {i < STEPS.length - 1 && (
              <g>
                <line
                  x1={x + CARD_W}
                  y1={ICON_CY}
                  x2={x + CARD_W + GAP / 2 - 16}
                  y2={ICON_CY}
                  stroke="#93A4F5"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                />
                <line
                  x1={x + CARD_W + GAP / 2 + 16}
                  y1={ICON_CY}
                  x2={x + CARD_W + GAP}
                  y2={ICON_CY}
                  stroke="#93A4F5"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                />
                <circle cx={x + CARD_W + GAP / 2} cy={ICON_CY} r="17" fill="white" stroke="#93A4F5" strokeWidth="1.6" />
                <path
                  d={`M${x + CARD_W + GAP / 2 - 5} ${ICON_CY - 5} l6 5 -6 5`}
                  fill="none"
                  stroke="#3B4CD8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  )
};
