import { motion } from "framer-motion"
import designs from "../data/designs"

const DesignShowcase = () => {
  return (
    <section id="designs" className="relative z-10 py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Design Showcase
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Creative
            <span className="text-cyan-400"> Works</span>
          </h2>

        </motion.div>

        {/* Gallery */}
        <div className="grid md:grid-cols-2 gap-8">

          {designs.map((design, index) => (

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
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />

              {/* Text */}
              <div className="absolute bottom-8 left-8">

                <h3 className="text-2xl font-bold">
                  {design.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default DesignShowcase