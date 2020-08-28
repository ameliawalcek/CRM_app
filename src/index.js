import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import { CRMStore } from './stores/CRMStore'
import { InputStore } from './stores/InputStore';

let crmStore = new CRMStore()
let inputStore = new InputStore()
let stores = { crmStore, inputStore }

ReactDOM.render(
  <Provider {...stores}>
      <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
