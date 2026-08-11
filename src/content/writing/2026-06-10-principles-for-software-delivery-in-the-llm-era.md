---
title: "Principles for Software Delivery in the LLM Era"
date: 2026-06-10
summary: "The principles organizing my thinking about how software delivery changes when implementation becomes cheap."
tags: ["AI", "Software Engineering", "Management"]
featured: true
draft: false
---

A lot of people are trying to figure out what the modern software factory looks like. I don't think we have the tools or operating model yet, but I do think a handful of principles can organize the search. These are the ones I'm working from.

- **LLM thinking time is cheap.** If an agent spends the equivalent of a human-week analyzing a problem—generating critiques, addressing them, and reviewing the result—and does it in 30 minutes, that's fine. Spend that time lavishly. This inverts a lot of traditional process design, which treats deep up-front analysis as expensive.

- **LLMs incorporate new context immediately.** When a human organization changes direction, the change has to diffuse through the organization. People need time to internalize it, and old habits linger. An LLM-driven process has almost no diffusion cost: update the context, and the next unit of work can reflect the new direction.

- **Central organizing documents are high-leverage.** I'm a big fan of _Good Strategy/Bad Strategy_ and its kernel of diagnosis, guiding policy, and coherent action. A good strategy document gives every downstream decision a consistent basis. It is also exactly the kind of artifact an LLM can consume and apply repeatedly.

- **Product-led beats technology-led.** _Escaping the Build Trap_ describes the failure mode well: building because you can, whether driven by feature requests, sales pressure, or excitement about the technology. You can see the failure mode at ecosystem scale. Of the roughly 2.4 million apps in Apple's App Store, more than 60% have never received a rating, even as around 100,000 new apps are published each month ([42matters](https://42matters.com/ios-apple-app-store-statistics-and-trends)). Software is abundant; evidence of value is much scarcer. As the marginal cost of software approaches zero, the discipline not to build becomes more important.

- **Feedback is the new bottleneck.** Building is no longer the primary constraint; learning is. You can ship 100 features in 24 hours, but you cannot get meaningful user feedback on all of them in that time. By the time feedback on feature one arrives, features two through one hundred may already depend on it. Changing direction is expensive again.

- **Feedback can be simulated—imperfectly, but cheaply.** LLMs can challenge an idea from the perspective of a product manager, an engineering manager, a user, or a staff engineer. Using an LLM to judge product usefulness is underexplored. Simulated feedback is not a substitute for real users, but it is a cheap first-pass filter that can prune weak ideas before they consume scarce feedback cycles.

- **Human judgment is scarce, so place it deliberately.** There is still an essential element of human control in the loop. The design question is where to put it: which decisions require a person, which can be delegated to an agent with good guardrails, and how to verify delegated work without doing it again. Human time increasingly goes toward direction and verification rather than generation.

- **Drift is inevitable, so correction must be scheduled.** Every system accumulates technical debt, whether people or agents write the code. Agents can accumulate it much faster because they produce more code in less clock time. Teams already know the cycle: build for the problem as currently understood, learn more, then refactor or migrate. Agents compress that cycle, so maintenance and architectural correction need to become explicit, recurring parts of the process.

## Where these ideas lead

Taken together, these principles point toward a process that looks strange from a traditional agile perspective. It borrows the spirit of waterfall—deep, intentional, up-front specification work—while running on agile timescales.

Because LLM thinking time is cheap, you can afford to be extremely intentional about what you build. Before writing code, have a model critique a proposal from multiple perspectives, address the critiques, surface unresolved decisions, and converge on a detailed specification. The whole exercise might take 30 minutes instead of weeks.

Detailed planning used to be wasteful partly because the plan and the implementation were separated. An engineer might spend days understanding a request and planning an implementation, then lose much of that context before the work began. With agents, planning and building can be one continuous process. The context does not need to decay between the two.

The same economics transform strategy documents. Traditionally, a strategy needs to remain in place long enough to become embedded in a team's thinking. That makes frequent changes expensive and encourages small, fast-moving companies to avoid writing strategy down at all. But if diffusion is nearly free, a company can revisit its strategy whenever the evidence changes and have every agent act on the new version immediately.

The same applies to technical policy. How should we evaluate third-party packages? What belongs on the front end versus the back end? How do we design web services? Answer each question once in a central document, and the answer can propagate to every subsequent task.

There is a tension here worth naming. Part of what makes strategy valuable in the Rumelt framework is that it is a commitment—a filter that constrains decisions. If a team can repivot weekly at almost no operational cost, what stops strategy from degenerating into mood?

My tentative answer is that the cadence of strategic change should match the cadence of evidence, not the cadence of possible execution. Agents can pivot immediately. People should ask them to pivot only when real feedback justifies it. That brings everything back to the bottleneck.

If feedback is the constraint, the central discipline is rationing what you ship against what you can actually learn. Limit work in progress not only by engineering capacity, which is expanding quickly, but by feedback capacity. Use simulated feedback to prune ideas cheaply, real feedback to validate them, and resist the temptation to let low-cost implementation outrun your ability to learn.

[OpenClaw](https://openclaw.ai/) is a useful illustration of where we are. Its velocity and breadth make it a genuine proof of what LLM-driven development can produce. It is also, in my experience, easier to admire as a technical project than to configure as a secure, polished product. That is not a criticism of an experimental project for being experimental. It is evidence that capability alone does not produce a good product. Product discipline still has to be supplied separately, and that is the part many teams risk skipping.

None of this is a final answer. Much of it looks like traditional agile with the dials turned to unfamiliar settings: more thinking before implementation, faster execution, less work in progress, and much more attention to feedback. But it is the framework I'm betting on, and the writing that follows will be a record of how it holds up.
