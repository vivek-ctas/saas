import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import Contact from "@/screens/Contact";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "Contact Us - Sales, Support & Partnerships",
  description:
    "Reach Ctasis via email at info@ctasis.com, live chat (24/7 for Pro & Enterprise), or phone. We reply within 4 hours. Real humans across 5 global hubs - no bots.",
  path: "/contact",
});

// ─── JSON-LD: ContactPage ────────────────────────────────────────────────────
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Ctasis",
  url: `${SITE_URL}/contact`,
  description: "Contact Ctasis for sales, support or partnerships. We reply within 4 hours.",
  mainEntity: {
    "@type": "Organization",
    name: "Ctasis",
    url: SITE_URL,
    email: "info@ctasis.com",
    telephone: "+91 7948993409",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@ctasis.com",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@ctasis.com",
        availableLanguage: "English",
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Contact />
    </>
  );
}
