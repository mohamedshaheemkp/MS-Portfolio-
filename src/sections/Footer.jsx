import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-20 px-6 bg-black overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between gap-16"
        >
          {/* Left */}
          <div className="max-w-2xl">
            <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-6">
              Mohamed Shaheem
            </p>

            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Building intelligent digital experiences with AI and modern development.
            </h2>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              Focused on creating immersive web experiences,
              AI-powered systems, and visually refined digital products.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between">
            {/* Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/mohamedshaheemkp"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/mohamed-shaheem-91a895331"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://instagram.com/mhd_shm__"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                <FaInstagram size={22} />
              </a>
            </div>

            {/* Bottom */}
            <div className="mt-16">
              <p className="text-gray-500 text-sm">
                © 2026 Mohamed Shaheem. Crafted with React,
                Tailwind, and Framer Motion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}