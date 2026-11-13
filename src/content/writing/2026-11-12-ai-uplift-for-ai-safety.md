---
title: "AI Uplift for AI Safety"
date: 2026-11-12
summary: "Using technology transfer to accelerate AI safety"
featured: false
---

I believe that AI safety researchers are lagging significantly behind both AI capabilities researchers and leading teams in the software engineering space in their usage of AI.  Millions of dollars are being poured into AI safety research, and the talent bottleneck is a frequently cited issue. More effective use of AI would act as a multiplier for the entire field. 

The gap is stark. [Estimates drawing on METR's assessment of Anthropic](https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai) put the labor uplift for its capabilities researchers at around 10x. Software engineering teams like Amp have [demonstrated an 8x speedup](https://x.com/thorstenball/status/2120917288366829695/photo/1) in product development velocity, with other organizations reporting teams with [even larger gains](https://lethain.com/small-changes/). Safety researchers, on the other hand, are reporting speedups of [around 1.6x](https://www.arcadiaimpact.org/blog/ai-speeds-up-3rd-party-safety-researchers-by-1-6x) despite individual efforts. The people building frontier AI are getting several times more out of it than the people working to make it safe. I think there are five core reasons for this gap, which can be addressed through a targeted program of technology transfer into the safety space. 

Agents are a general-purpose technology for knowledge work that has recently hit a threshold that allows harnesses to support general-purpose agents. Twelve months ago, agents required harnesses that were custom built to keep them on track for a type of task; they were not able to carry out long-term tasks coherently; context management was a critical skill; they were not able to effectively use a broad suite of tools; they were unable to effectively drive subagents. It's only in the past three months that the models have gained all the capabilities to operate in a truly general-purpose harness.

Today, none of that is true. Agents can work on tasks for multiple hours across many compaction cycles and stay coherent and focused on the task at hand. With minimal prompting, they are able to take on a wide variety of tasks. Techniques like codemode and progressive disclosure let agents manipulate their own context so that you can provide them with access to an unlimited number of tools and resources, and they can use only what is useful for the task at hand. Most recently, agents have developed the ability to drive subagents effectively themselves, allowing them to split up tasks as needed without direct human direction. 

In the software engineering field, this has pushed towards harnesses being ever more general purpose. Harnesses like [Amp](https://ampcode.com/) or [Junior by Sentry](https://junior.sentry.dev/) are increasingly a simple agent loop that has been made extremely robust at the software level, along with some sort of isolated execution environment and an easy way to add as many tools as needed. Open source projects like Pi Durable let you build a custom, robust harness and easily plug in tools in the same pattern. The distinction between "Coding Harness" and "General Purpose Agent Harness" has collapsed and made it easier than ever to incrementally expand what agents can do. This also means that it is easy to extend these harnesses to work with safety research workflows and have a single agent work alongside the researcher across the entire project lifecycle with the researcher being more or less involved at different steps as needed. 



## Reasons for the Gap

I believe the following reasons contribute to AI safety work lagging:

1. AI effectiveness is a moving target
2. Lack of acute competitive pressure
3. All or nothing mindset
4. Rugged individualism
5. Lack of software engineering expertise

### AI Effectiveness Is a Moving Target
Models are constantly changing, which means that users need to be constantly updating the best way to leverage AI. The average time between releases is shrinking, with spurts where a lab will release a new model each week versus the multi-month average between releases in the past. Each model release exhibits capability gains, capability regressions and shifting behavior that needs to be adapted to. If you are not continuously focused, you will fall behind. At the same time, as highlighted by [Jake Mendel](https://coefficientgiving.org/tailwind/initiatives/#ai-uplift-for-ai-safety), no one has made it their focus to synthesize the developments and promote the best practices across the field.

### Lack of Acute Competitive Pressure
Employees of the AI labs feel an intense pressure in the race to recursive self-improvement, while software engineering teams face sharp market pressure to maximize product development velocity and quality. These are acute pressures that shape every decision made. Anecdotally, within software engineering, there is a sharp gradient in AI acceleration that correlates tightly with how insulated a team is from market pressure. Organizations that have a stronger moat, whether due to product maturity, regulation or network effects, have been much slower in their adoption. 

AI safety organizations do not have a corresponding pressure. Almost everyone's work indirectly feeds into the goal of AI safety, and directly measuring the impact of individual contributions is nearly impossible. We lack the NPS, market share or code contribution velocity metrics of software engineering that offer direct, immediate feedback on effectiveness. This is not to discredit the intense weight that the field feels, but a broad moral weight is different from an acute market pressure. 

### All or Nothing Mindset
Most people's first reaction to AI is to ask "How do we fully automate [X] process?" Blog titles like ["Can AI Automate Epoch"](https://epoch.ai/publications/can-ai-automate-epoch) are much more common than ["How We Use AI to Speed Up Our Work"](https://coefficientgiving.org/research/how-we-use-ai-to-speed-up-our-work/). This is driven partly by the nature of benchmarks and partly by the public communications of US frontier labs, which have an incentive to maximize how much it appears their models are able to do autonomously. This has proven to be the wrong question in software engineering repeatedly. Teams repeatedly attempt this approach, and they all eventually fail for any meaningful task. Successful teams have figured out how to leverage AI to augment humans, not replace them. Sometimes, this does involve agent swarms running for days on end, but the larger the task, the more the human is contributing taste and judgment. 

The mindset that has worked is continuously asking "How do we change our process to make it agent-friendly?" and practicing compound engineering to build the environment where agents can slowly increase the quality-adjusted amount of output. 

### Rugged Individualism
Members of the AI safety community have a spirit of rugged individualism. Caring about this issue was, and in some groups still is, considered a wacky concern. The spirit of individualism was an important contributing factor in leading many members to this field, and many come from academic backgrounds where this mindset is required. Good research work requires this spirit, and while researchers are eager to share research results and methods, there is much less of an appetite for sharing workflows and tooling. The instinct is for everyone to build their own tooling and workflows and rediscover workflows from first principles independently. This hampers the ability of the field to rapidly develop new shared knowledge and optimized workflows. 

### Lack of Software Engineering Expertise
Good software engineering, like good safety research, is a craft, even if it is being revolutionized by AI. Bootstrapping agents to work effectively is a software engineering task, and software engineering is a relatively scarce background in the safety community.

Today, the dominant pattern is researchers building their own tooling and harnesses without that background. The results tend to be brittle, tied to one researcher's workflow, and rarely shared, so each organization pays the same setup cost again. This is the rugged individualism described above, seen from the engineering side.

It doesn't have to work this way. As described above, open source harnesses are now general enough to be extended to safety research workflows, but extending them is itself a software engineering task. So is the less visible work of hosting and running them: secure environments for unpublished work, access to models and compute, and keeping everything working as models change. Taste in scalability, reliability and usability is exactly what software engineers contribute, and without it, it's hard to build an agentic system that can maximize the impact of agents.

This is where a small amount of targeted engineering goes a long way. Maintaining a single open source harness with AI safety capabilities, for example so an agent can launch and monitor eval runs on a cluster, creates durable leverage that every safety organization can reuse.


## How Do We Solve This?

To solve this problem, I propose an intentional program to transfer knowledge into the AI safety community. This has a few pillars:

1. Publicly write what is and is not working in software engineering for a safety research audience
2. Develop metrics that the safety field can use to measure output across tasks and organizations
3. Build and host shared, open source research harnesses
4. Partner with organizations to deploy technology from the software engineering world into the safety world and shape processes to leverage this and share publicly. 

By publicly writing what works, we directly tackle the challenge of researchers not sharing their processes, make it easier for the safety field to stay up to date on agent capabilities and demonstrate how to leverage agents for incremental efficiency gains. By developing metrics, we address the lack of acute pressure by giving the field a feedback loop and a basis for competition. Building and hosting a shared open source harness allows us to solve problems for multiple teams at once with a small number of software engineers. Finally, by partnering with organizations to deploy these tools and reshape processes around agents, we lead by example on incremental progress over all-or-nothing automation, maximize the impact of the software engineering and close the loop on the writing to keep it grounded in the realities of the field. 

The metrics need care. As noted above, measuring the impact of individual researchers on the general field of AI safety is nearly impossible, so these metrics would not try to. Instead, they measure research throughput and friction, which are leading indicators of velocity: experiments completed per researcher-week, cycle time from hypothesis to first result, results published and ideas ruled out, and the share of time researchers spend on non-research work such as setup, infrastructure and debugging. A shared benchmark task, such as the time it takes to reproduce a known result, would let organizations compare themselves without exposing their research. Agents make this measurement cheap: agent sessions already record which experiments ran, how long they took and where time went, so most of it can come from those traces, with researchers opting in. To avoid optimizing a proxy, teams would use these numbers to compare themselves over time rather than to rank individuals, and pair throughput with a quality check such as the share of experiments that informed a decision.

A first phase could focus on publicly synthesizing the current state of AI engineering for safety researchers and building a small team of engineers that can embed in a couple of partner orgs, deploy a central harness internally in those orgs and work with them to shape processes. We would measure success via organizational research output.

## A Vision for the Program

There are roughly [600 people working full time on technical AI safety research](https://www.lesswrong.com/posts/8QjAnWyuE9fktPRgS/ai-safety-field-growth-analysis-2025), most of them outside the frontier labs, and Coefficient Giving alone put [$157 million into technical AI safety in 2025](https://coefficientgiving.org/wp-content/uploads/2025-Letter-from-the-CEO-final.pdf). If AI made those researchers twice as productive as they are today, still a fraction of the speedups above, it would be the equivalent of adding another 600 researchers: matching the growth rate the field managed between 2022 and 2025, without a single new hire.

An investment of a few million dollars would enable a team to build, by the middle of 2027, a shared, maintained, open source harness that any safety org could adopt in a week, giving them a single agent tool to accelerate their work. This would be accompanied by regular public write-ups that keep researchers current as models change. By the end of 2027, the more mature organizations would have a playbook for how to measure their leverage from AI and would be intentional about making themselves more productive. And within two years, having engineers embedded in research teams would be common.


## Open Questions
* Is the nature of safety research fundamentally less amenable to uplift than other work?
    * I think that there is an element of this, but I think this tends to fall into the All or Nothing trap. If the goal is not to fully automate publishing a research report, but to make it take half as long, then finding ways to work AI into the process seems like it could reasonably make that speedup happen. Most productivity gains are not one-off huge improvements but a long series of 2–3% improvements that compound. 
* Can AI only excel at hill climbing or perfectly verifiable tasks, and does it fail at tasks that require taste?
    * This is a challenge that software engineers have been targeting since Claude Code was released, and techniques have been developed that inject context and human judgment into the agent when it's needed. At the same time, throwing more inference at the problem has proven a successful tactic in software engineering. If the models are only 10% as creative as humans, asking for 100 ideas instead of 10 and choosing the best one can get you the same diversity of thought as asking a human for 10 ideas. 
* Who should run a program like this?
    * I believe this program should either be incubated within an existing safety org that is willing to assertively challenge its researchers to adopt different workflows, or be set up as a new independent org. The benefit of incubating within an existing org is that it is quicker to start, with the downside that this team would have less of a mandate to support the entire field. The benefit of a new organization is that it can be built with a culture that borrows from the software engineering culture and has a clear mandate to support the whole field. 
* What would make me think this approach is wrong?
    * The obvious possibility is that we get bitterpilled, and Fable 6 can autonomously run the research loop, which I view as unlikely and another example of the All or Nothing trap. The second thing would be a continued lack of true acceleration in AI safety research even after adopting the suggested tooling and processes, which would point to fundamental limitations in the nature of the work.  

## Closing Thoughts

I feel it is imperative that the AI safety field find a way to keep pace with capabilities researchers; otherwise, safety will become irrelevant in the conversation to shape safe AI.

I am interested in hearing from safety researchers, funders or folks working on AI enablement both within and outside of AI safety. Examples of pilots that have or have not worked and disagreements with my diagnosis are helpful. 

If you are part of an organization that would be interested in partnering on a program like this, let's chat.

You can reach me at [joesaia@unhistoricacts.org](mailto:joesaia@unhistoricacts.org).


