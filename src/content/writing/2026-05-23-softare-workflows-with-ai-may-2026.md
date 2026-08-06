---
title: "Software Workflows with AI May 2026"
date: 2026-05-23
summary: "Draft notes on software workflows with AI in May 2026."
featured: false
---

## Draft

The purpose of this post is to layout my current view of what effective working with AI tooling looks as of May 2026. This post is intended for software engineers who are responsible for producing production code. At a high level, I think most code now can be written effectively by agents, if the problem is well specified. It's always been the case that garbage in leads to garbage out, but with coding agents this is maginified.

## Model and Harness

As of today, I think OpenAI's GPT5.5 models are the state of the art, with a noticable uplift in ability to previous OpenAI models and to Claude Opus 4.7. GPT 5.5 was a step change in capability in terms of its ability to handle more complicated tasks, be thorough, and ability to run for an extended period of time and stay on track. If you can use GPT 5.5 I would, but most of this advice applies just as well to Opus 4.7. In terms of coding harness, I work with [Amp](https://ampcode.com/), [Pi](pi.dev) and [Codex](https://chatgpt.com/codex) CLI. Amp delivers the best experience and is the only harness for any of the models that feels like there is an intentional product built around it with the sole purpose of making a great coding agent. They handle this challenge by keeping the feature space limited and constantly improving the core features to keep up the models. This shows in the built tools and optimized propmpts per model and different operating modes. You cannot use it with your OpenAI or Claude subscriptions which means you are paying the full API price for your tokens, but I do think it delivers something like a 10% lift in productivity. This month, they also rolled out a new neo experience which is lovely to use, and gives you the ability to work remotely with your agent.

My main daily driver is Pi. It is 100% the opposite of Amp in that it is intentionally minimal, just the core agent loop, four tools and a basic system prompt. If Amp is like the old intellij IDEs, heavily optimized for one thing, Pi is like emacs, minimal and efficient and highly customizable. Pi also lets you use your codex subscription which makes it much more cost effective than Amp, however you cannot use your Claude subscription due to Anthropic policies; however if you do work off of an API key for claude that does work here. This minimalism makes Pi fast, reliable and resource efficient. I also like the knowledge that I am in control of my context.

I sometimes use Codex directly, mostly for the codex app when I need to do knowledge work or need the remote code execution functionality. It is solid and I don't think it's wrong to use either the app or the cli, but I personally find the constant expansion of features to be more annoying than useful. Every new feature is something to learn and I would rather focus on what I am actually trying to accomplish rather than learning how my tools work. There's also a lack of polish with codex, where the prioity is on getting features out that may be useful rather than building a world class core experience.

I have not touched Claude Code in months. The model has lagged behind OpenAI's for a while and I really hate the state of the product. Take what I said about the lack of polish in codex and multiply it by 100 for claude code. It's been a weird experience watching the Codex and Claude Code teams speed run the [early stage, late stage hypergrowth process](https://lethain.com/early-late-stage-hypergrowth/). The products are about a year old at this point, they models themselves are the core product that the early majority desires, but they've already moved into trying to fill out the secondary and teriarty niches that exist in the broader enterprise space. My hypothesis is that this is leading to a reverse disruption arc where players like Amp and a lesser exten Pi are able to deliver a better, more focused product that is strictly superior at the software engineering loop. I am very interested to see how this market plays out if we hit the end of all you can eat buffet token economics.

## Working with AI

I have two related but guiding principles in terms of working with AI

* A human must always be the accountable party
* Delegate but verify

The final responsibility for the output of an AI agent is its owner.

Common failure modes

* Handing off a piece of written AI written work without editing it. Unless you have invested a ton of time on getting this right, the first output is going to be wrong. [Oxide's RFD on using LLMS](https://rfd.shared.oxide.computer/rfd/0576) makes the point that producing a coherent written document used to require effort and focus and that paying that cost was only worth it if you had something coherent to say. A written document was a crediable signal that "I have thought hard about this and this is my well thought through reasoning". This doesn't mean that I agree with your reasoning, but it is a valid place to start the discussion. With AI, it's now possible to poof a ten-page document into existence with no thought. This document will be made of coherent sentences and mostly coherent paragraphs, but does it actually reflect your own thinking, or mirror all your own context or even be well reasoned about, probably not. Using LLMs as copy editors, rubber ducking partners or researchers is a great use, but the writting for others should be done by yourself.
* Blindly asking a LLM to review and fix all the bugs it can find. If you ask an LLM to find a bug it will almost surely find a bug, even in perfect code. It will invent reasons why this perfectly valid code, could be a bug (what if the number of days in a year changes to 364, better put a check around that...).
* Help me do a thing that I know nothing about, make no mistakes. This one is pernicous. LLMs will fake it till they make it and if you are not villigant about it, they will come off as rockstars. LLMs can be really powerful tools which allow you to stretch into areas that you only know a little about, but you still need to be able to validate what they are doing.
