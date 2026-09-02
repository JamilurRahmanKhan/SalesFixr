import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function WhatWeDo() {
  return (
    <section className="abt-work">
      <h2 className="abt-heading">Selected Engagements</h2>
      <p className="abt-sub">From MVPs to enterprise platforms — twelve service segments, one team.</p>
      <Link href="/services" className="abt-work-cta">
        See all services <MaterialIcon name="chevron_right" />
      </Link>
    </section>
  );
}
