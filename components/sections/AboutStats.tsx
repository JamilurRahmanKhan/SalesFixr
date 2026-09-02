const STATS = [
  { value: "4+", label: "Years in Business" },
  { value: "10+", label: "Projects Delivered" },
  { value: "12", label: "Service Offerings" },
  { value: "4", label: "Team Members" },
];

export function AboutStats() {
  return (
    <section className="abt-stats-row">
      {STATS.map((stat) => (
        <div className="abt-stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
