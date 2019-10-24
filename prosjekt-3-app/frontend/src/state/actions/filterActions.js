import client from '../../setupApolloClient';
import store from '../../store'
import actionTypes from '../../actionTypes';
import queries from '../../query';

export function filterMenu(searchWord) {
    const state = store.getState().searchReducer;
    return function(dispatch) {
      dispatch({
        type: actionTypes.MENU_REQUESTED,
      })
  
      client.query({
        query: queries.GET_MENU,
        variables: {
        searchWord: state.searchReducer,
        categories: state.categories
        //Osv.. Osv
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
