import { ReactNode, SVGProps } from "react";

/**
 * Unified illustration design system - sellersnap / sellerbrite inspired.
 * Strict navy + blue + light-blue palette. Every diagram uses the same
 * card frame, header bar, chips, stroke weights and typography so the whole
 * site reads as one coherent dashboard language.
 *
 *   navy       #0b1e3f   (primary text on light)
 *   ink        #0f172a   (titles)
 *   blue       #2563eb   (accent / strokes / active)
 *   sky        #60a5fa   (secondary stroke)
 *   tint       #dbeafe   (chip bg / faint fills)
 *   wash       #eff6ff   (card background wash)
 *   stroke     #cbd5e1   (card outline)
 *   muted      #64748b   (sub-text)
 */
export const ILL = {
  navy: "#0b1e3f",
  ink: "#0f172a",
  blue: "#2563eb",
  blueDeep: "#1d4ed8",
  sky: "#60a5fa",
  tint: "#dbeafe",
  wash: "#eff6ff",
  stroke: "#cbd5e1",
  softStroke: "#e2e8f0",
  muted: "#64748b",
  font: "Inter, system-ui, -apple-system, Segoe UI, sans-serif",
};

/** Reusable defs - drop once at the top of every illustration. */
export const IllDefs = ({ id = "ill" }: { id?: string }) => (
  <defs>
    <linearGradient id={`${id}-wash`} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#f8fafc" />
      <stop offset="100%" stopColor="#eff6ff" />
    </linearGradient>
    <linearGradient id={`${id}-blue`} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stopColor="#2563eb" />
      <stop offset="100%" stopColor="#1d4ed8" />
    </linearGradient>
    <linearGradient id={`${id}-navy`} x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#1e3a8a" />
      <stop offset="100%" stopColor="#0b1e3f" />
    </linearGradient>
    <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" stroke="#dbeafe" strokeWidth="0.6" fill="none" />
    </pattern>
    <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#2563eb" />
    </marker>
    <marker id={`${id}-arrow-sky`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#60a5fa" />
    </marker>
    <filter id={`${id}-shadow`} x="-10%" y="-10%" width="120%" height="130%">
      <feGaussianBlur stdDeviation="6" />
      <feOffset dy="3" />
      <feComponentTransfer><feFuncA type="linear" slope="0.12" /></feComponentTransfer>
      <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
  </defs>
);

/** Outer rounded canvas + faint blue grid. */
export const IllCanvas = ({
  id = "ill", w, h, children,
}: { id?: string; w: number; h: number; children: ReactNode }) => (
  <>
    <rect x="0" y="0" width={w} height={h} rx="22" fill={`url(#${id}-wash)`} />
    <rect x="0" y="0" width={w} height={h} rx="22" fill={`url(#${id}-grid)`} />
    <rect x="0.5" y="0.5" width={w - 1} height={h - 1} rx="22" fill="none" stroke={ILL.softStroke} />
    {children}
  </>
);

/** White inner card with hairline border. */
export const IllCard = ({
  x, y, w, h, accent = ILL.blue, id = "ill", children,
}: {
  x: number; y: number; w: number; h: number; accent?: string; id?: string; children?: ReactNode;
}) => (
  <g filter={`url(#${id}-shadow)`}>
    <rect x={x} y={y} width={w} height={h} rx="14" fill="white" stroke={ILL.softStroke} />
    <rect x={x} y={y} width={w} height="3" rx="1.5" fill={accent} />
    {children}
  </g>
);

/** Navy header chip used at top-left of every illustration. */
export const IllHeader = ({ x = 28, y = 26, label }: { x?: number; y?: number; label: string }) => (
  <g>
    <rect x={x} y={y} width={(label.length * 6.6) + 28} height="24" rx="12" fill={ILL.navy} />
    <circle cx={x + 14} cy={y + 12} r="3.5" fill="#60a5fa" />
    <text x={x + 24} y={y + 16} fontFamily={ILL.font} fontSize="10.5" fontWeight="800" fill="white" letterSpacing="1.2">
      {label.toUpperCase()}
    </text>
  </g>
);

/** Pill chip - white with hairline border, navy text. */
export const IllChip = ({
  x, y, w = 120, h = 28, label, tone = "light",
}: { x: number; y: number; w?: number; h?: number; label: string; tone?: "light" | "blue" | "navy" }) => {
  const styles = {
    light: { fill: "white", stroke: ILL.softStroke, dot: ILL.blue, text: ILL.ink },
    blue: { fill: ILL.tint, stroke: "#bfdbfe", dot: ILL.blueDeep, text: ILL.blueDeep },
    navy: { fill: ILL.navy, stroke: ILL.navy, dot: "#60a5fa", text: "white" },
  }[tone];
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={styles.fill} stroke={styles.stroke} />
      <circle cx={x + 14} cy={y + h / 2} r="3.5" fill={styles.dot} />
      <text x={x + 24} y={y + h / 2 + 3.5} fontFamily={ILL.font} fontSize="10.5" fontWeight="700" fill={styles.text}>
        {label}
      </text>
    </g>
  );
};

/** KPI tile - label + big number + delta. */
export const IllKPI = ({
  x, y, w = 150, h = 78, label, value, delta,
}: { x: number; y: number; w?: number; h?: number; label: string; value: string; delta?: string }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="10" fill="white" stroke={ILL.softStroke} />
    <text x={x + 14} y={y + 20} fontFamily={ILL.font} fontSize="9" fontWeight="700" fill={ILL.muted} letterSpacing="1">{label.toUpperCase()}</text>
    <text x={x + 14} y={y + 46} fontFamily={ILL.font} fontSize="20" fontWeight="800" fill={ILL.ink}>{value}</text>
    {delta && (
      <text x={x + 14} y={y + 66} fontFamily={ILL.font} fontSize="10" fontWeight="700" fill="#059669">▲ {delta}</text>
    )}
  </g>
);

/** Straight dashed flow arrow with arrowhead. */
export const IllArrow = ({
  x1, y1, x2, y2, id = "ill", sky = false, dashed = true, label,
}: { x1: number; y1: number; x2: number; y2: number; id?: string; sky?: boolean; dashed?: boolean; label?: string }) => (
  <g>
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={sky ? ILL.sky : ILL.blue}
      strokeWidth="1.6"
      strokeDasharray={dashed ? "5 4" : undefined}
      markerEnd={`url(#${id}-${sky ? "arrow-sky" : "arrow"})`}
    />
    {label && (
      <text x={(x1 + x2) / 2} y={Math.min(y1, y2) - 6} textAnchor="middle"
        fontFamily={ILL.font} fontSize="9.5" fontWeight="700" fill={ILL.muted}>{label}</text>
    )}
  </g>
);

export type IllSvg = SVGProps<SVGSVGElement>;
