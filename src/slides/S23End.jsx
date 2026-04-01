export default function S23End() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-10 relative">
      <div className="absolute -top-16 right-0 w-60 h-60 rounded-full bg-accent/[0.03] blur-3xl" />

      <div className="card-elevated w-48 h-48 flex items-center justify-center anim-scale-in">
        <div className="flex flex-col items-center gap-2 text-ink-muted">
          <svg className="w-10 h-10 text-ink-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" />
          </svg>
          <span className="text-sm">二维码</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 anim-fade-up delay-1">
        <p className="font-display text-2xl font-700 text-ink">AI + PM 资源包</p>
        <p className="text-ink-muted text-base">工具清单 & Prompt 模板</p>
        <p className="text-ink-muted text-sm">扫码获取，欢迎会后交流</p>
      </div>

      <div className="anim-fade-up delay-2">
        <div className="deco-line mx-auto" />
      </div>
    </div>
  )
}
