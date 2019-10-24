import client from '../../setupApolloClient';
import store from '../../store';
import actionTypes from '../../actionTypes';
import queries from '../../query';

export function searchForItem(searchWord) {
  const state = store.getState();
  return function(dispatch) {
    dispatch({
      type: actionTypes.SEARCHWORD,
        payload: searchWord
    })

    dispatch({
      type: actionTypes.MENU_REQUESTED,
    })
    client.query({
      query: queries.GET_MENU,
      variables: {
      searchWord: searchWord,
      maxCalories: state.searchReducer.sliderMaxCalories       
      }
    })

    .then(data => dispatch({
      type: actionTypes.MENU_RECEIVED,
      payload: data
    }))

    .catch(error => dispatch({
      type: actionTypes.MENU_FAILED,
      payload: error
    }))
  }
}
