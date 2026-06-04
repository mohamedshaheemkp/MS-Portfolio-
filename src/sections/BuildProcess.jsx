import { motion } from "framer-motion";

const processSteps = [
  { id: "01", name: "Research", desc: "Understanding the problem space and constraints." },
  { id: "02", name: "Design", desc: "Crafting architectural and visual blueprints." },
  { id: "03", name: "Build", desc: "Engineering robust, scalable solutions." },
  { id: "04", name: "Optimize", desc: "Refining performance and user experience." },
  { id: "05", name: "Deploy", desc: "Shipping production-ready systems." },
];

export default function BuildProcess() {
  return (
    <section className="w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 border-b border-border bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex items-start mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            06 — The Methodology
          </span>
        </div>

        <div className="flex flex-col gap-12">
          {processSteps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 pb-12 border-b border-border last:border-b-0"
            >
              <div className="text-4xl md:text-6xl font-display font-bold text-border">
                {step.id}
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl md:text-4xl font-display font-bold text-text-primary">{step.name}</h4>
                <p className="font-body text-text-secondary">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
