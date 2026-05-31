import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Parallax component to create buttery-smooth layered motion effects.
 * Direct scroll-to-transform mapping smoothed with spring-dampened interpolation.
 *
 * Props:
 *  - children: React nodes
 *  - speed: number - multiplier (e.g. -0.2 moves slower/opposite, 0.2 moves faster)
 *  - direction: "y" | "x" - axis of parallax motion (default "y")
 *  - className: string - extra class names
 *  - as: string - motion HTML element to render (default "div")
 */
export default function Parallax({
  children,
  speed = -0.1,
  direction = "y",
  className = "",
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);

  // Track the target element as it enters and leaves the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map progress (0 to 1) to direct pixel offsets based on speed
  const translateRange = [-100 * speed, 100 * speed];
  const translateVal = useTransform(scrollYProgress, [0, 1], translateRange);

  // Apply spring physics for high-refresh rates and ultra-fluid transitions
  const smoothVal = useSpring(translateVal, {
    stiffness: 75,
    damping: 20,
    mass: 0.8,
  });

  const style = {
    [direction]: smoothVal,
    z: 0,
    willChange: "transform",
  };

  // Dynamically resolve custom motion wrapper (e.g. motion.h1, motion.section)
  const MotionComponent = motion[Tag] || motion.div;

  return (
    <MotionComponent ref={ref} style={style} className={className} {...props}>
      {children}
    </MotionComponent>
  );
}
