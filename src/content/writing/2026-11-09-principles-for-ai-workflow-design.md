---
title: "Principles for AI workflow design"
date: 2026-11-09
summary: "Principles for designing reliable, effective AI workflows."
featured: false
draft: true
---

## Draft

* Work the process, not the problem
  * Compound engineering
* Shape behaviors via ambient context and deterministic gates
* General purpose with specific tools


** Work the Process **
When introducing AI into your workflows, it's tempting to think only about how to get the best outcome for the task at hand. This leads to overfitting your solution onto the specific problem. It's important to keep a wholistic view of the problem and not build adhoc additions for specific problems. Some common anti-patterns here are:  
* Excessive skill files
* Long prompts dictating how to acomplish a task
* Automatically injecting steer context on every turn
* Agents.md files with how-to-guides

Scalable progress comes from build a scalable process that can be easily applied to future applications. Compound Engineering is the term coined in the software engineering world for this idea of intentionally taking learnings and build it into your process as you go. 

** Shape behaviors via ambient context and deterministic gates **

Providing agents with context is a balancing act between giving them all the relevant context they need, and what not overwhelming the agent with too much context. The best approach here is progressive disclousure, which describes giving agents breadcrumbs to information in files or other resources, and letting the agent read or search the information only when it needs it. Agents will eagerly use guides and search through documentation to help understand how to best approach to a task efficiently. LLMs have been trained to effectively use progressively disclosure to find the information they need when they need it and not pollute their own context if they don't need it. Giving the agents documentation as context also ensures that agents across sessions are able to use this information with it having to be prompted everytime. The most useful context is often things that describe the high level product goals, what has and has not worked in the past and access to old agent transcripts that can be searched for historical context.

At the same time, there are times that one wants deterministic behaviors. The best way to enforce this is with custom tools that enforce the behavior and shutdown any other routes to circumvent that tool, without shooting down the general capabilities of the model. A good example is written up [here](https://cra.mr/a-little-determinism/) for forcing specific behaviors on pull requests. Doing this through a tool enforces the behavior, and reduces the amount of reasoning that the agent needs to do.

** Keep harnasesses general purpose and give specific tools **

LLMs have been trained to use computers to do a wide variety of tasks.
