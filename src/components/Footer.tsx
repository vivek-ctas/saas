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
    product: [
      { name: "Services", href: "/services" },
      { name: "Sellerbuz", href: "/marketplaces" },
      { name: "Infrastructure", href: "/infrastructure" },
      { name: "Pricing", href: "/pricing" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/contact" },
      { name: "Press", href: "/contact" },
      { name: "Partners", href: "/contact" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Help Center", href: "/contact" },
      { name: "Guides", href: "/contact" },
      { name: "Webinars", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/contact" },
      { name: "Terms of Service", href: "/contact" },
      { name: "Cookie Policy", href: "/contact" },
      { name: "GDPR", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/Ctas-Info-Service/61566714244013/", label: "Facebook" },
    // { icon: Twitter, href: "#", label: "Twitter" },
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Let's Build Your eCommerce Success Together</h3>
                <p className="text-slate-300">
                  Whether you're starting out or scaling your Sellerbuz business, CTAS Sellerbuz provides the tools and expertise to help you grow faster.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-stripe">
                  <span className="text-white font-bold">C</span>
                </div>
                <span className="text-2xl font-bold text-white">Ctasis <span className="text-pink-400">Sellerbuz</span></span>
              </Link>
              <p className="text-slate-300 mb-6 max-w-sm">
                The complete multichannel selling platform trusted by 50,000+ sellers worldwide.
                Manage inventory, process orders, and grow your business faster.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0" />
                  <span>info@ctasis.com</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0" />
                  <span>+91 7948993409</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <MapPin className="w-4 h-4 mr-3 mt-1 text-emerald-400 flex-shrink-0" />
                  <span>A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, near BSNL Office, Gota, Ahmedabad, Gujarat 382470</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-emerald-400 transition-colors"
                    >
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2024 Ctasis Sellerbuz. All rights reserved.
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