const Review = require('../../../api/models/review');
const Menu = require('../../../api/models/menu');

module.exports = {
    addReview: async (Obj, args) => {
      try {
        const menuId = args.menuItem;
        const item = await Menu.findById(menuId);

        if (!item) {
          throw new Error('Menu item does not exist!');
        }

        if (args.score > 5 || args.score < 1) {
          throw new Error('Score is not between (and including) 1 and 5');
        }

        const inputScore = args.score;

        const score = item.score
          ? (inputScore + item.score * item.reviews) /
            (item.reviews + 1)
          : inputScore;
        item.score = score;
        item.reviews = item.reviews ? item.reviews + 1 : 1;
        await item.save();

        return { ...item._doc, _id: item.id };
      } catch (err) {
        throw err;
      }
    }
};
