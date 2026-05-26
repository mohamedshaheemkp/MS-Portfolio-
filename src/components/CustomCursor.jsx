import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState("default"); // 'default', 'hover', 'view'
  const cursorRef = useRef(null);

  // Position of mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Trailing ring physics-based spring (high damping and low stiffness for expensive lag-behind lerp)
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = target.closest("a, button, [role='button'], input, textarea");
      const isCard = target.closest(".project-card, .design-card, .masonry-card, img, [data-cursor='view']");

      if (isCard) {
        setHoverState("view");
      } else if (isInteractive) {
        setHoverState("hover");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide native cursor on devices with fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (mediaQuery.matches) {
      document.body.style.cursor = "none";
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  // Framer Motion variants for the outer ring scaling/opacity
  const ringVariants = {
    default: {
      width: 24,
      height: 24,
      borderColor: "rgba(0, 240, 255, 0.4)",
      backgroundColor: "rgba(0, 240, 255, 0)",
      borderWidth: "1.5px"
    },
    hover: {
      width: 50,
      height: 50,
      borderColor: "rgba(0, 240, 255, 0.8)",
      backgroundColor: "rgba(0, 240, 255, 0.05)",
      borderWidth: "1px",
      boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)"
    },
    view: {
      width: 70,
      height: 70,
      borderColor: "rgba(0, 240, 255, 0.9)",
      backgroundColor: "rgba(0, 240, 255, 0.08)",
      borderWidth: "1px",
      boxShadow: "0 0 25px rgba(0, 240, 255, 0.25)"
    }
  };

  return (
    <div className="hidden lg:block pointer-events-none">
      {/* Outer Spring Ring */}
      <motion.div
        ref={cursorRef}
        variants={ringVariants}
        animate={hoverState}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center border transition-all duration-300"
      >
        {hoverState === "view" && (
          <span className="font-mono text-[9px] font-bold text-cyan-400 tracking-[0.2em] uppercase select-none animate-pulse">
            View
          </span>
        )}
      </motion.div>

      {/* Instant Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 pointer-events-none z-[10000] shadow-[0_0_10px_rgba(0,240,255,0.8)]"
      />
    </div>
  );
}
