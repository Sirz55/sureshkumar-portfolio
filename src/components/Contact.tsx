import { useState } from "react";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    emailjs.send("service_7tuq5ce", "template_hwmyu6d", formData, "VCS-NfNG3TQQmkrE-")
      .then(() => { alert("✅ Message sent!"); setFormData({ name: "", email: "", subject: "", message: "" }); setSending(false); })
      .catch(() => { alert("❌ Failed. Please try again."); setSending(false); });
  };

  const inputStyle = {
    width: "100%", padding: "0.7rem 1rem", borderRadius: 10,
    background: "var(--bg3)", border: "1px solid var(--border)",
    color: "var(--text)", fontSize: "0.9rem", outline: "none",
    transition: "border-color 0.2s", fontFamily: "inherit"
  };

  return (
    <section id="contact" style={{ padding: "5rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", marginBottom: "0.75rem" }}>Let's talk</p>
        <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
          Available for <span style={{ color: "var(--accent)" }}>new roles</span>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "3rem", maxWidth: 500 }}>
          Currently open to full-time roles across India. Remote, hybrid, or on-site — let's build something great.
        </p>

        <div className="grid lg:grid-cols-2" style={{ gap: "3rem" }}>

          {/* Info */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { icon: <MapPin size={16} />, title: "Location", val: "Tiruchirappalli, TN", href: null },
                { icon: <Phone size={16} />, title: "Phone", val: "+91 9487092075", href: "tel:+919487092075" },
                { icon: <Mail size={16} />, title: "Email", val: "sureshmurugan919@gmail.com", href: "mailto:sureshmurugan919@gmail.com" },
                { icon: <Linkedin size={16} />, title: "LinkedIn", val: "sureshkumar-m-77424723a", href: "https://linkedin.com/in/sureshkumar-m-77424723a" },
                { icon: <Github size={16} />, title: "GitHub", val: "github.com/Sirz55", href: "https://github.com/Sirz55" },
              ].map((item, i) => (
                <div key={i}
                  onClick={() => item.href && window.open(item.href, "_blank")}
                  style={{
                    background: "var(--bg2)", border: "1px solid var(--border)",
                    borderRadius: 14, padding: "1rem", cursor: item.href ? "pointer" : "default",
                    transition: "border-color 0.2s"
                  }}
                  onMouseEnter={e => { if (item.href) e.currentTarget.style.borderColor = "rgba(110,231,183,0.25)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", marginBottom: "0.4rem" }}>{item.icon}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginBottom: "0.2rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text)", wordBreak: "break-all" }}>{item.val}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 14, padding: "1.2rem" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Open To These Roles</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.75rem" }}>
  {[
    "Full Stack Developer",
    "Frontend Developer",
    "Data Analyst",
    "Prompt Engineer",
    "Functional Consultant",
    "Business Analyst"
  ].map(r => (
    <span
      key={r}
      style={{
        fontSize: "0.75rem",
        background: "rgba(110,231,183,0.08)",
        color: "var(--accent)",
        border: "1px solid rgba(110,231,183,0.15)",
        padding: "0.25rem 0.6rem",
        borderRadius: 6
      }}
    >
      {r}
    </span>
  ))}
</div>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {[
                  { l: "Pan India", c: "var(--accent)" },
                  { l: "Remote", c: "var(--accent2)" },
                  { l: "Hybrid", c: "var(--accent3)" },
                  { l: "On-site", c: "#38bdf8" },
                ].map(x => (
                  <span key={x.l} style={{ fontSize: "0.75rem", background: `${x.c}15`, color: x.c, border: `1px solid ${x.c}30`, padding: "0.25rem 0.6rem", borderRadius: 100 }}>{x.l}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 20, padding: "2rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,var(--accent),transparent)" }} />
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="grid sm:grid-cols-2" style={{ gap: "1rem" }}>
                  {["name","email"].map(f => (
                    <div key={f}>
                      <label style={{ fontSize: "0.78rem", color: "var(--muted)", textTransform: "capitalize", display: "block", marginBottom: "0.4rem" }}>{f}</label>
                      <input name={f} type={f === "email" ? "email" : "text"}
                        value={formData[f as keyof typeof formData]}
                        onChange={handleChange} required
                        placeholder={f === "name" ? "Your Name" : "your@email.com"}
                        style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = "rgba(110,231,183,0.4)")}
                        onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "var(--muted)", display: "block", marginBottom: "0.4rem" }}>Subject</label>
                  <input name="subject" type="text" value={formData.subject} onChange={handleChange} required
                    placeholder="Job Opportunity / Collaboration"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(110,231,183,0.4)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "var(--muted)", display: "block", marginBottom: "0.4rem" }}>Message</label>
                  <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required
                    placeholder="Hi, I'd like to discuss an opportunity..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(110,231,183,0.4)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>
                <button type="submit" disabled={sending} style={{
                  background: "var(--accent)", color: "#0a0a0f",
                  padding: "0.85rem", borderRadius: 100, border: "none",
                  fontWeight: 700, fontSize: "0.95rem", cursor: sending ? "not-allowed" : "pointer",
                  opacity: sending ? 0.7 : 1, transition: "all 0.2s", fontFamily: "Syne, sans-serif"
                }}>
                  {sending ? "Sending..." : "Send Message"}
                </button>
                <p style={{ fontSize: "0.75rem", color: "var(--muted)", textAlign: "center" }}>Usually responds within 24 hours · Available for immediate joining</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ maxWidth: 1100, margin: "3rem auto 0", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>© {new Date().getFullYear()} Sureshkumar M. All rights reserved.</p>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {[
            { href: "https://linkedin.com/in/sureshkumar-m-77424723a", icon: <Linkedin size={15} /> },
            { href: "https://github.com/Sirz55", icon: <Github size={15} /> },
            { href: "mailto:sureshmurugan919@gmail.com", icon: <Mail size={15} /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{ width: 32, height: 32, background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "rgba(110,231,183,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
            >{s.icon}</a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;