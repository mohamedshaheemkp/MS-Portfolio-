import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import Parallax from "../components/Parallax";
import { ArrowUpRight, Activity, Terminal, Layers, ShieldAlert, Cpu } from "lucide-react";
import { projects } from "../data/projects";
import { useState, useEffect, useRef } from "react";
import Magnetic from "../components/Magnetic";
import { Link } from "react-router-dom";

// Interactive 3D Tilt Card wrapper for immersive visual experience
const ProjectCard = ({ children, index }) => {
  const cardRef = useRef(null);
  
  // Tilt angles
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 });

  // Floating background radial highlight coordinates
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], ["0%", "100%"]), { stiffness: 120, damping: 20 });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], ["0%", "100%"]), { stiffness: 120, damping: 20 });

  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const relativeX = (clientX - left) / width - 0.5;
    const relativeY = (clientY - top) / height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const accentGlow = index === 0 ? "rgba(232, 255, 0, 0.25)" : "rgba(0, 240, 255, 0.25)";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
        borderColor: hovered ? index === 0 ? "rgba(232, 255, 0, 0.2)" : "rgba(0, 240, 255, 0.2)" : "rgba(255, 255, 255, 0.08)",
        boxShadow: hovered 
          ? `0 35px 80px -20px rgba(0,0,0,0.85), 0 0 45px -10px ${accentGlow}`
          : "0 20px 50px -25px rgba(0,0,0,0.7)",
        willChange: "transform, border-color, box-shadow"
      }}
      className="relative bg-white/[0.03] backdrop-blur-[20px] border rounded-3xl p-8 md:p-12 lg:p-16 transition-colors duration-500 overflow-hidden group cursor-pointer"
    >
      {/* Moving cursor spotlight gradient */}
      {hovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 450px at ${glowX.get()} ${glowY.get()}, ${index === 0 ? 'rgba(232,255,0,0.06)' : 'rgba(0,240,255,0.06)'}, transparent 80%)`,
          }}
        />
      )}
      
      {/* Subtle interior light reflection border */}
      <div className="absolute inset-px rounded-3xl border border-white/5 pointer-events-none z-10" />

      {/* Floating Noise layer */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Video/Dashboard simulation component for AgriAI (The Signature Showcase)
const AgriDashboardMockup = ({ project, accuracy, inferenceTime }) => {
  const [activeTab, setActiveTab] = useState("feed");
  const [cpuLoad, setCpuLoad] = useState(42);
  const [gpuLoad, setGpuLoad] = useState(68);
  const [nitrogenIndex, setNitrogenIndex] = useState(74);
  const [rustProximity, setRustProximity] = useState(15);
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

      // Fluctuate runtime hardware diagnostics
      setCpuLoad(Math.floor(35 + Math.random() * 20));
      setGpuLoad(Math.floor(58 + Math.random() * 22));

      // Adjust diagnostics metrics dynamically
      setNitrogenIndex(prev => Math.max(68, Math.min(84, prev + Math.floor(Math.random() * 5) - 2)));
      setRustProximity(prev => Math.max(10, Math.min(22, prev + Math.floor(Math.random() * 3) - 1)));
      setMoistureDeficit(prev => Math.max(26, Math.min(38, prev + Math.floor(Math.random() * 5) - 2)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.08] overflow-hidden bg-black/60 shadow-2xl group-hover:shadow-[0_0_50px_rgba(232,255,0,0.07)] transition-all duration-500 z-10" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
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

      {/* Tabs with subtle transitions */}
      <div className="flex border-b border-white/5 bg-black/40 text-[10px] font-mono text-[#6b6860]">
        <button
          onClick={(e) => { e.stopPropagation(); setActiveTab("feed") }}
          className={`px-4 py-2 border-r border-white/5 transition-all ${
            activeTab === "feed" ? "text-[#e8ff00] bg-white/[0.02]" : "hover:text-[#f0ede8]"
          }`}
        >
          // LIVE STREAM
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setActiveTab("analysis") }}
          className={`px-4 py-2 border-r border-white/5 transition-all ${
            activeTab === "analysis" ? "text-[#e8ff00] bg-white/[0.02]" : "hover:text-[#f0ede8]"
          }`}
        >
          // DIAGNOSTICS
        </button>
      </div>

      {/* Video/Image Live Stream simulator */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#121212]">
        {/* Animated Laser Scan Sweep Line */}
        <motion.div
          animate={{ top: ["-5%", "105%", "-5%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e8ff00] to-transparent shadow-[0_0_15px_#e8ff00] z-20 pointer-events-none"
        />

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
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              
              {/* REC indicator only — detection boxes are already in the agri-live.webp image */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Technical stream specifications */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded border border-white/5 text-[7px] font-mono text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>REC CAM_04 // H.264 // 24FPS</span>
                </div>
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
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/80 flex flex-col justify-between p-5 font-mono text-[9px] text-[#9b9892] overflow-y-auto">
                <span className="text-[#e8ff00] font-bold mb-1 flex items-center gap-1.5">
                  <ShieldAlert size={12} className="text-[#e8ff00] animate-pulse" /> // AGRI SYSTEM RUNTIME INFRASTRUCTURE
                </span>
                
                {/* Resource Metrics (CPU / GPU Load) */}
                <div className="space-y-3 my-2 border-y border-white/5 py-3">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[8px]">
                      <span>YOLOv9 MODEL GPU LOAD</span>
                      <span className="text-white">{gpuLoad}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        animate={{ width: `${gpuLoad}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[8px]">
                      <span>SYSTEM CPU PROCESSOR</span>
                      <span className="text-white">{cpuLoad}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        animate={{ width: `${cpuLoad}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" 
                      />
                    </div>
                  </div>
                </div>

                {/* Deficiency and Plant Index Matrix */}
                <div className="grid grid-cols-3 gap-2 text-[7px] font-sans">
                  <div className="bg-white/5 p-2 border border-white/5 rounded-lg flex flex-col justify-between">
                    <span className="font-mono text-[#6b6860] block">NITROGEN LVL</span>
                    <span className="text-white font-mono text-xs font-bold mt-1">{nitrogenIndex}%</span>
                    <div className="h-1 bg-green-500/30 rounded mt-1 overflow-hidden">
                      <div className="h-full bg-green-400" style={{ width: `${nitrogenIndex}%` }} />
                    </div>
                  </div>
                  <div className="bg-white/5 p-2 border border-white/5 rounded-lg flex flex-col justify-between">
                    <span className="font-mono text-[#6b6860] block">LEAF SPOT</span>
                    <span className="text-white font-mono text-xs font-bold mt-1">{rustProximity}%</span>
                    <div className="h-1 bg-yellow-500/30 rounded mt-1 overflow-hidden">
                      <div className="h-full bg-yellow-400" style={{ width: `${rustProximity}%` }} />
                    </div>
                  </div>
                  <div className="bg-white/5 p-2 border border-white/5 rounded-lg flex flex-col justify-between">
                    <span className="font-mono text-[#6b6860] block">MOISTURE DEF</span>
                    <span className="text-white font-mono text-xs font-bold mt-1">{moistureDeficit}%</span>
                    <div className="h-1 bg-cyan-500/30 rounded mt-1 overflow-hidden">
                      <div className="h-full bg-cyan-400" style={{ width: `${moistureDeficit}%` }} />
                    </div>
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

// Soundwave/Holographic simulation component for AI Portfolio
const PortfolioMockup = () => {
  const [activeLayer, setActiveLayer] = useState("physics");
  const [pingSpeed, setPingSpeed] = useState(99.9);

  useEffect(() => {
    const interval = setInterval(() => {
      setPingSpeed(prev => +(99.5 + Math.random() * 0.4).toFixed(2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.08] overflow-hidden bg-black/60 shadow-2xl group-hover:shadow-[0_0_50px_rgba(0,240,255,0.07)] transition-all duration-500 z-10 p-6 flex flex-col justify-between aspect-video" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
      {/* Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-[8px] text-[#6b6860] uppercase tracking-widest font-semibold">
            ENGINE CORE // SPATIAL SCANNER
          </span>
        </div>
        <span className="font-mono text-[9px] text-cyan-400 font-bold bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 animate-pulse">
          {pingSpeed}% PERF
        </span>
      </div>

      {/* Grid Canvas with pulsing architectural waves */}
      <div className="flex-1 relative flex items-center justify-center bg-[#070707] border border-white/5 rounded-xl overflow-hidden py-6">
        {/* Technical Grid background */}
        <div 
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0, 240, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />

        {/* Pulsing visualizer sine-waves */}
        <div className="flex items-end gap-1.5 z-10 w-[70%] h-24 justify-center">
          {[12, 28, 48, 72, 88, 56, 32, 20, 44, 76, 92, 60, 36, 16, 24, 52].map((height, i) => (
            <motion.div
              key={i}
              animate={{ 
                height: [height * 0.3, height * 1.1, height * 0.3] 
              }}
              transition={{
                duration: 1.5 + (i % 3) * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: '4px',
                borderRadius: '2px',
                background: i % 2 === 0 ? 'var(--accent)' : 'var(--accent3)',
                boxShadow: i % 4 === 0 ? '0 0 10px var(--accent)' : 'none'
              }}
            />
          ))}
        </div>

        {/* Circular Radar Scan sweep overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 border border-dashed border-cyan-400/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40 border-t border-cyan-400/30 rounded-full"
          />
        </div>
      </div>

      {/* Simulation Toggles */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/5 text-[9px] font-mono text-[#6b6860]">
        <div className="flex gap-4">
          <button 
            onClick={(e) => { e.stopPropagation(); setActiveLayer("physics") }}
            className={`transition-colors ${activeLayer === "physics" ? "text-cyan-400 font-bold" : "hover:text-[#f0ede8]"}`}
          >
            [1. PHYSICS GRID]
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setActiveLayer("glow") }}
            className={`transition-colors ${activeLayer === "glow" ? "text-purple-400 font-bold" : "hover:text-[#f0ede8]"}`}
          >
            [2. GLOW MAP]
          </button>
        </div>
        <span>ACTIVE LAYER: {activeLayer.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default function Projects() {
  const [metricCount, setMetricCount] = useState(412);
  const [accuracy, setAccuracy] = useState(98.4);
  const [inferenceTime, setInferenceTime] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetricCount(prev => prev + (Math.random() > 0.4 ? 1 : 0));
      setAccuracy(prev => +(98.0 + Math.random() * 0.9).toFixed(1));
      setInferenceTime(prev => Math.floor(10 + Math.random() * 4));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden bg-black">
      
      {/* Radial glows with scrolling parallax */}
      <Parallax speed={-0.14} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.015] blur-[150px] pointer-events-none" />
      <Parallax speed={0.06} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#e8ff00]/[0.015] blur-[180px] pointer-events-none" />

      {/* Section label */}
      <ScrollReveal direction="left" distance={30} duration={0.7} className="flex items-center gap-4 mb-20">
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>03</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>Selected Work</span>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto">
        
        {/* Header with skew reveal */}
        <ScrollReveal variant="skew" distance={100} duration={1.1} className="mb-28">
          <h2
            className="font-display font-black leading-[0.92]"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)', color: 'var(--text)' }}
          >
            Things I've<br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>actually built.</span>
          </h2>
        </ScrollReveal>

        {/* Alternate rhythm layout rows */}
        <div className="space-y-32">
          
          {/* ================= PROJECT 1 (AgriAI) ================= */}
          <ScrollReveal variant="scale" delay={0.05} distance={50} duration={1.0}>
            <ProjectCard index={0}>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
                
                {/* Left Column (Text, Info, Features) */}
                <div className="lg:col-span-5 flex flex-col items-start text-left">
                  <span className="font-mono text-xs tracking-widest block mb-4" style={{ color: 'var(--accent)' }}>
                    01 / COMPUTER VISION &amp; AI
                  </span>
                  
                  <h3 className="font-display font-black leading-tight text-4xl md:text-6xl text-white mb-6 transition-all duration-600 group-hover:-skew-x-6 inline-block origin-left">
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
                    Designed and developed an AI-powered crop disease detection system using YOLOv9 and PyTorch, enabling real-time leaf analysis via live camera feed. Integrated a FastAPI backend with a React dashboard to surface actionable plant health insights — reducing manual inspection time for farmers by delivering instant, high-confidence disease alerts.
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
                  <div className="flex gap-6 items-center pt-2 relative z-20">
                    <Magnetic strength={0.3}>
                      <a href={projects[0].github} target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-[#9b9892] hover:text-white transition-all duration-600">
                        GitHub 
                        <ArrowUpRight size={14} className="transition-transform duration-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Magnetic>
                  </div>

                </div>

                {/* Right Column (Visual / Mockup) */}
                <div className="lg:col-span-7 relative flex justify-center items-center">
                  <AgriDashboardMockup project={projects[0]} accuracy={accuracy} inferenceTime={inferenceTime} />

                  {/* Floating Metric Widgets - Desktop Only */}
                  <div className="absolute -top-6 -right-6 hidden lg:flex flex-col gap-3 z-20" style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
                    <motion.div
                      animate={{ y: [-4, 4, -4] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-black/90 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-2xl"
                    >
                      <div className="font-mono text-[8px] text-[#6b6860] tracking-wider uppercase mb-0.5">SCAN COUNTER</div>
                      <div className="font-display font-black text-xl text-[#e8ff00]">{metricCount}</div>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [4, -4, 4] }}
                      transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-black/90 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-2xl"
                    >
                      <div className="font-mono text-[8px] text-[#6b6860] tracking-wider uppercase mb-0.5">SCAN ACCURACY</div>
                      <div className="font-display font-black text-xl text-cyan-400">{accuracy}%</div>
                    </motion.div>

                    {/* Highly interactive critical threat flashing metric card */}
                    <motion.div
                      animate={{
                        y: [-2, 2, -2],
                        borderColor: ["rgba(239, 68, 68, 0.2)", "rgba(239, 68, 68, 0.8)", "rgba(239, 68, 68, 0.2)"],
                        boxShadow: [
                          "0 0 15px rgba(239, 68, 68, 0.05)",
                          "0 0 25px rgba(239, 68, 68, 0.3)",
                          "0 0 15px rgba(239, 68, 68, 0.05)"
                        ]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-black/95 backdrop-blur-md border rounded-xl p-4 shadow-2xl flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <div>
                        <div className="font-mono text-[8px] text-red-400 font-bold tracking-wider uppercase mb-0.5">// ACTIVE THREAT</div>
                        <div className="font-display font-black text-xs text-white">LEAF RUST SPOTS</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

              </div>
            </ProjectCard>
          </ScrollReveal>


          {/* ================= PROJECT 2 (AI Portfolio) ================= */}
          <ScrollReveal variant="scale" delay={0.15} distance={50} duration={1.0}>
            <ProjectCard index={1}>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left Column (Visual Mockup) */}
                <div className="lg:col-span-7 relative flex justify-center items-center order-2 lg:order-1">
                  <PortfolioMockup />

                  {/* Floating Architectural Cards - Parallax Layering - Desktop Only */}
                  <div className="absolute -bottom-6 -left-6 hidden lg:block z-20" style={{ transform: "translateZ(75px)" }}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.03 }}
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

                  <div className="absolute -top-6 -right-6 hidden lg:block z-20" style={{ transform: "translateZ(75px)" }}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.03 }}
                      className="bg-black/90 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-2xl max-w-[210px]"
                    >
                      <span className="font-mono text-[8px] text-[#6b6860] uppercase block mb-1 font-bold flex items-center gap-1">
                        <Cpu size={10} className="text-cyan-400" /> UI Physics
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

                  <h3 className="font-display font-black leading-tight text-4xl md:text-6xl text-white mb-6 transition-all duration-600 group-hover:-skew-x-6 inline-block origin-left">
                    AI Portfolio
                  </h3>

                  <p className="text-base leading-relaxed text-[#9b9892] mb-8 font-sans">
                    Engineered a cinematic personal portfolio from the ground up using React, Tailwind, and Framer Motion — focused on immersive micro-interactions, scroll-linked parallax depth, and a premium AI-studio aesthetic. Every animation, transition, and layout decision was crafted intentionally to communicate creative and technical identity.
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
                  <div className="flex gap-6 items-center pt-2 relative z-20">
                    <Magnetic strength={0.3}>
                      <a href={projects[1].github} target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-[#9b9892] hover:text-white transition-all duration-600">
                        GitHub 
                        <ArrowUpRight size={14} className="transition-transform duration-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Magnetic>

                    <Magnetic strength={0.3}>
                      <a href={projects[1].live} className="group flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-cyan-400 hover:brightness-110 transition-all duration-600">
                        This Site 
                        <ArrowUpRight size={14} className="transition-transform duration-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Magnetic>
                  </div>

                </div>

              </div>
            </ProjectCard>
          </ScrollReveal>


          {/* ================= PROJECT 3 (Smart Folder Organizer) ================= */}
          <ScrollReveal variant="scale" delay={0.1} distance={50} duration={1.0}>
            <ProjectCard index={2}>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left Column (Text, Info, Features) */}
                <div className="lg:col-span-5 flex flex-col items-start text-left">
                  <span className="font-mono text-xs tracking-widest block mb-4" style={{ color: '#a855f7' }}>
                    03 / AUTOMATION &amp; PYTHON
                  </span>

                  <h3 className="font-display font-black leading-tight text-4xl md:text-6xl text-white mb-6 transition-all duration-600 group-hover:-skew-x-6 inline-block origin-left">
                    Smart Folder<br />Organizer
                  </h3>

                  <p className="text-base leading-relaxed text-[#9b9892] mb-8 font-sans">
                    Built an intelligent file management system in Python that monitors directories in real time using Watchdog and automatically categorizes files into structured folders based on type and custom rules. Solved recursive organization loops and large-directory performance — resulting in a stable, zero-intervention automation tool that eliminates manual file sorting entirely.
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Auto File Sorting", "Real-Time Monitoring", "Duplicate Handling", "Custom Rules Engine"].map((f) => (
                      <span key={f} className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#9b9892]">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {projects[2].tech.map((t) => (
                      <span key={t} className="font-mono text-[10px] px-2.5 py-1 border border-white/10 rounded-sm text-[#f0ede8] bg-white/[0.02]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-6 items-center pt-2 relative z-20">
                    <Magnetic strength={0.3}>
                      <a href={projects[2].github} target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-[#9b9892] hover:text-white transition-all duration-600">
                        GitHub
                        <ArrowUpRight size={14} className="transition-transform duration-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Magnetic>

                    <Magnetic strength={0.3}>
                      <Link to="/projects/smart-folder-organizer" className="group flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-purple-400 hover:brightness-110 transition-all duration-600">
                        Case Study 
                        <ArrowUpRight size={14} className="transition-transform duration-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </Magnetic>
                  </div>
                </div>

                {/* Right Column — Terminal Mockup */}
                <div className="lg:col-span-7 relative flex justify-center items-center">
                  <div className="relative w-full rounded-2xl border border-white/[0.08] overflow-hidden bg-black/60 shadow-2xl" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0d0d0d] border-b border-white/5">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="flex-1 text-center font-mono text-[9px] text-[#6b6860] max-w-[220px] mx-auto bg-white/5 py-0.5 rounded border border-white/5">
                        smart-organizer — python
                      </div>
                    </div>
                    {/* Terminal Body */}
                    <div className="p-5 font-mono text-[11px] space-y-1.5 bg-[#0a0a0a] min-h-[260px]">
                      <p><span className="text-[#6b6860]">$</span> <span className="text-[#a855f7]">python</span> <span className="text-white">organizer.py</span></p>
                      <p className="text-emerald-400">✓ Watchdog monitor started on <span className="text-white">/Downloads</span></p>
                      <p className="text-[#9b9892]">→ Detected: <span className="text-cyan-400">invoice_march.pdf</span></p>
                      <p className="text-[#9b9892]">→ Moving to <span className="text-[#a855f7]">Documents/Invoices/</span></p>
                      <p className="text-[#9b9892]">→ Detected: <span className="text-cyan-400">profile_photo.png</span></p>
                      <p className="text-[#9b9892]">→ Moving to <span className="text-[#a855f7]">Images/Photos/</span></p>
                      <p className="text-[#9b9892]">→ Detected: <span className="text-cyan-400">project_backup.zip</span></p>
                      <p className="text-[#9b9892]">→ Moving to <span className="text-[#a855f7]">Archives/</span></p>
                      <p className="text-emerald-400 mt-2">✓ Duplicate check passed — 3 files organized</p>
                      <motion.p
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.1, repeat: Infinity }}
                        className="text-[#a855f7] font-bold"
                      >
                        ▋ Monitoring for new files...
                      </motion.p>
                    </div>
                  </div>

                  {/* Floating stat card */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute -top-5 -right-5 hidden lg:block bg-black/90 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-2xl z-20"
                  >
                    <div className="font-mono text-[8px] text-[#6b6860] uppercase mb-0.5">FILES SORTED</div>
                    <div className="font-display font-black text-xl" style={{ color: '#a855f7' }}>∞</div>
                    <div className="font-mono text-[8px] text-emerald-400 mt-0.5">Zero manual effort</div>
                  </motion.div>
                </div>

              </div>
            </ProjectCard>
          </ScrollReveal>

        </div>
      </div>
      {/* Bottom Soft transition & Glow Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black backdrop-blur-[2px] pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px w-full overflow-hidden pointer-events-none z-20">
        <div 
          className="h-px w-[65%] mx-auto bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" 
          style={{ boxShadow: "0 0 10px rgba(0, 240, 255, 0.4)" }}
        />
      </div>
    </section>
  );
}
