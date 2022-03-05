// external import
const express = require('express');

// internal import
const { getAllBlog, createBlog, getOneBlog } = require('../controllers/blogController');

const router = express.Router();

// create a blog
router.post('/blog', createBlog);

// get a blogs
router.get('/blog/:id', getOneBlog);

// get all blogs
router.get('/blog', getAllBlog);

module.exports = router;
