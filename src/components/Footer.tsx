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
      { name: "Inventory Sync", href: "/platform/inventory" },
      { name: "Order Hub", href: "/platform/orders" },
      { name: "AI Catalog", href: "/platform/catalog-ai" },
      { name: "Repricer", href: "/platform/repricer" },
    ],
  },
  {
    title: "Marketplaces",
    links: [
      { name: "Amazon", href: "/marketplaces/amazon" },
      { name: "Walmart", href: "/marketplaces/walmart" },
      { name: "eBay", href: "/marketplaces/ebay" },
      { name: "Etsy", href: "/marketplaces/etsy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Service", href: "/services" },
      { name: "Guides", href: "/guide" },
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Contact Us", href: "/contact" },
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

const contactDetails = [
  {
    icon: Mail,
    value: "info@ctasis.com",
    href: "mailto:info@ctasis.com",
  },
  {
    icon: Phone,
    value: "+91 7948993409",
    href: "tel:+917948993409",
  },
  {
    icon: MapPin,
    value:
      "A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, near BSNL Office, Gota, Ahmedabad, Gujarat 382470",
    href: undefined,
  },
];

const companyInfo = {
  name: "Sellerbuz",
  logoSrc: "/sellerBuz_footer.png",
  logoAlt: "Sellerbuz Logo",
  description:
    "The complete multichannel selling platform trusted by sellers worldwide. Manage inventory, process orders, and grow your business faster.",
  siblingText: "A product by",
  siblingLinkLabel: "CTAS Info Services LLP",
  siblingLinkHref: "https://ctasis.com/",
};

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
    description: "Serving sellers in 150+ countries with multi-currency and regional support.",
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

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/ctas-info-services/",
    label: "LinkedIn",
  },
  { icon: Youtube, href: "https://www.youtube.com/@ctasinfoservicesllp7030", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/people/Ctas-Info-Service/61566714244013/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/ctasinfoservice/", label: "Instagram" },

];

const bottomBar = {
  copyright: "© 2026 Ctasis Sellerbuz. All rights reserved.",
  tagline: "Built for modern sellers. Designed for scale.",
  companyLabel: "Operated by",
  companyName: "Ctasis Info Services LLP",
  companyHref: "https://ctasis.com",
};

/* ------------------------------------------------------------------ */
/*  Reusable sub-components                                           */
/* ------------------------------------------------------------------ */

const FooterLinkColumn = ({ title, links }: FooterLinkGroup) => (
  <div className="space-y-4">
    <div>
      <h4 className="font-semibold text-white text-base">{title}</h4>
      <span className="mt-2 block h-0.5 w-6 rounded-full bg-gradient-to-r from-[#6D5BF2] to-[#8B7CF6]" />
    </div>
    <ul className="space-y-3 text-sm">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="group flex items-center text-slate-400 hover:text-[#8B7CF6] transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#8B7CF6]/70 transition-transform group-hover:translate-x-0.5" />
            {link.name}
          </Link>
        </li>
      ))}
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
      <Icon className="w-4 h-4 mr-3 mt-0.5 text-[#8B7CF6] flex-shrink-0" />
      <span>{value}</span>
    </>
  );

  return href ? (
    <a href={href} className="flex items-start text-slate-300 text-sm hover:text-[#8B7CF6] transition-colors">
      {content}
    </a>
  ) : (
    <div className="flex items-start text-slate-300 text-sm">{content}</div>
  );
};

const HighlightCard = ({ icon: Icon, title, description }: HighlightFeature) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-[#8B7CF6]/10 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-[#8B7CF6]" />
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
    className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#8B7CF6] hover:border-[#8B7CF6]/50 transition-colors"
  >
    <Icon className="w-4 h-4" />
  </a>
);

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

const Footer = () => {
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
            <Link href="/" className="group flex items-center gap-2.5 w-fit">
              <img
                src={companyInfo.logoSrc}
                alt={companyInfo.logoAlt}
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
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
                  className="text-[#8B7CF6] hover:text-[#a596ff] transition-colors font-medium"
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