import React from 'react'
import '@assets/styles/main.scss'
import Sidebar from '@components/Sidebar/Sidebar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <div className="dashboard">
          <Sidebar />
          <main className="dashboard__content">
            <Routes>
              <Route path="/" element={<h1>Dashboard</h1>} />
              <Route path="/profile" element={<h1>Profile</h1>} />
              <Route path="/settings" element={<h1>Settings</h1>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
