import * as types from '../actions/types';

const initialState = {
  jwtToken: '',
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_JWT_TOKEN_FROM_SERVER:
      localStorage.setItem('token', action.payload.data.jwtToken);
      return { jwtToken: action.payload.data.jwtToken, errorMessage: '' };

    case types.GOT_ERROR_MSSG_FROM_SERVER:
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};
