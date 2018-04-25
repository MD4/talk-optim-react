import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from './containers/App.container';

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root'),
);

registerServiceWorker();

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}
