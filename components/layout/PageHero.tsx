import type { ReactNode } from "react";
import { DhakaClock } from "@/components/ui/DhakaClock";

export function PageHero({
  heading,
  sub,
  cta,
  mono = false,
  noPaddingBottom = false,
  trailingRule = false,
}: {
  heading: ReactNode;
  sub: ReactNode;
  cta?: { label: string; href: string };
  mono?: boolean;
  noPaddingBottom?: boolean;
  trailingRule?: boolean;
}) {
  return (
    <section className="abt-hero" style={noPaddingBottom ? { paddingBottom: 0 } : undefined}>
      <div className="abt-rule abt-rule--top" aria-hidden="true" />
      <div className={mono ? "abt-hero-topbar abt-mono" : "abt-hero-topbar"}>
        <DhakaClock />
        <span className="abt-hero-status">
          <span className="abt-dot" />
          Available for work
        </span>
      </div>
      <h1 className="abt-hero-heading">{heading}</h1>
      <p className="abt-hero-sub">{sub}</p>
      {cta && (
        <a className="abt-hero-cta" href={cta.href}>
          {cta.label}
        </a>
      )}
      {trailingRule && <div className="abt-rule" style={{ marginTop: 32 }} aria-hidden="true" />}
    </section>
  );
}
