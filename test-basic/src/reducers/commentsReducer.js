import * as types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case types.SAVE_COMMENT:
      return action.payload;

    default:
      return state;
  }
};
