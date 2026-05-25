import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from "react"
import designs from "../data/designs"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const LazyImage = ({ src, alt, className, style }) => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (!imgRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { imgRef.current.src = src; observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [src])

  return (
    <img ref={imgRef} alt={alt}
      onLoad={() => setLoaded(true)}
      className={className}
      style={{ ...style, opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
    />
  )
}

const DesignCard = ({ design, index, onOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = Array.isArray(design.image) ? design.image : [design.image]

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => setCurrentIndex(i => (i + 1) % images.length), 3500)
    return () => clearInterval(interval)
  }, [images.length])

  const isLarge = index === 0 || index === 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative group overflow-hidden cursor-zoom-in ${isLarge ? 'md:col-span-2' : ''}`}
      style={{ border: '1px solid var(--border)', borderRadius: '2px' }}
      onClick={() => onOpen({ images, startIndex: currentIndex })}
    >
      <div className="relative overflow-hidden" style={{ height: isLarge ? '480px' : '340px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} className="absolute inset-0"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <LazyImage src={images[currentIndex]} alt={`${design.title} ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.2) 50%, transparent 100%)' }} />

        {/* Info on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="font-display font-bold text-xl mb-1" style={{ color: 'var(--text)' }}>{design.title}</h3>
          <p className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
            {images.length} image{images.length > 1 ? 's' : ''} · Click to expand
          </p>
        </div>

        {/* Carousel dots */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 flex gap-1">
            {images.map((_, i) => (
              <div key={i} className="transition-all duration-300"
                style={{ width: i === currentIndex ? '20px' : '5px', height: '3px', borderRadius: '1px', background: i === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.3)' }} />
            ))}
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4 font-mono text-xs px-3 py-1"
          style={{ background: 'rgba(8,8,8,0.7)', color: 'var(--muted2)', borderRadius: '2px', backdropFilter: 'blur(10px)' }}>
          {design.title.split(' ')[0]}
        </div>
      </div>
    </motion.div>
  )
}

const Lightbox = ({ images, startIndex, onClose }) => {
  const [index, setIndex] = useState(startIndex)
  useEffect(() => setIndex(startIndex), [startIndex])

  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = e => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose, prev, next])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'rgba(4,4,4,0.97)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 p-2 transition-all duration-200"
        style={{ border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--muted)' }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
        <X size={20} />
      </button>

      <span className="absolute top-7 left-1/2 -translate-x-1/2 font-mono text-xs" style={{ color: 'var(--muted)' }}>
        {index + 1} / {images.length}
      </span>

      <motion.img key={index} src={images[index]} alt=""
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-h-[85vh] max-w-[88vw] object-contain"
        style={{ borderRadius: '2px' }}
        onClick={e => e.stopPropagation()}
      />

      {images.length > 1 && (
        <>
          <button onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 p-3 transition-all duration-200"
            style={{ border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <ChevronLeft size={24} />
          </button>
          <button onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 p-3 transition-all duration-200"
            style={{ border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </motion.div>
  )
}

const DesignShowcase = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="designs" className="relative py-40 px-6 md:px-12 lg:px-20">

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>04</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>Design Work</span>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black leading-[0.92]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--text)' }}
          >
            Visual work that<br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>speaks first.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {designs.map((design, index) => (
            <DesignCard key={index} design={design} index={index} onOpen={setLightbox} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox images={lightbox.images} startIndex={lightbox.startIndex} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default DesignShowcase
