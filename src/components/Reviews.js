import React from 'react';
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
      <div id="bg-wrap">
  <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
        <animate attributeName="fx" dur="136s" values="0%;3%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop>
        <stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
        <animate attributeName="fx" dur="94s" values="0%;3%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop>
        <stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
        <animate attributeName="fx" dur="86s" values="0%;3%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop>
        <stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
        <animate attributeName="fx" dur="92s" values="0%;5%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop>
        <stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
        <animate attributeName="fx" dur="98s" values="0%;5%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop>
        <stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
        <animate attributeName="fx" dur="102s" values="0%;5%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop>
        <stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop>
      </radialGradient>
    </defs>

    <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
      <animate attributeName="x" dur="80s" values="25%;0%;25%" repeatCount="indefinite"></animate>
      <animate attributeName="y" dur="84s" values="0%;25%;0%" repeatCount="indefinite"></animate>
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="28s" repeatCount="indefinite"></animateTransform>
    </rect>
    
    <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
      <animate attributeName="x" dur="100s" values="0%;25%;0%" repeatCount="indefinite"></animate>
      <animate attributeName="y" dur="48s" values="0%;25%;0%" repeatCount="indefinite"></animate>
      <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="36s" repeatCount="indefinite"></animateTransform>
    </rect>
  </svg>
</div>


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
