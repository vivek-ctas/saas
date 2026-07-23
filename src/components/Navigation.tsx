"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Boxes, ChevronDown, Menu, ShoppingCart, Wand2, X } from "lucide-react";

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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const groupActive = (prefix: string) => pathname.startsWith(prefix);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Guides", href: "/guide" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

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

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-100">
              <Link href="/" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" onClick={() => setIsOpen(false)}>Home</Link>
              <div className="px-3 pt-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">Platform</div>
              {platformLinks.map((l) => (
                <Link key={l.href} href={l.href} className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50" onClick={() => setIsOpen(false)}>{l.name}</Link>
              ))}
              <div className="px-3 pt-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Company
              </div>

              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md transition-stripe ${isActive(item.href)
                    ? "text-primary bg-accent font-medium"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/pricing" className="block">
                  <Button variant="default" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;