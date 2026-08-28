import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "CompassNCrew software portfolio",
  description:
    "Standalone runner for the CompassNCrew software portfolio and interactive 3D journey pages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={display.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
