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
      status: "waiting"
    };
  case "MENU_RECEIVED":
    return state = {
      ...state,
      menus: action.payload.data.menu,
      status: "received"
    };
    case "MENU_FAILED":
    return state = {
      ...state,
      error: action.payload,
      status: "received"
    };
  default:
    return state;
}
};

export default searchReducer;