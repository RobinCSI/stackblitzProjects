import React from 'react';
import './image.css';

export default function Image(props) {
  return (
    <div className="imageContainer">
      <img
        src={props.images[props.currentIndex]}
        alt="Image path corrupted"
        height="200px"
        width="200px"
      />
    </div>
  );
}
