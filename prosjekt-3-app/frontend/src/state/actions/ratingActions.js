import client from '../../setupApolloClient';
import store from '../../store';
import actionTypes from '../../actionTypes';
import queries from '../../query';

//Actions for adding ratings, as well as checking whether rating was successful
export function rateMenu(rateValue, menuID) {
  const state = store.getState();
  return function(dispatch) {
    dispatch({
      type: actionTypes.RATING_REQUESTED,
    })
    //Add rating mutation
    client.mutate({
      mutation: queries.ADD_RATING,
      variables: {
        score: rateValue,
        menuItem: menuID
        }
    })
    //Create a new state with updated rating value
    .then(data =>{
      const newState = state.menus.map(menu => {
        if(menu._id === menuID){
          return {...menu, score: data.data.addReview.score}
        }
        return menu;
      })
      return newState
    })
    //Change the state to the newly created state
    .then(data =>{
      dispatch({
        type: actionTypes.RATING_RECEIVED,
        payload: data
      })
    })

    .catch(error => dispatch({
      type: actionTypes.RATING_FAILED,
      payload: error
    }))
  }
};
