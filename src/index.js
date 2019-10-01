import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from "./redux/store";

ReactDOM.render(
  // provider is component from redux which i need to use to provide state
  // obalí naší aplikaci a předá store
  <Provider store={store} >
    <BrowserRouter>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
);


