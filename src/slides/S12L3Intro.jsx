import { Card, Typography, Space } from 'antd'
import { LockOutlined, UnlockOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S12L3Intro() {
  return (
    <div className="flex flex-col items-start justify-center gap-8 max-w-[960px] w-full">
      <div className="anim-fade-up">
        <Text style={{ fontSize: 13, color: '#4338ca', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>L3</Text>
      </div>
      <div className="anim-fade-up delay-1 -mt-4">
        <Title level={2} style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>
          破界<Text type="secondary" style={{ fontSize: '1.75rem', fontWeight: 400, marginLeft: 8 }}>——PM的能力边界正在消失</Text>
        </Title>
      </div>

      <div className="grid grid-cols-2 gap-5 w-full">
        <div className="anim-fade-up delay-2">
          <Card style={{ height: '100%', borderRadius: 16 }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 14 } }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f5f3ef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LockOutlined style={{ fontSize: 24, color: '#94a3b8' }} />
            </div>
            <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)', color: '#94a3b8' }}>以前</Title>
            <Paragraph style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#94a3b8' }}>
              不会代码 = 不能做开发<br/>不会设计 = 不能做设计
            </Paragraph>
            <Text type="secondary" style={{ fontSize: 13 }}>PM有明确的能力边界，只能在自己的专业范围内工作</Text>
          </Card>
        </div>

        <div className="anim-fade-up delay-3">
          <Card style={{ height: '100%', borderRadius: 16, borderColor: '#c7d2fe' }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 14 } }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UnlockOutlined style={{ fontSize: 24, color: '#4338ca' }} />
            </div>
            <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>现在</Title>
            <Paragraph style={{ margin: 0, fontSize: 16, lineHeight: 1.7, fontWeight: 500 }}>
              PM可以自己做出60分的实物去沟通
            </Paragraph>
            <Text type="secondary" style={{ fontSize: 13 }}>不是替代研发——而是把协作起点从"一份文档"提升到"一个能体验的东西"</Text>
          </Card>
        </div>
      </div>
    </div>
  )
}
