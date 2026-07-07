import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { INTEGRATIONS } from "@/screens/integrations/integrations.data";
import IntegrationDetail from "@/screens/integrations/IntegrationDetail";
import { notFound } from "next/navigation";

type PageProps = { params: { slug: string } };

// ─── Static paths ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return INTEGRATIONS.map((i) => ({ slug: i.slug }));
}

// ─── Per-integration metadata ────────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const integration = INTEGRATIONS.find((i) => i.slug === params.slug);
  if (!integration) return {};

  return buildMetadata({
    title: `${integration.name} Integration — Sync ${integration.name} with Ctasis`,
    description: `${integration.description} Connect ${integration.name} to Ctasis and manage inventory, orders and repricing from one dashboard. ${integration.stats.map((s) => `${s.label}: ${s.value}`).join(" · ")}.`,
    path: `/marketplaces/${params.slug}`,
    type: "website",
  });
}

// ─── JSON-LD per integration ──────────────────────────────────────────────────
function buildIntegrationJsonLd(slug: string) {
  const integration = INTEGRATIONS.find((i) => i.slug === slug);
  if (!integration) return null;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Ctasis × ${integration.name}`,
    applicationCategory: "BusinessApplication",
    description: integration.description,
    url: `${SITE_URL}/marketplaces/${slug}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Included in all Ctasis plans",
    },
    featureList: integration.features.map((f) => f.title).join(", "),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Sellerbuz", item: `${SITE_URL}/marketplaces` },
        { "@type": "ListItem", position: 3, name: integration.name, item: `${SITE_URL}/marketplaces/${slug}` },
      ],
    },
  };
}

export default function Page({ params }: PageProps) {
  const integration = INTEGRATIONS.find((i) => i.slug === params.slug);
  if (!integration) notFound();

  const jsonLd = buildIntegrationJsonLd(params.slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <IntegrationDetail />
    </>
  );
}
