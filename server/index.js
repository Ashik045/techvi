// external import
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// internal import
const blogRouter = require('./routes/blogrouter');
const userEmailRouter = require('./routes/userEmailRouter');

const app = express();

// app uses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

// database connection
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {})
    .then(() => {
        console.log('Database connection successfull.');
    })
    .catch((err) => {
        console.log(err);
    });

// app routing
app.use('/api', blogRouter);
app.use('/api', userEmailRouter);

// not found error handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'requested url not found!',
    });
});

// application error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
    });
});

// application running port
app.listen(process.env.APP_CONNECTION_PORT || 4000, () => {
    console.log(`listening on port ${process.env.APP_CONNECTION_PORT}`);
});
