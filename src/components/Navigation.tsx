"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  ChevronDown,
  Home,
  Layers,
  Mail,
  ShoppingCart,
  Tag,
  Users,
  Wand2,
} from "lucide-react";

const platformLinks = [
  {
    name: "Amazon",
    href: "/marketplaces/amazon",
    icon: ShoppingCart,
    desc: "Sell smarter on Amazon.",
  },
  {
    name: "Inventory Sync",
    href: "/platform/inventory",
    icon: Boxes,
    desc: "One stock number, every channel.",
  },
  {
    name: "AI Catalog",
    href: "/platform/catalog-ai",
    icon: Wand2,
    desc: "Listings that ship in minutes.",
  },
];

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Layers },
  { name: "Guides", href: "/guide", icon: BookOpen },
  { name: "About", href: "/about", icon: Users },
  { name: "Pricing", href: "/pricing", icon: Tag },
  { name: "Contact", href: "/contact", icon: Mail },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const groupActive = (prefix: string) => pathname.startsWith(prefix);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open, allow Escape to close it.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50 shadow-stripe">
      <div className="px-[50px] lg:px-[70px]">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/sellerbuz.png"
              alt="Sellerbuz Logo"
              className="w-auto h-14 object-contain transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-6">
              {/* Home */}
              <Link
                href="/"
                className={`text-sm transition-stripe ${isActive("/")
                  ? "text-primary font-semibold"
                  : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                Home
              </Link>

              {/* Platform */}
              <div
                className="relative"
                onMouseEnter={() => setOpen("platform")}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  className={`text-sm flex items-center gap-1 transition-stripe ${groupActive("/platform") || groupActive("/marketplaces")
                    ? "text-primary font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  Platform
                  <ChevronDown className="w-4 h-4" />
                </button>

                {open === "platform" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[540px]">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-4 grid grid-cols-3 gap-2">
                      {platformLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition"
                        >
                          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                            <item.icon className="w-5 h-5 text-blue-600" />
                          </div>

                          <div>
                            <div className="font-semibold text-sm text-slate-900">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Remaining navigation */}
              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-stripe ${isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <Button asChild className="ml-4 shadow-stripe">
                <Link href="/pricing">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-50 active:scale-95 transition"
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="relative block w-5 h-4">
                <span className="absolute left-0 top-0 w-5 h-[2px] rounded-full bg-current" />
                <span className="absolute left-0 top-[7px] w-5 h-[2px] rounded-full bg-current" />
                <span className="absolute left-0 top-[14px] w-5 h-[2px] rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation: backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation: off-canvas sidebar (opens from the left) */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`lg:hidden fixed top-0 left-0 z-[70] h-dvh w-full max-w-[21rem] bg-white shadow-2xl rounded-r-3xl transition-transform duration-300 ease-out flex flex-col overflow-hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Sidebar header */}
        <div className="relative shrink-0 bg-gradient-to-br from-blue-50/70 via-white to-white px-5 pt-5 pb-4 border-b border-slate-100">
          <div className="flex items-center justify-between">
            <img
              src="/sellerbuz.png"
              alt="Sellerbuz Logo"
              className="w-auto h-10 object-contain"
            />
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-100 text-slate-500 shadow-sm hover:bg-slate-50 hover:text-slate-900 active:scale-95 transition"
            >
              <span className="relative block w-3.5 h-3.5">
                <span className="absolute top-1/2 left-0 w-3.5 h-[2px] -translate-y-1/2 rotate-45 rounded-full bg-current" />
                <span className="absolute top-1/2 left-0 w-3.5 h-[2px] -translate-y-1/2 -rotate-45 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>

        {/* Sidebar content */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          {/* Platform section — card list, mirrors the desktop mega dropdown */}
          <div
            style={{ transitionDelay: isOpen ? "60ms" : "0ms" }}
            className={`transition-all duration-300 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              }`}
          >
            <div className="px-1 pb-2 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Platform
              </span>
              {(groupActive("/platform") || groupActive("/marketplaces")) && (
                <span className="text-[11px] font-semibold text-primary">Active</span>
              )}
            </div>
            <div className="space-y-2">
              {platformLinks.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center gap-3 p-3 rounded-2xl border transition-all ${active
                      ? "bg-blue-50/80 border-blue-100"
                      : "bg-white border-slate-100 hover:border-blue-100 hover:bg-blue-50/60 hover:shadow-sm"
                      }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm text-slate-900">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 truncate">
                        {item.desc}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 shrink-0 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Main navigation links */}
          <div
            style={{ transitionDelay: isOpen ? "110ms" : "0ms" }}
            className={`transition-all duration-300 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              }`}
          >
            <div className="px-1 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Navigate
            </div>
            <div className="space-y-1">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-xl text-[15px] transition-all ${active
                      ? "bg-blue-50 text-primary font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                  >
                    {active && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[3px] rounded-full bg-primary" />
                    )}
                    <item.icon
                      className={`w-[18px] h-[18px] shrink-0 ${active ? "text-primary" : "text-slate-400"
                        }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar footer */}
        <div
          style={{ transitionDelay: isOpen ? "160ms" : "0ms" }}
          className={`shrink-0 px-5 py-4 border-t border-slate-100 bg-white space-y-3 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          <Button asChild className="w-full shadow-stripe">
            <Link href="/pricing">Get Started</Link>
          </Button>
          <Link
            href="/contact"
            className="block text-center text-sm text-slate-500 hover:text-slate-900 transition"
          >
            Contact sales
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;