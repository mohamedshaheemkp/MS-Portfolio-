import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import SmoothScroll from "./components/SmoothScroll"
import ScrollProgress from "./components/ScrollProgress"
import PageLoader from "./components/PageLoader"
import CustomCursor from "./components/CustomCursor"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

const Statement      = lazy(() => import("./sections/Statement"))
const About          = lazy(() => import("./sections/About"))
const Skills         = lazy(() => import("./sections/Skills"))
const Projects       = lazy(() => import("./sections/Projects"))
const DesignShowcase = lazy(() => import("./sections/DesignShowcase"))
const Contact        = lazy(() => import("./sections/Contact"))
const Footer         = lazy(() => import("./sections/Footer"))

const SmartFolderPage = lazy(() => import("./pages/SmartFolderPage"))
const AgriAIPage      = lazy(() => import("./pages/AgriAIPage"))
const PortfolioPage   = lazy(() => import("./pages/PortfolioPage"))

function HomePage() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <main
        className="relative overflow-x-hidden min-h-screen"
        style={{ background: "var(--ink)", color: "var(--text-primary)" }}
      >
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <Statement />
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
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App

// Legacy export kept for any component importing this
export const motionTiming = {
  fast: 0.22,
  normal: 0.45,
  slow: 0.7,
  ease: [0.25, 0.1, 0.25, 1],
}
