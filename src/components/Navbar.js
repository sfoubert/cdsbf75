import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-cdsbf75.gif'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="CDSBF75" style={{ width: '125px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Actualités
        </Link>
        <Link className="navbar-item" to="/calendar">
          Calendrier
        </Link>
        <Link className="navbar-item" to="/about">
          A propos
        </Link>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default Navbar
