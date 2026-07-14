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
    company: [
      { name: "Services", href: "/services" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
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
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-1">Let's Build Your eCommerce Success Together</h3>
                <p className="text-slate-300 text-sm">
                  Whether you're starting out or scaling your Marketplace business, CTAS Sellerbuz provides the tools and expertise to help you grow faster.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Company Info */}
            <div className="flex-1 min-w-[220px] max-w-[280px] space-y-4">
              <Link href="/" className="flex items-center space-x-1 sm:space-x-2 mb-4">
                <img
                  src="/ctasis-logo copy.svg"
                  alt="Ctasis Logo"
                  className="w-auto h-9 sm:w-auto md:w-auto transition-all"
                />
                <span className="text-white text-sm sm:text-base font-semibold">Sellerbuz</span>
              </Link>
              <p className="text-slate-300 text-sm max-w-xs leading-relaxed">
                The complete multichannel selling platform trusted by 50,000+ sellers worldwide.
                Manage inventory, process orders, and grow your business faster.
              </p>
            </div>

            {/* Reach Us / Address */}
            <div className="flex-1 min-w-[220px] max-w-[280px] space-y-4">
              <h4 className="font-semibold text-white mb-4 text-base">Reach Us</h4>
              <div className="flex items-start text-slate-300 text-sm max-w-xs leading-relaxed">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-emerald-400 flex-shrink-0" />
                <span>A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, near BSNL Office, Gota, Ahmedabad, Gujarat 382470</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex-1 min-w-[220px] max-w-[280px] space-y-4">
              <h4 className="font-semibold text-white mb-4 text-base">Contact Us</h4>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0" />
                  <span>info@ctasis.com</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0" />
                  <span>+91 7948993409</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="flex-1 min-w-[220px] max-w-[280px] space-y-4">
              <h4 className="font-semibold text-white mb-4 text-base">Company</h4>
              <ul className="space-y-3 text-sm">
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
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-5">
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