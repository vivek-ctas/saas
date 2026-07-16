import { ILL, IllDefs, IllHeader, IllCard, IllIconBadge, IconKind } from "./commanIllustrastrations";
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