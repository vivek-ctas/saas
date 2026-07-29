"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronsUp } from "lucide-react";

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

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className={`group fixed bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full
        bg-primary
        text-white
        shadow-[0_10px_30px_rgba(19,53,90,0.35)]
        transition-shadow duration-300 ease-out
        hover:shadow-[0_15px_40px_rgba(19,53,90,0.45)]
        active:scale-95
        ${showTop
                    ? "pointer-events-auto opacity-100" + (animate ? " animate-bounce-in" : "")
                    : "pointer-events-none opacity-0 scale-90"
                }`}
        >
            <ChevronsUp className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
    );
}
