import { GraduationCap, Trophy, MapPin, Briefcase, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" style={{ padding: "5rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", marginBottom: "0.75rem" }}>About</p>
        <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
          Who I <span style={{ color: "var(--muted)" }}>am</span>
        </h2>

        {/* Bio card */}
        <div style={{
          background: "var(--bg2)", border: "1px solid var(--border)",
          borderRadius: 20, padding: "2rem", marginBottom: "1.5rem",
          position: "relative", overflow: "hidden"
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,var(--accent2),transparent)" }} />

          <div className="grid lg:grid-cols-2" style={{ gap: "2.5rem", alignItems: "start" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(110,231,183,0.08)", border: "1px solid rgba(110,231,183,0.2)",
                borderRadius: 100, padding: "0.4rem 1rem", fontSize: "0.8rem",
                color: "var(--accent)", marginBottom: "1.2rem"
              }}>
                <span style={{ width: 7, height: 7, background: "var(--accent)", borderRadius: "50%", animation: "pulse 2s infinite" }} />
                Open to Full-Time Roles — Immediate Joiner
              </div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem" }}>Full Stack Developer</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
                Full Stack Developer with <strong style={{ color: "var(--text)" }}>1+ year of professional experience</strong> at{" "}
                <strong style={{ color: "var(--text)" }}>NearTekPod, Tiruchirappalli</strong> — building production-ready web apps using{" "}
                <strong style={{ color: "var(--text)" }}>React.js, Next.js, Node.js, MongoDB, WordPress, PHP</strong> and <strong style={{ color: "var(--text)" }}>AWS Cloud</strong>.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { icon: <Briefcase size={14} />, text: "NearTekPod, Tiruchirappalli" },
                  { icon: <MapPin size={14} />, text: "Tiruchirappalli, Tamil Nadu, India" },
                  { icon: <Mail size={14} />, text: "sureshmurugan919@gmail.com" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--muted)", fontSize: "0.85rem" }}>
                    <span style={{ color: "var(--accent)" }}>{item.icon}</span> {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: "0.75rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Impact Delivered</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
                {[
                  { num: "40%", label: "Data Entry Reduced", c: "var(--accent)" },
                  { num: "15%", label: "AWS Cost Cut", c: "var(--accent2)" },
                  { num: "25%", label: "Efficiency Improved", c: "var(--accent3)" },
                ].map((s) => (
                  <div key={s.label} style={{ background: "var(--bg3)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "1.4rem", fontWeight: 700, color: s.c }}>{s.num}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Tech Stack</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["React.js","Next.js","Node.js","WordPress","PHP","AWS","MongoDB","MySQL","TypeScript"].map((t) => (
                  <span key={t} style={{
                    padding: "0.3rem 0.75rem", borderRadius: 6, fontSize: "0.78rem",
                    background: "rgba(110,231,183,0.08)", color: "var(--accent)",
                    border: "1px solid rgba(110,231,183,0.15)"
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 cards */}
        <div className="grid md:grid-cols-3" style={{ gap: "1.5rem" }}>
          {[
            {
              icon: <Briefcase size={20} />, title: "Experience", sub: "Feb 2024 – Mar 2025",
              content: <>
                <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>Associate Software Engineer</p>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.75rem" }}>NearTekPod, Tiruchirappalli</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {["MERN Stack","Next.js","WordPress","PHP","AWS"].map(t => (
                    <span key={t} style={{ fontSize: "0.72rem", background: "rgba(110,231,183,0.08)", color: "var(--accent)", border: "1px solid rgba(110,231,183,0.15)", padding: "0.2rem 0.5rem", borderRadius: 6 }}>{t}</span>
                  ))}
                </div>
              </>
            },
            {
              icon: <GraduationCap size={20} />, title: "Education", sub: "2019 – 2023",
              content: <>
                <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>B.E — Electronics & Communication</p>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.75rem" }}>K.Ramakrishnan College of Engineering</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Trophy size={14} style={{ color: "#f59e0b" }} />
                  <span style={{ color: "#f59e0b", fontWeight: 600, fontSize: "0.9rem" }}>CGPA: 8.70</span>
                </div>
              </>
            },
          {
  icon: <Trophy size={20} />,
  title: "Certifications",
  sub: "10 Completed",
  content: <>
    <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>
      AI, Cloud & Full Stack Certifications
    </p>

    <p
      style={{
        fontSize: "0.8rem",
        color: "var(--muted)",
        marginBottom: "0.75rem",
      }}
    >
      Anthropic, ServiceNow, Skill India & Simplilearn
    </p>

    {[
      { c: "#ef4444", t: "Oracle OCI Foundation" },
      { c: "#22c55e", t: "MERN Stack — Simplilearn" },
      { c: "#f97316", t: "AWS Cloud Basics — Simplilearn" },
      { c: "#a78bfa", t: "PHP Fundamentals — Simplilearn" },

      { c: "#06b6d4", t: "Introduction to Generative AI — Skill India" },
      { c: "#14b8a6", t: "Agentic AI Executive Micro-Certification — ServiceNow" },

      { c: "#f59e0b", t: "Building with the Claude API — Anthropic" },
      { c: "#ec4899", t: "AI Fluency Framework & Foundations — Anthropic" },
      { c: "#8b5cf6", t: "Claude Code in Action — Anthropic" },
      { c: "#3b82f6", t: "Claude 101 — Anthropic" },
    ].map((cert) => (
      <div
        key={cert.t}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: cert.c,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: "0.8rem",
            color: "var(--muted)",
          }}
        >
          {cert.t}
        </span>
      </div>
    ))}
  </>
}
          ].map((card, i) => (
            <div key={i} style={{
              background: "var(--bg2)", border: "1px solid var(--border)",
              borderRadius: 16, padding: "1.5rem", transition: "border-color 0.2s"
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(110,231,183,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ background: "rgba(110,231,183,0.1)", border: "1px solid rgba(110,231,183,0.2)", borderRadius: 10, padding: "0.5rem", color: "var(--accent)" }}>{card.icon}</div>
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}>{card.title}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{card.sub}</div>
                </div>
              </div>
              {card.content}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </section>
  );
};

export default About;