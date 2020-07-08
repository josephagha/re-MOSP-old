import React, { Fragment, useState } from 'react'
import AIDA from '../../media/svg/logos/AIDA'
import UserIcon from '../../media/svg/icons/UserIcon'
import MenuIcon from '../../media/svg/icons/MenuIcon'
import { NavLink } from 'react-router-dom'
import auth from '../router/auth.route'
import { clearAllLocalStorage } from '../../API/Storage'

const Navbar = props => {
  const [isOpenNav, setIsOpenNav] = useState(false)
  const [isOpenUserOptionsNav, setIsOpenUserOptionsNav] = useState(false)
  const toggleUserOptionsNav = () =>
    setIsOpenUserOptionsNav(!isOpenUserOptionsNav)
  const toggleNav = () => setIsOpenNav(!isOpenNav)

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" onClick={toggleNav}>
              <MenuIcon />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <span className="navbar-brand aidaLogo">
              <AIDA />
            </span>
            <ul className="navbar-nav ml-lg-5 mr-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <NavLink
                  to="/products"
                  className="nav-link mr-2"
                  activeStyle={{ color: '#3da2dc' }}
                >
                  Produkte
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/overview"
                  className="nav-link"
                  activeStyle={{ color: '#3da2dc' }}
                >
                  Überblick
                </NavLink>
              </li>
            </ul>
          </div>

          <span className=" aidaLogoMobile   ">
            <AIDA />
          </span>

          <div
            className="userIcon"
            onClick={auth.isAuthenticated() ? toggleUserOptionsNav : ''}
          >
            <UserIcon />
            <div
              className={
                isOpenUserOptionsNav ? 'userOptionsList' : ' displayNone'
              }
              onClick={() => {
                auth.logout(() => {
                  clearAllLocalStorage()
                  window.location.href = `${window.location.origin}/login`
                })
              }}
            >
              <span onClick={toggleUserOptionsNav}>logout</span>
            </div>
          </div>
        </div>
      </nav>
      <div className={isOpenNav ? 'menuMobile' : ' displayNone'}>
        <ul className="navbar-nav ml-4s mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink
              to="/products"
              className="nav-link"
              activeStyle={{ color: '#3da2dc' }}
              onClick={toggleNav}
            >
              Produkte
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/overview"
              className="nav-link"
              activeStyle={{ color: '#3da2dc' }}
              onClick={toggleNav}
            >
              Überblick
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Navbar
