"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingBag, Globe, Star, ShoppingCart, Sparkles, Package,
  Smartphone, Truck, Megaphone, Store, ArrowRight, CheckCircle, Zap, Plug
} from "lucide-react";
import  Link  from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { BlobBackdrop, ContactMapIllustration, MarketplaceMeshDiagram, ChannelSyncFlow, LogoChip } from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";
import { INTEGRATIONS } from "./integrations/integrations.data";

const Marketplaces = () => {
  const ref = useReveal<HTMLDivElement>();

  const groups = [
    {
      title: "Global marketplaces",
      icon: ShoppingBag,
      tone: "from-primary to-secondary",
      items: ["Amazon (FBA + FBM)", "eBay", "Walmart", "Etsy", "Target Plus", "Best Buy", "Newegg", "Wayfair"]
    },
    {
      title: "Asia-Pacific",
      icon: Globe,
      tone: "from-secondary to-rose-500",
      items: ["Lazada", "Shopee", "Rakuten", "Tokopedia", "Flipkart", "Meesho", "Myntra", "Ajio"]
    },
    {
      title: "Europe",
      icon: Star,
      tone: "from-primary to-indigo-600",
      items: ["Allegro", "Cdiscount", "Bol.com", "OTTO", "Zalando", "Fnac", "ManoMano", "Kaufland"]
    },
    {
      title: "Storefronts & D2C",
      icon: ShoppingCart,
      tone: "from-secondary to-orange-500",
      items: ["Shopify", "WooCommerce", "BigCommerce", "Magento", "Wix", "Squarespace", "Shift4Shop", "PrestaShop"]
    },
    {
      title: "Social commerce",
      icon: Smartphone,
      tone: "from-rose-500 to-pink-600",
      items: ["TikTok Shop", "Instagram Shopping", "Facebook Marketplace", "Pinterest", "YouTube Shopping", "WhatsApp Catalog"]
    },
    {
      title: "Offline chains & B2B",
      icon: Store,
      tone: "from-slate-700 to-slate-900",
      items: ["Reliance Smart", "Croma", "DMart Ready", "Costco B2B", "Faire", "Alibaba.com", "Ankorstore", "Joor"]
    }
  ];

  const logistics = [
    "Shiprocket", "Tirupati Couriers", "DHL", "FedEx", "UPS", "USPS",
    "PostNL", "Royal Mail", "Rakuten Post", "Aramex", "Delhivery", "Blue Dart",
    "Ekart", "DPD", "GLS", "La Poste", "Canada Post", "Australia Post"
  ];

  const ads = [
    "Amazon Ads", "Google Shopping", "Meta Ads", "TikTok Ads",
    "Walmart Connect", "Microsoft Ads", "Pinterest Ads", "Criteo"
  ];

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={Zap}
          badgeText="80+ live integrations"
          title={<>Sell on every channel <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">that matters.</span></>}
          subtitle="From Amazon FBA to Lazada, TikTok Shop to Reliance Smart — Ctasis connects every marketplace, storefront, courier and ad network you need to scale globally."
          // visual={<MarketplaceMeshDiagram className="w-full h-auto" />}
          visual={
            <div className="scale-110 origin-center">
              <MarketplaceMeshDiagram className="w-full h-auto" />
            </div>
          }
          actions={
            <>
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 rounded-full shadow-sm">
                See all integrations
              </Button>
              <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-stripe-xl group bg-gradient-to-r from-primary to-secondary hover:opacity-95 border-0">
                Connect a channel
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </>
          }
        >
          <div className="mt-8 flex flex-wrap gap-3 text-slate-700 text-sm">
            {["FBA & FBM support", "One-click connect", "Real-time sync"].map((t, i) => (
              <span key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200/70 shadow-sm">
                <CheckCircle className="w-4 h-4 text-primary" /> {t}
              </span>
            ))}
          </div>
        </PageHero>

        {/* FEATURED INTEGRATIONS — deep-dive subpages */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Plug className="w-3.5 h-3.5 mr-1" /> Deep-dive integrations
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Pick a channel — see how Ctasis runs it</h2>
              <p className="text-xl text-slate-600">Each integration has its own operator console, automations and analytics.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {INTEGRATIONS.map((it, i) => (
                <Link key={it.slug} href={`/marketplaces/${it.slug}`} className="reveal block" style={{ transitionDelay: `${i * 60}ms` }}>
                  <Card className="hover-lift overflow-hidden border border-slate-100 h-full">
                    <div className={`h-2 bg-gradient-to-r ${it.tone}`} />
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${it.tone} flex items-center justify-center mb-4 shadow-stripe`}>
                        <it.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">{it.region}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{it.name}</h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{it.tagline}</p>
                      <span className="text-primary text-sm font-semibold inline-flex items-center gap-1">
                        Explore <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* MARKETPLACE GROUPS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Marketplaces</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Reach buyers everywhere</h2>
              <p className="text-xl text-slate-600">From global giants to regional champions and offline retail chains.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((g, i) => (
                <Card key={i} className="reveal hover-lift overflow-hidden border border-slate-100" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className={`h-2 bg-gradient-to-r ${g.tone}`} />
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g.tone} flex items-center justify-center mb-4 shadow-stripe`}>
                      <g.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{g.title}</h3>
                    <ul className="space-y-2">
                      {g.items.map((it, j) => (
                        <li key={j} className="flex items-center gap-2 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" /> {it}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CHANNEL SYNC FLOW — n8n style visual */}
        <section className="py-24 section-bg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal max-w-3xl mx-auto">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Zap className="w-3.5 h-3.5 mr-1" /> How a channel goes live
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Connect once. Sync forever.</h2>
              <p className="text-lg text-slate-600">
                Every marketplace integration looks the same under the hood — a visual flow you can audit, replay and tweak without writing a line of code.
              </p>
            </div>
            <div className="reveal rounded-3xl bg-white p-4 sm:p-8 border border-slate-100 shadow-stripe">
              <ChannelSyncFlow className="w-full h-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { t: "Two-way inventory", d: "When stock moves on Shopify, it moves on Amazon, eBay and Walmart in the same breath. No more 'oversold' emails at 2 AM." },
                { t: "Smart price guardrails", d: "Push a new price to one channel and our rules check your floor and ceiling before it hits the others. You set the boundaries — we enforce them." },
                { t: "Order de-duplication", d: "If the same buyer hits two channels in the same minute, we catch the duplicate before fulfillment ever sees it. Clean orders, clean books." },
              ].map((b, i) => (
                <Card key={i} className="reveal hover-lift border border-slate-100 bg-white" style={{ transitionDelay: `${i * 80}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-3 shadow-stripe">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{b.t}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{b.d}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SELLER ANALYTICS PROMISE */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">Seller analytics</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                See every channel side-by-side — finally.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Most sellers run their business across six tabs and a Google Sheet. Ctasis pulls Amazon, Walmart, Shopify, eBay and your ad networks into one honest profit view — so you stop guessing which channel is actually paying the bills and which one is quietly bleeding cash.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "True profit per SKU per channel — fees, ads and refunds included",
                  "Buy Box win-rate trends with hour-level resolution",
                  "Inventory health score: days of cover, dead stock, stockout risk",
                  "One-click drill-down from a number to the order behind it",
                ].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="shadow-stripe-xl group">
                See sample dashboard <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="reveal delay-200">
              <ContactMapIllustration className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* LOGISTICS */}
        <section className="py-24 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Truck className="w-3.5 h-3.5 mr-1" /> Logistics partners
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Ship anywhere, with anyone</h2>
              <p className="text-xl text-slate-600">India, Europe, USA — pick the carrier that fits each order.</p>
            </div>
            <div className="reveal flex flex-wrap justify-center gap-3">
              {logistics.map((l, i) => (
                <LogoChip key={i} name={l} tone={i % 3 === 0 ? "primary" : i % 3 === 1 ? "secondary" : "accent"} />
              ))}
            </div>
          </div>
        </section>

        {/* ADS NETWORKS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-4 bg-accent text-accent-foreground border-0">
                <Megaphone className="w-3.5 h-3.5 mr-1" /> Ads & growth
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Run paid campaigns from one console.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Pull ad spend, ROAS and attribution from every major network into one dashboard.
                Optimize Amazon Ads, Google Shopping and Meta side-by-side without switching tabs.
              </p>
              <Button size="lg" className="shadow-stripe-xl group">
                See ads dashboard <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="reveal delay-200 grid grid-cols-2 gap-3">
              {ads.map((a, i) => (
                <LogoChip key={i} name={a} tone={i % 2 === 0 ? "primary" : "secondary"} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-4xl mx-auto px-4 text-center reveal">
            <Sparkles className="w-12 h-12 text-pink-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Don't see your channel?</h2>
            <p className="text-xl text-white/90 mb-10">We ship 2-3 new integrations every month. Tell us what you need.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-stripe-xl">Request integration</Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Talk to sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Marketplaces;
