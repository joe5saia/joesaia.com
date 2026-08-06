// CTA band + footer (copy from partials/cta-band.html & footer.html)
function CTA() {
  const { Button } = window.SaiaAIDesignSystem_ac1fa8;
  return (
    <section id="contact" style={{ padding: "clamp(3rem,6vw,5rem) 0", background: "linear-gradient(135deg, var(--color-cream-2), rgba(194,164,95,0.11))" }}>
      <div style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "clamp(2rem,6vw,5rem)", alignItems: "center" }}>
        <div>
          <p style={{ margin: "0 0 0.75rem", color: "var(--color-gold)", fontSize: "0.77rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase" }}>Start a conversation</p>
          <h2 style={{ margin: 0, maxWidth: 760, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(2.15rem,4.8vw,4rem)", letterSpacing: "-0.02em", lineHeight: 1.02, color: "var(--color-ink)" }}>Tell Joe what your business is trying to do.</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "flex-end" }}>
          <Button variant="primary" href="mailto:Joe5saia@gmail.com">Email Joe</Button>
          <Button variant="ghost" href="#">Schedule a consultation</Button>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;

function Footer() {
  const { Logo } = window.SaiaAIDesignSystem_ac1fa8;
  const cols = [
    ["Services", ["Custom Websites", "AI Consulting & Automation"]],
    ["Company", ["About Joe", "Contact"]],
    ["Local", ["West Orange", "Essex County", "Livingston", "South Orange"]],
  ];
  return (
    <footer style={{ padding: "4rem 0 2rem", background: "var(--color-ink)", color: "var(--color-mist)" }}>
      <div style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.7fr 0.7fr 1fr", gap: "clamp(2rem,6vw,5rem)", alignItems: "start" }}>
          <div>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", marginBottom: "1rem" }}>
              <Logo size="md" onDark />
            </a>
            <p style={{ color: "var(--color-mist)", maxWidth: 280 }}>Boutique software consulting in West Orange, NJ. Practical software for Essex County businesses.</p>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <h2 style={{ margin: "0 0 0.85rem", fontFamily: "var(--font-sans)", fontSize: "0.8rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-cream-2)" }}>{h}</h2>
              <ul style={{ display: "grid", gap: "0.4rem", padding: 0, margin: 0, listStyle: "none" }}>
                {items.map((i) => <li key={i}><a href="#" style={{ color: "var(--color-cream-2)", textDecoration: "underline", textDecorationColor: "rgba(194,164,95,0.62)", textUnderlineOffset: "4px" }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(168,178,194,0.2)", marginTop: "3rem", paddingTop: "1.4rem", color: "rgba(168,178,194,0.72)", fontSize: "0.9rem" }}>© 2026 SaiaAI · Joe Saia · West Orange, NJ</div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
