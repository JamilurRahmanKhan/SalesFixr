"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const DEV_STACK = [
  { slug: "react", label: "React" },
  { slug: "typescript", label: "TypeScript" },
  { slug: "nodejs", label: "Node.js" },
  { slug: "javascript", label: "JavaScript" },
  { slug: "python", label: "Python" },
  { slug: "go", label: "Go" },
  { slug: "postgresql", label: "Database" },
  { slug: "fastapi", label: "API" },
  { slug: "figma", label: "UI" },
  { slug: "aws", label: "AWS" },
  { slug: "azure", label: "Azure" },
  { slug: "gcp", label: "GCP" },
  { slug: "mysql", label: "SQL" },
  { slug: "githubactions", label: "CI" },
  { slug: "docker", label: "CD" },
  { slug: "selenium", label: "QA" },
  { slug: "xd", label: "UX" },
  { slug: "tensorflow", label: "AI" },
];

const CLIPBOARD_QUEUE = [
  { icon: "●", label: "SaaS Dashboard" },
  { icon: "◈", label: "E-commerce API" },
  { icon: "◇", label: "Mobile Banking" },
  { icon: "○", label: "Cloud Migration" },
];

const CALCULATOR_STATS = [
  { label: "Features shipped", value: "24" },
  { label: "Average response", value: "118 ms" },
  { label: "Test coverage", value: "94%" },
  { label: "Critical incidents", value: "0" },
];

const WINDOW_ENVIRONMENTS = [
  { label: "Production", status: "Healthy" },
  { label: "Staging", status: "Ready" },
  { label: "Preview", status: "12 builds" },
  { label: "Development", status: "Active" },
];

const TABS = [
  { name: "clipboard", label: "Project Command Center", glyph: "◆" },
  { name: "ai", label: "AI Engineering Copilot", glyph: "✦" },
  { name: "emoji", label: "Technology Stack", glyph: "▦" },
  { name: "calculator", label: "Delivery Analytics", glyph: "⌁" },
  { name: "windows", label: "Cloud Operations", glyph: "⬡" },
] as const;

type TabName = (typeof TABS)[number]["name"];

export function RaycastDemo() {
  const [activeTab, setActiveTab] = useState<TabName>("clipboard");
  const [tooltip, setTooltip] = useState<{ label: string; left: number } | null>(null);
  const [motionStep, setMotionStep] = useState(0);
  const dockRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const interval = window.setInterval(() => setMotionStep((step) => step + 1), 1300);
    return () => window.clearInterval(interval);
  }, []);

  const showTooltip = (index: number) => {
    const tab = tabRefs.current[index];
    if (!tab) return;
    setTooltip({ label: TABS[index].label, left: tab.offsetLeft + tab.offsetWidth / 2 });
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
    if (event.key === "ArrowRight") next = (index + 1) % TABS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = TABS.length - 1;
    setActiveTab(TABS[next].name);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="raycast-demo" data-raycast-demo data-pwc-critical="raycast-five-mode-window">
      <div className="raycast-menubar" aria-hidden="true">
        <div className="raycast-menu-left">
          <span className="raycast-apple">●</span>
          <b>Finder</b>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Window</span>
          <span>Help</span>
        </div>
        <div className="raycast-menu-right">
          <span>● Build: Passing</span>
        </div>
      </div>
      <div className="raycast-desktop">
        <div className="raycast-wallpaper" aria-hidden="true">
          <i /><i /><i />
        </div>
        <section className="raycast-command" aria-live="polite">
          <article
            className={`raycast-panel${activeTab === "clipboard" ? " is-active" : ""}`}
            data-raycast-panel="clipboard"
            role="tabpanel"
            hidden={activeTab !== "clipboard"}
          >
            <header>
              <button tabIndex={-1}>◆</button>
              <strong>Search active projects...</strong>
              <span>
                Sprint 24<i className="caret" />
              </span>
            </header>
            <div className="raycast-command-body clipboard-layout">
              <aside>
                <b>Development Queue</b>
                {CLIPBOARD_QUEUE.map((item, index) => (
                  <em key={item.label} className={motionStep % CLIPBOARD_QUEUE.length === index ? "is-selected" : undefined}>
                    {item.icon} &nbsp; {item.label}
                  </em>
                ))}
              </aside>
              <div className="clipboard-preview">
                <div className="dev-code-preview">
                  <span>
                    <i>01</i>
                    <b>const</b> app = createPlatform();
                  </span>
                  <span>
                    <i>02</i>app.connect(database);
                  </span>
                  <span>
                    <i>03</i>
                    <b>await</b> app.deploy();
                  </span>
                  <em>✓ Build completed in 42s</em>
                </div>
                <dl>
                  <dt>Project Overview</dt>
                  <dd>
                    <b>Frontend</b>
                    <span>React + TypeScript</span>
                  </dd>
                  <dd>
                    <b>Backend</b>
                    <span>Node.js API</span>
                  </dd>
                  <dd>
                    <b>Progress</b>
                    <span>84% complete</span>
                  </dd>
                  <dd>
                    <b>Release</b>
                    <span>Friday · 14:00</span>
                  </dd>
                </dl>
              </div>
            </div>
            <footer>
              <span>◆ &nbsp; Project Command Center</span>
              <b>Open Project &nbsp; ↵ &nbsp; | &nbsp; Actions &nbsp; ⌘ K</b>
            </footer>
          </article>

          <article
            className={`raycast-panel${activeTab === "ai" ? " is-active" : ""}`}
            data-raycast-panel="ai"
            role="tabpanel"
            hidden={activeTab !== "ai"}
          >
            <header>
              <button tabIndex={-1}>✦</button>
              <strong>Ask the engineering copilot...</strong>
              <span>
                Code Model<i className="caret" />
              </span>
            </header>
            <div className="ai-chat-screen">
              <p className="ai-prompt">Review the checkout API for production</p>
              <div className="ai-answer">
                <i>✦</i>
                <div>
                  <b>Engineering review complete</b>
                  <p>
                    Add idempotency keys, validate webhook signatures, and cache product queries to
                    reduce response time.
                  </p>
                  <span>12 files analyzed · 3 improvements found</span>
                </div>
              </div>
              <div className="ai-actions">
                <span>Apply fixes</span>
                <span>View diff</span>
                <span>Create PR</span>
              </div>
            </div>
            <footer>
              <span>✦ &nbsp; AI Engineering Copilot</span>
              <b>New Review &nbsp; ⌘ N &nbsp; | &nbsp; Actions &nbsp; ⌘ K</b>
            </footer>
          </article>

          <article
            className={`raycast-panel${activeTab === "emoji" ? " is-active" : ""}`}
            data-raycast-panel="emoji"
            role="tabpanel"
            hidden={activeTab !== "emoji"}
          >
            <header>
              <button tabIndex={-1}>▦</button>
              <strong>Search technologies...</strong>
              <span>Full Stack</span>
            </header>
            <div className="emoji-screen">
              <nav>Frontend &nbsp; · &nbsp; Backend &nbsp; · &nbsp; Cloud &nbsp; · &nbsp; Data</nav>
              <div className="emoji-grid dev-stack-grid">
                {DEV_STACK.map((tech, index) => (
                  <span key={tech.slug} className={motionStep % DEV_STACK.length === index ? "is-selected" : undefined}>
                    <Image src={`/images/tech-stack/${tech.slug}.svg`} alt={tech.label} width={28} height={28} />
                  </span>
                ))}
              </div>
              <p>
                <b>Production-ready technology stack</b>
                <span>18 capabilities</span>
              </p>
            </div>
            <footer>
              <span>▦ &nbsp; Technology Stack</span>
              <b>View Capability &nbsp; ↵ &nbsp; | &nbsp; Filter &nbsp; ⌘ F</b>
            </footer>
          </article>

          <article
            className={`raycast-panel${activeTab === "calculator" ? " is-active" : ""}`}
            data-raycast-panel="calculator"
            role="tabpanel"
            hidden={activeTab !== "calculator"}
          >
            <header>
              <button tabIndex={-1}>⌁</button>
              <strong>Delivery analytics...</strong>
              <span>Last 30 Days</span>
            </header>
            <div className="calculator-screen">
              <div className="calc-query">Engineering Performance</div>
              <div className="calc-result">
                <small>Deployment success</small>
                <strong>99.8%</strong>
                <span>+4.6% this month</span>
              </div>
              <ul>
                {CALCULATOR_STATS.map((stat, index) => (
                  <li key={stat.label} className={motionStep % CALCULATOR_STATS.length === index ? "is-selected" : undefined}>
                    <span>{stat.label}</span>
                    <b>{stat.value}</b>
                  </li>
                ))}
              </ul>
            </div>
            <footer>
              <span>⌁ &nbsp; Delivery Analytics</span>
              <b>Export Report &nbsp; ↵ &nbsp; | &nbsp; Date Range &nbsp; ⌘ D</b>
            </footer>
          </article>

          <article
            className={`raycast-panel${activeTab === "windows" ? " is-active" : ""}`}
            data-raycast-panel="windows"
            role="tabpanel"
            hidden={activeTab !== "windows"}
          >
            <header>
              <button tabIndex={-1}>⬡</button>
              <strong>Search deployment environments...</strong>
              <span>
                Production<i className="caret" />
              </span>
            </header>
            <div className="window-screen">
              <aside>
                <b>Cloud Environments</b>
                {WINDOW_ENVIRONMENTS.map((env, index) => (
                  <em key={env.label} className={motionStep % WINDOW_ENVIRONMENTS.length === index ? "is-selected" : undefined}>
                    {env.label} <kbd>{env.status}</kbd>
                  </em>
                ))}
              </aside>
              <div className="monitor-preview">
                <div className="monitor-grid">
                  <i /><i /><i /><i /><span />
                </div>
                <b>Production Deployment</b>
                <p>API, web app, database, and CDN are operating normally.</p>
              </div>
            </div>
            <footer>
              <span>⬡ &nbsp; Cloud Operations</span>
              <b>Deploy Release &nbsp; ↵ &nbsp; | &nbsp; Logs &nbsp; ⌘ L</b>
            </footer>
          </article>
        </section>

        <div
          className="raycast-dock"
          data-raycast-dock
          ref={dockRef}
          role="tablist"
          aria-label="Choose software development service"
          onPointerLeave={() => setTooltip(null)}
          onBlurCapture={() => setTooltip(null)}
        >
          <div
            className={`raycast-tooltip${tooltip ? " is-visible" : ""}`}
            data-raycast-tooltip
            aria-hidden="true"
            style={tooltip ? { left: `${tooltip.left}px` } : undefined}
          >
            {tooltip?.label}
          </div>
          {TABS.map((tab, index) => (
            <button
              key={tab.name}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              className={activeTab === tab.name ? "is-active" : undefined}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.name}
              tabIndex={activeTab === tab.name ? 0 : -1}
              data-raycast-tab={tab.name}
              data-label={tab.label}
              aria-label={`Show ${tab.label}`}
              onClick={() => setActiveTab(tab.name)}
              onPointerEnter={() => showTooltip(index)}
              onFocus={() => showTooltip(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
            >
              <RaycastTabGlyph name={tab.name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function RaycastTabGlyph({ name }: { name: TabName }) {
  switch (name) {
    case "clipboard":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M9 5V4a3 3 0 0 1 6 0v1m-7 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24">
          <path d="m12 3 1.3 4.1L17 9l-3.7 1.9L12 15l-1.3-4.1L7 9l3.7-1.9L12 3Zm7 10 .7 2.3L22 16.5l-2.3 1.2L19 20l-.7-2.3-2.3-1.2 2.3-1.2L19 13ZM5 13l.9 2.8L9 17.5l-3.1 1.7L5 22l-.9-2.8L1 17.5l3.1-1.7L5 13Z" />
        </svg>
      );
    case "emoji":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 10h.01M15.5 10h.01M8.5 15c2.2 1.7 4.8 1.7 7 0" />
        </svg>
      );
    case "calculator":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M8 7h8M8 11h1m3 0h1m3 0h1M8 15h1m3 0h1m3 0h1M8 18h1m3 0h5" />
        </svg>
      );
    case "windows":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M12 4v16M3 12h18" />
        </svg>
      );
  }
}
