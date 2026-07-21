import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Services from "@/screens/Services";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "Services - Centralized Inventory, Order Management, AI Repricing & More",
  description:
    "Explore 10 core seller services in one platform: centralized inventory, unified order management, real-time sync, AI catalog generation, smart repricing, analytics, and more.",
  path: "/services",
});

// ─── JSON-LD: ItemList of services ──────────────────────────────────────────
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ctasis Seller Services",
  url: "https://ctasis.com/services",
  description:
    "10 services built for multichannel sellers: centralized inventory, order management, real-time sync, AI catalog, variants & matching, repricer, analytics, asset library, role access, and bulk work.",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Centralized Inventory & Pricing", description: "Manage stock levels and pricing from one unified dashboard." },
    { "@type": "ListItem", position: 2, name: "Order Management", description: "One inbox for every marketplace order." },
    { "@type": "ListItem", position: 3, name: "Real-Time Sync", description: "Stock levels propagate across all channels in real time." },
    { "@type": "ListItem", position: 4, name: "AI Catalog", description: "Generate optimized titles, descriptions, and listing details." },
    { "@type": "ListItem", position: 5, name: "Variants & Matching", description: "Manage variants and smart catalog matching." },
    { "@type": "ListItem", position: 6, name: "Growth (Repricer)", description: "Automatically adjust prices based on rules and competition." },
    { "@type": "ListItem", position: 7, name: "Analytics & Performance", description: "Revenue and performance trends in one clean view." },
    { "@type": "ListItem", position: 8, name: "A+ Content Asset Library", description: "Organized, reusable assets for premium product listings." },
    { "@type": "ListItem", position: 9, name: "Role-Based Access Control", description: "Granular permissions for owners, managers, and staff." },
    { "@type": "ListItem", position: 10, name: "Bulk Operations", description: "Update inventory, pricing, and listings via file upload." },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ctasis.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ctasis.com/services" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Services />
    </>
  );
}
