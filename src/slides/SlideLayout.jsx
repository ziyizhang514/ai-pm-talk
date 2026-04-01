export default function SlideLayout({ section, subtitle, children }) {
  if (!section) return <div className="w-full h-full flex items-center justify-center">{children}</div>

  return (
    <div className="w-full h-full flex flex-col">
      {/* Section header — prominent */}
      <div className="flex items-end gap-4 shrink-0 anim-fade-in pb-6 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 rounded-full bg-accent" />
          <span className="font-display text-2xl font-700 text-ink tracking-wide">
            {section}
          </span>
        </div>
        {subtitle && (
          <>
            <span className="text-border text-lg mb-0.5">|</span>
            <span className="text-ink-light text-base mb-0.5">{subtitle}</span>
          </>
        )}
      </div>

      {/* Content area */}
      <div className="flex-1 flex items-center justify-center pt-2">
        {children}
      </div>
    </div>
  )
}
