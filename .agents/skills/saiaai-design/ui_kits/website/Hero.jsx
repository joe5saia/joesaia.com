// SaiaAI homepage hero — copy lifted from content/_index.md and partials/hero.html
function Hero() {
  const { Button, Eyebrow, Badge, Card } = window.SaiaAIDesignSystem_ac1fa8;
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,6rem)" }}>
      <div style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(280px,0.8fr)", gap: "clamp(2rem,6vw,5rem)", alignItems: "center" }}>
        <div>
          <Eyebrow>West Orange, New Jersey</Eyebrow>
          <h1 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(3.3rem,8vw,7rem)", letterSpacing: "-0.025em", lineHeight: 1.02, color: "var(--color-ink)", maxWidth: 760 }}>Practical software for Essex County businesses.</h1>
          <p style={{ maxWidth: 680, margin: "1.35rem 0 0", color: "var(--color-muted)", fontSize: "clamp(1.05rem,2vw,1.25rem)" }}>SaiaAI is a boutique software consultancy led by Joe Saia, helping local businesses turn technology into clearer operations, stronger customer experiences, and measurable business improvement.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "1.75rem" }}>
            <Button variant="primary" href="#contact">Email Joe</Button>
            <Button variant="ghost" href="#contact">Schedule a consultation</Button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", marginTop: "2rem" }}>
            {["West Orange", "Essex County", "Livingston", "South Orange"].map((b) => <Badge key={b}>{b}</Badge>)}
          </div>
        </div>
        <Card topline>
          <p style={{ margin: "0 0 0.75rem", color: "var(--color-gold)", fontSize: "0.77rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase" }}>Boutique software consulting</p>
          <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(2rem,4vw,3.1rem)", lineHeight: 1.05, color: "var(--color-ink)" }}>Senior engineering judgment for small business problems.</h2>
          <p style={{ color: "var(--color-muted)" }}>Custom websites, practical automation, and AI-enabled workflows built with a clear understanding of how your business works.</p>
          <dl style={{ display: "grid", gap: "0.85rem", margin: "1.5rem 0 0" }}>
            {[["15 years", "writing and leading software work"], ["Local", "West Orange and Essex County focus"]].map(([t, d]) => (
              <div key={t} style={{ display: "grid", gap: "0.1rem", borderTop: "1px solid var(--color-line)", paddingTop: "0.85rem" }}>
                <dt style={{ color: "var(--color-gold)", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500, lineHeight: 1 }}>{t}</dt>
                <dd style={{ margin: 0, color: "var(--color-muted)" }}>{d}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </section>
  );
}
window.Hero = Hero;
