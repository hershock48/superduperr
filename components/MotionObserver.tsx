"use client";

// Scroll-reveal driver: watches for .section-head / .day-card / .pcard
// entering the viewport and tags them with .in so CSS can animate them.
// No-ops entirely when the html element lacks .motion (reduced motion,
// or JS-off builds never hide anything in the first place).

import { useEffect } from "react";

const SELECTOR = ".section-head, .day-card, .pcard";

export default function MotionObserver() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("motion")) return;

    const observed = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (!el.classList.contains("in") && !observed.has(el)) {
          observed.add(el);
          io.observe(el);
        }
      });
    };

    scan();
    // Catch elements added by client-side navigation or shop filtering
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
