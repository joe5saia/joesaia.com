---
title: "Sources of Overhang"
date: 2026-11-20
summary: "My reply to Mario"
featured: false
---

Mario challenged me to reconcile [Good Software Design is a Fad](https://joesaia.com/writing/2026-08-06-good-software-design-is-a-fad/) with [Create the Overhang](https://joesaia.com/writing/2026-10-20-create-the-overhang/). By overhang, I mean the concepts already in place that people or agents can build on to create something new. My answer is that it depends on where the source of the overhang is. In some software projects, the overhang is essentially the code itself, its shape and design; in other projects, the overhang comes from the product shape and high-level architectural design. The code is secondary, and as long as it's not a dumpster fire, it's fine. I think this is deeply tied to where the value of your product comes from.  

If you are, say, someone who has spent his career building dev tools and foundational libraries that other people build on, then the quality, conciseness, and extensibility of your code are part of the core value of your product, and you should invest in them because that is the overhang that you are creating for others. 

If your job is to write code to automate business processes, then the quality of most of your code basically does not matter. All that matters is: does the data get from point A to point B correctly? And who cares how the sausage is made? To be specific, I mean code that is correct and free of security flaws or major performance issues but whose style is ugly, inefficient, or hard to read. Things like triply nested ternary operators, code that is not DRY, and functions that are either two lines long or 5,000 lines long.

This is why so many enterprise code bases are disgusting and have historically been such a pain to work with. There is no intrinsic value in making them clean and elegant, and historically, unless you had a strong engineering culture up and down pushing against that natural entropy, your code base would devolve. In this environment, having a clear set of high-level abstractions was important, and if you managed that, then you could live with all the other eldritch horrors in your code base.

Now, the benefit of having high coding standards in this environment is supposed to be that you can move faster while working in the code base and that your developers do not want to gouge their eyes out reading code files. If you are leaning heavily on agents, then the tolerance threshold is so much higher here, and the bottleneck is more around whether you can clearly express your intent to the agent, which comes back again to having things like clear domain models and interface contracts that you can reason about with your agent. Let the agent worry about the ugly implementation inside the black box. The higher-level design of the code base, the domain model, and the design of the integration points are what give you the overhang that your agent can exploit.
