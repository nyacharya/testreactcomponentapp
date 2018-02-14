import React from 'react';
import ReactDOM from 'react-dom';
import Main from './router';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers/'
// import Fancy from 'react-fancy-component';


const createStoreWithMiddleware = applyMiddleware(
    promise,
    thunk
  )(createStore);
  
  ReactDOM.render  (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter ><Main /></BrowserRouter >
      </Provider>
      , document.getElementById("root"));
  