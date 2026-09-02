import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Playfair_Display } from "next/font/google";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./globals.css";
import "./huly-landing.css";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
});

/**
 * Self-hosted at build time via next/font, same as Instrument Serif above —
 * no runtime request to Google Fonts and no layout shift. The huly-landing
 * stylesheet references these through the CSS variables below.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  weight: "500",
  display: "swap",
  variable: "--font-playfair",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "SalesFixr software portfolio",
  description:
    "Standalone runner for the SalesFixr software portfolio and interactive 3D journey pages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${playfair.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
