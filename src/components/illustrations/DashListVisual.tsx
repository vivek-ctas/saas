// Small icon glyphs used in the ledger-style column headers.
import { ILL, IllCanvas, IllCard, IllDefs, IllHeader } from "./commanIllustrastrations";
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
            <IllCanvas id={id} w={W} h={H}>
                <IllCard id={id} x={24} y={64} w={W - 48} h={H - 88} accent={ILL.blue}>
                    <text x={40} y={94} fontFamily={ILL.font} fontSize="15" fontWeight="800" fill={ILL.ink}>{title}</text>

                    {chip && (
                        <g>
                            <rect x={W - 148} y={80} width={108} height={22} rx={11} fill={chip.tone === "navy" ? ILL.navy : ILL.tint} />
                            <text x={W - 94} y={95} textAnchor="middle" fontFamily={ILL.font} fontSize="10" fontWeight="800" fill={chip.tone === "navy" ? "white" : ILL.blueDeep}>
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
                                {icon && <ColIcon kind={icon} cx={colX[i] + 5} cy={129} />}
                                <text x={textX} y={132} fontFamily={ILL.font} fontSize="9" fontWeight="800" fill={ILL.muted} letterSpacing="1">
                                    {c.toUpperCase()}
                                </text>
                            </g>
                        );
                    })}
                    <line x1={32} y1={142} x2={W - 32} y2={142} stroke={ILL.softStroke} />

                    {rows.map((r, ri) => {
                        const y = 170 + ri * 42;
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
                <IllHeader x={headerX} y={headerY} label={title.split("·")[0].trim()} />
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
            </IllCanvas>
        </svg>
    );
};