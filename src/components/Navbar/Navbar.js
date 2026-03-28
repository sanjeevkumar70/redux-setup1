import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faChevronDown, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false)
  const [subMenu, setSubMenu] = useState(false)

  const token = localStorage.getItem("token")
  const temp_data = useSelector((state) => state.cartReducer.cart_product);
  const wishlist_data = useSelector((state) => state.wishcartReducer.wish_data);

  return (
    <nav className='header-section'>
      <div className="header-container">
        <div className="navbar">

          {/* TOP */}
          <div className="navbar-top">
            <NavLink to='/' className='logo-link'>
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-icon-svg-download-png-2249158.png" alt="logo" />
            </NavLink>

            <button className='hamburger' onClick={() => setMenuStatus(!menuStatus)}>
              <FontAwesomeIcon icon={menuStatus ? faXmark : faBars} size='lg' />
            </button>
          </div>

          {/* LINKS */}
          <div className={`nav-links ${menuStatus ? "active" : ""}`}>

            <NavLink to='/' className='nav-item'>Home</NavLink>

            <div className="nav-item dropdown">
              <span onClick={() => setSubMenu(!subMenu)}>
                Product <FontAwesomeIcon icon={faChevronDown} />
              </span>

              {subMenu && (
                <div className="dropdown-menu">
                  <NavLink to="/product/productlist" onClick={() => setSubMenu(false)}>Product list</NavLink>
                  <NavLink to="/product/womens" onClick={() => setSubMenu(false)}>Women's Fashion</NavLink>
                  <NavLink to="/product/electronics" onClick={() => setSubMenu(false)}>Electronics</NavLink>
                  <NavLink to="/product/shoes" onClick={() => setSubMenu(false)}>Shoes</NavLink>
                  <NavLink to="/product/accessories" onClick={() => setSubMenu(false)}>Accessories</NavLink>
                </div>
              )}
            </div>

            {/* CART */}
            <NavLink to='/cart' className='nav-item cart-counter'>
              <FontAwesomeIcon icon={faCartShopping} size='lg' />
              <span>{temp_data.length}</span>
            </NavLink>

            {/* WISHLIST */}
            <NavLink to='/wish' className='nav-item cart-counter'>
              <FontAwesomeIcon icon={faHeart} size='lg' />
              <span>{wishlist_data.length}</span>
            </NavLink>

            {token ? (
              <NavLink to='/login' className='nav-item' onClick={() => localStorage.removeItem('token')}>
                Logout
              </NavLink>
            ) : (
              <NavLink to='/login' className='nav-item'>Login</NavLink>
            )}

            <NavLink to='/register' className='nav-item'>Register</NavLink>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
