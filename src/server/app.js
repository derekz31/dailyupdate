var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();
const healthdata = require('./api/health');
const users = require('./api/users');
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));

var mongoose = require('mongoose');
require("./config/passport")(passport);

mongoose.connect(process.env.NODE_DB || 'mongodb://localhost:27017/dailyupdate');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

app.use('/api/health', healthdata);
app.use('/api/users', users);

  // All other routes are handled by Angular
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });

  app.listen(app.get('port'), function() {
    console.log('Daily Update listening on port '+app.get('port'));
  });
});

module.exports = app;
