// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
var UserAgent = require('user-agents');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



// API endpoint Who Am I
app.get('/api/whoami', function (req, res) {
  // ip:
  var ip = req.ip;

  // language:
  var userLang = req.headers["accept-language"];

  // software:
  const userAgent = new UserAgent();

  res.json({ ipaddress: ip, language: userLang, software: userAgent.toString()});
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
