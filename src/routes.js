import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './scenes/App';
import HomePage from './scenes/HomePage';
import About from './scenes/About';
import Articles from './scenes/Articles';
import Article from './scenes/Article';
import NewArticle from './scenes/NewArticle';
import NotFoundPage from './scenes/NotFoundPage';

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
