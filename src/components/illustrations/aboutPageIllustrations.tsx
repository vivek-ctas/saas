import { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* AboutJourneyMockup - founder story / milestones panel               */
/* ------------------------------------------------------------------ */
export const AboutJourneyMockup = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 720 520" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="aj-bg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#eff6ff" />
            </linearGradient>
            <linearGradient id="aj-card" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(226 71% 95%)" />
                <stop offset="100%" stopColor="hsl(226 71% 90%)" />
            </linearGradient>
            <linearGradient id="aj-accent" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(226 71% 50%)" /><stop offset="100%" stopColor="hsl(226 71% 40%)" />
            </linearGradient>
            <linearGradient id="aj-shine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <filter id="aj-shadow" x="-10%" y="-10%" width="120%" height="130%">
                <feGaussianBlur stdDeviation="12" /><feOffset dy="8" />
                <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
                <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <clipPath id="aj-card-clip">
                <rect x="40" y="50" width="320" height="420" rx="20" />
            </clipPath>
        </defs>
        <rect x="10" y="10" width="700" height="500" rx="22" fill="url(#aj-bg)" stroke="#e2e8f0" />

        {/* Founder card */}
        <g filter="url(#aj-shadow)">
            <rect x="40" y="50" width="320" height="420" rx="20" fill="url(#aj-card)" />
            <rect
                x="50"
                y="70"
                width="95"
                height="22"
                rx="11"
                fill="hsl(226 71% 50%)"
                opacity="0.15"
            />
            <text x="100" y="86" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight="800" fill="hsl(226 71% 40%)" letterSpacing="1.5">2019 → 2026</text>

            {/* Founders avatars */}
            <g transform="translate(60, 120)">
                <circle cx="28" cy="28" r="28" fill="hsl(226 71% 50%)" />
                <text x="28" y="33" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight="800" fill="white">RS</text>
                <circle cx="76" cy="28" r="28" fill="hsl(226 71% 45%)" />
                <text x="76" y="33" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight="800" fill="white">AP</text>
            </g>

            <text x="60" y="220" fontFamily="Inter,system-ui" fontSize="20" fontWeight="800" fill="#0f172a">Two engineers,</text>
            <text x="60" y="246" fontFamily="Inter,system-ui" fontSize="20" fontWeight="800" fill="#0f172a">one mission.</text>
            <line x1="60" y1="266" x2="160" y2="266" stroke="hsl(226 71% 50%)" strokeWidth="3" />
            <text x="60" y="296" fontFamily="Inter,system-ui" fontSize="11" fill="#475569">We started SellerBuz in an Ahmedabad</text>
            <text x="60" y="312" fontFamily="Inter,system-ui" fontSize="11" fill="#475569">garage to end the spreadsheet hell</text>
            <text x="60" y="328" fontFamily="Inter,system-ui" fontSize="11" fill="#475569">of multichannel sellers.</text>

            {/* Stat strip */}
            <g transform="translate(60, 360)">
                {[
                    { l: "Sellers", v: "50K+" },
                    { l: "Countries", v: "150+" },
                    { l: "GMV", v: "$300M" },
                ].map((s, i) => (
                    <g key={i} transform={`translate(${i * 90}, 0)`}>
                        <text x="0" y="0" fontFamily="Inter,system-ui" fontSize="20" fontWeight="800" fill="#0f172a">{s.v}</text>
                        <text x="0" y="18" fontFamily="Inter,system-ui" fontSize="10" fill="#64748b">{s.l}</text>
                    </g>
                ))}
            </g>

            <rect x="60" y="420" width="260" height="32" rx="16" fill="hsl(226 71% 50%)" />
            <text x="190" y="441" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11" fontWeight="800" fill="white">Read the founder story →</text>

            {/* Diagonal shine sweep on founder card */}
            <g clipPath="url(#aj-card-clip)">
                <g transform="rotate(-20 200 260)">
                    <rect x="-60" y="50" width="80" height="420" fill="url(#aj-shine)" style={{ mixBlendMode: "screen" }}>
                        <animateTransform attributeName="transform" type="translate" values="0 0; 600 0; 600 0" keyTimes="0; 0.55; 1" dur="4s" repeatCount="indefinite" />
                    </rect>
                </g>
            </g>
        </g>

        {/* Right milestones */}
        <g>
            <text x="400" y="74" fontFamily="Inter,system-ui" fontSize="11" fontWeight="800" fill="#64748b" letterSpacing="2">MILESTONES</text>
            {[
                { y: 100, year: "2019", t: "Founded in Ahmedabad", c: "hsl(226 71% 50%)" },
                { y: 170, year: "2021", t: "Series A · $12M raised", c: "hsl(226 71% 45%)" },
                { y: 240, year: "2023", t: "Crossed 50 countries", c: "hsl(226 71% 50%)" },
                { y: 310, year: "2024", t: "AI Repricer launched", c: "hsl(226 71% 40%)" },
                { y: 380, year: "2026", t: "100K-seller goal", c: "hsl(226 71% 40%)" },
            ].map((m, i, arr) => (
                <g key={i}>
                    {i < arr.length - 1 && (
                        <line x1="412" y1={m.y + 8} x2="412" y2={arr[i + 1].y - 8} stroke="#e2e8f0" strokeDasharray="2 4" />
                    )}
                    <circle cx="412" cy={m.y} r="10" fill="white" stroke={m.c} strokeWidth="3" />
                    <circle cx="412" cy={m.y} r="4" fill={m.c}>
                        <animate attributeName="r" values="4;5;4" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.7;1" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <g filter="url(#aj-shadow)">
                        <rect x="436" y={m.y - 22} width="240" height="48" rx="14" fill="white" stroke="#e2e8f0" />
                        <text x="448" y={m.y - 6} fontFamily="Inter,system-ui" fontSize="13" fontWeight="800" fill={m.c}>{m.year}</text>
                        <text x="448" y={m.y + 14} fontFamily="Inter,system-ui" fontSize="10" fontWeight="700" fill="#0f172a">{m.t}</text>
                    </g>
                </g>
            ))}
        </g>

        {/* Sparkles */}
        <g fill="white" stroke="hsl(226 71% 70%)" strokeWidth={0.6}>
            <path d="M680 40 q4 14 18 18 q-14 4 -18 18 q-4 -14 -18 -18 q14 -4 18 -18 z">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
            </path>
            <path d="M30 480 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
                <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
            </path>
            <path d="M700 480 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
            </path>
        </g>
    </svg>
);



/* ------------------------------------------------------------------ */
/* NeuralIllustration – ML pipeline (inputs → layers → outputs)        */
/* Styled after the AI Automation Engine reference card                */
/* ------------------------------------------------------------------ */
export const NeuralIllustration = (props: SVGProps<SVGSVGElement>) => {

    const DiagramDefs = () => (
        <defs>
            <linearGradient id="ai-tile" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
        </defs>
    );

    const ICONS: Record<string, JSX.Element> = {
        pieChart: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3.5v8.5h8.5A8.5 8.5 0 1112 3.5z" />
            </g>
        ),
        tag: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.5 3.5H19a1.5 1.5 0 011.5 1.5v6.5a1.5 1.5 0 01-.44 1.06l-8 8a1.5 1.5 0 01-2.12 0l-6.5-6.5a1.5 1.5 0 010-2.12l8-8a1.5 1.5 0 011.06-.44z" />
                <circle cx="16.5" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
            </g>
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
        users: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8.5" r="3" />
                <path d="M3.5 19c0-3 2.5-5.3 5.5-5.3s5.5 2.3 5.5 5.3" />
                <circle cx="17" cy="9" r="2.3" />
                <path d="M15.5 13.9c2.4.3 4 2.3 4 5.1" />
            </g>
        ),
        network: (
            <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="4.5" r="1.6" fill="currentColor" stroke="none" />
                <circle cx="5" cy="10.5" r="1.6" fill="currentColor" stroke="none" />
                <circle cx="19" cy="10.5" r="1.6" fill="currentColor" stroke="none" />
                <circle cx="8" cy="19" r="1.6" fill="currentColor" stroke="none" />
                <circle cx="16" cy="19" r="1.6" fill="currentColor" stroke="none" />
                <path d="M12 4.5L5 10.5M12 4.5l7 6M5 10.5l3 8.5M19 10.5l-3 8.5M8 19h8" />
            </g>
        ),
        brain: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 4.5a3 3 0 00-3 3v.3A3.2 3.2 0 004 10.8a3.3 3.3 0 001.7 5.9 3 3 0 003 3.3h.8V4.5z" />
                <path d="M14.5 4.5a3 3 0 013 3v.3a3.2 3.2 0 012.5 3 3.3 3.3 0 01-1.7 5.9 3 3 0 01-3 3.3h-.8V4.5z" />
                <path d="M9.5 9.5h1.5M9.5 13h1.5M13 9.5h1.5M13 13h1.5" />
            </g>
        ),
        target: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8.5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
            </g>
        ),
        trendUp: (
            <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 16l6-6 4 4 8-9" />
                <path d="M16 6H21V11" />
            </g>
        ),
        barChart: (
            <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
                <path d="M5 19v-6M11 19V6M17 19v-9" />
            </g>
        ),
    };

    const Icon = ({ name, size = 20 }: { name: string; size?: number | string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24">
            {ICONS[name]}
        </svg>
    );

    const INPUTS = [
        { icon: "pieChart", label: ["Marketplace", "Data"] },
        { icon: "tag", label: ["Product", "Pricing"] },
        { icon: "cube", label: ["Inventory", "Levels"] },
        { icon: "users", label: ["Customer", "Behaviour"] },
    ];

    const NODES = [
        { icon: "network", label: ["Feature", "Processing"] },
        { icon: "brain", label: ["ML", "Prediction"] },
        { icon: "target", label: ["Decision", "Engine"] },
    ];

    const OUTPUTS = [
        { icon: "trendUp", label: ["Smart", "Pricing"] },
        { icon: "barChart", label: ["Demand", "Forecast"] },
        { icon: "cube", label: ["Inventory", "Planning"] },
    ];

    const IN_X = 30;
    const IN_W = 170;
    const IN_H = 70;
    const IN_YS = [70, 160, 250, 340];

    const AI_X = 270;
    const AI_W = 140;
    const AI_TOP = 60;
    const AI_H = 400;
    const TILE_YS = [90, 220, 350];
    const TILE_SIZE = 64;

    const OUT_X = 450;
    const OUT_W = 170;
    const OUT_H = 70;
    const OUT_YS = [100, 220, 340];


    const tileCx = AI_X + AI_W / 2;

    return (
        <svg viewBox="0 0 640 540" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <DiagramDefs />
            <rect x="10" y="10" width="620" height="520" rx="20" fill="#FAFAFD" />

            {/* Column labels */}
            <text x={IN_X + IN_W / 2} y="35" textAnchor="middle" fontSize="12" fontWeight="800" fill="#7C3AED" letterSpacing="1.5">
                INPUT LAYER
            </text>
            <text x={tileCx} y="35" textAnchor="middle" fontSize="12" fontWeight="800" fill="#7C3AED" letterSpacing="1.5">
                AI ENGINE
            </text>
            <text x={OUT_X + OUT_W / 2} y="35" textAnchor="middle" fontSize="12" fontWeight="800" fill="#7C3AED" letterSpacing="1.5">
                OUTPUT LAYER
            </text>

            {/* Connections: inputs -> AI nodes (bundle of curves) */}
            {IN_YS.map((iy, i) => {
                const y0 = iy + IN_H / 2;
                return TILE_YS.map((ty, j) => {
                    const y1 = ty + TILE_SIZE / 2;
                    const d = `M${IN_X + IN_W} ${y0} C ${IN_X + IN_W + 90} ${y0}, ${AI_X - 60} ${y1}, ${AI_X - 6} ${y1}`;
                    return (
                        <g key={`in-${i}-${j}`}>
                            <path
                                d={d}
                                fill="none"
                                stroke="#C4B5FD"
                                strokeWidth="1"
                                opacity="0.7"
                                strokeDasharray="4 4"
                            >
                                <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.4 + (i + j) * 0.1}s`} repeatCount="indefinite" />
                            </path>
                            <circle r="2" fill="#7C3AED" opacity={0.6}>
                                <animateMotion dur={`${1.8 + (i + j) * 0.1}s`} repeatCount="indefinite" path={d} />
                            </circle>
                        </g>
                    );
                });
            })}

            {/* dots at input card edges */}
            {IN_YS.map((iy, i) => (
                <circle key={`ind-${i}`} cx={IN_X + IN_W} cy={iy + IN_H / 2} r="4" fill="#7C3AED" />
            ))}
            {/* dots where bundles enter the AI engine */}
            {TILE_YS.map((ty, j) => (
                <circle key={`aid-${j}`} cx={AI_X - 6} cy={ty + TILE_SIZE / 2} r="4" fill="#3B82F6" />
            ))}

            {/* Connections: AI nodes -> outputs */}
            {TILE_YS.map((ty, j) => {
                const y0 = ty + TILE_SIZE / 2;
                const y1 = OUT_YS[j] + OUT_H / 2;
                const startX = AI_X + AI_W + 6;

                const d = `M${startX} ${y0} C ${startX + 20} ${y0}, ${OUT_X - 20} ${y1}, ${OUT_X} ${y1}`;
                return (
                    <g key={`out-${j}`}>
                        <path
                            d={d}
                            fill="none"
                            stroke="#5EEAD4"
                            strokeWidth="1.4"
                            opacity="0.8"
                            strokeDasharray="4 4"
                        >
                            <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.4 + j * 0.15}s`} repeatCount="indefinite" />
                        </path>
                        <circle r="2" fill="#14B8A6" opacity={0.6}>
                            <animateMotion dur={`${1.6 + j * 0.15}s`} repeatCount="indefinite" path={d} />
                        </circle>
                    </g>
                );
            })}
            {TILE_YS.map((ty, j) => (
                <circle key={`aido-${j}`} cx={AI_X + AI_W + 6} cy={ty + TILE_SIZE / 2} r="4" fill="#3B82F6" />
            ))}
            {OUT_YS.map((oy, i) => (
                <circle key={`outd-${i}`} cx={OUT_X} cy={oy + OUT_H / 2} r="4" fill="#14B8A6" />
            ))}

            {/* Input cards */}
            {INPUTS.map((inp, i) => {
                const y = IN_YS[i];
                return (
                    <g key={inp.label.join(" ")}>
                        <rect x={IN_X} y={y} width={IN_W} height={IN_H} rx="14" fill="white" stroke="#ECE9F7" />
                        <circle cx={IN_X + 36} cy={y + IN_H / 2} r="22" fill="#F1EBFC" />
                        <g transform={`translate(${IN_X + 24},${y + IN_H / 2 - 12})`} color="#7C3AED">
                            <Icon name={inp.icon} size="24" />
                        </g>
                        <text x={IN_X + 70} y={y + IN_H / 2 - 2} fontSize="14" fontWeight="700" fill="#0F172A">
                            {inp.label[0]}
                        </text>
                        <text x={IN_X + 70} y={y + IN_H / 2 + 16} fontSize="14" fontWeight="700" fill="#0F172A">
                            {inp.label[1]}
                        </text>
                    </g>
                );
            })}

            {/* AI engine container */}
            <rect x={AI_X} y={AI_TOP} width={AI_W} height={AI_H} rx="20" fill="white" stroke="#E4DBFB" />

            {NODES.map((node, j) => {
                const ty = TILE_YS[j];
                const tx = tileCx - TILE_SIZE / 2;
                return (
                    <g key={node.label.join(" ")}>
                        <rect x={tx} y={ty} width={TILE_SIZE} height={TILE_SIZE} rx="18" fill="url(#ai-tile)" />
                        <g transform={`translate(${tileCx - 16},${ty + TILE_SIZE / 2 - 16})`} color="white">
                            <Icon name={node.icon} size="32" />
                        </g>
                        <text x={tileCx} y={ty + TILE_SIZE + 22} textAnchor="middle" fontSize="13" fontWeight="700" fill="#334155">
                            {node.label[0]}
                        </text>
                        <text x={tileCx} y={ty + TILE_SIZE + 38} textAnchor="middle" fontSize="13" fontWeight="700" fill="#334155">
                            {node.label[1]}
                        </text>
                        {j < NODES.length - 1 && (
                            <g fill="#C4B5FD">
                                <circle cx={tileCx} cy={ty + TILE_SIZE + 52} r="1.6" />
                                <circle cx={tileCx} cy={ty + TILE_SIZE + 60} r="1.6" />
                                <circle cx={tileCx} cy={ty + TILE_SIZE + 68} r="1.6" />
                            </g>
                        )}
                    </g>
                );
            })}

            {/* Output cards */}
            {OUTPUTS.map((out, i) => {
                const y = OUT_YS[i];
                return (
                    <g key={out.label.join(" ")}>
                        <rect x={OUT_X} y={y} width={OUT_W} height={OUT_H} rx="14" fill="white" stroke="#E3F6F0" />
                        <circle cx={OUT_X + 36} cy={y + OUT_H / 2} r="22" fill="#E7FBF3" />
                        <g transform={`translate(${OUT_X + 24},${y + OUT_H / 2 - 12})`} color="#14B8A6">
                            <Icon name={out.icon} size="24" />
                        </g>
                        <text x={OUT_X + 70} y={y + OUT_H / 2 - 2} fontSize="14" fontWeight="700" fill="#0F172A">
                            {out.label[0]}
                        </text>
                        <text x={OUT_X + 70} y={y + OUT_H / 2 + 16} fontSize="14" fontWeight="700" fill="#0F172A">
                            {out.label[1]}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
};
