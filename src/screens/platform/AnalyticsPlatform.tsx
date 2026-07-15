import PlatformPage, { PlatformConfig } from "./PlatformPage";
import { KpiChartVisual, DashListVisual, ProgressListVisual } from "./visuals";
import { BarChart3, Layers, DollarSign, Upload, RefreshCw, Sparkles } from "lucide-react";

const cfg: PlatformConfig = {
  slug: "analytics",
  eyebrow: "Analytics",
  title: "Every channel, every metric — one clean dashboard.",
  intro:
    "Revenue, orders, AOV, margin, returns and listing quality — side by side across every marketplace. Export-ready for finance, filter-ready for ops.",
  hero: (
    <KpiChartVisual
      id="an-hero"
      title="Revenue · last 12 weeks"
      kpis={[
        { label: "Revenue", value: "$284k", delta: "+32%" },
        { label: "Orders", value: "5,912", delta: "+14%" },
        { label: "Margin", value: "28.4%", delta: "+2.1%" },
      ]}
      series={[42, 48, 50, 55, 58, 62, 60, 68, 72, 75, 82, 88]}
      compareSeries={[38, 42, 44, 48, 50, 52, 54, 58, 60, 62, 66, 70]}
      pill={{ label: "All 5 channels", tone: "blue" }}
    />
  ),
  problem: {
    title: "Marketplace reports are silos. Your business isn't.",
    points: [
      "Amazon, Walmart, eBay reports live in 5 tabs",
      "No unified margin view",
      "Finance re-keys everything into a spreadsheet",
      "Listing performance is invisible until sales drop",
    ],
  },
  solution: {
    title: "One source of truth for revenue, margin and performance.",
    points: [
      "Cross-channel revenue, margin and returns",
      "Listing-level performance and conversion",
      "Cohort views by channel and category",
      "Exportable reports for finance and accounting",
    ],
  },
  deepDives: [
    {
      eyebrow: "Cross-channel revenue",
      title: "Revenue and margin — every channel, side by side.",
      desc: "Daily, weekly and monthly revenue across every marketplace with true profit factored in. Fees, ads, shipping and returns are folded in per order so margin numbers are what your finance team actually sees.",
      bullets: [
        "Cross-channel revenue, AOV, orders and returns",
        "True profit — fees, ads, shipping and returns per order",
        "Cohort views by channel, category and brand",
        "Anomaly alerts on revenue and Buy Box loss",
      ],
      visual: (
        <KpiChartVisual
          id="an-rev"
          title="Revenue vs prior period · all channels"
          kpis={[
            { label: "Revenue", value: "$284k", delta: "+32%" },
            { label: "AOV", value: "$48.10", delta: "+6%" },
            { label: "Margin", value: "28.4%", delta: "+2.1%" },
          ]}
          series={[40, 46, 50, 54, 58, 62, 66, 70, 76, 78, 84, 90]}
          compareSeries={[36, 40, 44, 46, 50, 52, 54, 58, 60, 62, 68, 72]}
          pill={{ label: "12-week view", tone: "blue" }}
        />
      ),
    },
    {
      eyebrow: "Listing performance",
      title: "See conversion and content quality per SKU, per channel.",
      desc: "Every SKU rated on content quality, image quality and conversion — per channel. Spot the listings dragging down your category before you spot the sales dip.",
      bullets: [
        "Content, image and conversion score per SKU",
        "Channel-level performance rollups",
        "Regenerate or edit any listing from the report",
        "Watchlist for at-risk SKUs",
      ],
      visual: (
        <DashListVisual
          id="an-list"
          title="Listings · this week · at risk"
          chip={{ label: "12 flagged", tone: "blue" }}
          columns={["SKU", "Channel", "CVR", "Score"]}
          rows={[
            { cells: ["SKU-42891", { dot: "#f59e0b", text: "Amazon" }, "3.8%", "94"], badge: { text: "Strong", tone: "emerald" } },
            { cells: ["SKU-11024", { dot: "#2563eb", text: "Walmart" }, "1.9%", "62"], badge: { text: "At risk", tone: "amber" } },
            { cells: ["SKU-98220", { dot: "#ef4444", text: "eBay" }, "1.1%", "48"], badge: { text: "Fix", tone: "amber" } },
            { cells: ["SKU-33012", { dot: "#ea580c", text: "Etsy" }, "4.2%", "90"], badge: { text: "Strong", tone: "emerald" } },
            { cells: ["SKU-70001", { dot: "#1d4ed8", text: "Flipkart" }, "2.6%", "74"], badge: { text: "OK", tone: "muted" } },
          ]}
        />
      ),
    },
    {
      eyebrow: "Exports for finance",
      title: "Finance-ready exports. Not another pivot table.",
      desc: "CSV and Excel exports built the way finance teams actually consume marketplace data — per-order, per-fee, per-return, with tax breakdowns and reconciliation-ready fields.",
      bullets: [
        "CSV and Excel per-order and per-fee exports",
        "GST-ready for IN sellers, VAT breakdowns for EU / UK",
        "Scheduled recurring exports to email or SFTP",
        "API access for warehousing on Enterprise",
      ],
      visual: (
        <ProgressListVisual
          id="an-exp"
          title="Export batch · June close"
          steps={[
            { label: "Orders pulled", detail: "5,912 orders · 5 channels", state: "done" },
            { label: "Fees + ads reconciled", detail: "$18,204 across channels", state: "done" },
            { label: "Returns netted", detail: "417 returns · $9,610", state: "done" },
            { label: "GST / VAT split", detail: "IN 18% · EU 20% · UK 20%", state: "active" },
            { label: "Delivered to finance", detail: "CSV + Excel · SFTP push", state: "queued" },
          ]}
        />
      ),
    },
  ],
  featureGrid: [
    { icon: BarChart3, t: "Revenue dashboard",  d: "Daily, weekly, monthly revenue across every channel." },
    { icon: Layers,    t: "Channel breakdown",  d: "Compare channels by margin, AOV and repeat rate." },
    { icon: DollarSign, t: "True profit",       d: "Fees, ads, shipping and returns factored into margin." },
    { icon: RefreshCw,  t: "Listing quality",   d: "Content score, image score and conversion per SKU." },
    { icon: Upload,     t: "Exports",           d: "CSV and Excel exports built for finance workflows." },
    { icon: Sparkles,   t: "Alerts",            d: "Anomaly alerts on revenue, returns and Buy Box loss." },
  ],
  channels: ["Amazon", "Walmart", "eBay", "Etsy", "Flipkart"],
  faq: [
    { q: "Do you calculate true profit?", a: "Yes. We factor marketplace fees, ads, shipping and returns per order." },
    { q: "Can I export to my accounting tool?", a: "CSV and Excel exports today; API access on Enterprise." },
    { q: "Is data real-time?", a: "Orders and revenue update in near real-time; profit views refresh nightly." },
    { q: "Do you support GST / VAT reporting?", a: "GST-ready exports for Indian sellers; VAT breakdowns for EU/UK." },
    { q: "How far back does history go?", a: "Full history from your connect date, plus up to 24 months of import on Growth+." },
  ],
};
export default function AnalyticsPlatform() { return <PlatformPage cfg={cfg} />; }
