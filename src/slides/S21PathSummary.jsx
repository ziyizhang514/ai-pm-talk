export default function S21PathSummary() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 max-w-[640px]">
      <div className="deco-line mx-auto anim-fade-in" />
      <p className="font-display text-[2.5rem] font-700 leading-snug text-ink anim-fade-up delay-1">
        拉开差距的不是<br/>谁用的工具更好
      </p>
      <p className="font-display text-2xl leading-relaxed text-ink-light anim-fade-up delay-2">
        而是谁更早开始积累
        <br />"<span className="text-accent font-700">AI + 自己业务场景</span>"的经验。
      </p>
      <div className="mt-2 px-6 py-3 rounded-xl bg-canvas-warm border border-border/50 anim-fade-up delay-3">
        <p className="text-sm text-ink-muted">这个经验没有捷径，只能靠自己在真实工作里一个场景一个场景地试出来。</p>
      </div>
    </div>
  )
}
