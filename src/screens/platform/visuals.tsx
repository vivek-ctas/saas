import { ReactNode } from "react";
import { IllDefs, IllCanvas, IllCard, IllHeader, IllChip, IllKPI, IllArrow, ILL } from "@/components/illustrations/primitives";

/* -----------------------------------------------------------
 * Shared, parameterizable dashboard visuals for Platform pages.
 * Every visual follows the same navy + blue card-in-canvas language.
 * ---------------------------------------------------------- */

/** Row-style dashboard table (orders, SKUs, promos, etc.) */
export const DashListVisual = ({
  id,
  title,
  chip,
  columns,
  rows,
}: {
  id: string;
  title: string;
  chip?: { label: string; tone?: "blue" | "navy" };
  columns: string[];
  rows: { cells: (string | { dot: string; text: string })[]; badge?: { text: string; tone: "blue" | "amber" | "emerald" | "muted" } }[];
}) => {
  const W = 560, H = 340;
  const colX = columns.map((_, i) => 40 + i * ((W - 80) / columns.length));
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <IllDefs id={id} />
      <IllCanvas id={id} w={W} h={H}>
        <IllCard id={id} x={24} y={64} w={W - 48} h={H - 88} accent={ILL.blue}>
          <text x={40} y={90} fontFamily={ILL.font} fontSize="13" fontWeight="800" fill={ILL.ink}>{title}</text>
          {chip && (
            <g>
              <rect x={W - 148} y={80} width={108} height={22} rx={11} fill={chip.tone === "navy" ? ILL.navy : ILL.tint} />
              <text x={W - 94} y={95} textAnchor="middle" fontFamily={ILL.font} fontSize="10" fontWeight="800" fill={chip.tone === "navy" ? "white" : ILL.blueDeep}>
                {chip.label}
              </text>
            </g>
          )}
          {columns.map((c, i) => (
            <text key={c} x={colX[i]} y={125} fontFamily={ILL.font} fontSize="9" fontWeight="800" fill={ILL.muted} letterSpacing="1">
              {c.toUpperCase()}
            </text>
          ))}
          <line x1={32} y1={134} x2={W - 32} y2={134} stroke={ILL.softStroke} />
          {rows.map((r, ri) => {
            const y = 154 + ri * 34;
            const badgeTone = r.badge?.tone === "amber"
              ? { bg: "#fef3c7", fg: "#92400e" }
              : r.badge?.tone === "emerald"
                ? { bg: "#d1fae5", fg: "#065f46" }
                : r.badge?.tone === "muted"
                  ? { bg: "#f1f5f9", fg: "#475569" }
                  : { bg: ILL.tint, fg: ILL.blueDeep };
            return (
              <g key={ri}>
                {ri > 0 && <line x1={32} y1={y - 17} x2={W - 32} y2={y - 17} stroke="#f1f5f9" />}
                {r.cells.map((cell, ci) => (
                  typeof cell === "string" ? (
                    <text key={ci} x={colX[ci]} y={y} fontFamily={ILL.font} fontSize="11" fontWeight={ci === 0 ? "700" : "600"} fill={ci === 0 ? ILL.ink : ILL.muted}>
                      {cell}
                    </text>
                  ) : (
                    <g key={ci}>
                      <circle cx={colX[ci] + 5} cy={y - 4} r="4" fill={cell.dot} />
                      <text x={colX[ci] + 16} y={y} fontFamily={ILL.font} fontSize="11" fontWeight="700" fill={ILL.ink}>{cell.text}</text>
                    </g>
                  )
                ))}
                {r.badge && (
                  <g>
                    <rect x={W - 118} y={y - 14} width={78} height={18} rx={9} fill={badgeTone.bg} />
                    <text x={W - 79} y={y - 1} textAnchor="middle" fontFamily={ILL.font} fontSize="9" fontWeight="800" fill={badgeTone.fg}>{r.badge.text}</text>
                  </g>
                )}
              </g>
            );
          })}
        </IllCard>
        <IllHeader label={title.split("·")[0].trim()} />
      </IllCanvas>
    </svg>
  );
};

/** KPI row + line/area chart (analytics / repricer / margin). */
export const KpiChartVisual = ({
  id,
  title,
  kpis,
  series,
  compareSeries,
  floorLabel,
  pill,
}: {
  id: string;
  title: string;
  kpis: { label: string; value: string; delta?: string }[];
  series: number[]; // 0-100 normalized
  compareSeries?: number[];
  floorLabel?: string;
  pill?: { label: string; tone?: "emerald" | "blue" };
}) => {
  const W = 560, H = 340;
  const chartX = 40, chartY = 210, chartW = W - 80, chartH = 100;
  const toPt = (arr: number[]) => arr.map((v, i) => `${chartX + (i * chartW) / (arr.length - 1)},${chartY + chartH - (v / 100) * chartH}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <IllDefs id={id} />
      <IllCanvas id={id} w={W} h={H}>
        <IllCard id={id} x={24} y={64} w={W - 48} h={H - 88} accent={ILL.blue}>
          <text x={40} y={90} fontFamily={ILL.font} fontSize="13" fontWeight="800" fill={ILL.ink}>{title}</text>
          {pill && (
            <g>
              <rect x={W - 148} y={80} width={108} height={22} rx={11} fill={pill.tone === "emerald" ? "#d1fae5" : ILL.tint} />
              <circle cx={W - 132} cy={91} r={3.5} fill={pill.tone === "emerald" ? "#059669" : ILL.blueDeep} />
              <text x={W - 94} y={95} textAnchor="middle" fontFamily={ILL.font} fontSize="10" fontWeight="800" fill={pill.tone === "emerald" ? "#065f46" : ILL.blueDeep}>
                {pill.label}
              </text>
            </g>
          )}
          {kpis.map((k, i) => {
            const kw = (W - 96) / kpis.length;
            const kx = 40 + i * kw;
            return <IllKPI key={i} x={kx} y={110} w={kw - 12} h={82} label={k.label} value={k.value} delta={k.delta} />;
          })}
          {/* chart axes */}
          <line x1={chartX} y1={chartY + chartH} x2={chartX + chartW} y2={chartY + chartH} stroke={ILL.softStroke} />
          <line x1={chartX} y1={chartY} x2={chartX} y2={chartY + chartH} stroke={ILL.softStroke} />
          {[0, 25, 50, 75].map((p) => (
            <line key={p} x1={chartX} x2={chartX + chartW} y1={chartY + chartH - (p / 100) * chartH} y2={chartY + chartH - (p / 100) * chartH} stroke="#f1f5f9" />
          ))}
          {compareSeries && (
            <polyline fill="none" stroke={ILL.sky} strokeWidth="1.6" strokeDasharray="4 3" points={toPt(compareSeries)} />
          )}
          <polyline fill="none" stroke={ILL.blue} strokeWidth="2.4" points={toPt(series)} />
          {floorLabel && (
            <>
              <line x1={chartX} y1={chartY + chartH - 20} x2={chartX + chartW} y2={chartY + chartH - 20} stroke="#f59e0b" strokeDasharray="4 4" />
              <text x={chartX + chartW} y={chartY + chartH - 24} textAnchor="end" fontFamily={ILL.font} fontSize="9" fontWeight="700" fill="#b45309">{floorLabel}</text>
            </>
          )}
        </IllCard>
        <IllHeader label={title.split("·")[0].trim()} />
      </IllCanvas>
    </svg>
  );
};

/** 3-node flow: source → hub → targets. Great for sync / routing / writeback. */
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
  leftNodes: { label: string; sub?: string; dot: string }[];
  rightNodes: { label: string; sub?: string; dot: string }[];
}) => {
  const W = 560, H = 340;
  const step = 78;
  const lStart = (H - leftNodes.length * step) / 2 + 20;
  const rStart = (H - rightNodes.length * step) / 2 + 20;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <IllDefs id={id} />
      <IllCanvas id={id} w={W} h={H}>
        <IllHeader label={title} />
        {/* hub */}
        <g filter={`url(#${id}-shadow)`}>
          <rect x={W / 2 - 70} y={H / 2 - 45} width="140" height="90" rx="14" fill={`url(#${id}-navy)`} />
          <text x={W / 2} y={H / 2 - 12} textAnchor="middle" fontFamily={ILL.font} fontSize="13" fontWeight="800" fill="white">{hub}</text>
          {hubLatency && <text x={W / 2} y={H / 2 + 6} textAnchor="middle" fontFamily={ILL.font} fontSize="10" fill="#bfdbfe">{hubLatency}</text>}
          <circle cx={W / 2} cy={H / 2 + 26} r="8" fill="#60a5fa" opacity="0.4" />
          <circle cx={W / 2} cy={H / 2 + 26} r="4" fill="#60a5fa" />
        </g>
        {leftNodes.map((n, i) => {
          const y = lStart + i * step;
          return (
            <g key={n.label}>
              <IllCard id={id} x={30} y={y} w={150} h={58} accent={n.dot}>
                <circle cx={50} cy={y + 29} r="6" fill={n.dot} />
                <text x={64} y={y + 26} fontFamily={ILL.font} fontSize="11" fontWeight="800" fill={ILL.ink}>{n.label}</text>
                {n.sub && <text x={64} y={y + 42} fontFamily={ILL.font} fontSize="9.5" fill={ILL.muted}>{n.sub}</text>}
              </IllCard>
              <IllArrow id={id} x1={182} y1={y + 29} x2={W / 2 - 72} y2={H / 2} sky />
            </g>
          );
        })}
        {rightNodes.map((n, i) => {
          const y = rStart + i * step;
          return (
            <g key={n.label}>
              <IllCard id={id} x={W - 180} y={y} w={150} h={58} accent={n.dot}>
                <circle cx={W - 160} cy={y + 29} r="6" fill={n.dot} />
                <text x={W - 146} y={y + 26} fontFamily={ILL.font} fontSize="11" fontWeight="800" fill={ILL.ink}>{n.label}</text>
                {n.sub && <text x={W - 146} y={y + 42} fontFamily={ILL.font} fontSize="9.5" fill={ILL.muted}>{n.sub}</text>}
              </IllCard>
              <IllArrow id={id} x1={W / 2 + 72} y1={H / 2} x2={W - 182} y2={y + 29} />
            </g>
          );
        })}
      </IllCanvas>
    </svg>
  );
};

/** Input → Engine → Output card (AI catalog generation, image → attributes). */
export const GenVisual = ({
  id,
  title,
  engineLabel,
  inputLabel,
  outputLines,
  outputChips,
}: {
  id: string;
  title: string;
  engineLabel: string;
  inputLabel: string;
  outputLines: string[];
  outputChips: { text: string; tone?: "blue" | "emerald" }[];
}) => {
  const W = 560, H = 340;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <IllDefs id={id} />
      <IllCanvas id={id} w={W} h={H}>
        <IllHeader label={title} />
        {/* input */}
        <IllCard id={id} x={24} y={90} w={150} h={200} accent={ILL.sky}>
          <text x={40} y={115} fontFamily={ILL.font} fontSize="9" fontWeight="800" fill={ILL.muted} letterSpacing="1">INPUT</text>
          <rect x={40} y={125} width={118} height={90} rx="6" fill="#f1f5f9" />
          <rect x={68} y={148} width={62} height={44} rx="4" fill="#cbd5e1" />
          <circle cx={99} cy={170} r={12} fill={ILL.sky} opacity="0.5" />
          <text x={99} y={230} textAnchor="middle" fontFamily={ILL.font} fontSize="10" fontWeight="700" fill={ILL.muted}>{inputLabel}</text>
          <rect x={40} y={244} width={90} height={8} rx="3" fill="#e2e8f0" />
          <rect x={40} y={258} width={70} height={8} rx="3" fill="#e2e8f0" />
        </IllCard>
        {/* engine */}
        <g filter={`url(#${id}-shadow)`}>
          <rect x={210} y={135} width={140} height={110} rx="14" fill={`url(#${id}-blue)`} />
          <path d={`M${255} ${170}l10-10 10 10 10-10 10 10v22h-40z`} fill="white" opacity="0.9" />
          <text x={280} y={220} textAnchor="middle" fontFamily={ILL.font} fontSize="12" fontWeight="800" fill="white">{engineLabel}</text>
          <text x={280} y={234} textAnchor="middle" fontFamily={ILL.font} fontSize="9" fill="#bfdbfe">optimized · seconds</text>
        </g>
        {/* output */}
        <IllCard id={id} x={386} y={70} w={150} h={240} accent={ILL.blue}>
          <text x={402} y={95} fontFamily={ILL.font} fontSize="9" fontWeight="800" fill={ILL.blueDeep} letterSpacing="1">GENERATED</text>
          {outputLines.map((l, i) => (
            <g key={i}>
              <text x={402} y={115 + i * 42} fontFamily={ILL.font} fontSize="10" fontWeight="700" fill={ILL.ink}>{l}</text>
              <rect x={402} y={121 + i * 42} width={118} height={5} rx={2} fill={ILL.tint} />
              <rect x={402} y={130 + i * 42} width={98} height={5} rx={2} fill={ILL.tint} />
            </g>
          ))}
          {outputChips.map((c, i) => (
            <g key={i}>
              <rect x={402 + i * 58} y={260} width={52} height={20} rx={10} fill={c.tone === "emerald" ? "#d1fae5" : ILL.tint} />
              <text x={428 + i * 58} y={273} textAnchor="middle" fontFamily={ILL.font} fontSize="9" fontWeight="800" fill={c.tone === "emerald" ? "#065f46" : ILL.blueDeep}>{c.text}</text>
            </g>
          ))}
        </IllCard>
        <IllArrow id={id} x1={174} y1={190} x2={210} y2={190} sky />
        <IllArrow id={id} x1={350} y1={190} x2={386} y2={190} />
      </IllCanvas>
    </svg>
  );
};

/** Grid matrix (variants / strategies / roles). */
export const MatrixVisual = ({
  id,
  title,
  cols,
  rows,
  cellFor,
  note,
}: {
  id: string;
  title: string;
  cols: string[];
  rows: string[];
  cellFor: (r: number, c: number) => { fill: string; text: string; textFill: string };
  note?: string;
}) => {
  const W = 560, H = 340;
  const gridX = 60, gridY = 110, cellW = (W - 120) / (cols.length + 1), cellH = 38;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <IllDefs id={id} />
      <IllCanvas id={id} w={W} h={H}>
        <IllCard id={id} x={24} y={64} w={W - 48} h={H - 88} accent={ILL.blue}>
          <text x={40} y={90} fontFamily={ILL.font} fontSize="13" fontWeight="800" fill={ILL.ink}>{title}</text>
          {cols.map((c, i) => (
            <text key={c} x={gridX + (i + 1) * cellW + cellW / 2} y={gridY - 4} textAnchor="middle" fontFamily={ILL.font} fontSize="10" fontWeight="800" fill={ILL.muted}>{c}</text>
          ))}
          {rows.map((r, ri) => (
            <g key={r}>
              <text x={gridX + cellW / 2} y={gridY + ri * (cellH + 6) + cellH / 2 + 4} textAnchor="middle" fontFamily={ILL.font} fontSize="11" fontWeight="800" fill={ILL.ink}>{r}</text>
              {cols.map((_, ci) => {
                const cell = cellFor(ri, ci);
                return (
                  <g key={ci}>
                    <rect x={gridX + (ci + 1) * cellW + 4} y={gridY + ri * (cellH + 6)} width={cellW - 8} height={cellH} rx={8} fill={cell.fill} stroke={cell.fill === "white" ? ILL.softStroke : "none"} />
                    <text x={gridX + (ci + 1) * cellW + cellW / 2} y={gridY + ri * (cellH + 6) + cellH / 2 + 4} textAnchor="middle" fontFamily={ILL.font} fontSize="10" fontWeight="700" fill={cell.textFill}>{cell.text}</text>
                  </g>
                );
              })}
            </g>
          ))}
          {note && (
            <g>
              <rect x={40} y={H - 76} width={W - 128} height={30} rx={8} fill={ILL.tint} />
              <text x={54} y={H - 56} fontFamily={ILL.font} fontSize="10.5" fontWeight="700" fill={ILL.blueDeep}>{note}</text>
            </g>
          )}
        </IllCard>
        <IllHeader label={title.split("·")[0].trim()} />
      </IllCanvas>
    </svg>
  );
};

/** Checklist / progress steps (bulk ops, onboarding, export). */
export const ProgressListVisual = ({
  id,
  title,
  steps,
  footer,
}: {
  id: string;
  title: string;
  steps: { label: string; detail: string; state: "done" | "active" | "queued" }[];
  footer?: string;
}) => {
  const W = 560, H = 340;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <IllDefs id={id} />
      <IllCanvas id={id} w={W} h={H}>
        <IllCard id={id} x={24} y={64} w={W - 48} h={H - 88} accent={ILL.blue}>
          <text x={40} y={90} fontFamily={ILL.font} fontSize="13" fontWeight="800" fill={ILL.ink}>{title}</text>
          {steps.map((s, i) => {
            const y = 118 + i * 46;
            const color = s.state === "done" ? "#059669" : s.state === "active" ? ILL.blue : "#cbd5e1";
            const bg = s.state === "done" ? "#d1fae5" : s.state === "active" ? ILL.tint : "#f1f5f9";
            return (
              <g key={i}>
                <rect x={40} y={y} width={W - 128} height={36} rx={8} fill={bg} />
                <circle cx={60} cy={y + 18} r={10} fill="white" stroke={color} strokeWidth={2} />
                {s.state === "done" ? (
                  <path d={`M${55} ${y + 18} l4 4 l7 -8`} stroke={color} strokeWidth={2.4} fill="none" strokeLinecap="round" />
                ) : s.state === "active" ? (
                  <circle cx={60} cy={y + 18} r={4} fill={color} />
                ) : (
                  <text x={60} y={y + 22} textAnchor="middle" fontFamily={ILL.font} fontSize="10" fontWeight="800" fill={color}>{i + 1}</text>
                )}
                <text x={82} y={y + 15} fontFamily={ILL.font} fontSize="11.5" fontWeight="800" fill={ILL.ink}>{s.label}</text>
                <text x={82} y={y + 29} fontFamily={ILL.font} fontSize="10" fill={ILL.muted}>{s.detail}</text>
              </g>
            );
          })}
          {footer && (
            <text x={40} y={H - 110} fontFamily={ILL.font} fontSize="10" fontWeight="700" fill={ILL.muted}>{footer}</text>
          )}
        </IllCard>
        <IllHeader label={title.split("·")[0].trim()} />
      </IllCanvas>
    </svg>
  );
};

export type PlatformVisual = ReactNode;
