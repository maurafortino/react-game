import React from 'react';
import './style.css';

function PicturesCard({name, image, handleOnClick}) {
  return (
    <div className='card'>
      <div className='img-container'>
        <img alt={name} name={name} src={image} onClick={handleOnClick} />
      </div>
    </div>
  );
}

export default PicturesCard;