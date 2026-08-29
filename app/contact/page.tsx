import type { Metadata } from "next";
import { SoftwarePortfolioShell } from "../software-portfolio/software-portfolio-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "CompassNCrew — Get in touch.",
};

export default function ContactPage() {
  return <SoftwarePortfolioShell mode="preview" page="contact" />;
}
