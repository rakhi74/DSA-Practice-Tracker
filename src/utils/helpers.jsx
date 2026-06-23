export const PLATFORMS = ['LeetCode', 'GeeksForGeeks', 'HackerRank', 'Coding Ninjas', 'Other']

export const TOPICS = [
  'Arrays', 'Strings', 'Linked List', 'Stack', 'Queue', 
  'Tree', 'Graph', 'Heap', 'Dynamic Programming', 
  'Greedy', 'Recursion', 'Binary Search', 'Other'
]

export const DIFFICULTIES = ['Easy', 'Medium', 'Hard']

export const calculateStreak = (problems) => {
  const dates = problems.map(p => new Date(p.dateSolved).getTime())
  dates.sort((a, b) => a - b)
  
  let currentStreak = 0
  let bestStreak = 0
  let streakCounter = 0
  const oneDay = 24 * 60 * 60 * 1000
  
  if (dates.length > 0) {
    for (let i = 0; i < dates.length; i++) {
      if (i === 0 || dates[i] - dates[i-1] <= oneDay) {
        streakCounter++
      } else {
        streakCounter = 1
      }
      bestStreak = Math.max(bestStreak, streakCounter)
    }
    currentStreak = streakCounter
  }
  
  return { currentStreak, bestStreak }
}

export const calculateInterviewReadiness = (problems) => {
  const total = problems.length
  if (total === 0) return { score: 0, badge: 'Beginner' }
  
  const topicCoverage = new Set(problems.map(p => p.topic)).size
  const easy = problems.filter(p => p.difficulty === 'Easy').length
  const medium = problems.filter(p => p.difficulty === 'Medium').length
  const hard = problems.filter(p => p.difficulty === 'Hard').length
  
  const difficultyScore = (easy * 1 + medium * 2 + hard * 3) / total
  const score = Math.min(100, Math.round(
    (total / 200) * 40 + 
    (topicCoverage / 12) * 30 + 
    (difficultyScore / 3) * 30
  ))
  
  let badge = 'Beginner'
  if (score >= 80) badge = 'Interview Ready'
  else if (score >= 60) badge = 'Advanced'
  else if (score >= 40) badge = 'Intermediate'
  
  return { score, badge }
}