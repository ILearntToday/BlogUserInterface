// @flow
import { expect } from 'chai';
import * as types from '../../src/constants/actionTypes';
import { fetchArticles } from '../../src/actions/fetchArticles';

describe('Fetch article action', () => {
  it('raises an action for fetching article', () => {
    const expectedAction = {
      type: types.FETCH_ARTICLES,
    };

    expect(fetchArticles()).to.deep.equal(expectedAction);
  });
});
