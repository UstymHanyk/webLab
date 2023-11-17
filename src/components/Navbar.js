import React from 'react';
import logo from '../images/logo_white.png';
import {Link} from 'react-router-dom';

import '../styles/Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar">
        {/* <div className="navbar-left"> */}
        <img src={logo} alt="Gemstone Store Logo" className="logo-image" />
           {/* </div> */}
        <ul className="navbar-menu">
          <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item">
          <Link to="/catalog">Catalog</Link></li>
          <li className="navbar-item">
          <Link to="/cart">Cart</Link>
         </li>
        </ul>
        

      </nav>
    );
  };
  
  export default Navbar;
