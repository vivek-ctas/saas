import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import Infrastructure from "@/screens/Infrastructure";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "Infrastructure - AWS Multi-Region, SOC 2 Type II, 99.9% Uptime",
  description:
    "Ctasis runs on AWS multi-region active-active clusters, isolated per-tenant PostgreSQL & MongoDB, Kafka event streaming, and Kubernetes auto-scaling. SOC 2 Type II, ISO 27001 and GDPR certified.",
  path: "/infrastructure",
});

// ─── JSON-LD: TechArticle / WebPage ─────────────────────────────────────────
const infraJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ctasis Infrastructure",
  url: `${SITE_URL}/infrastructure`,
  description:
    "Enterprise-grade infrastructure for multichannel sellers: AWS multi-region, isolated Docker pods, Kubernetes, per-tenant PostgreSQL + MongoDB, Kafka streaming, SOC 2 Type II, ISO 27001, GDPR.",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "p"],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Infrastructure", item: `${SITE_URL}/infrastructure` },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(infraJsonLd) }}
      />
      <Infrastructure />
    </>
  );
}
