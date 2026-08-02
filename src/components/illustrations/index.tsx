import { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* Shared diagram defs                                                 */
/* ------------------------------------------------------------------ */
const DiagramDefs = () => (
  <defs>
    <linearGradient id="g-blue" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#3C9AC4" />
      <stop offset="100%" stopColor="#13355A" />
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
      <path d="M0,0 L10,5 L0,10 z" fill="#13355A" />
    </marker>
    <marker id="arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#13355A" />
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
        c: "#BDD9EE",
        icon: "S1",
      },
      {
        x: 170,
        n: "2",
        t: "Route & assign",
        c: "#6BC1E0",
        icon: "S2",
      },
      {
        x: 315,
        n: "3",
        t: "Fulfil & ship",
        c: "#3C9AC4",
        icon: "S3",
      },
      {
        x: 460,
        n: "4",
        t: "Track & close",
        c: "#13355A",
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
      One platform for Amazon & Shopify
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
    <div className="group inline-flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full bg-white border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all duration-200">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent text-primary flex items-center justify-center text-[11px] font-bold tracking-tight">
        {initials}
      </div>
      <span className="text-sm font-medium text-slate-700 whitespace-nowrap group-hover:text-slate-900">{name}</span>
    </div>
  );
};


