import Privacy from "@/screens/Privacy";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

// ─── Page metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
    title: "Privacy Policy — Ctasis Sellerbuz",
    description:
        "Read the Privacy Policy of Ctasis Sellerbuz to understand how we encrypt, manage, protect, and use your inventory and account information.",
    path: "/privacy",
});

// ─── JSON-LD: Privacy Policy Page Schema ─────────────────────────────────────
const privacyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy — Ctasis Sellerbuz",
    url: "https://ctasis.com/privacy",
    description:
        "Privacy terms and encryption safeguards governing customer catalog data and store account metrics in Ctasis Sellerbuz.",
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://ctasis.com" },
            { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://ctasis.com/privacy" },
        ],
    },
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
            />
            <Privacy />
        </>
    );
}
