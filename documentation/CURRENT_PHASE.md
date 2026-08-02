# Current Phase Contract — Phase 9: Interactive Systems

**Status:** Frozen for planning and implementation

## Current Phase

Phase 9 — **Interactive Systems**

This phase adds a single, useful interaction layer to the existing portfolio: accessible project discovery in the Systems archive. It does not redesign the website or add new visual effects.

## Objectives

1. Let visitors filter and search the Systems archive using the existing project metadata.
2. Keep the selected filters/search query in the URL so links can be shared and refreshed safely.
3. Make the interaction fully usable with keyboard, touch, and screen readers.
4. Preserve the current premium editorial visual language and existing route behavior.

## Constraints

- Work only on the Systems archive discovery experience.
- Reuse the existing React, React Router, Tailwind, and Motion dependencies; do not install packages or change `package.json`.
- Use existing `src/data/projects.js` metadata. Extend the schema only when a required filter cannot be expressed with current data.
- Filters must work without hover and must remain usable at mobile widths.
- Search/filter state must be reflected in URL query parameters.
- Respect `prefers-reduced-motion`; interactions must not rely on animation to communicate state.
- Do not change project content, visual branding, page hierarchy, or global navigation.

## Deliverables

1. An accessible filter control for the Systems archive, using existing project categories/tags.
2. An accessible text search that narrows visible projects by title, summary, technology, or tags.
3. URL-synchronised state for filters and search, including direct-load and browser back/forward support.
4. Clear empty and reset states.
5. A concise interaction contract in `documentation/COMPONENT_GUIDE.md` or an adjacent Phase 9 note describing the query parameters and accessibility behavior.

## Exit Criteria

- Every Systems project remains reachable with no filter selected.
- A visitor can filter, search, reset, refresh, share a URL, and use Back/Forward without inconsistent results.
- All controls have accessible names, visible focus states, and keyboard support.
- The interface is functional at 375px, tablet, and desktop widths.
- No protected component changes, broken routes, or new dependencies.
- `npm.cmd run lint` and `npm.cmd run build` pass.
- The completed work is delivered as one clean, independently reviewable commit.

## Files That May Change

- `src/pages/Systems.jsx`
- `src/data/projects.js` — only for missing filter/search metadata
- `src/index.css` — only for focused, shared accessibility styling if existing utilities cannot express it
- `documentation/COMPONENT_GUIDE.md` — create or update the interaction contract
- `documentation/CONTENT_MODEL.md` — create or update only if project-data schema changes

## Files That Must Not Change

- `package.json`
- `package-lock.json`
- `src/App.jsx`
- `src/main.jsx`
- `src/sections/Hero.jsx`
- `src/sections/CoreEngine.jsx`
- `src/sections/AgriAIShowcase.jsx`
- `src/sections/SystemsArchive.jsx`
- `src/sections/DesignCabinet.jsx`
- `src/sections/Contact.jsx`
- `src/components/IntroSequence.jsx`
- `src/components/CustomCursor.jsx`
- `src/components/StatusLabel.jsx`
- `src/components/VariableProximity.jsx`
- `src/components/Cubes.jsx`
- `src/components/FlowingMenu.jsx`
- `src/components/ScrollFloat.jsx`
- `src/pages/AgriAIPage.jsx`
- `src/pages/SmartFolderPage.jsx`
- `src/pages/PortfolioPage.jsx`
- `src/pages/DesignArchive.jsx`
- All assets under `src/assets/`

## Protected Components

The following are established signature interactions and are explicitly out of scope:

- `VariableProximity` hero typography
- CoreEngine Cubes reveal and gooey-blob indicator
- `FlowingMenu` in Design Cabinet
- `ScrollFloat` in Systems Archive
- Hero cinematic image, role ticker, noise layer, and tether
- Global custom cursor and system-state label
- Contact parallax/glow/magnetic-link behavior
- Intro sequence

## Future Recommendations

Not part of this phase:

- Command palette and global search
- Design archive filters
- Interactive timeline/career explorer
- Theme switcher
- Additional cinematic transitions
- Image/bundle optimization
- Full accessibility, SEO, and test-suite phases
- Analytics, deployment, and launch work
- Portfolio OS, automation, or AI modules

Any item above requires a new phase contract before implementation.
