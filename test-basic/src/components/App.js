import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './app/Navbar';
import CommentBox from './app/CommentBox';
import CommentList from './app/CommentList';

const App = () => {
  return (
    <div>
      <Navbar />
      <div>App</div>
      <Route path="/box" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

export default App;
