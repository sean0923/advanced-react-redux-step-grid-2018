import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ProviderWithStore from './ProviderWithStore';
import App from './components/App';

ReactDom.render(
  <ProviderWithStore>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProviderWithStore>,
  document.getElementById('root')
);
