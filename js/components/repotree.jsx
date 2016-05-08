'use strict'

var React = require('react');
// var ReactAPI = require('../../node_modules/react-api/build/react-api.js');

import API from './apiendpoint.jsx';

var RepoTree = React.createClass({

  render: function() {
    return (
      <div>
        hello world
        <API source='https://api.github.com/repos/levantrieu/react-github-api/git/trees/master?recursive=1' />
      </div>
    );
  }
});

module.exports = RepoTree;


// 'use strict'
//
// var React = require('react');
// var ReactAPI = require('../../node_modules/react-api/build/react-api.js');
// var Request = require('superagent');
// var _ = require('lodash');
//
//
// var RepoTree = React.createClass ({
//
//   componentWillMount: function() {
//     var url = "https://api.github.com/repos/levantrieu/react-github-api";
//     Request.get(url).then((response) => {
//       this.setState({
//         owner: response,
//       });
//     });
//   },
//
//   render() {
//     var movies = _.map(this.state.movie, (movie) => {
//       return <li>{movie.Title}</li>;
//     });
//     return (
//       <div className="container">
//         <ul>{movies}</ul>
//       </div>
//     )
//   }
// });
//
// module.exports = RepoTree;



  // 'use strict'
  //
  // var React = require('react');
  // var ReactAPI = require('../../node_modules/react-api/build/react-api.js');
  //
  // // The address of where to retrieve data
  // var URL = 'https://api.github.com/repos/levantrieu/react-github-api';
  //
  // var RepoTree = React.createClass ({
  //
  //   handleResponse: function(){
  //     // API response as a JavaScript object:
  //     console.log(this.refs.github.state.data);
  //   },
  //
  //   render() {
  //     return (
  //       <div className="container">
  //         Hello World
  //         <ReactAPI
  //           ref='github'
  //           url={URL}
  //           callback={this.handleResponse} />
  //       </div>
  //     )
  //   }
  // });
  //
  // module.exports = RepoTree;
