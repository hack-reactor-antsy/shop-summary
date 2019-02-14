import React from 'react';
import style from './style.css.js';

const ShopItem = (props) => {
  return (
    <div>
      <img src={props.item.image} width="181" height="144" ></img>
      <div style={style.text}>{props.item.description}</div>
      <div style={style.price}>${props.item.price.toFixed(2)}</div>
    </div>
  );
};
  
export default ShopItem;