import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Marketplaces from "@/screens/Marketplaces";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "Marketplace Integrations - Amazon, Shopify & More Channels",
  description:
    "Connect every channel in one click. Ctasis integrates with Amazon, Shopify, and other global Marketplaces. One platform, zero manual syncing.",
  path: "/marketplaces",
});

// ─── JSON-LD: ItemList of Marketplace groups ─────────────────────────────────
const marketplacesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ctasis Marketplace Integrations",
  url: "https://ctasis.com/marketplaces",
  description:
    "Ctasis supports multiple global Marketplace integrations including Amazon FBA/FBM, Shopify and more.",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Amazon (FBA + FBM)", url: "https://ctasis.com/marketplaces/amazon-integration" },
    { "@type": "ListItem", position: 2, name: "Shopify", url: "https://ctasis.com/marketplaces/shopify-integration" },
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
