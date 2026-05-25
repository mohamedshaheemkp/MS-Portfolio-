import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { useState, useEffect } from "react";

const ProjectImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative overflow-hidden" style={{ borderRadius: '2px' }}>
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 w-full flex items-center gap-2 px-5 py-3 z-20"
        style={{ background: 'rgba(15,15,15,0.9)', borderBottom: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
        <div className="flex-1 mx-4 px-4 py-1 font-mono text-xs text-center"
          style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '2px', color: 'var(--muted)', maxWidth: '200px', margin: '0 auto' }}>
          {title.toLowerCase().replace(' ', '-')}.app
        </div>
      </div>

      <div className="relative w-full group/img pt-10" style={{ height: '60vh', maxHeight: '600px' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} screenshot`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.02]"
            style={{ filter: 'saturate(0.9) contrast(1.05)' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 50%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(232,255,0,0.04) 0%, transparent 50%)' }} />
      </div>

      {images && images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)}
              className="transition-all duration-300"
              style={{
                height: '3px', borderRadius: '1px',
                width: i === currentIndex ? '24px' : '6px',
                background: i === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.2)'
              }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-40 px-6 md:px-12 lg:px-20">

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>03</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>Selected Work</span>
      </motion.div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="overflow-hidden mb-24">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black leading-[0.92]"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: 'var(--text)' }}
          >
            Things I've<br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>actually built.</span>
          </motion.h2>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Project number + category */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
                  {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent2)' }}>
                  {project.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative group" style={{ border: '1px solid var(--border)', borderRadius: '2px' }}>
                <ProjectImageCarousel images={project.images} title={project.title} />
              </div>

              {/* Details row */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-10 pt-10"
                style={{ borderTop: '1px solid var(--border)' }}>

                <div className="lg:w-5/12">
                  <h3 className="font-display font-black leading-tight transition-all duration-300 hover:italic"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}>
                    {project.title}
                  </h3>
                </div>

                <div className="lg:w-7/12 space-y-8">
                  <p className="text-base leading-relaxed" style={{ color: 'var(--muted2)', fontFamily: 'var(--font-sans)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="font-mono text-xs px-3 py-1.5"
                        style={{ border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: '2px' }}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-8 pt-2">
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="group flex items-center gap-2 font-sans font-semibold text-sm transition-all duration-300"
                      style={{ color: 'var(--muted2)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--muted2)'}
                    >
                      GitHub
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a href={project.live}
                      className="group flex items-center gap-2 font-sans font-semibold text-sm transition-all duration-300"
                      style={{ color: 'var(--accent)' }}
                    >
                      Live Preview
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
