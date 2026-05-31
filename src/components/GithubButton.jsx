import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function GithubButton() {
  return (
    <motion.a
      href="https://github.com/mohamedshaheemkp"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-12 w-12 items-center justify-center cursor-pointer transition-all duration-300"
      whileHover={{ y: -2 }}
      transition={{
        duration: 0.34,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Rotating Background */}
      <div
        className="
          absolute inset-0
          rounded-[10px]
          bg-[#181818]
          pointer-events-none
          transition-transform duration-300
          origin-bottom
          group-hover:rotate-[35deg]
          z-0
        "
      />

      {/* Foreground Container */}
      <div
        className="
          relative z-10
          flex h-full w-full items-center justify-center
          rounded-[10px]
          border border-[#9c9c9c]/45
          bg-black/20
          backdrop-blur-none
          transition-all duration-300
          group-hover:bg-[#9c9c9c]/47
          group-hover:backdrop-blur-[4px]
        "
      >
        <FaGithub
          size={20}
          className="
            text-white
            transition-opacity duration-300
            group-hover:opacity-90
          "
        />
      </div>
    </motion.a>
  );
}
