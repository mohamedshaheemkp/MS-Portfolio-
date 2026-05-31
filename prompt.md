
1. Typography System

Looking at the example you posted, I can extract:

font hierarchy
font scaling
letter spacing
line heights
responsive typography
headline rhythm
spacing between headings and paragraphs

For example from this Apple reference:

display
96px
line-height: 1.04
letter-spacing: -2.11px

heading-lg
56px
line-height: 1.07
letter-spacing: -0.9px

This is one of the reasons Apple's text feels expensive.

I can adapt this to your portfolio without changing your layout.

Example:

Instead of

text-6xl

you may get

text-[72px]
tracking-[-0.04em]
leading-[0.98]

for hero headings.

2. Motion System

I can identify:

Scroll feel
Lenis
native smooth scroll
custom RAF loops
Framer Motion scroll transforms
Animation timing

Example:

344ms ease

instead of

0.8s ease-in-out

which often feels sluggish.

3. Performance Optimizations

I can inspect:

Bad
useTransform(scrollYProgress, ...)

running on 20 elements.

Good
whileInView

only when needed.

Heavy blur filters
blur(50px)

↓

blur(16px)
Expensive shadows
shadow-2xl

↓

value-based elevation

bg-zinc-900
border-zinc-800
Too many motion wrappers
<motion.div>
<motion.div>
<motion.div>

↓

single parent animation

4. Scroll Improvements

Since you already removed Antigravity and fixed most lag:

I can identify if the reference site uses:

Lenis
npm install lenis
Native
html {
  scroll-behavior: smooth;
}
RAF optimized
requestAnimationFrame

loop.

And tell you exactly which one matches your portfolio.

5. Micro Interactions

Things people notice subconsciously:

Navbar

Instead of:

transition-all

use:

transition:
transform .3s ease,
background-color .3s ease,
opacity .3s ease;
Cards

Hover:

translateY(-4px)

not

translateY(-20px)
Buttons

Scale:

whileHover={{ scale: 1.02 }}

not

scale: 1.1
6. Layout Rhythm

This is huge.

I can extract:

section spacing
container width
content width
card padding
visual hierarchy

For example:

max-width: 1200px
section gap:
120px
card padding:
28px

from the Apple reference.

7. Accessibility Improvements

Things many portfolio sites miss:

Respect reduced motion
const prefersReducedMotion = useReducedMotion()

##

Apply

Hero title:

font-size: clamp(64px, 9vw, 96px);
line-height: 0.95;
letter-spacing: -0.05em;
font-weight: 700;

Hero subtitle:

font-size: 20px;
line-height: 1.4;
letter-spacing: -0.02em;

Section titles:

font-size: clamp(32px, 5vw, 56px);
line-height: 1.05;
letter-spacing: -0.04em;
Add Tailwind utilities
.heading-display {
  letter-spacing: -0.05em;
  line-height: 0.95;
}

.heading-section {
  letter-spacing: -0.04em;
  line-height: 1.05;
}



. Motion Timing System

Apple uses very controlled motion.

Nothing feels:

springy
bouncy
elastic

Everything feels:

heavy
confident
precise

Replace

Bad:

transition={{
 duration: 1
}}

Good:

transition={{
 duration: 0.34,
 ease: [0.25, 0.1, 0.25, 1]
}}
Global timings

Create:

export const motion = {
  fast: 0.18,
  normal: 0.34,
  slow: 0.55,
}

Use everywhere.

3. Scroll Smoothness

Since Antigravity caused issues:

Do NOT add another giant animation library.

Use Lenis
npm install lenis

App.jsx

import Lenis from "lenis";

useEffect(() => {
 const lenis = new Lenis({
   duration: 1.1,
   smoothWheel: true,
 });

 function raf(time) {
   lenis.raf(time);
   requestAnimationFrame(raf);
 }

 requestAnimationFrame(raf);

 return () => lenis.destroy();
}, []);

Apple-like result:

smooth
weighted
premium

without heavy GPU usage.

4. Section Rhythm

Apple has massive spacing discipline.

Most portfolios feel cramped.

Add

Between sections:

padding-block: 120px;

Mobile:

padding-block: 80px;
Content width
max-width: 1200px;
margin-inline: auto;

already matches Apple's layout rhythm.

5. Hover Effects

Current portfolio trend:

scale:1.1
rotate:2
translateY:-20

Too aggressive.

Apple approach

Cards barely move.

transform: translateY(-4px);
transition: 340ms ease;

Projects cards:

whileHover={{
 y: -4,
}}

Only.

Add glow instead
border-color: rgba(255,255,255,.15);

instead of huge shadows.

6. Project Cards

Keep your design.

Improve hierarchy.

Card title
font-size: 28px;
font-weight: 600;
letter-spacing: -0.03em;
Description
font-size: 17px;
line-height: 1.5;
opacity: .72;
Tech stack
font-size: 13px;
letter-spacing: .02em;
7. Animation Cleanup

You previously had scroll lag.

Likely causes:

useScroll
useTransform
multiple motion wrappers
Keep only
whileInView

for most sections.

Example:

<motion.div
 initial={{
   opacity:0,
   y:20
 }}
 whileInView={{
   opacity:1,
   y:0
 }}
 viewport={{
   once:true
 }}
/>

Remove continuous transforms unless necessary.

8. Navigation

Apple navigation feels premium because it is subtle.

Improve navbar

When scrolling:

backdrop-filter: blur(16px);
background:
rgba(10,10,10,.65);
border-bottom:
1px solid rgba(255,255,255,.05);

Transition:

transition:
background-color .34s ease,
backdrop-filter .34s ease;
9. Performance

Biggest improvements for your portfolio:

Remove
layout
layoutId

where not required.

Avoid
filter:
blur()

on large sections.

Avoid
scale

on full-screen elements.

Use
transform:
translate3d()

when animating.

Add
will-change:
transform;

ONLY on actively animated elements.

10. Apple-style Premium Details

These matter more than huge animations.

Links
transition:
opacity .3s ease;

Hover:

opacity:.7;
Buttons
border-radius:999px;
Cards
border-radius:28px;

Apple uses this repeatedly.

Typography

Use:

letter-spacing:
negative

almost everywhere for headings.

This alone changes perceived quality dramatically.

IGNORE

Do NOT copy:

✗ White background

✗ Product gradients

✗ Apple layout

✗ Apple cards

✗ Apple sections

✗ Apple imagery

✗ Apple branding

✗ Apple typography exactly

✗ Apple colors

Final Upgrade Priority

For your portfolio specifically:

Phase 1
Typography system
Section spacing
Motion timing
Navbar refinement
Phase 2
Lenis smooth scroll
Card hover cleanup
Animation optimization
Phase 3
Premium micro interactions
Reveal consistency
Performance audit





##

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function GithubButton() {
  return (
    <motion.a
      href="https://github.com/mohamedshaheemkp"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-12 w-12 items-center justify-center"
      whileHover={{ y: -2 }}
      transition={{
        duration: 0.34,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Rotating Background */}
      <div
        className="
          absolute inset-0
          rounded-xl
          bg-zinc-900
          transition-transform duration-300
          group-hover:rotate-[18deg]
        "
      />

      {/* Foreground */}
      <div
        className="
          relative z-10
          flex h-full w-full items-center justify-center
          rounded-xl
          border border-white/10
          bg-black/20
          backdrop-blur-sm
          transition-colors duration-300
          group-hover:bg-white/5
        "
      >
        <Github
          size={20}
          className="
            text-white
            transition-opacity duration-300
            group-hover:opacity-90
          "
        />
      </div>
    </motion.a>
  );
}



Where to place it

If I were integrating it into your portfolio:

Hero
[ Resume ]
[ Contact ]
[ GitHub ]

best location.

About Section
GitHub
LinkedIn
Email