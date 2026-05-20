"use client";
import { useEffect, useRef } from "react";

/**
 * Lightweight scroll-reveal: adds `is-visible` class when element enters viewport.
 * Pair with the `.reveal` utility in index.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    el.querySelectorAll<HTMLElement>(".reveal").forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  return ref;
}
