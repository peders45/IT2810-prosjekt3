const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /test'
    });
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /test'
    });
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: id === 'special' ? 'Correct id ' + id : 'wrong id'
    });
})

module.exports = router;