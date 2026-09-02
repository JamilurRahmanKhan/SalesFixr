import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function Benefits() {
  return (
    <section className="abt-get">
      <h2 className="abt-heading">What You&rsquo;ll Get</h2>
      <p className="abt-sub">Everything you need in one place.</p>
      <div className="abt-get-grid">
        <div className="abt-get-col">
          <article className="abt-get-card abt-get-card--board">
            <h3>Control and transparency</h3>
            <p>A shared, clear workflow at every stage.</p>
            <div className="abt-board-window" aria-hidden="true">
              <div className="abt-board-dots">
                <span /><span /><span />
              </div>
              <div className="abt-board">
                <div className="abt-board-col">
                  <span className="abt-board-label">To do</span>
                  <div className="abt-board-card">
                    <i className="abt-board-bar" style={{ background: "#a78bfa" }} />
                    <span className="abt-board-card-title">Integrate billing</span>
                    <span className="abt-board-card-meta">
                      <em>3</em>
                      <span className="abt-board-avatar" style={{ background: "linear-gradient(135deg,#f2c9a0,#c97a4e)" }} />
                    </span>
                  </div>
                  <div className="abt-board-card">
                    <i className="abt-board-bar" style={{ background: "#facc7a" }} />
                    <span className="abt-board-card-title">Create home page</span>
                    <span className="abt-board-card-meta">
                      <em>2</em>
                      <span className="abt-board-avatar" style={{ background: "linear-gradient(135deg,#a0c9f2,#4e7ac9)" }} />
                    </span>
                  </div>
                  <button className="abt-board-add" type="button">
                    + Create new card
                  </button>
                </div>
                <div className="abt-board-col">
                  <span className="abt-board-label">In progress</span>
                  <div className="abt-board-card is-accent">
                    <i className="abt-board-bar" style={{ background: "#7ee0a8" }} />
                    <span className="abt-board-card-title">Build contact page</span>
                    <span className="abt-board-card-meta">
                      <em>4</em>
                      <span className="abt-board-avatar" style={{ background: "linear-gradient(135deg,#c9a0e0,#7a4ec9)" }} />
                    </span>
                  </div>
                </div>
                <div className="abt-board-col">
                  <span className="abt-board-label">Done</span>
                  <div className="abt-board-card is-done">
                    <i className="abt-board-bar" style={{ background: "#a78bfa" }} />
                    <span className="abt-board-card-title">Design system</span>
                    <span className="abt-board-card-meta"><em>1</em></span>
                  </div>
                  <div className="abt-board-card is-done">
                    <i className="abt-board-bar" style={{ background: "#7ee0a8" }} />
                    <span className="abt-board-card-title">Wireframes</span>
                    <span className="abt-board-card-meta"><em>1</em></span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="abt-get-card abt-get-card--pixel">
            <h3>Pixel-perfect craft</h3>
            <p>Every detail cared for, at every stage.</p>
          </article>

          <article className="abt-get-card abt-get-card--speed">
            <div className="abt-speed-top">
              <span className="abt-speed-icon">
                <MaterialIcon name="bolt" />
              </span>
              <h3>Ship-fast mode</h3>
              <span className="abt-speed-badge">Up to 30%</span>
            </div>
            <p>Need it ASAP? We&rsquo;ll move quickly without cutting corners.</p>
            <Link className="abt-speed-btn" href="/contact">
              Book a Demo
            </Link>
          </article>
        </div>

        <div className="abt-get-col">
          <article className="abt-get-card abt-get-card--text">
            <h3>Only professionals</h3>
            <p>Experienced engineers and designers who never stop refining their craft.</p>
          </article>

          <article className="abt-get-card abt-get-card--deadline">
            <h3>Meeting deadlines</h3>
            <p>We track requests and hold our promises.</p>
            <div className="abt-gantt" aria-hidden="true">
              <div className="abt-gantt-axis">
                <span>0</span><span>5</span><span>10</span><span>15</span><span>20</span>
              </div>
              <div className="abt-gantt-marker" />
              <div className="abt-gantt-rows">
                <span className="abt-gantt-bar" style={{ width: "34%", marginLeft: "0%" }}>Discovery</span>
                <span className="abt-gantt-bar" style={{ width: "44%", marginLeft: "8%" }}>Design</span>
                <span className="abt-gantt-bar" style={{ width: "30%", marginLeft: "26%" }}>Build</span>
                <span className="abt-gantt-bar" style={{ width: "22%", marginLeft: "48%" }}>QA</span>
                <span className="abt-gantt-bar" style={{ width: "34%", marginLeft: "62%" }}>Deployment &amp; Scaling</span>
              </div>
            </div>
          </article>

          <article className="abt-get-card abt-get-card--code">
            <h3>Custom code, when needed</h3>
            <p>Anything a no-code layer can&rsquo;t reach, we build by hand.</p>
            <pre className="abt-code-snippet">
              <code>
                <span className="tok-kw">export function</span> <span className="tok-fn">onDeploy</span>() {"{"}
                {"\n"}  triggers.<span className="tok-fn">forEach</span>(<span className="tok-var">t</span> =&gt; t.run());
                {"\n"}  <span className="tok-kw">return</span> status.<span className="tok-fn">ok</span>();
                {"\n"}
                {"}"}
              </code>
            </pre>
          </article>
        </div>
      </div>
    </section>
  );
}
