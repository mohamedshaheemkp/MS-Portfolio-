import { useState, useEffect } from "react"
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
import Antigravity from "./components/Antigravity"
import Footer from "./sections/Footer"
import PageLoader from "./components/PageLoader"
import Background from "./components/Background"
import { SpeedInsights } from "@vercel/speed-insights/react"

// Case Study Pages
import SmartFolderPage from "./pages/SmartFolderPage"
import AgriAIPage from "./pages/AgriAIPage"
import PortfolioPage from "./pages/PortfolioPage"

function HomePage() {
  const [showAntigravity, setShowAntigravity] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowAntigravity(true);
      } else {
        setShowAntigravity(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PageLoader />
      <Background />
      <main className="relative overflow-x-hidden min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <div 
          className="fixed inset-0 z-[2] pointer-events-none w-full h-full transition-opacity duration-[1000ms] mix-blend-screen"
          style={{ opacity: showAntigravity ? 0.35 : 0 }}
        >
          <Antigravity
            count={260}
            magnetRadius={8}
            ringRadius={7.5}
            waveSpeed={0.4}
            waveAmplitude={1.1}
            particleSize={1.3}
            lerpSpeed={0.05}
            color={'#00f0ff'}
            autoAnimate={true}
            particleVariance={0.8}
            rotationSpeed={0.05}
          />
        </div>
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
        <Route path="/projects/smart-folder-organizer" element={<SmartFolderPage />} />
        <Route path="/projects/agri-ai" element={<AgriAIPage />} />
        <Route path="/projects/ai-portfolio" element={<PortfolioPage />} />
      </Routes>
      <SpeedInsights />
    </>
  )
}

export default App
