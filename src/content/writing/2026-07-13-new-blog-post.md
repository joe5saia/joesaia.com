---
title: "Prototype, Diagnose, Redesign"
date: 2026-07-13
summary: "A useful loop for building with agents when you do not know enough to specify the right solution up front."
featured: false
---

I recently added authentication to an MCP server I am building. The server exposes a handful of tools for searching, listing, and reading documents. We already had an unauthenticated version running, and now we wanted to open it up to users without opening it up to everyone.

This was a bad fit for a straightforward "write a spec and hand it to an agent" workflow. The backend is written in Go. I have used Go for smaller projects, but never for a productionized, enterprise-level application, so some of the nuances of building at that scale do not come naturally to me. I chose it anyway because I think Go is an exceptionally strong language for agents to write.

OAuth presents a different challenge. I am familiar with it, but implementing it correctly is all about minutiae, and every one of those details matters. Unless you are one of the relatively few people who work on OAuth full time, fully conveying all of its security constraints on the first pass is difficult. On top of that, the MCP-specific conventions are still moving. Dynamic Client Registration and the newer Client ID Metadata Document flow are not patterns I had implemented before MCP servers—and I suspect that is true for most developers.

I did what I normally do for a larger feature. I worked through the design with an agent, went back and forth on the open questions, and saved the resulting implementation plan in a GitHub issue. Then I handed that issue to a fresh Codex agent using GPT-5.5 at high reasoning effort. Once it finished the implementation, I sent a series of fresh sub-agents through the issue and the code to review it.

The results were not great.

The implementation went through seven or eight review cycles and continued to produce what felt like basic security problems. We would fix one denial-of-service risk, then a later review would find a closely related one somewhere else. We would tighten one cache timeout, then discover that the same underlying assumption had created another problem.

At some point, repeated review findings stop being a list of bugs and start being evidence that the design is wrong. We were patching individual manifestations of a weak security model rather than fixing the model itself.

So I stopped the review loop and asked a new agent to go back to the beginning. I gave it the original issue, the implementation, the conversation history, and every problem the reviews had surfaced. Its job was not to find the next bug. Its job was to identify the root causes: What had the original design failed to consider? Which unknown unknowns had the prototype exposed? How should those lessons change the implementation strategy?

From there, we redesigned the feature from first principles. I sketched the interfaces and rough call signatures I had in mind, then asked the agent to tighten them, push back on my assumptions, and identify what we were still missing. We iterated on the design, asked other agents to critique it, and refined it until the reviews were finding small issues rather than new categories of risk.

Then I had an agent reimplement the feature against the new design. It is still going through review, and there are a few niggling details left, but the overall implementation is much better than the first one.

The useful lesson here is not that agents are bad at authentication. It is that agents are much better at solving known problems than surfacing all of your unknown unknowns. If I can give a strong model the relevant constraints, principles, and good reference implementations, it will usually come up with a solid solution. When I do not know the domain well enough to provide those things, a detailed-looking implementation plan can still rest on a weak foundation.

In those cases, the first implementation can be valuable as a prototype rather than a failed final answer. Build it, review it aggressively, and use the pattern of failures to learn what the original design missed. Then stop patching, step back, and redesign from first principles.

For larger features in unfamiliar domains, **prototype, diagnose, redesign** is a loop I expect to use again.
