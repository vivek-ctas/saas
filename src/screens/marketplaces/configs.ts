import { Boxes, ShoppingCart, DollarSign, BarChart3, Wand2, RefreshCw, LayoutGrid, GitMerge, Upload, ShieldCheck, Image as ImageIcon, Sparkles } from "lucide-react";
import type { MarketplaceConfig } from "./MarketplacePage";

const others = (name: string) =>
  ["Amazon", "Walmart", "eBay", "Etsy", "Flipkart"].filter((n) => n !== name);

export const amazonConfig: MarketplaceConfig = {
  slug: "amazon",
  name: "Amazon",
  dot: "#f59e0b",
  tagline: "Sell smarter on Amazon — Buy Box first, ops second.",
  intro:
    "Sync your Amazon Seller Central catalog, inventory and orders with SellerBuz in minutes. Automate Buy Box repricing, generate A+ ready listings and manage FBA + FBM together — without leaving the dashboard.",
  stats: [
    { l: "Buy Box uplift", v: "+34%", d: "avg first month" },
    { l: "Reprice speed", v: "< 2s" },
    { l: "SKUs supported", v: "Unlimited" },
    { l: "Oversells", v: "0" },
  ],
  capabilities: [
    { icon: DollarSign, t: "Buy Box repricer", d: "Rule + Buy Box aware repricing with per-SKU floor and ceiling. React to competitor moves in under 2 seconds." },
    { icon: Boxes,      t: "FBA + FBM inventory", d: "Track FBA inventory alongside your own warehouse — reserve, allocate and split shipments from one screen." },
    { icon: Wand2,      t: "A+ ready listings",  d: "Generate Amazon-style titles, bullets, backend keywords and A+ content in seconds with the AI catalog." },
    { icon: ShoppingCart, t: "Order sync + labels", d: "Every Amazon order lands in your unified inbox with buyer details, shipping method and label generation." },
    { icon: ImageIcon,  t: "Image + variant hygiene", d: "Enforce Amazon image standards and variation rules across parent-child listings automatically." },
    { icon: BarChart3,  t: "Amazon-specific analytics", d: "Session-to-order conversion, Buy Box share, IPI health and returns — beside every other channel." },
  ],
  gotchas: [
    { t: "Buy Box loss detection", d: "Real-time alerts when you lose the Buy Box on a high-margin ASIN, with one-click reprice." },
    { t: "Suppressed listing recovery", d: "Detects suppression triggers (missing attributes, image issues) and surfaces exactly what to fix." },
    { t: "IPI & storage limits", d: "Tracks Inventory Performance Index and warns before storage cost overages hit." },
    { t: "Variation parent-child rules", d: "Keeps parent/child variation trees valid across bulk edits so nothing goes dark." },
  ],
  onboarding: ["Connect SP-API", "Import catalog", "Set rules", "Go live"],
  faq: [
    { q: "Do you support FBA and FBM together?", a: "Yes. Inventory and orders from both fulfilment methods are tracked in one view." },
    { q: "Is this Amazon SP-API official?", a: "Yes — SellerBuz uses Amazon's official Selling Partner API for all reads and writes." },
    { q: "Which Amazon marketplaces are supported?", a: "US, CA, MX, UK, DE, FR, IT, ES, IN, AE, AU, JP and more. Multi-region rollouts supported on Growth and above." },
    { q: "Will repricing violate Amazon policy?", a: "No. All repricing respects your floor, ceiling and Amazon's pricing fairness policies." },
    { q: "How long does onboarding take?", a: "Most sellers connect Amazon and see their first synced catalog within 10 minutes." },
  ],
  otherChannels: others("Amazon"),
};

export const walmartConfig: MarketplaceConfig = {
  slug: "walmart",
  name: "Walmart",
  dot: "#2563eb",
  tagline: "Walmart Marketplace — clean listings, clean sync.",
  intro:
    "Walmart's 2-step listing model punishes sloppy data. SellerBuz gets your setup + spec right the first time, then keeps inventory, price and orders in perfect sync with your other channels.",
  stats: [
    { l: "Listing accuracy", v: "99.4%" },
    { l: "Time to publish", v: "5 min" },
    { l: "Item spec coverage", v: "Full" },
    { l: "Order sync latency", v: "< 2s" },
  ],
  capabilities: [
    { icon: LayoutGrid, t: "Item Spec builder",   d: "Guided attribute completion for every Walmart category, so listings clear the first review." },
    { icon: RefreshCw,  t: "2-way inventory sync", d: "Every Walmart Seller Center stock change reflects across Amazon, eBay, Etsy and Flipkart in seconds." },
    { icon: DollarSign, t: "Competitor repricer",  d: "Match or beat the Walmart winning offer with rule-based repricing and margin guardrails." },
    { icon: ShoppingCart, t: "Order routing",     d: "Route Walmart orders to your warehouse, 3PL or drop-shipper with automatic status writebacks." },
    { icon: Wand2,      t: "AI content for Walmart", d: "Long descriptions, key features and rich media — generated in Walmart's preferred format." },
    { icon: BarChart3,  t: "Listing Quality Score", d: "Track Walmart's LQS per SKU and see exactly which fields to improve." },
  ],
  gotchas: [
    { t: "Set-up + spec split", d: "Item Setup and Item Spec are two different files at Walmart — we handle both, correctly, in one flow." },
    { t: "Category-specific attributes", d: "Required attributes vary per category. SellerBuz warns before submission, not after." },
    { t: "Shipping templates", d: "Ship-node aware — regional shipping templates map correctly to your warehouses." },
    { t: "Buy Box on Walmart", d: "Walmart's winning offer logic differs from Amazon — our repricer knows the difference." },
  ],
  onboarding: ["Connect Walmart API", "Map categories", "Import & validate", "Publish live"],
  faq: [
    { q: "Do you support Walmart Fulfillment Services (WFS)?", a: "Yes. WFS inventory and standard MF inventory are tracked side-by-side." },
    { q: "Can I use SellerBuz if I'm not yet approved?", a: "You can build your catalog inside SellerBuz first, then publish once Walmart approves you." },
    { q: "Does the repricer respect Walmart's pricing policies?", a: "Yes. Floors, ceilings and price parity across channels are enforced." },
    { q: "How are returns handled?", a: "Return events sync into the unified order inbox with the original order attached." },
    { q: "Which regions are supported?", a: "Walmart US, Walmart Canada and Walmart Mexico." },
  ],
  otherChannels: others("Walmart"),
};

export const ebayConfig: MarketplaceConfig = {
  slug: "ebay",
  name: "eBay",
  dot: "#0ea5e9",
  tagline: "eBay — variations, promotions and listings, tamed.",
  intro:
    "eBay's variation model, promoted listings and international rollouts can eat hours a week. SellerBuz gives you a single source of truth for stock, price and content — then pushes changes to eBay in real time.",
  stats: [
    { l: "Variations per listing", v: "Up to 250" },
    { l: "GTC listings", v: "Native" },
    { l: "Regions supported", v: "20+" },
    { l: "Promoted Listings", v: "Rule-based" },
  ],
  capabilities: [
    { icon: LayoutGrid, t: "Variations manager",   d: "Manage size, color and style variations at scale with per-variant SKU, price and stock." },
    { icon: DollarSign, t: "eBay repricer",        d: "Compete on eBay best-match with rule-based repricing that respects your margin floor." },
    { icon: RefreshCw,  t: "GTC-first sync",       d: "Good-Til-Cancelled listings stay live and accurate — no relist babysitting." },
    { icon: ShoppingCart, t: "Order + label flow", d: "Orders sync with shipping preferences, buyer notes and one-click label generation." },
    { icon: Wand2,      t: "eBay-optimized titles", d: "80-char titles crafted for eBay search + item specifics filled from a single image." },
    { icon: BarChart3,  t: "Promoted Listings ROAS", d: "Track promoted listings spend and return alongside organic sales." },
  ],
  gotchas: [
    { t: "Item specifics", d: "Category-required item specifics are surfaced during listing so you never publish incomplete." },
    { t: "GTC vs auction", d: "Choose GTC, Auction or Fixed Price per SKU — the sync handles both flows correctly." },
    { t: "International shipping", d: "Global Shipping Program and eBay International Shipping both supported." },
    { t: "eBay policies", d: "Payment, shipping and return policies map to your saved business policies." },
  ],
  onboarding: ["Connect eBay account", "Import active listings", "Set repricer rules", "Enable 2-way sync"],
  faq: [
    { q: "Does it support eBay stores in all regions?", a: "Yes — .com, .co.uk, .de, .fr, .it, .es, .com.au, .ca and more." },
    { q: "Can I run promoted listings from SellerBuz?", a: "You can set default promoted listing rates per category and see ROAS beside organic revenue." },
    { q: "What about eBay Motors, art, collectibles?", a: "Supported. Category-specific item specifics are enforced during listing." },
    { q: "Will my existing eBay listings stay live?", a: "Yes. SellerBuz imports them as-is and starts syncing without a relist." },
    { q: "Does it support multi-quantity auctions?", a: "Fixed price and GTC recommended for multi-quantity; auctions supported for single-quantity items." },
  ],
  otherChannels: others("eBay"),
};

export const etsyConfig: MarketplaceConfig = {
  slug: "etsy",
  name: "Etsy",
  dot: "#ea580c",
  tagline: "Etsy — keep your handmade brand, lose the busywork.",
  intro:
    "Etsy rewards personality and consistency. SellerBuz keeps every listing, variation and stock number accurate across your Etsy shop and other marketplaces — while you keep making product, not spreadsheets.",
  stats: [
    { l: "Sections + tags", v: "Full support" },
    { l: "Variations", v: "Native" },
    { l: "Renewal automation", v: "Auto" },
    { l: "Inventory conflicts", v: "0" },
  ],
  capabilities: [
    { icon: Boxes,      t: "Shop inventory sync",  d: "Etsy stock stays in lockstep with Amazon, Walmart, eBay and Flipkart in real time." },
    { icon: LayoutGrid, t: "Variations + sections", d: "Build shop sections, tags and variation matrices from one catalog view." },
    { icon: Wand2,      t: "Etsy-voice AI catalog", d: "Warm, brand-consistent titles and descriptions — tuned for Etsy search, not sterile marketplace copy." },
    { icon: ShoppingCart, t: "Order + note handling", d: "Buyer messages, personalization notes and gift options all land in the unified inbox." },
    { icon: DollarSign, t: "Smart pricing",         d: "Rule-based pricing across channels while keeping Etsy's fee structure intact." },
    { icon: ImageIcon,  t: "Photo + video assets", d: "Manage listing photos and videos in the shared asset library — reuse across marketplaces." },
  ],
  gotchas: [
    { t: "Etsy fee-aware pricing", d: "Repricer accounts for Etsy transaction, payment and offsite ads fees when setting floors." },
    { t: "Personalization requests", d: "Personalization instructions attach to the order line, not hidden in a notes field." },
    { t: "Sections & tags", d: "Bulk assign shop sections, tags and materials to keep discovery consistent." },
    { t: "Digital + physical", d: "Digital downloads and physical goods both fully supported." },
  ],
  onboarding: ["Connect Etsy shop", "Sync listings", "Map channels", "Enable auto-renew"],
  faq: [
    { q: "Will SellerBuz change my Etsy voice?", a: "No. The AI catalog is tone-aware per channel; Etsy stays warm and personal, Amazon stays feature-first." },
    { q: "Are offsite ads reported?", a: "Yes. Offsite Ads spend and revenue are tracked in the analytics dashboard." },
    { q: "Does it support Etsy Payments?", a: "Yes. Payouts and fees import into revenue analytics." },
    { q: "Can I use SellerBuz with a Pattern site?", a: "Not directly — but the Etsy shop it sits on syncs fully." },
    { q: "How are digital products handled?", a: "Digital listings, delivery files and instant download orders are all supported." },
  ],
  otherChannels: others("Etsy"),
};

export const flipkartConfig: MarketplaceConfig = {
  slug: "flipkart",
  name: "Flipkart",
  dot: "#1d4ed8",
  tagline: "Flipkart — India-ready listings, real-time sync, zero drama.",
  intro:
    "Flipkart is a different beast: catalog-driven listings, Smart Fulfil, F-Assured and daily competitor swings. SellerBuz gives Indian sellers a single dashboard to run Flipkart alongside global channels, in one place.",
  stats: [
    { l: "Smart Fulfil ready", v: "Yes" },
    { l: "F-Assured tracking", v: "Native" },
    { l: "Category coverage", v: "All" },
    { l: "GST-aware reports", v: "✓" },
  ],
  capabilities: [
    { icon: GitMerge,   t: "Catalog matching",    d: "Match against Flipkart's shared catalog automatically or list as a fresh product — your choice per SKU." },
    { icon: Boxes,      t: "Smart Fulfil inventory", d: "Track Smart Fulfil, seller-fulfilled and F-Assured stock separately, all in one view." },
    { icon: DollarSign, t: "Competitor repricer", d: "React to Flipkart's fast-moving competitor prices with rule-based, margin-safe repricing." },
    { icon: Wand2,      t: "Flipkart-format AI",  d: "Highlights, key features and product specs in the exact structure Flipkart wants." },
    { icon: ShoppingCart, t: "Order + return sync", d: "Orders, cancellations and returns land in the unified inbox with SLA countdowns." },
    { icon: BarChart3,  t: "GST-friendly reports", d: "Cross-channel revenue with GST-ready exports for your accountant." },
  ],
  gotchas: [
    { t: "Shared catalog matching", d: "Suggests the best matching Flipkart catalog entry vs listing as new — with confidence score." },
    { t: "F-Assured badging", d: "Tracks fulfilment performance metrics that drive F-Assured eligibility." },
    { t: "SLA-driven orders", d: "Every Flipkart order shows dispatch SLA countdown so nothing slips." },
    { t: "Category-specific attributes", d: "Required attributes per Flipkart category are enforced up front." },
  ],
  onboarding: ["Connect Flipkart Seller", "Match or list", "Set Smart Fulfil", "Go live"],
  faq: [
    { q: "Does SellerBuz work with Flipkart Smart Fulfil?", a: "Yes. Smart Fulfil, seller-fulfilled and F-Assured inventory are all tracked separately." },
    { q: "Is GST invoicing handled?", a: "SellerBuz exports GST-ready sales reports; invoices are still generated by Flipkart or your billing tool." },
    { q: "Can I sell only on Flipkart to start?", a: "Absolutely — start with just Flipkart and add other channels later on any plan." },
    { q: "Does it support Myntra or 2GUD?", a: "Currently we focus on the core Flipkart Seller Hub." },
    { q: "How fast do orders sync?", a: "New Flipkart orders reach the unified inbox in under 30 seconds." },
  ],
  otherChannels: others("Flipkart"),
};
