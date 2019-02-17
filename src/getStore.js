// @flow
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas/rootSaga';
import * as reducers from './reducers';

export default function (defaultState: Object = {}): Object {
  const sagaMiddleware = createSagaMiddleware();

  const middlewareChain = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewareChain.push(logger);
  }

  const store = createStore(combineReducers({
    ...reducers,
    router,
  }), defaultState, composeWithDevTools(applyMiddleware(...middlewareChain)));

  sagaMiddleware.run(rootSaga);

  return store;
}
