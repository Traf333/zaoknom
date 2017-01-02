import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './Header.css'

export default function Header(props) {
  return (
    <header className="header">
        <div className="header-item"><Link to='/articles'>Articles</Link></div>
        <div className='header-item'><Link to='/about'>About</Link></div>
    </header>
  );
}
Header.propTypes = {
};
