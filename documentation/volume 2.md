Volume 2 — Information Architecture & Experience Strategy

Version: 1.0
Status: Architecture Definition Document
Priority: Critical (Must be completed before UI Design)

2.0 Purpose

This document defines how visitors experience the portfolio.

While Volume 1 answered why we are building the portfolio,

Volume 2 answers

How should people experience it?

This document establishes

Website structure
User journey
Storytelling
Navigation
Content hierarchy
Page architecture
Section relationships
Interaction flow

Without proper Information Architecture, even beautiful websites fail.

2.1 Information Architecture Philosophy

The portfolio is not a collection of pages.

It is a guided experience.

Visitors should never wonder

"What should I do next?"

Every section should naturally pull users into the next section.

Every scroll should answer one question while creating another.

2.2 IA Design Principles

Every page must satisfy these principles.

Principle 1

One purpose per section.

Never overload sections.

Principle 2

One primary action per viewport.

Never compete for attention.

Principle 3

Every section should answer one visitor question.

Principle 4

Every scroll should increase trust.

Principle 5

Information complexity increases gradually.

Never overwhelm users immediately.

Principle 6

Content before decoration.

2.3 Experience Philosophy

Visitors should experience the portfolio like walking through a design studio.

Instead of

Page

↓

Page

↓

Page

They experience

Arrival

↓

Discovery

↓

Trust

↓

Evidence

↓

Exploration

↓

Connection

↓

Action
2.4 Primary User Journey

The ideal visitor journey

Google

↓

Portfolio

↓

Hero

↓

Curiosity

↓

About

↓

Featured Projects

↓

Systems Archive

↓

Creative Archive

↓

Timeline

↓

Skills

↓

Certificates

↓

Contact

↓

GitHub

↓

LinkedIn

↓

Hire

No dead ends.

2.5 Psychological Flow

Each section should create a specific emotional state.

Section Emotion
Hero Curiosity
About Connection
Featured Projects Confidence
Systems Archive Respect
Design Archive Creativity
Timeline Growth
Skills Competence
Certificates Credibility
Contact Action
2.6 Visitor Questions

The portfolio must answer these questions in order.

Stage 1

Who are you?

Stage 2

What do you do?

Stage 3

Why should I care?

Stage 4

Can you actually build?

Stage 5

Can you solve problems?

Stage 6

Can I trust you?

Stage 7

How do I contact you?

2.7 Website Structure

The website will initially consist of one highly curated experience.

Home

├── Hero
├── About
├── Featured Work
├── Systems Archive
├── Creative Archive
├── Timeline
├── Skills
├── Certificates
├── Contact
└── Footer

Future expansion

Home

Projects

Case Studies

Writing

Research

Experiments

AI Lab

Design Lab

Resume
2.8 Navigation Architecture

Navigation should feel invisible.

It should never interrupt storytelling.

Navigation contains

Logo

About

Projects

Archive

Contact

Resume

Theme (future)

Desktop

Minimal floating navigation.

Mobile

Full-screen navigation panel.

Navigation rules

Highlight active section.
Hide while scrolling down.
Reveal while scrolling up.
Always accessible.
2.9 Homepage Architecture

The homepage is not a landing page.

It is the product.

Structure

Navigation

↓

Hero

↓

About

↓

Featured Work

↓

Systems Archive

↓

Creative Archive

↓

Timeline

↓

Skills

↓

Certificates

↓

Contact

↓

Footer
2.10 Hero Experience

Mission

Immediately communicate

Identity

Value

Personality

Direction

Primary CTA

Secondary CTA

Expected time

5–10 seconds

Exit Goal

User scrolls.

2.11 About Experience

Purpose

Humanize the creator.

Not biography.

Instead explain

Mindset

Engineering philosophy

Creative philosophy

Problem-solving approach

Exit Goal

Visitor believes

"I want to see the projects."

2.12 Featured Work

Purpose

Present strongest projects immediately.

Not chronological.

Not every project.

Only flagship work.

Expected projects

AgriAI

Smart Folder Organizer

Project Context Exporter

Knowledge Vault (future)

Habit Breaker (future)

Portfolio itself

Exit Goal

User opens project.

2.13 Systems Archive

This becomes the heart of the portfolio.

Purpose

Allow visitors to explore technical work.

Inspired by Juan Mora

Improved significantly.

Structure

Archive

↓

Projects

↓

Open Folder

↓

Overview

↓

Architecture

↓

Screens

↓

Media

↓

Implementation

↓

GitHub

↓

Reflection

Every project becomes a mini case study.

2.14 Creative Archive

Purpose

Separate engineering from design.

Categories

Brand Identity

Poster Design

UI Design

Motion

3D

Illustration

Photography (future)

Visitors interested in design can explore independently.

2.15 Timeline

Purpose

Show progression.

Not resume.

Instead

Learning

↓

Building

↓

Failing

↓

Improving

↓

Professional Growth
2.16 Skills

Purpose

Show capability.

Not percentages.

Instead organize by domains.

Artificial Intelligence

Software Engineering

Frontend

UI/UX

Graphic Design

Tools

Workflow
2.17 Certificates

Purpose

Support credibility.

Not overwhelm.

Display

Certification

Provider

Date

Verification

Learning outcome

2.18 Contact

Purpose

Remove friction.

User should know exactly what to do.

Include

Email

LinkedIn

GitHub

Resume

Availability

Call to action

2.19 Footer

Purpose

Close the experience elegantly.

Contains

Logo

Navigation

Socials

Credits

Copyright

Back to top

2.20 Content Hierarchy

Priority order

Identity

↓

Projects

↓

Engineering

↓

Creativity

↓

Trust

↓

Contact

Never place low-value information above high-value information.

2.21 Progressive Disclosure

Don't reveal everything immediately.

Example

Project Card

↓

Preview

↓

Open

↓

Overview

↓

Architecture

↓

Implementation

↓

Reflection

↓

GitHub

Each interaction rewards curiosity.

2.22 Cross-Linking Strategy

Every major section should connect to another.

Projects

↓

GitHub

↓

Case Study

↓

Related Design

↓

AI Architecture

↓

Blog (future)

No isolated pages.

2.23 Mobile Experience Strategy

Mobile is not desktop compressed.

Reconsider

Spacing

Navigation

Typography

Interaction

Thumb zones

Performance

2.24 Accessibility Flow

Every section should be usable with

Keyboard

Screen reader

Reduced motion

Zoom

High contrast

2.25 Exit Paths

Every visitor should always have a next action.

Examples

Hero

↓

Projects

Projects

↓

GitHub

About

↓

Timeline

Timeline

↓

Contact

Contact

↓

Email

Never trap users.

2.26 Future Scalability

Architecture should support

Blog

Research

Experiments

Open Source

Writing

Speaking

Courses

Without redesigning navigation.

2.27 Content Dependency Graph
Hero
│
├── About
│ │
│ ├── Timeline
│ │
│ └── Skills
│
├── Featured Work
│ │
│ ├── Systems Archive
│ │ │
│ │ ├── GitHub
│ │ ├── Architecture
│ │ └── Case Study
│ │
│ └── Creative Archive
│
└── Contact

This ensures every section supports another rather than existing in isolation.

2.28 IA Rules

Never:

Duplicate information.
Repeat CTAs excessively.
Interrupt storytelling.
Introduce unnecessary pages.
Create navigation dead ends.

Always:

Guide users.
Reduce cognitive load.
Reward exploration.
Maintain context.
Preserve flow.
2.29 Deliverables

This volume produces:

Complete site map.
Navigation architecture.
Homepage structure.
Section hierarchy.
User journey map.
Emotional journey map.
Visitor question flow.
Cross-linking strategy.
Progressive disclosure strategy.
Content dependency graph.
Future expansion plan.
2.30 Acceptance Criteria

Volume 2 is complete when:

Every page and section has a clearly defined purpose.
The visitor journey is intentional from first visit to contact.
Information hierarchy reflects user priorities rather than personal preferences.
Navigation, storytelling, and interactions work together without confusion.
Every section naturally leads to the next, with no dead ends or unnecessary detours.
The architecture can scale to future content (case studies, blog, AI lab, design lab) without requiring structural redesign.
2.31 Definition of Done (Volume 2)

Volume 2 is complete when anyone reading this document can answer:

What content belongs on the portfolio?
In what order should users encounter it?
Why is each section positioned where it is?
What emotional and informational goal does each section achieve?
How does the visitor progress from curiosity to trust to action?
