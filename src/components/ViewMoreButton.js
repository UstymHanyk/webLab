import React from 'react';

const ViewMoreButton = ({ onClick, shouldShow }) => {
  return (
    shouldShow && (
      <button className="view-more-btn" onClick={onClick}>
        View more
      </button>
    )
  );
};

export default ViewMoreButton;
