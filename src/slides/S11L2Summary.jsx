export default function S11L2Summary() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 max-w-[640px]">
      <div className="deco-line mx-auto anim-fade-in" />
      <p className="font-display text-[2.5rem] font-700 leading-snug text-ink anim-fade-up delay-1">
        AI改变的不是分析的速度
        <br />而是分析的<span className="text-gradient">起点</span>
      </p>
      <div className="flex flex-col gap-3 anim-fade-up delay-2">
        <p className="font-display text-xl leading-relaxed text-ink-light">
          信息多了，噪音也多了。
        </p>
        <p className="font-display text-xl leading-relaxed text-ink-light">
          分辨信号和噪音——<span className="text-ink font-600">这是PM的核心能力</span>。
        </p>
      </div>
      <div className="mt-2 px-6 py-3 rounded-xl bg-canvas-warm border border-border/50 anim-fade-up delay-3">
        <p className="text-sm text-ink-muted">接下来发生的事让我意识到，变化比我想的更大。</p>
      </div>
    </div>
  )
}
