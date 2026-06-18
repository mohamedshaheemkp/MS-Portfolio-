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

import StaggeredMenu from "./components/StaggeredMenu"

function App() {
  const location = useLocation();

  return (
    <>
      <StaggeredMenu
        position="right"
        items={[
          { label: 'HOME', ariaLabel: 'Go to home page', link: '/' },
          { label: 'SYSTEMS', ariaLabel: 'View systems', link: '/systems' },
          { label: 'DESIGN', ariaLabel: 'View designs', link: '/design' },
        ]}
        socialItems={[
          { label: 'Twitter', link: 'https://twitter.com' },
          { label: 'GitHub', link: 'https://github.com' },
          { label: 'LinkedIn', link: 'https://linkedin.com' }
        ]}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#888"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#1a1a1a', '#1e3a8a', '#4d7cfe']}
        logoText="Mohamed Shaheem"
        accentColor="#4d7cfe"
        isFixed={true}
      />
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
