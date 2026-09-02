import type { Metadata } from "next";
import { SoftwarePortfolioShell } from "@/components/layout/SoftwarePortfolioShell";

export const metadata: Metadata = {
  title: "Software portfolio",
  description:
    "Explore twenty SalesFixr software projects through an interactive 3D road journey.",
};

export default function SoftwarePortfolioPage() {
  return <SoftwarePortfolioShell />;
}
