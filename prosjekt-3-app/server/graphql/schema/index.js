const {  gql } = require('apollo-server-express');

module.exports = gql`

type Menu {
    _id: ID!
    Category: String
    Item: String
    Serving_Size: String
    Calories: Int
    Calories_from_Fat: Int
    Total_Fat: Float
    Total_Fat_percentage_Daily_Value: Int
    Saturated_Fat: Float
    Saturated_Fat_percentage_Daily_Value: Int
    Trans_Fat: Float
    Cholesterol: Float
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
    score: Float
    reviews: Int
}

type Result{
    menus: [Menu!]!
    count: Int
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


type Query {
    menu(first: Int offset: Int searchWord: String categories: [String!], minReviewScore: Int, maxCalories: Int, sort: SortInput ): Result!
    reviews: [Review!]!
}

type Mutation {
    addReview(score: Int!, menuItem: String!): Menu
}`