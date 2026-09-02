import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description: "SalesFixr — Get in touch. Tell us about your project.",
};

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <PageHero
          heading={
            <>
              Let&rsquo;s build
              <br />
              <span className="abt-dim">something worth</span>
              <br />
              <span className="abt-dim">shipping.</span>
            </>
          }
          sub="Tell us a bit about your project — we usually reply within one business day."
          mono
          noPaddingBottom
        />

        <section className="ctc-section">
          <ContactForm />
          <ContactInfo />
        </section>
      </main>
      <Footer />
      <Navbar />
    </>
  );
}
