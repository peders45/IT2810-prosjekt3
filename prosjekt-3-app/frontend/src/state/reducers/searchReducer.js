const searchReducer = (state = {
  searchWord: "",
  menus: [],
  category: [],
  sliderMaxCalories: 1880,
  sliderRating: 0,
  sortCategory: "",
  sortValue: null,
  status: "",
  error: []
}, action) => {
switch (action.type) {
  case "SEARCHWORD":
    return state = {
      ...state,
      searchWord: action.payload
    };
  case "MENU_REQUESTED":
    return state = {
      ...state,
      status: "menu waiting"
      };
  case "MENU_RECEIVED":
    return state = {
      ...state,
      menus: action.payload.data.menu,
      status: "menu received"
      };
    case "MENU_FAILED":
    return state = {
      ...state,
      error: action.payload,
      status: "menu failed"
      };
    case "RATING_REQUESTED":
      return state = {
        ...state,
        status: "rating waiting"
      };
    case "RATING_RECEIVED":
      return state = {
        ...state,
        menus: action.payload,
        status: "rating received"
      };
    case "RATING_FAILED":
    return state = {
      ...state,
      error: action.payload,
      status: "rating failed"
      };
    case "CATEGORY_CHECK":
      return state = {
        ...state,
        category: [...state.category, action.payload]
      };
    case "CATEGORY_UNCHECK":
      const newCategories = state.category.filter(category => category !== action.payload);
      return state = {
        ...state,
        category: newCategories
      };
    case "SLIDER_CALORIES":
      return state = {
        ...state,
        sliderMaxCalories: action.payload
      };
    case "SLIDER_RATING":
      return state = {
        ...state,
        sliderRating: action.payload
      };
    case "SORT":
      return state = {
        ...state,
        sortCategory: action.payload.sortCategory,
        sortValue: action.payload.sortValue
      };
  default:
    return state;
}
};

export default searchReducer;