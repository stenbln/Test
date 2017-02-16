import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './index.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Editor from './pages/Editor';
import Featured from './pages/Featured';
import Settings from './pages/Settings';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="editor" component={Editor}></Route>
            <Route path="settings" component={Settings}></Route>
        </Route>
    </Router>,
  document.getElementById('root')
);
