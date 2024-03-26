import React from 'react'
import { Outlet,Link } from "react-router-dom";
import swiggylogo from "./Images/swiggyx64.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUser, faInbox,faMagnifyingGlass,faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import "./styles/navbar.css";

export default function Navbar() {
  const mystyle = {
    'maxWidth': '1400px',
    'minWidth': '1200px',
    'position': 'relative',
    'margin': '0 auto',
    'height': '80px',
    'background': '#fff',
    'display': 'flex',
    '-msFlexAlign': 'center', 
    'alignItems': 'center'
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white shadow-sm" style={mystyle}>
  <div className="containerelements container-fluid" style={{ transition: 'transform 0.3s' }}>
    <Link className="navbar-brand" to="/" style={{ marginLeft: '80px' }}><img src={swiggylogo} alt="" style={{ transition: 'transform 0.3s' }} className="logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/about"><FontAwesomeIcon icon={faLocationCrosshairs} /> Location</Link>
        </li>
      </ul>
      <form className="d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/about"><FontAwesomeIcon icon={faMagnifyingGlass} />Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about"><FontAwesomeIcon icon={faInbox} />Help</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup"><FontAwesomeIcon icon={faUser} />Sign In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart" style={{ marginRight: '80px' }}><FontAwesomeIcon icon={faCartPlus} /> Cart</Link>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
<Outlet />
    </>
  )
}
