import React from 'react';
import { render } from 'react-dom';

import App from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
// render(<div>Hello World!</div>, document.getElementById('root'));
