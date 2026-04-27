---
title: "Mental Models for Coding Agents"
date: 2025-01-02
summary: "Different mental models for thinking about working with Coding Agents"
tags: ["Meta", "AI Coding Agents"]
featured: false
---

Reading people's writing on working with coding agents you'll come across different metaphors. You'll also see plenty of arguments that boil down to style of work or different ways of thinking. In the spirit of all models are wrong, but some are useful, I want to lay out a few different mental models I have for processing other people's experience.

## The Junior Engineer

Imagine an MIT compsci major who has completed the standard four-year curriculum by their third semester but has no real-world experience. They have all the book smarts in the world and can solve very strongly bounded problems quickly but have no street smarts. They struggle to see the consequences of their actions and how the different pieces of their code will fit together. This one is getting more and more out of date as the base models get stronger and the reinforcement learning gets more effective.

## Stochastic Gradient Descent

[Stochastic gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent) is a statistical method for optimizing parameters in a model which expands on traditional gradient descent methods. Gradient descent calculates the change in parameters that generates the largest improvement and updates in that direction. Stochastic gradient descent expands on this by adding in random noise to the update. This is useful for escaping local minima and exploring the solution space more thoroughly.

Coding agents have a similar approach: they take a given string of tokens and then predict the next set of tokens. This prediction is probabilistic, so rerunning with the same inputs will give different outputs. Frontier coding agents can quickly write a ton of code, which can range from gibberish that does not run, to very sophisticated and elegant code. Steering the models can be thought of as building a step gradient towards a clean solution. For example, adding strict linting rules that the model needs to run after every change gives a very strong signal when code quality is not met, and agents respond quickly to them. Tests and linters can enable agents to operate for long stretches of time coherently. Using agents to build great products requires you to build out some sort of feedback loop for the agent to guide them on the actual functionality. Without this, your agent will stochastically dance around with little direction, adding functionality that is not needed and cluttering your feature set. The same thing happens with your overall architecture—there are few objective measures of architecture, which leads agents to over- or under-engineer features without guidance.

## Gardening

This one I'm stealing from Peter Steinberger. Let agents loose on a codebase with limited oversight and it will grow organically in unexpected directions. Creating an environment that directs this growth in positive directions is your job. Similar to how a gardener needs to supply nutrients and fertile soil to promote growth, establishing clean code foundations with well-structured and digestible code lets the agents write working code faster. Like a gardener, you need to prune back growth that is not desired to prevent overgrowth which will eventually strangle the garden. Some gardens are intricately planned and tightly maintained with frequent small pruning and the pieces laid out well in advance, while some are looser with plants added as needed and sometimes entire plants need to be ripped out.

## Breadth-First vs Depth-First Searches

Agents let you explore the solution space rapidly, if semi-randomly. Breadth-first and depth-first algorithms are two approaches for searching through tree-like data. Like the names imply, breadth-first search looks at a large number of adjacent nodes before going deeper, while depth-first searches go as far down a single path as possible before trying the adjacent path. With agents, you'll see some people go very deep on a single idea and see how far it can be taken before making a judgment on if this is the right direction or not. Other engineers will generate multiple versions of the same small change and take the best one, then repeat for the next change. Each method is a valid way of exploring the solution space.

These models help me make sense of other people's experience using coding agents effectively and map it back to approaches that I can take to improve my workflows. Hopefully it helps bring some clarity to others.
