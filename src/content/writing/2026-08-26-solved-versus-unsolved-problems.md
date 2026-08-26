---
title: "The Solved and the Unsolved"
date: 2026-08-26
summary: "AI agents are extraordinarily good at solved problems and extraordinarily bad at unsolved ones, and knowing which you're facing is now a core engineering skill."
featured: true
---

Specific software engineering problems lie on a spectrum between standardized solved and unstandardized unsolved. On the solved end, there's how to build a CRUD API. The database design, the back-end patterns, the front-end design patterns are all solved (The hard challenges to solve are on the product side where all LLMs continue to be terrible). On the other end things like distributed systems or new infrastructure primitives are still unsolved without standardized solutions. There are also teams working on pushing the limits in terms of scale and complexity that can turn a solved problem into an unsolved problem.

Something that I've come to appreciate in my career is that to the individual developer, these slippages can be hard to identify. Software engineering, especially modern software engineering, is very much still an artisanal type of endeavor where we value the individual, the mythical 10x engineer. Learning by doing, learning from your mistakes, learning the importance of observability when you get the 3 a.m. on-call ping and have to drowsily debug a feature that shipped a month ago, but the feature flag just got turned on. For most engineers, their career is spent discovering solutions to these solved problems through experience.

Working with AI agents changes this dynamic, though. The LLMs already know at a deep in-grained model weights level all the different ways to build a CRUD app and have been able to one-shot building a to-do app for 15 months now. The Opus 4.8 series models and the GPT 5.4 series models really took this leap forward where, for most well-scoped bounded tasks, they could implement a high-quality solution in one shot for even fairly complicated but well-established problems. The code may not be perfect. There may be too many try-catch blocks. It may be overly defensive, but it would work. It would be a functioning product with good performance and no fundamental design flaws. This still feels magical. As a developer who has only limited experience with JavaScript, you can essentially build a high-quality web app using TypeScript now without the growing pains.

The latest models (5.6 and Fable) can now tackle the slightly harder version of this; building a web app that will be iterated on and have a lot of feature expansion over the next several years. This is still a challenge for LLMs, but good guardrails and limited human involvement in review can really push this forward and keep it on track and continue to deliver high-quality software in a way that's significantly faster than before and at a higher quality.

On the other end of the unsolved spectrum, you can throw AI at problems and it will write coherent code, but it doesn't actually know the solutions so the code it writes doesn't actually solve the problem. I think this is where you see the most slop. In my opinion, knowing when you are in this world is one of the challenging parts of the job right now. 

From personal experience, I am working on a project called Town Crier that has three components
1. A crawler and scraper to find and download these documents and associate them to meetings
2. A simple web UI to explore these documents
3. A MCP server for agents to search and read these documents

The experience of working with the agent in these three different areas is incredibly different.

For the web app, I essentially have not had to think about this at all. I have just had to give it a very long product brief, some good linting rules, and an anti-slop skill. And I've gotten really high-quality code that I think works well, is very performant, and does everything that I need. The web app part is a solved problem[^1].

The MCP server is also largely a solved problem. It's solved in the sense that this is not an overly complicated technology that is well documented. The MCP server that I built is simple—it's four tools: search towns, search documents, get document, list documents. MCP is a well-documented technology spec, and there is a right and wrong way to do the core components. With only four tools, agents can figure out how to design a high-quality MCP server easily. 

This workflow to build this component was a little bit more involved because the MCP spec was not baked into the model weights yet, but mostly just involved telling the agent to read the MCP documents closely and generate a plan with links back to the documents, and splitting it up[^2]. It's pretty straightforward to build a technical spec with an agent in a rigorous way and then have the agent implement it at high level of quality.

The unsolved problem of all this is the web scraping. The core challenge here is that we want to be able to scrape thousands of websites, and so we can't have a dedicated scraper for each website and a different data model for each website. We need to standardize the format and come up with a way of thinking about how to execute the crawling and scraping in a way that is repeatable across the different towns, which can vary widely in terms of how they structure their town meetings, how they structure their documents, how they structure the different bodies, how they structure their websites, and what web services they use. There's a lot of variation here that we need to abstract away from. This is not a solved problem. 

There are approaches that people use to solve this type of problem, but it's applying the approach, not applying the solution. Agents continue to just jump head first into problems and try to brute force solutions. Working through a process of surfacing unknowns and solving them is still a challenge[^3].

My first stab at this largely mimicked the way that we built the web server: stated the goals, have the agent go do it. And it did an okay job for a single town, though it was overengineered in some ways and underengineered in others. It really wanted to build replay mechanisms and very complicated state machines for tracking progress, which was much more machinery than we needed for this. On the other hand, its solution just failed to discover a third of the documents. And even when you ask the agent about these documents that its solution didn't find, it would essentially say, "Oh, that was hard, so I skipped trying to solve it." Finally, the solution was very clearly not going to be easily abstracted to other towns.

Working through this has felt more challenging than I think it would have in the past. Part of this is that I'm not tweaking the script myself to catch more and more of these documents, or observing a failure, making a tweak, and seeing it propagate forward. My hands are not actually shaping the code in the same way, so I'm not developing that tactile understanding of the problem space. Even when I really try to push and prod the agent to explain things to me, I struggle to fully build a robust mental model. 

I also feel a lot of the same friction that you feel as a manager when you've realized you've given too large of a task to someone. Their ways of working and understanding the problem just aren't up to the challenge. They don't have a strong enough mental model to explain the obstacles well or guide their own exploration. It's like the difference between giving directions to a long-term city resident versus a tourist who just arrived. The tourist can't even begin to explain what they don't know because they don't know what they don't know. A human though will usually stop you and ask questions, an LLM will act like someone who pretends to understand your directions and proceeds to get horribly lost.

And there's a compounding problem. Once I've figured out the way forward and handed it to the agent, I don't build the tactile understanding of what it implemented. When I come back for step three, I'm missing the feel of steps one and two that I used to build by doing the work myself.

On a practical matter, there are many smaller frictions when I have to leave my polished agent setup and jump into manual mode. My local environment has kind of decayed, and the creature comforts I used to rely on aren't set up anymore. This just makes the experience even more jarring, like having to use whatever default text editor was set up on a remote server that you had to debug in the way back times.   

Engineers talk about context switching, but this feels different — it's not just shifting between tasks, but shifting between two fundamentally different ways of working. For a front-end redesign, I can bark instructions at the agent and review what comes back at the final polished product level. Making incremental progress on the scraper is a manual affair where I need to be inside the code, feeling my way through the problem space one failure at a time.

The uncomfortable part is that I'm not sure these two modes are compatible within the same workday, or even the same project. The skills that make you effective at directing an agent — scoping clearly, giving the broad context and reviewing at a distance — are almost the opposite of the skills you need when the problem is unsolved and you have to build understanding through direct contact with the code. And the more time you spend in the first mode, the rustier you get at the second.

This is also why I think the discourse around AI-assisted engineering keeps going in circles. Someone building CRUD apps with an agent and getting great results isn't wrong. Someone working on novel infrastructure who finds agents mostly useless isn't wrong either. They're just working in different parts of the spectrum and pattern-matching from their own experience. We'd have better conversations if people led with what kind of problem they're solving before "It's so over" or "We're so back." 

I don't have a clean answer for navigating between these worlds myself. The best I can offer is: know which mode you're in, and be honest when you need to switch. The worst outcomes I've had came from trying to treat an unsolved problem like a solved one, even if it would be much more pleasant if it were.

[^1]: I use Go for the backend and framework-free TypeScript on the front, which I do think helps cut down the slop.

[^2]: Matt Pocock's workflows work wonderfully in this space.

[^3]: That models behave like this is not surprising once you think about their RL processes, but it does generate an entity that has a very high technical IQ but low social IQ—a trait not common in successful people.
