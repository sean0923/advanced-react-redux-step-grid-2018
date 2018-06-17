import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import ProviderWithStore from './ProviderWithStore';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/pages/Signup';

ReactDom.render(
  <ProviderWithStore>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
      </App>
    </BrowserRouter>
  </ProviderWithStore>,
  document.getElementById('root')
);
