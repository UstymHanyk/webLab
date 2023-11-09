import React from 'react';
import '../styles/AboutUs.css';
import AboutUsCard from './AboutUsCard'; // Import the AboutUsCard component

const AboutUs = () => {
  const cardData = [
    {
      title: 'Gemstones Sold:',
      text: 'Over 100,000 gemstones have found new homes with our delighted customers.',
    },
    {
      title: 'On The Market:',
      text: "We've been proudly serving gemstone enthusiasts since 1987.",
    },
    {
      title: 'Customer Rating:',
      text: 'Our commitment to quality has earned us a 94% satisfaction rate among our customers.',
    },
    {
      title: 'Gemstone Variety:',
      text: 'We offer over 500 unique types of gemstones, ensuring a wide selection for our customers.',
    },
    {
      title: 'Expert Gemologists:',
      text: 'Our team of certified gemstone experts ensures the highest quality and authenticity of our gemstones.',
    },
    {
      title: 'Worldwide Shipping:',
      text: 'We provide worldwide shipping to over 100 countries, so you can enjoy our gemstones anywhere in the world.',
    },
    {
      title: 'Quality Assurance:',
      text: "Our commitment to 100% genuine gemstones ensures that you're getting the best quality products.",
    },
    {
      title: 'Customer Support:',
      text: 'Our dedicated customer support team is available 24/7 to assist you with any inquiries or assistance you may need.',
    },
  ];

  return (
    <div className="about-us">
      <h2><span className="underline-light_purple">About us</span></h2>
      <div className="about-us__container_wrapper">
        {cardData.map((card, index) => (
          <AboutUsCard key={index} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
