// @flow
import React from 'react';
import './Article.css';

const Article = function (props: Object): Object {
  const { article } = props;
  return (
    <div className="Single-article">
      <h4>{article.blogTitle.toString()}</h4>
      <p>{article.shortDescription.toString()}</p>
    </div>
  );
};

export default Article;
