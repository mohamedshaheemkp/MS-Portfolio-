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
import Folder from "../components/Folder";

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
// AI PORTFOLIO MOCKUP
// ==============================================================================

const AIPortfolioMockup = ({ project }) => {
  const [activeTab, setActiveTab] = useState("performance");
  const [fps, setFps] = useState(60);
  const [renderCount, setRenderCount] = useState(120);
  const [springStiffness, setSpringStiffness] = useState(120);
  const [logs, setLogs] = useState([
    "[SYS] Starting VITE development server...",
    "[SYS] HMR hot module reloading connected.",
    "[SYS] Antigravity namesaked particle canvas ready."
  ]);

  useEffect(() => {
    const logsPool = [
      "Framer spring update: damping=20",
      "Lenis virtual offset synced: 423px",
      "Cursor particles generated: +8 nodes",
      "Interactive button magnetic pull active",
      "Antigravity ThreeJS canvas loaded",
      "Active section viewport: Designs (04)",
      "Lightbox state: null",
      "HMR update: src/sections/Projects.jsx"
    ];

    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLogs = [...prev.slice(1)];
        const randomLog = logsPool[Math.floor(Math.random() * logsPool.length)];
        const timeStamp = new Date().toLocaleTimeString();
        nextLogs.push(`[${timeStamp}] ${randomLog}`);
        return nextLogs;
      });
      setFps(Math.floor(58 + Math.random() * 3));
      setRenderCount(prev => Math.max(115, Math.min(130, prev + Math.floor(Math.random() * 5) - 2)));
      setSpringStiffness(prev => Math.max(110, Math.min(130, prev + Math.floor(Math.random() * 5) - 2)));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.08] overflow-hidden bg-black/60 shadow-2xl group-hover:shadow-[0_0_50px_rgba(0,240,255,0.07)] transition-all duration-500 z-10" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0d0d0d] border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center font-mono text-[9px] text-[#6b6860] max-w-[220px] mx-auto bg-white/5 py-0.5 rounded border border-white/5">
          ms-portfolio-fawn.vercel.app
        </div>
        <div className="w-10" />
      </div>

      <div className="flex border-b border-white/5 bg-black/40 text-[10px] font-mono text-[#6b6860]">
        <button onClick={(e) => { e.stopPropagation(); setActiveTab("performance") }} className={`px-4 py-2 border-r border-white/5 transition-all ${activeTab === "performance" ? "text-cyan-400 bg-white/[0.02]" : "hover:text-[#f0ede8]"}`}>// DIAGNOSTICS</button>
        <button onClick={(e) => { e.stopPropagation(); setActiveTab("architecture") }} className={`px-4 py-2 border-r border-white/5 transition-all ${activeTab === "architecture" ? "text-cyan-400 bg-white/[0.02]" : "hover:text-[#f0ede8]"}`}>// NODE GRAPH</button>
      </div>

      <div className="relative aspect-video w-full overflow-hidden bg-[#0d0d0d]">
        <motion.div animate={{ top: ["-5%", "105%", "-5%"] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_15px_#00f0ff] z-20 pointer-events-none" />
        <AnimatePresence mode="wait">
          {activeTab === "performance" ? (
            <motion.div key="performance" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full relative p-5 flex flex-col justify-between font-mono text-[9px] text-[#9b9892]">
              <span className="text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
                <FiCpu size={12} className="text-cyan-400 animate-pulse" /> // CORE PHYSICS PERFORMANCE DIAGNOSTICS
              </span>
              
              <div className="space-y-3 my-2 border-y border-white/5 py-3">
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[8px]">
                    <span>ACTIVE PHYSICS SPRING NODES</span>
                    <span className="text-white">{renderCount} NODES</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div animate={{ width: `${(renderCount / 150) * 100}%` }} transition={{ duration: 0.6 }} className="h-full bg-gradient-to-r from-cyan-500 to-purple-500" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[8px]">
                    <span>SPRING ENGINE STIFFNESS</span>
                    <span className="text-white">{springStiffness} VALUE</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div animate={{ width: `${(springStiffness / 150) * 100}%` }} transition={{ duration: 0.6 }} className="h-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[7px] font-sans">
                <div className="bg-white/5 p-2 border border-white/5 rounded-lg flex flex-col justify-between">
                  <span className="font-mono text-[#6b6860] block">RENDER FPS</span>
                  <span className="text-white font-mono text-xs font-bold mt-1">{fps} FPS</span>
                  <div className="h-1 bg-green-500/30 rounded mt-1 overflow-hidden"><div className="h-full bg-green-400 w-full" /></div>
                </div>
                <div className="bg-white/5 p-2 border border-white/5 rounded-lg flex flex-col justify-between">
                  <span className="font-mono text-[#6b6860] block">LIGHTHOUSE</span>
                  <span className="text-white font-mono text-xs font-bold mt-1">98 SCORE</span>
                  <div className="h-1 bg-emerald-500/30 rounded mt-1 overflow-hidden"><div className="h-full bg-emerald-400 w-[98%]" /></div>
                </div>
                <div className="bg-white/5 p-2 border border-white/5 rounded-lg flex flex-col justify-between">
                  <span className="font-mono text-[#6b6860] block">LOAD SPEED</span>
                  <span className="text-white font-mono text-xs font-bold mt-1">&lt;0.8s</span>
                  <div className="h-1 bg-cyan-500/30 rounded mt-1 overflow-hidden"><div className="h-full bg-cyan-400 w-[90%]" /></div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="architecture" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full relative p-5 flex flex-col justify-between font-mono text-[9px] text-[#9b9892]">
              <span className="text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
                <FiLayers size={12} className="text-cyan-400" /> // ORCHESTRATION LAYER CONNECTIONS
              </span>
              
              <div className="flex-1 flex items-center justify-center relative my-3">
                <div className="absolute inset-0 opacity-[0.03] bg-repeat bg-center" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
                
                <div className="flex items-center gap-6 relative z-10 text-[8px]">
                  <div className="p-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400">Lenis Scroll</div>
                  <div className="w-6 h-px bg-cyan-500/50 relative"><div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 -top-[3px] left-1/2 -translate-x-1/2 animate-ping" /></div>
                  <div className="p-1.5 bg-purple-500/10 border border-purple-500/30 rounded text-purple-400">Spring physics</div>
                  <div className="w-6 h-px bg-purple-500/50" />
                  <div className="p-1.5 bg-pink-500/10 border border-pink-500/30 rounded text-pink-400">UI Canvas</div>
                </div>
              </div>
              <span className="text-[7px] text-[#6b6860] uppercase tracking-wider block text-center mt-2">DOM TREE STABILITY CAPABILITY INDEX: 100% NOMINAL</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 bg-black/85 border border-white/10 rounded p-2.5 font-mono text-[8px] text-[#9b9892] max-w-[210px] backdrop-blur-md shadow-lg">
          <span className="text-cyan-400 uppercase tracking-wider block mb-1 font-bold flex items-center gap-1">
            <FiTerminal size={10} className="text-cyan-400" /> Web Console Output
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

  const [activeProjectId, setActiveProjectId] = useState(null);
  const [isFolderOpen, setIsFolderOpen] = useState(true);

  // If a project is selected but no longer in the filtered featured list, reset to null
  useEffect(() => {
    if (activeProjectId !== null && !featuredProjects.some(p => p.id === activeProjectId)) {
      setActiveProjectId(null);
    }
  }, [activeCategory, featuredProjects, activeProjectId]);

  const folderColor = activeProjectId === "agri-ai" ? "#e8ff00"
                    : activeProjectId === "smart-folder-organizer" ? "#a855f7"
                    : activeProjectId === "ai-portfolio" ? "#00f0ff"
                    : "#5227FF";

  const getFolderPapers = () => {
    if (activeProjectId === null) {
      // List Mode: return selector cards for each featured project matching the filter
      return featuredProjects.map((project, idx) => {
        let borderClass = "border-emerald-500";
        let techText = "VITE";
        let techBg = "text-emerald-500 bg-emerald-500/10";
        let selectBtnColor = "#10b981";
        
        if (project.id === "agri-ai") {
          borderClass = "border-[#e8ff00]";
          techText = "PYTORCH";
          techBg = "text-yellow-600 bg-yellow-100";
          selectBtnColor = "#b5c700";
        } else if (project.id === "smart-folder-organizer") {
          borderClass = "border-purple-500";
          techText = "PYTHON";
          techBg = "text-purple-600 bg-purple-500/10";
          selectBtnColor = "#a855f7";
        }
        
        return (
          <div 
            key={project.id}
            onClick={(e) => { 
              e.stopPropagation(); 
              setActiveProjectId(project.id); 
            }}
            className={`w-full h-full p-4 flex flex-col justify-between text-black font-sans bg-white select-none text-left cursor-pointer hover:bg-zinc-50 transition-all duration-300 border-l-4 ${borderClass} shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-r`}
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-[7px] text-zinc-400">0{idx + 1} // {project.category.toUpperCase()}</span>
              <span className={`font-mono text-[7px] px-1.5 py-0.5 rounded font-bold ${techBg}`}>
                {techText}
              </span>
            </div>
            <div>
              <h4 className="font-display font-black text-[12px] text-zinc-950 leading-tight">{project.title}</h4>
              <p className="text-[7.5px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">{project.subtitle}</p>
            </div>
            <div className="flex justify-between items-center text-[7px] font-mono text-zinc-400 pt-2 border-t border-black/5">
              <span>Click to view case</span>
              <span className="font-bold uppercase" style={{ color: selectBtnColor }}>[SELECT]</span>
            </div>
          </div>
        );
      });
    }

    // Detail Mode: find currently active project details
    const project = projects.find(p => p.id === activeProjectId) || projects[0];

    // Generic back button on Paper 1
    const backBtn = (
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setActiveProjectId(null);
        }}
        className="mb-2 text-zinc-500 hover:text-zinc-800 font-mono text-[8px] font-bold flex items-center gap-1 transition-colors bg-zinc-100 hover:bg-zinc-200 px-2 py-1 rounded w-max"
      >
        ← BACK TO LIST
      </button>
    );

    // Generic Action buttons on Paper 3
    const actionButtons = (
      <div className="flex gap-2 items-center">
        <Link 
          to={`/projects/${project.id}`} 
          onClick={(e) => e.stopPropagation()} 
          className="flex-1"
        >
          <button className="w-full py-2 bg-black text-white hover:bg-zinc-800 transition-colors font-bold font-sans text-[8px] uppercase tracking-wider rounded flex items-center justify-center gap-1">
            Case Study <FiArrowUpRight size={10} />
          </button>
        </Link>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noreferrer" 
          onClick={(e) => e.stopPropagation()} 
          className="px-2.5 py-2 bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-200 rounded flex items-center justify-center transition-colors"
        >
          <FiCode size={11} />
        </a>
      </div>
    );

    if (project.id === "agri-ai") {
      return [
        // Paper 1: Tech Summary
        <div key="1" className="w-full h-full p-4 flex flex-col justify-between text-black font-sans bg-[#f7f7f7] select-none text-left">
          <div>
            {backBtn}
            <p className="text-[7px] font-bold tracking-wider text-zinc-500">// TECHNICAL SUMMARY</p>
            <p className="text-[10px] font-black text-zinc-950">Crop Health Diagnostics</p>
            <p className="text-[7.5px] text-zinc-600 mt-2 leading-relaxed">Real-time crop analysis using YOLOv9 and PyTorch, delivering edge inference leaf disease diagnostics.</p>
          </div>
          <div className="flex justify-between items-center border-t border-black/10 pt-2 text-[7px] font-mono text-zinc-500">
            <span>Stack Overview</span>
            <span className="text-zinc-700 font-bold">YOLOv9 // PyTorch</span>
          </div>
        </div>,
        // Paper 2: YOLO Live Feed Mockup
        <div key="2" className="w-full h-full p-4 flex flex-col justify-between text-black font-sans bg-[#fafafa] select-none text-left">
          <div>
            <p className="text-[7px] font-bold text-[#e8ff00] bg-black px-1.5 py-0.5 rounded w-max">// LIVE STATS</p>
            <p className="text-[10px] font-black text-zinc-950">YOLOv9 Inference Feed</p>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[7px] font-mono">
              <span>GPU Core Load</span>
              <span>78%</span>
            </div>
            <div className="h-1 bg-zinc-200 rounded-full overflow-hidden"><div className="h-full bg-cyan-400" style={{ width: '78%' }} /></div>
            <div className="flex justify-between text-[7px] font-mono">
              <span>Detection Accuracy</span>
              <span>98.4%</span>
            </div>
            <div className="h-1 bg-zinc-200 rounded-full overflow-hidden"><div className="h-full bg-[#e8ff00]" style={{ width: '98.4%' }} /></div>
          </div>
        </div>,
        // Paper 3: Core Indicators
        <div key="3" className="w-full h-full p-4 flex flex-col justify-between text-black font-sans bg-white select-none text-left">
          <div className="flex justify-between items-center">
            <p className="text-[12px] font-black text-zinc-900 leading-none">AgriAI</p>
            <span className="font-mono text-[7px] text-cyan-500 bg-cyan-500/10 px-1.5 py-0.5 rounded font-bold">AI // ACTIVE</span>
          </div>
          <div className="my-2 border-t border-b border-black/5 py-2">
            <p className="text-[7px] text-zinc-400 font-mono">// METRICS SUMMARY</p>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div>
                <span className="text-[9px] font-bold text-zinc-900">98.4%</span>
                <span className="text-[6px] text-zinc-400 block font-mono">ACCURACY</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-zinc-900">12ms</span>
                <span className="text-[6px] text-zinc-400 block font-mono">INFERENCE</span>
              </div>
            </div>
          </div>
          {actionButtons}
        </div>
      ];
    } else if (project.id === "smart-folder-organizer") {
      return [
        // Paper 1: Automation Pipeline
        <div key="1" className="w-full h-full p-4 flex flex-col justify-between text-black font-sans bg-[#f7f7f7] select-none text-left">
          <div>
            {backBtn}
            <p className="text-[7px] font-bold tracking-wider text-zinc-500">// AUTOMATION PIPELINE</p>
            <p className="text-[10px] font-black text-zinc-950">Realtime File Router</p>
            <p className="text-[7.5px] text-zinc-600 mt-2 leading-relaxed">Monitors drive activity, prevents FSEvent recursion, manages background sorting queues flawlessly.</p>
          </div>
          <div className="flex justify-between items-center border-t border-black/10 pt-2 text-[7px] font-mono text-zinc-500">
            <span>Stack Overview</span>
            <span className="text-zinc-700 font-bold">Python // Watchdog</span>
          </div>
        </div>,
        // Paper 2: Active Rules
        <div key="2" className="w-full h-full p-4 flex flex-col justify-between text-black font-sans bg-[#fafafa] select-none text-left">
          <div>
            <p className="text-[7px] font-bold text-purple-600 bg-purple-500/10 px-1.5 py-0.5 rounded w-max">// DIRECTORIES</p>
            <p className="text-[10px] font-black text-zinc-950">Active Sorting Rules</p>
          </div>
          <div className="space-y-1 text-[6px] font-mono text-zinc-600 leading-tight">
            <div>→ *.zip, *.rar → /Archives</div>
            <div>→ *.pdf, *.docx → /Documents</div>
            <div>→ *.png, *.jpg → /Images</div>
            <div className="text-purple-600 font-bold">Active Thread: Running...</div>
          </div>
        </div>,
        // Paper 3: Core Indicators
        <div key="3" className="w-full h-full p-4 flex flex-col justify-between text-black font-sans bg-white select-none text-left">
          <div className="flex justify-between items-center">
            <p className="text-[12px] font-black text-zinc-900 leading-none">Smart Folder</p>
            <span className="font-mono text-[7px] text-purple-500 bg-purple-500/10 px-1.5 py-0.5 rounded font-bold">PYTHON // IDLE</span>
          </div>
          <div className="my-2 border-t border-b border-black/5 py-2">
            <p className="text-[7px] text-zinc-400 font-mono">// METRICS SUMMARY</p>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div>
                <span className="text-[9px] font-bold text-zinc-900">10,000+</span>
                <span className="text-[6px] text-zinc-400 block font-mono">FILES ROUTED</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-zinc-900">&lt; 1s</span>
                <span className="text-[6px] text-zinc-400 block font-mono">LATENCY</span>
              </div>
            </div>
          </div>
          {actionButtons}
        </div>
      ];
    } else {
      return [
        // Paper 1: Performance Tuning
        <div key="1" className="w-full h-full p-4 flex flex-col justify-between text-black font-sans bg-[#f7f7f7] select-none text-left">
          <div>
            {backBtn}
            <p className="text-[7px] font-bold tracking-wider text-zinc-500">// PERFORMANCE TUNING</p>
            <p className="text-[10px] font-black text-zinc-950">React 19 Scaffold</p>
            <p className="text-[7.5px] text-zinc-600 mt-2 leading-relaxed">Vite Scaffolding with hardware accelerated graphics, custom spring physics, and Lenis smooth scrolls.</p>
          </div>
          <div className="flex justify-between items-center border-t border-black/10 pt-2 text-[7px] font-mono text-zinc-500">
            <span>Stack Overview</span>
            <span className="text-zinc-700 font-bold">Vite // Framer Motion</span>
          </div>
        </div>,
        // Paper 2: Lighthouse Audit
        <div key="2" className="w-full h-full p-4 flex flex-col justify-between text-black font-sans bg-[#fafafa] select-none text-left">
          <div>
            <p className="text-[7px] font-bold text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded w-max">// LIGHTHOUSE</p>
            <p className="text-[10px] font-black text-zinc-950">System Audit Metrics</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-500 flex items-center justify-center font-bold text-emerald-600 text-[10px]">
              98
            </div>
            <div className="space-y-0.5 text-[6px] font-mono text-zinc-500 leading-tight">
              <div>Performance: 98/100</div>
              <div>Accessibility: 100/100</div>
              <div>Best Practices: 100/100</div>
            </div>
          </div>
        </div>,
        // Paper 3: Core Indicators
        <div key="3" className="w-full h-full p-4 flex flex-col justify-between text-black font-sans bg-white select-none text-left">
          <div className="flex justify-between items-center">
            <p className="text-[12px] font-black text-zinc-900 leading-none">AI Portfolio</p>
            <span className="font-mono text-[7px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">VITE // ACTIVE</span>
          </div>
          <div className="my-2 border-t border-b border-black/5 py-2">
            <p className="text-[7px] text-zinc-400 font-mono">// METRICS SUMMARY</p>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div>
                <span className="text-[9px] font-bold text-zinc-900">98</span>
                <span className="text-[6px] text-zinc-400 block font-mono">LIGHTHOUSE</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-zinc-900">&lt; 1s</span>
                <span className="text-[6px] text-zinc-400 block font-mono">DOM_READY</span>
              </div>
            </div>
          </div>
          {actionButtons}
        </div>
      ];
    }
  };

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
          {/* ================= VAULT SYSTEM BOARD ================= */}
          {featuredProjects.length > 0 && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center items-center mb-32"
            >
              {/* Central Giant Interactive Folder Vault */}
              <div className="flex justify-center items-center h-[520px] w-full relative">
                
                {/* Immersive background spotlights and dynamic glow */}
                <div 
                  className="absolute w-80 h-80 rounded-full blur-[150px] opacity-40 transition-all duration-[1000ms] pointer-events-none"
                  style={{
                    background: activeProjectId === "agri-ai" ? "rgba(232, 255, 0, 0.22)"
                              : activeProjectId === "smart-folder-organizer" ? "rgba(168, 85, 247, 0.22)"
                              : activeProjectId === "ai-portfolio" ? "rgba(0, 240, 255, 0.22)"
                              : "rgba(82, 39, 255, 0.22)"
                  }}
                />
                
                <div className="relative z-10 flex items-center justify-center w-full" onClick={e => e.stopPropagation()}>
                  <Folder
                    color={folderColor}
                    size={3.0}
                    open={isFolderOpen}
                    onClick={() => setIsFolderOpen(prev => !prev)}
                    className="relative z-10 py-16"
                    items={getFolderPapers()}
                  />
                </div>
              </div>
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
