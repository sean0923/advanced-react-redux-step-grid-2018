import * as actions from '../../actions/actions';
import * as types from '../../actions/types';

import commentsReducer from '../commentsReducer';

it('return comment when save comment actions is invoked', () => {
  const comment = 'i am comment';

  const action = {
    type: types.SAVE_COMMENT,
    payload: comment,
  };

  // expect(commentsReducer(action)).toEqaul(comment);
  expect(commentsReducer([], action)).toEqual([comment]);
});
