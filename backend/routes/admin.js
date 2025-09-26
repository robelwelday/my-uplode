const express = require('express');
const adminCtrl = require('../controllers/adminController');
const { protectAdmin } = require('../middleware/auth');
const Product = require('../models/Product'); // Add this import
const upload = require('../middleware/upload'); // Add this import

const router = express.Router();

router.post('/login', adminCtrl.loginAdmin);
router.post('/add', protectAdmin, adminCtrl.addAdmin);

// Add route for admin to edit products
router.put('/products/:id', protectAdmin, upload.single('image'), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // Update fields except price
    if (req.body.name) product.name = JSON.parse(req.body.name);
    if (req.body.description) product.description = JSON.parse(req.body.description);
    if (req.body.available !== undefined) product.available = req.body.available === 'true';
    if (req.file) product.image = req.file.path;
    await product.save();
    res.json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
