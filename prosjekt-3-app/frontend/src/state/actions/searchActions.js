import client from '../../setupApolloClient';
import gql from 'graphql-tag';

const MENU_REQUESTED = "MENU_REQUESTED";
const MENU_RECEIVED = "MENU_RECEIVED";
const MENU_FAILED = "MENU_FAILED";


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
      score
    }
  }
`;

export function searchForItem(searchWord) {
    return function(dispatch) {
      dispatch({
        type: MENU_REQUESTED,
      })
  
      client.query({
        query: GET_MENU,
        variables: {
        searchWord: searchWord
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
