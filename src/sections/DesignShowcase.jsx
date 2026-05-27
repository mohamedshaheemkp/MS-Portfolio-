import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import ScrollReveal from "../components/ScrollReveal"
import Parallax from "../components/Parallax"
import { useState, useEffect, useRef, useCallback } from "react"
import designs from "../data/designs"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Magnetic from "../components/Magnetic"

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
      loading="lazy"
      className={className}
      style={{ ...style, opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
    />
  )
}

const DesignCard = ({ design, index, height, onOpen }) => {
  const cardRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = Array.isArray(design.image) ? design.image : [design.image]

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => setCurrentIndex(i => (i + 1) % images.length), 3500)
    return () => clearInterval(interval)
  }, [images.length])

  // 3D Tilt Coordinates
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 })

  // Interactive Glow spotlight coordinates
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], ["0%", "100%"]), { stiffness: 120, damping: 20 })
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], ["0%", "100%"]), { stiffness: 120, damping: 20 })

  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const relativeX = (clientX - left) / width - 0.5
    const relativeY = (clientY - top) / height - 0.5
    
    x.set(relativeX)
    y.set(relativeY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  const isCool = index % 2 === 0
  const glowColor = isCool ? "rgba(0, 240, 255, 0.22)" : "rgba(236, 72, 153, 0.22)"

  return (
    <ScrollReveal variant="scale" delay={index * 0.08} distance={40} duration={0.9}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -10, scale: 1.025 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1200,
          borderColor: hovered ? isCool ? "rgba(0, 240, 255, 0.2)" : "rgba(236, 72, 153, 0.2)" : "rgba(255, 255, 255, 0.08)",
          boxShadow: hovered 
            ? `0 30px 65px -15px rgba(0,0,0,0.85), 0 0 35px -5px ${glowColor}`
            : "0 20px 45px -25px rgba(0,0,0,0.7)",
          willChange: "transform, border-color, box-shadow"
        }}
        className="relative group overflow-hidden cursor-zoom-in w-full bg-white/[0.02] border rounded-2xl transition-colors duration-700"
        onClick={() => onOpen({ images, startIndex: currentIndex })}
      >
        {/* Spot light overlay */}
        {hovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-10 opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 350px at ${glowX.get()} ${glowY.get()}, ${isCool ? 'rgba(0,240,255,0.06)' : 'rgba(236,72,153,0.06)'}, transparent 80%)`,
            }}
          />
        )}

        <div className="relative overflow-hidden w-full" style={{ height }}>
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} className="absolute inset-0"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ transform: "translateZ(15px)" }}>
              <LazyImage src={images[currentIndex]} alt={`${design.title} ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-700"
                style={{ 
                  filter: hovered ? 'url(#liquid-distortion) saturate(1.05) contrast(1.05) scale(1.04)' : 'saturate(0.95) contrast(1.02) scale(1)',
                  willChange: "filter, transform"
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dynamic Dark Gradient Overlay — subtle, lets image breathe */}
          <div className="absolute inset-0 transition-opacity duration-300 opacity-40 group-hover:opacity-55 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.75) 0%, rgba(5,5,5,0.08) 55%, transparent 100%)' }} />

          {/* Editorial slide-up motion-blurred metadata panel */}
          <motion.div 
            initial={false}
            animate={{ y: hovered ? 0 : 25 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transition-all duration-500 bg-gradient-to-t from-black/50 via-black/20 to-transparent backdrop-blur-[4px]"
            style={{ transform: "translateZ(45px)" }}
          >
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase block mb-1.5" style={{ color: isCool ? 'var(--accent)' : 'var(--accent3)' }}>
              // {design.title.split(' ')[0]} EXPERIMENT
            </span>
            <h3 className="font-display font-black text-xl md:text-2xl mb-1 text-white transition-all duration-500 group-hover:-skew-x-8 inline-block origin-left">
              {design.title}
            </h3>
            <p className="font-mono text-[9px] text-[#6b6860] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {images.length} view{images.length > 1 ? 's' : ''} · Click to expand specs
            </p>
          </motion.div>

          {/* Carousel dots indicator inside card */}
          {images.length > 1 && (
            <div className="absolute top-4 right-4 flex gap-1 z-20">
              {images.map((_, i) => (
                <div key={i} className="transition-all duration-300"
                  style={{ width: i === currentIndex ? '18px' : '5px', height: '3px', borderRadius: '1px', background: i === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.2)' }} />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </ScrollReveal>
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
      <div className="absolute top-6 right-6 z-20">
        <Magnetic strength={0.45}>
          <button onClick={onClose} className="p-2 transition-all duration-500 cursor-pointer"
            style={{ border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--muted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
            <X size={20} />
          </button>
        </Magnetic>
      </div>

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
          <div className="absolute left-4 z-20">
            <Magnetic strength={0.4}>
              <button onClick={e => { e.stopPropagation(); prev() }}
                className="p-3 transition-all duration-500 cursor-pointer"
                style={{ border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--muted)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <ChevronLeft size={24} />
              </button>
            </Magnetic>
          </div>
          <div className="absolute right-4 z-20">
            <Magnetic strength={0.4}>
              <button onClick={e => { e.stopPropagation(); next() }}
                className="p-3 transition-all duration-500 cursor-pointer"
                style={{ border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--muted)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <ChevronRight size={24} />
              </button>
            </Magnetic>
          </div>
        </>
      )}
    </motion.div>
  )
}

const DesignShowcase = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="designs" className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden bg-black">

      {/* Hidden SVG displacement map filter for high-fidelity liquid distortion */}
      <svg className="absolute w-0 h-0 pointer-events-none select-none">
        <defs>
          <filter id="liquid-distortion">
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.04" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Background radial glows with scrolling parallax */}
      <Parallax speed={-0.12} className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.015] blur-[150px] pointer-events-none" />
      <Parallax speed={0.08} className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/[0.012] blur-[180px] pointer-events-none" />

      {/* Section label */}
      <ScrollReveal direction="left" distance={30} duration={0.7} className="flex items-center gap-4 mb-20">
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>04</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>Creative Direction</span>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto">
        
        {/* Header with skew reveal */}
        <ScrollReveal variant="skew" distance={100} duration={1.1} className="mb-24">
          <h2
            className="font-display font-black leading-[0.92]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--text)' }}
          >
            Creative Direction &<br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Visual Experiments.</span>
          </h2>
        </ScrollReveal>

        {/* True Staggered Asymmetrical Masonry Columns */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8 w-full">
            <DesignCard 
              design={designs[0]} 
              index={0} 
              height="520px" 
              onOpen={setLightbox} 
            />
            <DesignCard 
              design={designs[2]} 
              index={2} 
              height="360px" 
              onOpen={setLightbox} 
            />
          </div>

          {/* Right Column (Staggered md:mt-16 to create height offsets) */}
          <div className="flex flex-col gap-8 w-full md:mt-16">
            <DesignCard 
              design={designs[1]} 
              index={1} 
              height="380px" 
              onOpen={setLightbox} 
            />
            <DesignCard 
              design={designs[3]} 
              index={3} 
              height="480px" 
              onOpen={setLightbox} 
            />
          </div>

        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox images={lightbox.images} startIndex={lightbox.startIndex} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
      {/* Bottom Soft transition & Glow Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black backdrop-blur-[2px] pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px w-full overflow-hidden pointer-events-none z-20">
        <div 
          className="h-px w-[65%] mx-auto bg-gradient-to-r from-transparent via-[#a855f7]/25 to-transparent" 
          style={{ boxShadow: "0 0 10px rgba(168, 85, 247, 0.4)" }}
        />
      </div>
    </section>
  )
}

export default DesignShowcase
