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
    <section id="skills" className="relative py-20 md:py-[120px] px-6 md:px-12 lg:px-20 overflow-hidden bg-[#050505]">
      
      {/* Subtle Background Lighting Accent */}
      <Parallax speed={-0.12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)" }} />

      {/* Section label */}
      <ScrollReveal direction="left" distance={30} duration={0.7} className="flex items-center gap-4 mb-20">
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>02</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>Capabilities</span>
      </ScrollReveal>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <ScrollReveal variant="skew" distance={60} className="mb-20">
          <h2
            className="font-display font-bold heading-section text-[clamp(32px,5vw,56px)] max-w-3xl text-white"
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
            const rowColor = index % 2 === 0 ? "rgba(0, 240, 255, 0.012)" : "rgba(168, 85, 247, 0.012)";
            const accentColor = index % 2 === 0 ? "var(--accent)" : "var(--accent3)";

            return (
              <ScrollReveal
                key={cap.num}
                variant="blur"
                delay={index * 0.05}
                distance={20}
                duration={0.45}
              >
                <div
                  className="group relative flex flex-col py-12 px-4 md:px-8 cursor-pointer transition-all duration-300 border-b border-white/10 overflow-hidden"
                  style={{
                    background: isHovered ? rowColor : "transparent",
                    willChange: "background, padding"
                  }}
                  onMouseEnter={() => setActiveRow(index)}
                  onMouseLeave={() => setActiveRow(null)}
                >
                  {/* Glowing Left Indicator Line */}
                  <div 
                    className="absolute left-0 top-0 h-full w-0.5 transition-all duration-300"
                    style={{ 
                      background: accentColor, 
                      opacity: isHovered ? 1 : 0,
                      boxShadow: isHovered ? `0 0 15px ${accentColor}` : "none"
                    }} 
                  />

                  {/* Animated Neural SVG Network Paths behind active row */}
                  <AnimatePresence>
                    {isHovered && (
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.16] z-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        {/* Main central spine */}
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
                        {/* Branch 1 */}
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
                        {/* Branch 2 */}
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

                        {/* Moving signal nodes traversing the branches once on hover */}
                        <motion.circle cx="50" cy="60" r="3" fill={accentColor}
                          animate={{
                            cx: [50, 300, 600, 1150],
                            cy: [60, 32, 60, 60],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <motion.circle cx="250" cy="48" r="2.5" fill="var(--accent3)"
                          animate={{
                            cx: [250, 450, 750],
                            cy: [48, 72, 35],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                        />

                        {/* Pulsing junction nodes using high-performance CSS animation */}
                        <circle cx="250" cy="48" r="4" fill={accentColor} className="animate-pulse" />
                        <circle cx="600" cy="60" r="5" fill="var(--accent3)" className="animate-pulse" />
                        <circle cx="750" cy="35" r="3.5" fill={accentColor} className="animate-pulse" />
                      </svg>
                    )}
                  </AnimatePresence>

                  {/* Main Content Layout */}
                  <div className="grid lg:grid-cols-12 gap-6 items-center relative z-10">
                    
                    {/* Left Side: Number, Icon, Name */}
                    <div className="lg:col-span-5 flex items-center gap-6">
                      <span className="font-mono text-xs text-[#6b6860] group-hover:text-cyan-400 transition-colors duration-500">
                        {cap.num}
                      </span>
                      <div 
                        className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl text-zinc-500 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                        style={{
                          color: isHovered ? accentColor : "",
                          borderColor: isHovered ? "rgba(255, 255, 255, 0.15)" : "",
                          boxShadow: isHovered ? `0 0 20px ${accentColor}18` : "none"
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-[#F5F5F5] transition-all duration-500 group-hover:text-white group-hover:-skew-x-8 inline-block origin-left">
                        {cap.name}
                      </h3>
                    </div>

                    {/* Middle: Short Description */}
                    <div className="lg:col-span-4">
                      <p className="text-sm text-zinc-400 group-hover:text-zinc-300 font-sans leading-relaxed transition-colors duration-500">
                        {cap.description}
                      </p>
                    </div>

                    {/* Right Side: Interactive Skill Chips with active state glow */}
                    <div className="lg:col-span-3 flex flex-wrap gap-1.5 lg:justify-end">
                      {cap.tags.map((tag) => (
                        <motion.span 
                          key={tag}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className="font-mono text-[10px] px-3 py-1 border rounded-lg transition-all duration-500 relative z-10"
                          style={{
                            borderColor: isHovered ? `rgba(255, 255, 255, 0.15)` : "rgba(255, 255, 255, 0.08)",
                            color: isHovered ? "var(--text)" : "var(--muted)",
                            background: isHovered ? `rgba(255,255,255,0.03)` : "rgba(255, 255, 255, 0.01)",
                            boxShadow: isHovered ? `0 0 10px ${accentColor}15` : "none"
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                  </div>

                  {/* Expanding Extra Details Panel on Hover */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                      marginTop: isHovered ? 18 : 0
                    }}
                    transition={{ duration: 0.344, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Bottom Soft transition & Glow Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black backdrop-blur-[2px] pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px w-full overflow-hidden pointer-events-none z-20">
        <div 
          className="h-px w-[65%] mx-auto bg-gradient-to-r from-transparent via-[#e8ff00]/25 to-transparent" 
          style={{ boxShadow: "0 0 10px rgba(232, 255, 0, 0.4)" }}
        />
      </div>
    </section>
  )
}

export default Skills
