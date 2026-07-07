"use client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Clock, Sparkles, Cpu, BarChart3, Workflow, Brain, Layers, Plug, Boxes, Truck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { BlobBackdrop, BlogEditorialMockup } from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

const posts = [
  {
    slug: "ai-amazon-business-repricer",
    title: "Inside our AI Amazon Business Repricer — and why margin floors matter",
    excerpt: "A look at how we built a repricer that wins the Buy Box without dragging your profit through the floor. Spoiler: it's not just about being cheapest.",
    category: "Repricing",
    icon: Cpu,
    readTime: "6 min read",
    date: "Apr 22, 2026",
    tone: "from-primary to-indigo-600",
  },
  {
    slug: "amazon-ai-algorithmic-repricer",
    title: "Algorithmic vs rule-based repricing: which one actually grows your business?",
    excerpt: "Most sellers start with simple rules and outgrow them in a quarter. Here's the honest breakdown of when to switch to an algorithmic engine — and what to expect.",
    category: "Strategy",
    icon: Brain,
    readTime: "8 min read",
    date: "Apr 18, 2026",
    tone: "from-secondary to-orange-500",
  },
  {
    slug: "custom-repricing-strategies",
    title: "Custom repricing strategies for hero SKUs, clearance and MAP-protected brands",
    excerpt: "One repricer config will never fit a 500-SKU catalog. We share three real-world strategy templates we use with our largest sellers.",
    category: "Playbooks",
    icon: Workflow,
    readTime: "10 min read",
    date: "Apr 12, 2026",
    tone: "from-secondary to-pink-600",
  },
  {
    slug: "amazon-seller-analytics-that-matter",
    title: "The five Amazon seller analytics that actually move revenue (and the ones to ignore)",
    excerpt: "Vanity metrics are easy. Profit-moving metrics take a little more work. Here are the five we put on every seller's daily dashboard — and why.",
    category: "Analytics",
    icon: BarChart3,
    readTime: "7 min read",
    date: "Apr 5, 2026",
    tone: "from-indigo-600 to-primary",
  },
  {
    slug: "walmart-repricer-playbook",
    title: "The Walmart repricer playbook: what's different from Amazon, and what isn't",
    excerpt: "Walmart's Buy Box plays by its own rules. Here's how to think about pricing, fulfillment and seller rating without copy-pasting your Amazon strategy.",
    category: "Walmart",
    icon: Layers,
    readTime: "9 min read",
    date: "Mar 28, 2026",
    tone: "from-rose-500 to-pink-600",
  },
  {
    slug: "ai-listing-generator-from-raw-data",
    title: "From a messy CSV to a Flipkart listing in four minutes — with AI",
    excerpt: "How our AI listing generator turns raw product data into channel-perfect listings, and how we keep Sellerbuz ranking algorithms happy in the process.",
    category: "AI",
    icon: Sparkles,
    readTime: "5 min read",
    date: "Mar 20, 2026",
    tone: "from-primary to-secondary",
  },
  {
    slug: "amazon-new-selling-api",
    title: "Amazon's new Selling Partner API: what changed, and what it means for your stack",
    excerpt: "Tighter rate limits, granular roles, and a much friendlier auth flow — here's what we rebuilt for SP-API v2 and why your integration probably needs a tune-up.",
    category: "Integrations",
    icon: Plug,
    readTime: "7 min read",
    date: "May 2, 2026",
    tone: "from-indigo-500 to-primary",
  },
  {
    slug: "fba-vs-fbm",
    title: "FBA vs FBM in 2026: the honest cost, control and growth trade-off",
    excerpt: "Fulfilment By Amazon vs Merchant. Not a religious war — a maths problem with three variables. Here's how we help sellers run the numbers properly.",
    category: "Operations",
    icon: Boxes,
    readTime: "8 min read",
    date: "Apr 28, 2026",
    tone: "from-orange-500 to-secondary",
  },
  {
    slug: "amazon-fulfilment-strategies",
    title: "Amazon fulfilment strategies: blending FBA, FBM, SFP and 3PL without losing your margin",
    excerpt: "Most sellers default to one fulfilment model and pay for it later. Here's how the top operators mix FBA, FBM, Seller-Fulfilled Prime and 3PL by SKU cohort.",
    category: "Operations",
    icon: Truck,
    readTime: "9 min read",
    date: "May 5, 2026",
    tone: "from-primary to-indigo-600",
  },
];

const Blog = () => {
  const ref = useReveal<HTMLDivElement>();
  const [featured, ...rest] = posts;

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={BookOpen}
          badgeText="Ctasis · Blog"
          title={<>Stories from <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">the seller front line.</span></>}
          subtitle="Repricer deep-dives, Sellerbuz playbooks and honest takes on what actually grows a multichannel business — written by the engineers and sellers who build Ctasis."
          visual={<BlogEditorialMockup className="w-full h-auto" />}
          actions={
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-stripe-xl group bg-gradient-to-r from-primary to-secondary hover:opacity-95 border-0">
                Contact Our Team
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          }
        />

        {/* FEATURED POST */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featured.slug}`} className="reveal block group">
              <Card className="overflow-hidden border border-slate-100 hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={`relative bg-gradient-to-br ${featured.tone} p-12 flex items-center justify-center min-h-[280px]`}>
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <featured.icon className="relative w-24 h-24 text-white/90" />
                    <Badge className="absolute top-6 left-6 bg-white text-slate-900 border-0">Featured</Badge>
                  </div>
                  <CardContent className="p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <Badge variant="secondary" className="text-xs">{featured.category}</Badge>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                      <span>·</span><span>{featured.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{featured.excerpt}</p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1 story-link">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* GRID */}
        <section className="py-20 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12 reveal">
              <div>
                <Badge className="mb-3 bg-accent text-accent-foreground border-0">Latest articles</Badge>
                <h2 className="text-4xl font-bold text-slate-900">All posts</h2>
              </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((p, i) => (
                <Link href={`/blog/${p.slug}`} key={p.slug} className="reveal block group" style={{ transitionDelay: `${i * 70}ms` }}>
                  <Card className="h-full border border-slate-100 hover-lift overflow-hidden">
                    <div className={`relative h-44 bg-gradient-to-br ${p.tone} flex items-center justify-center`}>
                      <div className="absolute inset-0 grid-bg opacity-20" />
                      <p.icon className="relative w-14 h-14 text-white/90" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                        <Badge variant="secondary" className="text-xs">{p.category}</Badge>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">{p.excerpt}</p>
                      <span className="text-primary text-sm font-semibold inline-flex items-center gap-1">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-4xl mx-auto px-4 text-center reveal">
            <BookOpen className="w-12 h-12 text-pink-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get the playbooks in your inbox.</h2>
            <p className="text-xl text-white/90 mb-10">One short, useful email a week — no fluff, no spam, unsubscribe anytime.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/pricing">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-stripe-xl">
                  Get started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline"
                  className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/80 shadow-stripe">
                  Talk to our team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
