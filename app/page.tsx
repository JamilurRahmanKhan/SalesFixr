import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustShowcase } from "@/components/sections/TrustShowcase";
import { AICapabilities } from "@/components/sections/AICapabilities";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "SalesFixr — Software Built Around Your Vision",
  description:
    "SalesFixr designs and engineers custom web and mobile products, from first sketch to production launch.",
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustShowcase />
        <AICapabilities />
        <FinalCta />
      </main>
      <Footer />
      <Navbar />
    </>
  );
}
