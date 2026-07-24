import { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* ContactMapIllustration – global presence map with hubs              */
/* ------------------------------------------------------------------ */
export const ContactMapIllustration = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="cm-bg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#eff6ff" />
                <stop offset="100%" stopColor="#f0f4ff" />
            </linearGradient>
        </defs>
        <rect x="10" y="10" width="580" height="340" rx="20" fill="url(#cm-bg)" stroke="#e2e8f0" />
        {/* Dotted world grid */}
        {Array.from({ length: 18 }).map((_, r) =>
            Array.from({ length: 30 }).map((_, c) => {
                const cx = 30 + c * 19, cy = 50 + r * 16;
                // crude continent mask
                const land =
                    (c > 3 && c < 11 && r > 2 && r < 9) || // americas
                    (c > 13 && c < 19 && r > 1 && r < 7) || // EU
                    (c > 18 && c < 27 && r > 4 && r < 12) || // asia
                    (c > 14 && c < 19 && r > 8 && r < 13) || // africa
                    (c > 23 && c < 28 && r > 11 && r < 15);  // oceania
                return (
                    <circle key={`${r}-${c}`} cx={cx} cy={cy} r={1.6}
                        fill={land ? "#3b82f6" : "#cbd5e1"} opacity={land ? 0.7 : 0.35} />
                );
            })
        )}
        {/* Hub pins */}
        {[
            { x: 130, y: 180, label: "San Francisco" },
            { x: 290, y: 130, label: "London" },
            { x: 360, y: 175, label: "Ahmedabad HQ" },
            { x: 460, y: 200, label: "Singapore" },
            { x: 500, y: 270, label: "Sydney" },
        ].map((h) => (
            <g key={h.label}>
                <circle cx={h.x} cy={h.y} r={14} fill="hsl(226 71% 50%)" opacity={0.2}>
                    <animate attributeName="r" values="10;22;10" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle cx={h.x} cy={h.y} r={6} fill="hsl(226 71% 50%)" stroke="white" strokeWidth={2} />
                <rect x={h.x + 10} y={h.y - 18} width={h.label.length * 6.5 + 12} height={20} rx={10} fill="white" stroke="#e2e8f0" />
                <text x={h.x + 16} y={h.y - 4} fontSize={10} fontWeight={700} fill="#0f172a">{h.label}</text>
            </g>
        ))}
        {/* Arc connections */}
        <path d="M130 180 Q 220 60, 360 175" stroke="hsl(226 71% 50%)" strokeWidth={1.5} fill="none" strokeDasharray="4 4" opacity={0.6} />
        <path d="M360 175 Q 420 90, 460 200" stroke="hsl(217 91% 50%)" strokeWidth={1.5} fill="none" strokeDasharray="4 4" opacity={0.6} />
        <path d="M460 200 Q 510 240, 500 270" stroke="hsl(226 71% 50%)" strokeWidth={1.5} fill="none" strokeDasharray="4 4" opacity={0.6} />
        <text x={300} y={336} textAnchor="middle" fontSize={11} fill="#64748b">Sales · Support · Engineering - across 5 hubs, 24/7 coverage</text>
    </svg>
);