import { motion, AnimatePresence, useInView } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import Parallax from "../components/Parallax";
import { FiArrowUpRight, FiTerminal, FiLayers, FiShield, FiCpu, FiCode, FiFolder, FiFile, FiX, FiChevronRight } from "react-icons/fi";
import { projects } from "../data/projects";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";

// ==============================================================================
// PROJECT EXPLORER DATA
// ==============================================================================

const EXPLORER_PROJECTS = [
  {
    id: "agri-ai",
    name: "AgriAI",
    label: "agri-ai.py",
    tag: "AI",
    tagColor: "#e8ff00",
    color: "#e8ff00",
    accent: "rgba(232,255,0,0.18)",
    route: "/projects/agri-ai",
  },
  {
    id: "ai-portfolio",
    name: "Portfolio Website",
    label: "portfolio.jsx",
    tag: "WEB",
    tagColor: "#00f0ff",
    color: "#00f0ff",
    accent: "rgba(0,240,255,0.18)",
    route: "/projects/ai-portfolio",
  },
  {
    id: "smart-folder-organizer",
    name: "Smart Folder Organizer",
    label: "smart_folder.py",
    tag: "AUTOMATION",
    tagColor: "#a855f7",
    color: "#a855f7",
    accent: "rgba(168,85,247,0.18)",
    route: "/projects/smart-folder-organizer",
  },
  {
    id: "ats",
    name: "ATS Resume Builder",
    label: "ats_builder.py",
    tag: "AI",
    tagColor: "#f97316",
    color: "#f97316",
    accent: "rgba(249,115,22,0.18)",
    route: null,
  },
];

// ==============================================================================
// CYBERPUNK FILE EXPLORER COMPONENT
// ==============================================================================

function FileExplorer({ onSelect, selectedId }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md mx-auto"
      style={{ filter: "drop-shadow(0 0 40px rgba(0,240,255,0.08))" }}
    >
      {/* Terminal Window Frame */}
      <div
        className="rounded-2xl overflow-hidden border border-cyan-500/20 bg-black/80 backdrop-blur-xl"
        style={{ boxShadow: "0 0 0 1px rgba(0,240,255,0.06), 0 30px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.04)" }}
      >
        {/* Title Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <FiTerminal size={10} className="text-cyan-400/60" />
            <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">shaheem@portfolio:~/projects</span>
          </div>
          <span className="w-1.5 h-3 bg-cyan-400/60 animate-pulse rounded-sm" />
        </div>

        {/* Path Breadcrumb */}
        <div className="flex items-center gap-1 px-4 py-2 border-b border-white/[0.04] bg-black/20">
          <FiFolder size={9} className="text-cyan-400/50" />
          <span className="font-mono text-[8px] text-zinc-600">~/</span>
          <FiChevronRight size={8} className="text-zinc-700" />
          <span className="font-mono text-[8px] text-cyan-400/70">projects</span>
          <FiChevronRight size={8} className="text-zinc-700" />
          <span className="font-mono text-[8px] text-white/40">select_file</span>
        </div>

        {/* Header Row */}
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-2 border-b border-white/[0.04]">
          <span className="font-mono text-[7px] text-zinc-600 uppercase tracking-widest">NAME</span>
          <span className="font-mono text-[7px] text-zinc-600 uppercase tracking-widest w-14 text-right">TYPE</span>
          <span className="font-mono text-[7px] text-zinc-600 uppercase tracking-widest w-6 text-right">↗</span>
        </div>

        {/* Project Rows */}
        <div className="py-1">
          {EXPLORER_PROJECTS.map((proj, i) => {
            const isSelected = selectedId === proj.id;
            return (
              <motion.button
                key={proj.id}
                onClick={() => onSelect(proj)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="w-full grid grid-cols-[1fr_auto_auto] gap-4 items-center px-4 py-3 text-left group relative transition-all duration-200"
                style={{
                  background: isSelected
                    ? `linear-gradient(90deg, ${proj.accent}, transparent)`
                    : undefined,
                }}
              >
                {/* Hover line */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: `linear-gradient(90deg, ${proj.accent.replace("0.18", "0.08")}, transparent)` }}
                />

                {/* Active indicator */}
                {isSelected && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] rounded-r"
                    style={{ background: proj.color, boxShadow: `0 0 10px ${proj.color}` }}
                  />
                )}

                {/* File icon + name */}
                <div className="flex items-center gap-2.5 relative z-10">
                  <FiFile
                    size={11}
                    style={{ color: proj.color, filter: `drop-shadow(0 0 4px ${proj.color}40)` }}
                  />
                  <div>
                    <div
                      className="font-mono text-[11px] font-bold tracking-tight transition-colors"
                      style={{ color: isSelected ? proj.color : "rgba(255,255,255,0.75)" }}
                    >
                      {proj.name}
                    </div>
                    <div className="font-mono text-[8px] text-zinc-600">{proj.label}</div>
                  </div>
                </div>

                {/* Tag */}
                <span
                  className="font-mono text-[7px] font-bold px-1.5 py-0.5 rounded relative z-10"
                  style={{
                    color: proj.tagColor,
                    background: `${proj.tagColor}15`,
                    border: `1px solid ${proj.tagColor}25`,
                  }}
                >
                  {proj.tag}
                </span>

                {/* Arrow */}
                <FiChevronRight
                  size={11}
                  className="relative z-10 transition-all duration-200 group-hover:translate-x-0.5"
                  style={{ color: isSelected ? proj.color : "rgba(255,255,255,0.15)" }}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/[0.04] bg-black/20">
          <span className="font-mono text-[7px] text-zinc-700">
            {EXPLORER_PROJECTS.length} files &bull; Click to open case study
          </span>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-cyan-400/40 animate-pulse" />
            <span className="font-mono text-[7px] text-cyan-400/40">READY</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ==============================================================================
// FOLDER ICON COMPONENT
// ==============================================================================

function FolderIcon({ isOpen, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="relative flex flex-col items-center gap-4 group cursor-pointer select-none"
    >
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "rgba(0,240,255,0.15)", transform: "scale(1.5)" }}
      />

      {/* SVG Folder */}
      <motion.svg
        width="80"
        height="68"
        viewBox="0 0 80 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: isOpen ? -4 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Folder back */}
        <rect x="0" y="14" width="80" height="54" rx="6" fill="#0e1a2b" stroke="rgba(0,240,255,0.25)" strokeWidth="1" />
        {/* Tab */}
        <rect x="0" y="8" width="28" height="10" rx="4" fill="#0e1a2b" stroke="rgba(0,240,255,0.25)" strokeWidth="1" />
        {/* Front with glass shine */}
        <rect x="0" y="18" width="80" height="50" rx="6" fill="#0d1f35" stroke="rgba(0,240,255,0.35)" strokeWidth="1" />
        <rect x="0" y="18" width="80" height="12" rx="6" fill="rgba(0,240,255,0.05)" />
        {/* Cyan accent line */}
        <line x1="12" y1="32" x2="68" y2="32" stroke="rgba(0,240,255,0.15)" strokeWidth="0.75" strokeDasharray="4 3" />
        <line x1="12" y1="40" x2="48" y2="40" stroke="rgba(0,240,255,0.10)" strokeWidth="0.75" />
        <line x1="12" y1="47" x2="56" y2="47" stroke="rgba(0,240,255,0.08)" strokeWidth="0.75" />
        {/* Glow dot */}
        <circle cx="70" cy="26" r="2.5" fill="rgba(0,240,255,0.6)" />
        <circle cx="70" cy="26" r="4" fill="rgba(0,240,255,0.15)" />
      </motion.svg>

      {/* Label */}
      <div className="flex flex-col items-center gap-1">
        <span className="font-mono text-[10px] text-cyan-400/70 uppercase tracking-[0.3em] group-hover:text-cyan-400 transition-colors">
          {isOpen ? "[ CLOSE ]" : "[ OPEN ]"}
        </span>
        <span className="font-mono text-[8px] text-zinc-600 tracking-widest">
          {isOpen ? "ESC to close" : "Click to browse"}
        </span>
      </div>
    </motion.button>
  );
}

// ==============================================================================
// CASE STUDY PANEL — renders the existing project detail papers inline
// ==============================================================================

function CaseStudyPanel({ project, onBack }) {
  const actionButtons = (
    <div className="flex gap-3 mt-6">
      {project.route ? (
        <Link
          to={project.route}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-zinc-100 transition-colors"
        >
          Case Study <FiArrowUpRight size={11} />
        </Link>
      ) : (
        <div className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-500 font-mono text-[10px] font-bold uppercase tracking-wider cursor-not-allowed">
          Coming Soon
        </div>
      )}
      {projects.find(p => p.id === project.id)?.github && (
        <a
          href={projects.find(p => p.id === project.id)?.github}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center gap-2 font-mono text-[10px]"
        >
          <FiCode size={12} /> GitHub
        </a>
      )}
    </div>
  );

  const found = projects.find(p => p.id === project.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-xl mx-auto"
    >
      <div
        className="rounded-2xl overflow-hidden border backdrop-blur-xl bg-black/70"
        style={{
          borderColor: `${project.color}30`,
          boxShadow: `0 0 0 1px ${project.color}10, 0 30px 80px rgba(0,0,0,0.9), 0 0 60px ${project.color}08`,
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: `${project.color}15`, background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
        >
          <div className="flex items-center gap-3">
            <FiFile size={14} style={{ color: project.color }} />
            <div>
              <p className="font-mono text-[11px] font-bold text-white">{project.name}</p>
              <p className="font-mono text-[8px] text-zinc-500">{project.label}</p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors text-zinc-500 hover:text-white"
          >
            <FiX size={13} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {found && (
            <>
              {/* Tech tag row */}
              <div className="flex flex-wrap gap-1.5">
                {found.tech.slice(0, 4).map(t => (
                  <span
                    key={t}
                    className="font-mono text-[8px] px-2 py-0.5 rounded border"
                    style={{ color: project.color, background: `${project.color}10`, borderColor: `${project.color}20` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-mono text-[10px] text-zinc-400 leading-relaxed line-clamp-4">{found.description}</p>

              {/* Metrics */}
              {found.metrics && (
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {found.metrics.map(m => (
                    <div
                      key={m.label}
                      className="rounded-lg p-2.5 border"
                      style={{ background: `${project.color}08`, borderColor: `${project.color}15` }}
                    >
                      <p className="font-mono text-[14px] font-black" style={{ color: project.color }}>
                        {m.value}{m.suffix}
                      </p>
                      <p className="font-mono text-[7px] text-zinc-600 mt-0.5 uppercase tracking-wider">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Scanner line decoration */}
              <div className="relative h-1 w-full rounded-full overflow-hidden bg-white/5">
                <motion.div
                  className="absolute inset-y-0 w-1/3 rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
                  animate={{ x: ["−100%", "300%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </>
          )}

          {/* Action buttons */}
          {actionButtons}
        </div>
      </div>
    </motion.div>
  );
}

// ==============================================================================
// MAIN PROJECTS COMPONENT
// ==============================================================================

export default function Projects() {
  const [folderOpen, setFolderOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFolderClick = () => {
    if (selectedProject) {
      setSelectedProject(null);
    } else {
      setFolderOpen(prev => !prev);
    }
  };

  const openProject = (proj) => {
    setFolderOpen(false);
    setTimeout(() => setSelectedProject(proj), 220);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  // Dynamic glow color driven by the selected project
  const glowColor = selectedProject?.color
    ? `${selectedProject.color}22`
    : folderOpen
    ? "rgba(0,240,255,0.10)"
    : "rgba(82,39,255,0.08)";

  const gridProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-black min-h-screen">

      {/* Background Ambience */}
      <Parallax speed={-0.1} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.02] blur-[150px] pointer-events-none" />
      <Parallax speed={0.1} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/[0.02] blur-[180px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-6 relative z-20">
        <ScrollReveal direction="up" distance={30} duration={0.7} className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-400">03</span>
          <div className="w-12 h-px bg-cyan-400/50" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500">Case Studies</span>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">

        {/* ═══════════════════════════════════════════════════════
            INTERACTIVE PROJECT EXPLORER
        ═══════════════════════════════════════════════════════ */}
        <div className="flex flex-col items-center mb-32">

          {/* Dynamic background glow */}
          <div
            className="absolute w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-all duration-[1200ms]"
            style={{ background: glowColor }}
          />

          {/* Folder Icon + State Machine */}
          <div className="relative z-10 flex flex-col items-center gap-8 w-full">

            {/* Folder Toggle */}
            <FolderIcon isOpen={folderOpen || !!selectedProject} onClick={handleFolderClick} />

            {/* ─── State 2: File Explorer Panel ─── */}
            <AnimatePresence>
              {folderOpen && !selectedProject && (
                <FileExplorer onSelect={openProject} selectedId={selectedProject?.id} />
              )}
            </AnimatePresence>

            {/* ─── State 3: Case Study Slides Up ─── */}
            <AnimatePresence>
              {selectedProject && (
                <CaseStudyPanel project={selectedProject} onBack={closeProject} />
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            GRID — non-featured projects (unchanged)
        ═══════════════════════════════════════════════════════ */}
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
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-mono text-zinc-500">{t}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] font-mono text-zinc-600">+{project.tech.length - 3}</span>
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
