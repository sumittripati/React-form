import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div><h1>this is header page</h1></div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
    
  )
}

export default Header

