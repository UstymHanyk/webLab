import React from 'react';
import logo from '../images/logo_white.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    
    <footer>
        <div className="footer__content-wrapper">
            <div className="footer__logo-copyright-wrapper">
            <img src={logo} alt="Gemstone Store Logo" className="logo-img" />
                <p className="grey-text">©2023 Gesmtone Store. All rights reserved</p>
            </div>
            <hr/>
            <div className="footer__social-media-icons">
                <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">

                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">

                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">

                    <i className="fa-brands fa-youtube"></i>
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;