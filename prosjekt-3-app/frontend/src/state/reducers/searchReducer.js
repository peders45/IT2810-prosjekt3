const searchReducer = (state = {
  menus: [],
  status: "",
  error: []
}, action) => {
switch (action.type) {
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