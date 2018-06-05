import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

import CommentBox from '../components/app/CommentBox';
import CommentList from '../components/app/CommentList';

it('has one CommentBox component', () => {
  const component = shallow(<App />);

  expect(component.find(CommentBox).length).toEqual(1);
});

it('has one CommentList component', () => {
  const component = shallow(<App />);

  expect(component.find(CommentList).length).toEqual(1);
});
