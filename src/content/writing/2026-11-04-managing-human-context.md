---
title: "Managing Human Context"
date: 2026-11-04
summary: "Thoughts on managing human context when working with agents"
featured: false
---

This [tweet from David Cramer](https://x.com/zeeg/status/2117738176358011004) resonated with me. It’s easier than ever to have a coherent high-level idea with some key design principles and hand it off to an agent to either implement or build out a plan. It will get 90% of the way there, but it needs your help to land the remaining 10% well. Supplying that 10% is draining. When you’re planning work, it’s even worse: you’ll spend 30 minutes giving a thoughtful piece of feedback, and then the agent turns around with 10 more deep questions.

In previous roles, I was used to supporting several major initiatives at once and being asked to offer detailed feedback on components of the work as it progressed. One of my competitive advantages was being able to jump in, quickly get up to speed on the progress, and offer an informed opinion without much effort. The difference with agents is that the gap between when work starts and when I need to offer an opinion has shrunk, which means that I have far less time to internalize the project and subconsciously sit with it.

I'm a big believer in the importance of letting ideas marinate. I spend an hour watching TV with my wife to wind down before bed, and that's when I feel like I make a lot of connections between strands of work.

Before AI, the pace was like walking along a road and slowly seeing the landscape come into view. The decisions you would need to make slowly came over the horizon, which gave you plenty of time to passively think about them before you had to make them. Early Claude Code was like moving into a car with you as the navigator. You were still right alongside the agent, directing the work and focused 100% on it, which put pressure on your decision-making time but was manageable. Working with multiple agents is like being teleported into the navigator's seat and being asked to make a decision with no lead time fifty times a day. I don't think there is any world in which this is tenable long term. Here are some thoughts on how we might address this, from most radical to least:

First, we rethink how we approach problems and channel our ambition differently. Instead of doing 10 large projects at once, we focus deeply on one massive project and nine small-bore changes that we let the agent handle end to end. This still involves sequencing the work properly and breaking it down into pieces that are safe to ship. For example, instead of building a new core primitive and then focusing on its primary use case, we also build the second- and third-best use cases. By keeping our minds on the same domain, we reduce the marginal mental load of tackling those use cases alongside the primary work. Doing so also helps build a better version of the core primitive that is easier to extend with less mental load in the future.

Second, we take the long-term life cycle of software and condense it. Instead of focusing on limiting tech debt and doing a major refactor every 18–48 months, we accept tech debt accumulating faster and do a major refactor once a month or more often. This means that we can accept worse code into our codebase with less human attention because the changes are reversible. Even if we hold per-commit quality the same, we should definitely be doing more refactors, if only because we can ship and explore faster than ever. That means we learn what the optimal shape of the software looks like faster than ever, while the cost of doing the refactor has plummeted.

Third, we get better tooling and practices around compound engineering. There are meta-techniques and approaches that build up in a project over time that agents are not great at picking up on. How do we inject that context into the agent, ideally deterministically, so that we do not have to do it repeatedly? Relatedly, sanding down the rough edges of the codebase where the agent trips up while making changes or migrations is also important.

Fourth, we get better tactically at structuring the work so that we minimize the points of contact between us and the agent.

Fifth, the models will just get better, and we can give them a longer leash and stay less involved.

The value of software engineers is moving more and more towards providing taste and judgment on the big questions of their codebase and domain. Figuring out how we allow ourselves to marinate in our work so that we can provide that taste and judgment is the meta-problem of software engineering right now.
