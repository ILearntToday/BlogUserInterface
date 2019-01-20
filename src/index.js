// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Provider from 'react-redux/es/components/Provider';
import App from './App';
import getStore from './getStore';
import * as serviceWorker from './serviceWorker';

const store = getStore();
const fetchArticles = () => {
  store.dispatch({ type: 'REQUEST_FETCH_ARTICLES' });
};

const root = document.getElementById('root');
if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root,
  );
}

serviceWorker.unregister();
fetchArticles();
