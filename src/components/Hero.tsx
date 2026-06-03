import { Download, Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 2rem 4rem", position: "relative", overflow: "hidden" }}>

      {/* Orbs */}
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "rgba(110,231,183,0.06)", filter: "blur(80px)", top: -200, right: -100, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "rgba(167,139,250,0.05)", filter: "blur(80px)", bottom: 0, left: -150, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div className="grid lg:grid-cols-2" style={{ gap: "4rem", alignItems: "center" }}>

          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(110,231,183,0.08)", border: "1px solid rgba(110,231,183,0.2)",
              borderRadius: 100, padding: "0.4rem 1rem", fontSize: "0.8rem",
              color: "var(--accent)", marginBottom: "1.5rem", letterSpacing: "0.05em"
            }}>
              <span style={{ width: 7, height: 7, background: "var(--accent)", borderRadius: "50%", animation: "pulse 2s infinite" }} />
              Open to Work — Immediate Joiner
            </div>

            {/* Location */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>
              <MapPin size={14} /> Tiruchirappalli, Tamil Nadu
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: "Syne, sans-serif", fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05,
              letterSpacing: "-0.03em", marginBottom: "1.2rem"
            }}>
              Software<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(240,240,248,0.25)" }}>Engineer</span><br />
              <span style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}></span>
            </h1>

            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem", fontWeight: 300, maxWidth: 460 }}>
              Building scalable, production-ready web apps using <strong style={{ color: "var(--text)", fontWeight: 500 }}>MERN Stack, WordPress, PHP</strong> and <strong style={{ color: "var(--text)", fontWeight: 500 }}>AWS Cloud</strong> — with real measurable impact.
            </p>

            {/* Stats */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem", marginBottom: "2rem",
              background: "var(--bg2)", border: "1px solid var(--border)",
              borderRadius: 16, padding: "1.2rem", position: "relative", overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />
              {[
                { num: "40%", label: "Data Entry ↓" },
                { num: "15%", label: "AWS Cost ↓" },
                { num: "25%", label: "Efficiency ↑" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--accent)" }}>{s.num}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <a href="/Sureshkumar-M-Resume.pdf" download style={{
                background: "var(--accent)", color: "#0a0a0f",
                padding: "0.75rem 1.8rem", borderRadius: 100,
                fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem"
              }}>
                <Download size={16} /> Download Resume
              </a>
              <a href="#contact" style={{
                background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
                color: "var(--text)", padding: "0.75rem 1.8rem",
                borderRadius: 100, fontSize: "0.9rem", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem"
              }}>
                Let's Talk <ArrowRight size={16} />
              </a>
            </div>

            {/* Social */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>Find me on</span>
              <div style={{ width: 32, height: 1, background: "var(--border)" }} />
              {[
                { href: "https://linkedin.com/in/sureshkumar-m-77424723a", icon: <Linkedin size={16} /> },
                { href: "https://github.com/Sirz55", icon: <Github size={16} /> },
                { href: "mailto:sureshmurugan919@gmail.com", icon: <Mail size={16} /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--muted)", textDecoration: "none", transition: "all 0.2s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "rgba(110,231,183,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex justify-center lg:justify-end">
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -24, background: "linear-gradient(135deg, rgba(110,231,183,0.1), rgba(167,139,250,0.08))", borderRadius: 32, filter: "blur(20px)" }} />
              <div style={{ position: "relative", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 28, padding: 8 }}>
                <div style={{ width: 288, height: 320, borderRadius: 20, overflow: "hidden" }}>
                  <img
                    src="https://i.postimg.cc/GhFkpVm9/Sureshkumar-Image.jpg"
                    alt="Sureshkumar M"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div style={{
                position: "absolute", top: -12, left: -12,
                background: "var(--accent)", color: "#0a0a0f",
                borderRadius: 16, padding: "0.5rem 0.75rem", textAlign: "center",
                fontFamily: "Syne, sans-serif"
              }}>
              <div
  style={{
    fontSize: "1.2rem",
    fontWeight: 800,
    fontFamily: "Inter, sans-serif"
  }}
>
  1+
</div>
                <div style={{ fontSize: "0.7rem", fontWeight: 600 }}>Yrs Exp</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </section>
  );
};

export default Hero;