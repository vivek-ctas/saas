import {
  ShoppingBag, Store, ShoppingCart, Smartphone, Package, Globe, Star, Truck,
} from "lucide-react";
import {
  MarketplaceMeshDiagram, ChannelSyncFlow, InfraTopologyDiagram, OrderFlowDiagram,
  NodeFlowDiagram, RepricerStrategyChart, AutomationBuilderDiagram, DashboardMockup,
  GuideEditorialMockup, AnalyticsFlowDiagram, AIPipelineDiagram, ReportingConsoleMockup,
  MarketplaceConnectorIllustration, InventoryIllustration, ServicesHeroMockup,
  AlertTriageDiagram, RepricerIllustration, SyncIllustration, AnalyticsIllustration,
  GlobeIllustration, NeuralIllustration, WorkflowIllustration,
} from "@/components/illustrations";
import { ComponentType, SVGProps } from "react";
import { LucideIcon } from "lucide-react";

export type Integration = {
  slug: string;
  name: string;
  region: string;
  category: string;
  tone: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  hero: ComponentType<SVGProps<SVGSVGElement>>;
  flow: ComponentType<SVGProps<SVGSVGElement>>;
  detail: ComponentType<SVGProps<SVGSVGElement>>;
  features: { title: string; desc: string }[];
  highlights: string[];
  stats: { label: string; value: string }[];
};

export const INTEGRATIONS: Integration[] = [
  {
    slug: "amazon-integration",
    name: "Amazon",
    region: "Global · FBA + FBM",
    category: "Global Marketplace",
    tone: "from-orange-500 to-secondary",
    icon: ShoppingBag,
    tagline: "Run Amazon like an operator, not a tab-juggler.",
    description:
      "One console for Seller Central across NA, EU, IN, JP and AU. SP-API v2 native, Buy Box-aware repricing, FBA + FBM in the same order grid.",
    hero: MarketplaceMeshDiagram,
    flow: ChannelSyncFlow,
    detail: RepricerStrategyChart,
    features: [
      { title: "SP-API v2 native", desc: "Granular role scoping, automatic token refresh and rate-limit budgeting per Marketplace." },
      { title: "Buy Box repricer", desc: "Win the box without racing to the floor - competitor-aware rules with guardrails per ASIN." },
      { title: "FBA + FBM unified", desc: "Route SKUs to FBA or merchant fulfilled by cohort, season or margin in one click." },
      { title: "Brand Analytics in", desc: "Search query share, repeat purchase and demographics piped straight to your dashboard." },
    ],
    highlights: ["A+ content sync", "Vine + reviews monitor", "Inventory placement tips", "Refund recovery bot"],
    stats: [
      { label: "Marketplace", value: "21" },
      { label: "Avg Sync Latency", value: "<45s" },
      { label: "Buy Box Uplift", value: "+18%" },
    ],
  },
  {
    slug: "walmart-integration",
    name: "Walmart",
    region: "USA · Walmart Marketplace + WFS",
    category: "Global Marketplace",
    tone: "from-blue-600 to-primary",
    icon: Store,
    tagline: "Walmart Marketplace, finally without the spreadsheets.",
    description:
      "Connect Walmart Marketplace, WFS and Walmart Connect ads. Item setup wizard, listing-quality score and order acknowledgement on autopilot.",
    hero: InfraTopologyDiagram,
    flow: OrderFlowDiagram,
    detail: AnalyticsFlowDiagram,
    features: [
      { title: "Item setup wizard", desc: "Bulk publish with category-aware attribute templates - no more rejected feeds." },
      { title: "WFS routing", desc: "Decide WFS vs seller-fulfilled per SKU based on cubic dimensions and velocity." },
      { title: "Listing quality score", desc: "Real-time hints to push your LQS above 80 and unlock Pro Seller badge faster." },
      { title: "Walmart Connect ads", desc: "Pull sponsored search and display spend into the same ROAS view as Amazon Ads." },
    ],
    highlights: ["Order ack < 4hrs", "Pro Seller badge tracker", "Repricer 2.0", "Returns automation"],
    stats: [
      { label: "Items Live", value: "120k+" },
      { label: "Order Ack SLA", value: "99.7%" },
      { label: "LQS Lift", value: "+22pts" },
    ],
  },
  {
    slug: "ebay-integration",
    name: "eBay",
    region: "Global · 23 sites",
    category: "Global Marketplace",
    tone: "from-pink-500 to-secondary",
    icon: Star,
    tagline: "Ship eBay listings like you ship code.",
    description:
      "Bulk lister, motors-grade compatibility data, promoted listings standard + advanced, and best offer autopilot - across all 23 eBay sites.",
    hero: NodeFlowDiagram,
    flow: AutomationBuilderDiagram,
    detail: RepricerIllustration,
    features: [
      { title: "Bulk lister", desc: "Spreadsheet-style editor with variation themes, item specifics and motors compatibility." },
      { title: "Promoted listings", desc: "Standard + advanced campaigns with bid suggestions tied to your real margin." },
      { title: "Best offer autopilot", desc: "Auto-accept above floor, counter in the gray zone, decline below - all rule-driven." },
      { title: "Cross-border trade", desc: "Currency, VAT and item-spec translation handled per destination site." },
    ],
    highlights: ["GTC relisting", "Feedback monitor", "Defect rate alerts", "Returns workflow"],
    stats: [
      { label: "Sites", value: "23" },
      { label: "Avg List Time", value: "12s" },
      { label: "Defect Rate", value: "<0.5%" },
    ],
  },
  {
    slug: "shopify-integration",
    name: "Shopify",
    region: "D2C · Shopify + Shopify Plus",
    category: "Storefront",
    tone: "from-emerald-500 to-primary",
    icon: ShoppingCart,
    tagline: "Make Shopify the source of truth - without locking you in.",
    description:
      "Two-way sync of products, inventory, orders, customers and metafields. Shopify Flow triggers, Functions hooks and B2B catalog support out of the box.",
    hero: AutomationBuilderDiagram,
    flow: DashboardMockup,
    detail: SyncIllustration,
    features: [
      { title: "Bidirectional sync", desc: "Products, variants, inventory, orders and customers - every direction, every minute." },
      { title: "Metafields & metaobjects", desc: "Custom data flows both ways so your theme keeps the rich attributes you've built." },
      { title: "Shopify Flow ready", desc: "Emit Ctasis events into Flow and trigger Ctasis automations from Flow." },
      { title: "B2B catalogs", desc: "Per-company pricing, payment terms and quantity rules synced to channels." },
    ],
    highlights: ["Plus checkout extensibility", "Markets multi-currency", "POS inventory", "Draft order API"],
    stats: [
      { label: "Sync Direction", value: "2-way" },
      { label: "Webhook Latency", value: "<2s" },
      { label: "Stores Live", value: "3.4k" },
    ],
  },
  {
    slug: "etsy-integration",
    name: "Etsy",
    region: "Global · handmade + vintage",
    category: "Global Marketplace",
    tone: "from-orange-500 to-rose-500",
    icon: Package,
    tagline: "Etsy, but operated like a real business.",
    description:
      "Listings, sections, production partners and personalization fields kept perfectly in sync. Etsy Ads + Offsite Ads tracked alongside the rest.",
    hero: GuideEditorialMockup,
    flow: AnalyticsFlowDiagram,
    detail: InventoryIllustration,
    features: [
      { title: "Variation matrix", desc: "Color × size × material with per-variant inventory and SKU rules." },
      { title: "Personalization in", desc: "Buyer-supplied text and file uploads piped straight to your fulfilment workflow." },
      { title: "Renew automation", desc: "Auto-renew best sellers, pause stale listings and rotate seasonal stock." },
      { title: "Star Seller tracker", desc: "Response rate, on-time shipping and 5-star score all in one panel." },
    ],
    highlights: ["Production partners", "Tax-inclusive pricing", "Etsy Ads ROAS", "Offsite Ads attribution"],
    stats: [
      { label: "Listings Synced", value: "850k" },
      { label: "Renew Jobs/Day", value: "60k" },
      { label: "Star Sellers", value: "1.2k" },
    ],
  },
  {
    slug: "tiktok-shop-integration",
    name: "TikTok Shop",
    region: "US · UK · SEA",
    category: "Social commerce",
    tone: "from-rose-500 to-pink-600",
    icon: Smartphone,
    tagline: "Turn livestreams into a real fulfilment pipeline.",
    description:
      "Product feeds, livestream order capture, affiliate sample requests and creator payouts - all fed into the same OMS as your other channels.",
    hero: AIPipelineDiagram,
    flow: ReportingConsoleMockup,
    detail: NeuralIllustration,
    features: [
      { title: "Live order capture", desc: "Catch the spike in real time with rate-limited inventory holds during livestreams." },
      { title: "Creator affiliate hub", desc: "Approve creators, ship samples and reconcile commissions in one workflow." },
      { title: "Short video catalog", desc: "Tag products in videos and sync inventory state so out-of-stock items get auto-hidden." },
      { title: "Cross-border shipping", desc: "Pre-cleared logistics partners by corridor with duty + tax pre-collected." },
    ],
    highlights: ["Livestream OMS", "Creator CRM", "Sample tracking", "Payout reconciliation"],
    stats: [
      { label: "Peak Oders/Min", value: "9.4k" },
      { label: "Creators Managed", value: "12k" },
      { label: "Sample SLA", value: "24h" },
    ],
  },
  {
    slug: "Fnac-integration",
    name: "Fnac",
    region: "India · F-Assured + Smart Fulfilment",
    category: "Asia-Pacific",
    tone: "from-blue-600 to-indigo-600",
    icon: Globe,
    tagline: "Sell on Fnac with hyperscale-grade tooling.",
    description:
      "Listings, pricing, F-Assured eligibility and Smart Fulfilment inbound - automated. Big Billion Day-ready inventory holds and surge protection built-in.",
    hero: MarketplaceConnectorIllustration,
    flow: InventoryIllustration,
    detail: WorkflowIllustration,
    features: [
      { title: "F-Assured tracker", desc: "See SKU-level eligibility, fix gaps and keep the badge that drives conversion." },
      { title: "Smart Fulfilment inbound", desc: "Generate STN, label boxes and book pickups without leaving Ctasis." },
      { title: "BBD surge mode", desc: "Pre-event buffer, throttle and de-list controls for sale-day chaos." },
      { title: "Returns intelligence", desc: "Reason-coded returns mapped to listing quality and image issues." },
    ],
    highlights: ["Listing quality score", "Promotion engine", "Ads (PLA + PCA)", "Account health"],
    stats: [
      { label: "F-Assured SKUs", value: "94%" },
      { label: "BBD Orders/Min", value: "14k" },
      { label: "Return Rate", value: "-31%" },
    ],
  },
  {
    slug: "meesho-integration",
    name: "Meesho",
    region: "India · zero-commission",
    category: "Asia-Pacific",
    tone: "from-pink-500 to-rose-500",
    icon: Truck,
    tagline: "Make Meesho's volume work for your margin.",
    description:
      "Bulk catalog upload, smart pricing for Meesho's price-sensitive shopper, and return-cost-aware SKU recommendations.",
    hero: ServicesHeroMockup,
    flow: AlertTriageDiagram,
    detail: GlobeIllustration,
    features: [
      { title: "Bulk catalog upload", desc: "CSV + image-zip onboarding with category mapping and attribute hints." },
      { title: "Smart pricing", desc: "Price for Meesho's elasticity curve without dragging down your other channels." },
      { title: "Return-cost guardrails", desc: "Auto-flag SKUs whose RTO cost exceeds margin before they go live." },
      { title: "Hold-state OMS", desc: "Handle Meesho's hold/confirm flow with auto-cancel rules and reason codes." },
    ],
    highlights: ["Mall onboarding", "Quality score lift", "Ads campaigns", "RTO analytics"],
    stats: [
      { label: "SKUs / Hour", value: "120k" },
      { label: "RTO Drop", value: "-24%" },
      { label: "Active Sellers", value: "2.1k" },
    ],
  },
];

export const getIntegration = (slug?: string) =>
  INTEGRATIONS.find((i) => i.slug === slug);
