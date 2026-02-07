"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Small delay to ensure DOM is fully rendered after client navigation
    const timeout = setTimeout(() => {
      const els = document.querySelectorAll(".reveal:not(.visible)");
      if (!els.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const siblings =
                entry.target.parentElement?.querySelectorAll(".reveal");
              if (siblings) {
                const idx = Array.from(siblings).indexOf(
                  entry.target as Element
                );
                (entry.target as HTMLElement).style.transitionDelay = `${
                  idx * 80
                }ms`;
              }
              entry.target.classList.add("visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
      );

      els.forEach((el) => observer!.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
