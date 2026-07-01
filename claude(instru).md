# MS-Portfolio — Complete Codebase Audit
_Compiled after full source inspection, June 2026_

---

## 1. Route & Section Map

### What's actually rendered

| Route | File | Status |
|---|---|---|
| `/` (HomePage) | `Hero`, `CoreEngine`, `AgriAIShowcase`, `SystemsArchive`, `DesignCabinet`, `Contact` | ✅ Live |
| `/systems` | `pages/Systems.jsx` | ✅ Live |
| `/design` | `pages/DesignArchive.jsx` | ✅ Live |

### Sections that are **dead / orphaned** (in `/sections/` but never imported by App.jsx or any page)

| File | Notes |
|---|---|
| `About.jsx` | Not imported anywhere |
| `BuildProcess.jsx` | Not imported anywhere |
| `Capabilities.jsx` | Not imported anywhere |
| `DesignShowcase.jsx` | Not imported anywhere |
| `Philosophy.jsx` | Not imported anywhere |
| `Projects.jsx` | Not imported anywhere |
| `SelectedSystems.jsx` | Not imported anywhere |
| `Skills.jsx` | Not imported anywhere (+ has broken imports, see §3) |
| `Statement.jsx` | Not imported anywhere (+ uses undefined CSS vars, see §2) |
| `VisualExperiments.jsx` | Not imported anywhere |
| `WorkHeading.jsx` | Not imported anywhere |

**11 of 17 section files are completely unreachable in the live app.** These are candidates for deletion, archival, or re-integration.

---

## 2. CSS Variable Audit — Silent Failures

Four live/orphaned sections reference CSS variables that are **not defined anywhere** in `index.css`, `App.css`, or any stylesheet. The browser silently falls back to defaults (usually `transparent` or `inherit`), so the sections do not crash — they just render incorrectly.

### Undefined variables found

| Variable | Used in | Expected meaning |
|---|---|---|
| `--lime` | `Statement.jsx` | Lime-green accent color |
| `--ink` | `Statement.jsx` | Dark text/background color |
| `--space-section` | `Statement.jsx` | Vertical section spacing |
| `--accent` | `App.css` | Primary accent color |
| `--accent-bg` | `App.css` | Accent background tint |
| `--accent-border` | `App.css` | Accent border color |
| `--text-h` | `App.css` | Heading text color |

### Defined variables (the real live theme, in `index.css`)

`--color-bg`, `--color-surface`, `--color-border`, `--color-text-primary`, `--color-text-secondary`, `--color-text-dim`, `--color-accent-blue` (`#4d7cfe`), `--color-accent-red` (`#e03040`)

**Action required:** Either (a) define the missing variables in `index.css` with real values, or (b) replace their usages with the live `--color-*` tokens. `Statement.jsx` in particular will render completely unstyled until this is fixed.

---

## 3. Broken Imports — Build Risk

### `Skills.jsx`
```js
import ScrollReveal from '../components/ScrollReveal';   // ❌ does not exist
import Parallax from '../components/Parallax';           // ❌ does not exist
```
Neither `ScrollReveal.jsx` nor `Parallax.jsx` exist in `src/components/`. Since `Skills.jsx` is currently orphaned (not imported by any live route), this does not cause a build failure today. **If you ever re-integrate Skills.jsx, the build will fail.**

### `DesignArchive.jsx`
```js
import StickyCard from '../components/StickyCard';       // ✅ exists
import ProgressiveBlur from '../components/ProgressiveBlur'; // ✅ exists
```
Clean — no broken imports.

---

## 4. Live Sections — Design Notes

### `Hero.jsx`
The primary landing section. Uses `TextPressure`, `TextRoll`, `ScrambledText`, `Background` (cube grid), and `Folder` (the gooey tab indicator for AGRIAI / Smart Folder / Portfolio). Animation-heavy. The `Folder` component has its own `Folder.css` and is the signature interactive element on the homepage.

### `CoreEngine.jsx`
Likely the "about/skills" showcase visible mid-page. Uses `MagnetLines` and `TechRadar` components.

### `AgriAIShowcase.jsx`
Dedicated showcase for the AgriAI project. 

### `SystemsArchive.jsx`
The homepage teaser for the `/systems` route — a gateway panel, not the full index (that lives in `pages/Systems.jsx`).

### `DesignCabinet.jsx`
Homepage teaser for `/design`. Pairs with `pages/DesignArchive.jsx`.

### `Contact.jsx`
Final section. Uses `FlowingMenu` component (has its own `FlowingMenu.css`).

---

## 5. Pages — Design Notes

### `pages/Systems.jsx`
Editorial index layout. Hover reveals a sticky side panel with project image, description, tech stack, metrics, outcome. Uses `layoutId="registry-container"` for shared-element transitions from the homepage. Clean and self-contained — no broken imports.

### `pages/DesignArchive.jsx`
Sticky-scroll gallery with `StickyCard` component. Category switching (Posters / Branding / Logos) is handled client-side with `useSearchParams`. The "End of Collection → Next Category" transition is a nice UX touch. Relies on 13 imported image assets — all appear to be in `src/assets/`.

---

## 6. Component Inventory

| Component | Has own CSS | Notes |
|---|---|---|
| `Background.jsx` | No | Cube grid background |
| `Cubes.jsx` | `Cubes.css` | Animated cube grid |
| `FlowingMenu.jsx` | `FlowingMenu.css` | Used in Contact |
| `Folder.jsx` | `Folder.css` | Gooey tab indicator in Hero |
| `GradualBlur.jsx` | `GradualBlur.css` | Scroll blur effect |
| `MagnetLines.jsx` | No | Magnetic line field |
| `ProgressiveBlur.jsx` | No | Bottom blur overlay |
| `ScrambledText.jsx` | `ScrambledText.css` | Character-scramble animation |
| `ScrollFloat.jsx` | `ScrollFloat.css` | Scroll-linked float |
| `StaggeredMenu.jsx` | `StaggeredMenu.css` | Global nav, fixed right |
| `StickyCard.jsx` | No | Sticky-scroll gallery card |
| `TechRadar.jsx` | No | Used in CoreEngine |
| `TextPressure.jsx` | No | Variable font pressure effect |
| `TextRoll.jsx` | No | Rolling text animation |
| `VariableProximity.jsx` | `VariableProximity.css` | Cursor-proximity variable font |

---

## 7. Priority Action Items

### 🔴 Must fix before any redesign

1. **Define missing CSS variables** — `Statement.jsx` renders unstyled. Add `--lime`, `--ink`, `--space-section`, `--accent`, `--accent-bg`, `--accent-border`, `--text-h` to `index.css` (even if pointing to live tokens), or do a find-replace to swap them out.

2. **Fix broken imports in `Skills.jsx`** — Before re-integrating, either build `ScrollReveal.jsx` and `Parallax.jsx`, or replace them with existing alternatives (`GradualBlur`, `ScrollFloat`, Framer Motion `whileInView`).

### 🟡 Clean up before Figma handoff

3. **Delete or archive orphaned sections** — 11 files in `/sections/` are unreachable. Confirm which are intentionally cut vs in-progress, and move dead ones to a `/sections/_archive/` folder so the active codebase matches what Figma will redesign.

4. **Audit `pages/AgriAIPage.jsx`, `PortfolioPage.jsx`, `SmartFolderPage.jsx`** — These exist in `/pages/` but have no routes in `App.jsx`. Same question as above: intentionally unfinished, or dead?

### 🟢 Nice to have

5. **Consolidate the CSS variable naming scheme** — The live system uses `--color-*` prefix (e.g. `--color-accent-blue`). `App.css` uses bare names (`--accent`, `--text-h`). Pick one convention and normalise.

6. **Wire up real social links in `StaggeredMenu`** — Currently hardcoded to `https://twitter.com`, `https://github.com`, `https://linkedin.com` (no username).

---

## 8. Figma Redesign Scope Recommendation

Given the audit, the highest-value redesign targets are:

| Section | Why |
|---|---|
| `Hero.jsx` | Signature section — most visible, sets the tone |
| `CoreEngine.jsx` | Mid-page anchor — currently the least defined visually |
| `Contact.jsx` | Last impression — often underdeveloped in dev-first portfolios |
| `pages/Systems.jsx` | Already strong structurally; needs visual polish pass |
| `Statement.jsx` | Currently broken (undefined vars) — needs both a fix AND a redesign |

The orphaned sections (`About`, `Skills`, `Projects`, `Philosophy`) are wildcards — if any are planned for reinstatement, they should be scoped into the Figma redesign now rather than bolted on later.