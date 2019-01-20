const increment = () => ({
  type: 'INCREMENT'
});

const decrement = () => ({
  type: 'DECREMENT'
});

export const Increment = () => dispatch => {
  dispatch(increment());
};

export const Decrement = () => dispatch => {
  dispatch(decrement());
};

// ---------------------------- //

const sessionSuccess = user => ({
  type: 'SESSION_SUCCESS',
  user
});

const sessionError = error => ({
  type: 'SESSION_ERROR',
  error
});

export const LoginUser = ({ email, password }) => dispatch => {
  if (!email || !password) {
    dispatch(sessionError());
    return;
  }
  dispatch(sessionSuccess({ user: { email: 'Ale@redux.com' } }));
};

// ---------------------------- //

const sessionLogout = () => ({
  type: 'SESSION_LOGOUT'
});

export const LogoutUser = () => dispatch => {
  dispatch(sessionLogout());
};
