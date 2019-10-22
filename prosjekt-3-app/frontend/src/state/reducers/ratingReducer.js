const ratingReducer = (state = {
    rateValue: 0,
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