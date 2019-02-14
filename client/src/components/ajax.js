import $ from 'jquery';

const fetchShopItems = (callback) => {
  $.get('http://localhost:3000/shop', (data) => {
    callback(null, data);
  });
};
export default fetchShopItems;