export const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export const sessionReducer = (state = { user: null, isLogged: false, hasError: false }, action) => {
  switch (action.type) {
    case 'SESSION_SUCCESS':
      return {
        ...state,
        user: action.user,
        isLogged: true
      };
    case 'SESSION_ERROR':
      return {
        ...state,
        hasError: true
      };
    case 'SESSION_LOGOUT':
      return {
        ...state,
        isLogged: false
      };
    default:
      return state;
  }
};
