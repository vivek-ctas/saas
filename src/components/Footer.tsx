"use client";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import footerBackground from "@/assets/footer-background.webp";

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "Inventory sync", href: "/platform/inventory" },
      { name: "Order hub", href: "/platform/orders" },
      { name: "AI catalog", href: "/platform/catalog-ai" },
      { name: "Repricer", href: "/platform/repricer" },
      { name: "Analytics", href: "/platform/analytics" },
    ],
    marketplaces: [
      { name: "Amazon", href: "/marketplaces/amazon" },
      { name: "Walmart", href: "/marketplaces/walmart" },
      { name: "eBay", href: "/marketplaces/ebay" },
      { name: "Etsy", href: "/marketplaces/etsy" },
      { name: "Flipkart", href: "/marketplaces/flipkart" },
    ],
    company: [
      { name: "Services", href: "/services" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/Ctas-Info-Service/61566714244013/", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ctas-info-services-llp", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ctasinfoservice/", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={footerBackground}
          alt="Footer background"
          fill
          className="object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-slate-700">
          <div className="px-[50px] lg:px-[70px] py-8">
            <div className="flex items-center justify-between">
              <div className="max-w-xl">
                <h3 className="text-xl lg:text-[28px] font-bold mb-1">Let's Build Your eCommerce Success Together</h3>
                <p className="text-slate-300 text-sm lg:text-base">
                  Whether you're starting out or scaling your Marketplace business, CTAS Sellerbuz provides the tools and expertise to help you grow faster.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="px-[50px] lg:px-[70px] py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="col-span-2 space-y-4">
              <Link
                href="/"
                className="group flex items-center gap-2.5"
              >
                <img
                  src="/ctasis-logo_white.svg"
                  alt="Sellerbuz Logo"
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <span className="text-[28px] lg:text-[32px] font-black tracking-[-0.05em] leading-none">
                  <span className="text-white">Seller</span>
                  <span className="bg-gradient-to-r from-[#1E9FE6] via-[#27B3F2] to-[#19C6D2] bg-clip-text text-transparent">
                    buz
                  </span>
                </span>
              </Link>
              <p className="text-slate-300 text-sm lg:text-base max-w-sm leading-relaxed">
                The complete multichannel selling platform trusted by 50,000+ sellers worldwide.
                Manage inventory, process orders, and grow your business faster.
              </p>
              <p className="text-xs text-slate-500 max-w-sm">
                A Ctasis product · sibling of{" "}
                <a href="https://ctasrepricerweb.vercel.app/" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300">
                  Ctas Repricer
                </a>.
              </p>
              <div className="space-y-2.5 text-sm lg:text-base">
                <div className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0" />
                  <span>info@ctasis.com</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0" />
                  <span>+91 7948993409</span>
                </div>
                <div className="flex items-start text-slate-300">
                  <MapPin className="w-4 h-4 mr-3 mt-1 text-emerald-400 flex-shrink-0" />
                  <span>A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, near BSNL Office, Gota, Ahmedabad, Gujarat 382470</span>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-base lg:text-lg">Platform</h4>
              <ul className="space-y-3 text-sm lg:text-base">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-300 hover:text-emerald-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Marketplaces Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-base lg:text-lg">Marketplaces</h4>
              <ul className="space-y-3 text-sm lg:text-base">
                {footerLinks.marketplaces.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-300 hover:text-emerald-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-base lg:text-lg">Company</h4>
              <ul className="space-y-3 text-sm lg:text-base">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-300 hover:text-emerald-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700">
          <div className="px-[50px] lg:px-[70px] py-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm lg:text-base mb-4 md:mb-0">
                © 2026 Ctasis Sellerbuz. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    target="_blank"
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;