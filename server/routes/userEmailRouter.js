// external import
const express = require('express');

// internal import
const { createEmail } = require('../controllers/emailController');

const router = express.Router();

// create a blog
router.post('/email', createEmail);

module.exports = router;
