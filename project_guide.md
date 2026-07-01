# PROJECT_BRAIN.md

# MS Portfolio — Source of Truth

## Project Overview

MS Portfolio is the personal portfolio of Mohamed Shaheem KP.

The portfolio represents a hybrid identity:

* AI Developer
* AI Engineer
* Graphic Designer

The goal is not to look like a generic developer portfolio.

The portfolio should feel like a curated archive of systems, experiments, engineering work, and design projects.

Target Audience:

* Recruiters
* AI/ML Companies
* Clients
* Creative Agencies
* Collaborators

---

# Core Philosophy

This portfolio should feel:

* Editorial
* Technical
* Minimal
* Premium
* Intentional
* Cinematic

The site should communicate:

"Systems Thinking"

rather than

"Look at my projects."

Every section should feel curated.

---

# Design Direction

Influences:

* Juan Mora Portfolio
* Modern Awwwards Portfolios
* Editorial Design Systems
* Product Design Case Studies
* Creative Developer Portfolios

Visual Characteristics:

* Large typography
* Dark theme
* Strong hierarchy
* Spacious layouts
* Meaningful motion
* Minimal visual noise

Avoid:

* Generic SaaS layouts
* Excessive glassmorphism
* Template portfolio designs
* Heavy neon cyberpunk themes
* Overuse of gradients
* Excessive particle effects

---

# Design System

## Color Palette

Background

Obsidian Black
#0A0D12

Graphite Surface
#1A212B

Steel Gray
#393E46

Accents

Electric Blue
#295CFF

Cyber Teal
#14B8C4

Mint Signal
#A8D5BA

Soft Ivory
#E8E0A0

Warm Coral
#F09A82

Usage

60% Background
20% Surface
10% Neutral UI
5% Blue Accent
5% Teal Accent

---

# Typography

Primary Display

Space Grotesk

Body

Inter

Technical Labels

DM Mono

Characteristics

* Large headings
* Tight hierarchy
* Clean body copy
* Editorial spacing

---

# Motion Philosophy

Motion should feel:

* Purposeful
* Smooth
* Professional

Avoid:

* Excessive floating animations
* Random motion
* Decorative movement

Preferred:

* Scroll reveals
* Layout transitions
* Hover interactions
* Editorial transitions

Performance is more important than visual spectacle.

---

# Current Live Architecture

Home Page

Hero

CoreEngine

AgriAIShowcase

SystemsArchive

DesignCabinet

Contact

---

# Active Routes

/

Home

/systems

Systems Archive

/design

Design Archive

---

# Systems Archive Purpose

Systems Archive is the main project navigation system.

It should function like an editorial project index.

Each project should open a detailed case study.

---

# Design Archive Purpose

Design Archive showcases:

* Posters
* Branding
* Logo Design
* Visual Identity Work

Current interaction style:

Sticky editorial gallery

---

# Project Showcase Hierarchy

Priority Projects

1. AgriAI

Agricultural AI Monitoring System

Features:

* Pest Detection
* Weed Detection
* Disease Detection
* Weather Prediction
* Remedy Recommendation

Technologies:

* YOLO
* DenseNet
* CNN
* LSTM
* Attention Mechanisms

---

2. Smart Folder Organizer

Python-based productivity system.

Features:

* Automatic file organization
* Undo system
* Logging
* Configuration support
* GUI support

Purpose:

Demonstrates software engineering fundamentals.

---

3. Portfolio

This portfolio itself.

Purpose:

Demonstrates:

* UI Design
* UX Design
* Frontend Engineering
* Motion Design
* Design Systems

---

# Component Decisions

Approved Components

* SystemsArchive
* DesignCabinet
* MagnetLines
* Sticky Card Gallery
* Editorial Hover Index
* Motion-based transitions

Use carefully

* Framer Motion / Motion
* Subtle Parallax
* Interactive reveals

Avoid

* Large Three.js scenes
* Heavy particle systems
* Performance-heavy visual effects

---

# Audit Findings

Current Audit Results

Dead Pages

* AgriAIPage.jsx
* SmartFolderPage.jsx
* PortfolioPage.jsx

These pages already exist.

They are currently unreachable.

Priority is connecting them.

---

Unused Legacy Sections

* Statement.jsx
* About.jsx
* Skills.jsx
* Projects.jsx

These belong to a previous design direction.

Do not restore unless explicitly requested.

---

CSS Issues

Legacy variables still referenced:

--lime
--ink
--ink-raised
--ink-border
--space-section
--space-gutter
--text-dim
--accent

Current theme uses:

--bg
--surface
--border
--text-primary
--text-secondary
--accent-blue
--accent-red

Legacy sections should be removed rather than repaired.

---

# Recommended Route Structure

/systems/agriai

/systems/smart-folder

/systems/portfolio

Each route should open a dedicated case study page.

---

# Future Architecture

CaseStudyLayout

Shared Structure:

Hero

Problem

Solution

Architecture

Technology Stack

Process

Gallery

Outcome

Next Project

All project case studies should use the same layout system.

---

# Development Priorities

Priority 1

Remove unused legacy sections.

Priority 2

Connect existing case study pages.

Priority 3

Create shared CaseStudyLayout.

Priority 4

Improve storytelling and project narratives.

Priority 5

Performance optimization.

---

# Rules For Future AI Assistants

Before making changes:

1. Read this document completely.
2. Preserve the portfolio identity.
3. Preserve the editorial design language.
4. Avoid generic portfolio patterns.
5. Prefer simplification over adding new sections.
6. Performance is more important than visual complexity.
7. Reuse existing work before creating new components.
8. Do not reintroduce deprecated sections.
9. Prioritize project storytelling.
10. Every change should strengthen the perception of professional systems design.

End of Document.
