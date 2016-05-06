'use strict'

import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

//Components

import Welcome      from './components/welcome.jsx';
import Questions    from './components/questions.jsx';

var GitHubTree = React.createClass({

  render: function() {
    return (
      <Router history={browserHistory}>
        <Redirect from='/' to='/welcome' />
        <Route path='/welcome' component={Welcome} />
        <Route path='/questions' component={Questions} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
});

ReactDOM.render(<GitHubTree />, document.querySelector('.container'));
