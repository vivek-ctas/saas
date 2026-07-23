import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { INTEGRATIONS } from "@/screens/integrations/integrations.data";

// guide slugs - keep in sync with guide/[slug]/page.tsx
const guideSlugs = [
  // "ai-amazon-business-repricer",
  // "amazon-ai-algorithmic-repricer",
  // "custom-repricing-strategies",
  "amazon-seller-analytics-that-matter",
  // "walmart-repricer-playbook",
  "ai-listing-generator-from-raw-data",
  "amazon-new-selling-api",
  "fba-vs-fbm",
  "amazon-fulfilment-strategies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/marketplaces`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/infrastructure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/guide`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const integrationPages: MetadataRoute.Sitemap = INTEGRATIONS.map((i) => ({
    url: `${SITE_URL}/marketplaces/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${SITE_URL}/guide/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticPages, ...integrationPages, ...guidePages];
}
