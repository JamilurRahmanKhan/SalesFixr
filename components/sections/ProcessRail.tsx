import { Fragment } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const STEPS = [
  { num: "01", icon: "search", label: "Discovery" },
  { num: "02", icon: "dashboard", label: "Architecture" },
  { num: "03", icon: "code", label: "Build" },
  { num: "04", icon: "task_alt", label: "QA & Testing" },
  { num: "05", icon: "rocket_launch", label: "Deployment" },
  { num: "06", icon: "settings", label: "Support" },
];

export function ProcessRail() {
  return (
    <section className="abt-approach">
      <h2 className="abt-heading">That&rsquo;s How We Work</h2>
      <p className="abt-sub">A refreshed approach to building software that attracts users and scales your business.</p>
      <div className="abt-steps">
        {STEPS.map((step, index) => (
          <Fragment key={step.label}>
            <div className="abt-step">
              <span className="abt-step-icon">
                <i className="abt-step-num">{step.num}</i>
                <MaterialIcon name={step.icon} />
              </span>
              <span className="abt-step-label">{step.label}</span>
            </div>
            {index < STEPS.length - 1 && <span className="abt-step-line" aria-hidden="true" />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
