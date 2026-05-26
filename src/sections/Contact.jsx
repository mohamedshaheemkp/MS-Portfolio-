import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const socials = [
  { icon: FaGithub, href: "https://github.com/mohamedshaheemkp", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohamed-shaheem-91a895331", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/mhd_shm__", label: "Instagram" },
];

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => { setStatus("success"); formRef.current.reset(); })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden bg-black">

      {/* Dynamic Environmental Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-cyan-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-purple-600/[0.015] blur-[140px] rounded-full pointer-events-none" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>05</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>Contact</span>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-20 lg:gap-24 items-center relative z-10">

        {/* Left Column: Cinematic Statement & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start text-left"
        >
          <span className="font-mono text-xs tracking-widest text-[#6b6860] uppercase block mb-6">
            // DIRECT CHANNEL
          </span>

          <h2 className="font-display font-black text-6xl md:text-8xl tracking-tight leading-[0.9] text-white uppercase mb-8">
            Let's build<br />
            something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-[#a855f7] italic font-display">
              Unique.
            </span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-[#9b9892] mb-12 font-sans max-w-lg">
            Open to AI projects, creative visual Designs, UI architecture, and anything that pushes standard design grids. Based in Kerala, working globally.
          </p>

          <div className="space-y-4 mb-12 w-full border-t border-b border-white/5 py-8">
            <a href="mailto:mohamedshaheemkp74@gmail.com"
              className="flex items-center gap-3 group font-sans text-sm md:text-base transition-colors duration-300 text-[#9b9892] hover:text-white"
            >
              <span className="font-mono text-xs w-16 text-[#6b6860]">Email</span>
              <span>mohamedshaheemkp74@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 font-sans text-sm md:text-base text-[#9b9892]">
              <span className="font-mono text-xs w-16 text-[#6b6860]">Location</span>
              <span>Kerala, India</span>
            </div>
          </div>

          {/* Social Icons - Asymmetrical Glass Buttons */}
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="group relative flex items-center justify-center p-3.5 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl hover:scale-105 hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.12)] transition-all duration-300 w-12 h-12 text-[#A1A1AA] hover:text-[#00f0ff]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Minimal Glass Form */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="bg-white/[0.02] backdrop-blur-[20px] border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-white/15 transition-all duration-500 w-full"
        >
          {/* Subtle noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
          />

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div>
              <label className="block font-mono text-[10px] mb-2 tracking-widest text-[#6b6860] uppercase font-bold">
                Your Name
              </label>
              <input 
                name="from_name" 
                type="text" 
                placeholder="Full name" 
                required
                className="w-full bg-transparent border-none border-b border-white/10 focus:border-cyan-400 py-3.5 text-[#F5F5F5] placeholder-[#6b6860] focus:outline-none transition-all duration-300 font-sans text-sm md:text-base"
                onFocus={() => setFocused("from_name")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] mb-2 tracking-widest text-[#6b6860] uppercase font-bold">
                Email Address
              </label>
              <input 
                name="from_email" 
                type="email" 
                placeholder="your@email.com" 
                required
                className="w-full bg-transparent border-none border-b border-white/10 focus:border-cyan-400 py-3.5 text-[#F5F5F5] placeholder-[#6b6860] focus:outline-none transition-all duration-300 font-sans text-sm md:text-base"
                onFocus={() => setFocused("from_email")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] mb-2 tracking-widest text-[#6b6860] uppercase font-bold">
                Message
              </label>
              <textarea 
                name="message" 
                rows={4} 
                placeholder="Tell me about your project..." 
                required
                className="w-full bg-transparent border-none border-b border-white/10 focus:border-cyan-400 py-3.5 text-[#F5F5F5] placeholder-[#6b6860] focus:outline-none transition-all duration-300 font-sans text-sm md:text-base resize-none"
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>

            {status === "success" && (
              <p className="font-mono text-xs text-emerald-400">// Message sent. I'll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-rose-500">// Failed to send. Please try again.</p>
            )}

            <button type="submit" disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-3 py-4 font-sans font-bold text-xs uppercase tracking-wider bg-[#00f0ff] hover:bg-white text-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-500 rounded-xl disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <FiSend size={14} />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Soft transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
    </section>
  );
}
