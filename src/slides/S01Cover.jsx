export default function S01Cover() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 w-full h-full relative">
      <div className="absolute top-8 right-16 w-80 h-80 rounded-full bg-accent/[0.04] blur-3xl" />
      <div className="absolute bottom-12 left-20 w-60 h-60 rounded-full bg-amber/[0.05] blur-3xl" />

      <div className="anim-fade-up">
        <div className="deco-line mx-auto mb-6" />
      </div>

      <h1 className="font-display text-[4.5rem] font-900 leading-[1.1] tracking-tight text-ink anim-fade-up delay-1">
        AI时代的<span className="text-gradient">全栈产品人</span>
      </h1>

      <p className="font-display text-[2rem] font-400 text-ink-light anim-fade-up delay-2 mt-2">
        从协调者到创造者
      </p>

      <div className="mt-10 anim-fade-up delay-3">
        <p className="text-base text-ink-muted tracking-[0.25em] uppercase font-mono">
          一个PM的实践与思考
        </p>
      </div>
    </div>
  )
}
