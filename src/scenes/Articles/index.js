import React, { PropTypes } from 'react';

import Button from '../buttons';

export default function Articles(props) {
  return (
    <div>
      <h2>
        Articles
      </h2>
      <div className="right"><Button label='New article' primary onClick={() => props.router.push('/articles/new')}/></div>
    </div>
  );
}
