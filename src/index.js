import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { compose, createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducer } from './redux/rootReducer';
import reportWebVitals from './reportWebVitals';
import { forbiddenWordsMiddleware } from './components/middleware';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
