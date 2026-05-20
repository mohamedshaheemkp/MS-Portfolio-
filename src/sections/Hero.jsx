import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Background Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">

        {/* Small Intro */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-6"
        >
          Welcome To My Portfolio
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
            SHAHEEM
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 font-light"
        >
          AI Developer • Graphic Designer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-8 text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg"
        >
          I build intelligent AI systems, futuristic web experiences,
          and visually impactful creative designs that blend
          technology with creativity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
        >

          <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 hover:shadow-cyan-400/40 hover:shadow-2xl transition duration-300">
            View Projects
          </button>

          <button className="px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300">
            Contact Me
          </button>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 2,
          duration: 1.5,
          repeat: Infinity
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2" />
        </div>
      </motion.div>

    </section>
  )
}

export default Hero