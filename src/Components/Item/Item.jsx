import React from 'react';
import './Item.css';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className='item'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="item-prices">
        <p className="item-price-new">${new_price.toFixed(2)}</p>
        <p className="item-price-old">${old_price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Item;
