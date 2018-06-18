import React from 'react';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

const ProviderWithStore = ({
  initialState = { auth: { jwtToken: localStorage.getItem('token') } },
  children,
}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(reduxThunk));
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWithStore;
