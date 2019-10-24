import client from '../../setupApolloClient';
import store from '../../store';
import actionTypes from '../../actionTypes';
import queries from '../../query';

export function doPagination(isNext) {
  const state = store.getState();
  //endrer categories til full hvis tom
  let categories = state.searchReducer.category
  if (categories.length === 0) {
    categories = ["Breakfast", "Beef_&_Pork", "Chicken_&_Fish", "Snacks_&_Sides", 
    "Salads", "Beverages", "Desserts", "Coffee_&_Tea", "Smoothies_&_Shakes"]
  }

  let offset = 0;

  if(isNext){
      offset = state.searchReducer.offset += 9
  }else if(state.searchReducer.offset > 9){
    offset = state.searchReducer.offset -= 9 
  }

  return function(dispatch) {
    dispatch({
        type: actionTypes.PAGINATION,
        payload: offset
      })
    
    dispatch({
      type: actionTypes.MENU_REQUESTED,
    })
    client.query({
      query: queries.GET_MENU,
      variables: {
      first: state.searchReducer.first,
      offset:offset,
      searchWord: state.searchReducer.searchWord,
      categories: categories, 
      minReviewScore: state.searchReducer.sliderRating,
      maxCalories: state.searchReducer.sliderMaxCalories,
      sort: {
        sortCategory: state.searchReducer.sortCategory,
        isLowHigh: state.searchReducer.sortValue}       
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
