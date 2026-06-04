import { motion } from "framer-motion";
import { useState } from "react";

const nodes = [
  { id: "ai", project: "AgriAI", tech: "AI & Machine Learning", stack: "Python / PyTorch / Computer Vision" },
  { id: "auto", project: "Smart Folder Organizer", tech: "Automation", stack: "Python / Watchdog / OS Level" },
  { id: "frontend", project: "Portfolio V2", tech: "Frontend Engineering", stack: "React / Framer Motion / Vite" },
  { id: "design", project: "Design Cabinet", tech: "Visual Design", stack: "Figma / Brand Identity / Layout" },
];

export default function CoreEngine() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section className="w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 border-b border-border bg-[#050505] overflow-hidden">
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
          <div className="flex flex-col w-full lg:w-[45%] z-10">
            {nodes.map((node, idx) => {
              const isActive = activeNode === node.id;
              return (
                <div 
                  key={node.id}
                  className="group relative flex flex-col justify-center h-32 md:h-40 border-l border-border pl-8 cursor-pointer"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* The connection line that highlights */}
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                    className={`absolute left-[-1px] top-0 w-[2px] transition-colors duration-300 ${isActive ? 'bg-accent-blue shadow-[0_0_8px_rgba(77,124,254,0.6)]' : 'bg-transparent'}`}
                  />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                    <span className={`text-2xl md:text-4xl font-display font-bold uppercase tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-text-secondary'}`}>
                      {node.project}
                    </span>
                    <span className={`font-mono text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-300 md:ml-auto ${isActive ? 'text-accent-blue' : 'text-text-dim'}`}>
                      [{node.tech}]
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Connection (Desktop only) */}
          <div className="hidden lg:flex w-[10%] items-center justify-center relative">
            <div className="w-full h-[1px] bg-border relative">
              <motion.div 
                className="absolute inset-0 bg-accent-blue shadow-[0_0_8px_rgba(77,124,254,0.6)]" 
                initial={{ width: 0 }} 
                animate={{ width: activeNode ? "100%" : "0%" }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
              />
            </div>
          </div>

          {/* Right Column: The Core */}
          <div className="flex w-full lg:w-[45%] items-center justify-center lg:justify-end mt-16 lg:mt-0 z-10">
            <motion.div 
              className={`w-full max-w-[400px] aspect-square rounded-full border flex flex-col items-center justify-center relative transition-colors duration-500 ${activeNode ? 'border-accent-blue bg-accent-blue/5' : 'border-border bg-surface'}`}
            >
              {/* Outer dashed ring */}
              <motion.div 
                animate={{ rotate: activeNode ? 90 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-[-10%] rounded-full border border-dashed border-border opacity-50"
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
