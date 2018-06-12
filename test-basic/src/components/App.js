import React from 'react';
import { Route } from 'react-router-dom';

import CommentBox from './app/CommentBox';
import CommentList from './app/CommentList';

const App = () => {
  return (
    <div>
      <div>App</div>
      <Route path="/box" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

export default App;
