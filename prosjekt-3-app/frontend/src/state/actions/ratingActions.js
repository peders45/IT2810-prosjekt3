import client from '../../setupApolloClient';
import store from '../../store';
import gql from 'graphql-tag';

const RATING_REQUESTED = "RATING_REQUESTED";
const RATING_RECEIVED = "RATING_RECEIVED";
const RATING_FAILED = "RATING_FAILED";

const ADD_RATING = gql`
  mutation AddStar($score: Int!, $menuItem: String!) {
    addReview(score: $score, menuItem: $menuItem) {
        score
    }
  }
`;


export function rateMenu(rateValue, menuID) {
  const state = store.getState();
  return function(dispatch) {    
    dispatch({
      type: RATING_REQUESTED,
    })
    
    client.mutate({
      mutation: ADD_RATING,
      variables: {
        score: rateValue,
        menuItem: menuID       
        }
    })

    .then(data =>{
      const newState = state.searchReducer.menus.map(menu => {
        if(menu._id === menuID){
          return {...menu, score: data.data.addReview.score}
        }
        return menu;
      })
      return newState
    })

    .then(data =>{
      dispatch({
        type: RATING_RECEIVED,
        payload: data
      })
    })

    .catch(error => dispatch({
      type: RATING_FAILED,
      payload: error
    }))
  }
};