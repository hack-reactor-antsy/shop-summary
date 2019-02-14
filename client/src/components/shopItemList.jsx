import React from 'react';
import ShopItem from './shopItem.jsx';

const ShopItemList = (props) => {
  return (
    <div className="items">
      {props.items.map((item, index) => {
        if (props.page * 8 <= index && props.page * 8 + 8 > index) {
          return <ShopItem item={item} />; 
        }
      })}
    </div>
  );
};

export default ShopItemList;
