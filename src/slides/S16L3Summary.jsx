export default function S16L3Summary() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 max-w-[640px]">
      <div className="deco-line mx-auto anim-fade-in" />
      <p className="font-display text-[2.5rem] font-700 leading-snug text-ink anim-fade-up delay-1">
        工具谁都能用
      </p>
      <div className="flex flex-col gap-3 anim-fade-up delay-2">
        <p className="font-display text-xl leading-relaxed text-ink-light">
          但知道<span className="text-ink font-600">该做什么</span>、
          做到<span className="text-ink font-600">什么程度</span>就够了、
        </p>
        <p className="font-display text-xl leading-relaxed text-ink-light">
          什么风险<span className="text-ink font-600">必须拦住</span>——这是PM的价值。
        </p>
      </div>
      <div className="mt-2 px-6 py-3 rounded-xl bg-canvas-warm border border-border/50 anim-fade-up delay-3">
        <p className="text-sm text-ink-muted">做完这件事我一直在想：这到底意味着什么？有三点思考。</p>
      </div>
    </div>
  )
}
