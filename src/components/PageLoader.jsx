import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#080808' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h1 className="font-display font-black text-5xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#f0ede8' }}>
              MS<span style={{ color: '#e8ff00' }}>.</span>
            </h1>
            <p className="font-mono text-xs tracking-[0.4em] uppercase" style={{ color: '#6b6860', fontFamily: "'DM Mono', monospace" }}>
              Portfolio
            </p>
          </motion.div>

          <div className="w-40 h-px overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ height: '100%', background: '#e8ff00' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
