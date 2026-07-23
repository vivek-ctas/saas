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
    "Sync your Amazon Seller Central catalog, inventory and orders with SellerBuz in minutes. Automate Buy Box repricing, generate A+ ready listings and manage FBA + FBM together - without leaving the dashboard.",
  stats: [
    { l: "Buy Box Uplift", v: "+34%", d: "avg first month" },
    { l: "Reprice Speed", v: "< 2s" },
    { l: "SKUs Supported", v: "Unlimited" },
    { l: "Oversells", v: "0" },
  ],
  capabilities: [
    { icon: DollarSign, t: "Buy Box repricer", d: "Rule + Buy Box aware repricing with per-SKU floor and ceiling. React to competitor moves in under 2 seconds.", stat: "Rules active" },
    { icon: Boxes, t: "FBA + FBM inventory", d: "Track FBA inventory alongside your own warehouse - reserve, allocate and split shipments from one screen.", stat: "12,480 SKUs" },
    { icon: Wand2, t: "A+ ready listings", d: "Generate Amazon-style titles, bullets, backend keywords and A+ content in seconds with the AI catalog.", stat: "AI ready" },
    { icon: ShoppingCart, t: "Order sync + labels", d: "Every Amazon order lands in your unified inbox with buyer details, shipping method and label generation.", stat: "241 / today" },
    { icon: ImageIcon, t: "Image + variant hygiene", d: "Enforce Amazon image standards and variation rules across parent-child listings automatically.", stat: "Auto enforced" },
    { icon: BarChart3, t: "Amazon analytics", d: "Session-to-order conversion, Buy Box share, IPI health and returns - beside every other channel.", stat: "Live dashboard" },
  ],
  gotchas: [
    { t: "Buy Box alerts", d: "Loss detection" },
    { t: "Listing recovery", d: "Auto fixes" },
    { t: "IPI tracking", d: "Performance score" },
    { t: "Variation rules", d: "Parent-child sync" },
  ],
  onboarding: ["Connect SP-API", "Import catalog", "Set rules", "Go live"],
  faq: [
    { q: "Do you support FBA and FBM together?", a: "Yes. Inventory and orders from both fulfilment methods are tracked in one view." },
    { q: "Is this Amazon SP-API official?", a: "Yes - SellerBuz uses Amazon's official Selling Partner API for all reads and writes." },
    { q: "Which Amazon marketplaces are supported?", a: "US, CA, MX, UK, DE, FR, IT, ES, IN, AE, AU, JP and more. Multi-region rollouts supported on Growth and above." },
    { q: "Will repricing violate Amazon policy?", a: "No. All repricing respects your floor, ceiling and Amazon's pricing fairness policies." },
    { q: "How long does onboarding take?", a: "Most sellers connect Amazon and see their first synced catalog within 10 minutes." },
  ],
  otherChannels: others("Amazon"),
};
