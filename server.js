var express = require('express'),
    browserify = require('connect-browserify'),
    serverMiddleware = require('react-async-middleware'),
    ReactMount = require('react/lib/ReactMount'),
    jsx = require('node-jsx')

ReactMount.allowFullPageRender = true

jsx.install({extension: '.jsx'})

var debug = process.env.NODE_ENV !== 'production';

var api = express()
  .get('/users/:username', function(req, res) {
    res.send({username: req.params.username});
  })

express()
  .get('/bundle.js', browserify({entry: './client', extensions: ['.jsx', '.js', '.json'], debug: debug, watch: debug}))
  .use('/api', api)
  .use(serverMiddleware(require('./src/Application')))
  .listen(3000)
