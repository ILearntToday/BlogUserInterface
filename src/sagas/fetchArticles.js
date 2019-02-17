// @flow
import { put, call, takeEvery } from 'redux-saga/effects';
import { FETCH_ARTICLES } from '../constants/actionTypes';
import { loadArticles } from '../actions/loadArticles';
import { fetchArticles } from '../apis/fetchArticles';

export function* loadArticlesSaga(): Generator<Promise<Object>, Object, Object> {
  const articles = yield call(fetchArticles);
  yield put(loadArticles(articles.data));
}

export const sagas = [
  takeEvery(FETCH_ARTICLES, loadArticlesSaga),
];
