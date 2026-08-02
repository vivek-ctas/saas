import { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* PricingCalculatorMockup – catalog plan estimator                    */
/* ------------------------------------------------------------------ */
export const PricingCalculatorMockup = (props: SVGProps<SVGSVGElement>) => {

    const ICONS: Record<string, JSX.Element> = {
        trendUp: (
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 16l6-6 4 4 8-9" />
                <path d="M15 2h6v6" />
            </g>
        ),
        shop: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 9.5L5.2 4h13.6l1.2 5.5" />
                <path d="M3.5 9.5a2.3 2.3 0 004.5.6 2.3 2.3 0 004.5 0 2.3 2.3 0 004.5 0 2.3 2.3 0 004.5-.6" />
                <path d="M5 9.8V19a1 1 0 001 1h12a1 1 0 001-1V9.8" />
                <path d="M9.5 20v-5a1 1 0 011-1h3a1 1 0 011 1v5" />
            </g>
        ),
        cart: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="20" r="1.3" />
                <circle cx="17" cy="20" r="1.3" />
                <path d="M2.5 3.5h2.4l2.5 12.2a2 2 0 002 1.6h8a2 2 0 002-1.6l1.5-8H6" />
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
        pieChart: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3.5v8.5h8.5A8.5 8.5 0 1112 3.5z" />
            </g>
        ),
        barChart: (
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 19v-6M11 19V6M17 19v-9" />
            </g>
        ),
        calendar: (
            <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
                <path d="M3.5 10h17M8 3v4M16 3v4" />
                <circle cx="9.5" cy="15" r="1.1" fill="currentColor" stroke="none" />
            </g>
        ),
    };

    const Icon = ({ name, size = 20 }: { name: string; size?: number | string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24">
            {ICONS[name]}
        </svg>
    );

    const FIELDS = [
        { icon: "shop", label: "Marketplace", value: "5" },
        { icon: "cart", label: "Products", value: "12,400" },
        { icon: "cube", label: "Catalog SKUs", value: "48,200" },
        { icon: "pieChart", label: "Avg. listing time", value: "18 min" },
    ];

    const FIELD_TOP = 156;
    const FIELD_GAP = 66;

    const indigo = "#3C9AC4";
    const indigoDark = "#13355A";
    const indigoSoft = "#E8F0F6";
    const slate900 = "#0f172a";
    const slate500 = "#64748b";
    const slate400 = "#94a3b8";
    const border = "#E2E8F0";

    return (
        <svg viewBox="0 0 860 560" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <linearGradient id="pc-grad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor={indigo} />
                    <stop offset="100%" stopColor={indigoDark} />
                </linearGradient>
                <linearGradient id="pc-shine" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <clipPath id="pc-card-clip">
                    <rect
                        x="20"
                        y="20"
                        width="820"
                        height="520"
                        rx="24"
                    />
                </clipPath>
            </defs>

            {/* Card background */}
            <rect x="20" y="20" width="820" height="520" rx="24" fill="white" stroke={border} />

            {/* Header */}
            <rect x="44" y="44" width="60" height="60" rx="16" fill={indigoSoft} />
            <g transform="translate(58,58)" color={indigo}>
                <Icon name="trendUp" size="32" />
            </g>
            {/* Pulse ring on header icon */}
            <circle cx="74" cy="74" r="3" fill={indigo}>
                <animate attributeName="r" values="3;10;3" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <text x="120" y="72" fontFamily="Inter,system-ui" fontSize="20" fontWeight="800" fill={slate900}>Catalog estimator · projected impact</text>
            <text x="120" y="94" fontFamily="Inter,system-ui" fontSize="13" fill={slate500}>Based on your catalog size and sales channels.</text>

            {/* Left inputs panel */}
            <rect x="44" y="130" width="360" height="400" rx="20" fill="#FBFBFD" stroke={border} />

            {FIELDS.map((f, i) => {
                const y = FIELD_TOP + i * FIELD_GAP;
                return (
                    <g key={f.label}>
                        <circle cx="90" cy={y + 10} r="22" fill={indigoSoft} />
                        <g transform={`translate(79,${y - 1})`} color={indigo}>
                            <Icon name={f.icon} size="22" />
                        </g>
                        <text x="128" y={y - 8} fontFamily="Inter,system-ui" fontSize="11" fontWeight="700" fill={slate500} letterSpacing="0.5">
                            {f.label.toUpperCase()}
                        </text>
                        <rect x="128" y={y} width="252" height="38" rx="9" fill="white" stroke={border} />
                        <text x="144" y={y + 25} fontFamily="Inter,system-ui" fontSize="15" fontWeight="700" fill={slate900}>{f.value}</text>
                    </g>
                );
            })}

            <rect x="58" y="440" width="336" height="42" rx="21" fill="url(#pc-grad)" />
            <text x="230" y="465" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="15" fontWeight="700" fill="white">Recalculate →</text>

            {/* Right output cards */}
            {/* Card 1: Listings generated */}
            <rect x="424" y="130" width="372" height="130" rx="18" fill={indigoSoft} stroke={border} />
            <circle cx="470" cy="195" r="30" fill="none" stroke={border} strokeWidth="1.5" strokeDasharray="3 4">
                <animate attributeName="stroke-dashoffset" values="0;-14" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="470" cy="195" r="21" fill="white" />
            <g transform="translate(459,184)" color={indigo}>
                <Icon name="cube" size="22" />
            </g>
            <text x="516" y="176" fontFamily="Inter,system-ui" fontSize="12" fontWeight="800" fill={indigo} letterSpacing="0.6">LISTINGS GENERATED</text>
            <text x="516" y="216" fontFamily="Inter,system-ui" fontSize="34" fontWeight="800" fill={indigoDark}>12.4K</text>
            <text x="700" y="216" fontFamily="Inter,system-ui" fontSize="12" fill={slate500}>this month</text>
            <path d="M424 248 Q 520 226 620 246 T 796 240" fill="none" stroke={border} strokeWidth="2" />
            <circle cx="796" cy="240" r="4" fill={indigo}>
                <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Card 2: Validation pass */}
            <rect x="424" y="272" width="372" height="130" rx="18" fill="#E8F0F6" stroke={border} />
            <circle cx="470" cy="337" r="30" fill="none" stroke={border} strokeWidth="1.5" strokeDasharray="3 4">
                <animate attributeName="stroke-dashoffset" values="0;-14" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="470" cy="337" r="21" fill="white" />
            <g transform="translate(459,326)" color="#3C9AC4">
                <Icon name="barChart" size="22" />
            </g>
            <text x="516" y="318" fontFamily="Inter,system-ui" fontSize="12" fontWeight="800" fill="#3C9AC4" letterSpacing="0.6">VALIDATION PASS</text>
            <text x="516" y="358" fontFamily="Inter,system-ui" fontSize="34" fontWeight="800" fill="#13355A">98.2%</text>
            <text x="700" y="358" fontFamily="Inter,system-ui" fontSize="12" fill={slate500}>pass rate</text>
            <path d="M424 390 Q 520 368 620 388 T 796 382" fill="none" stroke={border} strokeWidth="2" />
            <circle cx="796" cy="382" r="4" fill="#3C9AC4">
                <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite" />
            </circle>

            {/* Card 3: Payback period */}
            <rect x="424" y="414" width="372" height="116" rx="18" fill="#12102A" />
            <circle cx="470" cy="472" r="30" fill="none" stroke="#4B4A78" strokeWidth="1.5" strokeDasharray="3 4">
                <animate attributeName="stroke-dashoffset" values="0;-14" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="470" cy="472" r="21" fill="#20204A" />
            <g transform="translate(459,461)" color="#6BC1E0">
                <Icon name="calendar" size="22" />
            </g>
            <text x="516" y="454" fontFamily="Inter,system-ui" fontSize="12" fontWeight="800" fill="#6BC1E0" letterSpacing="0.6">HOURS SAVED</text>
            <text x="516" y="492" fontFamily="Inter,system-ui" fontSize="28" fontWeight="800" fill="white">320h</text>
            <text x="672" y="492" fontFamily="Inter,system-ui" fontSize="12" fill={slate400}>per month</text>
            <path d="M424 522 Q 520 505 620 520 T 796 515" fill="none" stroke="#3B3A66" strokeWidth="2" />

            {/* Continuous diagonal shine sweep */}
            <g clipPath="url(#pc-card-clip)">
                <g transform="rotate(-18 430 280)">
                    <rect x="-320" y="140" width="140" height="400" fill="url(#pc-shine)" style={{ mixBlendMode: "screen" }}>
                        <animateTransform attributeName="transform" type="translate" values="0 0; 1200 0; 1200 0" keyTimes="0; 0.55; 1" dur="4.5s" repeatCount="indefinite" />
                    </rect>
                </g>
            </g>

            {/* Sparkles */}
            <g fill="#ffffff" stroke={indigo} strokeWidth={0.6}>
                <path d="M810 50 q4 14 18 18 q-14 4 -18 18 q-4 -14 -18 -18 q14 -4 18 -18 z">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
                </path>
                <path d="M830 120 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
                </path>
                <path d="M38 38 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
                </path>
            </g>
        </svg>
    )
};


/* ------------------------------------------------------------------ */
/* AnalyticsIllustration – BI dashboard mockup with bars + KPI cards   */
/* ------------------------------------------------------------------ */
export const AnalyticsIllustration = (props: SVGProps<SVGSVGElement>) => {
    const DiagramDefs = () => (
        <defs>
            <linearGradient id="g-purple-bar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3C9AC4" />
                <stop offset="70%" stopColor="#6BC1E0" />
                <stop offset="100%" stopColor="#E8F0F6" />
            </linearGradient>
            <linearGradient id="g-blue-bar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3C9AC4" />
                <stop offset="70%" stopColor="#6BC1E0" />
                <stop offset="100%" stopColor="#E8F0F6" />
            </linearGradient>
            <linearGradient id="g-purple-chip" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3C9AC4" />
                <stop offset="100%" stopColor="#13355A" />
            </linearGradient>
            <linearGradient id="ai-shine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            {KPIS.map((k, i) => (
                <clipPath key={`kpiClip${i}`} id={`kpiClip${i}`}>
                    <rect x={k.x} y="160" width="200" height="110" rx="16" />
                </clipPath>
            ))}
        </defs>
    );

    const Icon = {
        trendUp: (
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 15l6-6 4 4 8-8" />
                <path d="M15 5h6v6" />
            </g>
        ),
        cube: (
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3.5l7.5 4.3v8.4L12 20.5l-7.5-4.3V7.8L12 3.5zM4.5 7.8L12 12l7.5-4.2M12 12v8.5"
            />
        ),
        cart: (
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="20" r="1.4" />
                <circle cx="18" cy="20" r="1.4" />
                <path d="M2.5 3h2.5l2.6 12.6a2 2 0 002 1.6h8.6a2 2 0 002-1.6l1.6-8.6H6.2" />
            </g>
        ),
        calendar: (
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
                <path d="M3.5 10h17M8 3v4M16 3v4" />
            </g>
        ),
        chevronDown: (
            <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
        ),
    };

    const indigo = "#3C9AC4";
    const indigoDark = "#13355A";
    const indigoSoft = "#E8F0F6";
    const slate900 = "#0f172a";
    const slate500 = "#64748b";
    const slate400 = "#94a3b8";
    const border = "#E2E8F0";

    const KPIS = [
        {
            x: 30,
            accent: indigo,
            tint: indigoSoft,
            iconBg: indigoSoft,
            icon: Icon.cube,
            label: "Products",
            value: "5M+",
            valueColor: slate900,
            delta: "18.6%",
            deltaColor: indigo,
        },
        {
            x: 250,
            accent: "#3C9AC4",
            tint: "#E8F0F6",
            iconBg: "#E8F0F6",
            icon: Icon.cart,
            label: "Live Listings",
            value: "84,210",
            valueColor: slate900,
            delta: "14.3%",
            deltaColor: "#3C9AC4",
        },
        {
            x: 470,
            accent: "#10B981",
            tint: "#ECFDF5",
            iconBg: "#D1FAE5",
            icon: Icon.trendUp,
            label: "Validation Pass",
            value: "98.2%",
            valueColor: slate900,
            delta: "22.1%",
            deltaColor: "#10B981",
        },
    ];

    const DATES = ["May 12", "May 16", "May 20", "May 24", "May 28", "Jun 01", "Jun 05", "Jun 09"];
    const PURPLE_H = [45, 92, 128, 82, 148, 148, 105, 128];
    const BLUE_H = [38, 78, 60, 66, 82, 122, 68, 118];

    const CHART_X = 30;
    const CHART_W = 660;
    const BASE_Y = 590;
    const MAX_H = 190;
    const GROUP_W = (CHART_W - 40) / DATES.length;

    return (
        <svg
            viewBox="0 0 720 640"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            {...props}
        >
            <DiagramDefs />

            {/* Header chip */}
            <rect x="30" y="30" width="150" height="30" rx="15" fill={indigoSoft} />
            <g transform="translate(44,38)" color={indigo}>
                <svg width="14" height="14" viewBox="0 0 24 24">{Icon.trendUp}</svg>
            </g>
            <text x="64" y="49" fontFamily="Inter,system-ui" fontSize="11" fontWeight="800" fill={indigoDark} letterSpacing="1.5">AI &amp; ANALYTICS</text>

            {/* Decorative brain/chip glyph, top right */}
            <g opacity="0.3" color={indigo} stroke={indigo} fill="none" strokeWidth="1.2">
                <path d="M600 40c-24 0-40 16-42 34-14 4-22 18-18 32-8 8-8 24 4 32-2 16 12 30 30 28h70c18 2 32-12 30-28 12-8 12-24 4-32 4-14-4-28-18-32-2-18-18-34-42-34z" />
                <circle cx="586" cy="46" r="2" fill={indigo} />
                <circle cx="654" cy="52" r="2" fill={indigo} />
                <circle cx="568" cy="80" r="2" fill={indigo} />
                <circle cx="672" cy="88" r="2" fill={indigo} />
                <circle cx="592" cy="112" r="2" fill={indigo} />
                <circle cx="648" cy="116" r="2" fill={indigo} />
            </g>
            <rect x="612" y="66" width="46" height="46" rx="10" fill="white" stroke={indigo} strokeWidth="1.4" opacity="0.6" />
            <text x="635" y="95" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="15" fontWeight="800" fill={indigo} opacity="0.7">AI</text>

            {/* Title + subtitle */}
            <text x="30" y="104" fontFamily="Inter,system-ui" fontSize="25" fontWeight="800" fill={slate900}>Catalog Insights</text>
            <text x="30" y="130" fontFamily="Inter,system-ui" fontSize="14" fill={slate500}>Track your catalog performance with AI-powered analytics</text>

            {/* KPI cards */}
            {KPIS.map((k, i) => (
                <g key={k.label}>
                    <rect x={k.x} y="160" width="200" height="110" rx="16" fill="white" stroke={border} />
                    <rect x={k.x} y="160" width="6" height="110" rx="3" fill={k.accent} clipPath={`url(#kpiClip${i})`}>
                        <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <circle cx={k.x + 42} cy="196" r="18" fill={k.iconBg} />
                    <g transform={`translate(${k.x + 33},187)`} color={k.accent}>
                        <svg width="18" height="18" viewBox="0 0 24 24">{k.icon}</svg>
                    </g>
                    <text x={k.x + 66} y="192" fontFamily="Inter,system-ui" fontSize="13" fontWeight="700" fill={slate500}>{k.label}</text>
                    <text x={k.x + 66} y="222" fontFamily="Inter,system-ui" fontSize="24" fontWeight="800" fill={k.valueColor}>{k.value}</text>
                    <text x={k.x + 24} y="252" fontFamily="Inter,system-ui" fontSize="13" fontWeight="700" fill={k.deltaColor}>↑ {k.delta}</text>
                    <text x={k.x + 90} y="252" fontFamily="Inter,system-ui" fontSize="12" fill={slate400}>vs last month</text>
                </g>
            ))}

            {/* Chart card */}
            <rect x="30" y="296" width="660" height="320" rx="18" fill="white" stroke={border} />

            {/* Legend */}
            <circle cx="50" cy="322" r="5" fill={indigo} />
            <text x="62" y="326" fontFamily="Inter,system-ui" fontSize="12" fontWeight="600" fill="#334155">Amazon</text>
            <circle cx="146" cy="322" r="5" fill="#3C9AC4" />
            <text x="158" y="326" fontFamily="Inter,system-ui" fontSize="12" fontWeight="600" fill="#334155">Shopify</text>

            {/* Date range pill */}
            <rect x="565" y="308" width="110" height="30" rx="15" fill="white" stroke={border} />
            <g transform="translate(577,316)" color="#475569">
                <svg width="14" height="14" viewBox="0 0 24 24">{Icon.calendar}</svg>
            </g>
            <text x="596" y="327" fontFamily="Inter,system-ui" fontSize="11.5" fontWeight="600" fill="#334155">Last 30 days</text>
            <g transform="translate(654,316)" color={slate400}>
                <svg width="14" height="14" viewBox="0 0 24 24">{Icon.chevronDown}</svg>
            </g>

            {/* Gridlines + Y labels */}
            {[0, 25, 50, 75, 100].map((v) => {
                const y = BASE_Y - (v / 100) * MAX_H;
                return (
                    <g key={v}>
                        <line x1={CHART_X + 20} y1={y} x2={CHART_X + CHART_W - 20} y2={y} stroke="#F1F5F9" strokeDasharray="3 4">
                            <animate attributeName="stroke-dashoffset" values="0;-14" dur="2s" repeatCount="indefinite" />
                        </line>
                        <text x={CHART_X + 25} y={y + 4} textAnchor="end" fontFamily="Inter,system-ui" fontSize="11" fill={slate400}>{v === 0 ? "0" : `${v}K`}</text>
                    </g>
                );
            })}
            <line x1={CHART_X + 20} y1={BASE_Y} x2={CHART_X + CHART_W - 20} y2={BASE_Y} stroke="#CBD5E1" strokeWidth="1.5" />

            {/* Bars */}
            {DATES.map((date, i) => {
                const gx = CHART_X + 40 + i * GROUP_W;
                const ph = (PURPLE_H[i] / 100) * MAX_H;
                const bh = (BLUE_H[i] / 100) * MAX_H;
                return (
                    <g key={date}>
                        <rect x={gx} y={BASE_Y} width="16" height={ph} rx="5" fill="url(#g-purple-bar)">
                            <animate attributeName="height" from="0" to={ph} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
                            <animate attributeName="y" from={BASE_Y} to={BASE_Y - ph} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
                        </rect>
                        <rect x={gx + 20} y={BASE_Y} width="16" height={bh} rx="5" fill="url(#g-blue-bar)">
                            <animate attributeName="height" from="0" to={bh} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
                            <animate attributeName="y" from={BASE_Y} to={BASE_Y - bh} dur={`${0.6 + i * 0.08}s`} fill="freeze" />
                        </rect>
                        <text x={gx + 18} y={BASE_Y + 22} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11" fill={slate500}>{date}</text>
                    </g>
                );
            })}

            {/* Sparkles */}
            <g fill="white" stroke={indigo} strokeWidth={0.6}>
                <path d="M690 140 q4 14 18 18 q-14 4 -18 18 q-4 -14 -18 -18 q14 -4 18 -18 z">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
                </path>
                <path d="M700 220 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
                </path>
                <path d="M18 155 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
                </path>
            </g>
        </svg>
    )
};
