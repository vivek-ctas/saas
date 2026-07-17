import { ReactNode, SVGProps } from "react";

/**
 * Unified illustration design system — sellersnap / sellerbrite inspired.
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

/** Icon glyphs available on IllIconBadge. Extend this union as new flows need new icons. */
export type IconKind = "warehouse" | "box" | "bag" | "cart" | "tag" | "dot";

/** Reusable defs — drop once at the top of every illustration. */
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
        {/* Violet → navy diagonal used for "sync hub" style centerpieces */}
        <linearGradient id={`${id}-hub`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#5b21b6" />
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
export const IllHeader = ({ x = 10, y = 10, label }: { x?: number; y?: number; label: string }) => (
    <g>
        <rect x={x} y={y} width={(label.length * 8) + 28} height="24" rx="12" fill={ILL.navy} />
        <circle cx={x + 14} cy={y + 12} r="3.5" fill="#60a5fa" />
        <text x={x + 24} y={y + 16} fontFamily={ILL.font} fontSize="10.5" fontWeight="800" fill="white" letterSpacing="1.2">
            {label.toUpperCase()}
        </text>
    </g>
);

/** Pill chip — white with hairline border, navy text. */
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

/** KPI tile — label + big number + delta. */
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

/**
 * Colored icon badge used inside flow-diagram cards — a soft tinted circle
 * (accent color at low opacity) with a small line-art glyph on top. Add new
 * `kind`s here as new flows need them; unknown/omitted kind falls back to
 * a plain dot so existing callers of IllCard-based diagrams keep working.
 */
export const IllIconBadge = ({
    x, y, color, kind = "dot", size = 40,
}: { x: number; y: number; color: string; kind?: IconKind; size?: number }) => {
    const r = size / 2;
    return (
        <g>
            <circle cx={x} cy={y} r={r} fill={color} fillOpacity="0.14" />
            <g stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {kind === "warehouse" && (
                    <>
                        <path d={`M${x - 9} ${y + 7} V${y - 2} L${x} ${y - 9} L${x + 9} ${y - 2} V${y + 7} Z`} />
                        <path d={`M${x - 3} ${y + 7} V${y + 1} H${x + 3} V${y + 7}`} />
                    </>
                )}
                {kind === "box" && (
                    <>
                        <path d={`M${x - 9} ${y - 3} L${x} ${y - 8} L${x + 9} ${y - 3} V${y + 6} L${x} ${y + 11} L${x - 9} ${y + 6} Z`} />
                        <path d={`M${x - 9} ${y - 3} L${x} ${y + 2} L${x + 9} ${y - 3} M${x} ${y + 2} V${y + 11}`} />
                    </>
                )}
                {kind === "bag" && (
                    <>
                        <path d={`M${x - 8} ${y - 5} a8 8 0 0 1 16 0`} />
                        <rect x={x - 10} y={y - 5} width="20" height="16" rx="2" />
                    </>
                )}
                {kind === "cart" && (
                    <>
                        <path d={`M${x - 11} ${y - 8} h4 l3 14 h11`} />
                        <path d={`M${x - 4} ${y - 3} h17 l-2 7 h-13 z`} />
                        <circle cx={x + 3} cy={y + 9} r="1.6" fill={color} stroke="none" />
                        <circle cx={x + 11} cy={y + 9} r="1.6" fill={color} stroke="none" />
                    </>
                )}
                {kind === "tag" && (
                    <>
                        <path d={`M${x - 8} ${y - 8} h9 l8 8 -10 10 -9 -8 z`} />
                        <circle cx={x - 4.2} cy={y - 4.2} r="1.4" fill={color} stroke="none" />
                    </>
                )}
                {kind === "dot" && <circle cx={x} cy={y} r="4" fill={color} stroke="none" />}
            </g>
        </g>
    );
};

/**
 * Connector line between a card and a hub. Draws a dashed line in the given
 * `color`, optional small dots at either endpoint, and an optional inline
 * arrowhead (drawn as a polygon so any accent color works — no per-color
 * marker defs needed). `id`/`sky` are kept for backward compatibility with
 * existing call sites that don't pass `color`.
 */
export const IllArrow = ({
    x1, y1, x2, y2,
    color, sky = false, dashed = true, arrow = false,
    dotStart = false, dotEnd = false, label,
}: {
    x1: number; y1: number; x2: number; y2: number;
    id?: string; color?: string; sky?: boolean; dashed?: boolean; arrow?: boolean;
    dotStart?: boolean; dotEnd?: boolean; label?: string;
}) => {
    const stroke = color ?? (sky ? ILL.sky : ILL.blue);
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    const headLen = 9;
    const headW = 6.5;
    const baseX = x2 - ux * headLen;
    const baseY = y2 - uy * headLen;
    const px = -uy;
    const py = ux;
    const lineEndX = arrow ? baseX : x2;
    const lineEndY = arrow ? baseY : y2;

    return (
        <g>
            <line
                x1={x1} y1={y1} x2={lineEndX} y2={lineEndY}
                stroke={stroke} strokeWidth="1.6"
                strokeDasharray={dashed ? "5 4" : undefined}
            />
            {arrow && (
                <polygon
                    points={`${x2},${y2} ${baseX + (px * headW) / 2},${baseY + (py * headW) / 2} ${baseX - (px * headW) / 2},${baseY - (py * headW) / 2}`}
                    fill={stroke}
                />
            )}
            {dotStart && <circle cx={x1} cy={y1} r="4" fill={stroke} />}
            {dotEnd && <circle cx={x2} cy={y2} r="4" fill={stroke} />}
            {label && (
                <text x={(x1 + x2) / 2} y={Math.min(y1, y2) - 6} textAnchor="middle"
                    fontFamily={ILL.font} fontSize="9.5" fontWeight="700" fill={ILL.muted}>{label}</text>
            )}
        </g>
    );
};

export type IllSvg = SVGProps<SVGSVGElement>;