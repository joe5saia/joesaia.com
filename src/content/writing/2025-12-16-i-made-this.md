---
title: "I Made This"
date: 2024-12-16
summary: "Building this portfolio site with Astro, Tailwind, and a little help from AI."
tags: ["Meta", "Web Development"]
featured: false
---

As someone that has started about a dozen websites and only published about three of them ever, I wanted to share my approach on this one and how I used ChatGPT and AMP to bootstrap a pretty decent website from scratch.

![I made this](./i_made_this_meme.jpg)

## Process

I started with a quick prompt to ChatGPT 5.2 thinking at the high level.

> I want to create a small static webpage that will serve as a portfolio page. I want to also build out a small set of blog posts on this webpage. This page should contain a link to my resume and some old packages in github that I have written for various statistical methods. Please write a short spec document for this webpage, both the design and the tech details

I had recently prototyped a web page for a family friend's business with Astro and suspected that this was where I wanted to head. I knew that I could always request that after the fact but wanted to see if our friend Chat would get there first. I had a vague idea of what the layout should look like but knew that I could clean this up later. To get started I didn't need a strong "Brand" voice or anything and the cold start is always the hardest for me so giving GPT 5.2 space to cook and come up with a plan was the fastest method here.

Chat spit out a decent plan that I skimmed and it seemed to make sense. I asked it to throw it in a README.md file that I could use to get started with a coding agent. I dumped this into a README and opened up Amp and asked it read the readme and get going. After a few stumbles with some bad copy and paste on my end we were off and it oneshotted a decent layout with placeholder text. After giving Amp some basic info about myself and links to my webpages it replaced the placeholders with real text. Finally I just had to add in my resume and asked it update the links.

[Amp Thread](https://ampcode.com/threads/T-019b29cc-b507-733a-8cb7-7275b1c42ca3)

## Why Astro?

Static-first, zero JavaScript by default, and content collections with type-safe frontmatter. It's purpose-built for content-driven sites like this one. I really wanted a simple website that was fast load.

## The Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Hosting**: Cloudflare Pages
- **Content**: Markdown with YAML frontmatter

## What's Here

- A homepage that gets to the point
- Writing on data quality, reliability, and team building
- Open-source projects I've built
- A resume you can download

Simple. That's the goal.
