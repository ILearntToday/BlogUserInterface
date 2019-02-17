// @flow
import { all } from 'redux-saga/effects';
import { sagas } from './fetchArticles';

export default function* rootSaga(): Generator<Promise<Object>, Object, Object> {
  yield all([
    ...sagas,
  ]);
}
