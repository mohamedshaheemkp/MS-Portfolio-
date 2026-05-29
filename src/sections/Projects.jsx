import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import Parallax from "../components/Parallax";
import Folder from "../components/Folder";
import { FiArrowUpRight, FiCode, FiCpu, FiLayers, FiZap } from "react-icons/fi";
import { projects } from "../data/projects";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";

// ==============================================================================
// PROJECT DATA — maps featured projects to folder papers
// ==============================================================================

const FEATURED = [
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
// FOLDER SECTION — label above + legend below
// ==============================================================================

function FolderShowcase() {
  const [folderOpen, setFolderOpen] = useState(false);
  const navigate = useNavigate();

  // Dynamic glow colour driven by which project is in focus (matches folder color)
  const folderColor = "#5227FF";
  const glowColor = folderOpen ? "rgba(82,39,255,0.18)" : "rgba(82,39,255,0.06)";

  const paperItems = FEATURED.map((proj) => (
    <PaperCard key={proj.id} project={proj} onNavigate={(route) => navigate(route)} />
  ));

  return (
    <div className="flex flex-col items-center gap-10 relative">

      {/* Ambient glow behind folder */}
      <div
        className="absolute w-80 h-80 rounded-full blur-[120px] pointer-events-none transition-all duration-[1200ms]"
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
            transition={{ duration: 0.35, ease: "easeOut" }}
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
        transition={{ duration: 0.4 }}
        className="font-mono text-[8px] text-zinc-700 uppercase tracking-[0.3em] relative z-10"
      >
        {folderOpen ? "click any paper · or use legend above" : "hover to preview · click to open"}
      </motion.p>
    </div>
  );
}

// ==============================================================================
// MAIN PROJECTS COMPONENT
// ==============================================================================

export default function Projects() {
  const gridProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-black min-h-screen">

      {/* Background Ambience */}
      <Parallax speed={-0.1} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.02] blur-[150px] pointer-events-none" />
      <Parallax speed={0.1} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/[0.02] blur-[180px] pointer-events-none" />


      <div className="max-w-7xl mx-auto relative z-20">

        {/* ═══════════════════════════════════════════════════════
            INTERACTIVE FOLDER VAULT
        ═══════════════════════════════════════════════════════ */}
        <div className="flex justify-center items-center mb-40 min-h-[480px]">
          <FolderShowcase />
        </div>

        {/* ═══════════════════════════════════════════════════════
            NON-FEATURED PROJECT GRID
        ═══════════════════════════════════════════════════════ */}
        {gridProjects.length > 0 && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {gridProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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
