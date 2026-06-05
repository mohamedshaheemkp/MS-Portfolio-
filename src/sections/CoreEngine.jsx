import { motion } from "framer-motion";
import { useState } from "react";
import TextRoll from "../components/TextRoll";

const nodes = [
  { id: "ai", project: "AgriAI", tech: "AI & Machine Learning", stack: "Python / PyTorch / Computer Vision" },
  { id: "auto", project: "Smart Folder Organizer", tech: "Automation", stack: "Python / Watchdog / OS Level" },
  { id: "frontend", project: "Portfolio V2", tech: "Frontend Engineering", stack: "React / Framer Motion / Vite" },
  { id: "design", project: "Design Cabinet", tech: "Visual Design", stack: "Figma / Brand Identity / Layout" },
];

export default function CoreEngine() {
  const [activeNode, setActiveNode] = useState(null);
  
  // Track the index for the gooey indicator
  const activeIndex = activeNode ? nodes.findIndex(n => n.id === activeNode) : 0;

  return (
    <section className="w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col relative z-10">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 md:mb-32">
          <span className="w-12 h-[1px] bg-accent-blue"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            02 — Core Engine
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between relative">
          
          {/* Left Column: Projects */}
          <div className="flex flex-col w-full lg:w-[50%] z-10 relative">
            
            {/* SVG Defs for Gooey Filter */}
            <svg className="w-0 h-0 absolute" aria-hidden="true">
              <filter id="SkiperGooeyFilter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4.4" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 20 -7
                  "
                  result="gooey"
                />
              </filter>
            </svg>

            {/* Gooey Indicator Column */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-[30px] pointer-events-none z-0"
              style={{ filter: "url(#SkiperGooeyFilter)" }}
            >
              {/* Background Track Line (Low visual noise) */}
              <div className="absolute left-[14px] top-8 bottom-8 w-[2px] bg-[#1a1a1a]" />

              {/* Static Anchors (Data nodes) */}
              <div className="w-full h-full flex flex-col pointer-events-none">
                {nodes.map((node) => (
                  <div key={`anchor-${node.id}`} className="h-32 md:h-40 flex items-center justify-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#333]" />
                  </div>
                ))}
              </div>

              {/* Moving Gooey Blob (Neural data flow) */}
              <motion.div
                initial={false}
                animate={{ y: `${activeIndex * 100}%`, opacity: activeNode ? 1 : 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 120 }}
                className="absolute top-0 left-0 w-full h-32 md:h-40 flex items-center justify-center pointer-events-none"
              >
                {/* The core shape that merges with the static anchors */}
                <div className="w-[14px] h-[32px] rounded-full bg-accent-blue drop-shadow-[0_0_12px_rgba(77,124,254,0.6)]" />
              </motion.div>
            </div>

            {/* Project List */}
            <div className="w-full pl-[50px] relative z-10">
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <div 
                    key={node.id}
                    className="group relative flex flex-col justify-center h-32 md:h-40 cursor-pointer border-b border-[#111] last:border-0"
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 w-full">
                      {/* TextRoll Integration */}
                      <div className="text-2xl md:text-4xl font-display font-bold uppercase tracking-wide text-text-secondary w-full transition-colors duration-500">
                        <TextRoll isActive={isActive}>
                          {node.project}
                        </TextRoll>
                      </div>

                      {/* Tech Spec */}
                      <span className={`font-mono text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-300 md:ml-auto whitespace-nowrap ${isActive ? 'text-accent-blue' : 'text-text-dim'}`}>
                        [{node.tech}]
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: The Core */}
          <div className="flex w-full lg:w-[45%] items-center justify-center lg:justify-end mt-16 lg:mt-0 z-10">
            <motion.div 
              className={`w-full max-w-[400px] aspect-square rounded-full border flex flex-col items-center justify-center relative transition-colors duration-500 ${activeNode ? 'border-accent-blue bg-accent-blue/5 shadow-[0_0_40px_rgba(77,124,254,0.1)]' : 'border-[#222] bg-[#0a0a0a]'}`}
            >
              {/* Outer dashed ring */}
              <motion.div 
                animate={{ rotate: activeNode ? 90 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-[-10%] rounded-full border border-dashed border-[#222] opacity-50"
              />
              
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-4">
                Tech Stack 
              </span>
              <span className="font-mono text-sm md:text-base text-center px-8 uppercase tracking-widest text-white leading-loose min-h-[4rem] flex items-center justify-center">
                {activeNode ? nodes.find(n => n.id === activeNode).stack : "AWAITING INPUT"}
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
