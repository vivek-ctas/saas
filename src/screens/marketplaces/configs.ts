import { Boxes, ShoppingCart, DollarSign, BarChart3, Wand2, Image as ImageIcon } from "lucide-react";
import type { MarketplaceConfig } from "./MarketplacePage";

const others = (name: string) =>
  ["Amazon"].filter((n) => n !== name);

export const amazonConfig: MarketplaceConfig = {
  slug: "amazon",
  name: "Amazon",
  dot: "#f59e0b",
  logo: "/logos/amazon-color-svgrepo-com.svg",
  tagline: "Sell smarter on Amazon - Buy Box first, ops second.",
  intro:
    "Generate AI-optimized listings, track FBA and FBM inventory in real-time, and manage your entire Amazon catalog from one dashboard.",
  stats: [
    { l: "Listing Sync Speed", v: "< 2s", d: "avg first month" },
    { l: "AI Listing Score", v: "96/100" },
    { l: "SKUs Supported", v: "Unlimited" },
    { l: "Oversells", v: "0" },
  ],
  capabilities: [
    { icon: DollarSign, t: "AI listing optimization", d: "Generate Amazon-optimized titles, bullets, backend keywords and descriptions. AI retries automatically when listings get suppressed.", stat: "AI ready" },
    { icon: Boxes, t: "FBA + FBM inventory", d: "Track FBA inventory alongside your own warehouse - reserve, allocate and split shipments from one screen.", stat: "12,480 SKUs" },
    { icon: Wand2, t: "A+ ready listings", d: "Generate Amazon-style titles, bullets, backend keywords and A+ content in seconds with the AI catalog.", stat: "AI ready" },
    { icon: ShoppingCart, t: "Inventory & stock alerts", d: "Real-time inventory sync across FBA and FBM with low-stock alerts and reorder recommendations.", stat: "Auto alerts" },
    { icon: ImageIcon, t: "Image + variant hygiene", d: "Enforce Amazon image standards and variation rules across parent-child listings automatically.", stat: "Auto enforced" },
    { icon: BarChart3, t: "Amazon analytics", d: "Listing performance, inventory velocity, stock health and sync status - beside every other channel.", stat: "Live dashboard" },
  ],
  gotchas: [
    { t: "Listing suppression alerts", d: "Loss detection" },
    { t: "Listing recovery", d: "Auto fixes" },
    { t: "IPI tracking", d: "Performance score" },
    { t: "Variation rules", d: "Parent-child sync" },
  ],
  onboarding: ["Connect SP-API", "Import catalog", "Set rules", "Go live"],
  faq: [
    { q: "Do you support FBA and FBM together?", a: "Yes. Inventory and orders from both fulfilment methods are tracked in one view." },
    { q: "Is this Amazon SP-API official?", a: "Yes - SellerBuz uses Amazon's official Selling Partner API for all reads and writes." },
    { q: "Which Amazon marketplaces are supported?", a: "US, CA, MX, UK, DE, FR, IT, ES, IN, AE, AU, JP and more. Multi-region rollouts supported on Growth and above." },
    { q: "How does AI listing retry work?", a: "When a listing is suppressed, our AI analyzes the rejection reason, rewrites the content to match Amazon's requirements, and retries automatically until it goes live." },
    { q: "How long does onboarding take?", a: "Most sellers connect Amazon and see their first synced catalog within 10 minutes." },
  ],
  otherChannels: others("Amazon"),
};
