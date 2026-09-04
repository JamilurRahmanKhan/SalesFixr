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
  {
    visual: "built-visual-a",
    title: "Custom CRM for a B2B Sales Team",
    desc: "Replaced three disconnected spreadsheets with one pipeline view synced straight to their inbox and calendar.",
    stats: [
      { value: "+42%", label: "Deals Closed" },
      { value: "-5hrs", label: "Admin / Week" },
      { value: "1", label: "Source of Truth" },
    ],
  },
  {
    visual: "built-visual-b",
    title: "Headless Storefront for a DTC Brand",
    desc: "Rebuilt a sluggish storefront on a headless stack, cutting load times and unlocking checkout customization the old platform blocked.",
    stats: [
      { value: "-58%", label: "Page Load Time" },
      { value: "+21%", label: "Checkout Rate" },
      { value: "99.9%", label: "Uptime" },
    ],
  },
  {
    visual: "built-visual-c",
    title: "Real-Time Dashboard for a Logistics Fleet",
    desc: "Live GPS, delivery status, and driver load in one screen instead of five separate tools dispatch had to check by hand.",
    stats: [
      { value: "3x", label: "Faster Dispatch" },
      { value: "-30%", label: "Missed ETAs" },
      { value: "50+", label: "Vehicles Tracked" },
    ],
  },
  {
    visual: "built-visual-a",
    title: "Booking System for a Multi-Clinic Practice",
    desc: "Patients book, reschedule, and get reminders automatically, across every location, without front-desk phone tag.",
    stats: [
      { value: "-70%", label: "No-Shows" },
      { value: "+3hrs", label: "Staff Time / Day" },
      { value: "4", label: "Clinics Live" },
    ],
  },
  {
    visual: "built-visual-b",
    title: "Multi-Vendor Marketplace Launch",
    desc: "Vendor onboarding, payouts, and order routing built from scratch so the founder could focus on recruiting sellers, not code.",
    stats: [
      { value: "120+", label: "Vendors Onboarded" },
      { value: "+65%", label: "GMV in 6mo" },
      { value: "2wk", label: "Vendor Onboarding" },
    ],
  },
  {
    visual: "built-visual-c",
    title: "Coaching App for a Fitness Platform",
    desc: "A native mobile app that syncs workout plans, progress photos, and coach messaging in real time across iOS and Android.",
    stats: [
      { value: "+90%", label: "Weekly Active Users" },
      { value: "4.8★", label: "App Store Rating" },
      { value: "2", label: "Platforms Shipped" },
    ],
  },
  {
    visual: "built-visual-a",
    title: "Document AI Pipeline for a Legal Firm",
    desc: "OCR and LLM-based extraction turns stacks of contracts into searchable, structured data in minutes instead of associate hours.",
    stats: [
      { value: "-85%", label: "Review Time" },
      { value: "10k+", label: "Docs Processed" },
      { value: "99%", label: "Extraction Accuracy" },
    ],
  },
  {
    visual: "built-visual-b",
    title: "Cloud Migration for a Growing Fintech",
    desc: "Moved a monolith off aging on-prem servers to a scalable cloud architecture with zero downtime during cutover.",
    stats: [
      { value: "0min", label: "Downtime" },
      { value: "-40%", label: "Infra Cost" },
      { value: "5x", label: "Traffic Headroom" },
    ],
  },
];

export function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const show = (next: number) => setIndex((next + SLIDES.length) % SLIDES.length);

  return (
    <section className="built-section" id="what-we-built">
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
