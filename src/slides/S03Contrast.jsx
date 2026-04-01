import { Card, Typography } from 'antd'
import { ClockCircleOutlined, ThunderboltOutlined, ArrowRightOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S03Contrast() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[960px]">
      <div className="flex gap-6 w-full items-stretch anim-fade-up">
        <div className="flex-1">
          <Card style={{ height: '100%', borderRadius: 16 }} styles={{ body: { padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 } }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: '#f5f3ef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ClockCircleOutlined style={{ fontSize: 26, color: '#94a3b8' }} />
            </div>
            <Text type="secondary" style={{ fontSize: 13, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>传统流程</Text>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 700, color: '#94a3b8', lineHeight: 1 }}>
              按周排期
            </div>
            <Text type="secondary" style={{ fontSize: 13 }}>需求文档 → 评审 → 排期 → 开发 → 测试</Text>
          </Card>
        </div>

        <div className="flex items-center shrink-0 anim-fade-in delay-1">
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#4338ca', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowRightOutlined style={{ color: '#fff', fontSize: 18 }} />
          </div>
        </div>

        <div className="flex-1">
          <Card style={{ height: '100%', borderRadius: 16, borderColor: '#c7d2fe' }} styles={{ body: { padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 } }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ThunderboltOutlined style={{ fontSize: 26, color: '#4338ca' }} />
            </div>
            <Text style={{ fontSize: 13, fontFamily: 'var(--font-mono)', letterSpacing: 1, color: '#4338ca' }}>实际交付</Text>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '5rem', fontWeight: 700, color: '#4338ca', lineHeight: 1, letterSpacing: '-0.03em' }}>
              0.5<span style={{ fontSize: '2rem', marginLeft: 4 }}>天</span>
            </div>
            <Text type="secondary" style={{ fontSize: 13 }}>从需求提出到C端上线</Text>
          </Card>
        </div>
      </div>

      <Paragraph style={{ fontSize: 22, textAlign: 'center', fontFamily: 'var(--font-display)', margin: 0, fontStyle: 'italic' }} className="anim-fade-up delay-2">
        <Text type="secondary" style={{ fontSize: 22, fontStyle: 'italic' }}>"我是产品经理，不是工程师。"</Text>
      </Paragraph>
    </div>
  )
}
