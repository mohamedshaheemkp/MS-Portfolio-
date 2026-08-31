import { useEffect, useRef } from 'react'

export default function MotionPreview({ item, isActive, onActivate, onDeactivate }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (isActive) {
      video.play().catch(() => {})
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [isActive])

  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      onClick={() => (isActive ? onDeactivate() : onActivate())}
      className="group w-full overflow-hidden rounded-xl border border-[#222] bg-[#0E0E0E] text-left transition-colors hover:border-[#4A7CFF]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7CFF]"
      aria-pressed={isActive}
      aria-label={`${isActive ? 'Pause' : 'Play'} ${item.title} preview`}
    >
      <div className="relative aspect-video overflow-hidden bg-[#050505]">
        {isActive ? (
          <video
            ref={videoRef}
            src={item.videoSrc}
            poster={item.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={item.poster}
            alt=""
            className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute right-4 top-4 rounded bg-black/80 px-2 py-1 font-mono text-[10px] text-white">
          {item.duration}
        </span>
        <span className="absolute bottom-4 left-4 rounded border border-white/20 bg-black/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
          {isActive ? 'Playing — tap to pause' : 'Hover or tap to preview'}
        </span>
      </div>
      <div className="border-t border-[#1F1F1F] p-6">
        <h3 className="font-display text-xl font-bold uppercase text-white">{item.title}</h3>
        <p className="mt-2 font-mono text-xs leading-relaxed text-[#888]">{item.description}</p>
      </div>
    </button>
  )
}
