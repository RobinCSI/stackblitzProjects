import React, { useState } from 'react';
import Image from './image';
import Button from './button';

import './image-toggler.css';

export default function ImageToggler() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1011302/pexels-photo-1011302.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];
  
  const a = images.length;

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % a);
  };


  return (
    <div className="container">
      <Image images={images} currentIndex={currentIndex} />
      <Button handleClick={handleClick} />
    </div>
  );
}
