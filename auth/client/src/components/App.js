import React from 'react';

import Header from './app/Header';

import { connect } from 'react-redux';

const App = props => {
  console.log('props: ', props);

  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default connect(state => state)(App);
