---
name: "Omni"
type: "Personal iPhone workspace & AI assistant"
stack: ["SwiftUI", "TypeScript", "Cloudflare", "Pi AI"]
highlights:
  - "Offline task capture by typing or Action Button dictation, using on-device speech recognition on supported devices and languages. Changes persist before networking."
  - "A continuing AI-assistant conversation with delegated task agents and tools to read, add, edit, complete, and reopen todos through the app’s canonical mutation journal."
  - "A podcast library with RSS import, bounded Wi-Fi downloads, saved playback position and speed, background audio, and lock-screen controls."
  - "Official National Weather Service forecasts, alerts, and forecast discussions, with independent refreshes and cached data when a request fails."
portfolio:
  order: 4
  summary: "Capture a thought. Keep your day moving."
  engineering: "Keep the local replica small, portable, and crash-safe. A Swift actor owns one versioned file containing confirmed state and pending operations. Prepared mutation bytes persist before transmission, so interrupted requests can retry without duplicating work."
  layers:
    - name: "Native experience"
      tools: "Swift · SwiftUI · App Intents · Speech · AVFoundation · MediaPlayer"
    - name: "Persistence & backend"
      tools: "Actor-owned JSON replica · TypeScript · Effect · Cloudflare Workers · SQLite Durable Objects"
    - name: "Assistant & access"
      tools: "Pi AI / Pi Durable · Cloudflare Agents · Executor · MCP · Cloudflare Access · Keychain"
---

A personal, offline-first iPhone workspace that brings rapid task capture, an AI assistant, downloaded podcasts, and official weather into one app. Built for a single owner rather than a multi-user productivity service, Omni prioritizes reliable local state and explicit boundaries between on-device data and assistant access. It is a private project, not a publicly available app.
