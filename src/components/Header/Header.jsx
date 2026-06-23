import React from 'react'

function Header({ toggleTheme, isDark }) {
  return (
    <header className="header">
      <div>
        <h1>DSA Practice Tracker</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
          Built by: Rakhi Kumari<br />
          Email: itzrakhi74@gmail.com
        </p>
      </div>
      <div className="header-info">
        <a 
          href="https://digitalheroesco.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Built for Digital Heroes
        </a>
        <button onClick={toggleTheme} className="btn-secondary">
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  )
}

export default Header