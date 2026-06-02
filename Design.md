#### &#x09;				**Final Portfolio Blueprint**



##### **Final Section Architecture**







###### **Section Order**





00  Navbar

01  Hero

02  Statement

03  About

04  Capabilities  (Skills)

05  Projects

06  The Craft     (DesignShowcase)

07  Contact

08  Footer









\### Section Details



\---



\*\*00 — Navbar\*\*

\- \*\*Purpose:\*\* Persistent orientation and access. Never competes with content.

\- \*\*Key message:\*\* `MS` — the brand. Three destinations. One action.

\- \*\*Emotional goal:\*\* Invisible. The user should not think about the navbar.

\- \*\*Viewport height:\*\* Fixed `64px`. Does not scroll.



\---



\*\*01 — Hero\*\*

\- \*\*Purpose:\*\* Establish identity. Make the dual AI Engineer + Graphic Designer positioning undeniable within 5 seconds. Introduce the face.

\- \*\*Key message:\*\* `MOHAMED SHAHEEM / AI Engineer \& Graphic Designer / Kerala, India`

\- \*\*Emotional goal:\*\* Surprise and credibility simultaneously. The scale of the name and the quality of the portrait should produce: \*"This person takes their work seriously."\*

\- \*\*Viewport height:\*\* `100vh` — exactly one screen. No scroll required to see the complete statement.



\---



\*\*02 — Statement\*\*

\- \*\*Purpose:\*\* A full-stop between the identity introduction and the work. A single idea that frames how to interpret everything that follows. The narrative pivot.

\- \*\*Key message:\*\* `"I build things that think. / I design things that feel."`

\- \*\*Emotional goal:\*\* Intrigue. The visitor should want to continue scrolling to understand what this means in practice.

\- \*\*Viewport height:\*\* `100vh` minimum. Content centres vertically. Breathing room is the point.



\---



\*\*03 — About\*\*

\- \*\*Purpose:\*\* Earn personal trust. Establish context — who, where, what stage of career, what drives the work. Answer the recruiter's first background-check question before they ask it.

\- \*\*Key message:\*\* \*"I am a final-year AI \& Data Science student who also designs. Here is exactly where I am and what I do."\*

\- \*\*Emotional goal:\*\* Relatability and confidence. Not the arrogance of someone claiming seniority they don't have. The confidence of someone who knows exactly what they bring.

\- \*\*Viewport height:\*\* `150–180vh`. Two or three scroll gestures. The section breathes.



\---



\*\*04 — Capabilities\*\*

\- \*\*Purpose:\*\* Demonstrate range and depth without listing. Show that the skills are not surface-level.

\- \*\*Key message:\*\* \*"Five discipline areas. Each one goes deeper than the label suggests."\*

\- \*\*Emotional goal:\*\* Respect. The recruiter should feel they are looking at someone who has gone further than expected for their experience level.

\- \*\*Viewport height:\*\* `120–150vh`. The matrix rows need room to reveal on hover.



\---



\*\*05 — Projects\*\*

\- \*\*Purpose:\*\* Provide proof. Convert the narrative established in sections 01–04 into concrete evidence.

\- \*\*Key message:\*\* \*"Three production projects. Real problems. Measurable outcomes."\*

\- \*\*Emotional goal:\*\* Conviction. After the project list and the Folder interaction, the visitor should feel: \*"This person actually builds things."\*

\- \*\*Viewport height:\*\* `120vh` for the two-column layout + metrics bar. The section should feel substantial.



\---



\*\*06 — The Craft\*\*

\- \*\*Purpose:\*\* Demonstrate the design half of the identity with visual evidence. Show that Graphic Designer is not a secondary claim.

\- \*\*Key message:\*\* \*"The visual work is as serious as the engineering work."\*

\- \*\*Emotional goal:\*\* Delight and surprise. The Circular Gallery should feel like a genuinely unexpected and beautiful way to present design work. Visitors should want to interact with it.

\- \*\*Viewport height:\*\* `200–250vh`. The sticky sidebar + scrolling gallery format means the section takes multiple scroll lengths. This is intentional — the design work earns that time.



\---



\*\*07 — Contact\*\*

\- \*\*Purpose:\*\* Remove all friction from reaching out. Make the visitor feel that sending a message is easy, welcome, and will be responded to by a real person.

\- \*\*Key message:\*\* \*"I am reachable. I want to hear from you. Here is exactly how."\*

\- \*\*Emotional goal:\*\* Warmth and openness. After a portfolio that demonstrates high craft, the contact section should feel human and direct — not corporate.

\- \*\*Viewport height:\*\* `100vh`. The section fits one screen. Contact should never feel like work.



\---



\*\*08 — Footer\*\*

\- \*\*Purpose:\*\* Close the experience. Reinforce the brand identity. Provide secondary navigation for those who arrived at the bottom without using the navbar. Signal that the portfolio is a living, maintained document.

\- \*\*Key message:\*\* `MS. / AI Engineer \& Graphic Designer / Crafted with intention.`

\- \*\*Emotional goal:\*\* Completeness. The experience should feel finished, not abandoned.

\- \*\*Viewport height:\*\* `auto` — typically `40–50vh` on desktop.



\---



\## 3. Desktop Wireframes



All wireframes use a `1280px` reference viewport. Max content width: `1200px`. Horizontal padding: `80px` at `lg`.



\---



\### 00 — Navbar



```

┌────────────────────────────────────────────────────────────────────┐

│  64px fixed                                                        │

│                                                                    │

│  MS.                    About  Work  Contact           │

│  ←logotype→             ←──────── ghost links ────────→  ←pill→  │

│                                                                    │

└────────────────────────────────────────────────────────────────────┘



Typography:    MS.  →  Space Grotesk 700, 18px

&#x20;              Links → DM Mono, 11px, tracking-widest, uppercase

&#x20;              CTA  →  DM Mono, 11px, border: 1px solid --accent



Background:    rgba(5,5,5,0.80) + backdrop-blur-md

Border-bottom: 1px solid var(--border) on scroll only



Interaction:   Links fade to 60% opacity on hover (150ms)

&#x20;              CTA border brightens to full --accent on hover (200ms)

&#x20;              Navbar fades in on page load after PageLoader clears

```



\---



\### 01 — Hero



```

┌────────────────────────────────────────────────────────────────────┐

│  100vh                                                             │

│                                                                    │

│  ┌─ TOP BAND (pt-24 from navbar) ───────────────────────────────┐ │

│  │  \[AI Engineer · Graphic Designer]    \[Kerala, India ]  │ │

│  │  ← DM Mono 10px tracking-\[0.35em] →  ← DM Mono 10px →      │ │

│  └───────────────────────────────────────────────────────────────┘ │

│                                                                    │

│  ┌─── LEFT 50% ────────┐  ┌─── RIGHT 50% ──────────────────────┐ │

│  │                     │  │                                     │ │

│  │  ┌───────────────┐  │  │   MOHAMED                           │ │

│  │  │               │  │  │   ← Space Grotesk 900              │ │

│  │  │   PORTRAIT    │  │  │     clamp(9vw,11vw,130px)          │ │

│  │  │               │  │  │     ls: -0.04em, lh: 0.92 →        │ │

│  │  │  object-cover │  │  │                                     │ │

│  │  │  object-left  │  │  │   SHAHEEM                           │ │

│  │  │               │  │  │                                     │ │

│  │  │  h-\[75vh]     │  │  │                                     │ │

│  │  │  rounded-2xl  │  │  │   ─────────────────────────────    │ │

│  │  │               │  │  │   Designing AI systems.            │ │

│  │  │               │  │  │   Engineering interfaces.          │ │

│  │  │               │  │  │   ← Inter 16px, --muted →          │ │

│  │  └───────────────┘  │  │                                     │ │

│  │                     │  │   \[ Resume ↗ ]  \[ Contact → ]       │ │

│  │                     │  │   ← DM Mono 10px ghost buttons →   │ │

│  │                     │  │                                     │ │

│  │                     │  │   ──  scroll                        │ │

│  │                     │  │   ← scroll indicator, 8px mono →   │ │

│  └─────────────────────┘  └─────────────────────────────────────┘ │

└────────────────────────────────────────────────────────────────────┘



Interactions:

&#x20; - Name lines: clip-reveal upward on load (existing animation, kept)

&#x20; - Portrait: static. No parallax. No scale on scroll.

&#x20; - Top band: fades in at delay 0.15s

&#x20; - Right column: fades in at delay 0.28s (after name reveals)



Portrait treatment:

&#x20; - Left column: overflow-hidden, rounded-2xl

&#x20; - Image: object-cover object-\[30%\_20%] to frame the face

&#x20; - Subtle gradient on right edge of portrait: 

&#x20;   linear-gradient(to right, transparent 70%, #050505 100%)

&#x20;   This bleeds the portrait into the right column background

&#x20;   without a hard edge.

```



\---



\### 02 — Statement



```

┌────────────────────────────────────────────────────────────────────┐

│  100vh min-height                                                  │

│  bg: #050505                                                       │

│  flex items-center justify-center                                  │

│                                                                    │

│                                                                    │

│                                                                    │

│         I build things that think.                                 │

│         ← Space Grotesk 800                                        │

│           clamp(36px, 5.5vw, 76px)                                 │

│           color: --text (#F0F0F0)                                   │

│           ls: -0.03em, lh: 1.05 →                                  │

│                                                                    │

│         I design things that feel.                                 │

│         ← Same scale, italic                                       │

│           color: --accent (#00f0ff) →                              │

│                                                                    │

│                                                                    │

│         ─────────────────────────────────────────                  │

│         ← motion.div scaleX 0→1 on scroll entry, 600ms →          │

│                                                                    │

│         AI · Machine Learning · Graphic Design ·                   │

│         React · Python · Brand Identity                            │

│         ← DM Mono 10px, tracking-\[0.25em], --muted →              │

│                                                                    │

│                                                                    │

│                                                                    │

└────────────────────────────────────────────────────────────────────┘



Max content width: 900px, centred

Left-aligned text (not centred) — editorial, not landing-page



Animations:

&#x20; Line 1: ScrollReveal blur, delay 0

&#x20; Line 2: ScrollReveal blur, delay 0.12s

&#x20; Divider: scaleX reveal, delay 0.3s

&#x20; Discipline list: fade, delay 0.45s

```



\---



\### 03 — About



```

┌────────────────────────────────────────────────────────────────────┐

│  \~180vh total                                                      │

│                                                                    │

│  01 ─────── About                                                  │

│  ← section label, DM Mono 10px →                                  │

│  mb-20                                                             │

│                                                                    │

│  ┌─ BLOCK 1: Statement + Credentials ──────────────────────────┐  │

│  │                                                              │  │

│  │  LEFT 55%                    RIGHT 45%                       │  │

│  │                                                              │  │

│  │  Converting Ideas into       Degree      AI \& Data Science   │  │

│  │  ← gradient headline →       College     MEA Engineering     │  │

│  │  clamp(32px,5vw,56px)        Year        2022 – 2026         │  │

│  │  Space Grotesk 700           Skills      ML · Vision ·       │  │

│  │                                          Design              │  │

│  │                              Tools       Python · React · R  │  │

│  │                                          PyTorch · Figma     │  │

│  │                              Status      Open to work        │  │

│  │                                                              │  │

│  │                              ← DM Mono 10px labels          │  │

│  │                                Inter 13px values            │  │

│  │                                2-col dl, row gap-3 →        │  │

│  └──────────────────────────────────────────────────────────────┘  │

│                                                                    │

│  ─────── divider (scaleX reveal) ─────────────────────────────    │

│                                                                    │

│  ┌─ BLOCK 2: Bio ───────────────────────────────────────────────┐  │

│  │                                                              │  │

│  │  LEFT 38%                    RIGHT 62%                       │  │

│  │                                                              │  │

│  │  // THE PERSPECTIVE          I'm an AI Engineer and          │  │

│  │  Building AI Systems,        Graphic Designer based in       │  │

│  │  and Crafting Visual         Kerala, India...                │  │

│  │  Identities.                                                 │  │

│  │  ← sub-heading →             I specialise in taking          │  │

│  │  clamp(20px,2.5vw,28px)      ideas from concept to          │  │

│  │  Space Grotesk 700           production...                   │  │

│  │                                                              │  │

│  │                              ← Inter 17px, --muted           │  │

│  │                                max-w-\[58ch]                  │  │

│  │                                line-height: 1.65 →          │  │

│  └──────────────────────────────────────────────────────────────┘  │

│                                                                    │

│  ─────── divider ──────────────────────────────────────────────    │

│                                                                    │

│  ┌─ BLOCK 3: Timeline (single entry, right-sized) ──────────────┐  │

│  │                                                              │  │

│  │  // MILESTONES               ← DM Mono 10px, --muted →       │  │

│  │  AI Research \&               ← Space Grotesk 700, 22px →    │  │

│  │  Creative Engineering                                        │  │

│  │                                                              │  │

│  │  ● 2025–Present                                              │  │

│  │  │  Training custom deep learning models (AgriAi)...         │  │

│  │  └─ ← single timeline card, reduced heading scale →          │  │

│  │                                                              │  │

│  └──────────────────────────────────────────────────────────────┘  │

│                                                                    │

└────────────────────────────────────────────────────────────────────┘

```



\---



\### 04 — Capabilities



```

┌────────────────────────────────────────────────────────────────────┐

│  \~140vh                                                           │

│                                                                    │

│  02 ─────── Capabilities                                           │

│  mb-6                                                              │

│  "Two disciplines. One standard."                                  │

│  ← DM Mono 11px, --muted, mb-20 →                                  │

│                                                                    │

│  What I ve done                                                    │

│                                                          │

│  ← Space Grotesk 700, clamp(32px,5vw,56px) →                       │

│  mb-20                                                             │

│                                                                    │

│  ─── border-t ────────────────────────────────────────────────     │

│  ┌─ ROW 01: AI \& Machine Learning ──────────────────────────────┐ │

│  │  KEEP EXISTING — hover reveals neural SVG paths + detail     │ │

│  └──────────────────────────────────────────────────────────────┘ │

│  ┌─ ROW 02: Frontend Engineering ───────────────────────────────┐ │

│  │  KEEP EXISTING                                               │ │

│  └──────────────────────────────────────────────────────────────┘ │

│  ┌─ ROW 03: Backend \& Systems ───────────────────────────────────┐ │

│  │  KEEP EXISTING                                               │ │

│  └──────────────────────────────────────────────────────────────┘ │

│  ┌─ ROW 04: Brand Ecosystems ────────────────────────────────────┐ │

│  │  KEEP EXISTING                                               │ │

│  └──────────────────────────────────────────────────────────────┘ │

│  ┌─ ROW 05: Visual Experiments ──────────────────────────────────┐ │

│  │  KEEP EXISTING                                               │ │

│  └──────────────────────────────────────────────────────────────┘ │

│                                                                    │

└────────────────────────────────────────────────────────────────────┘

```



\---



\### 05 — Projects



```

┌────────────────────────────────────────────────────────────────────┐

│  \~130vh                                                            │

│                                                                    │

│  03 ─────── Projects                                               │

│  mb-20                                                             │

│                                                                    │

│  ┌─ TWO-COLUMN ──────────────────────────────────────────────────┐ │

│  │                                                               │ │

│  │  LEFT 1fr                         RIGHT 380px                 │ │

│  │                                                               │ │

│  │  Built to solve                   ┌──────────────────────┐   │ │

│  │  real problems.                   │                      │   │ │

│  │  ← display heading →              │   FOLDER             │   │ │

│  │  mb-6                             │   scale: 3.0         │   │ │

│  │                                   │   color: #5227FF     │   │ │

│  │  ─── border-t ─────────────────   │   \[PROJECTS etched]  │   │ │

│  │  01    AgriAI                │                      │   │ │

│  │        YOLOv9 Crop Detection     │   hover: papers peek │   │ │

│  │        \[AI]  98.4%  Accuracy  ↗ │   click: papers fan  │   │ │

│  │  ─── border-b ─────────────────   │                      │   │ │

│  │  02  Smart Folder                 │   \[legend pills       │   │ │

│  │      Python File Router           │    on open]          │   │ │

│  │      \[AUTO]   ↗     │                      │   │ │

│  │  ─── border-b ─────────────────   └──────────────────────┘   │ │

│  │  03  AI Portfolio                                               │ │

│  │      Vite · Framer Motion        ← items-start pt-\[60px] →  │ │

│  │       \[WEB]  ↗                               		  │ │

│  │  ─── border-b ─────────────────                               │ │

│  │                                                               │ │

│  │  ↗ View all on GitHub                                         │ │

│  │  ← DM Mono 11px ghost link →                                  │ │

│  │                                                               │ │

│  └───────────────────────────────────────────────────────────────┘ │

│                                                                    │

│  ┌─ METRICS BAR ──────────────────────────────────────────────────┐ │

│  │  3              98.4%           10k+            98             │ │

│  │  Production     AI Model        Files           Lighthouse     │ │

│  │  Projects       Accuracy        Routed          Score          │ │

│  │  ← grid-cols-4, border, rounded-2xl →                         │ │

│  └───────────────────────────────────────────────────────────────┘ │

│                                                                    │

│  Hover interaction on rows:                                        │

│  - Project name: skewX(0→-3deg), 200ms                            │

│  - Number: color → project tagColor, 150ms                        │

│  - Arrow: translate(3px,-3px), 150ms                              │

│  - Row bg: rgba(255,255,255,0.015) tint, 200ms                    │

│                                                                    │

└────────────────────────────────────────────────────────────────────┘

```



\---



\### 06 — The Craft



```

┌────────────────────────────────────────────────────────────────────┐

│  \~220vh (sticky sidebar + scrolling gallery)                       │

│                                                                    │

│  ┌─ LEFT SIDEBAR 26% ────────┐  ┌─ RIGHT GALLERY 74% ───────────┐ │

│  │  sticky top-0 h-screen    │  │  scrollable                   │ │

│  │                           │  │                               │ │

│  │  04 ─── Creative          │  │  ┌─────────────────────────┐  │ │

│  │         Direction         │  │  │                         │  │ │

│  │                           │  │  │   CircularGallery       │  │ │

│  │  THE                      │  │  │   WebGL-powered         │  │ │

│  │  ← Space Grotesk 900 →    │  │  │   drag-to-rotate        │  │ │

│  │  clamp(32px,5vw,56px)     │  │  │                         │  │ │

│  │                           │  │  │   Category images       │  │ │

│  │  CRAFT.                   │  │  │   float in 3D ring      │  │ │

│  │  ← --accent italic →      │  │  │                         │  │ │

│  │                           │  │  └─────────────────────────┘  │ │

│  │  "Posters, brand          │  │                               │ │

│  │  systems, and visual      │  │                               │ │

│  │  identities—built         │  │                               │ │

│  │  independently."          │  │                               │ │

│  │  ← DM Mono 10px →         │  │                               │ │

│  │                           │  │                               │ │

│  │  ─────────────────        │  │                               │ │

│  │                           │  │                               │ │

│  │  ● Poster Designs         │  │                               │ │

│  │  ○ Brand Identity         │  │                               │ │

│  │  ○ Logo Collections       │  │                               │ │

│  │  ← category switcher →    │  │                               │ │

│  │                           │  │                               │ │

│  │  \[active description]     │  │                               │ │

│  │  ← from designs.js →      │  │                               │ │

│  │                           │  │                               │ │

│  └───────────────────────────┘  └───────────────────────────────┘ │

│                                                                    │

└────────────────────────────────────────────────────────────────────┘

```



\---



\### 07 — Contact



```

┌────────────────────────────────────────────────────────────────────┐

│  \~100vh                                                            │

│                                                                    │

│  ┌─ LEFT 45% ─────────────────┐  ┌─ RIGHT 55% ──────────────────┐ │

│  │                            │  │                              │ │

│  │  Have an idea?             │  │  ┌──────────────────────┐   │ │

│  │  ← Space Grotesk 700 →     │  │  │  Name                │   │ │

│  │  clamp(32px,5vw,56px)      │  │  │  ─────────────────   │   │ │

│  │  lh: 1.0                   │  │  │  Email               │   │ │

│  │                            │  │  │  ─────────────────   │   │ │

│  │  Let's make it real.       │  │  │  Message             │   │ │

│  │  ← italic, --accent →      │  │  │                      │   │ │

│  │                            │  │  │                      │   │ │

│  │  ─── divider ──────────    │  │  │  ─────────────────   │   │ │

│  │                            │  │  │  \[ Send Message → ]  │   │ │

│  │  \[ Download Resume ↗ ]     │  │  └──────────────────────┘   │ │

│  │  ← elevated CTA           │  │                              │ │

│  │    border: --accent/25 →   │  │  SpotlightCard wrapper       │ │

│  │                            │  │  border: --border            │ │

│  │  mohamedshaheemkp74        │  │  hover: spotlight follows    │ │

│  │  @gmail.com                │  │  cursor, --accent3 glow      │ │

│  │  ← Inter 14px, --muted →   │  │                              │ │

│  │                            │  │                              │ │

│  │  \[GH]  \[Li]  \[In]          │  │                              │ │

│  │  ← social icon row →       │  │                              │ │

│  │                            │  │                              │ │

│  └────────────────────────────┘  └──────────────────────────────┘ │

│                                                                    │

└────────────────────────────────────────────────────────────────────┘

```



\---



\### 08 — Footer



```

┌────────────────────────────────────────────────────────────────────┐

│  auto height (\~45vh)                                               │

│                                                                    │

│  ══════════════════════════════════════════════════════════════    │

│  ← marquee: AI Engineering · Creative Development · Brand         │

│    Identity · Computer Vision · Motion Design · React 19 →        │

│  ══════════════════════════════════════════════════════════════    │

│                                                                    │

│  ┌─ COL 1 (MS.) ──┐ ┌─ COL 2 (Nav) ─┐ ┌─ COL 3 (Contact) ──────┐│

│  │                │ │                │ │                          ││

│  │  MS.           │ │  About         │ │  mohamedshaheemkp74      ││

│  │  ← logotype → │ │  Work          │ │  @gmail.com              ││

│  │                │ │  Contact       │ │                          ││

│  │  "AI Engineer  │ │  Resume ↗      │ │  \[GH]\[Li]\[In]            ││

│  │  \& Graphic     │ │                │ │                          ││

│  │  Designer..."  │ │                │ │                          ││

│  │                │ │                │ │                          ││

│  └────────────────┘ └────────────────┘ └──────────────────────────┘│

│                                                                    │

│  ─── border-t ──────────────────────────────────────────────────  │

│  © 2026 Mohamed Shaheem. All rights reserved.   Crafted with      │

│                                                 intention.         │

└────────────────────────────────────────────────────────────────────┘

```



\---



\## 4. Mobile Wireframes



Reference viewport: `390px` (iPhone 14). Single column throughout. No grid layouts below `lg` unless explicitly noted.



\---



\### 00 — Navbar (Mobile)



```

┌──────────────────────────────────┐

│  56px fixed                      │

│  MS.                     \[☰]    │

│  ← logotype →     ← hamburger → │

└──────────────────────────────────┘



Hamburger opens full-screen overlay:

┌──────────────────────────────────┐

│  MS.                      \[✕]   │

│                                  │

│                                  │

│  About                           │

│  Work                            │

│  Contact                         │

│                                  │

│  \[ Hire Me ]                     │

│                                  │

│  \[GH]  \[Li]  \[In]                │

└──────────────────────────────────┘

Links: Space Grotesk 700, 32px

Animation: stagger fade-in, 60ms delay each

```



\---



\### 01 — Hero (Mobile)



```

┌──────────────────────────────────┐

│  100svh                          │

│                                  │

│  \[AI Engineer · Graphic Design]  │

│  ← DM Mono 9px, top band →      │

│                                  │

│  ┌──────────────────────────┐    │

│  │                          │    │

│  │      PORTRAIT            │    │

│  │      40vh                │    │

│  │      object-cover        │    │

│  │      object-\[30%\_15%]    │    │

│  │      rounded-xl          │    │

│  │      w-full              │    │

│  │                          │    │

│  └──────────────────────────┘    │

│                                  │

│  MOHAMED                         │

│  SHAHEEM                         │

│  ← Space Grotesk 900            │

│    clamp(13vw,17vw,20vw) →      │

│                                  │

│  Designing AI systems.           │

│  Engineering interfaces.         │

│  ← Inter 15px, --muted →        │

│                                  │

│  \[ Resume ↗ ]  \[ Contact → ]     │

│                                  │

│  ─ scroll                        │

└──────────────────────────────────┘

```



\---



\### 02 — Statement (Mobile)



```

┌──────────────────────────────────┐

│  100svh min                      │

│  flex items-center               │

│  px-6                            │

│                                  │

│                                  │

│  I build things                  │

│  that think.                     │

│  ← Space Grotesk 800            │

│    clamp(32px,9vw,52px) →       │

│                                  │

│  I design things                 │

│  that feel.                      │

│  ← italic, --accent →           │

│                                  │

│  ─────────────────────           │

│                                  │

│  AI · ML · Graphic Design        │

│  React · Python ·                │

│  Brand Identity                  │

│  ← DM Mono 9px, --muted →       │

│                                  │

│                                  │

└──────────────────────────────────┘

```



\---



\### 03 — About (Mobile)



```

┌──────────────────────────────────┐

│  01 ─── About                    │

│                                  │

│  Converting Ideas                │

│  into Reality.                   │

│  ← gradient headline, 32px →    │

│  mb-10                           │

│                                  │

│  Degree  AI \& Data Science       │

│  College MEA Engineering         │

│  Year    2022–2026               │

│  Skills  ML · Vision · Design    │

│  Tools   Python · React · Figma  │

│  Status  Open to work            │

│  ← credential list, full width  │

│    DM Mono 9px / Inter 12px →   │

│  mb-12                           │

│                                  │

│  ─────────────────────           │

│                                  │

│  // THE PERSPECTIVE              │

│  Building AI Systems,            │

│  and Crafting Visual             │

│  Identities.                     │

│  ← sub-heading, 22px →          │

│  mb-6                            │

│                                  │

│  I'm an AI Engineer and          │

│  Graphic Designer...             │

│  ← Inter 16px, --muted →        │

│  mb-6                            │

│                                  │

│  I specialise in taking...       │

│  mb-10                           │

│                                  │

│  ─────────────────────           │

│                                  │

│  // MILESTONES                   │

│  AI Research \& Creative          │

│  Engineering                     │

│  ← 22px heading →               │

│                                  │

│  ● 2025–Present                  │

│  │  Training custom...           │

│  └─ ← timeline card →           │

│                                  │

└──────────────────────────────────┘

```



\---



\### 04 — Capabilities (Mobile)



```

┌──────────────────────────────────┐

│  02 ─── Capabilities             │

│  "Two disciplines.               │

│   One standard."                 │

│  mb-10                           │

│                                  │

│  What I bring to                 │

│  the table.                      │

│  ← 32px heading →               │

│  mb-10                           │

│                                  │

│  ─────────────────────           │

│  01  AI \& Machine Learning       │

│      \[tap to expand]             │

│  ─────────────────────           │

│  02  Frontend Engineering        │

│  ─────────────────────           │

│  03  Backend \& Systems           │

│  ─────────────────────           │

│  04  Brand Ecosystems            │

│  ─────────────────────           │

│  05  Visual Experiments          │

│  ─────────────────────           │

│                                  │

│  Note: hover→ becomes tap→       │

│  SVG paths simplified on mobile  │

│  Detail panel expands vertically │

└──────────────────────────────────┘

```



\---



\### 05 — Projects (Mobile)



```

┌──────────────────────────────────┐

│  03 ─── Projects                 │

│                                  │

│  Built to solve                  │

│  real problems.                  │

│  ← 28px heading →               │

│  mb-6                            │

│                                  │

│  ─────────────────────           │

│  01  AI Portfolio                │

│      Vite · Framer Motion        │

│      \[WEB]  98  Lighthouse  ↗    │

│  ─────────────────────           │

│  02  Smart Folder                │

│      Python File Router          │

│      \[AUTO]  10k+  Routed  ↗    │

│  ─────────────────────           │

│  03  AgriAI                      │

│      YOLOv9 Detection            │

│      \[AI]  98.4%  Acc.  ↗       │

│  ─────────────────────           │

│                                  │

│  ↗ View all on GitHub            │

│  mb-12                           │

│                                  │

│  ┌──────────────────────────┐    │

│  │       FOLDER             │    │

│  │       scale: 2.2         │    │

│  │       centred            │    │

│  │       hover → tap        │    │

│  └──────────────────────────┘    │

│  mb-12                           │

│                                  │

│  ┌──────┐ ┌──────┐               │

│  │  3   │ │98.4% │               │

│  │Proj. │ │AI Acc│               │

│  └──────┘ └──────┘               │

│  ┌──────┐ ┌──────┐               │

│  │ 10k+ │ │  98  │               │

│  │Files │ │Score │               │

│  └──────┘ └──────┘               │

│  ← 2×2 metrics grid →           │

└──────────────────────────────────┘

```



\---



\### 06 — The Craft (Mobile)



```

┌──────────────────────────────────┐

│  Sidebar collapses to top panel  │

│  Gallery renders below           │

│                                  │

│  04 ─── Creative Direction       │

│                                  │

│  THE CRAFT.                      │

│  ← 32px, --accent italic →      │

│                                  │

│  "Posters, brand systems,        │

│   and visual identities—         │

│   built independently."          │

│  ← DM Mono 10px →               │

│                                  │

│  \[Poster Designs] \[Brand] \[Logo] │

│  ← horizontal scroll tabs →     │

│  mb-8                            │

│                                  │

│  \[active description text]       │

│  mb-8                            │

│                                  │

│  ┌──────────────────────────┐    │

│  │                          │    │

│  │   CircularGallery        │    │

│  │   h-\[380px]              │    │

│  │   drag enabled           │    │

│  │                          │    │

│  └──────────────────────────┘    │

│                                  │

│  Note: sticky sidebar becomes    │

│  static top panel on mobile.     │

│  Gallery height fixed 380px.     │

└──────────────────────────────────┘

```



\---



\### 07 — Contact (Mobile)



```

┌──────────────────────────────────┐

│  Single column                   │

│                                  │

│  Bring your ideas                │

│  into reality.                  │

│  ← italic --accent, 32px →      │

│  mb-10                           │

│                                  │

│  \[ Download Resume ↗ ]           │

│  ← border --accent/25 →         │

│  mb-6                            │

│                                  │

│  mohamedshaheemkp74@gmail.com    │

│  ← Inter 13px, --muted →        │

│  mb-6                            │

│                                  │

│  \[GH]  \[Li]  \[In]                │

│  mb-12                           │

│                                  │

│  ┌──────────────────────────┐    │

│  │  Name                    │    │

│  │  ─────────────────────   │    │

│  │  Email                   │    │

│  │  ─────────────────────   │    │

│  │  Message                 │    │

│  │                          │    │

│  │                          │    │

│  │  ─────────────────────   │    │

│  │  \[ Send Message → ]      │    │

│  └──────────────────────────┘    │

└──────────────────────────────────┘

```



\---



\## 5. Component Strategy



\---



| Component | Decision | Reasoning |

|---|---|---|

| \*\*Folder\*\* | \*\*KEEP — UNCHANGED\*\* | Signature interactive moment. The most memorable element in the portfolio. Repositioned in Phase 3.2 from primary navigation to right-column feature. That repositioning is complete. Do not touch further. |

| \*\*CircularGallery\*\* | \*\*KEEP — MINOR FIX\*\* | The WebGL 3D ring is a genuine differentiator for a design portfolio. Fix the `key={activeIndex}` remount bug and the tablet layout. No visual changes. |

| \*\*SpotlightCard\*\* | \*\*KEEP — UNCHANGED\*\* | Used correctly in the Contact form and Project grid (if ever populated). The mouse-following spotlight effect is production-quality. |

| \*\*Capability Matrix\*\* | \*\*KEEP — UNCHANGED\*\* | The five-row hover system with SVG neural paths is the portfolio's most technically sophisticated UI element. Minor framing text addition only. |

| \*\*Hero Image\*\* | \*\*KEEP — REPOSITIONED\*\* | Moves from full-bleed background to left-column foreground subject. Same image, same `object-cover`. Compositional role changes — visual importance increases. |

| \*\*Navbar\*\* | \*\*KEEP — ALREADY UPDATED\*\* | Phase 3.1 complete. CTA now reads "Hire Me". No further changes. |

| \*\*Contact Form\*\* | \*\*KEEP — MINOR FIXES\*\* | Three fixes: heading rewrite, Resume button elevation, success auto-dismiss, env var cleanup. Structure and EmailJS integration unchanged. |

| \*\*Timeline\*\* | \*\*KEEP — RESCALED\*\* | The single timeline entry card is kept but the section heading above it is rescaled from `clamp(32px,5vw,56px)` to `22px`. The card component itself is unchanged. |

| \*\*ScrollReveal\*\* | \*\*KEEP — UNCHANGED\*\* | `prefers-reduced-motion` guard already implemented. Used correctly throughout. No changes. |

| \*\*Parallax\*\* | \*\*KEEP — RATIONALISED\*\* | Currently \~9 instances across sections. Audit and remove instances where the parallax element is invisible or decorative without payoff. Target: max 6 active instances total. |

| \*\*Background\*\* | \*\*KEEP — PERFORMANCE PASS DEFERRED\*\* | Particle count reduction and noise consolidation moved to Phase 4 final polish. Not touched during Phase 3. |

| \*\*MagnetLines\*\* | \*\*REMOVE\*\* | Fires on every `mousemove`. Has no informational value in the About section context. The right column it occupied is replaced by the credential list. Import removed from About.jsx. |

| \*\*CONCEPT watermark\*\* | \*\*REMOVE\*\* | `text-\[20vw]` at `opacity: 0.012` contributes zero visual information and occupies a Parallax scroll listener. Remove the entire block. |

| \*\*Skill Ecosystem grid\*\* | \*\*REMOVE\*\* | Four cards duplicating the Capabilities matrix. Removed from About.jsx. The ScrollRevealGroup and card data are not reused elsewhere. |

| \*\*Statement section\*\* | \*\*CREATE\*\* | New `src/sections/Statement.jsx`. Full-viewport typographic section. One new file. Registered in App.jsx. |

| \*\*PageLoader\*\* | \*\*KEEP — UNCHANGED\*\* | Correct implementation. No changes. |

| \*\*SmoothScroll\*\* | \*\*KEEP — UNCHANGED\*\* | Correct implementation. No changes. |

| \*\*ScrollProgress\*\* | \*\*KEEP — UNCHANGED\*\* | Correct implementation. No changes. |

| \*\*GithubButton\*\* | \*\*KEEP — UNCHANGED\*\* | Used in Hero. No changes. |

| \*\*Magnetic\*\* | \*\*KEEP — UNCHANGED\*\* | Used on timeline node dot. Kept. |



\---



\## 6. Storytelling Flow



\---



\### The Narrative Journey



\---



\*\*Visitor lands — Hero (0 seconds)\*\*



The first image is a face. A real person in a cinematic portrait. Beside it, a name at large scale. Above everything, in small mono type: `AI Engineer · Graphic Designer`.



The visitor's brain registers: \*this is a person, not a template.\* Within 3 seconds they know the name, the discipline, and the location. Within 5 seconds, if they read the tagline, they understand the dual identity.



The quality of the portrait and the scale of the name create an immediate credibility signal: \*whoever built this cares about how it looks.\*



\*\*Emotional state:\*\* Curious. Slightly surprised. Attentive.



\---



\*\*First scroll — Statement (5–15 seconds)\*\*



The page transitions to pure black. Two lines of text, large.



`I build things that think.`

`I design things that feel.`



No image. No card. No decoration. Just the claim.



This is a deliberate pause in the experience. The visitor is being asked to read, not scan. The second line — in italic cyan — produces a micro-moment of contrast that makes both lines more memorable than either would be alone.



Below the divider, a discipline list in small mono type confirms that both sides of the claim are backed by specific skills.



\*\*Emotional state:\*\* Intrigued. The bold claim has created a question: \*can this person actually back this up?\*



\---



\*\*Second scroll — About (15–45 seconds)\*\*



The answer to "who is this person" begins. The credential list answers the recruiter's background-check question immediately and honestly: \*AI \& Data Science degree, MEA Engineering College, final year, open to work.\* No invented experience. No inflated claims.



The bio below the headline is specific. It names real technologies (YOLOv9, React). It names real project types (crop disease detection, editorial poster systems). It ends with a clear, personal value statement.



The timeline entry at the bottom is single — and the section doesn't pretend otherwise. The scale is honest. The entry is framed correctly.



\*\*Emotional state:\*\* Trust building. The honesty of the credentials and the specificity of the bio make the portfolio feel reliable.



\---



\*\*Third scroll — Capabilities (45–75 seconds)\*\*



The matrix lands. Five rows. Each one expands on hover to reveal depth that the category label alone doesn't suggest. The SVG neural paths animate between rows. The detail panels show that the capabilities aren't surface-level.



This section is where the \*technical\* recruiter spends the most time. The hover interactions reward exploration without requiring it. A skimming recruiter sees five clean rows. A curious recruiter sees the full picture.



\*\*Emotional state:\*\* Respect. \*This person knows more than I expected.\*



\---



\*\*Visitor reaches Projects (75–120 seconds)\*\*



The two-column layout lands. The project list is immediately readable — no click required to understand what the three projects are. Names, tech stacks, categories, and metrics are all visible at rest.



The Folder sits in the right column. Those who want to explore it will. Those who don't have already gathered the key information from the list.



Hovering a project row produces the skew and colour effect. The metrics bar at the bottom provides a data-driven summary: `98.4% AI Model Accuracy`, `10k+ Files Routed`, `98 Lighthouse Score`.



\*\*Emotional state:\*\* Conviction. \*This person actually ships things. The numbers are real.\*



\---



\*\*Visitor reaches Design Work (120–180 seconds)\*\*



The section transition changes the emotional register. The sidebar appears. The circular gallery loads.



`THE CRAFT.` in large italic cyan beside a calm description: \*Posters, brand systems, and visual identities — built independently.\*



The Circular Gallery is the moment that rewards visitors who made it this far. The 3D ring of design work, draggable and explorable, is a genuinely delightful interaction. The category switcher in the sidebar lets them filter between poster design, brand identity, and logo work.



This section answers the question the design half of the portfolio is building toward: \*the graphic designer claim is not decorative — the work is here.\*



\*\*Emotional state:\*\* Delight. \*I didn't expect to see this quality of visual work alongside the AI projects.\*



\---



\*\*Visitor contacts (180+ seconds)\*\*



`Have an idea? / Let's make it real.`



The contact section is warm and direct. The Resume is elevated — it's the first secondary action below the heading. The form is clean and functional. The email address is visible for those who prefer direct contact.



\*\*Emotional state:\*\* Ready. The narrative has earned the contact moment. The visitor knows who Mohamed is, what he's built, what he can do, and what he cares about. Reaching out feels like a natural conclusion.



\---



\*\*Footer\*\*



The marquee runs: `AI Engineering · Creative Development · Brand Identity · Computer Vision · Motion Design · React 19 · Python · Full Stack · Graphic Design`.



`MS.` logotype. Brand description. `Crafted with intention.`



The experience closes on the same identity it opened on. The circle is complete.



\---



\## 7. Visual Language Rules



\---



\### Typography Hierarchy



\*\*Rule 1 — Scale communicates importance, not decoration.\*\*

The largest text on any given section is its primary message. If the largest text in a section is decorative (a watermark, a background word), it is a violation of this rule and must be removed.



\*\*Rule 2 — Maximum three type sizes per section.\*\*

Display + body + mono label. Never four. Never five.



\*\*Rule 3 — Italic is used once per section, on the phrase of highest emotional weight.\*\*

Not for general emphasis. Not for style. Once. The phrase that carries the emotional core of the section.



\*\*Rule 4 — DM Mono is always smaller than Inter body text.\*\*

Mono type is annotation. It should never compete with prose. `10–11px` maximum in all contexts.



\*\*Rule 5 — All-caps only in the hero name and section number labels.\*\*

Never in body copy. Never in headings except the hero name.



\---



\### Colour Usage



\*\*Rule 1 — Accents are semantic, not decorative.\*\*

\- Cyan `#00f0ff`: interactive states, section labels, the engineering discipline

\- Yellow `#e8ff00`: AI/ML contexts only (AgriAI tag, ML capability row, AI-related metric highlights)

\- Purple `#a855f7`: Design Showcase section only



\*\*Rule 2 — One accent colour per component.\*\*

A component that uses cyan does not also use yellow or purple. The semantic separation must be absolute.



\*\*Rule 3 — The hero uses white only.\*\*

No accent colours appear in the hero viewport. The name is white. The tagline is muted. The badge is mono white at reduced opacity. The first accent colour the visitor sees is in the Statement section — which makes it land harder.



\*\*Rule 4 — Background glow opacity: `0.05–0.09` maximum.\*\*

Glows exist to suggest depth, not to tint the page. If the glow is perceptible as a colour cast, it is too strong.



\*\*Rule 5 — Grain at `0.025` opacity.\*\*

Currently `0.04`. Reduced to prevent interference with fine typography. The grain is a material texture, not a visible filter.



\---



\### Spacing System



All spacing values are multiples of `4px`. The practical scale:



```

4px    micro-gaps (icon to label)

8px    component internal spacing

12px   tight component grouping

16px   standard internal padding

24px   between elements within a block

32px   between related blocks

48px   between sections of a component

64px   section internal breathing room

96px   between major section elements

120px  section top/bottom padding (desktop)

```



\*\*Rule: no arbitrary spacing values.\*\* Every gap, padding, and margin must be a Tailwind spacing unit that maps to the above scale. `px-\[83px]` is a violation. `px-20` (80px) or `px-24` (96px) is correct.



\---



\### Motion Hierarchy



\*\*Tier 1 — Identity (cannot be disabled without breaking the experience):\*\*

Hero name clip-reveal. This is the portfolio's opening statement. On `prefers-reduced-motion`, it becomes a fade-in.



\*\*Tier 2 — Navigation (helps orient the visitor):\*\*

ScrollReveal entrance animations on all section content. On `prefers-reduced-motion`, opacity-only.



\*\*Tier 3 — Interaction (rewards engagement):\*\*

Row hover effects, folder open/close, capability matrix SVG paths, folder glow. On `prefers-reduced-motion`, colour transitions only.



\*\*Tier 4 — Atmosphere (adds texture):\*\*

Background glow drift, grain shimmer, particle system. On `prefers-reduced-motion`, disabled entirely.



\---



\## 8. Signature Moments



These are the five moments that make this portfolio impossible to forget. Every implementation decision is tested against: \*does this protect, improve, or at minimum not harm one of these five moments?\*



\---



\*\*Moment 1 — The Name at Scale (Hero)\*\*

The first thing the visitor sees is a face and a name at a size they didn't expect. `MOHAMED / SHAHEEM` filling the right half of the viewport. The clip-reveal animation — letters rising from below the container — gives the name physical weight, as if it is assembling itself in front of the visitor.



\*Why it's memorable:\* Most portfolios put the name in a headline at normal size. This puts the name at a scale that says: \*this is the subject, not the header.\*



\*What must be protected:\* The portrait quality, the name scale, the clip-reveal timing, and the top-band badge that confirms `AI Engineer` immediately.



\---



\*\*Moment 2 — The Statement (Section 02)\*\*

A full viewport of near-black with two lines of text. Nothing else. The second line breaks to italic cyan mid-idea. The visitor's eye follows: white statement → colour shift → italic emphasis.



\*Why it's memorable:\* It is the only section in the portfolio with no image, no card, no component, no decoration. In a portfolio full of technical craft, a moment of pure restraint is more striking than another visual effect.



\*What must be protected:\* The scale, the line break position, the single-accent-colour rule, and the emptiness around the text.



\---



\*\*Moment 3 — The Folder (Projects)\*\*

The visitor hovers the folder. Papers peek from the top. They click. Three project cards fan out in three directions — each tilted at a different angle, each holding a micro-UI with the project's name, tech stack, metric, and a navigation CTA. The glow behind the folder pulses from `6%` to `18%` opacity.



\*Why it's memorable:\* It is a physical metaphor — a filing cabinet in a digital portfolio. It turns a navigational interaction into a small moment of play. Recruiters remember it because it is completely unlike every other portfolio they review.



\*What must be protected:\* The CSS fan animation, the paper tilt angles, the glow transition, the `PROJECTS` etched label on the folder front, and the legend pills that appear after opening. None of these are touched.



\---



\*\*Moment 4 — The Capability Matrix (Skills)\*\*

The visitor hovers a capability row. A neural path SVG animates from the left edge to the row, two signal nodes travel along the path, and the row expands to reveal a detail panel with specific technologies and a deeper description. The row's background subtly shifts. Adjacent rows fade slightly.



\*Why it's memorable:\* The interaction visualises the idea of a neural network — which is exactly the right metaphor for an AI Engineer's skill system. It is thematically coherent and technically impressive without being gratuitous.



\*What must be protected:\* The SVG path animation, the signal node motion, the expand/collapse panel, the stagger between rows on initial load. None of these are touched.



\---



\*\*Moment 5 — The Circular Gallery (The Craft)\*\*

The visitor enters the Design Showcase. A 3D ring of design work rotates slowly. They can drag it. Images tilt as they move. The category switcher in the sidebar changes the entire gallery's contents.



\*Why it's memorable:\* A graphic designer showing work in a draggable 3D carousel is an unexpected presentation choice for a student portfolio. The physicality of the interaction — the drag gesture, the inertia, the tilt — makes the design work feel tactile rather than static.



\*What must be protected:\* The WebGL renderer, the drag interaction, the tilt effect, the image ring layout. The only change is fixing the context remount bug and reframing the sidebar copy.



\---



\### The Test



Before implementing any change in Phase 3.3 through 3.9, ask:



> \*Does this change protect all five signature moments? Does it improve at least one of them?\*



If the answer is no to both, the change should not be made.



\---



\*\*This blueprint is now the source of truth. All future implementation phases derive from it.\*\*



Ready to begin Phase 3.3 — Hero Redesign — on your approval.

