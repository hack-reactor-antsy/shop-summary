const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop');

var db = mongoose.connection;
const faker = require('faker');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!');
});

var itemSchema = mongoose.Schema({
  productId: {
    type: Number,
    unique: true },
  shop: String,
  location: String,
  description: String,
  image: String,
  price: Number
});

var itemList = mongoose.model('itemList', itemSchema);

var createSummary = function() {
  for (var itemId = 1; itemId <= 100; itemId++) {
    var newItem = new itemList({
      productId: itemId, 
      shop: 'My Shop',
      location: faker.address.city() + ', ' + faker.address.zipCode(),
      description: faker.lorem.sentence(), 
      price: faker.commerce.price(),
      image: faker.image.fashion()
    });
    newItem.save((err, itemId) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Items seeded');
      }
    });
  } 
};

var seed = () => {
  createSummary();
};

seed();