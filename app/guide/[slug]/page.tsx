import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import GuidePost from "@/screens/GuidePost";
import { notFound } from "next/navigation";

type PageProps = { params: { slug: string } };

// ─── Shared post data (mirrors GuidePost.tsx) ─────────────────────────────────
// NOTE: Ideally extract this into a shared /lib/guide-data.ts — avoid duplication.
const posts = [
  {
    slug: "ai-amazon-business-repricer",
    title: "Inside our AI Amazon Business Repricer — and why margin floors matter",
    category: "Repricing",
    date: "Apr 22, 2026",
    author: "Aman Shah",
    excerpt: "How we built a repricer that wins the Buy Box without dragging your profit through the floor.",
  },
  {
    slug: "amazon-ai-algorithmic-repricer",
    title: "Algorithmic vs rule-based repricing: which one actually grows your business?",
    category: "Strategy",
    date: "Apr 18, 2026",
    author: "Priya Mehta",
    excerpt: "Most sellers start with rules and outgrow them in a quarter. Here's the honest breakdown.",
  },
  {
    slug: "custom-repricing-strategies",
    title: "Custom repricing strategies for hero SKUs, clearance and MAP-protected brands",
    category: "Playbooks",
    date: "Apr 12, 2026",
    author: "Daniel Park",
    excerpt: "One repricer config will never fit a 500-SKU catalog. Three real-world strategy templates.",
  },
  {
    slug: "amazon-seller-analytics-that-matter",
    title: "The five Amazon seller analytics that actually move revenue",
    category: "Analytics",
    date: "Apr 5, 2026",
    author: "Maya Chen",
    excerpt: "Vanity metrics are easy. Profit-moving metrics take a little more work. Here are the five.",
  },
  {
    slug: "walmart-repricer-playbook",
    title: "The Walmart repricer playbook: what's different from Amazon, and what isn't",
    category: "Walmart",
    date: "Mar 28, 2026",
    author: "Jordan Reyes",
    excerpt: "Walmart's Buy Box plays by its own rules. Here's how to think about it.",
  },
  {
    slug: "ai-listing-generator-from-raw-data",
    title: "From a messy CSV to a fnac listing in four minutes — with AI",
    category: "AI",
    date: "Mar 20, 2026",
    author: "Aman Shah",
    excerpt: "How our AI listing generator turns raw product data into channel-perfect listings.",
  },
  {
    slug: "amazon-new-selling-api",
    title: "Amazon's new Selling Partner API: what changed, and what it means for your stack",
    category: "Integrations",
    date: "May 2, 2026",
    author: "Aman Shah",
    excerpt: "Tighter rate limits, granular roles, and a much friendlier auth flow — here's what we rebuilt for SP-API v2.",
  },
  {
    slug: "fba-vs-fbm",
    title: "FBA vs FBM in 2026: the honest cost, control and growth trade-off",
    category: "Operations",
    date: "Apr 28, 2026",
    author: "Jordan Reyes",
    excerpt: "Fulfilment By Amazon vs Merchant. Not a religious war — a maths problem with three variables.",
  },
  {
    slug: "amazon-fulfilment-strategies",
    title: "Amazon fulfilment strategies: blending FBA, FBM, SFP and 3PL without losing your margin",
    category: "Operations",
    date: "May 5, 2026",
    author: "Daniel Park",
    excerpt: "Most sellers default to one fulfilment model and pay for it later. Here's how the top operators mix FBA, FBM, SFP and 3PL by SKU cohort.",
  },
];

// ─── Static paths ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// ─── Per-post metadata ───────────────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const param = await params;
  const post = posts.find((p) => p.slug === param.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/guide/${param.slug}`,
    type: "article",
  });
}

// ─── Per-post JSON-LD ────────────────────────────────────────────────────────
function buildArticleJsonLd(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;

  return {
    "@context": "https://schema.org",
    "@type": "GuidePosting",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/guide/${slug}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Ctasis",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    articleSection: post.category,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Guide", item: `${SITE_URL}/guide` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/guide/${slug}` },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const param = await params
  const post = posts.find((p) => p.slug === param.slug);
  if (!post) notFound();

  const jsonLd = buildArticleJsonLd(param.slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <GuidePost />
    </>
  );
}
