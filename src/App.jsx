import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx'
import AppPage from './pages/AppPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} key='home' />
        <Route path='/app' element={<AppPage />} key='App' />
      </Routes>
    </Router>
  )
}

export default App
