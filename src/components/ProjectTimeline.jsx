import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectTimeline({ steps }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative py-10 my-10 max-w-4xl mx-auto pl-6 md:pl-0">
      
      {/* Background Track */}
      <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-white/5 md:-translate-x-1/2" />
      
      {/* Animated Glowing Line */}
      <motion.div 
        style={{ height: lineHeight }}
        className="absolute top-0 left-6 md:left-1/2 w-px bg-gradient-to-b from-cyan-400 to-purple-500 md:-translate-x-1/2 origin-top shadow-[0_0_15px_rgba(0,240,255,0.5)] z-0" 
      />

      <div className="space-y-16 relative z-10">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? "md:flex-row-reverse" : ""}`}
            >
              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
              
              {/* Center Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-cyan-400 z-10 shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-full h-full rounded-full bg-cyan-400/50" 
                />
              </div>

              {/* Content Card */}
              <div className={`md:w-1/2 pl-10 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
                  <span className="font-mono text-xs text-cyan-400 tracking-wider mb-2 block uppercase">
                    Phase 0{index + 1}
                  </span>
                  <h4 className="font-display text-xl text-white font-bold mb-3">{step.step}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
