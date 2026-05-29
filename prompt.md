For a stronger glass effect:

.hero-name::after {
  content: attr(data-text);

  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(255,255,255,0.5),
      rgba(255,255,255,0.1),
      rgba(255,255,255,0.5)
    );

  -webkit-background-clip:text;
  color:transparent;

  filter: blur(6px);

  opacity:.35;
}

This creates a luxury frosted-glass appearance without using expensive backdrop filters.

The Lag Is Probably One Of These
1. Framer Motion Scroll Tracking

Look for:

useScroll()

or

scrollYProgress

inside Hero.

Example:

const { scrollYProgress } = useScroll();

If you have multiple:

useTransform()
useSpring()
useScroll()

they can still be active.

2. Video-Like Background Animation

Look for:

animate={{
 scale: ...
 y: ...
}}

on large elements.

Especially:

motion.img
motion.div

covering the entire hero.

3. CSS Blur

Search project-wide:

blur(
backdrop-filter
backdrop-blur
filter:

Anything above:

blur(20px)

is suspicious.

4. Large Fixed Elements

Check for:

position: fixed;

inside Hero.

Especially:

particles
background overlays
glows
5. Particle System

Your screenshot shows floating particles.

If you are rendering:

50+
100+
200+

animated particles:

that's likely the culprit.