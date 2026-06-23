import React, { useMemo } from 'react'
import { calculateInterviewReadiness } from '../../utils/helpers.jsx'

function InterviewReadiness({ problems }) {
  const readiness = useMemo(() => calculateInterviewReadiness(problems), [problems])

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Interview Ready': return 'var(--success)'
      case 'Advanced': return 'var(--primary)'
      case 'Intermediate': return 'var(--warning)'
      default: return 'var(--text-secondary)'
    }
  }

  return (
    <div className="section-card">
      <h2>💼 Interview Readiness</h2>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '5rem', fontWeight: '700', color: 'var(--primary)', lineHeight: 1 }}>
          {readiness.score}
        </p>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>out of 100</p>
        <div style={{ 
          background: getBadgeColor(readiness.badge), 
          padding: '0.75rem 2rem', 
          borderRadius: '0.5rem',
          display: 'inline-block',
          fontWeight: '700',
          fontSize: '1.1rem',
          color: 'white'
        }}>
          {readiness.badge}
        </div>
      </div>
    </div>
  )
}

export default InterviewReadiness