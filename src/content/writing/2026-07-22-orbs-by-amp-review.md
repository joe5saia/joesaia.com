---
title: "Orbs by Amp review"
date: 2026-07-22
summary: "They're Great!"
tags: ["Amp", "Coding Agents", "Workflows"]
featured: false
---

I've used [Amp](https://ampcode.com/) on and off since it came out. For most of that time, it was a guilty pleasure: unusually expensive, but unusually good. The team has consistently been ahead of the curve on where coding agents are going, and it is the only team I see applying real product sense to building a coding agent.

That is why [Orbs](https://ampcode.com/news/agents-in-orbs) are so interesting. They are fresh, remote sandboxes for Amp threads. Start a conversation in a project and Amp gives the agent an isolated environment containing the code, tools, and configuration it needs. The Orb starts quickly, runs the project's setup, and keeps working when your laptop is closed.

I've used them intermittently since launch, but over the last week they have become my daily driver.

## Why Orbs work

Three small things combine to make Orbs work really well.

First, setup is straightforward. You create a project in the UI, connect it to a Git repo, and set any secrets it needs—often by copying over your `.env` file. Orbs also expose useful startup and resume hooks. They are simply Bash scripts saved in a conventional location in the repository, much like GitHub Actions workflows are YAML files committed alongside the code.

The real unlock is that the agent can create and improve those scripts for you. Point it at the documentation, ask it to make the environment solid, and it handles the work. That makes setup much smoother than Claude Code or Codex, where you often manage startup scripts by hand in a UI separate from the repository. And because Orbs can spawn other Orbs, agents can test the full lifecycle themselves.

Second, the UI is excellent. You see the conversation and the information you need at a glance, then can drill into the details: code, a review pane, and a small but capable IDE. It feels like you are working with the agent on the code and can review its progress as it goes. Claude Code and Codex expose versions of these elements—Codex especially—but the experience does not feel as cohesive to me.

Finally, performance is great. Orbs start quickly, resume quickly, and have all the little creature comforts that make the experience feel polished.

## The CI comparison

The closest comparison is moving CI from a giant shared Jenkins machine to GitHub Actions. With local agents, much of your mental energy goes into managing local state so they do not step on one another's toes. I have tried hard to make worktrees work consistently for me, but I always forget something. No matter how much I add to my `AGENTS.md`, something eventually goes wrong over the course of the day.

An Orb starts isolated and consistent. I can run many agents in parallel without treating my laptop as a scarce shared resource. That moves agents from the _pet_ category into the _cattle_ category. If I need ten investigations, I can start ten investigations.

The setup story has been particularly good. Amp's own [Agents in Orbs write-up](https://ampcode.com/news/agents-in-orbs) was enough context for me to ask an agent what lessons it implied for my project. It examined the article, proposed improvements to the setup script, and made them. The result is easily the best development-server setup I have ever used, with or without an agent. The agents just rip: they spin up the app, take screenshots, and send me questions with notes. It is a delightful experience.

## A much better safety boundary

Orbs feel safer than asking a powerful agent to operate directly in the middle of my working machine. The agent is not one poorly scoped command away from deleting the wrong local directory, and services can be deliberately scoped to the environment.

There is still a real access-management problem to solve. I do not want agents to inherit broad production database access simply because they need to inspect a service. Amp has made meaningful progress here with [OIDC workload identity for Orbs](https://ampcode.com/news/secrets-of-the-orb): a service can grant short-lived, narrowly scoped access to a specific Orb without injecting long-lived secrets. But fine-grained, ergonomic access to production systems remains the last big frontier for this kind of workflow.

The escape hatch is good, too. When a task genuinely needs the local machine, Amp can run a thread on a [local or remote runner](https://ampcode.com/news/agents-anywhere). Most work does not need that privilege, which is exactly the point.

## The price finally makes sense

Amp's cost used to be the reason I reached for it sparingly. The new [subscription plans](https://ampcode.com/news/subscriptions) change that calculation substantially. The $20/month Megawatt plan includes 750 hours of small Orbs and $20 of agent usage, and it lets you link a ChatGPT subscription for GPT-5.6 usage. I am on that smaller tier and, with my existing ChatGPT subscription, it has made Amp feel dramatically more affordable.

The large Orbs are probably overkill for most projects. I rarely find myself wishing for the biggest machine. A small isolated environment is plenty for a large share of coding, review, and investigation work; the important thing is being able to create several of them without agonizing over it.

Using GPT-5.6 through that setup is the real unlock for me. I think it is the best coding model available right now outside of Claude Fable 5, and it is vastly cheaper to operate. I do wish Amp offered a simple way to categorically exclude Fable from its default routing, because that model can make an otherwise predictable bill less predictable. But if you are comfortable living near the edge, Amp is an excellent place to do it.

## Collaboration is the primitive

Amp has also been filling in the coordination layer around Orbs. Threads can [reference one another](https://ampcode.com/manual#referencing-other-threads), and agents can spawn other agents, exchange files, and work across threads. Because each thread is genuinely isolated, this feels more powerful than merely opening more chats in the same local checkout.

The new [Multiplayer mode](https://ampcode.com/news/multiplayer) may be the most consequential addition. Two or more people can join an Orb's thread, message the same agent, and share its terminal, changes, and running portal. For remote collaboration, that is a better primitive than a Zoom call where one person owns the keyboard. Two people can probe the agent from different directions, ask follow-up questions, and build a shared understanding of the work without taking turns at a screen share.

Amp agents can now also [set schedules and wake themselves up](https://ampcode.com/news/schedule). That makes useful loops straightforward: check for new GitHub issues every 30 minutes, spawn a thread to triage anything matching a label, and report the result. Add a few conditions and you have the beginning of a state machine. If graphs are your thing, you have that covered. Maybe one day Splops will become a thing. If you know, you know.

I have built versions of this top-level orchestration pattern elsewhere, including a chief-of-staff agent in Codex. Amp's dedicated interface for it feels unusually natural. It is a product choice, not just a capability checkbox.

## The verdict

Orbs make coding agents feel like infrastructure rather than a delicate extension of my laptop. They reduce the friction of parallel work, improve the safety boundary, and give agents a repeatable environment where they can do real verification.

Amp is still a frontier product, and that is not for everyone. But the subscriptions make its strongest workflow much more accessible. For me, the combination of small Orbs, a linked ChatGPT subscription, GPT-5.6, multiplayer threads, and schedules is the first agent setup that has made running several independent agents feel routine rather than administratively exhausting.
