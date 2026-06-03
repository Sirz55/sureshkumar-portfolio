import { Code, Settings, Star, Briefcase, Zap, Database, Globe } from "lucide-react";

const services = [
  {
    icon: <Code size={22} />,
    title: "Full Stack Web Development",
    desc: "End-to-end web applications using React.js, Next.js, Node.js and Express.js — from UI to backend APIs.",
    tags: ["React.js", "Next.js", "Node.js"],
    impact: "2+ apps built",
    color: "var(--accent)",
  },
  {
    icon: <Globe size={22} />,
    title: "WordPress Plugin Development",
    desc: "Custom WordPress plugins with drag-and-drop forms, AJAX operations, email notifications and admin panel integration.",
    tags: ["WordPress", "PHP", "jQuery"],
    impact: "40% data entry reduced",
    color: "var(--accent2)",
  },
  {
    icon: <Settings size={22} />,
    title: "AWS Cloud Deployment",
    desc: "Production deployments on AWS EC2 and S3 with automated AMI recycling, cost optimization and performance tuning.",
    tags: ["AWS EC2", "AWS S3", "OCI"],
    impact: "15% cost reduction",
    color: "var(--accent3)",
  },
  {
    icon: <Zap size={22} />,
    title: "Low-Code Platform Development",
    desc: "Internal business tools and workflow automation platforms using Next.js for streamlined operations.",
    tags: ["Next.js", "REST APIs", "UI/UX"],
    impact: "25% efficiency boost",
    color: "var(--accent)",
  },
  {
    icon: <Briefcase size={22} />,
    title: "REST API Development",
    desc: "Scalable RESTful APIs with proper authentication, error handling and documentation using Node.js and Express.",
    tags: ["Node.js", "Express.js", "Postman"],
    impact: "Production ready",
    color: "var(--accent2)",
  },
  {
    icon: <Database size={22} />,
    title: "Database Management",
    desc: "Database architecture, query optimization and management using MongoDB and MySQL for scalable applications.",
    tags: ["MongoDB", "MySQL", "REST"],
    impact: "Optimized queries",
    color: "var(--accent3)",
  },
  {
    icon: <Star size={22} />,
    title: "Performance Optimization",
    desc: "Speed optimization, lazy loading, code splitting and cloud infrastructure tuning for faster load times.",
    tags: ["Vite", "AWS", "Next.js"],
    impact: "Faster load times",
    color: "var(--accent)",
  },
];

const Services = () => (
  <section id="expertise" style={{ padding: "5rem 2rem", borderTop: "1px solid var(--border)" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>

      <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", marginBottom: "0.75rem" }}>Expertise</p>
      <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
        What I <span style={{ color: "var(--muted)" }}>deliver</span>
      </h2>
      <p style={{ color: "var(--muted)", marginBottom: "3rem", fontSize: "0.95rem" }}>
        Services I build and deliver professionally
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.5rem" }}>
        {services.map((s, i) => (
          <div key={i}
            style={{
              background: "var(--bg2)", border: "1px solid var(--border)",
              borderRadius: 16, padding: "1.8rem", display: "flex",
              flexDirection: "column", transition: "all 0.25s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${s.color}40`;
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Icon + Impact */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.2rem" }}>
              <div style={{
                background: `${s.color}15`, border: `1px solid ${s.color}30`,
                borderRadius: 12, padding: "0.6rem", color: s.color
              }}>
                {s.icon}
              </div>
              <span style={{
                fontSize: "0.72rem", fontWeight: 600,
                background: `${s.color}10`, color: s.color,
                border: `1px solid ${s.color}25`,
                padding: "0.25rem 0.6rem", borderRadius: 6
              }}>
                {s.impact}
              </span>
            </div>

            {/* Title */}
            <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.6rem" }}>
              {s.title}
            </h3>

            {/* Desc */}
            <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "1.2rem", flex: 1 }}>
              {s.desc}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {s.tags.map(t => (
                <span key={t} style={{
                  fontSize: "0.72rem", padding: "0.25rem 0.6rem", borderRadius: 6,
                  background: "var(--bg3)", color: "var(--muted)",
                  border: "1px solid var(--border)"
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;