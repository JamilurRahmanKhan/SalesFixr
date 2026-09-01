"use client";

import { useEffect, useRef } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const STEPS = [
  { icon: "search", num: "01", title: "Discovery & Audit", desc: "We analyze your workflows, bottlenecks, and revenue opportunities.", reverse: false },
  { icon: "hub", num: "02", title: "Automation Blueprint", desc: "We design a detailed automation architecture aligned with KPIs.", reverse: true },
  { icon: "auto_awesome", num: "03", title: "Build & Integration", desc: "Our engineers implement AI systems and integrate with your existing tools.", reverse: false },
  { icon: "sync", num: "04", title: "Testing & Optimization", desc: "Performance testing, data validation, and refinement.", reverse: true },
  { icon: "rocket_launch", num: "05", title: "Deployment & Scaling", desc: "Launch, monitor, and continuously optimize for growth.", reverse: false },
];

export function HowWeWork() {
  const listRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const TRIGGER_RATIO = 0.6;
    let ticking = false;

    const update = () => {
      ticking = false;
      const listTop = list.getBoundingClientRect().top;
      const triggerY = window.innerHeight * TRIGGER_RATIO;
      const progress = triggerY - listTop;
      const clamped = Math.max(0, Math.min(list.offsetHeight, progress));
      fill.style.height = `${clamped}px`;

      nodeRefs.current.forEach((node, i) => {
        if (!node) return;
        const nodeMid = node.getBoundingClientRect().top + node.offsetHeight / 2;
        if (nodeMid <= triggerY) rowRefs.current[i]?.classList.add("is-active");
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    if (prefersReduced || !("requestAnimationFrame" in window)) {
      rowRefs.current.forEach((row) => row?.classList.add("is-active"));
      fill.style.height = `${list.offsetHeight}px`;
      return;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="how-section">
      <h2 className="how-heading">How We Work</h2>
      <p className="how-sub">
        A proven process designed to transform complex workflows into scalable AI-powered systems — efficiently and
        strategically.
      </p>

      <div className="how-list" ref={listRef}>
        <div className="how-line" aria-hidden="true" />
        <div className="how-line-fill" ref={fillRef} aria-hidden="true" />

        {STEPS.map((step, i) => (
          <div
            className={`how-row${step.reverse ? " is-reverse" : ""}`}
            key={step.num}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
          >
            <div className={`how-side how-side-left${step.reverse ? " how-text" : ""}`}>
              {step.reverse ? (
                <>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </>
              ) : (
                <>
                  <span className="how-icon"><MaterialIcon name={step.icon} /></span>
                  <span className="how-num">{step.num}</span>
                </>
              )}
            </div>
            <span
              className="how-node"
              aria-hidden="true"
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
            />
            <div className={`how-side how-side-right${step.reverse ? "" : " how-text"}`}>
              {step.reverse ? (
                <>
                  <span className="how-num">{step.num}</span>
                  <span className="how-icon"><MaterialIcon name={step.icon} /></span>
                </>
              ) : (
                <>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
