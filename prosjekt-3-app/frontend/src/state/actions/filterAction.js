import client from '../../setupApolloClient';
import gql from 'graphql-tag';
import store from '../../store'

//Bruke konstanter fra consts i stede
const MENU_REQUESTED = "MENU_REQUESTED";
const MENU_RECEIVED = "MENU_RECEIVED";
const MENU_FAILED = "MENU_FAILED";

// Bruke constant fra query is tede
const GET_MENU = gql`
  query ($searchWord: String!) {
    menu(searchWord:$searchWord){
      Item,
      Category,
      Serving_Size,
      Calories,
      Carbohydrates,
      Sugars
      Protein
      score,
      Total_Fat_percentage_Daily_Value,
      Cholesterol_percentage_Daily_Value,
      Sodium_percentage_Daily_Value,
      Calcium_percentage_Daily_Value
    }
  }
`;

export function filterMenu(searchWord) {
    const state = store.getState().searchReducer;
    return function(dispatch) {
      dispatch({
        type: MENU_REQUESTED,
      })
  
      client.query({
        query: GET_MENU,
        variables: {
        searchWord: state.searchReducer,
        categories: state.categories
        //Osv.. Osv
        }
      })
  
      .then(data => dispatch({
        type: MENU_RECEIVED,
        payload: data
      }))
  
      .catch(error => dispatch({
        type: MENU_FAILED,
        payload: error
      }))
    }
  }
