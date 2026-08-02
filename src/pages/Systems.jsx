import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Systems() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen overflow-x-hidden bg-bg text-text-primary"
    >
      <motion.div layoutId="registry-container" className="absolute inset-0 z-0 bg-surface" />
      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[1600px] px-6 pb-32 pt-24 md:px-12 md:pt-32 lg:px-24">
        <header className="mb-16 flex items-end justify-between border-b border-border pb-8 md:mb-24">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-text-secondary">
              Index
            </span>
            <h1 className="text-4xl font-bold md:text-6xl">Systems Archive</h1>
          </div>
          <Link
            to="/"
            className="font-mono text-xs uppercase tracking-widest text-text-secondary transition-colors hover:text-white"
          >
            [ Close × ]
          </Link>
        </header>
        <div className="relative flex w-full flex-col gap-16 md:flex-row">
          <div className="flex w-full flex-col border-t border-border md:w-2/3">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={project.route}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                className="group flex flex-col border-b border-border py-8 transition-opacity duration-500 md:flex-row md:items-center"
                style={{ opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.25 : 1 }}
              >
                <span className="mb-4 w-16 font-mono text-sm text-text-secondary md:mb-0">
                  0{index + 1}
                </span>
                <h2 className="flex-1 text-3xl font-bold transition-transform duration-500 group-hover:translate-x-4 md:text-5xl">
                  {project.title}
                </h2>
                <span className="hidden w-48 justify-end font-mono text-xs uppercase tracking-widest text-text-secondary lg:flex">
                  {project.category}
                </span>
              </Link>
            ))}
          </div>
          <aside className="sticky top-32 hidden h-[600px] w-1/3 md:block">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 flex flex-col border-l border-border pl-12"
                style={{ pointerEvents: hoveredIndex === index ? 'auto' : 'none' }}
              >
                <div className="mb-8 h-48 overflow-hidden border border-border bg-bg">
                  {project.images[0] ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-80"
                    />
                  ) : null}
                </div>
                <p className="mb-10 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                <dl className="space-y-6">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">
                      Tech stack
                    </dt>
                    <dd className="mt-1 text-lg">{project.tech.slice(0, 3).join(' / ')}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">
                      Key metric
                    </dt>
                    <dd className="mt-1 text-lg">
                      {project.metrics[0].value}
                      {project.metrics[0].suffix} {project.metrics[0].label}
                    </dd>
                  </div>
                </dl>
              </motion.div>
            ))}
          </aside>
        </div>
      </div>
    </motion.main>
  )
}
