import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SalesFixr — Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <PageHero
          heading={
            <>
              Privacy
              <br />
              <span className="abt-dim">Policy.</span>
            </>
          }
          sub="Last updated: August 31, 2026"
          noPaddingBottom
        />

        <section className="legal-section">
          <div className="legal-prose">
            <p>
              SalesFixr (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy
              explains what information we collect through this website, how we use it, and the choices you have.
            </p>

            <h2>Information we collect</h2>
            <p>
              When you submit our contact form, we collect the information you provide: your name, email address,
              company name (optional), and message. We do not require you to create an account or provide payment
              information to use this site.
            </p>

            <h2>How we use your information</h2>
            <p>
              We use the information you submit solely to respond to your inquiry and discuss potential work with
              you. We do not sell, rent, or share your personal information with third parties for marketing
              purposes.
            </p>

            <h2>Where your data is stored</h2>
            <p>
              Contact form submissions are sent directly from your browser to a Google Sheets spreadsheet via Google
              Apps Script, so we can review and respond to inquiries. Access to that spreadsheet is restricted to
              our team. Google&rsquo;s own privacy policy governs how Google processes and secures this data in
              transit and at rest.
            </p>

            <h2>Cookies &amp; analytics</h2>
            <p>
              This site does not use advertising or tracking cookies. We may use basic, privacy-respecting analytics
              to understand overall site traffic; any such data is aggregated and not used to identify you
              personally.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain contact form submissions only as long as needed to respond to your inquiry and maintain a
              reasonable business record, unless you ask us to delete it sooner.
            </p>

            <h2>Your rights</h2>
            <p>
              You may ask us to access, correct, or delete any personal information you&rsquo;ve submitted to us at
              any time by emailing us at the address below.
            </p>

            <h2>Changes to this policy</h2>
            <p>We may update this policy occasionally. Material changes will be reflected by updating the date at the top of this page.</p>

            <h2>Contact us</h2>
            <p>
              Questions about this policy? Email <a href="mailto:hello@compassncrew.com">hello@compassncrew.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <Navbar />
    </>
  );
}
