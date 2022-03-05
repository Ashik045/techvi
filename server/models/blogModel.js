// external import
const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: {
            type: Array,
        },
    },
    { timestamps: true },
);

const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;
