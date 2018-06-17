const initialState = {
  authenticated: '',
  errorMssage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'value':
      return state;

    default:
      return state;
  }
};
