/** @jsx React.DOM */

var React = require('react'),
    ReactAsync = require('react-async'),
    superagent  = require('superagent')

module.exports = ReactAsync.createClass({
  getInitialStateAsync: function(callback) {
    superagent
      .get('http://localhost:3000/api/users/' + this.props.username)
      .end(function(err, res) {
        callback(err, res && res.body)
      })
  },

  render: function() {
    return (
      <div className="UserPage">
        {this.state.username ? 'Hello, ' + this.state.username : 'Loading...'}
      </div>
    )
  }
})
