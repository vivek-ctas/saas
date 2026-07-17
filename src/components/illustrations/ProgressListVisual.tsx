/* ── local helpers (kept in this file only — reusable primitives are untouched) ── */
import { ILL, IllCard, IllDefs, IllHeader } from "./commanIllustrastrations";
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

/** Per-row theme cycle — mirrors the purple / blue / teal / orange / gray
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