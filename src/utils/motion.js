/* ─── MOTION SYSTEM — Studio Minimal ─────────────────────────────
   Shared timing constants for all Framer Motion animations.
   Uses --ease-out-expo feel: fast start, smooth landing.
──────────────────────────────────────────────────────────────────── */

export const ease = {
  outExpo:  [0.16, 1, 0.3, 1],
  inOut:    [0.76, 0, 0.24, 1],
  snap:     [0.34, 1.56, 0.64, 1],
  smooth:   [0.25, 0.1, 0.25, 1],
}

export const dur = {
  fast:   0.22,
  base:   0.45,
  slow:   0.7,
  reveal: 0.9,
}

/* Stagger helpers */
export const staggerChildren = (stagger = 0.07, delayStart = 0) => ({
  transition: { staggerChildren: stagger, delayChildren: delayStart },
})

/* Word/char reveal — clip upward out of line */
export const wordReveal = (delay = 0) => ({
  initial: { y: '110%', opacity: 0 },
  animate: { y: '0%', opacity: 1 },
  transition: { duration: dur.reveal, ease: ease.outExpo, delay },
})

/* Fade up — general purpose */
export const fadeUp = (delay = 0, distance = 28) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: dur.slow, ease: ease.outExpo, delay },
})

/* Fade in — for images, backgrounds */
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: dur.slow, ease: ease.smooth, delay },
})

/* Scale up — cards, thumbnails */
export const scaleUp = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: dur.slow, ease: ease.outExpo, delay },
})

/* Slide in from left */
export const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: dur.slow, ease: ease.outExpo, delay },
})

/* Container — staggered children reveal */
export const container = (stagger = 0.08, delay = 0) => ({
  initial: {},
  animate: { transition: { staggerChildren: stagger, delayChildren: delay } },
})

/* Viewport animation defaults — for whileInView usage */
export const viewportOnce = { once: true, amount: 0.2 }

/* Legacy alias — keeps old components that import motionTiming working */
export const motionTiming = {
  fast:   dur.fast,
  normal: dur.base,
  slow:   dur.slow,
  ease:   ease.smooth,
}

export default { ease, dur, wordReveal, fadeUp, fadeIn, scaleUp, slideLeft, container, viewportOnce }
