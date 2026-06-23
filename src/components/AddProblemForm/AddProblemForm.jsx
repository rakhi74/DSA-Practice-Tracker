import React, { useState } from 'react'
import { PLATFORMS, TOPICS, DIFFICULTIES } from '../../utils/helpers.jsx'

function AddProblemForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    platform: 'LeetCode',
    topic: 'Arrays',
    difficulty: 'Easy',
    notes: '',
    dateSolved: new Date().toISOString().split('T')[0]
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Problem name is required'
    if (!formData.platform) newErrors.platform = 'Platform is required'
    if (!formData.topic) newErrors.topic = 'Topic is required'
    if (!formData.difficulty) newErrors.difficulty = 'Difficulty is required'
    if (!formData.dateSolved) newErrors.dateSolved = 'Date is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      onSubmit(formData)
      setFormData({
        name: '',
        platform: 'LeetCode',
        topic: 'Arrays',
        difficulty: 'Easy',
        notes: '',
        dateSolved: new Date().toISOString().split('T')[0]
      })
      setErrors({})
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <div className="form-group">
        <label>Problem Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g., Two Sum"
        />
        {errors.name && <span style={{ color: 'var(--danger)', fontSize: '0.85rem' }}>{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Platform</label>
        <select name="platform" value={formData.platform} onChange={handleChange}>
          {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        {errors.platform && <span style={{ color: 'var(--danger)', fontSize: '0.85rem' }}>{errors.platform}</span>}
      </div>

      <div className="form-group">
        <label>Topic</label>
        <select name="topic" value={formData.topic} onChange={handleChange}>
          {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.topic && <span style={{ color: 'var(--danger)', fontSize: '0.85rem' }}>{errors.topic}</span>}
      </div>

      <div className="form-group">
        <label>Difficulty</label>
        <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
          {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        {errors.difficulty && <span style={{ color: 'var(--danger)', fontSize: '0.85rem' }}>{errors.difficulty}</span>}
      </div>

      <div className="form-group">
        <label>Date Solved</label>
        <input
          type="date"
          name="dateSolved"
          value={formData.dateSolved}
          onChange={handleChange}
        />
        {errors.dateSolved && <span style={{ color: 'var(--danger)', fontSize: '0.85rem' }}>{errors.dateSolved}</span>}
      </div>

      <div className="form-group">
        <label>Notes (Optional)</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Tips, insights, or things to remember..."
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">Add Problem</button>
        <button 
          type="button" 
          className="btn-secondary" 
          onClick={() => setFormData({
            name: '',
            platform: 'LeetCode',
            topic: 'Arrays',
            difficulty: 'Easy',
            notes: '',
            dateSolved: new Date().toISOString().split('T')[0]
          })}
        >
          Clear
        </button>
      </div>
    </form>
  )
}

export default AddProblemForm