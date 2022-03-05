// internal import
const BlogModel = require('../models/blogModel');

// create a blog
const createBlog = async (req, res) => {
    try {
        const newBlog = await new BlogModel(req.body);

        await newBlog.save();
        res.status(200).json({
            message: 'Blog created successfully.',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not create a blog!',
        });
    }
};

// find a blog
const getOneBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findById(req.params.id);

        res.status(200).json({
            message: blog,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not find blog!',
        });
    }
};

// get all blog
const getAllBlog = async (req, res) => {
    try {
        const blogs = await BlogModel.find();

        res.status(200).json({
            message: blogs,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not find blog!',
        });
    }
};

module.exports = {
    getAllBlog,
    createBlog,
    getOneBlog,
};
