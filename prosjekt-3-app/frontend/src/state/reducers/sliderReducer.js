const sliderReducer = (state = {
    topValue: "",
    bottomValue: "",
    lastValues: []
  }, action) => {
  switch (action.type) {
    case "SLIDER":
      return state = {
        ...state,
        topValue: action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
    default:
      return state;
  }
};

export default sliderReducer;
