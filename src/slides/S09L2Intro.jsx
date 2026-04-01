import { Card, Typography, Space } from 'antd'
import { BulbOutlined, FundOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S09L2Intro() {
  const points = [
    { icon: <BulbOutlined style={{ fontSize: 24, color: '#0d9488' }} />, title: '改变认知输入', desc: 'AI不只替你执行，而是帮你发现你自己想不到的东西' },
    { icon: <FundOutlined style={{ fontSize: 24, color: '#0d9488' }} />, title: '决策质量取决于信息质量', desc: '过去信息输入受限于个人分析能力和时间，AI打破了这个限制' },
  ]
  return (
    <div className="flex flex-col items-start justify-center gap-8 max-w-[960px] w-full">
      <div className="anim-fade-up">
        <Text style={{ fontSize: 13, color: '#0d9488', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>L2</Text>
      </div>
      <div className="anim-fade-up delay-1 -mt-4">
        <Title level={2} style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>
          增强<Text type="secondary" style={{ fontSize: '1.75rem', fontWeight: 400, marginLeft: 8 }}>——从干活工具变成思考搭档</Text>
        </Title>
      </div>

      <div className="grid grid-cols-2 gap-5 w-full">
        {points.map((p, i) => (
          <div key={i} className={`anim-fade-up delay-${i + 2}`}>
            <Card hoverable style={{ height: '100%', borderRadius: 16 }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 14 } }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {p.icon}
              </div>
              <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>{p.title}</Title>
              <Paragraph type="secondary" style={{ margin: 0, fontSize: 15, lineHeight: 1.7 }}>{p.desc}</Paragraph>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
