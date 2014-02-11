/** @jsx React.DOM */

var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      <div className="MainPage">
        Hello, anonymous!
        <a href="/users/andrey">Login</a>
      </div>
    )
  }
})
