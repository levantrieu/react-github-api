'use strict'

import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

//Components

import API           from './components/apiendpoint.jsx';
import RepoTree      from './components/repotree.jsx';
import NotFound      from './components/404.jsx';

var GitHubTree = React.createClass({

  render: function() {
    return (
      <Router history={browserHistory}>
        <Redirect from='/' to='/repotree' />
        <Route path='/repotree' component={RepoTree} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
});

ReactDOM.render(<GitHubTree />, document.querySelector('.container'));
