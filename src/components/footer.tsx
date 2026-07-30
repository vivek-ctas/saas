"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  ShieldCheck,
  Globe2,
  Headphones,
  Rocket,
  LucideIcon,
  ChevronRight,
  Facebook,
  Instagram,
} from "lucide-react";
import footerBackground from "@/assets/footer-background.webp";
import { API_BASE_URL } from "@/lib/api";
import { useCompanySettings } from "@/hooks/use-company-contact";

/* ------------------------------------------------------------------ */
/*  Static placeholder data                                           */
/*  NOTE: every section below is structured to be swapped 1:1 for a   */
/*  backend response later (e.g. `const data = await getFooterData()`)*/
/* ------------------------------------------------------------------ */

type FooterLink = {
  name: string;
  href: string;
};

type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Platform",
    links: [
      { name: "Amazon", href: "/marketplaces/amazon" },
      { name: "Inventory Sync", href: "/platform/inventory" },
      { name: "AI Catalog", href: "/platform/catalog-ai" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Service", href: "/services" },
      { name: "Guides", href: "/guide" },
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact Us", href: "/contact" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "CTAS",
    links: [
      { name: "Official Website", href: "https://www.ctasis.com/" },
      { name: "About CTAS", href: "https://www.ctasis.com/about-us" },
      { name: "Our Services", href: "https://www.ctasis.com/services" },
      // { name: "Our Products", href: "https://ctasis.com/products" },
      { name: "Careers", href: "https://www.ctasis.com/careers" },
      { name: "Contact Us", href: "https://www.ctasis.com/contact-us" },
    ],
  },
];
type HighlightFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const highlightFeatures: HighlightFeature[] = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "SOC 2 infrastructure with encrypted data and 99.9% SLA uptime guarantee.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Multi-currency and regional marketplace support across Amazon and Shopify.",
  },
  {
    icon: Headphones,
    title: "Need Help?",
    description: "Our support team is available 24/7 to help you succeed. Contact us anytime.",
  },
  {
    icon: Rocket,
    title: "Built for Growth",
    description: "Scalable infrastructure and powerful tools to grow your eCommerce business.",
  },
];

/* ------------------------------------------------------------------ */
/*  Reusable sub-components                                           */
/* ------------------------------------------------------------------ */

const FooterLinkColumn = ({ title, links }: FooterLinkGroup) => (
  <div className="space-y-4">
    <div>
      <h4 className="font-semibold text-white text-base">{title}</h4>
      <span className="mt-2 block h-0.5 w-6 rounded-full bg-gradient-to-r from-[#3C9AC4] to-[#6BC1E0]" />
    </div>
    <ul className="space-y-3 text-sm">
      {links.map((link) => {
        const isExternal = link.href.startsWith("http://") || link.href.startsWith("https://");
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              {...(isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="group flex items-center text-slate-400 hover:text-[#3C9AC4] transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#3C9AC4] transition-transform group-hover:translate-x-0.5" />
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
);

const ContactRow = ({
  icon: Icon,
  value,
  href,
}: {
  icon: LucideIcon;
  value: string;
  href?: string;
}) => {
  const content = (
    <>
      <Icon className="w-4 h-4 mr-3 mt-0.5 text-[#3C9AC4] hover:text-white flex-shrink-0" />
      <span>{value}</span>
    </>
  );

  return href ? (
    <a href={href} className="flex items-start text-slate-300 text-sm hover:text-[#3C9AC4] transition-colors">
      {content}
    </a>
  ) : (
    <div className="flex items-start text-slate-300 text-sm">{content}</div>
  );
};

const HighlightCard = ({ icon: Icon, title, description }: HighlightFeature) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-[#3C9AC4]/10 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-[#3C9AC4] hover:text-white" />
    </div>
    <div>
      <h5 className="font-semibold text-white text-sm mb-1">{title}</h5>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const SocialIconLink = ({
  icon: Icon,
  href,
  label,
}: {
  icon: LucideIcon;
  href: string;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#3C9AC4] hover:border-[#3C9AC4]/50 transition-colors"
  >
    <Icon className="w-4 h-4" />
  </a>
);

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

const Footer = () => {
  const { settingsData } = useCompanySettings();

  const primaryLogo: string = "/ctasis-logo_white.svg";
  const apiLogo = settingsData?.company?.logo ? `${API_BASE_URL}/${settingsData.company.logo}` : "";
  const logoSrc = primaryLogo || apiLogo || "";

  const companyInfo = {
    name: settingsData?.company?.name || "SellerBuz",
    logoSrc: logoSrc,
    logoAlt: `${settingsData?.company?.name || "SellerBuz"} Logo`,
    description:
      settingsData?.footer?.about ||
      settingsData?.company?.about ||
      "The complete multichannel selling platform trusted by sellers worldwide. Manage inventory, process orders, and grow your business faster.",
    siblingText: "A product by",
    siblingLinkLabel: "CTAS Info Services LLP",
    siblingLinkHref: "https://ctasis.com/",
  };

  const contactDetails = [];
  if (settingsData?.footer?.show_contact !== false) {
    contactDetails.push({
      icon: Mail,
      value: settingsData?.contact?.email || "info@ctasis.com",
      href: `mailto:${settingsData?.contact?.email || "info@ctasis.com"}`,
    });
    contactDetails.push({
      icon: Phone,
      value: settingsData?.contact?.phone || "+91 7948993409",
      href: `tel:${(settingsData?.contact?.phone || "+91 7948993409").replace(/\s+/g, "")}`,
    });
  }
  if (settingsData?.footer?.show_address !== false) {
    contactDetails.push({
      icon: MapPin,
      value:
        settingsData?.contact?.address ||
        "A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, near BSNL Office, Gota, Ahmedabad, Gujarat 382470",
      href:
        settingsData?.contact?.google_map_url ||
        "https://maps.google.com",
    });
  }

  const socialLinks = [];
  if (settingsData?.footer?.show_social !== false) {
    const facebook = settingsData?.social?.facebook || "https://www.facebook.com/people/Ctas-Info-Service/61566714244013/";
    const instagram = settingsData?.social?.instagram || "https://www.instagram.com/ctasinfoservice/";
    const linkedin = settingsData?.social?.linkedin || "https://www.linkedin.com/company/ctas-info-services/";
    const youtube = settingsData?.social?.youtube || "https://www.youtube.com/@ctasinfoservicesllp7030";

    if (linkedin) socialLinks.push({ icon: Linkedin, href: linkedin, label: "LinkedIn" });
    if (youtube) socialLinks.push({ icon: Youtube, href: youtube, label: "YouTube" });
    if (facebook) socialLinks.push({ icon: Facebook, href: facebook, label: "Facebook" });
    if (instagram) socialLinks.push({ icon: Instagram, href: instagram, label: "Instagram" });
  }

  const bottomBar = {
    copyright: settingsData?.footer?.copyright_text || "© 2026 SellerBuz. All rights reserved.",
    tagline: settingsData?.company?.tagline || "AI Ecommerce Automation & Marketplace Solutions",
    companyLabel: "Operated by",
    companyName: "CTAS Info Services LLP",
    companyHref: "https://ctasis.com",
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background image + overlay, unchanged from existing theme */}
      <div className="absolute inset-0">
        <Image
          src={footerBackground}
          alt="Footer background"
          fill
          className="object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="relative z-10 px-6 sm:px-[50px] lg:px-[70px] py-14">
        {/* Top: brand column + link columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-10">
          {/* Brand / contact column */}
          <div className="col-span-2 md:col-span-2 space-y-5 md:pr-6 md:border-r md:border-slate-800">

            {/* <Link href="/" className="group flex items-center gap-2.5 w-fit">
              <img
                src={companyInfo.logoSrc}
                alt={companyInfo.logoAlt}
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link> */}
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <img
                src={companyInfo.logoSrc}
                alt={companyInfo.logoAlt}
                className="h-14 w-auto object-contain"
              />
              <span className="text-[1.8rem] font-bold tracking-tight font-outfit bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">
                {companyInfo.name}
              </span>
            </Link>


            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>

            <div className="space-y-3 pt-1">
              {contactDetails.map((detail) => (
                <ContactRow key={detail.value} {...detail} />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinkGroups.map((group) => (
            <FooterLinkColumn key={group.title} {...group} />
          ))}
        </div>

        {/* Highlight strip */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 px-6 py-8 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlightFeatures.map((feature) => (
              <HighlightCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src="/ctasis-logo_white.svg"
              alt="CTAS Logo"
              className="h-10 w-auto object-contain hidden sm:block"
            />

            <div className="text-sm">
              <p className="text-slate-300">{bottomBar.copyright}</p>

              <p className="text-slate-500">
                {bottomBar.tagline}
                <span className="mx-2 text-slate-700">•</span>
                {bottomBar.companyLabel}{" "}
                <a
                  href={bottomBar.companyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3C9AC4] hover:text-white transition-colors font-medium"
                >
                  {bottomBar.companyName}
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm mr-1">Follow us</span>
            {socialLinks.map((social) => (
              <SocialIconLink key={social.label} {...social} />
            ))}
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;