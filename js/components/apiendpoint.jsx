'use strict'

var React = require('react');
var ReactAPI = require('../../node_modules/react-api/build/react-api.js');


var API = React.createClass ({

  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  // handleResponse: function(){
  //   // API response as a JavaScript object:
  //   console.log(this.refs.github.state.data);
  // },

  componentWillMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var lastGist = result[0];
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        hello world api
        {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

module.exports = API;
