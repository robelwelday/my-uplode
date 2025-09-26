const express = require('express');
const commentCtrl = require('../controllers/commentController');
const { protectAdmin } = require('../middleware/auth');

const router = express.Router();

// Public
router.post('/:productId', commentCtrl.addComment);

// Admin
router.post('/:id/reply', protectAdmin, commentCtrl.replyComment);

module.exports = router;
