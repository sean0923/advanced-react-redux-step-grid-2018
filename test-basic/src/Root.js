import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, {});

const Root = props => {
  return <Provider store={store}>{props.children}</Provider>;
};
export default Root;
