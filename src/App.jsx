import { Routes, Route } from "react-router-dom"
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
import CustomCursor from "./components/CustomCursor"
import Footer from "./sections/Footer"
import PageLoader from "./components/PageLoader"
import Background from "./components/Background"
import { SpeedInsights } from "@vercel/speed-insights/react"
// I HAVE TEMPORARILY COMMENTED THIS OUT TO ISOLATE THE BUG
// import SmartFolderPage from "./pages/SmartFolderPage"

function HomePage() {
  return (
    <>
      <PageLoader />
      <Background />
      <main className="relative overflow-x-hidden min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <CursorParticles />
        <CustomCursor />
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/projects/smart-folder-organizer" element={<SmartFolderPage />} /> */}
      </Routes>
      <SpeedInsights />
    </>
  )
}

export default App
