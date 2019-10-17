const Menu = require('../../../api/models/menu');

module.exports = {
    menu: async (Obj, args) => {
      const offset = args.offset ? args.offset : 0;
      const first = args.first ? args.first : 0;

      try {
        let mappedData = null;
        if (args.categories) {
          const data = await Menu.find()
            .where('Category')
            .in(args.categories)
            .skip(offset)
            .limit(first)
            .populate('reviews');

          mappedData = data.map(item => {
            return { ...item._doc, _id: item.id };
          });
        } else {
          const data = await Menu.find()
            .skip(offset)
            .limit(first)
            .populate('reviews');

          mappedData = data.map(item => {
            return { ...item._doc, _id: item.id };
          });
        }
        if (args.minReviewScore) {
          mappedData = mappedData.filter(
            item => item.score >= args.minReviewScore
          );
        } else if (args.maxCalories) {
          mappedData = mappedData.filter(
            item => parseInt(item.Calories) <= args.maxCalories
          );
        } else if (args.sort) {
          const cat = args.sort.sortCategory;
          if (args.sort.isLowHigh) {
            mappedData = mappedData.sort((item1, item2) => {
              return item1[cat] - item2[cat];
            });
          } else if (!args.sort.isLowHigh) {
            mappedData = mappedData.sort((item1, item2) => {
              return item2[cat] - item1[cat];
            });
          }
        }
        return mappedData;
      } catch (err) {
        throw err;
      }
    }
};
