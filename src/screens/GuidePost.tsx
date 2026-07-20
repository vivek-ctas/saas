"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation"; import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Clock, Share2, BookOpen, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import {
  ArticleHeroMockup,
  RepricerStrategyChart,
  AIPipelineDiagram,
  AnalyticsFlowDiagram,
  ChannelSyncFlow,
  AutomationBuilderDiagram,
  ReportingConsoleMockup,
  AlertTriageDiagram,
  MarketplaceMeshDiagram,
  OrderFlowDiagram,
} from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

type Section = { h: string; p: string[]; bullets?: string[] };
type Post = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  intro: string;
  Visual: (props: any) => JSX.Element;
  sections: Section[];
};

const posts: Post[] = [
  {
    slug: "ai-amazon-business-repricer",
    title: "Inside our AI Amazon Business Repricer — and why margin floors matter",
    category: "Repricing",
    readTime: "6 min read",
    date: "Apr 22, 2026",
    author: "Aman Shah · Product",
    excerpt: "How we built a repricer that wins the Buy Box without dragging your profit through the floor.",
    intro: "Most repricers solve the wrong problem. They optimise for 'lowest price wins' — and then quietly torch your margin while you sleep. Ours starts from a different question: what's the highest price you can charge and still win the Buy Box?",
    Visual: RepricerStrategyChart,
    sections: [
      { h: "The race to the bottom is a feature, not a bug", p: ["Cheap repricers chase the lowest price because it's the easiest signal to optimise. The trouble is the moment a competitor matches you, you're both worse off — and the buyer barely notices.", "We instrument the Buy Box itself: ratings, FBA status, fulfilment speed, stock depth, returns. Then we ask: how high can we price and still win the box 90% of the time?"] },
      { h: "Floors are sacred", p: ["Every repricing rule starts with a floor — a price below which we will literally never go, even if it costs you the Buy Box. This is the single biggest difference between a repricer that grows your business and one that ends it."], bullets: ["Per-SKU minimum margin (e.g. 18%)", "Per-brand MAP guard rails", "Optional inventory-velocity overrides for clearance"] },
      { h: "What changed for our pilot sellers", p: ["A typical pilot looks like this: Buy Box share holds at 88–94%, average sell price rises 4–7%, and the number of 'oh god what happened overnight' Slack messages drops to zero."] },
    ],
  },
  {
    slug: "amazon-ai-algorithmic-repricer",
    title: "Algorithmic vs rule-based repricing: which one actually grows your business?",
    category: "Strategy",
    readTime: "8 min read",
    date: "Apr 18, 2026",
    author: "Priya Mehta · Strategy",
    excerpt: "Most sellers start with rules and outgrow them in a quarter. Here's the honest breakdown.",
    intro: "If you've ever caught yourself opening a spreadsheet at midnight to tweak a competitor rule, this one's for you. Rule-based repricing is comforting — until you have 500 SKUs, 6 Marketplace and a competitor who changes price every 90 seconds.",
    Visual: AIPipelineDiagram,
    sections: [
      { h: "Rule-based: simple, predictable, slow", p: ["Rules are great for small catalogues. 'Match the lowest FBA seller, never go below £19.99' fits in your head and is easy to audit.", "It breaks the moment your competitors start playing the same game — every rule becomes a counter-rule and you're playing whack-a-mole at 3am."] },
      { h: "Algorithmic: signals, not rules", p: ["An algorithmic engine doesn't follow a recipe — it learns from outcomes. Did this price win the Buy Box? For how long? At what margin? Did it move stock too fast?", "Over a few weeks, the model figures out the highest profitable price for each SKU on each Marketplace, in each region, at each time of day. You stop writing rules and start writing guard rails."] },
      { h: "When to switch", p: ["A rough rule: if you have more than 200 SKUs, more than 3 Marketplace, or your competitors are also using software to reprice — you've already outgrown rules. Move."], bullets: ["More than 200 SKUs", "More than 3 active channels", "Competitors clearly using software", "Margins already feeling 'mysteriously' compressed"] },
    ],
  },
  {
    slug: "custom-repricing-strategies",
    title: "Custom repricing strategies for hero SKUs, clearance and MAP-protected brands",
    category: "Playbooks",
    readTime: "10 min read",
    date: "Apr 12, 2026",
    author: "Daniel Park · Customer Success",
    excerpt: "One repricer config will never fit a 500-SKU catalog. Three real-world strategy templates.",
    intro: "We've yet to meet a serious seller whose entire catalogue should follow one repricing strategy. Hero SKUs, clearance, MAP-protected brands and long-tail products each need their own playbook — and Ctasis lets you build one per cohort, drag-and-drop.",
    Visual: AutomationBuilderDiagram,
    sections: [
      { h: "Hero SKU strategy: win the box, defend the floor", p: ["Your top 20 products do 80% of revenue. They deserve the most aggressive Buy Box strategy — but always anchored to a floor margin of 12–18%."], bullets: ["Re-price every 90 seconds", "Floor: 14% margin", "Optional ceiling: 38% margin", "Slack alert if Buy Box share drops below 80% for 30 min"] },
      { h: "Clearance strategy: clear the shelf, protect breakeven", p: ["Seasonal stock has a different objective: get rid of it before it costs you storage fees. Floor moves to breakeven, ceiling drops, and we track velocity instead of margin."] },
      { h: "MAP-protected brands: never embarrass the manufacturer", p: ["Some brands will pull your account if you violate MAP. The strategy template hard-codes the MAP price as both floor and ceiling for the relevant SKUs and routes any attempted change through an approval webhook."] },
    ],
  },
  {
    slug: "amazon-seller-analytics-that-matter",
    title: "The five Amazon seller analytics that actually move revenue",
    category: "Analytics",
    readTime: "7 min read",
    date: "Apr 5, 2026",
    author: "Maya Chen · Analytics",
    excerpt: "Vanity metrics are easy. Profit-moving metrics take a little more work. Here are the five.",
    intro: "Sessions, page views, even orders — most seller dashboards are crammed with metrics that feel important and move nothing. After working with hundreds of sellers, the same five numbers keep showing up on the dashboards of the ones that grow.",
    Visual: AnalyticsFlowDiagram,
    sections: [
      { h: "1. True margin (after every fee)", p: ["Not gross margin. Not contribution margin. The number you actually take home after FBA fees, ad spend, returns, refunds and storage. Most sellers are off by 4–8 points and don't know it."] },
      { h: "2. Buy Box share by SKU", p: ["Headline Buy Box % is a vanity stat. Buy Box share for your top-20 SKUs, broken down by hour, is where the money lives."] },
      { h: "3. Repeat-purchase rate", p: ["The cheapest customer is the one you already have. Track 60-day repeat rate per category — and double the ad spend on the categories where it's highest."] },
      { h: "4. Stockout-driven loss", p: ["Forecast revenue lost to stockouts in the next 14 days. This is the single best argument for buying more inventory you can hand a CFO."] },
      { h: "5. Return reason mix", p: ["'Wrong size' means listing. 'Damaged' means packaging. 'Not as described' means images. Returns aren't noise — they're the highest-signal feedback you'll ever get."] },
    ],
  },
  {
    slug: "walmart-repricer-playbook",
    title: "The Walmart repricer playbook: what's different from Amazon, and what isn't",
    category: "Walmart",
    readTime: "9 min read",
    date: "Mar 28, 2026",
    author: "Jordan Reyes · Marketplace",
    excerpt: "Walmart's Buy Box plays by its own rules. Here's how to think about it.",
    intro: "If you treat Walmart like Amazon Junior, you'll lose. The Buy Box (sorry — 'Featured Offer') weighs different signals, the buyer behaves differently, and the penalties for getting it wrong are quieter but just as expensive.",
    Visual: ChannelSyncFlow,
    sections: [
      { h: "What's the same", p: ["Price is still the dominant signal. Stock still matters. Seller rating still matters. If you've already mastered Amazon repricing, you're 70% of the way there."] },
      { h: "What's different", p: ["Walmart cares much more about fulfilment promise reliability. Late shipments hurt your Featured Offer eligibility for weeks, not days. WFS (Walmart Fulfilment Services) gets a meaningful boost — bigger than FBA's edge on Amazon."], bullets: ["Cheaper-by-X% rule will get your offer suppressed", "Two-day delivery promise is non-negotiable on hero SKUs", "Returns ratio is weighted heavier than Amazon"] },
      { h: "How we tune the repricer", p: ["For Walmart, our default strategy widens the floor margin (Walmart buyers tolerate slightly higher prices), tightens the ceiling, and adds a hard rule: never undercut your own Amazon offer. Cross-channel sanity matters more here than anywhere else."] },
    ],
  },
  {
    slug: "ai-listing-generator-from-raw-data",
    title: "From a messy CSV to a fnac listing in four minutes — with AI",
    category: "AI",
    readTime: "5 min read",
    date: "Mar 20, 2026",
    author: "Aman Shah · Product",
    excerpt: "How our AI listing generator turns raw product data into channel-perfect listings.",
    intro: "The slowest part of expanding to a new Marketplace isn't integration — it's writing 800 listings that don't sound like a robot wrote them. Our AI listing generator does the boring 80% so your team can focus on the 20% that actually sells.",
    Visual: AIPipelineDiagram,
    sections: [
      { h: "It starts with whatever you have", p: ["A CSV. A photo. A supplier brief. A messy Google Doc. We embed the inputs, classify the product against each Marketplace's category tree, and pick the writing template that matches."] },
      { h: "Channel-perfect, not generic", p: ["Amazon wants benefit-led bullets and rich backend keywords. eBay wants long-form descriptions with HTML. fnac wants short, punchy attributes. The model writes once, then re-shapes for each channel."] },
      { h: "Human in the loop, not human in the way", p: ["Anything below a confidence threshold goes to a reviewer; anything above is auto-published. The result: 92% of listings ship without a human touching them — and the 8% that do are exactly the ones worth a human's time."] },
    ],
  },
  {
    slug: "amazon-new-selling-api",
    title: "Amazon's new Selling Partner API: what changed, and what it means for your stack",
    category: "Integrations",
    readTime: "7 min read",
    date: "May 2, 2026",
    author: "Aman Shah · Product",
    excerpt: "Tighter rate limits, granular roles, and a much friendlier auth flow — here's what we rebuilt for SP-API v2.",
    intro: "Amazon's Selling Partner API has quietly become the backbone of every serious multichannel operation. The latest revision tightens rate limits, splits permissions into granular roles, and finally fixes the painful LWA refresh dance. Here's what changed and why your integration probably needs a tune-up.",
    Visual: MarketplaceMeshDiagram,
    sections: [
      { h: "Granular roles, not godmode tokens", p: ["The old MWS keys gave any integration the keys to the kingdom. SP-API v2 splits scope into pricing, inventory, orders, finance and brand analytics — each with its own approval flow.", "We rewrote our auth layer so each Ctasis module requests only the scopes it actually needs. The result: cleaner audit trails and faster Amazon approvals."] },
      { h: "Rate limits that punish polling", p: ["The new limits are forgiving for event-driven listeners and brutal for naive pollers. If your stack still hits /orders every 60 seconds, you're already throttled."], bullets: ["Use Notifications (SQS/EventBridge) for order + pricing updates", "Cache catalog calls aggressively — they're the most expensive", "Backoff with jitter, not fixed retries"] },
      { h: "What we shipped for Ctasis sellers", p: ["Every Ctasis tenant now runs on SP-API v2 with per-module scopes, EventBridge subscriptions for orders and pricing, and a refresh-token rotation that just works. You don't have to think about it — and that's the whole point."] },
    ],
  },
  {
    slug: "fba-vs-fbm",
    title: "FBA vs FBM in 2026: the honest cost, control and growth trade-off",
    category: "Operations",
    readTime: "8 min read",
    date: "Apr 28, 2026",
    author: "Jordan Reyes · Marketplace",
    excerpt: "Fulfilment By Amazon vs Merchant. Not a religious war — a maths problem with three variables.",
    intro: "Every seller eventually has the FBA-vs-FBM conversation. Most do it badly: gut feel, founder bias, or whatever a YouTube influencer said last week. The honest answer is that it's a maths problem with three variables — margin, velocity and control — and it's worth doing properly.",
    Visual: OrderFlowDiagram,
    sections: [
      { h: "FBA: speed, trust, and a fee schedule that bites", p: ["FBA wins you Prime eligibility, the Buy Box edge, and the operational silence of not running a warehouse. It also charges you for storage, removal, returns processing, and a fulfilment fee that quietly creeps every year.", "For high-velocity, small-and-light SKUs with margins above 25%, FBA is almost always the right answer."] },
      { h: "FBM: control, margin, and a real ops team", p: ["FBM keeps fulfilment in-house (or with a 3PL). You keep more margin per order, control packaging and unboxing, and don't get hit with long-term storage fees on slow movers."], bullets: ["Best for oversized, heavy, or low-margin SKUs", "Best for fragile or brand-experience-led products", "Requires a real ops team and reliable carriers", "Demands flawless on-time shipping — Amazon punishes lateness hard"] },
      { h: "The hybrid playbook (what most winners do)", p: ["The biggest sellers we work with don't pick one. They run FBA on hero SKUs and seasonal pushes, and FBM on long-tail, oversized and brand-experience products. Ctasis routes orders to the right fulfilment node automatically based on SKU rules you set once."] },
    ],
  },
  {
    slug: "amazon-fulfilment-strategies",
    title: "Amazon fulfilment strategies: blending FBA, FBM, SFP and 3PL without losing your margin",
    category: "Operations",
    readTime: "9 min read",
    date: "May 5, 2026",
    author: "Daniel Park · Customer Success",
    excerpt: "Most sellers default to one fulfilment model and pay for it later. Here's how the top operators mix FBA, FBM, SFP and 3PL by SKU cohort.",
    intro: "There is no single 'best' Amazon fulfilment strategy — only the right mix for your catalogue, your cash position and your tolerance for operational pain. The sellers who scale past eight figures stop arguing about FBA vs FBM and start treating fulfilment as a routing problem, solved per SKU cohort.",
    Visual: ReportingConsoleMockup,
    sections: [
      { h: "Start by segmenting the catalogue, not the warehouse", p: ["Group SKUs by velocity, size, margin and seasonality before you decide where they ship from. A 200g hero SKU with a 35% margin belongs nowhere near the same fulfilment lane as a 12kg seasonal bundle with 14% margin.", "We typically end up with four cohorts: hero, steady, long-tail, and seasonal — each with its own default fulfilment node."] },
      { h: "FBA for velocity, Prime trust and the Buy Box edge", p: ["FBA earns its fees on fast-moving, small-and-light SKUs where Prime eligibility moves the conversion needle. Treat it as a premium service you pay for — not a default."], bullets: ["Hero SKUs and proven steady sellers", "Anything where 2-day Prime visibly lifts conversion", "Avoid for slow movers — long-term storage fees compound fast"] },
      { h: "Seller-Fulfilled Prime: the underused middle ground", p: ["SFP gives you the Prime badge while keeping inventory in your own (or your 3PL's) warehouse. The bar is high — sub-2-day delivery, weekend shipping, near-perfect on-time rate — but the unit economics on heavy or fragile SKUs can beat FBA by 30%+.", "It's the right answer when you want Prime conversion without surrendering control of packaging or returns."] },
      { h: "FBM and 3PL for oversized, fragile and brand-experience SKUs", p: ["For anything heavy, fragile, custom-packaged or brand-experience-led, FBM (in-house or via a 3PL) almost always wins on margin and customer experience. The trade-off is operational: you own the SLA, the carrier relationship and the returns desk."] },
      { h: "How Ctasis routes orders automatically", p: ["Inside Ctasis you define fulfilment rules once per SKU cohort — and every incoming order is routed to FBA, SFP, your 3PL or your own warehouse based on stock, SLA risk and unit economics. No spreadsheets, no 2am re-routing, no missed Prime promises."] },
    ],
  },
];

const GuidePost = () => {
  const ref = useReveal<HTMLDivElement>();
  const params = useParams();
  const slug = params.slug as string;
  const post = posts.find((p) => p.slug === slug);

  const router = useRouter();

  if (!post) {
    router.push("/guide");
    return null;
  }
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const Visual = post.Visual;

  return (
    <Layout>
      <div ref={ref}>
        {/* HERO */}
        <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="px-[50px] lg:px-[70px]">
            <Link href="/guide" className="reveal inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
            <div className="reveal flex items-center gap-3 text-sm text-slate-500 mb-4">
              <Badge className="bg-blue-50 text-blue-700 border border-blue-100">{post.category}</Badge>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
            <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5">
              {post.title}
            </h1>
            <p className="reveal text-xl lg:text-2xl text-slate-600 leading-relaxed mb-6 max-w-3xl">{post.excerpt}</p>
            <div className="reveal flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-900" />
              <div>
                <div className="text-sm font-bold text-slate-900">{post.author}</div>
                <div className="text-xs text-slate-500">Ctasis team</div>
              </div>
              <Button variant="outline" size="sm" className="ml-auto rounded-full">
                <Share2 className="w-3.5 h-3.5" /> Share
              </Button>
            </div>
            <div className="reveal rounded-3xl overflow-hidden border border-slate-100 shadow-stripe-xl max-w-[700px] mx-auto">
              <ArticleHeroMockup className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="py-20 bg-white">
          <div className="px-[50px] lg:px-[70px]">
            <p className="reveal text-lg text-slate-700 leading-relaxed mb-10 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              {post.intro}
            </p>

            {post.sections.map((s, i) => (
              <div key={i} className="reveal mb-12" style={{ transitionDelay: `${i * 60}ms` }}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{s.h}</h2>
                {s.p.map((para, j) => (
                  <p key={j} className="text-slate-700 leading-relaxed mb-4 text-[17px] lg:text-lg">{para}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-2 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    {s.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Visual midway */}
                {i === Math.floor(post.sections.length / 2) - 1 && (
                  <div className="reveal mt-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white p-4 sm:p-6 border border-slate-100 shadow-stripe">
                    <Visual className="w-full h-auto max-w-[650px] mx-auto" />
                    <p className="text-center text-sm text-slate-500 mt-3">A simplified view of what the system actually does behind the scenes.</p>
                  </div>
                )}
              </div>
            ))}

            {/* TL;DR */}
            <div className="reveal rounded-3xl bg-gradient-to-br from-blue-600 to-blue-900 p-8 text-white">
              <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">TL;DR</div>
              <p className="text-lg lg:text-xl leading-relaxed">{post.excerpt}</p>
              <Button className="mt-6 rounded-full bg-white text-blue-900 hover:bg-blue-50 border-0" asChild>
                <Link href="/contact">Talk to our team <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-20 section-bg">
          <div className="px-[50px] lg:px-[70px]">
            <div className="reveal flex items-end justify-between mb-10">
              <div>
                <Badge className="mb-3 bg-blue-50 text-blue-700 border border-blue-100">Keep reading</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">More from the guide</h2>
              </div>
              <Link href="/guide" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 story-link">
                <BookOpen className="w-4 h-4" /> All articles
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((o, i) => (
                <Link key={o.slug} href={`/guide/${o.slug}`} className="reveal block group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <Card className="h-full border border-slate-100 hover-lift overflow-hidden bg-white">
                    <div className="relative h-40 bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                      <div className="absolute inset-0 grid-bg opacity-20" />
                      <BookOpen className="relative w-12 h-12 text-white/90" />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="secondary" className="text-xs mb-2">{o.category}</Badge>
                      <h3 className="text-base lg:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-2">{o.title}</h3>
                      <span className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GuidePost;
