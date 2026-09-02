"use client";

import { useState } from "react";

const FAQS = [
  { q: "How long does a project take?", a: "Timelines depend on scope. After a discovery call we set a clear deadline so everything ships on time." },
  { q: "Are you able to work with an existing product?", a: "Yes — whether it's an incremental update or a full rebuild, we align the work with your existing codebase and goals." },
  { q: "What are your payment terms?", a: "We offer flexible milestone-based plans that scale with the size of the engagement." },
  { q: "How do I get started?", a: "Book a call whenever you're ready — getting your project moving is our top priority." },
  { q: "Do you work with our existing tech stack and infrastructure?", a: "Yes — we integrate with your current stack, cloud provider, and tools rather than forcing a rebuild around ours." },
  { q: "Do you provide ongoing maintenance and support after launch?", a: "Yes, we offer dedicated maintenance and support plans to keep your software secure, updated, and running smoothly after launch." },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="abt-faq" id="faqs">
      <h2 className="abt-heading">FAQ</h2>
      <p className="abt-sub">Find everything you need to know, right here.</p>
      <div className="abt-faq-grid">
        {FAQS.map((item, index) => (
          <div className={`abt-faq-item${openIndex === index ? " is-open" : ""}`} key={item.q}>
            <button
              className="abt-faq-q"
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.q}
              <span className="abt-faq-plus" />
            </button>
            <div className="abt-faq-a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
