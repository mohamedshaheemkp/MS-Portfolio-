import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Activity, Terminal, Layers } from "lucide-react";
import { projects } from "../data/projects";
import { useState, useEffect } from "react";

// Video/Dashboard simulation component for AgriAI
const AgriDashboardMockup = ({ project }) => {
  const [activeTab, setActiveTab] = useState("feed");
  const [logs, setLogs] = useState([
    "[SYS] Starting YOLOv9 pipeline...",
    "[SYS] Model loaded: YOLOv9-large.pt",
    "[SYS] Live camera stream ready."
  ]);

  useEffect(() => {
    const logsPool = [
      "Scan complete: Frame processed in 12ms",
      "Confidence limit set to 80%",
      "Running semantic segmenter...",
      "Rust spot check: 9 detections in grid",
      "Calculated leaf rust spread index: 0.15",
      "Status: Processing satellite imagery...",
      "Weather feed sync: Humidity 84%",
      "Edge Node camera 04-North: Connected"
    ];

    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLogs = [...prev.slice(1)];
        const randomLog = logsPool[Math.floor(Math.random() * logsPool.length)];
        const timeStamp = new Date().toLocaleTimeString();
        nextLogs.push(`[${timeStamp}] ${randomLog}`);
        return nextLogs;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.08] overflow-hidden bg-black/60 shadow-2xl group-hover:shadow-[0_0_50px_rgba(232,255,0,0.07)] transition-all duration-500 z-10">
      {/* Browser Chrome Header */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0d0d0d] border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center font-mono text-[9px] text-[#6b6860] max-w-[220px] mx-auto bg-white/5 py-0.5 rounded border border-white/5">
          agri-ai-detection.io
        </div>
        <div className="w-10" /> {/* Spacer to center address */}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/5 bg-black/40 text-[10px] font-mono text-[#6b6860]">
        <button
          onClick={() => setActiveTab("feed")}
          className={`px-4 py-2 border-r border-white/5 transition-all ${
            activeTab === "feed" ? "text-[#e8ff00] bg-white/[0.02]" : "hover:text-[#f0ede8]"
          }`}
        >
          // LIVE STREAM
        </button>
        <button
          onClick={() => setActiveTab("analysis")}
          className={`px-4 py-2 border-r border-white/5 transition-all ${
            activeTab === "analysis" ? "text-[#e8ff00] bg-white/[0.02]" : "hover:text-[#f0ede8]"
          }`}
        >
          // DIAGNOSTICS
        </button>
      </div>

      {/* Video/Image Live Stream simulator */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#121212]">
        <AnimatePresence mode="wait">
          {activeTab === "feed" ? (
            <motion.div
              key="feed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full relative"
            >
              <img
                src={project.images[0]}
                alt="AgriAI stream"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              
              {/* Pulsing YOLO Bounding Boxes overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Detection Box 1 */}
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="absolute border border-[#e8ff00] bg-[#e8ff00]/5 rounded"
                  style={{ top: '18%', left: '25%', width: '28%', height: '35%' }}
                >
                  <span className="absolute top-0 left-0 bg-[#e8ff00] text-black font-mono text-[8px] px-1 py-0.5 rounded-br font-bold uppercase tracking-wider">
                    Crop Area #14 // HEALTHY
                  </span>
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#e8ff00] animate-pulse" />
                </motion.div>

                {/* Detection Box 2 */}
                <motion.div
                  animate={{ opacity: [0.8, 0.5, 0.8] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="absolute border border-cyan-400 bg-cyan-400/5 rounded"
                  style={{ top: '48%', left: '58%', width: '26%', height: '32%' }}
                >
                  <span className="absolute top-0 left-0 bg-cyan-400 text-black font-mono text-[8px] px-1 py-0.5 rounded-br font-bold uppercase tracking-wider">
                    Mild Spot Rust // Conf: 87%
                  </span>
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="analysis"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full relative"
            >
              <img
                src={project.images[1]}
                alt="AgriAI Analysis"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 font-mono text-[9px] text-[#9b9892]">
                <span className="text-[#e8ff00] font-bold mb-2">// PLANT DISEASE ANALYSIS MODULE</span>
                <div className="grid grid-cols-2 gap-2 text-[8px]">
                  <div className="bg-white/5 p-1.5 border border-white/5 rounded">
                    <span className="text-[#6b6860] block">PATHOGEN SCANNER</span>
                    <span className="text-white">Active</span>
                  </div>
                  <div className="bg-white/5 p-1.5 border border-white/5 rounded">
                    <span className="text-[#6b6860] block">CONFIDENCE THRESHOLD</span>
                    <span className="text-white">85.0%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Real-time system log overlay */}
        <div className="absolute bottom-3 left-3 bg-black/85 border border-white/10 rounded p-2.5 font-mono text-[8px] text-[#9b9892] max-w-[210px] backdrop-blur-md shadow-lg">
          <span className="text-[#6b6860] uppercase tracking-wider block mb-1 font-bold flex items-center gap-1">
            <Terminal size={10} className="text-[#e8ff00]" /> Logs Output
          </span>
          <div className="space-y-0.5">
            {logs.map((log, i) => (
              <div key={i} className="truncate">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden bg-black">
      
      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.015] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#e8ff00]/[0.015] blur-[180px] pointer-events-none" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>03</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>Selected Work</span>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="overflow-hidden mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.92]"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)', color: 'var(--text)' }}
          >
            Things I've<br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>actually built.</span>
          </motion.h2>
        </div>

        {/* Alternate rhythm layout rows */}
        <div className="space-y-32">
          
          {/* ================= PROJECT 1 (AgriAI) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] rounded-3xl p-8 md:p-12 lg:p-16 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-700 group cursor-pointer overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(232,255,0,0.04)]"
          >
            {/* Custom subtle noise texture */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
              }}
            />
            
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
              
              {/* Left Column (Text, Info, Features) */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <span className="font-mono text-xs tracking-widest block mb-4" style={{ color: 'var(--accent)' }}>
                  01 / COMPUTER VISION & AI
                </span>
                
                <h3 className="font-display font-black leading-tight text-4xl md:text-6xl text-white mb-6 group-hover:italic transition-all duration-300">
                  AgriAI
                </h3>
                
                {/* Live Status Indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[9px] tracking-wider text-emerald-400 uppercase font-semibold">
                    SYS ACTIVE // REAL-TIME MODEL STREAMING
                  </span>
                </div>

                <p className="text-base leading-relaxed text-[#9b9892] mb-8 font-sans">
                  AgriAI is an intelligent agriculture dashboard that combines YOLOv9 computer vision, real-time plant health monitoring, and automated disease detection to deliver actionable insights for modern farmers.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["YOLOv9 Frame Scan", "Leaf Disease Radar", "Offline Diagnostics", "FastAPI Vector Alerts"].map((f) => (
                    <span key={f} className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#9b9892]">
                      {f}
                    </span>
                  ))}
                </div>

                {/* AI Workflow Visualization */}
                <div className="bg-black/40 border border-white/5 rounded-xl p-4 mb-8 w-full">
                  <span className="font-mono text-[9px] tracking-widest text-[#6b6860] uppercase block mb-3 font-semibold flex items-center gap-1.5">
                    <Activity size={10} className="text-[#e8ff00]" /> // AI DETECTION PIPELINE
                  </span>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#9b9892]">
                    <div className="flex flex-col items-start">
                      <span className="text-cyan-400 font-bold">YOLOv9</span>
                      <span className="text-[8px] text-[#6b6860]">Frame Scan</span>
                    </div>
                    <span className="text-[#6b6860]">➔</span>
                    <div className="flex flex-col items-center">
                      <span className="text-[#e8ff00] font-bold">PyTorch</span>
                      <span className="text-[8px] text-[#6b6860]">Disease Inference</span>
                    </div>
                    <span className="text-[#6b6860]">➔</span>
                    <div className="flex flex-col items-end">
                      <span className="text-pink-500 font-bold">FastAPI</span>
                      <span className="text-[8px] text-[#6b6860]">Client Alerts</span>
                    </div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {projects[0].tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2.5 py-1 border border-white/10 rounded-sm text-[#f0ede8] bg-white/[0.02]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6 items-center pt-2">
                  <a href={projects[0].github} target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-[#9b9892] hover:text-white transition-all duration-300">
                    GitHub 
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href={projects[0].live} className="group flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-[#e8ff00] hover:brightness-110 transition-all duration-300">
                    Live Demo 
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              </div>

              {/* Right Column (Visual / Mockup) */}
              <div className="lg:col-span-7 relative flex justify-center items-center">
                <AgriDashboardMockup project={projects[0]} />

                {/* Floating Metric Widgets - Desktop Only */}
                <div className="absolute -top-6 -right-6 hidden lg:flex flex-col gap-3 z-20">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/90 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-2xl"
                  >
                    <div className="font-mono text-[8px] text-[#6b6860] tracking-wider uppercase mb-0.5">SCAN CONFIDENCE</div>
                    <div className="font-display font-black text-xl text-[#e8ff00]">98.4%</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/90 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-2xl"
                  >
                    <div className="font-mono text-[8px] text-[#6b6860] tracking-wider uppercase mb-0.5">CAMERAS LINKED</div>
                    <div className="font-display font-black text-xl text-cyan-400">12 / 12</div>
                  </motion.div>
                </div>
              </div>

            </div>
          </motion.div>


          {/* ================= PROJECT 2 (AI Portfolio) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] rounded-3xl p-8 md:p-12 lg:p-16 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-700 group cursor-pointer overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,229,255,0.04)]"
          >
            {/* Custom subtle noise texture */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
              }}
            />

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

              {/* Left Column (Visual Mockup) */}
              <div className="lg:col-span-7 relative flex justify-center items-center order-2 lg:order-1">
                <div className="relative w-full rounded-2xl border border-white/[0.08] overflow-hidden bg-black/60 shadow-2xl group-hover:shadow-[0_0_50px_rgba(0,229,255,0.07)] transition-all duration-500 p-8">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#0d0d0d] border border-white/5">
                    <img
                      src={projects[1].images[0]}
                      alt="Portfolio Screenshot"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Architectural Cards - Parallax Layering - Desktop Only */}
                <div className="absolute -bottom-6 -left-6 hidden lg:block z-20">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-black/90 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-2xl max-w-[210px]"
                  >
                    <span className="font-mono text-[8px] text-[#6b6860] uppercase block mb-1 font-bold flex items-center gap-1">
                      <Layers size={10} className="text-cyan-400" /> UI Architecture
                    </span>
                    <div className="font-display font-black text-sm text-[#f0ede8] mb-1">Visual Layer</div>
                    <p className="font-sans text-[10px] text-[#9b9892] leading-relaxed">
                      Glassmorphic sheets, radial glows, and responsive editorial layout grid.
                    </p>
                  </motion.div>
                </div>

                <div className="absolute -top-6 -right-6 hidden lg:block z-20">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-black/90 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-2xl max-w-[210px]"
                  >
                    <span className="font-mono text-[8px] text-[#6b6860] uppercase block mb-1 font-bold flex items-center gap-1">
                      <Activity size={10} className="text-[#e8ff00]" /> Physics Motion
                    </span>
                    <div className="font-display font-black text-sm text-[#f0ede8] mb-1">Motion Engine</div>
                    <p className="font-sans text-[10px] text-[#9b9892] leading-relaxed">
                      Smooth physics-based Framer Motion scroll parallax and hover physics.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Right Column (Text, Info, Features) */}
              <div className="lg:col-span-5 flex flex-col items-start text-left order-1 lg:order-2">
                <span className="font-mono text-xs tracking-widest block mb-4" style={{ color: 'var(--accent2)' }}>
                  02 / CREATIVE UI ENGINEERING
                </span>

                <h3 className="font-display font-black leading-tight text-4xl md:text-6xl text-white mb-6 group-hover:italic transition-all duration-300">
                  AI Portfolio
                </h3>

                <p className="text-base leading-relaxed text-[#9b9892] mb-8 font-sans">
                  A personal creative playground designed to push boundaries in UI engineering. Synthesizing glassmorphism, responsive grid asymmetry, and advanced Framer Motion physics, it serves as an immersive personal showcase of high-end developer experiences.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Framer Motion Parallax", "Glassmorphic Panels", "Fluid Dynamic Particles", "Tailwind CSS v4"].map((f) => (
                    <span key={f} className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#9b9892]">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {projects[1].tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2.5 py-1 border border-white/10 rounded-sm text-[#f0ede8] bg-white/[0.02]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6 items-center pt-2">
                  <a href={projects[1].github} target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-[#9b9892] hover:text-white transition-all duration-300">
                    GitHub 
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href={projects[1].live} className="group flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-cyan-400 hover:brightness-110 transition-all duration-300">
                    This Site 
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
      {/* Bottom Soft transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
    </section>
  );
}
