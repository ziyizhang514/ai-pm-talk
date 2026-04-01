import { useState, useEffect, useCallback } from 'react'
import slides from './slides'
import SlideLayout from './slides/SlideLayout'

export default function App() {
  const [current, setCurrent] = useState(0)
  const [slideKey, setSlideKey] = useState(0)
  const total = slides.length

  const go = useCallback((dir) => {
    setCurrent(i => {
      const next = i + dir
      if (next < 0 || next >= total) return i
      setSlideKey(k => k + 1)
      return next
    })
  }, [total])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        go(1)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        go(-1)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [go])

  const handleClick = (e) => {
    if (e.clientX > window.innerWidth / 2) go(1)
    else go(-1)
  }

  const { component: Slide, section, subtitle } = slides[current]
  const progress = ((current) / (total - 1)) * 100

  return (
    <div className="grain w-full h-full flex flex-col cursor-pointer select-none bg-canvas" onClick={handleClick}>
      {/* Progress bar */}
      <div className="h-[3px] w-full bg-border/40 shrink-0 relative z-50">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide area — expanded padding for more content room */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full max-w-[1440px] max-h-[900px] aspect-[16/9] flex items-center justify-center px-16 py-10 relative">
          <div key={slideKey} className="w-full h-full">
            <SlideLayout section={section} subtitle={subtitle}>
              <Slide />
            </SlideLayout>
          </div>

          {/* Page indicator */}
          <div className="absolute bottom-4 right-7 font-mono text-[13px] text-ink-muted tracking-wide">
            <span className="text-ink-light font-medium">{String(current + 1).padStart(2, '0')}</span>
            <span className="mx-1.5 opacity-40">/</span>
            <span>{String(total).padStart(2, '0')}</span>
          </div>

          {/* Deerflow branding */}
          <a
            href="https://deerflow.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-7 text-[11px] text-ink-muted/40 hover:text-ink-muted/70 transition-colors tracking-widest uppercase"
            onClick={e => e.stopPropagation()}
          >
            Created by Deerflow
          </a>
        </div>
      </div>
    </div>
  )
}
