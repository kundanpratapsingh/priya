import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import WebFontLoader from 'webfontloader';
import {Provider} from 'react-redux';
import configStore from './store/configStore';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});
const store=configStore();

ReactDOM.render(
  <Provider store={store}>  
  <App />
  </Provider>,
  document.getElementById('root')
)

