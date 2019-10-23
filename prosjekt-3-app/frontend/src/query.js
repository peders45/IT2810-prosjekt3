import gql from 'graphql-tag';

const GET_MENU = gql`
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
  }
`;

export default GET_MENU;