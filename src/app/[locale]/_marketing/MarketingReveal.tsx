"use client";

import { useEffect } from "react";

export function MarketingReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.classList.add("is-visible");
      });
      // Snap counters straight to final value, skip spotlight + parallax.
      document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
        const target = el.dataset.counter;
        if (target) el.textContent = target;
      });
      return;
    }

    // Reveal on scroll — also kicks off the counter animation when the
    // counter's card first becomes visible.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          el.querySelectorAll<HTMLElement>("[data-counter]").forEach(runCounter);
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el));

    // Hero card counters run on mount — the card is above the fold and
    // its own mtb-card-in animation handles entry, so we don't gate on
    // IntersectionObserver here (which would conflict with the existing
    // opacity/transform choreography on .hero-card).
    document
      .querySelectorAll<HTMLElement>(".hero-card [data-counter]")
      .forEach(runCounter);

    // Hero card 3D mouse tilt — cursor position relative to card center
    // drives rotateX / rotateY via CSS vars. Stays at 0deg on touch
    // devices (no pointermove). Max 5–7deg for a subtle Apple-card feel.
    const heroCard = document.querySelector<HTMLElement>(".hero-card");
    let tiltCleanup: (() => void) | undefined;
    if (heroCard) {
      const onCardMove = (event: PointerEvent) => {
        const rect = heroCard.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        heroCard.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
        heroCard.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
      };
      const onCardLeave = () => {
        heroCard.style.setProperty("--tilt-x", "0deg");
        heroCard.style.setProperty("--tilt-y", "0deg");
      };
      heroCard.addEventListener("pointermove", onCardMove);
      heroCard.addEventListener("pointerleave", onCardLeave);
      tiltCleanup = () => {
        heroCard.removeEventListener("pointermove", onCardMove);
        heroCard.removeEventListener("pointerleave", onCardLeave);
      };
    }

    // Cursor spotlight — sets --mx/--my (in element-relative pixels) on
    // each [data-spotlight] section. CSS paints a soft radial highlight
    // that follows the pointer. Uses pointer events so trackpad / pen
    // also work; passive-listener for scroll perf.
    const spotlights = Array.from(document.querySelectorAll<HTMLElement>("[data-spotlight]"));
    const onPointerMove = (event: PointerEvent) => {
      for (const section of spotlights) {
        const rect = section.getBoundingClientRect();
        const inside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        if (!inside) continue;
        section.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        section.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Decorative parallax — orbs drift up to ±30px based on viewport
    // scroll progress through their parent section. rAF-coalesced so we
    // never run more than one update per frame.
    const orbs = Array.from(document.querySelectorAll<HTMLElement>(".prod-bg-orb"));
    let parallaxFrame = 0;
    const updateParallax = () => {
      parallaxFrame = 0;
      const vh = window.innerHeight;
      for (const orb of orbs) {
        const section = orb.closest<HTMLElement>(".prod-section");
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        // 0 when section just enters from bottom, 1 when it just exited top.
        const progress = 1 - (rect.top + rect.height / 2) / (vh + rect.height / 2);
        const clamped = Math.max(0, Math.min(1, progress));
        const offset = (clamped - 0.5) * 60; // -30..30
        orb.style.setProperty("--py", `${offset.toFixed(1)}px`);
      }
    };
    const onScroll = () => {
      if (parallaxFrame) return;
      parallaxFrame = requestAnimationFrame(updateParallax);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();

    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (parallaxFrame) cancelAnimationFrame(parallaxFrame);
      tiltCleanup?.();
    };
  }, []);

  return null;
}

// Eased count-up from 0 → target. Ignores already-counted nodes so
// re-observe of a parent container won't restart in-flight animations.
// Per-element overrides via data-counter-delay and data-counter-duration
// (both in ms) let the hero card sync its counters with the ring-fill
// and axis fade-in stagger.
function runCounter(el: HTMLElement) {
  if (el.dataset.counterDone === "1") return;
  const target = Number(el.dataset.counter);
  if (!Number.isFinite(target) || target <= 0) return;
  el.dataset.counterDone = "1";

  const delay = Number(el.dataset.counterDelay) || 0;
  const duration = Number(el.dataset.counterDuration) || 1100;
  const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic

  el.textContent = "0";
  const begin = () => {
    el.classList.add("is-counting");
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const value = Math.round(target * ease(t));
      el.textContent = String(value);
      if (t < 1) requestAnimationFrame(step);
      else el.classList.add("is-counted");
    };
    requestAnimationFrame(step);
  };
  if (delay > 0) setTimeout(begin, delay);
  else requestAnimationFrame(begin);
}
