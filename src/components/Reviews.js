import {React, useState} from 'react';
import GradientAnimatedBackdrop from './GradientAnimatedBackdrop';
import '../styles/Reviews.css';
import Review from "./Review";
import ViewMoreButton from "./ViewMoreButton";




const getRandomAvatar = () => {
  const randomGender = Math.random() < 0.5 ? 'male' : 'female';
  const randomQuery = Math.floor(Math.random() * 1000);
  return `https://xsgames.co/randomusers/avatar.php?g=${randomGender}&random=${randomQuery}`;
};

const Reviews = () => {
  const [reviews] = useState([
    {
      avatar: getRandomAvatar(),
      name: 'Jeanette Harmon',
      designation: 'Verified Graduate',
      title: 'An Exquisite Sapphire Purchase',
      text: "I recently acquired a stunning sapphire gemstone from this store, and it has been an absolutely delightful experience. The gemstone's brilliance and color are beyond compare. I'm utterly thrilled with my purchase and would recommend this store to all gemstone enthusiasts."
    },
    {
      avatar: getRandomAvatar(),
      name: 'John Doe',
      designation: 'Verified Gem Collector',
      title: 'A Spectacular Ruby Find',
      text: "I can't contain my excitement about the exceptional ruby gemstone I found here. It's a real treasure. The gemstone is a vibrant red hue, and its clarity is remarkable. I'm incredibly satisfied with my purchase and would return for more gems."
    },
    {
      avatar: getRandomAvatar(),
      name: 'Alice Gemlover',
      designation: 'Mesmerized by the Emerald',
      title: 'An overall wonderful and rewarding experience',
      text: "My recent emerald gemstone purchase has left me utterly mesmerized. The rich green color and the quality of the gemstone are unparalleled. It's the centerpiece of my collection now. This store is a gemstone lover's paradise!"
    },
    {
      avatar: getRandomAvatar(),
      name: 'GemstoneGuru123',
      designation: 'Gemstone Aficionado',
      title: 'Dazzling Diamond Delight',
      text: "The diamond gemstone I acquired from this store is nothing short of spectacular. It's so brilliantly cut and sparkles like a thousand stars. This gemstone has become my prized possession, and I couldn't be happier."
    },
    {
      avatar: getRandomAvatar(),
      name: 'Sophia GemCollector',
      designation: 'Verified Gem Collector',
      title: 'My Precious Alexandrite',
      text: "My purchase of an alexandrite gemstone from this store has been a highlight of my gemstone collecting journey. The stone's unique color-changing properties are truly enchanting. It's a gem with a personality of its own, and I'm thrilled to own it."
    },
    {
      avatar: getRandomAvatar(),
      name: 'William RadiantGemstones',
      designation: 'Radiant Gem Collector',
      title: 'Radiant Rhodolite Glow',
      text: "I recently acquired a rhodolite gemstone with a radiant glow from this store. The gem's vibrant reddish-pink hue and sparkle are unmatched. It's a testament to the store's commitment to quality. I'm absolutely in love with my purchase."
    },
    {
      avatar: getRandomAvatar(),
      name: 'Eleanor GemstoneLover',
      designation: 'Enchanted by Topaz',
      title: 'Topaz Treasures Galore',
      text: "My recent topaz purchase has left me speechless. The golden brilliance and depth of color are mesmerizing. It's a topaz lover's dream come true. Highly recommend this store for exquisite gemstones!"
    },
    {
      avatar: getRandomAvatar(),
      name: 'Alexander DiamondCollector',
      designation: 'Verified Diamond Connoisseur',
      title: 'Exquisite Diamond Elegance',
      text: "The diamond I purchased here is an epitome of elegance. Its fire and brilliance are unmatched. I am truly captivated by its beauty. This store is a haven for those seeking the finest diamonds."
    },
    {
      avatar: getRandomAvatar(),
      name: 'Olivia OpalEnthusiast',
      designation: 'Opal Admirer',
      title: 'Opulent Opal Discovery',
      text: "My opal acquisition from this store is nothing short of opulence. The play of colors within the stone is bewitching. I am enthralled by its charm and uniqueness. This store has the most amazing opals!"
    },
    {
      avatar: getRandomAvatar(),
      name: 'Matthew GemstoneFanatic',
      designation: 'Gemstone Enthusiast',
      title: 'Marvelous Moonstone Purchase',
      text: "The moonstone I bought here is simply marvelous. Its ethereal glow and shimmer are enchanting. I am absolutely delighted with my purchase. This store is a gem in the world of gemstones!"
    },
    {
      avatar: getRandomAvatar(),
      name: 'Isabella GemHunter',
      designation: 'Adventurous Gem Explorer',
      title: 'Adventures with Amethyst',
      text: "Acquiring an amethyst from this store was an adventurous delight. The royal purple hue of the gemstone is captivating. It's a gem that exudes sophistication and allure. Highly recommended for gem enthusiasts!"
    },
    {
      avatar: getRandomAvatar(),
      name: 'Benjamin RubyLover',
      designation: 'Passionate about Rubies',
      title: 'Radiant Ruby Revelation',
      text: "The ruby I found here is a radiant revelation. Its deep red hue and inner glow are breathtaking. I am deeply satisfied with my purchase. This store is a true gemstone treasure trove!"
    }]);

    const chunkReviews = (arr, chunkSize) => {
      const chunkedArr = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArr.push(arr.slice(i, i + chunkSize));
      }
      return chunkedArr;
    };

    const [displayedChunks, setDisplayedChunks] = useState(2);
    const chunkSize = 3;

    const reviewsChunks = chunkReviews(reviews, chunkSize);
    const visibleChunks = reviewsChunks.slice(0, displayedChunks);

    const handleViewMore = () => {
      setDisplayedChunks(displayedChunks + 2);
    };

  return (
    <div className="review-wrapper">
      {/* Gradient animation was borrowed and slighlty modified from https://codepen.io/alvarotrigo/pen/qBMMyxz */}
      

      <GradientAnimatedBackdrop></GradientAnimatedBackdrop>
      <h2>
        <span className="underline-light_purple">Our beloved customers</span>
      </h2>
      <div className="review-div">
      {visibleChunks.map((chunk, index) => (
          <div key={index} className="flex-row">
            {chunk.map((review, idx) => (
              <Review
                key={idx}
                avatar={review.avatar}
                name={review.name}
                designation={review.designation}
                title={review.title}
                text={review.text}
              />
            ))}
          </div>
        ))}
      </div>
   
      <ViewMoreButton
        onClick={handleViewMore}
        shouldShow={displayedChunks < reviewsChunks.length }
      />
      </div>
  );
};

export default Reviews;
