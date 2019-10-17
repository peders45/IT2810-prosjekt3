const Review = require('../../../api/models/review');

module.exports = {
    reviews: async () => {
      console.log("review")
      try {
        const reviews = await Review.find();
        return reviews.map(review => {
          return { ...review._doc, _id: review.id };
        });
      } catch (err) {
        throw err;
      }
    }
};
