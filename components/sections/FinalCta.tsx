"use client";

import { useEffect, useRef } from "react";
import { CtaButton } from "@/components/ui/Button";

export function FinalCta() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const source = video.querySelector<HTMLSourceElement>("source[data-src]");

    const loadAndPlay = () => {
      if (source?.dataset.src) {
        source.src = source.dataset.src;
        delete source.dataset.src;
        video.load();
      }
      video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadAndPlay();
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="movement dark-section" id="movement">
      <div className="movement-art" aria-hidden="true">
        <video className="movement-clock-video" muted loop playsInline preload="none" ref={videoRef}>
          <source data-src="/videos/clock.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container movement-copy">
        <h2>
          Let&rsquo;s Build
          <br />
          Something
        </h2>
        <p>
          Turn your idea into shipped software.
          <br />
          Every great product starts with a single conversation.
        </p>
        <div className="movement-actions">
          <CtaButton href="/contact">Book a Demo</CtaButton>
        </div>
      </div>
    </section>
  );
}
