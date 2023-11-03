import React from 'react';
import Header from './Header';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import FAQ from './FAQ';

const Home = () => {
  return (
    <div>
      <Header />
      <Reviews />
      <FAQ />
      <AboutUs />
    </div>
  );
};

export default Home;
