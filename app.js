var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/*', function (req, res) {
  res.sendfile('index.html', { root: path.join(__dirname, '/dist') });
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App is running at localhost', port);
});
