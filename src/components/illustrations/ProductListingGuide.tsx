"use client";

import { useEffect, useRef, useState } from "react";
import {
    CheckCircle2,
    UploadCloud,
    FileSpreadsheet,
    Tag,
} from "lucide-react";
import { ProductImportFlow } from "./guidePageIllustrations";

/* ─────────────────────────────────────
   Scroll-reveal hook
────────────────────────────────────── */
function useInView(threshold = 0.08) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}



/* ─────────────────────────────────────
   Left sidebar
────────────────────────────────────── */
function Sidebar({ visible }: { visible: boolean }) {
    return (
        <div
            className="flex flex-col gap-5 h-full"
            style={{
                transition: "opacity 0.6s ease 100ms, transform 0.6s ease 100ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-12px)",
            }}
        >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#13355A] text-white shadow self-start">
                STEP 1
            </span>
            <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">Create Your Product Listing</h3>
                <p className="text-sm sm:text-base text-slate-500 mt-2 leading-relaxed">Add products to your catalog manually or in bulk. Listings appear in My Catalog instantly, ready to go live on Amazon and Shopify.</p>
            </div>
            {/* Option 1 */}
            <div className="rounded-2xl border border-[#BDD9EE] bg-[#E8F0F6] p-3 sm:p-4">
                <div className="flex gap-2.5 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#13355A] flex items-center justify-center shrink-0 mt-px">
                        <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-bold text-[#3C9AC4] uppercase tracking-wider">Option 1</p>
                        <p className="text-sm sm:text-base font-semibold text-slate-800 mt-0.5">Add Product Manually</p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-1.5 leading-relaxed">Fill product details one by one — title, SKU, price, stock, images — and save your listing.</p>
                        <ul className="mt-2 space-y-1">
                            <li className="flex items-start gap-1.5 text-xs text-slate-600">
                                <CheckCircle2 className="w-3 h-3 text-[#3C9AC4] mt-0.5 shrink-0" />
                                Add product details through the form
                            </li>
                            <li className="flex items-start gap-1.5 text-xs text-slate-600">
                                <CheckCircle2 className="w-3 h-3 text-[#3C9AC4] mt-0.5 shrink-0" />
                                Save to My Catalog instantly
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* OR */}
            <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs font-bold text-slate-400">OR</span>
                <div className="flex-1 h-px bg-slate-200" />
            </div>
            {/* Option 2 */}
            <div className="rounded-2xl border border-[#BDD9EE] bg-[#E8F0F6] p-3 sm:p-4">
                <div className="flex gap-2.5 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#13355A] flex items-center justify-center shrink-0 mt-px">
                        <UploadCloud className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-bold text-[#3C9AC4] uppercase tracking-wider">Option 2</p>
                        <p className="text-sm sm:text-base font-semibold text-slate-800 mt-0.5">Import via File</p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-1.5 leading-relaxed">Download the template, fill in your product data, upload the file — all products are created automatically.</p>
                        <ul className="mt-2 space-y-1">
                            <li className="flex items-start gap-1.5 text-xs text-slate-600">
                                <CheckCircle2 className="w-3 h-3 text-[#3C9AC4] mt-0.5 shrink-0" />
                                Download the sample XLSX template
                            </li>
                            <li className="flex items-start gap-1.5 text-xs text-slate-600">
                                <CheckCircle2 className="w-3 h-3 text-[#3C9AC4] mt-0.5 shrink-0" />
                                Fill product data in the template
                            </li>
                            <li className="flex items-start gap-1.5 text-xs text-slate-600">
                                <CheckCircle2 className="w-3 h-3 text-[#3C9AC4] mt-0.5 shrink-0" />
                                Upload and confirm to process
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-xs text-slate-400 italic leading-relaxed">Both methods validate your data and sync every product to My Catalog within seconds — ready to publish on any marketplace.</p>
        </div>
    );
}



/* ─────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────── */
export function ProductListingGuide() {
    const { ref, visible } = useInView();

    return (
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3] overflow-x-hidden">
            <div className="px-5 sm:px-8 lg:px-[70px]">

                {/* Section heading */}
                <div
                    className="mb-4 sm:mb-5"
                    style={{
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(14px)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F0F6] text-[#13355A] border border-[#BDD9EE] mb-3">
                        How It Works
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 sm:mb-3">
                        Create Your <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">Product Listing</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
                        Create product listings the way that works best for your business. Add products individually by entering all the required details, or save time by bulk-importing multiple products using a spreadsheet template. Regardless of the method you choose, SellerBuz validates your data and instantly syncs every product to your My Catalog, making your listings ready for publishing and marketplace management within seconds.
                    </p>
                </div>

                {/* Main bordered container */}
                <div
                    ref={ref}
                    className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden"
                    style={{
                        transition: "opacity 0.6s ease 80ms",
                        opacity: visible ? 1 : 0,
                    }}
                >
                    {/* ── Inner layout: sidebar + SVG diagram ──── */}
                    <div className="flex flex-col lg:flex-row">

                        {/* ── Sidebar ─────────────────────────────── */}
                        <div className="w-full lg:w-[30%] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 p-5 sm:p-8">
                            <Sidebar visible={visible} />
                        </div>

                        {/* ── Diagram area ─────────────────────────── */}
                        <div className="flex-1 min-w-0 p-5 sm:p-8">
                            <ProductImportFlow className="w-full h-auto" />
                        </div>
                    </div>{/* end flex row */}
                </div>{/* end main bordered container */}

                {/* Three feature callouts */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6"
                    style={{
                        transition: "opacity 0.6s ease 500ms, transform 0.6s ease 500ms",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(10px)",
                    }}
                >
                    {[
                        { icon: Tag, title: "No Limits on Products", desc: "Add as many products as your plan allows — one at a time or thousands via bulk import." },
                        { icon: FileSpreadsheet, title: "Excel & CSV Supported", desc: "Download our sample template, fill it in, and upload. We handle the rest automatically." },
                        { icon: CheckCircle2, title: "Instant Catalog Sync", desc: "Every product appears in My Catalog within seconds, ready to push live on Amazon." },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
                            <div className="w-9 h-9 rounded-xl bg-[#E8F0F6] flex items-center justify-center shrink-0 mt-0.5">
                                <Icon className="w-5 h-5 text-[#3C9AC4]" />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-slate-900">{title}</p>
                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ProductListingGuide;