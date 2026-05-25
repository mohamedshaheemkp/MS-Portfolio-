import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const socials = [
  { icon: FaGithub, href: "https://github.com/mohamedshaheemkp", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohamed-shaheem-91a895331", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/mhd_shm__", label: "Instagram" },
]

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

  const inputStyle = (name) => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === name ? 'var(--accent)' : 'var(--border-hover)'}`,
    color: 'var(--text)',
    padding: '14px 0',
    fontSize: '15px',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.3s',
    borderRadius: 0,
  });

  return (
    <section id="contact" className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden">

      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(232,255,0,0.03) 0%, transparent 70%)' }} />

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

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-24 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden mb-6">
            <h2 className="font-display font-black leading-[0.92]"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: 'var(--text)' }}>
              Let's build<br />
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>something</span><br />
              remarkable.
            </h2>
          </div>

          <p className="text-sm leading-relaxed mb-12" style={{ color: 'var(--muted2)', fontFamily: 'var(--font-sans)' }}>
            Open to AI projects, creative development, design collaborations, and anything that sits at the intersection of art and technology.
          </p>

          <div className="space-y-4 mb-12">
            <a href="mailto:mohamedshaheemkp74@gmail.com"
              className="flex items-center gap-3 group"
              style={{ color: 'var(--muted2)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted2)'}>
              <span className="font-mono text-xs w-16" style={{ color: 'var(--muted)' }}>Email</span>
              <span className="font-sans text-sm transition-colors duration-200">mohamedshaheemkp74@gmail.com</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs w-16" style={{ color: 'var(--muted)' }}>Based in</span>
              <span className="font-sans text-sm" style={{ color: 'var(--muted2)' }}>Kerala, India</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 font-mono text-xs transition-all duration-300"
                style={{ border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: '2px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}>
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {[
            { name: "from_name", label: "Your Name", type: "text", placeholder: "Full name" },
            { name: "from_email", label: "Email Address", type: "email", placeholder: "your@email.com" },
          ].map(({ name, label, type, placeholder }) => (
            <div key={name}>
              <label className="block font-mono text-xs mb-3 tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
                {label}
              </label>
              <input name={name} type={type} placeholder={placeholder} required
                style={inputStyle(name)}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused(null)}
              />
            </div>
          ))}

          <div>
            <label className="block font-mono text-xs mb-3 tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
              Message
            </label>
            <textarea name="message" rows={5} placeholder="Tell me about your project..." required
              style={{ ...inputStyle("message"), resize: 'none', borderBottom: `1px solid ${focused === 'message' ? 'var(--accent)' : 'var(--border-hover)'}` }}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
            />
          </div>

          {status === "success" && (
            <p className="font-mono text-xs" style={{ color: '#4ade80' }}>Message sent. I'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs" style={{ color: '#f87171' }}>Failed to send. Please try again.</p>
          )}

          <button type="submit" disabled={status === "sending"}
            className="w-full flex items-center justify-center gap-3 py-4 font-sans font-semibold text-sm transition-all duration-300"
            style={{ background: 'var(--accent)', color: '#000', borderRadius: '2px', opacity: status === 'sending' ? 0.7 : 1 }}
            onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = '#fff'; }}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <FiSend size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
