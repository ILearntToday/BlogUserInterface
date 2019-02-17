// @flow
import * as types from '../constants/actionTypes';

const {
  FETCH_ARTICLES,
} = types;

export function fetchArticles(): ArticleAction {
  return {
    type: FETCH_ARTICLES,
  };
}
