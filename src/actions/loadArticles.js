// @flow
import * as types from '../constants/actionTypes';

const {
  LOAD_ARTICLES,
} = types;

export function loadArticles(articles: Array<ArticleType>): ArticleAction {
  return {
    type: LOAD_ARTICLES,
    payload: articles,
  };
}
