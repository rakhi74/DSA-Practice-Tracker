import React, { useMemo } from 'react'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getLevel(count) {
  if (count === 0) return 0
  if (count === 1) return 1
  if (count <= 2) return 2
  if (count <= 4) return 3
  return 4
}

function Calendar({ problems }) {
  const { months, weekdays, weeks, solvedCount, totalDays } = useMemo(() => {
    const solvedMap = {}
    problems.forEach((p) => {
      const d = p.dateSolved
      solvedMap[d] = (solvedMap[d] || 0) + 1
    })

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const days = []
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      days.push({
        date: dateStr,
        count: solvedMap[dateStr] || 0,
        level: getLevel(solvedMap[dateStr] || 0),
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' }),
        weekday: date.getDay(),
      })
    }

    const weeks = []
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7))
    }

    const months = []
    let lastMonth = ''
    days.forEach((d) => {
      if (d.month !== lastMonth) {
        months.push(d.month)
        lastMonth = d.month
      }
    })

    const solvedCount = Object.keys(solvedMap).length

    return {
      months,
      weekdays: WEEKDAYS,
      weeks,
      solvedCount,
      totalDays: days.length,
    }
  }, [problems])

  return (
    <div className="section-card calendar-card">
      <div className="calendar-header">
        <div>
          <h2>📅 Problem Completion Calendar</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
            {solvedCount} active days in the last {totalDays} days
          </p>
        </div>

        <div className="calendar-legend">
          <span>Less</span>
          <div className="legend-squares">
            <span className="legend-box level-0" />
            <span className="legend-box level-1" />
            <span className="legend-box level-2" />
            <span className="legend-box level-3" />
            <span className="legend-box level-4" />
          </div>
          <span>More</span>
        </div>
      </div>

      <div className="heatmap-wrapper">
        <div className="heatmap-weekdays">
          {weekdays.map((day) => (
            <div key={day} className="heatmap-weekday">
              {day}
            </div>
          ))}
        </div>

        <div className="heatmap-grid">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="heatmap-week">
              {week.map((day) => (
                <div
                  key={day.date}
                  className={`heatmap-day level-${day.level}`}
                  title={`${day.date} • ${day.count} problem(s) solved`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar