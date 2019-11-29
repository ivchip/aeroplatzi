const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload !== undefined ? action.payload : {},
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: false,
        register: action.payload,
      };
    case 'SEARCH_REQUEST':
      return {
        ...state,
        routes: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
