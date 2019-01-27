// @flow
import React from 'react';
import './Article.css';

type Props = {
  article: ArticleType,
};

const Article = function (props: Props): Object {
  const { article } = props;
  return (
    <div className="Single-article">
      <h4>{article.title}</h4>
      <p>{article.shortDescription}</p>
    </div>
  );
};

export default Article;
