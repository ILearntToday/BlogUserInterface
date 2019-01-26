// @flow
import React from 'react';
import { connect } from 'react-redux';

import Article from '../article/Article';

type Props = {
  articles: Array<ArticleType>,
};

function mapStateToProps(state: Object): Object {
  return {
    articles: state.articles,
  };
}

const Articles = function (props: Props): Object {
  const { articles } = props;
  return (
    <div>
      {articles.map(article => <Article key={article.id} article={article} />)}
    </div>
  );
};

export default connect(mapStateToProps)(Articles);
