import { Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

import Hero from "./sections/Hero"
import CoreEngine from "./sections/CoreEngine"
import AgriAIShowcase from "./sections/AgriAIShowcase"
import SystemsArchive from "./sections/SystemsArchive"
import DesignCabinet from "./sections/DesignCabinet"
import Contact from "./sections/Contact"

import Systems from "./pages/Systems"
import DesignArchive from "./pages/DesignArchive"

function HomePage() {
  return (
    <main className="relative overflow-x-hidden min-h-screen bg-bg">
      <Hero />
      <CoreEngine />
      <AgriAIShowcase />
      <SystemsArchive />
      <DesignCabinet />
      <Contact />
    </main>
  )
}

function App() {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/design" element={<DesignArchive />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
