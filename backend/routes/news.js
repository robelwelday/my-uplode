const express = require('express');
const router = express.Router();
const newsCtrl = require('../controllers/newsController');
const { protectAdmin } = require('../middleware/auth');
const upload = require('../middleware/upload');

// Simple cache middleware
const cache = (duration) => {
  return (req, res, next) => {
    res.set('Cache-Control', `public, max-age=${duration}`);
    next();
  };
};

// Public routes
router.get('/', newsCtrl.getAllNews); // Removed cache(300)
router.get('/:id', newsCtrl.getNewsById); // Removed cache(300)

// Admin routes
router.post('/', protectAdmin, upload.single('coverImage'), newsCtrl.createNews);
router.patch('/:id', protectAdmin, upload.single('coverImage'), newsCtrl.updateNews);
router.delete('/:id', protectAdmin, newsCtrl.deleteNews);

module.exports = router;
