import { useState } from "react";

const allSkills = [
  { name: "React.js", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: "⚡", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎭", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Express.js", icon: "🚀", category: "Backend" },
  { name: "PHP", icon: "🐘", category: "Backend" },
  { name: "WordPress", icon: "📝", category: "Backend" },
  { name: "REST APIs", icon: "🔗", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "MySQL", icon: "🐬", category: "Database" },
  { name: "AWS EC2", icon: "☁️", category: "Cloud" },
  { name: "AWS S3", icon: "🪣", category: "Cloud" },
  { name: "Oracle OCI", icon: "🔴", category: "Cloud" },
  { name: "Vercel", icon: "▲", category: "Cloud" },
  { name: "Git & GitHub", icon: "🐙", category: "Tools" },
  { name: "Postman", icon: "📮", category: "Tools" },
  { name: "VS Code", icon: "💻", category: "Tools" },
  { name: "Agile / Scrum", icon: "🔁", category: "Methods" },
  { name: "SDLC", icon: "📊", category: "Methods" },
];

const tabs = ["All", "Frontend", "Backend", "Database", "Cloud", "Tools", "Methods"];

const accentMap: Record<string, string> = {
  Frontend: "var(--accent)",
  Backend: "var(--accent2)",
  Database: "var(--accent3)",
  Cloud: "#38bdf8",
  Tools: "#fb923c",
  Methods: "#facc15",
};

const Skills = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allSkills : allSkills.filter(s => s.category === active);

  return (
    <section id="skills" style={{ padding: "5rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", marginBottom: "0.75rem" }}>Capabilities</p>
        <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
          My <span style={{ color: "var(--muted)" }}>skills</span>
        </h2>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActive(tab)} style={{
              padding: "0.4rem 1rem", borderRadius: 100, fontSize: "0.82rem",
              border: `1px solid ${active === tab ? "rgba(110,231,183,0.4)" : "var(--border)"}`,
              background: active === tab ? "rgba(110,231,183,0.1)" : "transparent",
              color: active === tab ? "var(--accent)" : "var(--muted)",
              cursor: "pointer", transition: "all 0.2s",
              fontFamily: "inherit"
            }}>
              {tab}
              {tab !== "All" && <span style={{ marginLeft: 6, fontSize: "0.7rem", opacity: 0.6 }}>
                {allSkills.filter(s => s.category === tab).length}
              </span>}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", maxWidth: 900 }}>
          {filtered.map(skill => {
            const c = accentMap[skill.category] || "var(--accent)";
            return (
              <span key={skill.name} style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.5rem 1rem", borderRadius: 10, fontSize: "0.85rem",
                background: `${c}10`, color: c, border: `1px solid ${c}25`,
                transition: "all 0.2s", cursor: "default"
              }}
                onMouseEnter={e => (e.currentTarget.style.background = `${c}20`)}
                onMouseLeave={e => (e.currentTarget.style.background = `${c}10`)}
              >
                <span>{skill.icon}</span> {skill.name}
              </span>
            );
          })}
        </div>

        <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--muted)" }}>
          Showing <strong style={{ color: "var(--text)" }}>{filtered.length}</strong> skills{active !== "All" ? ` in ${active}` : ""}
        </p>
      </div>
    </section>
  );
};

export default Skills;