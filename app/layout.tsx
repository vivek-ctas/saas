import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from "@/lib/seo";

// ─── Font - loaded via next/font to eliminate render-blocking requests ────────
// next/font self-hosts the font, inlines the @font-face, and uses font-display:swap
// This removes the 17.2 KiB render-blocking CSS chunk Lighthouse flagged.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  // Only load weights actually used in the design system
  weight: ["400", "500", "600", "700", "800"],
});

// ─── Global / fallback metadata ────────────────────────────────────────────
export const metadata: Metadata = {
  title: `${SITE_NAME} - AI Marketplace OS for Multichannel Sellers`,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),

  // Canonical + alternates
  alternates: { canonical: SITE_URL },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - AI Marketplace OS for Multichannel Sellers`,
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },

  // Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  verification: {
    // google: "REPLACE_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

// ─── JSON-LD: Organization ──────────────────────────────────────────────────
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: ["https://www.linkedin.com/in/ctas-info-services-llp"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7948993409",
    contactType: "customer support",
    availableLanguage: "English",
  },
};

// ─── JSON-LD: SoftwareApplication ──────────────────────────────────────────
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "29",
    highPrice: "79",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2400",
    bestRating: "5",
  },
};

// ─── Layout ─────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
