const express = require('express');
const contactCtrl = require('../controllers/contactController');

const router = express.Router();

router.post('/', contactCtrl.sendContactEmail);

module.exports = router;
