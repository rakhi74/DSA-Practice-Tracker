import React, { useMemo } from 'react'
import { calculateStreak, calculateInterviewReadiness } from '../../utils/helpers.jsx'

function Dashboard({ problems, goal }) {
  const stats = useMemo(() => {
    const total = problems.length
    const easy = problems.filter(p => p.difficulty === 'Easy').length
    const medium = problems.filter(p => p.difficulty === 'Medium').length
    const hard = problems.filter(p => p.difficulty === 'Hard').length

    const streaks = calculateStreak(problems)
    const readiness = calculateInterviewReadiness(problems)

    const topicCoverage = new Set(problems.map(p => p.topic)).size
    const goalProgress = goal ? Math.round((total / goal) * 100) : 0

    return {
      total,
      easy,
      medium,
      hard,
      currentStreak: streaks.currentStreak,
      bestStreak: streaks.bestStreak,
      readinessScore: readiness.score,
      readinessBadge: readiness.badge,
      goalProgress: Math.min(100, goalProgress),
      topicCoverage
    }
  }, [problems, goal])

  return (
    <section className="dashboard-grid">
      <div className="stat-card">
        <h3>Total Problems Solved</h3>
        <div className="value">{stats.total}</div>
      </div>

      <div className="stat-card easy">
        <h3>Easy</h3>
        <div className="value">{stats.easy}</div>
      </div>

      <div className="stat-card medium">
        <h3>Medium</h3>
        <div className="value">{stats.medium}</div>
      </div>

      <div className="stat-card hard">
        <h3>Hard</h3>
        <div className="value">{stats.hard}</div>
      </div>

      <div className="stat-card">
        <h3>Current Streak</h3>
        <div className="value">{stats.currentStreak} days</div>
      </div>

      <div className="stat-card">
        <h3>Best Streak</h3>
        <div className="value">{stats.bestStreak} days</div>
      </div>

      <div className="stat-card">
        <h3>Interview Readiness</h3>
        <div className="value">{stats.readinessScore}/100</div>
      </div>

      <div className="stat-card">
        <h3>Goal Progress</h3>
        <div className="value">{stats.goalProgress}%</div>
      </div>
    </section>
  )
}

export default Dashboard