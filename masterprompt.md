# SHAHEEM PORTFOLIO — MASTER BUILD SPECIFICATION

## Version 1.0 — SOURCE OF TRUTH

You are working on my existing personal portfolio website.

Your job is NOT to create a generic developer portfolio.

Your job is to transform the existing repository into a highly polished, editorial, interactive portfolio for:

# SHAHEEM

## AI DEVELOPER × GRAPHIC DESIGNER

The final site should communicate two equally important identities:

1. ENGINEER — AI, software, systems, experimentation
2. CREATIVE TECHNOLOGIST — graphic design, branding, motion, visual direction

The website should feel like a carefully art-directed digital experience rather than a template.

---

# 0. CRITICAL OPERATING MODE

This project must be developed ITERATIVELY.

My premium Antigravity plan may have limited usage, so DO NOT attempt to blindly rebuild the entire application in one giant operation.

Work in clearly defined phases.

At the beginning of EVERY iteration:

1. Inspect the current repository.
2. Inspect what has already been implemented.
3. Identify which phase is currently complete.
4. Do NOT rebuild completed sections.
5. Continue only with the next unfinished phase.
6. Preserve working code.
7. Run the application/build after meaningful changes.
8. Fix errors before moving forward.
9. Summarize exactly what changed.
10. Record what remains for the next iteration.

Maintain a lightweight project progress file:

`PORTFOLIO_BUILD_STATUS.md`

This file is the continuation memory for the project.

Update it after every completed phase.

It must contain:

* current phase
* completed sections
* files changed
* known issues
* next phase
* deferred decisions
* performance concerns
* accessibility concerns

If an iteration is interrupted, the next iteration must be able to continue from this file.

---

# 1. PRIMARY SOURCE MATERIAL

Use these as the project's source of truth:

1. Existing repository
2. Existing portfolio documentation
3. Existing components/assets
4. Juan Mora reference website/archive
5. UI/UX Pro Max design rules
6. Motion animation guidance
7. This master specification

Do not invent a completely different architecture.

Do not discard existing working components without a reason.

Before changing architecture, inspect the current implementation.

---

# 2. REFERENCE PHILOSOPHY

The Juan Mora website is the PRIMARY VISUAL / UX REFERENCE.

Study it for:

* editorial composition
* typography hierarchy
* spacing
* negative space
* section pacing
* visual rhythm
* interaction quality
* scroll choreography
* project presentation
* navigation behavior
* transitions
* visual storytelling
* restraint

DO NOT clone:

* personal identity
* biography
* copy
* project names
* images
* proprietary assets
* personal branding
* exact layout where it does not serve Shaheem
* personal 3D/avatar concepts

We are recreating the QUALITY and DESIGN LANGUAGE, not copying the person's identity.

The result should look like:

"the same caliber of creative portfolio"

NOT:

"Juan Mora copied."

---

# 3. CORE DESIGN PRINCIPLE

## WHITESPACE IS PART OF THE DESIGN.

This is one of the most important requirements.

Do NOT fill empty space just because it exists.

Do NOT add:

* unnecessary cards
* unnecessary descriptions
* filler paragraphs
* decorative icons
* random gradients
* random particles
* unnecessary UI labels
* excessive badges
* excessive statistics
* repeated headings
* unnecessary section dividers

If a section looks better with 40% empty space, KEEP THE EMPTY SPACE.

If a composition needs breathing room, DO NOT compress it.

The website should feel:

quiet
confident
intentional
premium
editorial

not:

dense
busy
dashboard-like
template-like

---

# 4. VISUAL IDENTITY

## Overall style

Editorial
+
Minimal
+
Experimental
+
Technical
+
Cinematic
+
Dark

Avoid excessive:

* glassmorphism
* neon
* gradients
* rounded cards
* bento grids
* 3D
* particle backgrounds
* decorative effects

The interface itself should stay restrained.

The work/content provides the visual richness.

---

# 5. COLOR SYSTEM

Primary:

#080808

Secondary:

#111111

Surface:

#151515

Border:

#292929

Primary text:

#F2F2F2

Secondary text:

#A0A0A0

Muted:

#666666

Primary accent:

#FF3B30

Secondary accent:

#4A7CFF

Use red and blue very sparingly.

The dominant visual identity must remain:

BLACK
+
GREY
+
WHITE

with restrained red/blue accents.

Do not turn the website into a neon AI interface.

---

# 6. TYPOGRAPHY

Primary display:

Space Grotesk

Body:

Inter

Technical / metadata:

DM Mono

Typography must do most of the visual work.

Use very large display typography.

Use a restrained type scale.

Example:

Hero:

`clamp(4rem, 11vw, 11rem)`

Section titles:

`clamp(3rem, 7vw, 8rem)`

Body:

16–20px

Metadata:

11–13px

Technical labels:

10–12px

Display line-height:

approximately 0.85–0.95

Body line-height:

1.45–1.6

Do not use arbitrary font sizes everywhere.

Use a coherent typography system.

---

# 7. SPACING

Use an 8px-based spacing system.

Preferred values:

8
16
24
32
48
64
96
128
160
192

Large sections should have substantial vertical breathing room.

DO NOT reduce section height merely to make the website shorter.

The scroll itself is part of the experience.

---

# 8. FINAL HOMEPAGE ARCHITECTURE

The homepage is:

```text
PRELOADER
    ↓
NAVIGATION
    ↓
HERO
    ↓
CORE ENGINE
    ↓
AGRIAI FLAGSHIP
    ↓
SYSTEMS ARCHIVE
    ↓
DESIGN CABINET
    ↓
CAREER CTA
    ↓
CONTACT
    ↓
FOOTER
```

Do NOT add separate:

* Expertise section
* Why Work With Me section
* Lab section

unless future content genuinely justifies them.

Their purpose is already covered by existing sections.

---

# 9. PRELOADER

Create a short cinematic preloader.

Purpose:

introduce the identity
without delaying the visitor.

Possible structure:

SHAHEEM

AI DEVELOPER
×
GRAPHIC DESIGNER

Then transition naturally into Hero.

Target duration:

~1 second

Maximum:

~1.5 seconds

Do not create an annoying loading screen.

Respect reduced-motion preferences.

---

# 10. NAVIGATION

Desktop navigation should be minimal.

Example:

LEFT:

SHAHEEM

RIGHT:

WORK
ABOUT
CAREER
CONTACT

Optional:

availability indicator

Email/social can be accessible through contact/menu interactions.

The navigation should feel almost invisible when the visitor is reading.

It must never dominate the page.

---

# 11. MOBILE NAVIGATION

Mobile menu:

full-screen overlay.

Use Motion for:

* overlay reveal
* staggered links
* exit transition

Touch targets:

minimum 44px.

Nothing should depend exclusively on hover.

---

# 12. CUSTOM CURSOR

Do NOT create a custom cursor merely because another portfolio has one.

First inspect the reference and existing implementation.

If a custom cursor is already part of the working system and improves the experience:

KEEP ONE restrained cursor.

Desktop only.

Possible states:

DEFAULT:

small dot/circle

PROJECT:

VIEW

LINK:

subtle expansion

IMAGE:

subtle contextual response

Do NOT create multiple cursor systems.

Disable on:

* mobile
* touch
* reduced motion

The site must work perfectly without it.

---

# 13. HERO

Hero is the primary identity statement.

Use:

SHAHEEM

AI DEVELOPER
×
GRAPHIC DESIGNER

Supporting information:

availability
location/time if useful
short current focus

Do NOT use a wall of text.

The hero should be dominated by typography.

---

# 14. HERO INTERACTION

Existing VariableProximity interaction is a signature component.

PRESERVE IT if it works.

Use it as the primary hero interaction.

It should feel:

subtle
physical
responsive

not like a gimmick.

Scroll interaction can include:

* slight scale
* vertical movement
* opacity
* restrained parallax

Do not overanimate the hero.

---

# 15. HERO IMAGE

Do NOT make a giant full-screen portrait the centerpiece.

If a high-quality portrait asset exists:

use it as a SMALL SECONDARY element.

Typography remains dominant.

If the image does not meet the visual quality bar:

DO NOT use it.

A text-only hero is better than a weak portrait.

---

# 16. CORE ENGINE

This replaces a generic "Expertise" section.

Purpose:

communicate the multidisciplinary identity.

The section should answer:

"What does Shaheem actually combine?"

Potential disciplines:

AI
CODE
DESIGN
MOTION
SYSTEMS

Use the existing gooey/core-engine concept if it works.

The visual should be conceptual, not decorative.

The disciplines should have a relationship to the visual.

Do not create four generic service cards.

The section should feel like an identity system.

---

# 17. CORE ENGINE MOBILE

Desktop:

hover interaction may be used.

Mobile:

tap-to-cycle or simple interaction.

Never make the experience dependent on hover.

The canvas/blob must be lazy-mounted if expensive.

Do not allow it to consume GPU continuously when not visible.

---

# 18. AGRIAI — FLAGSHIP

AgriAI is the strongest technical proof.

It must receive the greatest technical/project emphasis.

Do NOT fabricate:

* users
* deployment
* accuracy
* testimonials
* business results
* production claims

Clearly distinguish:

REAL IMPLEMENTATION
vs
SIMULATED / DEMO
vs
PLANNED

Where applicable.

The homepage should show:

AGRIAI

AI-POWERED AGRICULTURAL MONITORING

A concise problem statement.

A strong visual.

A clear CTA:

OPEN CASE STUDY →

No huge paragraph.

---

# 19. AGRIAI CASE STUDY

Route:

`/systems/agriai`

Structure:

01 — Problem

02 — Context

03 — System Objective

04 — Architecture

05 — Detection Workflow

06 — Dashboard

07 — Advisory Logic

08 — Technical Stack

09 — Challenges

10 — Limitations

11 — Lessons

12 — Future Direction

Use actual evidence.

Do not invent metrics.

Detection confidence values must be labeled as simulated/demo if they are not production measurements.

---

# 20. SYSTEMS ARCHIVE

This represents the ENGINEER side.

Do NOT use generic project cards.

Use a:

FILE SYSTEM
/
LAB LOG
metaphor.

Projects should appear as rows.

Example:

```text
01  AGRIAI
    AI / COMPUTER VISION
    ACTIVE

02  SMART FOLDER ORGANIZER
    PYTHON / AUTOMATION
    SHIPPED

03  PROJECT CONTEXT EXPORTER
    DEVELOPER TOOLING
    ACTIVE

04  PORTFOLIO OS
    REACT / MOTION
    ACTIVE
```

Use:

number
title
stack
role
year
status

AgriAI should have larger visual weight.

Use existing ScrollFloat where appropriate.

Do not add horizontal dragging unless there is a strong reason.

---

# 21. SMART FOLDER ORGANIZER

Use only real evidence.

If screenshots are unavailable:

do not fabricate UI.

Use a restrained text/metadata row until real screenshots are available.

---

# 22. PROJECT CONTEXT EXPORTER

Do not artificially inflate its importance.

It is a supporting engineering project.

Present it honestly.

---

# 23. DESIGN CABINET

This represents the CREATIVE TECHNOLOGIST side.

Do NOT make this a generic Behance/Pinterest grid.

Use a CABINET / DRAWER metaphor.

Three drawers:

```text
01 — BRAND SYSTEMS

02 — POSTERS

03 — MOTION
```

The drawer itself is the category/filter.

Existing FlowingMenu-style interaction can be repurposed as the drawer mechanism.

---

# 24. BRAND SYSTEMS

Featured:

REVORO MODS
ROYAL GRYPHON

Supporting:

BLUE FLAME
GRÁFICOY
KFC KODINHI

Tier hierarchy matters.

Strong full systems receive more visual space.

Smaller works remain smaller.

Do not give every project equal visual weight.

---

# 25. POSTERS

Include selected work such as:

Kuwait Travel Diaries
SOUL
Gráficoy Poster
Arcane Fan Art

If Arcane is shown:

label it explicitly:

UNOFFICIAL FAN ART

Do not present fan work as client/commercial work.

Posters should be grouped rather than given unnecessary case-study pages.

---

# 26. MOTION DRAWER

This is where the new video assets belong.

Use:

BLUE FLAME LOGOMOTION
ROYAL GRYPHON LOGOMOTION
ENDLESS TOOLS

The short logo animations:

Blue Flame — ~5.4s
Royal Gryphon — ~5.4s

are paired with their respective brand systems.

---

# 27. MOTION VIDEO RULES

CRITICAL PERFORMANCE REQUIREMENT.

NEVER create an autoplay video wall.

Default state:

STATIC POSTER FRAME.

Do not mount/load all videos immediately.

Desktop:

hover may activate muted loop playback.

When another video starts:

previous video MUST pause.

Only ONE video may play at any time.

Mobile:

tap to play.

Tap elsewhere:

pause.

Nothing depends on hover.

Lazy-load video sources only when the media enters/approaches the viewport.

Use poster images wherever possible.

---

# 28. ENDLESS TOOLS

Endless Tools is approximately 30 seconds.

Do NOT treat it like the 5-second logo reels.

Do NOT make it an ambient looping background.

Treat it as a featured motion piece.

Default:

poster frame.

Interaction:

OPEN / WATCH

Then:

lightbox/modal.

Include:

play
pause
timeline/scrubber
mute
close

This is a WATCH experience rather than a hover preview.

It may be featured visually inside the Motion drawer.

---

# 29. DESIGN CABINET MOBILE

Mobile behavior:

tap drawer
↓
drawer opens
↓
tap project
↓
preview opens

No hover-only behavior.

No horizontal interaction that becomes difficult on touch.

Keep the hierarchy clear.

---

# 30. ENDLESS TOOLS — FOOTER DECISION

The Endless Tools video can also function as a transition into the final identity.

Preferred structure:

```text
ABOUT / PHILOSOPHY
        ↓
CAREER
        ↓
CONTACT CTA
        ↓
ENDLESS TOOLS VISUAL SIGNATURE
        ↓
FOOTER
```

Do not make it mandatory if it harms performance.

If used in the footer:

prefer a short optimized excerpt/loop or controlled playback.

Do not force the visitor to watch 30 seconds.

---

# 31. ABOUT / PHILOSOPHY

Combine these into one section.

Do NOT create:

ABOUT
+
DESIGN PHILOSOPHY
+
WHY WORK WITH ME

as three separate sections.

Instead:

ABOUT / PHILOSOPHY

Use large editorial statements.

Concept:

"I build systems that think,
interfaces that communicate,
and visuals that people remember."

This is an example of direction, not mandatory final copy.

Write concise original copy.

Avoid motivational clichés.

---

# 32. CAREER CTA

Recruiter-facing CTA.

Keep it calm.

Possible direction:

OPEN TO BUILDING
INTELLIGENT SYSTEMS
AND DIGITAL EXPERIENCES.

VIEW CAREER →

Do not use experimental copy here.

Career is the documentation layer.

---

# 33. CAREER ROUTE

Route:

`/career`

Recruiter scan order:

1. Name / Role
2. Current focus / availability
3. Strongest projects
4. Technical skills
5. Education
6. Certifications
7. Resume
8. Contact

No fake percentage bars.

No excessive animation.

No Core Engine blob.

No experimental drawer effects.

It should feel like the same person in a more professional room.

---

# 34. FINAL CONTACT CTA

The final large statement should connect:

AI
+
Design
+
Building

Preferred direction:

# LET'S TURN

# IDEAS INTO

# INTELLIGENT

# EXPERIENCES.

Then:

GET IN TOUCH →

Use this as a large typographic ending.

Do not add paragraphs around it.

Let the typography breathe.

---

# 35. FOOTER

Minimal.

Include:

SHAHEEM

AI DEVELOPER
×
GRAPHIC DESIGNER

EMAIL
GITHUB
LINKEDIN

TECHNOLOGY / TOOLS

© 2026

Optional:

availability

Do not create a huge footer full of links.

---

# 36. ENDLESS TOOLS FOOTER RELATIONSHIP

If Endless Tools is used:

it should feel like the final visual signature.

Not:

"another portfolio project."

Think:

CONTENT
↓
IDENTITY
↓
SIGNATURE
↓
FOOTER

This creates closure.

---

# 37. MOTION SYSTEM

Use modern Motion.

For React:

```js
import { motion } from "motion/react"
```

NOT:

```js
import { motion } from "framer-motion"
```

Use:

* motion
* AnimatePresence
* useScroll
* useTransform
* useSpring
* useMotionValue
* layout where appropriate

Prefer transform/opacity animation.

Avoid continuous React re-renders.

---

# 38. MOTION PHILOSOPHY

Motion must have a reason.

Three categories:

SIGNATURE

* Hero VariableProximity
* Core Engine
* carefully controlled cursor

NARRATIVE

* section reveals
* project transitions
* ScrollFloat
* drawer opening

SYSTEM

* navigation
* buttons
* focus states
* page transitions

Do NOT invent a new flashy effect for every section.

The site should have a coherent motion language.

---

# 39. SCROLL ANIMATION

Use scroll-linked motion carefully.

Good:

opacity
y
scale
clip/reveal
parallax

Avoid:

continuous heavy WebGL
scroll-jacking
full-screen forced transitions
extreme rotation

Scrolling must remain natural.

---

# 40. PAGE TRANSITIONS

If multiple routes exist:

use AnimatePresence or equivalent.

Transition:

~300–500ms

Simple.

Elegant.

No dramatic loading sequence every time.

---

# 41. PERFORMANCE RULES

This is a HARD requirement.

Previous portfolio performance problems must not return.

Avoid:

* always-on Three.js
* heavy particle fields
* continuous mouse tracking
* multiple simultaneous videos
* giant unoptimized images
* unnecessary canvas
* expensive blur effects
* infinite animation loops

Prefer:

* CSS
* Motion transforms
* lazy loading
* responsive images
* poster frames
* IntersectionObserver
* code splitting where useful
* `content-visibility`
* GPU-friendly transforms

---

# 42. VIDEO PERFORMANCE

All videos:

* compressed
* poster image
* lazy loaded
* no preload="auto"
* only active when needed

Design Cabinet:

maximum one playing video.

Endless Tools:

modal playback.

---

# 43. ACCESSIBILITY

Must support:

* keyboard navigation
* semantic HTML
* visible focus
* proper heading hierarchy
* alt text
* reduced motion
* sufficient contrast
* accessible buttons
* accessible modal
* focus management
* Escape-to-close

Never use:

`aria-hidden="true"`

on a container containing keyboard-focusable elements that remain tabbable.

---

# 44. REDUCED MOTION

Respect:

`prefers-reduced-motion`

When reduced motion is enabled:

* remove parallax
* remove cursor animation
* reduce page transitions
* remove large motion effects
* keep content fully accessible
* keep essential interactions functional

---

# 45. RESPONSIVE DESIGN

Desktop:

1440+

Laptop:

1024–1439

Tablet:

768–1023

Mobile:

320–767

Do NOT merely shrink desktop.

Create deliberate mobile compositions.

---

# 46. MOBILE PRINCIPLES

Mobile must retain:

* typography hierarchy
* whitespace
* project hierarchy
* cabinet metaphor
* archive structure

But simplify:

* hover interactions
* cursor
* parallax
* complex canvas
* video interactions

Touch target:

minimum 44px.

---

# 47. NO GENERIC UI

Do not use:

* generic rounded cards everywhere
* bento grids
* generic glass cards
* dashboard layouts
* excessive pills
* skill percentage bars
* stock illustrations
* random gradient blobs
* excessive icons

The portfolio is editorial.

---

# 48. CONTENT DENSITY RULE

Before adding text, ask:

"Does this information help the visitor understand Shaheem?"

If no:

remove it.

Prefer:

ONE strong sentence

over:

THREE weak paragraphs.

Prefer:

ONE strong visual

over:

FOUR decorative images.

Prefer:

ONE interaction with purpose

over:

FIVE effects.

---

# 49. PROJECT HIERARCHY

Content weight:

## TIER S

AgriAI

## TIER A

Revoro Mods
Royal Gryphon
Smart Folder Organizer
Endless Tools

## TIER B

Blue Flame
Gráficoy
KFC Kodinhi
Project Context Exporter
Blue Flame/Royal Gryphon logo motion

## TIER C

Poster experiments
Uncertain/unattributed work

Do not give every project equal prominence.

---

# 50. CONTENT INTEGRITY

NEVER fabricate:

* clients
* users
* revenue
* accuracy
* testimonials
* deployment
* awards
* metrics
* production status

If information is unknown:

leave it out.

If a feature is conceptual:

label it conceptual.

If a result is simulated:

label it simulated/demo.

The portfolio must be truthful.

---

# 51. EXISTING COMPONENTS

Before creating new components, inspect existing components.

Potential existing components to preserve/refine:

* VariableProximity
* Core Engine / blob
* Cubes reveal
* FlowingMenu
* ScrollFloat
* Parallax contact
* Custom cursor
* Magnetic links
* Noise overlay

Do not duplicate these components unnecessarily.

Reuse and refactor where possible.

---

# 52. COMPONENT ARCHITECTURE

Aim for:

```text
src/
├── components/
│   ├── navigation/
│   ├── hero/
│   ├── core/
│   ├── systems/
│   ├── design/
│   ├── career/
│   ├── contact/
│   ├── motion/
│   └── shared/
│
├── pages/
│   ├── Home/
│   ├── Career/
│   ├── AgriAI/
│   └── Design/
│
├── data/
│   ├── projects
│   ├── designWork
│   └── motionWork
│
├── hooks/
├── utils/
├── styles/
└── assets/
```

Adapt this to the existing project instead of blindly restructuring it.

---

# 53. DATA-DRIVEN CONTENT

Projects should be data-driven.

Example:

```js
{
  id: "agriai",
  number: "01",
  title: "AgriAI",
  category: "AI / Computer Vision",
  year: "2026",
  status: "active",
  description: "...",
  image: "...",
  route: "/systems/agriai"
}
```

Design work should also be data-driven.

Motion work should be data-driven.

This prevents duplicated markup.

---

# 54. DESIGN TOKENS

Create centralized tokens for:

* colors
* typography
* spacing
* borders
* motion timing
* easing
* breakpoints

Do not scatter magic values everywhere.

---

# 55. IMAGE HANDLING

Use:

* WebP/AVIF where appropriate
* responsive sizes
* lazy loading
* explicit dimensions
* meaningful alt text

Do not load full-resolution assets when thumbnails are sufficient.

---

# 56. VIDEO HANDLING

For each video create:

* poster
* metadata
* source
* duration
* category

Use a reusable video component.

Do not duplicate video logic.

---

# 57. DESIGN CABINET VIDEO COMPONENT

Create one reusable component supporting:

```text
poster state
↓
hover/tap preview
↓
play
↓
pause
↓
active video management
```

Endless Tools should support:

```text
poster
↓
open modal
↓
full playback
```

---

# 58. NO AUTOPLAY WALLS

Absolutely prohibited:

```text
video video video video
playing simultaneously
```

Instead:

```text
poster   poster   poster

interaction
      ↓

one video plays
```

This is both a performance and design requirement.

---

# 59. ROUTES

Required now:

`/`

`/career`

`/systems/agriai`

`/design`

Potential later:

`/systems/smart-folder-organizer`

`/systems/context-exporter`

`/design/revoro-mods`

`/design/royal-gryphon`

Do not create routes just to make the site look larger.

---

# 60. NO LAB ROUTE

Do not create `/lab`.

Experiments already have homes:

engineering → Systems Archive

visual experiments → Design Cabinet

motion → Design Cabinet / Motion

A separate Lab route would fragment the experience.

---

# 61. DESIGN SYSTEM QUALITY CHECK

Before considering any section finished, check:

### Hierarchy

Can I immediately see the most important thing?

### Whitespace

Does the section breathe?

### Typography

Are headings strong and consistent?

### Alignment

Do elements share a clear grid?

### Contrast

Is text readable?

### Interaction

Does motion have a purpose?

### Mobile

Does it work without hover?

### Performance

Is anything unnecessarily expensive?

### Accessibility

Can it be operated with keyboard?

---

# 62. ITERATION ROADMAP

Follow this order.

Do NOT skip ahead unnecessarily.

---

## PHASE 0 — AUDIT

Goal:

Understand existing project.

Tasks:

* inspect repository
* inspect current routes
* inspect components
* inspect styles
* inspect dependencies
* inspect assets
* inspect current animations
* run current app
* identify broken features
* identify reusable components

DO NOT redesign yet.

Output:

`PORTFOLIO_BUILD_STATUS.md`

and a concise implementation plan.

---

## PHASE A — SYSTEMS + AGRIAI

Build:

* Systems Archive
* real project data
* AgriAI flagship
* AgriAI case-study route
* honest content
* ScrollFloat integration

Do NOT touch Design Cabinet yet.

Do NOT redesign Hero yet.

Done when:

AgriAI feels like the strongest technical project on the site.

---

## PHASE B — HERO + NAVIGATION

Build/refine:

* preloader
* navigation
* Hero
* VariableProximity
* availability
* typography
* optional restrained portrait

Do not disturb AgriAI.

Done when:

first viewport immediately communicates:

SHAHEEM
AI DEVELOPER × GRAPHIC DESIGNER

---

## PHASE C — CORE ENGINE

Build/refine:

* Core Engine
* discipline system
* blob
* interaction
* mobile fallback

Do not add unnecessary visual effects.

Done when:

the section communicates multidisciplinary identity without a generic service grid.

---

## PHASE D — DESIGN CABINET

Build:

* cabinet metaphor
* Brand Systems drawer
* Posters drawer
* Motion drawer
* FlowingMenu adaptation
* project hierarchy
* real design assets
* Blue Flame video
* Royal Gryphon video
* Endless Tools featured piece

Highest performance-risk phase.

Implement carefully.

---

## PHASE E — CAREER

Build:

`/career`

Keep it calm and recruiter-friendly.

Do not introduce experimental effects.

---

## PHASE F — CONTACT + FOOTER

Build:

* final CTA
* contact links
* Endless Tools signature transition if performance allows
* footer

Preferred CTA:

LET'S TURN
IDEAS INTO
INTELLIGENT
EXPERIENCES.

---

## PHASE G — MICROINTERACTIONS

Only after all content is correct.

Refine:

* cursor
* magnetic links
* hover
* button transitions
* page transitions
* subtle parallax

Do not introduce new major visual systems.

---

## PHASE H — PERFORMANCE + ACCESSIBILITY

Audit:

LCP
CLS
INP
bundle size
image loading
video loading
GPU usage
mobile performance

Test:

keyboard
screen reader semantics
focus
reduced motion
mobile
tablet
desktop

---

## PHASE I — FINAL ART DIRECTION

Review the entire website as one experience.

Check:

Does it feel like one person designed everything?

Is whitespace consistent?

Is typography consistent?

Are animations consistent?

Is the hierarchy clear?

Does the site feel premium?

Does it communicate AI + design equally well?

Does anything feel unnecessary?

If something is unnecessary:

REMOVE IT.

Do not add more.

---

# 63. ITERATION DISCIPLINE

At the end of every Antigravity iteration:

1. Run the application.
2. Run production build.
3. Fix obvious errors.
4. Check responsive behavior.
5. Update `PORTFOLIO_BUILD_STATUS.md`.
6. State:

```text
CURRENT PHASE:
COMPLETED:
FILES CHANGED:
ISSUES:
NEXT PHASE:
```

Do not start the next major phase automatically if the current phase is incomplete.

---

# 64. WHEN TOKENS / CONTEXT ARE LIMITED

If the context window or available AI usage becomes limited:

DO NOT attempt a massive rewrite.

Instead:

1. Save current progress.
2. Update status file.
3. Finish the smallest coherent task.
4. Stop.

The next iteration will continue.

---

# 65. NEVER REPEAT WORK

Before editing a component:

inspect it.

Before installing a package:

check package.json.

Before creating a component:

search for an existing equivalent.

Before creating a route:

check router configuration.

Before creating an animation:

check whether an existing animation already performs the same job.

Avoid duplicate systems.

---

# 66. FINAL QUALITY BAR

The final website should feel like:

A CREATIVE TECHNOLOGIST'S DIGITAL STUDIO.

Not:

a developer template.

Not:

a graphic designer gallery.

Not:

an AI landing page.

Not:

a Webflow clone.

The identity should emerge from the combination:

AI
+
ENGINEERING
+
DESIGN
+
MOTION

---

# 67. FINAL NARRATIVE

The visitor experience should be:

```text
WHO IS HE?
    ↓
WHAT DOES HE COMBINE?
    ↓
CAN HE ACTUALLY BUILD?
    ↓
SHOW ME THE WORK.
    ↓
HE ALSO DESIGNS?
    ↓
HOW DOES HE THINK?
    ↓
COULD I WORK WITH HIM?
    ↓
CONTACT
```

This is the emotional architecture of the site.

---

# 68. FINAL HOMEPAGE

Lock this structure.

```text
PRELOADER

NAVIGATION

HERO
    SHAHEEM
    AI DEVELOPER × GRAPHIC DESIGNER

CORE ENGINE
    AI
    CODE
    DESIGN
    MOTION
    SYSTEMS

AGRIAI
    FLAGSHIP TECHNICAL PROJECT

SYSTEMS ARCHIVE
    SMART FOLDER ORGANIZER
    PROJECT CONTEXT EXPORTER
    PORTFOLIO OS
    OTHER ENGINEERING WORK

DESIGN CABINET
    BRAND SYSTEMS
    POSTERS
    MOTION
        BLUE FLAME
        ROYAL GRYPHON
        ENDLESS TOOLS

ABOUT / PHILOSOPHY

CAREER CTA

CONTACT CTA
    LET'S TURN
    IDEAS INTO
    INTELLIGENT
    EXPERIENCES.

ENDLESS TOOLS SIGNATURE
    optional / performance-dependent

FOOTER
```

Do not add extra homepage sections unless there is a strong content reason.

---

# 69. FINAL INSTRUCTION

Do not rush.

Do not over-design.

Do not fill empty space.

Do not add effects because they look impressive in isolation.

Do not optimize for "more".

Optimize for:

CLARITY
+
TYPOGRAPHY
+
WHITESPACE
+
CONTENT HIERARCHY
+
INTERACTION
+
PERFORMANCE
+
CRAFT

The strongest version of this portfolio is the one where every element feels intentional.

When something does not improve the experience:

REMOVE IT.

Start with PHASE 0.

Inspect the existing repository first.

Do not immediately rewrite the entire website.

Build this portfolio systematically, phase by phase, and preserve completed work between iterations.
