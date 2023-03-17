import React from 'react';
import './button.css';

export default function Button(props) {
  return (
    <div className="buttonContainer">
      <button className="rightSection" onClick={props.handleClick}>
        Change pic
      </button>
    </div>
  );
}
