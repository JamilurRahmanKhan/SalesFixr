"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const SLIDES = [
  {
    visual: "built-visual-a",
    title: "AI Support Chatbot for E-commerce Brands",
    desc: "An intelligent assistant that answers product questions, tracks orders, and recovers abandoned carts around the clock.",
    stats: [
      { value: "3x", label: "Response Speed" },
      { value: "+35%", label: "Conversion" },
      { value: "24/7", label: "Support" },
    ],
  },
  {
    visual: "built-visual-b",
    title: "Workflow Automation for a Growing SaaS Team",
    desc: "We mapped every manual handoff and replaced it with automated triggers across the stack.",
    stats: [
      { value: "+40%", label: "Demo Bookings" },
      { value: "+25%", label: "Closing Rate" },
      { value: "3x", label: "Output" },
    ],
  },
  {
    visual: "built-visual-c",
    title: "Internal Tooling for a Creative Studio",
    desc: "A custom dashboard that keeps project timelines, assets, and approvals in one place.",
    stats: [
      { value: "+38%", label: "Faster Delivery" },
      { value: "-62%", label: "Admin Work" },
      { value: "4x", label: "Productivity" },
    ],
  },
];

export function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const show = (next: number) => setIndex((next + SLIDES.length) % SLIDES.length);

  return (
    <section className="built-section">
      <h1 className="built-heading">What We&rsquo;ve Built</h1>

      <div className="built-carousel">
        <button className="built-nav built-nav-prev" type="button" aria-label="Previous project" onClick={() => show(index - 1)}>
          <MaterialIcon name="chevron_left" />
        </button>

        <div className="built-card-halo" aria-hidden="true" />
        <div className="built-card">
          {SLIDES.map((slide, i) => (
            <article className={`built-slide${i === index ? " is-active" : ""}`} key={slide.title}>
              <div className={`built-visual ${slide.visual}`} aria-hidden="true" />
              <div className="built-content">
                <div className="built-logo">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2 13.8 9.2 21 12l-7.2 1.8L12 22l-1.8-8.2L3 12l7.2-1.8L12 2Z" fill="#111" />
                  </svg>
                  <span>SALESFIXR</span>
                </div>
                <h2 className="built-title">{slide.title}</h2>
                <p className="built-desc">{slide.desc}</p>
                <a className="built-readmore" href="#">
                  Read More <MaterialIcon name="chevron_right" />
                </a>
                <div className="built-stats">
                  {slide.stats.map((stat) => (
                    <div className="built-stat" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="built-nav built-nav-next" type="button" aria-label="Next project" onClick={() => show(index + 1)}>
          <MaterialIcon name="chevron_right" />
        </button>
      </div>
    </section>
  );
}
