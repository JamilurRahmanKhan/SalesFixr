import type { Metadata } from "next";
import { SoftwarePortfolioShell } from "../software-portfolio/software-portfolio-shell";

export const metadata: Metadata = {
  title: "About",
  description: "CompassNCrew — About us.",
};

export default function AboutPage() {
  return <SoftwarePortfolioShell mode="preview" page="about" />;
}
