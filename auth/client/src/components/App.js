import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './app/Header';

import { connect } from 'react-redux';

import Welcome from './Welcome';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import Feature from './pages/Feature';

const App = props => {
  console.log('props: ', props);

  return (
    <div>
      <Header />
      <Switch>
        {/* <Route path="/signin" component={Signin} /> */}
        {/* <Route path="/signup" component={Signup} /> */}
        {/* <Route path="/signout" component={Signout} /> */}
        <Route path="/feature" component={Feature} />
        <Route exact path="/" component={Welcome} />
      </Switch>
    </div>
  );
};

export default connect(state => state)(App);
