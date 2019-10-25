const Menu = require('../../../api/models/menu');

const getValue = (input)=>{
  if( !input || input == null || input == 0){
    return 0
  }else{
    return input
  }
}

module.exports = {
  menu: async (Obj, args) => {

    try {
      const data = await Menu.find();
      let mappedData = data.map(item => {
        return { ...item._doc, _id: item.id };
      });


      if (args.sort) {
        const cat = args.sort.sortCategory;
        if (args.sort.isLowHigh) {
          mappedData = mappedData.sort((item1, item2) => {
            return getValue(item1[cat]) - getValue(item2[cat]);
          });
        } else if (!args.sort.isLowHigh) {
          mappedData = mappedData.sort((item1, item2) => {
            return getValue(item2[cat]) - getValue(item1[cat]);
          });
        }
      }

      if (args.minReviewScore) {
        mappedData = mappedData.filter(
          item => item.score >= args.minReviewScore
        );
      }

      if (args.maxCalories || args.maxCalories === 0) {
        mappedData = mappedData.filter(
          item => parseInt(item.Calories) <= args.maxCalories
        );
      }

      if(args.searchWord && args.searchWord != "" && args.searchWord != null){
        const searchWord = new RegExp(args.searchWord, "i");
        mappedData = mappedData.filter(item => {
          return searchWord.test(item.Item)
        })
      }

      if(args.categories){
        mappedData = mappedData.filter(item =>{
          return args.categories.includes(item.Category)
        })
      }

      const count = mappedData.length;

      if (args.first && args.offset) {
        mappedData = mappedData.slice(args.offset, args.first + args.offset);
      } else if (args.first) {
        mappedData = mappedData.slice(0, args.first);
      } else if (args.offset) {
        mappedData = mappedData.slice(args.offset);
      }

      return {
        menus: mappedData,
        count: count
      };
    } catch (err) {
      throw err;
    }
  }
};
