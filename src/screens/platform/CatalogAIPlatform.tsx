import PlatformPage, { PlatformConfig } from "./PlatformPage";
import { GenVisual, DashListVisual, MatrixVisual } from "./visuals";
import { ILL } from "@/components/illustrations/primitives";
import { Wand2, LayoutGrid, GitMerge, Image as ImageIcon, Upload, BarChart3 } from "lucide-react";

const cfg: PlatformConfig = {
  slug: "catalog-ai",
  eyebrow: "AI catalog",
  title: "Listings that ship in minutes — not afternoons.",
  intro:
    "Generate optimized titles, descriptions, bullets and attributes per marketplace with a single click. Tone-aware, SEO-aware, and channel-native from day one.",
  hero: (
    <GenVisual
      id="cat-hero"
      title="AI CATALOG · GENERATOR"
      engineLabel="AI Catalog"
      inputLabel="product.jpg + specs"
      outputLines={["Title", "Description", "Bullets"]}
      outputChips={[{ text: "SEO ✓", tone: "blue" }, { text: "A+ ✓", tone: "emerald" }]}
    />
  ),
  problem: {
    title: "Writing 5 versions of the same listing kills throughput.",
    points: [
      "Amazon wants bullet-first, eBay wants 80-char titles",
      "Etsy needs warmth, Flipkart needs specs",
      "New SKUs take an afternoon each",
      "Old listings decay without regenerate loops",
    ],
  },
  solution: {
    title: "One product. Five channel-native listings. Seconds.",
    points: [
      "Per-channel tone and format presets",
      "Attribute extraction from a single image",
      "Bulk regenerate for old catalog",
      "Human-in-the-loop review before publish",
    ],
  },
  deepDives: [
    {
      eyebrow: "Generate per channel",
      title: "One product in. Five channel-native listings out.",
      desc: "Give SellerBuz a photo and a few specs. It writes an Amazon bullet-first listing, an eBay 80-char title, an Etsy warm description and a Flipkart spec block — all optimized for that channel's search algorithm.",
      bullets: [
        "Amazon, Walmart, eBay, Etsy and Flipkart tone presets",
        "Per-channel title length, keyword density and formatting",
        "Save brand voice presets per storefront",
        "Human review before publish — nothing goes live silently",
      ],
      visual: (
        <GenVisual
          id="cat-gen"
          title="GENERATE · PER CHANNEL"
          engineLabel="Channel-native writer"
          inputLabel="1 product · 4 photos"
          outputLines={["Amazon title", "eBay 80-char", "Etsy story"]}
          outputChips={[{ text: "SEO ✓", tone: "blue" }, { text: "brand ✓", tone: "emerald" }]}
        />
      ),
    },
    {
      eyebrow: "Image → attributes",
      title: "Vision models read the photo, fill the category attributes.",
      desc: "Category attributes are the tax nobody wants to pay. SellerBuz reads product images plus your uploaded spec sheet and fills the required attributes for each marketplace's category schema.",
      bullets: [
        "Auto-fill Amazon, Walmart and Flipkart category attributes",
        "Extract color, size, material, weight from images",
        "Match against existing retail catalog to save effort",
        "Confidence score per attribute — low-confidence flagged for review",
      ],
      visual: (
        <DashListVisual
          id="cat-attr"
          title="Extracted attributes · SKU-42891"
          chip={{ label: "94% confidence", tone: "blue" }}
          columns={["Attribute", "Value", "Source"]}
          rows={[
            { cells: ["Color", "Midnight Navy", "image"], badge: { text: "99%", tone: "emerald" } },
            { cells: ["Material", "Recycled PET", "specs"], badge: { text: "97%", tone: "emerald" } },
            { cells: ["Size", "Medium (US 9)", "image + specs"], badge: { text: "92%", tone: "emerald" } },
            { cells: ["Care", "Machine wash cold", "specs"], badge: { text: "88%", tone: "amber" } },
            { cells: ["Gender", "Unisex adult", "image"], badge: { text: "74%", tone: "amber" } },
          ]}
        />
      ),
    },
    {
      eyebrow: "Bulk regenerate",
      title: "Refresh entire categories with one action.",
      desc: "SEO shifts. Buy-intent language evolves. Old listings decay. SellerBuz lets you bulk-regenerate a category with a new tone, new keyword focus or new brand voice — with a diff view before you publish.",
      bullets: [
        "Bulk regenerate by category, brand or channel",
        "Diff view: before vs after, per SKU",
        "Rollback any generation with one click",
        "Content quality score per SKU and per channel",
      ],
      visual: (
        <MatrixVisual
          id="cat-bulk"
          title="Bulk regenerate · Q3 refresh"
          cols={["Amazon", "Walmart", "eBay", "Etsy"]}
          rows={["Home", "Kitchen", "Outdoor"]}
          cellFor={(r, c) => {
            const done = (r + c) % 3 !== 0;
            return done
              ? { fill: "#d1fae5", text: "✓ 98%", textFill: "#065f46" }
              : { fill: ILL.tint, text: "queued", textFill: ILL.blueDeep };
          }}
          note="1,482 SKUs · avg content score +18 pts vs pre-refresh"
        />
      ),
    },
  ],
  featureGrid: [
    { icon: Wand2,      t: "Titles & bullets",  d: "Channel-specific title, bullets and description generation." },
    { icon: ImageIcon,  t: "Image → attributes", d: "Auto-fill category attributes from product photos." },
    { icon: LayoutGrid, t: "Variant scaffolding", d: "Generate parent-child variation trees automatically." },
    { icon: GitMerge,   t: "Smart matching",    d: "Detect existing retail catalog matches to save listing effort." },
    { icon: Upload,     t: "Bulk regenerate",   d: "Refresh entire categories with new tone or SEO focus." },
    { icon: BarChart3,  t: "Content scoring",   d: "Track listing quality score per SKU and per channel." },
  ],
  channels: ["Amazon", "Walmart", "eBay", "Etsy", "Flipkart"],
  faq: [
    { q: "Do I have to accept AI drafts as-is?", a: "No. Every generation is a draft — review, edit, then publish." },
    { q: "What LLM powers this?", a: "SellerBuz uses fine-tuned models optimized per marketplace, updated regularly." },
    { q: "Will Amazon flag AI-generated content?", a: "No. Content is unique per listing and follows Amazon's guidelines." },
    { q: "Can I lock brand voice?", a: "Yes. Save brand voice presets per storefront." },
    { q: "How are attributes extracted?", a: "Vision models read product images plus your uploaded specs to fill category attributes." },
  ],
};
export default function CatalogAIPlatform() { return <PlatformPage cfg={cfg} />; }
