import { Card, Tag, Typography, Space } from 'antd'
import { ExperimentOutlined, RobotOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S10L2Case() {
  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full max-w-[960px]">
      <div className="text-center anim-fade-up">
        <Title level={2} style={{ margin: 0, fontSize: '2.25rem', fontFamily: 'var(--font-display)' }}>
          AI帮你看到<span className="text-gradient">你自己看不到的</span>东西
        </Title>
        <Text type="secondary" style={{ fontSize: 15, marginTop: 4, display: 'block' }}>
          通过AI实现复杂数据分析，发现业务指标背后的影响因子
        </Text>
      </div>

      <div className="flex gap-6 w-full items-stretch anim-fade-up delay-1">
        <div className="flex-1">
          <Card style={{ height: '100%', borderRadius: 16 }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 14 } }}>
            <Space size={12}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#f5f3ef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ExperimentOutlined style={{ fontSize: 22, color: '#94a3b8' }} />
              </div>
              <div>
                <Text type="secondary" style={{ fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>传统方式</Text>
              </div>
            </Space>
            <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>基于经验假设几个因子</Title>
            <Paragraph type="secondary" style={{ margin: 0, fontSize: 14, lineHeight: 1.7 }}>
              凭直觉选定可能相关的维度，逐个拉数据验证，覆盖面受限于个人认知
            </Paragraph>
            <Space size={6} wrap>
              <Tag>假设驱动</Tag>
              <Tag>逐个验证</Tag>
              <Tag>耗时长</Tag>
            </Space>
          </Card>
        </div>

        <div className="flex-1">
          <Card style={{ height: '100%', borderRadius: 16, borderColor: '#c7d2fe' }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 14 } }}>
            <Space size={12}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <RobotOutlined style={{ fontSize: 22, color: '#4338ca' }} />
              </div>
              <div>
                <Text style={{ fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: 1, color: '#4338ca' }}>AI方式</Text>
              </div>
            </Space>
            <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>全维度交叉分析</Title>
            <Paragraph type="secondary" style={{ margin: 0, fontSize: 14, lineHeight: 1.7 }}>
              短时间内跑通大量维度组合，发现你没有预设的相关性和pattern
            </Paragraph>
            <Space size={6} wrap>
              <Tag color="purple">数据驱动</Tag>
              <Tag color="purple">全量扫描</Tag>
              <Tag color="purple">分钟级</Tag>
            </Space>
          </Card>
        </div>
      </div>

      <Card style={{ width: '100%', borderRadius: 16 }} styles={{ body: { padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100 } }} className="anim-fade-up delay-2">
        <Text type="secondary" style={{ fontSize: 14 }}>[ 数据分析过程截图 ]</Text>
      </Card>

      <Paragraph style={{ fontSize: 18, textAlign: 'center', fontFamily: 'var(--font-display)', margin: 0 }} className="anim-fade-up delay-3">
        AI给了<Text strong style={{ color: '#4338ca', fontSize: 22, fontFamily: 'var(--font-mono)' }}>10</Text>个洞察，PM判断哪<Text strong style={{ color: '#4338ca', fontSize: 22, fontFamily: 'var(--font-mono)' }}>3</Text>个值得行动。
      </Paragraph>
    </div>
  )
}
