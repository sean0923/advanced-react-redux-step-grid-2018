import React from 'react';
import { shallow } from 'enzyme';

import Root from 'Root';
import CommentList from '../app/CommentList';

let component;

beforeEach(() => {
  component = shallow(
    <Root>
      <CommentList />
    </Root>
  );
});

it('has same number of <li> as comments', () => {
  expect(1).toEqual(2);
});
