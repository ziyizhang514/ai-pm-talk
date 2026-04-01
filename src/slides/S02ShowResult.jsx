export default function S02ShowResult() {
  return (
    <div className="flex gap-10 items-center justify-center w-full h-full">
      {/* Left: Screenshot placeholder */}
      <div className="card-elevated w-[520px] h-[360px] flex items-center justify-center text-ink-muted text-sm anim-scale-in shrink-0">
        <div className="flex flex-col items-center gap-3">
          <svg className="w-10 h-10 text-ink-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
          <span className="text-ink-muted/50">赛考查分工具截图</span>
        </div>
      </div>

      {/* Right: Info */}
      <div className="flex flex-col gap-8 anim-fade-up delay-1">
        <div>
          <div className="font-display text-3xl font-700 text-ink leading-tight">
            C端赛考查分小程序
          </div>
          <div className="text-ink-muted mt-2 text-base leading-relaxed">
            考生输入信息即可查成绩<br/>查完根据分数段自动推荐课程方案
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-3">
            <span className="num-hero text-5xl text-accent">UV ****</span>
            <span className="text-ink-muted text-sm">上线首日 · 超预期目标</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="num-hero text-5xl text-amber">***+</span>
            <span className="text-ink-muted text-sm">新增用户 · 沉淀至小程序生态</span>
          </div>
        </div>
      </div>
    </div>
  )
}
