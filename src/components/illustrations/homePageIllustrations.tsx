import { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* Hero dashboard – kept                                               */
/* ------------------------------------------------------------------ */
export const DashboardMockup = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="dm-bg" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f5f3ff" />
            </linearGradient>
            <linearGradient id="dm-bar" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(226 71% 50%)" />
                <stop offset="100%" stopColor="hsl(280 70% 55%)" />
            </linearGradient>
            <linearGradient id="dm-bar2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(330 81% 60%)" />
                <stop offset="100%" stopColor="hsl(280 70% 55%)" />
            </linearGradient>
        </defs>
        <rect x="20" y="20" width="560" height="380" rx="20" fill="url(#dm-bg)" stroke="hsl(220 15% 88%)" />
        <circle cx="46" cy="46" r="5" fill="#ef4444" />
        <circle cx="62" cy="46" r="5" fill="#f59e0b" />
        <circle cx="78" cy="46" r="5" fill="#10b981" />
        <rect x="120" y="38" width="200" height="16" rx="8" fill="hsl(220 20% 96%)" />
        <rect x="40" y="80" width="120" height="300" rx="12" fill="hsl(226 71% 96%)" />
        <rect x="56" y="100" width="88" height="10" rx="5" fill="hsl(226 71% 50%)" />
        <rect x="56" y="124" width="64" height="8" rx="4" fill="hsl(226 30% 80%)" />
        <rect x="56" y="144" width="80" height="8" rx="4" fill="hsl(226 30% 80%)" />
        <rect x="56" y="164" width="56" height="8" rx="4" fill="hsl(226 30% 80%)" />
        <rect x="56" y="184" width="72" height="8" rx="4" fill="hsl(226 30% 80%)" />
        <g>
            <rect x="180" y="80" width="120" height="70" rx="12" fill="white" stroke="hsl(220 15% 92%)" />
            <rect x="194" y="96" width="40" height="8" rx="4" fill="hsl(220 15% 80%)" />
            <text x="194" y="130" fontFamily="Inter,system-ui" fontWeight="700" fontSize="20" fill="hsl(232 60% 18%)">$48.2k</text>
            <rect x="312" y="80" width="120" height="70" rx="12" fill="white" stroke="hsl(220 15% 92%)" />
            <rect x="326" y="96" width="40" height="8" rx="4" fill="hsl(220 15% 80%)" />
            <text x="326" y="130" fontFamily="Inter,system-ui" fontWeight="700" fontSize="20" fill="hsl(232 60% 18%)">12,840</text>
            <rect x="444" y="80" width="120" height="70" rx="12" fill="white" stroke="hsl(220 15% 92%)" />
            <rect x="458" y="96" width="40" height="8" rx="4" fill="hsl(220 15% 80%)" />
            <text x="458" y="130" fontFamily="Inter,system-ui" fontWeight="700" fontSize="20" fill="hsl(330 81% 50%)">+24%</text>
        </g>
        <rect x="180" y="170" width="384" height="210" rx="14" fill="white" stroke="hsl(220 15% 92%)" />
        <g style={{ transformOrigin: "200px 360px" }}>
            {[[220, 80], [260, 120], [300, 60], [340, 140], [380, 100], [420, 170], [460, 130], [500, 180], [540, 110]].map(([x, h], i) => (
                <rect key={i} x={x} y={360 - h} width="22" height={h} rx="6"
                    fill={i % 2 === 0 ? "url(#dm-bar)" : "url(#dm-bar2)"}>
                    <animate attributeName="height" from="0" to={h} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
                    <animate attributeName="y" from="360" to={360 - h} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
                </rect>
            ))}
        </g>
        <path d="M200 260 Q 240 220, 280 240 T 360 220 T 440 200 T 540 180" stroke="hsl(330 81% 60%)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="600" strokeDashoffset="0">
            <animate attributeName="stroke-dashoffset" from="600" to="0" dur="2.2s" fill="freeze" />
        </path>
    </svg>
);




/* ------------------------------------------------------------------ */
/* SellerHeroMockup – SellerSnap-inspired product table dashboard      */
/* Light, airy, with KPI row over a "listings" table behind it         */
/* ------------------------------------------------------------------ */
export const SellerHeroMockup = (props: SVGProps<SVGSVGElement>) => {
    const skeletonRowsAbove = [165, 195];
    const skeletonRowsBelow = [360, 390, 420, 450];

    const kpis = [
        { x: 365, label: "ORDERS", value: "850", delta: "+10%", icon: "bag" as const },
        { x: 445, label: "BUY BOX", value: "82%", delta: "+9%", icon: "target" as const },
        { x: 525, label: "REVENUE", value: "$21.5k", delta: "+19.4%", icon: "dollar" as const },
        { x: 605, label: "PROFIT", value: "$6.8k", delta: "+23.6%", icon: "chart" as const },
    ];

    const features = [
        { label: "Live Performance", desc: "Real-time updates", icon: "trend" as const },
        { label: "Smart Repricing", desc: "Maximize Buy Box", icon: "pulse" as const },
        { label: "Higher Profit", desc: "Automated insights", icon: "target" as const },
        { label: "Healthy Margin", desc: "Sustainable growth", icon: "shield" as const },
        { label: "Scale Faster", desc: "Grow your business", icon: "rocket" as const },
    ];

    const featureX = [40, 210, 370, 530, 680];

    // Shared palette - matched to the reference screenshot
    const indigo = "hsl(226 71% 50%)";       // primary accent (tabs, underline, product accent, icons)
    const indigoDark = "hsl(226 71% 40%)";    // CTASIS text / active tab text
    const indigoIcon = "hsl(226 71% 45%)";    // KPI + feature icon stroke
    const indigoSoft = "hsl(226 71% 95%)";    // light pill/icon backgrounds
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
                    <stop offset="0%" stopColor="hsl(226 71% 50%)" />
                    <stop offset="100%" stopColor="hsl(226 71% 40%)" />
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
                <text x="190" y="68" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill={indigoDark}>CTASIS · Listings</text>
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
                <circle cx="110" cy="265" r="22" fill="hsl(226 71% 60%)" />
                <circle cx="110" cy="265" r="14" fill="hsl(226 71% 80%)" />
                <text x="75" y="318" fontFamily="Inter,system-ui" fontSize="10" fill={slate400}>SKU: 8632010</text>

                {/* Column headers */}
                <text x="80" y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">PRODUCT</text>
                <rect x="78" y="215" width="55" height="2" rx="1" fill={indigo} />
                <text x="150" y="260" fontFamily="Inter,system-ui" fontSize="17" fontWeight={700} fill={slate900}>Wireless Speaker</text>
                <rect x="155" y="272" width="100" height="18" rx="8" fill={indigoSoft} />
                <text x="214" y="285" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill={indigoDark}>Repricer ON</text>

                {/* Platform pills */}
                <text x="300" y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">PLATFORM</text>
                <rect x="300" y="215" width="58" height="2" rx="1" fill={indigo} />
                <rect x="300" y="234" width="56" height="24" rx="6" fill="#0f172a" />
                <text x="328" y="249" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill="white">amazon</text>
                <rect x="300" y="268" width="56" height="24" rx="6" fill="hsl(210 100% 50%)" />
                <text x="328" y="283" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill="white">walmart</text>

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

                {/* Margin column */}
                <circle cx="710" cy="246" r="16" fill={indigoSoft} />
                <g transform="translate(710,246)" stroke={indigoIcon} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="0" cy="0" r="7" fill="none" />
                    <path d="M0 0 L0 -7 A7 7 0 0 1 6.06 -3.5 Z" fill={indigoIcon} stroke="none" />
                </g>
                <text x="685" y="210" fontFamily="Inter,system-ui" fontSize="10" fontWeight={600} fill={slate400} letterSpacing="0.5">MARGIN</text>
                <text x="690" y="288" fontFamily="Inter,system-ui" fontSize="18" fontWeight={800} fill="url(#shm-accent)">31.6%</text>
                <text x="690" y="308" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill={green}>▲ +3.6%</text>

                {/* Subtle pulse ring on Repricer ON */}
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
            <g fill="#ffffff" stroke="hsl(226 71% 70%)" strokeWidth={0.6}>
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
                    const iconCx = x - 20;
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
                                {f.icon === "rocket" && (
                                    <>
                                        <path d="M0 -8 C3 -5 4 0 3 4 L-3 4 C-4 0 -3 -5 0 -8 Z" />
                                        <circle cx="0" cy="-2" r="1.3" fill={indigoIcon} stroke="none" />
                                        <path d="M-3 3 L-6.5 7 L-3 5.8 Z" fill={indigoIcon} stroke="none" />
                                        <path d="M3 3 L6.5 7 L3 5.8 Z" fill={indigoIcon} stroke="none" />
                                        <path d="M-1.4 4.2 L0 8.5 L1.4 4.2 Z" fill={indigoIcon} stroke="none" />
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
export const ProblemDiagram = (props: SVGProps<SVGSVGElement>) => {

    const cards = [
        {
            x: 95, y: 55,
            name: "Amazon Seller Central",
            dots: ["#f59e0b", "#7c3aed", "#e2e8f0"],
            badge: "Oversold ×3",
            theme: "blue" as const,
            wave: "M0 26 Q 16 8, 32 22 T 64 20 T 96 10 T 150 24 T 200 14",
            endY: 14,
        },
        {
            x: 545, y: 45,
            name: "Etsy Shop Manager",
            dots: ["#ef4444", "#e2e8f0", "#e2e8f0"],
            badge: "Price mismatch",
            theme: "purple" as const,
            wave: "M0 18 Q 18 30, 34 16 T 70 24 T 110 8 T 150 22 T 200 12",
            endY: 12,
        },
        {
            x: 80, y: 400,
            name: "inventory_master.xlsx",
            dots: ["#10b981", "#7c3aed", "#e2e8f0"],
            badge: "12 conflicts",
            theme: "purple" as const,
            wave: "M0 22 Q 20 6, 38 20 T 80 26 T 120 12 T 160 22 T 200 16",
            endY: 16,
        },
        {
            x: 545, y: 405,
            name: "Walmart Seller Center",
            dots: ["#1e3a8a", "#7c3aed", "#e2e8f0"],
            badge: "3 hrs/day, by hand",
            theme: "blue" as const,
            wave: "M0 20 Q 16 32, 34 18 T 76 22 T 116 8 T 156 24 T 200 14",
            endY: 14,
        },
    ];

    const center = { x: 450, y: 315 };
    const anchors = [
        { x: 330, y: 195 },
        { x: 565, y: 195 },
        { x: 320, y: 405 },
        { x: 565, y: 410 },
    ];

    function lerp(a: number, b: number, t: number) {
        return a + (b - a) * t;
    }


    const blue = "hsl(226 71% 50%)";
    const blueSoft = "hsl(226 71% 95%)";
    const blueBorder = "hsl(226 60% 82%)";
    const purple = "hsl(262 60% 50%)";
    const purpleSoft = "hsl(262 60% 96%)";
    const purpleBorder = "hsl(262 45% 84%)";
    const slate900 = "#0f172a";

    return (
        <svg viewBox="0 0 900 620" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <filter id="pd-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="8" />
                    <feOffset dy="6" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.12" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>

            {/* Animated connector lines */}
            {anchors.map((a, i) => (
                <g key={"line" + i}>
                    <line
                        x1={a.x} y1={a.y} x2={center.x} y2={center.y}
                        stroke={blue} strokeWidth={1.4} strokeDasharray="6 5" opacity={0.55}
                    >
                        <animate attributeName="stroke-dashoffset" values="0;-22" dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" />
                    </line>
                    <circle r="3" fill={blue} opacity={0.7}>
                        <animateMotion dur={`${2.2 + i * 0.25}s`} repeatCount="indefinite"
                            path={`M${a.x} ${a.y} L${center.x} ${center.y}`} />
                    </circle>
                </g>
            ))}

            {/* Animated pulse rings around center */}
            <circle cx={center.x} cy={center.y} r="56" fill={blue} opacity={0.12}>
                <animate attributeName="r" values="56;100" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.15;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={center.x} cy={center.y} r="56" fill={blue} opacity={0.08}>
                <animate attributeName="r" values="56;130" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.1;0" dur="4s" repeatCount="indefinite" />
            </circle>

            {/* Alert badges along the lines */}
            {anchors.map((a, i) => {
                const bx = lerp(a.x, center.x, 0.42);
                const by = lerp(a.y, center.y, 0.42);
                return (
                    <g key={i} filter="url(#pd-shadow)">
                        <circle cx={bx} cy={by} r="14" fill="#ffffff" stroke={blue} strokeWidth={1.6} />
                        <line x1={bx} y1={by - 5} x2={bx} y2={by + 1.5} stroke={blue} strokeWidth={1.8} strokeLinecap="round" />
                        <circle cx={bx} cy={by + 5} r="1.1" fill={blue} />
                    </g>
                );
            })}

            {/* Center sync queue */}
            <g filter="url(#pd-shadow)">
                <circle cx={center.x} cy={center.y} r="55" fill="#ffffff" stroke={blueBorder} strokeWidth={1.4} />
            </g>
            <g transform={`translate(${center.x},${center.y - 12})`}>
                <path d="M-10 -1 A10 10 0 0 1 7 -8.5" fill="none" stroke={blue} strokeWidth={2.4} strokeLinecap="round" />
                <polygon points="7,-8.5 2.5,-9.2 6,-13.4" fill={blue} />
                <path d="M10 1 A10 10 0 0 1 -7 8.5" fill="none" stroke={blue} strokeWidth={2.4} strokeLinecap="round" />
                <polygon points="-7,8.5 -2.5,9.2 -6,13.4" fill={blue} />
            </g>
            <text x={center.x} y={center.y + 26} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="12" fontWeight={700} fill={blue}>
                Sync Queue
            </text>

            {/* Marketplace / file cards */}
            {cards.map((c, i) => {
                const soft = c.theme === "blue" ? blueSoft : purpleSoft;
                const mid = c.theme === "blue" ? blue : purple;
                const bord = c.theme === "blue" ? blueBorder : purpleBorder;
                return (
                    <g key={i}>
                        <g filter="url(#pd-shadow)">
                            <rect x={c.x} y={c.y} width="260" height="175" rx="16" fill="#ffffff" stroke="#e6e9f5" />
                        </g>

                        {/* traffic dots */}
                        <circle cx={c.x + 22} cy={c.y + 26} r="5" fill={c.dots[0]} />
                        <circle cx={c.x + 38} cy={c.y + 26} r="5" fill={c.dots[1]} />
                        <circle cx={c.x + 54} cy={c.y + 26} r="5" fill={c.dots[2]} />

                        {/* title */}
                        <text x={c.x + 22} y={c.y + 56} fontFamily="Inter,system-ui" fontSize="16.5" fontWeight={700} fill={slate900}>
                            {c.name}
                        </text>

                        {/* badge */}
                        <rect x={c.x + 20} y={c.y + 68} width={c.badge.length * 6.6 + 34} height="26" rx="13" fill={soft} stroke={bord} />
                        <circle cx={c.x + 34} cy={c.y + 81} r="6.5" fill="none" stroke={mid} strokeWidth={1.4} />
                        <line x1={c.x + 34} y1={c.y + 77.5} x2={c.x + 34} y2={c.y + 81.5} stroke={mid} strokeWidth={1.3} strokeLinecap="round" />
                        <circle cx={c.x + 34} cy={c.y + 84.5} r="0.9" fill={mid} />
                        <text x={c.x + 46} y={c.y + 85.5} fontFamily="Inter,system-ui" fontSize="12.5" fontWeight={700} fill={mid}>
                            {c.badge}
                        </text>

                        {/* sparkline */}
                        <g transform={`translate(${c.x + 20},${c.y + 108})`}>
                            <path d={c.wave} fill="none" stroke={mid} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="200" cy={c.endY} r="7" fill={mid} opacity={0.18} />
                            <circle cx="200" cy={c.endY} r="4" fill={mid} />
                        </g>
                    </g>
                );
            })}
        </svg>
    );
};

/* ------------------------------------------------------------------ */
/* InfraIllustration – Stacked cloud architecture (CDN → DB)            */
/* Styled after the AWS Cloud Infrastructure reference card             */
/* ------------------------------------------------------------------ */
export const InfraIllustration = (props: SVGProps<SVGSVGElement>) => {
    const DiagramDefs = () => (
        <defs>
            <linearGradient id="mo-purple" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C026D3" />
                <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>
            <linearGradient id="mo-pill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C026D3" />
                <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>
        </defs>
    );

    const ICONS: Record<string, JSX.Element> = {
        cloud: (
            <path fill="currentColor" d="M17.6 10.1a5 5 0 00-9.5-1.4A4.3 4.3 0 006 17h11.2a3.9 3.9 0 00.4-6.9z" />
        ),
        cart: (
            <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="20" r="1.3" />
                <circle cx="17" cy="20" r="1.3" />
                <path d="M2.5 3.5h2.4l2.5 12.2a2 2 0 002 1.6h8a2 2 0 002-1.6l1.5-8H6" />
            </g>
        ),
        cube: (
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3.5l7.5 4.3v8.4L12 20.5l-7.5-4.3V7.8L12 3.5zM4.5 7.8L12 12l7.5-4.2M12 12v8.5"
            />
        ),
        refresh: (
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12a8 8 0 0113.6-5.7M20 12a8 8 0 01-13.6 5.7" />
                <path d="M17 3v4h-4M7 21v-4h4" />
            </g>
        ),
        clipboard: (
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="4.5" width="14" height="16" rx="2" />
                <rect x="9" y="3" width="6" height="3.5" rx="1" fill="currentColor" stroke="none" />
                <path d="M8.5 11h7M8.5 14.5h7" />
            </g>
        ),
        truck: (
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="12" height="9" rx="1.5" />
                <path d="M14 10h4l3.5 3.5V16h-7.5z" />
                <circle cx="7" cy="18.5" r="1.7" />
                <circle cx="17" cy="18.5" r="1.7" />
            </g>
        ),
        barChart: (
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 19v-6M11 19V6M17 19v-9" />
            </g>
        ),
        pin: (
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0113 0C18.5 15.4 12 21 12 21z" />
                <circle cx="12" cy="10.5" r="2.2" />
            </g>
        ),
        shield: (
            <path fill="currentColor" d="M12 3l7 3v5.2c0 4.7-3 8.7-7 9.8-4-1.1-7-5.1-7-9.8V6l7-3z" />
        ),
        globe: (
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M3.5 12h17" />
                <path d="M12 3.5c2.6 2.3 4 5.2 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.2-4-8.5s1.4-6.2 4-8.5z" />
            </g>
        ),
        menu: (
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h11" />
            </g>
        ),
    };

    const Icon = ({ name, size = 22 }: { name: string; size?: number | string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24">
            {ICONS[name]}
        </svg>
    );

    const ROWS = [
        {
            icon: "cart",
            tile: "#9333EA",
            tint: "#F6EEFC",
            accent: "#9333EA",
            num: "01",
            title: "Order Received",
            subtitle: "Orders captured from multiple marketplaces in real-time.",
        },
        {
            icon: "cube",
            tile: "#9333EA",
            tint: "#F5EEFC",
            accent: "#9333EA",
            num: "02",
            title: "Validation & Deduplication",
            subtitle: "Validate order data and remove duplicates to ensure accuracy.",
        },
        {
            icon: "refresh",
            tile: "#4338CA",
            tint: "#EEF0FE",
            accent: "#4338CA",
            num: "03",
            title: "Inventory Sync",
            subtitle: "Update and sync inventory across all sales channels.",
        },
        {
            icon: "clipboard",
            tile: "#10B981",
            tint: "#E7FBF3",
            accent: "#10B981",
            num: "04",
            title: "Order Processing",
            subtitle: "Pick, pack, label, and prepare order for shipment.",
        },
        {
            icon: "truck",
            tile: "#DC2626",
            tint: "#FDEEEC",
            accent: "#DC2626",
            num: "05",
            title: "Shipping & Tracking",
            subtitle: "Ship the order and share tracking details with the marketplace.",
        },
        {
            icon: "barChart",
            tile: "#9333EA",
            tint: "#F6EEFC",
            accent: "#9333EA",
            num: "06",
            title: "Analytics & Insights",
            subtitle: "Track performance, revenue, and operational metrics in real-time.",
        },
    ];

    const ROW_X = 20;
    const ROW_W = 570;
    const ROW_H = 68;
    const ROW_GAP = 14;
    const ROW_START_Y = 92;
    const LINE_X = ROW_X + 36;

    const lastRowBottom = ROW_START_Y + (ROWS.length - 1) * (ROW_H + ROW_GAP) + ROW_H;
    const footY = lastRowBottom + 40;
    const pillY = footY + 20;
    const midX = ROW_X + ROW_W / 2;
    const leftPillCx = ROW_X + 55;
    const rightPillCx = ROW_X + ROW_W - 55;

    return (
        <svg viewBox="0 0 610 700" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <DiagramDefs />

            {/* Header */}
            <rect x="20" y="18" width="46" height="46" rx="14" fill="url(#mo-purple)" />
            <g transform="translate(33,31)" color="white">
                <Icon name="cloud" size="20" />
            </g>
            <text x="78" y="42" fontSize="19" fontWeight="800" fill="#7E22CE">Marketplace</text>
            <rect x="78" y="50" width="86" height="3" rx="1.5" fill="#7E22CE" />
            <text x="200" y="42" fontSize="12" fontWeight="700" fill="#9CA3AF" letterSpacing="1.5">ORDER FLOW</text>

            <g transform="translate(500,20)" color="#E9B8F0" opacity="0.9">
                <Icon name="cloud" size="26" />
            </g>
            <rect x="538" y="18" width="36" height="36" rx="11" fill="url(#mo-purple)" />
            <g transform="translate(547,27)" color="white">
                <Icon name="menu" size="18" />
            </g>

            {/* Header -> row1 connector */}
            <line x1={LINE_X} y1="66" x2={LINE_X} y2={ROW_START_Y} stroke="#C026D3" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.4s" repeatCount="indefinite" />
            </line>
            <circle r="2.5" fill="#C026D3" opacity={0.6}>
                <animateMotion dur="1.6s" repeatCount="indefinite"
                    path={`M${LINE_X} 66 L${LINE_X} ${ROW_START_Y}`} />
            </circle>

            {/* Row -> row connectors */}
            {ROWS.slice(0, -1).map((row, i) => {
                const y1 = ROW_START_Y + i * (ROW_H + ROW_GAP) + ROW_H;
                const y2 = ROW_START_Y + (i + 1) * (ROW_H + ROW_GAP);
                return (
                    <g key={`c${i}`}>
                        <line
                            x1={LINE_X}
                            y1={y1}
                            x2={LINE_X}
                            y2={y2}
                            stroke="#C026D3"
                            strokeWidth="1.5"
                            strokeDasharray="3 4"
                            opacity="0.6"
                        >
                            <animate attributeName="stroke-dashoffset" values="0;-14" dur={`${1.4 + i * 0.15}s`} repeatCount="indefinite" />
                        </line>
                        <circle r="2.5" fill="#C026D3" opacity={0.6}>
                            <animateMotion dur={`${1.6 + i * 0.15}s`} repeatCount="indefinite"
                                path={`M${LINE_X} ${y1} L${LINE_X} ${y2}`} />
                        </circle>
                    </g>
                );
            })}

            {/* Rows */}
            {ROWS.map((row, i) => {
                const y = ROW_START_Y + i * (ROW_H + ROW_GAP);
                return (
                    <g key={row.title}>
                        <rect x={ROW_X} y={y} width={ROW_W} height={ROW_H} rx="16" fill={row.tint} />
                        <rect x={ROW_X + ROW_W - 5} y={y + 8} width="5" height={ROW_H - 16} rx="2.5" fill={row.accent} />

                        <rect x={ROW_X + 10} y={y + 8} width="52" height="52" rx="15" fill={row.tile} />
                        <g transform={`translate(${ROW_X + 23},${y + 21})`} color="white">
                            <Icon name={row.icon} size="26" />
                        </g>

                        <text x={ROW_X + 78} y={y + 30} fontSize="16" fontWeight="800" fill="#1E1B33">
                            {row.title}
                        </text>
                        <text x={ROW_X + 78} y={y + 49} fontSize="12.5" fill="#6B7280">
                            {row.subtitle}
                        </text>

                        <rect x={ROW_X + ROW_W - 78} y={y + 17} width="52" height="34" rx="17" fill={row.tile} fillOpacity="0.14" />
                        <text x={ROW_X + ROW_W - 52} y={y + 39} textAnchor="middle" fontSize="15" fontWeight="800" fill={row.accent}>
                            {row.num}
                        </text>
                    </g>
                );
            })}

            {/* Footer connector routing */}
            <line x1={LINE_X} y1={lastRowBottom} x2={LINE_X} y2={footY + 15} stroke="#C026D3" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.4s" repeatCount="indefinite" />
            </line>
            <circle r="2.5" fill="#C026D3" opacity={0.6}>
                <animateMotion dur="1.6s" repeatCount="indefinite"
                    path={`M${LINE_X} ${lastRowBottom} L${LINE_X} ${footY + 15}`} />
            </circle>
            <line x1={leftPillCx} y1={footY} x2={rightPillCx} y2={footY} stroke="#C026D3" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.6s" repeatCount="indefinite" />
            </line>
            <circle r="2.5" fill="#C026D3" opacity={0.6}>
                <animateMotion dur="4.8s" repeatCount="indefinite"
                    path={`M${leftPillCx} ${footY} L${rightPillCx} ${footY}`} />
            </circle>
            <line x1={leftPillCx} y1={footY} x2={leftPillCx} y2={pillY} stroke="#C026D3" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.2s" repeatCount="indefinite" />
            </line>
            <circle r="2.5" fill="#C026D3" opacity={0.6}>
                <animateMotion dur="1.4s" repeatCount="indefinite"
                    path={`M${leftPillCx} ${footY} L${leftPillCx} ${pillY}`} />
            </circle>
            <line x1={midX} y1={footY} x2={midX} y2={pillY - 6} stroke="#C026D3" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.2s" repeatCount="indefinite" />
            </line>
            <circle r="2.5" fill="#C026D3" opacity={0.6}>
                <animateMotion dur="1.4s" repeatCount="indefinite"
                    path={`M${midX} ${footY} L${midX} ${pillY - 6}`} />
            </circle>
            <line x1={rightPillCx} y1={footY} x2={rightPillCx} y2={pillY} stroke="#C026D3" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.2s" repeatCount="indefinite" />
            </line>
            <circle r="2.5" fill="#C026D3" opacity={0.6}>
                <animateMotion dur="1.4s" repeatCount="indefinite"
                    path={`M${rightPillCx} ${footY} L${rightPillCx} ${pillY}`} />
            </circle>

            {/* Footer pills */}
            <rect x={leftPillCx - 62} y={pillY} width="124" height="52" rx="26" fill="white" stroke="#EDEBF3" />
            <g transform={`translate(${leftPillCx - 44},${pillY + 13})`} color="#7E22CE">
                <Icon name="pin" size="22" />
            </g>
            <text x={leftPillCx - 8} y={pillY + 21} fontSize="11" fontWeight="600" fill="#9CA3AF">Region</text>
            <text x={leftPillCx - 8} y={pillY + 38} fontSize="15" fontWeight="800" fill="#1E1B33">India</text>

            <rect x={midX - 88} y={pillY - 8} width="176" height="64" rx="32" fill="url(#mo-pill)" />
            <g transform={`translate(${midX - 65},${pillY + 10})`} color="white">
                <Icon name="shield" size="24" />
            </g>
            <text x={midX - 32} y={pillY + 22} fontSize="15" fontWeight="800" fill="white">99.99%</text>
            <text x={midX - 32} y={pillY + 40} fontSize="12" fill="#EAD6F5">Uptime SLA</text>

            <rect x={rightPillCx - 62} y={pillY} width="135" height="52" rx="26" fill="white" stroke="#EDEBF3" />
            <g transform={`translate(${rightPillCx - 44},${pillY + 13})`} color="#7E22CE">
                <Icon name="globe" size="22" />
            </g>
            <text x={rightPillCx - 8} y={pillY + 21} fontSize="11" fontWeight="600" fill="#9CA3AF">Global reach</text>
            <text x={rightPillCx - 8} y={pillY + 38} fontSize="15" fontWeight="800" fill="#1E1B33">USA · EU</text>
        </svg>
    );
};

/* ------------------------------------------------------------------ */
/* SyncIllustration – Channel-flow diagram (Listings <-> Ctasis <-> Orders / Shipping)
   Animated connecting lines with flowing data dots                      */
/* ------------------------------------------------------------------ */
export const SyncIllustration = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 560 420" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="hd-core" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <filter id="hd-sh" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" /><feOffset dy="3" />
                <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
                <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
        </defs>
        {/* channel cards left */}
        {[
            { y: 70, name: "Amazon", logo: "/logos/amazon-color-svgrepo-com.svg" },
            { y: 145, name: "Walmart", logo: "/logos/walmart.png" },
            { y: 220, name: "eBay", logo: "/logos/EBay_logo.svg.webp" },
            { y: 295, name: "Etsy", logo: "/logos/etsy-svgrepo-com.svg" },
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
            <rect x="220" y="140" width="150" height="150" rx="18" fill="url(#hd-core)" />
            <circle cx="295" cy="200" r="26" fill="#fff" opacity="0.14" />
            <circle cx="295" cy="200" r="16" fill="#fff" />
            <path d="M289 200l4 4 8-8" stroke="#1e3a8a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="295" y="240" textAnchor="middle" fontFamily="Inter" fontSize="13" fontWeight="800" fill="#fff">Ctasis Core</text>
            <text x="295" y="256" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#bfdbfe">Inventory · Pricing · Orders</text>
            <text x="295" y="272" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#bfdbfe">Real-time · 2-way sync</text>
        </g>

        {/* right output cards */}
        {[
            { y: 70, title: "Inventory", val: "12,480 SKUs" },
            { y: 145, title: "Pricing", val: "Rules Active" },
            { y: 220, title: "Orders", val: "241 / Today" },
            { y: 295, title: "Catalog", val: "AI Generated" },
        ].map((c) => (
            <g key={c.title} filter="url(#hd-sh)">
                <rect x="392" y={c.y} width="140" height="50" rx="10" fill="white" stroke="#e2e8f0" />
                <rect x="392" y={c.y} width="3" height="50" rx="1.5" fill="#2563eb" />
                <text x="405" y={c.y + 20} fontFamily="Inter" fontSize="10" fontWeight="700" fill="#64748b" letterSpacing="1">
                    {c.title.toUpperCase()}
                </text>
                <text x="405" y={c.y + 38} fontFamily="Inter" fontSize="12" fontWeight="700" fill="#0f172a">{c.val}</text>
            </g>
        ))}

        {/* ── left arrows (channel → core) with flowing dots ── */}
        {[95, 170, 245, 320].map((y, i) => (
            <g key={"l" + y}>
                <line x1="180" y1={y} x2="218" y2="215" stroke="#60a5fa" strokeWidth="1.4" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
                </line>
                <circle r="3" fill="#60a5fa" opacity="0.8">
                    <animateMotion dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite"
                        path={`M180 ${y} L218 215`} />
                </circle>
            </g>
        ))}

        {/* ── right arrows (core → output) with flowing dots ── */}
        {[95, 170, 245, 320].map((y, i) => (
            <g key={"r" + y}>
                <line x1="372" y1="215" x2="390" y2={y} stroke="#2563eb" strokeWidth="1.4" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
                </line>
                <circle r="3" fill="#2563eb" opacity="0.8">
                    <animateMotion dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite"
                        path={`M372 215 L390 ${y}`} />
                </circle>
            </g>
        ))}
    </svg>
);

/* ------------------------------------------------------------------ */
/* MarketplaceMeshDiagram - radial channel hub                         */
/* ------------------------------------------------------------------ */

export const MarketplaceMeshDiagram = (props: SVGProps<SVGSVGElement>) => {

    type Channel = {
        a: number;
        l: string;
        c: string;
        bg: string;
        /** Optional override for the logo path. Defaults to `/${slug(l)}.svg`. */
        logo?: string;
    };

    /** Turns a marketplace name into a filesystem-friendly slug, e.g. "Bol.com" -> "bolcom". */
    function slug(name: string): string {
        return name.toLowerCase().replace(/[^a-z0-9]/g, "");
    }
    const channels: Channel[] = [
        { a: -90, l: "Amazon", c: "#F59E0B", bg: "#FFF7E6", logo: "/logos/amazon-color-svgrepo-com.svg" },
        { a: -45, l: "Walmart", c: "#2563EB", bg: "#EFF6FF", logo: "/logos/walmart.png" },
        { a: 0, l: "eBay", c: "#FF1744", bg: "#FFF1F3", logo: "/logos/EBay_logo.svg.webp" },
        { a: 45, l: "Shopify", c: "#16A34A", bg: "#ECFDF5", logo: "/logos/shopify-color-svgrepo-com.svg" },
        { a: 90, l: "Etsy", c: "#F4511E", bg: "#FFF7ED", logo: "/logos/etsy-svgrepo-com.svg" },
        { a: 135, l: "Fnac", c: "#F59E0B", bg: "#FFFBEA", logo: "/logos/fnac.png" },
        { a: 180, l: "Allegro", c: "#A855F7", bg: "#FAF5FF", logo: "/logos/allegro.png" },
        { a: 225, l: "Bol.com", c: "#4338CA", bg: "#EEF2FF", logo: "/logos/bol.png" },
    ];

    const cx = 380;
    const cy = 220;
    const R = 175;
    const NODE_R = 26;
    const LOGO_SIZE = 28;

    return (
        <svg
            viewBox="0 0 760 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            {...props}
        >
            <defs>
                <radialGradient id="mm-bg" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#eff6ff" />
                    <stop offset="100%" stopColor="#dbeafe" />
                </radialGradient>

                <linearGradient id="mm-core" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>

                <radialGradient id="mm-shine" cx="35%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="rgba(255,255,255,.28)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>

                <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* orbit rings */}
            {[70, 120, 175].map((r, i) => (
                <circle key={i} cx={cx} cy={cy} r={r} stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 5" opacity={0.4} fill="none">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`0 ${cx} ${cy}`}
                        to={`360 ${cx} ${cy}`}
                        dur={`${28 + i * 8}s`}
                        repeatCount="indefinite"
                    />
                </circle>
            ))}

            {/* edge lines */}
            {channels.map((ch, i) => {
                const rad = (ch.a * Math.PI) / 180;
                const x = cx + R * Math.cos(rad);
                const y = cy + R * Math.sin(rad);

                return (
                    <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={ch.c} strokeWidth={1.4} opacity={0.38} strokeDasharray="4 5">
                        <animate attributeName="stroke-dashoffset" values="0;-40" dur={`${2 + (i % 4) * 0.4}s`} repeatCount="indefinite" />
                    </line>
                );
            })}

            {/* pulse rings */}
            <circle cx={cx} cy={cy} r="56" fill="#2563eb" opacity="0.18">
                <animate attributeName="r" values="56;90" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.22;0" dur="2.8s" repeatCount="indefinite" />
            </circle>

            <circle cx={cx} cy={cy} r="56" fill="#1e40af" opacity="0.12">
                <animate attributeName="r" values="56;110" dur="3.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.18;0" dur="3.4s" repeatCount="indefinite" />
            </circle>

            {/* nodes */}
            {channels.map((ch, i) => {
                const rad = (ch.a * Math.PI) / 180;
                const x = cx + R * Math.cos(rad);
                const y = cy + R * Math.sin(rad);
                const logoHref = ch.logo ?? `/${slug(ch.l)}.svg`;

                return (
                    <g key={i}>
                        {/* shimmer halo */}
                        <circle cx={x} cy={y} r="34" fill="none" stroke={ch.c} strokeWidth="1" opacity="0.22">
                            <animate attributeName="opacity" values="0.15;0.5;0.15" dur={`${2.2 + (i % 5) * 0.3}s`} repeatCount="indefinite" />
                        </circle>

                        {/* soft halo */}
                        <circle cx={x} cy={y} r="30" fill={ch.c} opacity="0.12">
                            <animate attributeName="r" values="28;36;28" dur={`${2.5 + (i % 5) * 0.3}s`} repeatCount="indefinite" />
                        </circle>

                        {/* node bg */}
                        <circle cx={x} cy={y} r={NODE_R} fill={ch.bg} stroke={ch.c} strokeWidth="2" />

                        {/* marketplace logo */}
                        <image
                            href={logoHref}
                            x={x - LOGO_SIZE / 2}
                            y={y - LOGO_SIZE / 2}
                            width={LOGO_SIZE}
                            height={LOGO_SIZE}
                            preserveAspectRatio="xMidYMid meet"
                        />

                        {/* marketplace name, below the node */}
                        <text
                            x={x}
                            y={y + NODE_R + 18}
                            textAnchor="middle"
                            fontSize="12"
                            fontWeight="700"
                            fill={ch.c}
                            style={{ fontFamily: "DM Sans, sans-serif" }}
                        >
                            {ch.l}
                        </text>
                    </g>
                );
            })}

            {/* core */}
            <g filter="url(#glow)">
                <circle cx={cx} cy={cy} r="58" fill="url(#mm-core)" />
                <circle cx={cx} cy={cy} r="58" fill="url(#mm-shine)" />
            </g>

            <text x={cx} y={cy - 4} textAnchor="middle" fontSize="16" fontWeight="800" fill="white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Ctasis
            </text>

            <text
                x={cx}
                y={cy + 16}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="rgba(255,255,255,.82)"
                letterSpacing=".5"
                style={{ fontFamily: "DM Sans, sans-serif" }}
            >
                Sync Engine
            </text>

            {/* legend */}
            <g transform="translate(70,455)">
                {[
                    { c: "#2563eb", l: "Live sync" },
                    { c: "#1d4ed8", l: "Auto-repricer" },
                    { c: "#3b82f6", l: "AI listing" },
                ].map((p, i) => (
                    <g key={i} transform={`translate(${i * 180},0)`}>
                        <rect x="50" y="-5" width="160" height="28" rx="14" fill="white" stroke="#e2e8f0" />
                        <circle cx="66" cy="10" r="5" fill={p.c} />
                        <text x="80" y="12" fontSize="11" fontWeight="700" fill="#334155" style={{ fontFamily: "DM Sans, sans-serif" }}>
                            {p.l}
                        </text>
                    </g>
                ))}
            </g>
        </svg>
    );
};



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
                    <path d="M0,0 L8,4 L0,8 Z" fill="#2563EB" />
                </marker>
                <symbol id="star4" viewBox="0 0 24 24">
                    <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill="#2563EB" />
                </symbol>
            </defs>

            {/* marketplace logo nodes with shimmer halos */}
            {[
                { tx: 195, stroke: "#2563EB", logo: "logos/amazon-color-svgrepo-com.svg", label: "Amazon" },
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
                { x: 505, c: "#2563EB" },

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

            {/* horizontal rail + drop to center sync icon */}
            <line x1={195} y1={150} x2={815} y2={150} stroke="#2563EB" strokeWidth="2" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" values="0;-18" dur="2.4s" repeatCount="indefinite" />
            </line>
            <line x1={505} y1={150} x2={505} y2={160} stroke="#2563EB" strokeWidth="2.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" values="0;-18" dur="1.8s" repeatCount="indefinite" />
            </line>
            {/* flowing dot along horizontal rail to center */}
            <circle r="2.5" fill="#2563EB" opacity="0.7">
                <animateMotion dur="4s" repeatCount="indefinite" path="M195 150 L505 150" />
            </circle>
            <circle r="2.5" fill="#2563EB" opacity="0.7">
                <animateMotion dur="4s" repeatCount="indefinite" path="M815 150 L505 150" />
            </circle>

            {/* center sync icon with pulse rings */}
            <g transform="translate(505,180)">
                <circle r="20" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
                <circle r="10" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
            </g>
            <line x1="505" y1="202" x2="505" y2="212" stroke="#2563EB" strokeWidth="1.5" markerEnd="url(#arrowHead)">
                <animate attributeName="stroke-dasharray" values="0 20;20 0" dur="1.6s" repeatCount="indefinite" />
            </line>


            <rect x="20" y="275" width="170" height="215" rx="16" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
            <text x="35" y="305" fontSize="14.5" fontWeight="700" fill="#1E1B4B">Your Inventory</text>


            <g transform="translate(70,335)">
                <path d="M0,45 L40,15 L80,45 L80,95 L0,95 Z" fill="#EEF0F6" stroke="#2563EB" strokeWidth="2.5" strokeLinejoin="round" />
                <rect x="30" y="65" width="20" height="30" fill="#EEF0F6" stroke="#2563EB" />
                <rect x="10" y="55" width="14" height="14" rx="2" fill="#EEF0F6" stroke="#2563EB" strokeWidth="1.5" />
                <rect x="56" y="55" width="14" height="14" rx="2" fill="#EEF0F6" stroke="#2563EB" strokeWidth="1.5" />
            </g>
            <g fill="#EEF0F6" stroke="#2563EB" strokeWidth="1.5">
                <rect x="115" y="405" width="26" height="26" rx="3" />
                <rect x="140" y="418" width="20" height="20" rx="3" />
            </g>


            <rect x="35" y="440" width="140" height="8" rx="4" fill="#EEF0F6" />
            <rect x="35" y="456" width="110" height="8" rx="4" fill="#EEF0F6" />
            <rect x="35" y="472" width="85" height="8" rx="4" fill="#EEF0F6" />


            <line x1="190" y1="382" x2="203" y2="382" stroke="#2563EB" strokeWidth="1.5" markerEnd="url(#arrowHead)">
                <animate attributeName="stroke-dasharray" values="0 15;15 0" dur="1.8s" repeatCount="indefinite" />
            </line>
            <circle r="2" fill="#2563EB" opacity="0.8">
                <animateMotion dur="2s" repeatCount="indefinite" path="M190 382 L203 382" />
            </circle>


            <rect x="205" y="215" width="625" height="305" rx="18" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />

            <g clipPath="url(#cardClip)">

                <rect x="205" y="215" width="60" height="305" fill="#2563EB" />


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
                <path d="M300,265 l6,3.5 l0,7 l-6,3.5 l-6,-3.5 l0,-7 Z" fill="none" stroke="#2563EB" strokeWidth="1.3" />
                <text x="310" y="275" fontWeight="650">Total Products</text>
                <text x="310" y="300" fontSize="16" fontWeight="800" fill="#1E1B4B">8,642</text>


                <rect x="405" y="255" width="112" height="56" rx="10" fill="#FAFAFF" stroke="#EDE9FE" strokeWidth="1.5" />
                <path d="M425,265 h12 v10 h-12 Z 425,265 l6,-4 l6,4" fill="none" stroke="#2563EB" strokeWidth="1.3" strokeLinejoin="round" />
                <text x="445" y="275" fontWeight="650">Total Stock</text>
                <text x="445" y="300" fontSize="16" fontWeight="800" fill="#1E1B4B">45,278</text>


                <rect x="530" y="255" width="112" height="56" rx="10" fill="#FAFAFF" stroke="#EDE9FE" strokeWidth="1.5" />
                <text x="550" y="275" textAnchor="middle" fontSize="11" fontWeight="900" fill="#2563EB">$</text>
                <text x="560" y="275" fontWeight="650">Average Price</text>
                <text x="560" y="300" fontSize="16" fontWeight="800" fill="#1E1B4B">$24.68</text>


                <rect x="655" y="255" width="112" height="56" rx="10" fill="#FAFAFF" stroke="#EDE9FE" strokeWidth="1.5" />
                <path d="M670,275 l3,-4 l3,3 l4,-6" fill="none" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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
                fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1000" strokeDashoffset="0">
                <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="6.4s" fill="freeze" />
            </polyline>
            <g fill="#2563EB">
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

            <line x1="830" y1="382" x2="845" y2="382" stroke="#2563EB" strokeWidth="1.5" markerEnd="url(#arrowHead)">
                <animate attributeName="stroke-dasharray" values="0 18;18 0" dur="1.6s" repeatCount="indefinite" />
            </line>
            <circle r="2" fill="#2563EB" opacity="0.8">
                <animateMotion dur="1.8s" repeatCount="indefinite" path="M830 382 L845 382" />
            </circle>


            <g>
                <rect x="845" y="290" width="150" height="195" rx="16" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
                <circle cx="920" cy="308" r="6" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />

                <circle cx="920" cy="345" r="20" fill="#2563EB">
                    <animate attributeName="r" values="20;22;20" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="920" y="352" textAnchor="middle" fontSize="19" fontWeight="800" fill="#FFFFFF">$</text>

                <text x="920" y="390" textAnchor="middle" fontSize="11.5" fill="#6B7280" fontWeight="600">Price Updated</text>
                <text x="920" y="415" textAnchor="middle" fontSize="21" fontWeight="800" fill="#2563EB">$24.68</text>

                <rect x="890" y="435" width="60" height="8" rx="4" fill="#EEF0F6" />
            </g>


            <use href="#star4" x="995" y="270" width="26" height="26" />
            <use href="#star4" x="1008" y="330" width="18" height="18" />
            <use href="#star4" x="985" y="470" width="20" height="20" />
            <circle cx="1005" cy="300" r="9" fill="none" stroke="#2563EB" strokeWidth="2" />

        </svg>
    )

}
