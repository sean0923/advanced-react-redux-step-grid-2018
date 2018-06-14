import * as types from '../actions/types';

const isNumber = originInput => parseInt(originInput, 10).toString() === originInput;

export default ({ dispatch }) => next => action => {
  // type must be SAVE_COMMENT
  if (action.type !== types.SAVE_COMMENT) {
    next(action);
  }

  // if it has to have payload
  if (!action.payload) {
    console.log('must provide payload');
    next(action);
  }

  // payload cannot be number
  if (isNumber(action.payload)) {
    console.log('payload cannot be a number');
    next(action);
  }
};
