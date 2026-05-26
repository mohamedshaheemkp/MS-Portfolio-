import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * ScrollReveal — Premium cinematic scroll-triggered reveal wrapper.
 *
 * Props:
 *  - children: React nodes
 *  - delay: number — stagger delay in seconds (default 0)
 *  - direction: "up" | "down" | "left" | "right" — initial drift direction (default "up")
 *  - distance: number — pixels to drift from (default 60)
 *  - duration: number — animation duration in seconds (default 0.8)
 *  - once: boolean — animate only once (default true)
 *  - className: string — extra class names
 *  - as: string — HTML tag to render (default "div")
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 60,
  duration = 0.8,
  once = true,
  className = "",
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px -40px 0px" });

  const directionOffsets = {
    up:    { y: distance,  x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { x: distance,  y: 0 },
    right: { x: -distance, y: 0 },
  };

  const initial = {
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.97,
    ...directionOffsets[direction],
  };

  const animate = isInView
    ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)", scale: 1 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealGroup — Staggered children reveal container.
 *
 * Wraps a group of ScrollReveal items so each gets an auto-computed stagger delay.
 * Use `itemDelay` to control spacing between each child (default 0.1).
 */
export function ScrollRevealGroup({
  children,
  itemDelay = 0.1,
  className = "",
  direction = "up",
  distance = 50,
  duration = 0.8,
}) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <ScrollReveal
              key={i}
              delay={i * itemDelay}
              direction={direction}
              distance={distance}
              duration={duration}
            >
              {child}
            </ScrollReveal>
          ))
        : <ScrollReveal direction={direction} distance={distance} duration={duration}>{children}</ScrollReveal>
      }
    </div>
  );
}
