// external import
const mongoose = require('mongoose');

const userEmailSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const UserEmailModel = mongoose.model('UserEmail', userEmailSchema);

module.exports = UserEmailModel;
