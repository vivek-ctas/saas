import PlatformPage, { PlatformConfig } from "./platformPage";
import { Boxes, RefreshCw, ShieldCheck, BarChart3, Layers, Upload } from "lucide-react";
import { FlowVisual, DashListVisual, KpiChartVisual } from "@/components/illustrations/platformPageIllustrations";
const cfg: PlatformConfig = {
  slug: "inventory",
  eyebrow: "Inventory Sync",
  title: <>One stock number. Every channel. <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">Always accurate.</span></>,
  intro:
    "Stop reconciling spreadsheets at 2 a.m. SellerBuz keeps stock levels in perfect sync across Amazon and Shopify - with sub-2-second propagation and zero oversells.",
  hero: (
    <FlowVisual
      id="inv-hero"
      title="SYNC ENGINE"
      hub="SellerBuz Sync"
      hubLatency="latency < 2s"
      leftNodes={[
        { label: "Warehouse", sub: "1,240 on hand", dot: "#3C9AC4", logo: "/logos/warehouse-svgrepo-com.svg" },
        { label: "3PL / FBA", sub: "428 units", dot: "#13355A", logo: "/logos/fba.webp" },
      ]}
      rightNodes={[
        { label: "Amazon", sub: "Stock: 1,240", dot: "#3C9AC4", logo: "/logos/amazon-color-svgrepo-com.svg" },
        {
          label: "Shopify", sub: "Stock: 1,240", dot: "#3C9AC4", logo: "/logos/shopify-color-svgrepo-com.svg"
        },
      ]}
    />
  ),
  problem: {
    title: <>Selling multi-channel from spreadsheets is <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">a time bomb.</span></>,
    points: [
      "Manual stock updates across 5 dashboards",
      "One late edit → oversell → suspended listing",
      "Warehouse stock and channel stock disagree",
      "Flash sales cause chaos across marketplaces",
    ],
  },
  solution: {
    title: <>One master catalog, five channels, <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">one source of truth.</span></>,
    points: [
      "Sub-2-second propagation across every channel",
      "Cross-channel stock reservations during checkout",
      "Warehouse + FBA + WFS tracked separately, netted centrally",
      "Full audit log of every stock movement",
    ],
  },
  deepDives: [
    {
      eyebrow: "Real-Time Sync",
      title: <>One stock number. Fanned out to every channel <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">in under 2 seconds.</span></>,
      desc: "SellerBuz sits between your warehouse and every marketplace. When stock moves, we push the new number to Amazon and Shopify in parallel - with automatic retries and full audit history.",
      bullets: [
        "Sub-2-second propagation via native marketplace APIs",
        "Parallel writes - one slow channel doesn't block the others",
        "Automatic retries with exponential backoff",
        "Every sync event logged, searchable and exportable",
      ],
      visual: (
        <FlowVisual
          id="inv-sync"
          title="LIVE SYNC · WAREHOUSE → CHANNELS"
          hub="Sync Engine"
          hubLatency="< 2s propagation"
          leftNodes={[
            { label: "Warehouse", sub: "master stock", dot: "#3C9AC4", logo: "/logos/warehouse-svgrepo-com.svg" },
            {
              label: "Receiving", sub: "+420 units", dot: "#3C9AC4", logo: "/logos/receive-square-2-svgrepo-com.svg"
            },
          ]}
          rightNodes={[
            { label: "Amazon", sub: "1,240 units", dot: "#3C9AC4", logo: '/logos/amazon-color-svgrepo-com.svg' },
            { label: "Shopify", sub: "1,240 units", dot: "#3C9AC4", logo: "/logos/shopify-color-svgrepo-com.svg" },
          ]}
        />
      ),
    },
    {
      eyebrow: "Multi-Warehouse",
      title: <>Split inventory across warehouses, <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">netted for the seller.</span></>,
      desc: "Track stock separately across your own warehouse, FBA, WFS and 3PLs - with allocation rules per region and per channel. Available-to-sell is netted centrally so no channel ever oversells.",
      bullets: [
        "Per-warehouse and per-channel allocation rules",
        "FBA, WFS and merchant stock tracked side by side",
        "Region-based routing (US vs EU vs IN)",
        "Buffer stock per channel - set globally or per SKU",
      ],
      visual: (
        <DashListVisual
          id="inv-wh"
          title="Multi-warehouse ledger · SKU-42891"
          chip={{ label: "Net available: 1,668", tone: "blue" }}
          columns={["Location", "On hand", "Reserved", "Available"]}
          rows={[
            { cells: [{ dot: "#3C9AC4", text: "US · Ohio WH" }, "820", "42", "778"], badge: { text: "OK", tone: "emerald" } },
            { cells: [{ dot: "#3C9AC4", text: "Amazon FBA" }, "512", "18", "494"], badge: { text: "OK", tone: "emerald" } },
            { cells: [{ dot: "#13355A", text: "EU · Rotterdam 3PL" }, "148", "0", "148"], badge: { text: "Low", tone: "amber" } },
          ]}
        />
      ),
    },
    {
      eyebrow: "Guardrails",
      title: <>Buffer stock and low-stock alerts - <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">before you oversell.</span></>,
      desc: "Hold a safety buffer on every channel automatically. Get a low-stock alert before you drop below your reorder point, and see days-of-cover trends per SKU so you reorder at the right moment.",
      bullets: [
        "Per-SKU or global buffer stock rules",
        "Low-stock, out-of-stock and stockout risk alerts",
        "Days-of-cover and reorder-point recommendations",
        "Sell-through velocity per channel and per category",
      ],
      visual: (
        <KpiChartVisual
          id="inv-guard"
          title="Days of cover · SKU-42891"
          kpis={[
            { label: "On hand", value: "1,668", delta: "stable", icon: "box" },
            { label: "Sell / day", value: "84", delta: "+6%", icon: "cart" },
            { label: "Days cover", value: "19.8", delta: "healthy", icon: "calendar" },
          ]}
          series={[85, 82, 78, 74, 70, 66, 60, 55, 50, 46, 42, 40]}
          compareSeries={[75, 72, 68, 64, 60, 56, 50, 44, 40, 36, 32, 30]}
          floorLabel="Reorder at 20"
          pill={{ label: "Guardrails ON", tone: "emerald" }}
        />
      ),
    },
  ],
  featureGrid: [
    { icon: Boxes, t: "Master catalog", d: "Single SKU per product with per-channel mappings and identifiers." },
    { icon: RefreshCw, t: "Real-time sync", d: "Push and pull inventory via native APIs - no polling delays." },
    { icon: Layers, t: "Multi-warehouse", d: "Split inventory across warehouses and 3PLs with allocation rules." },
    { icon: Upload, t: "Bulk adjustments", d: "Cycle counts, receiving and adjustments via CSV or Excel." },
    { icon: ShieldCheck, t: "Guardrails", d: "Buffer stock, safety thresholds and low-stock alerts per channel." },
    { icon: BarChart3, t: "Movement analytics", d: "Sell-through, days-of-cover and reorder recommendations." },
  ],
  channels: ["Amazon", "Shopify"],
  faq: [
    { q: "How fast is 'real-time'?", a: "Most updates propagate in under 2 seconds, subject to marketplace API rate limits." },
    { q: "Can I hold buffer stock per channel?", a: "Yes - set per-channel buffers globally or per-SKU." },
    { q: "Does it handle bundles and kits?", a: "Yes. Component-level inventory decrements with bundle logic." },
    { q: "What about pre-orders and back-orders?", a: "Supported. Pre-orders show as future stock without blocking current sales." },
    { q: "Does it work with FBA + WFS + own warehouse?", a: "Yes - all three are tracked separately and netted for available-to-sell." },
  ],
};
export default function InventoryPlatform() { return <PlatformPage cfg={cfg} />; }
