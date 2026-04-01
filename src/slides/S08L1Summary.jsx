export default function S08L1Summary() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 max-w-[640px]">
      <div className="deco-line mx-auto anim-fade-in" />
      <p className="font-display text-[2.5rem] font-700 leading-snug text-ink anim-fade-up delay-1">
        L1的正确用法
      </p>
      <div className="flex flex-col gap-4 anim-fade-up delay-2">
        <p className="font-display text-2xl leading-relaxed text-ink-light">
          让AI帮你查漏，你来判断。
        </p>
        <p className="font-display text-2xl leading-relaxed text-ink-light">
          PM的经验不是被替代了，<br/>而是被<span className="text-accent font-700 text-3xl">放大</span>了。
        </p>
      </div>
      <div className="mt-4 px-6 py-3 rounded-xl bg-canvas-warm border border-border/50 anim-fade-up delay-3">
        <p className="text-sm text-ink-muted">但这还只是在已有工作范围内做得更好——接下来的变化更大。</p>
      </div>
    </div>
  )
}
