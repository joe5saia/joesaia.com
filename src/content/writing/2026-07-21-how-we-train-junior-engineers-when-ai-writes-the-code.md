---
title: "How We Train Junior Engineers When AI Writes the Code"
date: 2026-07-21
summary: "A more systematic engineering discipline can replace the apprenticeship in accumulated coding taste with a faster, clearer path from foundations to independent judgment."
tags: ["AI", "Software Engineering", "Education"]
featured: true
draft: false
---

One of the recurring questions about AI and software engineering is: how will we train junior engineers when AI writes the code?

The concern is reasonable. Much of the current path to becoming a good engineer consists of struggling to build things. A junior implements a feature, gets the abstraction wrong, watches it fail, receives feedback, and tries again. Over years, those experiences accumulate into judgment. If an agent does the implementation, it appears to remove the practice through which judgment forms.

That conclusion assumes the future profession will require the same apprenticeship as the current one.

In [the first post in this series](/writing/2026-07-21-from-software-craft-to-structural-engineering/), I argued that AI will push software away from artisanal implementation and toward a more systematic discipline: a smaller set of dependable patterns, explicit decision processes, and domain models that serve as the load-bearing structure of an application.

If that happens, training engineers should become easier, not harder. Teaching someone to reproduce the accumulated taste of a senior craftsperson is slow and unreliable. Teaching foundations, patterns, decision rules, modeling, and verification is much more tractable.

## Today's apprenticeship teaches too much by accident

We often talk as if writing code is the curriculum. It is not. Writing code is the environment in which the curriculum is currently hidden.

A junior assigned to add rescheduling to an appointment system may learn several things: how state transitions work, why names matter, where transaction boundaries belong, how an API change affects consumers, and why a seemingly harmless nullable field creates ambiguity. But no one necessarily names those lessons in advance. The junior discovers them by colliding with the system.

This produces excellent engineers, but inefficiently. Two people can spend the same year writing code and encounter very different lessons. Progress depends on the codebase, the assignments available, the quality of review, and whether a senior engineer has time to explain the principle behind a correction.

The result is a profession that often mistakes exposure for education. We tell juniors to build more things and trust that sufficient experience will eventually produce taste.

## A systematic discipline creates a systematic curriculum

Other engineering fields offer a useful model. The details vary by discipline and jurisdiction, but professional training commonly combines formal education, supervised experience, and examination. In the United States, engineering licensure usually requires education, exams, and several years of progressive work experience; most states require four years ([NCEES](https://ncees.org/licensure)). Architecture follows a similar combination of education, documented experience, and examination ([NCARB](https://www.ncarb.org/become-architect/earn-license)).

Software does not need to copy professional licensure. Most software does not carry the public-safety implications that justify it. The useful part of the analogy is the shape of the education: first principles, applied methods, supervised practice, and demonstrated independent judgment.

A future software engineering curriculum could follow five layers.

### 1. Foundations

Engineers should still learn data structures, algorithms, operating systems, networks, databases, and the mechanics of programming languages.

They may rarely implement a sorting algorithm or memory allocator in professional work. That is not the point. A structural engineer studies physics even when software performs the daily calculations. Foundations provide the mental model needed to recognize when a tool's answer is implausible, when an abstraction leaks, and which constraint actually matters.

AI makes this grounding more important. A person who cannot reason about the underlying system can only accept or reject an agent's output by vibe.

### 2. Pattern literacy

Juniors should learn a bounded set of common application patterns and the problems each one solves: transaction scripts, repositories, queues, event-driven workflows, state machines, caches, and domain-oriented designs.

The goal is not memorizing a catalog or adding layers mechanically. It is learning the decision procedure. What is the load-bearing part of this application? Where are the consistency boundaries? What failure modes matter? When does a simpler pattern stop being sufficient? What complexity does the richer pattern purchase?

Today, engineers often absorb these distinctions after seeing several systems succeed and fail. A mature discipline can teach them directly through cases and counterexamples.

### 3. Domain modeling and specification

This becomes the core applied skill.

Give a junior a business problem and ask them to identify the entities, relationships, invariants, state transitions, and ownership boundaries. Ask them to distinguish a user's request from the system's source of truth. Have them write acceptance criteria and failure behavior before any implementation exists.

These exercises are closer to the future job than manually producing another CRUD application. They force the engineer to understand what the software means. They also produce an artifact an agent can implement and reviewers can interrogate.

The work can be practiced repeatedly. One student might model appointments, cancellations, and insurance claims; another might model subscriptions, invoices, and refunds. The implementation language matters less than the quality of the distinctions they make.

### 4. Agent-directed implementation

Juniors should use agents to turn models and specifications into working systems. Removing AI from training would prepare them for a profession that no longer exists.

But the exercise should be evaluated on more than whether the code runs. Did the implementation preserve the model? Did the agent introduce new concepts that were not in the specification? Are the boundaries visible in the code? Can the student explain the generated design, change the specification, and predict the effects?

The engineer's job is not to watch an agent type. It is to maintain coherence between intent, model, implementation, and observed behavior.

### 5. Verification and supervised practice

Finally, juniors need meaningful work under close review. They should own real outcomes, but a more experienced engineer should review the domain model, architectural decisions, validation strategy, and delivered behavior—not merely the diff.

The central question changes from "Did you write this code correctly?" to "Can you demonstrate that this system satisfies its guarantees?"

That includes tests, but it also includes reasoning about edge cases, observing the system in production, interpreting user feedback, and recognizing when the original model was wrong. AI can help generate evidence. The engineer remains responsible for deciding whether the evidence is sufficient.

## The progression can become explicit

Once the work is framed this way, the path from junior to independent engineer is easier to describe.

A junior can apply an established pattern to a well-bounded domain with supervision. A mid-level engineer can select among patterns, model a moderately complex domain, and validate the result independently. A senior engineer can design the decision systems themselves, identify where the defaults fail, and manage ambiguity across technical and product boundaries. Staff-level work includes evolving the organization's patterns, guarantees, and architecture as its evidence changes.

That ladder is clearer than "writes increasingly difficult code." It is also easier to assess. A reviewer can inspect the model, the decisions, the specification, and the evidence rather than trying to infer judgment from the cleverness of an implementation.

The junior can contribute useful work earlier because the process constrains the problem. They do not need ten years of accumulated taste to choose from an unlimited design space. They need the foundations to understand the system, a set of patterns they can apply, and supervision at the points where judgment still matters.

## What juniors lose—and what they must not lose

There is a real risk in skipping implementation struggle entirely. Debugging teaches causality. Reading unfamiliar code teaches how abstractions fail in practice. Building something from first principles creates an intuition for cost that is hard to acquire from diagrams.

Training should preserve deliberate versions of those experiences. Students should still implement core structures, diagnose failures without immediately delegating them, read generated code, and occasionally work below the level of the usual framework. The difference is that these become targeted exercises, not the default production workflow.

We should be precise about what the struggle is meant to teach. If manually implementing a B-tree builds a useful mental model, assign it. If hand-writing the twentieth API endpoint merely practices syntax an agent has already commoditized, spend the time on modeling, verification, or user feedback instead.

The purpose of education is not to recreate the inconveniences under which the previous generation happened to learn.

## Training gets faster because the field gets smaller

Artisanal practice has an enormous surface area. Every problem can produce a new architecture, every team can invent a local convention, and every experienced engineer carries a different collection of scars. Learning taste in that environment takes a long time because the space of possible decisions is nearly unlimited.

A systematic practice narrows the space. Most business applications can use a small number of default technologies, architectural patterns, and delivery mechanisms. The engineer spends less time inventing structure and more time understanding the domain. When an exception appears, they can name the default being violated and the evidence that justifies it.

AI accelerates this shift because it removes the historical penalty for explicit structure. The same specification that guides the agent can guide the junior. The same architectural rules that make generated code reliable can make review consistent. The same repeatable process that makes systems dependable can make education dependable.

We will still need years of experience to produce the people who can operate at the frontier, just as routine building design and the world's tallest skyscraper require different depths of expertise. But most software engineering is not frontier research. For the majority of the profession, a clearer body of practice can shorten the path to useful, independent work.

The future junior will write less code by hand. That does not mean they will learn less engineering. If we design the discipline well, they may be the first generation we teach engineering on purpose.
