// @flow
import { put, take } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

export default function* (): Generator<Promise<Object>, Object, Object> {
  while (true) {
    yield take('REQUEST_FETCH_ARTICLES');
    const raw = yield fetch('http://localhost:8080/api/v1/articles/-1');
    const articles = yield raw.json();
    yield put({ type: 'FETCHED_ARTICLES', articles });
  }
}
