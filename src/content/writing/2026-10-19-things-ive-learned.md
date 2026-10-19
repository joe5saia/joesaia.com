---
title: "20 Learnings on Agentic Software Engineering Process"
date: 2026-10-19
summary: "Things that I have learned over the past year"
featured: true
---

Here’s a collection of things I’ve learned over the past year working with agents.[^agents] A lot of it was unlearning what I thought good looked like, and I think right now it’s worth being that annoying person who keeps going back to first principles.

So much of how we build software was shaped by one fact: writing good code took a long time. It gave us room to think ahead while we built, to catch drift between what we thought was possible and what actually was or between what the developer and everyone else thought was the right approach, and to paper over small frictions without anyone noticing. Bigger, harder things with bigger blast radii took longer, and that was a safety net that prevented misalignment anywhere in the process from getting too out of hand. That assumption doesn’t hold anymore, and it’ll hold even less the more you actually optimize for agentic development.

I’ve broken my thinking into three buckets:

What Agents Need
Human-Agent Collaboration
Human and Team Process

### What Agents Need
1. Agents want to be free - They will grind out problems if you give them enough tokens and a way to verify their work. Figure out how to give them that freedom without having to trust them via isolation (2) and scoped rules (3).
2. Dev environments should be ephemeral and remote - Give the agent its own environment and let it trash it if it wants. Isolation is key. Orbs from Amp is a great implementation of this. Removing state from your agents and letting them scale horizontally without bound opens up so many more possibilities to try new things and not worry about what you need to do to do the thing you actually want to do.
3. Figure out auth - No excuse not to do proper auth. Treat this as infra and leverage your agent to create the proper roles and access controls. Give your agents dedicated roles and escalation pathways. Stamp out auth tokens whenever you can. Leverage OIDC and some custom adaptors. Your agents should be able to escalate into doing anything you can do with your permission, but should be given wide latitude for any task that isn't a security concern.
4. Make your production environment legible to the agent - Allow it to understand the state, see deployment statuses, read the logs and observe the metrics. When you have an issue, the agent should be able to correlate all the signals for you. Carry this further down the environment stack and let the agent go deeper in its testing.
5. Infrastructure is easy now - Managing infrastructure used to be the worst. Finicky, unintuitive config files, tedious manual flows or incomprehensible CLI commands—a perfect productivity killer of delays that were a random length between 2 seconds and 30 minutes. If you can be precise in what you want and why, agents crush this. You should be deploying more infrastructure, especially for testing.
6. Figure out how to get detailed feedback back to the agent quickly - Links to code, the actual HTML output and specific URL, whatever context you wish you had in a bug report ticket helps the agent. Build this into your bug reporting tools, and into your non-production environments. This is another thing that Amp portals do really well.


### Human-Agent Collaboration
7. Sand down the friction - Agents massively shrink the time it takes to automate a custom workflow, which increases the number of things you should be automating. Internal tooling faces almost none of the usual quality concerns of using agents to write code.

   [![xkcd: Is It Worth the Time? A chart showing how much time you can spend automating a task based on how often you do it and how much time you save over five years.](https://imgs.xkcd.com/comics/is_it_worth_the_time.png)](https://xkcd.com/1205/)

   [“Is It Worth the Time?” by Randall Munroe / xkcd](https://xkcd.com/1205/) ([CC BY-NC 2.5](https://creativecommons.org/licenses/by-nc/2.5/)).
8. Compound engineer your process - If there is friction, figure out the source and make it better. Ask a different agent to review a conversation and give process improvement feedback. If an agent made a mistake, figure out how to inject the missing information into the context at the right time going forward. Have an agent do agent usability testing on your behalf.
9. Try things multiple times - If you give an agent the resources, it will brute-force solve any problem. Evaluating the system as a whole after implementation and figuring out what is not quite right is key. Most hard things are still hard, and doing them well still takes time. Don't assume the first working version is where you should stop. Take different approaches and refine your solution if it is important.
10. Invert the testing pyramid - Unit tests were valuable because they were low maintenance and easy to write and quick to run. The maintenance costs of E2E tests have dropped massively with agents, and the tests give even more insight now if you have observability set up well. Agents do not mind the delay in letting them run.
11. Don't associate traditional code quality metrics with correctness - "How you do the small things is how you do everything" does not apply to agents. Traditional quality markers of code used to be an indicator of whether the author also paid attention to the design and architecture. With agents, that's not really the case. Figure out how to have the agent directly prove the things you are concerned with, instead of looking for signs that someone took the problem seriously.
12. Hygiene is even more important than ever - Get your logging in good shape, eliminate error messages in your logs, clean out the todos, and clear out the bug backlog. Stray nits distract the agent and are easier than ever to fix.
13. Shift further left - Let your agents run the CI pipeline locally and fix issues there, not after a GitHub CI run. For security-sensitive parts of your code base, have a review agent review against a security checklist.
14. Most skills are not worth it - Models are rapidly progressing, and each model has its quirks. Skills are the new E2E tests; a few high-quality ones that are constantly used and intentionally maintained can have a lot of leverage, but most of them are not worth the maintenance tax, or the performance tax on your agent once there is a model upgrade and you do not also update the skill.
15. Intentionally learn - Not typing code means less time to absorb details via osmosis. Intentionally seek out information on the details to make sure your mental model hasn't drifted. Explain how you think something works and have the agent tell you where you are wrong. Tell it to be harsh!

### Human and Team Process
16. Having a clear vision is the constraint - Having a clear line of sight of what you want to accomplish and what the constraints are is the hardest part. Software development is becoming more of a declarative process in place of an imperative process. 
17. It's easy to follow best practices - There is no reason to not monitor the canary deployment for 30 minutes and make sure nothing unexpected is there. You should have your agents treat every deployment like you're deploying a major migration.
18. Alignment is more important than ever - You've replaced your oarsmen with a row of motorboat motors with human operators; the gains to getting them pointing in the same direction have gone way up. Soft leadership skills are a must-have right now.
19. Embrace vertical integration - Handoffs are costly. Understanding a user need, designing a solution, building and then deploying and monitoring it is now something that can be done by one person in a much tighter window than before. Playing task ping-pong over Slack massively decreases your throughput.
20. High-trust teams can move much faster - Figure out how to give ambitious individuals more freedom and they can move 10X faster when they have a clear vision of where they want to go. Having the right people on the bus has never been more important and figuring out how to organize your people to give them more ownership has never been more important. The difference between having people on your team that you can say "This is the problem, make it so that we never have to think about it again" and someone that you need to babysit is higher than ever. 


Software engineering is undergoing a revolution, and the best that anyone or any team can do right now is just try to ride the wave till we get to more settled waters.

[^agents]: I say agents intentionally; modern agents are really general-purpose and not just good at writing code. Think hard about how you can leverage the same agent to be a QA agent or a PM agent.
