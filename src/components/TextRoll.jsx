import { motion, useReducedMotion } from "framer-motion";

const STAGGER = 0.025;
const SPRING_TRANSITION = {
  type: "spring",
  damping: 14,
  stiffness: 130,
};

export default function TextRoll({
  children,
  className = "",
  isActive = false,
}) {
  const shouldReduceMotion = useReducedMotion();
  
  if (typeof children !== "string") {
    console.warn("TextRoll children must be a string");
    return <span className={className}>{children}</span>;
  }

  // Split by words to ensure proper flex wrapping
  const words = children.split(" ");
  let globalCharIndex = 0;

  return (
    <motion.span
      initial="initial"
      animate={isActive ? "hovered" : "initial"}
      whileHover={shouldReduceMotion ? undefined : "hovered"}
      className={`relative inline-flex flex-wrap ${className}`}
    >
      {/* Accessible Screen Reader Only Text */}
      <span className="sr-only">{children}</span>

      {/* Visual Animated Text */}
      <span aria-hidden="true" className="flex flex-wrap">
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-flex whitespace-nowrap mr-[0.3em] last:mr-0">
            {word.split("").map((char, charIdx) => {
              const currentIdx = globalCharIndex++;
              return (
                <span key={charIdx} className="relative inline-block overflow-hidden leading-tight pb-1 -mb-1">
                  
                  {/* Primary visible character that moves up */}
                  <motion.span
                    className={`inline-block transition-colors duration-500 ${isActive ? 'text-white' : ''}`}
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-100%" },
                    }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : {
                            ...SPRING_TRANSITION,
                            delay: STAGGER * currentIdx,
                          }
                    }
                  >
                    {char}
                  </motion.span>

                  {/* Secondary character that moves in from bottom */}
                  <motion.span
                    className="absolute inset-0 inline-block text-accent-blue drop-shadow-[0_0_8px_rgba(77,124,254,0.4)]"
                    variants={{
                      initial: { y: "100%" },
                      hovered: { y: 0 },
                    }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : {
                            ...SPRING_TRANSITION,
                            delay: STAGGER * currentIdx,
                          }
                    }
                  >
                    {char}
                  </motion.span>

                </span>
              );
            })}
          </span>
        ))}
      </span>
    </motion.span>
  );
}
