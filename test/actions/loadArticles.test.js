// @flow
import { expect } from 'chai';
import * as types from '../../src/constants/actionTypes';
import { loadArticles } from '../../src/actions/loadArticles';

describe('Load article action', () => {
  const articles = {};
  it('raises an action for data success', () => {
    const expectedAction = {
      type: types.LOAD_ARTICLES,
      payload: articles,
    };

    expect(loadArticles(articles)).to.deep.equal(expectedAction);
  });
});
