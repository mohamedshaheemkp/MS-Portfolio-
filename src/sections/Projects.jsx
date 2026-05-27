import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import Parallax from "../components/Parallax";
import { FiArrowUpRight, FiActivity, FiTerminal, FiLayers, FiShield, FiCpu, FiCode, FiStar, FiFolder } from "react-icons/fi";
import { projects } from "../data/projects";
import { useState, useEffect, useRef } from "react";
import Magnetic from "../components/Magnetic";
import { Link } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";
import AnimatedCounter from "../components/AnimatedCounter";

// ==============================================================================
// MOCKUPS (Preserved from original for the Featured Cards)
// ==============================================================================

const AgriDashboardMockup = ({ project, accuracy, inferenceTime }) => {
  const [activeTab, setActiveTab] = useState("feed");
  const [cpuLoad, setCpuLoad] = useState(42);
  const [gpuLoad, setGpuLoad] = useState(78);
  const [nitrogenIndex, setNitrogenIndex] = useState(76);
  const [rustProximity, setRustProximity] = useState(14);
  const [moistureDeficit, setMoistureDeficit] = useState(32);
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
      "Leaf spot check: 4 detections in frame",
      "Strawberry_Leaf_Spot spread index: 0.15",
      "Status: Processing live camera feed...",
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
      setCpuLoad(Math.floor(35 + Math.random() * 20));
      setGpuLoad(Math.floor(58 + Math.random() * 22));
      setNitrogenIndex(prev => Math.max(68, Math.min(84, prev + Math.floor(Math.random() * 5) - 2)));
      setRustProximity(prev => Math.max(10, Math.min(22, prev + Math.floor(Math.random() * 3) - 1)));
      setMoistureDeficit(prev => Math.max(26, Math.min(38, prev + Math.floor(Math.random() * 5) - 2)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.08] overflow-hidden bg-black/60 shadow-2xl group-hover:shadow-[0_0_50px_rgba(232,255,0,0.07)] transition-all duration-500 z-10" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0d0d0d] border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center font-mono text-[9px] text-[#6b6860] max-w-[220px] mx-auto bg-white/5 py-0.5 rounded border border-white/5">
          agri-ai-detection.io
        </div>
        <div className="w-10" />
      </div>

      <div className="flex border-b border-white/5 bg-black/40 text-[10px] font-mono text-[#6b6860]">
        <button onClick={(e) => { e.stopPropagation(); setActiveTab("feed") }} className={`px-4 py-2 border-r border-white/5 transition-all ${activeTab === "feed" ? "text-[#e8ff00] bg-white/[0.02]" : "hover:text-[#f0ede8]"}`}>// LIVE STREAM</button>
        <button onClick={(e) => { e.stopPropagation(); setActiveTab("analysis") }} className={`px-4 py-2 border-r border-white/5 transition-all ${activeTab === "analysis" ? "text-[#e8ff00] bg-white/[0.02]" : "hover:text-[#f0ede8]"}`}>// DIAGNOSTICS</button>
      </div>

      <div className="relative aspect-video w-full overflow-hidden bg-[#121212]">
        <motion.div animate={{ top: ["-5%", "105%", "-5%"] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e8ff00] to-transparent shadow-[0_0_15px_#e8ff00] z-20 pointer-events-none" />
        <AnimatePresence mode="wait">
          {activeTab === "feed" ? (
            <motion.div key="feed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full relative">
              <img src={project.images[0]} alt="AgriAI stream" loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded border border-white/5 text-[7px] font-mono text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>REC CAM_04 // H.264 // 24FPS</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="analysis" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full relative">
              <img src={project.images[1]} alt="AgriAI Analysis" loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/80 flex flex-col justify-between p-5 font-mono text-[9px] text-[#9b9892] overflow-y-auto">
                <span className="text-[#e8ff00] font-bold mb-1 flex items-center gap-1.5">
                  <FiShield size={12} className="text-[#e8ff00] animate-pulse" /> // AGRI SYSTEM RUNTIME INFRASTRUCTURE
                </span>
                
                <div className="space-y-3 my-2 border-y border-white/5 py-3">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[8px]">
                      <span>YOLOv9 MODEL GPU LOAD</span>
                      <span className="text-white">{gpuLoad}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div animate={{ width: `${gpuLoad}%` }} transition={{ duration: 0.6 }} className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[8px]">
                      <span>SYSTEM CPU PROCESSOR</span>
                      <span className="text-white">{cpuLoad}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div animate={{ width: `${cpuLoad}%` }} transition={{ duration: 0.6 }} className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[7px] font-sans">
                  <div className="bg-white/5 p-2 border border-white/5 rounded-lg flex flex-col justify-between">
                    <span className="font-mono text-[#6b6860] block">NITROGEN LVL</span>
                    <span className="text-white font-mono text-xs font-bold mt-1">{nitrogenIndex}%</span>
                    <div className="h-1 bg-green-500/30 rounded mt-1 overflow-hidden"><div className="h-full bg-green-400" style={{ width: `${nitrogenIndex}%` }} /></div>
                  </div>
                  <div className="bg-white/5 p-2 border border-white/5 rounded-lg flex flex-col justify-between">
                    <span className="font-mono text-[#6b6860] block">LEAF SPOT</span>
                    <span className="text-white font-mono text-xs font-bold mt-1">{rustProximity}%</span>
                    <div className="h-1 bg-yellow-500/30 rounded mt-1 overflow-hidden"><div className="h-full bg-yellow-400" style={{ width: `${rustProximity}%` }} /></div>
                  </div>
                  <div className="bg-white/5 p-2 border border-white/5 rounded-lg flex flex-col justify-between">
                    <span className="font-mono text-[#6b6860] block">MOISTURE DEF</span>
                    <span className="text-white font-mono text-xs font-bold mt-1">{moistureDeficit}%</span>
                    <div className="h-1 bg-cyan-500/30 rounded mt-1 overflow-hidden"><div className="h-full bg-cyan-400" style={{ width: `${moistureDeficit}%` }} /></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 bg-black/85 border border-white/10 rounded p-2.5 font-mono text-[8px] text-[#9b9892] max-w-[210px] backdrop-blur-md shadow-lg">
          <span className="text-[#6b6860] uppercase tracking-wider block mb-1 font-bold flex items-center gap-1">
            <FiTerminal size={10} className="text-[#e8ff00]" /> Logs Output
          </span>
          <div className="space-y-0.5">
            {logs.map((log, i) => <div key={i} className="truncate">{log}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==============================================================================
// MAIN PROJECTS COMPONENT
// ==============================================================================

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "AI", "Automation", "Web Development"];

  const filteredProjects = projects.filter(p => activeCategory === "All" || p.category.includes(activeCategory));
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const gridProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-black min-h-screen">
      
      {/* Background Ambience */}
      <Parallax speed={-0.1} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.02] blur-[150px] pointer-events-none" />
      <Parallax speed={0.1} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/[0.02] blur-[180px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20 relative z-20">
        <ScrollReveal direction="up" distance={30} duration={0.7} className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-400">03</span>
          <div className="w-12 h-px bg-cyan-400/50" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500">Case Studies</span>
        </ScrollReveal>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <ScrollReveal variant="skew" distance={50} duration={0.9}>
            <h2 className="font-display font-black leading-[0.92] text-5xl md:text-7xl lg:text-8xl text-white">
              Selected <span className="text-cyan-400 italic">Works.</span>
            </h2>
          </ScrollReveal>

          {/* Filter System */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 font-mono text-xs rounded-lg transition-colors ${
                    activeCategory === cat ? "text-black font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-cyan-400 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        
        <AnimatePresence mode="popLayout">
          {/* ================= FEATURED PROJECTS ================= */}
          {featuredProjects.length > 0 && (
            <motion.div 
              layout
              className="space-y-32 mb-32"
            >
              {featuredProjects.map((project, index) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={project.id} 
                  className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
                >
                  {/* Text Side */}
                  <div className="w-full lg:w-5/12 flex flex-col items-start">
                    <span className="font-mono text-xs tracking-widest block mb-4 text-purple-400 uppercase">
                      {project.category} // FEATURED
                    </span>
                    <h3 className="font-display font-black leading-tight text-4xl md:text-5xl text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    {/* Live Metrics Overlay */}
                    <div className="flex gap-6 mb-8 p-4 bg-white/[0.02] border border-white/5 rounded-xl w-full">
                      {project.metrics.slice(0,2).map((m, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase mb-1">{m.label}</span>
                          <span className="font-display font-bold text-xl text-white">
                            <AnimatedCounter value={m.value} suffix={m.suffix} />
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Link to={`/projects/${project.id}`}>
                        <Magnetic strength={0.3}>
                          <button className="px-6 py-3 bg-white text-black font-bold font-sans text-xs uppercase tracking-wider rounded-lg hover:bg-cyan-400 transition-colors flex items-center gap-2">
                            View Case Study <FiArrowUpRight size={14} />
                          </button>
                        </Magnetic>
                      </Link>
                      <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                        <FiCode size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="w-full lg:w-7/12 relative group perspective-[1000px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <motion.div 
                      whileHover={{ rotateY: index % 2 === 0 ? -5 : 5, rotateX: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {project.id === "agri-ai" ? (
                        <AgriDashboardMockup project={project} accuracy={98.4} inferenceTime={12} />
                      ) : (
                        <div className="relative w-full aspect-video rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex items-center justify-center shadow-2xl">
                           <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />
                           <FiFolder size={64} className="text-purple-500/50 mb-4" />
                           <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                             <div className="h-2 w-32 bg-white/10 rounded overflow-hidden">
                                <motion.div animate={{ width: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-purple-500" />
                             </div>
                             <span className="text-[9px] font-mono text-zinc-500">SYSTEM.AUTOMATION.RUNNING</span>
                           </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ================= INTERACTIVE PROJECT GRID ================= */}
          {gridProjects.length > 0 && (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={project.id}
                >
                  <SpotlightCard className="h-full p-6 flex flex-col justify-between group">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-wider text-cyan-400">
                          {project.category}
                        </span>
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                          <FiCode size={16} />
                        </a>
                      </div>
                      
                      <h4 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] font-mono text-zinc-500">{t}</span>
                        ))}
                        {project.tech.length > 3 && <span className="text-[10px] font-mono text-zinc-600">+{project.tech.length - 3}</span>}
                      </div>

                      <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-cyan-400 transition-colors">
                        View Details <FiArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
