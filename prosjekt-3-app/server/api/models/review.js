const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: false
    },
    menuItem: {
        type: Schema.Types.ObjectId,
        ref: 'Menu'
    }
},  { collection: 'reviews' });

module.exports = mongoose.model('Review', reviewsSchema);