import React from "react"
import { Routes, Route } from "react-router"
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Product from "./components/pages/Product.jsx"
import Header from "./components/layouts/Header.jsx"

function App() {
  let products = [
    {
      id: 1,
      name: "Product 1",
      price: 100
    },
    {
      id: 2,
      name: "Product 2",
      price: 200
    },
    {
      id: 3,
      name: "Product 3",
      price: 300
    }
  ]

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/P/:id" element={<Product products={products} />} />
      </Routes>
    </>
  )
}

export default App
