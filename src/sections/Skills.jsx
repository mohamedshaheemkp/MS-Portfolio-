import { motion } from "framer-motion"

const skills = [
  "Python",
  "Machine Learning",
  "AI Development",
  "React",
  "SQL",
  "Java",
  "R Programming",
  "Poster Designing",
  "Logo Designing",
]

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            My Skills
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Technologies &
            <span className="text-cyan-400"> Creative Skills</span>
          </h2>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5
              }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 overflow-hidden cursor-pointer"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-400/10 blur-2xl" />

              {/* Content */}
              <div className="relative z-10">

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition duration-300">
                  {skill}
                </h3>

                <div className="mt-6 h-2 bg-white/10 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1
                    }}
                    viewport={{ once: true }}
                    className="h-full bg-cyan-400 rounded-full"
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills