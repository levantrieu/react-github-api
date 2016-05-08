'use strict'

var React = require('react');

var API = React.createClass ({

  getInitialState: function() {
    return {
      repo: []
    };
  },

  componentDidMount: function() {
    var self = this;
    $.get(this.props.source, function(result) {
      var files = result.tree;
      if (this.isMounted()) {
        this.setState({
          repo: files
        });
      }
    }.bind(this));
  },

  render: function() {
    var projectFiles = this.state.repo || [];
    return (
      <div>
        {projectFiles.map(function(result, i){
          return (
            <ul key={result + i}>
              <li>{result.path}</li>
            </ul>
          )
        })}
      </div>
    );
  }
});

module.exports = API;
