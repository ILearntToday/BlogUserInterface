// @flow
import fetch from '../utils/fetch';
import { FETCH_ARTICLE_API } from '../constants/urls';

export function fetchArticles(): Object {
  return fetch.get(FETCH_ARTICLE_API);
}
