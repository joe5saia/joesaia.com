---
title: "Good Software Design Is a Fad"
date: 2026-08-06
summary: "What good software looks like is determined by the technological environment in which it is written"
tags: ["AI", "AI Coding Agents"]
featured: true
---

We're living through a moment of rapid change in how software is designed and written using AI agents. These agents are increasingly good and fast at writing large amounts of high-quality code. They're not perfect yet, but in the more routine areas of software engineering, e.g., building a CRUD app with a simple domain model, they can largely one-shot this. There's a lot of focus on the code that they output and its quality. The biggest complaint is how verbose it can be and that it is not nearly as lean as well-written human code, which I agree with, but I increasingly think that this is irrelevant. Similar to how [Good Engineering Management is a Fad](https://lethain.com/good-eng-mgmt-is-a-fad/), I think that good software design is a fad.

## What “good software design” has meant at different moments

Looking at software over time, you see different patterns, emphases, and ways of working that I think are driven by the technology of the era. I'm focusing on software not written primarily for other developers; think Microsoft Office, Notion, and QuickBooks. Dev software has always been a strange beast with various aesthetic preferences tied into how we evaluate it.

### Era 1: Mainframe enterprise computing (roughly pre 1980)

This was first the era of programming, and everything happened on a single computer. Companies would purchase **a** computer for the business. This was a capital expenditure, and the goal was to wring as much value out of it before it depreciated. Programs at this time were hard to write and were often written for a single purpose and then thrown away. This was simple software designed to do a repeatable task and maximize the usage of the mainframe. The concept of a software product was not really a thing yet.

### Era 2: The Physical Distribution Era (roughly 1980–2000)

This era was defined by the personal computer. Businesses no longer had a single computer; rather, each employee would have their own computer. This is when software products became a thing because now you could write specialized software that multiple individuals could use for a specific type of work. The other defining constraint was that software delivery was done through a physical medium. You purchased software as a CD, often a single CD per computer, and installed it that way. Software was something that was built once and then shipped and potentially never updated. Network connections were either too slow, too expensive, or absent for reliable digital delivery. This was the height of the waterfall era, where requirements were sorted out up front, an application was designed technically up front, and then programmers implemented it. Directionally, code was written, tested, and finalized roughly once and then never edited again. Because the work was front-loaded and the code was never meant to be a living thing, large enterprise patterns became a useful abstraction. A "Repository Service Layer" was helpful shorthand that described a whole batch of functionality, and everyone knew what that meant. Because it was written once, the fact that it was not flexible to adapt did not really matter. Time to market was also not as important as designing something robust that would be approximately correct when it was released.

### Era 3: SaaS and continuous delivery (roughly 2000-2025)

This era was defined by the internet and the rise of digital delivery. For the first time, you could ship thousands of versions of a piece of software over its lifetime, or even "Continuous Delivery." This meant that you could ship something, learn what did and did not work with end users, and then ship updates to it. Code became much more of a living thing that was meant to evolve as you learned more about the product requirements. Lean software meant that it was easy to hop in and make changes, both big and small, and enterprise patterns were challenging to work with when requirements were always in flux and speed was more important. The rise of digital distribution meant that there were large rewards to being early in a market. Being able to ship an MVP and capture a small share of the market was valuable in a way that it was not in the physical distribution era. The value of being able to design large codebases up front with enterprise pattern shorthands was eliminated as well.

### Era 4: The agentic era (emerging)

Today, agents are increasingly used to write and edit code. There is no longer a tension between writing verbose patterns and shipping fast. An agent can rewrite 10K lines roughly as quickly as it can rewrite 1. The challenge is being able to describe in concrete terms what the design of the program should be. I think the most successful companies are going to be the ones that can ship larger, high-quality changes faster, with the size and speed of changes decoupled. There will be more of a premium on being able to coherently and concretely design an application and give that to an agent. As coding agents get more capable of writing code at scale, the focus will move away from lean code that is easily understandable by humans. Being able to operate at this architectural level rather than the minutiae will become more important.

## Closing Thoughts

The shape of the software code was always an implementation detail that only directly mattered to people writing the code. Users only cared about the user experience of using the software and software practices survived if they made that experience better. We naturally reward and value people who make our lives easier, and working with code written in previous eras under current operating pressures is not fun. As we look across eras, what was considered a practice that increased reliability is later considered one that unnecessarily increases complexity. These pressures shaped our aesthetic preferences, and as we undergo an era shift, our preferences will be reshaped by new pressures. Certain things remain timeless: good naming conventions and a clear domain vocabulary make life easier for humans and agents, but we should be careful not to always project our feelings about what good software to work with looks like onto what good software for agents in the near future looks like.
