import client from '../../setupApolloClient';
import store from '../../store';
import actionTypes from '../../actionTypes';
import queries from '../../query';

//Actions for adding and displaying ratings, as well as checking whether rating was successful
export function rateMenu(rateValue, menuID) {
  const state = store.getState();
  return function(dispatch) {
    dispatch({
      type: actionTypes.RATING_REQUESTED,
    })

    client.mutate({
      mutation: queries.ADD_RATING,
      variables: {
        score: rateValue,
        menuItem: menuID
        }
    })

    .then(data =>{
      const newState = state.menus.map(menu => {
        if(menu._id === menuID){
          return {...menu, score: data.data.addReview.score}
        }
        return menu;
      })
      return newState
    })

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
