import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import About from './components/About';
import Articles from './components/articles';
import Article from './components/Articles/show';
import NewArticle from './components/Articles/new';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={About}/>
    <Route path="articles" component={Articles}/>
    <Route path="articles/new" component={NewArticle} />

    <Route path="articles/:id" component={Article}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
)
