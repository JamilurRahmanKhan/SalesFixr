import type { Metadata } from "next";
import { SoftwarePortfolioShell } from "../software-portfolio/software-portfolio-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SalesFixr — Privacy Policy.",
};

export default function PrivacyPage() {
  return <SoftwarePortfolioShell mode="preview" page="privacy" />;
}
