import { ILL, IllDefs, IllHeader, IllCard, IllIconBadge, IconKind } from "./commanIllustrastrations";
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

// Simplified marketplace "logo" badges — brand-colored initials rather than
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
            {/* decorative dot cluster, top right — echoes reference */}
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
                                const cx = gridX + gridLeftW + ci * cellW + 6;
                                const cw = cellW - 12;
                                return (
                                    <g key={ci}>
                                        <rect x={cx} y={y} width={cw} height={cellH} rx="12" fill={cell.fill} />
                                        <MatrixIcon
                                            x={cx + cw / 2 - 32}
                                            y={y + cellH / 2 - 15}
                                            kind={cell.icon}
                                            color={cell.icon === "check" ? "#059669" : "#4338ca"}
                                            size={12}
                                        />
                                        <text x={cx + cw / 2 + 2} y={y + cellH / 2 + 4} textAnchor="middle" fontFamily={ILL.font} fontSize="12" fontWeight="800" fill={cell.textFill}>
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