---
title: "Swiss Cheese Model of Quality"
date: 2026-10-08
summary: "How layers of imperfect safeguards work together to improve quality."
featured: false
visualization: quality-layers
---

What does your engineering team do to raise the quality of its software? If your team is like most of the teams I have worked with, you strive for the ideal of a great testing suite, amazing end-to-end tests, a huge automated QA suite, and an attention to detail that ships great software, but you live a fallen existence of just giving a damn and doing your best to write high-quality code.

Some of the many tools we have for raising software quality:

1. Giving a damn while programming
2. Code review
3. Manual testing
4. Unit tests
5. Integration tests
6. End-to-end tests
7. Property testing
8. Fuzzing
9. Formal QA
10. Dogfooding
11. Demos
12. Observability and alerting
13. Specification design processes

But what does this actually look like in most orgs? Roughly something like this:

1. Usually giving a damn while programming
2. Manually testing that the app compiles or loads to the first screen
3. Rushed code review
4. Spotty unit tests
5. Basic observability, roughly on the order of "Is the service still running?"

We invest a lot of time and effort in writing good code, thinking about the performance trade-offs, long-term maintainability, and how easy it is to understand, and just generally giving a damn. This is very brittle and hard, and all it takes is one afternoon when you're tired for something big to slip through, but it's what most orgs do.

Why don't we routinely leverage all our tools in our engineering process? Officially, it's time constraints: maintaining end-to-end tests requires continuous maintenance, designing a good fuzzing harness that gives actionable errors takes time, and building observability dashboards that are legible and actually let you quickly spot issues is a hard design problem. Unofficially, though, it's because all that stuff is not what excites most engineers. Designing and maintaining an observability dashboard is the equivalent of eating broccoli for most engineers. You'll do it if your responsible adult tells you to, but you're not going to seek it out. Approximately 98% of engineers got into engineering because they either really enjoyed writing code in and of itself or they really enjoyed writing code to make the computer solve a problem. If you're lucky, you have people on your team who can actually give you a thoughtful PR review, and you have decent unit tests on the core modules. But in reality, 90% of the quality gains are coming from a lot of upfront effort on good programming.

Introducing coding agents is really hard to do well in this model because they do not give a damn! When your quality guarantees are downstream of giving a damn, that just means a human needs to micromanage the agent to get to that quality.

In the sophisticated world of "Process Design," a core principle is building redundancy into the system to make it robust. The metaphor is Swiss cheese. Each slice of Swiss cheese has a ton of holes, but when you stack them together, there is no hole through the whole block. Looking at the list of all the quality tools we have, you see this: many ways to test the application, coming from different angles to prevent things from slipping through. Let's compare the two models on a totally made-up metric of "Defects," where 0 defects is good and 100 defects is the baseline (you can think of this as the percentage of possible defects not caught). Starting with the typical process, let's say that giving a damn while writing the code gets you from 100% down to 20% of possible defects. Then your quick manual test of loading the home page catches 25% of the remaining bugs, the rushed code review catches 25% of the remaining bugs, and the same goes for the spotty unit tests and basic observability. This gives you a final defect rate of 0.2 * 0.75^4 ≈ 0.063, or 6.3% of defects slipping through. Then let's take the idealized version, where we have nine layers after writing the code, but we no longer give a damn, and our original implementation leaves 50% of the original possible defects: 0.5 * 0.75^9 ≈ 3.75%. That's about half as many defects slipping through with half as many damns given upfront!

Here's the even more bullish case for building quality through layers with agents: the highest-impact testing strategies are often the most time-consuming to implement. Things like end-to-end tests or manual testing directly test the things we care about in the application: what is the user experience, and is it matching our expectations? This makes them very valuable. Unit tests are indirect measures. There are a handful of high-value things you can unit test, like "Does my unit conversion code correctly convert units?" But most unit tests are really just proxies for ensuring this specific functionality that eventually ladders up into my user experience still works as expected without me having to test the whole application. In a world of limited time, that is valuable, but still not as good as testing the actual thing you care about: the user experience. The beauty of agents, though, is that they are perfectly elastic in terms of availability. If you change the UI and break all your E2E tests, just spin up an agent to fix them. Our whole testing pyramid is built on the assumption that we have limited time to devote to testing, so plentiful, fast, cheap, only kinda helpful unit tests are valuable compared to more E2E tests for less important parts of the application, but now we are not bound by that constraint!

The beauty of this is that you can use agents to layer on the extra layers, and even if it's not the best implementation, it's purely additive to your current quality control process and will surface new bugs and opportunities for improvement. Over time, as you build out this process you'll find that you can lean on it more and more and manually reviewing the code to catch implementation bugs will drop in importance for keep a high quality bar.

I've emeded a little build your own adventure simulator below where you can move some knobs around. Don't take anything too seriously but the big thing to note is how effective layering in indvidually low effectivness steps can really move the needle.
