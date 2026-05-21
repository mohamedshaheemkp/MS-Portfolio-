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
    <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.08)] bg-[#050505]">
      {/* Desktop Glass Container Header */}
      <div className="absolute top-0 left-0 w-full flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10 z-20 backdrop-blur-md">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
      </div>

      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[750px] group/image pt-12">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} screenshot`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/image:scale-[1.03] brightness-75 contrast-110 saturate-[0.85]"
          />
        </AnimatePresence>
        
        {/* Cinematic Tone & Green Glow */}
        <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none z-10"></div>
      </div>
      
      {/* Carousel Indicators */}
      {images && images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-cyan-400" : "w-1.5 bg-white/30"}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm mb-6">
            Selected Work
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Featured projects crafted with AI, design, and modern development.
          </h2>
        </motion.div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col gap-12"
            >
              {/* Massive Image Container */}
              <div className="relative group w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <ProjectImageCarousel images={project.images} title={project.title} />
              </div>

              {/* Showcase Details Layout */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 pt-6">
                
                {/* Title Section */}
                <div className="lg:w-5/12">
                  <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm mb-5 font-medium">
                    {project.category}
                  </p>
                  <h3 className="text-white text-5xl md:text-6xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description & Links */}
                <div className="lg:w-7/12 space-y-10">
                  <p className="text-gray-400 text-xl leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-4">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium tracking-wide"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Showcase Buttons */}
                  <div className="flex flex-wrap gap-10 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 text-gray-300 hover:text-white transition text-lg font-medium"
                    >
                      GitHub
                      <ArrowUpRight
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition text-white"
                      />
                    </a>

                    <a
                      href={project.live}
                      className="group flex items-center gap-3 text-cyan-400 text-lg font-medium"
                    >
                      Live Preview
                      <ArrowUpRight
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                      />
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