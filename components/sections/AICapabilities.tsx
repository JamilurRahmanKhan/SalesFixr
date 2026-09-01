import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { TiltCard } from "@/components/ui/TiltCard";

const ROW_1 = [
  "ai-tool-01.svg", "ai-tool-02.avif", "ai-tool-03.png", "ai-tool-04.avif", "ai-tool-05.png",
  "ai-tool-06.avif", "ai-tool-07.avif", "ai-tool-08.avif", "ai-tool-09.avif", "ai-tool-10.avif",
];
const ROW_2 = [
  "ai-tool-11.avif", "ai-tool-12.png", "ai-tool-13.avif", "ai-tool-14.png", "ai-tool-15.avif",
  "ai-tool-16.avif", "ai-tool-17.avif", "ai-tool-18.png", "ai-tool-19.avif", "ai-tool-20.avif",
];

function MarqueeList({ files, hidden = false }: { files: string[]; hidden?: boolean }) {
  return (
    <div className="ai-marquee-list" aria-hidden={hidden || undefined}>
      {files.map((file, index) => (
        <Image
          key={`${file}-${index}`}
          src={`/images/ai/${file}`}
          alt=""
          width={40}
          height={40}
          className="ai-marquee-icon"
        />
      ))}
    </div>
  );
}

const STAGES = [
  {
    title: "Discover & Strategy",
    icons: [
      { icon: "search", label: "Research" },
      { icon: "description", label: "Requirements" },
      { icon: "strategy", label: "Strategy" },
    ],
    produces: ["Requirements Doc", "Technical Spec", "Architecture Plan"],
  },
  {
    title: "Architecture",
    icons: [
      { icon: "schema", label: "System Design" },
      { icon: "api", label: "API" },
      { icon: "database", label: "Database" },
      { icon: "hub", label: "Diagrams" },
    ],
    produces: ["System Design", "API Contracts", "Database Schema"],
  },
  {
    title: "Build",
    icons: [
      { icon: "code", label: "Code" },
      { icon: "history", label: "Version Control" },
      { icon: "terminal", label: "Terminal" },
      { icon: "sync", label: "CI/CD" },
    ],
    produces: ["Codebase", "Test Suite", "CI/CD Pipeline"],
  },
  {
    title: "Test & Deploy",
    icons: [
      { icon: "verified", label: "QA" },
      { icon: "rocket_launch", label: "Deploy" },
      { icon: "monitoring", label: "Monitoring" },
    ],
    produces: ["QA Report", "Production Deploy", "Monitoring Setup"],
  },
];

export function AICapabilities() {
  return (
    <section className="ai-section dark-section section-pad" id="ai-design">
      <div className="ai-bg" aria-hidden="true">
        <div className="ai-glow ai-glow-1" />
        <div className="ai-glow ai-glow-2" />
      </div>
      <div className="container ai-content">
        <div className="section-intro centered reveal">
          <h2>
            Smarter Code, <em>Engineered to Scale</em>
          </h2>
          <p>
            From architecture to deployment, we blend AI tools with engineering discipline to ship
            faster, cleaner, and more reliable software.
          </p>
        </div>

        <div className="ai-diagram">
          <div className="ai-marquee-backdrop" aria-hidden="true">
            <div className="ai-marquee-row">
              <div className="ai-marquee-track ai-marquee-track-left">
                <MarqueeList files={ROW_1} />
                <MarqueeList files={ROW_1} hidden />
                <MarqueeList files={ROW_1} hidden />
              </div>
            </div>
            <div className="ai-marquee-row">
              <div className="ai-marquee-track ai-marquee-track-right">
                <MarqueeList files={ROW_2} />
                <MarqueeList files={ROW_2} hidden />
                <MarqueeList files={ROW_2} hidden />
              </div>
            </div>
            <div className="ai-hub reveal">
              <Image src="/images/ai/ai-hub-logo.avif" alt="AI hub" width={64} height={64} />
            </div>
          </div>

          <svg className="ai-tree reveal" data-delay="1" viewBox="0 0 1200 170" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="aiWireGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <path className="ai-tree-glow" d="M600,10 V90 M150,90 H1050 M150,90 V160 M450,90 V160 M750,90 V160 M1050,90 V160" />
            <path className="ai-tree-path" d="M600,10 V90 M150,90 H1050 M150,90 V160 M450,90 V160 M750,90 V160 M1050,90 V160" />
            <circle className="ai-tree-node" r="4" cx="600" cy="90" />
            <circle className="ai-tree-node" r="4" cx="150" cy="90" />
            <circle className="ai-tree-node" r="4" cx="450" cy="90" />
            <circle className="ai-tree-node" r="4" cx="750" cy="90" />
            <circle className="ai-tree-node" r="4" cx="1050" cy="90" />
            <circle r="3.5" fill="#60a5fa">
              <animateMotion dur="2.2s" begin="0s" repeatCount="indefinite" path="M150,90 V160" />
            </circle>
            <circle r="3.5" fill="#60a5fa">
              <animateMotion dur="2.2s" begin="0.55s" repeatCount="indefinite" path="M450,90 V160" />
            </circle>
            <circle r="3.5" fill="#60a5fa">
              <animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite" path="M750,90 V160" />
            </circle>
            <circle r="3.5" fill="#60a5fa">
              <animateMotion dur="2.2s" begin="1.65s" repeatCount="indefinite" path="M1050,90 V160" />
            </circle>
          </svg>

          <div className="ai-cards">
            {STAGES.map((stage) => (
              <AiCard key={stage.title} {...stage} />
            ))}
          </div>
        </div>

        <a href="#ai-design" className="ai-cta reveal">
          <span>Explore AI Capabilities</span>
          <b>→</b>
        </a>
      </div>
    </section>
  );
}

function AiCard({
  title,
  icons,
  produces,
}: {
  title: string;
  icons: { icon: string; label: string }[];
  produces: string[];
}) {
  return (
    <TiltCard className="ai-card reveal" data-delay="1">
      <h3>{title}</h3>
      <div className="ai-card-brands">
        {icons.map((item) => (
          <span key={item.label} className="ai-icon-tile" title={item.label}>
            <MaterialIcon name={item.icon} />
          </span>
        ))}
      </div>
      <p className="ai-card-label">PRODUCES:</p>
      <div className="ai-card-list">
        {produces.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </TiltCard>
  );
}
