const STATS = [
  { value: "4+", label: "Years in Business" },
  { value: "30+", label: "Projects Delivered" },
  { value: "34", label: "Service Offerings" },
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
