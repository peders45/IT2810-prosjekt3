const Menu = require('../../api/models/menu');

module.exports = {
  menu: async args => {
      const offset = args.offset ? args.offset : 0;
    try {
      const data = await Menu.find().populate('reviews');
      const mappedData = data.map(item => {
        return { ...item._doc, _id: item.id };
      });
      const dataSliced =
        args.first === undefined
          ? mappedData.slice(offset)
          : mappedData.slice(offset, offset + args.first);
      return dataSliced;
    } catch (err) {
      throw err;
    }
  }
};
