'use strict'

var React = require('react');
// var ReactAPI = require('../../node_modules/react-api/build/react-api.js');


var API = React.createClass ({

  getInitialState: function() {
    return {
      tree: '',
      blob: ''
    };
  },

  componentWillMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var files = result.tree;
      this.setState({
        tree: files.type,
        blob: files.type
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
        <ul>
          {this.state.tree}
          <li>{this.state.blob}</li>
        </ul>
      </div>
    );
  }
});

module.exports = API;
