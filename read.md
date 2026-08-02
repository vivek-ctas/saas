# Copy Migration Log - AI Catalog Management

Every text-content change made across the site while migrating from repricer / warehouse /
profit / revenue framing to **AI Catalog Management** positioning. Format: `before` ---> `after`.

---

## 1. About page

**File:** `src/components/illustrations/aboutPageIllustrations.tsx`

### `AboutJourneyMockup` - hero stats
| Before | After |
|---|---|
| `{ l: "GMV", v: "$300M" }` | `{ l: "Products", v: "5M+" }` |

### `AboutJourneyMockup` - timeline
- `"AI Repricer launched"` ---> `"AI Catalog launched"`

### `NeuralIllustration` - output nodes
- `{ icon: "trendUp", label: ["Smart", "Pricing"] }` ---> `{ icon: "tag", label: ["SEO", "Titles"] }`
- `{ icon: "barChart", label: ["Demand", "Forecast"] }` ---> `{ icon: "barChart", label: ["Listing", "Bullets"] }`
- `{ icon: "cube", label: ["Inventory", "Planning"] }` ---> `{ icon: "target", label: ["Validation", "Checks"] }`

---

## 2. Home page

**File:** `src/screens/home.tsx`

### Hero stats
- `{ icon: DollarSign, value: "$300M+", label: "GMV Processed" }` ---> `{ icon: Upload, value: "5M+", label: "Products Imported" }`

### Journey steps
- `"Link your Marketplace in minutes with one-click integrations."` ---> `"Link Amazon and Shopify in minutes with one-click integrations."`
- `"Inventory, stock & pricing flow automatically across every channel."` ---> `"Your catalog & inventory flow automatically across every channel."`
- `"AI insights surface what to list next, where to restock, and what to scale."` ---> `"AI insights surface what to list next, what to optimize, and what to publish."`

### Badge / pills / stats
- `"Trusted By 50,000+ Multichannel Sellers"` ---> `"Trusted By 50,000+ Amazon & Shopify Sellers"`
- `"4.9 Amazon Stores Rating"` ---> `"Trusted by Growing Ecommerce Brands"`
- `"All channels synced"` ---> `"Catalog synchronized"`
- `"+24% MoM revenue"` ---> `"2,500+ Listings Published"`

### Problem section
- `"Selling on 5 Marketplace shouldn't feel like ... running 5 businesses."` ---> `"Selling across Amazon and Shopify shouldn't feel like ... running two businesses."`
- `"...an account suspension worth months of revenue."` ---> `"...an account suspension."`

### Body copy
- `"...one centralized workspace for inventory, catalog management, order operations..."` ---> `"...one centralized workspace for product catalog management, inventory, order operations..."`
- `"Update your product information once and let the platform automatically synchronize inventory, pricing, listings, and operational data across your connected workflows. ...as your catalog continues to grow."` ---> `"Update your catalog once and let the platform synchronize listings, inventory, and product data across Amazon and Shopify. ...keeps your catalog marketplace-ready as it grows."`
- `"Real-time stock sync across all marketplaces and warehouses."` ---> `"Real-time stock sync across all your Amazon and Shopify stores."`

---

## 3. Home illustrations

**File:** `src/components/illustrations/homePageIllustrations.tsx`

### `SellerHeroMockup` - KPI columns
- `{ label: "ORDERS", value: "850", delta: "+10%" }` ---> `{ label: "PRODUCTS", value: "12.5K", delta: "+320" }`
- `{ label: "BUY BOX", value: "82%", delta: "+9%" }` ---> `{ label: "LISTINGS", value: "8.9K", delta: "+185" }`
- `{ label: "REVENUE", value: "$21.5k", delta: "+19.4%" }` ---> `{ label: "CATALOGS", value: "420", delta: "+24" }`
- `{ label: "PROFIT", value: "$6.8k", delta: "+23.6%" }` ---> `{ label: "PUBLISHED", value: "98%", delta: "+6%" }`

### `SellerHeroMockup` - feature list
- `"Live Performance" / "Real-time updates"` ---> `"AI Catalog" / "Smart product management"`
- `"Smart Repricing" / "Maximize Buy Box"` ---> `"Bulk Import" / "Upload products in minutes"`
- `"Higher Profit" / "Automated insights"` ---> `"Marketplace Ready" / "Amazon & Shopify"`
- `"Healthy Margin" / "Sustainable growth"` ---> `"AI Optimization" / "Better listing quality"`
- `"Scale Faster" / "Grow your business"` ---> removed

### `SellerHeroMockup` - misc labels
- `"CTASIS · Listings"` ---> `"SellerBuz · Listings"`
- `"Repricer ON"` ---> `"AI Optimized"`
- platform pill `"walmart"` ---> `"shopify"`
- margin card `"MARGIN / 31.6% / ▲ +3.6%"` ---> `"VALIDATED / 98.2% / ▲ +2.1%"`

### `SyncIllustration`
- hub `"Inventory · Pricing · Orders"` ---> `"Catalog · Listings · Inventory"`
- `{ title: "Pricing", val: "Rules Active" }` ---> `{ title: "Listings", val: "AI Optimized" }`

### `EcosystemHubMockup`
- `hubTitle = "Ctasis Core"` ---> `hubTitle = "SellerBuz Core"`
- feature `{ title: "Auto Repricer", desc: "AI-powered pricing" }` ---> `{ title: "AI Catalog", desc: "Smart product management" }`

### Removed dead components (never rendered; contained banned copy)
- `InfraIllustration` - had `"Marketplace"`/`"ORDER FLOW"`, row `"Analytics & Insights / Track performance, revenue, and operational metrics in real-time."`
- `MarketplaceMeshDiagram` - had channels `"Walmart"`, `"eBay"`, `"Etsy"`, `"Fnac"`, `"Allegro"`, `"Bol.com"`, and legend `"Auto-repricer"`

---

## 4. Services page

**File:** `src/screens/services.tsx`

### Analytics section
- `"Revenue and performance in one dashboard."` ---> `"Catalog and performance in one dashboard."`
- `"A centralized dashboard surfaces revenue trends, listing performance and key KPIs..."` ---> `"A centralized dashboard surfaces listing quality, catalog health and key KPIs..."`
- `"Cross-channel revenue and margin"` ---> `"Cross-channel catalog health"`

**File:** `src/components/illustrations/servicePageIllustrations.tsx`

### `ServicesHeroMockup`
- `"12 services, one operator view - every action is auditable."` ---> `"9 services, one operator view - every action is auditable."`
- tile `"Order Routing / 847 today / ▶ live"` ---> `"Catalog Sync / 5M+ products / ▶ live"`
- tile `"Repricer / Buy Box 92% / AI"` ---> `"Product Validation / 98.2% pass / AI"`
- tile `"Analytics / $48.2k GMV / +24%"` ---> `"Products Imported / 1.2M this year / +24%"`
- tile `"Logistics / 8 carriers / ✓"` ---> `"Bulk Import / 12,480 rows / ✓"`
- activity `"Repricer raised SKU-8632 to $24.49"` ---> `"AI optimizer refreshed 24 listing titles"`
- activity `"Order #14829 routed to USA-East warehouse"` ---> `"Bulk import validated 12,480 product rows"`

### `InventorySyncSVG`
- node `"Warehouse"` (logo `/logos/warehouse-svgrepo-com.svg`) ---> `"Catalog"` (logo `/logos/inventory-svgrepo-com.svg`)

### `SyncSequenceDiagramSVG`
- actor `"Seller / Warehouse"` ---> `"Seller / Catalog"`

### `AnalyticsDashboardSVG`
- title `"Revenue Over Time"` ---> `"Catalog Performance"`
- legend `"Revenue"` ---> `"Live Listings"`; `"Orders"` ---> `"Imported"`
- y-axis `"Revenue (USD)"` ---> `"Live Listings"`; `"Orders"` ---> `"Imported Products"`
- `REVENUE_TICKS = ["0", "20K", "40K", "60K", "80K", "100K"]` ---> `["0", "2K", "4K", "6K", "8K", "10K"]`
- `ORDERS_TICKS = ["0", "2K", "4K", "6K", "8K", "10K"]` ---> `["0", "400", "800", "1.2K", "1.6K", "2K"]`

### Removed dead component (never rendered)
- `RepricerSVG` - had `"PRICE $21.40"`, `"BUY BOX WINNER 82%"`, `"MARGIN 31.6%"`, `"Buy Box tracking"`, `"Buy Box · WON"`, `"Floor $18.50"`, `"Your Price / Competitor Price"` chart

---

## 5. Pricing page

**File:** `src/screens/pricing.tsx`

### Removed commented-out blocks (banned copy)
- ADDON `"Auto-repricer with your margin rules"` (Buy Box / margin copy)
- PLAN_PERK `"AI-powered repricing / Auto-adjust prices to win the Buy Box 24/7"`

### `Centralized catalog + FBA/FBM` addon
- `"ship from FBA, your own warehouse or a 3PL - based on cost, speed and stock levels."` ---> `"ship from FBA, FBM or a 3PL - based on cost, speed and stock levels."`

**File:** `src/components/illustrations/pricePageIllustrations.tsx`

### `PricingCalculatorMockup`
- header `"ROI calculator · projected impact"` ---> `"Catalog estimator · projected impact"`
- subtitle `"Based on your channels, SKUs and average order value."` ---> `"Based on your catalog size and sales channels."`
- `{ label: "Monthly orders", value: "12,400" }` ---> `{ label: "Products", value: "12,400" }`
- `{ label: "Avg. order value", value: "$48.20" }` ---> `{ label: "Catalog SKUs", value: "48,200" }`
- `{ label: "Current margin", value: "18%" }` ---> `{ label: "Avg. listing time", value: "18 min" }`
- Card 1 `"PROJECTED MARGIN / +9.4% / in 90 days"` (icon `dollar`) ---> `"LISTINGS GENERATED / 12.4K / this month"` (icon `cube`)
- Card 2 `"EXTRA REVENUE / $54.8k / / month"` ---> `"VALIDATION PASS / 98.2% / pass rate"`
- Card 3 `"PAYBACK PERIOD / 18 days / to break even"` ---> `"HOURS SAVED / 320h / per month"`

### `AnalyticsIllustration`
- KPI `{ icon: dollar, label: "GMV", value: "$12.4M" }` ---> `{ icon: cube, label: "Products", value: "5M+" }`
- KPI `{ label: "Orders", value: "84,210" }` ---> `{ label: "Live Listings", value: "84,210" }`
- KPI `{ label: "ROAS", value: "4.8×" }` ---> `{ label: "Validation Pass", value: "98.2%" }`
- title `"Performance Insights"` ---> `"Catalog Insights"`
- subtitle `"Track your business performance with AI-powered analytics"` ---> `"Track your catalog performance with AI-powered analytics"`
- legend `"BigQuery"` ---> `"Amazon"`; `"Power BI"` ---> `"Shopify"`

---

## 6. Marketplaces page (Amazon)

**File:** `src/screens/marketplaces/configs.tsx`

- tagline `"Sell smarter on Amazon - Buy Box first, ops second."` ---> `"Sell smarter on Amazon - AI Catalog first, ops second."`
- capability `"FBA + FBM inventory"`: `"Track FBA inventory alongside your own warehouse - reserve, allocate and split shipments from one screen."` ---> `"Track FBA and FBM inventory together - reserve, allocate and split shipments from one screen."`
- icon `DollarSign` ---> `FileText` (on "AI listing optimization" capability)

**File:** `src/screens/marketplaces/marketplacePage.tsx`
- `MP_ICONS` export: `DollarSign` ---> `FileText`

**File:** `src/components/illustrations/platformPageIllustrations.tsx`
- `mapIcon`: `if (icon === DollarSign) return "tag"` ---> `if (icon === FileText) return "docCheck"`

---

## 7. Platform pages

**File:** `src/screens/platform/platformPage.tsx`
- heading `"From warehouse to marketplace in milliseconds."` ---> `"From inventory to marketplace in milliseconds."`
- pipeline Stage 1 label `"Warehouse"` ---> `"Inventory"` (desktop card + mobile pipeline node + code comment)

**File:** `src/screens/platform/inventoryPlatform.tsx`
- `{ label: "Warehouse", sub: "1,240 on hand", logo: "/logos/warehouse-svgrepo-com.svg" }` ---> `{ label: "Inventory", sub: "1,240 on hand", logo: "/logos/inventory-svgrepo-com.svg" }`
- `{ label: "Warehouse", sub: "master stock", logo: "/logos/warehouse-svgrepo-com.svg" }` ---> `{ label: "Inventory", sub: "master stock", logo: "/logos/inventory-svgrepo-com.svg" }`
- `"LIVE SYNC · WAREHOUSE ➞ CHANNELS"` ---> `"LIVE SYNC · INVENTORY ➞ CHANNELS"`
- `"Warehouse stock and channel stock disagree"` ---> `"Inventory stock and channel stock disagree"`
- `"SellerBuz sits between your warehouse and every marketplace."` ---> `"SellerBuz sits between your inventory and every marketplace."`

### Reworded to "Multi-Location" (approved later)
- eyebrow `"Multi-Warehouse"` ---> `"Multi-Location"`
- title `"Split inventory across warehouses, netted for the seller."` ---> `"Split inventory across locations, netted for the seller."`
- desc `"Track stock separately across your own warehouse, FBA, WFS and 3PLs..."` ---> `"Track stock separately across your own inventory, FBA, WFS and 3PLs..."`
- bullet `"Per-warehouse and per-channel allocation rules"` ---> `"Per-location and per-channel allocation rules"`
- solution point `"Warehouse + FBA + WFS tracked separately, netted centrally"` ---> `"Merchant stock + FBA + WFS tracked separately, netted centrally"`
- ledger title `"Multi-warehouse ledger · SKU-42891"` ---> `"Multi-location ledger · SKU-42891"`
- ledger row `"US · Ohio WH"` ---> `"US · Ohio"`
- feature-grid `"Multi-warehouse"` ---> `"Multi-Location"` (+ description `"...across warehouses and 3PLs..."` ---> `"...across locations and 3PLs..."`)
- FAQ `"Does it work with FBA + WFS + own warehouse?"` ---> `"Does it work with FBA + WFS + own inventory?"`

**File:** `src/components/illustrations/platformPageIllustrations.tsx`
- Removed dead `"warehouse"` icon variants (never rendered; zero `kind="warehouse"` / `headerIcon="warehouse"` callers): `IconKind` union, `IllIconBadge` branch, `headerIcon` union, `IllHeader` icon branch
- Removed orphaned asset `public/logos/warehouse-svgrepo-com.svg` (no remaining references)

---

## 8. Shared illustration index

**File:** `src/components/illustrations/index.tsx`
- Removed dead `ChannelSyncFlow` export (never rendered) - had `"Channel sync · bidirectional"`, `"Inventory · pricing · orders"`, `"Buy Box 92%"`, `"Kafka · RabbitMQ"`

---

## 9. Guide page + pricing metadata

**File:** `src/components/illustrations/guidesPageIllustrations.tsx`
- Cover title `"The Repricer"` ---> `"The AI Catalog"` (kept `"Playbook"`)
- Cover sub-copy `"Inside the algorithm that"` / `"protected $2.1M in margin"` / `"across 40,000 SKUs."` ---> `"How one dashboard generates"` / `"and validates listings"` / `"across 40,000 SKUs."`
- Chart caption `"- Buy Box win rate, last 30 days"` ---> `"- Listings validated, last 30 days"`
- Article card `"Algorithmic vs rule-based repricing"` (Strategy) ---> `"AI-generated listings vs manual upload"` (AI)
- Article card `"Walmart Buy Box: a different game"` (Walmart) ---> `"Amazon vs Shopify: catalog differences"` (Channels)
- Article card `"5 analytics that actually move revenue"` (Analytics) ---> `"5 listing metrics that actually move sales"` (Analytics)
- Article card `"From CSV to Fnac in 4 minutes"` (AI) - kept
- Removed 8 dead exports (never imported; contained banned copy): `OrderFlowDiagram`, `AnalyticsFlowDiagram` (`"BigQuery warehouse"`), `RepricerStrategyChart` (`"Buy Box won 92%"`), `AIPipelineDiagram`, `AutomationBuilderDiagram`, `ReportingConsoleMockup` (`"Daily profit digest"`), `AlertTriageDiagram` (`"Buy Box dropped"`), `ArticleHeroMockup`. File 2,159 ---> 94 lines.

**File:** `app/pricing/page.tsx`
- Pro plan JSON-LD description `"…AI repricer, advanced analytics."` ---> `"…AI listing tools, advanced analytics."`

**File:** `app/about/page.tsx`
- AboutPage JSON-LD description `"Today we power $300M+ in GMV for 50,000+ sellers in 150+ countries."` ---> `"Today we help 50,000+ sellers in 150+ countries power their multichannel operations."` (aligned with migrated body copy)

**File:** `app/services/page.tsx`
- ItemList item "Analytics & Performance" description `"Revenue and performance trends in one clean view."` ---> `"Listing quality and performance trends in one clean view."`

**Kept intentionally (out of scope / legal):** `app/guide/[slug]/page.tsx` posts array (repricer stub articles - metadata-only blank pages, approved to leave), `src/screens/terms.tsx` legal disclaimer.

---

## Notes
- **No layout/UI changes** - copy and data labels only, plus icon/asset swaps where noted.
- New asset added: `public/logos/inventory-svgrepo-com.svg` (replaces warehouse logo on inventory sync visuals); orphaned `public/logos/warehouse-svgrepo-com.svg` removed.
- All changes verified: `npm run lint` = 0 errors (3 pre-existing warnings in checkout files), `npm run build` = exit 0.
