import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import SmoothScroll from "./components/SmoothScroll"
import ScrollProgress from "./components/ScrollProgress"
import DesignShowcase from "./sections/DesignShowcase"
import Particles from "./components/Particles"
import CursorParticles from "./components/CursorParticles"

function App() {
  return (
    <main className="relative bg-[#050816] text-white overflow-x-hidden min-h-screen">
      <Particles />
      <CursorParticles />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DesignShowcase />
    </main>
  )
}

export default App