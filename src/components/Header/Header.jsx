import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
function Header() {
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg">
  <div className="container d-flex justify-content-between align-items-center">
    <Link to='/' className="navbar-brand" href="#">
        <img src={logo} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end align-items-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className="nav-link fs-5 active text-light " aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/portfolio' className="nav-link fs-5 text-light" href="#">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to='/services' className="nav-link fs-5 text-light" href="#">Services</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link fs-5 text-light" aria-disabled="true">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Header
