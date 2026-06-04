import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { projects as allProjects } from "../data/projects"
import { FiArrowUpRight } from "react-icons/fi"

const EASE = [0.16, 1, 0.3, 1]

const FEATURED = [
  {
    id: "agri-ai",
    index: "01",
    name: "AgriAI",
    role: "AI · Computer Vision",
    stack: "YOLOv9 · PyTorch · FastAPI · React",
    metric: "98.4%",
    metricLabel: "accuracy",
    route: "/projects/agri-ai",
    year: "2025",
  },
  {
    id: "smart-folder-organizer",
    index: "02",
    name: "Smart Folder",
    role: "Automation · Python",
    stack: "Watchdog · Tkinter · OS Module",
    metric: "10k+",
    metricLabel: "files routed",
    route: "/projects/smart-folder-organizer",
    year: "2024",
  },
  {
    id: "ai-portfolio",
    index: "03",
    name: "MS Portfolio",
    role: "Web · Design Engineering",
    stack: "React 19 · Framer Motion · Vite",
    metric: "98",
    metricLabel: "Lighthouse",
    route: "/projects/ai-portfolio",
    year: "2025",
  },
]

function ProjectRow({ project, i }) {
  const [hovered, setHovered] = useState(false)
  const rowRef = useRef(null)

  return (
    <motion.div
      ref={rowRef}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
    >
      <Link to={project.route} style={{ textDecoration: "none" }}>
        <div
          className="project-row"
          style={{
            gridTemplateColumns: "64px 1fr auto",
            gap: "clamp(16px, 3vw, 40px)",
            padding: "clamp(20px, 2.5vw, 32px) 0",
          }}
        >
          {/* Index */}
          <span className="project-number">{project.index}</span>

          {/* Name + stack */}
          <div style={{ minWidth: 0 }}>
            <div
              className="project-name"
              style={{
                color: hovered ? "var(--lime)" : "var(--text-primary)",
                transition: "color 0.25s ease",
              }}
            >
              {project.name}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginTop: "6px",
              }}
            >
              {project.stack}
            </div>
          </div>

          {/* Right — metric + year + arrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(16px, 2.5vw, 40px)",
              flexShrink: 0,
            }}
          >
            {/* Metric */}
            <div className="hidden md:block text-right">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(18px, 2vw, 24px)",
                  letterSpacing: "-0.04em",
                  color: hovered ? "var(--lime)" : "var(--text-primary)",
                  lineHeight: 1,
                  transition: "color 0.25s ease",
                }}
              >
                {project.metric}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  marginTop: "4px",
                }}
              >
                {project.metricLabel}
              </div>
            </div>

            {/* Role pill */}
            <div className="hidden sm:block">
              <span className="project-tag">{project.role}</span>
            </div>

            {/* Year */}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--text-dim)",
                letterSpacing: "0.1em",
              }}
            >
              {project.year}
            </span>

            {/* Arrow */}
            <motion.span
              animate={{
                x: hovered ? 4 : 0,
                y: hovered ? -4 : 0,
                color: hovered ? "var(--lime)" : "var(--text-dim)",
              }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex" }}
            >
              <FiArrowUpRight size={18} />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden"
      style={{
        background: "var(--ink)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div style={{ padding: "0 var(--space-gutter)" }}>

        {/* Section header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between"
          style={{ marginBottom: "clamp(40px, 6vw, 80px)", gap: "16px" }}
        >
          <div>
            <motion.div
              className="section-index"
              style={{ marginBottom: "20px" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              03 / work
            </motion.div>

            <div style={{ overflow: "hidden" }}>
              <motion.h2
                className="type-headline"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.85, ease: EASE }}
              >
                Selected <span style={{ color: "var(--lime)", fontStyle: "italic" }}>Projects</span>
              </motion.h2>
            </div>
          </div>

          <motion.a
            href="https://github.com/mohamedshaheemkp"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost hidden md:inline-flex"
            style={{ alignSelf: "flex-end", padding: "12px 24px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            All on GitHub
            <FiArrowUpRight size={12} />
          </motion.a>
        </div>

        {/* Divider */}
        <motion.div
          className="rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ transformOrigin: "left", marginBottom: "0" }}
        />

        {/* Project rows */}
        <div>
          {FEATURED.map((p, i) => (
            <ProjectRow key={p.id} project={p} i={i} />
          ))}
        </div>

        {/* Mobile GitHub link */}
        <motion.div
          className="flex md:hidden mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/mohamedshaheemkp"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            All on GitHub
            <FiArrowUpRight size={12} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
