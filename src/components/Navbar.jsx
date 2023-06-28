import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className='navigation-bar'>
        <li className='navigation-button'><NavLink to='/'>Home</NavLink></li>
        <li className='navigation-button'><NavLink to='/cities'>Specific city</NavLink></li>
        <li className='navigation-button'><NavLink to='/locations'> - Current Location 5Days -</NavLink></li>
        <li className='navigation-button'><NavLink to='/cities-five-days'> - Specific city 5Days -</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar