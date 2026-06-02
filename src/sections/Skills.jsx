import { motion, AnimatePresence } from "framer-motion"
import ScrollReveal from "../components/ScrollReveal"
import Parallax from "../components/Parallax"
import { useState } from "react"
import { Cpu, Layout, Database, Sparkles, Feather } from "lucide-react"

const capabilities = [
  {
    num: "01",
    name: "AI & Machine Learning",
    description: "Training custom deep learning models, computer vision pipelines, and intelligent system architectures.",
    tags: ["Python", "TensorFlow", "PyTorch", "YOLOv9", "OpenCV"],
    icon: Cpu,
    details: "Specialising in real-time object detection models, neural audio synthesizers, and scalable AI system integrations."
  },
  {
    num: "02",
    name: "Frontend Engineering",
    description: "Architecting physics-based interactive interfaces, editorial typography, and high-fidelity layouts.",
    tags: ["React", "Tailwind", "Framer Motion", "Vite", "TypeScript"],
    icon: Layout,
    details: "Obsessed with buttery-smooth animations, performance rendering layers, responsive fluid grids, and pixel-perfection."
  },
  {
    num: "03",
    name: "Backend & Systems",
    description: "Designing hyper-efficient API endpoints, relational databases, and secure backend microservices.",
    tags: ["FastAPI", "Java", "SQL", "REST APIs", "Docker"],
    icon: Database,
    details: "Experienced building robust database systems, data collection scripts, and Dockerised micro-service structures."
  },
  {
    num: "04",
    name: "Brand Ecosystems",
    description: "Forging modern product identities, scalable design tokens, and luxury brand structures.",
    tags: ["Illustrator", "Photoshop", "Typography", "Figma"],
    icon: Sparkles,
    details: "Translating brand ideals into comprehensive design systems, cohesive colours, and highly polished visual products."
  },
  {
    num: "05",
    name: "Visual Experiments",
    description: "Pushing limits of composition, visual storytelling, print theory, and digital graphics.",
    tags: ["Poster Design", "Color Theory", "Editorial", "Print Layouts"],
    icon: Feather,
    details: "Designing high-impact editorial assets and contemporary prints, focusing on grid alignment and content asymmetry."
  }
]

const Skills = () => {
  const [activeRow, setActiveRow] = useState(null)

  return (
    <section id="skills" className="relative py-20 md:py-[120px] px-6 md:px-12 lg:px-20 overflow-hidden" style={{ background: "#050505" }}>

      <Parallax speed={-0.12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,240,255,0.07) 0%, transparent 70%)" }} />

      {/* Section label */}
      <ScrollReveal direction="left" distance={30} duration={0.7} className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>02</span>
        <div className="w-12 h-px" style={{ background: "var(--accent)" }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--muted)" }}>Capabilities</span>
      </ScrollReveal>

      {/* Sub-label per blueprint */}
      <ScrollReveal distance={20} duration={0.5} className="mb-20">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>
          Two disciplines. One standard.
        </p>
      </ScrollReveal>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <ScrollReveal variant="skew" distance={60} className="mb-20">
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(32px,5vw,56px)", letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: "36rem" }}
          >
            What I've done<br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>so far.</span>
          </h2>
        </ScrollReveal>

        {/* Capability Matrix */}
        <div className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {capabilities.map((cap, index) => {
            const Icon = cap.icon
            const isHovered = activeRow === index
            const rowColor = index % 2 === 0 ? "rgba(0,240,255,0.012)" : "rgba(168,85,247,0.012)"
            const accentColor = index % 2 === 0 ? "var(--accent)" : "var(--accent3)"

            return (
              <ScrollReveal key={cap.num} variant="blur" delay={index * 0.05} distance={20} duration={0.45}>
                <div
                  className="group relative flex flex-col py-12 px-4 md:px-8 cursor-pointer transition-all duration-300 border-b overflow-hidden"
                  style={{
                    background: isHovered ? rowColor : "transparent",
                    borderColor: "rgba(255,255,255,0.08)",
                    willChange: "background",
                  }}
                  onMouseEnter={() => setActiveRow(index)}
                  onMouseLeave={() => setActiveRow(null)}
                >
                  {/* Glowing left indicator */}
                  <div
                    className="absolute left-0 top-0 h-full w-0.5 transition-all duration-300"
                    style={{
                      background: accentColor,
                      opacity: isHovered ? 1 : 0,
                      boxShadow: isHovered ? `0 0 15px ${accentColor}` : "none",
                    }}
                  />

                  {/* Neural SVG paths on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.16] z-0"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M 50 60 Q 300 20, 600 60 T 1150 60"
                          fill="none"
                          stroke={accentColor}
                          strokeWidth="1.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        />
                        <motion.path
                          d="M 250 48 Q 450 95, 750 35"
                          fill="none"
                          stroke="var(--accent3)"
                          strokeWidth="0.8"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                        />
                        <motion.path
                          d="M 600 60 Q 800 100, 1000 30"
                          fill="none"
                          stroke={accentColor}
                          strokeWidth="0.8"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                        />
                        <motion.circle cx="50" cy="60" r="3" fill={accentColor}
                          animate={{ cx: [50,300,600,1150], cy: [60,32,60,60], opacity: [0,1,1,0] }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <motion.circle cx="250" cy="48" r="2.5" fill="var(--accent3)"
                          animate={{ cx: [250,450,750], cy: [48,72,35], opacity: [0,1,1,0] }}
                          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                        />
                        <circle cx="250" cy="48" r="4" fill={accentColor} className="animate-pulse" />
                        <circle cx="600" cy="60" r="5" fill="var(--accent3)" className="animate-pulse" />
                        <circle cx="750" cy="35" r="3.5" fill={accentColor} className="animate-pulse" />
                      </svg>
                    )}
                  </AnimatePresence>

                  {/* Row content */}
                  <div className="grid lg:grid-cols-12 gap-6 items-center relative z-10">
                    <div className="lg:col-span-5 flex items-center gap-6">
                      <span
                        className="font-mono text-xs transition-colors duration-500"
                        style={{ color: isHovered ? "var(--accent)" : "#6b6860" }}
                      >
                        {cap.num}
                      </span>
                      <div
                        className="p-3 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.05)",
                          color: isHovered ? accentColor : "#71717a",
                          borderColor: isHovered ? "rgba(255,255,255,0.12)" : undefined,
                          boxShadow: isHovered ? `0 0 20px ${accentColor}18` : "none",
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <h3
                        className="font-display font-bold text-xl md:text-2xl transition-all duration-500 group-hover:text-white group-hover:-skew-x-8 inline-block origin-left"
                        style={{ color: "#F5F5F5" }}
                      >
                        {cap.name}
                      </h3>
                    </div>

                    <div className="lg:col-span-4">
                      <p
                        className="text-sm font-sans leading-relaxed transition-colors duration-500"
                        style={{ color: isHovered ? "#a1a1aa" : "#71717a" }}
                      >
                        {cap.description}
                      </p>
                    </div>

                    <div className="lg:col-span-3 flex flex-wrap gap-1.5 lg:justify-end">
                      {cap.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className="font-mono px-3 py-1 rounded-lg transition-all duration-500 relative z-10"
                          style={{
                            fontSize: "10px",
                            borderColor: isHovered ? "rgba(255,255,255,0.13)" : "rgba(255,255,255,0.07)",
                            border: "1px solid",
                            color: isHovered ? "var(--text)" : "var(--muted)",
                            background: isHovered ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
                            boxShadow: isHovered ? `0 0 10px ${accentColor}14` : "none",
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Expanding detail panel */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                      marginTop: isHovered ? 18 : 0,
                    }}
                    transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pl-16 relative z-10"
                  >
                    <p className="text-xs font-sans tracking-wide max-w-2xl" style={{ color: `${accentColor}d0` }}>
                      // {cap.details}
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px w-full overflow-hidden pointer-events-none z-20">
        <div
          className="h-px w-[65%] mx-auto"
          style={{
            background: "linear-gradient(to right, transparent, rgba(232,255,0,0.22), transparent)",
            boxShadow: "0 0 10px rgba(232,255,0,0.35)",
          }}
        />
      </div>
    </section>
  )
}

export default Skills
