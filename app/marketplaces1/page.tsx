import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Marketplaces from "@/screens/Marketplaces";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "Marketplace Integrations — Amazon, Walmart, eBay, Shopify & 50+ Channels",
  description:
    "Connect every channel in one click. Ctasis integrates with Amazon, Walmart, eBay, Shopify, Etsy, TikTok Shop, Lazada,fnac, and 50+ global Marketplaces. One platform, zero manual syncing.",
  path: "/marketplaces",
});

// ─── JSON-LD: ItemList of Marketplace groups ─────────────────────────────────
const marketplacesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ctasis Marketplace Integrations",
  url: "https://ctasis.com/marketplaces",
  description:
    "Ctasis supports 50+ global Marketplace integrations including Amazon FBA/FBM, Walmart, eBay, Shopify, Etsy, TikTok Shop, Lazada,fnac and more.",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Amazon (FBA + FBM)", url: "https://ctasis.com/marketplaces/amazon-integration" },
    { "@type": "ListItem", position: 2, name: "Walmart", url: "https://ctasis.com/marketplaces/walmart-integration" },
    { "@type": "ListItem", position: 3, name: "eBay", url: "https://ctasis.com/marketplaces/ebay-integration" },
    { "@type": "ListItem", position: 4, name: "Shopify", url: "https://ctasis.com/marketplaces/shopify-integration" },
    { "@type": "ListItem", position: 5, name: "Etsy", url: "https://ctasis.com/marketplaces/etsy-integration" },
    { "@type": "ListItem", position: 6, name: "TikTok Shop", url: "https://ctasis.com/marketplaces/tiktok-shop-integration" },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ctasis.com" },
    { "@type": "ListItem", position: 2, name: "Marketplace", item: "https://ctasis.com/marketplaces" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(marketplacesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Marketplaces />
    </>
  );
}
