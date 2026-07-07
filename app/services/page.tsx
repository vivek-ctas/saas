import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Services from "@/screens/Services";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "Services — Inventory Sync, Order Management, AI Repricing & More",
  description:
    "Explore 12 seller services in one platform: real-time inventory sync, multichannel order management, AI-powered repricing, demand forecasting, tax & compliance, warehouse management and more.",
  path: "/services",
});

// ─── JSON-LD: ItemList of services ──────────────────────────────────────────
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ctasis Seller Services",
  url: "https://ctasis.com/services",
  description:
    "12 services built for multichannel sellers: inventory sync, order management, repricing, analytics, logistics, tax, warehouse management and more.",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inventory Sync", description: "Real-time stock levels across every channel." },
    { "@type": "ListItem", position: 2, name: "Order Management", description: "One inbox for orders from all Sellerbuz." },
    { "@type": "ListItem", position: 3, name: "Analytics & Reporting", description: "Dashboards that surface profit, not noise." },
    { "@type": "ListItem", position: 4, name: "Performance Optimization", description: "AI-driven repricing and listing tweaks." },
    { "@type": "ListItem", position: 5, name: "Logistics & Fulfillment", description: "Multi-carrier shipping with smart routing." },
    { "@type": "ListItem", position: 6, name: "Tax & Compliance", description: "Sales tax, VAT and GST — handled." },
    { "@type": "ListItem", position: 7, name: "Warehouse Management", description: "Multi-location inventory with barcode scanning." },
    { "@type": "ListItem", position: 8, name: "Cross-Platform Integration", description: "ERP, CRM and accounting — connected." },
    { "@type": "ListItem", position: 9, name: "Product Information Management", description: "One catalog, infinite channels." },
    { "@type": "ListItem", position: 10, name: "AI-Powered Insights", description: "Forecast demand 90 days out." },
    { "@type": "ListItem", position: 11, name: "Team Collaboration", description: "Role-based access and audit trails." },
    { "@type": "ListItem", position: 12, name: "Security & Compliance", description: "SOC 2 Type II with 99.9% uptime SLA." },
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
