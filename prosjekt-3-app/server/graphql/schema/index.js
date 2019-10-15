const {buildSchema} = require('graphql');

module.exports = buildSchema(`

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
    reviews: [Review!]
}

type Review {
    _id: ID!
    name: String!
    score: Int!
    review: String!
    menuItem: Menu!
}

input SortInput {
    sortCategory: String!
    isLowHigh: Boolean
}


type RootQuery {
    menu(first: Int offset: Int categories: [String!], minReviewScore: Int, maxCalories: Int, sort: SortInput ): [Menu!]!
    reviews: [Review!]!
}

input ReviewInput {
    name: String!
    score: Int!
    review: String!
    menuItem: ID!
}

type RootMutation {
    addReview(reviewInput: ReviewInput!): Review!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)