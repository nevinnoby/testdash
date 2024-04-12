import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App
