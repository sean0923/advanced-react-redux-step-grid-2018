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

describe('event at textarea', () => {
  // simulate user typeing 'I am input'

  const userInput = 'I am input';
  const e = {
    target: {
      value: userInput,
    },
  };
  
  beforeEach(() => {
    component.find('textarea').simulate('change', e);
    component.update();
  });

  it('let user to type input in textarea', () => {
    expect(component.find('textarea').props().value).toEqual(userInput);
  });

  it('empty text area after submit', () => {
    component.find('textarea').simulate('submit', e);
    component.update();

    expect(component.find('textarea').props().value).toEqual('');
  });
});
