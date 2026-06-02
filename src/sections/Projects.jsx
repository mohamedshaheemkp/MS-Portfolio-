import { motion, AnimatePresence } from "framer-motion";
import Parallax from "../components/Parallax";
import ScrollReveal from "../components/ScrollReveal";
import { motionTiming } from "../utils/motion";
import Folder from "../components/Folder";
import { FiArrowUpRight, FiCode, FiCpu, FiGithub, FiLayers, FiZap } from "react-icons/fi";
import { projects } from "../data/projects";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";

// ==============================================================================
// PROJECT DATA — maps featured projects to folder papers
// ==============================================================================

const FEATURED = [
  {
    id: "ai-portfolio",
    name: "AI Portfolio",
    sub: "Vite · Framer Motion · React 19",
    tag: "WEB",
    tagColor: "#00f0ff",
    metric: "98",
    metricLabel: "Lighthouse",
    Icon: FiZap,
    route: "/projects/ai-portfolio",
  },
  {
    id: "smart-folder-organizer",
    name: "Smart Folder",
    sub: "Realtime Python File Router",
    tag: "AUTOMATION",
    tagColor: "#a855f7",
    metric: "10k+",
    metricLabel: "Files Routed",
    Icon: FiLayers,
    route: "/projects/smart-folder-organizer",
  },
  {
    id: "agri-ai",
    name: "AgriAI",
    sub: "Crop Disease Detection via YOLOv9",
    tag: "AI",
    tagColor: "#e8ff00",
    metric: "98.4%",
    metricLabel: "Accuracy",
    Icon: FiCpu,
    route: "/projects/agri-ai",
  },
];

// ==============================================================================
// PAPER CARD — rendered inside each paper slot of the Folder component
// ==============================================================================

function PaperCard({ project, onNavigate }) {
  const Icon = project.Icon;
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onNavigate(project.route);
      }}
      className="w-full h-full flex flex-col justify-between p-3 text-left select-none cursor-pointer"
      style={{ background: "transparent" }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <span
          className="font-mono text-[6px] font-bold px-1 py-0.5 rounded"
          style={{
            color: project.tagColor,
            background: `${project.tagColor}18`,
            border: `1px solid ${project.tagColor}30`,
          }}
        >
          {project.tag}
        </span>
        <Icon size={8} style={{ color: project.tagColor, opacity: 0.7 }} />
      </div>

      {/* Title */}
      <div>
        <p className="font-display font-black text-[10px] text-zinc-900 leading-tight">{project.name}</p>
        <p className="font-mono text-[6px] text-zinc-500 mt-0.5 leading-tight line-clamp-2">{project.sub}</p>
      </div>

      {/* Metric + CTA */}
      <div className="flex items-center justify-between border-t border-black/[0.06] pt-1.5">
        <div>
          <span className="font-mono font-black text-[10px] text-zinc-800">{project.metric}</span>
          <span className="font-mono text-[5px] text-zinc-400 block uppercase tracking-wider">{project.metricLabel}</span>
        </div>
        <span
          className="font-mono text-[5.5px] font-bold uppercase tracking-wider flex items-center gap-0.5"
          style={{ color: project.tagColor }}
        >
          OPEN <FiArrowUpRight size={6} />
        </span>
      </div>
    </button>
  );
}

// ==============================================================================
// FOLDER SHOWCASE — preserved exactly, now lives in the right column
// ==============================================================================

function FolderShowcase() {
  const [folderOpen, setFolderOpen] = useState(false);
  const navigate = useNavigate();

  const folderColor = "#5227FF";
  const glowColor = folderOpen ? "rgba(82,39,255,0.18)" : "rgba(82,39,255,0.06)";

  const paperItems = FEATURED.map((proj) => (
    <PaperCard key={proj.id} project={proj} onNavigate={(route) => navigate(route)} />
  ));

  return (
    <div className="flex flex-col items-center gap-10 relative">

      {/* Ambient glow behind folder */}
      <div
        className="absolute w-80 h-80 rounded-full blur-[30px] pointer-events-none transition-all duration-[1200ms]"
        style={{ background: glowColor, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
      />

      {/* ── THE FOLDER COMPONENT ── */}
      <div className="relative z-10">
        <Folder
          color={folderColor}
          size={3.0}
          open={folderOpen}
          onClick={() => setFolderOpen(prev => !prev)}
          items={paperItems}
          className="py-16"
        />
      </div>

      {/* Project legend pills — show when open */}
      <AnimatePresence>
        {folderOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.344, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 relative z-10"
          >
            {FEATURED.map((proj) => (
              <Link
                key={proj.id}
                to={proj.route}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-mono text-[8px] font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105"
                style={{
                  color: proj.tagColor,
                  borderColor: `${proj.tagColor}35`,
                  background: `${proj.tagColor}0a`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: proj.tagColor, boxShadow: `0 0 6px ${proj.tagColor}` }}
                />
                {proj.name}
                <FiArrowUpRight size={8} />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: folderOpen ? 1 : 0.4 }}
        transition={{ duration: 0.344, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-[8px] text-zinc-700 uppercase tracking-[0.3em] relative z-10"
      >
        {folderOpen ? "click any paper · or use legend above" : "hover to preview · click to open"}
      </motion.p>
    </div>
  );
}

// ==============================================================================
// MAIN SECTION
// ==============================================================================

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);
  const gridProjects = projects.filter(p => !p.featured);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: motionTiming.normal, ease: motionTiming.ease }
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-[120px] px-6 md:px-12 lg:px-20 overflow-hidden bg-black"
    >
      {/* Background Ambience — preserved */}
      <Parallax speed={-0.1} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)" }} />
      <Parallax speed={0.1} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%)" }} />

      <div className="max-w-[1200px] mx-auto relative z-20">

        {/* ── SECTION LABEL — matches Skills / About pattern ── */}
        <ScrollReveal direction="left" distance={30} duration={0.7} className="flex items-center gap-4 mb-20">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>03</span>
          <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>Projects</span>
        </ScrollReveal>

        {/* ════════════════════════════════════════════════════════════
            TWO-COLUMN LAYOUT
            Left:  section heading + project list + GitHub CTA
            Right: Folder component (centred, full height)
        ════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-20 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col">

            {/* Heading */}
            <ScrollReveal variant="skew" distance={60} className="mb-12">
              <h2 className="font-display font-bold text-[clamp(32px,5vw,56px)] text-white leading-[1.05] tracking-[-0.03em] max-w-xl">
                Built to solve<br />
                <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>real problems.</span>
              </h2>
            </ScrollReveal>

            {/* Project list — all 3 projects visible without interaction */}
            <div className="flex flex-col border-t border-white/[0.07]">
              {FEATURED.map((proj, index) => (
                <motion.div
                  key={proj.id}
                  onHoverStart={() => setHoveredId(proj.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: motionTiming.normal, ease: motionTiming.ease, delay: index * 0.08 }}
                >
                  <Link
                    to={proj.route}
                    className="group flex items-center justify-between py-5 border-b border-white/[0.07] transition-colors duration-200"
                    style={{ color: hoveredId === proj.id ? proj.tagColor : 'inherit' }}
                  >
                    {/* Left: index + name + stack */}
                    <div className="flex items-center gap-5 min-w-0">
                      <span
                        className="font-mono text-[10px] tracking-widest shrink-0 transition-colors duration-200"
                        style={{ color: hoveredId === proj.id ? proj.tagColor : 'var(--muted)' }}
                      >
                        0{index + 1}
                      </span>
                      <div className="min-w-0">
                        <p
                          className="font-display font-bold text-base md:text-lg text-white leading-tight transition-colors duration-200 group-hover:text-[var(--accent)]"
                          style={{ color: hoveredId === proj.id ? proj.tagColor : undefined }}
                        >
                          {proj.name}
                        </p>
                        <p className="font-mono text-[11px] text-zinc-600 mt-0.5 truncate">
                          {proj.sub}
                        </p>
                      </div>
                    </div>

                    {/* Right: tag + metric + arrow */}
                    <div className="flex items-center gap-4 shrink-0 ml-4">
                      {/* Category tag */}
                      <span
                        className="hidden sm:block font-mono text-[9px] font-bold px-2 py-1 rounded tracking-wider uppercase"
                        style={{
                          color: proj.tagColor,
                          background: `${proj.tagColor}14`,
                          border: `1px solid ${proj.tagColor}28`,
                        }}
                      >
                        {proj.tag}
                      </span>

                      {/* Key metric */}
                      <div className="text-right hidden md:block">
                        <p
                          className="font-mono font-black text-sm leading-none"
                          style={{ color: proj.tagColor }}
                        >
                          {proj.metric}
                        </p>
                        <p className="font-mono text-[9px] text-zinc-600 uppercase tracking-wider mt-0.5">
                          {proj.metricLabel}
                        </p>
                      </div>

                      {/* Arrow */}
                      <motion.span
                        animate={{ x: hoveredId === proj.id ? 3 : 0, y: hoveredId === proj.id ? -3 : 0 }}
                        transition={{ duration: 0.2, ease: motionTiming.ease }}
                        className="text-zinc-600 group-hover:text-white transition-colors duration-200"
                      >
                        <FiArrowUpRight size={16} />
                      </motion.span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* GitHub CTA */}
            <ScrollReveal delay={0.25} distance={20} duration={0.7} className="mt-8">
              <a
                href="https://github.com/mohamedshaheemkp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors duration-200 group"
              >
                <FiGithub size={14} className="transition-transform duration-200 group-hover:scale-110" />
                View all on GitHub
                <FiArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </ScrollReveal>
          </div>

          {/* ── RIGHT COLUMN — Folder, mobile: centred below list ── */}
          <div className="flex items-center justify-center w-full lg:w-[380px] min-h-[360px]">
            {/* Scale guard: 3.0 × 100px base = 300px; 380px col gives comfortable clearance */}
            <div style={{ transform: 'scale(1)', transformOrigin: 'center center' }}>
              <FolderShowcase />
            </div>
          </div>

        </div>



        {/* ════════════════════════════════════════════════════════════
            NON-FEATURED PROJECT GRID (renders if any project has featured: false)
        ════════════════════════════════════════════════════════════ */}
        {gridProjects.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          >
            {gridProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: motionTiming.normal, ease: motionTiming.ease }}
                className="will-change-transform"
                style={{ transform: "translateZ(0)" }}
              >
                <SpotlightCard className="h-full p-[28px] flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-wider text-cyan-400">
                        {project.category}
                      </span>
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                        <FiCode size={16} />
                      </a>
                    </div>
                    <h4 className="text-[28px] font-semibold tracking-[-0.03em] leading-tight text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[17px] leading-[1.5] text-white/70 mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[13px] font-mono text-zinc-500 tracking-[0.02em]">{t}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[13px] font-mono text-zinc-600 tracking-[0.02em]">+{project.tech.length - 3}</span>
                      )}
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

      </div>
    </section>
  );
}
