import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import SmoothScroll from "./components/SmoothScroll"
import ScrollProgress from "./components/ScrollProgress"
import DesignShowcase from "./sections/DesignShowcase"
import Contact from "./sections/Contact"
import CursorParticles from "./components/CursorParticles"
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="relative bg-[#050816] text-white overflow-x-hidden min-h-screen">
      <CursorParticles />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DesignShowcase />
      <Contact />
      <Footer />
    </main>
  )
}

export default App