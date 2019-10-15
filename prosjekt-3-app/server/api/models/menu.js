const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema ({
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
},  { collection: 'menu' });

module.exports = mongoose.model('Menu', menuSchema);