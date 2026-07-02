import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const STATUS_MAP = {
  "hero": "INITIALIZING ENGINE",
  "core-engine": "LOADING SYSTEMS",
  "agriai-showcase": "ANALYZING PROJECT",
  "systems-archive": "PROCESSING ARCHIVE",
  "design-cabinet": "CURATING WORK",
  "contact": "RENDERING RESULTS"
};

export default function StatusLabel() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setStatus("");
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (STATUS_MAP[id]) {
            setStatus(STATUS_MAP[id]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    const timer = setTimeout(() => {
      Object.keys(STATUS_MAP).forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isHome]);

  if (!isHome || !status) return null;

  return (
    <div className="fixed bottom-8 left-6 md:left-12 lg:left-24 z-40 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-text-secondary/40 pointer-events-none select-none">
      <AnimatePresence mode="wait">
        <motion.span
          key={status}
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
        >
          {status}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
