import { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* ServicesHeroMockup - operator console with service tiles + activity */
/* ------------------------------------------------------------------ */
export const ServicesHeroMockup = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="svh-bg" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#E8F0F6" />
            </linearGradient>
            <linearGradient id="svh-tile" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(211 65% 50%)" /><stop offset="100%" stopColor="hsl(211 65% 28%)" />
            </linearGradient>
            <linearGradient id="svh-tile2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(199 54% 50%)" /><stop offset="100%" stopColor="hsl(211 65% 28%)" />
            </linearGradient>
            <linearGradient id="svh-shine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <filter id="svh-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="10" /><feOffset dy="6" />
                <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
                <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            {[
                { x: 48, y: 110 },
                { x: 232, y: 110 },
                { x: 416, y: 110 },
                { x: 48, y: 230 },
                { x: 232, y: 230 },
                { x: 416, y: 230 },
            ].map((t, i) => (
                <clipPath key={`svhTileClip${i}`} id={`svhTileClip${i}`}>
                    <rect x={t.x} y={t.y} width={168} height={104} rx={16} />
                </clipPath>
            ))}
        </defs>
        <rect x="20" y="20" width="720" height="480" rx="24" fill="url(#svh-bg)" stroke="#E2E8F0" />
        <text x="48" y="60" fontFamily="Inter,system-ui" fontSize="13" fontWeight="800" fill="#0f172a">Service Console</text>
        <text x="48" y="80" fontFamily="Inter,system-ui" fontSize="11" fill="#64748b">9 services, one operator view - every action is auditable.</text>
        <rect x="600" y="44" width="118" height="26" rx="13" fill="hsl(199 54% 92%)" />
        <circle cx="614" cy="57" r="4" fill="hsl(199 54% 45%)" />
        <text x="709" y="61" textAnchor="end" fontFamily="Inter,system-ui" fontSize="10" fontWeight="800" fill="hsl(199 54% 30%)">ALL HEALTHY</text>

        {/* Service tiles grid */}
        {[
            { x: 48, y: 110, t: "Inventory Sync", v: "12,840 SKUs", k: "↻ 2s", c: "url(#svh-tile)" },
            { x: 232, y: 110, t: "Catalog Sync", v: "5M+ products", k: "▶ live", c: "url(#svh-tile)" },
            { x: 416, y: 110, t: "Product Validation", v: "98.2% pass", k: "AI", c: "url(#svh-tile2)" },
            { x: 48, y: 230, t: "Products Imported", v: "1.2M this year", k: "+24%", c: "url(#svh-tile)" },
            { x: 232, y: 230, t: "AI Listings", v: "184 generated", k: "AI", c: "url(#svh-tile2)" },
            { x: 416, y: 230, t: "Bulk Import", v: "12,480 rows", k: "✓", c: "url(#svh-tile)" },
        ].map((tile, i) => (
            <g key={i} filter="url(#svh-shadow)">
                <rect x={tile.x} y={tile.y} width={168} height={104} rx={16} fill="white" stroke="#E2E8F0" />
                <rect x={tile.x} y={tile.y} width={168} height={6} rx={3} fill={tile.c} clipPath={`url(#svhTileClip${i})`} />
                <text x={tile.x + 16} y={tile.y + 36} fontFamily="Inter,system-ui" fontSize={11} fontWeight={800} fill="#0f172a">{tile.t}</text>
                <text x={tile.x + 16} y={tile.y + 64} fontFamily="Inter,system-ui" fontSize={18} fontWeight={800} fill="#0f172a">{tile.v}</text>
                <rect x={tile.x + 16} y={tile.y + 76} width={56} height={18} rx={9} fill="hsl(199 54% 95%)" />
                <text x={tile.x + 44} y={tile.y + 89} textAnchor="middle" fontFamily="Inter,system-ui" fontSize={9} fontWeight={800} fill="hsl(199 54% 40%)">{tile.k}</text>
            </g>
        ))}

        {/* Activity feed strip */}
        <g filter="url(#svh-shadow)">
            <rect x="48" y="358" width="664" height="124" rx="16" fill="white" stroke="#E2E8F0" />
            <text x="64" y="382" fontFamily="Inter,system-ui" fontSize="11" fontWeight="800" fill="#64748b" letterSpacing="1">LIVE ACTIVITY</text>
            {[
                { y: 402, t: "AI optimizer refreshed 24 listing titles", c: "hsl(211 65% 50%)" },
                { y: 424, t: "Inventory synced from Shopify ➞ Amazon (FBM)", c: "hsl(199 54% 50%)" },
                { y: 446, t: "Bulk import validated 12,480 product rows", c: "hsl(211 65% 40%)" },
                { y: 468, t: "AI listing generator drafted 18 new bullets", c: "hsl(211 65% 55%)" },
            ].map((a, i) => (
                <g key={i}>
                    <circle cx="74" cy={a.y - 4} r="4" fill={a.c} />
                    <text x="90" y={a.y} fontFamily="Inter,system-ui" fontSize="11" fill="#334155">{a.t}</text>
                    <text x="700" y={a.y} fontFamily="Inter,system-ui" fontSize="10" textAnchor="end" fill="#94a3b8">{i + 1}s ago</text>
                </g>
            ))}
        </g>

        {/* Sparkles */}
        <g fill="#ffffff" stroke="hsl(211 65% 70%)" strokeWidth={0.6}>
            <path d="M680 90 q3 9 12 12 q-9 3 -12 12 q-3 -9 -12 -12 q9 -3 12 -12 z">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
            </path>
            <path d="M720 120 q2 6 8 8 q-6 2 -8 8 q-2 -6 -8 -8 q6 -2 8 -8 z">
                <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
            </path>
            <path d="M38 36 q2 5 7 7 q-5 2 -7 7 q-2 -5 -7 -7 q5 -2 7 -7 z">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
            </path>
        </g>

        {/* Continuous diagonal shine sweep across the whole card */}
        <g clipPath="url(#svh-card-clip)">
            <clipPath id="svh-card-clip">
                <rect x="20" y="20" width="720" height="480" rx="24" />
            </clipPath>
            <g transform="rotate(-20 380 260)">
                <rect x="-320" y="100" width="140" height="400" fill="url(#svh-shine)" style={{ mixBlendMode: "screen" }}>
                    <animateTransform attributeName="transform" type="translate" values="0 0; 1150 0; 1150 0" keyTimes="0; 0.55; 1" dur="4.2s" repeatCount="indefinite" />
                </rect>
            </g>
        </g>
    </svg>
);


export const SyncFlowDiagramV2 = (props: SVGProps<SVGSVGElement>) => {

    const blue = "#13355A";
    const blueDark = "#13355A";
    const blueSoft = "#E8F0F6";
    const blueBorder = "#BDD9EE";
    const blueText = "#13355A";

    const green = "#3C9AC4";
    const greenSoft = "#E8F0F6";
    const greenText = "#3C9AC4";

    const slate900 = "#111827";
    const slateGray = "#6B7280";
    const cardBorder = "#ECEBF3";

    const cols = [67, 233, 376, 520, 681];
    const cardW = 130;
    const cardH = 140;
    const cardY = 190;
    const numY = 100;
    const dotY = cardY + cardH + 24;
    const tagY = dotY + 35;
    const tagH = 50;

    return (
        <svg viewBox="0 0 808 549" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <filter id="sfv2-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="10" />
                    <feOffset dy="8" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.10" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="sfv2-shadow-lg" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="16" />
                    <feOffset dy="10" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.16" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <clipPath id="sfv2LogoClip">
                    <circle cx="0" cy="0" r="34" />
                </clipPath>
                <clipPath id="sfv2Card1Clip">
                    <rect x={cols[0] - cardW / 2} y={cardY} width={cardW} height={cardH} rx={14} />
                </clipPath>
            </defs>

            {/* pulsing rings behind final card */}
            <circle cx={cols[4]} cy={cardY + cardH / 2} r="120" fill={blueBorder} opacity={0.35}>
                <animate attributeName="r" values="100;130;100" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0.15;0.35" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={cols[4]} cy={cardY + cardH / 2} r="95" fill={blueBorder} opacity={0.5} />

            {/* ================= DOT CONNECTORS BETWEEN CARDS ================= */}
            {cols.slice(0, -1).map((cx, i) => {
                const x1 = cx + cardW / 2 + 8;
                const x2 = cols[i + 1] - cardW / 2 - 8;
                const lineY = cardY + cardH / 2;
                return (
                    <g key={`link-${i}`}>
                        <line
                            x1={x1} y1={lineY} x2={x2} y2={lineY}
                            stroke={blueBorder} strokeWidth={2} strokeDasharray="5 5"
                        >
                            <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
                        </line>
                        <circle r="3" fill={blue} opacity={0.7}>
                            <animateMotion dur="1.8s" repeatCount="indefinite" path={`M${x1} ${lineY} L${x2} ${lineY}`} />
                        </circle>
                    </g>
                );
            })}

            {/* ================= NUMBER BADGES + TITLES ================= */}
            <g>
                <circle cx={cols[0]} cy={numY} r="17" fill={blue} filter="url(#sfv2-shadow)" />
                <text x={cols[0]} y={numY + 6} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill="#ffffff">1</text>
                <text x={cols[0]} y={numY + 38} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill={slate900}>Update Stock</text>
                <text x={cols[0]} y={numY + 58} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill={slate900}>& Price</text>
            </g>
            <g>
                <circle cx={cols[1]} cy={numY} r="17" fill={blue} filter="url(#sfv2-shadow)" />
                <text x={cols[1]} y={numY + 5} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill="#ffffff">2</text>
                <text x={cols[1]} y={numY + 38} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill={slate900}>Sync</text>
                <text x={cols[1]} y={numY + 58} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill={slate900}>Request</text>
            </g>
            <g>
                <circle cx={cols[2]} cy={numY} r="17" fill={blue} filter="url(#sfv2-shadow)" />
                <text x={cols[2]} y={numY + 5} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill="#ffffff">3</text>
                <text x={cols[2]} y={numY + 38} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill={slate900}>Push to</text>
                <text x={cols[2]} y={numY + 58} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill={slate900}>Amazon</text>
            </g>
            <g>
                <circle cx={cols[3]} cy={numY} r="17" fill={blue} filter="url(#sfv2-shadow)" />
                <text x={cols[3]} y={numY + 5} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill="#ffffff">4</text>
                <text x={cols[3]} y={numY + 48} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill={slate900}>Confirmation</text>
            </g>
            <g>
                <circle cx={cols[4]} cy={numY} r="17" fill={blue} filter="url(#sfv2-shadow)" />
                <text x={cols[4]} y={numY + 5} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill="#ffffff">5</text>
                <text x={cols[4]} y={numY + 38} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill={slate900}>Stock</text>
                <text x={cols[4]} y={numY + 58} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill={slate900}>Updated</text>
            </g>

            {/* ================= CARD 1: STOCK & PRICE ================= */}
            <g filter="url(#sfv2-shadow)">
                <rect x={cols[0] - cardW / 2} y={cardY} width={cardW} height={cardH} rx={14} fill="#ffffff" stroke={cardBorder} />
                <rect x={cols[0] - cardW / 2} y={cardY} width={10} height={cardH} rx={5} fill={blue} clipPath="url(#sfv2Card1Clip)" />
            </g>
            <rect x={cols[0] - cardW / 2 + 15} y={cardY + 14} width={110} height={40} rx={8} fill="#ffffff" stroke={cardBorder} />
            <text x={cols[0] - cardW / 2 + 32} y={cardY + 30} fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={600} fill={slateGray}>Stock</text>
            <text x={cols[0] - cardW / 2 + 32} y={cardY + 46} fontFamily="Inter,system-ui" fontSize="13.5" fontWeight={800} fill={slate900}>1,240</text>
            <rect x={cols[0] - cardW / 2 + 15} y={cardY + 60} width={110} height={40} rx={8} fill="#ffffff" stroke={cardBorder} />
            <text x={cols[0] - cardW / 2 + 32} y={cardY + 76} fontFamily="Inter,system-ui" fontSize="10.5" fontWeight={600} fill={slateGray}>Price</text>
            <text x={cols[0] - cardW / 2 + 32} y={cardY + 92} fontFamily="Inter,system-ui" fontSize="13.5" fontWeight={800} fill={slate900}>$24.68</text>
            <polyline points={`${cols[0] - 45},${cardY + 130} ${cols[0] - 30},${cardY + 112} ${cols[0] - 10},${cardY + 123} ${cols[0] + 12},${cardY + 104} ${cols[0] + 34},${cardY + 118} ${cols[0] + 54},${cardY + 96}`} fill="none" stroke={blue} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />

            {/* ================= CARD 2: SYNC ================= */}
            <g filter="url(#sfv2-shadow)">
                <rect x={cols[1] - cardW / 2} y={cardY} width={cardW} height={cardH} rx={14} fill={blueSoft} stroke={blueBorder} />
            </g>
            <circle cx={cols[1]} cy={cardY + cardH / 2} r="30" fill={blue} />
            <g transform={`translate(${cols[1]},${cardY + cardH / 2})`}>
                <path d="M-11 -1 A11 11 0 0 1 8 -9" fill="none" stroke="#ffffff" strokeWidth={2.6} strokeLinecap="round" />
                <polygon points="8,-9 3,-10 6,-15" fill="#ffffff" />
                <path d="M11 1 A11 11 0 0 1 -8 9" fill="none" stroke="#ffffff" strokeWidth={2.6} strokeLinecap="round" />
                <polygon points="-8,9 -3,10 -6,15" fill="#ffffff" />
            </g>
            <circle cx={cols[1] - 50} cy={cardY + 24} r="3" fill={blueBorder} />
            <circle cx={cols[1] + 50} cy={cardY + 24} r="3" fill={blueBorder} />
            <circle cx={cols[1] - 50} cy={cardY + cardH - 24} r="3" fill={blueBorder} />
            <circle cx={cols[1] + 50} cy={cardY + cardH - 24} r="3" fill={blueBorder} />

            {/* ================= CARD 3: PUSH TO AMAZON ================= */}
            <g filter="url(#sfv2-shadow)">
                <rect x={cols[2] - cardW / 2} y={cardY} width={cardW} height={cardH} rx={14} fill={blueSoft} stroke={blueBorder} />
            </g>
            <g transform={`translate(${cols[2] - 20}, ${cardY + cardH / 2 - 15}) scale(1.4)`}>
                <path
                    d="M2 12L30 2L22 30L16 18L2 12ZM16 18L30 2"
                    fill="none"
                    stroke={blue}
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <line x1={cols[2] - 44} y1={cardY + cardH / 2 + 6} x2={cols[2] - 24} y2={cardY + cardH / 2 + 6} stroke={blue} strokeWidth={2} strokeLinecap="round" opacity={0.6} />
            <line x1={cols[2] - 50} y1={cardY + cardH / 2 + 16} x2={cols[2] - 30} y2={cardY + cardH / 2 + 16} stroke={blue} strokeWidth={2} strokeLinecap="round" opacity={0.4} />

            {/* ================= CARD 4: CONFIRMATION ================= */}
            <g filter="url(#sfv2-shadow)">
                <rect x={cols[3] - cardW / 2} y={cardY} width={cardW} height={cardH} rx={14} fill={blueSoft} stroke={blueBorder} />
            </g>
            <path
                d={`M${cols[3]} ${cardY + 30} L${cols[3] + 24} ${cardY + 42} V${cardY + 68} Q${cols[3] + 24} ${cardY + 92} ${cols[3]} ${cardY + 104} Q${cols[3] - 24} ${cardY + 92} ${cols[3] - 24} ${cardY + 68} V${cardY + 42} Z`}
                fill={blue}
            />
            <path
                d={`M${cols[3] - 10} ${cardY + 68} l7,8 l16,-18`}
                fill="none" stroke="#ffffff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"
            />
            <circle cx={cols[3] - 50} cy={cardY + 24} r="3" fill={blueBorder} />
            <circle cx={cols[3] + 50} cy={cardY + 24} r="3" fill={blueBorder} />
            <circle cx={cols[3] - 50} cy={cardY + cardH - 24} r="3" fill={blueBorder} />
            <circle cx={cols[3] + 50} cy={cardY + cardH - 24} r="3" fill={blueBorder} />

            {/* ================= CARD 5: AMAZON UPDATED ================= */}
            <g filter="url(#sfv2-shadow-lg)">
                <rect x={cols[4] - cardW / 2} y={cardY} width={cardW} height={cardH} rx={16} fill="#ffffff" stroke={cardBorder} />
            </g>
            <g transform={`translate(${cols[4]}, ${cardY + 48})`}>
                <image href="/logos/amazon-color-svgrepo-com.svg" x="-20" y="-18" width="40" height="40" clipPath="url(#sfv2LogoClip)" />
            </g>
            <text x={cols[4]} y={cardY + 92} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="13" fontWeight={700} fill={slate900}>Amazon</text>
            <rect x={cols[4] - 44} y={cardY + 102} width={88} height={22} rx={11} fill={greenSoft} />
            <circle cx={cols[4] - 30} cy={cardY + 113} r="7" fill={green} />
            <path d={`M${cols[4] - 33} ${cardY + 113} l2.5,3 l4.5,-6`} fill="none" stroke="#ffffff" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
            <text x={cols[4] - 18} y={cardY + 117} fontFamily="Inter,system-ui" fontSize="11.5" fontWeight={700} fill={greenText}>Updated</text>

            {/* ================= DOT CONNECTOR + FOOTER TAGS ================= */}
            {cols.map((cx, i) => (
                <g key={`tag-${i}`}>
                    <line x1={cx} y1={cardY + cardH} x2={cx} y2={tagY} stroke={blue} strokeWidth={1.6} strokeDasharray="3 4" opacity={0.6} />
                    <circle cx={cx} cy={cardY + cardH} r="3" fill={blue} />
                    <circle r="2.5" fill={blue} opacity={0.6}>
                        <animateMotion dur="1.4s" repeatCount="indefinite" path={`M${cx} ${cardY + cardH} L${cx} ${tagY}`} />
                    </circle>
                </g>
            ))}
            <rect x={cols[0] - cardW / 2} y={tagY} width={cardW} height={tagH} rx={12} fill={blueSoft} />
            <text x={cols[0]} y={tagY + 29} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill={blueText}>On Dashboard</text>

            <rect x={cols[1] - cardW / 2} y={tagY} width={cardW} height={tagH} rx={12} fill={blueSoft} />
            <text x={cols[1]} y={tagY + 21} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill={blueText}>Sent to</text>
            <text x={cols[1]} y={tagY + 38} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill={blueText}>Sync Engine</text>

            <rect x={cols[2] - cardW / 2} y={tagY} width={cardW} height={tagH} rx={12} fill={blueSoft} />
            <text x={cols[2]} y={tagY + 21} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill={blueText}>Secure API</text>
            <text x={cols[2]} y={tagY + 38} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill={blueText}>Sync</text>

            <rect x={cols[3] - cardW / 2} y={tagY} width={cardW} height={tagH} rx={12} fill={blueSoft} />
            <text x={cols[3]} y={tagY + 21} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill={blueText}>Update</text>
            <text x={cols[3]} y={tagY + 38} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill={blueText}>Received</text>

            <rect x={cols[4] - cardW / 2} y={tagY} width={cardW} height={tagH} rx={12} fill={blueSoft} />
            <text x={cols[4]} y={tagY + 21} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill={blueText}>Live on Amazon</text>
            <text x={cols[4]} y={tagY + 38} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill={blueText}>in &lt; 2s</text>

            {/* ================= BOTTOM PILL ================= */}
            <g filter="url(#sfv2-shadow)">
                <rect x={cols[1] - cardW / 2 + 45} y={470} width={330} height={50} rx={25} fill="#ffffff" stroke={blueBorder} />
            </g>
            <circle cx={cols[1] - cardW / 2 + 65} cy={495} r="14" fill={blue} />
            <path d={`M${cols[1] - cardW / 2 + 58} 495 l4,4 l8,-8`} fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <text x={cols[1] - cardW / 2 + 90} y={500} fontFamily="Inter,system-ui" fontSize="14.5" fontWeight={800} fill={blueDark}>
                One update. Everywhere. Every time.
            </text>
        </svg>
    );
};


export const SyncFlowDiagram = (props: SVGProps<SVGSVGElement>) => {

    const blue = "#13355A";
    const blueSoft = "#E8F0F6";
    const blueBorder = "#BDD9EE";
    const blueText = "#13355A";

    const green = "#3C9AC4";
    const greenSoft = "#E8F0F6";

    const slate900 = "#111827";
    const slateGray = "#6B7280";
    const cardBorder = "#ECEBF3";
    const pageBg = "#F5F4FA";

    const steps = [
        { cx: 90, num: "1", title: "Update Stock", subtitle: "On Dashboard", tag: ["Stock quantity", "updated"] },
        { cx: 267, num: "2", title: "Sync Request", subtitle: "Sent to Engine", tag: ["Request received", "& validated"] },
        { cx: 445, num: "3", title: "Push to Amazon", subtitle: "Secure API Sync", tag: ["Data pushed", "to Amazon"] },
        { cx: 628, num: "4", title: "Confirmation", subtitle: "Update Received", tag: ["Amazon confirms", "the update"] },
        { cx: 811, num: "5", title: "Stock Updated", subtitle: "Everywhere", tag: ["Stock is live", "on Amazon"] },
    ];

    const cardW = 140;
    const cardH = 150;
    const cardY = 140;
    const numY = 35;
    const titleY = 85;
    const subY = 110;
    const dotY = cardY + cardH + 22;
    const tagY = dotY + 18;
    const tagH = 56;

    return (
        <svg viewBox="0 0 904 520" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <filter id="sf-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="10" />
                    <feOffset dy="8" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.08" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="sf-shadow-sm" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="6" />
                    <feOffset dy="4" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.10" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <marker id="sf-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M1 1L8 5L1 9" fill="none" stroke={blue} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <clipPath id="sfLogoClip">
                    <circle cx="0" cy="0" r="34" />
                </clipPath>
            </defs>

            <rect x={0} y={0} width={904} height={520} fill={pageBg} />

            {/* ================= HORIZONTAL ARROWS BETWEEN CARDS ================= */}
            {steps.slice(0, -1).map((s, i) => {
                const x1 = s.cx + cardW / 2 + 6;
                const x2 = steps[i + 1].cx - cardW / 2 - 10;
                const lineY = cardY + cardH / 2;
                return (
                    <g key={`arrow-${i}`}>
                        <line
                            x1={x1} y1={lineY} x2={x2} y2={lineY}
                            stroke={blue} strokeWidth={1.8} strokeDasharray="5 5"
                            markerEnd="url(#sf-arrow)" opacity={0.75}
                        >
                            <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
                        </line>
                        <circle r="3" fill={blue} opacity={0.7}>
                            <animateMotion dur="1.8s" repeatCount="indefinite" path={`M${x1} ${lineY} L${x2} ${lineY}`} />
                        </circle>
                    </g>
                );
            })}

            {steps.map((s, i) => (
                <g key={i}>
                    {/* number badge */}
                    <circle cx={s.cx} cy={numY} r="22" fill={blue} filter="url(#sf-shadow-sm)" />
                    <text x={s.cx} y={numY + 5} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={700} fill="#ffffff">
                        {s.num}
                    </text>

                    {/* title + subtitle */}
                    <text x={s.cx} y={titleY} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="18" fontWeight={700} fill={slate900}>
                        {s.title}
                    </text>
                    <text x={s.cx} y={subY} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14.5" fontWeight={400} fill={slateGray}>
                        {s.subtitle}
                    </text>

                    {/* card */}
                    <g filter="url(#sf-shadow)">
                        <rect x={s.cx - cardW / 2} y={cardY} width={cardW} height={cardH} rx={18} fill="#ffffff" stroke={cardBorder} />
                    </g>

                    {/* connector dot -> tag */}
                    <line x1={s.cx} y1={cardY + cardH} x2={s.cx} y2={tagY} stroke={blue} strokeWidth={1.6} strokeDasharray="3 4" opacity={0.6} />
                    <circle cx={s.cx} cy={cardY + cardH} r="3.5" fill={blue} />
                    <circle r="2.5" fill={blue} opacity={0.6}>
                        <animateMotion dur="1.4s" repeatCount="indefinite" path={`M${s.cx} ${cardY + cardH} L${s.cx} ${tagY}`} />
                    </circle>

                    {/* footer tag pill */}
                    <rect x={s.cx - cardW / 2} y={tagY} width={cardW} height={tagH} rx={14} fill={blueSoft} />
                    <text x={s.cx} y={tagY + 24} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={500} fill={blueText}>
                        {s.tag[0]}
                    </text>
                    <text x={s.cx} y={tagY + 48} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="16" fontWeight={500} fill={blueText}>
                        {s.tag[1]}
                    </text>
                </g>
            ))}

            {/* ================= CARD 1: LAPTOP / DASHBOARD ================= */}
            <g transform={`translate(${steps[0].cx - cardW / 2},${cardY})`}>
                <rect x={10} y={30} width={110} height={80} rx={10} fill="#F4F3FB" stroke={blueBorder} />
                <rect x={25} y={46} width={38} height={5} rx={2.5} fill={blueBorder} />
                <rect x={25} y={58} width={26} height={5} rx={2.5} fill={blueBorder} />
                <rect x={25} y={70} width={30} height={5} rx={2.5} fill={blueBorder} />
                <path d="M78 90 L92 60 L95 80 L110 46" fill="none" stroke={blue} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
                <circle cx={110} cy={48} r="4" fill={blue} />
                <path d="M5 115 L125 115 L115 125 L15 125 Z" fill="#EDEBF7" stroke={cardBorder} />
            </g>

            {/* ================= CARD 2: SYNC ENGINE ================= */}
            <g transform={`translate(${steps[1].cx},${cardY + cardH / 2})`}>
                <circle r={62} fill={blueBorder} opacity={0.6}>
                    <animate attributeName="r" values="58;66;58" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.7;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r={50} fill={blue} />
                <g transform="translate(0,-25)">
                    <path d="M-12 -1 A12 12 0 0 1 8 -10" fill="none" stroke="#ffffff" strokeWidth={2.8} strokeLinecap="round" />
                    <polygon points="8,-10 3,-11 6.5,-16" fill="#ffffff" />
                    <path d="M12 1 A12 12 0 0 1 -8 10" fill="none" stroke="#ffffff" strokeWidth={2.8} strokeLinecap="round" />
                    <polygon points="-8,10 -3,11 -6.5,16" fill="#ffffff" />
                </g>
                <text y={16} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight={800} fill="#ffffff">
                    Sync Engine
                </text>
                <text y={34} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="11.5" fontWeight={500} fill="#BDD9EE">
                    Real-time
                </text>
            </g>

            {/* ================= CARD 3: AMAZON ================= */}
            <g transform={`translate(${steps[2].cx - cardW / 2},${cardY})`}>
                <circle cx={70} cy={52} r="48" fill="none" stroke={blue} strokeWidth="1" opacity="0.18">
                    <animate attributeName="r" values="44;48;44" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.12;0.3;0.12" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle cx={70} cy={52} r="42" fill="#FFFFFF" stroke={blue} strokeWidth="2" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" values="0;-16" dur="3s" repeatCount="indefinite" />
                </circle>
                <g transform={`translate(70,52)`}>
                    <image href="/logos/amazon-color-svgrepo-com.svg" x="-24" y="-22" width="50" height="50" clipPath="url(#sfLogoClip)" />
                </g>
                <rect x={25} y={104} width={100} height={26} rx={12} fill={greenSoft} />
                <circle cx={38} cy={118} r="4" fill={green} />
                <text x={48} y={122} fontFamily="Inter,system-ui" fontSize="12.5" fontWeight={700} fill="#3C9AC4">
                    Connected
                </text>
            </g>

            {/* ================= CARD 4: CONFIRMATION ================= */}
            <g transform={`translate(${steps[3].cx},${cardY + cardH / 2})`}>
                <circle r={48} fill="none" stroke={blueSoft} strokeWidth={1.4}>
                    <animate attributeName="r" values="44;52;44" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r={38} fill="none" stroke={blueBorder} strokeWidth={1.4} />
                <circle r={30} fill={blue} />
                <path d="M-11 0 L-3 9 L13 -9" fill="none" stroke="#ffffff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* ================= CARD 5: STOCK CHART ================= */}
            <g transform={`translate(${steps[4].cx - cardW / 2},${cardY})`}>
                <rect x={33} y={90} width={16} height={30} rx={3} fill={blueBorder} />
                <rect x={55} y={72} width={16} height={48} rx={3} fill={blueBorder} />
                <rect x={77} y={54} width={16} height={66} rx={3} fill={blue} />
                <rect x={99} y={36} width={16} height={84} rx={3} fill={blue} />
                <circle cx={107} cy={20} r="13" fill={green} />
                <path d="M100 20 l4,4 l8,-8" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* ================= BOTTOM PILL ================= */}
            <g filter="url(#sf-shadow-sm)">
                <rect x={140} y={430} width={570} height={44} rx={22} fill="#ffffff" stroke={blueBorder} />
            </g>
            <circle cx={172} cy={452} r="13" fill={blue} />
            <path d="M167 452 l3,3 l6,-6" fill="none" stroke="#ffffff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
            <text x={192} y={458} fontFamily="Inter,system-ui" fontSize="15.5" fontWeight={700} fill={slate900}>
                One update. Everywhere. Every time.
            </text>
            <line x1={480} y1={452} x2={500} y2={452} stroke={blue} strokeWidth={1.4} />
            <text x={510} y={458} fontFamily="Inter,system-ui" fontSize="15.5" fontWeight={600} fill={slateGray}>
                Sync completed in <tspan fontWeight={800} fill={blueText}>&lt; 2s</tspan>
            </text>
        </svg>
    );
};

export const AICatalogSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 520 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="s-eng" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3C9AC4" />
                <stop offset="100%" stopColor="#13355A" />
            </linearGradient>
            <clipPath id="s-cat-input-clip">
                <rect x="20" y="90" width="140" height="140" rx="12" />
            </clipPath>
            <clipPath id="s-cat-output-clip">
                <rect x="360" y="60" width="140" height="200" rx="12" />
            </clipPath>
        </defs>

        {/* input */}
        <g filter="url(#s-sh)">
            <rect x="20" y="90" width="140" height="140" rx="12" fill="white" stroke="#e2e8f0" />
            <rect x="20" y="90" width="140" height="3" rx="1.5" fill="#94a3b8" clipPath="url(#s-cat-input-clip)" />
            <text x="34" y="112" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#64748b" letterSpacing="1">INPUT</text>
            <rect x="34" y="122" width="112" height="60" rx="6" fill="#f1f5f9" />
            <text x="90" y="165" textAnchor="middle" fontFamily="Inter" fontSize="40" fill="#64748b">📦</text>
            <rect x="34" y="190" width="72" height="10" rx="2" fill="#e2e8f0" />
            <rect x="34" y="206" width="90" height="10" rx="2" fill="#e2e8f0" />
        </g>
        {/* AI engine */}
        <g filter="url(#s-sh)">
            <rect x="200" y="115" width="120" height="90" rx="14" fill="url(#s-eng)" />
            <path d="M245 145l7-7 7 7 7-7 7 7v20h-28z" fill="#fff" opacity="0.9" />
            <text x="260" y="188" textAnchor="middle" fontFamily="Inter" fontSize="12" fontWeight="800" fill="#fff">AI Catalog</text>
        </g>
        {/* output */}
        <g filter="url(#s-sh)">
            <rect x="360" y="60" width="140" height="200" rx="12" fill="white" stroke="#e2e8f0" />
            <rect x="360" y="60" width="140" height="3" rx="1.5" fill="#13355A" clipPath="url(#s-cat-output-clip)" />
            <text x="374" y="82" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#13355A" letterSpacing="1">GENERATED</text>
            <text x="374" y="100" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#0f172a">Title</text>
            <rect x="374" y="106" width="112" height="6" rx="2" fill="#D4E5F2" />
            <rect x="374" y="116" width="90" height="6" rx="2" fill="#D4E5F2" />
            <text x="374" y="140" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#0f172a">Description</text>
            <rect x="374" y="146" width="112" height="5" rx="2" fill="#e2e8f0" />
            <rect x="374" y="154" width="106" height="5" rx="2" fill="#e2e8f0" />
            <rect x="374" y="162" width="98" height="5" rx="2" fill="#e2e8f0" />
            <text x="374" y="184" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#0f172a">Bullets · Attributes</text>
            <rect x="374" y="192" width="60" height="18" rx="9" fill="#D4E5F2" />
            <text x="404" y="204" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#13355A">SEO ✓</text>
            <rect x="440" y="192" width="46" height="18" rx="9" fill="#E8F0F6" />
            <text x="463" y="204" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#3C9AC4">A+ ✓</text>
        </g>
        {/* animated line: input ➞ AI engine */}
        <line x1="160" y1="160" x2="200" y2="160" stroke="#6BC1E0" strokeWidth="1.6" strokeDasharray="4 4" markerEnd="url(#hd-arrow2)">
            <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.4s" repeatCount="indefinite" />
        </line>
        <circle r="3" fill="#6BC1E0" opacity="0.8">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M160 160 L200 160" />
        </circle>
        {/* animated line: AI engine ➞ output */}
        <line x1="320" y1="160" x2="360" y2="160" stroke="#13355A" strokeWidth="1.6" strokeDasharray="4 4" markerEnd="url(#hd-arrow3)">
            <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.4s" repeatCount="indefinite" />
        </line>
        <circle r="3" fill="#13355A" opacity="0.8">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M320 160 L360 160" />
        </circle>
        <defs>
            <marker id="hd-arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#6BC1E0" /></marker>
            <marker id="hd-arrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#13355A" /></marker>
        </defs>
    </svg>
);


export const AnalyticsDashboardSVG = (props: SVGProps<SVGSVGElement>) => {

    const DATES = ["May 12", "May 16", "May 20", "May 24", "May 28", "Jun 01", "Jun 05", "Jun 09"];

    // Normalized 0..1 series (denser than the date labels, matching the reference chart's marker count).
    const REVENUE = [0.28, 0.36, 0.33, 0.53, 0.44, 0.63, 0.56, 0.73, 0.68, 0.88, 0.82];
    const ORDERS = [0.1, 0.15, 0.13, 0.22, 0.18, 0.28, 0.24, 0.32, 0.28, 0.6, 0.55];

    const CHART_X0 = 60;
    const CHART_X1 = 590;
    const CHART_TOP = 96;
    const CHART_BOTTOM = 260;

    const REVENUE_TICKS = ["0", "2K", "4K", "6K", "8K", "10K"];
    const ORDERS_TICKS = ["0", "400", "800", "1.2K", "1.6K", "2K"];

    function pointsFor(values: number[]) {
        const n = values.length;
        return values
            .map((v, i) => {
                const x = CHART_X0 + (i / (n - 1)) * (CHART_X1 - CHART_X0);
                const y = CHART_BOTTOM - v * (CHART_BOTTOM - CHART_TOP);
                return { x, y };
            });
    }
    const revenuePts = pointsFor(REVENUE);
    const ordersPts = pointsFor(ORDERS);
    const revenuePolyline = revenuePts.map((p) => `${p.x},${p.y}`).join(" ");
    const ordersPolyline = ordersPts.map((p) => `${p.x},${p.y}`).join(" ");
    const revenueMotionPath = `M${revenuePts.map((p) => `${p.x} ${p.y}`).join(" L")}`;

    return (
        <svg viewBox="0 0 640 320" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            {/* Card */}
            <rect x="10" y="10" width="620" height="300" rx="16" fill="white" stroke="#E2E8F0" />

            {/* Title + info icon */}
            <text x="34" y="42" fontSize="17" fontWeight="800" fill="#0F172A">Catalog Performance</text>
            <circle cx="210" cy="36" r="8" fill="none" stroke="#94A3B8" strokeWidth="1.4" />
            <text x="210" y="40" textAnchor="middle" fontSize="10" fontWeight="700" fill="#94A3B8">i</text>

            {/* Date range dropdown */}
            <rect x="498" y="22" width="112" height="30" rx="15" fill="white" stroke="#E2E8F0" />
            <text x="514" y="41" fontSize="12" fontWeight="600" fill="#334155">Last 30 days</text>
            <path d="M594 35l4 4 4-4" fill="none" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

            {/* Legend */}
            <line x1="34" y1="68" x2="58" y2="68" stroke="#13355A" strokeWidth="3" strokeLinecap="round" />
            <circle cx="46" cy="68" r="3.4" fill="#13355A" />
            <text x="66" y="72" fontSize="13" fontWeight="600" fill="#334155">Live Listings</text>
            <line x1="140" y1="68" x2="164" y2="68" stroke="#3C9AC4" strokeWidth="2" strokeDasharray="4 3" />
            <text x="172" y="72" fontSize="13" fontWeight="600" fill="#334155">Imported</text>

            {/* Gridlines + left/right axis labels */}
            {REVENUE_TICKS.map((label, i) => {
                const y = CHART_BOTTOM - (i / (REVENUE_TICKS.length - 1)) * (CHART_BOTTOM - CHART_TOP);
                return (
                    <g key={label}>
                        <line x1={CHART_X0} y1={y} x2={CHART_X1} y2={y} stroke="#F1F5F9" strokeWidth="1" />
                        <text x={CHART_X0 - 10} y={y + 4} textAnchor="end" fontSize="11" fill="#94A3B8">{label}</text>
                        <text x={CHART_X1 + 10} y={y + 4} textAnchor="start" fontSize="11" fill="#94A3B8">{ORDERS_TICKS[i]}</text>
                    </g>
                );
            })}

            {/* Axis titles */}
            <text
                x="18"
                y={(CHART_TOP + CHART_BOTTOM) / 2}
                textAnchor="middle"
                fontSize="10.5"
                fontWeight="600"
                fill="#94A3B8"
                transform={`rotate(-90 18 ${(CHART_TOP + CHART_BOTTOM) / 2})`}
            >
                Live Listings
            </text>
            <text
                x="632"
                y={(CHART_TOP + CHART_BOTTOM) / 2}
                textAnchor="middle"
                fontSize="10.5"
                fontWeight="600"
                fill="#94A3B8"
                transform={`rotate(90 632 ${(CHART_TOP + CHART_BOTTOM) / 2})`}
            >
                Imported Products
            </text>
            {/* Orders line (dashed, hollow markers) */}
            <polyline fill="none" stroke="#3C9AC4" strokeWidth="1.8" strokeDasharray="5 4" points={ordersPolyline}>
                <animate attributeName="stroke-dashoffset" values="0;-18" dur="2s" repeatCount="indefinite" />
            </polyline>
            {ordersPts.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="3.6" fill="white" stroke="#3C9AC4" strokeWidth="1.8" />
            ))}

            {/* Revenue line (solid, filled markers) */}
            <polyline fill="none" stroke="#13355A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" points={revenuePolyline} />
            {revenuePts.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="4.4" fill="#13355A" />
            ))}
            <circle r="4.4" fill="#13355A" opacity="0.9">
                <animateMotion dur="3.5s" repeatCount="indefinite" path={revenueMotionPath} />
            </circle>

            {/* X axis labels */}
            {DATES.map((d, i) => {
                const x = CHART_X0 + (i / (DATES.length - 1)) * (CHART_X1 - CHART_X0);
                return (
                    <text key={d} x={x} y={CHART_BOTTOM + 26} textAnchor="middle" fontSize="12" fill="#64748B">
                        {d}
                    </text>
                );
            })}
        </svg>
    );
};


/* ------------------------------------------------------------------ */
/* Assetlibrarymockup  - visual for services pages                  */
/* ------------------------------------------------------------------ */
export const AssetLibraryMockup = (props: SVGProps<SVGSVGElement>) => {
    const products = [
        { name: "Headphones", price: "$129", rating: "★★★★★" },
        { name: "Smart Watch", price: "$199", rating: "★★★★☆" },
        { name: "Earbuds Pro", price: "$99", rating: "★★★★☆" },
        { name: "Speaker", price: "$79", rating: "★★★★★" },
        { name: "Backpack", price: "$59", rating: "★★★★☆" },
        { name: "Phone Case", price: "$19", rating: "★★★★☆" },
    ];

    const features = [
        { label: "Long Battery", desc: "Up to 40hrs playtime" },
        { label: "AI Powered", desc: "Adapts to you" },
        { label: "Fast Shipping", desc: "Free & fast delivery" },
        { label: "2 Yr Warranty", desc: "Complete peace" },
    ];

    const timeline = [
        { year: "2018", label: "Founded" },
        { year: "2020", label: "Product Launch" },
        { year: "2022", label: "Global Expansion" },
        { year: "2024", label: "1M+ Customers" },
    ];

    const comparisonRows = [
        { feature: "High Quality Sound", ours: true, a: true, b: false },
        { feature: "Active Noise Cancellation", ours: true, a: true, b: false },
        { feature: "Long Battery Life", ours: true, a: false, b: true },
        { feature: "Fast Charging", ours: true, a: true, b: false },
        { feature: "Premium Warranty", ours: true, a: false, b: false },
    ];
    return (
        <svg viewBox="0 0 900 650" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <linearGradient id="alm-hero" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#D4E5F2" />
                    <stop offset="60%" stopColor="#BDD9EE" />
                    <stop offset="100%" stopColor="#9BC7E0" />
                </linearGradient>
                <linearGradient id="alm-living" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#E8F0F6" />
                    <stop offset="100%" stopColor="#D4E5F2" />
                </linearGradient>
                <linearGradient id="alm-accent" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="hsl(211 65% 21%)" />
                    <stop offset="100%" stopColor="hsl(199 54% 60%)" />
                </linearGradient>
                <filter id="alm-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" />
                    <feOffset dy="3" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.1" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="alm-shadow-lg" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="12" />
                    <feOffset dy="4" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.12" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <rect width="900" height="650" fill="#F8FAFC" />

            {/* Outer dashboard frame */}
            <rect x="10" y="10" width="880" height="630" rx="20" fill="#FFFFFF" stroke="#E2E8F0" filter="url(#alm-shadow-lg)" />

            {/* Header */}
            <text x="40" y="58" fontFamily="Inter,system-ui" fontSize="24" fontWeight={700} fill="#0F172A" letterSpacing="0.3">
                ASSET LIBRARY
            </text>

            {/* Toolbar */}
            <g>
                <rect x="620" y="34" width="120" height="34" rx="10" fill="#FFFFFF" stroke="hsl(211 65% 21%)" strokeWidth={1.4} />
                <g transform="translate(636,44)">
                    <rect x="0" y="0" width="6" height="6" rx="1.5" fill="hsl(211 65% 21%)" />
                    <rect x="9" y="0" width="6" height="6" rx="1.5" fill="hsl(211 65% 21%)" />
                    <rect x="0" y="9" width="6" height="6" rx="1.5" fill="hsl(211 65% 21%)" />
                    <rect x="9" y="9" width="6" height="6" rx="1.5" fill="hsl(211 65% 21%)" />
                </g>
                <text x="660" y="56" fontFamily="Inter,system-ui" fontSize="13" fontWeight={600} fill="hsl(211 65% 21%)">
                    Grid View
                </text>

                <rect x="750" y="34" width="110" height="34" rx="10" fill="hsl(211 65% 21%)" />
                <g transform="translate(766,44)" stroke="#FFFFFF" strokeWidth={1.6} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9 V4 M3 4 L0.5 6.5 M3 4 L5.5 6.5" />
                    <path d="M-1 10 v1.5 a1 1 0 0 0 1 1 h6 a1 1 0 0 0 1 -1 V10" />
                </g>
                <text x="786" y="56" fontFamily="Inter,system-ui" fontSize="13" fontWeight={600} fill="#FFFFFF">
                    Upload
                </text>
            </g>

            {/* ===================== ROW 1 ===================== */}

            {/* Hero banner */}
            <g filter="url(#alm-shadow)">
                <rect x="40" y="100" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
                <clipPath id="alm-hero-clip">
                    <rect x="56" y="114" width="368" height="96" rx="10" />
                </clipPath>
                <g clipPath="url(#alm-hero-clip)">
                    <rect x="56" y="114" width="368" height="96" fill="url(#alm-hero)" />
                    <rect x="72" y="128" width="18" height="3" rx="1.5" fill="hsl(211 65% 21%)" />
                    <text x="72" y="150" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill="#0F172A">
                        Elevate Your
                    </text>
                    <text x="72" y="166" fontFamily="Inter,system-ui" fontSize="14" fontWeight={700} fill="#0F172A">
                        Sound Experience
                    </text>
                    <text x="72" y="180" fontFamily="Inter,system-ui" fontSize="8" fill="#64748B">
                        Premium quality. Pure performance.
                    </text>
                    <rect x="72" y="188" width="62" height="16" rx="8" fill="hsl(211 65% 21%)" />
                    <text x="103" y="199" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="8" fontWeight={600} fill="#FFFFFF">
                        Shop Now
                    </text>

                    <ellipse cx="360" cy="196" rx="34" ry="6" fill="#FFFFFF" opacity={0.7} />
                    <rect x="332" y="188" width="56" height="10" rx="5" fill="#FFFFFF" />

                    <g transform="translate(328,132)">
                        <path d="M8 30 A24 24 0 0 1 56 30" fill="none" stroke="#1E293B" strokeWidth={6} strokeLinecap="round" />
                        <rect x="0" y="26" width="14" height="20" rx="7" fill="#334155" />
                        <rect x="50" y="26" width="14" height="20" rx="7" fill="#334155" />
                        <circle cx="7" cy="36" r="4" fill="#13355A" />
                        <circle cx="57" cy="36" r="4" fill="#13355A" />
                    </g>

                    <circle cx="404" cy="130" r="16" fill="hsl(211 65% 21%)" />
                    <text x="404" y="127" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fontWeight={700} fill="#FFFFFF">
                        New
                    </text>
                    <text x="404" y="135" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fontWeight={700} fill="#FFFFFF">
                        Arrival
                    </text>
                </g>

                <rect x="56" y="216" width="20" height="20" rx="6" fill="hsl(211 65% 21%)" />
                <text x="66" y="230" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
                    1
                </text>
                <text x="84" y="230" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
                    Hero Banner
                </text>
            </g>

            {/* Comparison table */}
            <g filter="url(#alm-shadow)">
                <rect x="460" y="100" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
                <rect x="626" y="114" width="90" height="94" fill="#E8F0F6" />

                <text x="474" y="128" fontFamily="Inter,system-ui" fontSize="8.5" fontWeight={700} fill="#0F172A">
                    Features
                </text>
                <text x="671" y="124" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7.5" fontWeight={700} fill="#0F172A">
                    Our Product
                </text>
                <text x="748" y="124" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7.5" fontWeight={700} fill="#0F172A">
                    Competitor A
                </text>
                <text x="822" y="124" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7.5" fontWeight={700} fill="#0F172A">
                    Competitor B
                </text>
                <line x1="474" y1="132" x2="846" y2="132" stroke="#E2E8F0" />

                {comparisonRows.map((row, i) => {
                    const y = 146 + i * 14;
                    const dotY = y - 3;
                    return (
                        <g key={row.feature}>
                            <text x="474" y={y} fontFamily="Inter,system-ui" fontSize="7.5" fill="#334155">
                                {row.feature}
                            </text>

                            {row.ours ? (
                                <>
                                    <circle cx="671" cy={dotY} r="6" fill="hsl(211 65% 21%)" />
                                    <path d={`M668 ${dotY} l2 2 l4 -4`} stroke="#FFFFFF" strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                            ) : (
                                <line x1="667" y1={dotY} x2="675" y2={dotY} stroke="#94A3B8" strokeWidth={1.4} strokeLinecap="round" />
                            )}

                            {row.a ? (
                                <>
                                    <circle cx="748" cy={dotY} r="6" fill="#CBD5E1" />
                                    <path d={`M745 ${dotY} l2 2 l4 -4`} stroke="#475569" strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                            ) : (
                                <line x1="744" y1={dotY} x2="752" y2={dotY} stroke="#94A3B8" strokeWidth={1.4} strokeLinecap="round" />
                            )}

                            {row.b ? (
                                <>
                                    <circle cx="822" cy={dotY} r="6" fill="#CBD5E1" />
                                    <path d={`M819 ${dotY} l2 2 l4 -4`} stroke="#475569" strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                            ) : (
                                <line x1="818" y1={dotY} x2="826" y2={dotY} stroke="#94A3B8" strokeWidth={1.4} strokeLinecap="round" />
                            )}
                        </g>
                    );
                })}

                <rect x="474" y="216" width="20" height="20" rx="6" fill="hsl(211 65% 21%)" />
                <text x="484" y="230" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
                    2
                </text>
                <text x="502" y="230" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
                    Comparison
                </text>
            </g>

            {/* ===================== ROW 2 ===================== */}

            {/* Brand story */}
            <g filter="url(#alm-shadow)">
                <rect x="40" y="270" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />

                <polygon points="66,286 76,291 76,301 66,306 56,301 56,291" fill="hsl(211 65% 21%)" />
                <text x="82" y="296" fontFamily="Inter,system-ui" fontSize="12" fontWeight={800} fill="#0F172A">
                    A+ <tspan fill="hsl(211 65% 21%)">BRAND</tspan>
                </text>
                <text x="82" y="307" fontFamily="Inter,system-ui" fontSize="7" fill="#64748B">
                    Built for Better Living
                </text>
                <line x1="56" y1="344" x2="410" y2="344" stroke="#CBD5E1" strokeWidth={1.4} strokeDasharray="2 3" />
                {timeline.map((t, i) => {
                    const x = 80 + i * 100;
                    return (
                        <g key={t.year} textAnchor="middle">
                            <circle cx={x} cy="344" r="4" fill="hsl(211 65% 21%)" />
                            <circle cx={x} cy="366" r="12" fill="#D4E5F2" />
                            <text x={x} y="338" fontFamily="Inter,system-ui" fontSize="7" fontWeight={700} fill="#0F172A" textAnchor="middle">
                                {t.year}
                            </text>
                            <text x={x} y="384" fontFamily="Inter,system-ui" fontSize="6" fill="#64748B" textAnchor="middle">
                                {t.label}
                            </text>
                        </g>
                    );
                })}

                <rect x="56" y="396" width="20" height="20" rx="6" fill="hsl(211 65% 21%)" />
                <text x="66" y="410" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
                    3
                </text>
                <text x="84" y="410" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
                    Brand Story
                </text>
            </g>

            {/* Feature icons */}
            <g filter="url(#alm-shadow)">
                <rect x="460" y="270" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />

                {features.map((f, i) => {
                    const cx = 500 + i * 90;
                    const cy = 300;
                    return (
                        <g key={f.label} transform={`translate(${cx},${cy})`} textAnchor="middle">
                            <circle cx="0" cy="0" r="20" fill="#E8F0F6" />
                            {i === 0 && (
                                <>
                                    <rect x="-9" y="-8" width="16" height="16" rx="2" fill="none" stroke="hsl(211 65% 21%)" strokeWidth={1.6} />
                                    <rect x="7" y="-4" width="3" height="8" rx="1" fill="hsl(211 65% 21%)" />
                                    <path d="M-3 -8 l-2 6 h4 l-2 6" fill="none" stroke="hsl(211 65% 21%)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
                                </>
                            )}
                            {i === 1 && (
                                <>
                                    <path
                                        d="M-8 -8 q-4 4 0 8 q-2 4 2 6 q4 2 6 -2 q4 -1 3 -6 q3 -4 -1 -7 q-4 -3 -7 0 q-2 0 -3 1"
                                        fill="none"
                                        stroke="hsl(211 65% 21%)"
                                        strokeWidth={1.4}
                                        strokeLinejoin="round"
                                    />
                                    <circle cx="-4" cy="-2" r="1" fill="hsl(211 65% 21%)" />
                                    <circle cx="2" cy="2" r="1" fill="hsl(211 65% 21%)" />
                                    <circle cx="-2" cy="5" r="1" fill="hsl(211 65% 21%)" />
                                </>
                            )}
                            {i === 2 && (
                                <>
                                    <rect x="-10" y="-5" width="13" height="10" rx="1.5" fill="none" stroke="hsl(211 65% 21%)" strokeWidth={1.5} />
                                    <path d="M3 -2 h6 l3 4 v3 h-9 z" fill="none" stroke="hsl(211 65% 21%)" strokeWidth={1.5} strokeLinejoin="round" />
                                    <circle cx="-5" cy="7" r="2.2" fill="none" stroke="hsl(211 65% 21%)" strokeWidth={1.3} />
                                    <circle cx="6" cy="7" r="2.2" fill="none" stroke="hsl(211 65% 21%)" strokeWidth={1.3} />
                                </>
                            )}
                            {i === 3 && (
                                <>
                                    <path
                                        d="M0 -10 l9 3 v6 c0 6 -4 9 -9 11 c-5 -2 -9 -5 -9 -11 v-6 z"
                                        fill="none"
                                        stroke="hsl(211 65% 21%)"
                                        strokeWidth={1.5}
                                        strokeLinejoin="round"
                                    />
                                    <path d="M-4 0 l3 3 l6 -6" fill="none" stroke="hsl(211 65% 21%)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                                </>
                            )}
                            <text x="0" y="34" fontFamily="Inter,system-ui" fontSize="8" fontWeight={700} fill="#0F172A">
                                {f.label}
                            </text>
                            <text x="0" y="44" fontFamily="Inter,system-ui" fontSize="6" fill="#64748B">
                                {f.desc}
                            </text>
                        </g>
                    );
                })}

                <rect x="474" y="386" width="20" height="20" rx="6" fill="hsl(211 65% 21%)" />
                <text x="484" y="400" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
                    4
                </text>
                <text x="502" y="400" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
                    Features
                </text>
            </g>

            {/* ===================== ROW 3 ===================== */}

            {/* Product grid */}
            <g filter="url(#alm-shadow)">
                <rect x="40" y="440" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />

                {products.map((p, i) => {
                    const x = 52 + i * 64;
                    const y = 456;
                    return (
                        <g key={p.name} transform={`translate(${x},${y})`}>
                            <rect x="0" y="0" width="58" height="80" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                            <rect x="16" y="12" width="26" height="26" rx="6" fill="hsl(211 65% 95%)" />
                            <circle cx="29" cy="25" r="8" fill="hsl(199 54% 50%)" />
                            <text x="29" y="58" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="5.6" fill="#0F172A">
                                {p.name}
                            </text>
                            <text x="29" y="66" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="5.8" fontWeight={700} fill="hsl(211 65% 21%)">
                                {p.price}
                            </text>
                            <text x="29" y="75" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6" fill="#3C9AC4">
                                {p.rating}
                            </text>
                        </g>
                    );
                })}

                <rect x="54" y="556" width="20" height="20" rx="6" fill="hsl(211 65% 21%)" />
                <text x="64" y="570" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
                    5
                </text>
                <text x="82" y="570" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
                    Product Grid
                </text>
            </g>

            {/* Lifestyle banner */}
            <g filter="url(#alm-shadow)">
                <rect x="460" y="440" width="400" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
                <clipPath id="alm-life-clip">
                    <rect x="476" y="454" width="368" height="96" rx="10" />
                </clipPath>
                <g clipPath="url(#alm-life-clip)">
                    <rect x="476" y="454" width="368" height="96" fill="url(#alm-living)" />

                    <rect x="490" y="468" width="16" height="3" rx="1.5" fill="hsl(211 65% 21%)" />
                    <text x="490" y="488" fontFamily="Inter,system-ui" fontSize="13" fontWeight={700} fill="#0F172A">
                        Designed for
                    </text>
                    <text x="490" y="502" fontFamily="Inter,system-ui" fontSize="13" fontWeight={700} fill="#0F172A">
                        Modern Living
                    </text>
                    <text x="490" y="514" fontFamily="Inter,system-ui" fontSize="7" fill="#64748B">
                        Fits your lifestyle with elegance.
                    </text>
                    <rect x="490" y="522" width="58" height="15" rx="7.5" fill="hsl(211 65% 21%)" />
                    <text x="519" y="532" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7.5" fontWeight={600} fill="#FFFFFF">
                        Explore
                    </text>

                    <g transform="translate(800,470)">
                        <rect x="0" y="0" width="26" height="40" fill="none" stroke="#94A3B8" strokeWidth={1.4} />
                        <line x1="0" y1="14" x2="26" y2="14" stroke="#94A3B8" strokeWidth={1.2} />
                        <line x1="0" y1="27" x2="26" y2="27" stroke="#94A3B8" strokeWidth={1.2} />
                        <rect x="3" y="3" width="4" height="9" fill="#9BC7E0" />
                        <rect x="9" y="3" width="4" height="9" fill="hsl(211 65% 21%)" />
                        <circle cx="20" cy="7" r="4" fill="none" stroke="#6BC1E0" strokeWidth={1.2} />
                    </g>

                    <g transform="translate(772,466)">
                        <line x1="0" y1="10" x2="0" y2="46" stroke="#334155" strokeWidth={1.6} />
                        <path d="M-7 10 l14 0 l-4 -8 l-6 0 z" fill="#6BC1E0" />
                    </g>

                    <g transform="translate(626,510)">
                        <rect x="-8" y="18" width="16" height="16" rx="2" fill="#9BC7E0" />
                        <path d="M0 18 q-2 -14 -10 -16" fill="none" stroke="#3C9AC4" strokeWidth={2.2} strokeLinecap="round" />
                        <path d="M0 18 q2 -18 12 -20" fill="none" stroke="#3C9AC4" strokeWidth={2.2} strokeLinecap="round" />
                        <path d="M0 18 q0 -20 0 -22" fill="none" stroke="#3C9AC4" strokeWidth={2.2} strokeLinecap="round" />
                    </g>

                    <g transform="translate(650,510)">
                        <rect x="-4" y="8" width="120" height="22" rx="8" fill="#9BC7E0" />
                        <rect x="-4" y="-2" width="20" height="18" rx="6" fill="#6BC1E0" />
                        <rect x="96" y="-2" width="20" height="18" rx="6" fill="#6BC1E0" />
                        <rect x="16" y="0" width="76" height="14" rx="6" fill="#BDD9EE" />
                        <rect x="0" y="28" width="8" height="8" fill="#6BC1E0" />
                        <rect x="104" y="28" width="8" height="8" fill="#6BC1E0" />
                    </g>

                    <g transform="translate(696,538)">
                        <ellipse cx="0" cy="8" rx="20" ry="4" fill="#E2E8F0" />
                        <rect x="-2" y="8" width="4" height="8" fill="#94A3B8" />
                        <rect x="12" y="8" width="4" height="8" fill="#94A3B8" />
                        <rect x="-8" y="-8" width="16" height="16" rx="6" fill="#1E293B" />
                        <circle cx="0" cy="0" r="4" fill="#334155" />
                    </g>

                    <rect x="606" y="464" width="16" height="20" rx="2" fill="none" stroke="#94A3B8" strokeWidth={1.3} />
                </g>

                <rect x="474" y="556" width="20" height="20" rx="6" fill="hsl(211 65% 21%)" />
                <text x="484" y="570" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight={700} fill="#FFFFFF">
                    6
                </text>
                <text x="502" y="570" fontFamily="Inter,system-ui" fontSize="11" fontWeight={600} fill="#0F172A">
                    Lifestyle
                </text>
            </g>

            {/* Footer */}
            <line x1="40" y1="608" x2="860" y2="608" stroke="#E2E8F0" />
            <g transform="translate(40,616)">
                <path d="M0 4 h6 l2 2 h10 v10 h-18 z" fill="none" stroke="#64748B" strokeWidth={1.4} strokeLinejoin="round" />
                <text x="26" y="14" fontFamily="Inter,system-ui" fontSize="10" fill="#334155">
                    12 Assets
                </text>
            </g>
            <g transform="translate(770,624)">
                <circle cx="0" cy="0" r="8" fill="none" stroke="#64748B" strokeWidth={1.4} />
                <path d="M0 -4 v4 l3 3" fill="none" stroke="#64748B" strokeWidth={1.4} strokeLinecap="round" />
                <text x="14" y="4" fontFamily="Inter,system-ui" fontSize="10" fill="#334155">
                    Last Updated Today
                </text>
            </g>
        </svg>
    )
};

export const RolesIllustration = (props: SVGProps<SVGSVGElement>) => {

    const ICONS: Record<string, JSX.Element> = {
        crown: (
            <path
                fill="currentColor"
                d="M4 9l3.5 2.5L12 6l4.5 5.5L20 9l-1.6 8.5a1.2 1.2 0 01-1.2 1H6.8a1.2 1.2 0 01-1.2-1L4 9z"
            />
        ),
        briefcase: (
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="8" width="17" height="11" rx="2" fill="currentColor" stroke="none" />
                <path d="M9 8V6.5A1.5 1.5 0 0110.5 5h3A1.5 1.5 0 0115 6.5V8" />
            </g>
        ),
        person: (
            <g fill="currentColor">
                <circle cx="12" cy="8.5" r="4" />
                <path d="M4.5 20.5a7.5 7.5 0 0115 0z" />
            </g>
        ),
        star: (
            <path fill="currentColor" d="M12 2.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
        ),
        shieldCheck: (
            <g fill="currentColor">
                <path d="M12 2.5l7 3v5.4c0 4.7-3 8.7-7 9.8-4-1.1-7-5.1-7-9.8V5.5z" />
            </g>
        ),
        check: (
            <path fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12l4.5 4.5L19 7" />
        ),
        document: (
            <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 3.5h7l4 4v13a1 1 0 01-1 1h-10a1 1 0 01-1-1v-16a1 1 0 011-1z" />
                <path d="M13 3.5V8h4M9 12h6M9 15.5h6" />
            </g>
        ),
        users: (
            <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8.5" r="3" />
                <path d="M3.5 19c0-3 2.5-5.3 5.5-5.3s5.5 2.3 5.5 5.3" />
                <circle cx="17" cy="9" r="2.4" />
                <path d="M15.5 13.9c2.4.3 4 2.3 4 5.1" />
            </g>
        ),
        database: (
            <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="6" rx="7" ry="2.4" />
                <path d="M5 6v12c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4V6" />
                <path d="M5 12c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4" />
            </g>
        ),
        tag: (
            <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.5 3.5H19a1.5 1.5 0 011.5 1.5v6.5a1.5 1.5 0 01-.44 1.06l-8 8a1.5 1.5 0 01-2.12 0l-6.5-6.5a1.5 1.5 0 010-2.12l8-8a1.5 1.5 0 011.06-.44z" />
                <circle cx="16.5" cy="7.5" r="1.4" fill="currentColor" stroke="none" />
            </g>
        ),
        cart: (
            <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="20" r="1.3" />
                <circle cx="17" cy="20" r="1.3" />
                <path d="M2.5 3.5h2.4l2.5 12.2a2 2 0 002 1.6h8a2 2 0 002-1.6l1.5-8H6" />
            </g>
        ),
        chart: (
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M5 19v-6M11 19V8M17 19v-3" />
            </g>
        ),
        clipboard: (
            <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="4.5" width="14" height="16" rx="2" />
                <rect x="9" y="3" width="6" height="3.5" rx="1" fill="currentColor" stroke="none" />
                <path d="M8.5 11h7M8.5 14.5h7" />
            </g>
        ),
        box: (
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3.5l7.5 4.3v8.4L12 20.5l-7.5-4.3V7.8L12 3.5zM4.5 7.8L12 12l7.5-4.2M12 12v8.5"
            />
        ),
    };

    const Icon = ({ name, size = 22, color }: { name: string; size?: number; color?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" color={color}>
            {ICONS[name]}
        </svg>
    );

    const CARD_W = 260;
    const GAP = 24;
    const CARD_TOP = 150;
    const CARD_H = 520;
    const START_X = 90;

    const ROLES = [
        {
            accent: "#13355A",
            tint: "#E8F0F6",
            title: "Owner",
            subtitle: "Full access & control",
            hexIcon: "crown",
            badgeIcon: "star",
            wave: "#BDD9EE",
            perms: [
                { icon: "document", label: "Billing" },
                { icon: "users", label: "Users" },
                { icon: "database", label: "All data" },
            ],
        },
        {
            accent: "#3C9AC4",
            tint: "#E8F0F6",
            title: "Manager",
            subtitle: "Manage & oversee operations",
            hexIcon: "briefcase",
            badgeIcon: "shieldCheck",
            wave: "#BDD9EE",
            perms: [
                { icon: "tag", label: "Listings" },
                { icon: "cart", label: "Orders" },
                { icon: "chart", label: "Reports" },
            ],
        },
        {
            accent: "#6BC1E0",
            tint: "#E8F0F6",
            title: "Staff",
            subtitle: "Limited access",
            hexIcon: "person",
            badgeIcon: "shieldCheck",
            wave: "#BDD9EE",
            perms: [
                { icon: "clipboard", label: "Orders" },
                { icon: "box", label: "Ship labels" },
            ],
        },
    ];

    return (
        <svg viewBox="0 0 1000 720" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1.2" fill="#DCE1F0" />
                </pattern>
                {ROLES.map((_, i) => (
                    <clipPath id={`card-clip-${i}`} key={i}>
                        <rect
                            x={START_X + i * (CARD_W + GAP)}
                            y={CARD_TOP}
                            width={CARD_W}
                            height={CARD_H}
                            rx="24"
                        />
                    </clipPath>
                ))}
            </defs>
            {ROLES.map((r, i) => {
                const x = START_X + i * (CARD_W + GAP);
                const cx = x + CARD_W / 2;
                return (
                    <g key={r.title}>
                        {/* card body */}
                        <rect x={x} y={CARD_TOP} width={CARD_W} height={CARD_H} rx="24" fill="white" stroke="#ECEFF7" />

                        {/* wave decoration, clipped to card - gentle float */}
                        <g clipPath={`url(#card-clip-${i})`}>
                            <path
                                d={`M${x} ${CARD_TOP + CARD_H - 60} 
                  Q ${x + CARD_W * 0.3} ${CARD_TOP + CARD_H - 130} ${cx} ${CARD_TOP + CARD_H - 80}
                  T ${x + CARD_W} ${CARD_TOP + CARD_H - 60}
                  L ${x + CARD_W} ${CARD_TOP + CARD_H}
                  L ${x} ${CARD_TOP + CARD_H} Z`}
                                fill={r.wave}
                                opacity="0.55"
                            >
                                <animate
                                    attributeName="d"
                                    values={`M${x} ${CARD_TOP + CARD_H - 60} Q ${x + CARD_W * 0.3} ${CARD_TOP + CARD_H - 130} ${cx} ${CARD_TOP + CARD_H - 80} T ${x + CARD_W} ${CARD_TOP + CARD_H - 60} L ${x + CARD_W} ${CARD_TOP + CARD_H} L ${x} ${CARD_TOP + CARD_H} Z;M${x} ${CARD_TOP + CARD_H - 70} Q ${x + CARD_W * 0.3} ${CARD_TOP + CARD_H - 115} ${cx} ${CARD_TOP + CARD_H - 70} T ${x + CARD_W} ${CARD_TOP + CARD_H - 70} L ${x + CARD_W} ${CARD_TOP + CARD_H} L ${x} ${CARD_TOP + CARD_H} Z;M${x} ${CARD_TOP + CARD_H - 60} Q ${x + CARD_W * 0.3} ${CARD_TOP + CARD_H - 130} ${cx} ${CARD_TOP + CARD_H - 80} T ${x + CARD_W} ${CARD_TOP + CARD_H - 60} L ${x + CARD_W} ${CARD_TOP + CARD_H} L ${x} ${CARD_TOP + CARD_H} Z`}
                                    dur={`${5 + i * 0.8}s`}
                                    repeatCount="indefinite"
                                />
                            </path>
                        </g>

                        {/* top accent bar */}
                        <rect x={x + 10} y={CARD_TOP - 2} width={CARD_W - 20} height="6" rx="3" fill={r.accent} clipPath={`url(#card-clip-${i})`} />

                        {/* hexagon badge - gentle float */}
                        <g transform={`translate(${cx},${CARD_TOP - 55})`}>
                            <polygon
                                points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19"
                                fill="white"
                                stroke={r.accent}
                                strokeWidth="1.5"
                            >
                                <animate
                                    attributeName="transform"
                                    type="translate"
                                    values="0 0; 0 -4; 0 0"
                                    dur={`${3.5 + i * 0.6}s`}
                                    repeatCount="indefinite"
                                />
                            </polygon>
                            <g transform="translate(-13,-13)" color={r.accent}>
                                <Icon name={r.hexIcon} size={26} />
                            </g>
                        </g>

                        {/* avatar */}
                        <circle cx={cx} cy={CARD_TOP + 90} r="52" fill={r.tint} />
                        <g transform={`translate(${cx - 24},${CARD_TOP + 58})`} color={r.accent}>
                            <Icon name="person" size={48} />
                        </g>
                        <circle cx={cx + 33} cy={CARD_TOP + 122} r="17" fill={r.accent} />
                        <g transform={`translate(${cx + 33 - 10},${CARD_TOP + 112})`} color="white">
                            <Icon name={r.badgeIcon} size={20} />
                        </g>

                        {/* title */}
                        <text x={cx} y={CARD_TOP + 185} textAnchor="middle" fontSize="30" fontWeight="800" fill="#0F172A">
                            {r.title}
                        </text>
                        <rect x={cx - 30} y={CARD_TOP + 197} width="60" height="3" rx="1.5" fill={r.accent} />
                        <text x={cx} y={CARD_TOP + 226} textAnchor="middle" fontSize="15" fill="#64748B">
                            {r.subtitle}
                        </text>

                        {/* permission rows */}
                        {
                            r.perms.map((p, pi) => {
                                const ry = CARD_TOP + 258 + pi * 58;
                                return (
                                    <g key={p.label}>
                                        <rect x={x + 20} y={ry} width={CARD_W - 40} height="48" rx="14" fill="#F5F6FA" />
                                        <rect x={x + 30} y={ry + 9} width="30" height="30" rx="9" fill={r.tint} />
                                        <g transform={`translate(${x + 37},${ry + 16})`} color={r.accent}>
                                            <Icon name={p.icon} size={16} />
                                        </g>
                                        <text x={x + 76} y={ry + 30} fontSize="16" fontWeight="700" fill="#0F172A">
                                            {p.label}
                                        </text>
                                        <circle cx={x + CARD_W - 40} cy={ry + 24} r="12" fill="#3C9AC4">
                                            <animate
                                                attributeName="opacity"
                                                values="1;0.65;1"
                                                dur={`${2.5 + (i + pi) * 0.3}s`}
                                                repeatCount="indefinite"
                                            />
                                        </circle>
                                        <g transform={`translate(${x + CARD_W - 52},${ry + 12})`}>
                                            <Icon name="check" size={24} />
                                        </g>
                                    </g>
                                );
                            })
                        }
                    </g>
                );
            })}
        </svg >
    )
};

