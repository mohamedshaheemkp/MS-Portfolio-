import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const statusMessages = [
  { max: 20, text: "INITIALIZING COGNITIVE SHELL..." },
  { max: 45, text: "CONNECTING AGENT NODES..." },
  { max: 70, text: "MOUNTING GRAPHIC CABINET..." },
  { max: 90, text: "STABILIZING CORE ENGINE..." },
  { max: 100, text: "SYSTEM READY // 100%" }
];

export default function IntroSequence({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(statusMessages[0].text);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Simulate real load step jittering with larger steps to load faster
      const increment = Math.floor(Math.random() * 6) + 5;
      currentProgress = Math.min(100, currentProgress + increment);
      setProgress(currentProgress);

      // Find active status message
      const msg = statusMessages.find((m) => currentProgress <= m.max);
      if (msg) {
        setStatusText(msg.text);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        // Snappy delay to confirm load completion
        setTimeout(() => {
          onComplete();
        }, 150);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Generate ASCII progress bar blocks: [████████░░░░░░░░]
  const renderProgressBar = () => {
    const totalBlocks = 20;
    const filledBlocks = Math.floor((progress / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return (
      <span className="font-mono text-xs md:text-sm text-accent-blue tracking-normal">
        {"█".repeat(filledBlocks)}
        <span className="text-white/10">{"░".repeat(emptyBlocks)}</span>
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-[#0A0D12] z-[99999] flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none pointer-events-auto"
    >
      {/* Top Telemetry Details */}
      <div className="w-full flex justify-between font-mono text-[9px] md:text-[10px] text-text-secondary tracking-widest uppercase">
        <div>COGNITIVE_NODE // SECURE_AUTH</div>
        <div>SYS_LOAD // INTRO_SEQ_08</div>
      </div>

      {/* Main Center Terminal */}
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Large Counter */}
        <h1 className="font-display font-black text-[22vw] md:text-[14vw] leading-none text-white tracking-tighter tabular-nums select-none">
          {progress.toString().padStart(3, "0")}
        </h1>

        {/* Loading Progress Bar */}
        <div className="flex flex-col items-center gap-3">
          {renderProgressBar()}
          
          <div className="font-mono text-[10px] md:text-xs text-text-secondary tracking-widest uppercase h-4">
            [ {statusText} ]
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Details */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end font-mono text-[9px] md:text-[10px] text-text-secondary/50 tracking-widest uppercase gap-2 md:gap-0">
        <div>© 2026 MOHAMED SHAHEEM KP</div>
        <div>HOST: ORIGINS_TERMINAL // STABLE</div>
      </div>
    </motion.div>
  );
}
