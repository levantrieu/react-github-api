'use strict'

var React = require('react');

import API from './apiendpoint.jsx';

var RepoTree = React.createClass({

  render: function() {
    return (
      <div>
        <API source='https://api.github.com/repos/levantrieu/react-github-api/git/trees/master?recursive=1' />
      </div>
    );
  }
});

module.exports = RepoTree;
