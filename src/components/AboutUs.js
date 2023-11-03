import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2><span className="underline-light_purple">About us</span></h2>
      <div className="about-us__container_wrapper">
        <div className="about-us__card">
          <p className="about-us__card__title">Gemstones Sold:</p>
          <p className="about-us__card__text">Over 100,000 gemstones have found new homes with our delighted customers.</p>
        </div>
        <div className="about-us__card">
          <p className="about-us__card__title">On The Market:</p>
          <p className="about-us__card__text">We've been proudly serving gemstone enthusiasts since 1987.</p>
        </div>
        <div className="about-us__card">
          <p className="about-us__card__title">Customer Rating:</p>
          <p className="about-us__card__text">Our commitment to quality has earned us a 94% satisfaction rate among our customers.</p>
        </div>
        <div className="about-us__card">
          <p className="about-us__card__title">Gemstone Variety:</p>
          <p className="about-us__card__text">We offer over 500 unique types of gemstones, ensuring a wide selection for our customers.</p>
        </div>
        <div className="about-us__card">
          <p className="about-us__card__title">Expert Gemologists:</p>
          <p className="about-us__card__text">Our team of certified gemstone experts ensures the highest quality and authenticity of our gemstones.</p>
        </div>
        <div className="about-us__card">
          <p className="about-us__card__title">Worldwide Shipping:</p>
          <p className="about-us__card__text">We provide worldwide shipping to over 100 countries, so you can enjoy our gemstones anywhere in the world.</p>
        </div>
        <div className="about-us__card">
          <p className="about-us__card__title">Quality Assurance:</p>
          <p className="about-us__card__text">Our commitment to 100% genuine gemstones ensures that you're getting the best quality products.</p>
        </div>
        <div className="about-us__card">
          <p className="about-us__card__title">Customer Support:</p>
          <p className="about-us__card__text">Our dedicated customer support team is available 24/7 to assist you with any inquiries or assistance you may need.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
