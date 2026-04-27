---
title: "Amp inspired Agents.md docs Pi Extension"
date: 2025-04-22
summary: "."
tags: ["Workflows", "Pi"]
featured: true
---

I've been trying to seriously use [Pi](http://pi.dev) more lately as my daily agent harness driver. I'm someone who has always used base Vim with dreams of customizing it but typically end up using whatever comes out of the box. Pi scratches that same itch for me.

Amp is still my favorite harness. The attention to detail they put into building a great TUI, along with the right set of tools and prompts for each model, makes for a fantastic experience. It's just expensive, and once I burn through my daily free tier I move back to Pi with my Codex subscription.

I'm a context obsessive who goes to great pains to minimize what's polluting my context window. I try to keep skills scoped to the repo where they're needed and my AGENTS.md short. At the same time, I jump between languages and maintain a small set of directions on how I like my projects set up and managed for each one, which is most useful for new projects with no established patterns. That makes having this guidance in my global AGENTS.md easiest.

For most harnesses, this creates one of two problems: either you dump everything into your global AGENTS.md and end up giving your agent directions on how to handle Go in a TypeScript project, or you separate out language-specific guidance into their own files and instruct the agent something like "if working with Go files, see `docs/golang_rules.md`." The second approach is generally better at minimizing context rot, but agents don't always follow the instruction to read the right file, and the approach also eats into the agent's implicit reasoning capacity. I'm leaning on Dex here for specific numbers, but agents typically start getting confused around their 100th instruction. Throwing 10 instructions into your AGENTS.md, one per language, quietly eats into that budget in a surprisingly costly way.

Amp solves this by letting you add YAML frontmatter to your markdown documents and then monitoring agent tool use, automatically injecting files into the context when the filetypes the agent is touching match what's specified in the frontmatter. This lets you control what context the agent receives without asking the agent to decide what the right context is.

Pi doesn't have this functionality out of the box, but it does have a great extension system that's fairly unique among harnesses. Using it, I could simply ask Pi to extend itself with the same functionality Amp provides. I gave it a hyperlink to the documentation section describing the behavior I wanted and asked it to go ahead and build it. I should have explicitly asked it to write tests around the functionality first based on the documentation, but I was lazy with my prompts. The extension works great regardless and took a total of about 15 minutes of mental energy.

The code is on GitHub [here](https://github.com/joe5saia/pi-amp-agents). Take a look.
