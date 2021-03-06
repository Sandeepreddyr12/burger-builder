import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import burgerbuildreducer from './redux/reducers/burgerbuilder';
import orderNowreducer from './redux/reducers/OrderNow';
import authReducer from './redux/reducers/auth';
import cartReducer from './redux/reducers/cart';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
  bbreducer: burgerbuildreducer,
  orderNowreducer: orderNowreducer,
  authReducer: authReducer,
  cartReducer : cartReducer,
})

const store = createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
