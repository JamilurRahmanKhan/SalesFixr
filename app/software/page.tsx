import type { Metadata } from "next";
import { SoftwarePortfolioShell } from "../software-portfolio/software-portfolio-shell";

export const metadata: Metadata = {
  title: "Software portfolio",
  description:
    "Preview the CompassNCrew software portfolio before entering the interactive 3D road journey.",
};

export default function SoftwarePage() {
  return <SoftwarePortfolioShell mode="preview" />;
}
