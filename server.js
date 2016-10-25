const express = require('express');
const dashboard = require('./public/app.js')
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, email, auth_token, id')
  res.header('Access-Control-Allow-Methods', 'POST, GET')
  next()
})
const port = 8080;

app.get('/', function (req, res) {
  res.send('Welcome to ACUO');
});
app.get('/json', function (req, res) {
  res.send(dashboard);
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
