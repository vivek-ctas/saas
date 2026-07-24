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
      Unified across Amazon · Fnac · Bol · Walmart · Shopify
    </text>
  </svg >
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
/* ChannelSyncFlow - distinct sync flow for Marketplace page          */
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
      Inventory · pricing · orders · returns -
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






