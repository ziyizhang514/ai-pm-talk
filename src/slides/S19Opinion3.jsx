import { Card, Typography, Divider } from 'antd'
import { SyncOutlined, StarOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S19Opinion3() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-[960px] w-full">
      <div className="text-center anim-fade-up">
        <Title level={2} style={{ margin: 0, fontSize: '2.25rem', fontFamily: 'var(--font-display)' }}>
          创造者的核心不是工具
        </Title>
        <Text type="secondary" style={{ fontSize: 15, marginTop: 4, display: 'block' }}>
          工具一直在变——去年ChatGPT，今年Claude/Cursor，明年不知道
        </Text>
      </div>

      <div className="grid grid-cols-2 gap-6 w-full anim-fade-up delay-1">
        <Card style={{ borderRadius: 16 }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 14 } }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f5f3ef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SyncOutlined style={{ fontSize: 24, color: '#94a3b8' }} />
          </div>
          <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)', color: '#94a3b8' }}>会变的</Title>
          <Paragraph style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: '#94a3b8' }}>
            工具、平台、最佳实践<br/>今天的热门明天可能过时
          </Paragraph>
        </Card>

        <Card style={{ borderRadius: 16, borderColor: '#c7d2fe' }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 14 } }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <StarOutlined style={{ fontSize: 24, color: '#4338ca' }} />
          </div>
          <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>不变的</Title>
          <Paragraph style={{ margin: 0, fontSize: 16, lineHeight: 1.8, fontWeight: 500 }}>
            对用户的理解<br/>对业务的判断<br/>对优先级的感知
          </Paragraph>
        </Card>
      </div>

      <div className="text-center anim-fade-up delay-2">
        <Paragraph style={{ fontSize: 18, fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.8 }}>
          全栈产品人的"全栈"：不是什么技术都会，<br/>
          而是从洞察到验证能<Text strong style={{ color: '#4338ca' }}>独立跑通一条链路</Text>。
        </Paragraph>
        <Text type="secondary" style={{ fontSize: 14, marginTop: 8, display: 'block' }}>
          最该投资的不是学哪个AI工具，而是持续强化你的产品判断力。
        </Text>
      </div>
    </div>
  )
}
