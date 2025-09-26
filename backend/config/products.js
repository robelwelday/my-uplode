const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productsController');
const { protectAdmin } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');


// Public
router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getProductById);

// Admin
router.post('/', protectAdmin, upload.single('image'), productCtrl.createProduct);
router.patch('/:id', protectAdmin, upload.single('image'), productCtrl.updateProduct);
router.delete('/:id', protectAdmin, productCtrl.deleteProduct);

module.exports = router;
