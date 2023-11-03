import React from 'react';
import '../styles/Header.css';
import gemstones_img from '../images/gemstones_backdrop2.jpg';

const Header = () => {
  return (
    <header>
        <div class="header__text-box">
            <h1>Finest<br/><span class="underline-header">Gemstone</span><br/>Selection</h1>

            <p>Enjoy the most pristine gemstones with the cheapest prices on the market</p>

            
            

        </div>
        
        {/* <img src={gemstones_img} alt="Gemstones" className="backdrop-img" /> */}
    </header>
  );
};

export default Header;
