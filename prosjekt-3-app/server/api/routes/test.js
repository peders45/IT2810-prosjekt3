const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Test = require('../models/test');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /test'
    });
})

router.post('/', (req, res, next) => {
    const test = new Test({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    test.save().then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });
    res.status(201).json({
        message: 'Handling POST requests to /test',
        createdTest: test
    });
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: id === 'special' ? 'Correct id ' + id : 'wrong id'
    });
})

module.exports = router;