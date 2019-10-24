import client from '../../setupApolloClient';
import store from '../../store';
import actionTypes from '../../actionTypes';
import queries from '../../query';

//Actions for pagination and searching, as well as checking whether search was successful
export function doPagination(isNext) {
  const state = store.getState();
  //If empty, change categories array to include everything
  let categories = state.category
  if (categories.length === 0) {
    categories = ["Breakfast", "Beef_&_Pork", "Chicken_&_Fish", "Snacks_&_Sides", 
    "Salads", "Beverages", "Desserts", "Coffee_&_Tea", "Smoothies_&_Shakes"]
  }

  //Splitting searchresults into groups of 9
  let offset = 0;
  if(isNext){
      offset = state.offset += 9
  }else if(state.offset > 9){
    offset = state.offset -= 9 
  }

  return function(dispatch) {
    dispatch({
        type: actionTypes.PAGINATION,
        payload: offset
      })
    
    dispatch({
      type: actionTypes.MENU_REQUESTED,
    })
    //Search query
    client.query({
      query: queries.GET_MENU,
      variables: {
      first: state.first,
      offset:offset,
      searchWord: state.searchWord,
      categories: categories, 
      minReviewScore: state.sliderRating,
      maxCalories: state.sliderMaxCalories,
      sort: {
        sortCategory: state.sortCategory,
        isLowHigh: state.sortValue}       
      }
    })
    //Change the state according to the query
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
