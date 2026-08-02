Volume 6 — Motion System & Interaction Design

Version: 1.0
Status: Motion Architecture Specification
Priority: Critical (Must be completed before UI implementation)

6.0 Purpose

Motion is not decoration.

Motion is communication.

This document defines every movement, transition, interaction, feedback mechanism, timing curve, animation philosophy, and user interaction within MS Portfolio.

While Volume 4 defined how components look,

Volume 6 defines

How they behave.

Every interaction should make the interface feel more alive while making it easier to understand.

6.1 Motion Philosophy

The goal is Invisible Motion.

The user should never think

"Nice animation."

Instead they should think

"Everything feels natural."

Motion should disappear into the experience.

6.2 Motion Mission

Motion exists to improve:

Understanding

Navigation

Hierarchy

Feedback

Delight

Orientation

Continuity

Focus

Nothing else.

6.3 Motion Principles

Every animation must satisfy these principles.

Principle 1

Motion explains.

Never decorates.

Principle 2

Motion should reduce cognitive load.

Never increase it.

Principle 3

Motion follows user intent.

The user causes movement.

Movement never surprises the user.

Principle 4

Every movement has a beginning,

middle,

and end.

Principle 5

Objects behave consistently.

Cards always move similarly.

Buttons always respond similarly.

Sections always reveal similarly.

Principle 6

Motion never delays interaction.

Animations should never block the user.

Principle 7

Performance before beauty.

6.4 Motion Personality

If motion were a human:

Calm

Confident

Elegant

Responsive

Purposeful

Mechanical

Natural

Never:

Hyperactive

Bouncy

Chaotic

Flashy

Arcade-like

6.5 Motion Hierarchy

Not every animation has equal importance.

Hierarchy

Level 1

Page Transition

↓

Level 2

Section Transition

↓

Level 3

Component Reveal

↓

Level 4

Interaction

↓

Level 5

Micro Feedback

The deeper the level,

the shorter and subtler the motion.

6.6 Motion Categories

The entire portfolio uses only these categories.

Page Motion

Layout Motion

Scroll Motion

Hover Motion

Focus Motion

Cursor Motion

Loading Motion

Feedback Motion

Background Motion

Media Motion

Text Motion

3D Motion

6.7 Motion Architecture

Motion is centralized.

animations/

├── variants/
│
├── transitions/
│
├── presets/
│
├── hooks/
│
├── layout/
│
├── gestures/
│
├── page/
│
├── scroll/
│
├── text/
│
├── cursor/
│
├── loading/
│
├── shared/
│
└── constants/

Nothing lives inside components unless unique.

6.8 Motion Tokens

Motion uses design tokens.

Examples

motion.duration.fast

motion.duration.normal

motion.duration.slow

motion.spring.soft

motion.spring.medium

motion.spring.firm

motion.ease.standard

motion.ease.exit

Never

duration: 0.47

inside components.

6.9 Animation Timing

Standard durations

Instant

Very Fast

Fast

Normal

Slow

Very Slow

Cinematic

Every animation belongs to one category.

6.10 Easing System

Only predefined easings.

Linear

Ease Out

Ease In Out

Spring Soft

Spring Firm

Critical Damping

No random bezier curves.

6.11 Motion Accessibility

Respect

Reduced Motion

High Contrast

Keyboard Navigation

Screen Readers

Reduced Motion users should receive:

Opacity

Crossfade

Instant transitions

Never forced movement.

6.12 Page Transitions

Page transitions communicate continuity.

Never dramatic.

Sequence

Exit

↓

Fade

↓

Layout

↓

Enter

Transition should feel seamless.

6.13 Section Reveals

Every section enters consistently.

Pattern

Fade

Translate

Stagger

Never

Spin

Rotate

Bounce

Zoom

6.14 Text Motion

Typography deserves special treatment.

Types

Word Reveal

Line Reveal

Character Reveal

Mask Reveal

Split Reveal

Typewriter (rare)

Only hero typography receives advanced animation.

Body text should remain readable.

6.15 Image Motion

Images should feel physical.

Reveal

Parallax

Scale

Mask

Depth

Hover

Loading

Never rotate randomly.

6.16 Card Motion

Cards define interaction quality.

Hover

↓

Lift

↓

Shadow

↓

Border

↓

Content responds

Cards never jump.

6.17 Button Motion

Buttons communicate confidence.

Hover

Slight lift

Pressed

Compress

Focus

Outline

Loading

Spinner

Disabled

Reduced opacity

6.18 Cursor System

Cursor becomes part of the interface.

Modes

Default

Hover

Media

Drag

Link

Button

Project

Video

Loading

Hidden

Every state documented.

6.19 Cursor Behaviour

Cursor should:

React

Not distract.

Enlarge over projects.

Magnetize buttons.

Reveal media.

Support dragging.

Never lag.

6.20 Scroll Philosophy

Scrolling tells the story.

Not simply moves content.

Every viewport transition should:

Introduce

Reveal

Connect

Prepare

No empty scrolling.

6.21 Scroll Behaviors

Reveal

Sticky

Pin

Progress

Parallax

Horizontal

Layer

Mask

Video Trigger

Section Sync

Each must justify itself.

6.22 Smooth Scrolling

Lenis controls scroll.

Requirements

Stable

Responsive

Accessible

Consistent

Respect reduced motion.

6.23 Parallax Rules

Parallax creates depth.

Never excessive.

Background

Moves least.

Foreground

Moves most.

Text

Almost never.

6.24 Hover Language

Hover always means

"This is interactive."

Hover should never be decorative.

Examples

Lift

Glow

Border

Scale

Content Shift

Arrow Reveal

Underline

6.25 Focus Language

Keyboard users receive

Visible outline

Clear hierarchy

Accessible contrast

Never remove outlines.

6.26 Loading Philosophy

Loading is part of branding.

Loading types

Skeleton

Progress

Logo

Content

Media

Images

Never infinite spinners unless unavoidable.

6.27 Skeleton System

Every asynchronous component defines:

Loading

Partial

Success

Error

Empty

6.28 Empty States

Every empty state includes:

Illustration

Title

Explanation

Primary Action

6.29 Error Motion

Errors should:

Shake minimally

Highlight field

Explain issue

Recover gracefully

Never aggressively vibrate.

6.30 Media Motion

Videos

Auto preview

Mute

Lazy load

Pause outside viewport

Images

Lazy

Blur placeholder

Progressive reveal

6.31 Background Motion

Backgrounds should breathe.

Examples

Noise

Gradient drift

Particle drift

Grid movement

Light shifts

Never dominate content.

6.32 3D Motion

Three.js used only where meaningful.

Candidates

Hero

Architecture

Project visualization

Background

Not every section.

6.33 Project Motion

Project cards

↓

Hover

↓

Open

↓

Shared Transition

↓

Case Study

↓

Media

↓

Back

Should feel spatial.

6.34 Navigation Motion

Navigation

Hide

Reveal

Highlight

Active indicator

Scroll progress

Minimal transitions.

6.35 Section Transition Matrix

Every section transition documented.

Example

Hero

↓

About

↓

Projects

↓

Archive

↓

Timeline

↓

Contact

Each transition has defined motion.

6.36 Interaction Feedback

Every action produces feedback.

Hover

Click

Copy

Download

Expand

Collapse

Navigation

Submission

Users never wonder if something happened.

6.37 Gesture System

Mouse

Touch

Keyboard

Trackpad

Pen

Interactions remain consistent.

6.38 Motion Performance

Never animate

Width

Height

Top

Left

Prefer

Transform

Opacity

Scale

MotionValue

GPU acceleration.

6.39 Motion Documentation

Every animation documents

Purpose

Trigger

Target

Duration

Easing

Accessibility

Performance

Fallback

6.40 Animation Variants

Central library.

Examples

fadeIn

fadeUp

fadeLeft

fadeRight

stagger

scale

maskReveal

slide

sharedTransition

pageEnter

pageExit

cardHover

buttonHover

Never redefine them repeatedly.

6.41 Motion Review Checklist

Every animation reviewed for:

Purpose

Consistency

Performance

Accessibility

Readability

Responsiveness

Reusability

Brand alignment

6.42 Motion Anti-Patterns

Never use

Random delays

Excessive bounce

Continuous spinning

Infinite floating

Heavy particles

Long loading

Unpredictable movement

Animation spam

Motion should disappear into usability.

6.43 Motion Library Standards

The Motion layer should expose:

Variants

Transitions

Hooks

Utilities

Components

Presets

Constants

Developers should never recreate animation logic.

6.44 Deliverables

This volume produces:

Motion Philosophy
Interaction Language
Motion Token System
Timing & Easing Standards
Page Transition System
Section Reveal System
Hover System
Cursor System
Scroll System
Loading System
Skeleton System
Feedback System
Background Motion Rules
Three.js Usage Guidelines
Animation Variant Library
Motion Accessibility Standards
Motion Performance Standards
Motion Folder Architecture
6.45 Acceptance Criteria

Volume 6 is complete when:

Every interaction in the portfolio has a documented purpose and behavior.
Motion is centralized into reusable variants, transitions, and tokens.
Animations support usability rather than distract from it.
Reduced-motion users receive an equivalent accessible experience.
The system maintains smooth performance across devices.
Designers and developers can implement new interactions without inventing new animation patterns.
6.46 Definition of Done (Volume 6)

Volume 6 is complete when every question about interaction already has a documented answer.

If someone asks:

"How should this page transition?"
"How should this card respond to hover?"
"What happens when a project opens?"
"How should scrolling feel?"
"How should loading be presented?"
"How should the cursor react?"
"Which easing curve should we use?"
"What animation variant belongs here?"

the answer exists in this Motion System.
