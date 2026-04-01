import { Card, Tag, Typography, Space } from 'antd'
import { RocketOutlined, EyeOutlined, ThunderboltOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S05Framework() {
  const layers = [
    {
      level: 'L1',
      name: '加速',
      desc: 'AI帮你做得更快',
      sub: '写PRD更快、竞品分析更全',
      icon: <RocketOutlined style={{ fontSize: 28, color: '#d97706' }} />,
      color: '#d97706',
      tag: '大多数PM在这里',
    },
    {
      level: 'L2',
      name: '增强',
      desc: 'AI帮你想得更全、看得更深',
      sub: '用户研究洞察更深、数据分析更透',
      icon: <EyeOutlined style={{ fontSize: 28, color: '#0d9488' }} />,
      color: '#0d9488',
      tag: null,
    },
    {
      level: 'L3',
      name: '破界',
      desc: 'AI让你做到原来做不到的事',
      sub: '需求实现、原型设计、方案验证',
      icon: <ThunderboltOutlined style={{ fontSize: 28, color: '#4338ca' }} />,
      color: '#4338ca',
      tag: null,
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[1000px]">
      <div className="text-center anim-fade-up">
        <Title level={2} style={{ marginBottom: 4, fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>
          PM + AI 的三层进化
        </Title>
        <Text type="secondary" style={{ fontSize: 16 }}>
          大多数PM停在第一层，但真正的变化发生在第三层
        </Text>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full mt-2">
        {layers.map(({ level, name, desc, sub, icon, color, tag }, i) => (
          <div key={level} className={`anim-fade-up delay-${i + 2}`}>
            <Card
              hoverable
              style={{ height: '100%', borderRadius: 16, position: 'relative' }}
              styles={{ body: { padding: 28, height: '100%', display: 'flex', flexDirection: 'column', gap: 16 } }}
            >
              {tag && (
                <Tag color="warning" style={{ position: 'absolute', top: -10, right: 16, fontSize: 12, fontWeight: 600 }}>
                  {tag}
                </Tag>
              )}

              <Space size={12} align="start">
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${color}10`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  {icon}
                </div>
                <div>
                  <Text style={{ fontSize: 13, color, fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>
                    {level}
                  </Text>
                  <Title level={3} style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>
                    {name}
                  </Title>
                </div>
              </Space>

              <Paragraph style={{ fontSize: 16, color: '#334155', margin: 0, flex: 1, lineHeight: 1.7 }}>
                {desc}
              </Paragraph>

              <Text type="secondary" style={{ fontSize: 13 }}>
                {sub}
              </Text>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
