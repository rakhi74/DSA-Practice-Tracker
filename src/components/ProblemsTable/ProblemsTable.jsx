import React, { useState, useMemo } from 'react'

function ProblemsTable({ problems, onUpdate, onDelete }) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState({ field: 'dateSolved', order: 'desc' })

  const filteredAndSorted = useMemo(() => {
    let result = problems.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.topic.toLowerCase().includes(search.toLowerCase()) ||
      p.platform.toLowerCase().includes(search.toLowerCase())
    )
    
    result.sort((a, b) => {
      const aVal = a[sort.field]
      const bVal = b[sort.field]
      if (sort.order === 'asc') return aVal > bVal ? 1 : -1
      return aVal < bVal ? 1 : -1
    })
    
    return result
  }, [problems, search, sort])

  const handleSort = (field) => {
    setSort({ field, order: sort.field === field && sort.order === 'desc' ? 'asc' : 'desc' })
  }

  return (
    <section className="table-container">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search problems by name, topic, or platform..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          {filteredAndSorted.length} problems
        </span>
      </div>
      <table className="problems-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('platform')}>Platform</th>
            <th onClick={() => handleSort('topic')}>Topic</th>
            <th onClick={() => handleSort('difficulty')}>Difficulty</th>
            <th onClick={() => handleSort('dateSolved')}>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSorted.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.platform}</td>
              <td>{p.topic}</td>
              <td><span className={`difficulty-badge ${p.difficulty}`}>{p.difficulty}</span></td>
              <td>{new Date(p.dateSolved).toLocaleDateString()}</td>
              <td>
                <button onClick={() => onDelete(p.id)} className="btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredAndSorted.length === 0 && (
        <p style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          No problems found. Add your first problem!
        </p>
      )}
    </section>
  )
}

export default ProblemsTable