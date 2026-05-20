const particles = Array.from({ length: 80 })

const Particles = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {particles.map((_, index) => {

        const size = Math.random() * 3 + 1
        const left = Math.random() * 100
        const duration = Math.random() * 20 + 10
        const delay = Math.random() * 10

        return (
          <span
            key={index}
            className="absolute rounded-full bg-cyan-400/40 animate-particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `100%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        )
      })}

    </div>
  )
}

export default Particles