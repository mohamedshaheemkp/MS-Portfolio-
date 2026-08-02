# Portfolio Website — Extracted Project Context

Source: ChatGPT project **"portfolio website"**, reviewed on 2026-07-30.

## Product intent

Build a memorable, premium personal portfolio for an **AI Developer and Graphic Designer**. It should help recruiters, hiring managers, senior engineers, creative directors, founders, agencies, and AI companies understand both technical depth and visual craft.

The desired feel is premium, editorial, modern, minimal, technical, dark, and high-contrast: confident without being flashy. The main visual reference is Juan Mora's portfolio; use its sense of spacing, motion, hierarchy, storytelling, and rhythm without copying it.

## Design principles

- Quality over quantity; whitespace over clutter; typography over decoration.
- Motion must guide attention and communicate state—not be a gimmick.
- Prefer storytelling and clear experience over feature lists and effects.
- Avoid generic portfolio patterns, childish UI, neon overload, excessive gradients, and unnecessary glass effects.
- Keep a consistent, long-lived design system rather than repeatedly redesigning the site.
- Preserve usability, mobile performance, accessibility, and reduced-motion support.

## Expected technical approach

- React + Vite + Tailwind CSS.
- Motion / `motion/react` for animation; spring-based animation is preferred.
- Modern CSS, component-based architecture, and reusable isolated components/hooks.
- Use Three.js only when truly needed; use Lenis for smooth scrolling if already present.
- Lazy-load heavy elements, optimize images and bundle size, and prefer CSS transforms.
- No new dependencies or `package.json` changes unless explicitly approved.

## Existing strengths to preserve

These implementation details were explicitly called out as signature mechanics. Do not replace or redesign them without a specific request:

- CoreEngine's gooey-blob node indicator.
- VariableProximity hero typography.
- CoreEngine Cubes reveal.
- DesignCabinet's FlowingMenu.
- SystemsArchive's ScrollFloat wordmark.
- The Contact section's parallax treatment.
- Existing navigation, theme tokens, responsive layout, lazy loading, project data/content, and routes.

## Planned enhancement roadmap

### Phase 1 — Global signature interactions

- Create `src/components/CustomCursor.jsx`: centre dot + trailing ring; contextual labels (`VIEW`, `EXPLORE`, `OPEN`, `DRAG`) on applicable desktop interactions; no impact on touch devices or frame rate.
- Add a discreet fixed mono system-state label, driven by `IntersectionObserver`:
  - Hero: `INITIALIZING ENGINE`
  - CoreEngine: `LOADING SYSTEMS`
  - AgriAI: `ANALYZING PROJECT`
  - SystemsArchive: `PROCESSING ARCHIVE`
  - DesignCabinet: `CURATING WORK`
  - Contact: `RENDERING RESULTS`
- Extend editorial section numbering based on the true section order (including Systems Archive and Contact).

### Phase 2 — Hero

- Replace the static role line with an `AnimatePresence` ticker, every 2.5 seconds: AI Engineer, Systems Thinker, Visual Designer, Creative Technologist, AI Product Builder.
- Keep the current hero image and cinematic scale animation.
- Add a subtle SVG `feTurbulence` grain/noise overlay (3–5% opacity, slow/pulsed; cursor-reactive only if cheap).
- Animate the existing bottom scroll tether with `useScroll` / `useTransform` so it hands off into CoreEngine.

### Phase 3 — CoreEngine

- Add a low-opacity, blurred cursor-following radial glow behind Cubes, based on `activeProject.color`.
- Add mobile tap-to-select while retaining desktop hover behavior.

### Phase 4 — AgriAI showcase

- Reuse real assets from `src/assets/Agri Ai/`; never fabricate imagery.
- Present either `DRONE VIEW → DETECTION OVERLAY → RECOMMENDATIONS`, or the fallback `INPUT → AI ANALYSIS → OUTPUT`.
- Use thin animated connecting lines, mono labels, and in-view staggered motion; do not redesign the surrounding section.

### Phase 5 — Systems Archive

- Keep ScrollFloat unchanged.
- Add two or three low-opacity, floating editorial chips (such as `3 SYSTEMS`, `2026`, `REACT`) behind the title with gentle drift/parallax.

### Phase 6 — Design Cabinet

- Keep FlowingMenu unchanged.
- Give background ghost typography very subtle scroll-based scale, skew, and vertical movement.

### Phase 7 — Contact

- Preserve the layout, glow, and parallax typography.
- Add a desktop-only magnetic interaction to email and social links (maximum ~10px attraction, spring/MotionValues).

### Phase 8 — Intro sequence

Only after all earlier phases are approved: black screen → minimal MS logo → thin line draw → wipe transition → site.

## Working rules

For each approved phase:

1. Inspect the existing implementation and explain the relevant architecture.
2. Explain the proposed approach.
3. Modify only the requested files and preserve existing behavior.
4. Report files/components/hooks changed, why, performance and accessibility impact, risks, and a Git-style diff.
5. Stop for approval before beginning another phase.

## Project conversations indexed

1. Beginner Figma Implementation Guide
2. Portfolio Structure Insights
3. Portfolio Project Reference
4. Professional Portfolio Strategy
5. MS Portfolio Gem Setup
6. Psychological Web Design Principles
7. Claude Portfolio Explanation
8. Website Analysis for Portfolio
9. Career-Focused Portfolio Insights
10. Portfolio Feedback Priorities

## Notes from the project setup conversation

- A separate AI assistant for the project should act as a senior UI/UX designer, creative director, brand strategist, frontend architect, React/motion specialist, performance engineer, and recruiter-minded reviewer.
- Prefer a maintained Markdown knowledge base (project goal, design system, folder structure, components, motion rules, roadmap, key decisions, and known issues) over uploading the whole repository as a ZIP.
- If code must be shared, provide focused files/folders such as `README.md`, `package.json`, configuration files, and `src/`; exclude `node_modules`, `.git`, `dist`, editor/cache files, and oversized media.
