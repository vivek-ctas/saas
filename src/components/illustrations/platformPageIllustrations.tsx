import { ReactNode, SVGProps } from "react";
import { Boxes, ShoppingCart, DollarSign, BarChart3, Wand2, RefreshCw, LayoutGrid, ShieldCheck, Image as ImageIcon, Sparkles } from "lucide-react";

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

/**
 * Colored icon badge used inside flow-diagram cards - a soft tinted circle
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


/* ------------------------------------------------------------------ */
/* platformPage -  DashListVisual                                     */
/* ------------------------------------------------------------------ */
export const DashListVisual = ({
    id,
    title,
    chip,
    kpi,
    headerIcon,
    columns,
    rows,
}: {
    id: string;
    title: string;
    chip?: { label: string; tone?: "blue" | "navy" };
    /** Right-aligned inline stat, e.g. { label: "Net available", value: "1,668" } */
    kpi?: { label: string; value: string };
    /** Small glyph drawn on top of the IllHeader pill's dot */
    headerIcon?: "warehouse" | "box" | "bag" | "cart" | "tag";
    columns: string[];
    rows: {
        cells: (string | { dot: string; text: string; tag?: string })[];
        badge?: { text: string; tone: "blue" | "amber" | "emerald" | "muted" };
    }[];
}) => {
    const ColIcon = ({
        kind, cx, cy,
    }: { kind: "pin" | "box" | "bookmark" | "check" | "shield"; cx: number; cy: number }) => (
        <g stroke={ILL.muted} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {kind === "pin" && (
                <>
                    <path d={`M${cx} ${cy - 4.5} c-1.9 0 -3.4 1.5 -3.4 3.3 c0 2.4 3.4 5.6 3.4 5.6 s3.4 -3.2 3.4 -5.6 c0 -1.8 -1.5 -3.3 -3.4 -3.3 z`} />
                    <circle cx={cx} cy={cy - 1.2} r="1" fill={ILL.muted} stroke="none" />
                </>
            )}
            {kind === "box" && (
                <>
                    <path d={`M${cx - 4} ${cy - 1.5} L${cx} ${cy - 3.6} L${cx + 4} ${cy - 1.5} V${cy + 2.8} L${cx} ${cy + 4.9} L${cx - 4} ${cy + 2.8} Z`} />
                    <path d={`M${cx - 4} ${cy - 1.5} L${cx} ${cy + 0.9} L${cx + 4} ${cy - 1.5} M${cx} ${cy + 0.9} V${cy + 4.9}`} />
                </>
            )}
            {kind === "bookmark" && (
                <path d={`M${cx - 3} ${cy - 4.5} H${cx + 3} V${cy + 4.5} L${cx} ${cy + 2} L${cx - 3} ${cy + 4.5} Z`} />
            )}
            {kind === "check" && (
                <>
                    <circle cx={cx} cy={cy} r="4.6" />
                    <path d={`M${cx - 2.2} ${cy} L${cx - 0.5} ${cy + 1.8} L${cx + 2.4} ${cy - 2}`} />
                </>
            )}
            {kind === "shield" && (
                <path d={`M${cx} ${cy - 4.6} L${cx + 3.6} ${cy - 3} V${cy + 0.6} C${cx + 3.6} ${cy + 3.2} ${cx} ${cy + 4.8} ${cx} ${cy + 4.8} C${cx} ${cy + 4.8} ${cx - 3.6} ${cy + 3.2} ${cx - 3.6} ${cy + 0.6} V${cy - 3} Z`} />
            )}
        </g>
    );

    // Auto-map a column label to a header icon; unmatched labels get no icon
    // (keeps existing DashListVisual call sites, like orders.tsx, unaffected).
    const iconForColumn = (name: string): "pin" | "box" | "bookmark" | "check" | "shield" | null => {
        const n = name.toLowerCase();
        if (n.includes("location")) return "pin";
        if (n.includes("hand")) return "box";
        if (n.includes("reserved")) return "bookmark";
        if (n.includes("available")) return "check";
        if (n.includes("status")) return "shield";
        return null;
    };

    // Small status glyph drawn inside emerald / amber badges.
    const StatusIcon = ({ kind, cx, cy }: { kind: "check" | "warn"; cx: number; cy: number }) =>
        kind === "check" ? (
            <g>
                <circle cx={cx} cy={cy} r="6" fill="#10b981" />
                <path d={`M${cx - 2.6} ${cy} L${cx - 0.6} ${cy + 2} L${cx + 2.8} ${cy - 2.4}`} stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        ) : (
            <g>
                <path d={`M${cx} ${cy - 6} L${cx + 6} ${cy + 5} H${cx - 6} Z`} fill="#f59e0b" />
                <rect x={cx - 0.6} y={cy - 2} width="1.2" height="4" fill="white" />
                <rect x={cx - 0.6} y={cy + 3} width="1.2" height="1.2" fill="white" />
            </g>
        );

    const W = 600, H = 330;
    const usable = W - 80;

    // Weighted column widths: first column (location) gets extra room,
    // last column (status) gets a touch more so its badge doesn't crowd the edge.
    const weights = columns.length === 5 ? [1.7, 1, 1, 1, 1.1] : columns.map(() => 1);
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let acc = 0;
    const colX = weights.map((wt) => {
        const x = 40 + acc;
        acc += (wt / totalWeight) * usable;
        return x;
    });

    const headerX = 28, headerY = 26;
    const headerDotCx = headerX + 14, headerDotCy = headerY + 12;

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <IllDefs id={id} />
            <IllCard id={id} x={24} y={50} w={W - 48} h={H - 88} accent={ILL.blue}>
                <text x={40} y={80} fontFamily={ILL.font} fontSize="15" fontWeight="800" fill={ILL.ink}>{title}</text>

                {chip && (
                    <g>
                        <rect x={W - 148} y={64} width={108} height={22} rx={11} fill={chip.tone === "navy" ? ILL.navy : ILL.tint} />
                        <text x={W - 94} y={79} textAnchor="middle" fontFamily={ILL.font} fontSize="10" fontWeight="800" fill={chip.tone === "navy" ? "white" : ILL.blueDeep}>
                            {chip.label}
                        </text>
                    </g>
                )}

                {kpi && (() => {
                    const kw = (kpi.label.length + kpi.value.length + 3) * 6.2 + 40;
                    const kx = W - 32 - kw;
                    return (
                        <g>
                            <rect x={kx} y={78} width={kw} height={28} rx={14} fill={ILL.tint} stroke="#bfdbfe" />
                            <text x={kx + 16} y={97} fontFamily={ILL.font} fontSize="11.5" fontWeight="700" fill={ILL.blueDeep}>
                                {kpi.label}: <tspan fontWeight="800" fill={ILL.blue}>{kpi.value}</tspan>
                            </text>
                        </g>
                    );
                })()}

                {columns.map((c, i) => {
                    const icon = iconForColumn(c);
                    const textX = icon ? colX[i] + 16 : colX[i];
                    return (
                        <g key={c}>
                            {icon && <ColIcon kind={icon} cx={colX[i] + 5} cy={107} />}
                            <text x={textX} y={110} fontFamily={ILL.font} fontSize="9" fontWeight="800" fill={ILL.muted} letterSpacing="1">
                                {c.toUpperCase()}
                            </text>
                        </g>
                    );
                })}
                <line x1={32} y1={122} x2={W - 32} y2={122} stroke={ILL.softStroke} strokeWidth="1" strokeDasharray="2 6" strokeLinecap="round">
                    <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.6s" repeatCount="indefinite" />
                </line>
                <circle r="2" fill={ILL.blue} opacity={0.55}>
                    <animateMotion dur="4s" repeatCount="indefinite"
                        path={`M32 122 L${W - 32} 122`} />
                </circle>

                {rows.map((r, ri) => {
                    const y = 150 + ri * 42;
                    const badgeTone = r.badge?.tone === "amber"
                        ? { bg: "#fef3c7", fg: "#92400e" }
                        : r.badge?.tone === "emerald"
                            ? { bg: "#d1fae5", fg: "#065f46" }
                            : r.badge?.tone === "muted"
                                ? { bg: "#f1f5f9", fg: "#475569" }
                                : { bg: ILL.tint, fg: ILL.blueDeep };
                    const badgeIcon = r.badge?.tone === "emerald" ? "check" : r.badge?.tone === "amber" ? "warn" : null;
                    const badgeW = badgeIcon ? 84 : 78;

                    return (
                        <g key={ri}>
                            {ri > 0 && <line x1={32} y1={y - 21} x2={W - 32} y2={y - 21} stroke="#f1f5f9" />}
                            {r.cells.map((cell, ci) => (
                                typeof cell === "string" ? (
                                    <text key={ci} x={colX[ci]} y={y} fontFamily={ILL.font} fontSize="11" fontWeight={ci === 0 ? "700" : "600"} fill={ci === 0 ? ILL.ink : ILL.muted}>
                                        {cell}
                                    </text>
                                ) : (
                                    <g key={ci}>
                                        <circle cx={colX[ci] + 5} cy={y - 4} r="4" fill={cell.dot} />
                                        <text x={colX[ci] + 16} y={y} fontFamily={ILL.font} fontSize="11" fontWeight="700" fill={ILL.ink}>{cell.text}</text>
                                        {cell.tag && (() => {
                                            const tagX = colX[ci] + 20 + cell.text.length * 6.4;
                                            const tagW = cell.tag.length * 5.8 + 18;
                                            return (
                                                <g>
                                                    <rect x={tagX} y={y - 14} width={tagW} height={16} rx={8} fill={ILL.tint} stroke="#bfdbfe" />
                                                    <text x={tagX + tagW / 2} y={y - 3} textAnchor="middle" fontFamily={ILL.font} fontSize="8.5" fontWeight="700" fill={ILL.blueDeep}>
                                                        {cell.tag}
                                                    </text>
                                                </g>
                                            );
                                        })()}
                                    </g>
                                )
                            ))}
                            {r.badge && (
                                <g>
                                    <rect x={colX[colX.length - 1]} y={y - 15} width={badgeW} height={22} rx={11} fill={badgeTone.bg} />
                                    {badgeIcon && <StatusIcon kind={badgeIcon} cx={colX[colX.length - 1] + 14} cy={y - 4} />}
                                    <text x={colX[colX.length - 1] + (badgeIcon ? 26 : badgeW / 2)} y={y - 1} textAnchor={badgeIcon ? "start" : "middle"} fontFamily={ILL.font} fontSize="9.5" fontWeight="800" fill={badgeTone.fg}>
                                        {r.badge.text}
                                    </text>
                                </g>
                            )}
                        </g>
                    );
                })}
            </IllCard>
            <IllHeader label={title.split("·")[0].trim()} />
            {headerIcon && (
                <g stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    {headerIcon === "warehouse" && (
                        <>
                            <path d={`M${headerDotCx - 5} ${headerDotCy + 3} V${headerDotCy - 2.5} L${headerDotCx} ${headerDotCy - 6.5} L${headerDotCx + 5} ${headerDotCy - 2.5} V${headerDotCy + 3} Z`} />
                            <path d={`M${headerDotCx - 2} ${headerDotCy + 3} V${headerDotCy} H${headerDotCx + 2} V${headerDotCy + 3}`} />
                        </>
                    )}
                    {headerIcon === "box" && (
                        <path d={`M${headerDotCx - 5} ${headerDotCy - 2} L${headerDotCx} ${headerDotCy - 5} L${headerDotCx + 5} ${headerDotCy - 2} V${headerDotCy + 3} L${headerDotCx} ${headerDotCy + 6} L${headerDotCx - 5} ${headerDotCy + 3} Z`} />
                    )}
                    {(headerIcon === "bag" || headerIcon === "cart" || headerIcon === "tag") && (
                        <circle cx={headerDotCx} cy={headerDotCy} r="4.5" />
                    )}
                </g>
            )}
        </svg>
    );
};

/* ------------------------------------------------------------------ */
/* platformPage -  FlowVisual                                     */
/* ------------------------------------------------------------------ */

export type FlowNode = {
    label: string;
    sub?: string;
    /** Accent colour used for the card top-bar, line stroke and flowing dot. */
    dot?: string;
    /** SVG logo path rendered as an <image> badge - overrides the default icon badge. */
    logo?: string;
    /** Icon shown in the node's badge - defaults to a plain dot if omitted. Ignored when `logo` is set. */
    icon?: IconKind;
};

/**
 * Multi-node sync diagram: N source nodes → a central hub → N destination
 * nodes. Reused across every "flow" hero/deep-dive visual (inventory sync,
 * order routing, pricing, etc.) - only the node lists, labels and colors
 * change per page, the layout math and visual language stay identical.
 */
export const FlowVisual = ({
    id,
    title,
    hub,
    leftNodes,
    rightNodes,
    hubLatency,
}: {
    id: string;
    title: string;
    hub: string;
    hubLatency?: string;
    leftNodes: FlowNode[];
    rightNodes: FlowNode[];
}) => {
    const W = 900, H = 440;
    const cardW = 210, cardH = 82;
    const stepL = 118, stepR = 118;
    const leftX = 40;
    const rightX = W - 40 - cardW;
    const lStart = (H - (leftNodes.length - 1) * stepL) / 2 - cardH / 2;
    const rStart = (H - (rightNodes.length - 1) * stepR) / 2 - cardH / 2;
    const hubW = 190, hubH = 210;
    const hubX = W / 2 - hubW / 2;
    const hubY = H / 2 - hubH / 2;

    /** Resolve a node's accent colour - falls back to the hub blue. */
    const accent = (n: FlowNode) => n.dot ?? ILL.blue;

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <IllDefs id={id} />
            <IllHeader label={title} />

            {/* Hub */}
            <g filter={`url(#${id}-shadow)`}>
                <rect x={hubX} y={hubY} width={hubW} height={hubH} rx="24" fill={`url(#${id}-hub)`} />
                <g transform={`translate(${W / 2},${hubY + 48})`} stroke="#93c5fd" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M-12 -1 A12 12 0 0 1 8 -10" />
                    <polygon points="8,-10 2,-11 7,-16" fill="#93c5fd" />
                    <path d="M12 1 A12 12 0 0 1 -8 10" />
                    <polygon points="-8,10 -2,11 -7,16" fill="#93c5fd" />
                </g>
                <text x={W / 2} y={hubY + 102} textAnchor="middle" fontFamily={ILL.font} fontSize="17" fontWeight="800" fill="white">
                    {hub}
                </text>
                {hubLatency && (
                    <text x={W / 2} y={hubY + 124} textAnchor="middle" fontFamily={ILL.font} fontSize="11.5" fill="#bfdbfe">
                        {hubLatency}
                    </text>
                )}
                <circle cx={W / 2} cy={hubY + hubH - 26} r="9" fill="#60a5fa" opacity="0.35" />
                <circle cx={W / 2} cy={hubY + hubH - 26} r="4.5" fill="#60a5fa" />
            </g>

            {/* Left (source) nodes → hub */}
            {leftNodes.map((n) => {
                const idx = leftNodes.indexOf(n);
                const y = lStart + idx * stepL;
                const cy = y + cardH / 2;
                const x1 = leftX + cardW;
                const y1 = cy;
                const x2 = hubX;
                const y2 = H / 2;
                const color = accent(n);
                return (
                    <g key={n.label}>
                        <IllCard x={leftX} y={y} w={cardW} h={cardH} accent={color} id={id}>
                            {n.logo ? (
                                <image href={n.logo} x={leftX + 18} y={cy - 20} width="40" height="40" preserveAspectRatio="xMidYMid meet" />
                            ) : (
                                <IllIconBadge x={leftX + 38} y={cy} color={color} kind={n.icon} />
                            )}
                            <text x={leftX + 70} y={cy - 4} fontFamily={ILL.font} fontSize="14" fontWeight="800" fill={ILL.ink}>
                                {n.label}
                            </text>
                            {n.sub && (
                                <text x={leftX + 70} y={cy + 16} fontFamily={ILL.font} fontSize="11.5" fill={ILL.muted}>
                                    {n.sub}
                                </text>
                            )}
                        </IllCard>
                        {/* Animated dashed line */}
                        <line x1={x1} y1={y1} x2={x2} y2={y2}
                            stroke={color} strokeWidth="1.6" strokeDasharray="5 4">
                            <animate attributeName="stroke-dashoffset" values="0;-18"
                                dur={`${1.2 + idx * 0.15}s`} repeatCount="indefinite" />
                        </line>
                        {/* Flowing data dot */}
                        <circle r="3" fill={color} opacity="0.8">
                            <animateMotion dur={`${1.8 + idx * 0.2}s`} repeatCount="indefinite"
                                path={`M${x1} ${y1} L${x2} ${y2}`} />
                        </circle>
                    </g>
                );
            })}

            {/* Hub → right (destination) nodes */}
            {rightNodes.map((n) => {
                const idx = rightNodes.indexOf(n);
                const y = rStart + idx * stepR;
                const cy = y + cardH / 2;
                const x1 = hubX + hubW;
                const y1 = H / 2;
                const x2 = rightX;
                const y2 = cy;
                const color = accent(n);
                return (
                    <g key={n.label}>
                        {/* Animated dashed line */}
                        <line x1={x1} y1={y1} x2={x2} y2={y2}
                            stroke={color} strokeWidth="1.6" strokeDasharray="5 4">
                            <animate attributeName="stroke-dashoffset" values="0;-18"
                                dur={`${1.2 + idx * 0.15}s`} repeatCount="indefinite" />
                        </line>
                        {/* Flowing data dot */}
                        <circle r="3" fill={color} opacity="0.8">
                            <animateMotion dur={`${1.8 + idx * 0.2}s`} repeatCount="indefinite"
                                path={`M${x1} ${y1} L${x2} ${y2}`} />
                        </circle>
                        <IllCard x={rightX} y={y} w={cardW} h={cardH} accent={color} id={id}>
                            {n.logo ? (
                                <image href={n.logo} x={rightX + 18} y={cy - 20} width="40" height="40" preserveAspectRatio="xMidYMid meet" />
                            ) : (
                                <IllIconBadge x={rightX + 38} y={cy} color={color} kind={n.icon} />
                            )}
                            <text x={rightX + 70} y={cy - 4} fontFamily={ILL.font} fontSize="14" fontWeight="800" fill={ILL.ink}>
                                {n.label}
                            </text>
                            {n.sub && (
                                <text x={rightX + 70} y={cy + 16} fontFamily={ILL.font} fontSize="11.5" fill={ILL.muted}>
                                    {n.sub}
                                </text>
                            )}
                        </IllCard>
                    </g>
                );
            })}
        </svg>
    );
};


/* ------------------------------------------------------------------ */
/* platform -GenVisual                                               */
/* ------------------------------------------------------------------ */
const GenIcon = ({
    x, y, kind, color = ILL.blue, size = 14,
}: {
    x: number; y: number; size?: number; color?: string;
    kind: "document" | "image" | "tag" | "box" | "palette" | "wand" | "text" | "list" | "shield" | "target" | "rocket" | "check";
}) => {
    const s = size / 24;
    const t = (v: number) => x - size / 2 + v * s;
    const u = (v: number) => y - size / 2 + v * s;
    return (
        <g stroke={color} strokeWidth={1.7 / s * s} fill="none" strokeLinecap="round" strokeLinejoin="round">
            {kind === "document" && (
                <>
                    <path d={`M${t(6)} ${u(3)} H${t(15)} L${t(19)} ${u(7)} V${u(21)} H${t(6)} Z`} />
                    <path d={`M${t(15)} ${u(3)} V${u(7)} H${t(19)}`} />
                </>
            )}
            {kind === "image" && (
                <>
                    <rect x={t(3)} y={u(4)} width={size * 0.75} height={size * 0.66} rx={2 * s} />
                    <circle cx={t(8.5)} cy={u(9.5)} r={1.6 * s} fill={color} stroke="none" />
                    <path d={`M${t(3)} ${u(16)} L${t(9)} ${u(10)} L${t(13)} ${u(14)} L${t(16)} ${u(11)} L${t(21)} ${u(16)}`} />
                </>
            )}
            {kind === "tag" && (
                <>
                    <path d={`M${t(11)} ${u(3)} H${t(19)} V${u(11)} L${t(10)} ${u(20)} L${t(3)} ${u(13)} Z`} />
                    <circle cx={t(15)} cy={u(7)} r={1.4 * s} fill={color} stroke="none" />
                </>
            )}
            {kind === "box" && (
                <>
                    <path d={`M${t(3)} ${u(7)} L${t(12)} ${u(3)} L${t(21)} ${u(7)} V${u(17)} L${t(12)} ${u(21)} L${t(3)} ${u(17)} Z`} />
                    <path d={`M${t(3)} ${u(7)} L${t(12)} ${u(11)} L${t(21)} ${u(7)} M${t(12)} ${u(11)} V${u(21)}`} />
                </>
            )}
            {kind === "palette" && (
                <>
                    <path d={`M${t(12)} ${u(3)} a9 9 0 1 0 0 18 c1.6 0 2 -1.2 2 -2.4 c0 -1 -0.8 -1.6 -0.8 -2.6 c0 -1.4 1.2 -2.2 2.6 -2.2 h1.5 a4.7 4.7 0 0 0 4.7 -4.8 c0 -4.8 -4.5 -6 -10 -6 z`} />
                    <circle cx={t(8)} cy={u(11)} r={1.3 * s} fill={color} stroke="none" />
                    <circle cx={t(12)} cy={u(7.5)} r={1.3 * s} fill={color} stroke="none" />
                    <circle cx={t(16.5)} cy={u(10)} r={1.3 * s} fill={color} stroke="none" />
                </>
            )}
            {kind === "wand" && (
                <>
                    <path d={`M${t(5)} ${u(19)} L${t(19)} ${u(5)}`} />
                    <path d={`M${t(19)} ${u(5)} l1.5 -3.5 M${t(19)} ${u(5)} l3.5 1.5 M${t(15)} ${u(3)} l1 -2 M${t(21)} ${u(9)} l2 -1`} />
                </>
            )}
            {kind === "text" && (
                <>
                    <path d={`M${t(4)} ${u(6)} H${t(20)} M${t(4)} ${u(12)} H${t(20)} M${t(4)} ${u(18)} H${t(14)}`} />
                </>
            )}
            {kind === "list" && (
                <>
                    <circle cx={t(5)} cy={u(6)} r={1.2 * s} fill={color} stroke="none" />
                    <circle cx={t(5)} cy={u(12)} r={1.2 * s} fill={color} stroke="none" />
                    <circle cx={t(5)} cy={u(18)} r={1.2 * s} fill={color} stroke="none" />
                    <path d={`M${t(9)} ${u(6)} H${t(20)} M${t(9)} ${u(12)} H${t(20)} M${t(9)} ${u(18)} H${t(20)}`} />
                </>
            )}
            {kind === "shield" && (
                <path d={`M${t(12)} ${u(2.5)} L${t(20)} ${u(6)} V${u(12)} C${t(20)} ${u(17.5)} ${t(16)} ${u(20.5)} ${t(12)} ${u(21.5)} C${t(8)} ${u(20.5)} ${t(4)} ${u(17.5)} ${t(4)} ${u(12)} V${u(6)} Z`} />
            )}
            {kind === "target" && (
                <>
                    <circle cx={t(12)} cy={u(12)} r={9 * s} />
                    <circle cx={t(12)} cy={u(12)} r={5 * s} />
                    <circle cx={t(12)} cy={u(12)} r={1.3 * s} fill={color} stroke="none" />
                </>
            )}
            {kind === "rocket" && (
                <>
                    <path d={`M${t(12)} ${u(2.5)} C${t(16.5)} ${u(6)} ${t(17)} ${u(12)} ${t(14.5)} ${u(17)} L${t(9.5)} ${u(17)} C${t(7)} ${u(12)} ${t(7.5)} ${u(6)} ${t(12)} ${u(2.5)} Z`} />
                    <circle cx={t(12)} cy={u(9)} r={1.6 * s} />
                    <path d={`M${t(9.5)} ${u(17)} L${t(7)} ${u(21)} M${t(14.5)} ${u(17)} L${t(17)} ${u(21)} M${t(9.5)} ${u(17)} h5`} />
                </>
            )}
            {kind === "check" && (
                <>
                    <circle cx={t(12)} cy={u(12)} r={9 * s} />
                    <path d={`M${t(8)} ${u(12.5)} L${t(11)} ${u(15.5)} L${t(16.5)} ${u(9)}`} />
                </>
            )}
        </g>
    );
};

// Tinted square icon tile (used in input/output card row headers).
const GenTile = ({
    x, y, size = 30, color, kind,
}: { x: number; y: number; size?: number; color: string; kind: Parameters<typeof GenIcon>[0]["kind"] }) => (
    <g>
        <rect x={x} y={y} width={size} height={size} rx={size * 0.3} fill={color} fillOpacity="0.14" />
        <GenIcon x={x + size / 2} y={y + size / 2} kind={kind} color={color} size={size * 0.5} />
    </g>
);

export const GenVisual = ({
    id,
    title,
    engineLabel,
    engineSub = "Optimizing your product data",
    inputLabel,
    inputMeta,
    outputLines,
    outputChips,
    stats,
    features,
}: {
    id: string;
    title: string;
    engineLabel: string;
    engineSub?: string;
    inputLabel: string;
    inputMeta?: { icon: Parameters<typeof GenIcon>[0]["kind"]; label: string; value: string }[];
    outputLines: { icon: Parameters<typeof GenIcon>[0]["kind"]; title: string; body: string }[];
    outputChips: { text: string; tone?: "blue" | "emerald" }[];
    stats?: { label: string; value: string; tone?: "blue" | "emerald" }[];
    features?: { icon: Parameters<typeof GenIcon>[0]["kind"]; tone?: "blue" | "violet" | "emerald"; title: string; sub: string }[];
}) => {
    const W = 560, H = 430;
    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <IllDefs id={id} />
            <IllHeader label={title} />
            <GenIcon x={42} y={38} kind="wand" color="#a5b4fc" size={12} />

            {/* INPUT card */}
            <IllCard id={id} x={24} y={72} w={150} h={220} accent={ILL.sky}>
                <GenTile x={38} y={86} size={22} color={ILL.blue} kind="document" />
                <text x={68} y={101} fontFamily={ILL.font} fontSize="10" fontWeight="800" fill={ILL.blueDeep} letterSpacing="1">INPUT</text>

                <rect x={38} y={118} width={122} height={78} rx="8" fill="#eef2ff" />
                <path d="M46 122 h6 M154 122 h-6 M46 190 h6 M154 190 h-6" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" />
                <circle cx={80} cy={148} r={9} fill="#c7d2fe" />
                <path d={`M52 178 L78 152 L95 168 L112 148 L152 178 Z`} fill={`url(#${id}-blue)`} opacity="0.8" />

                <text x={38} y={214} fontFamily={ILL.font} fontSize="11" fontWeight="800" fill={ILL.ink}>{inputLabel}</text>
                <rect x={124} y={204} width={36} height={16} rx="8" fill={ILL.tint} />
                <text x={142} y={215} textAnchor="middle" fontFamily={ILL.font} fontSize="8" fontWeight="800" fill={ILL.blueDeep}>+specs</text>
                <line x1={38} y1={222} x2={160} y2={222} stroke="#f1f5f9" />

                {(inputMeta ?? []).map((m, i) => {
                    const y = 240 + i * 24;
                    return (
                        <g key={i}>
                            <GenIcon x={44} y={y - 3} kind={m.icon} color={ILL.blue} size={13} />
                            <text x={56} y={y} fontFamily={ILL.font} fontSize="9.5" fontWeight="700" fill={ILL.muted}>{m.label}</text>
                            <text x={160} y={y} textAnchor="end" fontFamily={ILL.font} fontSize="9.5" fontWeight="800" fill={ILL.ink}>{m.value}</text>
                        </g>
                    );
                })}
            </IllCard>

            {/* ENGINE card */}
            <g filter={`url(#${id}-shadow)`}>
                <rect x={205} y={95} width={150} height={175} rx="16" fill={`url(#${id}-hub)`} />
                <GenIcon x={222} y={112} kind="wand" color="#c4b5fd" size={11} />
                <GenIcon x={338} y={122} kind="wand" color="#c4b5fd" size={9} />
                <rect x={252} y={110} width={56} height={56} rx="14" fill="white" fillOpacity="0.14" stroke="white" strokeOpacity="0.4" />
                <text x={280} y={145} textAnchor="middle" fontFamily={ILL.font} fontSize="16" fontWeight="800" fill="white">AI</text>
                <text x={280} y={186} textAnchor="middle" fontFamily={ILL.font} fontSize="14" fontWeight="800" fill="white">{engineLabel}</text>
                <text x={280} y={201} textAnchor="middle" fontFamily={ILL.font} fontSize="9.5" fill="#c7d2fe">{engineSub}</text>
                <rect x={228} y={212} width={104} height={4} rx="2" fill="white" fillOpacity="0.25" />
                <rect x={228} y={212} width={62} height={4} rx="2" fill="#a5b4fc" />
                <line x1={222} y1={246} x2={338} y2={246} stroke="white" strokeOpacity="0.2" />
                {[
                    { icon: "wand" as const, label: "Analyze" },
                    { icon: "target" as const, label: "Understand" },
                    { icon: "check" as const, label: "Optimize" },
                ].map((s, i) => (
                    <g key={i}>
                        <GenIcon x={240 + i * 41} y={238} kind={s.icon} color="white" size={13} />
                        <text x={240 + i * 41} y={252} textAnchor="middle" fontFamily={ILL.font} fontSize="7.6" fontWeight="700" fill="#e0e7ff">{s.label}</text>
                    </g>
                ))}
            </g>

            {/* OUTPUT card */}
            <IllCard id={id} x={386} y={44} w={150} h={252} accent="#7c3aed">
                <GenTile x={400} y={58} size={22} color="#7c3aed" kind="wand" />
                <text x={430} y={73} fontFamily={ILL.font} fontSize="10" fontWeight="800" fill="#6d28d9" letterSpacing="1">GENERATED</text>

                {outputLines.map((l, i) => {
                    const y = 100 + i * 46;
                    return (
                        <g key={i}>
                            <GenTile x={400} y={y - 14} size={18} color="#7c3aed" kind={l.icon} />
                            <text x={426} y={y} fontFamily={ILL.font} fontSize="10.5" fontWeight="800" fill={ILL.ink}>{l.title}</text>
                            <text x={400} y={y + 15} fontFamily={ILL.font} fontSize="8.4" fontWeight="500" fill={ILL.muted}>
                                {l.body.length > 46 ? l.body.slice(0, 46) + "…" : l.body}
                            </text>
                            <rect x={400} y={y + 22} width={122} height={3} rx="1.5" fill="#ede9fe" />
                        </g>
                    );
                })}

                {stats && stats.map((s, i) => {
                    const sw = 58;
                    const sx = 400 + i * (sw + 6);
                    const emerald = s.tone === "emerald";
                    return (
                        <g key={i}>
                            <rect x={sx} y={252} width={sw} height={34} rx="8" fill={emerald ? "#d1fae5" : ILL.tint} />
                            <text x={sx + sw / 2} y={264} textAnchor="middle" fontFamily={ILL.font} fontSize="7.6" fontWeight="700" fill={emerald ? "#065f46" : ILL.blueDeep}>{s.label}</text>
                            <text x={sx + sw / 2} y={278} textAnchor="middle" fontFamily={ILL.font} fontSize="11.5" fontWeight="800" fill={emerald ? "#059669" : ILL.blue}>{s.value}</text>
                        </g>
                    );
                })}
            </IllCard>

            {/* Input → Engine connector */}
            <g>
                <circle cx={174} cy={182} r="4" fill={ILL.blue} />
                <line x1={174} y1={182} x2={205} y2={182} stroke={ILL.blue} strokeWidth="1.6" strokeDasharray="5 4">
                    <animate attributeName="stroke-dashoffset" values="0;-18" dur="1.4s" repeatCount="indefinite" />
                </line>
                <circle r="3" fill={ILL.blue} opacity="0.8">
                    <animateMotion dur="1.8s" repeatCount="indefinite" path="M174 182 L205 182" />
                </circle>
                <polygon points="205,182 198,177.5 198,186.5" fill={ILL.blue} />
                <circle cx={205} cy={182} r="4" fill={ILL.blue} />
            </g>

            {/* Engine → Output connector */}
            <g>
                <circle cx={355} cy={182} r="4" fill="#7c3aed" />
                <line x1={355} y1={182} x2={386} y2={182} stroke="#7c3aed" strokeWidth="1.6" strokeDasharray="5 4">
                    <animate attributeName="stroke-dashoffset" values="0;-18" dur="1.4s" repeatCount="indefinite" />
                </line>
                <circle r="3" fill="#7c3aed" opacity="0.8">
                    <animateMotion dur="1.8s" repeatCount="indefinite" path="M355 182 L386 182" />
                </circle>
                <polygon points="386,182 379,177.5 379,186.5" fill="#7c3aed" />
                <circle cx={386} cy={182} r="4" fill="#7c3aed" />
            </g>

            {/* bottom feature strip */}
            {features && (
                <g>
                    <rect x={24} y={332} width={W - 48} height={72} rx="14" fill="white" stroke={ILL.softStroke} />
                    {features.map((f, i) => {
                        const fw = (W - 48) / features.length;
                        const fx = 24 + i * fw + 20;
                        const color = f.tone === "violet" ? "#7c3aed" : f.tone === "emerald" ? "#059669" : ILL.blue;
                        const bg = f.tone === "violet" ? "#ede9fe" : f.tone === "emerald" ? "#d1fae5" : ILL.tint;
                        return (
                            <g key={i}>
                                {i > 0 && <line x1={24 + i * fw} y1={348} x2={24 + i * fw} y2={388} stroke="#f1f5f9" />}
                                <rect x={fx} y={352} width={30} height={30} rx="9" fill={bg} />
                                <GenIcon x={fx + 15} y={367} kind={f.icon} color={color} size={15} />
                                <text x={fx + 40} y={366} fontFamily={ILL.font} fontSize="10.5" fontWeight="800" fill={ILL.ink}>{f.title}</text>
                                <text x={fx + 40} y={379} fontFamily={ILL.font} fontSize="8.8" fontWeight="600" fill={ILL.muted}>{f.sub}</text>
                            </g>
                        );
                    })}
                </g>
            )}
        </svg>
    );
};
/* ------------------------------------------------------------------ */
/* platform -KpiChartVisual                                               */
/* ------------------------------------------------------------------ */
const KpiIcon = ({
    x, y, color, kind,
}: { x: number; y: number; color: string; kind: "box" | "cart" | "calendar" }) => (
    <g>
        <circle cx={x} cy={y} r="20" fill={color} fillOpacity="0.14" />
        <g stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {kind === "box" && (
                <>
                    <path d={`M${x - 9} ${y - 3} L${x} ${y - 8} L${x + 9} ${y - 3} V${y + 6} L${x} ${y + 11} L${x - 9} ${y + 6} Z`} />
                    <path d={`M${x - 9} ${y - 3} L${x} ${y + 2} L${x + 9} ${y - 3} M${x} ${y + 2} V${y + 11}`} />
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
            {kind === "calendar" && (
                <>
                    <rect x={x - 9} y={y - 7} width="18" height="16" rx="2" />
                    <path d={`M${x - 9} ${y - 2} H${x + 9}`} />
                    <path d={`M${x - 4.5} ${y - 10} V${y - 4} M${x + 4.5} ${y - 10} V${y - 4}`} />
                    <rect x={x - 5.5} y={y + 1.5} width="3" height="3" fill={color} stroke="none" />
                </>
            )}
        </g>
    </g>
);

export const KpiChartVisual = ({
    id,
    title,
    kpis,
    series,
    compareSeries,
    yMax,
    yTicks = 3,
    xLabels,
    floorValue,
    floorLabel,
    pill,
}: {
    id: string;
    title: string;
    kpis: { label: string; value: string; delta?: string; icon: "box" | "cart" | "calendar" }[];
    /** Raw (non-normalized) values - scaled internally against yMax. */
    series: number[];
    compareSeries?: number[];
    /** Chart ceiling; defaults to the next nice round number above the data max. */
    yMax?: number;
    /** Number of gridline divisions above zero (default 3 → 0/…/…/max, matching the reference's 0-10-20-30). */
    yTicks?: number;
    xLabels?: string[];
    /** Value (in data units) for the dashed threshold line, e.g. 20 for "Reorder at 20". */
    floorValue?: number;
    floorLabel?: string;
    pill?: { label: string; tone?: "emerald" | "blue" };
}) => {
    const W = 560, H = 430;
    const chartX = 44, chartY = 240, chartW = W - 84, chartH = 150;

    const dataMax = Math.max(...series, ...(compareSeries ?? []), floorValue ?? 0);
    const max = yMax ?? (Math.ceil(dataMax / 10) * 10 || 10);
    const yToPx = (v: number) => chartY + chartH - (v / max) * chartH;
    const xToPx = (i: number, n: number) => chartX + (i * chartW) / (n - 1);

    const toPath = (arr: number[]) => arr.map((v, i) => `${xToPx(i, arr.length)},${yToPx(v)}`).join(" ");
    const areaPath = (arr: number[]) => {
        const pts = arr.map((v, i) => `${xToPx(i, arr.length)},${yToPx(v)}`);
        return `M${xToPx(0, arr.length)},${chartY + chartH} L${pts.join(" L")} L${xToPx(arr.length - 1, arr.length)},${chartY + chartH} Z`;
    };

    const ticks = Array.from({ length: yTicks + 1 }, (_, i) => (max / yTicks) * i);

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <IllDefs id={id} />
            <IllCard id={id} x={24} y={64} w={W - 48} h={H - 88} accent={ILL.blue}>
                <text x={40} y={94} fontFamily={ILL.font} fontSize="15" fontWeight="800" fill={ILL.ink}>{title}</text>

                {pill && (
                    <g>
                        <rect x={W - 172} y={80} width={132} height={26} rx={13} fill={pill.tone === "emerald" ? "#d1fae5" : ILL.tint} />
                        <circle cx={W - 152} cy={93} r={3.5} fill={pill.tone === "emerald" ? "#059669" : ILL.blueDeep} />
                        <text x={W - 142} y={97} fontFamily={ILL.font} fontSize="10.5" fontWeight="800" fill={pill.tone === "emerald" ? "#065f46" : ILL.blueDeep}>
                            {pill.label}
                        </text>
                    </g>
                )}

                {/* KPI tiles: icon badge + label / value / delta */}
                {kpis.map((k, i) => {
                    const kw = (W - 96) / kpis.length;
                    const kx = 40 + i * kw;
                    const tileW = kw - 14;
                    const tileY = 120, tileH = 96;
                    return (
                        <g key={i}>
                            <rect x={kx} y={tileY} width={tileW} height={tileH} rx="12" fill="white" stroke={ILL.softStroke} />
                            <KpiIcon x={kx + 34} y={tileY + tileH / 2} color={ILL.blue} kind={k.icon} />
                            <text x={kx + 62} y={tileY + 30} fontFamily={ILL.font} fontSize="9.5" fontWeight="700" fill={ILL.muted} letterSpacing="0.8">
                                {k.label.toUpperCase()}
                            </text>
                            <text x={kx + 62} y={tileY + 58} fontFamily={ILL.font} fontSize="20" fontWeight="800" fill={ILL.ink}>
                                {k.value}
                            </text>
                            {k.delta && (
                                <text x={kx + 62} y={tileY + 78} fontFamily={ILL.font} fontSize="10.5" fontWeight="700" fill="#059669">
                                    ▲ {k.delta}
                                </text>
                            )}
                        </g>
                    );
                })}

                {/* Y gridlines + labels */}
                {ticks.map((t, i) => (
                    <g key={i}>
                        <line x1={chartX} x2={chartX + chartW} y1={yToPx(t)} y2={yToPx(t)} stroke="#f1f5f9" strokeDasharray={t === 0 ? undefined : "4 4"} />
                        <text x={chartX - 5} y={yToPx(t) + 3.5} textAnchor="end" fontFamily={ILL.font} fontSize="10" fontWeight="700" fill={ILL.muted}>
                            {t}
                        </text>
                    </g>
                ))}
                <line x1={chartX} y1={chartY + chartH} x2={chartX + chartW} y2={chartY + chartH} stroke={ILL.softStroke} />

                {/* Threshold / reorder line */}
                {floorValue !== undefined && (
                    <>
                        <line x1={chartX} y1={yToPx(floorValue)} x2={chartX + chartW} y2={yToPx(floorValue)} stroke="#f59e0b" strokeWidth="1.4" strokeDasharray="5 4">
                            <animate attributeName="stroke-dashoffset" values="0;-18" dur="2s" repeatCount="indefinite" />
                        </line>
                        <circle r="2.5" fill="#f59e0b" opacity="0.7">
                            <animateMotion dur="3s" repeatCount="indefinite"
                                path={`M${chartX} ${yToPx(floorValue)} L${chartX + chartW} ${yToPx(floorValue)}`} />
                        </circle>
                        {floorLabel && (
                            <text x={chartX + chartW} y={yToPx(floorValue) - 8} textAnchor="end" fontFamily={ILL.font} fontSize="10" fontWeight="700" fill="#c2410c">
                                {floorLabel}
                            </text>
                        )}
                    </>
                )}

                {/* Filled area under primary series */}
                <path d={areaPath(series)} fill="#e0e7ff" fillOpacity="0.7" stroke="none" />

                {/* Comparison (dashed) line */}
                {compareSeries && (
                    <polyline fill="none" stroke={ILL.blue} strokeWidth="1.8" strokeDasharray="5 4" points={toPath(compareSeries)}>
                        <animate attributeName="stroke-dashoffset" values="0;-18" dur="2.4s" repeatCount="indefinite" />
                    </polyline>
                )}

                {/* Primary line */}
                <polyline fill="none" stroke="#4338ca" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" points={toPath(series)} />

                {/* Flowing data dot along primary line */}
                <circle r="3.5" fill="#4338ca" opacity="0.85">
                    <animateMotion dur="4s" repeatCount="indefinite"
                        path={series.map((v, i) => `${i === 0 ? "M" : "L"}${xToPx(i, series.length)} ${yToPx(v)}`).join(" ")} />
                </circle>

                {/* X-axis labels */}
                {xLabels && xLabels.map((label, i) => (
                    <text key={i} x={xToPx(i, xLabels.length)} y={chartY + chartH + 22} textAnchor="middle" fontFamily={ILL.font} fontSize="10" fontWeight="600" fill={ILL.muted}>
                        {label}
                    </text>
                ))}
            </IllCard>
            <IllHeader label={title.split("·")[0].trim()} />
        </svg>
    );
};

/* ------------------------------------------------------------------ */
/* platform -MatrixVisual                                               */
/* ------------------------------------------------------------------ */
const MatrixIcon = ({
    x, y, kind, color = "white", size = 18,
}: {
    x: number; y: number; size?: number; color?: string;
    kind: "home" | "pot" | "tree" | "clock" | "check" | "document" | "trend";
}) => {
    const s = size / 24;
    const t = (v: number) => x - size / 2 + v * s;
    const u = (v: number) => y - size / 2 + v * s;
    return (
        <g stroke={color} strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round">
            {kind === "home" && (
                <>
                    <path d={`M${t(3)} ${u(11)} L${t(12)} ${u(3)} L${t(21)} ${u(11)}`} />
                    <path d={`M${t(6)} ${u(9.5)} V${u(21)} H${t(18)} V${u(9.5)}`} />
                    <rect x={t(10)} y={u(14)} width={4 * s} height={7 * s} fill={color} stroke="none" />
                </>
            )}
            {kind === "pot" && (
                <>
                    <path d={`M${t(4)} ${u(10)} H${t(20)} L${t(18.5)} ${u(20)} H${t(5.5)} Z`} />
                    <path d={`M${t(2)} ${u(10)} H${t(22)}`} />
                    <path d={`M${t(4)} ${u(10)} v-2 h4 v2 M${t(16)} ${u(10)} v-2 h4 v2`} />
                </>
            )}
            {kind === "tree" && (
                <>
                    <path d={`M${t(12)} ${u(2.5)} L${t(6)} ${u(11)} H${t(9)} L${t(4.5)} ${u(17)} H${t(19.5)} L${t(15)} ${u(11)} H${t(18)} Z`} />
                    <path d={`M${t(12)} ${u(17)} V${u(21.5)}`} />
                </>
            )}
            {kind === "clock" && (
                <>
                    <circle cx={t(12)} cy={u(12)} r={9 * s} />
                    <path d={`M${t(12)} ${u(7)} V${u(12)} L${t(15.5)} ${u(14.5)}`} />
                </>
            )}
            {kind === "check" && (
                <>
                    <circle cx={t(12)} cy={u(12)} r={9 * s} fill={color} stroke="none" />
                    <path d={`M${t(7.5)} ${u(12.3)} L${t(10.5)} ${u(15.3)} L${t(16.5)} ${u(8.5)}`} stroke="white" strokeWidth={1.8} />
                </>
            )}
            {kind === "document" && (
                <>
                    <path d={`M${t(6)} ${u(3)} H${t(15)} L${t(19)} ${u(7)} V${u(21)} H${t(6)} Z`} />
                    <path d={`M${t(15)} ${u(3)} V${u(7)} H${t(19)}`} />
                    <path d={`M${t(9)} ${u(12)} H${t(16)} M${t(9)} ${u(16)} H${t(14)}`} />
                </>
            )}
            {kind === "trend" && (
                <path d={`M${t(2)} ${u(18)} L${t(9)} ${u(11)} L${t(13)} ${u(15)} L${t(22)} ${u(4)}`} />
            )}
        </g>
    );
};

// Simplified marketplace "logo" badges - brand-colored initials rather than
// literal trademarked marks, kept legible and on-brand for the column heads.
const MarketBadge = ({
    x, y, channel,
}: { x: number; y: number; channel: string }) => {
    const map: Record<string, { bg: string; fg: string; label: string }> = {
        Amazon: { bg: "#fff7ed", fg: "#111827", label: "a" },
        Walmart: { bg: "#fffbeb", fg: "#f59e0b", label: "✳" },
        eBay: { bg: "#fef2f2", fg: "#e11d48", label: "eB" },
        Etsy: { bg: "#fff7ed", fg: "#ea580c", label: "E" },
    };
    const s = map[channel] ?? { bg: ILL.wash, fg: ILL.blue, label: channel[0] };
    return (
        <g>
            <rect x={x} y={y} width={34} height={34} rx="10" fill={s.bg} stroke={ILL.softStroke} />
            <text x={x + 17} y={y + 22} textAnchor="middle" fontFamily={ILL.font} fontSize="14" fontWeight="800" fill={s.fg}>
                {s.label}
            </text>
        </g>
    );
};

const rowIcon: Record<string, "home" | "pot" | "tree"> = {
    Home: "home",
    Kitchen: "pot",
    Outdoor: "tree",
};

export const MatrixVisual = ({
    id,
    title,
    cols,
    rows,
    cellFor,
    stats,
    colLogos,
}: {
    id: string;
    title: string;
    cols: string[];
    rows: string[];
    cellFor: (r: number, c: number) => { fill: string; text: string; textFill: string; icon: "clock" | "check" };
    stats?: { skuLabel: string; skuValue: string; deltaLabel: string; deltaValue: string };
    /** Optional map of column name → SVG logo path. When provided the logo is
     *  rendered instead of the default `MarketBadge` initial. */
    colLogos?: Record<string, string>;
}) => {
    const W = 600, H = 420;
    const gridX = 40, gridLeftW = 130, gridY = 150;
    const cellW = (W - 80 - gridLeftW) / cols.length;
    const cellH = 46, rowGap = 8;

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <IllDefs id={id} />
            <IllHeader label="Bulk regenerate" />
            {/* decorative dot cluster, top right - echoes reference */}
            <g fill={ILL.sky} fillOpacity="0.55">
                {[0, 1, 2, 3].map((c) =>
                    [0, 1, 2].map((r) => (
                        <circle key={`${r}-${c}`} cx={W - 96 + c * 15} cy={26 + r * 15} r="2.2" />
                    ))
                )}
            </g>

            <IllCard id={id} x={24} y={50} w={W - 48} h={H - 88} accent={ILL.blue}>
                <text x={40} y={80} fontFamily={ILL.font} fontSize="15" fontWeight="800" fill={ILL.ink}>{title}</text>

                {/* column headers: centered marketplace badges */}
                {cols.map((c, i) => {
                    const cx = gridX + gridLeftW + i * cellW + cellW / 2;
                    const logo = colLogos?.[c];
                    const boxSize = 44;
                    const bx = cx - boxSize / 2;
                    const by = 92;
                    return (
                        <g key={c}>
                            {logo ? (
                                <g>
                                    {/* Logo Card Base */}
                                    <rect
                                        x={bx}
                                        y={by}
                                        width={boxSize}
                                        height={boxSize}
                                        rx="12"
                                        fill="white"
                                        stroke={ILL.softStroke}
                                        strokeWidth="1.2"
                                        filter={`url(#${id}-shadow)`}
                                    />
                                    <image
                                        href={logo}
                                        x={cx - 13}
                                        y={by + (boxSize - 26) / 2}
                                        width={26}
                                        height={26}
                                        preserveAspectRatio="xMidYMid meet"
                                    />
                                </g>
                            ) : (
                                <g transform={`translate(${bx + (boxSize - 34) / 2}, ${by + (boxSize - 34) / 2})`}>
                                    <MarketBadge x={0} y={0} channel={c} />
                                </g>
                            )}
                        </g>
                    );
                })}

                {rows.map((r, ri) => {
                    const y = gridY + ri * (cellH + rowGap);
                    return (
                        <g key={r}>
                            {/* row icon tile + label */}
                            <rect x={gridX} y={y} width={44} height={cellH} rx="12" fill={ILL.tint} />
                            <MatrixIcon x={gridX + 22} y={y + cellH / 2} kind={rowIcon[r] ?? "home"} color={ILL.blueDeep} size={20} />
                            <text x={gridX + 56} y={y + cellH / 2 + 4} fontFamily={ILL.font} fontSize="12.5" fontWeight="800" fill={ILL.ink}>{r}</text>

                            {cols.map((_, ci) => {
                                const cell = cellFor(ri, ci);
                                const cx = gridX + gridLeftW + ci * cellW + 30;
                                const cw = cellW - 60;
                                return (
                                    <g key={ci}>
                                        <rect x={cx} y={y} width={cw} height={cellH} rx="12" fill={cell.fill} />
                                        <MatrixIcon
                                            x={cx + cw / 2 - 40}
                                            y={y + cellH / 2}
                                            kind={cell.icon}
                                            color={cell.icon === "check" ? "#059669" : "#4338ca"}
                                            size={18}
                                        />
                                        <text x={cx + cw / 2 + 4} y={y + cellH / 2 + 4} textAnchor="middle" fontFamily={ILL.font} fontSize="16" fontWeight="600" fill={cell.textFill}>
                                            {cell.text}
                                        </text>
                                    </g>
                                );
                            })}
                        </g>
                    );
                })}

                {/* bottom stat strip */}
                {stats && (() => {
                    const stripY = gridY + rows.length * (cellH + rowGap);
                    const stripH = 60;
                    const stripW = W - 80;
                    return (
                        <g>
                            <rect x={40} y={stripY} width={stripW} height={stripH} rx="16" fill={ILL.tint} fillOpacity="0.6" />
                            <rect x={62} y={stripY + 6} width={48} height={48} rx="14" fill={`url(#${id}-blue)`} />
                            <MatrixIcon x={86} y={stripY + 30} kind="document" color="white" size={22} />

                            <text x={126} y={stripY + 30} fontFamily={ILL.font} fontSize="18" fontWeight="800" fill={ILL.ink}>{stats.skuValue}</text>
                            <text x={126} y={stripY + 50} fontFamily={ILL.font} fontSize="11" fontWeight="600" fill={ILL.muted}>{stats.skuLabel}</text>

                            <line x1={296} y1={stripY} x2={296} y2={stripY + 60} stroke="#cbd5e1" />

                            <text x={320} y={stripY + 30} fontFamily={ILL.font} fontSize="18" fontWeight="800" fill={ILL.blue}>{stats.deltaValue}</text>
                            <text x={320} y={stripY + 50} fontFamily={ILL.font} fontSize="11" fontWeight="600" fill={ILL.muted}>{stats.deltaLabel}</text>

                            {/* mini trend glyph, right side */}
                            <g>
                                <rect x={W - 156} y={stripY + 30} width="6" height="16" rx="2" fill={ILL.tint} />
                                <rect x={W - 146} y={stripY + 22} width="6" height="24" rx="2" fill={ILL.sky} />
                                <rect x={W - 136} y={stripY + 14} width="6" height="32" rx="2" fill={ILL.blue} />
                                <MatrixIcon x={W - 120} y={stripY + 24} kind="trend" color={ILL.blueDeep} size={22} />
                            </g>
                        </g>
                    );
                })()}
            </IllCard>
        </svg >
    );
};


/* ------------------------------------------------------------------ */
/* platform -ProgressListVisual                                               */
/* ------------------------------------------------------------------ */

type StepState = "done" | "active" | "queued";

type ProgressStep = {
    label: string;
    detail: string;
    state: StepState;
};

type StatItem = {
    icon: "pin" | "globe";
    eyebrow: string;
    value: string;
};

/** Per-row theme cycle - mirrors the purple / blue / teal / orange / gray
 *  progression in the reference (first two "done" rows share the violet
 *  brand color, then the palette rotates per row). */
const STEP_THEMES = [
    { icon: "doc", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
    { icon: "dollar", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
    { icon: "refresh", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
    { icon: "pie", color: "#10b981", bg: "#ecfdf5", border: "#a7f3d0" },
    { icon: "upload", color: "#f97316", bg: "#fff7ed", border: "#fed7aa" },
    { icon: "send", color: "#94a3b8", bg: "#f8fafc", border: "#e2e8f0" },
] as const;

/** White line-art glyph, drawn centered at (x, y) inside a colored square. */
const StepGlyph = ({ kind, x, y }: { kind: string; x: number; y: number }) => {
    const base = { stroke: "white", strokeWidth: 1.7, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
    switch (kind) {
        case "doc":
            return (
                <g {...base}>
                    <path d={`M${x - 6} ${y - 9} h7 l4 4 v12 h-11 z`} />
                    <path d={`M${x - 3} ${y - 1} h6 M${x - 3} ${y + 3} h6`} />
                </g>
            );
        case "dollar":
            return (
                <g {...base}>
                    <circle cx={x} cy={y} r={9} />
                    <path d={`M${x} ${y - 5.5} v11 M${x + 3} ${y - 3} q-3 -2 -5.5 0 t0 4 q3.5 2 5.5 0`} />
                </g>
            );
        case "refresh":
            return (
                <g {...base}>
                    <path d={`M${x - 7} ${y - 1} a7 7 0 1 1 1.6 4.4`} />
                    <path d="M0,0 l1,5 l5,-1.3" transform={`translate(${x - 9.5} ${y - 5.5})`} fill="white" stroke="none" />
                </g>
            );
        case "pie":
            return (
                <g {...base}>
                    <circle cx={x} cy={y} r={9} />
                    <path d={`M${x} ${y} L${x} ${y - 9} A9 9 0 0 1 ${x + 8.3} ${y + 3.8} Z`} fill="white" stroke="none" />
                </g>
            );
        case "upload":
            return (
                <g {...base}>
                    <path d={`M${x - 8} ${y + 4.5} a5 5 0 0 1 0.8 -9.9 a6 6 0 0 1 11.6 1.9 a4.4 4.4 0 0 1 -1.2 8`} />
                    <path d={`M${x} ${y + 6.5} v-9 M${x - 3} ${y - 1} l3 -4 l3 4`} />
                </g>
            );
        case "send":
            return <path {...base} d={`M${x - 8} ${y - 6} l16 6 l-16 6 l3.2 -6 z`} />;
        default:
            return null;
    }
};

const SquareBadge = ({ x, y, size = 40, color, kind }: { x: number; y: number; size?: number; color: string; kind: string }) => (
    <g>
        <rect x={x} y={y} width={size} height={size} rx={12} fill={color} />
        <StepGlyph kind={kind} x={x + size / 2} y={y + size / 2} />
    </g>
);

const TimelineNode = ({ x, y, state, color }: { x: number; y: number; state: StepState; color: string }) => {
    if (state === "done") {
        return (
            <g>
                <circle cx={x} cy={y} r={9} fill={color} />
                <path d={`M${x - 3.6} ${y} l3 3 l5 -6.5`} stroke="white" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        );
    }
    if (state === "active") {
        return <circle cx={x} cy={y} r={9} fill="white" stroke={color} strokeWidth={2.2} />;
    }
    return <circle cx={x} cy={y} r={9} fill="white" stroke="#cbd5e1" strokeWidth={2} />;
};

const StatusPill = ({
    x, y, w = 112, h = 28, label, color, bg, border, dashed = false,
}: { x: number; y: number; w?: number; h?: number; label: string; color: string; bg: string; border: string; dashed?: boolean }) => (
    <g>
        <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={bg} stroke={border} />
        {dashed ? (
            <circle cx={x + 16} cy={y + h / 2} r={5} fill="none" stroke={color} strokeWidth={1.6} strokeDasharray="2.2 2.2" />
        ) : (
            <circle cx={x + 16} cy={y + h / 2} r={4} fill={color} />
        )}
        <text x={x + 28} y={y + h / 2 + 3.5} fontFamily={ILL.font} fontSize="10" fontWeight="700" fill={color}>{label}</text>
    </g>
);

const PinGlyph = ({ x, y, color }: { x: number; y: number; color: string }) => (
    <g>
        <path d={`M${x} ${y - 8} c4 0 7 3 7 7 c0 5 -7 10 -7 10 c0 0 -7 -5 -7 -10 c0 -4 3 -7 7 -7 z`} fill={color} />
        <circle cx={x} cy={y - 1} r={2.3} fill="white" />
    </g>
);

const GlobeGlyph = ({ x, y, color }: { x: number; y: number; color: string }) => (
    <g stroke={color} strokeWidth={1.6} fill="none">
        <circle cx={x} cy={y} r={9} />
        <ellipse cx={x} cy={y} rx={4} ry={9} />
        <line x1={x - 9} y1={y} x2={x + 9} y2={y} />
    </g>
);

const ShieldGlyph = ({ x, y }: { x: number; y: number }) => (
    <g>
        <path d={`M${x} ${y - 10} l8 3.2 v6 c0 5.6 -3.4 9 -8 10.4 c-4.6 -1.4 -8 -4.8 -8 -10.4 v-6 z`} fill="white" />
        <path d={`M${x - 4} ${y} l3 3 l5.5 -6.5`} stroke="#5b21b6" strokeWidth={2.1} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
);

/* ── main visual ── */

export const ProgressListVisual = ({
    id,
    title,
    steps,
    stats,
}: {
    id: string;
    title: string;
    steps: ProgressStep[];
    stats?: { left: StatItem; right: StatItem; uptimeLabel?: string; uptimeValue?: string };
}) => {
    const W = 640;
    const padX = 20;
    const cardX = 24;
    const cardW = W - cardX * 2;
    const innerL = cardX + padX;
    const innerR = cardX + cardW - padX;

    const rowGap = 44;
    const stepsY0 = 134;
    const lastRowY = stepsY0 + (steps.length - 1) * rowGap;
    const rowsBottomY = lastRowY + 36;

    const s = stats ?? {
        left: { icon: "pin" as const, eyebrow: "Region", value: "India" },
        right: { icon: "globe" as const, eyebrow: "Global reach", value: "USA · EU" },
        uptimeLabel: "Uptime SLA",
        uptimeValue: "99.99%",
    };

    const statsY = rowsBottomY + 30;
    const midW = 190, midH = 76;
    const sideW = 160, sideH = 56;
    const midX = (W - midW) / 2;
    const midY = statsY - (midH - sideH) / 2;
    const leftX = innerL;
    const rightX = innerR - sideW;

    const cardBottom = statsY + sideH + 20;
    const H = cardBottom + 20;
    const cardH = cardBottom - 64;

    const overallActive = steps.some((st) => st.state === "active");
    const overallLabel = overallActive ? "In progress" : steps.every((st) => st.state === "done") ? "Completed" : "Pending";

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <IllDefs id={id} />
            {/* top-right chrome icons, matching the faint page controls in the reference */}
            <g>
                <circle cx={W - 82} cy={38} r={16} fill="#ede9fe" />
                <path d="M-6,3 a5,5 0 0 1 1,-9.8 a6,6 0 0 1 11.4,2 a4.3,4.3 0 0 1 -1.2,7.8 z" transform={`translate(${W - 82} 38)`} fill="none" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={W - 56} y={22} width={32} height={32} rx={10} fill="#ede9fe" />
                <path d={`M${W - 48} 34 h16 M${W - 48} 38 h16 M${W - 48} 42 h16`} stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
            </g>

            <IllCard id={id} x={cardX} y={64} w={cardW} h={cardH} accent="#7c3aed">
                <text x={innerL} y={100} fontFamily={ILL.font} fontSize="15" fontWeight="800" fill={ILL.ink}>{title}</text>
                <StatusPill x={innerR - 130} y={84} w={130} h={28} label={overallLabel} color="#7c3aed" bg="#f5f3ff" border="#ddd6fe" dashed={overallActive} />

                {/* vertical dotted timeline connecting each node */}
                {steps.length > 1 && (
                    <>
                        <line
                            x1={innerL + 62} y1={stepsY0 + 18}
                            x2={innerL + 62} y2={lastRowY + 18}
                            stroke="#c4b5fd" strokeWidth="1.6" strokeDasharray="1 5" strokeLinecap="round"
                        >
                            <animate attributeName="stroke-dashoffset" values="0;-12" dur="2s" repeatCount="indefinite" />
                        </line>
                        <circle r="2.5" fill="#c4b5fd" opacity={0.7}>
                            <animateMotion dur="2.4s" repeatCount="indefinite"
                                path={`M${innerL + 62} ${stepsY0 + 18} L${innerL + 62} ${lastRowY + 18}`} />
                        </circle>
                    </>
                )}

                {steps.map((st, i) => {
                    const theme = STEP_THEMES[i % STEP_THEMES.length];
                    const y = stepsY0 + i * rowGap;
                    const nodeColor = st.state === "queued" ? "#cbd5e1" : theme.color;
                    const pillLabel = st.state === "done" ? "Completed" : st.state === "active" ? "In progress" : "Pending";
                    const pillColor = st.state === "queued" ? "#94a3b8" : theme.color;
                    const pillBg = st.state === "queued" ? "#f1f5f9" : theme.bg;
                    const pillBorder = st.state === "queued" ? "#e2e8f0" : theme.border;

                    return (
                        <g key={i}>
                            <rect x={innerL + 88} y={y} width={innerR - (innerL + 88)} height={36} rx={8} fill={st.state === "queued" ? "#f8fafc" : theme.bg} opacity={st.state === "queued" ? 1 : 0.7} />
                            <SquareBadge x={innerL} y={y - 2} color={st.state === "queued" ? "#cbd5e1" : theme.color} kind={theme.icon} />
                            <TimelineNode x={innerL + 62} y={y + 18} state={st.state} color={nodeColor} />
                            <text x={innerL + 100} y={y + 15} fontFamily={ILL.font} fontSize="11.5" fontWeight="800" fill={ILL.ink}>{st.label}</text>
                            <text x={innerL + 100} y={y + 29} fontFamily={ILL.font} fontSize="10" fill={ILL.muted}>{st.detail}</text>
                            <StatusPill x={innerR - 118} y={y + 4} w={118} h={28} label={pillLabel} color={pillColor} bg={pillBg} border={pillBorder} dashed={st.state === "active"} />
                        </g>
                    );
                })}

                {/* bottom stats strip */}
                <line x1={leftX + sideW} y1={statsY + sideH / 2} x2={midX} y2={midY + midH / 2} stroke="#c4b5fd" strokeWidth="1.6" strokeDasharray="1 5">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="1.6s" repeatCount="indefinite" />
                </line>
                <circle r="2.5" fill="#c4b5fd" opacity={0.7}>
                    <animateMotion dur="1.8s" repeatCount="indefinite"
                        path={`M${leftX + sideW} ${statsY + sideH / 2} L${midX} ${midY + midH / 2}`} />
                </circle>
                <line x1={midX + midW} y1={midY + midH / 2} x2={rightX} y2={statsY + sideH / 2} stroke="#c4b5fd" strokeWidth="1.6" strokeDasharray="1 5">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="1.6s" repeatCount="indefinite" />
                </line>
                <circle r="2.5" fill="#c4b5fd" opacity={0.7}>
                    <animateMotion dur="1.8s" repeatCount="indefinite"
                        path={`M${midX + midW} ${midY + midH / 2} L${rightX} ${statsY + sideH / 2}`} />
                </circle>

                <g>
                    <rect x={leftX} y={statsY} width={sideW} height={sideH} rx={sideH / 2} fill="white" stroke={ILL.softStroke} />
                    <circle cx={leftX + 30} cy={statsY + sideH / 2} r={16} fill="#ede9fe" />
                    <PinGlyph x={leftX + 30} y={statsY + sideH / 2} color="#7c3aed" />
                    <text x={leftX + 54} y={statsY + sideH / 2 - 4} fontFamily={ILL.font} fontSize="9.5" fontWeight="700" fill={ILL.muted}>{s.left.eyebrow}</text>
                    <text x={leftX + 54} y={statsY + sideH / 2 + 14} fontFamily={ILL.font} fontSize="13" fontWeight="800" fill={ILL.ink}>{s.left.value}</text>
                </g>

                <g filter={`url(#${id}-shadow)`}>
                    <rect x={midX} y={midY} width={midW} height={midH} rx={midH / 2} fill={`url(#${id}-hub)`} />
                    <circle cx={midX + 38} cy={midY + midH / 2} r={17} fill="white" fillOpacity="0.18" />
                    <ShieldGlyph x={midX + 38} y={midY + midH / 2} />
                    <text x={midX + 64} y={midY + midH / 2 - 4} fontFamily={ILL.font} fontSize="16" fontWeight="800" fill="white">{s.uptimeValue}</text>
                    <text x={midX + 64} y={midY + midH / 2 + 15} fontFamily={ILL.font} fontSize="10.5" fontWeight="600" fill="#e9d5ff">{s.uptimeLabel}</text>
                </g>

                <g>
                    <rect x={rightX} y={statsY} width={sideW} height={sideH} rx={sideH / 2} fill="white" stroke={ILL.softStroke} />
                    <circle cx={rightX + 30} cy={statsY + sideH / 2} r={16} fill="#ede9fe" />
                    <GlobeGlyph x={rightX + 30} y={statsY + sideH / 2} color="#7c3aed" />
                    <text x={rightX + 54} y={statsY + sideH / 2 - 4} fontFamily={ILL.font} fontSize="9.5" fontWeight="700" fill={ILL.muted}>{s.right.eyebrow}</text>
                    <text x={rightX + 54} y={statsY + sideH / 2 + 14} fontFamily={ILL.font} fontSize="13" fontWeight="800" fill={ILL.ink}>{s.right.value}</text>
                </g>
            </IllCard>

            <IllHeader label={title.split("·")[0].trim()} />
        </svg>
    );
};
/* ------------------------------------------------------------------ */
/* marketplace -amazon                                               */
/* ------------------------------------------------------------------ */

import type { MarketplaceConfig } from "@/screens/marketplaces/MarketplacePage";
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
    const START_X = 30;
    const CARD_TOP = 145;
    const CARD_H = 310;
    const ICON_CY = 245;

    return (
        <svg viewBox="0 80 1000 390" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
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
            </defs>

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
                                    x2={x + CARD_W + GAP / 2 - 17}
                                    y2={ICON_CY}
                                    stroke="#93A4F5"
                                    strokeWidth="1.8"
                                    strokeDasharray="4 4"
                                >
                                    <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.2s" repeatCount="indefinite" />
                                </line>
                                <circle r="3" fill="#3B4CD8" opacity="0.8">
                                    <animateMotion dur="1.2s" repeatCount="indefinite" path={`M ${x + CARD_W} ${ICON_CY} L ${x + CARD_W + GAP / 2 - 17} ${ICON_CY}`} />
                                </circle>

                                <line
                                    x1={x + CARD_W + GAP / 2 + 17}
                                    y1={ICON_CY}
                                    x2={x + CARD_W + GAP}
                                    y2={ICON_CY}
                                    stroke="#93A4F5"
                                    strokeWidth="1.8"
                                    strokeDasharray="4 4"
                                >
                                    <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.2s" repeatCount="indefinite" />
                                </line>
                                <circle r="3" fill="#3B4CD8" opacity="0.8">
                                    <animateMotion dur="1.2s" repeatCount="indefinite" path={`M ${x + CARD_W + GAP / 2 + 17} ${ICON_CY} L ${x + CARD_W + GAP} ${ICON_CY}`} />
                                </circle>

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
    );
};

export const ChannelHeroDiagram = ({ cfg, ...props }: SVGProps<SVGSVGElement> & {
    cfg: MarketplaceConfig;
}) => {
    const mapIcon = (icon: any): string => {
        if (icon === Boxes) return "cube";
        if (icon === ShoppingCart) return "docCheck";
        if (icon === DollarSign) return "tag";
        if (icon === Wand2) return "sparkle";
        if (icon === RefreshCw) return "refresh";
        if (icon === BarChart3) return "barChart";
        if (icon === LayoutGrid) return "cube";
        if (icon === ShieldCheck) return "shield";
        if (icon === ImageIcon) return "docCheck";
        if (icon === Sparkles) return "sparkle";
        return "cube";
    };

    const tint = (hex: string, f = 0.85) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const nr = Math.round(r + (255 - r) * f);
        const ng = Math.round(g + (255 - g) * f);
        const nb = Math.round(b + (255 - b) * f);
        return `#${nr.toString(16).padStart(2, "0")}${ng.toString(16).padStart(2, "0")}${nb.toString(16).padStart(2, "0")}`;
    };
    const ICONS: Record<string, JSX.Element> = {
        check: (
            <path fill="none" stroke="#0B1E4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7" />
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
        docCheck: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 3.5h7l4 4v13a1 1 0 01-1 1h-10a1 1 0 01-1-1v-16a1 1 0 011-1z" />
                <path d="M13 3.5V8h4M9 12.5h5" />
                <path d="M8.5 16l1.6 1.6L13.5 14" />
            </g>
        ),
        tag: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.5 3.5H19a1.5 1.5 0 011.5 1.5v6.5a1.5 1.5 0 01-.44 1.06l-8 8a1.5 1.5 0 01-2.12 0l-6.5-6.5a1.5 1.5 0 010-2.12l8-8a1.5 1.5 0 011.06-.44z" />
                <circle cx="16.5" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
            </g>
        ),
        sparkle: (
            <g fill="currentColor">
                <path d="M12 2.5l1.8 5.7 5.7 1.8-5.7 1.8-1.8 5.7-1.8-5.7-5.7-1.8 5.7-1.8z" />
                <path d="M19.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
            </g>
        ),
        shield: (
            <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5.2c0 4.7-3 8.7-7 9.8-4-1.1-7-5.1-7-9.8V6l7-3z" />
        ),
        bolt: (
            <path fill="currentColor" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        ),
        refresh: (
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12a8 8 0 0113.6-5.7M20 12a8 8 0 01-13.6 5.7" />
                <path d="M17 3v4h-4M7 21v-4h4" />
            </g>
        ),
        barChart: (
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 19v-6M11 19V6M17 19v-9" />
            </g>
        ),
    };

    const Icon = ({ name, size = 20 }: { name: string; size?: number | string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24">
            {ICONS[name]}
        </svg>
    );

    const GOTCHA_ICONS = ["shield", "bolt", "refresh", "barChart"];
    const GOTCHA_ACCENTS = [
        { accent: "#2563EB", tint: "#E4ECFD" },
        { accent: "#7C3AED", tint: "#EFEAFC" },
        { accent: "#10B981", tint: "#E4FAF0" },
        { accent: "#7C3AED", tint: "#EFEAFC" },
    ];

    const OP_ACCENTS = [
        { accent: "#4F46E5", tint: "#EEF0FE" },
        { accent: "#2563EB", tint: "#EAF1FE" },
        { accent: "#10B981", tint: "#E7FBF3" },
        { accent: "#7C3AED", tint: "#F3EEFE" },
    ];

    const OPS = cfg.capabilities.slice(0, 4).map((c, i) => ({
        icon: mapIcon(c.icon),
        accent: OP_ACCENTS[i].accent,
        tint: OP_ACCENTS[i].tint,
        label: c.t.toUpperCase(),
        value: c.stat,
    }));

    const FEATURES = cfg.gotchas.slice(0, 4).map((g, i) => ({
        icon: GOTCHA_ICONS[i],
        accent: GOTCHA_ACCENTS[i].accent,
        tint: GOTCHA_ACCENTS[i].tint,
        title: g.t,
        subtitle: g.d,
    }));

    const OP_X = 745;
    const OP_W = 240;
    const OP_H = 80;
    const OP_YS = [130, 230, 330, 430];

    const DotCluster = ({ x, y, color }: { x: number; y: number; color: string }) => (
        <g fill={color}>
            {Array.from({ length: 4 }).map((_, row) =>
                Array.from({ length: 4 }).map((_, col) => (
                    <circle key={`${row}-${col}`} cx={x + col * 14} cy={y + row * 14} r="2.2" opacity={0.35} />
                ))
            )}
        </g>
    );

    const logoLetter = cfg.name.charAt(0).toLowerCase();

    return (
        <svg viewBox="10 10 980 645" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <linearGradient id="ch-engine" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2F5FF0" />
                    <stop offset="100%" stopColor="#0B1E4F" />
                </linearGradient>
            </defs>

            {/* Subtle dot cluster decorations – transparent bg so they float */}
            <DotCluster x={24} y={24} color="#93A4F5" />
            <DotCluster x={870} y={555} color="#93A4F5" />

            {/* Marketplace card */}
            <rect x="30" y="222" width="270" height="180" rx="16" fill="white" stroke="#ECEFF7" strokeWidth="1.2" />
            <rect x="30" y="220" width="270" height="5" rx="2.5" fill={cfg.dot} />
            {cfg.logo ? (
                <image href={cfg.logo} x="44" y="244" width="56" height="56" preserveAspectRatio="xMidYMid meet" />
            ) : (
                <>
                    <circle cx="72" cy="272" r="28" fill={tint(cfg.dot)} />
                    <text x="72" y="281" textAnchor="middle" fontSize="24" fontWeight="800" fill="#111827">{logoLetter}</text>
                    <path d="M58 286q14 8 28 0" fill="none" stroke={cfg.dot} strokeWidth="2" strokeLinecap="round" />
                </>
            )}
            <text x="112" y="268" fontSize="21" fontWeight="800" fill="#0F172A">{cfg.name}</text>
            <text x="112" y="292" fontSize="14" fill="#64748B">Native integration</text>
            <rect x="50" y="324" width="230" height="44" rx="22" fill="#E7F7EF" />
            <circle cx="70" cy="346" r="6" fill="#16A34A">
                {/* Pulse on the "live" dot */}
                <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="70" cy="346" r="5" fill="#16A34A" />
            <text x="86" y="351" fontSize="14" fontWeight="700" fill="#4338CA">Connected · live</text>

            {/* Arrow line: marketplace → Engine */}
            <line x1="300" y1="312" x2="382" y2="312" stroke="#3B82F6" strokeWidth="2.4" strokeDasharray="6 5">
                <animate attributeName="stroke-dashoffset" values="0;-22" dur="1.2s" repeatCount="indefinite" />
            </line>
            {/* flowing dot on the arrow */}
            <circle r="4" fill="#3B82F6" opacity="0.85">
                <animateMotion dur="1.6s" repeatCount="indefinite" path="M300 312 L382 312" />
            </circle>
            <path d="M382 303l14 9-14 9z" fill="#3B82F6" />

            {/* Engine box */}
            <rect x="400" y="200" width="220" height="220" rx="24" fill="url(#ch-engine)" />
            {/* Subtle glow ring - animates opacity */}
            <circle cx="510" cy="278" r="70" fill="white" opacity="0">
                <animate attributeName="opacity" values="0;0.05;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="510" cy="278" r="55" fill="white" opacity="0.08" />
            <circle cx="470" cy="230" r="2" fill="#93C5FD" opacity="0.7" />
            <circle cx="555" cy="235" r="2.4" fill="#93C5FD" opacity="0.6" />
            <circle cx="545" cy="215" r="1.8" fill="#93C5FD" opacity="0.6" />
            {/* Engine inner white disc with check */}
            <circle cx="510" cy="278" r="45" fill="white" />
            <g transform="translate(490,258)">
                <Icon name="check" size="40" />
            </g>
            <text x="510" y="365" textAnchor="middle" fontSize="22" fontWeight="800" fill="white">SellerBuz Sync</text>
            <text x="510" y="390" textAnchor="middle" fontSize="15" fill="#BFDBFE">2-way · &lt; 2s latency</text>

            {/* Connector paths: engine right face → ops cards */}
            {OP_YS.map((y, i) => (
                <g key={`conn-${i}`}>
                    <path
                        d={`M622 305 C 670 305, 700 ${y + OP_H / 2}, ${OP_X} ${y + OP_H / 2}`}
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="1.8"
                        strokeDasharray="5 5"
                    >
                        <animate attributeName="stroke-dashoffset" values="0;-20" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
                    </path>
                    {/* Flowing data dot along each path */}
                    <circle r="3.5" fill="#3B82F6" opacity="0.85">
                        <animateMotion dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite"
                            path={`M622 305 C 670 305, 700 ${y + OP_H / 2}, ${OP_X} ${y + OP_H / 2}`} />
                    </circle>
                    {/* Junction dot on ops card edge */}
                    <circle cx={OP_X} cy={y + OP_H / 2} r="5" fill="#2563EB">
                        <animate attributeName="opacity" values="1;0.5;1" dur={`${1.6 + i * 0.2}s`} repeatCount="indefinite" />
                    </circle>
                </g>
            ))}

            {/* Ops cards */}
            {OPS.map((op, i) => {
                const y = OP_YS[i];
                return (
                    <g key={op.label}>
                        <rect x={OP_X} y={y} width={OP_W} height={OP_H} rx="14" fill="white" stroke="#ECEFF7" strokeWidth="1.2" />
                        <rect x={OP_X} y={y} width="4" height={OP_H} rx="2" fill={op.accent} />
                        <circle cx={OP_X + 42} cy={y + OP_H / 2} r="26" fill={op.tint} />
                        <g transform={`translate(${OP_X + 30},${y + OP_H / 2 - 12})`} color={op.accent}>
                            <Icon name={op.icon} size="24" />
                        </g>
                        <text x={OP_X + 76} y={y + 29} fontSize="12" fontWeight="700" fill="#64748B" letterSpacing="0.8">
                            {op.label}
                        </text>
                        <text x={OP_X + 76} y={y + 54} fontSize="20" fontWeight="800" fill="#0F172A">
                            {op.value}
                        </text>
                    </g>
                );
            })}

            {/* Footer feature row */}
            <rect x="30" y="512" width="940" height="100" rx="18" fill="white" stroke="#ECEFF7" strokeWidth="1.2" />
            {FEATURES.map((f, i) => {
                const x = 60 + i * 230;
                return (
                    <g key={f.title}>
                        <rect x={x} y="540" width="48" height="48" rx="14" fill={f.tint} />
                        <g transform={`translate(${x + 12},552)`} color={f.accent}>
                            <Icon name={f.icon} size="24" />
                        </g>
                        <text x={x + 62} y="558" fontSize="15" fontWeight="800" fill="#0F172A">{f.title}</text>
                        <text x={x + 62} y="578" fontSize="13" fill="#64748B">{f.subtitle}</text>
                    </g>
                );
            })}
        </svg>
    )
};