// @flow
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { loadArticlesSaga } from '../../src/sagas/fetchArticles';
import { loadArticles } from '../../src/actions/loadArticles';
import { fetchArticles } from '../../src/apis/fetchArticles';

describe('Fetch articles saga', () => {
  const articles = [{
    id: '101',
    parent_Id: '-1',
    timestamp: '2019-02-18',
    title: 'Jest',
    shortDescription: 'Jest: Unit test framework',
    fullDescription: 'Jest: React unit test framework',
    userId: 'user-1',
    numberOfLikes: '1',
  }, {
    id: '102',
    parent_Id: '-1',
    timestamp: '2019-02-18',
    title: 'Jest',
    shortDescription: 'Jest: Unit test framework',
    fullDescription: 'Jest: React unit test framework',
    userId: 'user-1',
    numberOfLikes: '1',
  }];

  it('should get articles from API and puts articles in the store', () => expectSaga(loadArticlesSaga)
    .provide([
      [matchers.call.fn(fetchArticles), { data: articles }],
    ])
    .put(loadArticles(articles))
    .run());
});
