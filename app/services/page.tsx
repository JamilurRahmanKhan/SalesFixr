import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectCarousel } from "@/components/sections/ProjectCarousel";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ServicesBottomRow } from "@/components/sections/ServicesBottomRow";
import { HowWeWork } from "@/components/sections/HowWeWork";

export const metadata: Metadata = {
  title: "Services",
  description: "CompassNCrew services.",
};

export default function ServicesPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <ProjectCarousel />

        <section className="svc3">
          <header className="svc3-hero">
            <span className="aidr-eyebrow">
              003 <i /> CAPABILITIES
            </span>
            <h2 className="aidr-heading">Our Services</h2>
            <p className="svc3-sub">
              End-to-end software development and intelligent technology solutions to help your business build
              better, move faster, and scale confidently.
            </p>
          </header>

          <ServicesGrid />
          <ServicesBottomRow />
        </section>

        <HowWeWork />
      </main>
      <Footer />
      <Navbar />
    </>
  );
}
