// @flow
import unionWith from 'lodash/unionWith';

export const articles = (state: Object = [], { type, articles: fetchedArticles }: Object) => {
  const articleEquality = (a = {}, b = {}) => a.id === b.id;

  if (type === 'FETCHED_ARTICLES') {
    return unionWith(state, fetchedArticles, articleEquality);
  }
  return state;
};
