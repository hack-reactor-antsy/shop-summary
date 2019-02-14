const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop', { useNewUrlParser: true, useCreateIndex: true });

var db = mongoose.connection;
const faker = require('faker');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!');
});

const itemSchema = mongoose.Schema({
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

itemList.deleteMany({}, () => {
  console.log('Database dropped.');
});

let createSummary = function() {
  for (let itemId = 0; itemId <= 100; itemId ++) {
    let newItem = new itemList({
      productId: itemId, 
      shop: 'My Shop',
      location: faker.address.city() + ', ' + faker.address.state(),
      description: faker.lorem.sentence(), 
      image: faker.image.technics(),
      price: faker.commerce.price()
    });
    newItem.save(err => {
      if (err) {
        console.log(err);
      } else {
        console.log('Items seeded');
      }
    });
  }
};

let retrieve = (callback) => {
  itemList.find({}, (err, data) => {
    if (err) {
      throw err;
    }
    callback(null, data);
  });
};

let retrieveOne = (itemId, callback) => {
  itemList.find({ productId: itemId }, (err, data) => {
    if (err) {
      throw err;
    }
    callback(null, data);
  });    
};

let seed = () => {
  createSummary();
};

seed();

module.exports.retrieveOne = retrieveOne;
module.exports.retrieve = retrieve;