var express = require('express'),
    middleware = require('./lib/middleware'),
    path = require('path')

var api = express()
  .get('/users/:username', function(req, res) {
    res.send({username: req.params.username});
  })

var app = module.exports = express()
app.use('/api', api)
app.use(middleware(path.resolve('./client')))

if (!module.parent) {
  app.listen(process.env.PORT || 3000)
}
