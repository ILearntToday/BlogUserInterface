// @flow
import unionWith from 'lodash/unionWith';
import { LOAD_ARTICLES } from '../constants/actionTypes';

type articlesState = {
  articles: Array<ArticleType>,
};
const initialState = {
  articles: [{}],
};

export const articles = (state: articlesState = initialState, action: ArticleAction = {}) => {
  const articleEquality = (a, b) => a.id === b.id;

  if (action.type === LOAD_ARTICLES) {
    return unionWith(state, action.payload, articleEquality);
  }
  return state;
};
