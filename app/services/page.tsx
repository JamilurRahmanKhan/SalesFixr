import type { Metadata } from "next";
import { SoftwarePortfolioShell } from "../software-portfolio/software-portfolio-shell";

export const metadata: Metadata = {
  title: "Services",
  description: "CompassNCrew services.",
};

export default function ServicesPage() {
  return <SoftwarePortfolioShell mode="preview" page="services" />;
}
