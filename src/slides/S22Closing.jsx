export default function S22Closing() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 max-w-[680px] relative">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/[0.04] blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber/[0.05] blur-3xl" />

      <div className="deco-line mx-auto anim-fade-in" />

      <p className="font-display text-[2.75rem] font-900 leading-snug text-ink anim-fade-up delay-1">
        AI时代PM最大的变化
        <br />不是效率提升
        <br />而是<span className="text-gradient">能力边界的消失</span>
      </p>

      <div className="w-16 h-px bg-border anim-fade-in delay-2" />

      <p className="font-display text-2xl leading-relaxed text-ink-light anim-fade-up delay-3">
        我们正在从协调者变成创造者。
        <br />但创造者最重要的能力，
        <br />是知道<span className="font-700 text-ink">什么值得创造</span>。
      </p>
    </div>
  )
}
