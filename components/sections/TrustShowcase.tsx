"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

/**
 * Five huly.io-style SaaS trust cards (Figma/GitHub/Linear/Sentry/Vercel).
 * These are decorative capability-showcase cards, not real client quotes —
 * kept as real brand marks (not swapped to Material Symbols) since they must
 * stay recognizable as the specific products they represent.
 */

function Avatar({ colors }: { colors: string }) {
  return (
    <span className="avatar" style={{ background: `linear-gradient(135deg,${colors})` }}>
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" />
        <path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" />
      </svg>
    </span>
  );
}

function Stat({ icon, value, label, divider = true }: { icon: ReactNode; value: string; label: string; divider?: boolean }) {
  return (
    <div className={divider ? "stat divider" : "stat"}>
      {icon}
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

function FeatureRow({ tile, icon, title }: { tile?: string; icon: ReactNode; title: string }) {
  return (
    <li className="feature-row">
      <div className={tile ? `feature-icon ${tile}` : "feature-icon"}>{icon}</div>
      <div className="feature-copy">
        <p className="feature-title">{title}</p>
      </div>
    </li>
  );
}

function FigmaCard() {
  return (
    <div className="promo-card promo-card--figma">
      <header className="header">
        <div className="brand">
          <svg className="brand-logo" viewBox="0 0 38 57">
            <path d="M9.5 0h9.5v19H9.5a9.5 9.5 0 1 1 0-19Z" fill="#F24E1E" />
            <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5Z" fill="#A259FF" />
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" fill="#0ACF83" />
            <path d="M19 19h9.5a9.5 9.5 0 1 1 0 19H19V19Z" fill="#1ABCFE" />
          </svg>
          <span className="brand-name">Figma</span>
        </div>
        <div className="new-badge">NEW</div>
      </header>

      <h1 className="headline">
        <span className="headline-white">Product design.</span>
        <span className="headline-accent">Pixel perfect.</span>
      </h1>

      <p className="subhead">Design better experiences with collaborative tools and developer-ready features.</p>

      <ul className="feature-list">
        <FeatureRow
          tile="tile-dark"
          title="Collaborative Design"
          icon={
            <svg className="icon" viewBox="0 0 38 57">
              <path d="M9.5 0h9.5v19H9.5a9.5 9.5 0 1 1 0-19Z" fill="#F24E1E" />
              <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5Z" fill="#A259FF" />
              <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" fill="#0ACF83" />
              <path d="M19 19h9.5a9.5 9.5 0 1 1 0 19H19V19Z" fill="#1ABCFE" />
            </svg>
          }
        />
        <FeatureRow
          tile="tile-dark"
          title="Developer Handoff"
          icon={
            <svg className="icon icon-robot" viewBox="0 0 24 24" fill="none">
              <rect x="7" y="4" width="10" height="9" rx="4" stroke="white" strokeWidth="1.5" />
              <circle cx="9.6" cy="8.2" r="0.9" fill="white" />
              <circle cx="14.4" cy="8.2" r="0.9" fill="white" />
              <path d="M9.6 10.4c.7.6 2.1.6 2.8 0" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M12 2.6v1.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="2" r="0.9" fill="white" />
              <path d="M7 9c-1.6.5-2.6 1.9-2.6 4.4M17 9c1.6.5 2.6 1.9 2.6 4.4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9 13.5v4.4M15 13.5v4.4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          }
        />
        <FeatureRow
          tile="tile-dark"
          title="Prototyping"
          icon={
            <svg className="icon icon-proto" viewBox="0 0 24 24">
              <rect x="1.6" y="1.6" width="9.4" height="9.4" rx="2" fill="none" stroke="#0ACF83" strokeWidth="1.4" strokeDasharray="2.4 2" />
              <circle cx="6.3" cy="6.3" r="2.6" fill="#0ACF83" />
              <path d="M16 2.4c1.9 0 3.2 1.3 3.2 3.2 0 1.9-3.2 3.6-3.2 3.6s-3.2-1.7-3.2-3.6c0-1.9 1.3-3.2 3.2-3.2Z" fill="#F5B02C" />
              <rect x="12.4" y="12.4" width="9" height="9" rx="1.4" fill="white" />
              <circle cx="16.9" cy="16.9" r="2.4" fill="#0ACF83" />
              <path d="M2 13.2l6 6" stroke="#A259FF" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M2 19.2l6-6" stroke="#A259FF" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          }
        />
      </ul>

      <div className="stats-row">
        <Stat divider={false} value="4M+" label="Active Users" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.4" stroke="#a371f7" strokeWidth="1.6" /><path d="M2.8 19c0-3.3 2.7-5.6 6.2-5.6s6.2 2.3 6.2 5.6" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" fill="none" /><circle cx="17.2" cy="9" r="2.4" stroke="#a371f7" strokeWidth="1.6" /><path d="M15.9 13.5c2.5.3 4.2 2.1 4.2 5" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" fill="none" /></svg>} />
        <Stat value="200+" label="Countries" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#3fb950" strokeWidth="1.6" /><ellipse cx="12" cy="12" rx="4" ry="9" stroke="#3fb950" strokeWidth="1.6" /><path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" stroke="#3fb950" strokeWidth="1.4" /></svg>} />
        <Stat value="100+" label="Integrations" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3.2" stroke="#ff7b4d" strokeWidth="1.6" /><path d="M12 2.6v3M12 18.4v3M21.4 12h-3M5.6 12h-3" stroke="#ff7b4d" strokeWidth="1.6" strokeLinecap="round" /><path d="M17.8 6.2l-2 2M8.2 15.8l-2 2M17.8 17.8l-2-2M8.2 8.2l-2-2" stroke="#ff7b4d" strokeWidth="1.6" strokeLinecap="round" /></svg>} />
      </div>

      <div className="trust-row">
        <div className="avatars">
          <Avatar colors="#f2a7c3,#d98fd6" />
          <Avatar colors="#9fd3f5,#7fb2ee" />
          <Avatar colors="#caa6f7,#8f7ae0" />
        </div>
        <p className="trust-text">
          Trusted by product teams
          <br />
          at the world&rsquo;s best companies
        </p>
        <div className="brand-logos">
          <span className="logo-asana" aria-label="Asana">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#9199a3">
              <circle cx="12" cy="5" r="3.4" />
              <circle cx="5.5" cy="16.5" r="3.4" />
              <circle cx="18.5" cy="16.5" r="3.4" />
            </svg>
            asana
          </span>
          <span className="logo-uber" aria-label="Uber">Uber</span>
          <span className="logo-spotify" aria-label="Spotify">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <circle cx="12" cy="12" r="11" fill="#1ED760" />
              <path d="M6.5 9.7c3.2-.9 7.3-.7 10 .9M7 13c2.6-.7 6-.5 8.4.8M7.4 16c2.2-.5 4.9-.4 6.9.7" stroke="#05070c" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function GithubCard() {
  const octocat = "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z";
  return (
    <div className="promo-card promo-card--github">
      <header className="header">
        <div className="brand">
          <svg className="brand-logo" viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" d={octocat} />
          </svg>
          <span className="brand-name">GitHub</span>
        </div>
        <div className="new-badge">NEW</div>
      </header>

      <h1 className="headline">
        <span className="headline-white">Code quality.</span>
        <span className="headline-gradient">Engineering excellence.</span>
      </h1>

      <p className="subhead">
        Better code. Confident reviews.
        <br />
        Reliable software. Together.
      </p>

      <ul className="feature-list">
        <FeatureRow
          tile="tile-orange"
          title="Version Control"
          icon={
            <svg className="icon icon-branch" viewBox="0 0 24 24" fill="none">
              <circle cx="6" cy="6" r="2.4" stroke="white" strokeWidth="1.8" />
              <circle cx="6" cy="18" r="2.4" stroke="white" strokeWidth="1.8" />
              <circle cx="18" cy="10" r="2.4" stroke="white" strokeWidth="1.8" />
              <path d="M6 8.4V15.6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M6 8.4C6 11.5 9 12.3 15.8 10.6" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </svg>
          }
        />
        <FeatureRow tile="tile-dark" title="Code Review" icon={<svg className="icon icon-octocat" viewBox="0 0 16 16" fill="white"><path d={octocat} /></svg>} />
        <FeatureRow
          tile="tile-dark"
          title="GitHub Actions"
          icon={
            <svg className="icon icon-actions" viewBox="0 0 24 24" fill="none">
              <circle cx="6" cy="6" r="3" stroke="#58a6ff" strokeWidth="1.6" />
              <path d="M4.6 6.6l1 1 1.8-2" stroke="#58a6ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="18" cy="12" r="3" stroke="#58a6ff" strokeWidth="1.6" />
              <path d="M16.6 12.6l1 1 1.8-2" stroke="#58a6ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="6" cy="18" r="3" stroke="#58a6ff" strokeWidth="1.6" />
              <path d="M4.6 18.6l1 1 1.8-2" stroke="#58a6ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.6 7.4L15.4 10.6" stroke="#58a6ff" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M15.4 13.4L8.6 16.6" stroke="#58a6ff" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          }
        />
        <FeatureRow
          tile="tile-dark"
          title="Security"
          icon={
            <svg className="icon icon-security" viewBox="0 0 24 24" fill="none">
              <path d="M12 2.5l7 2.6v5.4c0 4.7-3 8.4-7 9.5-4-1.1-7-4.8-7-9.5V5.1l7-2.6Z" fill="#4f8cff" />
              <rect x="9" y="10.5" width="6" height="5" rx="1.2" fill="white" />
              <path d="M10.2 10.5V9a1.8 1.8 0 0 1 3.6 0v1.5" stroke="white" strokeWidth="1.3" fill="none" />
            </svg>
          }
        />
      </ul>

      <div className="stats-row">
        <Stat divider={false} value="100M+" label="Developers" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.4" fill="#a371f7" /><path d="M2.8 19c0-3.3 2.7-5.6 6.2-5.6s6.2 2.3 6.2 5.6" stroke="#a371f7" strokeWidth="1.8" strokeLinecap="round" /><circle cx="17" cy="9" r="2.6" fill="none" stroke="#a371f7" strokeWidth="1.8" /><path d="M15.6 13.6c2.7.2 4.6 2.1 4.6 5" stroke="#a371f7" strokeWidth="1.8" strokeLinecap="round" fill="none" /></svg>} />
        <Stat value="420M+" label="Repositories" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><rect x="5" y="3.5" width="14" height="10" rx="1.6" fill="#a371f7" /><rect x="7.3" y="5.6" width="9.4" height="5.8" rx="0.6" fill="#0d1117" /><path d="M2.5 19c0-1.4 1.1-2 2.3-2h14.4c1.2 0 2.3.6 2.3 2v.6c0 .4-.3.7-.7.7H3.2a.7.7 0 0 1-.7-.7V19Z" fill="#a371f7" /></svg>} />
        <Stat value="90%" label="Fortune 100" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.5l-5.8 3 1.1-6.5-4.7-4.6 6.5-.9L12 2.6Z" stroke="#a371f7" strokeWidth="1.6" strokeLinejoin="round" /></svg>} />
      </div>

      <div className="trust-row">
        <div className="avatars">
          <span className="avatar" style={{ background: "linear-gradient(135deg,#f2a7c3,#d98fd6)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
          <span className="avatar" style={{ background: "linear-gradient(135deg,#9fd3f5,#7fb2ee)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
          <span className="avatar" style={{ background: "linear-gradient(135deg,#caa6f7,#8f7ae0)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
        </div>
        <p className="trust-text">
          Trusted by developers
          <br />
          <span className="trust-gradient">around the world</span>
        </p>
      </div>
    </div>
  );
}

function LinearCard() {
  return (
    <div className="promo-card promo-card--linear">
      <header className="header">
        <div className="brand">
          <span className="brand-logo">
            <svg viewBox="0 0 40 40">
              <defs>
                <linearGradient id="linear-badge" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8b7bf7" />
                  <stop offset="100%" stopColor="#5b4cd6" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="20" fill="url(#linear-badge)" />
              <g stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.95">
                <line x1="10" y1="22" x2="18" y2="14" />
                <line x1="13" y1="27" x2="24" y2="16" />
                <line x1="17" y1="31" x2="29" y2="19" />
                <line x1="22" y1="33" x2="32" y2="23" />
              </g>
            </svg>
          </span>
          <span className="brand-name">Linear</span>
        </div>
        <div className="new-badge">NEW</div>
      </header>

      <h1 className="headline">
        <span className="headline-white">Agile development.</span>
        <span className="headline-accent">Managed perfectly.</span>
      </h1>

      <p className="subhead">Plan, track, and ship better features with complete clarity and speed.</p>

      <ul className="feature-list">
        <FeatureRow title="Issue Tracking" icon={<svg viewBox="0 0 24 24" fill="none"><circle cx="5" cy="6.5" r="1.4" fill="#a371f7" /><circle cx="5" cy="12" r="1.4" fill="#a371f7" /><circle cx="5" cy="17.5" r="1.4" fill="#a371f7" /><path d="M9.5 6.5h9M9.5 12h9M9.5 17.5h9" stroke="#a371f7" strokeWidth="1.8" strokeLinecap="round" /></svg>} />
        <FeatureRow title="Sprint Planning" icon={<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7" stroke="#a371f7" strokeWidth="2" strokeDasharray="4 3.4" /></svg>} />
        <FeatureRow title="Roadmaps" icon={<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="5.5" width="16" height="14" rx="2.4" stroke="#a371f7" strokeWidth="1.8" /><path d="M4 9.5h16" stroke="#a371f7" strokeWidth="1.8" /><path d="M8 3.5v3.4M16 3.5v3.4" stroke="#a371f7" strokeWidth="1.8" strokeLinecap="round" /><circle cx="8.4" cy="14" r="1.1" fill="#a371f7" /></svg>} />
        <FeatureRow title="Workflow Automation" icon={<svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.3" stroke="#a371f7" strokeWidth="1.7" /><circle cx="6" cy="18" r="2.3" stroke="#a371f7" strokeWidth="1.7" /><circle cx="18" cy="12" r="2.3" stroke="#a371f7" strokeWidth="1.7" /><path d="M6 8.3V15.7" stroke="#a371f7" strokeWidth="1.7" strokeLinecap="round" /><path d="M8.1 6.9L15.9 10.9M8.1 17.1L15.9 13.1" stroke="#a371f7" strokeWidth="1.7" strokeLinecap="round" /></svg>} />
      </ul>

      <div className="stats-row">
        <Stat divider={false} value="30K+" label="Teams" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.4" stroke="#a371f7" strokeWidth="1.6" /><path d="M2.8 19c0-3.3 2.7-5.6 6.2-5.6s6.2 2.3 6.2 5.6" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" fill="none" /><circle cx="17.2" cy="9" r="2.4" stroke="#a371f7" strokeWidth="1.6" /><path d="M15.9 13.5c2.5.3 4.2 2.1 4.2 5" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" fill="none" /></svg>} />
        <Stat value="200K+" label="Users" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#a371f7" strokeWidth="1.6" /><ellipse cx="12" cy="12" rx="4" ry="9" stroke="#a371f7" strokeWidth="1.6" /><path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" stroke="#a371f7" strokeWidth="1.4" /></svg>} />
        <Stat value="99.9%" label="Uptime" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#a371f7" /></svg>} />
      </div>

      <div className="trust-row">
        <div className="avatars">
          <span className="avatar" style={{ borderColor: "#a371f7", background: "linear-gradient(135deg,#f2a7c3,#d98fd6)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
          <span className="avatar" style={{ borderColor: "#a371f7", background: "linear-gradient(135deg,#9fd3f5,#7fb2ee)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
          <span className="avatar" style={{ borderColor: "#a371f7", background: "linear-gradient(135deg,#caa6f7,#8f7ae0)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
        </div>
        <p className="trust-text">
          Loved by developers
          <br />
          worldwide
        </p>
        <div className="brand-logos">
          <span className="logo-vercel" aria-label="Vercel"><svg viewBox="0 0 24 24" width="14" height="14"><path d="M12 3 22 20H2Z" fill="white" /></svg>Vercel</span>
          <span className="logo-notion" aria-label="Notion"><span className="notion-box">N</span></span>
          <span className="logo-loom" aria-label="Loom"><svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="10" fill="none" stroke="#fdd835" strokeWidth="2" strokeDasharray="1.5 3.4" /><circle cx="12" cy="12" r="4.5" fill="#fdd835" /></svg>loom</span>
        </div>
      </div>
    </div>
  );
}

function SentryCard() {
  return (
    <div className="promo-card promo-card--sentry">
      <header className="header">
        <div className="brand">
          <span className="brand-logo">
            <svg viewBox="0 0 40 40">
              <rect x="0.5" y="0.5" width="39" height="39" rx="10" fill="#161225" stroke="#3d2f66" />
              <path d="M20 9 33 30H7Z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              <path d="M14 30c0-5 3-8 6-8s6 3 6 8" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <span className="brand-name">Sentry</span>
        </div>
        <div className="new-badge">NEW</div>
      </header>

      <h1 className="headline">
        <span className="headline-white">Reliability.</span>
        <span className="headline-accent">Monitored continuously.</span>
      </h1>

      <p className="subhead">Detect, triage, and resolve issues before they impact your users.</p>

      <ul className="feature-list">
        <FeatureRow title="Error Monitoring" icon={<svg viewBox="0 0 24 24" fill="none"><rect x="8.5" y="8.5" width="7" height="9" rx="3.5" stroke="#a371f7" strokeWidth="1.6" /><path d="M12 8.5V6" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" /><path d="M9.5 6.2 8 4.8M14.5 6.2 16 4.8" stroke="#a371f7" strokeWidth="1.4" strokeLinecap="round" /><path d="M8.5 11H5M8.5 14.5H5M15.5 11h3.5M15.5 14.5h3.5" stroke="#a371f7" strokeWidth="1.4" strokeLinecap="round" /><path d="M9 18.5 7 20.5M15 18.5l2 2" stroke="#a371f7" strokeWidth="1.4" strokeLinecap="round" /></svg>} />
        <FeatureRow title="Performance Monitoring" icon={<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="14" rx="2.4" stroke="#a371f7" strokeWidth="1.6" /><path d="M7 14l3-3 2.5 2 4.5-5" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="17" cy="8" r="0.9" fill="#a371f7" /></svg>} />
        <FeatureRow title="Alerts & Notifications" icon={<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5c-2.3 0-4 1.9-4 4.4v3.1l-1.6 2.8c-.3.5.1 1.2.7 1.2h9.8c.6 0 1-.7.7-1.2L16 11V7.9c0-2.5-1.7-4.4-4-4.4Z" stroke="#a371f7" strokeWidth="1.6" strokeLinejoin="round" /><path d="M10 17.5a2 2 0 0 0 4 0" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" /></svg>} />
        <FeatureRow title="Issue Tracking" icon={<svg viewBox="0 0 24 24" fill="none"><path d="M11 3.5H7.4L3.5 7.4V11l9.6 9.6a1.6 1.6 0 0 0 2.3 0l4.2-4.2a1.6 1.6 0 0 0 0-2.3L11 3.5Z" stroke="#a371f7" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="8" cy="8" r="1.3" stroke="#a371f7" strokeWidth="1.4" /></svg>} />
      </ul>

      <div className="stats-row">
        <Stat divider={false} value="3M+" label="Events" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.4" stroke="#a371f7" strokeWidth="1.6" /><path d="M2.8 19c0-3.3 2.7-5.6 6.2-5.6s6.2 2.3 6.2 5.6" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" fill="none" /><circle cx="17.2" cy="9" r="2.4" stroke="#a371f7" strokeWidth="1.6" /><path d="M15.9 13.5c2.5.3 4.2 2.1 4.2 5" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" fill="none" /></svg>} />
        <Stat value="75+" label="Organizations" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#a371f7" strokeWidth="1.6" /><ellipse cx="12" cy="12" rx="4" ry="9" stroke="#a371f7" strokeWidth="1.6" /><path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" stroke="#a371f7" strokeWidth="1.4" /></svg>} />
        <Stat value="300+" label="Source Maps" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><path d="M8.5 6 3.5 12l5 6M15.5 6l5 6-5 6" stroke="#a371f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
        <Stat value="99.99%" label="Uptime" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><path d="M12 3 4 6v5.5c0 5 3.4 8.5 8 9.5 4.6-1 8-4.5 8-9.5V6Z" stroke="#a371f7" strokeWidth="1.6" strokeLinejoin="round" /><path d="M8.5 12.2l2.4 2.4 4.6-5" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
      </div>

      <div className="trust-row">
        <div className="avatars">
          <span className="avatar" style={{ background: "linear-gradient(135deg,#f2a7c3,#d98fd6)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
          <span className="avatar" style={{ background: "linear-gradient(135deg,#9fd3f5,#7fb2ee)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
          <span className="avatar" style={{ background: "linear-gradient(135deg,#caa6f7,#8f7ae0)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
        </div>
        <p className="trust-text">
          Trusted by developers
          <br />
          worldwide
        </p>
        <div className="brand-logos">
          <span className="logo-sentry" aria-label="Sentry"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 5 20 18H4Z" fill="none" stroke="white" strokeWidth="1.8" strokeLinejoin="round" /></svg>Sentry</span>
          <span className="logo-vercel" aria-label="Vercel"><svg viewBox="0 0 24 24" width="14" height="14"><path d="M12 3 22 20H2Z" fill="white" /></svg>Vercel</span>
          <span className="logo-loom" aria-label="Loom"><svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="10" fill="none" stroke="#fdd835" strokeWidth="2" strokeDasharray="1.5 3.4" /><circle cx="12" cy="12" r="4.5" fill="#fdd835" /></svg>loom</span>
        </div>
      </div>
    </div>
  );
}

function VercelCard() {
  return (
    <div className="promo-card promo-card--vercel">
      <header className="header">
        <div className="brand">
          <span className="brand-logo"><svg viewBox="0 0 24 24"><path d="M12 3 21 19H3Z" fill="white" /></svg></span>
          <span className="brand-name">Vercel</span>
        </div>
        <div className="new-badge">NEW</div>
      </header>

      <h1 className="headline">
        <span className="headline-white">Deploy faster.</span>
        <span className="headline-accent">Perform anywhere.</span>
      </h1>

      <p className="subhead">Ship production-ready apps with speed, reliability, and global performance.</p>

      <ul className="feature-list">
        <FeatureRow title="Instant Deployments" icon={<svg viewBox="0 0 24 24" fill="none"><path d="M12 20V5M6 11l6-6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
        <FeatureRow title="Edge Network" icon={<svg viewBox="0 0 24 24" fill="white"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></svg>} />
        <FeatureRow title="Global Performance" icon={<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" /><ellipse cx="12" cy="12" rx="4" ry="9" stroke="white" strokeWidth="1.8" /><path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" stroke="white" strokeWidth="1.5" /></svg>} />
        <FeatureRow title="Security & Reliability" icon={<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="white" strokeWidth="1.8" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="white" strokeWidth="1.8" /><circle cx="12" cy="15" r="1.4" fill="white" /></svg>} />
      </ul>

      <div className="stats-row">
        <Stat divider={false} value="250K+" label="Developers" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.4" stroke="#a371f7" strokeWidth="1.6" /><path d="M2.8 19c0-3.3 2.7-5.6 6.2-5.6s6.2 2.3 6.2 5.6" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" fill="none" /><circle cx="17.2" cy="9" r="2.4" stroke="#a371f7" strokeWidth="1.6" /><path d="M15.9 13.5c2.5.3 4.2 2.1 4.2 5" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" fill="none" /></svg>} />
        <Stat value="150+" label="Countries" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#a371f7" strokeWidth="1.6" /><ellipse cx="12" cy="12" rx="4" ry="9" stroke="#a371f7" strokeWidth="1.6" /><path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" stroke="#a371f7" strokeWidth="1.4" /></svg>} />
        <Stat value="1T+" label="Requests / Day" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#a371f7" /></svg>} />
        <Stat value="99.99%" label="Uptime" icon={<svg className="stat-icon" viewBox="0 0 24 24" fill="none"><path d="M12 3 4 6v5.5c0 5 3.4 8.5 8 9.5 4.6-1 8-4.5 8-9.5V6Z" stroke="#a371f7" strokeWidth="1.6" strokeLinejoin="round" /><path d="M8.5 12.2l2.4 2.4 4.6-5" stroke="#a371f7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
      </div>

      <div className="trust-row">
        <div className="avatars">
          <span className="avatar" style={{ background: "linear-gradient(135deg,#f2a7c3,#d98fd6)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
          <span className="avatar" style={{ background: "linear-gradient(135deg,#9fd3f5,#7fb2ee)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
          <span className="avatar" style={{ background: "linear-gradient(135deg,#caa6f7,#8f7ae0)" }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3.6" fill="rgba(255,255,255,0.85)" /><path d="M4.5 20c0-4 3.4-6.6 7.5-6.6s7.5 2.6 7.5 6.6" fill="rgba(255,255,255,0.85)" /></svg></span>
        </div>
        <p className="trust-text">
          Trusted by product teams
          <br />
          at the world&rsquo;s best companies
        </p>
        <div className="brand-logos">
          <span className="logo-asana" aria-label="Asana"><svg viewBox="0 0 24 24" width="16" height="16" fill="#9199a3"><circle cx="12" cy="5" r="3.4" /><circle cx="5.5" cy="16.5" r="3.4" /><circle cx="18.5" cy="16.5" r="3.4" /></svg>asana</span>
          <span className="logo-loom" aria-label="Loom"><svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="10" fill="none" stroke="#fdd835" strokeWidth="2" strokeDasharray="1.5 3.4" /><circle cx="12" cy="12" r="4.5" fill="#fdd835" /></svg>loom</span>
          <span className="logo-ebay" aria-label="eBay"><span className="e-red">e</span><span className="e-blue">b</span><span className="e-yellow">a</span><span className="e-green">y</span></span>
        </div>
      </div>
    </div>
  );
}

const CARDS = [FigmaCard, GithubCard, LinearCard, SentryCard, VercelCard];

export function TrustShowcase() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = Array.from(stack.querySelectorAll<HTMLElement>(".stack-card"));
    const HOLD_MS = 2000;
    const TRANS_MS = 950;
    let index = 0;
    let interval: number | undefined;

    const start = () => {
      if (!cards.length) return;
      cards[0].classList.add("is-active");
      if (prefersReducedMotion || cards.length < 2) return;
      interval = window.setInterval(() => {
        const current = cards[index];
        current.classList.remove("is-active");
        current.classList.add("is-exit");
        index = (index + 1) % cards.length;
        cards[index].classList.add("is-active");
        window.setTimeout(() => current.classList.remove("is-exit"), TRANS_MS);
      }, HOLD_MS + TRANS_MS);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.45 },
    );
    observer.observe(stack);

    return () => {
      observer.disconnect();
      if (interval) window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="touch-tomorrow light-section section-pad" id="touch-tomorrow">
      <div className="ttbg" aria-hidden="true">
        <span className="ttbg-dotgrid ttbg-dotgrid--left" />
        <span className="ttbg-dotgrid ttbg-dotgrid--right" />
        <svg className="ttbg-lines" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M40,340 C110,300 190,300 240,220 C280,150 300,90 380,20" />
          <path d="M1160,340 C1090,300 1010,300 960,220 C920,150 900,90 820,20" />
        </svg>
        <span className="ttbg-dot" style={{ "--x": "12%", "--y": "32%" } as CSSPropertiesWithVars} />
        <span className="ttbg-dot" style={{ "--x": "88%", "--y": "22%" } as CSSPropertiesWithVars} />
        <span className="ttbg-dot" style={{ "--x": "92%", "--y": "56%" } as CSSPropertiesWithVars} />
        <span className="ttbg-dot" style={{ "--x": "6%", "--y": "68%" } as CSSPropertiesWithVars} />
        <span className="ttbg-dot ttbg-dot--sm" style={{ "--x": "22%", "--y": "12%" } as CSSPropertiesWithVars} />
        <span className="ttbg-dot ttbg-dot--sm" style={{ "--x": "78%", "--y": "70%" } as CSSPropertiesWithVars} />
      </div>
      <div className="container narrow">
        <div className="section-intro centered reveal">
          <h2>
            Shaping tomorrow, <span>today</span>
          </h2>
        </div>

        <div className="card-stack reveal" data-card-stack aria-hidden="true" ref={stackRef}>
          {CARDS.map((Card, index) => (
            <div className="stack-card" style={{ "--i": index } as CSSPropertiesWithVars} key={index}>
              <Card />
            </div>
          ))}
        </div>

        <ul className="module-row reveal" data-delay="1">
          <li>Frontend</li>
          <li>Backend</li>
          <li>APIs</li>
          <li>DevOps</li>
          <li>QA</li>
        </ul>
      </div>
    </section>
  );
}

type CSSPropertiesWithVars = CSSProperties & Record<`--${string}`, string | number>;
