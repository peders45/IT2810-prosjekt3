const express = require('express');
const morgan = require ('morgan');
const app = express();
const mongoose = require('mongoose');



const url = `mongodb://admin:password@it2810-56.idi.ntnu.no:27017/project3?authSource=admin`;
console.log(url);

mongoose.connect(url, {useNewUrlParser: true });

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        return res.sendStatus(200);
    }
    next();

});


// app.use((req, res, next) => {
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });

module.exports = app;