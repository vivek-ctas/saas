import { Link, useParams, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
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
    intro: "If you've ever caught yourself opening a spreadsheet at midnight to tweak a competitor rule, this one's for you. Rule-based repricing is comforting — until you have 500 SKUs, 6 marketplaces and a competitor who changes price every 90 seconds.",
    Visual: AIPipelineDiagram,
    sections: [
      { h: "Rule-based: simple, predictable, slow", p: ["Rules are great for small catalogues. 'Match the lowest FBA seller, never go below £19.99' fits in your head and is easy to audit.", "It breaks the moment your competitors start playing the same game — every rule becomes a counter-rule and you're playing whack-a-mole at 3am."] },
      { h: "Algorithmic: signals, not rules", p: ["An algorithmic engine doesn't follow a recipe — it learns from outcomes. Did this price win the Buy Box? For how long? At what margin? Did it move stock too fast?", "Over a few weeks, the model figures out the highest profitable price for each SKU on each marketplace, in each region, at each time of day. You stop writing rules and start writing guard rails."] },
      { h: "When to switch", p: ["A rough rule: if you have more than 200 SKUs, more than 3 marketplaces, or your competitors are also using software to reprice — you've already outgrown rules. Move."], bullets: ["More than 200 SKUs", "More than 3 active channels", "Competitors clearly using software", "Margins already feeling 'mysteriously' compressed"] },
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
    author: "Jordan Reyes · Marketplaces",
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
    title: "From a messy CSV to a Flipkart listing in four minutes — with AI",
    category: "AI",
    readTime: "5 min read",
    date: "Mar 20, 2026",
    author: "Aman Shah · Product",
    excerpt: "How our AI listing generator turns raw product data into channel-perfect listings.",
    intro: "The slowest part of expanding to a new marketplace isn't integration — it's writing 800 listings that don't sound like a robot wrote them. Our AI listing generator does the boring 80% so your team can focus on the 20% that actually sells.",
    Visual: AIPipelineDiagram,
    sections: [
      { h: "It starts with whatever you have", p: ["A CSV. A photo. A supplier brief. A messy Google Doc. We embed the inputs, classify the product against each marketplace's category tree, and pick the writing template that matches."] },
      { h: "Channel-perfect, not generic", p: ["Amazon wants benefit-led bullets and rich backend keywords. eBay wants long-form descriptions with HTML. Flipkart wants short, punchy attributes. The model writes once, then re-shapes for each channel."] },
      { h: "Human in the loop, not human in the way", p: ["Anything below a confidence threshold goes to a reviewer; anything above is auto-published. The result: 92% of listings ship without a human touching them — and the 8% that do are exactly the ones worth a human's time."] },
    ],
  },
];

const BlogPost = () => {
  const ref = useReveal<HTMLDivElement>();
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const Visual = post.Visual;

  return (
    <Layout>
      <div ref={ref}>
        {/* HERO */}
        <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-indigo-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="reveal inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
            <div className="reveal flex items-center gap-3 text-sm text-slate-500 mb-4">
              <Badge className="bg-accent text-accent-foreground border-0">{post.category}</Badge>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
            <h1 className="reveal text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-5">
              {post.title}
            </h1>
            <p className="reveal text-xl text-slate-600 leading-relaxed mb-6 max-w-3xl">{post.excerpt}</p>
            <div className="reveal flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <div>
                <div className="text-sm font-bold text-slate-900">{post.author}</div>
                <div className="text-xs text-slate-500">Ctasis team</div>
              </div>
              <Button variant="outline" size="sm" className="ml-auto rounded-full">
                <Share2 className="w-3.5 h-3.5" /> Share
              </Button>
            </div>
            <div className="reveal rounded-3xl overflow-hidden border border-slate-100 shadow-stripe-xl">
              <ArticleHeroMockup className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="reveal text-lg text-slate-700 leading-relaxed mb-10 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              {post.intro}
            </p>

            {post.sections.map((s, i) => (
              <div key={i} className="reveal mb-12" style={{ transitionDelay: `${i * 60}ms` }}>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{s.h}</h2>
                {s.p.map((para, j) => (
                  <p key={j} className="text-slate-700 leading-relaxed mb-4 text-[17px]">{para}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-2 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    {s.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Visual midway */}
                {i === Math.floor(post.sections.length / 2) - 1 && (
                  <div className="reveal mt-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white p-4 sm:p-6 border border-slate-100 shadow-stripe">
                    <Visual className="w-full h-auto" />
                    <p className="text-center text-sm text-slate-500 mt-3">A simplified view of what the system actually does behind the scenes.</p>
                  </div>
                )}
              </div>
            ))}

            {/* TL;DR */}
            <div className="reveal rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-white">
              <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">TL;DR</div>
              <p className="text-lg leading-relaxed">{post.excerpt}</p>
              <Button variant="secondary" className="mt-6 rounded-full" asChild>
                <Link to="/contact">Talk to our team <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-20 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal flex items-end justify-between mb-10">
              <div>
                <Badge className="mb-3 bg-accent text-accent-foreground border-0">Keep reading</Badge>
                <h2 className="text-3xl font-bold text-slate-900">More from the blog</h2>
              </div>
              <Link to="/blog" className="text-primary text-sm font-semibold inline-flex items-center gap-1 story-link">
                <BookOpen className="w-4 h-4" /> All articles
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((o, i) => (
                <Link key={o.slug} to={`/blog/${o.slug}`} className="reveal block group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <Card className="h-full border border-slate-100 hover-lift overflow-hidden bg-white">
                    <div className="relative h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <div className="absolute inset-0 grid-bg opacity-20" />
                      <BookOpen className="relative w-12 h-12 text-white/90" />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="secondary" className="text-xs mb-2">{o.category}</Badge>
                      <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors mb-2">{o.title}</h3>
                      <span className="text-primary text-sm font-semibold inline-flex items-center gap-1">
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

export default BlogPost;
