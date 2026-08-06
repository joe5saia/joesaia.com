// Services grid + process (copy from services/*.md and partials/process.html)
function Services() {
  const { Eyebrow, ServiceCard } = window.SaiaAIDesignSystem_ac1fa8;
  return (
    <section id="services" style={{ padding: "clamp(4rem,8vw,7rem) 0", background: "var(--color-cream-2)" }}>
      <div style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto" }}>
        <div style={{ maxWidth: 760, marginBottom: "2rem" }}>
          <Eyebrow>What SaiaAI does</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(2.15rem,4.8vw,4rem)", letterSpacing: "-0.02em", lineHeight: 1.02, color: "var(--color-ink)" }}>Two ways to put technology to work.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "1rem" }}>
          <ServiceCard title="Custom Websites" href="#" linkLabel="Explore websites">
            A custom website tailored to your business, brand, and goals — not a cookie-cutter WordPress template. Responsive, fast, and built for local search.
          </ServiceCard>
          <ServiceCard title="AI Consulting & Automation" href="#" linkLabel="Explore AI & automation">
            Find high-leverage ways to use AI and automation in your business without spending money on tools you do not need.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
window.Services = Services;

function Process() {
  const { Eyebrow } = window.SaiaAIDesignSystem_ac1fa8;
  const steps = [
    ["01", "Understand", "Map the goals, customers, tools, constraints, and daily work behind the request."],
    ["02", "Prioritize", "Separate high-value opportunities from nice-to-have technology and avoid unnecessary spend."],
    ["03", "Build", "Deliver clean, maintainable software, websites, or automations that your business can trust."],
  ];
  return (
    <section style={{ padding: "clamp(4rem,8vw,7rem) 0" }}>
      <div style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(280px,0.8fr)", gap: "clamp(2rem,6vw,5rem)", alignItems: "start" }}>
        <div>
          <Eyebrow>How SaiaAI works</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(2.15rem,4.8vw,4rem)", letterSpacing: "-0.02em", lineHeight: 1.02, color: "var(--color-ink)" }}>Approachable consulting with premium technical execution.</h2>
          <p style={{ color: "var(--color-muted)", fontSize: "1.12rem" }}>Good software work starts with understanding the business. SaiaAI looks for the smallest high-quality solution that creates real leverage.</p>
        </div>
        <div style={{ display: "grid", gap: "1rem" }}>
          {steps.map(([n, t, d]) => (
            <article key={n} style={{ border: "1px solid var(--color-line)", borderRadius: "var(--radius-lg)", background: "rgba(250,248,242,0.92)", boxShadow: "var(--shadow-soft)", padding: "1.4rem" }}>
              <span style={{ display: "inline-flex", marginBottom: "0.85rem", color: "var(--color-gold)", fontWeight: 600 }}>{n}</span>
              <h3 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(1.4rem,2.3vw,2rem)", color: "var(--color-ink)" }}>{t}</h3>
              <p style={{ margin: "0.5rem 0 0", color: "var(--color-muted)" }}>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Process = Process;
