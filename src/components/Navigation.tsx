import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1rem 2rem", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      backdropFilter: "blur(20px)",
      background: "rgba(10,10,15,0.8)",
      borderBottom: "1px solid rgba(255,255,255,0.07)"
    }}>
      <a href="#home" style={{
        fontFamily: "Syne, sans-serif", fontWeight: 800,
        fontSize: "1.1rem", textDecoration: "none", color: "var(--text)"
      }}>
        S<span style={{ color: "var(--accent)" }}></span> K
      </a>

      {/* Desktop */}
      <div className="hidden md:flex" style={{ gap: "2rem", alignItems: "center" }}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} style={{
            color: "var(--muted)", textDecoration: "none",
            fontSize: "0.85rem", letterSpacing: "0.05em",
            textTransform: "uppercase", transition: "color 0.2s"
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >{link.label}</a>
        ))}
        <a href="mailto:sureshmurugan919@gmail.com" style={{
          background: "rgba(110,231,183,0.1)",
          border: "1px solid rgba(110,231,183,0.3)",
          color: "var(--accent)", padding: "0.5rem 1.2rem",
          borderRadius: "100px", fontSize: "0.85rem",
          textDecoration: "none", transition: "all 0.2s"
        }}>Hire me</a>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}
        style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer" }}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(10,10,15,0.97)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "1rem"
        }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.9rem" }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;