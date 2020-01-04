import React from 'react';
import './style.css';

function PicturesCard({name, image}) {
  return (
    <div className='card'>
      <div className='img-container'>
        <img alt={name} src={image} />
      </div>
    </div>
  );
}

export default PicturesCard;