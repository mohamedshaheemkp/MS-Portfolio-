import { lazy, Suspense, useState, useEffect } from "react"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

import Hero from "./sections/Hero"
import IntroSequence from "./components/IntroSequence"

const CoreEngine = lazy(() => import("./sections/CoreEngine"))
const AgriAIShowcase = lazy(() => import("./sections/AgriAIShowcase"))
const SystemsArchive = lazy(() => import("./sections/SystemsArchive"))
const DesignCabinet = lazy(() => import("./sections/DesignCabinet"))
const Contact = lazy(() => import("./sections/Contact"))
const Systems = lazy(() => import("./pages/Systems"))
const DesignArchive = lazy(() => import("./pages/DesignArchive"))
const AgriAIPage = lazy(() => import("./pages/AgriAIPage"))
const SmartFolderPage = lazy(() => import("./pages/SmartFolderPage"))
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"))

function HomePage() {
  return (
    <main className="relative overflow-x-hidden min-h-screen bg-bg">
      <Hero />
      <Suspense fallback={<section className="min-h-screen bg-bg" />}>
        <CoreEngine />
        <AgriAIShowcase />
        <SystemsArchive />
        <DesignCabinet />
        <Contact />
      </Suspense>
    </main>
  )
}

import StaggeredMenu from "./components/StaggeredMenu"
import CustomCursor from "./components/CustomCursor"
import StatusLabel from "./components/StatusLabel"

function App() {
  const location = useLocation();
  const [isIntroComplete, setIsIntroComplete] = useState(() => {
    return sessionStorage.getItem("intro_complete") === "true";
  });

  // Lock body scroll while intro sequence is active
  useEffect(() => {
    if (!isIntroComplete && location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isIntroComplete, location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isIntroComplete && location.pathname === "/" && (
          <IntroSequence 
            onComplete={() => {
              sessionStorage.setItem("intro_complete", "true");
              setIsIntroComplete(true);
            }} 
          />
        )}
      </AnimatePresence>

      <CustomCursor />
      <StatusLabel />
      <StaggeredMenu
        position="right"
        items={[
          { label: 'HOME', ariaLabel: 'Go to home page', link: '/' },
          { label: 'SYSTEMS', ariaLabel: 'View systems', link: '/systems' },
          { label: 'DESIGN', ariaLabel: 'View designs', link: '/design' },
        ]}
        socialItems={[
          { label: 'Instagram', link: 'https://instagram.com/mhd_shm__' },
          { label: 'GitHub', link: 'https://github.com/mohamedshaheemkp' },
          { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mohamed-shaheem-91a895331' }
        ]}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#888"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#1A212B', '#17334A', '#295CFF']}
        logoText="Mohamed Shaheem"
        accentColor="#295CFF"
        isFixed={true}
      />
      <Suspense fallback={<div className="min-h-screen bg-bg" aria-label="Loading page" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/systems/agriai" element={<AgriAIPage />} />
            <Route path="/systems/smart-folder" element={<SmartFolderPage />} />
            <Route path="/systems/portfolio" element={<PortfolioPage />} />
            <Route path="/design" element={<DesignArchive />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
