import PlatformPage, { PlatformConfig } from "./PlatformPage";
import { ShoppingCart, RefreshCw, Layers, ShieldCheck, BarChart3, Upload } from "lucide-react";
import { FlowVisual } from "@/components/illustrations/flowchart"
import { DashListVisual } from "@/components/illustrations/DashListVisual";
import { ProgressListVisual } from "@/components/illustrations/ProgressListVisual";
const cfg: PlatformConfig = {
  slug: "orders",
  eyebrow: "Order hub",
  title: "Every marketplace order. One inbox. Zero tab-juggling.",
  intro:
    "Amazon, Walmart, eBay, Etsy and Flipkart orders land in a single, unified inbox — with status writebacks to every channel and bulk actions that just work.",
  hero: (
    <DashListVisual
      id="orders-hero"
      title="Order inbox · today"
      chip={{ label: "241 open", tone: "navy" }}
      columns={["Channel", "SKU", "Qty", "Total"]}
      rows={[
        { cells: [{ dot: "#f59e0b", text: "Amazon" }, "SKU-42891", "×2", "$59.90"], badge: { text: "Ready", tone: "emerald" } },
        { cells: [{ dot: "#2563eb", text: "Walmart" }, "SKU-11024", "×1", "$24.00"], badge: { text: "Picked", tone: "amber" } },
        { cells: [{ dot: "#ef4444", text: "eBay" }, "SKU-98220", "×3", "$147.00"], badge: { text: "New", tone: "blue" } },
        { cells: [{ dot: "#ea580c", text: "Etsy" }, "SKU-33012", "×1", "$18.50"], badge: { text: "Ready", tone: "emerald" } },
      ]}
    />
  ),
  problem: {
    title: "Five dashboards. Five workflows. Five ways to miss an order.",
    points: [
      "Ops team switches tabs all day",
      "Missed SLAs on Flipkart and Walmart",
      "Cancellations and returns handled differently everywhere",
      "No unified view of what shipped today",
    ],
  },
  solution: {
    title: "Capture → route → fulfil → close — same pipeline, every channel.",
    points: [
      "Unified inbox with cross-channel filters",
      "Bulk label printing across marketplaces",
      "Automatic status + tracking writebacks",
      "SLA countdowns and priority flags per order",
    ],
  },
  deepDives: [
    {
      eyebrow: "Unified inbox",
      title: "Every marketplace order in one filterable inbox.",
      desc: "New orders from every connected channel land in one inbox with the same shape — SKU, quantity, channel, SLA and destination. Filter by channel, tag, warehouse or fulfilment state.",
      bullets: [
        "Cross-channel filters, saved views and tags",
        "SLA countdowns per marketplace",
        "Assign owners and add order-level notes",
        "Search by SKU, order ID, tracking or customer",
      ],
      visual: (
        <DashListVisual
          id="orders-inbox"
          title="Today's queue · 241 open"
          chip={{ label: "SLA green", tone: "blue" }}
          columns={["Channel", "Order", "Qty", "Priority"]}
          rows={[
            { cells: [{ dot: "#f59e0b", text: "Amazon" }, "111-2340091", "×2", "SLA 4h"], badge: { text: "Ready", tone: "emerald" } },
            { cells: [{ dot: "#2563eb", text: "Walmart" }, "WM-88301", "×1", "SLA 2h"], badge: { text: "Picked", tone: "amber" } },
            { cells: [{ dot: "#ef4444", text: "eBay" }, "EB-4402A", "×3", "SLA 24h"], badge: { text: "New", tone: "blue" } },
            { cells: [{ dot: "#ea580c", text: "Etsy" }, "ET-77120", "×1", "SLA 48h"], badge: { text: "Ready", tone: "emerald" } },
          ]}
        />
      ),
    },
    {
      eyebrow: "Routing rules",
      title: "Route every order to the right warehouse — automatically.",
      desc: "Set rules based on SKU, region, channel or weight. SellerBuz picks the fulfilment source, generates the pick list and creates the label — no ops person needed for standard orders.",
      bullets: [
        "SKU, region, channel and weight-based routing",
        "Split orders across warehouses when needed",
        "3PL and FBA / WFS handoff automation",
        "Manual override on any order",
      ],
      visual: (
        <FlowVisual
          id="orders-route"
          title="ORDER ROUTING · RULE-BASED"
          hub="Routing"
          hubLatency="rules · overrides"
          leftNodes={[
            { label: "Amazon order", sub: "US · East", dot: "#f59e0b", logo: "/logos/amazon-color-svgrepo-com.svg" },
            { label: "Walmart order", sub: "IN · Blr", dot: "#1d4ed8", logo: "/logos/walmart.png" },
            { label: "eBay order", sub: "EU · NL", dot: "#ef4444", logo: "/logos/ebay-svgrepo-com.svg" },
          ]
          }
          rightNodes={
            [
              { label: "Ohio WH", sub: "US East orders", dot: "#10b981" },
              { label: "Delhivery 3PL", sub: "IN orders", dot: "#6366f1" },
              { label: "Rotterdam 3PL", sub: "EU orders", dot: "#0ea5e9" },
            ]}
        />
      ),
    },
    {
      eyebrow: "Fulfil & close",
      title: "Bulk labels. Auto writeback. Nothing left in a limbo state.",
      desc: "Print labels across marketplaces in one action. As soon as tracking is generated, SellerBuz writes it back to the originating channel so the buyer sees status in their marketplace app.",
      bullets: [
        "Bulk pick list + label print across channels",
        "Tracking + shipped status auto-written to each channel",
        "Partial shipments with per-line tracking",
        "Returns and cancellations flow back into the inbox",
      ],
      visual: (
        <ProgressListVisual
          id="orders-close"
          title="Batch #4021 · 128 orders"
          steps={[
            { label: "Pick list generated", detail: "128 orders · 4 warehouses", state: "done" },
            { label: "Bulk labels printed", detail: "UPS · USPS · Delhivery · DHL", state: "done" },
            { label: "Marked shipped", detail: "Tracking numbers attached", state: "active" },
            { label: "Writeback to marketplace", detail: "Amazon · Walmart · eBay · Etsy · Flipkart", state: "queued" },
            { label: "Closed", detail: "Buyer notified via marketplace", state: "queued" },
          ]}
        />
      ),
    },
  ],
  featureGrid: [
    { icon: ShoppingCart, t: "Unified inbox", d: "Every order, every marketplace, one view." },
    { icon: Layers, t: "Routing rules", d: "Route orders by SKU, region or channel to the right warehouse or 3PL." },
    { icon: Upload, t: "Bulk actions", d: "Print labels, mark shipped, refund — in bulk, across channels." },
    { icon: RefreshCw, t: "Status writeback", d: "Tracking numbers and shipped status propagate back to each marketplace." },
    { icon: ShieldCheck, t: "SLA guardrails", d: "Countdowns and priority flags so nothing slips past dispatch." },
    { icon: BarChart3, t: "Fulfilment analytics", d: "On-time rate, cancellation rate and return rate by channel." },
  ],
  channels: ["Amazon", "Walmart", "eBay", "Etsy", "Flipkart"],
  faq: [
    { q: "Does it print shipping labels?", a: "Yes — integrated with major carriers. Bulk-print across marketplaces." },
    { q: "How are returns handled?", a: "Return events sync into the inbox with the original order attached." },
    { q: "Can I assign orders to team members?", a: "Yes. Ownership, notes and tags per order." },
    { q: "Does it support partial shipments?", a: "Yes. Split shipments write back per-line tracking to each channel." },
    { q: "Which carriers are supported?", a: "UPS, FedEx, USPS, DHL, Delhivery, Bluedart, Shiprocket and more via integrations." },
  ],
};
export default function OrdersPlatform() { return <PlatformPage cfg={cfg} />; }
