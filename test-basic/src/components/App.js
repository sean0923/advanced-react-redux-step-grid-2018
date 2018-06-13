import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './app/Navbar';
import CommentBox from './app/CommentBox';
import CommentList from './app/CommentList';

import requireAuth from './requireAuth';

const App = () => {
  return (
    <div>
      <Navbar />
      <div>App</div>
      <Route path="/box" component={requireAuth(CommentBox)} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

export default App;
