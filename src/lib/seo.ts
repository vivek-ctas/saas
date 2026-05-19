import type { Metadata } from "next";

// ─── Site-wide constants ────────────────────────────────────────────────────
export const SITE_NAME = "Ctasis";
export const SITE_URL = "https://ctasis.com";
export const SITE_DESCRIPTION =
  "Ctasis is the AI-powered Marketplace OS trusted by 50,000+ multichannel sellers. Sync inventory, manage orders and automate repricing across Amazon, Walmart, eBay, Shopify and 50+ channels.";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`; 

// ─── Shared Twitter handle ──────────────────────────────────────────────────
const TWITTER_HANDLE = "@ctasis_hq"; 

// ─── Helper: build a canonical URL ─────────────────────────────────────────
export function canonicalUrl(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

// ─── Helper: build full metadata for any page ──────────────────────────────
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}): Metadata {
  const url = canonicalUrl(path);
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      site: TWITTER_HANDLE,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
