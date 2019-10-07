const express = require('express');
const morgan = require ('morgan');

const app = express();

const testRoutes = require('./api/routes/test');
const test2Routes = require('./api/routes/test2')

app.use(morgan('dev'));

app.use('/test', testRoutes);
app.use('/test2', test2Routes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;