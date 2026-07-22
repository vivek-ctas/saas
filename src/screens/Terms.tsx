"use client";
import React from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useReveal } from "@/hooks/use-reveal";
import {
    FileText,
    UserCheck,
    Cpu,
    Lock,
    Network,
    CreditCard,
    Shield,
    Copyright,
    ShieldAlert,
    AlertOctagon,
    Trash2,
    RefreshCw,
    Scale,
    Mail,
    Calendar,
    LucideIcon,
} from "lucide-react";

// Header SVG Illustration matching the reference style
const TermsIllustration = () => (
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
            d="M240 180 c-10-25-30-20-40-5 c-10 15 5 35 15 35 s20-15 25-30z"
            fill="#818CF8"
            opacity="0.3"
        />
        <path
            d="M260 140 c10-20 30-10 25 15 c-5 25-25 15-25 0z"
            fill="#C7D2FE"
            opacity="0.5"
        />
        <circle cx="98" cy="115" r="6" fill="#818CF8" opacity="0.6" />

        {/* Document shadow */}
        <rect x="54" y="24" width="180" height="210" rx="16" fill="#E2E8F0" opacity="0.5" />

        {/* Main Document Body */}
        <rect
            x="50"
            y="20"
            width="180"
            height="210"
            rx="16"
            fill="white"
            stroke="#ECEFF7"
            strokeWidth="1.5"
        />
        <rect x="58" y="28" width="164" height="194" rx="12" fill="#FAFBFD" />

        {/* Lines representing document content */}
        <rect x="76" y="52" width="70" height="8" rx="4" fill="#818CF8" opacity="0.8" />
        <rect x="76" y="72" width="128" height="5" rx="2.5" fill="#E2E8F0" />
        <rect x="76" y="88" width="120" height="5" rx="2.5" fill="#E2E8F0" />
        <rect x="76" y="104" width="128" height="5" rx="2.5" fill="#E2E8F0" />
        <rect x="76" y="120" width="100" height="5" rx="2.5" fill="#E2E8F0" />
        <rect x="76" y="136" width="115" height="5" rx="2.5" fill="#E2E8F0" />

        {/* Signature graphic */}
        <path
            d="M76 172 Q 88 165 98 174 T 115 168"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <line x1="76" y1="184" x2="135" y2="184" stroke="#CBD5E1" strokeWidth="1.5" />

        {/* Shield Check Badge in the foreground */}
        <g transform="translate(180, 130)">
            <rect
                x="0"
                y="0"
                width="66"
                height="66"
                rx="18"
                fill="#3B82F6"
                stroke="#FFFFFF"
                strokeWidth="2"
            />
            <circle cx="33" cy="33" r="16" fill="white" fillOpacity="0.2" />
            <path
                d="M25 33 l5 5 l11 -11"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

const TERMS_SECTIONS = [
    {
        id: 1,
        title: "Acceptance of Terms",
        icon: FileText,
        content:
            "Welcome to Ctasis Sellerbuz. These Terms & Conditions govern your access to and use of our marketplace management platform, website, applications, and related services.",
        bullets: [
            "By accessing or using our platform, you agree to be bound by these Terms.",
            "If you do not agree to these terms, please discontinue using our services.",
        ],
    },
    {
        id: 2,
        title: "Eligibility",
        icon: UserCheck,
        content: "To access or use Ctasis Sellerbuz, you must ensure that you meet all eligibility requirements. In particular, you must:",
        bullets: [
            "Be at least 18 years old.",
            "Have the legal authority to enter into binding agreements.",
            "Provide accurate, current, and complete registration information.",
            "Comply with all applicable local, national, and international laws, as well as third-party marketplace policies.",
        ],
    },
    {
        id: 3,
        title: "Services",
        icon: Cpu,
        content:
            "Ctasis Sellerbuz provides cloud-based software solutions for multi-marketplace Sellers. Our feature set includes:",
        bullets: [
            "Multi-marketplace product management and optimization.",
            "Real-time inventory synchronization across channels.",
            "Centralized order management and fulfillment coordination.",
            "AI-powered catalog writing, attribute extraction, and analytics.",
            "Pricing automation based on custom strategy rules.",
            "Reporting, data analytics, and operational insights.",
        ],
    },
    {
        id: 4,
        title: "User Accounts",
        icon: Lock,
        content:
            "Your account security is critical to protecting your sales channels. As an account holder, you remain responsible for:",
        bullets: [
            "Maintaining account security and protecting login credentials.",
            "Ensuring all business, contact, and billing details provided are accurate.",
            "All activities and transactions carried out under your account.",
            "Notifying support immediately if you believe your credentials have been compromised.",
        ],
    },
    {
        id: 5,
        title: "Marketplace Integrations",
        icon: Network,
        content:
            "Our platform connects and syncs with third-party store channels (including Amazon, Walmart, Shopify, eBay, Etsy, and others). Specifically, we are not responsible for:",
        bullets: [
            "Any marketplace system downtime, service outages, or API changes.",
            "Account suspensions, listings penalties, or inventory blocks imposed by search algorithms.",
            "Your compliance with each respective marketplace's developer terms and user agreements.",
        ],
    },
    {
        id: 6,
        title: "Subscription & Payments",
        icon: CreditCard,
        content:
            "Certain premium services operate on a subscription basis. Subscriptions are billed in advance and are processed through secure gateways:",
        bullets: [
            "Choose between flexible monthly plans, annual commitment pricing, or enterprise SLAs.",
            "Subscriptions auto-renew unless canceled prior to the next billing date.",
            "Subscription failure or non-clearance of dues may result in service restrictions or suspension.",
        ],
    },
    {
        id: 7,
        title: "Acceptable Use",
        icon: Shield,
        content: "When interacting with the platform, you agree to comply with legal guidelines. Prohibited actions include:",
        bullets: [
            "Using the services for any illegal or unauthorized activities.",
            "Uploading files containing software codes, viruses, or malicious scripts.",
            "Attempting unauthorized login or port vulnerability scans of our server cluster.",
            "Decompiling, copying, or reverse engineering any part of the software.",
            "Violating intellectual property rights or selling illegal inventory.",
        ],
    },
    {
        id: 8,
        title: "Intellectual Property",
        icon: Copyright,
        content:
            "All codebase, interface designs, graphics, branding identity, technical documentations, and technology are the proprietary property of Ctasis Sellerbuz (under Ctasis Info Services LLP). You may not copy, replicate, distribute, or modify any portion without express written permission.",
    },
    {
        id: 9,
        title: "Data & Security",
        icon: ShieldAlert,
        content:
            "We apply industry-standard cloud encryption standards to protect your operational catalog and API metrics. However, you acknowledge that no online transmission is completely secure. We advise users to maintain internal records and backups of crucial sales logs.",
    },
    {
        id: 10,
        title: "Limitation of Liability",
        icon: AlertOctagon,
        content:
            "To the maximum extent permitted by applicable laws, Ctasis Sellerbuz shall not be liable for losses arising from system use:",
        bullets: [
            "Lost sales profits, revenue, or business opportunities.",
            "Downtime, data loss, or server migration anomalies.",
            "Listing errors or penalties issued by third-party marketplace algorithms.",
        ],
    },
    {
        id: 11,
        title: "Termination",
        icon: Trash2,
        content:
            "We reserve the right to suspend, terminate, or restrict access to your platform subscription if we determine that you have violated these Terms, engaged in fraudulent activities, or failed to clear subscription payments.",
    },
    {
        id: 12,
        title: "Changes to Terms",
        icon: RefreshCw,
        content:
            "We reserve the right to modify these Terms periodically. We will update the 'Effective Date' to indicate revisions. Continued use of the platform after changes are posted constitutes your acceptance of the updated terms.",
    },
];

const Terms = () => {
    const containerRef = useReveal<HTMLDivElement>();

    return (
        <Layout>
            <div ref={containerRef} className="py-20">
                {/* HEADER SECTION */}
                <section className="bg-white border-t border-[#EAECF3]">
                    <div className="px-5 sm:px-8 lg:px-[70px]">
                        <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-7 text-left space-y-5">
                                <Badge className="bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200/80 px-3 py-1 rounded-full gap-1.5 text-sm font-semibold select-none">
                                    <Shield className="w-3.5 h-3.5" /> Legal
                                </Badge>
                                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                                    Terms & Conditions
                                </h1>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    These terms govern your use of Ctasis Sellerbuz. By accessing or using our platform,
                                    you agree to be bound by these legal conditions.
                                </p>
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Calendar className="w-4 h-4 text-blue-500" />
                                    <span>Last updated: July 2026</span>
                                </div>
                            </div>
                            <div className="md:col-span-5 flex justify-center">
                                <TermsIllustration />
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
                                        {TERMS_SECTIONS.map((section) => {
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

                {/* GOVERNING LAW + CONTACT CARDS */}
                <section className="bg-[#F1F3FC] border-t border-[#EAECF3]">
                    <div className="px-5 sm:px-8 lg:px-[70px] py-14 sm:py-16 lg:py-20">
                        {/* GOVERNING LAW CARD (FULL WIDTH) */}
                        <div className="reveal mb-6">
                            <Card className="border border-slate-200/60 shadow-lg shadow-slate-100/20 rounded-2xl bg-white">
                                <CardContent className="p-6 sm:p-8 flex gap-4 items-start">
                                    <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 border border-indigo-100/40">
                                        <Scale className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                                            Governing Law
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            These Terms shall be governed by and construed in accordance with the laws of India.
                                            Any disputes shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* CONTACT INFO CARD (FULL WIDTH) */}
                        <div className="reveal">
                            <Card className="border border-slate-200/60 shadow-lg shadow-slate-100/20 rounded-2xl bg-white">
                                <CardContent className="p-6 sm:p-8 flex gap-4 items-start">
                                    <div className="w-11 h-11 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                                            Questions about these terms?
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            If you have any questions regarding these Terms, please contact our legal and support team at{" "}
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

export default Terms;
