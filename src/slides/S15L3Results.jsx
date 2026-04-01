import { Card, Typography, Row, Col } from 'antd'
import { RiseOutlined, UserAddOutlined, ClockCircleOutlined, LinkOutlined, AimOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

export default function S15L3Results() {
  const topStats = [
    { value: '0.5', unit: '天', label: '从需求到C端上线', icon: <ClockCircleOutlined style={{ fontSize: 22, color: '#4338ca' }} />, bg: '#eef2ff', color: '#4338ca' },
    { value: '****', unit: '', label: 'UV · 超预期目标', icon: <RiseOutlined style={{ fontSize: 22, color: '#4338ca' }} />, bg: '#eef2ff', color: '#4338ca' },
    { value: '***+', unit: '', label: '新用户沉淀至小程序', icon: <UserAddOutlined style={{ fontSize: 22, color: '#d97706' }} />, bg: '#fef3c7', color: '#d97706' },
  ]
  const bottomStats = [
    { value: '+*%', label: '企微绑定率显著提升', detail: '极低成本实现高效私域沉淀', icon: <LinkOutlined style={{ fontSize: 20, color: '#0d9488' }} />, bg: '#ccfbf1' },
    { value: '**+', label: '精准业务线索', detail: '轻决策 + 重决策咨询', icon: <AimOutlined style={{ fontSize: 20, color: '#0d9488' }} />, bg: '#ccfbf1' },
  ]
  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full max-w-[900px]">
      <Title level={2} style={{ margin: 0, fontSize: '2.25rem', fontFamily: 'var(--font-display)' }} className="anim-fade-up">
        结果
      </Title>

      <Row gutter={20} style={{ width: '100%' }}>
        {topStats.map((s, i) => (
          <Col span={8} key={s.label}>
            <div className={`anim-scale-in delay-${i + 1}`}>
              <Card style={{ borderRadius: 16, textAlign: 'center' }} styles={{ body: { padding: 28 } }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 40, fontWeight: 500, color: s.color, lineHeight: 1, letterSpacing: '-0.03em' }}>
                  {s.value}<span style={{ fontSize: 18, marginLeft: 2 }}>{s.unit}</span>
                </div>
                <Text type="secondary" style={{ fontSize: 13, marginTop: 8, display: 'block' }}>{s.label}</Text>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <Row gutter={20} style={{ width: '100%', maxWidth: 620, margin: '0 auto' }}>
        {bottomStats.map((s, i) => (
          <Col span={12} key={s.label}>
            <div className={`anim-fade-up delay-${i + 4}`}>
              <Card style={{ borderRadius: 16, textAlign: 'center' }} styles={{ body: { padding: 24 } }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 500, color: '#0d9488', lineHeight: 1 }}>
                  {s.value}
                </div>
                <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 8, display: 'block' }}>{s.label}</Text>
                <Text type="secondary" style={{ fontSize: 12, display: 'block', marginTop: 4 }}>{s.detail}</Text>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}
