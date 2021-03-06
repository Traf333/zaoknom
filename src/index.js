import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes.js';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
