const express = require("express");
const bodyParser = require("body-parser");
const product = require('./routes/product.route') //import routes for products
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://admin:abcd1234@ds161653.mlab.com:61653/products';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);


let port = 1234;
app.listen(port, ()=> {
    console.log('Server is up and running on port ', port);
})