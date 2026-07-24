"use client";
import React from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useReveal } from "@/hooks/use-reveal";
import {
    Shield,
    Lock,
    User,
    Eye,
    Share2,
    LockKeyhole,
    Scale,
    Cookie,
    Mail,
    Calendar,
    Database,
    Users,
    Compass,
    FileSpreadsheet,
    Blocks,
    FileText,
} from "lucide-react";

// Header SVG Illustration matching the reference style for Privacy Policy
const PrivacyIllustration = () => (
    <svg
        viewBox="0 0 320 260"
        className="w-full max-w-[320px] h-auto object-contain mx-auto"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Background glowing sphere decoration */}
        <circle cx="210" cy="130" r="100" fill="#EEF2FF" />
        <circle cx="210" cy="130" r="60" fill="#E0E7FF" opacity="0.6" />

        {/* Floating plant leaves / accent shapes */}
        <path
            d="M245 180 c-10-25-30-20-40-5 c-10 15 5 35 15 35 s20-15 25-30z"
            fill="#818CF8"
            opacity="0.3"
        />
        <path
            d="M260 140 c10-20 30-10 25 15 c-5 25-25 15-25 0z"
            fill="#C7D2FE"
            opacity="0.5"
        />
        <circle cx="100" cy="70" r="6" fill="#818CF8" opacity="0.6" />

        {/* User / Profile Info Card (Floating left back) */}
        <g transform="translate(45, 60)">
            {/* Card shadow */}
            <rect x="2" y="2" width="110" height="96" rx="14" fill="#E2E8F0" opacity="0.5" />
            {/* Card body */}
            <rect
                x="0"
                y="0"
                width="110"
                height="96"
                rx="14"
                fill="white"
                stroke="#ECEFF7"
                strokeWidth="1.2"
            />
            {/* Profile avatar outline */}
            <circle cx="55" cy="38" r="18" fill="#EEF2FF" />
            <circle cx="55" cy="34" r="7" fill="#6366F1" />
            <path d="M41 49 c0-6 6-8 14-8 s14 2 14 8z" fill="#6366F1" />

            {/* Password dots decoration at card bottom */}
            <rect x="15" y="70" width="80" height="14" rx="7" fill="#EEEEF6" />
            {/* Dots */}
            <circle cx="31" cy="77" r="2.5" fill="#6366F1" />
            <circle cx="43" cy="77" r="2.5" fill="#6366F1" />
            <circle cx="55" cy="77" r="2.5" fill="#6366F1" />
            <circle cx="67" cy="77" r="2.5" fill="#6366F1" />
            <circle cx="79" cy="77" r="2.5" fill="#6366F1" />
        </g>

        {/* Primary Shield component (Foreground right) */}
        <g transform="translate(160, 48)">
            {/* Shield backing glow */}
            <path
                d="M 45 6 C 78 6, 85 16, 85 45 C 85 85, 45 105, 45 105 C 45 105, 5 85, 5 45 C 5 16, 12 6, 45 6 Z"
                fill="#4F46E5"
                opacity="0.12"
                transform="translate(4,4)"
            />
            {/* Shield body (Darker blue matching reference) */}
            <path
                d="M 45 6 C 78 6, 85 16, 85 45 C 85 85, 45 105, 45 105 C 45 105, 5 85, 5 45 C 5 16, 12 6, 45 6 Z"
                fill="#3B82F6"
                stroke="#FFFFFF"
                strokeWidth="2.5"
            />
            {/* Inner outline */}
            <path
                d="M 45 12 C 72 12, 77 20, 77 45 C 77 78, 45 95, 45 95 C 45 95, 13 78, 13 45 C 13 20, 18 12, 45 12 Z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                opacity="0.6"
            />

            {/* Glossy Lock Shape on shield */}
            <rect x="33" y="47" width="24" height="20" rx="4" fill="white" />
            <path
                d="M 38 47 V 40 C 38 33, 52 33, 52 40 V 47"
                fill="none"
                stroke="white"
                strokeWidth="3.2"
                strokeLinecap="round"
            />
            <circle cx="45" cy="55" r="3" fill="#3B82F6" />
            <rect x="44" y="57" width="2" height="6" fill="#3B82F6" />
        </g>
    </svg>
);

const PRIVACY_SECTIONS = [
    {
        id: 1,
        title: "Information We Collect",
        icon: User,
        content: "We collect metadata and essential details during client interactions or account setup. This is divided into:",
        bullets: [
            "Personal/Billing Data: Name, email, phone number, company name, and secure checkout billing details.",
            "Business Data: Marketplace authorization tokens, store configurations, product catalogs, and inventory metrics.",
            "Technical Logs: IP addresses, browser agent, cookie identifiers, system types, and website interaction analytical data.",
        ],
    },
    {
        id: 2,
        title: "How We Use Information",
        icon: Eye,
        content: "All collected details are utilized strictly in the context of operating and improving our platform features:",
        bullets: [
            "Providing multi-channel product publishing and inventory synchronization services.",
            "Processing secure subscription clearances.",
            "Offering responsive engineering and user support.",
            "Detecting fraudulent, unauthorized, or bad-faith logins.",
            "Complying with mandatory state and federal legal obligations.",
        ],
    },
    {
        id: 3,
        title: "Data Sharing & Transfers",
        icon: Share2,
        content: "We hold a strict policy of never selling user profiles or catalog databases. Information is shared only with verified partners under contract:",
        bullets: [
            "Authorized clearing networks for subscription operations (e.g. Stripe, Razorpay).",
            "Secure hosting systems and databases (e.g. AWS).",
            "External marketplace structures (Amazon, Shopify) as authorized by your sync configs.",
        ],
    },
    {
        id: 4,
        title: "Data Security Protocols",
        icon: LockKeyhole,
        content: "We implement modern cloud safety standards to shield customer repositories:",
        bullets: [
            "End-to-end SSL/TLS data transfer encryption.",
            "At-rest database encryption for passwords and storefront keys.",
            "Access control policies limited strictly to essential operational personnel.",
            "Continuous server audit scans to trace anomalies or injection attacks.",
        ],
    },
    {
        id: 5,
        title: "Your Privacy Rights",
        icon: Scale,
        content: "Depending on your legal location (such as GDPR or regional states), you retain full rights regarding your data. You may submit requests to:",
        bullets: [
            "Access or request copies of all stored catalog and transaction metadata.",
            "Request corrections to outdated registration data.",
            "Trigger permanent erasure of accounts and associated records.",
            "Export structured catalog files or object states.",
            "Revoke authorization consents at any time.",
        ],
    },
    {
        id: 6,
        title: "Cookies & Analytics",
        icon: Cookie,
        content: "We use lightweight cookie tags and storage configurations on our dashboard and website to:",
        bullets: [
            "Maintain active session login statuses.",
            "Identify client preference choices such as dark modes or filtering defaults.",
            "Inspect website traffic metrics to refine page and feature rendering speeds.",
        ],
    },
    {
        id: 7,
        title: "Data Retention Guidelines",
        icon: Database,
        content: "We retain account metrics only as long as necessary to maintain active subscriptions, comply with regulatory financial record storage rules, solve database disputes, or validate compliance clauses.",
    },
    {
        id: 8,
        title: "Children's Privacy Protection",
        icon: Users,
        content: "Our services, utilities, and marketing portals are tailored exclusively for legal commercial businesses. We do not knowingly compile records on minors or kids under 18.",
    },
];

const Privacy = () => {
    const containerRef = useReveal<HTMLDivElement>();

    return (
        <Layout>
            <div ref={containerRef} className="py-20">
                {/* HEADER SECTION */}
                <section className="bg-white border-t border-[#EAECF3]">
                    <div className="px-5 sm:px-8 lg:px-[70px]">
                        <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-7 text-left space-y-5">
                                <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200/80 px-3 py-1 rounded-full gap-1.5 text-sm font-semibold select-none">
                                    <Lock className="w-3.5 h-3.5" /> Privacy
                                </Badge>
                                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                                    Privacy Policy
                                </h1>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    We value your privacy and are committed to protecting your personal data. Read through
                                    our policy to understand collection rules and client parameters.
                                </p>
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Calendar className="w-4 h-4 text-blue-500" />
                                    <span>Last updated: July 2026</span>
                                </div>
                            </div>
                            <div className="md:col-span-5 flex justify-center">
                                <PrivacyIllustration />
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAIN CARD GRID */}
                <section className="bg-[#F7F9FC] border-t border-[#EAECF3]">
                    <div className="px-5 sm:px-8 lg:px-[70px] py-14 sm:py-16 lg:py-20">
                        <div className="reveal">
                            <Card className="border border-slate-200/60 shadow-xl shadow-slate-100/50 rounded-3xl overflow-hidden bg-white">
                                <CardContent className="p-8 lg:p-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                        {PRIVACY_SECTIONS.map((section) => {
                                            const IconComp = section.icon;
                                            return (
                                                <div key={section.id} className="flex gap-4 items-start">
                                                    {/* Icon Badge */}
                                                    <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100/40">
                                                        <IconComp className="w-5 h-5" />
                                                    </div>

                                                    {/* Content text */}
                                                    <div className="space-y-2">
                                                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                                                            {section.id}. {section.title}
                                                        </h3>
                                                        <p className="text-slate-600 leading-relaxed text-sm">
                                                            {section.content}
                                                        </p>
                                                        {section.bullets && (
                                                            <ul className="space-y-1.5 pt-1.5">
                                                                {section.bullets.map((bullet, index) => (
                                                                    <li key={index} className="flex items-start text-xs text-slate-500 leading-relaxed">
                                                                        <span className="text-blue-500 mr-2 mt-0.5 select-none font-semibold">•</span>
                                                                        <span>{bullet}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* THIRD PARTY + CONTACT CARDS */}
                <section className="bg-[#F1F3FC] border-t border-[#EAECF3]">
                    <div className="px-5 sm:px-8 lg:px-[70px] py-14 sm:py-16 lg:py-20">
                        {/* THIRD PARTY INTEGRATIONS (FULL WIDTH) */}
                        <div className="reveal mb-6">
                            <Card className="border border-slate-200/60 shadow-lg shadow-slate-100/20 rounded-2xl bg-white">
                                <CardContent className="p-6 sm:p-8 flex gap-4 items-start">
                                    <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 border border-indigo-100/40">
                                        <Blocks className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                                            Third-Party Services & Integrations
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            Our platform syncs and routes payload details with external third-party software
                                            eCommerce channels, including **Amazon, Shopify, Stripe, and Razorpay**.
                                            Usage of records by these channels is governed strictly by their respective corporate privacy terms.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* QUESTIONS / PRIVACY OFFICER CARD (FULL WIDTH) */}
                        <div className="reveal">
                            <Card className="border border-slate-200/60 shadow-lg shadow-slate-100/20 rounded-2xl bg-white">
                                <CardContent className="p-6 sm:p-8 flex gap-4 items-start">
                                    <div className="w-11 h-11 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                                            Questions about your privacy?
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            SellerBuz maintains a dedicated data officer. For requests, accounts terminations, or inquiries
                                            reach out to us directly at{" "}
                                            <a href="mailto:info@ctasis.com" className="text-blue-600 hover:text-blue-700 underline font-medium">
                                                info@ctasis.com
                                            </a>{" "}
                                            or visit{" "}
                                            <a href="https://ctasis.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">
                                                CTAS Info Services LLP
                                            </a>.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Privacy;
