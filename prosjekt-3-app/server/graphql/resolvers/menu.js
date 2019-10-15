const Menu = require('../../api/models/menu');

module.exports = {
  menu: async args => {
    const offset = args.offset ? args.offset : 0;
    const first = args.first ? args.first : 0;
    try {
      const data = await Menu.find().skip(offset).limit(first).populate('reviews');
      const mappedData = data.map(item => {
        return { ...item._doc, _id: item.id };
      });
      return mappedData;
    } catch (err) {
      throw err;
    }
  }
};
