const TEAM = [
  { letter: "J", gradient: "#f2c9a0,#c97a4e", name: "Jamilur R.", role: "Founder & Engineer" },
  { letter: "S", gradient: "#a0c9f2,#4e7ac9", name: "Sara N.", role: "Product Design" },
  { letter: "M", gradient: "#c9a0e0,#7a4ec9", name: "Marcus T.", role: "Backend Engineering" },
  { letter: "L", gradient: "#a0e0c0,#4ec98f", name: "Lena K.", role: "QA & Delivery" },
];

export function TeamGrid() {
  return (
    <section className="abt-team">
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
    </section>
  );
}
