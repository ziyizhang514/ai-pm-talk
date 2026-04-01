export default function S13L3Timeline() {
  const events = [
    { date: '3月16日', title: '业务用AI生成Demo提需', sub: '几分钟完成需求对齐，省去传统原型/PRD沟通流程', active: false },
    { date: '3月16日', title: 'PM介入重构，当天上线', sub: '转化逻辑注入 + 生态接入 + 合规兜底', active: true },
    { date: '3月18日', title: '体验优化 + 自动化基建', sub: '开发30秒数据同步脚本，为查分高峰做准备', active: false },
    { date: '3月20日', title: '查分日，平稳承接双峰流量', sub: '14:00焦虑峰 + 17:00出分峰，零延迟、零故障', active: false },
  ]
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-[680px]">
      <h2 className="font-display text-[2.25rem] font-700 text-ink mb-2 anim-fade-up">
        赛考查分工具：从提需到上线
      </h2>
      <p className="text-ink-muted text-base -mt-4 mb-2 anim-fade-up delay-1">回到开场那个案例，完整讲一下过程</p>
      <div className="flex flex-col gap-0 w-full">
        {events.map((e, i) => (
          <div key={i} className={`flex gap-5 items-start anim-slide-left delay-${i + 2}`}>
            <div className="flex flex-col items-center shrink-0">
              <div className={`w-3.5 h-3.5 rounded-full mt-2 ${e.active ? 'bg-accent ring-4 ring-accent/10' : 'bg-border'}`} />
              {i < events.length - 1 && <div className="w-px h-16 bg-border" />}
            </div>
            <div className="pb-4">
              <div className="font-mono text-xs text-accent font-500 tracking-wider">{e.date}</div>
              <div className={`text-lg mt-1 ${e.active ? 'font-display font-700 text-ink' : 'font-display font-600 text-ink-light'}`}>{e.title}</div>
              <div className="text-sm text-ink-muted mt-1 leading-relaxed">{e.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
