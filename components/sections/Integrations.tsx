const STACK = [
  { letter: "G", background: "#18181b", label: "GitHub" },
  { letter: "S", background: "#611f69", label: "Slack" },
  { letter: "J", background: "#0052cc", label: "Jira" },
  { letter: "A", background: "#ff9900", color: "#111", label: "AWS" },
  { letter: "S", background: "#635bff", label: "Stripe" },
  { letter: "F", background: "#a259ff", label: "Figma" },
  { letter: "N", background: "#000", border: "1px solid rgba(255,255,255,.25)", label: "Notion" },
  { letter: "L", background: "#5e6ad2", label: "Linear" },
  { letter: "V", background: "#fff", color: "#111", label: "Vercel" },
];

export function Integrations() {
  return (
    <section className="abt-stack">
      <h2 className="abt-heading">Plays Well With Your Stack</h2>
      <p className="abt-sub">These integrations turn a static build into a system that actually runs your business.</p>
      <div className="abt-stack-grid">
        {STACK.map((chip) => (
          <span className="abt-stack-chip" key={chip.label}>
            <span
              className="abt-stack-icon"
              style={{ background: chip.background, color: chip.color, border: chip.border }}
            >
              {chip.letter}
            </span>
            {chip.label}
          </span>
        ))}
        <span className="abt-stack-chip abt-stack-chip--ghost">+ your stack</span>
      </div>
    </section>
  );
}
