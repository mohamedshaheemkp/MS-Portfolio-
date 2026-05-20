import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

import projects from "../data/projects"

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            My Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Featured
            <span className="text-cyan-400"> Work</span>
          </h2>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10
              }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-8">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-400 text-black font-medium hover:scale-105 transition duration-300"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects