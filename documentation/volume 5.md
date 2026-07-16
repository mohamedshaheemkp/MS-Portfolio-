Volume 5 — Frontend Architecture & Engineering Foundation

Version: 1.0
Status: Software Architecture Document
Priority: Critical (Must be finalized before development)

5.0 Purpose

This document defines the software architecture of the portfolio.

Volumes 0–4 answered:

Why are we building it?
Who is it for?
How should it feel?
How should it look?

Volume 5 answers

How will it be engineered?

This is the blueprint for every folder, file, component, utility, hook, animation, data model, asset, and development workflow.

This document ensures the portfolio remains maintainable even years after launch.

5.1 Engineering Philosophy

The portfolio should be engineered like a production SaaS product.

Not like

Portfolio

Instead

Product

↓

System

↓

Platform

↓

Experience

Everything must be scalable.

5.2 Engineering Principles

Every architectural decision must satisfy:

Single Responsibility

Composition over inheritance

Separation of concerns

Reusable modules

Predictable state

Scalable structure

Maintainability

Readability

Performance

Accessibility

Type safety

Documentation

5.3 Technology Stack
Core

React

TypeScript

Vite

Tailwind CSS

Motion

Motion (motion/react)

Lenis

GSAP (only where Motion cannot efficiently solve the interaction)

3D

Three.js

React Three Fiber

Drei

Utilities

clsx

tailwind-merge

react-intersection-observer

react-use

Icons

Lucide React

Future

MDX

Content Collections

Analytics

CMS

5.4 Why This Stack

Every dependency must justify its existence.

Questions before adding a package:

Does React already solve this?

Can we build it ourselves?

Is the dependency actively maintained?

Is it tree-shakeable?

Does it increase bundle size significantly?

Is there a lighter alternative?

No dependency is installed "just in case."

5.5 Project Folder Architecture

The project follows a feature-oriented, domain-driven structure.

src/

app/

components/

features/

layouts/

hooks/

animations/

providers/

contexts/

services/

lib/

utils/

constants/

config/

types/

styles/

assets/

data/

content/

tests/

Every folder has a single responsibility.

5.6 Complete Folder Structure
src

├── app
│
├── assets
│   ├── images
│   ├── videos
│   ├── icons
│   ├── logos
│   ├── models
│   ├── fonts
│   └── textures
│
├── components
│   ├── ui
│   ├── shared
│   ├── layout
│   ├── navigation
│   ├── sections
│   ├── ai
│   ├── creative
│   └── project
│
├── features
│
├── hooks
│
├── animations
│
├── providers
│
├── contexts
│
├── services
│
├── lib
│
├── constants
│
├── config
│
├── utils
│
├── styles
│
├── types
│
├── data
│
├── content
│
└── tests
5.7 Feature Architecture

Every feature owns itself.

Example

Project Feature

ProjectCard

ProjectGallery

ProjectDetails

ProjectMedia

ProjectHooks

ProjectTypes

ProjectUtils

ProjectData

No scattered files.

5.8 Component Architecture

Component hierarchy

Primitive

↓

Shared

↓

Feature

↓

Section

↓

Page

Never skip layers.

5.9 Component Rules

Every component should:

Have one responsibility

Receive props

Avoid side effects

Avoid global state unless required

Expose clean API

Be documented

Remain under ~200 lines when practical

5.10 Naming Convention

Components

PascalCase

ProjectCard.tsx

Hooks

camelCase

useScrollProgress.ts

Utilities

camelCase

formatDate.ts

Types

PascalCase

Project.ts

Constants

UPPER_SNAKE_CASE

5.11 Import Strategy

Absolute imports only.

Example

@/components/ui

@/hooks

@/lib

Avoid deep relative imports.

5.12 State Management Philosophy

Default

React State

↓

Context

↓

Server State

↓

Persistent State

↓

URL State

Never introduce global state unless absolutely necessary.

5.13 Custom Hooks

Hooks should encapsulate logic.

Examples

useScrollProgress

useParallax

useTheme

useCursor

useMediaQuery

useIntersection

useWindowSize

useKeyboard

useReducedMotion

useMousePosition

useActiveSection

useLenis

Hooks never contain UI.

5.14 Utility Layer

Utilities contain pure functions.

Examples

formatDate

calculateReadingTime

slugify

clamp

debounce

throttle

copyToClipboard

generateId

Utilities never depend on React.

5.15 Constants Layer

Centralized constants.

Breakpoints

Durations

Z-index

URLs

Navigation

SEO

Social Links

File Paths

Animation Values

Never duplicate constants.

5.16 Types

Everything typed.

Interfaces

Enums

Models

API Types

Component Props

Animation Types

Project Models

No any.

5.17 Data Layer

Portfolio content separated from UI.

Projects

Timeline

Certificates

Skills

Navigation

Socials

FAQs

Statistics

UI consumes data.

Never hardcode content.

5.18 Content Architecture

Content should eventually become CMS-ready.

Structure

content/

projects/

certificates/

timeline/

writing/

research/

Allows future migration.

5.19 Animation Architecture

Motion should be centralized.

animations/

variants/

transitions/

hooks/

presets/

constants/

Never inline complex animation objects repeatedly.

5.20 Service Layer

Future-proof.

Services

Analytics

Email

GitHub

CMS

Search

External APIs

Every integration isolated.

5.21 Provider Architecture

Providers

Theme

Motion

Lenis

Analytics

Future CMS

Future Authentication

Minimal provider nesting.

5.22 Configuration Layer

Configuration files

Site Config

SEO Config

Routes

Theme Config

Animation Config

Feature Flags

Never scatter configuration.

5.23 Asset Management

Assets organized by purpose.

Never

image1.png

new-final-final.png

Use

hero/

projects/

branding/

icons/

certificates/

backgrounds/

Naming is descriptive.

5.24 Error Handling

Errors handled gracefully.

Fallback UI

Error Boundaries

Retry

Logging

Meaningful messages

Never crash silently.

5.25 Logging Strategy

Development

Verbose

Production

Minimal

No console spam.

5.26 Environment Variables

All secrets

API Keys

URLs

Analytics IDs

Stored in

.env

Never committed.

5.27 Performance Architecture

Architecture must support:

Code splitting

Lazy loading

Dynamic imports

Memoization

Tree shaking

Asset optimization

Image optimization

Video optimization

Route optimization

5.28 Accessibility Architecture

Every component

Semantic

Focusable

Keyboard friendly

Screen reader friendly

Reduced motion support

Proper ARIA

5.29 Testing Strategy

Testing folders

tests/

components/

hooks/

utils/

integration/

Future

Visual regression

Accessibility

Performance

5.30 Documentation

Every module should explain:

Purpose

Dependencies

Public API

Usage

Restrictions

Examples

Future improvements

5.31 Git Strategy

Branch model

main

develop

feature/*

fix/*

refactor/*

No direct commits to main.

5.32 Commit Convention

Conventional Commits

feat:

fix:

refactor:

style:

docs:

perf:

test:

build:

chore:

History should tell the story of the project.

5.33 Code Quality Standards

ESLint

Prettier

TypeScript Strict Mode

Import sorting

Unused import removal

Consistent formatting

No dead code

5.34 Security Standards

No exposed secrets.

Validate external input.

Sanitize dynamic content.

Respect browser security best practices.

5.35 Scalability Goals

Architecture must support future additions without restructuring.

Future additions

Blog

Research

Admin

CMS

AI Playground

Writing

Experiments

Courses

Everything should fit naturally.

5.36 Engineering Documentation

Repository documentation

README.md

ARCHITECTURE.md

CONTRIBUTING.md

CODE_STYLE.md

DESIGN_SYSTEM.md

ANIMATION_GUIDE.md

CHANGELOG.md

ROADMAP.md
5.37 Architecture Decision Records (ADR)

Every major architectural choice should be documented.

Example:

ADR-001

Why React instead of Next.js?

ADR-002

Why Motion over GSAP?

ADR-003

Why Vite?

ADR-004

Why feature-based architecture?

Future contributors should understand why, not just what.

5.38 Repository Quality

The repository should itself be part of the portfolio.

Requirements:

Clear README with screenshots and setup instructions.
Well-organized folder structure.
Consistent naming.
No generated files committed unnecessarily.
Meaningful commit history.
Comprehensive documentation.
Easy local setup.

A recruiter should be able to clone the repository and understand the project within minutes.

5.39 Deliverables

This volume produces:

Frontend Architecture Specification
Folder Structure Blueprint
Feature Architecture
Component Architecture
State Management Strategy
Data Architecture
Animation Architecture
Configuration Strategy
Asset Management Guide
Testing Strategy
Git Workflow
Documentation Standards
Architecture Decision Record (ADR) framework
Repository Quality Standards
5.40 Acceptance Criteria

Volume 5 is complete when:

Every folder has a documented purpose.
Components, hooks, utilities, and services follow a consistent architecture.
State, data, and configuration are centralized appropriately.
The codebase is prepared for future growth without restructuring.
Engineering practices (Git, documentation, testing, linting) are defined before development begins.
The repository itself reflects production-grade engineering standards.
5.41 Definition of Done (Volume 5)

Volume 5 is complete when the engineering architecture can support the entire portfolio without major refactoring.

If a developer asks:

"Where should this component live?"
"Where does this logic belong?"
"How should this feature be organized?"
"How do we name this file?"
"Where should this data be stored?"
"How do we add a new feature without creating technical debt?"

the answers should already exist within this architecture document.

Architect's Note

At this point, the project has completed its Foundation Layer:

Volume 0: Vision & Purpose
Volume 1: Research & Strategy
Volume 2: Information Architecture
Volume 3: Brand Identity & Design Language
Volume 4: Design System & UI Foundation
Volume 5: Frontend Architecture & Engineering Foundation

Everything after this point moves from defining the system to building the experience.