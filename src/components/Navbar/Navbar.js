import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faChevronDown, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false)
  const [subMenu, setSubMenu] = useState(false)

  const token = localStorage.getItem("token")
  const temp_data = useSelector((state) => state.cartReducer.cart_product);
  const wishlist_data = useSelector((state) => state.wishcartReducer.wish_data);


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
            <NavLink to='/about' className='nav-item'>About</NavLink>

            {/* 🔽 Submenu */}
            <div className="nav-item dropdown">
              <span onClick={() => setSubMenu(!subMenu)}>
                Product <FontAwesomeIcon icon={faChevronDown} />
              </span>

            </div>

            <NavLink to='/cart' className='nav-item cart-counter'>
              <FontAwesomeIcon icon={faCartShopping} size={'xl'} />
              <span>{temp_data.length}</span>
            </NavLink>

            <NavLink to='/wish' className='nav-item cart-counter'>
             <FontAwesomeIcon icon={faHeart} size={'xl'} />
              <span>{wishlist_data.length}</span>
            </NavLink>

            {token ?
              <NavLink to='/login' className='nav-item' onClick={() => {
                localStorage.removeItem('token')
              }}>Logout</NavLink>
              :
              <NavLink to='/login' className='nav-item'>Login</NavLink>
            }
            <NavLink to='/register' className='nav-item'>Register</NavLink>
          

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
