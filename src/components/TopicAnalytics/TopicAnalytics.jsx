import React, { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

function TopicAnalytics({ problems }) {
  const topicData = useMemo(() => {
    const counts = {}
    problems.forEach(p => counts[p.topic] = (counts[p.topic] || 0) + 1)
    return Object.entries(counts)
      .map(([topic, count]) => ({ topic, count }))
      .sort((a, b) => b.count - a.count)
  }, [problems])

  const strongest = topicData.length > 0 ? topicData[0] : null
  const weakest = topicData.length > 0 ? topicData[topicData.length - 1] : null

  return (
    <div className="section-card">
      <h2>📊 Topic Analytics</h2>
      {topicData.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Add problems to see topic analytics</p>
      ) : (
        <>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topicData}>
                <XAxis dataKey="topic" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <div>
              <p style={{ color: 'var(--success)', fontWeight: '600' }}>
                🏆 Strongest: {strongest?.topic} ({strongest?.count} problems)
              </p>
            </div>
            <div>
              <p style={{ color: 'var(--danger)', fontWeight: '600' }}>
                📉 Weakest: {weakest?.topic} ({weakest?.count} problems)
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TopicAnalytics