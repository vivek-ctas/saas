import PlatformPage, { PlatformConfig } from "./PlatformPage";
import { MatrixVisual } from "@/components/illustrations/MatrixVisual";
import { ILL } from "@/components/illustrations/primitives";
import { DollarSign, ShieldCheck, BarChart3, RefreshCw, Layers, Sparkles } from "lucide-react";
import { DashListVisual } from "@/components/illustrations/DashListVisual";
import { KpiChartVisual } from "@/components/illustrations/KpiChartVisual";
const cfg: PlatformConfig = {
  slug: "repricer",
  eyebrow: "Repricer",
  title: "Win the Buy Box. Protect your margin. Automatically.",
  intro:
    "Rule-based + Buy Box aware repricing that reacts in under 2 seconds. Floor and ceiling per SKU, channel-native rules, no race-to-the-bottom.",
  hero: (
    <KpiChartVisual
      id="rep-hero"
      title="Repricer · SKU-42891"
      kpis={[
        { label: "Price", value: "$21.40", delta: "+$0.30", icon: "box" },
        { label: "Buy Box", value: "82%", delta: "+9%", icon: "cart" },
        { label: "Margin", value: "31.6%", delta: "+3.6%", icon: "calendar" },
      ]}
      series={[70, 72, 68, 74, 71, 76, 78, 74, 80, 84, 82, 86]}
      compareSeries={[60, 62, 60, 64, 62, 66, 68, 66, 70, 72, 70, 74]}
      floorLabel="Floor $18.50"
      pill={{ label: "Buy Box · WON", tone: "emerald" }}
    />
  ),
  problem: {
    title: "Manual repricing loses. Every day.",
    points: [
      "Competitors move faster than your team",
      "You either race to the bottom or lose the Buy Box",
      "No visibility into why you lost a listing",
      "Cross-channel pricing drifts out of sync",
    ],
  },
  solution: {
    title: "A repricer that respects your margin.",
    points: [
      "Buy Box tracking on Amazon",
      "Competitor-aware rules on Walmart, eBay, Flipkart",
      "Hard floor and ceiling per SKU — no exceptions",
      "Schedule promo pricing without touching listings",
    ],
  },
  deepDives: [
    {
      eyebrow: "Buy Box tracker",
      title: "Reacts to Buy Box changes in under 2 seconds.",
      desc: "SellerBuz watches Buy Box events in real time. When you lose it, we test the smallest price move that gets it back — without ever crossing your floor.",
      bullets: [
        "Sub-2-second reaction to Amazon Buy Box events",
        "Sub-30-second competitor scan on Walmart, eBay, Flipkart",
        "Smallest-effective-move algorithm to protect margin",
        "Buy Box win rate, price velocity and margin trend per SKU",
      ],
      visual: (
        <KpiChartVisual
          id="rep-bb"
          title="Buy Box · last 24h · SKU-42891"
          kpis={[
            { label: "Win rate", value: "82%", delta: "+9%", icon: "cart" },
            { label: "Price moves", value: "37", delta: "auto", icon: "box" },
            { label: "Avg margin", value: "31.6%", delta: "+3.6%", icon: "calendar" },
          ]}
          series={[60, 68, 62, 72, 68, 78, 74, 82, 78, 86, 82, 90]}
          compareSeries={[55, 60, 58, 64, 60, 68, 64, 72, 68, 74, 70, 78]}
          floorLabel="Floor $18.50"
          pill={{ label: "Buy Box · WON", tone: "emerald" }}
        />
      ),
    },
    {
      eyebrow: "Strategies × channels",
      title: "A different repricing strategy per SKU, per channel.",
      desc: "Buy Box on Amazon, competitor-match on Walmart, hold-margin on Etsy. Assign any strategy to any SKU or category — SellerBuz enforces it 24/7.",
      bullets: [
        "Match-Buy-Box, beat-by-cents, hold-margin, velocity-based",
        "Assign per SKU or per category, per channel",
        "Freeze pricing on any SKU with one click",
        "Marketplace policy guardrails enforced automatically",
      ],
      visual: (
        <MatrixVisual
          id="rep-strat"
          title="Strategy matrix · by channel"
          cols={["Amazon", "Walmart", "eBay", "Etsy"]}
          rows={["Home", "Kitchen", "Outdoor"]}
          colLogos={{ Amazon: "/logos/amazon-color-svgrepo-com.svg", Walmart: "/logos/walmart.png", eBay: "/logos/ebay-svgrepo-com.svg", Etsy: "/logos/etsy-svgrepo-com.svg" }}
          cellFor={(r, c) => {
            const strats = ["Buy Box", "Match", "Margin", "Beat 1¢"];
            const tones = ["#dbeafe", "#d1fae5", "#fef3c7", "#e0e7ff"];
            const fgs = ["#1d4ed8", "#065f46", "#92400e", "#4338ca"];

            const idx = (r * 4 + c) % 4;

            return {
              fill: tones[idx],
              text: strats[idx],
              textFill: fgs[idx],
              icon: idx === 2 ? "clock" : "check",
            };
          }}
          stats={{
            skuValue: "4 Strategies",
            skuLabel: "Across channels",
            deltaValue: "100%",
            deltaLabel: "Guardrails enabled",
          }}
        />
      ),
    },
    {
      eyebrow: "Promo scheduler",
      title: "Time-boxed promos with automatic revert.",
      desc: "Schedule Prime Day, Big Billion Days or a Black Friday window per SKU. Prices drop at the start of the window and revert automatically at the end — no team member needed at midnight.",
      bullets: [
        "Schedule promo windows per SKU or per category",
        "Automatic revert at end of window",
        "Preview effective floor and margin per promo",
        "Freeze rules during promos to prevent conflicts",
      ],
      visual: (
        <DashListVisual
          id="rep-promo"
          title="Scheduled promos · next 30 days"
          chip={{ label: "12 windows", tone: "blue" }}
          columns={["Promo", "Channel", "Window", "Floor"]}
          rows={[
            { cells: ["Prime Day", { dot: "#f59e0b", text: "Amazon" }, "Jul 15 · 48h", "$18.50"], badge: { text: "Armed", tone: "emerald" } },
            { cells: ["Big Sale", { dot: "#1d4ed8", text: "Flipkart" }, "Aug 3 · 72h", "₹399"], badge: { text: "Armed", tone: "emerald" } },
            { cells: ["Deals Days", { dot: "#2563eb", text: "Walmart" }, "Aug 12 · 48h", "$18.90"], badge: { text: "Draft", tone: "muted" } },
            { cells: ["BFCM", { dot: "#f59e0b", text: "Amazon" }, "Nov 24 · 96h", "$17.90"], badge: { text: "Draft", tone: "muted" } },
          ]}
        />
      ),
    },
  ],
  featureGrid: [
    { icon: DollarSign, t: "Buy Box repricer", d: "Real-time reaction to Buy Box changes with margin guardrails." },
    { icon: ShieldCheck, t: "Floor & ceiling", d: "Per-SKU hard limits. Repricer never crosses them." },
    { icon: RefreshCw, t: "Cross-channel sync", d: "Keep pricing consistent across every marketplace." },
    { icon: Layers, t: "Strategy library", d: "Match-Buy-Box, beat-by-cents, hold-margin and more." },
    { icon: Sparkles, t: "Promo scheduler", d: "Time-boxed sale prices with automatic revert." },
    { icon: BarChart3, t: "Buy Box analytics", d: "Win rate, price velocity and margin trend per SKU." },
  ],
  channels: ["Amazon", "Walmart", "eBay", "Etsy", "Flipkart"],
  faq: [
    { q: "How fast does the repricer react?", a: "Under 2 seconds for Amazon Buy Box events. Sub-30 seconds for competitor scans on other channels." },
    { q: "Will it violate marketplace pricing policies?", a: "No. Guardrails and marketplace rules are respected." },
    { q: "Can I run different strategies per SKU?", a: "Yes. Strategy library is fully assignable per SKU or per category." },
    { q: "Is there a manual override?", a: "Yes — freeze pricing on any SKU with one click." },
    { q: "Does it handle promotions like Prime Day?", a: "Yes. Schedule promo windows with automatic revert." },
  ],
};
export default function RepricerPlatform() { return <PlatformPage cfg={cfg} />; }
