'use strict'

var React = require('react');
var ReactAPI = require('../../node_modules/react-api/build/react-api.js');

// The address of where to retrieve data
var URL = 'https://api.github.com/repos/levantrieu/react-github-api';

var RepoTree = React.createClass ({

//   getInitialState: function() {
//   return {
//     owner: [],
//   };
// },

  handleResponse: function(){
    // API response as a JavaScript object:
    console.log(this.refs.github.state.data);
  },

  render() {
    return (
      <div className="name">
        Hello World
        <ReactAPI ref='github' url={URL} callback={this.handleResponse} />
      </div>
    )
  }
});

module.exports = RepoTree;
