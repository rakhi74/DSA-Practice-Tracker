import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import AddProblemForm from './components/AddProblemForm/AddProblemForm.jsx'
import ProblemsTable from './components/ProblemsTable/ProblemsTable.jsx'
import TopicAnalytics from './components/TopicAnalytics/TopicAnalytics.jsx'
import DifficultyAnalytics from './components/DifficultyAnalytics/DifficultyAnalytics.jsx'
import GoalTracker from './components/GoalTracker/GoalTracker.jsx'
import StreakSystem from './components/StreakSystem/StreakSystem.jsx'
import RecentActivity from './components/RecentActivity/RecentActivity.jsx'
import InterviewReadiness from './components/InterviewReadiness/InterviewReadiness.jsx'
import ExportReport from './components/ExportReport/ExportReport.jsx'
import AchievementBadges from './components/AchievementBadges/AchievementBadges.jsx'
import Calendar from './components/Calendar/Calendar.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.jsx'
import { useTheme } from './hooks/useTheme.jsx'

function App() {
  const [problems, setProblems] = useLocalStorage('dsa-problems', [])
  const [goal, setGoal] = useLocalStorage('dsa-goal', 200)
  const [showForm, setShowForm] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const addProblem = (problem) => {
    setProblems([...problems, { ...problem, id: Date.now() }])
  }

  const updateProblem = (updatedProblem) => {
    setProblems(problems.map(p => p.id === updatedProblem.id ? updatedProblem : p))
  }

  const deleteProblem = (id) => {
    setProblems(problems.filter(p => p.id !== id))
  }

  const exportJSON = () => {
    const data = { problems, goal }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'dsa-progress.json'
    a.click()
  }

  const exportCSV = () => {
    const headers = ['Name', 'Platform', 'Topic', 'Difficulty', 'Date', 'Notes']
    const rows = problems.map(p => 
      [p.name, p.platform, p.topic, p.difficulty, p.dateSolved, p.notes]
        .map(cell => `"${cell || ''}"`)
        .join(',')
    )
    const csv = [headers.join(','), ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'dsa-progress.csv'
    a.click()
  }

  const importData = (jsonData) => {
    if (jsonData.problems) setProblems(jsonData.problems)
    if (jsonData.goal) setGoal(jsonData.goal)
  }

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main className="main-content">
        <Dashboard problems={problems} goal={goal} />
        
        <div className="content-grid">
          <section className="section-card">
            <h2>📊 Quick Add</h2>
            <button onClick={() => setShowForm(!showForm)} className="btn-primary">
              {showForm ? 'Close Form' : '+ Add Problem'}
            </button>
            {showForm && <AddProblemForm onSubmit={addProblem} />}
          </section>
          
          <GoalTracker current={problems.length} goal={goal} setGoal={setGoal} />
          <StreakSystem problems={problems} />
        </div>
        
        <ProblemsTable problems={problems} onUpdate={updateProblem} onDelete={deleteProblem} />
        
        <div className="analytics-grid">
          <TopicAnalytics problems={problems} />
          <DifficultyAnalytics problems={problems} />
        </div>
        
        <div className="content-grid">
          <InterviewReadiness problems={problems} />
          <AchievementBadges problems={problems} />
        </div>
        
        <RecentActivity problems={problems} />
        <Calendar problems={problems} />
        <ExportReport onExportJSON={exportJSON} onExportCSV={exportCSV} onImport={importData} />
      </main>
    </div>
  )
}

export default App