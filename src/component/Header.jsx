import React from 'react'
import headerImage from '../assets/header.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <img className="navbar-brand" alt='logo' src={headerImage} style={{ width: '100px', height: '50px' }}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link active" aria-current="page">Home</p>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.olx.co.id/profile/125116477">OLX</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://wa.me/6285172407718">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header