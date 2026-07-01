import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CaseStudyLayout({ project, nextProject, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-12">
          <Link to="/systems" className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-white">
            ← Systems archive
          </Link>
          <a href={project.github} target="_blank" rel="noreferrer" className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-white">
            Source ↗
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-48">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[70vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: project.accent }} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-[1400px]">
          <div className="mb-8 font-mono text-xs uppercase tracking-[0.25em]" style={{ color: project.accent }}>
            {project.category} / Case study
          </div>
          <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl lg:text-[9rem]">
            {project.title}
          </h1>
          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-text-secondary md:text-2xl">{project.subtitle}</p>
        </motion.div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-6 md:grid-cols-4 md:px-12">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="border-border px-4 py-10 odd:border-r md:border-r md:px-8 md:last:border-r-0">
              <div className="text-3xl font-bold md:text-4xl">{metric.value}{metric.suffix}</div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">{metric.label}</div>
            </div>
          ))}
          <div className="px-4 py-10 md:px-8">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech) => <span key={tech} className="border border-border px-2 py-1 text-xs">{tech}</span>)}
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">Core stack</div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-2 md:px-12 md:py-36">
        <div>
          <div className="mb-5 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: project.accent }}>Problem</div>
          <p className="text-xl leading-relaxed text-text-secondary">{project.challenge}</p>
        </div>
        <div>
          <div className="mb-5 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: project.accent }}>Solution</div>
          <p className="text-xl leading-relaxed text-text-secondary">{project.description}</p>
        </div>
      </section>

      {children}

      {project.images[0] && (
        <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-12 md:pb-36">
          <img src={project.images[0]} alt={`${project.title} interface`} loading="lazy" className="aspect-video w-full border border-border object-cover" />
        </section>
      )}

      <section className="border-y border-border bg-surface px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: project.accent }}>Architecture</div>
          <p className="max-w-4xl text-2xl leading-relaxed text-text-secondary md:text-3xl">{project.architecture}</p>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {project.features.map((feature, index) => (
              <motion.article key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border border-border bg-bg p-8">
                <div className="mb-10 font-mono text-xs text-text-secondary">0{index + 1}</div>
                <h2 className="text-2xl font-bold">{feature.title}</h2>
                <p className="mt-4 leading-relaxed text-text-secondary">{feature.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-24 md:px-12 md:py-36">
        <div className="mb-14 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: project.accent }}>Process</div>
        <ol className="border-t border-border">
          {project.timeline.map((step, index) => (
            <li key={step.step} className="grid gap-4 border-b border-border py-8 md:grid-cols-[80px_1fr_2fr]">
              <span className="font-mono text-xs text-text-secondary">0{index + 1}</span>
              <h2 className="text-xl font-bold">{step.step}</h2>
              <p className="leading-relaxed text-text-secondary">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: project.accent }}>Outcome</div>
          <p className="mt-8 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{project.results}</p>
          <Link to={nextProject.route} className="mt-20 block border-t border-border pt-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">Next system</span>
            <div className="mt-4 flex items-end justify-between gap-6 text-4xl font-black md:text-7xl">
              <span>{nextProject.title}</span><span>→</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
