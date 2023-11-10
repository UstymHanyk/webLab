import React from 'react';
import GradientAnimatedBackdrop from './GradientAnimatedBackdrop';
import '../styles/Reviews.css';


const getRandomAvatar = () => {
  const randomGender = Math.random() < 0.5 ? 'male' : 'female';
  const randomQuery = Math.floor(Math.random() * 1000);
  return `https://xsgames.co/randomusers/avatar.php?g=${randomGender}&random=${randomQuery}`;
};

const Reviews = () => {
  return (
    <div className="review-wrapper">
      {/* Gradient animation was borrowed and slighlty modified from https://codepen.io/alvarotrigo/pen/qBMMyxz */}
      

      <GradientAnimatedBackdrop></GradientAnimatedBackdrop>
      <h2>
        <span className="underline-light_purple">Our beloved customers</span>
      </h2>
      <div className="review-div">
        
        <div className="flex-row">
          <div className="review-item eachdiv col-2">
            <div className="user-details">
              <div className="img-box">
                <img src={getRandomAvatar()} alt="" />
              </div>
              <div className="det-box">
                <p className="name">Jeanette Harmon</p>
                <p className="designation">Verified Graduate</p>
              </div>
            </div>
            <div className="review-content">
              <h4 className="review-title">An Exquisite Sapphire Purchase</h4>
              <p className="review-text">
                "I recently acquired a stunning sapphire gemstone from this
                store, and it has been an absolutely delightful experience. The
                gemstone's brilliance and color are beyond compare. I'm utterly
                thrilled with my purchase and would recommend this store to all
                gemstone enthusiasts."
              </p>
            </div>
          </div>

          <div className="review-item eachdiv col-1">
            <div className="user-details">
              <div className="img-box">
                <img src={getRandomAvatar()} alt="" />
              </div>
              <div className="det-box">
                <p className="name">John Doe</p>
                <p className="designation">Verified Gem Collector</p>
              </div>
            </div>
            <div className="review-content">
              <h4 className="review-title">A Spectacular Ruby Find</h4>
              <p className="review-text">
                "I can't contain my excitement about the exceptional ruby
                gemstone I found here. It's a real treasure. The gemstone is a
                vibrant red hue, and its clarity is remarkable. I'm incredibly
                satisfied with my purchase and would return for more gems."
              </p>
            </div>
          </div>
        </div>

        <div className="flex-row">
          <div className="review-item eachdiv col-1">
            <div className="user-details">
              <div className="img-box">
                <img src={getRandomAvatar()} alt="" />
              </div>
              <div className="det-box">
                <p className="name">Alice Gemlover</p>
                <p className="designation">Mesmerized by the Emerald</p>
              </div>
            </div>
            <div className="review-content">
              <h4 className="review-title">
                An overall wonderful and rewarding experience
              </h4>
              <p className="review-text">
                "My recent emerald gemstone purchase has left me utterly
                mesmerized. The rich green color and the quality of the gemstone
                are unparalleled. It's the centerpiece of my collection now.
                This store is a gemstone lover's paradise!"
              </p>
            </div>
          </div>
          <div className="review-item eachdiv col-2">
            <div className="user-details">
              <div className="img-box">
                <img src={getRandomAvatar()} alt="" />
              </div>
              <div className="det-box">
                <p className="name">GemstoneGuru123</p>
                <p className="designation">Gemstone Aficionado</p>
              </div>
            </div>
            <div className="review-content">
              <h4 className="review-title">Dazzling Diamond Delight</h4>
              <p className="review-text">
                "The diamond gemstone I acquired from this store is nothing
                short of spectacular. It's so brilliantly cut and sparkles like
                a thousand stars. This gemstone has become my prized possession,
                and I couldn't be happier."
              </p>
            </div>
          </div>
        </div>

        <div className="flex-row">
          <div className="review-item eachdiv col-1">
            <div className="user-details">
              <div className="img-box">
                <img src={getRandomAvatar()} alt="" />
              </div>
              <div className="det-box">
                <p className="name">Sophia GemCollector</p>
                <p className="designation">Verified Gem Collector</p>
              </div>
            </div>
            <div className="review-content">
              <h4 className="review-title">My Precious Alexandrite</h4>
              <p className="review-text">
                "My purchase of an alexandrite gemstone from this store has
                been a highlight of my gemstone collecting journey. The stone's
                unique color-changing properties are truly enchanting. It's a
                gem with a personality of its own, and I'm thrilled to own it."
              </p>
            </div>
          </div>

          <div className="review-item eachdiv col-1">
            <div className="user-details">
              <div className="img-box">
                <img src={getRandomAvatar()} alt="" />
              </div>
              <div className="det-box">
                <p className="name">William RadiantGemstones</p>
                <p className="designation">Radiant Gem Collector</p>
              </div>
            </div>
            <div className="review-content">
              <h4 className="review-title">Radiant Rhodolite Glow</h4>
              <p className="review-text">
                "I recently acquired a rhodolite gemstone with a radiant glow
                from this store. The gem's vibrant reddish-pink hue and sparkle
                are unmatched. It's a testament to the store's commitment to
                quality. I'm absolutely in love with my purchase."
              </p>
            </div>
          </div>
        </div>
      </div>
      <buttton className="view-more-btn"> View more</buttton>
    </div>
  );
};

export default Reviews;
