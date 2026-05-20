import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

        {/* Projects */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative group ${
                  index % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-8 ${
                  index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div>
                  <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                    {project.category}
                  </p>

                  <h3 className="text-white text-4xl md:text-5xl font-bold mb-6">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-6 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-white"
                  >
                    GitHub

                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                  </a>

                  <a
                    href={project.live}
                    className="group flex items-center gap-2 text-cyan-400"
                  >
                    Live Preview

                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}