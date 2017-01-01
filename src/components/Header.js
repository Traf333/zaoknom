import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function Header(props) {
  return (
    <header>
      <ul>
        <li><Link to='articles'>Articles</Link></li>
        <li><Link to='about'>About</Link></li>
      </ul>
    </header>
  );
}
Header.propTypes = {
};
