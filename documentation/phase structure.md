MS Portfolio v2
Master Production Roadmap
(2026 Edition)
Philosophy

The portfolio is built in layers.

Each layer becomes the foundation for the next.

No layer should depend on unfinished architecture.

Think of it like constructing a skyscraper.

Research
↓

Architecture

↓

Foundation

↓

Design System

↓

Infrastructure

↓

Features

↓

Experience

↓

Optimization

↓

Production

↓

Evolution
PASS STRUCTURE

Instead of one giant implementation timeline, the project is divided into three major passes.

PASS 1
Build

↓

PASS 2
Experience

↓

PASS 3
Production

Each pass contains multiple phases.

PASS 1 — BUILD

Goal:

Build a complete, functional portfolio with excellent architecture before adding advanced effects.

Phase 0
Vision & Research

Purpose

Understand what we're building.

Deliverables

Brand Vision
Design Direction
Visual Language
Competitor Analysis
Audience Analysis
Portfolio Goals
Success Metrics

Research

Juan Mora
Bruno Simon
Olivier Larose
Cuberto
Daniel Spatzek
Maxime Heckel
Locomotive

Outputs

DESIGN_DIRECTION.md

RESEARCH.md

ART_DIRECTION.md

CONTENT_STRATEGY.md
Phase 1
Product Strategy

Purpose

Define the portfolio before writing code.

Deliverables

User Personas
Visitor Journey
Information Architecture
Navigation Flow
Content Map
Feature Priorities
MVP Scope
Future Scope

Outputs

PRODUCT.md

SITE_MAP.md

ROADMAP.md
Phase 2
Foundation

Purpose

Create the project skeleton.

Includes

Folder Architecture
Project Structure
Package Setup
ESLint
Prettier
Husky
Git Hooks
Environment Setup
Path Aliases

Libraries

React
Vite
Tailwind
Motion
Lenis
clsx
tailwind-merge

Deliverables

Clean repository

Stable architecture

No feature code
Phase 3
Design System

This becomes the heart of the project.

Includes

Color Tokens
Background

Surface

Elevated

Border

Text

Muted

Accent

Success

Warning

Danger
Typography

Display

Heading

Body

Mono

Labels

Spacing

4

8

12

16

24

32

48

64

96

128

Radius

sm

md

lg

xl

full

Shadows

Soft

Medium

Large

Motion Tokens

Duration

Delay

Spring

Ease

Z Index
Breakpoints

Outputs

design-system/

tokens/

theme/

globals.css
Phase 4
Core Infrastructure

Reusable engineering systems.

Includes

Layout System

Container

Stack

Grid

Split

Section

Navigation

Desktop

Tablet

Mobile

Footer

Theme Provider

Context

Hooks

Utilities

Animation Providers

Data Providers

Outputs

Everything reusable

Nothing page-specific
Phase 5
Component Library

Only reusable components.

Examples

Buttons

Cards

Modal

Tooltip

Accordion

Drawer

Timeline

Gallery

Carousel

Badge

Tags

Cursor

Project Card

Section Header

Media Viewer

Everything documented.

Phase 6
Content Architecture

One of the biggest improvements over the original roadmap.

Purpose

Separate content from UI.

Folders

data/

projects/

certificates/

timeline/

skills/

experience/

navigation/

Every page consumes data.

Nothing hardcoded.

Content Schema

Projects

Media

Links

Metadata

Tags

Status

Technology

Architecture

Case Studies

Future additions become trivial.

Phase 7
Core Experience

Now build pages.

Hero

About

Projects

Systems Archive

AI Showcase

Creative Archive

Timeline

Skills

Certificates

Contact

Each section

Uses

Design System
Components
Data Layer

No duplicated code.

PASS 2 — EXPERIENCE

Goal

Transform the functional website into a memorable experience.

Phase 8
Motion System

Create animation architecture.

Rules

Page Entry

Section Reveal

Hover

Cursor

Magnetic

Scroll

Parallax

Pinning

Transitions

Every animation reusable.

Folder

animations/

variants/

hooks/
Phase 9
Interactive Systems

Examples

Command Palette

Search

Project Filters

Folder Explorer

Systems Archive Navigation

Interactive Timelines

Theme Switcher

Keyboard Navigation

AI Showcase interactions

Creative Archive explorer

Phase 10
Storytelling

Focus

Emotional flow.

Sequence

Curiosity

↓

Trust

↓

Capability

↓

Depth

↓

Personality

↓

Confidence

↓

Hire

Review

Typography

Rhythm

Visual hierarchy

Reading speed

CTA placement

Phase 11
Cinematic Experience

Optional premium layer.

Examples

Page transitions

Camera movement

Advanced scrolling

Scene choreography

Video reveals

Micro-interactions

Ambient lighting

Motion hierarchy

Nothing added unless it improves storytelling.

PASS 3 — PRODUCTION

Goal

Prepare for public launch.

Phase 12
Performance

Images

WebP

AVIF

Lazy Loading

Fonts

Self Hosted

Dynamic Imports

Bundle Analysis

Code Splitting

Caching

Prefetching

Reduced Motion

Phase 13
Accessibility

Keyboard

ARIA

Screen Readers

Focus States

Contrast

Reduced Motion

Semantic HTML

Accessible Navigation

Phase 14
SEO

Metadata

OpenGraph

Twitter

JSON-LD

Sitemap

Robots

Canonical URLs

Structured Data

Portfolio Schema

Project Schema

Phase 15
Testing

Unit Testing

Component Testing

Visual Regression

Cross Browser

Responsive Testing

Manual QA

Performance Audits

Accessibility Audits

Lighthouse

Target

95+

Phase 16
Polish

Audit

Spacing

Typography

Consistency

Animation

Interaction

Content

Copywriting

Refactoring

Dead Code

Documentation

Phase 17
Launch

Deployment

Vercel

Analytics

Monitoring

Error Tracking

Versioning

Release Notes

Portfolio Announcement

PASS 4 — EVOLUTION

The original roadmap ended after deployment.

I don't think that's enough.

Real products evolve.

Phase 18
Portfolio OS

Knowledge Graph

Plugin Architecture

Content Engine

Automation

Project Generation

Archive Expansion

AI Modules

Documentation Engine

Phase 19
Continuous Improvement

Gather feedback.

Interview feedback

Recruiter feedback

Analytics

Heatmaps (if used)

Performance reports

Accessibility reports

User testing

Monthly refinement

Engineering Standards (Non-Negotiable)
Architecture
Feature-first organization where appropriate.
Components should generally stay under ~200 lines unless there's a justified reason.
Single responsibility per component.
Shared logic belongs in hooks or utilities.
No duplicated UI patterns.
Content is data-driven rather than hardcoded.
Design
No arbitrary colors, spacing, or typography in components.
Every visual decision comes from the design system.
Consistent spacing rhythm and responsive behavior.
Mobile-first implementation.
Motion
Every animation communicates hierarchy, interaction, or state.
Respect prefers-reduced-motion.
Centralize animation variants and timing tokens.
Avoid inline animation duplication.
Performance
Lighthouse target: 95+ for Performance, Accessibility, Best Practices, and SEO.
Lazy-load heavy assets.
Optimize images and videos before integration.
Keep bundle growth intentional and measurable.
Documentation

Maintain these living documents:

README.md

ARCHITECTURE.md

DESIGN_SYSTEM.md

COMPONENT_GUIDE.md

MOTION_GUIDE.md

CONTENT_MODEL.md

PERFORMANCE.md

CONTRIBUTING.md

CHANGELOG.md
