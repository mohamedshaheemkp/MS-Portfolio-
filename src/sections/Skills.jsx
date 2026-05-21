import { motion } from "framer-motion"

const capabilities = [
  {
    name: "AI & Machine Learning",
    description: "Developing intelligent models using Python, R, and modern AI frameworks.",
  },
  {
    name: "Frontend Engineering",
    description: "Crafting immersive, interactive web experiences with React and modern UI libraries.",
  },
  {
    name: "Backend & Data",
    description: "Architecting scalable systems and managing complex databases with Java and SQL.",
  },
  {
    name: "Brand Identity",
    description: "Creating unique, memorable logos and cohesive visual branding for modern products.",
  },
  {
    name: "Visual Communication",
    description: "Designing high-impact posters and digital marketing materials that tell a compelling story.",
  },
  {
    name: "Creative Direction",
    description: "Fusing technology with aesthetics to deliver premium, cinematic digital products.",
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm mb-6 font-medium">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight text-white">
            Building intelligent systems through AI, design, and development.
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-10 cursor-pointer transition duration-500 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition duration-300 mb-5">
                {capability.name}
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills