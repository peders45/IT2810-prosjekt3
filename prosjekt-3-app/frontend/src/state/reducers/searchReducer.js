const searchReducer = (state = {
  searchWord: "",
  menus: [],
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
  default:
    return state;
}
};

export default searchReducer;