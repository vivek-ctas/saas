import { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* OrderFlowDiagram – Order → Pick → Pack → Ship → Delivered           */
/* ------------------------------------------------------------------ */
export const OrderFlowDiagram = (props: SVGProps<SVGSVGElement>) => {
    const STAGES = [
        { n: 1, title: "Order received", sub: "Amazon SP-API", from: "#1e40af", to: "#2563eb" },
        { n: 2, title: "Inventory check", sub: "Multi-WH route", from: "#1d4ed8", to: "#3b82f6" },
        { n: 3, title: "Pick & pack", sub: "WMS barcode", from: "#1e3a8a", to: "#1e40af" },
        { n: 4, title: "Label + ship", sub: "Best courier rate", from: "#2563eb", to: "#60a5fa" },
        { n: 5, title: "Tracked delivery", sub: "Customer notified", from: "#1d4ed8", to: "#3b82f6" },
    ];

    const TIMES = ["0s", "2s", "30s", "5m", "Out for delivery"];

    const CARD_W = 118;
    const CARD_H = 108;
    const CARD_Y = 88;
    const ARROW_W = 16;
    const TOTAL_W = STAGES.length * CARD_W + (STAGES.length - 1) * ARROW_W;
    const OFFSET_X = (760 - TOTAL_W) / 2;

    const TL_Y = 238;
    const TL_X1 = OFFSET_X + CARD_W / 2;
    const TL_X2 = OFFSET_X + TOTAL_W - CARD_W / 2;
    const TL_SPAN = TL_X2 - TL_X1;
    const DOT_YS = TL_Y;

    return (
        <svg
            viewBox="0 0 760 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                {/* Outer card gradient */}
                <linearGradient id="of-bg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f0f4ff" />
                    <stop offset="55%" stopColor="#eff6ff" />
                    <stop offset="100%" stopColor="#f0f7ff" />
                </linearGradient>

                {/* Timeline gradient */}
                <linearGradient
                    id="of-tl-grad"
                    x1={TL_X1}
                    y1={TL_Y}
                    x2={TL_X2}
                    y2={TL_Y}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>

                {/* Per-stage card gradients */}
                {STAGES.map((s, i) => (
                    <linearGradient key={i} id={`of-g${i}`} x1="0" x2="0.7" y1="0" y2="1">
                        <stop offset="0%" stopColor={s.from} />
                        <stop offset="100%" stopColor={s.to} />
                    </linearGradient>
                ))}

                {/* Card shadow */}
                <filter id="of-card-shadow" x="-5%" y="-5%" width="110%" height="115%">
                    <feDropShadow dx="0" dy="3" stdDeviation="7" floodColor="#93c5fd" floodOpacity="0.18" />
                </filter>
                <filter id="of-outer-shadow" x="-3%" y="-3%" width="106%" height="110%">
                    <feDropShadow dx="0" dy="2" stdDeviation="8" floodColor="#93c5fd" floodOpacity="0.15" />
                </filter>
            </defs>

            {/* ── Outer card ── */}
            <rect
                x="8" y="8" width="744" height="324" rx="22"
                fill="url(#of-bg)"
                stroke="#bfdbfe" strokeWidth="1.2"
                filter="url(#of-outer-shadow)"
            />

            {/* ── Header ── */}
            <g className="of-hdr-anim">
                <text
                    x="36" y="48"
                    fontFamily="'Space Grotesk','DM Sans',sans-serif"
                    fontSize="17" fontWeight="700" fill="#1a1340" letterSpacing="-0.25"
                >
                    Order lifecycle · automated end-to-end
                </text>
                <text
                    x="36" y="68"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="11.5" fill="#6b7280"
                >
                    From Marketplace ping to doorstep delivery - zero clicks.
                </text>
            </g>

            {/* ══════════ STAGE CARDS + ARROWS ══════════ */}
            {STAGES.map((s, i) => {
                const sx = OFFSET_X + i * (CARD_W + ARROW_W);
                const midX = sx + CARD_W / 2;

                return (
                    <g key={i}>
                        {/* Stage card */}
                        <g className={`of-stage-${i}`}>
                            <rect
                                x={sx} y={CARD_Y}
                                width={CARD_W} height={CARD_H}
                                rx="13"
                                fill={`url(#of-g${i})`}
                                filter="url(#of-card-shadow)"
                            />
                            {/* Number badge */}
                            <circle
                                cx={sx + 18} cy={CARD_Y + 18} r="11"
                                fill="rgba(255,255,255,0.22)"
                            />
                            <text
                                x={sx + 18} y={CARD_Y + 22}
                                textAnchor="middle"
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="11" fontWeight="700" fill="white"
                            >
                                {s.n}
                            </text>

                            {/* Stage title */}
                            <text
                                x={sx + 10} y={CARD_Y + 52}
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="12.5" fontWeight="700" fill="white"
                            >
                                {s.title.split(" ")[0]}
                            </text>
                            {s.title.includes(" ") && (
                                <text
                                    x={sx + 10} y={CARD_Y + 68}
                                    fontFamily="'DM Sans',sans-serif"
                                    fontSize="12.5" fontWeight="700" fill="white"
                                >
                                    {s.title.split(" ").slice(1).join(" ")}
                                </text>
                            )}

                            {/* Subtitle */}
                            <text
                                x={sx + 10} y={CARD_Y + 90}
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="10" fill="rgba(255,255,255,0.82)"
                            >
                                {s.sub}
                            </text>
                        </g>

                        {/* Arrow between stages */}
                        {i < STAGES.length - 1 && (
                            <g>
                                <line
                                    x1={sx + CARD_W + 2} y1={CARD_Y + CARD_H / 2}
                                    x2={sx + CARD_W + ARROW_W - 2} y2={CARD_Y + CARD_H / 2}
                                    stroke="#93c5fd" strokeWidth="1.5"
                                    className="of-arrow-flow"
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                />
                                <path
                                    d={`M${sx + CARD_W + ARROW_W - 7} ${CARD_Y + CARD_H / 2 - 5} L${sx + CARD_W + ARROW_W - 1} ${CARD_Y + CARD_H / 2} L${sx + CARD_W + ARROW_W - 7} ${CARD_Y + CARD_H / 2 + 5}`}
                                    stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                />
                            </g>
                        )}

                        {/* Timeline dot */}
                        <circle
                            cx={midX} cy={DOT_YS}
                            r="5"
                            fill="white" stroke="#2563eb" strokeWidth="2"
                            className={`of-dot-${i}`}
                        />

                        {/* Time label */}
                        <text
                            x={midX} y={DOT_YS + 26}
                            textAnchor={i === STAGES.length - 1 ? "end" : "middle"}
                            fontFamily="'DM Sans',sans-serif"
                            fontSize="11" fontWeight="700" fill="#4b5563"
                            className="of-footer-anim"
                        >
                            {TIMES[i]}
                        </text>
                    </g>
                );
            })}

            {/* ══════════ TIMELINE LINE ══════════ */}
            <line
                x1={TL_X1 - 10}
                y1={TL_Y + 10}
                x2={TL_X2 + 10}
                y2={TL_Y + 10}
                stroke="url(#of-tl-grad)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                className="of-tl-draw"
            />
            {/* ── Footer ── */}
            <text
                x="376" y="316"
                textAnchor="middle"
                fontFamily="'DM Sans',sans-serif"
                fontSize="11" fill="#9ca3af" fontStyle="italic"
                className="of-footer-anim"
            >
                Median order processing time across 50,000+ stores
            </text>
        </svg>
    )
};


/* ------------------------------------------------------------------ */
/* AnalyticsFlowDiagram - BigQuery + Power BI data flow                */
/* ------------------------------------------------------------------ */
export const AnalyticsFlowDiagram = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 850 380" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="af-bg" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#fff7ed" />
                <stop offset="100%" stopColor="#fdf2f8" />
            </linearGradient>
            <pattern id="af-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
            </pattern>
        </defs>
        <rect x="10" y="10" width="830" height="360" rx="20" fill="url(#af-bg)" stroke="#e2e8f0" />
        <rect x="10" y="10" width="830" height="360" rx="20" fill="url(#af-dots)" opacity="0.4" />

        {/* Sources column */}
        <text x="40" y="46" fontSize="11" fontWeight="800" fill="#64748b" letterSpacing="1">SOURCES</text>
        {[
            { y: 60, l: "Amazon SP-API", c: "#f59e0b" },
            { y: 110, l: "Walmart Marketplace", c: "#1d4ed8" },
            { y: 160, l: "Shopify Plus", c: "#10b981" },
            { y: 210, l: "Meta · Google Ads", c: "#ec4899" },
            { y: 260, l: "Customer reviews", c: "#8b5cf6" },
        ].map((s, i) => (
            <g key={i}>
                <rect x={30} y={s.y} width={170} height={38} rx={10} fill="white" stroke="#e2e8f0" />
                <circle cx={48} cy={s.y + 19} r={6} fill={s.c} />
                <text x={62} y={s.y + 23} fontSize={11} fontWeight={700} fill="#0f172a">{s.l}</text>
            </g>
        ))}

        {/* Pipeline */}
        <g>
            <rect x={250} y={120} width={170} height={120} rx={16} fill="white" stroke="#6366f1" strokeWidth={2} />
            <rect x={250} y={120} width={170} height={26} rx={14} fill="#6366f1" />
            <text x={262} y={138} fontSize={11} fontWeight={800} fill="white">▶ KAFKA STREAM</text>
            <text x={262} y={170} fontSize={11} fontWeight={800} fill="#0f172a">Real-time ingest</text>
            <text x={262} y={188} fontSize={10} fill="#64748b">10M+ events / day</text>
            <text x={262} y={208} fontSize={10} fill="#64748b">Schema-validated</text>
            <text x={262} y={226} fontSize={10} fill="#64748b">Sub-second latency</text>
        </g>

        {/* BigQuery warehouse */}
        <g>
            <rect x={460} y={100} width={180} height={160} rx={16} fill="white" stroke="#0ea5e9" strokeWidth={2} />
            <rect x={460} y={100} width={180} height={26} rx={14} fill="#0ea5e9" />
            <text x={472} y={118} fontSize={11} fontWeight={800} fill="white">▣ BIGQUERY WAREHOUSE</text>
            {/* mini bars */}
            {[40, 70, 55, 85, 60, 92, 75].map((h, i) => (
                <rect key={i} x={478 + i * 22} y={234 - h} width={14} height={h} rx={2} fill={i % 2 ? "#a5f3fc" : "#0ea5e9"} />
            ))}
            <text x={472} y={250} fontSize={10} fill="#64748b">Petabyte-scale · SQL anywhere</text>
        </g>

        {/* Outputs column */}
        <text x={680} y={46} fontSize={11} fontWeight={800} fill="#64748b" letterSpacing={1}>CONSUMERS</text>
        {[
            { y: 70, l: "Power BI", c: "#f59e0b" },
            { y: 120, l: "Looker Studio", c: "#3b82f6" },
            { y: 170, l: "Custom dashboards", c: "#8b5cf6" },
            { y: 220, l: "CSV / API export", c: "#10b981" },
            { y: 270, l: "AI forecast model", c: "#ec4899" },
        ].map((s, i) => (
            <g key={i}>
                <rect x={670} y={s.y} width={150} height={38} rx={10} fill="white" stroke="#e2e8f0" />
                <circle cx={688} cy={s.y + 18} r={6} fill={s.c} />
                <text x={702} y={s.y + 22} fontSize={11} fontWeight={700} fill="#0f172a">{s.l}</text>
            </g>
        ))}

        {/* Edges in */}
        {[79, 129, 179, 229, 279].map((y, i) => (
            <path key={i} d={`M200 ${y} C 230 ${y}, 230 ${130 + i * 18}, 250 ${130 + i * 18}`}
                stroke="#94a3b8" strokeWidth={1.5} fill="none" strokeDasharray="3 4" />
        ))}
        {/* Stream → BigQuery */}
        <path d="M420 180 L 460 180" stroke="#6366f1" strokeWidth={2.5} markerEnd="url(#arrow-purple)" />
        {/* BQ → consumers */}
        {[88, 138, 188, 238, 288].map((y, i) => (
            <path key={i} d={`M640 180 C 660 180, 660 ${y}, 670 ${y}`}
                stroke="#0ea5e9" strokeWidth={1.5} fill="none" strokeDasharray="3 4" />
        ))}

        <text x={410} y={344} textAnchor="middle" fontSize={11} fill="#64748b">Every order, click and review - queryable in seconds, exportable forever.</text>
    </svg>
);



/* ------------------------------------------------------------------ */
/* RepricerStrategyChart - line chart competitor vs Ctasis price       */
/* ------------------------------------------------------------------ */
export const RepricerStrategyChart = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="rsc-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(226 71% 50%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(226 71% 50%)" stopOpacity="0" />
            </linearGradient>
        </defs>
        <rect x="10" y="10" width="580" height="340" rx="20" fill="white" stroke="#e2e8f0" />
        <text x="36" y="44" fontSize="13" fontWeight="800" fill="#0f172a">Buy Box price race · last 24h</text>
        <text x="36" y="62" fontSize="11" fill="#64748b">Your floor: $21.50 · ceiling: $28.90 · Buy Box won 92% of the day</text>

        {/* axes */}
        <line x1="60" y1="280" x2="560" y2="280" stroke="#e2e8f0" />
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
            <text key={i} x={60 + i * 83} y={300} fontSize="9" textAnchor="middle" fill="#94a3b8">
                {`${i * 4}h`}
            </text>
        ))}
        {/* floor / ceiling lines */}
        <line x1="60" y1="240" x2="560" y2="240" stroke="#10b981" strokeDasharray="4 4" />
        <text x="566" y="244" fontSize="9" fill="#10b981" fontWeight="700">FLOOR</text>
        <line x1="60" y1="110" x2="560" y2="110" stroke="#ef4444" strokeDasharray="4 4" />
        <text x="566" y="114" fontSize="9" fill="#ef4444" fontWeight="700">CEILING</text>

        {/* competitor line (jagged) */}
        <polyline points="60,200 120,180 180,210 240,160 300,220 360,170 420,150 480,200 540,170"
            stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="3 3" />
        <text x="540" y="160" fontSize="9" fontWeight="700" fill="#64748b">Competitor</text>

        {/* Ctasis line (smooth, slightly under ceiling) */}
        <path d="M60 195 C 110 175, 170 200, 230 155 S 350 215, 410 145 S 500 195, 540 165"
            stroke="hsl(226 71% 50%)" strokeWidth="3" fill="none" />
        <path d="M60 195 C 110 175, 170 200, 230 155 S 350 215, 410 145 S 500 195, 540 165 L 540 280 L 60 280 Z"
            fill="url(#rsc-fill)" />
        <text x="540" y="155" fontSize="10" fontWeight="800" fill="hsl(226 71% 40%)">Ctasis</text>

        {/* Data points */}
        {[[230, 155], [410, 145], [540, 165]].map(([x, y], i) => (
            <g key={i}>
                <circle cx={x} cy={y} r="5" fill="white" stroke="hsl(226 71% 50%)" strokeWidth="2.5" />
            </g>
        ))}
    </svg>
);


/* ------------------------------------------------------------------ */
/* AIPipelineDiagram - distinct from NodeFlow: vertical AI pipeline    */
/* ------------------------------------------------------------------ */
export const AIPipelineDiagram = (props: SVGProps<SVGSVGElement>) => {
    const STAGE_W = 150;
    const STAGE_H = 170;
    const STAGE_Y = 90;
    const STAGE_GAP = 30;
    const STAGE_XS = [32, 32 + STAGE_W + STAGE_GAP, 32 + (STAGE_W + STAGE_GAP) * 2, 32 + (STAGE_W + STAGE_GAP) * 3];

    const STAGES = [
        { label: "INGEST", title: "Raw product CSV", sub: "Photos · brief · specs", hdr: "#2563eb", border: "#bfdbfe", cls: "ap-stage-0" },
        { label: "EMBED", title: "Vector + tags", sub: "OpenAI · category model", hdr: "#1d4ed8", border: "#bfdbfe", cls: "ap-stage-1" },
        { label: "GENERATE", title: "Per-channel listing", sub: "Title · bullets · keywords", hdr: "#1e40af", border: "#bfdbfe", cls: "ap-stage-2" },
        { label: "PUBLISH", title: "Push to live", sub: "Amazon · eBay · Fnac", hdr: "#1e3a8a", border: "#bfdbfe", cls: "ap-stage-3" },
    ];

    return (
        <svg
            viewBox="0 0 760 430"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                {/* Outer bg */}
                <linearGradient id="ap-bg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f0f7ff" />
                    <stop offset="50%" stopColor="#eff6ff" />
                    <stop offset="100%" stopColor="#f0f4ff" />
                </linearGradient>

                {/* Stage header gradients */}
                <linearGradient id="ap-hdr-ingest" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="ap-hdr-embed" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#1d4ed8" />
                    <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
                <linearGradient id="ap-hdr-gen" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="ap-hdr-pub" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>

                {/* Bar fill gradient */}
                <linearGradient id="ap-bar" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>

                {/* Card shadow */}
                <filter id="ap-card-shadow" x="-6%" y="-6%" width="112%" height="120%">
                    <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#93c5fd" floodOpacity="0.14" />
                </filter>
                <filter id="ap-outer-shadow" x="-4%" y="-4%" width="108%" height="112%">
                    <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#93c5fd" floodOpacity="0.16" />
                </filter>

                {/* Arrow marker */}
                <marker id="ap-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M1 1L7 4L1 7" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="ap-arr-blue" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M1 1L7 4L1 7" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
            </defs>

            {/* ── Outer card ── */}
            <rect
                x="8" y="8" width="744" height="414" rx="22"
                fill="url(#ap-bg)"
                stroke="#bfdbfe" strokeWidth="1.2"
                filter="url(#ap-outer-shadow)"
            />

            {/* ── Header ── */}
            <g className="ap-hdr-anim">
                <text
                    x="32" y="50"
                    fontFamily="'Space Grotesk','DM Sans',sans-serif"
                    fontSize="16" fontWeight="700" fill="#1a1340" letterSpacing="-0.2"
                >
                    AI Pipeline · listing → live
                </text>
                <text
                    x="32" y="70"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="11" fill="#6b7280"
                >
                    Vector embeddings, Marketplace rules and a human-in-the-loop QA gate.
                </text>
            </g>

            {/* ══════════ STAGE CARDS ══════════ */}
            {STAGES.map((s, i) => {
                const sx = STAGE_XS[i];
                const hdrGrads = ["url(#ap-hdr-ingest)", "url(#ap-hdr-embed)", "url(#ap-hdr-gen)", "url(#ap-hdr-pub)"];
                return (
                    <g key={i} className={s.cls}>
                        {/* Card */}
                        <rect x={sx} y={STAGE_Y} width={STAGE_W} height={STAGE_H} rx="14"
                            fill="#fff" stroke={s.border} strokeWidth="1.5"
                            filter="url(#ap-card-shadow)"
                        />
                        {/* Header band */}
                        <rect x={sx} y={STAGE_Y} width={STAGE_W} height="28" rx="10"
                            fill={hdrGrads[i]}
                        />
                        <rect x={sx} y={STAGE_Y + 18} width={STAGE_W} height="10" fill={hdrGrads[i]} />
                        <text
                            x={sx + 12} y={STAGE_Y + 18}
                            fontFamily="'DM Sans',sans-serif"
                            fontSize="9.5" fontWeight="700" fill="white" letterSpacing="1.8"
                        >
                            {s.label}
                        </text>

                        {/* Title + sub */}
                        <text x={sx + 12} y={STAGE_Y + 60}
                            fontFamily="'DM Sans',sans-serif"
                            fontSize="12.5" fontWeight="700" fill="#1e1b4b"
                        >{s.title}</text>
                        <text x={sx + 12} y={STAGE_Y + 90}
                            fontFamily="'DM Sans',sans-serif"
                            fontSize="10" fill="#6b7280"
                        >{s.sub}</text>

                        {/* ── Stage visual ── */}
                        {i === 0 && (
                            /* INGEST: coloured file chips */
                            <>
                                {[["CSV", "#dbeafe", "#1d4ed8"], ["IMG", "#ede9fe", "#5b21b6"], ["SKU", "#dcfce7", "#15803d"], ["TXT", "#fee2e2", "#b91c1c"]].map(([l, bg, col], j) => (
                                    <g key={j}>
                                        <rect x={sx + 12 + j * 32} y={STAGE_Y + 120} width={28} height={22} rx="6" fill={bg} />
                                        <text x={sx + 26 + j * 32} y={STAGE_Y + 135} textAnchor="middle"
                                            fontFamily="'DM Sans',sans-serif" fontSize="8.5" fontWeight="700" fill={col}>{l}</text>
                                    </g>
                                ))}
                            </>
                        )}
                        {i === 1 && (
                            /* EMBED: floating blobs */
                            <>
                                {[18, 24, 30, 24, 18].map((r, j) => (
                                    <circle key={j}
                                        cx={sx + 22 + j * 26} cy={STAGE_Y + 130}
                                        r={r / 2}
                                        fill="#3b82f6"
                                        opacity={0.3 + j * 0.1}
                                        className="ap-blob-anim"
                                        style={{ animationDelay: `${j * 0.18}s`, transformOrigin: `${sx + 18 + j * 22}px ${STAGE_Y + 108}px` }}
                                    />
                                ))}
                            </>
                        )}
                        {i === 2 && (
                            /* GENERATE: text bars */
                            <>
                                {[[100, 0.4], [80, 0.55], [62, 0.7]].map(([w, delay], j) => (
                                    <g key={j}>
                                        <rect x={sx + 12} y={STAGE_Y + 120 + j * 14} width={STAGE_W - 24} height={7} rx="3" fill="#e0e7ff" />
                                        <rect
                                            x={sx + 12} y={STAGE_Y + 120 + j * 14}
                                            width={((STAGE_W - 24) * w) / 100}
                                            height={7} rx="3"
                                            fill="url(#ap-bar)"
                                            // style={{ animation: `apBarGrow .9s ease both ${delay}s` }}
                                            style={{
                                                animation: `apBarGrow .9s ease both ${delay}s`,
                                                transformOrigin: "left center",
                                                transformBox: "fill-box",
                                            }}
                                        />
                                    </g>
                                ))}
                            </>
                        )}
                        {i === 3 && (
                            /* PUBLISH: Marketplace circles */
                            <>
                                {[["A", "#f59e0b"], ["W", "#1d4ed8"], ["F", "#ef4444"]].map(([label, col], j) => (
                                    <g key={j} className="ap-mkt-anim" style={{ animationDelay: `${j * 0.35}s`, transformOrigin: `${sx + 22 + j * 38}px ${STAGE_Y + 108}px` }}>
                                        <circle cx={sx + 35 + j * 38} cy={STAGE_Y + 130} r="14" fill={col} />
                                        <text x={sx + 35 + j * 38} y={STAGE_Y + 135} textAnchor="middle"
                                            fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="white">{label}</text>
                                    </g>
                                ))}
                            </>
                        )}
                    </g>
                );
            })}

            {/* ══════════ CONNECTOR ARROWS ══════════ */}
            {[0, 1, 2].map(i => {
                const x1 = STAGE_XS[i] + STAGE_W + 4;
                const x2 = STAGE_XS[i + 1] - 4;
                const y = STAGE_Y + STAGE_H / 2;
                return (
                    <line key={i}
                        x1={x1} y1={y} x2={x2} y2={y}
                        stroke="#94a3b8" strokeWidth="1.5"
                        markerEnd="url(#ap-arr)"
                        className="ap-conn-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                    />
                );
            })}

            {/* ══════════ QA GATE ══════════ */}
            {/* Connector line from GENERATE stage down to QA */}
            <line
                x1={STAGE_XS[2] + STAGE_W / 2} y1={STAGE_Y + STAGE_H + 2}
                x2={STAGE_XS[2] + STAGE_W / 2} y2={280}
                stroke="#2563eb" strokeWidth="1.5"
                markerEnd="url(#ap-arr-blue)"
                className="ap-conn-pulse"
                style={{ animationDelay: "0.5s" }}
            />

            <g className="ap-qa-anim">
                <rect x={186} y={280} width={372} height={90} rx="16"
                    fill="#f0f7ff"
                    stroke="#2563eb" strokeWidth="1.5"
                    strokeDasharray="8 5"
                    filter="url(#ap-card-shadow)"
                    className="ap-qa-dash"
                />
                {/* QA flag badge */}
                <rect x={202} y={296} width={22} height={22} rx="7" fill="#f97316" className="ap-glow" />
                <text x={213} y={311} textAnchor="middle"
                    fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="white">⚑</text>

                <text x={232} y={310}
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="11.5" fontWeight="700" fill="#c2410c" letterSpacing="0.5"
                >
                    HUMAN-IN-THE-LOOP QA
                </text>
                <text x={372} y={330} textAnchor="middle"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="11" fill="#475569"
                >
                    Reviewer approves / edits listing before publish
                </text>
                {/* Confidence badge */}
                <rect x={275} y={340} width={210} height={20} rx="8" fill="#fef3c7" stroke="#fde68a" strokeWidth="0.8" />
                <text x={373} y={354} textAnchor="middle"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="10" fontWeight="700" fill="#b45309"
                >
                    ⚡ Auto-approve threshold: confidence &gt; 0.92
                </text>
            </g>

            {/* ── Footer ── */}
            <text x="372" y="402" textAnchor="middle"
                fontFamily="'DM Sans',sans-serif"
                fontSize="10.5" fill="#9ca3af" fontStyle="italic"
            >
                ~4 min raw CSV → 3 channel-perfect listings · 92% auto-approved
            </text>
        </svg>
    );
}



/* ------------------------------------------------------------------ */
/* guideEditorialMockup - magazine-style hero for guide                  */
/* ------------------------------------------------------------------ */
export const GuideEditorialMockup = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 720 500" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="be-cover" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(226 71% 95%)" /><stop offset="100%" stopColor="hsl(226 71% 90%)" />
            </linearGradient>
            <linearGradient id="be-bg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#eff6ff" />
            </linearGradient>
            <linearGradient id="be-shine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <filter id="be-shadow" x="-10%" y="-10%" width="120%" height="130%">
                <feGaussianBlur stdDeviation="12" /><feOffset dy="8" />
                <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
                <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <clipPath id="be-cover-clip">
                <rect
                    x="40"
                    y="50"
                    width="280"
                    height="400"
                    rx="16"
                />
            </clipPath>
        </defs>
        <rect x="10" y="10" width="700" height="480" rx="22" fill="url(#be-bg)" stroke="#e2e8f0" />

        {/* Magazine cover left */}
        <g filter="url(#be-shadow)">
            <rect x="40" y="50" width="280" height="400" rx="16" fill="url(#be-cover)" />
            <rect x="60" y="70" width="80" height="22" rx="11" fill="hsl(226 71% 50%)" opacity="0.15" />
            <text x="100" y="86" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight="800" fill="hsl(226 71% 40%)" letterSpacing="1.5">ISSUE 04</text>
            <text x="60" y="180" fontFamily="Inter,system-ui" fontSize="22" fontWeight="800" fill="#0f172a">The Repricer</text>
            <text x="60" y="208" fontFamily="Inter,system-ui" fontSize="22" fontWeight="800" fill="#0f172a">Playbook</text>
            <line x1="60" y1="226" x2="240" y2="226" stroke="#0f172a" opacity="0.15" />
            <text x="60" y="252" fontFamily="Inter,system-ui" fontSize="11" fill="#334155">Inside the algorithm that</text>
            <text x="60" y="268" fontFamily="Inter,system-ui" fontSize="11" fill="#334155">protected $2.1M in margin</text>
            <text x="60" y="284" fontFamily="Inter,system-ui" fontSize="11" fill="#334155">across 40,000 SKUs.</text>
            {/* Decorative chart */}
            <polyline points="60,400 90,380 120,390 150,360 180,370 210,340 240,350 270,320"
                stroke="hsl(226 71% 50%)" strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="270" cy="320" r="4" fill="hsl(226 71% 50%)" opacity="0.8" />
            <text x="60" y="430" fontFamily="Inter,system-ui" fontSize="9" fill="#64748b">- Buy Box win rate, last 30 days</text>

            {/* Diagonal shine sweep on cover */}
            <g clipPath="url(#be-cover-clip)">
                <g transform="rotate(-20 180 250)">
                    <rect x="-100" y="100" width="100" height="350" fill="url(#be-shine)" style={{ mixBlendMode: "screen" }}>
                        <animateTransform attributeName="transform" type="translate" values="0 0; 600 0; 600 0" keyTimes="0; 0.55; 1" dur="4s" repeatCount="indefinite" />
                    </rect>
                </g>
            </g>
        </g>

        {/* Right column - article cards */}
        {[
            { y: 50, t: "Algorithmic vs rule-based repricing", c: "Strategy", k: "8 min" },
            { y: 160, t: "Walmart Buy Box: a different game", c: "Walmart", k: "9 min" },
            { y: 270, t: "5 analytics that actually move revenue", c: "Analytics", k: "7 min" },
            { y: 380, t: "From CSV to Fnac in 4 minutes", c: "AI", k: "5 min" },
        ].map((p, i) => (
            <g key={i} filter="url(#be-shadow)">
                <rect x="350" y={p.y} width="320" height="92" rx="14" fill="white" stroke="#e2e8f0" />
                <rect x="366" y={p.y + 18} width="60" height="18" rx="9" fill="hsl(226 71% 95%)" />
                <text x="396" y={p.y + 31} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="9" fontWeight="800" fill="hsl(226 71% 40%)">{p.c}</text>
                <text x="436" y={p.y + 31} fontFamily="Inter,system-ui" fontSize="10" fill="#94a3b8">· {p.k}</text>
                <text x="366" y={p.y + 58} fontFamily="Inter,system-ui" fontSize="13" fontWeight="800" fill="#0f172a">{p.t}</text>
                <text x="366" y={p.y + 78} fontFamily="Inter,system-ui" fontSize="10" fill="#64748b">Read the full article →</text>
            </g>
        ))}

        {/* Sparkles */}
        <g fill="white" stroke="hsl(226 71% 70%)" strokeWidth={0.6}>
            <path d="M680 40 q4 14 18 18 q-14 4 -18 18 q-4 -14 -18 -18 q14 -4 18 -18 z">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
            </path>
            <path d="M30 460 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
                <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
            </path>
            <path d="M700 460 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
            </path>
        </g>
    </svg>
);



/* ------------------------------------------------------------------ */
/* AutomationBuilderDiagram - n8n/Zapier-style node graph              */
/* Used on Services for notification & report automation               */
/* ------------------------------------------------------------------ */
export const AutomationBuilderDiagram = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 920 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <defs>
            {/* Background grid */}
            <pattern id="ab-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M24 0H0V24" stroke="#e5e7eb" strokeWidth="1" />
            </pattern>

            {/* Gradients */}
            <linearGradient id="ab-orange" x1="0" x2="1">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#f97316" />
            </linearGradient>

            <linearGradient id="ab-purple" x1="0" x2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>

            {/* Arrow */}
            <marker
                id="ab-arrow"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
            >
                {/* <path d="M9 0L1 3.5L9 9Z" fill="#fb923c" /> */}
                {/* <path d="M6 0L0 3L6 6Z" fill="#f97316" />        <path d="M10 0L0 5L10 10Z" fill="#f97316" /> */}
            </marker>
            {/* <marker
        id="ab-arrow"
        viewBox="0 0 20 20"
        refX="10"
        refY="10"
        markerWidth="10"
        markerHeight="10"
        orient="auto"
      >
        <circle
          cx="10"
          cy="10"
          r="6"
          fill="#f97316"
        />
      </marker> */}
            <linearGradient id="ab-border-bl" x1="0" x2="1" y1="0" y2="0" >
                <stop offset="0%" stopColor="#4338ca" />
                <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="ab-card-bl" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
        </defs>

        {/* Background */}
        <rect x="20" y="20" width="880" height="480" rx="24" fill="#f8fafc" stroke="#e2e8f0" />

        {/* Grid area */}
        <rect
            x="60"
            y="60"
            width="800"
            height="400"
            rx="20"
            fill="url(#ab-grid)"
            opacity="0.8"
            stroke="#e5e7eb"
        />


        {/* TRIGGER */}
        <g>
            <rect x="5" y="5" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
            <text x="25" y="40" fontSize="14" fontWeight="800" fill="white">
                TRIGGER
            </text>

            {/* Inner box */}
            <rect
                x="20"
                y="60"
                width="200"
                height="30"
                rx="12"
                fill="#dbeafe"
                stroke="#3c4df0"
                strokeWidth="2"
            />

            <text x="120" y="80" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
                Marketplace event
            </text>
            <text x="25" y="120" fontSize="14" fontWeight="800" fill="white">
                Buy Box %, price, stock…
            </text>

            {/* Amazon badge */}
            {/* <rect x="110" y="235" width="96" height="38" rx="10" fill="white" />

      <text x="158" y="258" textAnchor="middle" fontSize="15" fontWeight="800" fill="#193745">
        amazon
      </text> */}
        </g>

        {/* Schedule loop */}
        <g>
            <rect x="5" y="345" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
            <text x="25" y="390" fontSize="14" fontWeight="800" fill="white">
                SCHEDULE · DAILY 09:00
            </text>

            {/* Inner box */}
            <rect
                x="20"
                y="410"
                width="200"
                height="30"
                rx="12"
                fill="#dbeafe"
                stroke="#3c4df0"
                strokeWidth="2"
            />

            <text x="120" y="430" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
                Daily digest report
            </text>
            <text x="25" y="470" fontSize="14" fontWeight="800" fill="white">
                profit · BB · stockouts
            </text>
        </g>
        {/* Condition  */}
        <g>
            <rect x="350" y="40" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
            <text x="374" y="80" fontSize="14" fontWeight="800" fill="white">
                IF / FILTER
            </text>

            {/* Inner box */}
            <rect
                x="370"
                y="100"
                width="200"
                height="30"
                rx="12"
                fill="#dbeafe"
                stroke="#3c4df0"
                strokeWidth="2"
            />

            <text x="470" y="120" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
                Buy Box &lt; 80%
            </text>
            <text x="375" y="160" fontSize="14" fontWeight="800" fill="white">
                on hero SKUs only
            </text>
        </g>
        {/* Webhook to Zapier/n8n */}

        <g>
            <rect x="350" y="340" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
            <text x="374" y="380" fontSize="14" fontWeight="800" fill="white">
                FAN OUT · WEBHOOK
            </text>

            {/* Inner box */}
            <rect
                x="370"
                y="400"
                width="200"
                height="30"
                rx="12"
                fill="#dbeafe"
                stroke="#3c4df0"
                strokeWidth="2"
            />

            <text x="470" y="420" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
                Push to Zapier / n8n
            </text>
            <text x="375" y="460" fontSize="14" fontWeight="800" fill="white">
                JSON · signed · retried
            </text>
        </g>

        {/* Slack */}

        <g>
            <rect x="655" y="5" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
            <text x="684" y="45" fontSize="14" fontWeight="800" fill="white">
                ACTION · SLACK
            </text>

            {/* Inner box */}
            <rect
                x="680"
                y="65"
                width="200"
                height="30"
                rx="12"
                fill="#dbeafe"
                stroke="#3c4df0"
                strokeWidth="2"
            />

            <text x="780" y="85" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
                Post to #pricing
            </text>
            <text x="685" y="125" fontSize="14" fontWeight="800" fill="white">
                @channel · with chart
            </text>
        </g>

        {/* Email PDF */}

        <g>
            <rect x="655" y="200" width="260" height="170" rx="18" fill="url(#ab-card-bl)" stroke="#3c4df0" strokeWidth="2" />
            <text x="684" y="240" fontSize="14" fontWeight="800" fill="white">
                ACTION · EMAIL
            </text>

            {/* Inner box */}
            <rect
                x="680"
                y="260"
                width="200"
                height="30"
                rx="12"
                fill="#dbeafe"
                stroke="#3c4df0"
                strokeWidth="2"
            />

            <text x="780" y="280" textAnchor="middle" fontSize="16" fontWeight="800" fill="#193745">
                Send PDF report
            </text>
            <text x="685" y="320" fontSize="14" fontWeight="800" fill="white">
                to ops@brand.com
            </text>
        </g>
        {/* Zapier */}
        <g>
            <rect
                x="670"
                y="415"
                width="200"
                height="100"
                rx="12"
                fill="#dbeafe"
                stroke="#3c4df0"
                strokeWidth="2"
            />

            <text x="765" y="460" textAnchor="middle" fontSize="22" fontWeight="800" fill="#193745">
                Zapier
            </text>
            <text x="725" y="490" fontSize="14" fontWeight="800" fill="#2b3442">5,000+ apps
            </text>
        </g>
        {/* n8n */}
        <g>
            <rect
                x="120"
                y="220"
                width="200"
                height="100"
                rx="12"
                fill="#dbeafe"
                stroke="#3c4df0"
                strokeWidth="2"
            />

            <text x="215" y="260" textAnchor="middle" fontSize="22" fontWeight="800" fill="#193745">
                n8n
            </text>
            <text x="145" y="290" fontSize="14" fontWeight="800" fill="#2b3442">self-hosted workflows
            </text>
        </g>

        {/* Middle top condition */}
        {/* <g>
      <rect x="420" y="145" width="190" height="64" rx="12" fill="white" stroke="#e2e8f0" />
      <text x="515" y="183" textAnchor="middle" fontSize="15" fontWeight="700" fill="#193745">
        No sales in X hours
      </text>
    </g> */}

        {/* Lines */}
        {/* TRIGGER-IF / FILTER */}
        <path
            d="M264 80  C320 80 320 120 350 120"
            stroke="#3c4df0"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#ab-arrow)"
        />

        <circle r="5" fill="url(#ab-card-bl)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M260 80  C320 80 320 120 350 120" />
        </circle>

        {/* SCHEDULE · DAILY 09:00-FAN OUT · WEBHOOK */}
        <path
            d="M264 430 C300 430 300 420 350 420" stroke="#3c4df0"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#ab-arrow)"
        />
        <circle r="5" fill="url(#ab-card-bl)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M264 430 C300 430 300 420 350 420" />
        </circle>




        {/* IF / FILTER -FAN OUT · WEBHOOK */}
        <path
            // d="M460 210 C490 210 490 340 465 340"
            d="M460 210 L460 340"

            stroke="#3c4df0"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#ab-arrow)"
        />
        <circle r="5" fill="url(#ab-card-bl)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M460 210 L460 340" />
        </circle>

        {/* IF / FILTER -ACTION · SLACK*/}
        <path
            // d="M610 120  C485 120 485 85 660 85"
            d="M610 120 C630 120 630 85 655 85"
            stroke="#3c4df0"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#ab-arrow)"
        />
        <circle r="5" fill="url(#ab-card-bl)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M610 120 C630 120 630 85 655 85" />
        </circle>

        {/* IF / FILTER -ACTION · EMAIL */}

        <path
            // d="M610 120  C485 120 485 85 660 85"
            d="M610 120 C630 120 630 280 655 280"
            stroke="#3c4df0"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#ab-arrow)"
        />
        <circle r="5" fill="url(#ab-card-bl)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M610 120 C630 120 630 280 655 280" />
        </circle>
        {/* FAN OUT · WEBHOOK -Zapier */}

        <path
            d="M610 420 C630 420 630 460 670 460"
            stroke="#3c4df0"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#ab-arrow)"
        />
        <circle r="5" fill="url(#ab-card-bl)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M610 420 C630 420 630 460 670 460" />
        </circle>
        {/* FAN OUT · WEBHOOK -n8n */}
        <path
            d="M460 340 C400 340 400 270 320 270"
            stroke="#3c4df0"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#ab-arrow)"
        />
        <circle r="5" fill="url(#ab-card-bl)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M460 340 C400 340 400 270 320 270" />
        </circle>

    </svg>
);

/* ------------------------------------------------------------------ */
/* ReportingConsoleMockup - scheduled reports + delivery channels      */
/* Used on Infrastructure (notifications & reports section)            */
/* ------------------------------------------------------------------ */
export const ReportingConsoleMockup = (props: SVGProps<SVGSVGElement>) => {
    const REPORTS = [
        { t: "Daily profit digest", c: "Slack · #sales", time: "09:00", col: "#10b981", live: true },
        { t: "Weekly Buy Box recap", c: "Email · ops team", time: "Mon 08:00", col: "#2563eb", live: false },
        { t: "Stockout alert", c: "SMS · on-call", time: "real-time", col: "#ef4444", live: true },
        { t: "Returns spike (>5%)", c: "Slack + Webhook", time: "real-time", col: "#7c3aed", live: true },
        { t: "Monthly P&L PDF", c: "Email · finance@", time: "1st 07:00", col: "#0ea5e9", live: false },
        { t: "Competitor moved", c: "n8n webhook", time: "real-time", col: "#ea580c", live: true },
    ];

    const KPIS = [
        { l: "Revenue", v: "$48.2k", d: "+12%", col: "#7c3aed" },
        { l: "Margin", v: "31.4%", d: "+1.6%", col: "#2563eb" },
        { l: "Buy Box", v: "92%", d: "+4%", col: "#10b981" },
    ];

    const CHANNELS = [
        { l: "Slack", c: "#10b981", on: true },
        { l: "Email", c: "#2563eb", on: true },
        { l: "SMS", c: "#ef4444", on: true },
        { l: "Webhook", c: "#7c3aed", on: true },
        { l: "Zapier", c: "#ea580c", on: true },
        { l: "n8n", c: "#7c3aed", on: true },
        { l: "Teams", c: "#2563eb", on: false },
        { l: "PagerDuty", c: "#ef4444", on: false },
    ];

    // Sparkline path points (D-values for the profit line)
    const SPARK_PTS = [
        [392, 252], [418, 236], [444, 248], [470, 218],
        [496, 226], [522, 205], [548, 210], [574, 188],
        [600, 196], [626, 172], [652, 180], [672, 162],
    ];

    function sparkPath(pts: number[][]): string {
        return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
    }

    return (
        <svg
            viewBox="0 0 820 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                {/* Background */}
                <radialGradient id="rc-bg" cx="45%" cy="40%" r="65%">
                    <stop offset="0%" stopColor="#f6f2ff" />
                    <stop offset="55%" stopColor="#fff8f2" />
                    <stop offset="100%" stopColor="#eff6ff" />
                </radialGradient>

                {/* Profit line gradient */}
                <linearGradient id="rc-line" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#4338ca" />
                    <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>

                {/* Chart area fill */}
                <linearGradient id="rc-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                </linearGradient>

                {/* Card shadow filter */}
                <filter id="rc-shadow" x="-5%" y="-5%" width="110%" height="115%">
                    <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#c4b5fd" floodOpacity="0.15" />
                </filter>
            </defs>

            {/* ── Outer card ── */}
            <rect
                x="10" y="10" width="800" height="540" rx="22"
                fill="url(#rc-bg)"
                stroke="#ede9fe" strokeWidth="1.2"
                filter="url(#rc-shadow)"
            />

            {/* ── Header ── */}
            <text
                x="36" y="52"
                fontFamily="'Space Grotesk','DM Sans',sans-serif"
                fontSize="16" fontWeight="700" fill="#1a1340" letterSpacing="-0.3"
            >
                Reports &amp; Notifications
            </text>
            {/* Badge */}
            <rect x="36" y="62" width="182" height="22" rx="11" fill="#ede9fe" />
            <circle cx="50" cy="73" r="4" fill="#7c3aed" className="rc-glow" />
            <text
                x="60" y="77"
                fontFamily="'DM Sans',sans-serif"
                fontSize="10" fontWeight="700" fill="#5b21b6"
            >
                12 schedules · 4 channels active
            </text>

            {/* ══════════════════ LEFT PANEL ══════════════════ */}
            <g>
                {/* Panel bg */}
                <rect
                    x="30" y="98" width="332" height="440" rx="16"
                    fill="white" stroke="#ede9fe" strokeWidth="1"
                    filter="url(#rc-shadow)"
                />
                {/* Panel header */}
                <text
                    x="48" y="123"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="12" fontWeight="700" fill="#1e1b4b"
                >
                    Scheduled reports
                </text>
                <text
                    x="348" y="123"
                    textAnchor="end"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="11" fontWeight="700" fill="#7c3aed"
                >
                    + New
                </text>
                <line x1="30" y1="132" x2="362" y2="132" stroke="#f3f0ff" strokeWidth="1" />

                {/* Report rows */}
                {REPORTS.map((r, i) => {
                    const ry = 144 + i * 65;
                    const isActive = i === 0;
                    return (
                        <g
                            key={i}
                            className="rc-row-anim"
                            style={{ animationDelay: `${i * 0.07}s` }}
                        >
                            {/* Row bg */}
                            <rect
                                x="36" y={ry} width="320" height="54" rx="10"
                                fill={isActive ? "#f5f2ff" : "white"}
                                stroke={isActive ? "#c4b5fd" : "#f3f0ff"}
                                strokeWidth={isActive ? 1.2 : 1}
                            />
                            {/* Left accent */}
                            {isActive && (
                                <rect x="36" y={ry} width="4" height="54" rx="2" fill={r.col} opacity="0.75" />
                            )}

                            {/* Live pulse dot or static dot */}
                            {r.live ? (
                                <>
                                    <circle cx="58" cy={ry + 27} r="5" fill={r.col} opacity="0" className="rc-pulse-a" />
                                    <circle cx="58" cy={ry + 27} r="5" fill={r.col} opacity="0" className="rc-pulse-b" />
                                    <circle cx="58" cy={ry + 27} r="5" fill={r.col} />
                                </>
                            ) : (
                                <circle cx="58" cy={ry + 27} r="5" fill={r.col} opacity="0.75" />
                            )}

                            {/* Title */}
                            <text
                                x="72" y={ry + 23}
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="12" fontWeight="700" fill="#1e1b4b"
                            >
                                {r.t}
                            </text>
                            {/* Subtitle */}
                            <text
                                x="72" y={ry + 38}
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="10" fill="#94a3b8"
                            >
                                {r.c}
                            </text>
                            {/* Time */}
                            <text
                                x="342" y={ry + 30}
                                textAnchor="end"
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="11" fontWeight="700" fill="#64748b"
                            >
                                {r.time}
                            </text>
                        </g>
                    );
                })}
            </g>

            {/* ══════════════════ RIGHT TOP: Chart preview ══════════════════ */}
            <g className="rc-right-anim" style={{ animationDelay: "0.1s" }}>
                <rect
                    x="378" y="98" width="402" height="230" rx="16"
                    fill="white" stroke="#ede9fe" strokeWidth="1"
                    filter="url(#rc-shadow)"
                />
                <text
                    x="394" y="123"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="12" fontWeight="700" fill="#1a1340"
                >
                    Daily profit digest · preview
                </text>
                <rect x="722" y="110" width="48" height="18" rx="6" fill="#eff6ff" />
                <text
                    x="746" y="122"
                    textAnchor="middle"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="9.5" fontWeight="700" fill="#2563eb"
                >
                    PDF · 2pp
                </text>

                {/* Y-axis baseline */}
                <line x1="392" y1="268" x2="768" y2="268" stroke="#f0eeff" strokeWidth="1" />
                <line x1="392" y1="245" x2="768" y2="245" stroke="#f0eeff" strokeWidth="1" strokeDasharray="2 3" />
                <line x1="392" y1="222" x2="768" y2="222" stroke="#f0eeff" strokeWidth="1" strokeDasharray="2 3" />

                {/* Y labels */}
                {[["$52k", 168], ["$45k", 191], ["$38k", 214]].map(([l, y], i) => (
                    <text key={i} x="388" y={Number(y)} textAnchor="end" fontFamily="'DM Sans',sans-serif" fontSize="9" fill="#cbd5e1">{l}</text>
                ))}

                {/* Area fill under sparkline */}
                <path
                    d={`${sparkPath(SPARK_PTS)} L ${SPARK_PTS[SPARK_PTS.length - 1][0]} 268 L ${SPARK_PTS[0][0]} 268 Z`}
                    fill="url(#rc-fill)"
                />

                {/* Sparkline */}
                <path
                    d={sparkPath(SPARK_PTS)}
                    stroke="url(#rc-line)"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    className="rc-line-draw"
                />

                {/* Endpoint glow dot */}
                <circle cx="672" cy="180" r="4" fill="#dc2626" opacity="0.6" className="rc-pulse-a" />
                <circle cx="672" cy="180" r="4" fill="#dc2626" />

                {/* KPI chips */}
                {KPIS.map((k, i) => {
                    const kx = 394 + i * 126;
                    return (
                        <g
                            key={i}
                            className="rc-kpi-anim"
                            style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                        >
                            <rect x={kx} y="278" width="118" height="42" rx="9" fill="#faf8ff" stroke={k.col} strokeWidth="0" />
                            <rect x={kx} y="278" width="4" height="42" rx="2" fill={k.col} opacity="0.65" />
                            <text
                                x={kx + 12} y="292"
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="9" fontWeight="700" fill="#94a3b8"
                                letterSpacing="0.5"
                            >
                                {k.l.toUpperCase()}
                            </text>
                            <text
                                x={kx + 12} y="307"
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="13" fontWeight="700" fill={k.col}
                            >
                                {k.v}
                            </text>
                            <text
                                x={kx + 12} y="316"
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="0" fill="transparent"
                            >
                                {k.d}
                            </text>
                            <text
                                x={kx + 70} y="307"
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="10" fontWeight="700" fill={k.col}
                            >
                                {k.d} ↑
                            </text>
                        </g>
                    );
                })}
            </g>

            {/* ══════════════════ RIGHT BOTTOM: Channels ══════════════════ */}
            <g className="rc-right-anim" style={{ animationDelay: "0.2s" }}>
                <rect
                    x="378" y="340" width="402" height="198" rx="16"
                    fill="white" stroke="#ede9fe" strokeWidth="1"
                    filter="url(#rc-shadow)"
                />
                <text
                    x="394" y="363"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="12" fontWeight="700" fill="#1a1340"
                >
                    Delivery channels
                </text>

                {/* Channel chips - 4 per row */}
                {CHANNELS.map((ch, i) => {
                    const col = i % 4;
                    const row = Math.floor(i / 4);
                    const cx2 = 390 + col * 98;
                    const cy2 = 375 + row * 60;
                    const opacity = ch.on ? 1 : 0.38;

                    return (
                        <g
                            key={i}
                            className="rc-chip-anim"
                            style={{ animationDelay: `${0.25 + i * 0.06}s`, opacity }}
                        >
                            <rect
                                x={cx2} y={cy2} width="90" height="44" rx="10"
                                fill={ch.on ? "white" : "#f8f7ff"}
                                stroke={ch.c}
                                strokeWidth={ch.on ? 1.6 : 0.8}
                            />
                            <circle cx={cx2 + 14} cy={cy2 + 22} r="5" fill={ch.c} />
                            <text
                                x={cx2 + 25} y={cy2 + 26}
                                fontFamily="'DM Sans',sans-serif"
                                fontSize="11" fontWeight="700"
                                fill={ch.on ? "#1e1b4b" : "#94a3b8"}
                            >
                                {ch.l}
                            </text>
                        </g>
                    );
                })}

                {/* Footer */}
                <text
                    x="394" y="508"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="10" fill="#94a3b8"
                >
                    Toggle a channel - Ctasis re-routes instantly. No code, no redeploy.
                </text>
            </g>

            {/* ── Bottom footer ── */}
            <text
                x="410" y="552"
                textAnchor="middle"
                fontFamily="'DM Sans',sans-serif"
                fontSize="10.5" fill="#9ca3af"
                fontStyle="italic"
            >
                One write here = updated everywhere. Two-way, audited, replayable.
            </text>
        </svg>
    )
};

/* ------------------------------------------------------------------ */
/* AlertTriageDiagram - incident triage visual                         */
/* ------------------------------------------------------------------ */
export const AlertTriageDiagram = (props: SVGProps<SVGSVGElement>) => {
    interface AlertCard {
        t: string;
        s: string;
        lane: 0 | 1 | 2;
        cardIdx: number;
    }

    const CARDS: AlertCard[] = [
        { t: "Inventory restocked", s: "Amazon · SKU 8632", lane: 0, cardIdx: 0 },
        { t: "Listing approved", s: "eBay · auto-publish", lane: 0, cardIdx: 1 },
        { t: "Buy Box dropped", s: "Walmart · 4 SKUs", lane: 1, cardIdx: 2 },
        { t: "Margin near floor", s: "SKU 4421 · 12.4%", lane: 1, cardIdx: 3 },
        { t: "Stockout in 4h", s: "Hero SKU · FBA", lane: 2, cardIdx: 4 },
        { t: "Returns spike +18%", s: "Shopify · last 1h", lane: 2, cardIdx: 5 },
    ];

    const LANE_META = [
        { label: "INFO", dotColor: "#3b82f6", laneBg: "#eff6ff", laneBorder: "#bfdbfe", cardBg: "#ffffff", cardBorder: "#dbeafe", labelColor: "#1d4ed8" },
        { label: "WARNING", dotColor: "#f59e0b", laneBg: "#fffbeb", laneBorder: "#fde68a", cardBg: "#ffffff", cardBorder: "#fef3c7", labelColor: "#b45309" },
        { label: "CRITICAL", dotColor: "#f43f5e", laneBg: "#fff1f2", laneBorder: "#fecdd3", cardBg: "#ffffff", cardBorder: "#fce7f3", labelColor: "#be123c" },
    ];

    const LANE_X = [36, 264, 492];
    const LANE_W = 210;
    const LANE_H = 220;
    const LANE_Y = 92;
    const CARD_W = 186;
    const CARD_H = 52;
    const CARD_X_OFF = 12;
    const CARD_Y_START = 126;
    const CARD_GAP = 62;

    return (
        <svg
            viewBox="0 0 738 368"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                {/* Outer card gradient */}
                <linearGradient id="at-bg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f0f4ff" />
                    <stop offset="55%" stopColor="#fdf8ff" />
                    <stop offset="100%" stopColor="#fff0f5" />
                </linearGradient>

                {/* Card shadow */}
                <filter id="at-card-shadow" x="-5%" y="-5%" width="110%" height="114%">
                    <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#c4b5fd" floodOpacity="0.16" />
                </filter>
                <filter id="at-lane-shadow" x="-6%" y="-6%" width="112%" height="116%">
                    <feDropShadow dx="0" dy="1" stdDeviation="4" floodColor="#c4b5fd" floodOpacity="0.10" />
                </filter>
            </defs>

            {/* ── Outer card ── */}
            <rect
                x="8" y="8" width="722" height="352" rx="20"
                fill="url(#at-bg)"
                stroke="#e0d9f7" strokeWidth="1.2"
                filter="url(#at-card-shadow)"
            />

            {/* ── Header ── */}
            <g className="at-header-anim">
                {/* LIVE badge */}
                <rect x="28" y="26" width="56" height="22" rx="11" fill="#fff" stroke="#e0d9f7" strokeWidth="0.8" />
                <circle cx="42" cy="37" r="4" fill="#10b981" className="at-live-glow" />
                <text
                    x="50" y="41"
                    fontFamily="'DM Sans',sans-serif"
                    fontSize="9.5" fontWeight="700" fill="#059669" letterSpacing="0.5"
                >
                    LIVE
                </text>

                {/* Title */}
                <text
                    x="92" y="43"
                    fontFamily="'Space Grotesk','DM Sans',sans-serif"
                    fontSize="16" fontWeight="700" fill="#1a1340" letterSpacing="-0.2"
                >
                    Alert triage
                </text>
            </g>

            {/* ── 3 Lane columns ── */}
            {LANE_META.map((lane, li) => (
                <g key={li} className={`at-lane-${li}-anim`}>
                    {/* Lane background card */}
                    <rect
                        x={LANE_X[li]} y={LANE_Y}
                        width={LANE_W} height={LANE_H}
                        rx="14"
                        fill={lane.laneBg}
                        stroke={lane.laneBorder}
                        strokeWidth="1"
                        filter="url(#at-lane-shadow)"
                    />
                    {/* Lane label */}
                    <text
                        x={LANE_X[li] + 12} y={LANE_Y + 22}
                        fontFamily="'DM Sans',sans-serif"
                        fontSize="9.5" fontWeight="700" fill={lane.labelColor}
                        letterSpacing="1.8"
                    >
                        {lane.label}
                    </text>
                    {/* Label underline */}
                    <line
                        x1={LANE_X[li] + 12} y1={LANE_Y + 30}
                        x2={LANE_X[li] + LANE_W - 12} y2={LANE_Y + 30}
                        stroke={lane.laneBorder} strokeWidth="1"
                    />

                    {/* Cards in this lane */}
                    {CARDS.filter(c => c.lane === li).map((card, ci) => {
                        const cx = LANE_X[li] + CARD_X_OFF;
                        const cy = CARD_Y_START + ci * CARD_GAP;
                        const isCritical = li === 2;

                        return (
                            <g key={ci} className={`at-card-anim-${card.cardIdx}`}>
                                {/* Card bg */}
                                <rect
                                    x={cx} y={cy}
                                    width={CARD_W} height={CARD_H}
                                    rx="10"
                                    fill={lane.cardBg}
                                    stroke={lane.cardBorder}
                                    strokeWidth="1"
                                />

                                {/* Pulse rings behind dot */}
                                <circle
                                    cx={cx + 16} cy={cy + 26}
                                    r="5" fill={lane.dotColor} opacity="0"
                                    className="at-pulse-a"
                                    style={{ animationDelay: `${ci * 0.4}s` }}
                                />
                                <circle
                                    cx={cx + 16} cy={cy + 26}
                                    r="5" fill={lane.dotColor} opacity="0"
                                    className="at-pulse-b"
                                    style={{ animationDelay: `${ci * 0.4 + 0.8}s` }}
                                />

                                {/* Status dot */}
                                <circle
                                    cx={cx + 16} cy={cy + 26}
                                    r="5" fill={lane.dotColor}
                                    className={isCritical ? "at-critical-dot" : undefined}
                                    style={isCritical ? { animationDelay: `${ci * 0.35}s` } : undefined}
                                />

                                {/* Card text */}
                                <text
                                    x={cx + 28} y={cy + 22}
                                    fontFamily="'DM Sans',sans-serif"
                                    fontSize="12" fontWeight="700" fill="#1e1b4b"
                                >
                                    {card.t}
                                </text>
                                <text
                                    x={cx + 28} y={cy + 38}
                                    fontFamily="'DM Sans',sans-serif"
                                    fontSize="10.5" fill="#6b7280"
                                >
                                    {card.s}
                                </text>
                            </g>
                        );
                    })}
                </g>
            ))}

            {/* ── Footer ticker ── */}
            <text
                x="369" y="340"
                textAnchor="middle"
                fontFamily="'DM Sans',sans-serif"
                fontSize="10.5" fill="#9ca3af"
                fontStyle="italic"
            >
                Routed via your rules to Slack / Email / SMS / Zapier / n8n in under a second.
            </text>
        </svg>
    )
};


/* ------------------------------------------------------------------ */
/* ArticleHeroMockup - visual for guide detail pages                    */
/* ------------------------------------------------------------------ */
export const ArticleHeroMockup = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 720 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <defs>
            {/* Light background gradient - soft sky-to-lavender */}
            <linearGradient id="ah-bg" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="45%" stopColor="#ede9fe" />
                <stop offset="75%" stopColor="#fce7f3" />
                <stop offset="100%" stopColor="#fff7ed" />
            </linearGradient>

            {/* Ambient glow blobs */}
            <linearGradient id="glow1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="glow2" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#fb923c" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
            </linearGradient>

            {/* Chart fill under the algo line */}
            <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>

            {/* Card drop shadow */}
            <filter id="card-shadow" x="-8%" y="-8%" width="116%" height="120%">
                <feDropShadow
                    dx="0"
                    dy="6"
                    stdDeviation="12"
                    floodColor="#94a3b8"
                    floodOpacity="0.25"
                />
            </filter>

            {/* Paper card shadow */}
            <filter id="paper-shadow" x="-5%" y="-5%" width="110%" height="115%">
                <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="8"
                    floodColor="#94a3b8"
                    floodOpacity="0.18"
                />
            </filter>

            {/* Chart card shadow */}
            <filter id="chart-shadow" x="-5%" y="-5%" width="110%" height="115%">
                <feDropShadow
                    dx="0"
                    dy="3"
                    stdDeviation="6"
                    floodColor="#94a3b8"
                    floodOpacity="0.15"
                />
            </filter>
        </defs>

        {/* ── BACKGROUND ── */}
        <rect
            x="10"
            y="10"
            width="700"
            height="400"
            rx="22"
            fill="url(#ah-bg)"
            filter="url(#card-shadow)"
        />

        {/* Subtle border */}
        <rect
            x="10"
            y="10"
            width="700"
            height="400"
            rx="22"
            fill="none"
            stroke="#c7d2fe"
            strokeWidth="1"
        />

        {/* Ambient glow blobs */}
        <ellipse cx="160" cy="120" rx="140" ry="100" fill="url(#glow1)" />
        <ellipse cx="580" cy="320" rx="160" ry="110" fill="url(#glow2)" />

        {/* Subtle grid dots */}
        <g opacity="0.12">
            {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420].map((cx) =>
                [60, 100, 140, 180, 220, 260, 300, 340, 380].map((cy) => (
                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.2" fill="#6366f1" />
                ))
            )}
        </g>

        {/* ── PAPER CARD ── */}
        <rect
            x="48"
            y="52"
            width="360"
            height="298"
            rx="16"
            fill="white"
            filter="url(#paper-shadow)"
        />
        {/* Paper top accent strip */}
        <rect x="48" y="52" width="360" height="6" rx="3" fill="#6366f1" opacity="0.15" />

        {/* Category pill */}
        <rect x="68" y="72" width="68" height="16" rx="8" fill="#ede9fe" />
        <text
            x="102"
            y="84"
            textAnchor="middle"
            fontSize="8.5"
            fontWeight="700"
            fill="#6d28d9"
            fontFamily="Georgia, serif"
        >
            Repricing
        </text>

        {/* Article title lines */}
        <rect x="68" y="110" width="300" height="13" rx="3" fill="url(#glow1)" />
        <text
            x="200"
            y="120"
            textAnchor="middle"
            fontSize="8"
            fontWeight="700"
            fill="#64748b"
            fontFamily="Georgia, serif"
        >
            Most sellers start with rules and outgrow them in a quarter.
        </text>

        <rect x="68" y="130" width="260" height="13" rx="3" fill="url(#glow1)" />
        <text
            x="200"
            y="140"
            textAnchor="middle"
            fontSize="8"
            fontWeight="700"
            fill="#64748b"
            fontFamily="Georgia, serif"
        >
            Here's the honest breakdown on Buy Box wins and margins.
        </text>
        {/* Subtitle line */}
        <rect x="68" y="160" width="280" height="8" rx="3" fill="url(#glow2)" />

        <rect x="68" y="180" width="275" height="110" rx="12" fill="url(#glow1)" />
        <circle cx="84" cy="200" r="5" fill="#6366f1" />
        <circle cx="84" cy="230" r="5" fill="#6366f1" />
        <circle cx="84" cy="260" r="5" fill="#6366f1" />
        <text
            x="95"
            y="203"
            fontSize="9"
            fontWeight="800"
            fill="#475569"
            fontFamily="Georgia, serif"
            letterSpacing="0.5"
        >
            Per-SKU minimum margin (e.g. 18%)
        </text>
        <text
            x="95"
            y="233"
            fontSize="9"
            fontWeight="800"
            fill="#475569"
            fontFamily="Georgia, serif"
            letterSpacing="0.5"
        >
            Per-brand MAP guard rails
        </text>
        <text
            x="95"
            y="263"
            fontSize="9"
            fontWeight="800"
            fill="#475569"
            fontFamily="Georgia, serif"
            letterSpacing="0.5"
        >
            Inventory-velocity overrides for clearance
        </text>

        {/* Divider */}
        <line x1="68" y1="310" x2="388" y2="310" stroke="#e2e8f0" strokeWidth="1" />

        {/* Author row inside paper */}
        <circle cx="84" cy="330" r="10" fill="#6366f1" />
        <text
            x="84"
            y="334"
            textAnchor="middle"
            fontSize="8"
            fontWeight="700"
            fill="white"
            fontFamily="Georgia, serif"
        >
            PM
        </text>
        <text
            x="100"
            y="326"
            fontSize="8"
            fontWeight="600"
            fill="#334155"
            fontFamily="Georgia, serif"
        >
            Priya Mehta
        </text>
        <text
            x="100"
            y="337"
            fontSize="7"
            fill="#94a3b8"
            fontFamily="Georgia, serif"
        >
            Ctasis team · Apr 18, 2026
        </text>

        {/* ── CHART CARD ── */}
        <rect
            x="432"
            y="52"
            width="248"
            height="248"
            rx="16"
            fill="white"
            filter="url(#chart-shadow)"
        />
        <rect
            x="432"
            y="52"
            width="248"
            height="248"
            rx="16"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="0.8"
        />

        {/* Chart header */}
        <text
            x="452"
            y="76"
            fontSize="9"
            fontWeight="800"
            fill="#475569"
            fontFamily="Georgia, serif"
            letterSpacing="0.5"
        >
            BUY BOX % vs PRICE
        </text>

        {/* Y-axis labels */}
        {[100, 80, 60, 40].map((val, i) => (
            <text
                key={val}
                x="450"
                y={115 + i * 32}
                fontSize="7"
                fill="#64748b"
                textAnchor="end"
                fontFamily="Georgia, serif"
            >
                {val}%
            </text>
        ))}

        {/* Grid lines */}
        {[112, 144, 176, 208].map((y) => (
            <line
                key={y}
                x1="452"
                x2="660"
                y1={y}
                y2={y}
                stroke="#475569"
                strokeWidth="1"
            />
        ))}

        {/* Chart fill area under algo line */}
        <path
            d="M452 230 L482 210 L512 218 L542 192 L572 178 L602 160 L632 168 L662 140 L662 240 L452 240 Z"
            fill="url(#chart-fill)"
        />

        {/* Algo line (solid indigo) */}
        <path
            d="M452 230 L482 210 L512 218 L542 192 L572 178 L602 160 L632 168 L662 140"
            stroke="#6366f1"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        {/* Floor protected line (dashed orange) */}
        <path
            d="M452 238 L482 232 L512 226 L542 220 L572 214 L602 208 L632 202 L662 196"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4 3"
        />

        {/* Data point dots - algo */}
        {[
            [452, 230], [482, 210], [512, 218], [542, 192],
            [572, 178], [602, 160], [632, 168], [662, 140],
        ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3" fill="#6366f1" />
        ))}

        {/* +7% callout badge */}
        <rect x="622" y="126" width="32" height="15" rx="7" fill="#6366f1" />
        <text
            x="638"
            y="137"
            textAnchor="middle"
            fontSize="7.5"
            fontWeight="700"
            fill="white"
            fontFamily="Georgia, serif"
        >
            +7%
        </text>

        {/* Legend */}
        <line x1="452" y1="252" x2="466" y2="252" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
        <text x="470" y="256" fontSize="8" fill="#64748b" fontFamily="Georgia, serif">
            algo wins
        </text>
        <line
            x1="514"
            y1="252"
            x2="528"
            y2="252"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 3"
        />
        <text x="532" y="256" fontSize="8" fill="#64748b" fontFamily="Georgia, serif">
            floor protected
        </text>

        {/* Metric callout bar */}
        <rect x="452" y="264" width="210" height="14" rx="5" fill="#f8fafc" />
        <text
            x="557"
            y="274"
            textAnchor="middle"
            fontSize="7.5"
            fill="#64748b"
            fontFamily="Georgia, serif"
        >
            Buy Box share 88–94% · Avg sell price ↑4–7%
        </text>

        {/* ── STAT CHIPS BOTTOM RIGHT ── */}
        {[
            { x: 432, label: "3.2×", sub: "Buy Box wins", accent: "#6366f1" },
            { x: 514, label: "200+", sub: "SKU threshold", accent: "#0ea5e9" },
            { x: 596, label: "24/7", sub: "Auto repricing", accent: "#10b981" },
        ].map(({ x, label, sub, accent }) => (
            <g key={x}>
                <rect
                    x={x}
                    y="315"
                    width="72"
                    height="40"
                    rx="12"
                    fill="white"
                    stroke="#e2e8f0"
                    strokeWidth="0.8"
                />
                <text
                    x={x + 36}
                    y="332"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill={accent}
                    fontFamily="Georgia, serif"
                >
                    {label}
                </text>
                <text
                    x={x + 36}
                    y="346"
                    textAnchor="middle"
                    fontSize="7"
                    fill="#94a3b8"
                    fontFamily="Georgia, serif"
                >
                    {sub}
                </text>
            </g>
        ))}

        {/* ── BADGES BOTTOM LEFT ── */}
        {/* Strategy badge */}
        <rect x="48" y="368" width="78" height="24" rx="12" fill="#ede9fe" />
        <text
            x="87"
            y="384"
            textAnchor="middle"
            fontSize="9.5"
            fontWeight="700"
            fill="#4f46e5"
            fontFamily="Georgia, serif"
        >
            Strategy
        </text>

        {/* Read time badge */}
        <rect x="134" y="368" width="82" height="24" rx="12" fill="#fff7ed" />
        <text
            x="175"
            y="384"
            textAnchor="middle"
            fontSize="9.5"
            fontWeight="700"
            fill="#c2410c"
            fontFamily="Georgia, serif"
        >
            8 min read
        </text>

        {/* Date badge */}
        <rect
            x="224"
            y="368"
            width="88"
            height="24"
            rx="12"
            fill="white"
            stroke="#e2e8f0"
            strokeWidth="0.8"
        />
        <text
            x="268"
            y="384"
            textAnchor="middle"
            fontSize="9.5"
            fontWeight="600"
            fill="#64748b"
            fontFamily="Georgia, serif"
        >
            Apr 18, 2026
        </text>
    </svg>
);
