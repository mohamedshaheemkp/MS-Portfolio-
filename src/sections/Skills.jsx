import { motion } from "framer-motion"

const capabilities = [
  {
    num: "01",
    name: "AI & Machine Learning",
    description: "Intelligent models, computer vision, and data pipelines using modern AI frameworks.",
    tags: ["Python", "TensorFlow", "PyTorch", "YOLOv9", "OpenCV"],
  },
  {
    num: "02",
    name: "Frontend Engineering",
    description: "Immersive, interactive web experiences with React and motion-rich UI libraries.",
    tags: ["React", "Tailwind", "Framer Motion", "Vite", "TypeScript"],
  },
  {
    num: "03",
    name: "Backend & Data",
    description: "Scalable APIs and database architecture with Python and Java backends.",
    tags: ["FastAPI", "Java", "SQL", "REST APIs", "Docker"],
  },
  {
    num: "04",
    name: "Brand Identity",
    description: "Unique, memorable logos and cohesive visual systems for modern products.",
    tags: ["Illustrator", "Photoshop", "Typography"],
  },
  {
    num: "05",
    name: "Visual Communication",
    description: "High-impact poster and digital marketing design that commands attention.",
    tags: ["Poster Design", "Color Theory", "Editorial", "Print"],
  },
  
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden">

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>02</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>Capabilities</span>
      </motion.div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.92] max-w-3xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--text)' }}
          >
            What I bring to<br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>the table.</span>
          </motion.h2>
        </div>

        {/* Capabilities — horizontal ruled list */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-8 cursor-default transition-all duration-300"
              style={{ borderBottom: '1px solid var(--border)' }}
              onMouseEnter={e => e.currentTarget.style.paddingLeft = '16px'}
              onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}
            >
              {/* Hover accent bar */}
              <div className="absolute left-0 top-0 w-0 h-full transition-all duration-500 group-hover:w-0.5"
                style={{ background: 'var(--accent)' }} />

              {/* Number */}
              <span className="font-mono text-xs w-8 flex-shrink-0 transition-colors duration-300"
                style={{ color: 'var(--muted)' }}>
                {cap.num}
              </span>

              {/* Name */}
              <h3 className="font-display font-bold text-xl md:text-2xl md:w-64 flex-shrink-0 transition-all duration-300 group-hover:italic"
                style={{ color: 'var(--text)' }}>
                {cap.name}
              </h3>

              {/* Description */}
              <p className="flex-1 text-sm leading-relaxed" style={{ color: 'var(--muted2)', fontFamily: 'var(--font-sans)' }}>
                {cap.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:w-72 md:justify-end">
                {cap.tags.map(tag => (
                  <span key={tag} className="font-mono text-xs px-2.5 py-1 transition-all duration-300 group-hover:border-yellow-400/40"
                    style={{ border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: '2px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Bottom Soft transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
    </section>
  )
}

export default Skills
