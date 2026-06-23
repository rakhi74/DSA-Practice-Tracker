import React, { useMemo } from 'react'
import { calculateStreak } from '../../utils/helpers.jsx'

function StreakSystem({ problems }) {
  const streaks = useMemo(() => calculateStreak(problems), [problems])

  const message = streaks.currentStreak >= 7 
    ? "🔥 Amazing! You're on a 7-day streak! Keep it up!"
    : streaks.currentStreak >= 3 
    ? "Great job! Keep your streak alive."
    : streaks.currentStreak > 0 
    ? "Nice! Start building your streak."
    : "Start solving today to build your streak!"

  return (
    <div className="section-card">
      <h2>🔥 Streak System</h2>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', lineHeight: 1 }}>
            {streaks.currentStreak}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Current Days</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--success)', lineHeight: 1 }}>
            {streaks.bestStreak}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Best Streak</p>
        </div>
      </div>
      <p style={{ color: 'var(--primary)', fontWeight: '600', textAlign: 'center', padding: '1rem', background: 'var(--bg-card)', borderRadius: '0.5rem' }}>
        {message}
      </p>
    </div>
  )
}

export default StreakSystem