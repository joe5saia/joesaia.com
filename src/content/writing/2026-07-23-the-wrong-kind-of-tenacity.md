---
title: "The Wrong Kind of Tenacity"
date: 2026-07-24
summary: "Heads: I develop a novel exploit, Tails: I hack into Hugging Face"
tags: ["AI", "AI Coding Agents", "Safety", "Management"]
featured: false
draft: false
---

Last week, an OpenAI agent was given a cybersecurity benchmark and ended up hacking Hugging Face to get the answers. Here's [OpenAI's preliminary account](https://openai.com/index/hugging-face-model-evaluation-security-incident/).

In brief, OpenAI was evaluating GPT-5.6 Sol and a more capable pre-release model on ExploitGym, a benchmark that asks agents to turn known software vulnerabilities into working exploits. The models were running with reduced cyber refusals in an isolated environment. Their only intended path to the outside world was through an internal proxy used to install packages.

The models found a zero-day in that proxy, escaped onto a machine with internet access, and inferred that Hugging Face might host ExploitGym models, datasets, or solutions. They then pursued Hugging Face, chaining stolen credentials and additional vulnerabilities into a remote-code-execution path that reached production infrastructure. Hugging Face says the resulting campaign involved [more than 17,000 recorded events](https://huggingface.co/blog/security-incident-july-2026).

The technical capabilities are extraordinary and worrying. A model found a novel vulnerability, escalated privileges, moved laterally, and compromised a real company without access to its source code. There are obvious questions here about containment, access controls, cyber capability, and whether agents with reduced safety protections should ever run without much stronger infrastructure around them.

But the most relatable part—the part I keep thinking about—is this: the agent got an idea and would not let it go.

## The benchmark was not the real goal

The intended task was to solve an exploit challenge. At some point, the agent recognized that the challenge came from an existing benchmark and changed the problem it was solving. A thought entered its chain of thought that it could produce a valid answer by copying an existing solution instead of developing one on its own. Each thought has a degree of randomness by design. This is core to how LLMs work, but what we saw here was one bad thought poisoning the entire trajectory of the session. Essentially:

Heads: I develop a novel exploit in my sandbox.

Tails: I hack into Hugging Face.

The model apparently had no good sense of how difficult that route would become. It had no reason to know that breaking out of OpenAI's sandbox, reaching the public internet, finding a vulnerable path into Hugging Face, and extracting the solutions would be harder than solving the original challenge. It simply had a hypothesis: Hugging Face may have the answers.

Then it pursued that hypothesis with an incredible amount of tenacity.

## Tenacity is a capability

One of the major goals in frontier model development is extending the length of tasks agents can complete. [METR measures this as a task-completion time horizon](https://metr.org/time-horizons/): roughly, the length of a task a model can complete at a given level of reliability, measured by how long that task takes a human expert.

Longer horizons require models that do not give up when the first approach fails. They need to recover from errors, try alternatives, wait for experiments, revisit assumptions, and keep enough state to make progress over many hours. Reinforcement learning has clearly made frontier models much better at this.

You can feel the difference when using them. GPT-5.6 Sol has more of this quality than earlier OpenAI models. Claude Fable 5 has it even more strongly. Give either model a difficult goal and it will keep pulling on threads that earlier agents would not even have thought to explore.

This gives mixed results. Sometimes an agent will try fifty valid approaches until it finds something that works; other times, it will decide to burn down the school to avoid failing a test. I've had Fable threads spin for hours and generate 10k lines of code, but no actual working functionality because they were too busy making the TypeScript compile with endless epicycles of type errors.

## A missing feedback loop

OpenAI says its security team discovered anomalous activity internally, and Hugging Face detected and stopped the intrusion. The public disclosures do not say exactly how closely any person was watching the evaluation trajectory before that point.

My assumption is that no one was looking at this agent. These evaluations are run at scale, and a person probably reviews the final result, a flagged event, or a run after it stops. If someone had been actively following the reasoning and saw the agent decide to break out of its environment to search Hugging Face for answers, I have to imagine they would have intervened much earlier (if someone did see this happening and decided to let it go for science, then I'm really worried about alignment). This means the agent had no useful steering at the moment when steering mattered most.

This is a familiar failure mode in everyday agent use. An agent makes an early assumption, chooses a plausible direction, and disappears into it. Two hours later it returns with an elaborate solution to the wrong problem. The work may be technically impressive. It may have overcome a dozen legitimate obstacles. None of that makes the original direction correct.

OpenAI's separate write-up on [safety and long-horizon models](https://openai.com/index/safety-alignment-long-horizon-models/) gets at this problem. Individual actions can look acceptable while the overall trajectory is heading somewhere a user would never approve. OpenAI says it is adding trajectory-level monitoring that can pause a session and ask for review.

## Good teammates send signals

The most effective people do not work silently until they are finished. They send out signals as they work.

They explain the direction they are taking. They surface assumptions. They flag decisions that would be expensive to reverse. They notice when a plan has become much larger than expected and ask whether it is still worth pursuing. Crucially, they do this without blocking all progress while they wait for a response.

A strong teammate might say:

> I think the fastest route is through the package proxy. I am going to investigate that while also trying the intended exploit path. If the proxy route requires access outside the evaluation environment, I will stop before proceeding.

That message accomplishes several things. It gives a manager a chance to correct the direction. It makes the boundary explicit. It also lets useful work continue without turning every decision into a synchronous approval.

Agents need an equivalent operating model.

Today, most harnesses offer two bad choices. You can supervise closely, which means repeatedly checking a transcript and approving individual actions. Or you can let the agent run, which gives it room to make progress but also room to spend several hours drilling into a red herring.

The missing primitive is non-blocking feedback. An agent should be able to publish its current plan, important assumptions, and emerging concerns while it continues with safe work. The user should be able to redirect it asynchronously. The harness should know which actions can continue, which require explicit approval, and which changes in direction are significant enough to surface automatically.

This is not the same as streaming the chain of thought. I do not want thousands of tokens of internal reasoning. I want the equivalent of a useful status update from someone who understands which decisions matter.

## Model problem or harness problem?

I am not sure whether this is primarily a model problem or a harness problem. It is probably both.

The model needs to recognize when its plan has departed materially from the user's intent, when an assumption is carrying too much weight, and when the next step has consequences that deserve review. It also needs to remain responsive to constraints over a long trajectory instead of gradually treating the objective as the only instruction that matters.

The harness needs to make communication and intervention cheap. It should summarize the trajectory, identify major plan changes, maintain explicit permission boundaries, and give a person a clean way to steer without restarting the session. For fleets of agents, it should direct scarce human attention toward the runs where judgment has the highest value.

The reinforcement-learning target matters too. Benchmarks reward final outcomes. A model that asks a good question but pauses may score worse than one that charges ahead and happens to succeed. If we want agents that behave like effective collaborators, evaluations need to measure more than whether they reached the destination. They need to care how agents manage uncertainty, communicate risk, and respond when the cheapest route conflicts with the obvious intent of the task.

Longer-running agents are going to be extremely useful. I do not think the answer is making them timid or forcing a permission prompt before every consequential-looking command. The whole value comes from their ability to keep working through complexity.

The Hugging Face incident is an extreme example because the red herring ended with a sophisticated intrusion into a multibillion-dollar company. The everyday version is less dramatic: an agent burns several hours of tokens, produces a mountain of changes, and proudly reports that it solved a problem you did not have.

As agents become more persistent, keeping an eye on them will become more important, not less. The goal should not be to interrupt their tenacity. It should be to make sure all that tenacity is pointed somewhere worth going.
