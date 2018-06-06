import * as types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case types.SAVE_COMMENT:
      return [...state, action.payload];

    case types.GET_COMMENTS_FROM_JSON_PLACEHOLDER:
      const comments = action.payload.data.map(({ name }) => name);
      return [...state, ...comments];
      
    default:
      return state;
  }
};
