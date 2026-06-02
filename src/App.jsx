import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import SmoothScroll from "./components/SmoothScroll"
import ScrollProgress from "./components/ScrollProgress"
import PageLoader from "./components/PageLoader"
import Background from "./components/Background"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

// Lazy-loaded Sections — order matches blueprint section architecture
const Statement    = lazy(() => import("./sections/Statement"))
const About        = lazy(() => import("./sections/About"))
const Skills       = lazy(() => import("./sections/Skills"))
const Projects     = lazy(() => import("./sections/Projects"))
const DesignShowcase = lazy(() => import("./sections/DesignShowcase"))
const Contact      = lazy(() => import("./sections/Contact"))
const Footer       = lazy(() => import("./sections/Footer"))

// Case Study Pages
const SmartFolderPage = lazy(() => import("./pages/SmartFolderPage"))
const AgriAIPage      = lazy(() => import("./pages/AgriAIPage"))
const PortfolioPage   = lazy(() => import("./pages/PortfolioPage"))

function HomePage() {
  return (
    <>
      <PageLoader />
      <Background />
      <main
        className="relative overflow-x-hidden min-h-screen"
        style={{ background: "var(--bg)", color: "var(--text)" }}
      >
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        {/* 01 — Hero */}
        <Hero />
        <Suspense fallback={null}>
          {/* 02 — Statement */}
          <Statement />
          {/* 03 — About */}
          <About />
          {/* 04 — Capabilities */}
          <Skills />
          {/* 05 — Projects */}
          <Projects />
          {/* 06 — The Craft */}
          <DesignShowcase />
          {/* 07 — Contact */}
          <Contact />
          {/* 08 — Footer */}
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
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
