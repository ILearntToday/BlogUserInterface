// @flow
import unionWith from 'lodash/unionWith';
import { LOAD_ARTICLES } from '../constants/actionTypes';

const defaultState = [];
export const articles = (state: Object = defaultState, action: Object) => {
  const articleEquality = (a = {}, b = {}) => a.id === b.id;

  if (action.type === LOAD_ARTICLES) {
    return unionWith(state, action.payload, articleEquality);
  }
  return state;
};
