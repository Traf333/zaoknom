import React, { PropTypes } from 'react';
export default function Article(props) {
  return (
    <h1>Article  {props.params.id}</h1>
  );
}
Article.propTypes = {
};
