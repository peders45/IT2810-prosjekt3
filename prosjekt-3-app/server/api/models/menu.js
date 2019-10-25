const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema ({
    score: Number,
    reviews: Number
},  { collection: 'menu' });

module.exports = mongoose.model('Menu', menuSchema);