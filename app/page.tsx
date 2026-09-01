import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustShowcase } from "@/components/sections/TrustShowcase";
import { PortfolioTeaser } from "@/components/sections/PortfolioTeaser";
import { AICapabilities } from "@/components/sections/AICapabilities";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "CompassNCrew — Software Built Around Your Vision",
  description:
    "CompassNCrew designs and engineers custom web and mobile products, from first sketch to production launch.",
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <Hero />
        <TrustShowcase />
        <PortfolioTeaser />
        <AICapabilities />
        <FinalCta />
      </main>
      <Footer />
      <Navbar />
    </>
  );
}
