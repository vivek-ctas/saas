import Guide from "@/screens/Guide";
import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "Guide — Multichannel Selling, Repricing & Marketplace Strategy",
  description:
    "Insights, playbooks and deep-dives for Amazon, Walmart and multichannel sellers. Topics include AI repricing, inventory management, analytics, FBA vs FBM, and Marketplace strategy.",
  path: "/guide",
});

// ─── JSON-LD: guide ───────────────────────────────────────────────────────────
const guideJsonLd = {
  "@context": "https://schema.org",
  "@type": "Guide",
  name: "Ctasis Guide",
  url: `${SITE_URL}/guide`,
  description:
    "Insights for multichannel sellers on repricing, inventory management, Amazon, Walmart and Marketplace strategy.",
  publisher: {
    "@type": "Organization",
    name: "Ctasis",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guide", item: `${SITE_URL}/guide` },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd) }}
      />
      <Guide />
    </>
  );
}
