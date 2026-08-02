import PlatformPage, { PlatformConfig } from "./platformPage";
import { MatrixVisual, ILL, DashListVisual, GenVisual } from "@/components/illustrations/platformPageIllustrations";
import { Wand2, LayoutGrid, GitMerge, Image as ImageIcon, Upload, BarChart3 } from "lucide-react";

const cfg: PlatformConfig = {
  slug: "catalog-ai",
  eyebrow: "AI Catalog",
  title: <>Listings that ship <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">in minutes - not afternoons.</span></>,
  intro:
    "Generate optimized titles, descriptions, bullets and attributes per marketplace with a single click. Tone-aware, SEO-aware, and channel-native from day one.",
  hero: (
    <GenVisual
      id="cat-hero"
      title="AI CATALOG · GENERATOR"
      engineLabel="AI Catalog"
      inputLabel="product.jpg"
      inputMeta={[
        { icon: "tag", label: "Category", value: "Electronics" },
        { icon: "box", label: "Brand", value: "SellerBuz" },
        { icon: "image", label: "Images", value: "4 uploaded" },
      ]}
      outputLines={[
        {
          icon: "text",
          title: "SEO Title",
          body: "Wireless ANC Headphones",
        },
        {
          icon: "document",
          title: "Description",
          body: "SEO-ready AI description.",
        },
        {
          icon: "list",
          title: "Features",
          body: "ANC • BT 5.3 • 40h",
        },
      ]}
      stats={[
        { label: "SEO", value: "96", tone: "blue" },
        { label: "Grade", value: "A+", tone: "emerald" },
      ]}
      features={[
        {
          icon: "shield",
          tone: "blue",
          title: "Marketplace",
          sub: "Ready",
        },
        {
          icon: "target",
          tone: "violet",
          title: "SEO",
          sub: "Optimized",
        },
        {
          icon: "rocket",
          tone: "violet",
          title: "Fast",
          sub: "In seconds",
        },
        {
          icon: "check",
          tone: "emerald",
          title: "AI Quality",
          sub: "Natural copy",
        },
      ]}
    />
  ),
  problem: {
    title: <>Writing multiple versions of the same listing <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">kills throughput.</span></>,
    points: [
      "Amazon wants bullet-first titles",
      "Shopify needs descriptive copy",
      "New SKUs take an afternoon each",
      "Old listings decay without regenerate loops",
    ],
  },
  solution: {
    title: <>One product. Five <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">channel-native listings. Seconds.</span></>,
    points: [
      "Per-channel tone and format presets",
      "Attribute extraction from a single image",
      "Bulk regenerate for old catalog",
      "Human-in-the-loop review before publish",
    ],
  },
  deepDives: [
    {
      eyebrow: "Generate Per Channel",
      title: <>One product in. Multiple <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">channel-native listings out.</span></>,
      desc: "Give SellerBuz a photo and a few specs. It writes optimized listings for Amazon and Shopify - all optimized for that channel's search algorithm.",
      bullets: [
        "Amazon and Shopify. Save tone presets",
        "Per-channel title length, keyword density and formatting",
        "Save brand voice presets per storefront",
        "Human review before publish - nothing goes live silently",
      ],
      visual: (
        <GenVisual
          id="cat-gen"
          title="GENERATE · PER CHANNEL"
          engineLabel="Channel Writer"
          inputLabel="1 product"
          inputMeta={[
            { icon: "image", label: "Photos", value: "4" },
            { icon: "tag", label: "Category", value: "Home" },
            { icon: "box", label: "Variants", value: "3 SKUs" },
          ]}
          outputLines={[
            {
              icon: "text",
              title: "Amazon",
              body: "SEO title",
            },
            {
              icon: "document",
              title: "Shopify",
              body: "Ready listing",
            },
          ]}
          stats={[
            { label: "Channels", value: "12+", tone: "blue" },
            { label: "Quality", value: "AI+", tone: "emerald" },
          ]}
          features={[
            {
              icon: "wand",
              tone: "blue",
              title: "Channel",
              sub: "Ready",
            },
            {
              icon: "target",
              tone: "violet",
              title: "SEO",
              sub: "Optimized",
            },
            {
              icon: "rocket",
              tone: "violet",
              title: "Bulk AI",
              sub: "Fast",
            },
            {
              icon: "check",
              tone: "emerald",
              title: "Brand",
              sub: "Consistent",
            },
          ]}
        />
      ),
    },
    {
      eyebrow: "Image → Attributes",
      title: <>Vision models read the photo, <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">fill the category attributes.</span></>,
      desc: "Category attributes are the tax nobody wants to pay. SellerBuz reads product images plus your uploaded spec sheet and fills the required attributes for each marketplace's category schema.",
      bullets: [
        "Auto-fill Amazon and Shopify category attributes",
        "Extract color, size, material, weight from images",
        "Match against existing retail catalog to save effort",
        "Confidence score per attribute - low-confidence flagged for review",
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
          ]}
        />
      ),
    },
    {
      eyebrow: "Bulk Regenerate",
      title: <>Refresh entire categories with <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">one action.</span></>,
      desc: "SEO shifts. Buy-intent language evolves. Old listings decay. SellerBuz lets you bulk-regenerate a category with a new tone, new keyword focus or new brand voice - with a diff view before you publish.",
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
          cols={["Amazon", "Shopify"]}
          rows={["Home", "Kitchen", "Outdoor"]}
          colLogos={{ Amazon: "/logos/amazon-color-svgrepo-com.svg", Shopify: "/logos/shopify-color-svgrepo-com.svg" }}
          cellFor={(r, c) => {
            const done = (r + c) % 3 !== 0;

            return done
              ? {
                fill: "#E8F0F6",
                text: "98%",
                textFill: "#13355A",
                icon: "check",
              }
              : {
                fill: ILL.tint,
                text: "Queued",
                textFill: ILL.blueDeep,
                icon: "clock",
              };
          }}
          stats={{
            skuValue: "1,482 SKUs",
            skuLabel: "Content refreshed",
            deltaValue: "+18 pts",
            deltaLabel: "Avg SEO score",
          }}
        />
      ),
    },
  ],
  featureGrid: [
    { icon: Wand2, t: "Titles & bullets", d: "Channel-specific title, bullets and description generation." },
    { icon: ImageIcon, t: "Image → attributes", d: "Auto-fill category attributes from product photos." },
    { icon: LayoutGrid, t: "Variant scaffolding", d: "Generate parent-child variation trees automatically." },
    { icon: GitMerge, t: "Smart matching", d: "Detect existing retail catalog matches to save listing effort." },
    { icon: Upload, t: "Bulk regenerate", d: "Refresh entire categories with new tone or SEO focus." },
    { icon: BarChart3, t: "Content scoring", d: "Track listing quality score per SKU and per channel." },
  ],
  channels: ["Amazon", "Shopify"],
  faq: [
    { q: "Do I have to accept AI drafts as-is?", a: "No. Every generation is a draft - review, edit, then publish." },
    { q: "What LLM powers this?", a: "SellerBuz uses fine-tuned models optimized per marketplace, updated regularly." },
    { q: "Will Amazon flag AI-generated content?", a: "No. Content is unique per listing and follows Amazon's guidelines." },
    { q: "Can I lock brand voice?", a: "Yes. Save brand voice presets per storefront." },
    { q: "How are attributes extracted?", a: "Vision models read product images plus your uploaded specs to fill category attributes." },
  ],
};
export default function CatalogAIPlatform() { return <PlatformPage cfg={cfg} />; }
