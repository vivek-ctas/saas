import Terms from "@/screens/terms";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
    title: "Terms & Conditions - Ctasis Sellerbuz",
    description:
        "Review the Terms & Conditions governing your access and use of Ctasis Sellerbuz's cloud-based multi-marketplace management platform.",
    path: "/terms",
});

// ─── JSON-LD: Terms & Conditions Page Schema ────────────────────────────────
const termsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions - Ctasis Sellerbuz",
    url: "https://ctasis.com/terms",
    description:
        "Legal terms and conditions governing the usage of Ctasis Sellerbuz software, billing, database management, and integrations.",
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://ctasis.com" },
            { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://ctasis.com/terms" },
        ],
    },
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
            />
            <Terms />
        </>
    );
}
