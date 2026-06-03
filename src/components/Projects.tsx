import { ExternalLink } from "lucide-react";

const projects = [
  {
  num: "01",
  tags: ["WordPress", "PHP", "AWS EC2", "MySQL", "jQuery"],
  title: "Warranty & Claim Management Platform",
  desc: "Engineered a warranty registration and claims tracking platform using WordPress and PHP, enabling product registration, warranty claim submission, and claim status tracking through a structured admin workflow. Deployed on AWS EC2 with an automated AMI recycling solution to optimize infrastructure management.",
  impact: "↓ Reduced AWS cloud infrastructure costs by 15%",
  impactColor: "var(--accent3)",
},
  {
num: "02",
tags: ["WordPress", "PHP", "jQuery", "AJAX", "MySQL"],
title: "WordPress Form Builder Plugin",
desc: "Developed a production-grade WordPress plugin for drag-and-drop form creation without coding. Built the plugin architecture from scratch using custom post types, AJAX-based form management, and jQuery DataTables for efficient form submission tracking and administration.",
impact: "↓ Reduced manual data entry by 40%",
impactColor: "var(--accent)",
},

  {
    num: "03", tags: ["Next.js","React.js","Node.js","REST APIs"],
    title: "Low-Code Platform (LCP)",
    desc: "Internal business workflow management tool with dynamic UI built in Next.js to streamline team operations.",
    impact: "↑ Improved workflow efficiency by 25%", impactColor: "var(--accent2)",
  },
  {
num: "04",
tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
title: "Leave Tracker App",
desc: "Built a MERN-based leave management platform featuring role-based dashboards, leave approval workflows, holiday calendars, employee leave monitoring, and automated email notifications for streamlined HR operations.",
impact: " Automated leave approval workflow",
impactColor: "var(--accent)",
},

  {
    num: "05", tags: ["React.js","TypeScript","Tailwind CSS","Vite","Vercel"],
    title: "Personal Portfolio Website",
    desc: "Sleek portfolio built with React + TypeScript + Vite, featuring EmailJS contact integration.",
    impact: "→ Live on Vercel", impactColor: "var(--accent2)",
    live: "https://sureshkumar-portfolio.vercel.app",
  },
];

const tagColors = ["var(--accent)","var(--accent2)","var(--accent3)"];

const Projects = () => (
  <section id="projects" style={{ padding: "5rem 2rem", borderTop: "1px solid var(--border)" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", marginBottom: "0.75rem" }}>Work</p>
      <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
        Things I've <span style={{ color: "var(--muted)" }}>built</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.5rem" }}>
        {projects.map((p) => (
          <div key={p.num} style={{
            background: "var(--bg2)", border: "1px solid var(--border)",
            borderRadius: 16, padding: "1.8rem", display: "flex",
            flexDirection: "column", transition: "all 0.25s", cursor: "default"
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(110,231,183,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.1em", marginBottom: "1rem", fontFamily: "Syne, sans-serif" }}>{p.num}</div>
            <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{p.title}</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>{p.desc}</p>
            <div style={{ fontSize: "0.8rem", color: p.impactColor, fontWeight: 500, marginBottom: "1rem" }}>{p.impact}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: p.live ? "1rem" : 0 }}>
              {p.tags.map((t, i) => (
                <span key={t} style={{
                  padding: "0.25rem 0.6rem", borderRadius: 6, fontSize: "0.72rem",
                  background: `${tagColors[i % 3]}15`, color: tagColors[i % 3],
                  border: `1px solid ${tagColors[i % 3]}25`
                }}>{t}</span>
              ))}
            </div>
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                background: "var(--accent)", color: "#0a0a0f",
                padding: "0.5rem 1rem", borderRadius: 100,
                fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", width: "fit-content"
              }}>
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;