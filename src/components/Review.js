import React from 'react';

const getRandomAvatar = () => {
    const randomGender = Math.random() < 0.5 ? 'male' : 'female';
    const randomQuery = Math.floor(Math.random() * 1000);
    return `https://xsgames.co/randomusers/avatar.php?g=${randomGender}&random=${randomQuery}`;
  };

const getRandomSize = () => {
    return Math.random() < 0.7 ? 'col-1' : 'col-2';
  };


const Review = ({name, designation, title, text }) => {
  return (
    <div className={"review-item eachdiv " + getRandomSize()}>
      <div className="user-details">
        <div className="img-box">
          <img src={getRandomAvatar()} alt="" />
        </div>
        <div className="det-box">
          <p className="name">{name}</p>
          <p className="designation">{designation}</p>
        </div>
      </div>
      <div className="review-content">
        <h4 className="review-title">{title}</h4>
        <p className="review-text">{text}</p>
      </div>
    </div>
  );
};

export default Review;
