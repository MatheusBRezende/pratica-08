import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import './App.css'

function App() {
  return (
    <Router>
      <div className="main-container">
        <header className="app-header">
          <h1>Loja Virtual</h1>
        </header>
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App