import { Card, Typography } from 'antd'
import { ExperimentOutlined, BookOutlined, RocketOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S20MyPath() {
  const paths = [
    { num: '01', title: '先试再判断', desc: '不是"想清楚再动手"，而是"找个小任务先试一次"', detail: '大多数人面对AI的第一反应是评估——评估完的结论往往是"再看看"。但AI适不适合你，不试判断不了。', icon: <ExperimentOutlined style={{ fontSize: 24, color: '#4338ca' }} /> },
    { num: '02', title: '带着问题学', desc: '看别人跑通了什么 → 理解工具边界 → 映射到自己的场景', detail: '先理解工具"能做什么"，再想"我的哪个场景可以用它"。在真实场景里跑通一个，比看十篇教程有用。', icon: <BookOutlined style={{ fontSize: 24, color: '#0d9488' }} /> },
    { num: '03', title: '不等共识，先跑起来', desc: '不需要等推广、等许可，自己先积累经验', detail: '等到公司大力推广时，我已经积累了大半年实践。这个时间差带来的经验优势，没有捷径。', icon: <RocketOutlined style={{ fontSize: 24, color: '#d97706' }} /> },
  ]
  const bgs = ['#eef2ff', '#ccfbf1', '#fef3c7']

  return (
    <div className="flex flex-col items-start justify-center gap-6 max-w-[960px] w-full">
      <div className="anim-fade-up">
        <Title level={2} style={{ margin: 0, fontSize: '2.25rem', fontFamily: 'var(--font-display)' }}>
          道理都懂，<span className="text-gradient">怎么开始？</span>
        </Title>
        <Text type="secondary" style={{ fontSize: 15, marginTop: 4, display: 'block' }}>
          从ChatGPT发布开始，我摸索出来的路径
        </Text>
      </div>

      <div className="grid grid-cols-3 gap-5 w-full">
        {paths.map((p, i) => (
          <div key={p.num} className={`anim-fade-up delay-${i + 2}`}>
            <Card hoverable style={{ height: '100%', borderRadius: 16 }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 14 } }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: bgs[i], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {p.icon}
              </div>
              <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>{p.title}</Title>
              <Text style={{ fontSize: 14, fontWeight: 500 }}>{p.desc}</Text>
              <Paragraph type="secondary" style={{ margin: 0, fontSize: 13, lineHeight: 1.7 }}>{p.detail}</Paragraph>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
