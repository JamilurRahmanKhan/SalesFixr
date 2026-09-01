"use client";

import { useEffect, useRef, useState } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const SERVICES = [
  {
    icon: "settings",
    title: "Custom Software Development",
    items: ["Custom Business Software", "Enterprise Software Development", "SaaS Product Development", "MVP Development", "Product Engineering", "Internal Business Tools", "Workflow Automation Software", "Legacy Software Modernization", "Multi-tenant SaaS Development", "White-label Software"],
  },
  {
    icon: "language",
    title: "Web Application Development",
    items: ["React Development", "Next.js Development", "Vue.js Development", "Angular Development", "Laravel Development", "Node.js Development", "Python (Django/FastAPI)", "PHP Development", "Full-stack Development", "Progressive Web Apps (PWA)", "Headless Web Applications"],
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    items: ["React Native Development"],
  },
  {
    icon: "smart_toy",
    title: "AI & Intelligent Software",
    items: ["AI Chatbot Development", "OpenAI Integration", "Claude Integration", "Gemini Integration", "AI Customer Support", "AI Sales Assistants", "AI Workflow Automation", "Document AI", "OCR Solutions", "AI Recommendation Systems", "AI Search", "AI Voice Agents", "RAG Systems", "LLM Integration"],
  },
  {
    icon: "monitoring",
    title: "CRM & ERP Solutions",
    items: ["Custom CRM Development", "ERP Development", "Sales Dashboard", "Inventory Management", "HR Management System", "Payroll System", "Recruitment CRM", "Client Portal", "Vendor Portal"],
  },
  {
    icon: "cable",
    title: "API Development & Integration",
    items: ["REST API Development", "GraphQL APIs", "Third-party API Integration", "Payment Gateway Integration", "Stripe Integration", "PayPal Integration", "Banking APIs", "SMS Gateway Integration", "WhatsApp API", "Google APIs", "Microsoft APIs"],
  },
  {
    icon: "cloud",
    title: "Cloud Development",
    items: ["Google Cloud", "Docker"],
  },
  {
    icon: "shopping_cart",
    title: "E-commerce Development",
    items: ["Custom E-commerce", "Marketplace Development", "Subscription Platforms", "Payment Integration", "B2B Commerce", "Headless Commerce"],
  },
  {
    icon: "apartment",
    title: "Industry-Specific Software",
    items: ["Recruitment Software", "Staffing Platforms", "Healthcare Software", "Fintech Software", "EdTech Platforms", "Real Estate Software", "Logistics Software", "Manufacturing Software", "Legal Tech", "Hospitality Software"],
  },
  {
    icon: "design_services",
    title: "Product Design & Engineering",
    items: ["Product Discovery", "Product Strategy", "Technical Consulting", "MVP Planning", "Feature Prioritization", "Design Sprint", "Software Architecture"],
  },
  {
    icon: "task_alt",
    title: "QA & Testing",
    items: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Testing", "Regression Testing", "QA Automation"],
  },
  {
    icon: "build",
    title: "Maintenance & Support",
    items: ["Software Maintenance", "Bug Fixes", "Feature Enhancements", "Performance Monitoring", "Security Updates", "Dedicated Development Team", "24/7 Support"],
  },
];

export function WhatWeDo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const checkScroll = () => {
    const list = listRef.current;
    if (!list) return;
    const atBottom = list.scrollTop + list.clientHeight >= list.scrollHeight - 6;
    const scrollable = list.scrollHeight > list.clientHeight + 6;
    setShowScrollHint(scrollable && !atBottom);
  };

  useEffect(() => {
    if (openIndex === null) return;
    if (listRef.current) listRef.current.scrollTop = 0;
    requestAnimationFrame(checkScroll);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  const open = openIndex !== null ? SERVICES[openIndex] : null;

  return (
    <section className="abt-work">
      <h2 className="abt-heading">Selected Engagements</h2>
      <p className="abt-sub">Twelve service segments, one team — the full scope of what we build.</p>
      <div className="abt-work-grid" data-abt-work-grid>
        {SERVICES.map((service, index) => (
          <div className="abt-svc-card" key={service.title}>
            <div className="abt-svc-icon">
              <MaterialIcon name={service.icon} />
            </div>
            <p className="abt-svc-kicker">Software Service</p>
            <h3>{service.title}</h3>
            <p className="abt-svc-desc">Explore complete solutions and development offerings.</p>
            <button className="abt-svc-btn" type="button" onClick={() => setOpenIndex(index)}>
              Details
            </button>
          </div>
        ))}
      </div>

      <div className="abt-svc-modal-backdrop" data-abt-svc-modal hidden={!open} onClick={(e) => e.target === e.currentTarget && setOpenIndex(null)}>
        {open && (
          <div className="abt-svc-modal">
            <div className="abt-svc-modal-top">
              <div className="abt-svc-modal-icon">
                <MaterialIcon name={open.icon} />
              </div>
              <div className="abt-svc-modal-heading">
                <p className="abt-svc-modal-kicker">Software Service</p>
                <h2>{open.title}</h2>
              </div>
              <button type="button" aria-label="Close" onClick={() => setOpenIndex(null)}>
                <MaterialIcon name="close" />
              </button>
            </div>
            <div className="abt-svc-modal-body">
              <div className="abt-svc-modal-list" ref={listRef} onScroll={checkScroll}>
                {open.items.map((item) => (
                  <div className="abt-svc-modal-item" key={item}>
                    <MaterialIcon name="chevron_right" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className={`abt-svc-modal-scrollhint${showScrollHint ? "" : " is-hidden"}`}>
                <span>Scroll for more</span>
                <MaterialIcon name="expand_more" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
