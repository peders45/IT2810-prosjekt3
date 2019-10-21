const Review = require('../../../api/models/review');
const Menu = require('../../../api/models/menu');

module.exports = {
    addReview: async (Obj, args) => {
      try {
        const menuId = args.reviewInput.menuItem;
        const item = await Menu.findById(menuId);

        if (!item) {
          throw new Error('Menu item does not exist!');
        }

        const review = new Review({
          name: args.reviewInput.name,
          score: args.reviewInput.score,
          review: args.reviewInput.review,
          menuItem: item
        });

        const result = await review.save();
        const score = item.score
          ? (review.score + item.score * item.reviews.length) /
            (item.reviews.length + 1)
          : review.score;
        item.score = score;
        item.reviews.push(review);
        await item.save();

        return { ...result._doc, _id: result.id };
      } catch (err) {
        throw err;
      }
    }
};
