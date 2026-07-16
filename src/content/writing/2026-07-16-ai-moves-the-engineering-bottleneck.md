---
title: "AI Moves the Engineering Bottleneck"
date: 2026-07-16
summary: "AI makes implementation cheaper, shifting the constraint in software engineering toward judgment, validation, and delivery."
tags: ["AI", "Software Engineering", "Management"]
featured: true
draft: false
---

Most product engineering work can be understood as a loop with three stages: **decide, do, and deliver**.

First, decide what to build and how it should work. Then do the implementation. Finally, deliver the result to users and learn what happens.

AI affects each stage, but not in the same way. In the decide and deliver stages, it mostly raises the quality of what a person can accomplish. In the do stage, it can create a genuine—and sometimes dramatic—speedup.

That distinction explains both why software engineering is not disappearing and why the way engineering teams operate still needs to change. If only one part of the loop becomes much cheaper, the bottleneck moves. The highest-leverage teams will reorganize around the new constraint rather than apply AI to their old process and expect the whole system to accelerate equally.

## Decide

The decide stage is everything that happens before implementation: defining the problem, writing requirements, resolving product questions, designing the system, setting acceptance criteria, and deciding how the work should be approached.

AI makes this work much richer. It can critique a proposal, identify gaps, surface unanswered questions, generate prototypes, and help a team pressure-test a design before committing to it. You can ask an agent to interrogate a plan until its implicit assumptions become explicit. You can turn an idea into a disposable prototype, put it in front of users, and incorporate their feedback before building the real version.

Software teams are familiar with beginning implementation only to discover that the requirements left important questions unanswered. AI is good at pulling many of those questions forward. A team can enter implementation with a more complete specification than would previously have been practical.

But this does not eliminate the hard part. The fundamental challenge is still understanding the problem and choosing what should happen. AI can help someone move quickly from a thin articulation of an idea to a detailed one, but it cannot supply the judgment that makes the idea correct.

This is why asking a model to write a large requirements document in one shot so often produces slop. The result may look complete without reflecting clear thinking. The gains appear when a person actively tests their thinking against a model—asking it to challenge them and push them toward a richer understanding of the problem—rather than outsourcing the original thinking to it.

AI makes a higher standard of planning affordable. It does not make judgment optional.

## Do

The do stage includes writing code, running commands, responding to failures, adding tests, and preparing a successful pull request.

This is where AI can most directly compress time. Much of implementation consists of actions language models can perform well: translating a known design into code, inspecting a failure, making a change, and repeating the cycle.

The size of the gain depends on the work.

For a trivial change, there may be almost no advantage. A person can change a color in a stylesheet as quickly as an agent can. For a complicated change in an existing codebase, an agent may substantially accelerate the work, but a human still needs to guide the implementation and validate the result. It cannot simply be handed off without attention.

The largest gains come from work that is highly parallelizable or mechanically repeated: migrations, broad refactors, and changes that must be traced through many downstream systems.

Consider an old service whose original assumptions no longer match the business. Perhaps it was designed when a medical practice accepted only walk-in appointments paid in cash. The business now bills insurance, takes credit cards, supports scheduled appointments and rescheduling, and sends reminders. The team has patched each new requirement onto the old system, and bugs increasingly emerge from fighting its original model.

Rewriting the service itself may not be the hardest part. The risk lies in finding every consumer, code path, and integration built around the old behavior, then updating each one correctly. That is exactly the kind of work agents are increasingly good at: tracing calls, locating assumptions, and making a similar change in dozens or hundreds of places.

Migrations that used to consume multiple quarters of a team's time can now be completed by one person in weeks. A smaller migration may take a day or two. This does more than reduce the cost of an isolated project. It changes which projects are worth doing at all.

## Deliver

The deliver stage begins when implementation is complete. It includes merging and deploying the change, producing release notes, updating user documentation, giving demos, training users, communicating with customers, and gathering feedback.

Here again, AI primarily raises quality. There is little excuse for release notes that omit meaningful changes when an agent can inspect every pull request in a release. Keeping documentation current is much cheaper. High-quality walkthroughs, demos, and training materials are easier to produce.

AI can also handle the supporting work around customer conversations: preparing a session, assembling relevant context, taking notes, and organizing what the team learned. These artifacts are not valuable on their own, but they amplify the quality of the human work.

The essential part of delivery still belongs to people. Someone has to talk with users, understand how the change landed, recognize what the feedback means, and decide what to do next. AI can make that person better prepared and more thorough. It cannot own the relationship or the judgment.

## When implementation gets cheaper, the calculus changes

If the do stage becomes much faster while decide and deliver mostly become better, several implications follow.

### The binding constraint is no longer the doing

Traditionally, writing the code was the bottleneck. Engineers were the most expensive people in the loop, and producing working code was time-intensive. That cost also grew rapidly with the size of the change. Coding agents reverse this dynamic and make the typing nearly free, at least for well-scoped tasks.

The bottleneck has now moved to the decide and deliver stages. The work required to deliver a change has always been roughly constant, regardless of the change's size, while the work required to decide has grown roughly in proportion to it. I think both remain true today. Optimizing product development velocity is therefore no longer about optimizing the do stage. It is about reducing the total time through the decide-do-deliver loop while increasing the amount of valuable work completed in each pass.

### Pay down structural debt sooner

Teams have traditionally deferred broad refactors and migrations until technical debt creates a binding constraint. When a team is small and everyone remembers the system's fifty hidden gotchas, working around them can be cheaper than fixing them. The pain becomes acute only after the organization grows, services cross team boundaries, and no one person holds the full set of exceptions in their head.

That tradeoff changes when an agent can perform much of the repetitive work. Improving every engineer's velocity by ten percent may not justify three person-months of effort. It is much easier to justify if it takes two person-days.

Work that makes the whole organization faster should move forward earlier. Teams should reevaluate projects they previously rejected as too tedious or too expensive. The old estimate may no longer describe the work.

### Invest in reliable delivery

As implementation gets cheaper, every delay around it becomes more prominent. Testing, continuous integration, automated deployment, observability, and monitoring all earn a higher return because they let teams deliver changes with less effort and more confidence.

We have long known how to build reliable delivery systems. Historically, doing so was expensive, and teams often accepted a weaker version because the investment competed with product work. AI lowers many of those costs at the same time that faster implementation increases the value of the result.

When code can change quickly, the ability to prove that it works and deploy it safely becomes a more important competitive advantage.

### Be more ambitious—but keep a human-scale design

The effort required to produce high-quality requirements used to grow roughly with the size of the change. Small changes could rely on implicit context. Large ones required teams to make much more of that context explicit.

AI makes the cost grow more slowly. Give a model the structure of a proposal and the important constraints, and it can help fill in details, surface questions, and tighten the plan. Prototypes also move feedback earlier, which gives teams more confidence before committing to implementation.

That makes larger changes practical. Work that once required three separate trips through the decide-do-deliver loop may fit into one.

There is still a limit. An exhaustively detailed plan for a tiny change adds little value. At the other extreme, a proposal can become too large for a person to reason about its implications, at which point AI merely helps produce more coherent-looking nonsense. The useful range has expanded, but it has not become infinite.

### Agile no longer points to the smallest possible unit of change

The core of Agile is getting feedback as quickly as possible. Traditionally, this meant shipping the smallest unit of work that delivered value so you could learn from it. AI changes that calculation in two ways: teams can get better feedback before the full implementation, and they can execute larger, coherent bodies of work in roughly the time smaller ones once required. Together, these shifts push us toward larger changes that let us learn more in each pass through the loop.

### Make the codebase legible to agents

Agents begin each session with little or no context. They must reconstruct the system from the repository. A codebase that allows a new engineer to make a meaningful contribution quickly is also a codebase in which an agent can succeed.

That means clear instructions, consistent structure, good development tooling, useful comments, accurate naming, and fewer surprising exceptions. The same practices that reduce the cost of onboarding people reduce the cost of onboarding agents—except agents repeat that onboarding constantly.

### The optimal codebase may be larger

The design patterns popularized by the Gang of Four have fallen out of favor over the past two decades as teams have tried to avoid overengineering and bloated code. One reason is that traditional enterprise patterns can be verbose and require more setup and forethought to implement well. Their verbosity can also make them more expensive to change.

Well-designed enterprise patterns can make a codebase more robust and legible, but at the cost of additional setup. That cost is increasingly worth paying when it helps agents work faster and reduces errors that would otherwise surface only after a feature is released.

## Engineering moves up a level

Engineers will increasingly avoid reading every line of the code they produce. That sounds alarming if we treat typing code as the core of the profession, but most implementation work was never where the hardest judgment lived.

Writing a standard repository method is becoming less valuable. Designing the data model and interface that the repository should expose remains extremely valuable. The first is implementation. The second requires understanding the domain, anticipating change, and making a system coherent.

That work moves from do to decide.

AI does not remove engineering from the product development loop. It changes its shape. Implementation becomes cheaper, so problem selection, system design, validation, delivery, and learning become a larger share of the work. Teams can take on structural improvements sooner, build more reliable delivery systems, and attempt more ambitious changes—but only if they pair the new implementation speed with stronger judgment on either side of it.

The mistake is to ask how much faster AI makes an engineer type. The more useful question is what an engineering organization should become when typing is no longer the bottleneck.
