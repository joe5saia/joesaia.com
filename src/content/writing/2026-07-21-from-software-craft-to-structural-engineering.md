---
title: "From Software Craft to Structural Engineering"
date: 2026-07-21
summary: "When AI makes implementation cheap, software engineering shifts toward domain modeling, repeatable patterns, and systems designed to be dependable by construction."
tags: ["AI", "Software Engineering", "Architecture"]
featured: true
draft: false
---

For most of its history, software engineering has been an artisanal practice.

We have principles, patterns, and frameworks, but the actual work still depends heavily on individual taste. Give ten experienced engineers the same problem and they may choose ten different architectures, three databases, and six ways to divide the system into services. Some solutions will be better than others, but the industry has few repeatable ways to arrive at the answer.

This made sense when implementation was expensive. A robust enterprise pattern might make a system easier to understand and change, but it also brought more setup, more code, and more decisions. A small team could often learn faster by building the narrowest thing that worked. The artisanal engineer's advantage was knowing which corners to cut without collapsing the structure.

AI changes that tradeoff. If an agent can take a detailed specification and produce a 10,000-line implementation in minutes, the cost of additional structure falls dramatically. The question is no longer whether a repository layer, explicit transaction boundary, or richer domain model is worth all the typing. The question is whether that structure makes the system more dependable, legible, and easier for both people and agents to change.

I think this pushes software engineering away from craft and toward something closer to structural engineering.

## From master builders to engineered plans

Chartres Cathedral is a useful analogy. The cathedral was partly built beginning in 1145 and substantially reconstructed after a fire in 1194, with the main campaign taking about 26 years ([UNESCO](https://whc.unesco.org/en/list/81)). Its construction involved master builders alongside masons, stonecutters, carpenters, sculptors, and laborers ([C'Chartres Tourisme](https://www.chartres-tourisme.com/en/the-cathedral/history-of-chartres-cathedral/the-cathedral-s-builders-the-trades)). The master mason combined roles we would now separate: architect, engineer, builder, and craftsperson.

Modern construction distributes that knowledge differently. Architects and engineers produce plans against established codes, tolerances, material properties, and calculation methods. Much of the design process is repeatable. A structural engineer does not invent a new theory of load for each office building. They make bounded decisions inside a mature body of practice, then document those decisions precisely enough for other specialists to execute.

That does not make modern buildings identical. It moves the novelty to the places where novelty is valuable. The structure is standardized so that the experience can be designed.

Software is still much closer to the master-builder era. Important knowledge lives in the heads of experienced engineers. We celebrate the person who can hold the whole system in their mind, navigate its exceptions, and make the right call by feel. Our "building codes" are often style guides and a collection of stories about the last outage.

AI will not turn software into civil engineering overnight. Software has fewer physical constraints, changes more frequently, and rarely carries the same direct risk to human safety. But the direction is similar: more knowledge encoded in the process, less dependence on an individual's ability to improvise the implementation.

## Enterprise patterns get another hearing

For the past two decades, good product teams have often treated enterprise design patterns with suspicion. The suspicion was earned. Patterns became cargo cults. Simple applications accumulated factories, repositories, service layers, and abstractions whose only purpose was to resemble a diagram in a book.

But that history can obscure what a good pattern provides: a name for a recurring problem, a known family of solutions, and a vocabulary for discussing the tradeoffs.

The foundational text is _Design Patterns: Elements of Reusable Object-Oriented Software_, published in 1994 by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides—the Gang of Four. Its [catalog of 23 patterns](https://www.informit.com/articles/article.aspx?p=1327762) divides object-oriented design into three broad kinds of problem:

- **Creational patterns** such as Factory Method, Abstract Factory, and Builder separate the decision about what to construct from the mechanics of constructing it.
- **Structural patterns** such as Adapter, Composite, Decorator, and Facade organize relationships among objects. An Adapter reconciles incompatible interfaces; a Decorator adds behavior without changing the wrapped object; a Facade puts a simpler boundary around a complicated subsystem.
- **Behavioral patterns** such as Command, Observer, State, Strategy, and Template Method organize how responsibilities move through a system. Strategy makes a variable policy explicit. State gives lifecycle-dependent behavior a home. Command turns an action into something that can be queued, logged, retried, or undone.

The important contribution was not the class diagrams. It was the vocabulary. Saying "this is a Strategy" lets a team discuss a replaceable policy without rediscovering the whole shape. Saying "put an Adapter at the boundary" communicates both where the incompatibility belongs and where it should not leak. Fowler makes this point directly: naming a pattern expands a team's design vocabulary and lets people reason at a higher level of abstraction (["Neologism"](https://martinfowler.com/bliki/Neologism.html)). He also argues that patterns are _supposed_ to contain ideas experienced practitioners already know: their purpose is to capture field knowledge and make it transferable (["Patterns Are Nothing New"](https://martinfowler.com/bliki/PatternsAreNothingNew.html)).

The Gang of Four mostly addressed relationships among objects. Martin Fowler's 2002 book _Patterns of Enterprise Application Architecture_ moved the same method up to the scale of business systems. Its roughly 40 patterns cover how to organize business logic, connect it to relational data, define application boundaries, render web interfaces, cross process boundaries, and handle concurrency ([Fowler's catalog](https://martinfowler.com/eaaCatalog/index.html)).

This catalog describes choices that enterprise applications still make every day:

- A **Transaction Script** puts the logic for one request into a procedure. It is a good default when the rules are simple.
- A **Domain Model** puts both data and behavior into a model of the business. Its additional machinery pays off as rules, interactions, and invariants become more complex.
- A **Service Layer** defines the operations the application offers and coordinates the response to each operation.
- **Active Record** combines a database row, persistence, and some domain logic in one object. A **Data Mapper** keeps the in-memory model and database representation independent.
- A **Repository** gives the domain a collection-like interface to persisted objects, while a **Unit of Work** tracks changes and coordinates their commit.
- A **Remote Facade** and **Data Transfer Object** create a coarser boundary when work must cross a process or network.

These are not interchangeable decorations. They encode different bets about complexity. Fowler's own comparison is explicit: a Domain Model has a higher initial cost than Transaction Scripts and pays for itself only when there is enough domain logic to justify it (["Domain Logic and SQL"](https://martinfowler.com/articles/dblogic.html)). A small CRUD workflow may need one clear transaction procedure, not seven layers. A claims system with interacting policies, state transitions, and invariants may benefit enormously from a rich domain model kept independent from persistence.

That distinction is the part of pattern literature I expect AI-era engineering to recover. A pattern should be selected because the forces that produced it are present, not because the pattern is considered sophisticated.

## The backlash was right about the costs

The case for patterns should incorporate the strongest criticisms of them.

First, some patterns compensate for limitations in a particular programming language. In his 1998 presentation ["Design Patterns in Dynamic Languages"](https://www.norvig.com/design-patterns/), Peter Norvig examined the Gang of Four catalog and found that 16 of its 23 patterns were either invisible or substantially simpler in Lisp or Dylan. Iterator is now built into many languages. A Strategy may be one function rather than a hierarchy of classes. First-class functions, modules, macros, algebraic data types, and modern type systems can absorb machinery that older C++ designs had to spell out.

That does not necessarily erase the underlying design question. A system still needs to decide how policies vary or how state transitions are represented. It does mean that copying the original implementation structure can create ceremony with no benefit. The durable unit is the problem and its tradeoff, not the 1994 class diagram.

Second, patterns invite premature abstraction. Once engineers learn the names, they begin seeing opportunities to deploy them everywhere. The result is indirection built for hypothetical future requirements. Fowler's account of [YAGNI](https://martinfowler.com/bliki/Yagni.html) gives the right presumption: an abstraction that makes today's code harder to understand is guilty until a real requirement justifies it. Unused flexibility has a continuing carrying cost in comprehension, debugging, and change.

Third, a stack of respectable patterns can still produce a bad system. Fowler's [Anemic Domain Model](https://martinfowler.com/bliki/AnemicDomainModel.html) is the canonical example. A team creates domain objects, repositories, mappers, and services, but leaves the domain objects as bags of getters and setters while all behavior accumulates in services. The design pays the mapping and indirection costs of a Domain Model while implementing its behavior as a collection of transaction scripts. Fowler's critique is not that layering is inherently bad; it is that the pattern has been copied without the behavior that would justify it.

Finally, the empirical case is not as settled as the industry's confidence sometimes suggests. A mapping study of roughly 120 primary studies found that research on the effect of Gang of Four patterns on software quality was controversial ([Ampatzoglou et al., _Journal of Systems and Software_](https://doi.org/10.1016/j.jss.2013.03.063)). A related review found limited evidence that patterns reliably transfer design knowledge or produce better designs ([Budgen, "Design Patterns: Magic or Myth?"](https://doi.org/10.1109/MS.2013.26)). Patterns are accumulated professional knowledge, not mathematical proof. Their effect depends on context, implementation, and the people applying them.

These critiques identify four costs that AI does not make disappear: conceptual overhead, runtime consequences, unnecessary indirection, and the risk of solving a problem the application does not have. AI makes code generation cheap. It does not make complexity free.

## From pattern catalogs to decision systems

When people write every line, a pattern's verbosity is a real cost. When agents write most of the implementation, that cost shrinks. The benefits remain:

- predictable locations for behavior;
- explicit boundaries and responsibilities;
- consistent handling of transactions and failures;
- code that can be reviewed against a known shape; and
- fewer local inventions for the next engineer—or agent—to reverse-engineer.

This does not imply using more patterns everywhere. I expect the opposite: fewer patterns, applied more consistently, with explicit thresholds for adopting and removing them.

A team might maintain a decision path like this: begin with a Transaction Script; move to a Domain Model when rules interact across multiple operations or important invariants need a single home; introduce a Repository when the domain genuinely benefits from being independent of persistence; add a Unit of Work when changes across several objects must commit together; prefer a plain function over a class-based Strategy when the language already supplies the required substitution.

Each step should name both the condition that justifies the pattern and the cost it introduces. That makes the pattern reviewable. It also gives an agent much better instruction than "use enterprise architecture."

Most applications would converge on a small set of robust defaults, with deviations requiring evidence. The standard would live above any one language or framework: preserve this boundary, enforce this invariant, make this failure explicit. The implementation could then use the simplest native mechanism that satisfies the intent.

Database selection is an obvious candidate. Teams currently spend surprising amounts of time debating small differences among relational databases. For most new applications, the decision could collapse into a workflow that usually ends at PostgreSQL or SQLite. That is not because every other database is bad. It is because standardization has compounding value, while the marginal benefit of a bespoke choice is often tiny.

The mature version of this future is not "AI picked our architecture." It is a decision system that makes the tradeoffs explicit, applies them consistently, and produces a reviewable answer.

## The domain model becomes the load-bearing structure

When implementation becomes cheap, the highest-leverage engineering work moves up a level.

Writing a standard repository method is implementation. Deciding what the repository should expose requires understanding the domain. Generating database migrations is implementation. Deciding whether an appointment, a visit, and a claim are three distinct entities—or three states of one entity—is engineering.

Those decisions determine whether the system will accommodate the next five requirements or fight them.

This makes domain modeling the center of the job. Engineers will spend more time identifying entities, relationships, invariants, state transitions, and boundaries. They will describe which facts the system owns, what must be true before an action can occur, and where consistency matters. An agent can then translate that model into code, but it cannot rescue a model that misunderstands the business.

The same principle points toward putting more load-bearing behavior behind stable interfaces. User experience will remain a deeply human and often bespoke part of software, just as interior design remains distinct from structural engineering. But the interface should sit on top of a system whose rules do not depend on which screen happens to invoke them. Lighter clients and stronger domain boundaries make it easier to guarantee behavior across web, mobile, automation, and agentic interfaces.

## Most software should become routine

Software engineers tend to define the profession by its most unusual work: hyperscale infrastructure, novel databases, compilers, and the systems built by the largest technology companies. Those projects will continue to require bespoke engineering. They are the skyscrapers and suspension bridges of software.

Most business software is not like that. It contains real domain complexity and sometimes meaningful scale, but it does not require a new branch of computer science. A scheduling system for a regional medical practice and an observability platform ingesting trillions of events should not share the same professional mythology.

As the field matures, I expect a clearer split. A relatively small group will continue to solve novel infrastructure and scale problems. Most engineers will work inside well-understood constraints, applying established patterns to business domains. There should be mobility between the two, but they are different kinds of work and should be trained and evaluated accordingly.

That is not a demotion. Routine engineering can still be difficult, valuable, and consequential. Buildings do not become unimportant because their structural calculations are standardized. Repeatable processes are dependable processes.

## What changes when typing is free

The artisanal era rewarded engineers who could move from an ambiguous idea to working code with little ceremony. That ability created enormous value because every layer of structure was expensive to produce and maintain.

AI lowers the implementation cost that justified the shortcut. It becomes practical to specify more before building, use patterns that once felt too verbose, encode architectural decisions in reusable workflows, and fix structural debt earlier. The best system may contain more code while requiring less human effort and less human memory.

The scarce skill becomes the ability to model a domain, choose the right structural pattern, state the guarantees, and verify that the result satisfies them. Taste does not disappear, but it moves outward: toward product judgment, user experience, and the genuinely novel parts of the system.

Software engineering will still be creative. It will simply become less dependent on every engineer inventing a building method before they can build the building.

The next question is what this does to the people entering the profession. If engineering becomes more systematic, [training junior engineers can become more systematic too](/writing/2026-07-21-how-we-train-junior-engineers-when-ai-writes-the-code/).
