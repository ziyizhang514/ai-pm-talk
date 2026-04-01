import { Card, Typography, Space } from 'antd'
import { FieldTimeOutlined, ToolOutlined, TeamOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S06L1Intro() {
  const points = [
    { icon: <FieldTimeOutlined style={{ fontSize: 24, color: '#d97706' }} />, title: '效率确实提升了', desc: '写PRD从3天→1天，竞品分析从1周→1天' },
    { icon: <ToolOutlined style={{ fontSize: 24, color: '#d97706' }} />, title: '但工作方式没变', desc: '你还是原来的PM，只是有了一个快捷键' },
    { icon: <TeamOutlined style={{ fontSize: 24, color: '#d97706' }} />, title: '没有差异化', desc: '别人也会一样快，效率不构成竞争壁垒' },
  ]
  return (
    <div className="flex flex-col items-start justify-center gap-8 max-w-[960px] w-full">
      <div className="anim-fade-up">
        <Text style={{ fontSize: 13, color: '#d97706', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>L1</Text>
      </div>
      <div className="anim-fade-up delay-1 -mt-4">
        <Title level={2} style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>
          加速<Text type="secondary" style={{ fontSize: '1.75rem', fontWeight: 400, marginLeft: 8 }}>——有价值，但有天花板</Text>
        </Title>
      </div>

      <div className="grid grid-cols-3 gap-5 w-full">
        {points.map((p, i) => (
          <div key={i} className={`anim-fade-up delay-${i + 2}`}>
            <Card hoverable style={{ height: '100%', borderRadius: 16 }} styles={{ body: { padding: 24, display: 'flex', flexDirection: 'column', gap: 12 } }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {p.icon}
              </div>
              <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>{p.title}</Title>
              <Paragraph type="secondary" style={{ margin: 0, fontSize: 14, lineHeight: 1.7 }}>{p.desc}</Paragraph>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
