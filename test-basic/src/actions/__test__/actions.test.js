import * as actions from '../actions';
import * as types from '../types';

it('save comment', () => {
  const comment = 'i am comment in action';
  const outputObj = actions.saveComment(comment);

  expect(outputObj).toEqual({
    type: types.SAVE_COMMENT,
    payload: comment,
  });
});
