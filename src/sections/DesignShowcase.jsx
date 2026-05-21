import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import designs from "../data/designs"

const DesignImage = ({ image, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!Array.isArray(image) || image.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % image.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [image]);

  if (!Array.isArray(image)) {
    return (
      <img
        src={image}
        alt={title}
        className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
      />
    );
  }

  return (
    <div className="relative w-full h-[350px] overflow-hidden bg-black/50">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={image[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
      </AnimatePresence>
      
      {/* Mini dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-none">
        {image.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex ? "w-5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "w-1.5 bg-white/30"
            }`} 
          />
        ))}
      </div>
    </div>
  );
};

const DesignShowcase = () => {
  return (
    <section id="designs" className="relative z-10 py-32 px-6">

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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
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
                <DesignImage image={design.image} title={design.title} />
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