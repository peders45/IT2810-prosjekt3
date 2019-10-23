import client from '../../setupApolloClient';
import store from '../../store';
import GET_MENU from '../../query';

const SEARCHWORD = "SEARCHWORD";
const MENU_REQUESTED = "MENU_REQUESTED";
const MENU_RECEIVED = "MENU_RECEIVED";
const MENU_FAILED = "MENU_FAILED";


export function searchForItem(searchWord) {
  const state = store.getState();
  return function(dispatch) {
    dispatch({
      type: SEARCHWORD,
        payload: searchWord
    })

    dispatch({
      type: MENU_REQUESTED,
    })

    client.query({
      query: GET_MENU,
      variables: {
      searchWord: searchWord,
      maxCalories: state.sliderReducer.topValue       
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
