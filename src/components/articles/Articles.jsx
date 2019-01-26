// @flow
import React from 'react';
import { connect } from 'react-redux';

import Article from '../article/Article';

type Props = {
  articles: Array<Object>,
};

const Articles = function (props: Props): Object {
  const { articles } = props;
  return (
    <div>
      {articles.map(a => <Article article={a} />)}
    </div>
  );
};

function mapStateToProps(state: Object): Object {
  return {
    articles: state.articles,
  };
}

export default connect(mapStateToProps)(Articles);
