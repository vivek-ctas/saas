import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingBag, Globe, Star, ShoppingCart, Sparkles, Package,
  Smartphone, Truck, Megaphone, Store, ArrowRight, CheckCircle, Zap
} from "lucide-react";
import Layout from "@/components/Layout";
import { BlobBackdrop, SyncIllustration, LogoChip } from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

const Marketplaces = () => {
  const ref = useReveal<HTMLDivElement>();

  const groups = [
    {
      title: "Global marketplaces",
      icon: ShoppingBag,
      tone: "from-primary to-fuchsia-600",
      items: ["Amazon (FBA + FBM)", "eBay", "Walmart", "Etsy", "Target Plus", "Best Buy", "Newegg", "Wayfair"]
    },
    {
      title: "Asia-Pacific",
      icon: Globe,
      tone: "from-pink-500 to-rose-500",
      items: ["Lazada", "Shopee", "Rakuten", "Tokopedia", "Flipkart", "Meesho", "Myntra", "Ajio"]
    },
    {
      title: "Europe",
      icon: Star,
      tone: "from-indigo-600 to-purple-600",
      items: ["Allegro", "Cdiscount", "Bol.com", "OTTO", "Zalando", "Fnac", "ManoMano", "Kaufland"]
    },
    {
      title: "Storefronts & D2C",
      icon: ShoppingCart,
      tone: "from-fuchsia-500 to-purple-600",
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
        {/* HERO */}
        <section className="relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" /> 80+ live integrations
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Sell on every channel<br />
                <span className="bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
                  that matters.
                </span>
              </h1>
              <p className="text-xl text-white/85 max-w-xl mb-8">
                From Amazon FBA to Lazada, TikTok Shop to Reliance Smart — Ctasis connects to every
                marketplace, storefront, courier and ad network you need to scale globally.
              </p>
              <div className="flex flex-wrap gap-3 text-white/90 text-sm">
                {["FBA & FBM support", "One-click connect", "Real-time sync"].map((t, i) => (
                  <span key={i} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                    <CheckCircle className="w-4 h-4" /> {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="reveal delay-200">
              <SyncIllustration className="w-full h-auto" />
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
