import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/locations'>Locations</NavLink>
    </nav>
  )
}

export default Navbar