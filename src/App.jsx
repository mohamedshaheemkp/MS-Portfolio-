import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import SmoothScroll from "./components/SmoothScroll"
import ScrollProgress from "./components/ScrollProgress"
import PageLoader from "./components/PageLoader"
import Background from "./components/Background"
import { SpeedInsights } from "@vercel/speed-insights/react"

// Lazy-loaded Sections
const About = lazy(() => import("./sections/About"))
const Skills = lazy(() => import("./sections/Skills"))
const Projects = lazy(() => import("./sections/Projects"))
const DesignShowcase = lazy(() => import("./sections/DesignShowcase"))
const Contact = lazy(() => import("./sections/Contact"))
const Footer = lazy(() => import("./sections/Footer"))

// Case Study Pages
const SmartFolderPage = lazy(() => import("./pages/SmartFolderPage"))
const AgriAIPage = lazy(() => import("./pages/AgriAIPage"))
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"))

function HomePage() {
  return (
    <>
      <PageLoader />
      <Background />
      <main className="relative overflow-x-hidden min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <DesignShowcase />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  )
}

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/smart-folder-organizer" element={<SmartFolderPage />} />
          <Route path="/projects/agri-ai" element={<AgriAIPage />} />
          <Route path="/projects/ai-portfolio" element={<PortfolioPage />} />
        </Routes>
      </Suspense>
      <SpeedInsights />
    </>
  )
}

export default App

