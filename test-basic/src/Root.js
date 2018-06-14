import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';

import myReduxPromise from './middlewares/myReduxPromise';
import typeCheckMiddleware from './middlewares/typeCheckMiddleware';

import rootReducer from './reducers/rootReducer';

const Root = ({ children, initialState = {} }) => {
  // const store = createStore(rootReducer, initialState, applyMiddleware(reduxPromise));
  // const store = createStore(rootReducer, initialState, applyMiddleware(myReduxPromise));
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(myReduxPromise, typeCheckMiddleware)
  );
  // const store = createStore(rootReducer, initialState, applyMiddleware());

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
