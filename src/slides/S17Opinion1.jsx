import { Card, Typography, Space } from 'antd'
import { QuestionCircleOutlined, FilterOutlined, ApiOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S17Opinion1() {
  const items = [
    { icon: <QuestionCircleOutlined style={{ fontSize: 24, color: '#4338ca' }} />, key: '会提问', desc: '把模糊的产品问题转化成AI可以帮你处理的清晰任务' },
    { icon: <FilterOutlined style={{ fontSize: 24, color: '#4338ca' }} />, key: '会判断', desc: '从AI的产出里分辨什么有价值、什么是噪音' },
    { icon: <ApiOutlined style={{ fontSize: 24, color: '#4338ca' }} />, key: '会整合', desc: '把AI嵌入日常工作流，而不是偶尔想起来用一下' },
  ]
  return (
    <div className="flex flex-col items-start justify-center gap-7 max-w-[960px] w-full">
      <div className="anim-fade-up">
        <Title level={2} style={{ margin: 0, fontSize: '2.25rem', fontFamily: 'var(--font-display)' }}>
          用AI的能力正在变成PM的<span className="text-gradient">基础能力</span>
        </Title>
        <Text type="secondary" style={{ fontSize: 15, marginTop: 4, display: 'block' }}>
          不是学编程或prompt engineering，而是三件事：
        </Text>
      </div>

      <div className="grid grid-cols-3 gap-5 w-full">
        {items.map((item, i) => (
          <div key={item.key} className={`anim-fade-up delay-${i + 2}`}>
            <Card hoverable style={{ height: '100%', borderRadius: 16 }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 14 } }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>{item.key}</Title>
              <Paragraph type="secondary" style={{ margin: 0, fontSize: 14, lineHeight: 1.7 }}>{item.desc}</Paragraph>
            </Card>
          </div>
        ))}
      </div>

      <Text type="secondary" style={{ fontSize: 14, fontFamily: 'var(--font-display)' }} className="anim-fade-up delay-5">
        就像十年前"会看数据"一样——从加分项变成<Text strong>必备项</Text>。
      </Text>
    </div>
  )
}
