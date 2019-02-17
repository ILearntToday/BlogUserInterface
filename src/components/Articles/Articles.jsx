// @flow
import React from 'react';
import { connect } from 'react-redux';

import Article from '../Article/Article';

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
  if (!articles.length) {
    return <span className="empty-message">No articles to display</span>;
  }

  return (
    <div className="list-articles">
      {articles.map(article => <Article className="article" key={article.id} article={article} />)}
    </div>
  );
};

export default connect(mapStateToProps)(Articles);
