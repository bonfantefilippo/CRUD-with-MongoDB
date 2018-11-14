const Product = require('../models/product.model');

//simple version, without validation or sanitation
exports.test = function(req, res) {
    res.send('Greetings from the Test controller!');
}

// return all products on product collection
exports.product_getAll = (req, res) => {
    Product.find((err, product) => {
        if (err) return next(err);
        res.send(product);
    })
}

// create a product

exports.product_create = (req, res) => {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save((err) => {
        if(err) {
            return next(err);
        }
        res.send('Product Created successfully');
    })
}

// return a specific product
exports.product_details = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if(err) return next(err);
        res.send(product);
    })
}

//update a specific product
exports.product_update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body},
    (err, product) => {
        if(err) return next(err);
        res.send('Product updated');
    });
}

//delete a specific product
exports.product_delete = (req, res) => {
    Product.findOneAndDelete(req.params.id, (err) => {
        if(err) return next(err);
        res.send('Deleted successfully');
    })
}