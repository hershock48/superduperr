"use client";

// Scroll-reveal driver: watches for .section-head / .day-card / .pcard
// entering the viewport and tags them with .in so CSS can animate them.
// No-ops entirely when the html element lacks .motion (reduced motion,
// or JS-off builds never hide anything in the first place).

import { useEffect } from "react";

const SELECTOR = ".section-head, .day-card, .pcard, .stars, .small-co";

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

    // Scroll-linked fill for the freshness-timeline day pills: as the
    // timeline moves through the viewport, each pill fills with yellow
    // left to right, Tuesday through Friday-ish, like a progress bar.
    let raf = 0;
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
    const updateFill = () => {
      raf = 0;
      const vh = window.innerHeight;

      const timeline = document.querySelector(".timeline");
      if (timeline) {
        const r = timeline.getBoundingClientRect();
        // 0 when the timeline is ~10% into the viewport; 1 when its bottom
        // rises to ~30% of the viewport height — so the week fills gradually
        // across most of the section's scroll travel.
        const p = clamp01((vh - r.top - vh * 0.1) / (r.height + vh * 0.6));
        const pills = timeline.querySelectorAll<HTMLElement>(".day");
        const n = pills.length || 1;
        pills.forEach((pill, i) => {
          const local = clamp01(p * n - i);
          pill.style.setProperty("--fill", `${(local * 100).toFixed(1)}%`);
        });
      }

      // "run out." drifts right and out of the clubs banner as it rises
      // past the middle of the viewport.
      const runout = document.querySelector<HTMLElement>(".run-out");
      if (runout) {
        const host = runout.closest(".banner") ?? runout;
        const r = host.getBoundingClientRect();
        const p = clamp01((vh * 0.55 - r.top) / (vh * 0.5));
        runout.style.setProperty("--runout", p.toFixed(3));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(updateFill);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateFill();

    return () => {
      mo.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
