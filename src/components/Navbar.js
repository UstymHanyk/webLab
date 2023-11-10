import React from 'react';
import logo from '../images/logo_white.png';

import '../styles/Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar">
        {/* <div className="navbar-left"> */}
        <img src={logo} alt="Gemstone Store Logo" className="logo-image" />
           {/* </div> */}
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="/">Home</a></li>
          <li className="navbar-item"><a href="/catalog">Catalog</a></li>
          <li className="navbar-item"><a href="/cart">Cart</a></li>
        </ul>
        

      </nav>
    );
  };
  
  export default Navbar;
