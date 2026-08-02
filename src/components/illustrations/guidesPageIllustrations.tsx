import { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* guideEditorialMockup - magazine-style hero for guide                  */
/* ------------------------------------------------------------------ */
export const GuideEditorialMockup = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 720 500" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="be-cover" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#E8F0F6" /><stop offset="100%" stopColor="#E8F0F6" />
            </linearGradient>
            <linearGradient id="be-bg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#E8F0F6" />
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
            <rect x="60" y="70" width="80" height="22" rx="11" fill="#3C9AC4" opacity="0.15" />
            <text x="100" y="86" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="10" fontWeight="800" fill="#13355A" letterSpacing="1.5">ISSUE 04</text>
            <text x="60" y="180" fontFamily="Inter,system-ui" fontSize="22" fontWeight="800" fill="#0f172a">The AI Catalog</text>
            <text x="60" y="208" fontFamily="Inter,system-ui" fontSize="22" fontWeight="800" fill="#0f172a">Playbook</text>
            <line x1="60" y1="226" x2="240" y2="226" stroke="#0f172a" opacity="0.15" />
            <text x="60" y="252" fontFamily="Inter,system-ui" fontSize="11" fill="#334155">How one dashboard generates</text>
            <text x="60" y="268" fontFamily="Inter,system-ui" fontSize="11" fill="#334155">and validates listings</text>
            <text x="60" y="284" fontFamily="Inter,system-ui" fontSize="11" fill="#334155">across 40,000 SKUs.</text>
            {/* Decorative chart */}
            <polyline points="60,400 90,380 120,390 150,360 180,370 210,340 240,350 270,320"
                stroke="#3C9AC4" strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="270" cy="320" r="4" fill="#3C9AC4" opacity="0.8" />
            <text x="60" y="430" fontFamily="Inter,system-ui" fontSize="9" fill="#64748b">- Listings validated, last 30 days</text>

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
            { y: 50, t: "AI-generated listings vs manual upload", c: "AI", k: "8 min" },
            { y: 160, t: "Amazon vs Shopify: catalog differences", c: "Channels", k: "9 min" },
            { y: 270, t: "5 listing metrics that actually move sales", c: "Analytics", k: "7 min" },
            { y: 380, t: "From CSV to Fnac in 4 minutes", c: "AI", k: "5 min" },
        ].map((p, i) => (
            <g key={i} filter="url(#be-shadow)">
                <rect x="350" y={p.y} width="320" height="92" rx="14" fill="white" stroke="#e2e8f0" />
                <rect x="366" y={p.y + 18} width="60" height="18" rx="9" fill="#E8F0F6" />
                <text x="396" y={p.y + 31} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="9" fontWeight="800" fill="#13355A">{p.c}</text>
                <text x="436" y={p.y + 31} fontFamily="Inter,system-ui" fontSize="10" fill="#94a3b8">· {p.k}</text>
                <text x="366" y={p.y + 58} fontFamily="Inter,system-ui" fontSize="13" fontWeight="800" fill="#0f172a">{p.t}</text>
                <text x="366" y={p.y + 78} fontFamily="Inter,system-ui" fontSize="10" fill="#64748b">Read the full article ➞</text>
            </g>
        ))}

        {/* Sparkles */}
        <g fill="white" stroke="#BDD9EE" strokeWidth={0.6}>
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
