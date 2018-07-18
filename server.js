// server.js

const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB'),
  productRoutes = require('./expressRoutes/productsRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 8080;

app.use('/products', productRoutes);

app.listen(port);
console.log('Listening on port ' + port);