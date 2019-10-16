const Menu = require('../../api/models/menu');

module.exports = {
  menu: async args => {
    const offset = args.offset ? args.offset : 0;
    const first = args.first ? args.first : 0;

    const categoryMap = () => {
      return args.categories
        ? args.categories
        : [];
    };

    console.log(categoryMap())

    try {
      const data = await Menu
        .find()
        .where('Category')
        .in(categoryMap())
        .skip(offset)
        .limit(first)
        .populate('reviews');
      let mappedData = data.map(item => {
        return { ...item._doc, _id: item.id };
      });
      if(args.minReviewScore){
        mappedData = mappedData.filter( item => item.score >= args.minReviewScore)
      }
      if(args.maxCalories){
        mappedData = mappedData.filter( item => parseInt(item.Calories) <= args.maxCalories)
      }
      return mappedData;
    } catch (err) {
      throw err;
    }
  }
};
