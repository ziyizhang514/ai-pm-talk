import S01Cover from './S01Cover'
import S02ShowResult from './S02ShowResult'
import S03Contrast from './S03Contrast'
import S04Question from './S04Question'
import S05Framework from './S05Framework'
import S06L1Intro from './S06L1Intro'
import S07L1Case from './S07L1Case'
import S08L1Summary from './S08L1Summary'
import S09L2Intro from './S09L2Intro'
import S10L2Case from './S10L2Case'
import S11L2Summary from './S11L2Summary'
import S12L3Intro from './S12L3Intro'
import S13L3Timeline from './S13L3Timeline'
import S14L3Decisions from './S14L3Decisions'
import S15L3Results from './S15L3Results'
import S16L3Summary from './S16L3Summary'
import S17Opinion1 from './S17Opinion1'
import S18Opinion2 from './S18Opinion2'
import S19Opinion3 from './S19Opinion3'
import S20MyPath from './S20MyPath'
import S21PathSummary from './S21PathSummary'
import S22Closing from './S22Closing'
import S23End from './S23End'

const slides = [
  { component: S01Cover },
  { component: S02ShowResult, section: '开场', subtitle: '这是一个PM做出来的C端产品' },
  { component: S03Contrast, section: '开场', subtitle: '传统流程 vs 实际交付' },
  { component: S04Question, section: '开场', subtitle: 'AI到底在改变PM的什么？' },
  { component: S05Framework, section: '认知框架', subtitle: 'AI对PM的改变有三个层次' },
  { component: S06L1Intro, section: 'L1 加速', subtitle: '大多数PM目前所在的阶段' },
  { component: S07L1Case, section: 'L1 加速', subtitle: '案例：小程序增长玩法合规排查' },
  { component: S08L1Summary, section: 'L1 加速', subtitle: '关键发现' },
  { component: S09L2Intro, section: 'L2 增强', subtitle: 'AI开始改变你的思考方式' },
  { component: S10L2Case, section: 'L2 增强', subtitle: '案例：数据分析发现业务指标影响因子' },
  { component: S11L2Summary, section: 'L2 增强', subtitle: '关键发现' },
  { component: S12L3Intro, section: 'L3 破界', subtitle: 'PM的能力边界正在被打破' },
  { component: S13L3Timeline, section: 'L3 破界', subtitle: '案例：赛考查分工具' },
  { component: S14L3Decisions, section: 'L3 破界', subtitle: '案例：PM做了四个关键判断' },
  { component: S15L3Results, section: 'L3 破界', subtitle: '案例：业务结果' },
  { component: S16L3Summary, section: 'L3 破界', subtitle: '关键发现' },
  { component: S17Opinion1, section: '思考', subtitle: '观点一：能力模型在扩展' },
  { component: S18Opinion2, section: '思考', subtitle: '观点二：协作方式在升级' },
  { component: S19Opinion3, section: '思考', subtitle: '观点三：核心是判断力' },
  { component: S20MyPath, section: '我的路径', subtitle: '如何更快地拥抱AI' },
  { component: S21PathSummary, section: '我的路径', subtitle: '关键发现' },
  { component: S22Closing, section: '收尾' },
  { component: S23End },
]

export default slides
