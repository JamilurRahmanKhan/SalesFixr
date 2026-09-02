"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { RaycastDemo } from "./RaycastDemo";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const cursorStageRef = useRef<HTMLDivElement>(null);
  const heroCtaRef = useRef<HTMLAnchorElement>(null);
  const heroProductRef = useRef<HTMLDivElement>(null);
  const touchTomorrowMarginTargetRef = useRef<HTMLElement | null>(null);

  // Cursor-following radial reveal on the hero's before/after art layer.
  useEffect(() => {
    const hero = heroRef.current;
    const cursorStage = cursorStageRef.current;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hero || !cursorStage || !hasFinePointer || prefersReducedMotion) return;

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paint = () => {
      frame = 0;
      const rect = cursorStage.getBoundingClientRect();
      cursorStage.style.setProperty("--hero-mask-x", `${pointerX - rect.left}px`);
      cursorStage.style.setProperty("--hero-mask-y", `${pointerY - rect.top}px`);
    };

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursorStage.dataset.active = "true";
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      cursorStage.dataset.active = "false";
    };

    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Keep the raycast product mockup pinned under the CTA and give the next
  // section room, since both are sized fluidly with the viewport.
  useEffect(() => {
    const hero = heroRef.current;
    const heroCta = heroCtaRef.current;
    const heroProduct = heroProductRef.current;
    const touchTomorrow = document.querySelector<HTMLElement>(".touch-tomorrow");
    touchTomorrowMarginTargetRef.current = touchTomorrow;
    if (!hero || !heroProduct || !touchTomorrow) return;

    const GAP = 40;
    const CTA_GAP = 32;

    const syncGap = () => {
      heroProduct.style.top = "";
      touchTomorrow.style.marginTop = "0px";
      const heroRect = hero.getBoundingClientRect();
      if (heroCta) {
        const ctaBottomRel = heroCta.getBoundingClientRect().bottom - heroRect.top;
        heroProduct.style.top = `${ctaBottomRel + CTA_GAP}px`;
      }
      const productBottom = heroProduct.getBoundingClientRect().bottom;
      const overflow = productBottom - heroRect.bottom;
      touchTomorrow.style.marginTop = `${overflow > 0 ? overflow + GAP : GAP}px`;
    };

    syncGap();
    window.addEventListener("resize", syncGap);
    window.addEventListener("load", syncGap);
    return () => {
      window.removeEventListener("resize", syncGap);
      window.removeEventListener("load", syncGap);
    };
  }, []);

  return (
    <section className="hero dark-section" id="hero" ref={heroRef}>
      <div className="hero-top-smoke" aria-hidden="true">
        <i /><i /><i /><i />
      </div>
      <div className="hero-aurora" aria-hidden="true">
        <i /><i /><i /><i className="hero-ember" />
      </div>
      <div className="hero-beam-fall" aria-hidden="true">
        <i /><i />
      </div>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="heroGrain">
          <feTurbulence type="fractalNoise" baseFrequency={0.85} numOctaves={2} stitchTiles="stitch" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0" />
        </filter>
      </svg>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-motion-layer" data-hero-motion aria-hidden="true">
        <div
          className="hero-cursor-stage"
          data-hero-cursor
          ref={cursorStageRef}
          style={{ "--hero-mask-x": "50%", "--hero-mask-y": "42%" } as CSSProperties}
        >
          <div className="hero-cursor-reveal">
            <Image src="/images/hero-reveal-grid.svg" alt="" fill sizes="90vw" priority />
            <Image src="/images/hero-reveal-ui.svg" alt="" fill sizes="90vw" priority />
          </div>
        </div>
      </div>
      <div className="hero-copy">
        <h1>
          Software Built
          <br />
          Around Your Vision
        </h1>
        <p className="hero-lede">
          SalesFixr designs and engineers custom web and mobile products, from first sketch to
          production launch.
        </p>
        <a className="cta-button hero-cta" href="#touch-tomorrow" ref={heroCtaRef}>
          <span>See in Action</span>
          <b aria-hidden="true">→</b>
        </a>
      </div>
      <div className="hero-product" ref={heroProductRef}>
        <div className="product-glow" aria-hidden="true" />
        <RaycastDemo />
      </div>
    </section>
  );
}
