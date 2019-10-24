import gql from 'graphql-tag';

//Constant including query and mutation for easy export
const queries = {
  GET_MENU: gql`
  query (
    $first: Int!,
    $offset: Int!,
    $searchWord: String, 
    $categories: [String!],
    $minReviewScore: Int,
    $maxCalories: Int,
    $sort: SortInput) {
  menu(
    searchWord:$searchWord,
    categories:$categories, 
    minReviewScore:$minReviewScore, 
    maxCalories: $maxCalories,
    sort: $sort,
    first: $first,
    offset: $offset
    )
  {
    menus{
      _id
    Item
    Category
    score
    Calories
    Carbohydrates
    Protein
    Total_Fat
    Saturated_Fat
    Sugars
    Total_Fat_percentage_Daily_Value
    Cholesterol_percentage_Daily_Value
    Sodium_percentage_Daily_Value
    Calcium_percentage_Daily_Value
    }
    count
  }
}`,
  ADD_RATING: gql`
  mutation AddStar($score: Int!, $menuItem: String!) {
    addReview(score: $score, menuItem: $menuItem) {
        score
    }
  }`
}

export default queries;