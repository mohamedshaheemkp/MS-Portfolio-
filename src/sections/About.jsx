import { motion } from "framer-motion"

const stats = [
  { value: "7+", label: "Projects Built" },
  { value: "3+", label: "Years Learning" },
  { value: "10+", label: "Tools & Frameworks" },
  { value: "∞", label: "Ideas in Progress" },
]

const About = () => {
  return (
    <section id="about" className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden">

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>01</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>About</span>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">

        {/* Left — big editorial heading */}
        <div>
          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black leading-[0.92]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--text)' }}
            >
              Passionate<br />
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>about the</span><br />
              intersection.
            </motion.h2>
          </div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-px mt-12"
            style={{ border: '1px solid var(--border)' }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-8 transition-all duration-300 group cursor-default"
                style={{ background: 'var(--surface)', borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
              >
                <div className="font-display font-black text-5xl mb-2 transition-all duration-300 group-hover:italic"
                  style={{ color: 'var(--accent)' }}>
                  {stat.value}
                </div>
                <div className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--muted2)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — text content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 pt-4"
        >
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted2)', fontFamily: 'var(--font-sans)' }}>
            I'm an AI Developer, Engineering Student, and Graphic Designer who lives at the overlap of technology and art. I don't just build things — I craft experiences that feel considered.
          </p>

          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)', fontFamily: 'var(--font-sans)' }}>
            My work spans machine learning systems, modern web interfaces, brand identities, and motion design. Whether it's training a YOLOv9 model or typesetting a poster, the discipline is the same — obsessive attention to what works and why.
          </p>

          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)', fontFamily: 'var(--font-sans)' }}>
            Currently based in Kerala, studying engineering, and building things I'd want to use.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {["Machine Learning", "React", "Python", "UI/UX", "Branding", "FastAPI", "Computer Vision", "Motion Design"].map(tag => (
              <span key={tag} className="font-mono text-xs px-3 py-1.5 tracking-wide"
                style={{ border: '1px solid var(--border)', color: 'var(--muted2)', borderRadius: '2px' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Decorative rule */}
          <div className="flex items-center gap-4 pt-4">
            <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
            <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>Kerala → Everywhere</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
