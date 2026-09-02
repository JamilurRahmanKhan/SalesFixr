import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Benefits } from "@/components/sections/Benefits";
import { Integrations } from "@/components/sections/Integrations";
import { ProcessRail } from "@/components/sections/ProcessRail";
import { Testimonial } from "@/components/sections/Testimonial";
import { Faq } from "@/components/sections/Faq";
import { TeamGrid } from "@/components/sections/TeamGrid";

export const metadata: Metadata = {
  title: "About",
  description: "SalesFixr — About us. Software design and engineering, built with intent.",
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <PageHero
          heading={
            <>
              Thoughtful software
              <br />
              <span className="abt-dim">and systems for growing</span>
              <br />
              <span className="abt-dim">teams. Built with intent.</span>
            </>
          }
          sub="We design and engineer custom software that helps businesses move faster — from first sketch to shipped product."
          cta={{ label: "Book a Demo", href: "/contact" }}
          trailingRule
        />

        <WhatWeDo />
        <div className="abt-rule" aria-hidden="true" />
        <Benefits />
        <div className="abt-rule" aria-hidden="true" />
        <Integrations />
        <div className="abt-rule" aria-hidden="true" />
        <ProcessRail />
        <div className="abt-rule" aria-hidden="true" />
        <Testimonial />
        <div className="abt-rule" aria-hidden="true" />
        <Faq />
        <div className="abt-rule" aria-hidden="true" />
        <TeamGrid />

        <section className="abt-final-cta">
          <h2>Ready to get started?</h2>
          <p>Just drop us a line today — it&rsquo;s the fastest, easiest way to begin.</p>
          <Link className="abt-hero-cta" href="/contact">
            Book a Demo
          </Link>
        </section>
      </main>
      <Footer />
      <Navbar />
    </>
  );
}
