import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink> {""}
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/Product'>Product</NavLink>
    </nav>
  )
}

export default Header
