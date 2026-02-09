import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false)
  const [subMenu, setSubMenu] = useState(false)

  return (
    <nav className='header-scetion'>
      <div className="header-container">
        <div className="navbar">

          <div className="navbar-top">
            <NavLink to='/' className='logo-link'>
              <img src="https://whisperpay-project.onrender.com/static/media/whisperpay.e06b4f6e3c967d0059b3.png" alt="logo" />
            </NavLink>

            <button className='hamberger' onClick={() => setMenuStatus(!menuStatus)}>
              <FontAwesomeIcon icon={menuStatus ? faXmark : faBars} size='lg' />
            </button>
          </div>

          <div className={`nav-links ${menuStatus ? "active" : ""}`}>

            <NavLink to='/' className='nav-item'>Home</NavLink>
            <NavLink to='/' className='nav-item'>About</NavLink>

            {/* 🔽 Submenu */}
            <div className="nav-item dropdown">
              <span onClick={() => setSubMenu(!subMenu)}>
                Product <FontAwesomeIcon icon={faChevronDown} />
              </span>

              <div className={`submenu ${subMenu ? "open" : ""}`}>
                <NavLink to='/product/upi'>UPI</NavLink>
                <NavLink to='/product/wallet'>Wallet</NavLink>
                <NavLink to='/product/cards'>Cards</NavLink>
              </div>
            </div>

            <NavLink to='/' className='nav-item'>Blog</NavLink>
            <NavLink to='/' className='nav-item'>Contact</NavLink>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
