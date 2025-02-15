import React from "react"
import { Routes, Route } from "react-router"
import Home from './components/pages/Home.jsx'
import Women from "./components/pages/Women.jsx"
import Men from "./components/pages/Men.jsx"
import Kids from "./components/pages/Kids.jsx"
import Cart from "./components/pages/Cart.jsx"
import Product from "./components/pages/Product.jsx"
import Login from "./components/pages/Login.jsx"
import Register from "./components/pages/Register.jsx"
import DashBorad from "./components/pages/DashBorad.jsx"
import Header from "./components/layouts/Header/Header.jsx"
import Footer from "./components/layouts/Footer/Footer.jsx"
import { CartProvider } from './components/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product/:productName" element={<Product />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/DashBorad" element={<DashBorad />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </CartProvider>
    </>
  )
}

export default App
