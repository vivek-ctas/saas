import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import Pricing from "@/screens/Pricing";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "Pricing — Starter $29 · Pro $79 · Enterprise Custom",
  description:
    "Simple, transparent pricing for every stage. Starter at $29/mo, Pro at $79/mo and Enterprise custom plans. All include a 14-day free trial. No credit card required. Cancel anytime.",
  path: "/pricing",
});

// ─── JSON-LD: Offer / PriceSpecification ────────────────────────────────────
const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Ctasis Multichannel Seller Platform",
  url: `${SITE_URL}/pricing`,
  description:
    "AI-powered multichannel seller tooling — inventory sync, order management, repricing and analytics.",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "29",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "29", priceCurrency: "USD", unitCode: "MON" },
      description: "For new sellers getting started. 3 Marketplace connections, 5,000 listings, basic sync.",
      url: `${SITE_URL}/pricing`,
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "79",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "79", priceCurrency: "USD", unitCode: "MON" },
      description: "For growing businesses. 10 connections, 25,000 listings, real-time sync, AI repricer, advanced analytics.",
      url: `${SITE_URL}/pricing`,
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      description: "Custom pricing for large operations — unlimited connections, SLA guarantee, dedicated account manager.",
      url: `${SITE_URL}/pricing`,
    },
  ],
};

// ─── JSON-LD: FAQ ────────────────────────────────────────────────────────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a free trial?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — every plan includes a 14-day free trial with no credit card required." },
    },
    {
      "@type": "Question",
      name: "Can I change plans anytime?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Upgrade or downgrade at any time from your billing settings." },
    },
    {
      "@type": "Question",
      name: "What Marketplace are supported?",
      acceptedAnswer: { "@type": "Answer", text: "Amazon, eBay, Walmart, Shopify, Etsy, TikTok Shop and 50+ more — and we'll build any missing integration." },
    },
    {
      "@type": "Question",
      name: "How is my data secured?",
      acceptedAnswer: { "@type": "Answer", text: "Ctasis is SOC 2 Type II certified, with end-to-end encryption, regular pen-tests and full GDPR compliance." },
    },
    {
      "@type": "Question",
      name: "Do you offer migration help?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — our white-glove onboarding team migrates listings, orders and history for free on Pro & Enterprise plans." },
    },
    {
      "@type": "Question",
      name: "What happens if I exceed my plan limits?",
      acceptedAnswer: { "@type": "Answer", text: "We notify you well before you hit a cap — no surprise charges, ever." },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE_URL}/pricing` },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Pricing />
    </>
  );
}
