import About from "@/screens/About";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  title: "About Us - Our Story & Mission",
  description:
    "Founded in 2019 in Ahmedabad, Ctasis has grown to serve 50,000+ sellers across 150 countries. Learn about our mission to level the playing field for multichannel sellers worldwide.",
  path: "/about",
});

// ─── JSON-LD: AboutPage + Company milestones ─────────────────────────────────
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Ctasis",
  url: "https://ctasis.com/about",
  description:
    "Ctasis was founded in 2019 in Ahmedabad to end spreadsheet hell for multichannel sellers. Today we power $300M+ in GMV for 50,000+ sellers in 150+ countries.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ctasis.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://ctasis.com/about" },
    ],
  },
};


export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <About />
    </>
  );
}