var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Product = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'products'
});


module.exports = mongoose.model('Product', Product);