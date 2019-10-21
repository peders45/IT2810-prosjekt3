menuQueries = require('./queries/menu');
reviewQueries = require('./queries/reviews');
reviewMutations = require('./mutations/reviews');

module.exports = {
    Query:{
        ...menuQueries,
        ...reviewQueries
    },
    Mutation: {
       ...reviewMutations 
    }
}