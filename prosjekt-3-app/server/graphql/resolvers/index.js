const Menu = require('../../api/models/menu');
const Review = require('../../api/models/review');
const mongoose = require('mongoose');

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
    },
    reviews: async () => {
        try{
            const reviews = await Review.find()
        return reviews.map( review => {
            return {...review._doc, _id: review.id};
        });
        }catch(err){
            throw err;
        };
    },
    addReview: async (args) => {
        try{
            const menuId = args.reviewInput.menuItem;
            const item = await Menu.findById(menuId);

            if(!item){
                throw new Error('Menu item does not exist!')
            }
    
            const review = new Review({
                name: args.reviewInput.name,
                score: args.reviewInput.score,
                review: args.reviewInput.review,
                menuItem: item
            });

            const result = await review.save();
            item.reviews.push(review);
            await item.save();
            return {...result._doc, _id: result.id};
        }catch(err){
            throw err;
        };
    }
}