import { motion, AnimatePresence } from "framer-motion"
import ScrollReveal from "../components/ScrollReveal"
import { useState } from "react"
import { Cpu, Layout, Database, Sparkles, Feather } from "lucide-react"

const capabilities = [
  {
    num: "01",
    name: "AI & Machine Learning",
    description: "Training custom deep learning models, computer vision pipelines, and intelligent system architectures.",
    tags: ["Python", "TensorFlow", "PyTorch", "YOLOv9", "OpenCV"],
    icon: Cpu,
    details: "Specializing in real-time object detection models, neural audio sound synthesizers, and scalable AI system integrations."
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
    details: "Experienced in building robust database systems, data collection scripts, and Dockerized micro-service structures."
  },
  {
    num: "04",
    name: "Brand Ecosystems",
    description: "Forging modern product identities, scalable design tokens, and luxury brand structures.",
    tags: ["Illustrator", "Photoshop", "Typography", "Figma"],
    icon: Sparkles,
    details: "Translating brand ideals into comprehensive design systems, cohesive colors, and highly polished visual products."
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
  const [activeRow, setActiveRow] = useState(null);

  return (
    <section id="skills" className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#050505]">
      
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/[0.015] blur-[120px] rounded-full pointer-events-none" />

      {/* Section label */}
      <ScrollReveal direction="left" distance={30} duration={0.7} className="flex items-center gap-4 mb-20">
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>02</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>Capabilities</span>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal distance={80} duration={1} className="mb-20">
          <h2
            className="font-display font-black leading-[0.92] max-w-3xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--text)' }}
          >
            What I bring to<br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>the table.</span>
          </h2>
        </ScrollReveal>

        {/* Capabilities Capability Matrix Grid */}
        <div className="relative border-t border-white/10">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isHovered = activeRow === index;

            return (
              <div
                key={cap.num}
                className="group relative flex flex-col py-10 px-4 md:px-8 cursor-pointer transition-all duration-500 border-b border-white/10 overflow-hidden"
                style={{
                  background: isHovered ? "rgba(0, 240, 255, 0.015)" : "transparent",
                  willChange: "background, padding"
                }}
                onMouseEnter={() => setActiveRow(index)}
                onMouseLeave={() => setActiveRow(null)}
              >
                {/* Glowing Left Indicator Line */}
                <div 
                  className="absolute left-0 top-0 h-full w-0.5 transition-all duration-500"
                  style={{ 
                    background: 'var(--accent)', 
                    opacity: isHovered ? 1 : 0,
                    boxShadow: isHovered ? "0 0 15px rgba(0, 240, 255, 0.8)" : "none"
                  }} 
                />

                {/* Animated Neural SVG Network Paths behind active row */}
                <AnimatePresence>
                  {isHovered && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12] z-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <motion.path
                        d="M 50 60 Q 300 20, 550 70 T 1000 50 L 1200 60"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="1.2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                      <motion.path
                        d="M 100 80 C 400 110, 700 10, 1100 70"
                        fill="none"
                        stroke="var(--accent3)"
                        strokeWidth="0.8"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.6, ease: "easeOut", delay: 0.1 }}
                      />
                      <motion.circle cx="550" cy="70" r="3.5" fill="var(--accent)" animate={{ scale: [1, 1.8, 1], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 2 }} />
                      <motion.circle cx="1000" cy="50" r="2.5" fill="var(--accent)" animate={{ scale: [1, 2, 1], opacity: [0.5, 0.9, 0.5] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }} />
                    </svg>
                  )}
                </AnimatePresence>

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-12 gap-6 items-center relative z-10">
                  
                  {/* Left Side: Number, Icon, Name */}
                  <div className="lg:col-span-5 flex items-center gap-6">
                    <span className="font-mono text-xs text-zinc-600 group-hover:text-cyan-400 transition-colors duration-500">
                      {cap.num}
                    </span>
                    <div 
                      className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl text-zinc-500 transition-all duration-500"
                      style={{
                        color: isHovered ? "var(--accent)" : "",
                        borderColor: isHovered ? "rgba(0, 240, 255, 0.2)" : "",
                        boxShadow: isHovered ? "0 0 20px rgba(0, 240, 255, 0.08)" : "none"
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-[#F5F5F5] group-hover:italic group-hover:text-white transition-all duration-500">
                      {cap.name}
                    </h3>
                  </div>

                  {/* Middle: Short Description */}
                  <div className="lg:col-span-4">
                    <p className="text-sm text-zinc-400 group-hover:text-zinc-300 font-sans leading-relaxed transition-colors duration-500">
                      {cap.description}
                    </p>
                  </div>

                  {/* Right Side: Interactive Skill Chips */}
                  <div className="lg:col-span-3 flex flex-wrap gap-1.5 lg:justify-end">
                    {cap.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="font-mono text-[10px] px-3 py-1 border border-white/5 rounded-lg bg-white/[0.01] text-zinc-500 transition-all duration-500"
                        style={{
                          borderColor: isHovered ? "rgba(0, 240, 255, 0.15)" : "",
                          color: isHovered ? "var(--text)" : "",
                          background: isHovered ? "rgba(0, 240, 255, 0.02)" : ""
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Expanding Extra Details Panel on Hover */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                    marginTop: isHovered ? 16 : 0
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden pl-16 relative z-10"
                >
                  <p className="text-xs font-sans text-cyan-400/80 tracking-wide max-w-2xl">
                    // {cap.details}
                  </p>
                </motion.div>

              </div>
            )
          })}
        </div>

      </div>

      {/* Bottom Soft transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
    </section>
  )
}

export default Skills
