import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/seo";
import Home from "@/screens/Home";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "Ctasis Marketplace - Multichannel Seller Management Platform",
  description:
    "Manage all your Marketplace accounts from one dashboard. Sync inventory, route orders, and analyze performance across Amazon, eBay, Walmart, Shopify and more.",
  path: "/",
});

// ─── JSON-LD: WebSite + SearchAction ────────────────────────────────────────
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ctasis",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/guide?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ─── JSON-LD: FAQPage (Buy Box / repricing questions visible on homepage) ────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Ctasis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ctasis is an AI-powered Marketplace OS that helps multichannel sellers sync inventory, manage orders, and automate repricing across Amazon, Walmart, eBay, Shopify and 50+ channels from one dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "How many Marketplace does Ctasis support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ctasis supports 50+ channels including Amazon (all regions), Walmart, eBay, Shopify, Etsy, TikTok Shop, and many more global and regional Marketplaces.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose the plan that fits your business and contact our team to get started. We'll help you with setup and onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "How does Ctasis prevent overselling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ctasis syncs your inventory in real-time across all connected channels. When a sale happens on any platform, stock levels are updated everywhere within seconds.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Home />
    </>
  );
}
