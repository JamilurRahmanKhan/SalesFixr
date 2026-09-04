const TEAM = [
  { letter: "E", gradient: "#f2c9a0,#c97a4e", name: "Emon Bepari", role: "Project Manager" },
  { letter: "J", gradient: "#a0c9f2,#4e7ac9", name: "Jamilur Rahman Khan", role: "Lead Engineer" },
  { letter: "T", gradient: "#c9a0e0,#7a4ec9", name: "Tahamid Alif", role: "Research Analyst" },
  { letter: "N", gradient: "#a0e0c0,#4ec98f", name: "Nahid Ahmed Joy", role: "QA & Testing" },
];

export function TeamGrid() {
  return (
    <section className="abt-team">
      <div className="abt-team-inner">
        <h2 className="abt-heading">Meet the Team</h2>
        <p className="abt-sub">Expertise, focus, and follow-through — the people behind your project.</p>
        <div className="abt-team-grid">
          {TEAM.map((member) => (
            <div className="abt-team-card" key={member.name}>
              <span className="abt-team-avatar" style={{ background: `linear-gradient(135deg,${member.gradient})` }}>
                {member.letter}
              </span>
              <strong>{member.name}</strong>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
