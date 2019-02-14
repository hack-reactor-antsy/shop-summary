import React from 'react';
import style from './style.css.js';

const ShopInfo = (props) => {
  return (
    <div className="shop" style={style.shop}>
      <img src="http://loremflickr.com/75/75/tech?lock=1"></img>
      <br/>
      <div><b>Valhalla</b></div>
      <font color='gray'>in Old Royal, Washington</font>
    </div>
  );
};

export default ShopInfo;