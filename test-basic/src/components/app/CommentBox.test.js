import React from 'react';
import { mount } from 'enzyme';

import CommentBox from './CommentBox';

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  // for clean up
  component.unmount();
});

it('has textarea and a button', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
});

it('let user to type input in textarea', () => {
  const userInput = 'I am input';
  const e = {
    target: {
      value: userInput,
    },
  };
  component.find('textarea').simulate('change', e);
  component.update();
  expect(component.find('textarea').props().value).toEqual(userInput);
});
