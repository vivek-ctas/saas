import Blog from "@/screens/Blog";
import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "Blog — Multichannel Selling, Repricing & Sellerbuz Strategy",
  description:
    "Insights, playbooks and deep-dives for Amazon, Walmart and multichannel sellers. Topics include AI repricing, inventory management, analytics, FBA vs FBM, and Sellerbuz strategy.",
  path: "/blog",
});

// ─── JSON-LD: Blog ───────────────────────────────────────────────────────────
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Ctasis Blog",
  url: `${SITE_URL}/blog`,
  description:
    "Insights for multichannel sellers on repricing, inventory management, Amazon, Walmart and Sellerbuz strategy.",
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
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Blog />
    </>
  );
}
