import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const skills = {
  engineering: ['React', 'JavaScript', 'Python', 'Vite', 'REST APIs', 'Git'],
  ai: ['PyTorch', 'YOLOv9', 'OpenCV', 'Computer Vision', 'Data Workflows'],
  design: ['Visual Identity', 'Editorial Layout', 'Typography', 'Motion Direction'],
}

const strongestProjects = projects.slice(0, 3)

function SectionHeading({ index, children }) {
  return (
    <div className="mb-8 flex items-center gap-4 border-b border-[#222] pb-4">
      <span className="font-mono text-xs text-[#FF3B30]">{index}</span>
      <h2 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#F2F2F2]">
        {children}
      </h2>
    </div>
  )
}

export default function Career() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen bg-[#080808] pb-24 pt-32 text-[#F2F2F2]"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <header className="grid gap-10 border-b border-[#292929] pb-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF3B30]">
              Career profile // 2026
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-8xl">
              Mohamed
              <br />
              Shaheem
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-sm uppercase leading-relaxed tracking-wide text-[#A0A0A0]">
              AI developer × graphic designer building intelligent systems and considered digital
              experiences.
            </p>
          </div>
          <aside className="border-l border-[#292929] pl-6 font-mono text-xs uppercase tracking-widest text-[#A0A0A0] lg:pb-1">
            <p className="mb-3 text-white">Current focus</p>
            <p className="leading-relaxed">
              AI-assisted workflows, computer vision, frontend systems, and visual identity.
            </p>
            <a
              className="mt-6 inline-block text-[#4A7CFF] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7CFF]"
              href="mailto:hello@shaheem.dev?subject=Career%20opportunity"
            >
              Available for the right opportunity ↗
            </a>
          </aside>
        </header>

        <section className="py-16">
          <SectionHeading index="01">Selected systems</SectionHeading>
          <div className="grid gap-px overflow-hidden border border-[#292929] bg-[#292929] md:grid-cols-3">
            {strongestProjects.map((project, index) => (
              <Link
                key={project.id}
                to={project.route}
                className="group flex min-h-64 flex-col justify-between bg-[#111] p-6 transition-colors hover:bg-[#171717] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4A7CFF]"
              >
                <div>
                  <span className="font-mono text-xs text-[#FF3B30]">0{index + 1}</span>
                  <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#4A7CFF]">
                    {project.title}
                  </h3>
                  <p className="mt-4 font-mono text-xs leading-relaxed text-[#A0A0A0]">
                    {project.subtitle}
                  </p>
                </div>
                <span className="mt-6 font-mono text-xs uppercase tracking-widest text-[#A0A0A0]">
                  View case study →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-14 border-t border-[#292929] py-16 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <SectionHeading index="02">Technical toolkit</SectionHeading>
            <div className="grid gap-8 sm:grid-cols-3">
              {Object.entries(skills).map(([area, items]) => (
                <div key={area}>
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#A0A0A0]">
                    {area}
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-white">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#292929] bg-[#111] p-6">
            <SectionHeading index="03">Credentials</SectionHeading>
            <p className="font-mono text-sm leading-relaxed text-[#A0A0A0]">
              Detailed education, certifications, and a current résumé are available directly on
              request.
            </p>
            <a
              href="mailto:hello@shaheem.dev?subject=Résumé%20request"
              className="mt-8 inline-flex min-h-11 items-center border border-[#4A7CFF] px-4 font-mono text-xs font-bold uppercase tracking-widest text-[#F2F2F2] transition-colors hover:bg-[#4A7CFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request résumé →
            </a>
          </div>
        </section>

        <section className="flex flex-col items-start justify-between gap-8 border-t border-[#292929] py-16 md:flex-row md:items-end">
          <div>
            <SectionHeading index="04">Contact</SectionHeading>
            <a
              href="mailto:hello@shaheem.dev"
              className="font-display text-3xl font-bold text-white hover:text-[#FF3B30] md:text-5xl"
            >
              hello@shaheem.dev
            </a>
          </div>
          <div className="flex gap-5 font-mono text-xs uppercase tracking-widest">
            <a
              href="https://github.com/mohamedshaheemkp"
              target="_blank"
              rel="noreferrer"
              className="text-[#A0A0A0] hover:text-white"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-shaheem-91a895331"
              target="_blank"
              rel="noreferrer"
              className="text-[#A0A0A0] hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </div>
    </motion.main>
  )
}
