import React, { PropTypes } from 'react';
export default function Article(props) {
  return (
    <div>Article  {props.params.articleId}</div>
  );
}
Article.propTypes = {
};
