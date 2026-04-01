import { Card, Typography, Space } from 'antd'
import { FileSearchOutlined, SafetyCertificateOutlined, ArrowRightOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S07L1Case() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[960px]">
      <div className="text-center anim-fade-up">
        <Title level={2} style={{ margin: 0, fontSize: '2.25rem', fontFamily: 'var(--font-display)' }}>
          AI的真正价值不是快，是帮你<span className="text-gradient">查漏</span>
        </Title>
        <Text type="secondary" style={{ fontSize: 15, marginTop: 4, display: 'block' }}>
          基于小程序做增长玩法时，AI帮我排查合规风险
        </Text>
      </div>

      <div className="flex gap-6 w-full items-stretch anim-fade-up delay-1">
        <div className="flex-1">
          <Card style={{ height: '100%', borderRadius: 16 }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 16, height: '100%' } }}>
            <Space size={12}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f5f3ef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileSearchOutlined style={{ fontSize: 24, color: '#94a3b8' }} />
              </div>
              <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>增长方案</Title>
            </Space>
            <div style={{ flex: 1, background: '#f5f3ef', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 140 }}>
              <Text type="secondary" style={{ fontSize: 13 }}>[ 方案截图 ]</Text>
            </div>
            <Text type="secondary" style={{ fontSize: 13 }}>裂变、分享、拉新等增长机制设计</Text>
          </Card>
        </div>

        <div className="flex items-center shrink-0">
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#4338ca', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowRightOutlined style={{ color: '#fff', fontSize: 18 }} />
          </div>
        </div>

        <div className="flex-1">
          <Card style={{ height: '100%', borderRadius: 16, borderColor: '#c7d2fe' }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 16, height: '100%' } }}>
            <Space size={12}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SafetyCertificateOutlined style={{ fontSize: 24, color: '#4338ca' }} />
              </div>
              <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>AI排查结果</Title>
            </Space>
            <div style={{ flex: 1, background: '#eef2ff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 140 }}>
              <Text type="secondary" style={{ fontSize: 13 }}>[ 风险点截图 ]</Text>
            </div>
            <Text type="secondary" style={{ fontSize: 13 }}>诱导分享、隐私条款、未成年人保护等</Text>
          </Card>
        </div>
      </div>

      <Paragraph style={{ fontSize: 18, textAlign: 'center', fontFamily: 'var(--font-display)', margin: 0 }} className="anim-fade-up delay-3">
        AI用<Text strong style={{ color: '#4338ca' }}>知识广度</Text>帮你查漏，你用<Text strong>业务理解</Text>做判断。
      </Paragraph>
    </div>
  )
}
