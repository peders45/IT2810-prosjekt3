const categoryReducer = (state = {
    category: [],
    lastValues: []
  }, action) => {
  switch (action.type) {
    case "CATEGORY_CHECK":
      return state = {
        ...state,
        category: [...state.category, action.payload],
        lastValues: [...state.lastValues, action.payload]
      };
      case "CATEGORY_UNCHECK":
      const newCategories = state.category.filter(category => category !== action.payload);
        return state = {
          ...state,
          category: newCategories,
          lastValues: [...state.lastValues]
        };
    default:
      return state;
  }
};

export default categoryReducer;
