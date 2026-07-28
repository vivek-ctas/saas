"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { GuideEditorialMockup } from "@/components/illustrations/guidesPageIllustrations";
import { useReveal } from "@/hooks/use-reveal";
import { ProductListingGuide } from "@/components/illustrations/ProductListingGuide";
import { ConnectAmazonGuide } from "@/components/illustrations/ConnectAmazonGuide";
import { SyncCatalogGuide } from "@/components/illustrations/SyncCatalogGuide";

const Guide = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={BookOpen}
          badgeText="SellerBuz · Guide"
          title={<>Stories from <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">the seller front line.</span></>}
          subtitle="Marketplace playbooks and honest takes on what actually grows a multichannel business - written by the engineers and sellers who build SellerBuz."
          visual={<GuideEditorialMockup className="w-full h-auto" />}
          actions={
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 h-12 rounded-full group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                Contact Our Team
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          }
        />

        {/* GUIDE SECTION – Step 1: Create Your Product Listing */}
        <ProductListingGuide />

        {/* GUIDE SECTION – Step 2: Connect Your Amazon Store */}
        <ConnectAmazonGuide />

        {/* GUIDE SECTION – Step 3: From My Catalog to Amazon Inventory */}
        <SyncCatalogGuide />

        {/* CTA */}
        <section className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-[hsl(226,71%,50%)] to-[hsl(226,71%,35%)]">
          <div className="relative px-5 sm:px-8 lg:px-[70px] text-center reveal">
            <BookOpen className="w-12 h-12 text-blue-200 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Get the playbooks in your inbox.</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10">One short, useful email a week - no fluff, no spam, unsubscribe anytime.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/pricing">
                <Button size="lg" className="text-lg px-8 bg-white text-blue-900 hover:bg-blue-50 shadow-stripe-xl border-0">
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

export default Guide;
