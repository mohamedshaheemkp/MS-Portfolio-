import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDownRight, Download } from "lucide-react";
import heroImage from "../assets/hero.webp";

const roles = ["AI Engineer", "Creative Technologist", "Graphic Designer", "ML Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Mouse tracking for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightMask = useMotionTemplate`radial-gradient(circle 400px at ${springX}px ${springY}px, black, transparent)`;

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden flex flex-col justify-between pt-36 pb-16 px-6 md:px-12 lg:px-20 group"
      onMouseMove={handleMouseMove}
    >

      {/* Hero Image Background with Spotlight Cursor Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black">
        {/* Dimmed base image */}
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-top opacity-15"
          style={{ filter: 'grayscale(70%)' }}
        />
        {/* Spotlight revealed image */}
        <motion.div 
          className="absolute inset-0"
          style={{ WebkitMaskImage: spotlightMask, maskImage: spotlightMask }}
        >
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover object-top opacity-50"
            style={{ filter: 'grayscale(10%) contrast(1.1)' }}
          />
          <div className="absolute inset-0 mix-blend-overlay" style={{ background: 'linear-gradient(135deg, rgba(232,255,0,0.4) 0%, transparent 60%, rgba(0,229,255,0.3) 100%)' }} />
        </motion.div>
      </div>

      {/* BG gradient blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="glow-pulse absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(232,255,0,0.06) 0%, transparent 70%)' }} />
        <div className="glow-pulse absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)', animationDelay: '2s' }} />
      </div>

      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex items-center justify-between mb-16 relative z-10"
      >
        <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--muted)' }}>
          Based in Kerala, India
        </span>
        <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--muted)' }}>
          Available for work
          <span className="inline-block w-2 h-2 rounded-full ml-2 align-middle" style={{ background: '#4ade80' }} />
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">

        {/* Giant editorial heading */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-black leading-[0.88] tracking-tight"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              color: 'var(--text)'
            }}
          >
            Mohamed
            <br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Shaheem</span>
          </motion.h1>
        </div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-sm md:text-base" style={{ color: 'var(--muted2)' }}>→</span>
          <span className="font-mono text-sm md:text-base" style={{ color: 'var(--accent2)' }}>
            {displayed}<span className="blink">_</span>
          </span>
        </motion.div>

        {/* Lower section */}
        <div className="max-w-2xl relative z-10">

          {/* description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--muted2)', fontFamily: 'var(--font-sans)' }}>
              Crafting intelligent systems and immersive digital experiences at the intersection of AI engineering and creative design. Kerala → Everywhere.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects"
                className="group flex items-center gap-2 px-6 py-3 font-sans font-semibold text-sm transition-all duration-300"
                style={{ background: 'var(--accent)', color: '#000', borderRadius: '2px' }}
                onMouseEnter={e => e.currentTarget.style.background = '#fff'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >
                View Work
                <ArrowDownRight size={16} />
              </a>

              <a href="/resume.pdf" download
                className="flex items-center gap-2 px-6 py-3 font-sans font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                style={{ border: '1px solid var(--border-hover)', color: 'var(--text)', borderRadius: '2px', background: 'rgba(255,255,255,0.03)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text)'; }}
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 flex items-center gap-4 mt-12"
      >
        <div className="w-8 h-px" style={{ background: 'var(--muted)' }} />
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>Scroll to explore</span>
        <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
      </motion.div>
    </section>
  );
}
