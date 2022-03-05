// internal import
const UserEmailModel = require('../models/userEmailModel');

// create a blog
const createEmail = async (req, res) => {
    try {
        const newEmail = await new UserEmailModel(req.body);

        await newEmail.save();
        res.status(200).json({
            message: 'email created successfully.',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not create a email!',
        });
    }
};
module.exports = {
    createEmail,
};
