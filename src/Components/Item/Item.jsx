import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className='item'>
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt={name} />
      </Link>
      <h2>{name}</h2>
      <div className="item-prices">
        <p className="item-price-new">${new_price.toFixed(2)}</p>
        <p className="item-price-old">${old_price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Item;
