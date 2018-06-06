import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from '../app/CommentBox';

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  // for clean up
  component.unmount();
});

it('has 1 textarea', () => {
  expect(component.find('textarea').length).toEqual(1);
});

it('has 2 buttons', () => {
  expect(component.find('button').length).toEqual(2);
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
