import React, { useRef } from 'react'

function ExportReport({ onExportJSON, onExportCSV, onImport }) {
  const fileInput = useRef(null)

  const handleImport = (e) => {
    const file = e.target.files[0]
    if (!file) return
    
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result)
        onImport(data)
        alert('Data imported successfully!')
      } catch (error) {
        alert('Invalid file format. Please upload a valid JSON file.')
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="section-card">
      <h2>💾 Export & Import</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        Save your progress or import existing data
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button onClick={onExportJSON} className="btn-primary">📥 Export Progress (JSON)</button>
        <button onClick={onExportCSV} className="btn-primary">📊 Export as CSV</button>
        <button onClick={() => fileInput.current?.click()} className="btn-secondary">📤 Import Data</button>
        <input
          ref={fileInput}
          type="file"
          accept=".json"
          onChange={handleImport}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  )
}

export default ExportReport