// @flow
import React from 'react';
import './Article.css';

type Props = {
  article: ArticleType,
};

const Article = function (props: Props): Object {
  const { article } = props;
  return (
    <div className="single-article">
      <h4 className="article-title">{article.title}</h4>
      <p className="article-short-description">{article.shortDescription}</p>
    </div>
  );
};

export default Article;
