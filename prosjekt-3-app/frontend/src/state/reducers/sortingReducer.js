const sortingReducer = (state = {
    sortValue: "",
    lastValues: []
  }, action) => {
  switch (action.type) {
    case "SORT":
      return state = {
        ...state,
        sortValue: action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
    default:
      return state;
  }
};

export default sortingReducer;
