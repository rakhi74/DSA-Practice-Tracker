import React, { useMemo } from 'react'
import { calculateStreak } from '../../utils/helpers.jsx'

function AchievementBadges({ problems }) {
  const badges = useMemo(() => {
    const total = problems.length
    const streakDays = calculateStreak(problems).currentStreak
    
    return [
      { id: 1, title: 'First 10 Problems', icon: '🎯', threshold: 10, earned: total >= 10 },
      { id: 2, title: '50 Problems', icon: '⭐', threshold: 50, earned: total >= 50 },
      { id: 3, title: '100 Problems', icon: '🏆', threshold: 100, earned: total >= 100 },
      { id: 4, title: '7-Day Streak', icon: '🔥', threshold: 7, earned: streakDays >= 7 },
      { id: 5, title: '30-Day Streak', icon: '💪', threshold: 30, earned: streakDays >= 30 },
    ]
  }, [problems])

  return (
    <div className="section-card">
      <h2>🎖️ Achievements</h2>
      <div className="badges-grid">
        {badges.map(badge => (
          <div key={badge.id} className={`badge ${badge.earned ? 'earned' : ''}`}>
            <div className="badge-icon">{badge.icon}</div>
            <div className="badge-title">{badge.title}</div>
            {badge.earned && (
              <div style={{ color: 'var(--success)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                ✓ Earned
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AchievementBadges