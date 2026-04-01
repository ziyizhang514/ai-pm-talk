import { Card, Typography, Space } from 'antd'
import { SwapOutlined, AppstoreOutlined, SafetyOutlined, CloudSyncOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S14L3Decisions() {
  const cards = [
    { num: '①', title: '转化漏斗重构', from: '通用展示', to: '分层推课', detail: '基于报考等级×分数段，动态推荐个性化课程方案', icon: <SwapOutlined style={{ fontSize: 22, color: '#4338ca' }} />, bg: '#eef2ff', color: '#4338ca' },
    { num: '②', title: '生态融合', from: '独立H5', to: '嵌入小程序', detail: '解决信任危机与数据沉淀，压缩3次无效跳转', icon: <AppstoreOutlined style={{ fontSize: 22, color: '#0d9488' }} />, bg: '#ccfbf1', color: '#0d9488' },
    { num: '③', title: '合规风险拦截', from: '明文传输身份证', to: '重构验证机制', detail: 'AI不知道自己在犯错，PM必须兜底安全底线', icon: <SafetyOutlined style={{ fontSize: 22, color: '#e11d48' }} />, bg: '#fff1f2', color: '#e11d48' },
    { num: '④', title: '自动化基建', from: '15分钟人工处理', to: '30秒脚本同步', detail: '预判查分窗口的爆发流量，提前造好数据管线', icon: <CloudSyncOutlined style={{ fontSize: 22, color: '#d97706' }} />, bg: '#fef3c7', color: '#d97706' },
  ]
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-[960px]">
      <div className="text-center anim-fade-up">
        <Title level={2} style={{ margin: 0, fontSize: '2.25rem', fontFamily: 'var(--font-display)' }}>
          AI搭了框架，PM做了<span className="text-gradient">四个决定</span>
        </Title>
        <Text type="secondary" style={{ fontSize: 15, marginTop: 4, display: 'block' }}>
          每个判断都来自PM对业务的理解，AI无法自动想到
        </Text>
      </div>

      <div className="grid grid-cols-2 gap-5 w-full">
        {cards.map((c, i) => (
          <div key={c.num} className={`anim-scale-in delay-${i + 2}`}>
            <Card hoverable style={{ height: '100%', borderRadius: 16 }} styles={{ body: { padding: 24, display: 'flex', flexDirection: 'column', gap: 12 } }}>
              <Space size={12}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {c.icon}
                </div>
                <Title level={4} style={{ margin: 0, fontFamily: 'var(--font-display)' }}>{c.title}</Title>
              </Space>
              <div>
                <Text type="secondary" style={{ fontSize: 14 }}>{c.from}</Text>
                <Text strong style={{ color: c.color, margin: '0 8px' }}>→</Text>
                <Text style={{ fontSize: 14, fontWeight: 500 }}>{c.to}</Text>
              </div>
              <Paragraph type="secondary" style={{ margin: 0, fontSize: 13, lineHeight: 1.7 }}>{c.detail}</Paragraph>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
