const searchReducer = (state = {
    searchWord: "",
    lastValues: []
  }, action) => {
  switch (action.type) {
    case "SEARCH":
      return state = {
        ...state,
        searchWord: action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
    default:
      return state;
  }
};

export default searchReducer;
