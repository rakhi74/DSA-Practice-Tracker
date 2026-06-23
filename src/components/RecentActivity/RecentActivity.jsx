import React, { useMemo } from 'react'

function RecentActivity({ problems }) {
  const recent = useMemo(() => {
    return [...problems]
      .sort((a, b) => new Date(b.dateSolved) - new Date(a.dateSolved))
      .slice(0, 10)
  }, [problems])

  return (
    <div className="section-card">
      <h2>🕐 Recent Activity</h2>
      {recent.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No problems solved yet</p>
      ) : (
        <ul style={{ listStyle: 'none' }}>
          {recent.map(p => (
            <li key={p.id} style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ fontSize: '1rem' }}>{p.name}</strong>
                  <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
                    — {p.topic}
                  </span>
                  <span className={`difficulty-badge ${p.difficulty}`} style={{ marginLeft: '0.5rem' }}>
                    {p.difficulty}
                  </span>
                </div>
                <small style={{ color: 'var(--text-secondary)' }}>
                  {p.platform} • {new Date(p.dateSolved).toLocaleDateString()}
                </small>
              </div>
              {p.notes && (
                <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginLeft: '0.5rem' }}>
                  💬 {p.notes}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RecentActivity