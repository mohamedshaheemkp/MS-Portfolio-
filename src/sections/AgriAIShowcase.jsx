import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ScrambledText from '../components/ScrambledText'
import dashImg from '../assets/Agri Ai/agri-dash.webp'
import liveImg from '../assets/Agri Ai/agri-live.webp'

const steps = [
  {
    label: 'STAGE 01 — RAW INPUT',
    title: 'Live Camera Stream Capture',
    desc: 'A simulated edge camera stream capturing crop imagery at 30 FPS. Visual noise, lighting shifts, and perspective distortion are handled dynamically in this illustration.',
  },
  {
    label: 'STAGE 02 — AI ANALYSIS',
    title: 'YOLOv9 Edge Inference',
    desc: 'Inference simulation running under 12ms. The system maps overlapping leaf coordinates, flags microscopic anomalies, and computes detection confidence scores.',
  },
  {
    label: 'STAGE 03 — SYSTEM OUTPUT',
    title: 'Actionable Telemetry Sync',
    desc: 'Mockup of actionable system telemetry synchronized to a client database. The dashboard logs severity metrics, charts localized health trends, and simulates remedy alerts.',
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

            {/* Flashing RED REC label */}
            <div className="absolute top-6 left-6 font-mono text-[10px] text-red-500 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-red-500/20 tracking-widest uppercase flex items-center gap-2 rounded">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              STREAM_RAW // FEED_NODE_01
            </div>

            {/* Telemetry info in corners */}
            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/50 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 tracking-widest uppercase flex flex-col gap-1 rounded">
              <div>RESOLUTION: 1920x1080 @ 30FPS</div>
              <div>SPECTRAL_BAND: RGB (550NM)</div>
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
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#22c55e] to-transparent pointer-events-none agri-scan-line"
              style={{ boxShadow: '0 0 10px #22c55e, 0 0 20px #22c55e' }}
            />

            {/* Scanning grid */}
            <div className="absolute inset-0 agri-grid-overlay-active pointer-events-none"></div>

            {/* Flashing Green Analysing label */}
            <div className="absolute top-6 left-6 font-mono text-[10px] text-emerald-400 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-emerald-500/20 tracking-widest uppercase flex items-center gap-2 rounded">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              INFERENCE_ACTIVE // EDGE_YOLOV9{' '}
              <span className="text-[8px] text-[#666] font-mono tracking-widest uppercase ml-1">
                (SIMULATED)
              </span>
            </div>

            {/* Bounding Box 1 (Foliar Rust) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute border-2 border-emerald-500 rounded pointer-events-none"
              style={{
                top: '22%',
                left: '28%',
                width: '28%',
                height: '22%',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)',
              }}
            >
              <div className="absolute -top-[3px] -left-[3px] w-2 h-2 border-t-2 border-l-2 border-emerald-400"></div>
              <div className="absolute -top-[3px] -right-[3px] w-2 h-2 border-t-2 border-r-2 border-emerald-400"></div>
              <div className="absolute -bottom-[3px] -left-[3px] w-2 h-2 border-b-2 border-l-2 border-emerald-400"></div>
              <div className="absolute -bottom-[3px] -right-[3px] w-2 h-2 border-b-2 border-r-2 border-emerald-400"></div>
              <span className="absolute -top-6 left-0 font-mono text-[9px] text-white bg-emerald-600 px-2 py-0.5 rounded tracking-wider uppercase font-bold">
                Rust // Conf: 98.4%
              </span>
            </motion.div>

            {/* Bounding Box 2 (Aphids) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute border-2 border-red-500 rounded pointer-events-none"
              style={{
                top: '50%',
                left: '58%',
                width: '22%',
                height: '25%',
                boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)',
              }}
            >
              <div className="absolute -top-[3px] -left-[3px] w-2 h-2 border-t-2 border-l-2 border-red-400"></div>
              <div className="absolute -top-[3px] -right-[3px] w-2 h-2 border-t-2 border-r-2 border-red-400"></div>
              <div className="absolute -bottom-[3px] -left-[3px] w-2 h-2 border-b-2 border-l-2 border-red-400"></div>
              <div className="absolute -bottom-[3px] -right-[3px] w-2 h-2 border-b-2 border-r-2 border-red-400"></div>
              <span className="absolute -top-6 left-0 font-mono text-[9px] text-white bg-red-600 px-2 py-0.5 rounded tracking-wider uppercase font-bold">
                Aphids // Conf: 92.1%
              </span>
            </motion.div>

            {/* Telemetry info in corners */}
            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-emerald-400 bg-black/60 backdrop-blur-md px-4 py-2 border border-emerald-500/20 tracking-widest uppercase flex flex-col gap-1 rounded">
              <div>LATENCY: 11.4ms</div>
              <div>CLASSES: RUST, APHIDS</div>
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
            <div className="absolute top-6 left-6 font-mono text-[10px] text-accent-blue bg-black/60 backdrop-blur-md px-3 py-1.5 border border-accent-blue/20 tracking-widest uppercase flex items-center gap-2 rounded">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
              TELEMETRY_SYNCED // SYSTEM_DASHBOARD
            </div>

            {/* Diagnostic Card Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-6 right-6 font-mono text-[10px] text-white bg-black/90 backdrop-blur-md p-6 border border-white/10 tracking-widest flex flex-col gap-4 rounded-lg max-w-[280px] shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  DIAGNOSIS COMPLETE
                </div>
                <span className="text-[8px] text-[#666] font-mono tracking-widest uppercase">
                  (SIMULATED)
                </span>
              </div>
              <div className="w-full h-[1px] bg-white/10"></div>

              <div>
                <span className="text-[#666] block text-[8px] mb-1">TARGET DETECTED</span>
                <span className="text-white font-bold text-xs uppercase">
                  Puccinia graminis (Rust)
                </span>
              </div>

              <div>
                <span className="text-[#666] block text-[8px] mb-1">RECOMMENDED ACTION</span>
                <span className="text-emerald-400 font-bold uppercase text-[10px]">
                  Apply organic copper fungicide
                </span>
              </div>

              <div>
                <span className="text-[#666] block text-[8px] mb-1">INFERENCE SPEED</span>
                <span className="text-white font-bold">11.4ms @ 98.4% Accuracy</span>
              </div>
            </motion.div>

            {/* Telemetry synced metadata */}
            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-[#888] bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 tracking-widest uppercase flex flex-col gap-1 rounded">
              <div>DATABASE: CONNECTED // CLOUD_SYNC</div>
              <div>ALERT_STATUS: PUSH_NOTIFIED</div>
            </div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <section id="agriai-showcase" className="w-full py-32 md:py-48 bg-bg overflow-hidden relative">
      <style>{`
        @keyframes agriScan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        @keyframes agriPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
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
            linear-gradient(to right, rgba(34, 197, 94, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.05) 1px, transparent 1px);
          animation: agriPulse 2s infinite ease-in-out;
        }
      `}</style>

      {/* 01 Header & Title */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-16">
          <span className="w-12 h-[1px] bg-accent-blue"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            03 — Flagship System
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 md:gap-6"
        >
          <h2 className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.85] text-text-primary uppercase tracking-tighter">
            AgriAI
          </h2>
          <p className="font-mono text-sm md:text-lg text-accent-blue uppercase tracking-widest">
            Precision Farming Intelligence
          </p>
        </motion.div>
      </div>

      {/* Pipeline Navigation / Status Tracker */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between border border-border bg-[#07090D]/80 backdrop-blur-md rounded-xl p-4 gap-4 md:gap-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx
            return (
              <button
                key={idx}
                onClick={() => handleStepSelect(idx)}
                className={`flex-1 flex items-center gap-4 text-left p-4 rounded-lg border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isActive
                    ? 'bg-[#1A212B]/80 border-accent-blue/50 shadow-[0_0_15px_rgba(41,92,255,0.1)]'
                    : 'bg-transparent border-transparent hover:border-white/10'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="active-step-bar"
                    className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent-blue"
                  />
                )}

                {/* Step Number */}
                <div
                  className={`font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border ${
                    isActive
                      ? 'border-accent-blue text-accent-blue bg-accent-blue/5'
                      : 'border-[#333] text-[#555]'
                  }`}
                >
                  0{idx + 1}
                </div>

                {/* Step Text */}
                <div className="flex flex-col">
                  <span
                    className={`font-mono text-[10px] tracking-widest uppercase ${isActive ? 'text-accent-blue' : 'text-text-secondary'}`}
                  >
                    {step.label}
                  </span>
                  <span
                    className={`text-sm font-bold tracking-tight mt-1 ${isActive ? 'text-white' : 'text-[#555] group-hover:text-[#888]'}`}
                  >
                    {step.title}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* 02 Interactive Visual Viewport */}
      <div className="w-full max-w-[1800px] mx-auto px-0 md:px-12 lg:px-24 mb-24 md:mb-32">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-video bg-[#0A0A0A] border-y md:border border-border shadow-2xl overflow-hidden group">
          <AnimatePresence mode="wait">{renderVisual()}</AnimatePresence>
          <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
        </div>

        {/* Step Description Box below viewport */}
        <div className="mt-6 px-6 md:px-0">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-xs text-text-secondary leading-relaxed max-w-4xl"
          >
            <span className="text-white font-bold">{steps[activeStep].title}: </span>
            {steps[activeStep].desc}
          </motion.p>
        </div>
      </div>

      {/* 03 Two-Column Editorial: Problem vs Model */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-24 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 border-t border-border pt-8"
          >
            <h3 className="font-mono text-xs text-text-secondary uppercase tracking-widest">
              01 / The Problem
            </h3>
            <ScrambledText
              className="text-xl md:text-3xl font-body text-text-primary leading-relaxed !m-0 !max-w-none p-0 border-none bg-transparent"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Modern agriculture generates massive datasets, yet farmers lack real-time, actionable
              insights. Crop disease and soil degradation often go unnoticed until it's too late,
              resulting in devastating yield losses.
            </ScrambledText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 border-t border-border pt-8"
          >
            <h3 className="font-mono text-xs text-accent-blue uppercase tracking-widest">
              02 / The Model
            </h3>
            <ScrambledText
              className="text-xl md:text-3xl font-body text-text-primary leading-relaxed !m-0 !max-w-none p-0 border-none bg-transparent"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Built on a custom PyTorch architecture, the AgriAI vision model ingests drone imagery
              and IoT sensor data, running edge-optimized inferences to detect anomalies before they
              spread.
            </ScrambledText>
          </motion.div>
        </div>
      </div>

      {/* 04 Live Detection Visual & Metrics */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-3/5 aspect-square md:aspect-[4/3] bg-[#0A0A0A] border border-border relative overflow-hidden cursor-pointer"
          data-cursor="EXPLORE"
        >
          <img
            src={liveImg}
            alt="AgriAI Live Detection"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-1000 scale-105 hover:scale-100"
          />
          <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 tracking-widest uppercase">
            Live Detection Node
          </div>
        </motion.div>

        <div className="w-full lg:w-2/5 flex flex-col gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-l-2 border-accent-blue pl-6 md:pl-8"
          >
            <div className="text-6xl md:text-8xl font-display font-black text-white">
              98<span className="text-accent-blue">%</span>
            </div>
            <div className="font-mono text-sm text-text-secondary uppercase tracking-widest mt-4">
              Detection Accuracy
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border-l border-border pl-6 md:pl-8"
          >
            <div className="text-5xl md:text-7xl font-display font-black text-text-primary">
              &lt;50<span className="text-text-secondary font-mono text-3xl ml-2">ms</span>
            </div>
            <div className="font-mono text-sm text-text-secondary uppercase tracking-widest mt-4">
              Inference Latency
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
