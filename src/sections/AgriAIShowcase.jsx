import { motion } from "framer-motion";
import ScrambledText from "../components/ScrambledText";
import dashImg from "../assets/agri-dash.webp";
import liveImg from "../assets/agri-live.webp";

export default function AgriAIShowcase() {
  return (
    <section className="w-full py-32 md:py-48 bg-bg overflow-hidden relative">
      
      {/* 01 Header & Title */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-16">
          <span className="w-12 h-[1px] bg-accent-blue"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            03 — Flagship System
          </span>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 md:gap-6"
        >
          <h2 className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.85] text-text-primary uppercase tracking-tighter">
            AgriAI
          </h2>
          <p className="font-mono text-sm md:text-lg text-accent-blue uppercase tracking-widest">
            Precision Farming Intelligence
          </p>
        </motion.div>
      </div>

      {/* 02 Massive Dashboard Preview */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1800px] mx-auto px-0 md:px-12 lg:px-24 mb-24 md:mb-32"
      >
        <div className="relative aspect-[16/10] md:aspect-video bg-[#0A0A0A] border-y md:border border-border shadow-2xl overflow-hidden group">
          <img src={dashImg} alt="AgriAI Dashboard" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
        </div>
      </motion.div>

      {/* 03 Two-Column Editorial: Problem vs Model */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-24 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 border-t border-border pt-8"
          >
            <h3 className="font-mono text-xs text-text-secondary uppercase tracking-widest">
              01 / The Problem
            </h3>
            <ScrambledText className="text-xl md:text-3xl font-body text-text-primary leading-relaxed !m-0 !max-w-none p-0 border-none bg-transparent" radius={100} duration={1.2} speed={0.5} scrambleChars=".:">
              Modern agriculture generates massive datasets, yet farmers lack real-time, actionable insights. Crop disease and soil degradation often go unnoticed until it's too late, resulting in devastating yield losses.
            </ScrambledText>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 border-t border-border pt-8"
          >
            <h3 className="font-mono text-xs text-accent-blue uppercase tracking-widest">
              02 / The Model
            </h3>
            <ScrambledText className="text-xl md:text-3xl font-body text-text-primary leading-relaxed !m-0 !max-w-none p-0 border-none bg-transparent" radius={100} duration={1.2} speed={0.5} scrambleChars=".:">
              Built on a custom PyTorch architecture, the AgriAI vision model ingests drone imagery and IoT sensor data, running edge-optimized inferences to detect anomalies before they spread.
            </ScrambledText>
          </motion.div>

        </div>
      </div>

      {/* 04 Live Detection Visual & Metrics */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-3/5 aspect-square md:aspect-[4/3] bg-[#0A0A0A] border border-border relative overflow-hidden"
        >
          <img src={liveImg} alt="AgriAI Live Detection" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-1000 scale-105 hover:scale-100" />
          <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 tracking-widest uppercase">
            Live Detection Node
          </div>
        </motion.div>

        <div className="w-full lg:w-2/5 flex flex-col gap-12 md:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-l-2 border-accent-blue pl-6 md:pl-8"
          >
            <div className="text-6xl md:text-8xl font-display font-black text-white">98<span className="text-accent-blue">%</span></div>
            <div className="font-mono text-sm text-text-secondary uppercase tracking-widest mt-4">Detection Accuracy</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border-l border-border pl-6 md:pl-8"
          >
            <div className="text-5xl md:text-7xl font-display font-black text-text-primary">&lt;50<span className="text-text-secondary font-mono text-3xl ml-2">ms</span></div>
            <div className="font-mono text-sm text-text-secondary uppercase tracking-widest mt-4">Inference Latency</div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
