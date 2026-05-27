import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Github, FolderOpen, Eye, Zap, ShieldCheck, Settings, Clock, Brain, Cloud, Layers, Cpu, ArrowUpRight } from "lucide-react"
import ScrollReveal from "../components/ScrollReveal"

const features = [
  { icon: FolderOpen, title: "Automatic File Sorting", desc: "Files are instantly categorized into structured folders the moment they appear — zero manual effort required.", color: "#a855f7" },
  { icon: Eye, title: "Real-Time Monitoring", desc: "Watchdog library continuously monitors target directories, detecting new files and changes with millisecond precision.", color: "#00f0ff" },
  { icon: ShieldCheck, title: "Duplicate File Handling", desc: "Smart deduplication prevents overwriting existing files, appending unique identifiers when conflicts arise.", color: "#10b981" },
  { icon: Zap, title: "Smart Categorization", desc: "Intelligent type detection covers 40+ file extensions across documents, images, audio, video, archives, and code.", color: "#f59e0b" },
  { icon: Settings, title: "Custom Rules Engine", desc: "Define your own organization rules — route specific file patterns to custom folders with simple configuration.", color: "#ec4899" },
  { icon: Clock, title: "Productivity Automation", desc: "Set it once, forget it forever. Reclaim hours spent manually organizing downloads and project files.", color: "#6366f1" },
]

const challenges = [
  {
    number: "01",
    title: "Recursive Loop Prevention",
    problem: "Early builds caused infinite loops — the organizer would detect its own file movement and re-trigger.",
    solution: "Implemented a source-path exclusion filter that ignores movement events originating from the destination directories.",
    color: "#a855f7",
  },
  {
    number: "02",
    title: "Large Directory Performance",
    problem: "Monitoring directories with 10,000+ files caused high CPU usage and missed events.",
    solution: "Switched to an event-driven model with debouncing — only actual filesystem events trigger processing, not polling.",
    color: "#00f0ff",
  },
  {
    number: "03",
    title: "Dynamic File Movement",
    problem: "Files being written (downloads in progress) were moved before completion, causing corruption.",
    solution: "Added a file-lock check and 500ms delay before processing, ensuring file handles are fully released.",
    color: "#10b981",
  },
  {
    number: "04",
    title: "Stable Automation Performance",
    problem: "The Watchdog thread occasionally crashed on permission errors without notifying the user.",
    solution: "Wrapped all handlers in try-except blocks with a status indicator in the Tkinter UI, logging errors gracefully.",
    color: "#f59e0b",
  },
]

const roadmap = [
  { icon: Brain, title: "AI Semantic Categorization", desc: "Use NLP models to categorize files by content meaning, not just file extension.", status: "Planned", color: "#a855f7" },
  { icon: Cloud, title: "Cloud Synchronization", desc: "Sync organized folders to Google Drive, OneDrive, or S3 automatically.", status: "Research", color: "#00f0ff" },
  { icon: Layers, title: "User-Defined Workflows", desc: "Visual drag-and-drop workflow editor for custom automation pipelines.", status: "Concept", color: "#10b981" },
  { icon: Cpu, title: "Cross-Platform App", desc: "Electron-based desktop app for macOS and Linux, beyond current Windows support.", status: "Concept", color: "#f59e0b" },
]

const tech = [
  { name: "Python", desc: "Core language" },
  { name: "Tkinter", desc: "Desktop UI" },
  { name: "Watchdog", desc: "FS monitoring" },
  { name: "OS Module", desc: "File operations" },
  { name: "File Handling", desc: "I/O management" },
  { name: "Automation", desc: "Rule engine" },
]

export default function SmartFolderPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // SEO
  useEffect(() => {
    document.title = "Smart Folder Organizer | Mohamed Shaheem"
    const desc = document.querySelector("meta[name='description']")
    if (desc) desc.setAttribute("content", "Case study: Intelligent file management system built with Python and Watchdog for real-time automated folder organization.")
    return () => {
      document.title = "Mohamed Shaheem | AI Developer"
      if (desc) desc.setAttribute("content", "AI Developer, ML Enthusiast, Final Year Engineering Student Portfolio")
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

      {/* ── BACK NAV ── */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/#projects">
          <motion.div
            whileHover={{ x: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl text-sm text-zinc-400 hover:text-white hover:border-white/25 transition-colors duration-300"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </motion.div>
        </Link>
      </div>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Radial glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none"
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 text-center max-w-5xl mx-auto pt-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-400 text-xs font-mono tracking-widest uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Case Study — Python Automation
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-black tracking-tighter leading-[0.92]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", fontFamily: "var(--font-display)" }}
            >
              Smart Folder
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="font-black tracking-tighter leading-[0.92] text-transparent bg-clip-text"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                fontFamily: "var(--font-display)",
                backgroundImage: "linear-gradient(135deg, #a855f7 0%, #00f0ff 100%)"
              }}
            >
              Organizer.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
          >
            Intelligent File Management &amp; Automation System — built with Python, Watchdog, and Tkinter to eliminate manual file sorting permanently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="https://github.com/mohamedshaheemkp/smart-folder-organizer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              <Github size={16} />
              View on GitHub
            </a>
            <a
              href="#overview"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-sm text-white hover:bg-white/10 transition-all duration-500"
            >
              Read Case Study
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating terminal hero widget */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0px", "80px"]) }}
          className="relative z-10 mt-16 w-full max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/80 backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.12)]">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0d0d0d] border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[10px] text-zinc-500">smart_organizer.py</span>
            </div>
            <div className="p-5 font-mono text-[12px] space-y-1.5">
              <p><span className="text-zinc-600">$</span> <span className="text-purple-400">python</span> <span className="text-white">smart_organizer.py --watch /Downloads</span></p>
              <p className="text-emerald-400">✓ Watchdog initialized. Monitoring /Downloads...</p>
              <p className="text-zinc-500 text-[10px] mt-2">──────────────────────────────────</p>
              <p className="text-zinc-400">→ NEW: <span className="text-cyan-400">project_report.pdf</span></p>
              <p className="text-zinc-400">  ↳ Moved → <span className="text-purple-400">Documents/Reports/project_report.pdf</span></p>
              <p className="text-zinc-400">→ NEW: <span className="text-cyan-400">screenshot_001.png</span></p>
              <p className="text-zinc-400">  ↳ Moved → <span className="text-purple-400">Images/Screenshots/screenshot_001.png</span></p>
              <p className="text-zinc-400">→ NEW: <span className="text-cyan-400">backup_2026.zip</span></p>
              <p className="text-zinc-400">  ↳ Moved → <span className="text-purple-400">Archives/backup_2026.zip</span></p>
              <p className="text-zinc-500 text-[10px]">──────────────────────────────────</p>
              <motion.p
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                className="text-purple-400 font-bold"
              >
                ▋ Awaiting new files...
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 text-xs font-mono"
        >
          <span>scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          OVERVIEW SECTION
      ══════════════════════════════════════════ */}
      <section id="overview" className="py-32 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="left" distance={40} duration={0.8} className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400">01</span>
            <div className="w-12 h-px bg-purple-400" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500">Overview</span>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal distance={60} duration={1.0}>
              <h2
                className="font-black leading-[0.95] tracking-tight mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontFamily: "var(--font-display)" }}
              >
                The Problem.<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a855f7, #00f0ff)" }}>
                  Solved Permanently.
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Every developer's Downloads folder becomes a graveyard of unsorted files. Manually organizing them wastes hours and still never stays clean. Smart Folder Organizer eliminates the problem entirely.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                The system uses Python's Watchdog library to monitor directories in real time and automatically moves files into logical folders the instant they appear — based on type, pattern, or custom rules defined by the user.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} distance={60} duration={1.0} className="space-y-4">
              {[
                { label: "Files Sorted", value: "∞", sub: "Continuously, zero effort" },
                { label: "Detection Speed", value: "<1s", sub: "From file creation to sorted" },
                { label: "File Types Supported", value: "40+", sub: "Documents, images, code, archives" },
                { label: "Manual Effort Required", value: "0%", sub: "Full hands-free automation" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ x: 6, borderColor: "rgba(168,85,247,0.3)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center justify-between p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
                >
                  <div>
                    <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="font-mono text-[10px] text-zinc-600">{stat.sub}</p>
                  </div>
                  <span className="font-black text-3xl text-purple-400" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES GRID
      ══════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-[#0a0a0a] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal direction="left" distance={40} duration={0.8} className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400">02</span>
            <div className="w-12 h-px bg-purple-400" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500">Key Features</span>
          </ScrollReveal>

          <ScrollReveal distance={50} duration={0.9} className="mb-20">
            <h2
              className="font-black leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontFamily: "var(--font-display)" }}
            >
              Built for zero-friction<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a855f7, #00f0ff)" }}>
                automation.
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.07} distance={40} duration={0.8}>
                <motion.div
                  whileHover={{ y: -6, borderColor: `${f.color}30` }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-400 h-full group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-[0_0_20px_currentColor]"
                    style={{ background: `${f.color}15`, color: f.color }}
                  >
                    <f.icon size={18} />
                  </div>
                  <h3 className="font-bold text-white mb-2 font-sans">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECH STACK
      ══════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="left" distance={40} duration={0.8} className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400">03</span>
            <div className="w-12 h-px bg-purple-400" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500">Tech Stack</span>
          </ScrollReveal>
          <ScrollReveal distance={50} duration={0.9} className="mb-16">
            <h2
              className="font-black leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontFamily: "var(--font-display)" }}
            >
              Tools of choice.
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-4">
            {tech.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.06} distance={30} duration={0.7}>
                <motion.div
                  whileHover={{ scale: 1.05, borderColor: "rgba(168,85,247,0.4)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-6 py-4 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300 text-center min-w-[120px]"
                >
                  <p className="font-bold text-white text-sm mb-1">{t.name}</p>
                  <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider">{t.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SCREENSHOT PLACEHOLDERS
      ══════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 lg:px-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="left" distance={40} duration={0.8} className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400">04</span>
            <div className="w-12 h-px bg-purple-400" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500">Screenshots</span>
          </ScrollReveal>
          <ScrollReveal distance={50} duration={0.9} className="mb-16">
            <h2
              className="font-black leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontFamily: "var(--font-display)" }}
            >
              In action.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Application UI", sub: "Tkinter desktop interface" },
              { label: "Before / After", sub: "Folder structure comparison" },
              { label: "Automation Flow", sub: "File routing visualization" },
            ].map((ph, i) => (
              <ScrollReveal key={ph.label} delay={i * 0.1} distance={40} duration={0.8}>
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: "rgba(168,85,247,0.3)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="aspect-[4/3] rounded-2xl border border-dashed border-white/10 bg-white/[0.01] flex flex-col items-center justify-center gap-3 group hover:bg-white/[0.03] transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-purple-500/30 transition-colors duration-300">
                    <FolderOpen size={20} className="text-zinc-600 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <p className="font-sans font-medium text-zinc-500 text-sm">{ph.label}</p>
                    <p className="font-mono text-[10px] text-zinc-700 mt-0.5">{ph.sub}</p>
                  </div>
                  <span className="font-mono text-[9px] text-zinc-700 px-3 py-1 rounded-full border border-white/5">
                    Screenshot coming soon
                  </span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CHALLENGES SOLVED
      ══════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="left" distance={40} duration={0.8} className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400">05</span>
            <div className="w-12 h-px bg-purple-400" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500">Challenges Solved</span>
          </ScrollReveal>
          <ScrollReveal distance={50} duration={0.9} className="mb-16">
            <h2
              className="font-black leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontFamily: "var(--font-display)" }}
            >
              Hard problems.<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a855f7, #00f0ff)" }}>
                Elegant solutions.
              </span>
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {challenges.map((c, i) => (
              <ScrollReveal key={c.number} delay={i * 0.08} distance={50} duration={0.9}>
                <motion.div
                  whileHover={{ x: 8, borderColor: `${c.color}30` }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="grid md:grid-cols-[80px_1fr_1fr] gap-6 p-7 rounded-2xl border border-white/5 bg-white/[0.02] items-start"
                >
                  <span
                    className="font-black text-5xl leading-none"
                    style={{ fontFamily: "var(--font-display)", color: `${c.color}40` }}
                  >
                    {c.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-white mb-2">{c.title}</h3>
                    <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider mb-2">Problem</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider mb-2" style={{ color: c.color }}>Solution</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FUTURE ROADMAP
      ══════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 lg:px-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="left" distance={40} duration={0.8} className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400">06</span>
            <div className="w-12 h-px bg-purple-400" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500">Roadmap</span>
          </ScrollReveal>
          <ScrollReveal distance={50} duration={0.9} className="mb-16">
            <h2
              className="font-black leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontFamily: "var(--font-display)" }}
            >
              What's next.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {roadmap.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1} distance={40} duration={0.8}>
                <motion.div
                  whileHover={{ y: -5, borderColor: `${r.color}30` }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="p-7 rounded-2xl border border-white/5 bg-white/[0.02] flex gap-5 items-start group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${r.color}12`, color: r.color }}
                  >
                    <r.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-white text-sm">{r.title}</h3>
                      <span
                        className="font-mono text-[9px] px-2 py-0.5 rounded-full border uppercase tracking-wider"
                        style={{ color: r.color, borderColor: `${r.color}30`, background: `${r.color}08` }}
                      >
                        {r.status}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GITHUB CTA
      ══════════════════════════════════════════ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[600px] h-[300px] bg-purple-600/30 blur-[160px] rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal distance={60} duration={1.0}>
            <h2
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontFamily: "var(--font-display)" }}
            >
              Explore the code.
            </h2>
            <p className="text-zinc-400 text-lg mb-12">
              The full source is open on GitHub. Star it, fork it, or build on top of it.
            </p>
            <motion.a
              href="https://github.com/mohamedshaheemkp/smart-folder-organizer"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-base hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] transition-all duration-500"
            >
              <Github size={20} />
              View on GitHub
              <ArrowUpRight size={16} />
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
