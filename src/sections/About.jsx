import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="relative z-10 py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Passionate About
            <span className="text-cyan-400"> AI & Creativity</span>
          </h2>

        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >

            <p className="text-gray-300 leading-relaxed text-lg">
              I’m an AI Developer, Engineering Student, and Graphic Designer
              passionate about building intelligent systems and immersive
              digital experiences.
            </p>

            <p className="text-gray-400 leading-relaxed mt-6">
              My interests include machine learning, modern web development,
              UI/UX design, branding, poster designing, and creative
              problem-solving through technology.
            </p>

            <p className="text-gray-400 leading-relaxed mt-6">
              I enjoy combining technical knowledge with visual creativity
              to create projects that are both functional and visually
              impactful.
            </p>

          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300">

              <h3 className="text-4xl font-black text-cyan-400">
                7+
              </h3>

              <p className="text-gray-300 mt-3">
                Projects Built
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300">

              <h3 className="text-4xl font-black text-cyan-400">
                AI
              </h3>

              <p className="text-gray-300 mt-3">
                Focused Development
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300">

              <h3 className="text-4xl font-black text-cyan-400">
                UI/UX
              </h3>

              <p className="text-gray-300 mt-3">
                Modern Interface Design
              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300">

              <h3 className="text-4xl font-black text-cyan-400">
                Creative
              </h3>

              <p className="text-gray-300 mt-3">
                Graphic Design Skills
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About