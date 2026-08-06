// SaiaAI website — Header with sticky scroll state, services dropdown, mobile toggle
const { useState, useEffect } = React;

function Header() {
  const { Logo } = window.SaiaAIDesignSystem_ac1fa8;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const el = document.querySelector("[data-scroll]") || window;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const link = { display: "inline-flex", alignItems: "center", minHeight: 44, borderRadius: 999, padding: "0.45rem 0.8rem", color: "var(--color-muted)", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none" };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent", background: "rgba(244,242,236,0.9)", backdropFilter: "blur(18px)", boxShadow: scrolled ? "var(--shadow-header)" : "none", transition: "border-color 180ms ease, box-shadow 180ms ease" }}>
      <div style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 76, gap: "1rem" }}>
        <a href="#" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <Logo size="md" />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <a href="#" style={link}>Home</a>
          <div style={{ position: "relative" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <a href="#services" style={link}>Services</a>
            {open && (
              <div style={{ position: "absolute", top: "calc(100% + 0.5rem)", left: 0, display: "grid", minWidth: 310, padding: "0.55rem", border: "1px solid var(--color-line)", borderRadius: "var(--radius-md)", background: "var(--color-cream-2)", boxShadow: "var(--shadow-soft)" }}>
                {[["Websites", "Custom websites tailored to your business."], ["AI Consulting & Automation", "Find high-leverage ways to use AI without overspending."]].map(([t, s]) => (
                  <a key={t} href="#services" style={{ display: "grid", gap: "0.2rem", borderRadius: "var(--radius-sm)", padding: "0.85rem", textDecoration: "none" }}>
                    <span style={{ fontWeight: 600, color: "var(--color-ink)" }}>{t}</span>
                    <small style={{ color: "var(--color-muted)", fontSize: "0.82rem", lineHeight: 1.45 }}>{s}</small>
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#about" style={link}>About</a>
          <a href="#contact" style={link}>Contact</a>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", minHeight: 40, padding: "0.55rem 0.9rem", background: "var(--color-ink)", color: "var(--color-cream-2)", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Email Joe</a>
        </nav>
      </div>
    </header>
  );
}
window.Header = Header;
