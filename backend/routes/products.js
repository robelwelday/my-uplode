const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');
const { protectAdmin, protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const Product = require('../models/Product'); // Add this import

// Simple cache middleware
const cache = (duration) => {
  return (req, res, next) => {
    res.set('Cache-Control', `public, max-age=${duration}`);
    next();
  };
};

// Public
router.get('/', cache(300), productCtrl.getProducts); // Cache for 5 minutes
router.get('/:id', cache(300), productCtrl.getProductById); // Cache for 5 minutes

// Admin
router.post('/', protectAdmin, upload.single('image'), productCtrl.createProduct);
router.patch('/:id', protectAdmin, upload.single('image'), productCtrl.updateProduct); // Add this line
router.delete('/:id', protectAdmin, productCtrl.deleteProduct);

module.exports = router;
