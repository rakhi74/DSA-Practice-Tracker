# 🚀 DSA Practice Tracker

A modern React + Vite web application that helps students track solved DSA problems, monitor streaks, analyze weak topics, and measure interview readiness — all with LocalStorage, dark mode, and no backend. 💻📈

## ✨ Features

- 📊 Dashboard with total solved problems, difficulty counts, streaks, and readiness score.
- ➕ Add problem form with validation.
- 📋 Problems table with search and sorting.
- 📈 Topic analytics with progress bars and charts.
- 🎯 Difficulty analytics with visual charts.
- 🏁 Goal tracker with animated progress bar.
- 🔥 Streak system based on solved dates.
- 🕒 Recent activity showing the latest 10 problems.
- 💼 Interview readiness score with badge levels.
- 💾 Export progress as JSON and CSV.
- 📥 Import existing progress data.
- 🌙 Dark mode with LocalStorage persistence.
- 📱 Responsive UI for desktop, tablet, and mobile.
- 🏆 Achievement badges.
- 📅 GitHub-style problem completion heatmap calendar.

## 🛠️ Tech Stack

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript
- 🗄️ LocalStorage
- 📊 Recharts

## 📁 Folder Structure

```bash
dsa_practice_tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── AddProblemForm/
│   │   ├── ProblemsTable/
│   │   ├── TopicAnalytics/
│   │   ├── DifficultyAnalytics/
│   │   ├── GoalTracker/
│   │   ├── StreakSystem/
│   │   ├── RecentActivity/
│   │   ├── InterviewReadiness/
│   │   ├── ExportReport/
│   │   ├── Header/
│   │   ├── AchievementBadges/
│   │   └── Calendar/
│   ├── hooks/
│   ├── utils/
│   ├── css/
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/dsa-practice-tracker.git
cd dsa-practice-tracker
npm install
```

## ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

The app will run on:

```bash
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
```

## 👀 Preview Production Build

```bash
npm run preview
```

## 🧠 How It Works

- All data is stored in browser LocalStorage.
- You can add solved problems manually.
- The dashboard automatically calculates:
  - total solved problems
  - topic distribution
  - difficulty distribution
  - current and best streak
  - goal progress
  - interview readiness score
- You can export or import your data anytime.

## 🌐 Deployment

This project is ready for deployment on Vercel.

### Vercel Steps
1. Push the code to GitHub.
2. Open Vercel and import the repository.
3. Vercel will detect Vite automatically.
4. Deploy the app.

## 👩‍💻 Built By

**Rakhi Kumari**  
Email: itzrakhi74@gmail.com.com

## 📄 License

This project is for educational and personal tracking use.

## 📸 Project Screenshots
### Dashboard Overview
<img width="1873" height="940" alt="Image" src="https://github.com/user-attachments/assets/46993aff-3b56-4e0c-8fb4-638f44adced6" />

### Problem Tracking Table
<img width="1536" height="957" alt="Image" src="https://github.com/user-attachments/assets/4a58ff33-4efb-4b66-a7bb-28ac35834694" />

### Analytics and Progress Heatmap
<img width="1527" height="746" alt="Image" src="https://github.com/user-attachments/assets/46370831-748b-460a-bf45-0549110c8743" />



