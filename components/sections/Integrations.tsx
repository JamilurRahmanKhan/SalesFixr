import Image from "next/image";

const STACK = [
  { icon: "github.png", label: "GitHub" },
  { icon: "slack.png", label: "Slack" },
  { icon: "jira.png", label: "Jira" },
  { icon: "aws.png", label: "AWS" },
  { icon: "stripe.png", label: "Stripe" },
  { icon: "figma.png", label: "Figma" },
  { icon: "notion.png", label: "Notion" },
  { icon: "linear.png", label: "Linear" },
  { icon: "vercel.png", label: "Vercel" },
];

export function Integrations() {
  return (
    <section className="abt-stack">
      <h2 className="abt-heading">Plays Well With Your Stack</h2>
      <p className="abt-sub">These integrations turn a static build into a system that actually runs your business.</p>
      <div className="abt-stack-grid">
        {STACK.map((chip) => (
          <span className="abt-stack-chip" key={chip.label}>
            <span className="abt-stack-icon">
              <Image src={`/images/tech-stack/${chip.icon}`} alt="" width={26} height={26} />
            </span>
            {chip.label}
          </span>
        ))}
        <span className="abt-stack-chip abt-stack-chip--ghost">+ your stack</span>
      </div>
    </section>
  );
}
