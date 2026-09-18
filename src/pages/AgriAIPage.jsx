import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import agriDash from '../assets/Agri Ai/agri-dash.webp'
import agriLive from '../assets/Agri Ai/agri-live.webp'

export default function AgriAIPage() {
  const project = projects.find((p) => p.id === 'agri-ai') || projects[0]
  const nextProject = projects[1]
  const d = project.details

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#080808] text-[#F2F2F2] selection:bg-[#14B8C4] selection:text-black">
      {/* Top Fixed Editorial Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#222] bg-[#080808]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-24">
          <Link
            to="/systems"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#A0A0A0] transition-colors hover:text-white flex items-center gap-2"
          >
            <span>←</span>
            <span>SYSTEMS ARCHIVE</span>
          </Link>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full hidden sm:inline-block">
              REAL IMPLEMENTATION + DEMO
            </span>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#14B8C4] transition-colors hover:text-white border border-[#14B8C4]/40 px-4 py-2 rounded bg-[#14B8C4]/10"
            >
              REPOSITORY ↗
            </a>
          </div>
        </div>
      </header>

      {/* Hero Title Section */}
      <section className="relative px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-48 border-b border-[#222]">
        <div className="mx-auto max-w-[1600px] lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-[#14B8C4]"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#14B8C4]">
                FLAGSHIP CASE STUDY // 01
              </span>
            </div>

            <h1 className="text-6xl font-display font-black leading-[0.88] tracking-tighter md:text-8xl lg:text-[9rem] uppercase text-white">
              AgriAI
            </h1>

            <p className="mt-8 max-w-3xl font-mono text-lg leading-relaxed text-[#A0A0A0] md:text-2xl uppercase tracking-wide">
              {project.subtitle}
            </p>

            {/* Quick Metadata Bar */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#222] pt-8 font-mono text-xs text-[#A0A0A0]">
              <div>
                <span className="block text-[10px] text-[#666] uppercase tracking-widest mb-1">
                  ROLE
                </span>
                <span className="text-white font-bold">{project.role}</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#666] uppercase tracking-widest mb-1">
                  YEAR
                </span>
                <span className="text-white font-bold">{project.year}</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#666] uppercase tracking-widest mb-1">
                  MODEL
                </span>
                <span className="text-[#14B8C4] font-bold">YOLOv9 (PyTorch)</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#666] uppercase tracking-widest mb-1">
                  STATUS
                </span>
                <span className="text-emerald-400 font-bold">ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 12-SECTION EDITORIAL CASE STUDY BODY */}
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 lg:px-24 space-y-32">
        {/* 01 — PROBLEM */}
        <section id="section-01" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#14B8C4]">01 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              PROBLEM STATEMENT
            </h2>
          </div>
          <p className="text-2xl md:text-4xl font-body leading-relaxed text-white max-w-5xl">
            {d.problem}
          </p>
        </section>

        {/* 02 — CONTEXT */}
        <section id="section-02" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#14B8C4]">02 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              CONTEXT & MOTIVATION
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-body leading-relaxed text-[#A0A0A0] max-w-4xl">
            {d.context}
          </p>
        </section>

        {/* 03 — SYSTEM OBJECTIVE */}
        <section id="section-03" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#14B8C4]">03 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              SYSTEM OBJECTIVE
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-body leading-relaxed text-[#A0A0A0] max-w-4xl">
            {d.systemObjective}
          </p>
        </section>

        {/* 04 — ARCHITECTURE */}
        <section id="section-04" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-[#14B8C4]">04 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              SYSTEM ARCHITECTURE
            </h2>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed text-white max-w-4xl mb-12">
            {d.architecture}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111] border border-[#222] p-8 rounded-lg">
              <span className="font-mono text-xs text-[#14B8C4] block mb-2">LAYER 01</span>
              <h3 className="font-bold text-lg mb-2">Ingestion Engine</h3>
              <p className="font-mono text-xs text-[#888] leading-relaxed">
                OpenCV stream handler processing native camera resolution frames.
              </p>
            </div>
            <div className="bg-[#111] border border-[#222] p-8 rounded-lg">
              <span className="font-mono text-xs text-[#14B8C4] block mb-2">LAYER 02</span>
              <h3 className="font-bold text-lg mb-2">Neural Inference</h3>
              <p className="font-mono text-xs text-[#888] leading-relaxed">
                PyTorch YOLOv9 model running class detection and confidence scoring.
              </p>
            </div>
            <div className="bg-[#111] border border-[#222] p-8 rounded-lg">
              <span className="font-mono text-xs text-[#14B8C4] block mb-2">LAYER 03</span>
              <h3 className="font-bold text-lg mb-2">Telemetry UI</h3>
              <p className="font-mono text-xs text-[#888] leading-relaxed">
                FastAPI REST/WebSocket API delivering bounding targets to React client.
              </p>
            </div>
          </div>
        </section>

        {/* 05 — DETECTION WORKFLOW */}
        <section id="section-05" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-[#14B8C4]">05 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              DETECTION WORKFLOW
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.detectionWorkflow.map((step, idx) => (
              <div key={idx} className="border border-[#222] bg-[#0E0E0E] p-8 rounded-xl relative">
                <span className="font-mono text-[10px] text-[#14B8C4] tracking-widest block mb-4">
                  {step.stage}
                </span>
                <h3 className="font-bold text-xl text-white mb-3">{step.name}</h3>
                <p className="font-mono text-xs text-[#888] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl overflow-hidden border border-[#222]">
            <img
              src={agriLive}
              alt="Live Stream Detection Workflow"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </section>

        {/* 06 — DASHBOARD OVERVIEW */}
        <section id="section-06" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-[#14B8C4]">06 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              DASHBOARD TELEMETRY
            </h2>
          </div>
          <p className="text-xl leading-relaxed text-[#A0A0A0] max-w-4xl mb-12">{d.dashboard}</p>
          <div className="rounded-xl overflow-hidden border border-[#222]">
            <img
              src={agriDash}
              alt="AgriAI Client Dashboard"
              className="w-full h-[550px] object-cover"
            />
          </div>
        </section>

        {/* 07 — ADVISORY LOGIC */}
        <section id="section-07" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#14B8C4]">07 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              AGRONOMIC ADVISORY LOGIC
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-body leading-relaxed text-white max-w-4xl mb-8">
            {d.advisoryLogic}
          </p>
          <div className="bg-[#111] border border-[#222] p-8 rounded-lg font-mono text-xs text-[#A0A0A0] max-w-3xl space-y-3">
            <div className="text-white font-bold">LOOKUP RULE MAPPER:</div>
            <div>
              [Detected Class: Puccinia graminis (Rust)] → Action: Organic Copper Fungicide Spray
            </div>
            <div>
              [Detected Class: Aphididae (Aphids)] → Action: Introduce Biological Predators / Neem
              Solution
            </div>
          </div>
        </section>

        {/* 08 — TECHNICAL STACK */}
        <section id="section-08" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-[#14B8C4]">08 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              TECHNICAL STACK
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.technicalStack.map((item, idx) => (
              <div key={idx} className="border border-[#222] bg-[#0E0E0E] p-8 rounded-lg">
                <span className="font-mono text-xs text-[#666] uppercase tracking-widest block mb-2">
                  {item.category}
                </span>
                <span className="font-mono text-sm text-white font-bold">{item.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 09 — CHALLENGES */}
        <section id="section-09" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#14B8C4]">09 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              ENGINEERING CHALLENGES
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-body leading-relaxed text-[#A0A0A0] max-w-4xl">
            {d.challenges}
          </p>
        </section>

        {/* 10 — LIMITATIONS */}
        <section id="section-10" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#14B8C4]">10 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              KNOWN LIMITATIONS
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-body leading-relaxed text-[#A0A0A0] max-w-4xl">
            {d.limitations}
          </p>
        </section>

        {/* 11 — LESSONS */}
        <section id="section-11" className="border-b border-[#222] pb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#14B8C4]">11 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              LESSONS LEARNED
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-body leading-relaxed text-white max-w-4xl">
            {d.lessons}
          </p>
        </section>

        {/* 12 — FUTURE DIRECTION */}
        <section id="section-12" className="pb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#14B8C4]">12 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
              FUTURE DIRECTION
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-body leading-relaxed text-[#A0A0A0] max-w-4xl">
            {d.futureDirection}
          </p>
        </section>
      </div>

      {/* Next System Footer Link */}
      <section className="border-t border-[#222] bg-[#0E0E0E] px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1600px]">
          <Link to={nextProject.route} className="block group">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666] group-hover:text-[#14B8C4] transition-colors">
              NEXT SYSTEM IN ARCHIVE →
            </span>
            <div className="mt-4 flex items-center justify-between text-4xl font-display font-black md:text-7xl uppercase text-white group-hover:translate-x-3 transition-transform duration-300">
              <span>{nextProject.title}</span>
              <span className="text-[#14B8C4]">→</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
