import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreContext} from 'redux-react-hook';
import configureStore from './store';

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={configureStore()}>
      <App />
    </StoreContext.Provider >
  </React.StrictMode>,
  document.getElementById('root')
);
