import gql from 'graphql-tag';

const queries = {
  GET_MENU: gql`
  query ($searchWord: String, $maxCalories: Int) {
    menu(searchWord:$searchWord, maxCalories: $maxCalories){
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
  }`,
  ADD_RATING: gql`
  mutation AddStar($score: Int!, $menuItem: String!) {
    addReview(score: $score, menuItem: $menuItem) {
        score
    }
  }`
}

export default queries;