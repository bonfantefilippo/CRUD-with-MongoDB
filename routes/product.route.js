const express = require('express');
const router = express.Router();

//require the controllers
const product_controller = require('../controllers/product.controller');

//a simple test url to check that all of our files are communicating correctly
router.get('/test', product_controller.test);

// GET ALL PRODUCTS
router.get('/', product_controller.product_getAll)
// WRITE
router.post('/create', product_controller.product_create);
module.exports= router;

// READ
router.get('/:id', product_controller.product_details);

// UPDATE
router.put('/:id/update', product_controller.product_update);

// DELETE
router.delete('/:id/delete', product_controller.product_delete);
