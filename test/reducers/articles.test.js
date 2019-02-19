// @flow
import { expect } from 'chai';
import { FETCH_ARTICLES, LOAD_ARTICLES } from '../../src/constants/actionTypes';
import { articles } from '../../src/reducers';

describe('Articles reducer', () => {
  const articlesPayload = [{
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

  it('loads articles to store', () => {
    const data = articles([], { type: LOAD_ARTICLES, payload: articlesPayload });
    expect(data).to.deep.equal(articlesPayload);
  });

  describe('when different action type', () => {
    it('returns current state', () => {
      const data = articles(articlesPayload, { type: FETCH_ARTICLES, payload: articlesPayload });
      expect(data).to.deep.equal(articlesPayload);
    });
  });

  describe('when no argument passed', () => {
    it('returns initial state', () => {
      const data = articles();
      expect(data).to.deep.equal({ articles: [{}] });
    });
  });

  describe('when new article is added', () => {
    it('unions payload with current state', () => {
      const initialState = [{
        id: '101',
        parent_Id: '-1',
        timestamp: '2019-02-18',
        title: 'Jest',
        shortDescription: 'Jest: Unit test framework',
        fullDescription: 'Jest: React unit test framework',
        userId: 'user-1',
        numberOfLikes: '1',
      }, {
        id: '103',
        parent_Id: '-1',
        timestamp: '2019-02-18',
        title: 'Jest',
        shortDescription: 'Jest: Unit test framework',
        fullDescription: 'Jest: React unit test framework',
        userId: 'user-1',
        numberOfLikes: '1',
      }];
      const data = articles(initialState, { type: LOAD_ARTICLES, payload: articlesPayload });
      const expected = [{
        id: '101',
        parent_Id: '-1',
        timestamp: '2019-02-18',
        title: 'Jest',
        shortDescription: 'Jest: Unit test framework',
        fullDescription: 'Jest: React unit test framework',
        userId: 'user-1',
        numberOfLikes: '1',
      }, {
        id: '103',
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
      expect(data).to.deep.equal(expected);
    });
  });
});
