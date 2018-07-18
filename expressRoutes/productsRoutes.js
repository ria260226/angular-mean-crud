// productRoutes.js

var express = require('express');
var app = express();
var productRoutes = express.Router();

// Require Item model in our routes module
var Product = require('../models/Product');
var User = require('../models/user');
// Defined store route
// console.log(User);
//POST route for updating data
productRoutes.route('/register').post(function (req, res) {
  var users = new User(req.body);
 console.log('users',users);
});


productRoutes.route('/add').post(function (req, res) {

  var product = new Product(req.body);
  product.save()
    .then(item => {
      res.status(200).json({ 'statusCode': 200 });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
productRoutes.route('/:page/:limit').get(function (req, res) {
console.log('all products');
  var page = parseInt(req.params.page.substr(5, 5));


  var limit = parseInt(req.params.limit.substr(6, 6));

  Product.find().skip(page).limit(limit).exec(function (err, products) {
    if (err) {
      console.log(err);

    }
    else {
      var totalProduct = products.length;
      res.send({ 'products': products, 'totalproducts': totalProduct });
    }
  });
});

// Defined edit route
productRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Product.findById(id, function (err, product) {
    res.json(product);
  });
});

//  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (!product)
      return next(new Error('Could not load Document'));
    else {
      product.name = req.body.name;
      product.price = req.body.price;

      product.save().then(product => {
        res.json({ 'statusCode': 200 });
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req, res) {
  Product.findByIdAndRemove({ _id: req.params.id }, function (err, product) {
    if (err) res.json(err);
    else res.json({ 'statusCode': 200 });
  });
});
// if (req.body.email &&
//   req.body.username &&
//   req.body.password &&
//   req.body.passwordConf) {
//   var userData = {
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password,
//     passwordConf: req.body.passwordConf,
//   }
//   //use schema.create to insert data into the db
//   User.create(userData, function (err, user) {
//     if (err) {
//       return next(err)
//     } else {
//       return res.redirect('/profile');
//     }
//   });
// }
module.exports = productRoutes;