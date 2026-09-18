import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrambledText from '../components/ScrambledText'
import dashImg from '../assets/Agri Ai/agri-dash.webp'
import liveImg from '../assets/Agri Ai/agri-live.webp'

const steps = [
  {
    label: 'STAGE 01 — INPUT INGESTION',
    title: 'Camera Feed Ingestion',
    desc: 'Simulated edge camera stream capturing foliage imagery at native resolution. Handles variable daylight and leaf orientation.',
  },
  {
    label: 'STAGE 02 — AI INFERENCE',
    title: 'YOLOv9 Anomaly Detection',
    desc: 'Edge-optimized PyTorch model parsing feature maps to bound leaf pathology coordinates (e.g. Foliar Rust) under ~12ms GPU latency.',
  },
  {
    label: 'STAGE 03 — TELEMETRY SYNC',
    title: 'Actionable Advisory Output',
    desc: 'FastAPI microservice formats detection payloads into React dashboard overlays, presenting targeted agronomic treatment recommendations.',
  },
]

export default function AgriAIShowcase() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoplay])

  const handleStepSelect = (index) => {
    setActiveStep(index)
    setIsAutoplay(false)
  }

  const renderVisual = () => {
    switch (activeStep) {
      case 0:
        return (
          <motion.div
            key="step-input"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            {/* Raw Image Feed */}
            <img
              src={liveImg}
              alt="Raw Stream Input"
              className="w-full h-full object-cover grayscale-[40%] contrast-[95%] opacity-70 transition-all duration-500"
            />
            {/* Ambient scan grid */}
            <div className="absolute inset-0 agri-grid-overlay pointer-events-none"></div>

            {/* REC label */}
            <div className="absolute top-6 left-6 font-mono text-[10px] text-red-500 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-red-500/20 tracking-widest uppercase flex items-center gap-2 rounded">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              STREAM_RAW // FEED_NODE_01
            </div>

            {/* Telemetry info */}
            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/50 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 tracking-widest uppercase flex flex-col gap-1 rounded">
              <div>FRAME INGESTION: 1920x1080 @ 30FPS</div>
              <div>CLASSIFICATION MODE: FOLIAGE ANOMALY</div>
            </div>

            {/* Target Reticle in Center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 border border-white/20 relative rounded-full">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20"></div>
              </div>
            </div>
          </motion.div>
        )
      case 1:
        return (
          <motion.div
            key="step-analysis"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            {/* Analyzed Image Feed */}
            <img
              src={liveImg}
              alt="AI Edge Detection Analysis"
              className="w-full h-full object-cover transition-all duration-500 scale-102"
            />
            {/* Scanning Line */}
            <div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#14B8C4] to-transparent pointer-events-none agri-scan-line"
              style={{ boxShadow: '0 0 10px #14B8C4, 0 0 20px #14B8C4' }}
            />

            {/* Scanning grid */}
            <div className="absolute inset-0 agri-grid-overlay-active pointer-events-none"></div>

            {/* Inference active label */}
            <div className="absolute top-6 left-6 font-mono text-[10px] text-[#14B8C4] bg-black/80 backdrop-blur-md px-3 py-1.5 border border-[#14B8C4]/20 tracking-widest uppercase flex items-center gap-2 rounded">
              <span className="w-2 h-2 rounded-full bg-[#14B8C4] animate-ping"></span>
              INFERENCE_ACTIVE // YOLOV9
              <span className="text-[8px] text-[#888] font-mono tracking-widest uppercase ml-1">
                (SIMULATED DEMO)
              </span>
            </div>

            {/* Bounding Box 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute border-2 border-[#14B8C4] rounded pointer-events-none"
              style={{
                top: '22%',
                left: '28%',
                width: '28%',
                height: '22%',
                boxShadow: '0 0 15px rgba(20, 184, 196, 0.3)',
              }}
            >
              <span className="absolute -top-6 left-0 font-mono text-[9px] text-black bg-[#14B8C4] px-2 py-0.5 rounded tracking-wider uppercase font-bold">
                Foliar Rust // Bounding Box
              </span>
            </motion.div>

            {/* Telemetry info */}
            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-[#14B8C4] bg-black/80 backdrop-blur-md px-4 py-2 border border-[#14B8C4]/20 tracking-widest uppercase flex flex-col gap-1 rounded">
              <div>MODEL LATENCY: ~12ms (GPU)</div>
              <div>CLASS DETECTED: PUCCINIA GRAMINIS</div>
            </div>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            key="step-output"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            {/* Dashboard Output */}
            <img
              src={dashImg}
              alt="Dashboard Analytics Control"
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Status Label */}
            <div className="absolute top-6 left-6 font-mono text-[10px] text-white bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 tracking-widest uppercase flex items-center gap-2 rounded">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              TELEMETRY_SYNCED // DASHBOARD
            </div>

            {/* Diagnostic Card Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-6 right-6 font-mono text-[10px] text-white bg-black/90 backdrop-blur-md p-6 border border-white/10 tracking-widest flex flex-col gap-4 rounded-lg max-w-[280px] shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-2 text-[#14B8C4] font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#14B8C4] animate-pulse"></span>
                  DIAGNOSIS ACTIVE
                </div>
                <span className="text-[8px] text-[#666] font-mono tracking-widest uppercase">
                  DEMO
                </span>
              </div>
              <div className="w-full h-[1px] bg-white/10"></div>

              <div>
                <span className="text-[#888] block text-[8px] mb-1">ANOMALY TYPE</span>
                <span className="text-white font-bold text-xs uppercase">
                  Puccinia graminis (Rust)
                </span>
              </div>

              <div>
                <span className="text-[#888] block text-[8px] mb-1">RECOMMENDED ADVISORY</span>
                <span className="text-[#14B8C4] font-bold uppercase text-[10px]">
                  Targeted organic copper treatment
                </span>
              </div>

              <div>
                <span className="text-[#888] block text-[8px] mb-1">PIPELINE STACK</span>
                <span className="text-white font-bold">YOLOv9 + FastAPI + React</span>
              </div>
            </motion.div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <section
      id="agriai-showcase"
      className="w-full py-28 md:py-40 bg-[#080808] overflow-hidden relative border-t border-[#1F1F1F]"
    >
      <style>{`
        @keyframes agriScan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .agri-scan-line {
          animation: agriScan 4s ease-in-out infinite;
        }
        .agri-grid-overlay {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        .agri-grid-overlay-active {
          background-size: 20px 20px;
          background-image: 
            linear-gradient(to right, rgba(20, 184, 196, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(20, 184, 196, 0.05) 1px, transparent 1px);
        }
      `}</style>

      {/* 01 Section Tag & Title Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <div className="flex items-center justify-between mb-8 border-b border-[#1A1A1A] pb-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#14B8C4]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#888]">
              03 — FLAGSHIP SYSTEM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
              REAL IMPLEMENTATION + DEMO
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-[12vw] md:text-[7vw] font-display font-black leading-[0.85] text-white uppercase tracking-tighter">
              AGRIAI
            </h2>
            <p className="font-mono text-sm md:text-base text-[#14B8C4] uppercase tracking-widest mt-4">
              Real-Time Crop Disease Detection System
            </p>
          </div>

          {/* OPEN CASE STUDY CTA */}
          <Link
            to="/systems/agriai"
            className="inline-flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-black bg-[#14B8C4] hover:bg-white px-8 py-4 rounded font-bold transition-all duration-300 shadow-[0_0_25px_rgba(20,184,196,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <span>OPEN CASE STUDY</span>
            <span className="text-base">→</span>
          </Link>
        </motion.div>
      </div>

      {/* 02 Pipeline Interactive Navigation */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#222] bg-[#0E0E0E] rounded-xl p-2 gap-2">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx
            return (
              <button
                key={idx}
                onClick={() => handleStepSelect(idx)}
                className={`flex items-center gap-4 text-left p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#151C24] border border-[#14B8C4]/40 shadow-lg'
                    : 'bg-transparent border border-transparent hover:border-[#222]'
                }`}
              >
                <div
                  className={`font-mono text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border ${
                    isActive
                      ? 'border-[#14B8C4] text-[#14B8C4] bg-[#14B8C4]/10'
                      : 'border-[#333] text-[#555]'
                  }`}
                >
                  0{idx + 1}
                </div>
                <div className="flex flex-col">
                  <span
                    className={`font-mono text-[9px] tracking-widest uppercase ${isActive ? 'text-[#14B8C4]' : 'text-[#666]'}`}
                  >
                    {step.label}
                  </span>
                  <span
                    className={`text-sm font-bold tracking-tight mt-0.5 ${isActive ? 'text-white' : 'text-[#888]'}`}
                  >
                    {step.title}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* 03 Viewport View */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <div className="relative aspect-[16/10] md:aspect-video bg-[#0A0A0A] border border-[#222] rounded-xl shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">{renderVisual()}</AnimatePresence>
        </div>

        {/* Step description */}
        <div className="mt-4 px-2">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs text-[#888] leading-relaxed max-w-4xl"
          >
            <span className="text-white font-bold">{steps[activeStep].title}: </span>
            {steps[activeStep].desc}
          </motion.p>
        </div>
      </div>

      {/* 04 Two-Column Concise Problem & Solution */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-[#1F1F1F] pt-12">
          <div>
            <span className="font-mono text-xs text-[#888] uppercase tracking-widest block mb-4">
              01 // THE PROBLEM STATEMENT
            </span>
            <ScrambledText
              className="text-lg md:text-2xl font-body text-[#D4D4D4] leading-relaxed !m-0 !max-w-none p-0 border-none bg-transparent"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Foliage diseases spread quickly across crops when inspection relies solely on periodic
              manual field visits. Early computer vision detection enables early intervention before
              major crop damage occurs.
            </ScrambledText>
          </div>

          <div>
            <span className="font-mono text-xs text-[#14B8C4] uppercase tracking-widest block mb-4">
              02 // THE SYSTEM ARCHITECTURE
            </span>
            <ScrambledText
              className="text-lg md:text-2xl font-body text-[#D4D4D4] leading-relaxed !m-0 !max-w-none p-0 border-none bg-transparent"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              AgriAI combines a PyTorch YOLOv9 neural network model with a Python FastAPI
              microservice to ingest leaf images and render high-precision anomaly overlays directly
              onto a web dashboard.
            </ScrambledText>
          </div>
        </div>
      </div>
    </section>
  )
}
