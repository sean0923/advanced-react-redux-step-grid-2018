import React from 'react';
import ReactDom from 'react-dom';

import App from '../components/App';

it('shows comment box component', () => {
  const div = document.createElement('div');

  ReactDom.render(<App />, div);

  console.log('div.innerHTML: ', div.innerHTML);

  // clear up nodes
  ReactDom.unmountComponentAtNode(div);
});
