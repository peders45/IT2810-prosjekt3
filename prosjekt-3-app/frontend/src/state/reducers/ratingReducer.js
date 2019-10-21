const ratingReducer = (state = {
    rateValue: "",
    lastValues: []
  }, action) => {
  switch (action.type) {
    case "RATE":
      return state = {
        ...state,
        rateValue: action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
    default:
      return state;
  }
};

export default ratingReducer;