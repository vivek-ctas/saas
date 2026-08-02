import { SVGProps } from "react";


/* ------------------------------------------------------------------ */
/* SellerHeroMockup – SellerSnap-inspired product table dashboard      */
/* Light, airy, with KPI row over a "listings" table behind it         */
/* ------------------------------------------------------------------ */
export const SellerHeroMockup = (props: SVGProps<SVGSVGElement>) => {
    const skeletonRowsAbove = [165, 195];
    const skeletonRowsBelow = [360, 390, 420, 450];

    const kpis = [
        { x: 365, label: "PRODUCTS", value: "12.5K", delta: "+320", icon: "bag" as const },
        { x: 445, label: "LISTINGS", value: "8.9K", delta: "+185", icon: "target" as const },
        { x: 525, label: "CATALOGS", value: "420", delta: "+24", icon: "dollar" as const },
        { x: 605, label: "PUBLISHED", value: "98%", delta: "+6%", icon: "chart" as const },
    ];

    const features = [
        { label: "AI Catalog", desc: "Smart product management", icon: "trend" as const },
        { label: "Bulk Import", desc: "Upload products in minutes", icon: "pulse" as const },
        { label: "Marketplace Ready", desc: "Amazon & Shopify", icon: "target" as const },
        { label: "AI Optimization", desc: "Better listing quality", icon: "shield" as const },
    ];

    const featureX = [40, 250, 450, 650];

    // Shared palette - CTAS Brand colors (Navy primary, Accent Blue secondary)
    const indigo = "hsl(211 65% 21%)";       // CTAS Navy (tabs, underline, product accent, icons)
    const indigoDark = "hsl(211 65% 21%)";    // CTAS Navy (active tab text)
    const indigoIcon = "hsl(199 54% 50%)";    // CTAS Accent Blue (KPI + feature icon stroke)
    const indigoSoft = "hsl(211 65% 95%)";    // light navy backgrounds
    const green = "hsl(150 70% 40%)";         // positive delta text
    const greenDot = "hsl(150 70% 45%)";      // in-stock dot
    const greenBg = "hsl(150 70% 92%)";       // in-stock pill bg
    const greenText = "hsl(150 70% 30%)";     // in-stock text
    const slate900 = "#0f172a";
    const slate500 = "#64748b";
    const slate400 = "#94a3b8";
    const border = "#E2E8F0";

    return (
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <linearGradient id="shm-accent" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="hsl(199 54% 50%)" />
                    <stop offset="100%" stopColor="hsl(211 65% 21%)" />
                </linearGradient>
                <linearGradient id="shm-shine" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <clipPath id="shm-card-clip">
                    <rect
                        x="45"
                        y="180"
                        width="750"
                        height="165"
                        rx="16"
                    />
                </clipPath>
            </defs>
            {/* Back browser frame – the "listings table" */}
            <g>
                <rect x="20" y="20" width="720" height="470" rx="20" fill="#FFFFFF" stroke={border} strokeWidth="1.25" />
                {/* top bar */}
                <circle cx="64" cy="64" r="5.5" fill="#ef4444" />
                <circle cx="80" cy="64" r="5.5" fill="#f59e0b" />
                <circle cx="96" cy="64" r="5.5" fill="#10b981" />
                <rect x="120" y="56" width="140" height="16" rx="8" fill={indigoSoft} />
                <text x="190" y="68" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill={indigoDark}>SellerBuz · Listings</text>
                {/* tabs */}
                <text x="290" y="68" fontFamily="Inter,system-ui" fontSize="12" fontWeight={600} fill={indigoDark}>Overview</text>
                <text x="360" y="68" fontFamily="Inter,system-ui" fontSize="12" fill={slate500}>Listings</text>
                <text x="420" y="68" fontFamily="Inter,system-ui" fontSize="12" fill={slate500}>Settings</text>
                <rect x="284" y="76" width="56" height="2" rx="1" fill={indigo} />
                {/* status pill */}
                <rect x="620" y="50" width="75" height="24" rx="11" fill={greenBg} />
                <circle cx="630" cy="61" r="4" fill={greenDot} />
                <text x="685" y="65" textAnchor="end" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill={greenText}>In stock</text>

                {/* Filter chips with icons */}
                <rect x="64" y="100" width="112" height="24" rx="12" fill="hsl(220 20% 96%)" />
                <g transform="translate(78,106)" stroke={slate500} strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="1" width="10" height="9" rx="1.5" />
                    <line x1="0" y1="4" x2="10" y2="4" />
                    <line x1="2.5" y1="0" x2="2.5" y2="2" />
                    <line x1="7.5" y1="0" x2="7.5" y2="2" />
                </g>
                <text x="94" y="116" fontFamily="Inter,system-ui" fontSize="11" fill={slate500}>This month ▾</text>

                <rect x="188" y="100" width="132" height="24" rx="12" fill="hsl(220 20% 96%)" />
                <g transform="translate(202,116)" stroke={slate500} strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0 0 L4 -5 L7 -2 L11 -8" />
                    <path d="M7 -8 L11 -8 L11 -4" />
                </g>
                <text x="218" y="116" fontFamily="Inter,system-ui" fontSize="11" fill={slate500}>Compared to ▾</text>

                {/* Skeleton rows with left avatar dots */}
                {[...skeletonRowsAbove, ...skeletonRowsBelow].map((y, i) => (
                    <g key={y} opacity={0.55 - (i % 4) * 0.06}>
                        <circle cx="76" cy={y + 7} r="4.5" fill="hsl(220 20% 88%)" />
                        <rect x="100" y={y} width="604" height="14" rx="7" fill={i % 2 ? "hsl(220 20% 97%)" : "hsl(220 20% 94%)"} />
                    </g>
                ))}
            </g>

            {/* Floating product KPI card – the hero element */}
            <g>
                {/* <animateTransform attributeName="transform" type="translate" values="0 0; 0 -1; 0 0" dur="6s" repeatCount="indefinite" /> */}
                <rect x="45" y="180" width="750" height="165" rx="16" fill="#FFFFFF" stroke={border} />

                {/* Product thumb */}
                <rect x="75" y="230" width="70" height="70" rx="12" fill={indigoSoft} />
                <circle cx="110" cy="265" r="22" fill="hsl(211 71% 60%)" />
                <circle cx="110" cy="265" r="14" fill="hsl(211 71% 80%)" />
                <text x="75" y="318" fontFamily="Inter,system-ui" fontSize="10" fill={slate400}>SKU: 8632010</text>

                {/* Column headers */}
                <text x="80" y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">PRODUCT</text>
                <rect x="78" y="215" width="55" height="2" rx="1" fill={indigo} />
                <text x="150" y="260" fontFamily="Inter,system-ui" fontSize="17" fontWeight={700} fill={slate900}>Wireless Speaker</text>
                <rect x="155" y="272" width="100" height="18" rx="8" fill={indigoSoft} />
                <text x="214" y="285" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill={indigoDark}>AI Optimized</text>

                {/* Platform pills */}
                <text x="300" y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">PLATFORM</text>
                <rect x="300" y="215" width="58" height="2" rx="1" fill={indigo} />
                <rect x="300" y="234" width="56" height="24" rx="6" fill="#0f172a" />
                <text x="328" y="249" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill="white">amazon</text>
                <rect x="300" y="268" width="56" height="24" rx="6" fill="hsl(158 100% 25%)" />
                <text x="328" y="283" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill="white">shopify</text>

                {/* KPI columns with icons */}
                {kpis.map((k) => (
                    <g key={k.label}>
                        <circle cx={k.x + 32} cy="246" r="16" fill={indigoSoft} />
                        <g transform={`translate(${k.x + 32},246)`} stroke={indigoIcon} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
                            {k.icon === "bag" && (
                                <>
                                    <path d="M-5 -6 a5 5 0 0 1 10 0" />
                                    <rect x="-7" y="-6" width="14" height="12" rx="2" />
                                </>
                            )}
                            {k.icon === "target" && (
                                <>
                                    <circle cx="0" cy="0" r="7" />
                                    <circle cx="0" cy="0" r="3" />
                                    <circle cx="0" cy="0" r="0.8" fill={indigoIcon} />
                                </>
                            )}
                            {k.icon === "dollar" && (
                                <>
                                    <circle cx="0" cy="0" r="7" />
                                    <text x="0" y="3.2" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="8.5" fontWeight={800} fill={indigoIcon} stroke="none">$</text>
                                </>
                            )}
                            {k.icon === "chart" && (
                                <g fill={indigoIcon} stroke="none">
                                    <rect x="-6" y="-1" width="3" height="6" rx="0.6" />
                                    <rect x="-1" y="-4" width="3" height="9" rx="0.6" />
                                    <rect x="4" y="-7" width="3" height="12" rx="0.6" />
                                </g>
                            )}
                        </g>
                        <text x={k.x + 10} y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">{k.label}</text>
                        <text x={k.x + 15} y="288" fontFamily="Inter,system-ui" fontSize="18" fontWeight={800} fill={slate900}>{k.value}</text>
                        <text x={k.x + 15} y="308" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill={green}>▲ {k.delta}</text>
                    </g>
                ))}

                {/* Validation column */}
                <circle cx="710" cy="246" r="16" fill={indigoSoft} />
                <g transform="translate(710,246)" stroke={indigoIcon} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="0" cy="0" r="7" fill="none" />
                    <path d="M0 0 L0 -7 A7 7 0 0 1 6.06 -3.5 Z" fill={indigoIcon} stroke="none" />
                </g>
                <text x="685" y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">VALIDATED</text>
                <text x="690" y="288" fontFamily="Inter,system-ui" fontSize="18" fontWeight={800} fill="url(#shm-accent)">98.2%</text>
                <text x="690" y="308" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill={green}>▲ +2.1%</text>

                {/* Subtle pulse ring on validation pass */}
                <circle cx="168" cy="280" r="3" fill={indigo}>
                    <animate attributeName="r" values="3;7;3" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite" />
                </circle>

                {/* Continuous diagonal shine sweep */}
                <g clipPath="url(#shm-card-clip)">
                    <g transform="rotate(-20 420 270)">
                        <rect x="-320" y="140" width="140" height="260" fill="url(#shm-shine)" style={{ mixBlendMode: "screen" }}>
                            <animateTransform attributeName="transform" type="translate" values="0 0; 1150 0; 1150 0" keyTimes="0; 0.55; 1" dur="4.2s" repeatCount="indefinite" />
                        </rect>
                    </g>
                </g>
            </g>

            {/* Sparkles */}
            <g fill="#ffffff" stroke="hsl(211 71% 70%)" strokeWidth={0.6}>
                <path d="M540 150 q4 14 18 18 q-14 4 -18 18 q-4 -14 -18 -18 q14 -4 18 -18 z">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
                </path>
                <path d="M612 178 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
                </path>
                <path d="M92 66 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
                </path>
            </g>

            {/* Feature row */}
            <g>
                {features.map((f, i) => {
                    const x = featureX[i];
                    const cy = 545;
                    const iconCx = x - 15;
                    const textX = x + 8;
                    return (
                        <g key={f.label}>
                            <circle cx={iconCx} cy={cy} r="20" fill={indigoSoft} />
                            <g transform={`translate(${iconCx},${cy}) scale(1.25)`} stroke={indigoIcon} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                {f.icon === "trend" && (
                                    <>
                                        <path d="M-6 4 L-1.5 -1.5 L1.5 1.5 L6.5 -5" />
                                        <path d="M2.5 -5.5 L6.5 -5 L6 -1" />
                                    </>
                                )}
                                {f.icon === "pulse" && (
                                    <path d="M-8 0 H-4 L-1.5 -5.5 L1.5 6 L4 -3 L6 0 H8" />
                                )}
                                {f.icon === "target" && (
                                    <>
                                        <circle cx="0" cy="0" r="7" />
                                        <circle cx="0" cy="0" r="3" />
                                        <circle cx="0" cy="0" r="0.8" fill={indigoIcon} />
                                    </>
                                )}
                                {f.icon === "shield" && (
                                    <>
                                        <path d="M0 -8 L7 -5 V1 C7 6 3.5 8.5 0 10 C-3.5 8.5 -7 6 -7 1 V-5 Z" />
                                        <path d="M-3.5 0 L-0.5 3 L4 -3" />
                                    </>
                                )}
                            </g>
                            <text x={textX} y={cy - 8} fontFamily="Inter,system-ui" fontSize="14" fontWeight={800} fill={slate900}>{f.label}</text>
                            <text x={textX} y={cy + 10} fontFamily="Inter,system-ui" fontSize="11.5" fill={slate500}>{f.desc}</text>
                        </g>
                    );
                })}
            </g>
        </svg>
    );
};

/* ------------------------------------------------------------------ */
/* Sync Queue   */
/* ------------------------------------------------------------------ */

export const SyncEngineDiagram = (props: SVGProps<SVGSVGElement>) => {

    const blue = "#13355A";
    const blueSoft = "#E8F4FA";
    const blueBorder = "#9ECBE0";
    const blueText = "#13355A";

    const green = "#10B981";
    const greenSoft = "#ECFDF5";
    const greenBorder = "#A7F3D0";
    const greenText = "#059669";

    const slate900 = "#0F172A";
    const slateGray = "#8A94A6";
    const cardBorder = "#E7E9F3";

    const topCard = { x: 130, y: 24, w: 260, h: 210, rx: 20 };
    const leftCard = { x: -100, y: 300, w: 190, h: 150, rx: 18 };
    const rightCard = { x: 420, y: 300, w: 190, h: 150, rx: 18 };

    const centerX = topCard.x + topCard.w / 2; // 260
    const core = { x: centerX, y: 410 };

    return (
        <svg viewBox="0 0 720 520" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <filter id="se-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="10" />
                    <feOffset dy="10" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.10" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="se-shadow-sm" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="5" />
                    <feOffset dy="4" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>

            <g transform="translate(152, 0) scale(0.8)">
                {/* ================= TOP CARD: AMAZON ================= */}
                <g filter="url(#se-shadow)">
                    <rect x={topCard.x} y={topCard.y} width={topCard.w} height={topCard.h} rx={topCard.rx} fill="#ffffff" stroke={cardBorder} />
                </g>

                {/* amazon logo tile */}
                <image href="/logos/amazon-color-svgrepo-com.svg" x={topCard.x + 26} y={topCard.y + 26} width="52" height="52" />

                {/* title */}
                <text x={topCard.x + 100} y={topCard.y + 46} fontFamily="Inter,system-ui" fontSize="25" fontWeight={800} fill={slate900}>
                    Amazon
                </text>

                {/* connected badge */}
                <rect x={topCard.x + 100} y={topCard.y + 60} width="110" height="26" rx="12" fill={greenSoft} stroke={greenBorder} />
                <circle cx={topCard.x + 115} cy={topCard.y + 72} r="6" fill={green} />
                <text x={topCard.x + 125} y={topCard.y + 76} fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill={greenText}>
                    Connected
                </text>

                {/* divider */}
                <line x1={topCard.x} y1={topCard.y + 100} x2={topCard.x + topCard.w} y2={topCard.y + 100} stroke="#EEF0F6" strokeWidth={2.4} />

                {/* stock stat */}
                <text x={centerX} y={topCard.y + 130} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={600} fill={slateGray}>
                    Stock
                </text>
                <text x={centerX} y={topCard.y + 165} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="30" fontWeight={800} fill={blueText}>
                    12,480
                </text>
                <text x={centerX} y={topCard.y + 188} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={600} fill={slateGray}>
                    SKUs
                </text>

                {/* ================= CONNECTOR: TOP -> CORE ================= */}
                <line x1={centerX} y1={topCard.y + topCard.h} x2={centerX} y2={core.y - 95} stroke={blue} strokeWidth={1.6} strokeDasharray="5 5" opacity={0.6}>
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
                </line>
                <circle cx={centerX} cy={topCard.y + topCard.h} r="4" fill={blue} />
                <circle cx={centerX} cy={core.y - 95} r="4" fill={blue} />

                {/* ================= CONNECTOR: LEFT CARD -> CORE ================= */}
                <line x1={leftCard.x + leftCard.w} y1={leftCard.y + leftCard.h / 2} x2={core.x - 95} y2={core.y} stroke={blue} strokeWidth={1.6} strokeDasharray="5 5" opacity={0.6}>
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
                </line>
                <circle cx={leftCard.x + leftCard.w + 3} cy={leftCard.y + leftCard.h / 2} r="4" fill={blue} />
                <circle cx={core.x - 95} cy={core.y} r="4" fill={blue} />

                {/* ================= CONNECTOR: RIGHT CARD -> CORE ================= */}
                <line x1={rightCard.x} y1={rightCard.y + rightCard.h / 2} x2={core.x + 95} y2={core.y} stroke={blue} strokeWidth={1.6} strokeDasharray="5 5" opacity={0.6}>
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
                </line>
                <circle cx={rightCard.x - 3} cy={rightCard.y + rightCard.h / 2} r="4" fill={blue} />
                <circle cx={core.x + 95} cy={core.y} r="4" fill={blue} />

                {/* ================= SYNC ENGINE CORE ================= */}
                <circle cx={core.x} cy={core.y} r="90" fill="none" stroke={blueBorder} strokeWidth={2.2} strokeDasharray="3 6" opacity={0.5}>
                    <animateTransform attributeName="transform" type="rotate" from={`0 ${core.x} ${core.y}`} to={`360 ${core.x} ${core.y}`} dur="40s" repeatCount="indefinite" />
                </circle>
                <circle cx={core.x} cy={core.y} r="105" fill="none" stroke={blueBorder} strokeWidth={2.2} strokeDasharray="3 6" opacity={0.5}>
                    <animateTransform attributeName="transform" type="rotate" from={`360 ${core.x} ${core.y}`} to={`0 ${core.x} ${core.y}`} dur="40s" repeatCount="indefinite" />
                </circle>
                <circle cx={core.x} cy={core.y} r="120" fill="none" stroke={blueBorder} strokeWidth={2.2} strokeDasharray="3 6" opacity={0.5}>
                    <animateTransform attributeName="transform" type="rotate" from={`0 ${core.x} ${core.y}`} to={`360 ${core.x} ${core.y}`} dur="40s" repeatCount="indefinite" />
                </circle>


                <g filter="url(#se-shadow)">
                    <circle cx={core.x} cy={core.y} r="80" fill={blueSoft} />
                    <circle cx={core.x} cy={core.y} r="68" fill="#ffffff" stroke={blue} strokeWidth={2.4} />
                </g>

                {/* sync icon */}
                <g transform={`translate(${core.x},${core.y - 32})`}>
                    <path d="M-13 -1 A13 13 0 0 1 9 -11" fill="none" stroke={blue} strokeWidth={3} strokeLinecap="round" />
                    <polygon points="9,-11 3,-12 7.5,-18" fill={blue} />
                    <path d="M13 1 A13 13 0 0 1 -9 11" fill="none" stroke={blue} strokeWidth={3} strokeLinecap="round" />
                    <polygon points="-9,11 -3,12 -7.5,18" fill={blue} />
                </g>

                <text x={core.x} y={core.y + 18} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="18" fontWeight={800} fill={blueText}>
                    Sync Engine
                </text>
                <text x={core.x} y={core.y + 35} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={600} fill={slateGray}>
                    Real-time sync
                </text>

                {/* latency pill */}
                <rect x={core.x - 46} y={core.y + 50} width="92" height="22" rx="11" fill={blueSoft} stroke={blueBorder} />
                <text x={core.x} y={core.y + 65} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13.5" fontWeight={700} fill={blueText}>
                    &lt; 2s latency
                </text>

                {/* ================= LEFT CARD: INVENTORY ================= */}
                <g filter="url(#se-shadow)">
                    <rect x={leftCard.x} y={leftCard.y} width={leftCard.w} height={leftCard.h} rx={leftCard.rx} fill="#ffffff" stroke={cardBorder} />
                </g>
                <rect x={leftCard.x + 20} y={leftCard.y + 20} width="44" height="44" rx="10" fill={blueSoft} />
                <path
                    d={`M${leftCard.x + 42} ${leftCard.y + 34} l12 7 v14 l-12 7 -12 -7 v-14 z M${leftCard.x + 42} ${leftCard.y + 34} l12 7 -12 7 -12 -7 z M${leftCard.x + 42} ${leftCard.y + 41} v17`}
                    fill="none" stroke={blue} strokeWidth={1.6} strokeLinejoin="round"
                />
                <text x={leftCard.x + 20} y={leftCard.y + 96} fontFamily="Inter,system-ui" fontSize="16" fontWeight={800} fill={slate900}>
                    Your Inventory
                </text>
                <text x={leftCard.x + 20} y={leftCard.y + 118} fontFamily="Inter,system-ui" fontSize="13" fontWeight={500} fill={slateGray}>
                    Single source
                </text>
                <text x={leftCard.x + 20} y={leftCard.y + 134} fontFamily="Inter,system-ui" fontSize="13" fontWeight={500} fill={slateGray}>
                    of truth
                </text>

                {/* ================= RIGHT CARD: LISTING & PRICING ================= */}
                <g filter="url(#se-shadow)">
                    <rect x={rightCard.x} y={rightCard.y} width={rightCard.w} height={rightCard.h} rx={rightCard.rx} fill="#ffffff" stroke={cardBorder} />
                </g>
                <rect x={rightCard.x + 20} y={rightCard.y + 20} width="44" height="44" rx="10" fill={blueSoft} />
                <path
                    d={`M${rightCard.x + 34} ${rightCard.y + 42} l6 6 12 -13`}
                    fill="none" stroke={blue} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                />
                <text x={rightCard.x + 20} y={rightCard.y + 96} fontFamily="Inter,system-ui" fontSize="16" fontWeight={800} fill={slate900}>
                    Listing &amp; Pricing
                </text>
                <text x={rightCard.x + 20} y={rightCard.y + 118} fontFamily="Inter,system-ui" fontSize="13" fontWeight={500} fill={slateGray}>
                    Consistent across
                </text>
                <text x={rightCard.x + 20} y={rightCard.y + 134} fontFamily="Inter,system-ui" fontSize="13" fontWeight={500} fill={slateGray}>
                    Amazon
                </text>

                {/* ================= CONNECTOR: CORE -> BOTTOM PILL ================= */}
                <line x1={core.x} y1={core.y + 98} x2={core.x} y2={580} stroke={blue} strokeWidth={1.6} strokeDasharray="5 5" opacity={0.6}>
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
                </line>
                <circle cx={core.x} cy={core.y + 98} r="4" fill={blue} />
                <circle cx={core.x} cy={578} r="4" fill={blue} />

                {/* ================= BOTTOM PILL ================= */}
                <g filter="url(#se-shadow-sm)">
                    <rect x={core.x - 180} y={580} width="365" height="45" rx="21" fill="#ffffff" stroke={blueBorder} />
                </g>
                <circle cx={core.x - 140} cy={602} r="14" fill={blue} />
                <path
                    d={`M${core.x - 145} ${602} l3,3 l6,-6`}
                    fill="none" stroke="#ffffff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
                />
                <text x={core.x + 25} y={608} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill={blueText}>
                    One update. Everywhere. Every time.
                </text>
            </g>
        </svg>
    );
};


/* ------------------------------------------------------------------ */
/* SyncIllustration – Channel-flow diagram (Listings <-> SellerBuz <-> Orders / Shipping)
   Animated connecting lines with flowing data dots                      */
/* ------------------------------------------------------------------ */
export const SyncIllustration = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 560 420" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="hd-core" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3C9AC4" />
                <stop offset="100%" stopColor="#13355A" />
            </linearGradient>
            <filter id="hd-sh" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" /><feOffset dy="3" />
                <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
                <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
        </defs>
        {/* channel cards left */}
        {[
            { y: 190, name: "Amazon", logo: "/logos/amazon-color-svgrepo-com.svg" },
        ].map((c) => (
            <g key={c.name} filter="url(#hd-sh)">
                <rect x="28" y={c.y} width="150" height="50" rx="10" fill="white" stroke="#e2e8f0" />
                <image href={c.logo} x="40" y={c.y + 12} width="20" height="20" preserveAspectRatio="xMidYMid meet" />
                <text x="68" y={c.y + 22} fontFamily="Inter" fontSize="12" fontWeight="700" fill="#0f172a">{c.name}</text>
                <text x="68" y={c.y + 37} fontFamily="Inter" fontSize="9.5" fill="#64748b">Synced · live</text>
                <circle cx="163" cy={c.y + 25} r="3.5" fill="#10b981" />
            </g>
        ))}

        {/* core engine */}
        <g filter="url(#hd-sh)">
            <rect x="210" y="140" width="150" height="150" rx="18" fill="url(#hd-core)" />
            <circle cx="285" cy="200" r="26" fill="#fff" opacity="0.14" />
            <circle cx="285" cy="200" r="16" fill="#fff" />
            <path d="M279 200l4 4 8-8" stroke="#13355A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="285" y="256" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#D0E8F0">Catalog · Listings · Inventory</text>
            <text x="285" y="240" textAnchor="middle" fontFamily="Inter" fontSize="13" fontWeight="800" fill="#fff">SellerBuz Core</text>
            <text x="285" y="272" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#D0E8F0">Real-time · 2-way sync</text>
        </g>

        {/* right output cards */}
        {[
            { y: 70, title: "Inventory", val: "12,480 SKUs" },
            { y: 145, title: "Listings", val: "AI Optimized" },
            { y: 220, title: "Orders", val: "241 / Today" },
            { y: 295, title: "Catalog", val: "AI Generated" },
        ].map((c) => (
            <g key={c.title} filter="url(#hd-sh)">
                <rect x="392" y={c.y} width="140" height="50" rx="10" fill="white" stroke="#e2e8f0" />
                <rect x="392" y={c.y} width="3" height="50" rx="1.5" fill="#13355A" />
                <text x="405" y={c.y + 20} fontFamily="Inter" fontSize="10" fontWeight="700" fill="#64748b" letterSpacing="1">
                    {c.title.toUpperCase()}
                </text>
                <text x="405" y={c.y + 38} fontFamily="Inter" fontSize="12" fontWeight="700" fill="#0f172a">{c.val}</text>
            </g>
        ))}

        {/* ── left arrows (channel → core) with flowing dots ── */}
        {[215].map((y, i) => (
            <g key={"l" + y}>
                <line x1="170" y1={y} x2="208" y2="215" stroke="#7EC8E3" strokeWidth="1.4" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
                </line>
                <circle r="3" fill="#7EC8E3" opacity="0.8">
                    <animateMotion dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite"
                        path={`M180 ${y} L208 215`} />
                </circle>
            </g>
        ))}

        {/* ── right arrows (core → output) with flowing dots ── */}
        {[95, 170, 245, 320].map((y, i) => (
            <g key={"r" + y}>
                <line x1="360" y1="215" x2="390" y2={y} stroke="#3C9AC4" strokeWidth="1.4" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
                </line>
                <circle r="3" fill="#3C9AC4" opacity="0.8">
                    <animateMotion dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite"
                        path={`M360 215 L390 ${y}`} />
                </circle>
            </g>
        ))}
    </svg>
);

export const InventoryDashboardSVG = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 1040 540" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} >
            <defs>
                <clipPath id="cardClip">
                    <rect x="205" y="215" width="600" height="305" rx="18" />
                </clipPath>
                <clipPath id="logoClip">
                    <circle cx="0" cy="0" r="40" />
                </clipPath>
                <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="#13355A" />
                </marker>
                <symbol id="star4" viewBox="0 0 24 24">
                    <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill="#13355A" />
                </symbol>
            </defs>

            {/* marketplace logo nodes with shimmer halos */}
            {[
                { tx: 505, stroke: "#13355A", logo: "logos/amazon-color-svgrepo-com.svg", label: "Amazon" },
            ].map((n, i) => (
                <g key={n.label} transform={`translate(${n.tx},55)`}>
                    <circle r="48" fill="none" stroke={n.stroke} strokeWidth="1" opacity="0.18">
                        <animate attributeName="r" values="44;54;44" dur={`${2.6 + i * 0.3}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.12;0.3;0.12" dur={`${2.6 + i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                    <circle r="42" fill="#FFFFFF" stroke={n.stroke} strokeWidth="2" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                    <image href={n.logo} x="-24" y="-22" width="50" height="50" clipPath="url(#logoClip)" />
                    <text x="0" y="66" textAnchor="middle" fontSize="16" fontWeight="700" fill={n.stroke}>{n.label}</text>
                </g>
            ))}

            {/* animated connection lines from logos to horizontal rail */}
            {[
                { x: 505, c: "#13355A" },

            ].map((l, i) => (
                <g key={"vl" + l.x}>
                    <line x1={l.x} y1={125} x2={l.x} y2={150} stroke={l.c} strokeWidth="2" strokeDasharray="4 5">
                        <animate attributeName="stroke-dashoffset" values="0;-18" dur={`${1.4 + i * 0.2}s`} repeatCount="indefinite" />
                    </line>
                    <circle r="2.5" fill={l.c} opacity="0.7">
                        <animateMotion dur={`${1.6 + i * 0.15}s`} repeatCount="indefinite" path={`M${l.x} 125 L${l.x} 150`} />
                    </circle>
                </g>
            ))}

            <line x1={505} y1={150} x2={505} y2={160} stroke="#13355A" strokeWidth="2.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" values="0;-18" dur="1.8s" repeatCount="indefinite" />
            </line>

            {/* center sync icon with pulse rings */}
            <g transform="translate(505,180)">
                <circle r="20" fill="#FFFFFF" stroke="#13355A" strokeWidth="2.5" />
                <circle r="10" fill="#FFFFFF" stroke="#13355A" strokeWidth="2.5" />
            </g>
            <line x1="505" y1="202" x2="505" y2="212" stroke="#13355A" strokeWidth="1.5" markerEnd="url(#arrowHead)">
                <animate attributeName="stroke-dasharray" values="0 20;20 0" dur="1.6s" repeatCount="indefinite" />
            </line>


            <rect x="20" y="275" width="170" height="215" rx="16" fill="#FFFFFF" stroke="#13355A" strokeWidth="2" />
            <text x="35" y="305" fontSize="14.5" fontWeight="700" fill="#1E1B4B">Your Inventory</text>


            <g transform="translate(70,335)">
                <path d="M0,45 L40,15 L80,45 L80,95 L0,95 Z" fill="#EEF0F6" stroke="#3C9AC4" strokeWidth="2.5" strokeLinejoin="round" />
                <rect x="30" y="65" width="20" height="30" fill="#EEF0F6" stroke="#3C9AC4" />
                <rect x="10" y="55" width="14" height="14" rx="2" fill="#EEF0F6" stroke="#3C9AC4" strokeWidth="1.5" />
                <rect x="56" y="55" width="14" height="14" rx="2" fill="#EEF0F6" stroke="#3C9AC4" strokeWidth="1.5" />
            </g>
            <g fill="#EEF0F6" stroke="#3C9AC4" strokeWidth="1.5">
                <rect x="115" y="405" width="26" height="26" rx="3" />
                <rect x="140" y="418" width="20" height="20" rx="3" />
            </g>


            <rect x="35" y="440" width="140" height="8" rx="4" fill="#EEF0F6" />
            <rect x="35" y="456" width="110" height="8" rx="4" fill="#EEF0F6" />
            <rect x="35" y="472" width="85" height="8" rx="4" fill="#EEF0F6" />


            <line x1="190" y1="382" x2="203" y2="382" stroke="#13355A" strokeWidth="1.5" markerEnd="url(#arrowHead)">
                <animate attributeName="stroke-dasharray" values="0 15;15 0" dur="1.8s" repeatCount="indefinite" />
            </line>
            <circle r="2" fill="#3C9AC4" opacity="0.8">
                <animateMotion dur="2s" repeatCount="indefinite" path="M190 382 L203 382" />
            </circle>


            <rect x="205" y="215" width="625" height="305" rx="18" fill="#FFFFFF" stroke="#13355A" strokeWidth="2" />

            <g clipPath="url(#cardClip)">

                <rect x="205" y="215" width="60" height="305" fill="#13355A" />


                <path d="M235,246 l10,6 l0,12 l-10,6 l-10,-6 l0,-12 Z" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" transform="translate(0,0)" />

                <g fill="none" stroke="#FFFFFF" strokeWidth="2">
                    <rect x="221" y="293" width="12" height="12" rx="2" />
                    <rect x="237" y="293" width="12" height="12" rx="2" />
                    <rect x="221" y="309" width="12" height="12" rx="2" />
                    <rect x="237" y="309" width="12" height="12" rx="2" />
                </g>

                <path d="M225,352 l10,-10 l10,10 M235,342 l0,24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                <path d="M235,388 a9,9 0 1 1 0,18 a9,9 0 1 1 0,-18 M235,384 l0,4 M235,410 l0,4" fill="none" stroke="#FFFFFF" strokeWidth="2" />

                <circle cx="235" cy="432" r="9" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M235,423 l0,-3 M235,441 l0,3 M226,432 l-3,0 M247,432 l3,0" stroke="#FFFFFF" strokeWidth="2" />
            </g>


            <text x="280" y="240" fontSize="17.5" fontWeight="700" fill="#1E1B4B">Inventory &amp; Pricing Dashboard</text>


            <g fontSize="10.5" fill="#6B7280">

                <rect x="280" y="255" width="112" height="56" rx="10" fill="#FAFAFF" stroke="#EDE9FE" strokeWidth="1.5" />
                <path d="M300,265 l6,3.5 l0,7 l-6,3.5 l-6,-3.5 l0,-7 Z" fill="none" stroke="#13355A" strokeWidth="1.3" />
                <text x="310" y="275" fontWeight="650">Total Products</text>
                <text x="310" y="300" fontSize="16" fontWeight="800" fill="#1E1B4B">8,642</text>


                <rect x="405" y="255" width="112" height="56" rx="10" fill="#FAFAFF" stroke="#EDE9FE" strokeWidth="1.5" />
                <path d="M425,265 h12 v10 h-12 Z 425,265 l6,-4 l6,4" fill="none" stroke="#13355A" strokeWidth="1.3" strokeLinejoin="round" />
                <text x="445" y="275" fontWeight="650">Total Stock</text>
                <text x="445" y="300" fontSize="16" fontWeight="800" fill="#1E1B4B">45,278</text>


                <rect x="530" y="255" width="112" height="56" rx="10" fill="#FAFAFF" stroke="#EDE9FE" strokeWidth="1.5" />
                <text x="550" y="275" textAnchor="middle" fontSize="11" fontWeight="900" fill="#13355A">$</text>
                <text x="560" y="275" fontWeight="650">Average Price</text>
                <text x="560" y="300" fontSize="16" fontWeight="800" fill="#1E1B4B">$24.68</text>


                <rect x="655" y="255" width="112" height="56" rx="10" fill="#FAFAFF" stroke="#EDE9FE" strokeWidth="1.5" />
                <path d="M670,275 l3,-4 l3,3 l4,-6" fill="none" stroke="#13355A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <text x="685" y="275" fontWeight="650">Active Listings</text>
                <text x="685" y="300" fontSize="16" fontWeight="800" fill="#1E1B4B">7,842</text>
            </g>


            <rect x="280" y="325" width="500" height="168" rx="12" fill="#FAFAFF" stroke="#EDE9FE" strokeWidth="1.5" />
            <text x="650" y="350" fontSize="15.5" fontWeight="700" fill="#1E1B4B">Stock Overview</text>
            <g stroke="#1E1B4B" strokeWidth="1">
                <line x1="325" y1="370" x2="700" y2="370" />
                <line x1="325" y1="400" x2="700" y2="400" />
                <line x1="325" y1="430" x2="700" y2="430" />
                <line x1="325" y1="460" x2="700" y2="460" />
            </g>
            <polyline points="340,440 390,455 440,420 490,450 540,400 590,452 640,375 690,432"
                fill="none" stroke="#13355A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1000" strokeDashoffset="0">
                <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="6.4s" fill="freeze" />
            </polyline>
            <g fill="#13355A">
                <circle cx="340" cy="440" r="3.5" /><circle cx="390" cy="455" r="3.5" /><circle cx="440" cy="420" r="3.5" />
                <circle cx="490" cy="450" r="3.5" /><circle cx="540" cy="400" r="3.5" /><circle cx="590" cy="452" r="3.5" />
                <circle cx="640" cy="375" r="3.5" /><circle cx="690" cy="432" r="3.5" />
            </g>
            <g fontSize="12" fill="#1E1B4B">
                <text x="340" y="480" textAnchor="middle">May 12</text>
                <text x="390" y="480" textAnchor="middle">May 20</text>
                <text x="440" y="480" textAnchor="middle">May 24</text>
                <text x="490" y="480" textAnchor="middle">May 28</text>
                <text x="540" y="480" textAnchor="middle">Jun 01</text>
                <text x="590" y="480" textAnchor="middle">May 16</text>
                <text x="640" y="480" textAnchor="middle">Jun 05</text>
                <text x="690" y="480" textAnchor="middle">Jun 09</text>
            </g>
            <g fontSize="12" fill="#1E1B4B">
                <text x="315" y="460" textAnchor="end">0</text>
                <text x="315" y="430" textAnchor="end">5K</text>
                <text x="315" y="400" textAnchor="end">10K</text>
                <text x="315" y="370" textAnchor="end">15K</text>
            </g>

            <line x1="830" y1="382" x2="845" y2="382" stroke="#13355A" strokeWidth="1.5" markerEnd="url(#arrowHead)">
                <animate attributeName="stroke-dasharray" values="0 18;18 0" dur="1.6s" repeatCount="indefinite" />
            </line>
            <circle r="2" fill="#3C9AC4" opacity="0.8">
                <animateMotion dur="1.8s" repeatCount="indefinite" path="M830 382 L845 382" />
            </circle>


            <g>
                <rect x="845" y="290" width="150" height="195" rx="16" fill="#FFFFFF" stroke="#13355A" strokeWidth="2.5" />
                <circle cx="920" cy="308" r="6" fill="#FFFFFF" stroke="#13355A" strokeWidth="2.5" />

                <circle cx="920" cy="345" r="20" fill="#13355A">
                    <animate attributeName="r" values="20;22;20" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="920" y="352" textAnchor="middle" fontSize="19" fontWeight="800" fill="#FFFFFF">$</text>

                <text x="920" y="390" textAnchor="middle" fontSize="11.5" fill="#6B7280" fontWeight="600">Price Updated</text>
                <text x="920" y="415" textAnchor="middle" fontSize="21" fontWeight="800" fill="#13355A">$24.68</text>

                <rect x="890" y="435" width="60" height="8" rx="4" fill="#EEF0F6" />
            </g>


            <use href="#star4" x="995" y="270" width="26" height="26" />
            <use href="#star4" x="1008" y="330" width="18" height="18" />
            <use href="#star4" x="985" y="470" width="20" height="20" />
            <circle cx="1005" cy="300" r="9" fill="none" stroke="#13355A" strokeWidth="2" />

        </svg>
    )

}


export const ListingWorkflowIllustration = (props: SVGProps<SVGSVGElement>) => {
    const blue = "#3C9AC4";
    const blueLight = "#E8F4FA";
    const blue50 = "#E8F4FA";
    const emerald = "#10B981";
    const emeraldLight = "#D1FAE5";
    const amber = "#F59E0B";
    const amberLight = "#FEF3C7";
    const rose = "#F43F5E";
    const roseLight = "#FFE4E6";
    const slate900 = "#0F172A";
    const slate700 = "#334155";
    const slate600 = "#475569";
    const slate500 = "#64748B";
    const slate400 = "#94A3B8";
    const slate300 = "#CBD5E1";
    const slate200 = "#E2E8F0";
    const slate50 = "#F8FAFC";
    const white = "#FFFFFF";

    return (
        <svg viewBox="0 0 980 990" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            {/* eyebrow */}
            <text x="40" y="10" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill={slate400} letterSpacing="1.5">
                ONE FILE, ONE PERFECT LISTING
            </text>

            <defs>
                <linearGradient id="lw-ai-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3C9AC4" />
                    <stop offset="100%" stopColor="#13355A" />
                </linearGradient>
                <linearGradient id="lw-success-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <marker id="lw-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0 0L10 5L0 10z" fill={blue} />
                </marker>
                <marker id="lw-arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0 0L10 5L0 10z" fill={blue} />
                </marker>
                <marker id="lw-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0 0L10 5L0 10z" fill={slate500} />
                </marker>
                <marker id="lw-arrow-emerald" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0 0L10 5L0 10z" fill={emerald} />
                </marker>
            </defs>

            {/* central spine — the "happy path" lifeline */}
            <line x1="170" y1="70" x2="170" y2="930" stroke={slate300} strokeWidth="2" strokeDasharray="3 5" opacity={0.7}>
                <animate attributeName="stroke-dashoffset" values="0;-16" dur="2s" repeatCount="indefinite" />
            </line>

            {/* flowing dot on spine */}
            <circle r="4" fill={blue}>
                <animateMotion dur="6s" repeatCount="indefinite" path="M170 60 L170 930" />
            </circle>

            {/* ---------- 1. UPLOAD FILE ---------- */}
            <g>
                <circle cx="170" cy="90" r="22" fill={white} stroke={blue} strokeWidth="2.5" />
                <circle cx="170" cy="90" r="22" fill={blueLight} opacity={0.6} />
                <text x="170" y="95" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={800} fill={blue}>1</text>

                <rect x="210" y="60" width="280" height="70" rx="12" fill={white} stroke={slate200} />
                <rect x="222" y="76" width="38" height="38" rx="9" fill={blueLight} />
                <g transform="translate(229,86)" stroke={blue} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 14h18M12 4v10M8 8l4-4 4 4" />
                </g>
                <text x="270" y="86" fontFamily="Inter,system-ui" fontSize="15" fontWeight={700} fill={slate900}>Upload catalog</text>
                <text x="270" y="106" fontFamily="Inter,system-ui" fontSize="12.5" fontWeight={500} fill={slate500}>CSV · XLSX · feed URL</text>
                <text x="270" y="122" fontFamily="Inter,system-ui" fontSize="11.5" fontWeight={600} fill={blue}>1,248 rows detected</text>
            </g>

            {/* ---------- 2. VALIDATE ---------- */}
            <g>
                <circle cx="170" cy="190" r="22" fill={white} stroke={blue} strokeWidth="2.5" />
                <text x="170" y="195" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={800} fill={blue}>2</text>

                <rect x="210" y="160" width="280" height="70" rx="12" fill={white} stroke={slate200} />
                <rect x="222" y="176" width="38" height="38" rx="9" fill={emeraldLight} />
                <g transform="translate(230,183)" stroke={emerald} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12l5 5 11-12" />
                </g>
                <text x="270" y="186" fontFamily="Inter,system-ui" fontSize="15" fontWeight={700} fill={slate900}>Validate schema</text>
                <text x="270" y="206" fontFamily="Inter,system-ui" fontSize="12.5" fontWeight={500} fill={slate500}>Field types · required attrs · ranges</text>
                <g transform="translate(270,215)">
                    <rect width="58" height="15" rx="3.5" fill={emeraldLight} />
                    <text x="29" y="10.5" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={700} fill="#047857">1,201 ✓</text>
                    <rect x="62" width="50" height="15" rx="3.5" fill={amberLight} />
                    <text x="87" y="10.5" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={700} fill="#B45309">47 ⚠</text>
                </g>
            </g>

            {/* ---------- 3. TEST LISTING ---------- */}
            <g>
                <circle cx="170" cy="290" r="22" fill={white} stroke={blue} strokeWidth="2.5" />
                <text x="170" y="295" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={800} fill={blue}>3</text>

                <rect x="210" y="260" width="280" height="70" rx="12" fill={white} stroke={slate200} />
                <rect x="222" y="276" width="38" height="38" rx="9" fill={blueLight} />
                <g transform="translate(229,282)" stroke={blue} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 18V8a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3z" />
                    <path d="M9 12h6M9 9h6M9 15h4" />
                </g>
                <text x="270" y="286" fontFamily="Inter,system-ui" fontSize="15" fontWeight={700} fill={slate900}>Push to test listing</text>
                <text x="270" y="306" fontFamily="Inter,system-ui" fontSize="12.5" fontWeight={500} fill={slate500}>Real marketplace validation endpoint</text>
                <text x="270" y="322" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={600} fill={slate700}>test_listing_id · pending review</text>
            </g>

            {/* ---------- 4. GRAB ERROR ---------- */}
            <g>
                <circle cx="170" cy="390" r="22" fill={white} stroke={rose} strokeWidth="2.5" />
                <text x="170" y="395" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={800} fill={rose}>!</text>

                <rect x="210" y="360" width="280" height="70" rx="12" fill={white} stroke={roseLight} />
                <rect x="222" y="376" width="38" height="38" rx="9" fill={roseLight} />
                <g transform="translate(230,383)" stroke={rose} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 2L22 20H0L11 2z" />
                    <path d="M11 9v5M11 17v.5" />
                </g>
                <text x="270" y="383" fontFamily="Inter,system-ui" fontSize="15" fontWeight={700} fill={slate900}>Grab error</text>
                <text x="270" y="403" fontFamily="Inter,system-ui" fontSize="12.5" fontWeight={500} fill={slate500}>22 rows rejected by marketplace</text>
                <text x="270" y="419" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={600} fill={rose}>missing "material" attr · 12 rows</text>
            </g>

            {/* ---------- AI RETRY LOOP (right side) ---------- */}
            <g>
                {/* big card */}
                <rect x="560" y="120" width="410" height="380" rx="18" fill="url(#lw-ai-grad)" opacity={0.06} />
                <rect x="560" y="120" width="410" height="380" rx="18" fill={white} stroke={blue} strokeWidth="1.5" />

                {/* header pill */}
                <rect x="565" y="130" width="148" height="26" rx="13" fill={blueLight} />
                <circle cx="580" cy="142" r="5" fill={blue} />
                <text x="588" y="146" fontFamily="Inter,system-ui" fontSize="12" fontWeight={800} fill={blue} letterSpacing="0.5">AI RETRY ENGINE</text>

                <text x="575" y="185" fontFamily="Inter,system-ui" fontSize="18" fontWeight={800} fill={slate900}>
                    Loops until it passes
                </text>
                <text x="575" y="205" fontFamily="Inter,system-ui" fontSize="12" fontWeight={500} fill={slate500}>
                    Reads the marketplace error each pass — never the same fix twice.
                </text>

                {/* attempt counter ring */}
                <g transform="translate(925,155)">
                    <circle r="26" fill={white} stroke={blueLight} strokeWidth="4" />
                    <circle r="26" fill="none" stroke={blue} strokeWidth="4" strokeDasharray="110 138" strokeLinecap="round" transform="rotate(-90)" />
                    <text textAnchor="middle" y="2" fontFamily="Inter,system-ui" fontSize="13" fontWeight={800} fill={blue}>7/10</text>
                    <text textAnchor="middle" y="14" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate500}>atp</text>
                </g>

                {/* retry steps */}
                {[
                    { n: 1, label: "Read error", desc: '"material" is required', color: slate500 },
                    { n: 2, label: "Add missing attribute", desc: 'injects material = "cotton 100%"', color: emerald },
                    { n: 3, label: "Remove rejected field", desc: 'strips "custom_label_3"', color: rose },
                    { n: 4, label: "Rewrite non-conforming", desc: 'normalizes "Color→Colour"', color: amber },
                ].map((s, i) => {
                    const yPos = 290 + i * 62;
                    return (
                        <g key={i} transform={`translate(575,${yPos - 50})`}>
                            <rect width="368" height="50" rx="10" fill={slate50} stroke={slate200} />
                            <circle cx="22" cy="24" r="15" fill={s.color} />
                            <text x="22" y="30" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="15" fontWeight={800} fill={white}>{s.n}</text>
                            <text x="46" y="20" fontFamily="Inter,system-ui" fontSize="15" fontWeight={700} fill={slate900}>{s.label}</text>
                            <text x="46" y="40" fontFamily="Inter,system-ui" fontSize="12" fontWeight={500} fill={slate500}>{s.desc}</text>
                            <text x="350" y="30" textAnchor="end" fontFamily="Inter,system-ui" fontSize="18" fontWeight={700} fill={s.color}>✓</text>
                        </g>
                    );
                })}

                {/* return-to-seller branch */}
                <g transform="translate(556,510)">
                    <rect width="420" height="45" rx="10" fill={amberLight} stroke="#FCD34D" />
                    <g transform="translate(14,12)" stroke="#B45309" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10l-3-3M3 8l3 3" />
                        <path d="M3 8h10" />
                    </g>
                    <text x="42" y="17" fontFamily="Inter,system-ui" fontSize="15" fontWeight={800} fill="#B45309">If still failing after 10×</text>
                    <text x="42" y="35" fontFamily="Inter,system-ui" fontSize="13" fontWeight={500} fill="#92400E">Return row to seller with exact reason — never a silent drop.</text>
                </g>

                {/* arrow from "grab error" into AI engine */}
                <line x1="490" y1="390" x2="560" y2="390" stroke={blue} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#lw-arrow-purple)">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
                </line>
                <text x="525" y="382" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill={blue}>FEED ERRORS</text>

                {/* arrow from AI engine back to spine (success) */}
                <path d="M 560 240 Q 510 240 510 300 Q 510 380 400 375" fill="none" stroke={emerald} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#lw-arrow-emerald)">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
                </path>
                <rect x="425" y="320" width="62" height="18" rx="9" fill={emeraldLight} />
                <text x="460" y="332" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="9.5" fontWeight={800} fill="#047857">PASSES ✓</text>
            </g>

            {/* ---------- 5. SEO REGENERATION ---------- */}
            <g>
                <circle cx="170" cy="490" r="22" fill={white} stroke={blue} strokeWidth="2.5" />
                <text x="170" y="495" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={800} fill={blue}>5</text>

                <rect x="210" y="460" width="280" height="70" rx="12" fill={white} stroke={blueLight} />
                <rect x="222" y="478" width="38" height="38" rx="9" fill={blueLight} />
                <g transform="translate(229,486)" stroke={blue} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 3l8 4-8 4-8-4 8-4z" />
                    <path d="M3 11l8 4 8-4M3 15l8 4 8-4" />
                </g>
                <text x="270" y="486" fontFamily="Inter,system-ui" fontSize="15" fontWeight={700} fill={slate900}>Regenerate SEO</text>
                <text x="270" y="506" fontFamily="Inter,system-ui" fontSize="12.5" fontWeight={500} fill={slate500}>Title & description from catalog data</text>
                <text x="270" y="522" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={600} fill={blue}>trained on your full catalog</text>
            </g>

            {/* ---------- 6. DRAFT WITH DIFF MARKS ---------- */}
            <g>
                <circle cx="170" cy="610" r="22" fill={white} stroke={blue} strokeWidth="2.5" />
                <text x="170" y="615" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={800} fill={blue}>6</text>

                {/* diff preview card */}
                <rect x="210" y="560" width="730" height="130" rx="14" fill={white} stroke={slate200} />
                <rect x="210" y="560" width="730" height="30" rx="14" fill={blueLight} />
                <circle cx="226" cy="574" r="3.5" fill={blue} />
                <circle cx="238" cy="574" r="3.5" fill={blue} />
                <circle cx="250" cy="574" r="3.5" fill={blue} />
                <text x="278" y="581" fontFamily="Inter,system-ui" fontSize="15" fontWeight={700} fill={slate700}>draft.html · diff view</text>

                {/* column labels */}
                <text x="226" y="608" fontFamily="Inter,system-ui" fontSize="11" fontWeight={700} fill={slate500} letterSpacing="0.8">YOUR UPLOAD</text>
                <text x="586" y="608" fontFamily="Inter,system-ui" fontSize="11" fontWeight={700} fill={blue} letterSpacing="0.8">AI REWRITE</text>

                {/* left column - original */}
                <g fontFamily="Inter,system-ui" fontSize="12.5">
                    <rect x="220" y="616" width="350" height="16" rx="3" fill={roseLight} opacity={0.55} />
                    <text x="226" y="627" fontWeight={500} fill={slate700}>Blue Cotton T-Shirt XL</text>
                    <text x="555" y="627" textAnchor="end" fontWeight={700} fill={rose}>−</text>

                    <text x="226" y="648" fontWeight={500} fill={slate700}>comfortable tshirt for daily use</text>

                    <text x="226" y="658" fontFamily="Inter,system-ui" fontSize="10" fontWeight={500} fill={slate400}>. . . 2 more lines</text>
                </g>

                {/* divider */}
                <line x1="580" y1="590" x2="580" y2="690" stroke={blue} strokeDasharray="2 3" />

                {/* right column - AI rewrite with diff marks */}
                <g fontFamily="Inter,system-ui" fontSize="12.5">
                    <rect x="590" y="616" width="350" height="14" rx="3" fill={emeraldLight} opacity={0.6} />
                    <text x="596" y="627" fontWeight={600} fill={slate900}>Men's Premium Cotton T-Shirt — XL, Heather Blue</text>
                    <text x="925" y="627" textAnchor="end" fontWeight={700} fill={emerald}>+</text>

                    <text x="596" y="648" fontWeight={500} fill={slate700}>
                        <tspan fill={slate500} textDecoration="lineThrough">comfortable tshirt</tspan>
                        <tspan x="596" y="665"> breathable everyday tee, 100% combed cotton</tspan>
                    </text>
                </g>

                {/* diff legend */}
                <g transform="translate(250,670)">
                    <rect width="15" height="15" rx="2" fill={emeraldLight} stroke={emerald} />
                    <text x="18" y="10" fontFamily="Inter,system-ui" fontSize="13" fontWeight={600} fill={slate600}>added</text>
                    <rect x="70" width="15" height="15" rx="2" fill={roseLight} stroke={rose} />
                    <text x="90" y="10" fontFamily="Inter,system-ui" fontSize="13" fontWeight={600} fill={slate600}>removed</text>
                    <rect x="150" width="15" height="15" rx="2" fill={amberLight} stroke={amber} />
                    <text x="170" y="10" fontFamily="Inter,system-ui" fontSize="13" fontWeight={600} fill={slate600}>rewritten</text>
                </g>
            </g>

            {/* ---------- 7. SELLER VERIFIES ---------- */}
            <g>
                <circle cx="170" cy="730" r="22" fill={white} stroke={blue} strokeWidth="2.5" />
                <text x="170" y="735" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={800} fill={blue}>7</text>

                <rect x="210" y="700" width="280" height="70" rx="12" fill={white} stroke={slate200} />
                <rect x="222" y="716" width="38" height="38" rx="9" fill={blueLight} />
                <g transform="translate(229,723)" stroke={blue} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2l-7 7-3-3" />
                    <circle cx="11" cy="11" r="9" />
                </g>
                <text x="270" y="726" fontFamily="Inter,system-ui" fontSize="15" fontWeight={700} fill={slate900}>Seller verifies</text>
                <text x="270" y="746" fontFamily="Inter,system-ui" fontSize="12.5" fontWeight={500} fill={slate500}>Approve the diff in one click</text>
                <text x="270" y="760" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={600} fill={blue}>or tweak inline before finalizing</text>
            </g>

            {/* ---------- 8. WHITELABEL PUBLISH ---------- */}
            <g>
                <circle cx="170" cy="830" r="22" fill="url(#lw-success-grad)" />
                <g transform="translate(160,820)" stroke="white" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 10l4 4 8-9" />
                </g>

                <rect x="210" y="800" width="280" height="70" rx="12" fill="url(#lw-success-grad)" />
                <rect x="222" y="816" width="38" height="38" rx="9" fill={white} fillOpacity={0.2} />
                <g transform="translate(228,823)" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18l4-4 4 3 6-7 4 3" />
                    <path d="M3 4h18v16H3z" />
                </g>
                <text x="270" y="826" fontFamily="Inter,system-ui" fontSize="15" fontWeight={800} fill={white}>Whitelabel published</text>
                <text x="270" y="846" fontFamily="Inter,system-ui" fontSize="12.5" fontWeight={500} fill={white} opacity={0.85}>Live on marketplace · your brand</text>
                <text x="270" y="860" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={700} fill="white">sku_cts-2291 · synced in 0.4s</text>
            </g>

            {/* ---------- spine arrow flow ---------- */}
            {[120, 220, 320, 420, 520, 640, 760].map((yPos, i) => (
                <circle key={i} cx="170" cy={yPos} r="2" fill={blue} opacity={0.6}>
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="1.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                </circle>
            ))}

            {/* ---------- bottom metric pills ---------- */}
            <g transform="translate(40,890)">
                <rect width="200" height="80" rx="14" fill={white} stroke={slate200} />
                <text x="20" y="30" fontFamily="Inter,system-ui" fontSize="22" fontWeight={800} fill={slate900}>10×</text>
                <text x="20" y="50" fontFamily="Inter,system-ui" fontSize="12" fontWeight={500} fill={slate500}>AI retry ceiling</text>
                <text x="20" y="70" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={700} fill={blue}>before seller handoff</text>
            </g>

            <g transform="translate(260,890)">
                <rect width="200" height="80" rx="14" fill="url(#lw-success-grad)" />
                <text x="20" y="30" fontFamily="Inter,system-ui" fontSize="22" fontWeight={800} fill={white}>100%</text>
                <text x="20" y="50" fontFamily="Inter,system-ui" fontSize="12" fontWeight={500} fill={white} opacity={0.85}>Diff-verified drafts</text>
                <text x="20" y="70" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={700} fill={white}>seller sees every change</text>
            </g>

            <g transform="translate(480,890)">
                <rect width="200" height="80" rx="14" fill={white} stroke={slate200} />
                <text x="20" y="30" fontFamily="Inter,system-ui" fontSize="20" fontWeight={800} fill={slate900}>0</text>
                <text x="20" y="50" fontFamily="Inter,system-ui" fontSize="12" fontWeight={500} fill={slate500}>Silent listing drops</text>
                <text x="20" y="70" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={700} fill={rose}>fails always have a reason</text>
            </g>

            <g transform="translate(700,890)">
                <rect width="240" height="80" rx="14" fill={blue50} stroke={blueLight} />
                <text x="20" y="30" fontFamily="Inter,system-ui" fontSize="20" fontWeight={800} fill={blue}>Whitelabel</text>
                <text x="20" y="50" fontFamily="Inter,system-ui" fontSize="12" fontWeight={500} fill={slate600}>Listings go live under your brand</text>
                <text x="20" y="70" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={700} fill={blue}>no marketplace co-branding</text>
            </g>
        </svg>
    );
};


type FeatureIcon = "box" | "tag" | "cart" | "chart";

type FeatureItem = {
    icon: FeatureIcon;
    color: string;
    bg: string;
    title: string;
    desc: string;
};

const defaultFeatures: FeatureItem[] = [
    { icon: "box", color: "#3C9AC4", bg: "#eff6ff", title: "Inventory Sync", desc: "Real-time updates" },
    { icon: "tag", color: "#13355A", bg: "#dbeafe", title: "AI Catalog", desc: "Smart product management" },
    { icon: "cart", color: "#ef4444", bg: "#fee2e2", title: "Order Management", desc: "Centralized orders" },
    { icon: "chart", color: "#10b981", bg: "#d1fae5", title: "Listing Management", desc: "Bulk & AI optimized" },
];

function FeatureGlyph({ icon, color }: { icon: FeatureIcon; color: string }) {
    return (
        <g stroke={color} strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round">
            {icon === "box" && (
                <>
                    <path d="M-9 -3 L0 -8 L9 -3 V6 L0 11 L-9 6 Z" />
                    <path d="M-9 -3 L0 2 L9 -3 M0 2 V11" />
                </>
            )}
            {icon === "tag" && (
                <>
                    <path d="M-8 -8 H2 L9 -1 L-1 9 L-8 2 Z" />
                    <circle cx="-4.5" cy="-4.5" r="1.6" fill={color} stroke="none" />
                </>
            )}
            {icon === "cart" && (
                <>
                    <path d="M-10 -7 h3 l3 13 h11" />
                    <path d="M-3 -2 h16 l-2 7 h-12 z" />
                    <circle cx="2" cy="9" r="1.7" fill={color} stroke="none" />
                    <circle cx="10" cy="9" r="1.7" fill={color} stroke="none" />
                </>
            )}
            {icon === "chart" && (
                <g fill={color} stroke="none">
                    <rect x="-8" y="0" width="4" height="9" rx="1" />
                    <rect x="-1.5" y="-6" width="4" height="15" rx="1" />
                    <rect x="5" y="-3" width="4" height="12" rx="1" />
                </g>
            )}
        </g>
    );
}

export const EcosystemHubMockup = ({
    sourceLabel = "Marketplace",
    sourceStatus = "Connected",
    hubTitle = "SellerBuz Core",
    hubSubtitle = "Sync Engine",
    trustTitle = "Secure • Reliable • Scalable",
    trustSubtitle = "Built for serious sellers",
    features = defaultFeatures,
    ...props
}: {
    sourceLabel?: string;
    sourceStatus?: string;
    hubTitle?: string;
    hubSubtitle?: string;
    trustTitle?: string;
    trustSubtitle?: string;
    features?: FeatureItem[];
} & SVGProps<SVGSVGElement>) => {
    const blue = "#3C9AC4";
    const blueDeep = "#13355A";
    const ink = "#0f172a";
    const muted = "#64748b";
    const border = "#e6e9f5";

    const hub = { cx: 165, cy: 360, r: 92 };
    const cardX = 375, cardW = 250, cardH = 84, cardGap = 22;
    const cardYs = features.map((_, i) => 148 + i * (cardH + cardGap));

    return (
        <svg viewBox="0 0 720 480" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <linearGradient id="eh-hub" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor={blue} />
                    <stop offset="100%" stopColor={blueDeep} />
                </linearGradient>
                <filter id="eh-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="8" />
                    <feOffset dy="6" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <clipPath id="ehLogoClip">
                    <circle cx="0" cy="0" r="34" />
                </clipPath>
            </defs>

            <g transform="translate(145, 0) scale(0.72)">
                {/* Source node – Amazon logo (InventoryDashboardSVG pattern) */}
                <circle cx={hub.cx} cy="85" r="48" fill="none" stroke={blue} strokeWidth="1" opacity="0.18">
                    <animate attributeName="r" values="44;54;44" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.12;0.3;0.12" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <g filter="url(#eh-shadow)">
                    <circle cx={hub.cx} cy="85" r="42" fill="#FFFFFF" stroke={blue} strokeWidth="2" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" values="0;-16" dur="3s" repeatCount="indefinite" />
                    </circle>
                </g>
                <g transform={`translate(${hub.cx},85)`}>
                    <image href="/logos/amazon-color-svgrepo-com.svg" x="-24" y="-22" width="50" height="50" clipPath="url(#ehLogoClip)" />
                </g>
                {/* Connected badge */}
                <circle cx={hub.cx + 46} cy="35" r="8" fill="#10b981" stroke="white" strokeWidth={3}>
                    <animate attributeName="r" values="8;9.5;8" dur="2.2s" repeatCount="indefinite" />
                </circle>

                <text x={hub.cx} y="168" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="17" fontWeight={800} fill={ink}>
                    {sourceLabel}
                </text>
                <rect x={hub.cx - 52} y="182" width="104" height="26" rx="13" fill="#ecfdf5" stroke="#a7f3d0" />
                <circle cx={hub.cx - 34} cy="195" r="3.5" fill="#10b981" />
                <text x={hub.cx + 6} y="199" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={700} fill="#047857">
                    {sourceStatus}
                </text>

                {/* Line: source → hub (animated) */}
                <line x1={hub.cx} y1="208" x2={hub.cx} y2={hub.cy - hub.r} stroke={blueDeep} strokeWidth={2} strokeDasharray="6 6" strokeLinecap="round" opacity={0.55}>
                    <animate attributeName="stroke-dashoffset" values="0;-24" dur="1.8s" repeatCount="indefinite" />
                </line>
                <circle r="3" fill={blueDeep} opacity={0.7}>
                    <animateMotion dur="1.8s" repeatCount="indefinite"
                        path={`M${hub.cx} 208 L${hub.cx} ${hub.cy - hub.r}`} />
                </circle>

                {/* Hub glow rings (subtle pulse) */}
                <circle cx={hub.cx} cy={hub.cy} r={hub.r + 46} fill={blue} opacity={0.05}>
                    <animate attributeName="opacity" values="0.05;0.08;0.05" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx={hub.cx} cy={hub.cy} r={hub.r + 24} fill={blue} opacity={0.09}>
                    <animate attributeName="opacity" values="0.09;0.13;0.09" dur="4s" repeatCount="indefinite" />
                </circle>
                <g filter="url(#eh-shadow)">
                    <circle cx={hub.cx} cy={hub.cy} r={hub.r} fill="url(#eh-hub)" />
                </g>

                {/* Refresh icon */}
                <g transform={`translate(${hub.cx},${hub.cy - 34})`}>
                    <g stroke="white" strokeWidth={2.6} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M-13 -1 A13 13 0 0 1 9.5 -11" />
                        <polygon points="9.5,-11 3,-12 8,-18" fill="white" />
                        <path d="M13 1 A13 13 0 0 1 -9.5 11" />
                        <polygon points="-9.5,11 -3,12 -8,18" fill="white" />
                    </g>
                </g>
                <text x={hub.cx} y={hub.cy + 8} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="18" fontWeight={800} fill="white">
                    {hubTitle}
                </text>
                <text x={hub.cx} y={hub.cy + 28} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11.5" fill="#D0E8F0">
                    {hubSubtitle}
                </text>

                {/* Line: hub → trust badge (animated) */}
                <line x1={hub.cx} y1={hub.cy + hub.r} x2={hub.cx} y2="516" stroke={blueDeep} strokeWidth={2} strokeDasharray="6 6" strokeLinecap="round" opacity={0.55}>
                    <animate attributeName="stroke-dashoffset" values="0;-24" dur="1.8s" repeatCount="indefinite" />
                </line>
                <circle r="3" fill={blueDeep} opacity={0.7}>
                    <animateMotion dur="1.8s" repeatCount="indefinite"
                        path={`M${hub.cx} ${hub.cy + hub.r} L${hub.cx} 516`} />
                </circle>

                {/* Shield node */}
                <g filter="url(#eh-shadow)">
                    <circle cx={hub.cx} cy="546" r="28" fill="white" stroke={border} />
                </g>
                <g transform={`translate(${hub.cx},${546})`} stroke="#10b981" strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0 -10 L9 -6.5 V2 C9 8 4.5 11.5 0 13.5 C-4.5 11.5 -9 8 -9 2 V-6.5 Z" />
                    <path d="M-4.5 0.5 L-1 4 L5 -3" />
                </g>

                {/* Trust card */}
                <g filter="url(#eh-shadow)">
                    <rect x={hub.cx - 148} y="580" width="296" height="76" rx="18" fill="white" stroke={border} />
                </g>
                <text x={hub.cx} y="614" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14.5" fontWeight={800} fill={ink}>
                    {trustTitle}
                </text>
                <text x={hub.cx} y="636" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11.5" fill={muted}>
                    {trustSubtitle}
                </text>

                {/* Feature cards + curved connectors (animated) */}
                {features.map((f, i) => {
                    const y = cardYs[i];
                    const cy = y + cardH / 2;
                    const hx = hub.cx + hub.r;
                    const hy = hub.cy + (i - (features.length - 1) / 2) * 10;
                    const midX = (hx + cardX) / 2;
                    const curveD = `M ${hx} ${hy} C ${midX} ${hy}, ${midX} ${cy}, ${cardX} ${cy}`;
                    return (
                        <g key={f.title}>
                            <path
                                d={curveD}
                                fill="none"
                                stroke={blueDeep}
                                strokeWidth={2}
                                strokeDasharray="6 6"
                                strokeLinecap="round"
                                opacity={0.55}
                            >
                                <animate attributeName="stroke-dashoffset" values="0;-24" dur={`${1.6 + i * 0.15}s`} repeatCount="indefinite" />
                            </path>
                            <circle cx={hx} cy={hy} r="4.5" fill={blueDeep}>
                                <animate attributeName="r" values="4.5;6;4.5" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle cx={cardX} cy={cy} r="4.5" fill={blueDeep}>
                                <animate attributeName="r" values="4.5;6;4.5" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle r="3" fill={blue} opacity={0.7}>
                                <animateMotion dur={`${2 + i * 0.2}s`} repeatCount="indefinite"
                                    path={curveD} />
                            </circle>

                            <g filter="url(#eh-shadow)">
                                <rect x={cardX} y={y} width={cardW} height={cardH} rx="16" fill="white" stroke={border} />
                            </g>
                            <circle cx={cardX + 40} cy={cy} r="24" fill={f.bg} />
                            <g transform={`translate(${cardX + 40},${cy})`}>
                                <FeatureGlyph icon={f.icon} color={f.color} />
                            </g>
                            <text x={cardX + 78} y={cy - 4} fontFamily="Inter,system-ui" fontSize="14.5" fontWeight={800} fill={ink}>
                                {f.title}
                            </text>
                            <text x={cardX + 78} y={cy + 16} fontFamily="Inter,system-ui" fontSize="11.5" fill={muted}>
                                {f.desc}
                            </text>
                        </g>
                    );
                })}
            </g>
        </svg>
    );
};