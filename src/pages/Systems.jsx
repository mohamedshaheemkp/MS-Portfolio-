import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import actual images
import imgAgriAI from "../assets/agri-dash.webp";
import imgSmartFolder from "../assets/SFO.webp";
import imgPortfolio from "../assets/brand 1.webp";
import imgFuture from "../assets/brand 2.webp";

const systemsList = [
  { 
    id: "01", 
    name: "AgriAI", 
    featured: false,
    category: "Machine Learning", 
    tech: "Python / PyTorch", 
    metrics: "98% Accuracy", 
    outcome: "Deployed precision farming models",
    image: imgAgriAI,
    desc: "A flagship agricultural intelligence platform utilizing deep learning to optimize crop yields and predict soil anomalies." 
  },
  { 
    id: "02", 
    name: "Smart Folder", 
    featured: false,
    category: "Automation", 
    tech: "Python / Watchdog", 
    metrics: "1k+ Files Sorted", 
    outcome: "Zero-touch file management",
    image: imgSmartFolder,
    desc: "An intelligent filesystem daemon that autonomously categorizes and archives incoming files based on semantic analysis."
  },
  { 
    id: "03", 
    name: "Portfolio V2", 
    featured: false,
    category: "Frontend Arch", 
    tech: "React / Framer Motion", 
    metrics: "100 Lighthouse", 
    outcome: "Awwwards-tier architecture",
    image: imgPortfolio,
    desc: "A technically demanding portfolio redesign focusing on cinematic motion, layout transitions, and editorial typography." 
  },
  { 
    id: "04", 
    name: "Future Systems", 
    featured: false,
    category: "R&D", 
    tech: "Unknown", 
    metrics: "TBD", 
    outcome: "Ongoing research",
    image: imgFuture,
    desc: "Confidential ongoing experiments in generative AI, automated workflows, and complex state management." 
  }
];

export default function Systems() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen bg-bg text-text-primary overflow-x-hidden"
    >
      {/* Shared Element Background Transitions from the System Registry */}
      <motion.div 
        layoutId="registry-container"
        className="absolute inset-0 bg-surface z-0"
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full min-h-screen max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-32 pb-32">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-16 md:mb-24 border-b border-border pb-8">
          <div className="flex flex-col">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-4">Index</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">Systems Archive</h1>
          </div>
          <Link to="/" className="font-mono text-sm uppercase tracking-widest text-text-secondary hover:text-white transition-colors flex items-center gap-2">
            <span>[ Close ✕ ]</span>
          </Link>
        </header>

        {/* Editorial Index */}
        <div className="flex flex-col md:flex-row w-full gap-16 relative">
          
          {/* Main List */}
          <div className="w-full md:w-2/3 flex flex-col border-t border-border">
            {systemsList.map((sys, idx) => {
              const isHovered = hoveredIndex === idx;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== idx;

              return (
                <div 
                  key={sys.id}
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(idx)}
                  onBlur={() => setHoveredIndex(null)}
                  className="group flex flex-col md:flex-row md:items-center py-8 border-b border-border cursor-pointer transition-opacity duration-500"
                  style={{ opacity: isOtherHovered ? 0.2 : 1 }}
                >
                  <span className="font-mono text-sm text-text-secondary w-16 mb-4 md:mb-0 transition-colors group-hover:text-white">
                    {sys.id}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-bold flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4">
                    {sys.name}
                    {sys.featured && (
                      <span className="font-mono text-[10px] text-accent-blue uppercase tracking-widest border border-accent-blue/30 px-2 py-1 rounded-sm w-fit mt-2 md:mt-0">★ Featured</span>
                    )}
                  </h2>
                  <div className="font-mono text-xs uppercase tracking-widest text-text-secondary hidden lg:flex w-48 items-center justify-end">
                    <span>{sys.category}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hover Preview Panel (Desktop Only) */}
          <div className="hidden md:block w-1/3 sticky top-32 h-[600px]">
            {systemsList.map((sys, idx) => (
              <motion.div
                key={sys.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: hoveredIndex === idx ? 1 : 0, 
                  y: hoveredIndex === idx ? 0 : 20,
                  pointerEvents: hoveredIndex === idx ? "auto" : "none"
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-start border-l border-border pl-12"
              >
                {/* Cinematic Image Preview */}
                <div className="w-full h-48 bg-[#111] mb-8 overflow-hidden relative rounded-sm shadow-xl">
                  <img src={sys.image} alt={sys.name} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 border border-white/10" />
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-10">
                  {sys.desc}
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] text-text-secondary font-mono uppercase tracking-widest mb-1">Tech Stack</div>
                    <div className="text-lg font-body text-white">{sys.tech}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-secondary font-mono uppercase tracking-widest mb-1">Key Metrics</div>
                    <div className="text-lg font-body text-white">{sys.metrics}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-accent-blue font-mono uppercase tracking-widest mb-1">Outcome</div>
                    <div className="text-lg font-body text-white">{sys.outcome}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
