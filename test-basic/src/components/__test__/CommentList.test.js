import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from '../app/CommentList';

let component;
let initialState;

beforeEach(() => {
  initialState = {
    comments: ['comment1', 'comment2'],
  };

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('has same number of <li> as comments', () => {
  expect(component.find('li').length).toEqual(2);
});

it('has same number of <li> as comments', () => {
  const allText = component.render().text();
  
  expect(allText).toContain('comment1');
  expect(allText).toContain('comment2');
});
