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
import Footer from "./sections/Footer"
import PageLoader from "./components/PageLoader"
import Background from "./components/Background"

function App() {
  return (
    <>
      <PageLoader />
      <Background />
      <main className="relative overflow-x-hidden min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
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
    </>
  )
}

export default App
