import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import About from './components/About';
import Articles from './components/Articles';
import Article from './components/Article';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={About}/>
    <Route path="articles" component={Articles} />
    <Route path="article/:articleId" component={Article}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
)
