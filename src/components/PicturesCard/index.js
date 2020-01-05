import React from 'react';
import './style.css';

function PicturesCard(props) {
  return (
    <div className='card'>
      <div className='img-container'>
        <img alt={props.name} src={props.image} onClick={() => props.handleOnClick(props.name)} />
      </div>
    </div>
  );
}

export default PicturesCard;