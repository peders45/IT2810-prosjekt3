const menuResolver = require('./menu');
const reviewsResolver = require('./reviews');

module.exports = {
    ...menuResolver,
    ...reviewsResolver
}