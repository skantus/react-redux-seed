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
