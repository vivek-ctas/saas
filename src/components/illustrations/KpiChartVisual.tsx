import { ILL, IllDefs, IllHeader, IllCard, IllIconBadge, IconKind } from "./commanIllustrastrations";
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
    /** Raw (non-normalized) values — scaled internally against yMax. */
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
                            <text x={chartX - 10} y={yToPx(t) + 3.5} textAnchor="end" fontFamily={ILL.font} fontSize="10" fontWeight="700" fill={ILL.muted}>
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