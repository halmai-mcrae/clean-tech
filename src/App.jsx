import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import NavBar from './components/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Banner from './components/Banner'

// Styles
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <Banner />
        </header>
      </div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </>
  )
}

export default App
