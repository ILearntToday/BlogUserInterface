// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Provider from 'react-redux/es/components/Provider';
import App from './components/App/App';
import getStore from './getStore';
import * as serviceWorker from './serviceWorker';
import { fetchArticles } from './actions/fetchArticles';

const store = getStore();
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
store.dispatch(fetchArticles());
