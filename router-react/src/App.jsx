import React from "react"
import { Routes, Route } from "react-router"
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Product from "./components/pages/Product.jsx"
import Header from "./components/layouts/Header.jsx"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/P/:id" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
