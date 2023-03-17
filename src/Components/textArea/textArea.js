import React from 'react';
import './textArea.css';

export default function TextArea() {
  return (
    <div className="textArea">
      <textarea
        maxLength="100"
        rows={4}
        cols="40"
        placeholder="Write your text (maximum 100 characters)"
      />
    </div>
  );
}
