"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronsUp } from "lucide-react";
import { ChatbotWidget } from "./chatbotWidget";

// ─── WhatsApp config ────────────────────────────────────────────────────────
const WA_PHONE = "917948993409"; // country code + number, no spaces/symbols
const WA_MESSAGE = encodeURIComponent(
    "Hi! I'm interested in SellerBuz. Can you help me get started?"
);
const WA_URL = `https://wa.me/${WA_PHONE}?text=${WA_MESSAGE}`;

// ─── WhatsApp SVG icon ───────────────────────────────────────────────────────
function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M20.52 3.449A11.9 11.9 0 0 0 12.02 0C5.432 0 .054 5.373.05 11.963a11.93 11.93 0 0 0 1.598 5.985L0 24l6.226-1.635a11.944 11.944 0 0 0 5.79 1.477h.005C18.607 23.842 24 18.469 24 11.878a11.9 11.9 0 0 0-3.48-8.429ZM12.02 21.785a9.914 9.914 0 0 1-5.056-1.383l-.363-.215-3.695.969.986-3.603-.237-.37a9.899 9.899 0 0 1-1.516-5.22C2.143 6.49 6.577 2.06 12.025 2.06a9.854 9.854 0 0 1 6.998 2.9 9.857 9.857 0 0 1 2.889 6.997c-.003 5.451-4.437 9.829-9.892 9.829Zm5.42-7.368c-.298-.149-1.763-.87-2.036-.968-.274-.1-.473-.149-.673.149-.198.297-.772.968-.947 1.167-.174.198-.348.223-.647.074-.298-.149-1.258-.463-2.397-1.48-.885-.79-1.484-1.765-1.657-2.063-.174-.298-.018-.459.13-.607.133-.133.298-.348.447-.522.147-.174.197-.298.297-.497.098-.198.049-.372-.025-.521-.074-.149-.672-1.62-.922-2.219-.242-.582-.487-.502-.672-.511l-.573-.01a1.1 1.1 0 0 0-.797.372c-.274.298-1.045 1.02-1.045 2.487s1.07 2.884 1.22 3.083c.149.198 2.108 3.22 5.108 4.512.714.308 1.272.492 1.707.63.717.228 1.37.196 1.887.119.575-.086 1.763-.72 2.013-1.415.248-.697.248-1.294.174-1.418-.075-.124-.273-.198-.572-.347Z" />
        </svg>
    );
}

// ─── Main widget ─────────────────────────────────────────────────────────────
export function FloatingWidgets() {
    const [showTop, setShowTop] = useState(false);
    const [animate, setAnimate] = useState(false);
    const prevShow = useRef(false);

    useEffect(() => {
        const onScroll = () => {
            const visible = window.scrollY > 400;
            setShowTop(visible);

            if (visible && !prevShow.current) {
                setAnimate(true);
            }
            prevShow.current = visible;
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (<div>
        <ChatbotWidget />
        <div className="fixed bottom-24 right-5 sm:right-6 z-40 flex flex-col items-center gap-3">
            {/* ── Scroll-to-top ── */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
                className={`group flex h-12 w-12 items-center justify-center rounded-full
          bg-primary text-white
          shadow-[0_10px_30px_rgba(19,53,90,0.35)]
          transition-all duration-300 ease-out
          hover:shadow-[0_15px_40px_rgba(19,53,90,0.45)]
          active:scale-95
          ${showTop
                        ? "pointer-events-auto opacity-100 translate-y-0" +
                        (animate ? " animate-bounce-in" : "")
                        : "pointer-events-none opacity-0 translate-y-4"
                    }`}
            >
                <ChevronsUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
        </div>
        <div className="fixed bottom-6 left-5 sm:left-6 z-50 flex flex-col items-center gap-3">
            {/* ── WhatsApp button ── */}
            <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                id="whatsapp-floating-btn"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full
          bg-[#25D366] text-white
          shadow-[0_10px_30px_rgba(37,211,102,0.45)]
          transition-all duration-300 ease-out
          hover:bg-[#20c05c]
          hover:shadow-[0_16px_40px_rgba(37,211,102,0.55)]
          hover:scale-110
          active:scale-95"
            >
                {/* Pulse ring */}
                <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"
                />
                <WhatsAppIcon className="relative h-7 w-7 drop-shadow-sm" />

                {/* Tooltip */}
                <span
                    className="pointer-events-none absolute right-16 whitespace-nowrap
            rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white
            opacity-0 shadow-lg transition-opacity duration-200
            group-hover:opacity-100"
                >
                    Chat on WhatsApp
                    {/* Arrow */}
                    <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
                </span>
            </a>
        </div ></div>
    );
}
