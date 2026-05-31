import { useRef, Children } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { motionTiming } from "../utils/motion";

/**
 * ScrollReveal — Premium cinematic scroll-triggered reveal wrapper.
 *
 * Props:
 *  - children: React nodes
 *  - delay: number — stagger delay in seconds (default 0)
 *  - direction: "up" | "down" | "left" | "right" — initial drift direction (default "up")
 *  - distance: number — pixels to drift from (default 60)
 *  - duration: number — animation duration in seconds (default motionTiming.normal)
 *  - once: boolean — animate only once (default true)
 *  - className: string — extra class names
 *  - as: string — HTML tag to render (default "div")
 *  - variant: "fade" | "blur" | "scale" | "skew" - visual effect style (default "fade")
 *  - blurAmount: number - starting blur radius in px (default 12)
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 60,
  duration = motionTiming.normal,
  once = true,
  className = "",
  as: Tag = "div",
  variant = "fade",
  blurAmount = 12,
  ...props
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px -40px 0px" });
  const shouldReduceMotion = useReducedMotion();

  const directionOffsets = {
    up:    { y: distance,  x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { x: distance,  y: 0 },
    right: { x: -distance, y: 0 },
    none:  { x: 0,         y: 0 }
  };

  let initial = {};
  let animate = {};

  if (shouldReduceMotion) {
    initial = {
      opacity: 0,
    };
    animate = isInView
      ? { opacity: 1 }
      : initial;
  } else if (variant === "blur") {
    initial = {
      opacity: 0,
      filter: `blur(${blurAmount}px)`,
      scale: 0.96,
      ...directionOffsets[direction],
    };
    animate = isInView
      ? { opacity: 1, filter: "blur(0px)", scale: 1, y: 0, x: 0 }
      : initial;
  } else if (variant === "scale") {
    initial = {
      opacity: 0,
      scale: 0.82,
      rotate: -1.5,
      ...directionOffsets[direction],
    };
    animate = isInView
      ? { opacity: 1, scale: 1, rotate: 0, y: 0, x: 0 }
      : initial;
  } else if (variant === "skew") {
    initial = {
      opacity: 0,
      skewY: 6,
      ...directionOffsets[direction],
    };
    animate = isInView
      ? { opacity: 1, skewY: 0, y: 0, x: 0 }
      : initial;
  } else {
    // default: "fade"
    initial = {
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.97,
      ...directionOffsets[direction],
    };
    animate = isInView
      ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)", scale: 1 }
      : initial;
  }

  const MotionComponent = motion[Tag] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: motionTiming.ease,
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * ScrollRevealGroup — High-performance Staggered children reveal container.
 * 
 * Uses a single IntersectionObserver on the parent container, cascading 
 * visibility and stagger delays down to animated children on the GPU.
 */
export function ScrollRevealGroup({
  children,
  itemDelay = 0.05,
  className = "",
  direction = "up",
  distance = 30,
  duration = motionTiming.normal,
  variant = "fade",
  blurAmount = 8,
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  const directionOffsets = {
    up:    { y: distance,  x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { x: distance,  y: 0 },
    right: { x: -distance, y: 0 },
    none:  { x: 0,         y: 0 }
  };

  const getVariantStyles = (v) => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };
    }
    if (v === "blur") {
      return {
        hidden: { opacity: 0, filter: `blur(${blurAmount}px)`, scale: 0.96, ...directionOffsets[direction] },
        visible: { opacity: 1, filter: "blur(0px)", scale: 1, y: 0, x: 0 }
      };
    } else if (v === "scale") {
      return {
        hidden: { opacity: 0, scale: 0.88, rotate: -1, ...directionOffsets[direction] },
        visible: { opacity: 1, scale: 1, rotate: 0, y: 0, x: 0 }
      };
    } else if (v === "skew") {
      return {
        hidden: { opacity: 0, skewY: 4, ...directionOffsets[direction] },
        visible: { opacity: 1, skewY: 0, y: 0, x: 0 }
      };
    } else {
      return {
        hidden: { opacity: 0, filter: "blur(6px)", scale: 0.97, ...directionOffsets[direction] },
        visible: { opacity: 1, filter: "blur(0px)", scale: 1, y: 0, x: 0 }
      };
    }
  };

  const childStyle = getVariantStyles(variant);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : itemDelay,
      }
    }
  };

  const childVariants = {
    hidden: childStyle.hidden,
    visible: {
      ...childStyle.visible,
      transition: {
        duration,
        ease: motionTiming.ease,
      }
    }
  };

  const childArray = Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {childArray.map((child, i) => {
        // Strip keys and empty spacing items to avoid key warnings or rendering empty nodes
        if (typeof child === "string" && !child.trim()) return null;
        return (
          <motion.div key={i} variants={childVariants} className="h-full">
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
