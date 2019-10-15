const Menu = require('../../api/models/menu');

module.exports = { 
    menu: async () => {
        try{
        const menu = await Menu.find().populate('reviews');
        return menu.map( item => {
            return {...item._doc, _id: item.id};
        });
    } catch(err){
        throw err;
    }
    }    
}