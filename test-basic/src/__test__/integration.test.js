import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from '../components/App';

import { jsonPlaceholderUrl } from '../actions/actions';

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <App />
    </Root>
  );

  moxios.install();
  moxios.stubRequest(jsonPlaceholderUrl, {
    status: 200,
    response: [{ name: 'name1' }, { name: 'name2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
  component.unmount();
});

it('display fetched comment when fet btn is clicked', done => {
  component.find('.fetch-btn').simulate('click');

  moxios.wait(() => {
    component.update();
    const numOfLiTag = component.find('li').length;
    expect(numOfLiTag).toEqual(2);
    done();
  });
});
