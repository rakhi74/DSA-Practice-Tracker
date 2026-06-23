import React, { useMemo } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

function DifficultyAnalytics({ problems }) {
  const difficultyData = useMemo(() => {
    const counts = { Easy: 0, Medium: 0, Hard: 0 }
    problems.forEach(p => counts[p.difficulty]++)
    return Object.entries(counts).map(([name, count]) => ({ name, count }))
  }, [problems])

  const COLORS = ['#10b981', '#f59e0b', '#ef4444']

  return (
    <div className="section-card">
      <h2>🎯 Difficulty Distribution</h2>
      {problems.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Add problems to see difficulty analytics</p>
      ) : (
        <>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie 
                  data={difficultyData} 
                  dataKey="count" 
                  nameKey="name" 
                  outerRadius={100}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {difficultyData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {difficultyData.map(d => (
              <p key={d.name} style={{ fontWeight: '600' }}>
                <span style={{ color: COLORS[d.name === 'Easy' ? 0 : d.name === 'Medium' ? 1 : 2] }}>●</span>
                {d.name}: {d.count} problems
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default DifficultyAnalytics