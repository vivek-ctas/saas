import { ILL, IllDefs, IllCanvas, IllHeader, IllCard, IllArrow, IllIconBadge, IconKind } from "./commanIllustrastrations";

export type FlowNode = {
    label: string;
    sub?: string;
    dot: string;
    /** Icon shown in the node's badge — defaults to a plain dot if omitted. */
    icon?: IconKind;
};

/**
 * Multi-node sync diagram: N source nodes → a central hub → N destination
 * nodes. Reused across every "flow" hero/deep-dive visual (inventory sync,
 * order routing, pricing, etc.) — only the node lists, labels and colors
 * change per page, the layout math and visual language stay identical.
 */
export const FlowVisual = ({
    id,
    title,
    hub,
    leftNodes,
    rightNodes,
    hubLatency,
}: {
    id: string;
    title: string;
    hub: string;
    hubLatency?: string;
    leftNodes: FlowNode[];
    rightNodes: FlowNode[];
}) => {
    const W = 900, H = 440;
    const cardW = 210, cardH = 82;
    const stepL = 118, stepR = 118;
    const leftX = 40;
    const rightX = W - 40 - cardW;
    const lStart = (H - (leftNodes.length - 1) * stepL) / 2 - cardH / 2;
    const rStart = (H - (rightNodes.length - 1) * stepR) / 2 - cardH / 2;
    const hubW = 190, hubH = 210;
    const hubX = W / 2 - hubW / 2;
    const hubY = H / 2 - hubH / 2;

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <IllDefs id={id} />
            <IllCanvas id={id} w={W} h={H}>
                <IllHeader label={title} />

                {/* Hub */}
                <g filter={`url(#${id}-shadow)`}>
                    <rect x={hubX} y={hubY} width={hubW} height={hubH} rx="24" fill={`url(#${id}-hub)`} />
                    <g transform={`translate(${W / 2},${hubY + 48})`} stroke="#93c5fd" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M-12 -1 A12 12 0 0 1 8 -10" />
                        <polygon points="8,-10 2,-11 7,-16" fill="#93c5fd" />
                        <path d="M12 1 A12 12 0 0 1 -8 10" />
                        <polygon points="-8,10 -2,11 -7,16" fill="#93c5fd" />
                    </g>
                    <text x={W / 2} y={hubY + 102} textAnchor="middle" fontFamily={ILL.font} fontSize="17" fontWeight="800" fill="white">
                        {hub}
                    </text>
                    {hubLatency && (
                        <text x={W / 2} y={hubY + 124} textAnchor="middle" fontFamily={ILL.font} fontSize="11.5" fill="#bfdbfe">
                            {hubLatency}
                        </text>
                    )}
                    <circle cx={W / 2} cy={hubY + hubH - 26} r="9" fill="#60a5fa" opacity="0.35" />
                    <circle cx={W / 2} cy={hubY + hubH - 26} r="4.5" fill="#60a5fa" />
                </g>

                {/* Left (source) nodes → hub */}
                {leftNodes.map((n) => {
                    const idx = leftNodes.indexOf(n);
                    const y = lStart + idx * stepL;
                    const cy = y + cardH / 2;
                    return (
                        <g key={n.label}>
                            <IllCard x={leftX} y={y} w={cardW} h={cardH} accent={n.dot} id={id}>
                                <IllIconBadge x={leftX + 38} y={cy} color={n.dot} kind={n.icon} />
                                <text x={leftX + 70} y={cy - 4} fontFamily={ILL.font} fontSize="14" fontWeight="800" fill={ILL.ink}>
                                    {n.label}
                                </text>
                                {n.sub && (
                                    <text x={leftX + 70} y={cy + 16} fontFamily={ILL.font} fontSize="11.5" fill={ILL.muted}>
                                        {n.sub}
                                    </text>
                                )}
                            </IllCard>
                            <IllArrow
                                x1={leftX + cardW} y1={cy}
                                x2={hubX} y2={H / 2}
                                color={n.dot}
                                arrow
                                dotStart
                            />
                        </g>
                    );
                })}

                {/* Hub → right (destination) nodes */}
                {rightNodes.map((n) => {
                    const idx = rightNodes.indexOf(n);
                    const y = rStart + idx * stepR;
                    const cy = y + cardH / 2;
                    return (
                        <g key={n.label}>
                            <IllArrow
                                x1={hubX + hubW} y1={H / 2}
                                x2={rightX} y2={cy}
                                color={n.dot}
                                dotStart
                                dotEnd
                            />
                            <IllCard x={rightX} y={y} w={cardW} h={cardH} accent={n.dot} id={id}>
                                <IllIconBadge x={rightX + 38} y={cy} color={n.dot} kind={n.icon} />
                                <text x={rightX + 70} y={cy - 4} fontFamily={ILL.font} fontSize="14" fontWeight="800" fill={ILL.ink}>
                                    {n.label}
                                </text>
                                {n.sub && (
                                    <text x={rightX + 70} y={cy + 16} fontFamily={ILL.font} fontSize="11.5" fill={ILL.muted}>
                                        {n.sub}
                                    </text>
                                )}
                            </IllCard>
                        </g>
                    );
                })}
            </IllCanvas>
        </svg>
    );
};