const express = require('express');
const morgan = require ('morgan');
const app = express();
const mongoose = require('mongoose');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const Menu = require('./api/models/menu');
const Review = require('./api/models/review');


const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;
console.log(url);

mongoose.connect(url, {useNewUrlParser: true });

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next)=>{
    req.header('Access-Control-Allow-Origin', '*');
    req.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Request-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Headers', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();

});


app.use('/graphql', graphqlHttp({
    schema: buildSchema(`

        type Menu {
            _id: ID!
            Category: String
            Item: String
            Serving_Size: String
            Calories: Int
            Calories_from_Fat: Int
            Total_Fat: Int
            Total_Fat_percentage_Daily_Value: Int
            Saturated_Fat: Int
            Saturated_Fat_percentage_Daily_Value: Int
            Trans_Fat: Int
            Cholesterol: Int
            Cholesterol_percentage_Daily_Value: Int
            Sodium: Int
            Sodium_percentage_Daily_Value: Int
            Carbohydrates: Int
            Carbohydrates_percentage_Daily_Value: Int
            Dietary_Fiber: Int
            Dietary_Fiber_percentage_Daily_Value: Int
            Sugars: Int
            Protein: Int
            Vitamin_A_percentage_Daily_Value: Int
            Vitamin_C_percentage_Daily_Value: Int
            Calcium_percentage_Daily_Value: Int
            Iron_percentage_Daily_Value: Int
        }

        type Review {
            _id: ID!
            name: String!
            score: Int!
            review: String!
        }

        type RootQuery {
            menu: [Menu!]!
            reviews: [Review!]!
        }

        input ReviewInput {
            name: String!
            score: Int!
            review: String!
            menuItem: ID!
        }

        type RootMutation {
            addReview(reviewInput: ReviewInput): Review!
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: { 
        menu: () => {
            return Menu.find().exec()
            .then(items => {
                return items.map( item => {
                    return {...item._doc, _id: item.id};
                });
            })
            .catch(err => {
                throw err;
            });
        },
        reviews: () => {
            return Review
            .find()
            .exec()
            .then(reviews => {
                return reviews.map( review => {
                    return {...review._doc, _id: review.id};
                });
            })
            .catch(err => {
                throw err;
            });
        },
        addReview: (args) => {
            const menuId = args.reviewInput.menuItem;
            return Menu.findById(menuId).then( item => {
                if(item){
                    review = new Review({
                        name: args.reviewInput.name,
                        score: args.reviewInput.score,
                        review: args.reviewInput.review,
                        menuItem: menuId
                    });
                    return review.save()
                } else{
                    throw new Error('Menu item does not exist!')
                }
            })
            .then(result => {
                return {...result._doc, _id: result.id};
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
        }
    },
    graphiql: true
}));

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;