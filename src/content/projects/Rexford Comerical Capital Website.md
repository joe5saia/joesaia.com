---
name: "Rexford Commercial Capital"
type: "Business marketing website and lead operations"
stack: ["Hugo", "TypeScript", "Cloudflare", "Attio"]
repo: "https://github.com/joe5saia/rexford_cc_website"
highlights:
  - "Seven financing-service pages with FAQs, structured data, and service-specific consultation forms."
  - "Inquiry capture with server-side validation, Turnstile verification, rate limiting, persistent storage, and email delivery tracking."
  - "Attribution-aware CRM handoff: campaign context and contact intent accompany inquiries into Attio."
portfolio:
  order: 2
  summary: "From a financing question to a qualified conversation."
  engineering: "Keep the website static; put the operational work at the edge. Inquiries are saved before email delivery, CRM failures are recorded separately, and domain-specific routing reuses the same service content."
  layers:
    - name: "Website"
      tools: "Hugo · Go templates · CSS · JavaScript"
    - name: "Intake & storage"
      tools: "TypeScript · Cloudflare Workers · D1/SQLite · Turnstile"
    - name: "Delivery & integrations"
      tools: "Cloudflare Pages · Attio API · GA4 · GitHub Actions"
  evidence:
    label: "CRM & attribution implementation"
    url: "https://github.com/joe5saia/rexford_cc_website/commit/111f2779405de97e31f3ac061e3a84385a8a06d1"
---

A marketing and inquiry platform for a commercial-financing business. Small-business owners can explore real estate, equipment, and working-capital financing, then contact a broker with their needs and referral context intact.
