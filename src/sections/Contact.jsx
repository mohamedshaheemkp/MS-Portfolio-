import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let’s Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Interested in AI development, modern web experiences,
            or creative design work? Let’s connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-cyan-500/20">
                  <FiMail size={24} className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Email
                  </h3>

                  <a
                    href="mailto:mohamedshaheemkp74@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    mohamedshaheemkp74@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-cyan-500/20">
                  <FiMapPin size={24} className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Connect With Me
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/mohamedshaheemkp"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-cyan-500/20 transition"
                >
                  <FaGithub size={24} className="text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mohamed-shaheem-91a895331"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-cyan-500/20 transition"
                >
                  <FaLinkedin size={24} className="text-white" />
                </a>

                <a
                  href="https://instagram.com/mhd_shm__"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-cyan-500/20 transition"
                >
                  <FaInstagram size={24} className="text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-6"
          >
            <div>
              <label className="block text-gray-300 mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl transition"
            >
              Send Message
              <FiSend size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}