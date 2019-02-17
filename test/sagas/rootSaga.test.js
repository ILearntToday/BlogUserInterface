// @flow
import { expect } from 'chai';
import { fork, takeEvery } from 'redux-saga/effects';
import rootSaga from '../../src/sagas/rootSaga';
import { FETCH_ARTICLES } from '../../src/constants/actionTypes';
import { loadArticlesSaga } from '../../src/sagas/fetchArticles';

describe('Fetch root saga', () => {
  it('should fork all other sagas', () => {
    const generator = rootSaga();
    expect(generator.next().value.ALL[0].toString()).to.deep.equal(fork(takeEvery, FETCH_ARTICLES, loadArticlesSaga).toString());
    expect(generator.next().done).to.equal(true);
  });
});
