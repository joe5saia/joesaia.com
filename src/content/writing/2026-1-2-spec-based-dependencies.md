---
title: "Spec Based Dependiences"
date: 2026-02-01
summary: "Alternative to code dependiencies"
tags: ["Meta", "Open Source", "Dependency Management"]
featured: true
---

Effective software is a tower of abstractions. We move the fontier of what's possible by building ontop of previous solutions. Typically, this takes the form of importing a dependency to utilize some functionality it provides. Sometimes this means importing a giant package for a single function, other times it's importing a very small dependency that supplies exactly that single function. Both approaches have their pros and cons. Managing depencies has the following drawbacks:

**Supply Chain Management**
One of the largest changes in the industry over the past five years is the expectation that you are strictly managing and auditing every piece of code that enters your application, even indirectly through dependencies. Supply chain attacks have also become one of the major attack vectors for malware. [Chain Guard](chainguard.dev) is the leader in providing hardened packages built directly from source, but this is really just outsourcing the task of monitoring your supply chain. There will never be a world a single company can provide the full universe of hardended packages

**Dependency Updates**
Managing updates is a universal pain point for technology teams. Each dependecy change is a chance for something to break. You either spend a little bit of time each week updating or a lot of time every now and then and do several large upgrades. Or you don't touch it for years and then a CVE forces you to drop everything and rewrite the core of your application logic to handle the upgrade. 

**Package Resolution**
We've all tried to install the latest version of a new package for some new feature, but it's depenendcy conflicts with another depency that has not yet been updated. Your application can only move as fast your slowest dependency. 

An alternative that I am interested to see if it will gain traction is the idea of publishing specs that then a LLM can write the code for. 


## Benefits

* Only need to pull in the exact functionality that you need
* Your code is fully visible locally
* The exact implementation of your dependency 
* Minimal implementation for what your application needs; no more, no less
