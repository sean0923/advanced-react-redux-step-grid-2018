const initialState = {
  authenticated: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'value':
      return state;

    default:
      return state;
  }
};
