"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const FEATURES = [
  { icon: "github-sync", title: ["Custom", "development"], body: "Tailored web and mobile apps built around your exact requirements." },
  { icon: "github-private", title: ["Secure", "by design"], body: "Best-practice security built into every layer of the stack." },
  { icon: "github-repositories", title: ["Scalable", "architecture"], body: "Systems engineered to grow from first users to millions." },
  { icon: "github-milestone", title: ["Agile", "delivery"], body: "Iterative sprints with visible progress at every milestone." },
  { icon: "github-progress", title: ["Performance", "tuning"], body: "Faster load times and leaner code for a smoother experience." },
  { icon: "github-filtering", title: ["Quality", "assurance"], body: "Rigorous testing and code review before every release." },
];

export function PortfolioTeaser() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lazy-load and autoplay the glow video once it scrolls into view.
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
    <section className="github-section dark-section section-pad" id="github">
      <div className="container narrow">
        <div className="section-intro inverse reveal">
          <h2>
            Explore the
            <br />
            portfolio.
          </h2>
          <p>A closer look at recent product design and engineering work.</p>
        </div>

        <button
          type="button"
          className="github-stage reveal"
          id="enter-journey"
          aria-label="Enter the interactive 3D portfolio journey"
          onClick={() => router.push("/software-portfolio")}
        >
          <video className="github-glow-video" muted loop playsInline preload="none" aria-hidden="true" ref={videoRef}>
            <source data-src="/videos/github-glow.mp4" type="video/mp4" />
          </video>
          <Image
            className="github-live-preview is-live"
            src="/images/game-preview.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 700px) 100vw, 900px"
            priority
          />
          <span className="enter-journey-cta">
            <i aria-hidden="true">▶</i>Enter the journey
          </span>
        </button>

        <div className="github-features reveal">
          {FEATURES.map((feature) => (
            <article key={feature.icon}>
              <Image src={`/images/${feature.icon}.svg`} alt="" width={40} height={40} style={{ width: "auto" }} />
              <h3>
                {feature.title[0]}
                <br />
                {feature.title[1]}
              </h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
