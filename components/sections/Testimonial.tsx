"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const QUOTES = [
  {
    quote: "CompassNCrew shipped our platform faster and cleaner than we expected. The whole process felt genuinely collaborative.",
    name: "— Alex Ridley, Founder at Ledgerly",
  },
  {
    quote: "They understood our workflow immediately and built exactly what we needed — no back and forth, no wasted cycles.",
    name: "— Priya Shah, COO at Cratewise",
  },
  {
    quote: "Responsive, sharp, and genuinely invested in getting the details right. Would work with them again in a heartbeat.",
    name: "— Daniel Osei, Founder at Replyra",
  },
];

export function Testimonial() {
  const [index, setIndex] = useState(0);
  const current = QUOTES[index];

  return (
    <section className="abt-testimonial">
      <div className="abt-testimonial-card">
        <button
          className="abt-t-nav abt-t-prev"
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length)}
        >
          <MaterialIcon name="chevron_left" />
        </button>
        <blockquote>&ldquo;{current.quote}&rdquo;</blockquote>
        <cite>{current.name}</cite>
        <button
          className="abt-t-nav abt-t-next"
          type="button"
          aria-label="Next testimonial"
          onClick={() => setIndex((i) => (i + 1) % QUOTES.length)}
        >
          <MaterialIcon name="chevron_right" />
        </button>
      </div>
    </section>
  );
}
