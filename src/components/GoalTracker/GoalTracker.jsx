import React, { useState } from 'react'

function GoalTracker({ current, goal, setGoal }) {
  const [showInput, setShowInput] = useState(false)
  const [newGoal, setNewGoal] = useState(goal)

  const percentage = Math.round((current / goal) * 100)
  const remaining = goal - current

  const handleSave = () => {
    if (newGoal > 0) {
      setGoal(Number(newGoal))
      setShowInput(false)
    }
  }

  return (
    <div className="section-card">
      <h2>🎯 Goal Tracker</h2>
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>
          Solved: {current}/{goal}
        </p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
          {percentage}% complete • {remaining > 0 ? `${remaining} remaining` : 'Goal achieved! 🎉'}
        </p>
      </div>
      <button onClick={() => setShowInput(!showInput)} className="btn-secondary">
        {showInput ? 'Cancel' : 'Set Goal'}
      </button>
      {showInput && (
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <input
            type="number"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Target problems"
            style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', width: '150px' }}
          />
          <button onClick={handleSave} className="btn-primary">Save</button>
        </div>
      )}
    </div>
  )
}

export default GoalTracker