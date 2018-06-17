import * as types from '../actions/types';

const initialState = {
  jwtTocken: '',
  errorMssage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_JWT_TOKEN_FROM_SERVER:
      return { ...state, jwtTocken: action.payload.data };

    default:
      return state;
  }
};
