import { Card, Typography } from 'antd'
import { FileTextOutlined, AppstoreOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

export default function S18Opinion2() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-[960px] w-full">
      <div className="text-center anim-fade-up">
        <Title level={2} style={{ margin: 0, fontSize: '2.25rem', fontFamily: 'var(--font-display)' }}>
          PM与研发的协作起点变了
        </Title>
        <Text type="secondary" style={{ fontSize: 15, marginTop: 4, display: 'block' }}>
          协作效率取决于双方信息对等的程度
        </Text>
      </div>

      <div className="flex gap-6 w-full items-stretch anim-fade-up delay-1">
        <div className="flex-1">
          <Card style={{ height: '100%', borderRadius: 16 }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 16 } }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f5f3ef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileTextOutlined style={{ fontSize: 24, color: '#94a3b8' }} />
            </div>
            <Text type="secondary" style={{ fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>以前</Text>
            <Title level={3} style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>
              "我写了个文档，你看看"
            </Title>
            <Paragraph type="secondary" style={{ margin: 0, fontSize: 15, lineHeight: 1.8 }}>
              研发需要脑补需求<br/>设计需要猜意图<br/>反复对齐，信息损耗大
            </Paragraph>
          </Card>
        </div>

        <div className="flex-1">
          <Card style={{ height: '100%', borderRadius: 16, borderColor: '#c7d2fe' }} styles={{ body: { padding: 28, display: 'flex', flexDirection: 'column', gap: 16 } }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AppstoreOutlined style={{ fontSize: 24, color: '#4338ca' }} />
            </div>
            <Text style={{ fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: 1, color: '#4338ca' }}>现在</Text>
            <Title level={3} style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>
              "我做了个原型，你体验一下"
            </Title>
            <Paragraph type="secondary" style={{ margin: 0, fontSize: 15, lineHeight: 1.8 }}>
              研发直接给出技术评估<br/>设计基于实物优化<br/>所有人的对齐效率都高了
            </Paragraph>
          </Card>
        </div>
      </div>

      <Paragraph style={{ fontSize: 18, textAlign: 'center', fontFamily: 'var(--font-display)', margin: 0 }} className="anim-fade-up delay-3">
        不是PM抢了研发的活，是<Text strong>协作的起点更高了</Text>。
      </Paragraph>
    </div>
  )
}
