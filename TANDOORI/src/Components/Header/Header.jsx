import React from 'react'
import './Header.css';
import brand_logo from '../img/tandori.jpg';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
      <nav className='navbar'>
         <img src={brand_logo} className="logo" alt="Tandoori"/> 
         <div className='navbar-links'>
            <NavLink to="/"  className="active" >Home</NavLink>
            <NavLink to="/menu" className="active">Menu</NavLink>
            <NavLink to="/about" className="active">About Us</NavLink>
            <NavLink to="/contact" className="active">Contact Us</NavLink>
            <NavLink to="/Login" className="active">Login</NavLink>
         </div>
      </nav>    
  )
}

export default Header