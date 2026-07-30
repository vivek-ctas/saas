
import { ReactNode, SVGProps } from "react";


export const ProductImportFlow = (props: SVGProps<SVGSVGElement>) => {
    const ICONS: Record<string, JSX.Element> = {
        plus: (
            <g stroke="white" strokeWidth="2.6" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
            </g>
        ),
        check: (
            <path fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L14.5 7" />
        ),
        image: (
            <g fill="none" stroke="#BDD9EE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="9" cy="9" r="1.6" fill="#BDD9EE" stroke="none" />
                <path d="M3 17l5.5-5.5a1.5 1.5 0 012.1 0L15 16" />
                <path d="M12 17l3.5-3.5a1.5 1.5 0 012.1 0L21 17" />
            </g>
        ),
        gear: (
            <g fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3.4" />
                <path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.1 5.9l-1.7 1.7M7.6 16.4l-1.7 1.7M18.1 18.1l-1.7-1.7M7.6 7.6L5.9 5.9" />
            </g>
        ),
        cloudUp: (
            <g fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 17a4 4 0 01.5-8 5.5 5.5 0 0110.6 1.6A3.5 3.5 0 0117 17H6.5z" />
                <path d="M12 15.5V9M9 12l3-3 3 3" />
            </g>
        ),
        sparkle: (
            <g fill="#13355A">
                <path d="M12 2.5l1.8 5.7 5.7 1.8-5.7 1.8-1.8 5.7-1.8-5.7-5.7-1.8 5.7-1.8z" />
            </g>
        ),
        pencil: (
            <g fill="none" stroke="#13355A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4.5l3 3L7 18l-4 1 1-4z" />
            </g>
        ),
        download: (
            <g fill="none" stroke="#13355A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v11M7 10l5 5 5-5" />
            </g>
        ),
    };

    const Icon = ({ name, size = 22 }: { name: string; size?: number }) => (
        <svg width={size} height={size} viewBox="0 0 24 24">
            {ICONS[name]}
        </svg>
    );

    const BLUE = "#13355A";


    /* -------------------------------------------------------------------------- */

    const ICON_CARD_W = 150;
    const ICON_CARD_H = 160;

    /* -------------------------------------------------------------------------- */

    const OPT2_Y_OFFSET = 300;
    const BOTTOM_CARD_W = 150;
    const BOTTOM_GAP = 55;
    const BOTTOM_START_X = 310;
    const BOTTOM_ICON_Y = 550;
    const bottomCardX = (i: number) => BOTTOM_START_X + i * (BOTTOM_CARD_W + BOTTOM_GAP);


    const navy = "#13355A";
    const accent = "#3C9AC4";
    const light = "#6BC1E0";
    const tint = "#E8F0F6";
    const border = "#BDD9EE";
    const slate900 = "#0F172A";
    const slate600 = "#475569";

    return (
        <svg viewBox="0 0 1489 850" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <filter id="pif-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="8" />
                    <feOffset dy="6" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.10" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="pif-shadow-lg" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="14" />
                    <feOffset dy="8" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>

            {/* ---------------------------- OPTION 1 (top) --------------------------- */}
            <g filter="url(#pif-shadow)">
                <rect x="35" y="50" width="175" height="110" rx="14" fill="white" stroke={border} />
            </g>
            <text x="122" y="100" textAnchor="middle" fontSize="19" fontWeight="800" fill={slate900}>Add Product</text>
            <text x="122" y="125" textAnchor="middle" fontSize="19" fontWeight="800" fill={slate900}>Manually</text>
            <rect x="60" y="28" width="120" height="30" rx="15" fill={navy} />
            <text x="120" y="48" textAnchor="middle" fontSize="12" fontWeight="800" fill="white" letterSpacing="0.5">OPTION 1</text>

            <g>
                <line x1={210} y1={105} x2={295} y2={105} stroke={border} strokeWidth={2} strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
                </line>
                <circle r="3.5" fill={navy} opacity={0.7}>
                    <animateMotion dur="1.8s" repeatCount="indefinite" path="M210 105 L295 105" />
                </circle>
            </g>

            <g filter="url(#pif-shadow)">
                <rect x="310" y="25" width={ICON_CARD_W} height={ICON_CARD_H} rx="16" fill="white" stroke={border} />
            </g>
            <circle cx="385" cy="95" r="36" fill={navy} />
            <g transform="translate(373,83)"><Icon name="plus" size={24} /></g>
            <text x={385} y={ICON_CARD_H + 10} textAnchor="middle" fontSize="15" fontWeight="800" fill={slate900}>Add Product</text>

            <g>
                <line x1={460} y1={105} x2={555} y2={105} stroke={border} strokeWidth={2} strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.4s" repeatCount="indefinite" />
                </line>
                <circle r="3.5" fill={navy} opacity={0.7}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path="M460 105 L555 105" />
                </circle>
            </g>

            {/* Fill product details mockup card */}
            <g filter="url(#pif-shadow)">
                <rect x="565" y="25" width="245" height="250" rx="16" fill="white" stroke={border} />
            </g>
            <circle cx="588" cy="48" r="3" fill={border} />
            <circle cx="600" cy="48" r="3" fill={border} />
            <circle cx="612" cy="48" r="3" fill={border} />
            <rect x="580" y="67" width="70" height="70" rx="8" fill={tint} />
            <g transform="translate(596,83)" color={border}><Icon name="image" size={36} /></g>
            <rect x="662" y="75" width="120" height="7" rx="3.5" fill="#E2E8F0" />
            <rect x="662" y="93" width="120" height="7" rx="3.5" fill="#E2E8F0" />
            <rect x="662" y="111" width="80" height="7" rx="3.5" fill="#E2E8F0" />
            <rect x="580" y="155" width="215" height="7" rx="3.5" fill="#E2E8F0" />
            <rect x="580" y="171" width="150" height="7" rx="3.5" fill="#E2E8F0" />
            <rect x="662" y="192" width="60" height="22" rx="11" fill={tint} stroke={border} />
            <rect x="730" y="192" width="60" height="22" rx="11" fill={tint} stroke={border} />
            <rect x="580" y="229" width="90" height="8" rx="4" fill="#EEF2F7" />

            <text x="600" y="300" fontSize="19" fontWeight="800" fill={slate900}>Fill Product Details</text>
            <text x="600" y="327" fontSize="14" fill={slate600}>Title, Brand, SKU, Price,</text>
            <text x="600" y="351" fontSize="14" fill={slate600}>Stock, Description etc.</text>

            <g>
                <line x1={815} y1={162} x2={895} y2={162} stroke={border} strokeWidth={2} strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.4s" repeatCount="indefinite" />
                </line>
                <circle r="3.5" fill={navy} opacity={0.7}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path="M815 162 L895 162" />
                </circle>
            </g>

            <g filter="url(#pif-shadow)">
                <rect x="905" y="82" width={ICON_CARD_W} height={ICON_CARD_H} rx="16" fill="white" stroke={border} />
            </g>
            <circle cx="980" cy="152" r="36" fill={navy} />
            <g transform="translate(966,138)"><Icon name="check" size={28} /></g>
            <text x={980} y={ICON_CARD_H + 67} textAnchor="middle" fontSize="15" fontWeight="800" fill={slate900}>Save Product</text>
            <text x={980} y={ICON_CARD_H + 92} textAnchor="middle" fontSize="14" fill={slate600}>Your listing is added to</text>
            <text x={980} y={ICON_CARD_H + 116} textAnchor="middle" fontSize="14" fill={slate600}>My Catalog</text>

            <g>
                <path d="M1055 162 C 1120 162, 1170 207, 1180 247" fill="none" stroke={border} strokeWidth={2} strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.8s" repeatCount="indefinite" />
                </path>
                <circle r="3.5" fill={navy} opacity={0.7}>
                    <animateMotion dur="2s" repeatCount="indefinite" path="M1055 162 C 1120 162, 1170 207, 1180 247" />
                </circle>
                <path d="M1055 162 C 1120 162, 1170 207, 1180 247" fill="none" stroke={accent} strokeWidth={1.5} strokeDasharray="2 12" opacity={0.5}>
                    <animate attributeName="stroke-dashoffset" values="0;-28" dur="2.2s" repeatCount="indefinite" />
                </path>
            </g>

            {/* ---------------------------- My Catalog panel -------------------------- */}
            <g filter="url(#pif-shadow-lg)">
                <rect x="1180" y="245" width="270" height="300" rx="16" fill="white" stroke={border} />
            </g>
            <path d="M1180 261a16 16 0 0116-16h238a16 16 0 0116 16v14h-270z" fill={navy} />
            <circle cx="1204" cy="261" r="3.4" fill="white" opacity="0.85" />
            <circle cx="1216" cy="261" r="3.4" fill="white" opacity="0.85" />
            <circle cx="1228" cy="261" r="3.4" fill="white" opacity="0.85" />

            <text x="1204" y="318" fontSize="21" fontWeight="800" fill={slate900}>My Catalog</text>
            <line x1="1204" y1="332" x2="1426" y2="332" stroke="#EEF1F6" />

            {[0, 1, 2].map((i) => {
                const ry = 352 + i * 62;
                return (
                    <g key={i}>
                        <rect x="1204" y={ry} width="48" height="48" rx="8" fill={tint} />
                        <g transform={`translate(1218,${ry + 14})`} color={border}>
                            <Icon name="image" size={20} />
                        </g>
                        <rect x="1264" y={ry + 14} width="120" height="7" rx="3.5" fill="#E2E8F0" />
                        <rect x="1264" y={ry + 30} width="80" height="7" rx="3.5" fill="#E2E8F0" />
                        <circle cx="1418" cy={ry + 24} r="6" fill="#10B981" />
                    </g>
                );
            })}

            <circle cx="1330" cy="545" r="38" fill="white" stroke="#EEF1F6" />
            <g transform="translate(1312,527)">
                <Icon name="sparkle" size={36} />
            </g>
            <text x="1330" y="600" textAnchor="middle" fontSize="16" fontWeight="800" fill={navy}>
                Products Added
            </text>
            <text x="1330" y="622" textAnchor="middle" fontSize="16" fontWeight="800" fill={navy}>
                Successfully!
            </text>

            {/* Vertical OR divider */}
            <line x1="120" y1="160" x2="120" y2="300" stroke={navy} strokeWidth="2" strokeDasharray="3 5">
                <animate attributeName="stroke-dashoffset" values="0;-8" dur="2s" repeatCount="indefinite" />
            </line>
            <circle cx="120" cy="328" r="28" fill="white" stroke={border} strokeWidth="1.5" />
            <text x="120" y="334" textAnchor="middle" fontSize="14" fontWeight="800" fill={slate900}>OR</text>
            <line x1="120" y1="356" x2="120" y2="484" stroke={navy} strokeWidth="2" strokeDasharray="3 5">
                <animate attributeName="stroke-dashoffset" values="0;-8" dur="2s" repeatCount="indefinite" />
            </line>

            {/* ---------------------------- OPTION 2 (bottom) ------------------------- */}
            <g filter="url(#pif-shadow)">
                <rect x="35" y={200 + OPT2_Y_OFFSET} width="175" height="110" rx="14" fill="white" stroke={border} />
            </g>
            <text x="122" y={262 + OPT2_Y_OFFSET} textAnchor="middle" fontSize="19" fontWeight="800" fill={slate900}>Import via File</text>
            <rect x="60" y={178 + OPT2_Y_OFFSET} width="120" height="30" rx="15" fill={navy} />
            <text x="120" y={198 + OPT2_Y_OFFSET} textAnchor="middle" fontSize="12" fontWeight="800" fill="white" letterSpacing="0.5">OPTION 2</text>

            <g>
                <line x1={210} y1={255 + OPT2_Y_OFFSET} x2={bottomCardX(0)} y2={625} stroke={border} strokeWidth={2} strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.8s" repeatCount="indefinite" />
                </line>
                <circle r="3.5" fill={navy} opacity={0.7}>
                    <animateMotion dur="2s" repeatCount="indefinite" path={`M210 ${255 + OPT2_Y_OFFSET} L${bottomCardX(0)} 625`} />
                </circle>
            </g>

            {/* Download Sample File */}
            <g filter="url(#pif-shadow)">
                <rect x={bottomCardX(0)} y={BOTTOM_ICON_Y} width={ICON_CARD_W} height={ICON_CARD_H} rx="16" fill="white" stroke={border} />
            </g>
            <path d={`M${bottomCardX(0) + 55} 590 h30 l14 14 v46 h-58 v-60 z`} fill={tint} stroke={border} strokeWidth="1.4" />
            <path d={`M${bottomCardX(0) + 85} 590 v14 h14`} fill="none" stroke={border} strokeWidth="1.4" />
            <rect x={bottomCardX(0) + 47} y="635" width="56" height="22" rx="6" fill="#10B981" />
            <text x={bottomCardX(0) + 75} y="650" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">XLSX</text>
            <g transform={`translate(${bottomCardX(0) + 58},610)`}><Icon name="download" size={22} /></g>
            <text x={bottomCardX(0) + 75} y={BOTTOM_ICON_Y + ICON_CARD_H - 25} textAnchor="middle" fontSize="15" fontWeight="800" fill={slate900}>Sample File</text>

            <g>
                <line x1={bottomCardX(0) + ICON_CARD_W + 10} y1={625} x2={bottomCardX(1)} y2={625} stroke={border} strokeWidth={2} strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.4s" repeatCount="indefinite" />
                </line>
                <circle r="3.5" fill={navy} opacity={0.7}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path={`M${bottomCardX(0) + ICON_CARD_W + 10} 625 L${bottomCardX(1)} 625`} />
                </circle>
            </g>

            {/* Fill the Template */}
            <g filter="url(#pif-shadow)">
                <rect x={bottomCardX(1)} y={BOTTOM_ICON_Y} width={ICON_CARD_W} height={ICON_CARD_H} rx="16" fill="white" stroke={border} />
            </g>
            <rect x={bottomCardX(1) + 45} y="600" width="60" height="60" rx="8" fill="white" stroke={border} strokeWidth="1.4" />
            <rect x={bottomCardX(1) + 45} y="600" width="60" height="14" rx="6" fill={navy} />
            {[0, 1, 2].map((r) => (
                <g key={r}>
                    <line x1={bottomCardX(1) + 45} y1={630 + r * 10} x2={bottomCardX(1) + 105} y2={630 + r * 10} stroke="#E2E8F0" />
                </g>
            ))}
            <line x1={bottomCardX(1) + 65} y1="620" x2={bottomCardX(1) + 65} y2="660" stroke="#E2E8F0" />
            <line x1={bottomCardX(1) + 85} y1="620" x2={bottomCardX(1) + 85} y2="660" stroke="#E2E8F0" />
            <circle cx={bottomCardX(1) + 103} cy="620" r="15" fill="white" stroke="#E2E8F0" />
            <g transform={`translate(${bottomCardX(1) + 91},609)`}><Icon name="pencil" size={22} /></g>
            <text x={bottomCardX(1) + 75} y={BOTTOM_ICON_Y + ICON_CARD_H - 20} textAnchor="middle" fontSize="15" fontWeight="800" fill={slate900}>Fill the Template</text>
            <text x={bottomCardX(1) + 75} y={BOTTOM_ICON_Y + ICON_CARD_H + 15} textAnchor="middle" fontSize="14" fill={slate600}>Enter your product</text>
            <text x={bottomCardX(1) + 75} y={BOTTOM_ICON_Y + ICON_CARD_H + 36} textAnchor="middle" fontSize="14" fill={slate600}>details in the file.</text>

            <g>
                <line x1={bottomCardX(1) + ICON_CARD_W + 10} y1={625} x2={bottomCardX(2)} y2={625} stroke={border} strokeWidth={2} strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.4s" repeatCount="indefinite" />
                </line>
                <circle r="3.5" fill={navy} opacity={0.7}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path={`M${bottomCardX(1) + ICON_CARD_W + 10} 625 L${bottomCardX(2)} 625`} />
                </circle>
            </g>

            {/* Upload File */}
            <g filter="url(#pif-shadow)">
                <rect x={bottomCardX(2)} y={BOTTOM_ICON_Y} width={ICON_CARD_W} height={ICON_CARD_H} rx="16" fill="white" stroke={border} />
            </g>
            <circle cx={bottomCardX(2) + 75} cy="625" r="36" fill={navy} />
            <g transform={`translate(${bottomCardX(2) + 63},612)`}><Icon name="cloudUp" size={28} /></g>
            <text x={bottomCardX(2) + 75} y={BOTTOM_ICON_Y + ICON_CARD_H - 20} textAnchor="middle" fontSize="15" fontWeight="800" fill={slate900}>Upload File</text>
            <text x={bottomCardX(2) + 75} y={BOTTOM_ICON_Y + ICON_CARD_H + 15} textAnchor="middle" fontSize="14" fill={slate600}>Upload the completed</text>
            <text x={bottomCardX(2) + 75} y={BOTTOM_ICON_Y + ICON_CARD_H + 36} textAnchor="middle" fontSize="14" fill={slate600}>file.</text>

            <g>
                <line x1={bottomCardX(2) + ICON_CARD_W + 10} y1={625} x2={bottomCardX(3)} y2={625} stroke={border} strokeWidth={2} strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.4s" repeatCount="indefinite" />
                </line>
                <circle r="3.5" fill={navy} opacity={0.7}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path={`M${bottomCardX(2) + ICON_CARD_W + 10} 625 L${bottomCardX(3)} 625`} />
                </circle>
            </g>

            {/* Confirm & Process */}
            <g filter="url(#pif-shadow)">
                <rect x={bottomCardX(3)} y={BOTTOM_ICON_Y} width={ICON_CARD_W} height={ICON_CARD_H} rx="16" fill="white" stroke={border} />
            </g>
            <circle cx={bottomCardX(3) + 75} cy="625" r="36" fill={navy} />
            <g transform={`translate(${bottomCardX(3) + 63},612)`}><Icon name="gear" size={28} /></g>
            <text x={bottomCardX(3) + 75} y={BOTTOM_ICON_Y + ICON_CARD_H - 20} textAnchor="middle" fontSize="15" fontWeight="800" fill={slate900}>Confirm & Process</text>
            <text x={bottomCardX(3) + 75} y={BOTTOM_ICON_Y + ICON_CARD_H + 15} textAnchor="middle" fontSize="14" fill={slate600}>Review and click</text>
            <text x={bottomCardX(3) + 75} y={BOTTOM_ICON_Y + ICON_CARD_H + 36} textAnchor="middle" fontSize="14" fill={slate600}>Confirm to process.</text>

            <g>
                <path d={`M${bottomCardX(3) + ICON_CARD_W} 625 C ${bottomCardX(3) + 190} 625, ${bottomCardX(3) + 210} 650, 1200 550`} fill="none" stroke={border} strokeWidth={2} strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.8s" repeatCount="indefinite" />
                </path>
                <circle r="3.5" fill={navy} opacity={0.7}>
                    <animateMotion dur="2s" repeatCount="indefinite" path={`M${bottomCardX(3) + ICON_CARD_W} 625 C ${bottomCardX(3) + 190} 625, ${bottomCardX(3) + 210} 650, 1200 550`} />
                </circle>
            </g>
        </svg>
    );
};


/**
 * A single step in the flow. `icon` should be a ready-to-render SVG element
 * (e.g. a lucide-react icon like `<Globe size={40} color="#2A3FD6" />`,
 * or your own inline <svg>...</svg>). It is placed centered inside a 64x64 circle.
 */
export interface StepFlowStep {
    icon: ReactNode;
    title: string;
    subtitle: string;
}

export interface StepFlowDiagramProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
    steps: StepFlowStep[];
}

// interpolates from light -> accent -> deep -> navy across however many steps are passed
const stepColor = (i: number, total: number) => {
    const stops = [
        { r: 107, g: 193, b: 224 }, // Light  #6BC1E0  (S1)
        { r: 60, g: 154, b: 196 },  // Accent #3C9AC4  (S2)
        { r: 43, g: 122, b: 168 },  // Deep   #2B7AA8  (S3)
        { r: 19, g: 53, b: 90 },    // Navy   #13355A  (S4+)
    ];
    const t = total > 1 ? i / (total - 1) : 0;
    const scaled = t * (stops.length - 1);
    const lo = Math.floor(scaled);
    const hi = Math.min(lo + 1, stops.length - 1);
    const f = scaled - lo;
    const lerp = (a: number, b: number) => Math.round(a + (b - a) * f);
    const c = {
        r: lerp(stops[lo].r, stops[hi].r),
        g: lerp(stops[lo].g, stops[hi].g),
        b: lerp(stops[lo].b, stops[hi].b),
    };
    return `rgb(${c.r},${c.g},${c.b})`;
};

export const StepFlowDiagram = ({ steps, ...props }: StepFlowDiagramProps) => {

    const cardW = 350;
    const cardH = 350;
    const gap = 50;
    const marginX = 50;
    const marginTop = 30;

    const badgeR = 60;
    const iconR = 55;
    const cardTop = marginTop + badgeR;

    const width = marginX * 2 + steps.length * cardW + (steps.length - 1) * gap;
    const height = cardTop + cardH + 30;

    const slate900 = "#0F172A";
    const slateGray = "#64748B";
    const iconBg = "#E8F0F6";
    const connector = "#3C9AC4";
    const navy = "#13355A";
    const light = "#6BC1E0";

    const cardX = (i: number) => marginX + i * (cardW + gap);

    return (
        <svg viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <filter id="stepflow-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="8" />
                    <feOffset dy="6" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.10" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            {/* ================= CONNECTORS ================= */}
            {steps.slice(0, -1).map((_, i) => {
                const x1 = cardX(i) + cardW;
                const x2 = cardX(i + 1);
                const midY = cardTop + iconR + 100;
                return (
                    <g key={`connector-${i}`}>
                        <line x1={x1} y1={midY} x2={x2} y2={midY} stroke={connector} strokeWidth={2.5} strokeDasharray="6 6">
                            <animate attributeName="stroke-dashoffset" values="0;-24" dur="1.4s" repeatCount="indefinite" />
                        </line>
                        <circle r="4" fill={navy} opacity={0.7}>
                            <animateMotion dur="1.6s" repeatCount="indefinite" path={`M${x1} ${midY} L${x2} ${midY}`} />
                        </circle>
                        <line x1={x1} y1={midY} x2={x2} y2={midY} stroke={light} strokeWidth={1.5} strokeDasharray="2 10" opacity={0.5}>
                            <animate attributeName="stroke-dashoffset" values="0;-24" dur="2s" repeatCount="indefinite" />
                        </line>
                    </g>
                );
            })}

            {/* ================= STEPS ================= */}
            {steps.map((step, i) => {
                const x = cardX(i);
                const cx = x + cardW / 2;
                const color = stepColor(i, steps.length);
                const iconCy = cardTop + iconR + 80;
                const titleY = iconCy + iconR + 50;
                const subLines = step.subtitle.split("\n");

                return (
                    <g key={i}>
                        {/* card */}
                        <g filter="url(#stepflow-shadow)">
                            <rect x={x} y={cardTop} width={cardW} height={cardH} rx={22} fill="#ffffff" stroke={color} strokeOpacity={0.55} strokeWidth={1.6}>
                                <animate attributeName="y" values={`${cardTop - 3};${cardTop};${cardTop - 3}`} dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
                            </rect>
                        </g>

                        {/* icon circle */}
                        <circle cx={cx} cy={iconCy} r={iconR} fill={iconBg}>
                            <animate attributeName="r" values={`${iconR};${iconR + 4};${iconR}`} dur={`${2.5 + i * 0.2}s`} repeatCount="indefinite" />
                        </circle>
                        <g transform={`translate(${cx - 30},${iconCy - 30})`} >
                            {step.icon}
                        </g>

                        {/* title */}
                        <text x={cx} y={titleY} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="30" fontWeight={600} fill={slate900}>
                            {step.title}
                        </text>

                        {/* subtitle (supports up to 2 lines via \n) */}
                        {subLines.map((line, li) => (
                            <text
                                key={li}
                                x={cx}
                                y={titleY + 50 + li * 24}
                                textAnchor="middle"
                                // fontFamily="Inter,system-ui"
                                fontSize="25"
                                fontWeight={300}
                                fill={slateGray}
                            >
                                {line}
                            </text>
                        ))}

                        {/* number badge, overlapping the top edge of the card */}
                        <rect x={cx - 65} y={marginTop + 40} width={badgeR + 60} height={badgeR - 20} rx="15" fill={color}>
                            <animate attributeName="y" values={`${marginTop + 40 - 2};${marginTop + 40};${marginTop + 40 - 2}`} dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                        </rect>

                        <text x={cx} y={marginTop + badgeR + 12} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="30" fontWeight={600} fill="#ffffff">
                            {`S${i + 1}`}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
};